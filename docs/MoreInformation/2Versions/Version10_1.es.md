# Versión 10.1

Flexygo 10.1 facilita la actualización y el seguimiento de tus aplicaciones, y amplía las opciones para trabajar en Docker y desarrollar. También incorpora ajustes de navegación y corrige varios comportamientos de informes, seguridad e interfaz.

## Lo más destacado

### Panel de salud y recursos

Consulta en un único panel las alertas, recomendaciones, usuarios conectados, métricas y ajustes de la aplicación. También puedes revisar sugerencias para optimizarla; los cambios quedan registrados y puedes deshacer los índices sugeridos. El panel está disponible para administradores y desde el dashboard de la skin 2026.

![Panel de salud y recursos](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[Más información: panel de la aplicación](../../Help/Administration/HealthPanel.md)

## Otras novedades

### Actualizaciones

- **Actualizaciones programadas:** prográmalas, cámbialas o cancélalas; se ejecutan en segundo plano con avisos y un modo de mantenimiento coordinado. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Actualizador:** puede actualizarse a sí mismo y completar preparaciones y actualizaciones delegadas aunque superen el tiempo de espera habitual. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Preparación nocturna:** una tarea prepara en segundo plano la siguiente versión del proyecto y deja constancia del resultado. [Más información](../../1Deployment/3Updater/UpdateFlow.md)

### Docker y despliegue

- **Asistente de actualización:** en Docker, sigue cinco pasos y termina con un resumen del resultado. [Más información](../../1Deployment/3Updater/DockerUpdate.md)
- **Guías de Docker:** la página de versiones explica cómo actualizar mediante imágenes y la de mantenimiento conserva las personalizaciones. [Más información](../../1Deployment/3Updater/DockerUpdate.md)

### Herramientas de desarrollo

- **Ajustes de colecciones:** configúralos desde el banco de trabajo del objeto.
- **Editor de recorridos:** las marcas siguen al elemento seleccionado cuando te desplazas por la página.
- **Colocación de módulos:** coloca módulos con el botón derecho o arrastrándolos, y cambia su distribución desde una barra más clara. [Más información](../../Help/Modules/ModuleManagement.md)

### Navegación en la skin 2026

- **Nodos del menú:** gestiónalos con el botón derecho. [Más información](../../Help/Administration/Skin2026.md)
- **Búsqueda rápida:** usa / para buscar en la lista visible y Ctrl+K para consultar favoritos y páginas recientes. [Más información](../../Help/Administration/Skin2026.md)

### Configuración de la interfaz

- **Skin 2022:** los paneles de configuración y salud adaptan su diseño a sus colores. [Más información](../../Help/Administration/HealthPanel.md)
- **Menú lateral:** Importar solo aparece cuando hay una configuración de importación activa.

### Inicio y modo de desarrollo

- **Avisos de inicio:** aparecen de forma ordenada y las actualizaciones de versión incluyen parches y betas.
- **Diseñadores de skins:** al iniciar sesión entran en modo de desarrollo sin tener que abrirlo desde el menú.

## Correcciones

??? note "Ver las correcciones de esta versión"

    - **Informes:** los informes relacionados usan correctamente el registro actual y sus filtros; Crystal Reports funciona con bases de datos que usan autenticación de Windows.
    - **Seguridad de WebAPI y MCP:** cada proceso solo se ejecuta sobre el objeto para el que está definido; la aplicación MCP incluye una versión del SDK con una corrección de seguridad. [Más información](../../Help/Administration/RolesAndPermissions/4WebAPIMCP.md)
    - **Interfaz:** los registros nuevos muestran un título adecuado, las páginas sin permiso avisan de la restricción y vuelven a verse las imágenes de cinco diseños en Linux y Docker.
    - **Notificaciones:** en la skin 2022, las notificaciones sin leer vuelven a mostrarse con fondo blanco, barra azul y texto azul.
    - **Tareas programadas:** se detienen correctamente al reiniciar o actualizar la aplicación en IIS.
