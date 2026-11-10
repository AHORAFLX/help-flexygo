# Versión 10.1

Flexygo 10.1 reúne en un solo panel la salud, las métricas y la configuración de tu aplicación. También facilita las actualizaciones y aporta ajustes en las herramientas de desarrollo y la interfaz.

## Lo más destacado

### Panel de salud y recursos

Consulta alertas, recomendaciones, usuarios conectados y métricas desde un único panel de administración. También puedes revisar la configuración y las sugerencias para optimizar la aplicación; los cambios quedan registrados y puedes deshacer los índices sugeridos. Está disponible para administradores y desde el panel de control de la skin 2026.

![Panel de salud y recursos](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[Más información: salud de la aplicación](../../Help/Administration/HealthPanel.md)

## Otras novedades

### Actualizaciones

- **Programación:** programa, modifica o cancela actualizaciones que se ejecutan en segundo plano, con avisos y un modo de mantenimiento coordinado. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Actualizador:** puede actualizarse y completar preparaciones y actualizaciones delegadas aunque superen el tiempo de espera habitual. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Preparación nocturna:** una tarea prepara en segundo plano la siguiente versión del proyecto y registra el resultado. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Información del proceso:** la descripción de la precarga del Actualizador está disponible en más idiomas. [Más información](../../1Deployment/3Updater/UpdateFlow.md)

### Docker y despliegue

- **Asistente de actualización:** en Docker, sigue cinco pasos y termina con un resumen del resultado. [Más información](../../1Deployment/3Updater/DockerUpdate.md)
- **Documentación de Docker:** la página de versiones explica las actualizaciones mediante imágenes y la de mantenimiento conserva las personalizaciones. [Más información](../../1Deployment/3Updater/DockerUpdate.md)

### Herramientas de desarrollo

- **Colecciones:** configura sus ajustes desde el banco de trabajo del objeto.
- **Editor de recorridos:** las marcas siguen al elemento seleccionado al desplazarte por la página.
- **Diseño de módulos:** colócalos con el botón derecho o arrastrándolos, y cambia la distribución desde una barra más clara. [Más información](../../Help/Modules/ModuleManagement.md)

### Interfaz y navegación

- **Menú de la skin 2026:** gestiona los nodos con el botón derecho. [Más información](../../Help/Administration/Skin2026.md)
- **Búsqueda rápida:** en la skin 2026, usa / para buscar en la lista visible y Ctrl+K para consultar favoritos y páginas recientes. [Más información](../../Help/Administration/Skin2026.md)
- **Menú lateral:** muestra Importar solo cuando hay una configuración de importación activa.

### Configuración y aspecto

- **Conexiones de bases de datos:** la configuración explica el atributo «encrypt». [Más información](../../1Deployment/2ConfigWizard/Configuration.md)
- **Skin 2022:** los paneles de configuración y salud adaptan su diseño a sus colores. [Más información](../../Help/Administration/HealthPanel.md)

### Diseño y procesos

- **Modo de desarrollo:** los diseñadores entran en este modo al iniciar sesión, sin tener que abrirlo desde el menú.
- **Lowdy:** el plugin permite girar su personaje a cualquier ángulo.
- **Botones de proceso:** puedes dejar sin icono los botones genéricos.

## Correcciones

??? note "Ver las correcciones de esta versión"

    - **Informes:** los informes relacionados aplican el registro actual y sus filtros; Crystal Reports funciona con bases de datos que usan autenticación de Windows.
    - **Integraciones y seguridad:** MCP incorpora una corrección de seguridad, y la WebAPI y MCP limitan cada proceso al objeto para el que está definido. [Más información](../../Help/Administration/RolesAndPermissions/4WebAPIMCP.md)
    - **Interfaz:** los registros nuevos muestran un título adecuado, las páginas sin permiso avisan de ello y vuelven a verse cinco diseños de página en Linux y Docker.
    - **Notificaciones:** en la skin 2022, las notificaciones sin leer vuelven a mostrarse con fondo blanco, barra azul y texto azul.
    - **Tareas programadas:** se detienen correctamente al reiniciar o actualizar la aplicación en IIS.
