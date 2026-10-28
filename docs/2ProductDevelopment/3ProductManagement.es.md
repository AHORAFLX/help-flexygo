# Gestión de producto

## Instalación y uso de Flexygo Product Tools

Las **Flexygo Product Tools** son un conjunto de utilidades que te permiten gestionar y mantener tus productos Flexygo de forma sencilla. Con ellas puedes generar tus propios paquetes NuGet personalizados, empaquetar los addons de tu producto, actualizar tu solución a nuevas versiones y sincronizar recursos y configuración automáticamente.

!!! tip "CLI opcional"
    El uso de la herramienta por línea de comandos es opcional. Las mismas operaciones están disponibles desde el **instalador de Flexygo**, la **extensión para Visual Studio 2022** ([ver más](./5IDEExtensions.md)) y la **extensión Flexygo Developer Tools para VS Code** ([ver más](./5IDEExtensions.md)), sin necesidad de usar la terminal.


!!! warning "Importante"
    No actualices los proyectos de la solución manualmente, ya que el actualizador realiza acciones adicionales necesarias para el correcto funcionamiento del sistema.

## 1. Instalación de la herramienta

Las herramientas se distribuyen como un **.NET Global Tool** y se instalan ejecutando el siguiente comando en una terminal:

```bash
dotnet tool install --global Flexygo.Tools.Product
```

Esto hará que el comando ```flexygo-product``` esté disponible globalmente en tu sistema.

> **Nota:**  
> Si necesitas soporte de autocompletado de parámetros en la consola, puedes instalar también:
>
> ```bash
> dotnet tool install --global dotnet-suggest
> ```

## 2. Uso básico

El comando principal es ```flexygo-product```, que dispone de tres subcomandos: ```nuget```, ```update``` y ```addon```.

### a) Generar NuGet personalizado

Permite generar los paquetes NuGet de tu solución.

```bash
flexygo-product nuget -s "RUTA_A_TU_SOLUCION" -v VERSIÓN [-c CONFIGURACIÓN] [--include-addons]
```

