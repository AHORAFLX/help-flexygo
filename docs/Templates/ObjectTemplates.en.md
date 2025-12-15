# Object Templates

Flexygo modules like lists or views normally include a change template button . This button allows us to switch different forms of displaying the module allowing each user to establish which view is best for him setting this one such as default template. Each view for each module is memorized just by selecting it.

![template](/docs_assets/images/ObjectsTemplates/Toolbar.png)

## List Templates

The List module template button displays elements in the following way:

1.  Defined **List Type Templates**
2.  Defined Object **Data Views** with the Display as Grid check enabled

When a List module is loaded the displayed template will follow this sequence:

1.  Last template displayed by current user
2.  List template marked as default
3.  Data view marked as default
4.  Data view marked as show as grid

## View Templates

The List module template button displays elements in the following way:

1.  Defined **View Type Templates**
2.  Defined **Edit Form** in a view mode

When a View module is loaded, the displayed template will follow this sequence:

1.  Last template displayed by current user
2.  View template marked as default
3.  View form based on Edit design

## Edit Templates

The List module template button displays elements in the following way:

1.  Defined **Edit Type Templates**
2.  Default **Edit Form**

When an Edit module is loaded the displayed template will follow this sequence:

1.  Last template displayed by current user
2.  Edit template marked as default
3.  Edit form based on Edit design

## Special Template Tokens

Templates can also include specific strings for displaying diferent types of buttons:

*   **{{objectmenu}}**: To display the complete object menu
*   **{{processmenu}}**: To display only the object process menu
*   **{{reportmenu}}**: To display only the object report menu
*   **{{deletebutton}}**: To the object delete button
*   **{{viewbutton}}**: To the object view button
*   **{{editbutton}}**: To the object edit button
*   **{{newbutton}}**: To the object new button
*   **{{bagbutton}}**: To display the bag button on the elements of a collection (list)

## Template Groups

Sometimes you need to nest templates for a more complex display:

![template](/docs_assets/images/ObjectsTemplates/Groups.png)

You can achieve this by using as many template groups as you may need. For the sample above we used:

![template](/docs_assets/images/ObjectsTemplates/Groups-examples.png)

After creating the groups you can include the following markup in your template header.

![template](/docs_assets/images/ObjectsTemplates/Groups-config.png)