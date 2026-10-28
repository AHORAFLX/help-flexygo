# GitHub Actions y GitLab CI

La [plantilla de producto](../2ProductDevelopment/2Template.md) trae los pipelines para **GitHub Actions** y para **GitLab CI**, listos pero **desactivados**. Cada uno tiene dos flujos: uno genera los NuGets del producto y otro sus imágenes Docker. Las dos herramientas hacen lo mismo, con la misma versión.

Los pasos siguen el mismo orden que la plantilla de [TeamCity](2TeamCity.md): restaurar, publicar, bases de datos, pruebas y NuGets; estos pipelines añaden la release y las imágenes Docker. Las diferencias están en [Diferencias con TeamCity](#diferencias-con-teamcity). Para la idea general del pipeline, consulta la [visión general](1Overview.md).

!!! note "Nombres de proyecto"
    Los ejemplos usan `<ProductName>` como nombre del producto: el prefijo de los proyectos de la solución (`<ProductName>.Frontend`, `<ProductName>.Backend`, `<ProductName>.Conf.Database`, `<ProductName>.Data.Database`…). En tu producto, la plantilla ya lo ha sustituido.

---

## Activarlos

Los ficheros vienen con la extensión `.disabled` para que un producto nuevo no lance builds hasta que lo decidas. Para activarlos, quita esa extensión:

| Herramienta | Ficheros | Qué renombrar |
|---|---|---|
| GitHub Actions | `.github/workflows/<ProductName>-nugets.yml.disabled` y `<ProductName>-docker.yml.disabled` | Quita `.disabled` a los dos, o solo al que quieras. |
| GitLab CI | `.gitlab-ci.yml.disabled`, que incluye `.gitlab/workflows/<ProductName>-nugets.yml` y `<ProductName>-docker.yml` | Quita `.disabled` a `.gitlab-ci.yml`. Para quedarte con uno solo de los dos flujos, quita su línea `include`. |

---

## Cuándo se lanzan

- **GitHub Actions:** en cada push a cualquier rama, en cada etiqueta `v*` y a mano (*Run workflow*).
- **GitLab CI:** en cada pipeline del proyecto, para cualquier rama.

Qué se publica depende de la rama:

| Rama | NuGets | Release | Publica los NuGets | Publica las imágenes |
|---|---|---|---|---|
| `main` o `master` | Sí | Sí | Sí | Sí |
| `develop` | Sí | Sí | No | No |
| Cualquier otra | Sí | No | No | No |

En todas las ramas, los NuGets y las imágenes quedan como artefactos de la ejecución.

---

## La versión

La versión sale de `<ProductName>-version.json`, que guarda el *major* y el *minor*:

```json
{
  "major": 1,
  "minor": 0
}
```

El resto lo calcula el pipeline contando commits desde el último que tocó ese fichero:

| Rama | Versión del paquete | Ejemplo |
|---|---|---|
| `main` o `master` | `Major.Minor.0.N`, con N = commits desde el último cambio de versión + 1 | `1.0.0.7` |
| `develop` | `Major.Minor.N.1-beta`, con N = commits desde el último cambio de versión | `1.0.23.1-beta` |
| Cualquier otra | `Major.Minor.N.1-alpha.K`, con N = los commits de `develop` en el punto en que salió la rama y K = los commits propios de la rama | `1.0.23.1-alpha.4` |

Para subir de versión, cambia el *major* o el *minor* en el fichero: el contador vuelve a empezar solo. Los ensamblados, la `DacVersion` de los dacpac, los NuGets y las imágenes llevan el mismo número; los ensamblados, sin el sufijo `-beta` o `-alpha`.

Los dos flujos necesitan el historial completo de git para contar: GitHub lo descarga con `fetch-depth: 0` y GitLab con `GIT_DEPTH: "0"`.

---

## Los pasos

El flujo de los NuGets hace los pasos 1 a 6; el de las imágenes, el 7.

### 1. Restaurar

`dotnet restore <ProductName>.sln`, con los orígenes del `nuget.config` del producto: nuget.org y los dos feeds de Flexygo, el estable y el beta.

!!! warning "Paquetes de DevExpress"
    El `nuget.config` de la plantilla no incluye el feed de DevExpress. Si tu producto necesita sus paquetes, añade su origen antes de restaurar, con la clave guardada como secreto (por ejemplo `DEVEXPRESS_API`), nunca escrita en el fichero.

### 2. Publicar

`dotnet publish` en Release del Frontend y del Backend a `publish/<ProductName>/`, con la versión, la versión de fichero y la versión informativa (la del paquete más el commit). Genera las DLL que empaquetan los NuGets.

!!! warning "Node.js"
    El Frontend compila TypeScript con `node`. Los ejecutores de GitHub (`ubuntu-latest`) ya lo traen; el flujo de GitLab lo instala en su `before_script`. Sin él, la publicación del Frontend falla con `MSB6003`.

### 3. Bases de datos

`dotnet build` de `<ProductName>.Conf.Database.sqlproj` y de `<ProductName>.Data.Database.sqlproj` en Release, con `-p:NetCoreBuild=true` y `/p:DacVersion=<versión>`. Genera los dacpac que empaquetan los NuGets de base de datos.

### 4. Pruebas

Estos pipelines no ejecutan pruebas: van de las bases de datos directamente a los NuGets. Consulta [Las pruebas](#las-pruebas).

### 5. NuGets

Un `dotnet pack` de `tools/pack.csproj` por cada `.nuspec` del producto, a `publish/nuget`: Frontend, Library, Backend, Conf.Database y Data.Database. `tools/pack.csproj` no compila nada: existe solo porque `dotnet pack` necesita un proyecto.

```bash
dotnet pack tools/pack.csproj -o publish/nuget -p:NuspecProperties="version=<versión>" \
  -p:NuspecFile=$PWD/<ProductName>.Frontend/<ProductName>.Frontend.nuspec \
  -p:NuspecBasePath=$PWD/<ProductName>.Frontend
```

Los `.nupkg` se guardan como artefacto de la ejecución en todas las ramas.

### 6. Release y publicación

En `main`, `master` y `develop` se crea una release `v<versión>`:

- **GitHub:** con las notas generadas y los `.nupkg` adjuntos.
- **GitLab:** con `glab release create`. Si la release ya existe, por ejemplo al relanzar el pipeline, se actualiza en lugar de fallar.

Después se publican los NuGets, solo en `main` o `master`:

- **GitHub:** a GitHub Packages del propietario del repositorio.
- **GitLab:** al *Package Registry* del proyecto.

Si el paquete ya existe con esa versión, se salta.

### 7. Imágenes Docker

Construye tres imágenes con la misma versión que los NuGets: **frontend**, **backend** y **db**, la base de datos con los dos catálogos. Cada una:

1. se construye con la etiqueta de su versión;
2. se exporta con `docker save` a `publish/docker/<ProductName>-<imagen>-<versión>.tar.gz` y se guarda como artefacto de la ejecución;
3. en `main` o `master`, se sube al registro con su versión y con `latest`: **GHCR** (`ghcr.io/<propietario>/…`) en GitHub y el *Container Registry* del proyecto en GitLab.

En GitLab, si la instancia no tiene el *Container Registry* habilitado, se salta la subida y el resto sigue. Este flujo no crea release: ya la crea el de los NuGets.

Para generar las mismas imágenes en tu equipo: `pwsh tools/build-docker-images.ps1`.

---

## Diferencias con TeamCity

| | GitHub Actions y GitLab CI | [TeamCity](2TeamCity.md) |
|---|---|---|
| Activación | Ficheros `.disabled` en el producto; se activan quitando la extensión | Configuración creada desde la plantilla **Template flexygo products core** |
| Versión | `<ProductName>-version.json` y la rama: `Major.Minor.0.N`, `-beta` o `-alpha.K` | `1.0.%build.counter%.1` |
| Restaurar | Los orígenes del `nuget.config` del producto | Cuatro orígenes, DevExpress incluido |
| Bases de datos | Solo se compilan | Se compilan y se publican en bases de prueba con sqlpackage |
| Pruebas | No hay | Arranca la aplicación y ejecuta los tests del núcleo, los del producto y los de interfaz |
| NuGets | `dotnet pack` de `tools/pack.csproj` por cada `.nuspec` | NuGet Pack con NuGet.CommandLine 6.12.2 |
| Release | Sí, en `main`, `master` y `develop` | No |
| Imágenes Docker | Frontend, backend y db, publicadas en `main` o `master` | No las construye |

---

## Secretos y variables

No hace falta dar de alta ningún secreto para publicar:

- **GitHub** usa `GITHUB_TOKEN`, que crea la propia ejecución, con permiso `packages: write`.
- **GitLab** usa `CI_JOB_TOKEN`, que también se genera solo.

Lo que sí hay que preparar:

- **GitLab:** habilitar el *Package Registry* y, para las imágenes, el *Container Registry* en *Settings › General › Visibility, project features, permissions*. El flujo de imágenes necesita un ejecutor `docker` en modo privilegiado, porque usa el servicio `docker:dind`.
- **Las claves que añadas**, como la de DevExpress: como *secret* en GitHub, que las enmascara solo, o como variable **Masked** en GitLab. Una variable normal sale tal cual en el log.

---

## Las pruebas

**Estos pipelines no ejecutan pruebas hoy**: compilan, empaquetan y publican. Los tests unitarios se lanzan en tu equipo contra la imagen de base de datos del producto:

```powershell
pwsh tools/run-tests-with-db.ps1 -Version 1.0.1.1
```

El script levanta la imagen de base de datos, espera a que responda, apunta los tests a ella, los ejecuta y lo limpia todo al acabar, también si fallan. La contraseña de `sa` del contenedor se toma de la variable de entorno `SQL_PASSWORD`, y `SQL_PORT` cambia el puerto si el 1433 ya está ocupado por un SQL Server de tu equipo. Necesita Docker.

`pwsh tools/dev-pipeline.ps1` encadena en local la restauración, la publicación, la imagen de base de datos, los tests y el empaquetado, sin publicar nada.

En Windows sin PowerShell 7, cambia `pwsh` por `powershell -NoProfile -ExecutionPolicy Bypass -File`.
