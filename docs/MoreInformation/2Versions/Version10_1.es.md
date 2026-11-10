# Versión 10.1

Flexygo 10.1 mejora la gestión de las actualizaciones y la navegación con la skin 2026. También incorpora ajustes para el trabajo de desarrollo y corrige problemas en informes, seguridad e interfaz.

## Lo más destacado

### Actualizaciones programadas

Programa, cambia o cancela actualizaciones para que se ejecuten en segundo plano, con avisos y un modo mantenimiento coordinado. Antes de confirmar, puedes revisar la acción y ver una vista previa del modo mantenimiento; al terminar, este se desactiva y los administradores reciben una notificación.

[Más información: flujo de actualización](../../1Deployment/3Updater/UpdateFlow.md)

### Atajos de la skin 2026

Usa / para buscar en la lista visible y Ctrl+K para abrir favoritos y páginas recientes. Desde ahí puedes fijar páginas y recorrerlas con las flechas y Enter; pulsa ? para consultar los atajos. Estas opciones no cambian la skin 2022 y no interfieren al escribir.

[Más información: skin 2026](../../Help/Administration/Skin2026.md)

## Otras novedades

### Actualizaciones

- **Preparación de versiones:** el Actualizador puede actualizarse a sí mismo y completar preparaciones y actualizaciones delegadas aunque superen el tiempo de espera habitual. [Más información](../../1Deployment/3Updater/UpdateFlow.md)
- **Preparación nocturna:** una tarea prepara en segundo plano la siguiente versión del proyecto y registra el resultado.
- **Idiomas:** la descripción de la precarga del Actualizador está disponible en más idiomas. [Más información](../../1Deployment/3Updater/UpdateFlow.md)

### Docker y despliegue

- **Asistente de actualización:** en Docker, sigue cinco pasos y termina con un resumen del resultado. [Más información](../../1Deployment/3Updater/DockerUpdate.md)
- **Documentación de Docker:** la página de versiones explica cómo actualizar mediante imágenes y la de mantenimiento conserva las personalizaciones. [Más información](../../1Deployment/3Updater/DockerUpdate.md)

### Objetos y módulos

- **Ajustes de colecciones:** configúralos desde el banco de trabajo del objeto.
- **Distribución de módulos:** coloca módulos con el botón derecho o arrastrándolos y cambia la distribución desde una barra más clara. [Más información](../../Help/Modules/ModuleManagement.md)

### Herramientas de desarrollo

- **Lowdy:** gira su personaje a cualquier ángulo desde el plugin.
- **Editor de recorridos:** las marcas siguen al elemento seleccionado al desplazarte por la página.
- **Modo de desarrollo:** los diseñadores entran en él al iniciar sesión, sin tener que abrirlo desde el menú.

### Interfaz y navegación

- **Menú de la skin 2026:** gestiona sus nodos con el botón derecho. [Más información](../../Help/Administration/Skin2026.md)
- **Menú lateral:** muestra Importar solo si hay una configuración de importación activa.
- **Paneles de configuración y salud:** en la skin 2022, su diseño adopta los colores de la skin. [Más información](../../Help/Administration/HealthPanel.md)

### Configuración y procesos

- **Conexiones de bases de datos:** al configurarlas, se explica el atributo «encrypt». [Más información](../../1Deployment/2ConfigWizard/Configuration.md)
- **Botones de proceso:** los botones genéricos pueden mostrarse sin icono.

## Correcciones

??? note "Ver las correcciones de esta versión"

    - **Informes:** los informes relacionados vuelven a aplicar el registro actual y sus filtros; Crystal Reports funciona con bases de datos que usan autenticación de Windows.
    - **MCP y seguridad:** la aplicación MCP incluye una versión del SDK con una corrección de seguridad.
    - **Interfaz y páginas:** los registros nuevos muestran un título adecuado, las páginas sin permiso avisan al usuario y vuelven a verse cinco diseños de página en Linux y Docker.
    - **Notificaciones:** en la skin 2022, las notificaciones sin leer vuelven a tener fondo blanco, barra azul y texto azul.
    - **Tareas programadas:** se detienen correctamente al reiniciar o actualizar la aplicación en IIS.
