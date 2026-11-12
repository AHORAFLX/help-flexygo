# Versión 10.1

Flexygo 10.1 reúne en un solo panel información para conocer y optimizar la salud de la aplicación. También facilita la gestión de las actualizaciones y mejora herramientas de configuración, desarrollo e interfaz.

## Lo más destacado

### Panel de salud y recursos

Consulta alertas, recomendaciones, usuarios conectados, métricas y ajustes desde un único panel. También puedes revisar sugerencias para optimizar la aplicación; los cambios quedan registrados y puedes deshacer los índices sugeridos. Está disponible para administradores y desde el panel de control de la skin 2026.

![Panel de salud y recursos](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[Más información: panel de la aplicación](../../Help/Administration/HealthPanel.md)

## Otras novedades

### Actualizaciones

- **Programación:** programa, modifica o cancela actualizaciones; se ejecutan en segundo plano con avisos y un modo de mantenimiento coordinado. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Actualizador:** puede actualizarse a sí mismo y completar preparaciones o actualizaciones delegadas aunque superen el tiempo de espera habitual. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Preparación nocturna:** prepara en segundo plano la siguiente versión del proyecto y deja constancia del resultado. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Docker:** la actualización sigue un asistente de cinco pasos y termina con un resumen; la documentación explica la actualización mediante imágenes y conserva las personalizaciones de mantenimiento. [Más información](../../1Deployment/3Updater/DockerUpdate.md)
- **Precarga:** la descripción del proceso del Actualizador está disponible en más idiomas. [Más información](../../1Deployment/3Updater/UpdateFlow.md)

### Despliegue

- **Exportación de productos:** al exportar un proyecto como producto, puedes elegir si incluir su base de datos de datos. [Más información](../../2ProductDevelopment/8ExportProject/2Reference.md)

### Configuración y administración

- **Ajustes de la aplicación:** los administradores pueden consultarlos y modificarlos desde la pantalla de configuración. [Más información](../../Help/Administration/AppSettings.md)
- **Conexiones:** se aclara la finalidad del atributo `encrypt` al configurar conexiones de la aplicación y bases de datos. [Más información](../../1Deployment/2ConfigWizard/EncryptedSettings.md)
- **Skin 2022:** los paneles de configuración y salud tienen un diseño claro acorde con sus colores. [Más información](../../Help/Administration/AppSettings.md)

### Herramientas de desarrollo

- **Colecciones:** configura sus ajustes desde el banco de trabajo del objeto.
- **Editor de recorridos:** las marcas siguen al elemento seleccionado mientras te desplazas por la página.
- **Diseño de páginas:** coloca módulos con el botón derecho o arrastrándolos, y cambia la distribución desde una barra más clara. [Más información](../../Help/Modules/ModuleManagement.md)

### Interfaz

- **Lowdy:** el plugin permite girar su personaje a cualquier ángulo.
- **Skin 2026:** gestiona los nodos del menú con el botón derecho y busca en la lista visible con /; Ctrl+K abre favoritos y páginas recientes. [Más información](../../Help/Administration/Skin2026.md)
- **Menú lateral:** Importar solo aparece cuando hay una configuración de importación activa. [Más información](../../Help/Administration/Skin2026.md)
- **Modo de desarrollo:** los diseñadores entran en este modo al iniciar sesión, sin tener que abrirlo desde el menú.

### Informes e inicio

- **Exportación a Excel:** puedes exportar informes y listados a la vez sin que se mezclen los archivos.
- **Avisos y versiones:** los avisos de inicio aparecen ordenados y las actualizaciones de versión incluyen parches y betas.

### Seguridad y procesos

- **Filtros de visibilidad:** se aplican al leer registros por clave desde cualquier pantalla o llamada. [Más información](../../Help/Administration/RolesAndPermissions/1Overview.md)
- **Botones de proceso:** puedes dejar sin icono los botones genéricos.

## Correcciones

??? note "Ver las correcciones de esta versión"

    - **Informes:** los informes relacionados aplican los datos del registro actual y sus filtros; Crystal Reports funciona con bases de datos que usan autenticación de Windows.
    - **Seguridad de WebAPI y MCP:** cada proceso solo se ejecuta sobre el objeto para el que está definido; la aplicación MCP incorpora una versión del SDK con una corrección de seguridad. [Más información](../../Help/Administration/RolesAndPermissions/4WebAPIMCP.md)
    - **Pantallas y registros:** los registros nuevos muestran un título adecuado y las páginas sin permiso presentan un aviso de seguridad.
    - **Diseños en Linux y Docker:** vuelven a mostrarse las imágenes de cinco diseños de página.
    - **Notificaciones:** en la skin 2022, las notificaciones sin leer vuelven a tener fondo blanco, barra azul y texto azul.
    - **Tareas programadas:** se detienen correctamente al reiniciar o actualizar la aplicación en IIS.
