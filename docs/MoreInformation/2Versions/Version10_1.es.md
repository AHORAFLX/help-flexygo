# Versión 10.1

Flexygo 10.1 reúne en un panel la salud, las métricas y los ajustes de la aplicación. También facilita la actualización y el despliegue, y añade mejoras para administrar y desarrollar tu aplicación.

## Lo más destacado

### Salud y recursos

Consulta alertas, recomendaciones, usuarios conectados y métricas desde un único panel. También puedes revisar los ajustes y las sugerencias para optimizar la aplicación; los cambios quedan registrados y puedes deshacer los índices sugeridos. Está disponible para administradores y desde el panel de control de la skin 2026.

![Salud y recursos](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[Más información: panel de la aplicación](../../Help/Administration/HealthPanel.md)

## Otras novedades

### Actualización

- **Actualizaciones programadas:** puedes programarlas, cambiarlas o cancelarlas; se ejecutan en segundo plano con avisos y un modo de mantenimiento coordinado. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Actualizador:** puede actualizarse a sí mismo y completar preparaciones y actualizaciones delegadas aunque superen el tiempo de espera habitual. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Preparación nocturna:** una tarea prepara en segundo plano la siguiente versión del proyecto y registra el resultado. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Docker:** la actualización sigue un asistente de cinco pasos y termina con un resumen del resultado. [Más información](../../1Deployment/3Updater/DockerUpdate.md)

### Despliegue y productos

- **Exportar un producto:** al exportar un proyecto como producto, puedes elegir si incluir su base de datos de datos.
- **Docker:** la página de versiones explica cómo actualizar mediante imágenes y la página de mantenimiento conserva las personalizaciones. [Más información](../../1Deployment/3Updater/DockerUpdate.md)

### Administración y seguridad

- **Ajustes de la aplicación:** puedes configurar cuánto duran las llamadas del frontend al backend y consultar o modificar los ajustes desde su pantalla. [Más información](../../Help/Administration/AppSettings.md)
- **Conexiones de bases de datos:** al configurar una conexión, se explica qué implica el atributo «encrypt». [Más información](../../1Deployment/2ConfigWizard/AppSettingsReference.md)
- **Filtros de visibilidad:** se aplican al leer registros por clave desde cualquier pantalla o llamada. [Más información](../../Help/Administration/RolesAndPermissions/1Overview.md)
- **Skin 2022:** los paneles de configuración y salud se muestran con un diseño claro adaptado a sus colores. [Más información](../../Help/Administration/AppSettings.md)

### Interfaz y navegación

- **Búsqueda en la skin 2026:** usa / para buscar en la lista visible y Ctrl+K para consultar favoritos y páginas recientes. [Más información](../../Help/Administration/Skin2026.md)
- **Menú de la skin 2026:** gestiona sus nodos con el botón derecho. [Más información](../../Help/Administration/Skin2026.md)
- **Menú lateral:** Importar solo aparece cuando hay una configuración de importación activa.
- **Avisos de inicio:** aparecen de forma ordenada; las actualizaciones de versión incluyen también parches y versiones beta.

### Herramientas de desarrollo

- **Colecciones:** configura sus ajustes desde el banco de trabajo del objeto.
- **Recorridos:** las marcas del editor siguen al elemento seleccionado al desplazarte por la página.
- **Módulos:** colócalos con el botón derecho o arrastrándolos, y cambia la distribución desde una barra más clara. [Más información](../../Help/Modules/ModuleManagement.md)
- **Lowdy:** gira su personaje a cualquier ángulo.
- **Diseñadores:** al iniciar sesión, entran en modo de desarrollo sin que tengas que abrirlo desde el menú.

### Informes y procesos

- **Excel:** puedes exportar informes y listados a la vez sin que se mezclen los archivos.
- **Botones de proceso:** puedes dejar sin icono los botones genéricos.

## Correcciones

??? note "Ver las correcciones de esta versión"

    - **Informes:** los informes relacionados usan los datos del registro actual y sus filtros; Crystal Reports funciona con bases de datos que usan autenticación de Windows.
    - **MCP y WebAPI:** la aplicación MCP incluye una versión del SDK con una corrección de seguridad, y cada proceso solo se ejecuta sobre el objeto para el que está definido.
    - **Interfaz:** los registros nuevos muestran un título adecuado, las páginas sin permiso presentan un aviso de seguridad y vuelven a verse imágenes de diseños en Linux y Docker.
    - **Notificaciones:** en la skin 2022, las notificaciones sin leer vuelven a mostrarse con fondo blanco, barra azul y texto azul.
    - **Tareas programadas:** se detienen correctamente al reiniciar o actualizar la aplicación en IIS.
