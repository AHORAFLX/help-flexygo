# Versión 10.1

Flexygo 10.1 reúne en un panel la salud, las métricas y la configuración de la aplicación. También facilita las actualizaciones y aporta ajustes para el despliegue, la administración y el trabajo diario.

## Lo más destacado

### Panel de salud de la aplicación

Consulta alertas, recomendaciones, usuarios conectados, métricas y ajustes desde un único panel. También puedes revisar sugerencias para optimizar la aplicación; los cambios quedan registrados y puedes deshacer los índices recomendados. Está disponible para administradores y desde el panel de control de la skin 2026.

![Panel de salud de la aplicación](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[Más información: salud de la aplicación](../../Help/Administration/HealthPanel.md)

## Otras novedades

### Actualizaciones

- **Programación:** programa, modifica o cancela actualizaciones que se ejecutan en segundo plano, con avisos y un modo de mantenimiento coordinado. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Actualizador:** puede actualizarse a sí mismo y completar preparaciones y actualizaciones delegadas que superen el tiempo de espera habitual. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Docker y preparación:** un asistente de cinco pasos guía la actualización en Docker; una tarea nocturna prepara la siguiente versión y registra el resultado. [Más información](../../1Deployment/3Updater/DockerUpdate.md)

### Despliegue y productos

- **Recursos:** compara tu instalación con las recomendaciones y calcula los servidores recomendados según las características de uso.
- **Exportación de proyectos:** al exportar un proyecto como producto, puedes elegir si incluir su base de datos de datos. [Más información](../../2ProductDevelopment/8ExportProject/2Reference.md)
- **Docker:** la información sobre actualizaciones con imágenes se amplía y la página de mantenimiento conserva las personalizaciones. [Más información](../../1Deployment/3Updater/DockerUpdate.md)

### Configuración y administración

- **Ajustes de la aplicación:** los administradores pueden consultarlos y modificarlos desde su pantalla de configuración. [Más información](../../Help/Administration/AppSettings.md)
- **Tiempo de espera:** configura cuánto pueden durar las llamadas del frontend al backend desde los ajustes de la aplicación. [Más información](../../Help/Administration/AppSettings.md)
- **Conexiones y skin 2022:** la configuración explica el atributo «encrypt», y la skin muestra los paneles de configuración y salud con un diseño adaptado a sus colores. [Más información](../../Help/Administration/AppSettings.md)

### Herramientas de desarrollo

- **Colecciones:** configura sus ajustes desde el banco de trabajo del objeto.
- **Menús en la skin 2026:** gestiona los nodos del menú con el botón derecho. [Más información](../../Help/Administration/Skin2026.md)
- **Recorridos y módulos:** las marcas del editor siguen al elemento seleccionado al desplazarte; además, puedes colocar módulos con el botón derecho o arrastrándolos y cambiar su distribución desde una barra más clara. [Más información](../../Help/Modules/ModuleManagement.md)

### Interfaz y navegación

- **Atajos de búsqueda en la skin 2026:** usa / para buscar en la lista visible y Ctrl+K para consultar favoritos y páginas recientes. [Más información](../../Help/Administration/Skin2026.md)
- **Menú lateral e inicio:** Importar solo aparece cuando hay una configuración de importación activa; los avisos de inicio se muestran ordenados y las actualizaciones de versión incluyen parches y betas.

### Informes e integraciones

- **Exportación a Excel:** exporta informes y listados a la vez sin que se mezclen los archivos.
- **Brevo:** añade o quita contactos de una lista usando solo su correo electrónico.

### Seguridad y procesos

- **Visibilidad por rol:** las restricciones de visibilidad se aplican al consultar y guardar registros. [Más información](../../Help/Administration/RolesAndPermissions/3Rules.md)
- **Botones de proceso:** puedes dejar sin icono los botones genéricos.

## Correcciones

??? note "Ver las correcciones de esta versión"

    - **Informes:** los informes relacionados aplican los datos del registro actual y sus filtros; Crystal Reports funciona con bases de datos que usan autenticación de Windows.
    - **WebAPI y MCP:** se corrige una vulnerabilidad del SDK de MCP y ambos solo ejecutan cada proceso sobre el objeto para el que está definido. [Más información](../../Help/Administration/RolesAndPermissions/4WebAPIMCP.md)
    - **Asistentes de IA:** vuelven a funcionar los filtros y el orden por columnas de cada vista, incluidas las calculadas o compartidas.
    - **Pantallas y permisos:** los registros nuevos muestran un título adecuado y las páginas sin permiso presentan un aviso de seguridad.
    - **Diseños e imágenes:** vuelven a mostrarse las imágenes de cinco diseños de página en instalaciones Linux y Docker.
    - **Notificaciones:** en la skin 2022, las notificaciones sin leer vuelven a mostrarse con fondo blanco, barra azul y texto azul.
    - **Tareas programadas:** se detienen correctamente al reiniciar o actualizar la aplicación en IIS.
