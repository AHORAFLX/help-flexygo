# Versión 10.1

Flexygo 10.1 reúne en un panel el estado y los recursos de la aplicación, y facilita la gestión de sus ajustes. También mejora las actualizaciones, el despliegue y varias herramientas de trabajo diario.

## Lo más destacado

### Panel de salud y recursos

Consulta en un mismo panel las alertas, recomendaciones, usuarios conectados y métricas de la aplicación. También puedes revisar ajustes y sugerencias para optimizarla; los cambios quedan registrados y puedes deshacer los índices sugeridos. Está disponible para administradores y desde el panel de control de la skin 2026.

![Panel de salud y recursos](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[Más información: salud de la aplicación](../../Help/Administration/HealthPanel.md)

## Otras novedades

### Actualizaciones

- **Programación:** programa, modifica o cancela actualizaciones; se ejecutan en segundo plano con avisos y un modo de mantenimiento coordinado. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Actualizador:** ahora puede actualizarse y completar preparaciones y actualizaciones delegadas que superen el tiempo de espera habitual. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Docker:** sigue un asistente de cinco pasos para actualizar y consulta un resumen del resultado al terminar. [Más información](../../1Deployment/3Updater/DockerUpdate.md)
- **Preparación nocturna:** la tarea nocturna prepara la siguiente versión del proyecto en segundo plano y registra el resultado. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Precarga:** la descripción del proceso de precarga está disponible en más idiomas. [Más información](../../1Deployment/3Updater/UpdateFlow.md)

### Despliegue

- **Exportar productos:** al exportar un proyecto como producto, elige si quieres incluir su base de datos de datos. [Más información](../../2ProductDevelopment/8ExportProject/2Reference.md)
- **Docker:** la página de versiones explica la actualización mediante imágenes y la página de mantenimiento conserva las personalizaciones. [Más información](../../1Deployment/3Updater/DockerUpdate.md)

### Administración y configuración

- **Ajustes de la aplicación:** los administradores pueden consultar y modificar los ajustes desde su pantalla de configuración. [Más información](../../Help/Administration/AppSettings.md)
- **Conexiones:** la configuración aclara la finalidad del atributo `encrypt` para las conexiones de la aplicación y las bases de datos. [Más información](../../1Deployment/2ConfigWizard/EncryptedSettings.md)
- **Skin 2022:** los paneles de configuración y salud tienen un diseño claro acorde con sus colores.

### Herramientas de desarrollo

- **Colecciones:** configura sus ajustes desde el banco de trabajo del objeto.
- **Menús:** en la skin 2026, gestiona los nodos del menú con el botón derecho. [Más información](../../Help/Administration/Skin2026.md)
- **Recorridos:** en el editor, las marcas acompañan al elemento seleccionado al desplazarte por la página.
- **Módulos:** colócalos con el botón derecho o arrastrándolos, y cambia su distribución desde una barra más clara. [Más información](../../Help/Modules/ModuleManagement.md)
- **Modo de desarrollo:** los diseñadores entran en este modo al iniciar sesión, sin tener que abrirlo desde el menú.

### Interfaz

- **Búsqueda en la skin 2026:** usa `/` para buscar en la lista visible y `Ctrl+K` para consultar favoritos y páginas recientes. [Más información](../../Help/Administration/Skin2026.md)
- **Menú lateral:** Importar solo aparece cuando hay una configuración de importación activa.

### Inicio y procesos

- **Avisos de inicio:** aparecen de forma ordenada; las actualizaciones de versión también incluyen parches y versiones beta.
- **Botones de proceso:** los botones genéricos pueden mostrarse sin icono.

## Correcciones

??? note "Ver las correcciones de esta versión"

    - **Informes:** los informes relacionados respetan el registro actual y sus filtros; Crystal Reports funciona con bases de datos que usan autenticación de Windows.
    - **Seguridad e integraciones:** MCP incluye una versión del SDK con una corrección de seguridad, y la WebAPI y MCP ejecutan cada proceso solo sobre el objeto definido.
    - **Interfaz:** los registros nuevos muestran un título adecuado y las páginas sin permiso avisan de la restricción.
    - **Diseños de página:** vuelven a mostrarse las imágenes de cinco diseños en instalaciones Linux y Docker.
    - **Notificaciones:** en la skin 2022, las notificaciones sin leer recuperan el fondo blanco, la barra azul y el texto azul.
    - **Tareas programadas:** se detienen correctamente al reiniciar o actualizar la aplicación en IIS.
