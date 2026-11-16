# Versión 10.1

Flexygo 10.1 reúne la salud, las métricas y los ajustes de la aplicación en un único panel. También agiliza las actualizaciones y mejora la configuración, la seguridad y el trabajo diario de desarrollo.

## Lo más destacado

### Salud y recursos

Consulta en un único panel las alertas, recomendaciones, usuarios conectados, métricas y ajustes de la aplicación. También puedes revisar sugerencias para optimizarla, deshacer los índices sugeridos y consultar los cambios registrados. El panel está disponible para administradores y desde el dashboard de la skin 2026.

![Salud y recursos](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[Más información: salud y recursos](../../Help/Administration/HealthPanel.md)

## Otras novedades

### Actualización y despliegue

- **Actualizaciones programadas:** programa, modifica o cancela actualizaciones, que se ejecutan en segundo plano con avisos y un modo de mantenimiento coordinado. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Actualizador:** puede actualizarse a sí mismo y completar preparaciones y actualizaciones delegadas aunque superen el tiempo de espera habitual. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Docker:** actualiza con un asistente de cinco pasos que termina con un resumen del resultado. [Más información](../../1Deployment/3Updater/DockerUpdate.md)
- **Preparación nocturna:** una tarea prepara en segundo plano la siguiente versión del proyecto y registra el resultado. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Recursos de despliegue:** compara tu instalación con las recomendaciones y calcula los servidores adecuados según el uso previsto.
- **Exportación de productos:** al exportar un proyecto, puedes elegir si incluyes su base de datos de datos. [Más información](../../2ProductDevelopment/8ExportProject/2Reference.md)

### Configuración y administración

- **Configuración en desarrollo:** los cambios se aplican en la siguiente solicitud, sin recargar la caché.
- **Ajustes de la aplicación:** los administradores pueden consultarlos y modificarlos desde su pantalla; también se explica el atributo `encrypt` de las conexiones. [Más información](../../Help/Administration/AppSettings.md)
- **Conexiones con el backend:** configura desde los ajustes de la aplicación cuánto pueden durar las llamadas del frontend. [Más información](../../Help/Administration/AppSettings.md)
- **Skin 2022:** los paneles de configuración y salud se muestran con un diseño claro adaptado a sus colores.

### Herramientas de desarrollo

- **C# 14:** los procesos integrados y las vistas recompiladas en tiempo de ejecución admiten esta versión.
- **Colecciones:** configúralas desde el banco de trabajo del objeto.
- **Cambios de diseño:** los cambios del diseñador y MCP se aplican en la siguiente solicitud, sin vaciar la caché al guardar datos.
- **Scripts:** respetan la cultura del usuario y pueden esperar a que terminen los procesos.
- **Diseñador de recorridos:** las marcas siguen al elemento seleccionado al desplazarte por la página.
- **Módulos:** colócalos con el botón derecho o arrastrándolos, y cambia la distribución desde una barra más clara. [Más información](../../Help/Modules/ModuleManagement.md)
- **Lowdy:** el plugin permite girar su personaje a cualquier ángulo.

### Interfaz y navegación

- **Menú de la skin 2026:** gestiona los nodos con el botón derecho. [Más información](../../Help/Administration/Skin2026.md)
- **Búsqueda rápida:** reúne favoritos, páginas recientes y atajos; en la skin 2026, busca también en la lista activa con /. [Más información](../../Help/Administration/Skin2026.md)
- **Menú lateral:** muestra Importar solo cuando hay una configuración de importación activa.
- **Skin 2026:** las páginas se actualizan y navegan con menos esperas y saltos; el modo de desarrollo se activa al iniciar sesión para los diseñadores. [Más información](../../Help/Administration/Skin2026.md)

### Inteligencia artificial e integraciones

- **Asistente de Flexygo:** interactúa con las pantallas y filtra u ordena vistas desde el chat, con aprobación del usuario y respetando sus permisos. [Más información](../../Help/AIAssistants/3Decisions.md)
- **Brevo:** añade o quita contactos de una lista indicando solo su correo electrónico. [Más información](../../Help/Connectors/SendinBlue.md)

### Informes y exportación

- **Diseñador de informes:** ofrece más textos traducidos al español, catalán, francés, italiano, portugués y alemán.
- **Exportación a Excel:** exporta informes y listados a la vez sin que se mezclen los archivos.

### Rendimiento

- **Carga de páginas y procesos:** páginas, módulos y procesos abren más rápido al reutilizar sus definiciones en memoria.
- **Configuración y base de datos:** varias pantallas cargan más rápido y la actualización de la base de datos muestra el avance de sus fases y tablas.

### Seguridad

- **Permisos de edición:** las restricciones del rol también se aplican al guardar valores. [Más información](../../Help/Administration/RolesAndPermissions/1Overview.md)
- **Filtros de visibilidad:** se aplican al leer registros por clave desde cualquier pantalla o llamada. [Más información](../../Help/Administration/RolesAndPermissions/1Overview.md)

## Correcciones

??? note "Ver las correcciones de esta versión"

    - **Configuración:** vuelven a guardarse los ajustes al momento con la caché desactivada, se corrige la gestión de conexiones y la telemetría envía los registros correctamente.
    - **Formularios:** puedes volver a redimensionar campos del diseñador tras añadirlos, eliminarlos o cambiar de pestaña.
    - **Informes:** los informes relacionados usan el registro y los filtros correctos, y Crystal Reports funciona con autenticación de Windows.
    - **Pantalla de inicio:** las tarjetas de Salud, Versión y Licencia mantienen su contenido mientras se actualizan.
    - **Inicio de sesión:** el acceso mediante LDAP vuelve a validar la contraseña en el directorio.
    - **Integraciones:** las conexiones externas funcionan con MySQL 8.0 y posteriores, se corrige un problema con la contraseña de la clave del certificado y MCP incorpora una corrección de seguridad.
    - **Interfaz:** páginas, menús y vistas siguen funcionando tras inicios con mucha actividad; se corrigen avisos, columnas duplicadas, títulos, mensajes de seguridad e imágenes.
    - **Notificaciones:** en la skin 2022, las notificaciones sin leer recuperan el fondo blanco, la barra azul y el texto azul.
    - **Seguridad:** los datos introducidos se muestran como texto seguro y la WebAPI y MCP ejecutan cada proceso solo sobre el objeto para el que está definido.
    - **Tareas programadas:** se detienen correctamente al reiniciar o actualizar la aplicación en IIS.
