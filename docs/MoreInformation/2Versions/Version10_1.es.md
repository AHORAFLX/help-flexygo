# Versión 10.1

Flexygo 10.1 reúne el estado, las métricas y la configuración de la aplicación en un panel, y facilita la gestión de las actualizaciones. También incorpora ajustes para Docker, herramientas de desarrollo y mejoras en la navegación de la skin 2026.

## Lo más destacado

### Salud y recursos de la aplicación

Consulta desde un único panel el estado de la aplicación, sus métricas y su configuración. También encontrarás alertas, recomendaciones y usuarios conectados; podrás revisar sugerencias para optimizarla, deshacer los índices propuestos y consultar el registro de cambios. Está disponible para administradores y en el dashboard de la skin 2026.

![Salud y recursos de la aplicación](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[Más información: salud de la aplicación](../../Help/Administration/HealthPanel.md)

## Otras novedades

### Actualizaciones

- **Programación:** programa, modifica o cancela actualizaciones que se ejecutan en segundo plano, con avisos y un modo de mantenimiento coordinado. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Actualizador:** puede actualizarse a sí mismo y completar preparaciones y actualizaciones delegadas que superen el tiempo de espera habitual. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Preparación nocturna:** la tarea nocturna prepara en segundo plano la siguiente versión del proyecto y deja constancia del resultado. [Más información](../../1Deployment/3Updater/UpdateFlow.md)

### Docker y despliegue

- **Actualización en Docker:** un asistente de cinco pasos guía el proceso y termina con un resumen del resultado. [Más información](../../1Deployment/3Updater/DockerUpdate.md)
- **Exportación de productos:** al exportar un proyecto como producto, puedes elegir si incluir su base de datos de datos. [Más información](../../2ProductDevelopment/8ExportProject/2Reference.md)
- **Documentación de Docker:** la página de versiones explica cómo actualizar mediante imágenes, y la de mantenimiento conserva las personalizaciones. [Más información](../../1Deployment/3Updater/DockerUpdate.md)

### Configuración y desarrollo

- **Colecciones:** configura sus ajustes directamente desde el banco de trabajo del objeto.
- **Conexiones de bases de datos:** la configuración explica el atributo «encrypt». [Más información](../../1Deployment/2ConfigWizard/AppSettingsReference.md)
- **Editor de recorridos:** las marcas siguen al elemento seleccionado al desplazarte por la página.
- **Módulos:** colócalos con el botón derecho o arrastrándolos, y cambia la distribución desde una barra más clara. [Más información](../../Help/Modules/ModuleManagement.md)

### Interfaz y navegación

- **Menú de la skin 2026:** gestiona sus nodos con el botón derecho. [Más información](../../Help/Administration/Skin2026.md)
- **Búsqueda rápida:** en la skin 2026, usa / para buscar en la lista visible y Ctrl+K para consultar favoritos y páginas recientes. [Más información](../../Help/Administration/Skin2026.md)
- **Menú lateral:** Importar solo aparece cuando hay una configuración de importación activa. [Más información](../../Help/Administration/Skin2026.md)
- **Paneles de configuración y salud:** en la skin 2022, su diseño se adapta a los colores de la interfaz. [Más información](../../Help/Administration/HealthPanel.md)

### Inicio y diseñadores

- **Avisos de inicio:** aparecen de forma ordenada y las actualizaciones de versión incluyen también parches y betas.
- **Diseñadores:** entran en modo de desarrollo al iniciar sesión, sin necesidad de abrirlo desde el menú.
- **Botones de proceso:** puedes dejar sin icono los botones genéricos.

## Correcciones

??? note "Ver las correcciones de esta versión"

    - **Informes:** los informes relacionados aplican el registro actual y sus filtros; Crystal Reports funciona con bases de datos que usan autenticación de Windows.
    - **Seguridad e integraciones:** MCP incorpora una versión del SDK con una corrección de seguridad, y la WebAPI y MCP ejecutan cada proceso solo sobre el objeto para el que está definido. [Más información](../../Help/Administration/RolesAndPermissions/4WebAPIMCP.md)
    - **Interfaz:** los registros nuevos muestran un título adecuado y las páginas sin permiso presentan un aviso de seguridad; también vuelven a verse cinco diseños de página en Linux y Docker.
    - **Notificaciones:** en la skin 2022, las notificaciones sin leer vuelven a mostrarse con fondo blanco, barra azul y texto azul.
    - **Tareas programadas:** se detienen correctamente al reiniciar o actualizar la aplicación en IIS.
