# Versión 6.4

## Novedades

* **Nuevos campos de auditoría**: se añadieron `flxInsertedBy`, `flxUpdatedBy`, `flxInsertedDate` y `flxUpdatedDate` a las tablas de configuración
* **Pantalla de generación de scripts**: nueva herramienta para visualizar y generar scripts de cambios, con filtrado por fecha de referencia

![](../../docs_assets/images/Versions/Version6_04/1.png)
![](../../docs_assets/images/Versions/Version6_04/2.png)

* **Agrupación en administrador de módulos**: opción para agrupar por tipo de módulo u objeto para mejorar visualización y búsqueda

![](../../docs_assets/images/Versions/Version6_04/3.png)

* **Menú del desarrollador**: se añadió opción rápida para cambiar la optimización del bundle

![](../../docs_assets/images/Versions/Version6_04/4.png)

* **Usuarios de WebApi exclusiva**: nueva opción en formulario de usuario para designar usuarios dedicados solo a WebApi

![](../../docs_assets/images/Versions/Version6_04/5.png)

* **Límite de tamaño de archivo**: nuevo campo para establecer restricciones en MB para gestión de documentos e imágenes
* **Firma biométrica**: nuevo tipo de ABH Sign para firmas presenciales (BIO)
* **Actualización automática de nodos**: los cambios realizados mediante asistentes se aplican automáticamente
* **SendTemplateMail mejorado**: permite pasar imágenes en base64 como parámetros para compatibilidad con múltiples proveedores de correo
* **Autenticación 2FA con AAD**: integración de autenticación de dos factores con inicio de sesión Azure Active Directory
* **Cierre automático de tooltips**: los tooltips se cierran al hacer scroll
* **Dependencias en componentes**: funcionalidad de dependencias entre propiedades de filtro en flx-kanban, flx-timeline y flx-planner

## Correcciones

* Parseo de valores predeterminados en encabezados y pies de plantillas de grupos
* Mensajes de error mejorados para excepciones en inicio de sesión AAD
* Seguridad en objetos de flx-scheduler
* Estilos en plantillas de script jobs
* Bucle en procesos JS antes/después de inserción
* Carga de archivos JS/CSS en controles de upload sin objeto (solo administradores)
* Visualización de valores en plantillas con SQL de edición
* Cierre de ventana del asistente de parámetros
* Sincronización de imágenes sin conexión
* Definición swagger en WebApi con URLs de referencia vacías
* Menú contextual en objetos Oracle
* Redirección MFA en rutas con directorio virtual
* Actualización de librería NuGet MailChimp
