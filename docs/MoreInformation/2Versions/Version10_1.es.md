# Versión 10.1

Flexygo 10.1 facilita las actualizaciones, con nuevos pasos para Docker y tareas que preparan la siguiente versión en segundo plano. También incorpora ajustes de navegación y herramientas de desarrollo, y corrige incidencias en informes, interfaz y tareas programadas.

## Otras novedades

### Actualizador

- **Actualización del Actualizador:** puede actualizarse a sí mismo y completar preparaciones y actualizaciones delegadas sin el límite de espera general. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Docker:** la actualización sigue un asistente de cinco pasos con un resumen final y permite revisar las diferencias personalizadas pendientes. [Más información](../../1Deployment/3Updater/DockerUpdate.md)

### Preparación de versiones

- **Preparación nocturna:** deja lista en segundo plano la siguiente versión del proyecto y registra el resultado de cada tarea. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Información del proceso:** la descripción de la precarga del Actualizador está disponible en más idiomas. [Más información](../../1Deployment/3Updater/UpdateFlow.md)

### Navegación en la skin 2026

- **Menú:** gestiona sus nodos con el botón derecho. [Más información](../../Help/Administration/Skin2026.md)
- **Búsqueda y accesos:** usa / para buscar en la lista visible y Ctrl+K para abrir favoritos, páginas recientes y atajos de teclado. [Más información](../../Help/Administration/Skin2026.md)

### Herramientas de desarrollo

- **Lowdy:** el plugin permite girar el personaje a cualquier ángulo.
- **Editor de recorridos:** mantiene las marcas junto al elemento seleccionado, ayuda a identificar módulos y facilita reordenar los pasos.
- **Colocación de módulos:** añádelos con el botón derecho o arrastrándolos, y cambia su distribución desde una barra más clara.

### Configuración

- **Conexiones de bases de datos:** la configuración explica el atributo «encrypt». [Más información](../../1Deployment/2ConfigWizard/AppSettingsReference.md)
- **Skin 2022:** los paneles de configuración y salud adaptan su diseño a los colores de la skin. [Más información](../../Help/Administration/HealthPanel.md)

### Personalización

- **Botones de proceso:** puedes dejar sin icono los botones genéricos.
- **Diseñadores de skins:** al iniciar sesión entran directamente en modo de desarrollo, sin tener que abrirlo desde el menú.

## Correcciones

??? note "Ver las correcciones de esta versión"

    - **Informes:** vuelve a ser posible generar informes de Crystal Reports con bases de datos que usan autenticación de Windows.
    - **Seguridad de MCP:** la aplicación incorpora una versión del SDK con una corrección de seguridad.
    - **Interfaz:** los registros nuevos muestran un título adecuado, las páginas sin permiso avisan de la restricción y vuelven a mostrarse imágenes de diseños en Linux y Docker.
    - **Notificaciones:** en la skin 2022, las notificaciones sin leer vuelven a mostrarse con fondo blanco, barra azul y texto azul.
    - **Tareas programadas:** se detienen correctamente al reiniciar o actualizar la aplicación en IIS.
