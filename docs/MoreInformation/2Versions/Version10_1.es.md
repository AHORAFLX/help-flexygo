# Versión 10.1

Flexygo 10.1 mejora la navegación de la skin 2026 y agiliza las tareas de actualización y despliegue. También incorpora ajustes para quienes diseñan y desarrollan aplicaciones, junto con correcciones en la interfaz, los informes y las tareas programadas.

## Lo más destacado

### Búsqueda y atajos en skin 2026

En la skin 2026, pulsa / para buscar en la lista visible y Ctrl+K para consultar tus favoritos y páginas recientes. Desde ahí puedes fijar páginas y abrirlas con las flechas y Enter, además de consultar los atajos. Pulsa ? para verlos cuando no estés escribiendo.

[Más información: interfaz skin 2026](../../Help/Administration/Skin2026.md)

## Otras novedades

### Actualizador

- **Actualización del Actualizador:** puede actualizarse a sí mismo y completar preparaciones y actualizaciones delegadas sin el límite general de espera. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Preparación nocturna:** deja lista en segundo plano la siguiente versión del proyecto y registra el resultado de cada tarea. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Precarga:** la descripción del proceso está disponible en más idiomas. [Más información](../../1Deployment/3Updater/UpdateFlow.md)

### Despliegue con Docker

- **Actualización guiada:** un asistente de cinco pasos muestra un resumen final y permite revisar las diferencias personalizadas pendientes. [Más información](../../1Deployment/3Updater/DockerUpdate.md)
- **Imágenes y mantenimiento:** la ayuda explica cómo actualizar mediante imágenes y conserva las personalizaciones de la página de mantenimiento. [Más información](../../1Deployment/3Updater/DockerUpdate.md)

### Herramientas de desarrollo

- **Lowdy:** el plugin permite girar el personaje a cualquier ángulo.
- **Editor de recorridos:** mantiene las marcas junto al elemento seleccionado, facilita identificar módulos y ayuda a reordenar pasos.
- **Distribución de módulos:** puedes colocarlos con el botón derecho o arrastrándolos, y cambiar la distribución desde una barra más clara. [Más información](../../Help/Modules/ModuleManagement.md)

### Menús y navegación

- **Nodos del menú:** en la skin 2026, puedes gestionarlos con el botón derecho. [Más información](../../Help/Administration/Skin2026.md)
- **Importar:** el menú lateral solo muestra esta opción cuando hay una configuración de importación activa.

### Configuración

- **Conexiones de bases de datos:** la configuración explica el atributo «encrypt». [Más información](../../1Deployment/2ConfigWizard/Configuration.md)
- **Paneles en la skin 2022:** los paneles de configuración y salud adaptan su diseño a los colores de la skin. [Más información](../../Help/Administration/ControlPanel.md)

### Diseño y procesos

- **Diseñadores:** al iniciar sesión, entran en modo de desarrollo sin que tengas que abrirlo desde el menú.
- **Botones genéricos de proceso:** puedes dejarlos sin icono.

## Correcciones

??? note "Ver las correcciones de esta versión"

    - **Informes:** vuelve a ser posible generar informes de Crystal Reports en bases de datos con autenticación de Windows.
    - **Seguridad e integraciones:** las páginas sin permiso muestran un aviso de seguridad y la aplicación MCP incluye una versión del SDK con una corrección de seguridad.
    - **Registros:** los registros nuevos vuelven a mostrar un título adecuado.
    - **Diseños de página:** vuelven a mostrarse las imágenes de cinco diseños en instalaciones Linux y Docker.
    - **Notificaciones:** en la skin 2022, las notificaciones sin leer recuperan el fondo blanco, la barra azul y el texto azul.
    - **Tareas programadas:** se detienen correctamente al reiniciar o actualizar la aplicación en IIS.
