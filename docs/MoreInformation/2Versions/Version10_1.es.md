# Versión 10.1

Flexygo 10.1 agiliza las actualizaciones, también en Docker, y mejora las herramientas de desarrollo y navegación. Además, incorpora ajustes en la configuración y corrige incidencias en informes, interfaz y tareas programadas.

## Otras novedades

### Actualizador

- **Actualizaciones sin esperas:** el Actualizador puede actualizarse y completar preparaciones y actualizaciones delegadas sin el límite de espera general. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Preparación nocturna:** deja lista en segundo plano la siguiente versión del proyecto y registra el resultado de cada tarea. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Información de precarga:** la descripción del proceso está disponible en más idiomas. [Más información](../../1Deployment/3Updater/UpdateFlow.md)

### Despliegue en Docker

- **Actualización guiada:** el proceso en Docker incluye cinco pasos y un resumen final, y permite revisar las diferencias personalizadas pendientes. [Más información](../../1Deployment/3Updater/DockerUpdate.md)
- **Documentación de Docker:** la página de versiones explica cómo actualizar mediante imágenes y la página de mantenimiento conserva las personalizaciones. [Más información](../../1Deployment/3Updater/DockerUpdate.md)

### Interfaz y navegación

- **Menú en la skin 2026:** gestiona los nodos del menú con el botón derecho. [Más información](../../Help/Administration/Skin2026.md)
- **Búsqueda y atajos:** en la skin 2026, usa / para buscar en la lista visible y Ctrl+K para abrir favoritos, páginas recientes y atajos de teclado. [Más información](../../Help/Administration/Skin2026.md)

### Herramientas de desarrollo

- **Editor de recorridos:** mantiene las marcas junto al elemento seleccionado, facilita identificar módulos y permite reordenar pasos.
- **Distribución de módulos:** colócalos con el botón derecho o arrastrándolos, y cambia la distribución desde una barra más clara. [Más información](../../Help/Modules/ModuleManagement.md)

### Configuración

- **Conexiones de bases de datos:** la configuración explica el atributo «encrypt». [Más información](../../1Deployment/2ConfigWizard/AppSettingsReference.md)
- **Paneles en la skin 2022:** los paneles de configuración y salud adaptan su diseño a los colores de la skin. [Más información](../../Help/Administration/HealthPanel.md)

### Diseño y procesos

- **Botones de proceso:** puedes dejar sin icono los botones genéricos.
- **Modo de desarrollo:** los diseñadores entran en este modo al iniciar sesión, sin tener que abrirlo desde el menú.

## Correcciones

??? note "Ver las correcciones de esta versión"

    - **Informes e integraciones:** vuelve a ser posible generar informes de Crystal Reports con autenticación de Windows, y la aplicación MCP incluye un SDK con una corrección de seguridad.
    - **Interfaz:** los registros nuevos muestran un título adecuado, las páginas sin permiso presentan un aviso de seguridad y vuelven a aparecer las imágenes de cinco diseños de página en Linux y Docker.
    - **Notificaciones:** en la skin 2022, las notificaciones sin leer vuelven a mostrarse con fondo blanco, barra azul y texto azul.
    - **Tareas programadas:** se detienen correctamente al reiniciar o actualizar la aplicación en IIS.
