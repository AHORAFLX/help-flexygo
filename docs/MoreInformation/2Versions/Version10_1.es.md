# Versión 10.1

Flexygo 10.1 te ayuda a conocer mejor el estado de tu aplicación y a mantenerla al día con más facilidad. También incorpora mejoras en el despliegue, la configuración, la navegación y el rendimiento.

## Lo más destacado

### Panel de salud y recursos

Consulta desde un único panel las alertas, recomendaciones, usuarios conectados, métricas y configuración de la aplicación. También encontrarás sugerencias para optimizarla; los cambios quedan registrados y puedes deshacer los índices sugeridos. Está disponible para administradores y desde el panel de control de la skin 2026.

![Panel de salud y recursos](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[Más información: panel de salud](../../Help/Administration/HealthPanel.md)

## Otras novedades

### Actualizador y mantenimiento

- **Programación de actualizaciones:** programa, modifica o cancela actualizaciones; se ejecutan en segundo plano con avisos y un modo de mantenimiento coordinado. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Actualizador:** puede actualizarse a sí mismo y completar preparaciones o actualizaciones delegadas que superen el tiempo de espera habitual. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Actualización en Docker:** un asistente de cinco pasos guía el proceso y muestra un resumen del resultado. [Más información](../../1Deployment/3Updater/DockerUpdate.md)
- **Preparación de versiones:** la tarea nocturna prepara en segundo plano la siguiente versión del proyecto y deja constancia del resultado. [Más información](../../1Deployment/3Updater/UpdateFlow.md)

### Despliegue y exportación

- **Recursos del despliegue:** compara tu instalación con las recomendaciones de la calculadora de recursos y calcula los servidores recomendados según el uso previsto. [Más información](../../1Deployment/SystemRequirements.md)
- **Exportación de productos:** al exportar un proyecto como producto, puedes elegir si incluir su base de datos de datos. [Más información](../../2ProductDevelopment/8ExportProject/2Reference.md)
- **Docker:** la página de versiones explica cómo actualizar con imágenes y la de mantenimiento conserva las personalizaciones. [Más información](../../1Deployment/3Updater/DockerUpdate.md)

### Configuración y administración

- **Ajustes de la aplicación:** configura cuánto pueden durar las llamadas del frontend al backend y consulta o modifica los ajustes desde su pantalla. [Más información](../../Help/Administration/AppSettings.md)
- **Conexiones a bases de datos:** la configuración explica qué implica el atributo «encrypt». [Más información](../../Help/Administration/AppSettings.md)
- **Skin 2022:** muestra los paneles de configuración y salud con un diseño claro adaptado a sus colores. [Más información](../../Help/Administration/HealthPanel.md)

### Herramientas de desarrollo

- **Colecciones:** configura sus ajustes desde el banco de trabajo del objeto.
- **Editor de recorridos:** las marcas siguen al elemento seleccionado al desplazarte por la página.
- **Módulos:** colócalos con el botón derecho o arrastrándolos, y cambia la distribución desde una barra más clara. [Más información](../../Help/Modules/ModuleManagement.md)

### Interfaz y navegación

- **Búsqueda rápida:** en la skin 2026, pulsa / para buscar y Ctrl+K para acceder a favoritos, páginas recientes y atajos. [Más información](../../Help/Administration/Skin2026.md)
- **Menú de la skin 2026:** gestiona sus nodos con el botón derecho. [Más información](../../Help/Administration/Skin2026.md)
- **Menú lateral:** Importar solo aparece cuando hay una configuración de importación activa.
- **Diseñadores de skins:** al iniciar sesión entran directamente en modo de desarrollo, sin abrirlo desde el menú. [Más información](../../Help/Administration/Skin2026.md)
- **Avisos de inicio:** aparecen ordenados y las actualizaciones de versión incluyen parches y versiones beta.

### Integraciones e informes

- **Brevo:** añade o quita contactos de una lista usando solo su correo electrónico. [Más información](../../Help/Connectors/SendinBlue.md)
- **Exportación a Excel:** exporta informes y listados a la vez sin que se mezclen los archivos.

### Rendimiento y seguridad

- **Carga de la aplicación:** se acelera la carga de la configuración y de las principales páginas y listados.
- **Visibilidad por rol:** las restricciones se aplican al consultar y guardar registros. [Más información](../../Help/Administration/RolesAndPermissions/1Overview.md)

## Correcciones

??? note "Ver las correcciones de esta versión"

    - **Informes:** los informes relacionados vuelven a usar los datos y filtros del registro actual, y Crystal Reports funciona con bases de datos que usan autenticación de Windows.
    - **Integraciones:** la aplicación MCP incluye una corrección de seguridad en su SDK.
    - **Asistente de IA:** vuelve a filtrar y ordenar por las columnas de cada vista, incluidas las calculadas o compartidas.
    - **Interfaz:** se corrigen el contador de avisos sin leer, las columnas duplicadas, los títulos de registros nuevos y los avisos de seguridad en páginas sin permiso.
    - **Diseños de página:** vuelven a mostrarse las imágenes de cinco diseños en instalaciones Linux y Docker.
    - **Notificaciones:** las notificaciones sin leer recuperan el fondo blanco, la barra azul y el texto azul en la skin 2022.
    - **WebAPI y MCP:** cada proceso vuelve a ejecutarse solo sobre el objeto para el que está definido. [Más información](../../Help/Administration/RolesAndPermissions/4WebAPIMCP.md)
    - **Tareas programadas:** se detienen correctamente al reiniciar o actualizar la aplicación en IIS.
