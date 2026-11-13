# Versión 10.1

Flexygo 10.1 reúne en un panel la salud, las métricas y la configuración de la aplicación. También facilita las actualizaciones y el despliegue, y mejora la navegación, el desarrollo y la seguridad.

## Lo más destacado

### Panel de salud y recursos

Consulta en un único panel las alertas, recomendaciones, usuarios conectados, métricas y ajustes de la aplicación. También puedes revisar sugerencias para optimizarla: los cambios quedan registrados y puedes deshacer los índices sugeridos. Está disponible para administradores y desde el dashboard de la skin 2026.

![Panel de salud y recursos](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[Más información: panel de la aplicación](../../Help/Administration/HealthPanel.md)

## Otras novedades

### Actualizaciones y despliegue

- **Actualizaciones programadas:** programa, cambia o cancela actualizaciones que se ejecutan en segundo plano con avisos y un modo de mantenimiento coordinado. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Actualizador:** puede actualizarse a sí mismo y completar preparaciones y actualizaciones que superen el tiempo de espera habitual. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Docker:** actualiza con un asistente de cinco pasos y un resumen final; la documentación explica las actualizaciones mediante imágenes y cómo conservar las personalizaciones de mantenimiento. [Más información](../../1Deployment/3Updater/DockerUpdate.md)
- **Preparación nocturna:** una tarea prepara en segundo plano la siguiente versión del proyecto y deja constancia del resultado. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Recursos de despliegue:** compara tu instalación con las recomendaciones de la calculadora y calcula los servidores recomendados según el uso previsto.
- **Exportación de productos:** al exportar un proyecto como producto, eliges si incluir su base de datos de datos. [Más información](../../2ProductDevelopment/8ExportProject/2Reference.md)

### Configuración y rendimiento

- **Ajustes de la aplicación:** los administradores pueden consultarlos y modificarlos; en desarrollo, los cambios se aplican en la siguiente solicitud y puedes configurar cuánto duran las llamadas del frontend al backend. [Más información](../../Help/Administration/AppSettings.md)
- **Conexiones de bases de datos:** la configuración explica qué implica el atributo «encrypt». [Más información](../../1Deployment/2ConfigWizard/Configuration.md)
- **Carga de la aplicación:** las páginas, módulos, procesos, ajustes y varias pantallas cargan más rápido; la actualización de la base de datos muestra el avance de sus fases y tablas.

### Herramientas de desarrollo

- **Colecciones:** configura sus ajustes desde el banco de trabajo del objeto.
- **Lowdy:** gira el personaje del plugin a cualquier ángulo.
- **Scripts:** respetan la cultura del usuario y pueden esperar a que terminen otros procesos.
- **Editor de recorridos:** las marcas acompañan al elemento seleccionado cuando te desplazas por la página.
- **Diseño de módulos:** colócalos con el botón derecho o arrastrándolos, y cambia su distribución desde una barra más clara. [Más información](../../Help/Modules/ModuleManagement.md)
- **Botones de proceso:** puedes dejar sin icono los botones genéricos.

### Interfaz y navegación

- **Menú de la skin 2026:** edita, añade, configura la visibilidad o elimina nodos con el botón derecho. [Más información](../../Help/Administration/Skin2026.md)
- **Accesos rápidos:** en la skin 2026, usa / para buscar y Ctrl+K para abrir favoritos, páginas recientes y atajos. [Más información](../../Help/Administration/Skin2026.md)
- **Inicio:** los avisos aparecen ordenados y las actualizaciones de versión incluyen parches y versiones beta.
- **Menú lateral:** muestra Importar solo cuando hay una configuración de importación activa.
- **Skin 2026:** las páginas se actualizan y navegan con menos esperas y saltos; el modo de desarrollo se activa al iniciar sesión para los diseñadores. [Más información](../../Help/Administration/Skin2026.md)
- **Skin 2022:** los paneles de configuración y salud tienen un diseño claro adaptado a sus colores. [Más información](../../Help/Administration/HealthPanel.md)

### Integraciones e informes

- **Brevo:** añade o quita contactos de una lista indicando solo su correo electrónico. [Más información](../../Help/Connectors/SendinBlue.md)
- **Excel:** exporta informes y listados a la vez sin que se mezclen los archivos.

### IA y seguridad

- **Asistente de Flexygo:** interactúa con pantallas y filtra u ordena vistas desde el chat, con tu aprobación y respetando tus permisos. [Más información](../../Help/AIAssistants/3Decisions.md)
- **Permisos:** las restricciones de edición del rol también se aplican al guardar valores, y los filtros de visibilidad se respetan al leer registros por clave desde cualquier pantalla o llamada. [Más información](../../Help/Administration/RolesAndPermissions/1Overview.md)

## Correcciones

??? note "Ver las correcciones de esta versión"

    - **Informes:** los informes relacionados vuelven a aplicar los datos del registro actual y sus filtros; Crystal Reports funciona con bases de datos que usan autenticación de Windows.
    - **Inicio de sesión:** el acceso mediante LDAP vuelve a validar la contraseña en el directorio.
    - **Integraciones:** vuelve a funcionar correctamente el tratamiento de la contraseña del certificado y la aplicación MCP incluye una versión del SDK con una corrección de seguridad.
    - **Interfaz:** se corrigen el contador de avisos sin leer, las columnas duplicadas, el título de los registros nuevos, los avisos de seguridad y las imágenes de diseños de página en Linux y Docker.
    - **Notificaciones:** los avisos sin leer vuelven a mostrarse con fondo blanco, barra azul y texto azul en la skin 2022.
    - **Seguridad:** los datos introducidos en registros se muestran como texto seguro; la WebAPI y MCP solo ejecutan cada proceso sobre el objeto para el que está definido. [Más información](../../Help/Administration/RolesAndPermissions/4WebAPIMCP.md)
    - **Tareas programadas:** se detienen correctamente al reiniciar o actualizar la aplicación en IIS.
