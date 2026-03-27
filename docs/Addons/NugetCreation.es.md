# Crear paquete NuGet para el addon

## 1. Definir el nombre de tu addon

Introduce aquí el nombre del addon para que los nombres se actualicen automáticamente y solo tengas que copiar y pegar:

<fh-namepropagator selector="propagated-addonname" placeholder="AddonFlexy"></fh-namepropagator>

## 2. Añadir fichero module.json

Para poder crear el paquete nuget primero tenemos que definir un archivo llamado [**module.json**](./readme/utils/module_json.zip) dentro de la carpeta de nuestro addon, en este fichero vamos a definir las acciones que se tienen que realizar a la hora de la instalación.

![Estructura carpeta addon](../docs_assets/images/Addon/Nuget/1.png "Estructura carpeta addon")

![Fichero module.json](../docs_assets/images/Addon/Nuget/2.png "Fichero module.json")

## 3. Definición module.json

### General

| Atributo | Ejemplo | Descripción |
|----------|---------|-------------|
| `name` | "<span class="propagated-addonname"></span>" | Identificador de nuestro addon. |
| `description` | "Descripción." | Breve descripción del propósito o funcionalidad del addon. |
| `type` | "Flexygo" | Actualmente siempre será Flexygo. |
| `flexygoVersionMin` | "4.0.0.6" | Versión mínima de Flexygo requerida para poder instalar el addon. |
| `flexygoVersionMax` | "8.4.0.6" | Versión máxima de Flexygo requerida para poder instalar el addon. |
| `productVersionMin` | "4.0.0.6" | Versión mínima del producto requerida para poder instalar el addon. |
| `productVersionMax` | "8.4.0.6" | Versión máxima del producto requerida para poder instalar el addon. |
| `resources` | [ ... ] | Lista de recursos incluidos en el addon y cómo deben gestionarse. |
| `postProcess` | [ ... ] | Lista de procesos que se ejecutarán después de instalar el addon. |

### Resources

| Atributo | Ejemplo | Descripción |
|----------|---------|-------------|
| `path` | "content/sql/<span class="propagated-addonname"></span>_DataBD.dacpac" | Ruta del recurso dentro del paquete NuGet. |
| `targetConnectionString` | "DataConnectionString" | Nombre de la cadena de conexión sobre la que se aplicará el recurso (solo si el scope es `database`). |
| `uninstallPrefix` | "<span class="propagated-addonname"></span>_" | Prefijo usado para identificar y eliminar objetos (tablas, vistas, storeds, funciones) al desinstalar el addon. |
| `scope` | "database" / "frontend" | Define el ámbito de instalación del recurso: <br>• **database:** aplica un archivo `.dacpac` a la base de datos. <br>• **frontend:** copia los archivos al entorno de cliente (JS, DLLs, imágenes, etc...). |

### PostProcess

| Atributo | Ejemplo | Descripción |
|----------|---------|-------------|
| `processName` | "pPostNuget" | Nombre del proceso (definido en flexygo) que se ejecutará al finalizar la instalación del addon. |
| `params` | { "Param1": true, "Param2": "2025-09-25", ... } | Parámetros del proceso definidos en flexygo. |
| `order` | 0 | Orden de ejecución de los procesos. |

## 4. Utilidades NuGet

Descargar el fichero [nuget.zip](../docs_assets/dowloads/nuget.zip) y extraer al mismo nivel que la carpeta de nuestro addon.

![Ubicación utilidades NuGet](../docs_assets/images/Addon/Nuget/3.png "Ubicación utilidades NuGet")

## 5. Fichero config.nuspec

Editar el fichero config.nuspec para adaptar los valores a nuestro proyecto.

El id del nuget debe ser nuestro identificador del addon <fh-copy><span class="propagated-addonname"></span></fh-copy>.

Dentro del target **config** obligatoriamente dejaremos el fichero **module.json** y el resto de ficheros dentro de **content**. **Importante las dll tienen que estar todas en la misma carpeta.**

![Configuración del archivo config.nuspec](../docs_assets/images/Addon/Nuget/4.png "Configuración del archivo config.nuspec")

## 6. Generar paquete NuGet

Abriremos una ventana de comandos y ejecutaremos la siguiente instrucción:

```bash
nuget pack config.nuspec
```

![Generación del paquete NuGet](../docs_assets/images/Addon/Nuget/5.png "Generación del paquete NuGet")

## 7. Instalar/Actualizar addon

Una vez tengamos nuestro nuget generado, desde Flexygo en **Otras Herramientas -> Addons** podemos instalar nuestro addon.

![Gestión de addons en Flexygo](../docs_assets/images/Addon/Nuget/6.png "Gestión de addons en Flexygo")

![Instalación del addon](../docs_assets/images/Addon/Nuget/7.png "Instalación del addon")

## 8. Desinstalar addon

Desde Flexygo en **Otras Herramientas -> Addons** podemos ver el listado de addons que tenemos instalados y proceder a desinstalarlos.

![Desinstalación del addon](../docs_assets/images/Addon/Nuget/8.png "Desinstalación del addon")
