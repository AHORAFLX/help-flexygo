# Versión 10.1

Flexygo 10.1 incorpora un panel para consultar la salud y los recursos de la aplicación, y facilita la planificación de actualizaciones y el despliegue. También amplía las opciones de configuración, desarrollo y navegación.

## Lo más destacado

### Salud y recursos de la aplicación

Consulta en un único panel las alertas, recomendaciones, usuarios conectados y métricas de la aplicación. También puedes revisar ajustes y sugerencias de optimización; los cambios quedan registrados y puedes deshacer los índices sugeridos. Está disponible para administradores y desde el panel de control de la skin 2026.

![Salud y recursos de la aplicación](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[Más información: salud de la aplicación](../../Help/Administration/HealthPanel.md)

## Otras novedades

### Actualizaciones

- **Programación:** programa, cambia o cancela actualizaciones; se ejecutan en segundo plano con avisos y un modo de mantenimiento coordinado. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Actualizador:** puede actualizarse a sí mismo y completar preparaciones y actualizaciones delegadas que superen el tiempo de espera habitual; la descripción de la precarga está disponible en más idiomas. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Docker:** la actualización sigue un asistente de cinco pasos y termina con un resumen del resultado. [Más información](../../1Deployment/3Updater/DockerUpdate.md)
- **Preparación nocturna:** una tarea prepara en segundo plano la siguiente versión del proyecto y deja constancia del resultado.

### Despliegue y exportación

- **Recursos:** comprueba cómo se ajusta tu instalación a las recomendaciones de la calculadora de recursos.
- **Dimensionamiento:** calcula los servidores recomendados para un despliegue según sus características de uso.
- **Exportación de productos:** al exportar un proyecto como producto, puedes elegir si incluyes su base de datos de datos. [Más información](../../2ProductDevelopment/8ExportProject/2Reference.md)
- **Docker:** la documentación explica cómo actualizar mediante imágenes y conserva las personalizaciones de la página de mantenimiento. [Más información](../../1Deployment/3Updater/DockerUpdate.md)

### Configuración y seguridad

- **Ajustes de la aplicación:** configura cuánto duran las llamadas del frontend al backend y consulta o modifica los ajustes desde su pantalla. [Más información](../../Help/Administration/AppSettings.md)
- **Conexiones de bases de datos:** al configurar una conexión, se explica qué implica el atributo «encrypt». [Más información](../../1Deployment/2ConfigWizard/EncryptedSettings.md)
- **Skin 2022:** los paneles de configuración y salud usan un diseño claro adaptado a sus colores. [Más información](../../Help/Administration/HealthPanel.md)
- **Filtros de visibilidad:** se aplican al leer registros por clave desde cualquier pantalla o llamada. [Más información](../../Help/Administration/RolesAndPermissions/3Rules.md)

### Desarrollo e integraciones

- **Colecciones:** configura sus ajustes desde el banco de trabajo del objeto.
- **Lowdy:** el personaje del plugin puede girarse a cualquier ángulo.
- **Editor de recorridos:** las marcas siguen al elemento seleccionado al desplazarte por la página.
- **Módulos:** colócalos con el botón derecho o arrastrándolos, y cambia la distribución desde una barra más clara. [Más información](../../Help/Modules/ModuleManagement.md)
- **Diseñadores:** al iniciar sesión, entran directamente en modo de desarrollo.
- **Brevo:** añade o quita contactos de una lista usando solo su correo electrónico. [Más información](../../Help/Connectors/SendinBlue.md)

### Interfaz y navegación

- **Menú de la skin 2026:** gestiona sus nodos con el botón derecho. [Más información](../../Help/Administration/Skin2026.md)
- **Búsqueda en la skin 2026:** usa / para buscar en la lista visible y Ctrl+K para consultar favoritos y páginas recientes. [Más información](../../Help/Administration/Skin2026.md)
- **Avisos de inicio:** aparecen de forma ordenada y las actualizaciones de versión incluyen parches y betas.
- **Menú lateral:** muestra Importar solo cuando hay una configuración de importación activa.

### Informes y procesos

- **Exportación a Excel:** puedes exportar informes y listados a la vez sin que se mezclen los archivos.
- **Botones de proceso:** puedes dejar sin icono los botones genéricos.

## Correcciones

??? note "Ver las correcciones de esta versión"

    - **Informes:** los informes relacionados vuelven a aplicar los datos del registro actual y sus filtros, y Crystal Reports funciona con bases de datos que usan autenticación de Windows.
    - **WebAPI y MCP:** cada proceso vuelve a ejecutarse solo sobre el objeto para el que está definido; la aplicación MCP incorpora una corrección de seguridad en su SDK. [Más información](../../Help/Administration/RolesAndPermissions/4WebAPIMCP.md)
    - **Interfaz:** los registros nuevos muestran un título adecuado, las páginas sin permiso presentan un aviso de seguridad y vuelven a verse imágenes de diseños en Linux y Docker.
    - **Notificaciones:** en la skin 2022, las notificaciones sin leer vuelven a mostrarse con fondo blanco, barra azul y texto azul.
    - **Tareas programadas:** se detienen correctamente al reiniciar o actualizar la aplicación en IIS.
