# Versión 10.1

Flexygo 10.1 facilita las actualizaciones, también en Docker, y mejora algunas tareas de desarrollo y navegación. Además, incorpora ajustes en la configuración y corrige incidencias en informes, integraciones e interfaz.

## Otras novedades

### Actualizaciones

- **Preparación nocturna:** deja lista en segundo plano la siguiente versión del proyecto y registra el resultado de cada tarea. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Actualizador:** puede actualizarse a sí mismo y completar preparaciones y actualizaciones delegadas sin el límite de espera general. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Idiomas:** la descripción del proceso de precarga del Actualizador está disponible en más idiomas. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Docker:** la actualización se realiza con un asistente de cinco pasos y un resumen final; también puedes revisar las diferencias personalizadas pendientes. [Más información](../../1Deployment/3Updater/DockerUpdate.md)

### Interfaz y navegación

- **Menú en la skin 2026:** gestiona los nodos con el botón derecho. [Más información](../../Help/Administration/Skin2026.md)
- **Búsqueda en la skin 2026:** usa / para buscar en la lista visible y Ctrl+K para acceder a favoritos, páginas recientes y atajos. [Más información](../../Help/Administration/Skin2026.md)

### Herramientas de desarrollo

- **Editor de recorridos:** mantiene las marcas junto al elemento seleccionado y facilita identificar módulos y reordenar pasos.
- **Distribución de módulos:** puedes colocarlos con el botón derecho o arrastrándolos, y cambiar la distribución desde una barra más clara.
- **Plugin Lowdy:** permite girar el personaje a cualquier ángulo.
- **Diseñadores:** al iniciar sesión, entran en modo de desarrollo sin tener que abrirlo desde el menú.

### Configuración y aspecto

- **Conexiones de bases de datos:** se explica el atributo «encrypt» al configurarlas. [Más información](../../1Deployment/2ConfigWizard/AppSettingsReference.md)
- **Paneles en la skin 2022:** los paneles de configuración y salud adaptan su diseño a los colores de la skin. [Más información](../../Help/Administration/HealthPanel.md)

### Procesos

- **Botones genéricos:** puedes dejar sin icono los botones de proceso.

## Correcciones

??? note "Ver las correcciones de esta versión"

    - **Informes:** vuelve a ser posible generar informes de Crystal Reports en bases de datos con autenticación de Windows.
    - **Seguridad de MCP:** la aplicación MCP incorpora una versión del SDK con una corrección de seguridad. [Más información](../../2ProductDevelopment/MCP/1Prerequisites.md)
    - **Diseños de página:** vuelven a mostrarse las imágenes de cinco diseños en instalaciones Linux y Docker.
    - **Notificaciones:** en la skin 2022, las notificaciones sin leer vuelven a mostrarse con fondo blanco, barra azul y texto azul.
