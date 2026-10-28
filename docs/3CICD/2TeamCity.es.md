# TeamCity

Los productos Flexygo se compilan en TeamCity a partir de una plantilla común, **Template flexygo products core**. Cada producto crea su configuración de build desde ella y solo rellena sus parámetros: los pasos, los artefactos y el número de versión vienen de la plantilla.

Para la idea general del pipeline, válida en cualquier herramienta, consulta la [visión general](1Overview.md).

---

## Crear la configuración de un producto

1. En TeamCity, dentro del proyecto de productos, crea una **Build Configuration** nueva a partir de la plantilla **Template flexygo products core**.
2. Rellena sus parámetros en **Parameters**:

| Parámetro | Qué es | Ejemplo |
|---|---|---|
| `ProductName` | Prefijo de los proyectos de la solución, los de la [plantilla de producto](../2ProductDevelopment/2Template.md): `<ProductName>.Frontend`, `.Backend`, `.Conf.Database`, `.Data.Database`, `.UnitTest` e `.InterfaceTest` | `MiProducto` |
| `ProductGitUrl` | Dirección del repositorio del producto | — |
| `ProductBranch` | Rama que se compila | `develop` |
| `DEVEXPRESS_API` | Clave del feed NuGet de DevExpress | — |
| `env.msbuild.debugrelease` | Configuración de compilación | `release` |

!!! warning "Credenciales"
    Las claves y contraseñas (la de DevExpress, la del SQL Server de las bases de prueba, la de publicar NuGets) van en parámetros de tipo **Password**, para que TeamCity las enmascare en los logs. Nunca se escriben en el texto de un paso.

<figure markdown="span">
  ![La página Parameters de un producto creado desde la plantilla](../docs_assets/images/CoreCICD/ci-cd/teamcity-parameters.png)
  <figcaption>Los parámetros heredados de la plantilla, rellenados para un producto; la clave de DevExpress sale enmascarada</figcaption>
</figure>

La configuración usa la raíz VCS común de los productos con **clean checkout**, así que cada build parte de una copia limpia.

---

## Los pasos

La plantilla tiene 19 pasos. Se agrupan así:

<figure markdown="span">
  ![Los pasos 1 a 10 de la plantilla](../docs_assets/images/CoreCICD/ci-cd/teamcity-build-steps-1.png)
  ![Los pasos 11 a 19 de la plantilla](../docs_assets/images/CoreCICD/ci-cd/teamcity-build-steps-2.png)
  <figcaption>Los 19 pasos de la plantilla, con su tipo, lo que ejecutan y cuándo: el último se ejecuta aunque falle algo antes</figcaption>
</figure>

### 1. Restaurar

| Paso | Qué hace |
|---|---|
| Restaurar paquetes NuGet | `dotnet restore <ProductName>.sln` con cuatro orígenes: nuget.org, DevExpress (con `%DEVEXPRESS_API%`) y los dos feeds NuGet de Flexygo, el estable y el beta. |

### 2. Publicar

| Paso | Qué hace |
|---|---|
| Publicar frontend | `dotnet publish` en Release a `publish\<ProductName>\<ProductName>.Frontend`, con `Version`, `FileVersion` e `InformationalVersion` (el número de build y el commit). |
| Publicar backend | Lo mismo, a `publish\<ProductName>\<ProductName>.Backend`. |
| Publicar Unit Test Producto | Publica el proyecto `<ProductName>.UnitTest` en la carpeta del Backend publicado. |

!!! warning "Node.js en el agente"
    El Frontend compila TypeScript con `node`. Si el agente no lo tiene, la publicación del Frontend falla con `MSB6003`.

### 3. Bases de datos

| Paso | Qué hace |
|---|---|
| Compilar BBDD CONFIG | `dotnet build` de `<ProductName>.Conf.Database.sqlproj` en Release, con `/p:DacVersion=%build.number%`. |
| Publicar BBDD CONFIG | Publica el dacpac con `sqlpackage /Action:Publish` en una base de pruebas, `<ProductName>BD_IC`, del SQL Server de pruebas: la crea de cero, con la versión del dacpac igual al número de build. Si sqlpackage falla, el paso falla. |
| Compilar BBDD Datos | Lo mismo con `<ProductName>.Data.Database.sqlproj`. |
| Publicar BBDD Datos | Lo mismo, en la base de datos de pruebas del producto. |

