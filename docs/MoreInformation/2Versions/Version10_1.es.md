# Versión 10.1

Flexygo 10.1 te ayuda a entender y optimizar la salud de tu aplicación, y hace más flexibles las actualizaciones y el despliegue. También incorpora mejoras en la configuración, las herramientas de desarrollo, la interfaz y la seguridad.

## Lo más destacado

### Panel de salud y recursos

Consulta en un solo panel las alertas, recomendaciones, usuarios conectados, métricas y ajustes de tu aplicación. También puedes revisar sugerencias para optimizarla, deshacer los índices sugeridos y consultar el registro de cambios. Está disponible para administradores y desde el panel de control de la skin 2026.

![Panel de salud y recursos](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[Más información: salud de la aplicación](../../Help/Administration/HealthPanel.md)

## Otras novedades

### Actualización y despliegue

- **Actualizaciones programadas:** prográmalas, cámbialas o cancélalas; se ejecutan en segundo plano con avisos y un modo de mantenimiento coordinado. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Preparación de versiones:** el Actualizador puede actualizarse a sí mismo y completar tareas delegadas; la tarea nocturna prepara la siguiente versión y registra el resultado. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Actualización en Docker:** sigue un asistente de cinco pasos y consulta un resumen del resultado. La documentación explica las actualizaciones mediante imágenes y conserva las personalizaciones de la página de mantenimiento. [Más información](../../1Deployment/3Updater/DockerUpdate.md)
- **Recursos de despliegue:** calcula los servidores recomendados según el uso y comprueba cómo se ajusta tu instalación a las recomendaciones.
- **Exportación de productos:** elige si quieres incluir la base de datos de datos al exportar un proyecto como producto. [Más información](../../2ProductDevelopment/8ExportProject/2Reference.md)

### Configuración

- **Cambios en desarrollo:** se aplican en la siguiente solicitud, sin tener que recargar la caché. [Más información](../../Help/Administration/AppSettings.md)
- **Ajustes de la aplicación:** configura cuánto pueden durar las llamadas entre el frontend y el backend; los administradores también pueden consultar y modificar los ajustes desde su pantalla. [Más información](../../Help/Administration/AppSettings.md)
- **Conexiones y diseño:** la configuración explica qué implica el atributo «encrypt» en las conexiones de bases de datos, y la skin 2022 adapta a sus colores los paneles de configuración y salud. [Más información](../../1Deployment/2ConfigWizard/EncryptedSettings.md)

### Herramientas de desarrollo

- **Colecciones:** configura sus ajustes desde el banco de trabajo del objeto.
- **Plugin Lowdy:** gira su personaje al ángulo que quieras.
- **Scripts:** respetan la cultura del usuario y pueden esperar a que terminen otros procesos.
- **Recorridos y módulos:** las marcas siguen al elemento seleccionado al desplazarte; puedes colocar módulos con el botón derecho o arrastrándolos, y cambiar la distribución desde una barra más clara. [Más información](../../Help/Modules/ModuleManagement.md)

### Interfaz

- **Menú de la skin 2026:** edita, añade, configura la visibilidad o elimina nodos con el botón derecho. [Más información](../../Help/Administration/Skin2026.md)
- **Accesos rápidos:** en la skin 2026, pulsa / para buscar y Ctrl+K para abrir favoritos, páginas recientes y atajos. [Más información](../../Help/Administration/Skin2026.md)
- **Menú lateral:** muestra Importar solo cuando hay una configuración de importación activa. Los diseñadores entran en modo de desarrollo al iniciar sesión. [Más información](../../Help/Administration/Skin2026.md)
- **Avisos de inicio:** aparecen de forma ordenada y las actualizaciones de versión incluyen también parches y betas.

### Asistentes e integraciones

- **Asistente de Flexygo:** interactúa con las pantallas y filtra u ordena vistas desde el chat, con aprobación del usuario y respetando sus permisos. [Más información](../../Help/AIAssistants/3Decisions.md)
- **Brevo:** añade o quita contactos de una lista indicando solo su correo electrónico. [Más información](../../Help/Connectors/SendinBlue.md)

### Informes y procesos

- **Exportación a Excel:** exporta informes y listados a la vez sin que se mezclen los archivos.
- **Botones de proceso:** puedes dejar sin icono los botones genéricos.

### Rendimiento

- **Carga de la aplicación:** se acelera la carga de la configuración y de las principales páginas y listados.

### Seguridad

- **Permisos de edición:** las restricciones del rol también se aplican al guardar valores. [Más información](../../Help/Administration/RolesAndPermissions/1Overview.md)
- **Filtros de visibilidad:** se aplican al leer registros por clave, desde cualquier pantalla o llamada. [Más información](../../Help/Administration/RolesAndPermissions/1Overview.md)

## Correcciones

??? note "Ver las correcciones de esta versión"

    - **Informes:** los informes relacionados aplican los datos del registro actual y sus filtros; Crystal Reports funciona con bases de datos que usan autenticación de Windows.
    - **Inicio de sesión:** el acceso mediante LDAP vuelve a validar la contraseña en el directorio.
    - **Integraciones:** se corrige el tratamiento de la contraseña del certificado y la aplicación MCP incorpora una versión del SDK con una corrección de seguridad.
    - **Interfaz:** el contador incluye todos los avisos sin leer, las páginas dejan de duplicar columnas de módulo, los registros nuevos muestran un título adecuado y las páginas sin permiso avisan de ello. También vuelven a mostrarse imágenes de diseños en Linux y Docker, y se restaura el aspecto de las notificaciones sin leer en la skin 2022.
    - **Seguridad:** los datos introducidos en registros se muestran como texto seguro y no ejecutan código de plantilla. La WebAPI y MCP ejecutan cada proceso solo sobre el objeto para el que está definido. [Más información](../../Help/Administration/RolesAndPermissions/4WebAPIMCP.md)
    - **Tareas programadas:** se detienen correctamente al reiniciar o actualizar la aplicación en IIS.
