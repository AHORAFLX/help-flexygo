# Versión 10.1

Flexygo 10.1 facilita el seguimiento de la salud de tu aplicación y agiliza su actualización y despliegue. También incorpora mejoras en la configuración, la interfaz y la seguridad.

## Lo más destacado

### Salud y recursos de la aplicación

Consulta en un único panel las alertas, recomendaciones, usuarios conectados, métricas y ajustes de tu aplicación. También encontrarás sugerencias para optimizarla; los cambios quedan registrados y puedes deshacer los índices sugeridos. Está disponible para administradores y desde el panel de control de la skin 2026.

![Salud y recursos de la aplicación](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[Más información: panel de salud](../../Help/Administration/HealthPanel.md)

## Otras novedades

### Actualización y despliegue

- **Actualizaciones:** prográmalas, cámbialas o cancélalas; se ejecutan en segundo plano con avisos y un modo de mantenimiento coordinado. El Actualizador también puede actualizarse a sí mismo. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Actualizador en Docker:** sigue un asistente de cinco pasos y muestra un resumen del resultado. La guía de versiones explica cómo actualizar con imágenes y conserva las personalizaciones de mantenimiento. [Más información](../../1Deployment/3Updater/DockerUpdate.md)
- **Preparación de versiones:** una tarea nocturna prepara en segundo plano la siguiente versión del proyecto y registra el resultado. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Recursos de despliegue:** comprueba si tu instalación se ajusta a las recomendaciones y calcula los servidores recomendados según las características de uso.
- **Exportación de productos:** al exportar un proyecto como producto, puedes elegir si incluyes su base de datos de datos. [Más información](../../2ProductDevelopment/8ExportProject/2Reference.md)

### Configuración y administración

- **Ajustes de la aplicación:** los administradores pueden consultar y modificar la configuración desde su pantalla, incluidos los límites de duración de las llamadas del frontend al backend. [Más información](../../Help/Administration/AppSettings.md)
- **Conexiones a bases de datos:** la configuración explica qué implica el atributo «encrypt». [Más información](../../1Deployment/2ConfigWizard/EncryptedSettings.md)
- **Skin 2022:** los paneles de configuración y salud usan un diseño claro adaptado a sus colores. [Más información](../../Help/Administration/HealthPanel.md)

### Herramientas de desarrollo

- **Colecciones:** configura sus ajustes desde el banco de trabajo del objeto.
- **Módulos:** colócalos con el botón derecho o arrastrándolos y cambia su distribución desde una barra más clara. [Más información](../../Help/Modules/ModuleManagement.md)
- **Editor de recorridos:** las marcas siguen al elemento seleccionado mientras te desplazas por la página.

### Interfaz

- **Skin 2026:** busca rápidamente con / y abre favoritos, páginas recientes y atajos con Ctrl+K. [Más información](../../Help/Administration/Skin2026.md)
- **Menú lateral:** en la skin 2026 puedes gestionar sus nodos con el botón derecho; Importar solo aparece si hay una configuración de importación activa. [Más información](../../Help/Administration/Skin2026.md)
- **Diseñadores de skins:** al iniciar sesión, entran directamente en modo de desarrollo.

### Informes e inicio

- **Exportaciones a Excel:** puedes exportar informes y listados a la vez sin que se mezclen los archivos.
- **Avisos de inicio:** aparecen de forma ordenada y las actualizaciones de versión incluyen también parches y versiones beta.

### Rendimiento y seguridad

- **Carga de la aplicación:** se acelera la carga de la configuración y de las principales páginas y listados.
- **Visibilidad por rol:** las restricciones se aplican al consultar y guardar registros. [Más información](../../Help/Administration/RolesAndPermissions/1Overview.md)

## Correcciones

??? note "Ver las correcciones de esta versión"

    - **Informes:** los informes relacionados aplican los datos del registro actual y sus filtros; Crystal Reports vuelve a funcionar con bases de datos que usan autenticación de Windows.
    - **Inicio de sesión e integraciones:** LDAP vuelve a validar la contraseña en el directorio y la aplicación MCP incorpora una corrección de seguridad.
    - **Asistente de IA:** vuelve a filtrar y ordenar por las columnas de cada vista, incluidas las calculadas o compartidas.
    - **Páginas y registros:** el contador incluye todos los avisos sin leer, las columnas de módulo no se duplican y los registros nuevos muestran un título adecuado.
    - **Acceso a páginas:** las páginas para las que no tienes permiso vuelven a mostrar un aviso de seguridad.
    - **Diseños de página:** vuelven a mostrarse las imágenes de cinco diseños en instalaciones Linux y Docker.
    - **Notificaciones:** en la skin 2022, las notificaciones sin leer vuelven a mostrarse con fondo blanco, barra azul y texto azul.
    - **WebAPI y MCP:** cada proceso solo se ejecuta sobre el objeto para el que está definido. [Más información](../../Help/Administration/RolesAndPermissions/4WebAPIMCP.md)
    - **Tareas programadas:** se detienen correctamente al reiniciar o actualizar la aplicación en IIS.
