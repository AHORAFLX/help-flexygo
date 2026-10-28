# Versión 10.0

Flexygo 10.0 da el salto a .NET 9, estrena la skin Flexygo 2026 y pone la inteligencia artificial a trabajar contigo. Además, instalar, actualizar y exportar tus proyectos es más sencillo.

## Lo más destacado

### Flexygo sobre .NET 9

Flexygo funciona sobre .NET 9. La interfaz, el backend y la base de datos pueden ir en el mismo servidor o en servidores distintos, en IIS, como servicio o en Docker, tanto en Windows como en Linux.

![Flexygo sobre .NET 9](../../docs_assets/images/Versions/Version10_0/net9-architecture.png)

[Más información: arquitectura de Flexygo](../../1Deployment/Architecture.md)

### Asistente de instalación

La primera vez que abres una instalación nueva, un asistente en la pantalla de inicio de sesión te guía por la conexión, las bases de datos, el proyecto y el correo. Comprueba cada valor antes de guardarlo y, si sales, continúas donde lo dejaste.

![Asistente de instalación](../../docs_assets/images/Versions/Version10_0/setup-wizard.png)

[Más información: asistente de configuración](../../1Deployment/2ConfigWizard/Configuration.md)

### La skin Flexygo 2026

Un rediseño completo de la aplicación, con una barra lateral que agrupa los menús y se puede contraer, nueva tipografía y controles, y temas claro, oscuro o del sistema. La skin anterior sigue disponible.

![La skin Flexygo 2026](../../docs_assets/images/Versions/Version10_0/skin-2026.png)

[Más información: skin Flexygo 2026](../../Help/Administration/Skin2026.md)

### Buscador de iconos

Busca entre más de 5.000 iconos, previsualízalos y cópialos. Los administradores pueden añadir sus propios SVG y generar la fuente de las bibliotecas del proyecto.

![Buscador de iconos](../../docs_assets/images/Versions/Version10_0/icon-browser.png)

[Más información: iconos](../../Help/Style/Icon.md)

### Asistentes de IA con MCP

Conecta Claude o ChatGPT a Flexygo para consultar tus datos y, si lo autorizas, modificar registros y ejecutar procesos. Siempre con los permisos del usuario, que decide si el acceso es de solo lectura.

![Asistentes de IA con MCP](../../docs_assets/images/Versions/Version10_0/mcp-assistant-panel.png)

[Más información: asistentes de IA](../../Help/AIAssistants/1TryIt.md)

### Un actualizador renovado

Un asistente instala, revierte o cambia de versión: revisa los requisitos y los bloqueos, muestra el progreso y el resultado de cada paso, y vuelve atrás si algo falla.

![Un actualizador renovado](../../docs_assets/images/Versions/Version10_0/updater-wizard.png)

[Más información: flujo de actualización](../../1Deployment/3Updater/UpdateFlow.md)

### Exporta tu proyecto como producto

Convierte la aplicación instalada en un proyecto de producto: eliges qué incluye y la plantilla, sigues el avance y descargas un ZIP listo para abrir en Visual Studio.

![Exporta tu proyecto como producto](../../docs_assets/images/Versions/Version10_0/export-as-project.png)

[Más información: exportar un proyecto](../../2ProductDevelopment/8ExportProject/1TryIt.md)

### Crea productos conversando

Describe a un asistente de IA conectado al MCP de Flexygo qué aplicación necesitas: recoge los requisitos, propone el diseño y la construye contigo. Un tablero reúne las tareas, las decisiones y los controles de calidad.

![Crea productos conversando](../../docs_assets/images/Versions/Version10_0/mcp-product-building.png)

[Más información: flujo de trabajo con MCP](../../2ProductDevelopment/MCP/6Workflow.md)

## Otras novedades

### Instalación y despliegue

- **Instalación desatendida:** la instalación puede completarse sola al arrancar el backend. [Más información](../../MoreInformation/3DidYouKnow/UnattendedInstallCLI.md)
- **Docker:** imágenes de Flexygo, despliegue de la base de datos y actualizaciones desde la página de mantenimiento. [Más información](../../1Deployment/4Docker/index.md)
- **Frontend y backend separados:** las operaciones con archivos funcionan entre los dos servidores.
- **Linux:** los scripts de despliegue y las descargas del actualizador funcionan en Linux.
- **Bases de datos de datos:** se publican desde el configurador, también vacías o sin archivo de definición.

### Configuración y administración

- **Pantalla de configuración:** los administradores consultan y editan la configuración de la instalación, y nada se guarda hasta comprobar que funciona. [Más información](../../1Deployment/2ConfigWizard/AppSettingsReference.md)
- **Secretos cifrados:** las contraseñas y claves de la configuración se guardan cifradas. [Más información](../../1Deployment/2ConfigWizard/EncryptedSettings.md)
- **Modo de mantenimiento:** muestra un aviso a los usuarios mientras la aplicación no está disponible. [Más información](../../MoreInformation/3DidYouKnow/MaintenanceMode.md)
- **Recargar las pantallas** de todos los usuarios conectados o de sesiones concretas.
- **Licencias:** una página muestra el nivel, las extensiones y el estado de la licencia.
- **Aplicaciones sin conexión:** su configuración se organiza por secciones, con historial de sincronización y emulador móvil.

### Inicio de sesión

