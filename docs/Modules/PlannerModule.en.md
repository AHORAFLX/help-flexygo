# Planner

Planner module allows you to create schedules from multiple objects and different visualization modes.

This component, unlike the Timeline module, does not take into account times, only dates.

Some properties are documented in the respective form.

## Visualization modes

As many modes as necessary can be created in a single planner. In addition, in each mode you can create multiple cards associated to different objects.

![](../docs_assets/images/Planner/planner_example.png "Image 1. Timeline Basic Configuration")

## Configuration

To configure the planner, we need to fill in the following settings:

### Module Settings

![](../docs_assets/images/Planner/planner_module_conf.png "Image 2. Module Configuration")

### Planner Settings

![](../docs_assets/images/Planner/planner_conf.png "Image 3. Planner Configuration")

The module object table must be present in all sql views used in mode and card configurations.
{: .flx-warning-card }

### Mode Settings

![](../docs_assets/images/Planner/planner_mode_conf.png "Image 4. Mode Configuration example")

You can set as many modes as necessary. Each of these modes will have its own cards and cell configuration.

**First column configuration**: The object and view to be used in the first column. The First column id field will be the field that matches the first column with the cards.

**Title template**: Html field to be drawn over the planner. You can display information or buttons with custom processes.

**Menus template**: You can customize the menu for each day (in the table header) or for each cell with processes. In this template you can use both the scheduler date, the group identifier (only in the cell) and the page defaults.

### Cards Settings

![](../docs_assets/images/Planner/planner_card_conf.png "Image 5. Card Configuration example")

Within a mode you can have as many card configurations as you need.

**Object configuration**: The object and the view that will return all the cards.

**Priority**: When there is more than one type of card in the cell, the priority will determine which of them is displayed in the scheduler. With the same priority, both will be displayed, if different, the one with the lower priority will be displayed (same as the order).

**Card date** field: The sql view field with the date.

**Card First** Column relation: The sql view field that relates to the first column.

**Class and Style fields**: The fields in the sql view containing the styles for the card.

**Editable**: If active, the card can be edited and deleted from the scheduler, as well as dragged from one cell to another, by executing the OnMove function.

**Draggables**: This setting allows you to create a list of objects that can be dragged into the planner to perform different actions by executing the OnAdd function.

**OnAdd function**: Function that will be executed when dragging an object from the side column to the planner.

**OnDelete Function**: Function that will be executed when you delete an element from the planner. If none is specified, the object delete type will be executed.

**OnMove Function**: Function that will be executed when a card is moved from one cell to another.

### Draggable objects

You can have one draggable object for each card configuration. The different draggable objects will be displayed in a list on the left side.

![](../docs_assets/images/Planner/planner_draggables.png "Image 6. Draggable objects column")