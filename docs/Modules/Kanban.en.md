# Kanban

Kanban is a project management method that helps teams to better visualize their workload and workflow. **Flexygo**s kanban module allows us to define a board using any type of objects.

A kanbas example is present in flexygo, <flx-navbutton class="link" type="openPage" pagetypeid="view" objectname="sysKanban_Board" objectwhere="([Kanban_Boards].[BoardName] = 'Flexygo_Task_List')" showprogress="false">click here</flx-navbutton> to navigate to it, and here it is its <flx-navbutton class="link" type="openPage" pagetypeid="view" objectname="sysKanban_Setting" objectwhere="KanbanSettingsName='sysFlexygo_Kanban'" showprogress="false">configuration</flx-navbutton>.

![](/assets/images/ModulesConf/kanban2.png "Image 1. Kanban")

## Settings

Kanban settings are divided in five groups:

### Board Settings

Used to define the kanban board most basic settings.

![](/assets/images/ModulesConf/kanbanSettings1.png "Image 1. Kanban Settings")

*   **Settings Name:**The name you want to use to identify this kanban settings
*   **Board Object Name:**The main kanban object, which will be usefull to parse some values on the next properties as it can be seen in the image bellow
*   **Board Title Template:**The title that will be shown on the top of the kanban
*   **Board Description Template:**A brief description that will appear below the title

### Column Settings

Here it can be set the view columns that will be used as the column configuration

![](/assets/images/ModulesConf/kanbanSettings2.png "Image 2. Kanban Settings")

*   **Column View Name:** This must be the view used to paint column information and it will need to contain at least the first 2 of this column properties
*   **Column Description Field:** This will be the description that will appear on the top of the column
*   **Column Id Field:** This field will not appear on the kanban but is needed to identify the column
*   **CSS Class Field:** The css class will be applied on the column in the .kanban-col div
*   **Icon Class:** This will be the icon that will appear next to the description

### Card Settings

Here it can be set the object and view columns that will be used as the card configuration

![](/assets/images/ModulesConf/kanbanSettings3.png "Image 3. Kanban Settings")

*   **Card Object Name:** The object that will be used as cards
*   **Card View Name:** This must be the view used to paint card information and it will need to contain at least the first 3 of this card properties
*   **Card ID Field:** This field will not appear on the kanban but is needed to identify the card
*   **Card Column ID Field:** This field will not appear on the kanban but is needed to identify in which column should the card appear when loaded
*   **Card Description Field:** The description will be the content of the card if no content template is assigned
*   **Card Content Template:** This is the HTML template field where if specified te card content will follow, description field can be parsed

### Archive Settings

Used to set the settings of the archive its area that appears when moving a card

![](/assets/images/ModulesConf/kanbanSettings4.png "Image 4. Kanban Settings")

*   **Archived State Id:** Determines which will be the id set to the column id previously mentioned in the card settings
*   **Archived Text:** A little text that will appear on the archive area
*   **Archieved Icon:** The icon which will be seen in the archive area
*   **Archieved CSS Class:** CSS class that will be aplied to the archieve area

### Event Settings

Used to define what happens when the different events are fired.

![](/assets/images/ModulesConf/kanbanSettings5.png "Image 5. Kanban Settings")

*   **On card click:** Process to run when card is clicked
*   **On Change Column:** Process to run when card gets changed of column
*   **On Archieve Box Drop:** Process to run whe card is dropped on archieve area

## Add the kanban on your page

Just proceed to drag module to your page from the module manager and fill out the following form.

![](/assets/images/ModulesConf/kanbanConf.png "Image 6. Kanban Settings")

*   **Id:** Identify the module
*   **Type:** Module type, in this case Kanban
*   **Description:** brief description of the module
*   **Title:** Title that appears on the module
*   **Classification:** Since it is not a default module it is always Project Module
*   **Container:** Module container type
*   **Object Name:** They have to select the object that we want to relational with the manager
*   **Object Where:** They have to select the condition to the object that we want to relational with the manager
*   **Kanban Settings Name:** The kanban options configured before.

You can also watch the video about how to configurate kanban module:
<div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/AidJrIHQHZc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>