- **Nuevos métodos de acceso:** autenticación multifactor, LDAP, Cl@ve y SSO. [Más información](../../Help/Information/MFA.md)
- **Bloqueo de cuentas** configurable: intentos fallidos y duración.
- **Páginas de cuenta renovadas** para registrarse, iniciar sesión y recuperar la contraseña, personalizables desde tu producto.
- **Noticias** en la página de inicio de sesión, que puedes desactivar.

### Seguridad

- **Pantalla de seguridad:** gestiona permisos y reglas desde una tabla y consulta cómo se aplican a usuarios, roles y facultades. [Más información](../../Help/Administration/RolesAndPermissions/1Overview.md)
- **Permisos por proceso**, también sin objeto asociado, con condiciones SQL opcionales.
- **Condiciones de seguridad** de objetos eligiendo propiedad, operador y valor.
- Los cambios de roles y permisos se aplican **sin volver a iniciar sesión**.

### WebAPI e integraciones

- **Permisos de los tokens:** la WebAPI y MCP aplican los permisos del token y pueden limitar las respuestas a las propiedades de cada objeto. [Más información](../../Help/Administration/RolesAndPermissions/4WebAPIMCP.md)
- **Protección ante ataques:** se bloquean temporalmente las IP con demasiados intentos fallidos.
- **Operaciones masivas** y consultas de relaciones, con una definición OpenAPI más clara y consultable en Scalar. [Más información](../../Help/Programming/WebAPI.md)
- **Objetos externos:** consulta y actualiza datos de servicios REST en listas, formularios, calendarios y kanban. [Más información](../../Help/Programming/ExternalEntities.md)
- **Webhooks** y reglas que automatizan acciones al guardar registros. [Más información](../../Help/Programming/ApprovalsAndWebhooks.md)

### Interfaz

- **Edición en las listas:** edita valores directamente en la lista y añade filas desde ella.
- **Filtros como chips** editables que se aplican al momento.
- **Organiza los módulos** de una página arrastrándolos y redimensionándolos sobre la propia página. [Más información](../../Help/Modules/ModuleManagement.md)
- **Panel de inicio renovado** y página de inicio configurable por perfil.
- **Calendarios** con vista anual, filtros y selección de rangos. [Más información](../../Help/Modules/SchedulerCalendarV10.md)
- **Visita guiada de bienvenida** con Lowdy, y un creador para hacer las tuyas señalando los elementos de cada pantalla.
- Los formularios se adaptan mejor a pantallas pequeñas y la barra de guardado siempre queda a la vista.
- Las páginas cargan más rápido y muestran una barra de progreso.

### Gráficos e informes

- **Módulo ECharts:** radar, burbujas, combinados, anillo, área polar y más, con muchas más opciones de personalización. [Más información](../../Help/Modules/ECharts.md)
- **Temas de gráficos** configurables que se adaptan a la skin y al modo claro u oscuro.
- **Tarjetas de indicadores** renovadas, con tendencias opcionales.
- **Informes** Crystal y DevExpress en PDF, también en base64.

### Notificaciones y tareas

- **Avisos en tiempo real** cuando se crean, modifican o eliminan registros de los objetos que sigues, solo de los que cada usuario puede ver.
- **Notificaciones push.** [Más información](../../Help/Connectors/PushNotifications.md)
- **Scripts como tareas programadas**, que se pueden desactivar desde la configuración. [Más información](../../Help/Programming/DatabaseScriptJobs.md)
- Las listas, la agenda y el kanban muestran los registros nuevos sin recargar la página.

### Herramientas de desarrollo

- **Diseñador de objetos:** pestañas, ajustes rápidos más amplios y accesos directos a la lista, el formulario y la seguridad del objeto.
- **Controles compartidos** nuevos: pestañas y controles deslizantes.
- **URL amigables** para las páginas. [Más información](../../Help/Information/FriendlyURLs.md)
- **Carga de archivos por partes**, con progreso.
- **Lista de errores** filtrable, con el detalle de cada uno.
- **Depuración** con source maps y optimización de paquetes desde el menú de desarrollo.

## Correcciones

??? note "Ver las correcciones de esta versión"

    - **Seguridad:** los registros, las plantillas y las vistas de objetos aplican los permisos y filtros del rol; se validan las direcciones externas y los destinos de retorno.
    - **WebAPI:** se corrigen la validación de tokens, la redirección, las peticiones sin contenido y los procesos al insertar registros.
    - **Inicio de sesión:** el acceso funciona sin alias y tras restablecer la contraseña, y el proceso posterior al inicio de sesión se ejecuta una sola vez.
    - **Listas y filtros:** al borrar la última fila se muestra la última página; los filtros funcionan con valores vacíos y con sus dependencias.
    - **Formularios:** se corrigen los valores decimales y booleanos, el código de barras y el cierre de diálogos al eliminar.
    - **Documentos e imágenes:** las descargas y los nombres de archivo son correctos a través del proxy y con carpetas externas.
    - **Procesos:** se corrigen los procesos con código C#, la importación de Excel, Redsys y el reinicio de trabajos con error.
    - **Inteligencia artificial:** se corrigen las búsquedas vectoriales, las solicitudes a ChatGPT y la presentación en distintos tamaños de pantalla.
    - **Interfaz:** se corrigen detalles de presentación en el kanban, los calendarios, el modo oscuro y la rejilla de módulos.
    - **Notificaciones y conversaciones:** las menciones vuelven a notificar y el sonido no se repite cuando llegan muchas notificaciones a la vez.
