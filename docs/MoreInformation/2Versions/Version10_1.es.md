# Versión 10.1

Flexygo 10.1 facilita las actualizaciones en Docker y agiliza algunas tareas de navegación y desarrollo. También ajusta la experiencia de las skins y corrige problemas en informes, integraciones e interfaz.

## Otras novedades

### Actualización

- **Actualización en Docker:** un asistente guía el proceso y permite revisar el resultado y las diferencias personalizadas pendientes. [Más información](../../1Deployment/3Updater/DockerUpdate.md)
- **Preparación nocturna:** deja lista en segundo plano la siguiente versión para acelerar la actualización. [Más información](../../1Deployment/3Updater/UpdateFlow.md)

### Interfaz

- **Menús en la skin 2026:** gestiona sus nodos con el botón derecho. [Más información](../../Help/Administration/Skin2026.md)
- **Accesos rápidos en la skin 2026:** usa / para buscar en la lista visible y Ctrl+K para abrir favoritos, páginas recientes y atajos. [Más información](../../Help/Administration/Skin2026.md)
- **Paneles en la skin 2022:** los paneles de configuración y salud adaptan el diseño a sus colores. [Más información](../../Help/Administration/HealthPanel.md)

### Herramientas de desarrollo

- **Editor de recorridos:** mantiene las marcas junto al elemento seleccionado y facilita identificar módulos y reordenar pasos.
- **Colocación de módulos:** añádelos con el botón derecho o arrastrándolos, y cambia la distribución desde una barra más clara. [Más información](../../Help/Modules/ModuleManagement.md)
- **Modo de desarrollo:** los diseñadores entran en él al iniciar sesión, sin tener que abrirlo desde el menú.

### Configuración y procesos

- **Conexiones de bases de datos:** la configuración explica el atributo «encrypt». [Más información](../../1Deployment/2ConfigWizard/AppSettingsReference.md)
- **Botones de proceso:** puedes dejar sin icono los botones genéricos.

## Correcciones

??? note "Ver las correcciones de esta versión"

    - **Informes:** vuelven a generarse informes de Crystal Reports en bases de datos con autenticación de Windows.
    - **Integración MCP:** se incorpora una versión del SDK que corrige un problema de seguridad. [Más información](../../2ProductDevelopment/MCP/1Prerequisites.md)
    - **Imágenes de página:** vuelven a mostrarse cinco diseños en instalaciones Linux y Docker.
    - **Notificaciones en la skin 2022:** las notificaciones sin leer recuperan el fondo blanco, la barra azul y el texto azul.
