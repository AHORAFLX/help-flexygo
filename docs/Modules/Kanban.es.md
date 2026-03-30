# Kanban

Kanban es un método de gestión de proyectos que ayuda a los equipos a visualizar mejor su carga de trabajo y su flujo de tareas. El módulo kanban de **Flexygo** permite definir un tablero utilizando cualquier tipo de objetos.

En flexygo hay un ejemplo de kanban disponible; <flx-navbutton class="link" type="openPage" pagetypeid="view" objectname="sysKanban_Board" objectwhere="([Kanban_Boards].[BoardName] = 'Flexygo_Task_List')" showprogress="false">haz clic aquí</flx-navbutton> para navegar a él, y aquí está su <flx-navbutton class="link" type="openPage" pagetypeid="view" objectname="sysKanban_Setting" objectwhere="KanbanSettingsName='sysFlexygo_Kanban'" showprogress="false">configuración</flx-navbutton>.

![](../docs_assets/images/ModulesConf/kanban2.png "Image 1. Kanban")

## Configuración del módulo

Cuando en un módulo seleccionas el tipo **Kanban Panel**, debes configurar el **Objeto** y el **Filtro del objeto**. Para saber qué objeto debes elegir, primero necesitas entender cómo funciona el kanban.

El kanban necesita dos objetos distintos: el **objeto tablero** y el **objeto tarjetas**. El objeto **tablero** será el padre del objeto **tarjetas**. Por ejemplo, un **repartidor** (tablero) tiene múltiples **entregas** (tarjetas). En la configuración del módulo debes establecer como objeto el de **tablero**.

!!! warning "Filtro de objeto obligatorio"
    El **filtro de objeto** siempre es obligatorio, porque el Kanban debe representar un único registro de tablero.
    Por ejemplo, un conductor concreto y sus entregas. Si necesitas un tablero para un grupo de conductores, utiliza un objeto padre como Equipo y no Repartidor.

## Configuración Kanban

Después de seleccionar **Object** y **Object Where**, crea tu propia configuración en **Kanban Settings** desde el campo que aparece en la parte inferior derecha del formulario. Ahí configurarás las siguientes secciones:

### Configuración del tablero

Define el comportamiento básico del tablero y sus etiquetas.

![](../docs_assets/images/ModulesConf/KanbanSettings1.png "Image 1. Kanban Settings")

| Ajuste | Descripción |
|--------|-------------|
| **Settings Name** | Nombre usado para identificar esta configuración de Kanban. |
| **Board Object Name** | Objeto principal del Kanban (padre de las tarjetas). Puedes usar sus propiedades en las plantillas de abajo. |
| **Board Title Template** | Título que se mostrará en la parte superior del tablero, por ejemplo `{{DriverName}} Kanban`. |
| **Board Description Template** | Texto corto que se mostrará bajo el título, por ejemplo `All deliveries for {{DriverName}}`. |

### Configuración de columnas

Aquí defines la vista que determina cuántas columnas tiene el Kanban y cómo se nombran y estilizan:

![](../docs_assets/images/ModulesConf/KanbanSettings2.png "Image 2. Kanban Settings")

| Ajuste | Descripción |
|--------|-------------|
| **Column View Name** | Vista usada para cargar la información de las columnas. Debe incluir al menos los dos primeros campos listados abajo. |
| **Column Description Field** | Texto mostrado en la parte superior de la columna. |
| **Column ID Field** | Identificador interno de cada columna. |
| **CSS Class Field** | Clase CSS aplicada al div `.kanban-col` de la columna. |
| **Icon Class** | Icono mostrado junto a la descripción de la columna. |

!!! info "La vista de columnas puede estar desacoplada"
    En muchas implementaciones esta vista está lógicamente desacoplada del **board object**.
    Esto es habitual cuando las columnas provienen de una tabla maestra que almacena los **IDs** y **nombres** de estado.

### Configuración de tarjetas

Aquí defines el **objeto de tarjetas**, la **vista** usada para cargar los datos y los campos que renderizan cada tarjeta:

![](../docs_assets/images/ModulesConf/KanbanSettings3.png "Image 3. Kanban Settings")

| Ajuste | Descripción |
|--------|-------------|
| **Card Object Name** | Objeto que se usará como tarjetas. |
| **Card View Name** | Vista usada para renderizar la información de las tarjetas. Debe incluir al menos los tres primeros campos listados abajo. |
| **Card ID Field** | Identificador interno de la tarjeta. |
| **Card Column ID Field** | Campo que define en qué columna debe aparecer cada tarjeta al cargarse. |
| **Card Description Field** | La descripción será el contenido de la tarjeta si no se asigna una plantilla de contenido. |
| **Card Content Template** | Plantilla HTML opcional para renderizado enriquecido de la tarjeta. Si se usa, puede parsear campos de la tarjeta. |

### Configuración del área de archivo

Configura el área de archivado. Archivar significa cambiar el estado de la tarjeta al **Archived State ID** configurado. Las tarjetas archivadas no se muestran en el tablero Kanban.

![](../docs_assets/images/ModulesConf/KanbanSettings4.png "Image 4. Kanban Settings")

| Ajuste | Descripción |
|--------|-------------|
| **Archived State ID** | ID de estado que se asigna cuando una tarjeta se suelta en el área de archivado. |
| **Archived Text** | Texto corto mostrado en el área de archivado. |
| **Archived Icon** | Icono mostrado en el área de archivado. |
| **Archived CSS Class** | Clase CSS aplicada al área de archivado. |

### Configuración deeventos

Define qué procesos se ejecutan cuando se disparan los eventos del Kanban.

![](../docs_assets/images/ModulesConf/KanbanSettings5.png "Image 5. Kanban Settings")

| Ajuste | Descripción |
|--------|-------------|
| **On Card Click** | Proceso ejecutado al hacer clic en una tarjeta. |
| **On Change Column** | Proceso ejecutado cuando una tarjeta cambia de columna. |
| **On Archive Box Drop** | Proceso ejecutado cuando una tarjeta se suelta en el área de archivado. |

## Añadir el kanban a tu página

Arrastra el módulo a tu página desde el gestor de módulos y completa los siguientes campos:

![](../docs_assets/images/ModulesConf/kanbanConf.png "Image 6. Kanban Settings")

| Ajuste | Descripción |
|--------|-------------|
| **ID** | Identificador del módulo. |
| **Type** | Tipo de módulo, en este caso Kanban Panel. |
| **Description** | Breve descripción del módulo. |
| **Title** | Título mostrado en el módulo. |
| **Classification** | Como no es un módulo por defecto, usa Project Module. |
| **Container** | Tipo de contenedor del módulo. |
| **Object Name** | Selecciona el objeto de tablero. |
| **Object Where** | Condición usada para cargar un único registro de tablero. |
| **Kanban Settings Name** | Configuración de Kanban creada en la sección anterior. |

## Videotutorial

Puedes ver también el vídeo sobre cómo configurar el módulo kanban:
<div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/AidJrIHQHZc" title="YouTube video player" frameborder="0" allowfullscreen=""></iframe>
</div>