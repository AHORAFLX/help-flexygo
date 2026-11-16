# Versión 10.1

Flexygo 10.1 reúne en un panel la salud, las métricas y la configuración de la aplicación, y facilita la gestión de las actualizaciones. También mejora las herramientas de desarrollo, la interfaz, el rendimiento y la seguridad.

## Lo más destacado

### Panel de salud y recursos

Consulta alertas, recomendaciones, usuarios conectados y métricas, junto con los ajustes de la aplicación, desde un único panel. También puedes revisar sugerencias para optimizarla, deshacer los índices sugeridos y consultar el registro de cambios. Está disponible para administradores y en el dashboard de la skin 2026.

![Panel de salud y recursos](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[Más información: panel de salud](../../Help/Administration/HealthPanel.md)

## Otras novedades

### Actualizaciones y despliegue

- **Programar actualizaciones:** puedes programarlas, modificarlas o cancelarlas; se ejecutan en segundo plano con avisos y un modo de mantenimiento coordinado. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Preparación en segundo plano:** el Actualizador puede actualizarse a sí mismo y completar preparaciones y actualizaciones delegadas aunque superen el tiempo de espera habitual; la tarea nocturna prepara la siguiente versión y registra el resultado. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Actualización en Docker:** un asistente guía la actualización en cinco pasos y muestra un resumen del resultado. La página de versiones explica cómo actualizar mediante imágenes y la de mantenimiento conserva las personalizaciones. [Más información](../../1Deployment/3Updater/DockerUpdate.md)
- **Calculadora de recursos:** calcula los servidores recomendados para un despliegue según el uso previsto y comprueba cómo se ajusta tu instalación a sus recomendaciones.
- **Exportar como producto:** al exportar un proyecto, puedes elegir si incluyes su base de datos de datos. [Más información](../../2ProductDevelopment/8ExportProject/2Reference.md)

### Configuración

- **Cambios en desarrollo:** los cambios de configuración se aplican en la siguiente solicitud, sin recargar la caché.
- **Tiempo de espera:** configura desde los ajustes de la aplicación cuánto pueden durar las llamadas del frontend al backend. [Más información](../../Help/Administration/AppSettings.md)
- **Ajustes de la aplicación:** los administradores pueden consultar y modificar los ajustes desde su pantalla de configuración. [Más información](../../Help/Administration/AppSettings.md)
- **Conexiones de bases de datos:** al configurarlas, se explica qué implica el atributo `encrypt`. [Más información](../../1Deployment/2ConfigWizard/EncryptedSettings.md)

### Herramientas de desarrollo

- **C# 14:** los procesos integrados y las vistas recompiladas en tiempo de ejecución admiten esta versión.
- **Colecciones:** puedes configurarlas desde el banco de trabajo del objeto.
- **Menú de la skin 2026:** gestiona los nodos del menú con el botón derecho. [Más información](../../Help/Administration/Skin2026.md)
- **Diseñador y MCP:** sus cambios se aplican en la siguiente solicitud, sin vaciar la caché al guardar datos.
- **Editor de recorridos:** las marcas siguen al elemento seleccionado al desplazarte por la página.
- **Colocación de módulos:** puedes colocarlos con el botón derecho o arrastrándolos, y cambiar la distribución desde una barra más clara. [Más información](../../Help/Modules/ModuleManagement.md)

### IA e integraciones

- **Vistas para asistentes de IA:** pueden consultar vistas con parámetros tipados y validar que los valores enviados sean correctos. [Más información](../../Help/AIAssistants/2Reference.md)
- **Interacción desde el chat:** el asistente puede interactuar con las pantallas de Flexygo si el usuario lo aprueba. [Más información](../../Help/AIAssistants/3Decisions.md)
- **Brevo:** añade o quita contactos de una lista indicando solo su correo electrónico. [Más información](../../Help/Connectors/SendinBlue.md)

### Interfaz

- **Búsqueda rápida:** reúne favoritos, páginas recientes y atajos; en la skin 2026, puedes buscar la lista activa con /. [Más información](../../Help/Administration/Skin2026.md)
- **Menú lateral:** muestra Importar solo cuando hay una configuración de importación activa.
- **Skin 2022:** muestra los paneles de configuración y salud con un diseño claro adaptado a sus colores. [Más información](../../Help/Administration/HealthPanel.md)
- **Skin 2026:** las páginas se actualizan y navegan con menos esperas y saltos; el modo de desarrollo se activa al iniciar sesión para los diseñadores. [Más información](../../Help/Administration/Skin2026.md)

### Informes y rendimiento

- **Textos del diseñador de informes:** hay más traducciones al español, catalán, francés, italiano, portugués y alemán.
- **Exportación a Excel:** puedes exportar informes y listados al mismo tiempo sin que se mezclen los archivos.
- **Carga de páginas y procesos:** abren más rápido al reutilizar sus definiciones en memoria.
- **Carga y actualización:** la configuración y varias pantallas cargan más rápido; la actualización de la base de datos muestra el avance de sus fases y tablas.

### Seguridad

- **Edición según el rol:** las restricciones del rol también se aplican al guardar valores. [Más información](../../Help/Administration/RolesAndPermissions/1Overview.md)
- **Filtros de visibilidad:** se aplican al leer registros por clave desde cualquier pantalla o llamada. [Más información](../../Help/Administration/RolesAndPermissions/1Overview.md)

### Procesos y scripts

- **Botones de proceso:** los botones genéricos pueden configurarse sin icono.
- **Scripts:** respetan la cultura del usuario y pueden esperar a que terminen los procesos.

## Correcciones

??? note "Ver las correcciones de esta versión"

    - **Configuración:** se corrigen la gestión de conexiones, el guardado inmediato de ajustes cuando la caché está desactivada y el envío de registros de diagnóstico y producto.
    - **Diseñador de formularios:** puedes volver a cambiar el tamaño de los campos después de añadirlos, eliminarlos o cambiar de pestaña.
    - **Informes:** los informes relacionados usan el registro y los filtros correspondientes; Crystal Reports también funciona con autenticación de Windows.
    - **Inicio:** las tarjetas de Salud, Versión y Licencia mantienen su contenido mientras se actualizan.
    - **Inicio de sesión:** LDAP vuelve a validar la contraseña en el directorio.
    - **Integraciones:** se corrigen las conexiones externas con MySQL 8.0 o posterior, un problema con la contraseña de la clave del certificado y una vulnerabilidad en el SDK de la aplicación MCP.
    - **Asistentes de IA:** vuelven a funcionar los filtros y el orden por columnas, incluidas las calculadas y compartidas.
    - **Interfaz:** se corrigen fallos en páginas, menús y vistas tras un inicio con mucha actividad, el recuento de avisos, los títulos, los avisos de seguridad y varias imágenes y estilos.
    - **Seguridad:** los datos introducidos se muestran como texto seguro y no ejecutan código de plantilla; la WebAPI y MCP solo ejecutan procesos en el objeto para el que están definidos. [Más información](../../Help/Administration/RolesAndPermissions/4WebAPIMCP.md)
    - **Procesos y tareas:** vuelven a funcionar los procesos sobre listas filtradas con claves compuestas, y las tareas programadas se detienen correctamente al reiniciar o actualizar la aplicación en IIS.
