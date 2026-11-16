# Versión 10.1

Flexygo 10.1 reúne en un panel la salud, las métricas y la configuración de la aplicación, y facilita la gestión de actualizaciones y despliegues. También incorpora mejoras en la configuración, las herramientas de desarrollo y la interfaz.

## Lo más destacado

### Salud y recursos de la aplicación

Consulta alertas, recomendaciones, usuarios conectados y métricas junto con los ajustes de la aplicación. El panel también ofrece sugerencias para optimizarla; puedes revisar los cambios registrados y deshacer los índices sugeridos. Está disponible para administradores y desde el dashboard de la skin 2026.

![Salud y recursos de la aplicación](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[Más información: salud de la aplicación](../../Help/Administration/HealthPanel.md)

## Otras novedades

### Actualizaciones y despliegue

- **Actualizaciones programadas:** programa, modifica o cancela actualizaciones, que se ejecutan en segundo plano con avisos y un modo de mantenimiento coordinado. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Actualizador:** puede actualizarse a sí mismo y completar preparaciones y actualizaciones delegadas que superen el tiempo de espera habitual. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Actualización en Docker:** sigue un asistente de cinco pasos y termina con un resumen del resultado. [Más información](../../1Deployment/3Updater/DockerUpdate.md)
- **Preparación nocturna:** una tarea prepara en segundo plano la siguiente versión del proyecto y registra el resultado. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Recursos de despliegue:** comprueba cómo se ajusta tu instalación a las recomendaciones y calcula los servidores recomendados según el uso previsto.
- **Exportar un producto:** al exportar un proyecto como producto, elige si quieres incluir su base de datos de datos. [Más información](../../2ProductDevelopment/8ExportProject/2Reference.md)
- **Docker:** la página de versiones explica las actualizaciones mediante imágenes y la página de mantenimiento conserva las personalizaciones. [Más información](../../1Deployment/3Updater/DockerUpdate.md)

### Configuración y administración

- **Cambios de configuración:** en desarrollo, se aplican en la siguiente solicitud sin recargar la caché; los administradores también pueden consultar y modificar los ajustes desde su pantalla. [Más información](../../Help/Administration/AppSettings.md)
- **Tiempo de espera:** configura cuánto pueden durar las llamadas del frontend al backend desde los ajustes de la aplicación. [Más información](../../Help/Administration/AppSettings.md)
- **Conexiones de bases de datos:** la configuración explica el atributo «encrypt». [Más información](../../1Deployment/2ConfigWizard/AppSettingsReference.md)
- **Skin 2022:** muestra los paneles de configuración y salud con un diseño claro adaptado a sus colores. [Más información](../../Help/Administration/HealthPanel.md)

### Herramientas de desarrollo

- **C# 14:** los procesos integrados y las vistas recompiladas en tiempo de ejecución lo admiten.
- **Colecciones:** configúralas desde el banco de trabajo del objeto.
- **Diseñador y MCP:** los cambios se aplican en la siguiente solicitud, sin vaciar la caché al guardar datos. [Más información](../../2ProductDevelopment/MCP/2Usage.md)
- **Scripts:** respetan la cultura del usuario y pueden esperar a que terminen los procesos.
- **Editor de recorridos:** las marcas siguen al elemento seleccionado al desplazarte por la página.
- **Diseño de módulos:** coloca módulos con el botón derecho o arrastrándolos, y cambia la distribución desde una barra más clara. [Más información](../../Help/Modules/ModuleManagement.md)

### Interfaz y navegación

- **Menú de la skin 2026:** gestiona los nodos con el botón derecho. [Más información](../../Help/Administration/Skin2026.md)
- **Búsqueda rápida:** reúne favoritos, páginas recientes y atajos; en la skin 2026, pulsa / para buscar en la lista activa. [Más información](../../Help/Administration/Skin2026.md)
- **Menú lateral:** muestra Importar solo cuando hay una configuración de importación activa.
- **Skin 2026:** las páginas se actualizan y navegan con menos esperas y saltos; el modo de desarrollo se activa al iniciar sesión para los diseñadores. [Más información](../../Help/Administration/Skin2026.md)

### Integraciones e inteligencia artificial

- **Brevo:** añade o quita contactos de una lista indicando solo su correo electrónico. [Más información](../../Help/Connectors/SendinBlue.md)
- **Asistente de Flexygo:** interactúa con pantallas y filtra u ordena vistas desde el chat, con aprobación del usuario y respetando sus permisos. [Más información](../../Help/AIAssistants/3Decisions.md)

### Informes y rendimiento

- **Diseñador de informes:** ofrece más textos traducidos al español, catalán, francés, italiano, portugués y alemán.
- **Exportación a Excel:** exporta informes y listados a la vez sin que se mezclen los archivos.
- **Carga más rápida:** páginas, módulos, procesos, ajustes y varias pantallas abren antes; la actualización de la base de datos muestra el avance de sus fases y tablas.

### Seguridad y procesos

- **Permisos de edición:** las restricciones del rol también se aplican al guardar valores. [Más información](../../Help/Administration/RolesAndPermissions/1Overview.md)
- **Filtros de visibilidad:** se aplican al leer registros por clave desde cualquier pantalla o llamada. [Más información](../../Help/Administration/RolesAndPermissions/1Overview.md)
- **Botones de proceso:** los botones genéricos pueden mostrarse sin icono.

## Correcciones

??? note "Ver las correcciones de esta versión"

    - **Configuración y telemetría:** guardar ajustes vuelve a ser inmediato con la caché desactivada y se envían correctamente los registros de diagnóstico y de producto.
    - **Informes:** los informes relacionados usan el registro y los filtros correspondientes, y Crystal Reports funciona con bases de datos que usan autenticación de Windows.
    - **Pantalla de inicio:** las tarjetas de Salud, Versión y Licencia mantienen su contenido mientras se actualizan.
    - **Inicio de sesión:** LDAP vuelve a validar la contraseña en el directorio.
    - **Integraciones:** las conexiones externas funcionan con MySQL 8.0 y posteriores, se corrige un problema con la contraseña de la clave del certificado y MCP incluye una corrección de seguridad del SDK.
    - **Interfaz:** páginas, menús y vistas siguen funcionando tras inicios con mucha actividad; se corrigen el recuento de avisos, columnas duplicadas, títulos, avisos de seguridad e imágenes de diseños.
    - **Notificaciones:** las no leídas vuelven a mostrarse con fondo blanco, barra azul y texto azul en la skin 2022.
    - **Seguridad:** los datos introducidos en registros se muestran como texto seguro y no ejecutan código de plantilla.
    - **WebAPI y MCP:** cada proceso se ejecuta solo sobre el objeto para el que está definido. [Más información](../../Help/Administration/RolesAndPermissions/4WebAPIMCP.md)
    - **Tareas programadas:** se detienen correctamente al reiniciar o actualizar la aplicación en IIS.
