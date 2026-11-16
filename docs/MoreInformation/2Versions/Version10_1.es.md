# Versión 10.1

Flexygo 10.1 reúne en un panel la información y las recomendaciones para cuidar el estado de tu aplicación. También facilita la gestión de actualizaciones y mejora el rendimiento, la interfaz y la seguridad.

## Lo más destacado

### Panel de salud y recursos

Consulta alertas, recomendaciones, usuarios conectados, métricas y ajustes desde un único panel. También puedes revisar sugerencias para optimizar la aplicación; los cambios quedan registrados y puedes deshacer los índices sugeridos. Está disponible para administradores y desde el dashboard de la skin 2026.

![Panel de salud y recursos](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[Más información: panel de la aplicación](../../Help/Administration/HealthPanel.md)

## Otras novedades

### Actualizaciones y despliegue

- **Actualizaciones programadas:** prográmalas, cámbialas o cancélalas; se ejecutan en segundo plano con avisos y un modo de mantenimiento coordinado. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Actualizador:** puede actualizarse a sí mismo y completar preparaciones y actualizaciones delegadas que superen el tiempo de espera habitual. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Actualización en Docker:** sigue un asistente de cinco pasos y termina con un resumen del resultado. [Más información](../../1Deployment/3Updater/DockerUpdate.md)
- **Preparación nocturna:** una tarea prepara en segundo plano la siguiente versión del proyecto y deja constancia del resultado. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Recursos y exportación:** comprueba cómo se ajusta tu instalación a las recomendaciones de recursos, calcula servidores recomendados y elige si incluir la base de datos de datos al exportar un proyecto como producto. [Más información](../../2ProductDevelopment/8ExportProject/2Reference.md)

### Configuración y administración

- **Ajustes de la aplicación:** los administradores pueden consultarlos y modificarlos desde su pantalla; en desarrollo, los cambios se aplican en la siguiente solicitud. [Más información](../../Help/Administration/AppSettings.md)
- **Llamadas al backend:** configura desde los ajustes de la aplicación su duración máxima. [Más información](../../Help/Administration/AppSettings.md)
- **Conexiones de bases de datos:** la configuración explica el significado del atributo `encrypt`. [Más información](../../1Deployment/2ConfigWizard/EncryptedSettings.md)
- **Skin 2022:** los paneles de configuración y salud se adaptan a sus colores con un diseño claro. [Más información](../../Help/Administration/HealthPanel.md)

### Herramientas de desarrollo

- **C# 14:** los procesos integrados y las vistas recompiladas en tiempo de ejecución pueden usar esta versión.
- **Colecciones:** configúralas desde el banco de trabajo del objeto.
- **Menús en la skin 2026:** edita, añade, configura la visibilidad o elimina nodos con el botón derecho. [Más información](../../Help/Administration/Skin2026.md)
- **Scripts:** respetan la cultura del usuario y permiten esperar a que terminen los procesos.
- **Módulos:** colócalos con el botón derecho o arrastrándolos, y cambia la distribución desde una barra más clara. [Más información](../../Help/Modules/ModuleManagement.md)

### Interfaz y navegación

- **Búsqueda rápida:** reúne favoritos, páginas recientes y atajos; en la skin 2026 puedes buscar en la lista activa con `/`. [Más información](../../Help/Administration/Skin2026.md)
- **Menú lateral:** muestra Importar solo cuando hay una configuración de importación activa.
- **Skin 2026:** las páginas se actualizan y permiten navegar con menos esperas y saltos; el modo de desarrollo se activa al iniciar sesión para los diseñadores. [Más información](../../Help/Administration/Skin2026.md)
- **Lowdy:** su plugin permite girar al personaje a cualquier ángulo.

### Rendimiento

- **Carga de páginas y procesos:** se abren más rápido al reutilizar sus definiciones en memoria.
- **Configuración y actualización de bases de datos:** varias pantallas cargan más rápido y puedes seguir el avance por fases y tablas.

### Informes y tareas

- **Diseñador de informes:** ofrece más textos traducidos al español, catalán, francés, italiano, portugués y alemán.
- **Exportación a Excel:** exporta informes y listados a la vez sin que se mezclen los archivos.
- **Actualizaciones de versión:** los avisos de inicio aparecen ordenados e incluyen parches y versiones beta.
- **Botones de proceso:** puedes dejar sin icono los botones genéricos.

### IA e integraciones

- **Asistente de Flexygo:** interactúa con las pantallas y filtra y ordena vistas desde el chat, con tu aprobación y respetando tus permisos. [Más información](../../Help/AIAssistants/3Decisions.md)
- **Brevo:** añade o quita contactos de una lista indicando solo su correo electrónico. [Más información](../../Help/Connectors/SendinBlue.md)

### Seguridad

- **Permisos de edición:** las restricciones del rol también se aplican al guardar valores. [Más información](../../Help/Administration/RolesAndPermissions/1Overview.md)
- **Filtros de visibilidad:** se aplican al leer registros por clave desde cualquier pantalla o llamada. [Más información](../../Help/Administration/RolesAndPermissions/1Overview.md)

## Correcciones

??? note "Ver las correcciones de esta versión"

    - **Telemetría:** vuelven a enviarse correctamente los registros de diagnóstico y de producto.
    - **Informes:** los informes relacionados usan el registro y los filtros adecuados; Crystal Reports funciona con autenticación de Windows.
    - **Inicio de sesión:** LDAP vuelve a validar las contraseñas en el directorio.
    - **Integraciones:** las conexiones externas funcionan con MySQL 8.0 y posteriores, y se corrige un problema con la contraseña de la clave del certificado.
    - **MCP:** la aplicación usa una versión del SDK con una corrección de seguridad.
    - **Interfaz:** páginas, menús y vistas funcionan tras un inicio con mucha actividad; se corrigen el recuento de avisos, las columnas duplicadas, los títulos, los avisos de seguridad y las imágenes de diseños en Linux y Docker.
    - **Notificaciones:** en la skin 2022, las notificaciones sin leer recuperan el fondo blanco, la barra azul y el texto azul.
    - **Seguridad:** los datos introducidos en registros se muestran como texto seguro; la WebAPI y MCP solo ejecutan cada proceso para el objeto al que pertenece. [Más información](../../Help/Programming/WebAPISecurity.md)
    - **Tareas programadas:** se detienen correctamente al reiniciar o actualizar la aplicación en IIS.