Así cada build comprueba que las dos bases se compilan y se publican de verdad, no solo que el proyecto compila.

### 4. Arrancar la aplicación y probar

| Paso | Qué hace |
|---|---|
| Crear fichero de inicio | Escribe `publish\<ProductName>\run_windows.bat`, que arranca el Frontend y el Backend con Kestrel. |
| Cambiar test config file | Guarda una copia limpia de los `conf\appsettings.json` publicados y les pone las cadenas de conexión de las bases de pruebas, las direcciones locales (Frontend `http://localhost:7111`, Backend `http://localhost:7110/api/backend/`) y el correo como configurado. Arranca la aplicación y comprueba que responde. |
| Ejecutar test unitarios | `dotnet test` de `Flexygo.UnitTest.dll`, los tests del núcleo, desde la carpeta del Backend publicado. |
| Ejecutar Unit Test Producto | `dotnet test` de `<ProductName>.UnitTest.csproj`. |
| Ejecutar test interfaz | `dotnet test` de `<ProductName>.InterfaceTest.csproj`, contra la aplicación arrancada. |
| Limpiar appsettings | Borra los `appsettings.local.json` publicados y devuelve los `appsettings.json` limpios: deshace lo del paso «Cambiar test config file». |

Los tres pasos de test usan el SDK de .NET 6.

### 5. Generar los NuGets

| Paso | Qué hace |
|---|---|
| Generar NuGet Frontend | `NuGet pack` de `<ProductName>.Frontend.nuspec`, con la versión igual al número de build, a `publish/`, y publica el paquete. |
| Generar NuGet Backend y Library | Lo mismo con `<ProductName>.Backend.nuspec` y `<ProductName>.Library.nuspec`. |
| Generar NuGet BBDD CONFIG | Lo mismo con `<ProductName>.Conf.Database.nuspec`. |
| Generar NuGet BBDD Datos | Lo mismo con `<ProductName>.Data.Database.nuspec`. |

Los cinco usan NuGet.CommandLine 6.12.2.

### 6. Detener

| Paso | Qué hace |
|---|---|
| Detener aplicación | Para el Frontend y el Backend arrancados. Se ejecuta **siempre**, también si un paso anterior ha fallado, para no dejar la aplicación viva en el agente. |

---

## Artefactos

La configuración recoge:

- `publish\<ProductName>.v<número de build>.zip`, el producto publicado;
- `publish\DockerCompose<número de build>.zip`, para desplegarlo con Docker;
- `<ProductName>.InterfaceTest\bin\Debug\net9.0\tracing`, las trazas de los tests de interfaz, para ver qué pasó cuando uno falla.

Se descargan desde la pestaña **Artifacts** de cada build.

---

## Número de build y disparador

- **Número de build:** `1.0.%build.counter%.1`. Es la versión de todo lo que sale de la build: los ensamblados, los dacpac y los NuGets.
- **Disparador:** VCS. Cada push a la rama `ProductBranch` lanza una build.

---

## Funciones de build

| Función | Qué hace |
|---|---|
| AssemblyInfo patcher | Pone el número de build como versión de los ensamblados. |
| Reemplazo de contenido en `**/*.sqlproj` | Pone `<DacVersion>` igual al número de build, para que los dacpac lleven la misma versión que el resto. |
| Performance monitor | Registra el uso de CPU, memoria y disco del agente durante la build. |

---

## Lo que necesita el agente

- **SDK de .NET 9**, para compilar y publicar, y **SDK de .NET 6**, para los pasos de test.
- **Node.js**, para el TypeScript del Frontend.
- **sqlpackage**, para publicar las bases de datos.
- Un **SQL Server** donde crear las bases de prueba.
- **NuGet.CommandLine 6.12.2**, para generar los NuGets.
