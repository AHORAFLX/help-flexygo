# Kanban

Kanban es un método de gestión de proyectos que ayuda a los equipos a visualizar mejor su carga de trabajo y su flujo de tareas. El módulo kanban de **Flexygo** permite definir un tablero utilizando cualquier tipo de objetos.

En flexygo hay un ejemplo de kanban disponible; <flx-navbutton class="link" type="openPage" pagetypeid="view" objectname="sysKanban_Board" objectwhere="([Kanban_Boards].[BoardName] = 'Flexygo_Task_List')" showprogress="false">haz clic aquí</flx-navbutton> para navegar a él, y aquí está su <flx-navbutton class="link" type="openPage" pagetypeid="view" objectname="sysKanban_Setting" objectwhere="KanbanSettingsName='sysFlexygo_Kanban'" showprogress="false">configuración</flx-navbutton>.

![](../docs_assets/images/ModulesConf/kanban2.png "Image 1. Kanban")

## Configuración

La configuración de Kanban se divide en cinco grupos:

### Configuración del tablero

Se utiliza para definir los ajustes básicos del tablero kanban.

![](../docs_assets/images/ModulesConf/KanbanSettings1.png "Image 1. Kanban Settings")

* **Settings Name:** El nombre que quieres usar para identificar esta configuración kanban.
* **Board Object Name:** El objeto principal del kanban, que será útil para parsear algunos valores en las siguientes propiedades, como puede verse en la imagen.
* **Board Title Template:** El título que se mostrará en la parte superior del kanban.
* **Board Description Template:** Una breve descripción que aparecerá debajo del título.

### Configuración de columnas

Aquí se pueden establecer las vistas de columnas que se utilizarán como configuración de columnas.

![](../docs_assets/images/ModulesConf/KanbanSettings2.png "Image 2. Kanban Settings")

* **Column View Name:** Debe ser la vista utilizada para pintar la información de la columna y debe contener al menos las dos primeras propiedades de columna.
* **Column Description Field:** La descripción que aparecerá en la parte superior de la columna.
* **Column Id Field:** No aparece en el kanban, pero es necesario para identificar la columna.
* **CSS Class Field:** La clase CSS que se aplicará a la columna en el div `.kanban-col`.
* **Icon Class:** El icono que aparecerá junto a la descripción.

### Configuración de tarjetas

Aquí se establece el objeto y las vistas que se utilizarán como configuración de las tarjetas.

![](../docs_assets/images/ModulesConf/KanbanSettings3.png "Image 3. Kanban Settings")

* **Card Object Name:** El objeto que se usará como tarjetas.
* **Card View Name:** La vista utilizada para pintar la información de la tarjeta; debe contener al menos las tres primeras propiedades de tarjeta.
* **Card ID Field:** No aparece en el kanban, pero es necesario para identificar la tarjeta.
* **Card Column ID Field:** No aparece en el kanban, pero identifica en qué columna debe mostrarse la tarjeta al cargarse.
* **Card Description Field:** La descripción será el contenido de la tarjeta si no se asigna una plantilla de contenido.
* **Card Content Template:** Es la plantilla HTML donde, si se especifica, seguirá el contenido de la tarjeta; se puede parsear el campo descripción.

### Configuración del area de archivo

Usado para establecer la configuración del área de archivo que aparece al mover una tarjeta.

![](../docs_assets/images/ModulesConf/KanbanSettings4.png "Image 4. Kanban Settings")

* **Archived State Id:** Determina cuál será el id asignado a la columna mencionada previamente en la configuración de tarjeta.
* **Archived Text:** Un breve texto que aparecerá en el área de archivo.
* **Archived Icon:** El icono que se verá en el área de archivo.
* **Archived CSS Class:** La clase CSS aplicada al área de archivo.

### Configuración deeventos

Usado para definir qué ocurre cuando se disparan los diferentes eventos.

![](../docs_assets/images/ModulesConf/KanbanSettings5.png "Image 5. Kanban Settings")

* **On card click:** Proceso que se ejecuta al hacer clic en una tarjeta.
* **On Change Column:** Proceso que se ejecuta cuando una tarjeta cambia de columna.
* **On Archive Box Drop:** Proceso que se ejecuta cuando una tarjeta se deja caer en el área de archivo.

## Añadir el kanban a tu página

Solo arrastra el módulo a tu página desde el gestor de módulos y completa el siguiente formulario.

![](../docs_assets/images/ModulesConf/kanbanConf.png "Image 6. Kanban Settings")

* **Id:** Identifica el módulo.
* **Type:** Tipo de módulo, en este caso Kanban.
* **Description:** Breve descripción del módulo.
* **Title:** Título que aparece en el módulo.
* **Classification:** Como no es un módulo por defecto, siempre es Project Module.
* **Container:** Tipo de contenedor del módulo.
* **Object Name:** Se debe seleccionar el objeto que se desea relacionar con el gestor.
* **Object Where:** Se debe seleccionar la condición del objeto que se desea relacionar con el gestor.
* **Kanban Settings Name:** Las opciones kanban configuradas previamente.

Puedes ver también el vídeo sobre cómo configurar el módulo kanban:
<div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/AidJrIHQHZc" title="YouTube video player" frameborder="0" allowfullscreen=""></iframe>
</div>