# Versión 10.1

Flexygo 10.1 facilita la gestión de actualizaciones y añade nuevos atajos para moverte por la skin 2026. También mejora el trabajo con Docker, la configuración y varias herramientas de desarrollo.

## Lo más destacado

### Actualizaciones programadas

Programa, cambia o cancela una actualización y deja que se ejecute en segundo plano. Antes de confirmarla, revisa la acción y una vista previa del modo mantenimiento. Recibirás avisos durante el proceso y, al terminar, el modo mantenimiento se desactivará automáticamente.

[Más información: actualizador de Flexygo](../../1Deployment/3Updater/UpdateFlow.md)

### Atajos de la skin 2026

Pulsa / para buscar en la lista visible y Ctrl+K para abrir favoritos y páginas recientes, fijar páginas y consultar los atajos disponibles. Pulsa ? para ver los atajos cuando no estés escribiendo. Estas novedades son exclusivas de la skin 2026; la skin 2022 no cambia.

[Más información: novedades de la skin](../../Help/Administration/Skin2026.md)

## Otras novedades

### Actualizaciones

- **Preparación:** el Actualizador puede actualizarse y completar preparaciones y actualizaciones delegadas aunque superen el tiempo de espera habitual. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Tarea nocturna:** prepara en segundo plano la siguiente versión del proyecto y deja constancia del resultado. [Más información](../../1Deployment/3Updater/UpdateFlow.md)

### Docker y despliegue

- **Actualización en Docker:** sigue un asistente de cinco pasos y termina con un resumen del resultado. [Más información](../../1Deployment/3Updater/DockerUpdate.md)
- **Imágenes y mantenimiento:** la documentación explica cómo actualizar con imágenes de Docker y conserva las personalizaciones de la página de mantenimiento. [Más información](../../1Deployment/3Updater/DockerUpdate.md)

### Herramientas de desarrollo

- **Lowdy:** gira el personaje hasta cualquier ángulo.
- **Editor de recorridos:** mantiene las marcas junto al elemento seleccionado, facilita identificar módulos y ayuda a reordenar los pasos.
- **Módulos:** colócalos con el botón derecho o arrastrándolos, y cambia la distribución desde una barra más clara. [Más información](../../Help/Modules/ModuleManagement.md)

### Menús y navegación

- **Nodos del menú:** en la skin 2026, puedes gestionarlos con el botón derecho. [Más información](../../Help/Administration/Skin2026.md)
- **Importar:** el menú lateral muestra esta opción solo cuando hay una configuración de importación activa.

### Configuración y skins

- **Conexiones de bases de datos:** la configuración explica el atributo «encrypt». [Más información](../../1Deployment/2ConfigWizard/Configuration.md)
- **Skin 2022:** los paneles de configuración y salud adaptan el diseño a sus colores. [Más información](../../Help/Administration/HealthPanel.md)

### Procesos y diseño

- **Botones de proceso:** los botones genéricos pueden dejarse sin icono.
- **Diseñadores de skins:** al iniciar sesión, entran directamente en modo de desarrollo.

## Correcciones

??? note "Ver las correcciones de esta versión"

    - **Informes:** los informes relacionados vuelven a aplicar el registro actual y sus filtros; también se generan correctamente con autenticación de Windows.
    - **Seguridad e integraciones:** la aplicación MCP vuelve a incluir una versión del SDK con una corrección de seguridad. [Más información](../../2ProductDevelopment/MCP/1Prerequisites.md)
    - **Interfaz y páginas:** los registros nuevos muestran un título adecuado, las páginas sin permiso presentan un aviso de seguridad y vuelven a verse cinco diseños de página en Linux y Docker.
    - **Notificaciones:** las notificaciones sin leer recuperan el fondo blanco, la barra azul y el texto azul en la skin 2022.
    - **Tareas programadas:** se detienen correctamente al reiniciar o actualizar la aplicación en IIS.
