# Versión 10.1

Flexygo 10.1 reúne en un panel la salud, las métricas y la configuración de la aplicación, y agiliza la actualización y el despliegue. También incorpora mejoras para desarrollar, trabajar con la interfaz y proteger los datos.

## Lo más destacado

### Panel de salud y recursos

Desde Administración > Entorno > Salud y recursos puedes consultar alertas, recomendaciones, usuarios conectados y métricas, además de revisar la configuración y sugerencias para optimizar la aplicación. Los cambios quedan registrados y puedes deshacer los índices sugeridos. El panel también está disponible desde el dashboard de la skin 2026.

![Panel de salud y recursos](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[Más información: panel de salud](../../Help/Administration/HealthPanel.md)

## Otras novedades

### Instalación y despliegue

- **Actualizaciones programadas:** puedes programar, cambiar o cancelar actualizaciones, que se ejecutan en segundo plano con avisos y un modo de mantenimiento coordinado. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Actualizador:** puede actualizarse a sí mismo y completar preparaciones y actualizaciones delegadas aunque superen el tiempo de espera habitual. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Docker:** la actualización sigue un asistente de cinco pasos y termina con un resumen del resultado. [Más información](../../1Deployment/3Updater/DockerUpdate.md)
- **Preparación nocturna:** una tarea prepara en segundo plano la siguiente versión del proyecto y deja constancia del resultado. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Recursos de despliegue:** comprueba cómo se ajusta tu instalación a las recomendaciones y calcula los servidores necesarios según el uso previsto.
- **Exportación de productos:** al exportar un proyecto como producto, eliges si incluyes su base de datos de datos. [Más información](../../2ProductDevelopment/8ExportProject/2Reference.md)

### Herramientas de desarrollo

- **Scripts:** puedes generarlos desde el acceso rápido; además, respetan la cultura del usuario y permiten esperar procesos.
- **C# 14:** los procesos integrados y las vistas recompiladas en tiempo de ejecución pueden usar esta versión.
- **Ajustes de colecciones:** configúralos desde el banco de trabajo del objeto.
- **Cambios de diseño:** los cambios del diseñador y MCP se aplican en la siguiente solicitud, sin vaciar la caché al guardar datos. [Más información](../../2ProductDevelopment/MCP/2Usage.md)

### Inteligencia artificial e integraciones

- **Vistas para asistentes de IA:** pueden consultar vistas con parámetros tipados y validar que los valores enviados sean correctos. [Más información](../../Help/AIAssistants/2Reference.md)
- **Acciones desde el chat:** el asistente puede interactuar con las pantallas de Flexygo, previa aprobación del usuario. [Más información](../../Help/AIAssistants/3Decisions.md)
- **Brevo:** añade o quita contactos de una lista indicando solo su correo electrónico.

### Configuración y administración

- **Configuración en desarrollo:** los cambios se aplican en la siguiente solicitud, sin recargar la caché. [Más información](../../Help/Administration/AppSettings.md)
- **Tiempo de espera:** configura cuánto pueden durar las llamadas del frontend al backend desde los ajustes de la aplicación. [Más información](../../Help/Administration/AppSettings.md)
- **Ajustes de la aplicación:** los administradores pueden consultarlos y modificarlos desde su pantalla de configuración. [Más información](../../Help/Administration/AppSettings.md)
- **Conexiones a bases de datos:** la configuración explica qué implica el atributo `encrypt`. [Más información](../../1Deployment/2ConfigWizard/EncryptedSettings.md)

### Interfaz y navegación

- **Búsqueda rápida:** reúne favoritos, páginas recientes y atajos; en la skin 2026, busca en la lista activa con `/`. [Más información](../../Help/Administration/Skin2026.md)
- **Menú de la skin 2026:** gestiona sus nodos con el botón derecho. [Más información](../../Help/Administration/Skin2026.md)
- **Módulos:** colócalos con el botón derecho o arrastrándolos, y cambia la distribución desde una barra más clara. [Más información](../../Help/Modules/ModuleManagement.md)
- **Skin 2026:** las páginas se actualizan y navegan con menos esperas y saltos, y el modo de desarrollo se activa al iniciar sesión para los diseñadores. [Más información](../../Help/Administration/Skin2026.md)

### Informes, listas y procesos

- **Exportación a Excel:** puedes exportar informes y listados a la vez sin que se mezclen los archivos.
- **Kanban:** muestra que no hay resultados si no existe el registro del tablero, en lugar de quedarse cargando. [Más información](../../Help/Modules/Kanban.md)
- **Parámetros de proceso:** se mantienen los valores configurados en los parámetros ocultos o bloqueados.

### Rendimiento

- **Apertura de páginas y procesos:** se reutilizan definiciones en memoria para abrir más rápido páginas, módulos y procesos.
- **Carga y actualización:** la configuración y varias pantallas cargan más rápido; la actualización de la base de datos muestra el avance de sus fases y tablas.

### Seguridad

- **Permisos de edición:** las restricciones del rol también se aplican al guardar valores. [Más información](../../Help/Administration/RolesAndPermissions/1Overview.md)
- **Visibilidad de registros:** los filtros se aplican al leer registros por clave desde cualquier pantalla o llamada. [Más información](../../Help/Administration/RolesAndPermissions/1Overview.md)

## Correcciones

??? note "Ver las correcciones de esta versión"

    - **Configuración:** la pantalla deja de mostrar y aceptar conexiones a bases de datos; guardar ajustes vuelve a ser inmediato con la caché desactivada y la telemetría envía correctamente los registros. [Más información](../../Help/Administration/AppSettings.md)
    - **Filtros y condiciones:** búsquedas y condiciones aceptan valores con comillas, tildes o llaves; las condiciones adicionales de listas, gráficos, kanban, planificadores y registros se validan antes de aplicarse.
    - **Formularios:** puedes volver a redimensionar campos en el diseñador después de añadir, eliminar o cambiar de pestaña.
    - **Informes:** los informes relacionados usan el registro y los filtros correspondientes; Crystal Reports vuelve a generarse con bases de datos que usan autenticación de Windows.
    - **Inicio de sesión:** el acceso mediante LDAP vuelve a validar la contraseña en el directorio.
    - **Integraciones:** las conexiones externas funcionan con MySQL 8.0 y posteriores, se corrige un problema con la contraseña de la clave del certificado y MCP incorpora una corrección de seguridad. [Más información](../../2ProductDevelopment/MCP/2Usage.md)
    - **Inteligencia artificial:** el asistente permite filtrar y ordenar por las columnas de cada vista, incluidas las calculadas y compartidas. [Más información](../../Help/AIAssistants/2Reference.md)
    - **Interfaz:** las páginas, los menús y las vistas siguen funcionando tras un inicio con mucha actividad; se corrigen los avisos sin leer, las columnas duplicadas, los títulos de registros nuevos, los avisos de seguridad y algunas imágenes en Linux y Docker.
    - **Notificaciones:** en la skin 2022, las notificaciones sin leer vuelven a mostrarse con fondo blanco, barra azul y texto azul.
    - **Procesos y seguridad:** los procesos de listas filtradas admiten objetos sin identificador único; las tareas programadas se detienen al reiniciar IIS y los datos introducidos se muestran como texto seguro. La WebAPI y MCP limitan cada proceso al objeto para el que está definido. [Más información](../../Help/Administration/RolesAndPermissions/4WebAPIMCP.md)
