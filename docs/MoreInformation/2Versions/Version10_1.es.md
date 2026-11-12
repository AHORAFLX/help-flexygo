# Versión 10.1

Flexygo 10.1 te ayuda a vigilar la salud de la aplicación y mejora la gestión de actualizaciones y despliegues. También incorpora ajustes de configuración y cambios en herramientas de desarrollo, navegación e informes.

## Lo más destacado

### Panel de salud de la aplicación

Consulta desde un único panel las alertas, recomendaciones, usuarios conectados, métricas y ajustes de la aplicación. También puedes revisar sugerencias para optimizarla; los cambios quedan registrados y puedes deshacer los índices sugeridos. El panel está disponible para administradores y desde el panel de control de la skin 2026.

![Panel de salud de la aplicación](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[Más información: panel de salud](../../Help/Administration/HealthPanel.md)

## Otras novedades

### Actualizaciones

- **Programación:** programa, cambia o cancela actualizaciones para que se ejecuten en segundo plano, con avisos y modo de mantenimiento coordinado. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Preparación y duración:** el Actualizador puede actualizarse a sí mismo y completar preparaciones y actualizaciones delegadas aunque superen el tiempo de espera habitual. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Preparación nocturna:** una tarea prepara en segundo plano la siguiente versión del proyecto y registra el resultado. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Idiomas:** la descripción del proceso de precarga del Actualizador está disponible en más idiomas. [Más información](../../1Deployment/3Updater/UpdateFlow.md)

### Despliegue y productos

- **Actualización en Docker:** sigue un asistente de cinco pasos y consulta un resumen del resultado. [Más información](../../1Deployment/3Updater/DockerUpdate.md)
- **Exportación de productos:** al exportar un proyecto como producto, eliges si incluir su base de datos de datos. [Más información](../../2ProductDevelopment/8ExportProject/2Reference.md)
- **Docker:** la página de versiones explica cómo actualizar mediante imágenes, y la de mantenimiento conserva las personalizaciones. [Más información](../../1Deployment/3Updater/DockerUpdate.md)

### Configuración y seguridad

- **Duración de llamadas:** configura cuánto pueden durar las llamadas del frontend al backend desde los ajustes de la aplicación. [Más información](../../Help/Administration/AppSettings.md)
- **Ajustes de la aplicación:** los administradores pueden consultarlos y modificarlos desde la pantalla de configuración. [Más información](../../Help/Administration/AppSettings.md)
- **Conexiones de bases de datos:** al configurarlas, se explica qué implica el atributo «encrypt». [Más información](../../1Deployment/2ConfigWizard/EncryptedSettings.md)
- **Skin 2022:** los paneles de configuración y salud se muestran con un diseño claro adaptado a sus colores. [Más información](../../Help/Administration/AppSettings.md)
- **Filtros de visibilidad:** se aplican al leer registros por clave desde cualquier pantalla o llamada. [Más información](../../Help/Administration/RolesAndPermissions/1Overview.md)

### Herramientas de desarrollo

- **Colecciones:** configura sus ajustes desde el banco de trabajo del objeto.
- **Lowdy:** gira el personaje del plugin a cualquier ángulo.
- **Editor de recorridos:** las marcas siguen al elemento seleccionado al desplazarte por la página.
- **Módulos:** colócalos con el botón derecho o arrastrándolos, y cambia la distribución desde una barra más clara. [Más información](../../Help/Modules/ModuleManagement.md)
- **Botones de proceso:** puedes dejar sin icono los botones genéricos.

### Interfaz e inicio

- **Búsqueda en la skin 2026:** usa / para buscar en la lista visible y Ctrl+K para consultar favoritos y páginas recientes. [Más información](../../Help/Administration/Skin2026.md)
- **Avisos de inicio:** aparecen de forma ordenada; las actualizaciones de versión incluyen parches y betas.
- **Menú lateral:** muestra Importar solo cuando hay una configuración de importación activa.
- **Modo de desarrollo:** los diseñadores entran en él al iniciar sesión, sin tener que abrirlo desde el menú.
- **Menú de la skin 2026:** gestiona sus nodos con el botón derecho. [Más información](../../Help/Administration/Skin2026.md)

### Integraciones e informes

- **Brevo:** añade o quita contactos de una lista usando solo su correo electrónico. [Más información](../../Help/Connectors/SendinBlue.md)
- **Exportación a Excel:** exporta informes y listados a la vez sin que se mezclen los archivos.

## Correcciones

??? note "Ver las correcciones de esta versión"

    - **Informes:** los informes relacionados vuelven a aplicar los datos del registro actual y sus filtros; Crystal Reports vuelve a funcionar con bases de datos que usan autenticación de Windows.
    - **Integración MCP:** la aplicación MCP vuelve a usar un SDK con la corrección de seguridad incluida. [Más información](../../2ProductDevelopment/MCP/2Usage.md)
    - **Interfaz y permisos:** los registros nuevos vuelven a mostrar un título adecuado y las páginas sin permiso presentan un aviso de seguridad.
    - **Diseños de página:** vuelven a mostrarse las imágenes de cinco diseños en instalaciones Linux y Docker.
    - **Notificaciones:** en la skin 2022, las notificaciones sin leer vuelven a mostrarse con fondo blanco, barra azul y texto azul.
    - **WebAPI y MCP:** cada proceso vuelve a ejecutarse únicamente sobre el objeto para el que está definido. [Más información](../../Help/Administration/RolesAndPermissions/4WebAPIMCP.md)
    - **Tareas programadas:** en IIS, se detienen correctamente al reiniciar o actualizar la aplicación.
