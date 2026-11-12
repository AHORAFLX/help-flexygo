# Versión 10.1

Flexygo 10.1 incorpora un panel para consultar la salud y los recursos de la aplicación. También facilita las actualizaciones y añade mejoras de configuración, despliegue, desarrollo e interfaz.

## Lo más destacado

### Salud y recursos

Consulta alertas, recomendaciones, usuarios conectados, métricas y ajustes desde un único panel. También puedes revisar sugerencias para optimizar la aplicación: los cambios quedan registrados y puedes deshacer los índices sugeridos. Está disponible para administradores y desde el panel de control de la skin 2026.

![Salud y recursos](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[Más información: salud de la aplicación](../../Help/Administration/HealthPanel.md)

## Otras novedades

### Actualizaciones

- **Programación de actualizaciones:** puedes programarlas, modificarlas o cancelarlas; se ejecutan en segundo plano con avisos y un modo de mantenimiento coordinado. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Actualizador:** puede actualizarse a sí mismo y completar preparaciones y actualizaciones delegadas aunque superen el tiempo de espera habitual. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Actualización en Docker:** sigue un asistente de cinco pasos y termina con un resumen del resultado. [Más información](../../1Deployment/3Updater/DockerUpdate.md)
- **Preparación nocturna:** una tarea prepara en segundo plano la siguiente versión del proyecto y deja constancia del resultado. [Más información](../../1Deployment/3Updater/UpdateFlow.md)

### Despliegue

- **Calculadora de recursos:** compara tu instalación con sus recomendaciones y calcula los servidores recomendados según el uso previsto.
- **Exportación de productos:** al exportar un proyecto como producto, puedes elegir si incluir su base de datos de datos. [Más información](../../2ProductDevelopment/8ExportProject/2Reference.md)
- **Docker:** la documentación explica cómo actualizar mediante imágenes y cómo conservar las personalizaciones de la página de mantenimiento. [Más información](../../1Deployment/3Updater/DockerUpdate.md)

### Configuración y seguridad

- **Ajustes de la aplicación:** los administradores pueden consultar y modificar la configuración, incluido el tiempo máximo de las llamadas del frontend al backend. [Más información](../../Help/Administration/AppSettings.md)
- **Conexiones de bases de datos:** la configuración explica qué implica el atributo «encrypt». [Más información](../../1Deployment/2ConfigWizard/Configuration.md)
- **Skin 2022:** los paneles de configuración y salud tienen un diseño claro adaptado a sus colores. [Más información](../../Help/Administration/HealthPanel.md)
- **Visibilidad por rol:** las restricciones se aplican al consultar y guardar registros. [Más información](../../Help/Administration/RolesAndPermissions/1Overview.md)

### Herramientas de desarrollo

- **Colecciones:** configura sus ajustes desde el banco de trabajo del objeto.
- **Editor de recorridos:** las marcas siguen al elemento seleccionado al desplazarte por la página.
- **Diseño de módulos:** coloca módulos con el botón derecho o arrastrándolos, y cambia la distribución desde una barra más clara. [Más información](../../Help/Modules/ModuleManagement.md)

### Interfaz

- **Menú de la skin 2026:** gestiona los nodos del menú con el botón derecho. [Más información](../../Help/Administration/Skin2026.md)
- **Búsqueda en la skin 2026:** usa / para buscar en la lista visible y Ctrl+K para consultar favoritos y páginas recientes. [Más información](../../Help/Administration/Skin2026.md)
- **Avisos de inicio:** aparecen de forma ordenada y las actualizaciones de versión incluyen también parches y betas.
- **Menú lateral:** Importar solo aparece cuando hay una configuración de importación activa.
- **Diseñadores:** al iniciar sesión, entran en modo de desarrollo sin tener que abrirlo desde el menú.

### Integraciones e informes

- **Brevo:** añade o quita contactos de una lista usando solo su correo electrónico. [Más información](../../Help/Connectors/SendinBlue.md)
- **Exportación a Excel:** puedes exportar informes y listados a la vez sin que se mezclen los archivos.

### Procesos

- **Botones genéricos:** puedes dejar sin icono los botones de proceso.

## Correcciones

??? note "Ver las correcciones de esta versión"

    - **Informes:** los informes relacionados vuelven a aplicar los datos del registro actual y sus filtros; Crystal Reports funciona con bases de datos que usan autenticación de Windows.
    - **Integración MCP:** la aplicación usa una versión corregida de su SDK.
    - **Interfaz:** los registros nuevos muestran un título adecuado, las páginas sin permiso presentan un aviso de seguridad y vuelven a mostrarse cinco diseños de página en Linux y Docker.
    - **Notificaciones:** en la skin 2022, las notificaciones sin leer vuelven a mostrarse con fondo blanco, barra azul y texto azul.
    - **WebAPI y MCP:** los procesos solo se ejecutan sobre el objeto para el que están definidos. [Más información](../../Help/Administration/RolesAndPermissions/4WebAPIMCP.md)
    - **Tareas programadas:** se detienen correctamente al reiniciar o actualizar la aplicación en IIS.
