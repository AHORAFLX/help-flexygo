# Versión 10.1

Flexygo 10.1 agiliza la preparación y actualización de proyectos, también en Docker. Además, incorpora ajustes para trabajar con la skin 2026 y mejora varias herramientas de desarrollo y configuración.

## Otras novedades

### Actualizador

- **Actualización propia:** el Actualizador puede actualizarse y completar preparaciones y actualizaciones delegadas sin el límite de espera general. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Descripción de la precarga:** la información sobre este proceso está disponible en más idiomas. [Más información](../../1Deployment/3Updater/UpdateFlow.md)

### Despliegue y preparación

- **Actualización en Docker:** un asistente de cinco pasos guía el proceso, muestra un resumen final y permite revisar las diferencias personalizadas pendientes. [Más información](../../1Deployment/3Updater/DockerUpdate.md)
- **Preparación nocturna:** deja lista en segundo plano la siguiente versión del proyecto y registra el resultado de cada tarea. [Más información](../../1Deployment/3Updater/UpdateFlow.md)

### Interfaz y navegación

- **Menú de la skin 2026:** gestiona los nodos del menú con el botón derecho. [Más información](../../Help/Administration/Skin2026.md)
- **Búsquedas y accesos rápidos:** en la skin 2026, usa / para buscar en la lista visible y Ctrl+K para abrir favoritos, páginas recientes y atajos. [Más información](../../Help/Administration/Skin2026.md)

### Herramientas de desarrollo

- **Editor de recorridos:** mantiene las marcas junto al elemento seleccionado y facilita identificar módulos y reordenar pasos.
- **Distribución de módulos:** colócalos con el botón derecho o arrastrándolos, y cambia la distribución desde una barra más clara.
- **Lowdy:** el plugin permite girar el personaje a cualquier ángulo.

### Configuración

- **Conexiones de bases de datos:** se explica el atributo «encrypt» al configurarlas. [Más información](../../1Deployment/2ConfigWizard/AppSettingsReference.md)
- **Paneles en la skin 2022:** los paneles de configuración y salud adaptan su diseño a los colores de la skin. [Más información](../../Help/Administration/HealthPanel.md)

### Personalización de procesos y skins

- **Botones de proceso:** puedes dejar sin icono los botones genéricos.
- **Diseñadores de skins:** al iniciar sesión, entran directamente en modo de desarrollo, sin abrirlo desde el menú.

## Correcciones

??? note "Ver las correcciones de esta versión"

    - **Informes:** vuelve a ser posible generar informes de Crystal Reports en bases de datos con autenticación de Windows.
    - **Seguridad de MCP:** la aplicación MCP incorpora una versión del SDK que incluye una corrección de seguridad.
    - **Interfaz:** vuelven a mostrarse las imágenes de cinco diseños de página en Linux y Docker, y las notificaciones sin leer recuperan el estilo previsto en la skin 2022.
    - **Tareas programadas:** se detienen correctamente al reiniciar o actualizar la aplicación en IIS.