- ```-s```: Ruta a la solución (**obligatorio**)
- ```-v```: Versión a generar del NuGet (**obligatorio**)
- ```-c```: Configuración (```Release``` o ```Debug```, por defecto ```Release```)
- ```--include-addons```: Empaqueta también los addons de la solución (**opcional**, ver [Empaquetar addons](#c-empaquetar-addons))

### b) Actualizar tu producto Flexygo

Actualiza tu solución Flexygo a la última versión (o a una versión específica si la indicas).

```bash
flexygo-product update -s "RUTA_A_TU_SOLUCION" [-v VERSIÓN] [-n NAMESPACE]
```

- ```-s```: Ruta a la solución (**obligatorio**)
- ```-v```: Versión a la que quieres actualizar (**opcional**; si no se especifica, actualiza a la última disponible)
- ```-n```: Namespace del producto cuyos NuGets actualizar, p. ej. ```Flexygo``` o ```flxSAT``` (**opcional**; ver [Productos que no son Flexygo](#productos-que-no-son-flexygo))

Esto realizará automáticamente:

- Búsqueda de los proyectos ```Frontend```, ```Backend```, ```Processes``` y ```Conf.Database``` de la solución.
- Comprobación y actualización de los paquetes NuGet ```{Producto}.Frontend```, ```{Producto}.Backend```, ```{Producto}.Library``` y ```{Producto}.Conf.Database``` a la versión solicitada o la última disponible.
- Sustitución de los ficheros ```conf/appsettings.json``` y ```conf/appsettings.Development.json``` del Frontend y del Backend por los del NuGet actualizado.
- Fijado de la versión exacta del paquete padre en el ```.nuspec``` de tu producto y, si existe, en el ```Directory.Packages.props```.

!!! warning "Qué se conserva de tu ```appsettings``` y qué no"
    En el **Backend**, los ```appsettings``` se **reemplazan** por los del NuGet y después se restauran únicamente tres secciones tuyas: ```DatabaseNuget```, ```ConnectionStrings``` y ```MailSettings```. Cualquier otra clave personalizada que hayas añadido a esos ficheros **se pierde**.

    En el **Frontend** se sobrescriben directamente, sin conservar nada.

    Si tienes configuración propia, guárdala fuera de esos ficheros o haz una copia antes de actualizar.

!!! tip "Canal de versiones (prereleases)"
    Si la versión que tienes instalada es una prerelease —contiene un guion, como ```1.5.0-beta.9```—, la búsqueda de "última versión" incluye prereleases automáticamente y te mantienes en tu canal. Si estás en una versión estable, solo se consideran versiones estables.

Si tu solución tiene addons, ```update``` también actualiza el paquete ```{Producto}.Library``` que consume el ```Processes``` de cada addon y, si el ```.nuspec``` del addon declara esa dependencia, sincroniza su versión fijada.

#### Productos que no son Flexygo

Por defecto la herramienta **detecta sola** el namespace del producto, leyendo la ```PackageReference``` de los ```*.Frontend.csproj``` de tu solución. Solo necesitas ```-n``` si la detección falla porque no encuentra ninguno o encuentra varios distintos. Para ver los namespaces oficiales soportados:

```bash
flexygo-product products
```

### c) Empaquetar addons

Un **addon** es una extensión que se instala sobre un producto Flexygo ya desplegado. Se distribuye como un NuGet propio y tiene **su propio ciclo de versiones**, independiente del producto. Un producto puede tener varios addons.

Se crean con la plantilla, ejecutando el comando **desde la carpeta que contiene el ```.sln``` del producto**:

```bash
dotnet new flexygoaddon --name Facturacion --allow-scripts yes
```

Cada addon vive en su propia carpeta con un ```config/module.json``` y un único ```.nuspec``` en la raíz. Esos dos ficheros son los que la herramienta usa para detectarlo, así que **el nombre del addon es libre** y no tiene por qué derivar del nombre del producto.

```bash
flexygo-product addon -s "RUTA_A_TU_SOLUCION" [-a NOMBRE] [-v VERSIÓN] [-c CONFIGURACIÓN]
```

- ```-s```: Ruta a la solución (**obligatorio**)
- ```-a```: Nombre del addon a empaquetar (**opcional**, repetible; si no se indica, se empaquetan todos los detectados)
- ```-v```: Versión del addon (**opcional**; si no se indica, se usa la que ya declara su ```.nuspec```)
- ```-c```: Configuración (```Release``` o ```Debug```, por defecto ```Release```)

Ejemplos:

```bash
# Todos los addons, cada uno con la versión de su propio .nuspec
flexygo-product addon -s "C:\Proyectos\CRMCore"

# Solo uno
flexygo-product addon -s "C:\Proyectos\CRMCore" -a Facturacion

# Varios addons concretos
flexygo-product addon -s "C:\Proyectos\CRMCore" -a Facturacion -a Portal

# Subir la versión de un addon y empaquetarlo
flexygo-product addon -s "C:\Proyectos\CRMCore" -a Facturacion -v 2.0.0.5
```

Al indicar ```-v```, la versión **se escribe en el ```.nuspec``` del addon** y queda ahí para las siguientes ejecuciones, así que recuerda commitear ese cambio. Como cada addon tiene su propio ciclo, ```-v``` solo se admite cuando has seleccionado **un único addon** con ```-a```; para subir varios, lanza el comando una vez por addon.

!!! warning "El orden importa"
    El subcomando ```nuget``` **limpia la carpeta ```publish\nuget```** antes de generar. Si vas a generar producto y addons por separado, ejecuta siempre ```nuget``` **antes** que ```addon```, o perderás los paquetes de addon ya generados.

!!! tip "Producto y addons en una sola pasada"
    Para el flujo de release, ```flexygo-product nuget -s "RUTA" -v 1.2.3 --include-addons``` genera los paquetes del producto y, a continuación, los de todos los addons. Los addons **nunca heredan** la versión indicada en ```-v```: cada uno se empaqueta con la de su propio ```.nuspec```. Para cambiarla, usa el subcomando ```addon``` con ```-v```.

Si un addon falla al compilar o empaquetar, **no se aborta el resto**: los demás addons y los paquetes del producto se generan igualmente, los fallidos se listan en el resumen final y el comando termina con código de salida ```3```.

!!! note "Los proyectos de base de datos se compilan siempre en Release"
    El ```.nuspec``` que genera la plantilla del addon toma los ```.dacpac``` de ```bin\Release```. Por eso sus proyectos de base de datos se compilan en ```Release``` aunque indiques ```-c Debug``` — si no, se empaquetaría un ```.dacpac``` obsoleto o fallaría el empaquetado. La opción ```-c``` sí se aplica al proyecto ```Processes``` del addon.

## 3. Opciones disponibles

Puedes ver todas las opciones en cualquier momento con:

```bash
flexygo-product --help
```

Y la ayuda concreta de cada subcomando, que documenta su comportamiento en detalle:

```bash
flexygo-product update --help
flexygo-product nuget  --help
flexygo-product addon  --help
```

### Códigos de salida

Útiles si integras la herramienta en un *pipeline* de CI:

| Comando | Código | Significado |
|---------|--------|-------------|
| ```update``` | ```0``` | Todo correcto |
| ```update``` | ```1``` | Error; el comando aborta en el primer fallo |
| ```nuget``` | ```0``` | Todo correcto |
| ```nuget``` | ```2``` | Error generando los paquetes del producto |
| ```nuget``` | ```3``` | El producto se generó, pero falló algún addon |
| ```addon``` | ```0``` | Todo correcto |
| ```addon``` | ```3``` | Falló al menos un addon |

## 4. Notas importantes

- Es recomendable realizar una copia de seguridad de tu solución antes de actualizar paquetes y recursos, especialmente si tienes modificaciones manuales en las carpetas ```wwwroot```.
- Tras la actualización, revisa el fichero ```appsettings``` por si quieres ajustar alguna configuración nueva.

---

!!! tip "Convención de nombres NuGet"
    Para que el instalador detecte correctamente los paquetes de tu producto deben seguir la convención de nombres estándar. Consulta la sección [Convención de nombres NuGet](./2Template.md#convencion-de-nombres-nuget) en la guía de creación de producto.
