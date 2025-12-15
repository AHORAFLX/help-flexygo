# Designing flexygo offline App

Once the application is created, we will need to give it functionality, creating the objects, pages, menus and functions. There are 5 basic steps to create an applcation and 4 other steps that allow us to have greater functionality in our App.

## Basic Steps

1.  Create Objects
2.  Cretate list and view pages
3.  Expand data model with views
4.  Create menus

## Additional Steps

1.  Edit home page
2.  Add JS functions
3.  Expand your App styles with css classes
4.  Add Static resources

## Create an object

### Object wizzard

You can create a new objects from 0 or create objects based on existing objects.  
In the section of objects we will press on the button + (Create new object to start).  
Then we will access to the wizzard of offline objects, where we will only assign a name, description and icon for the object and collection, in addition to assigning the name of the table or view on which it will be based. Press the Save and Continue button and we will go to the second step.

![New Object](/docs_assets/images/offline/NewObject.png "Image 1. New Object")

![New Object](/docs_assets/images/offline/NewObject2.png "Image 2. New Object")

### Adding Properties

Now you can use the object wizard

![Wizzard](/docs_assets/images/offline/Wizzard1.png "Image 3. Wizzard")

Next we will create and configure each of the properties of the object.

![Wizzard](/docs_assets/images/offline/Wizzard2.png "Image 4. Wizzard")

Setting up Properties.

![Wizzard](/docs_assets/images/offline/Wizzard3.png "Image 5. Wizzard")

Unlike the **flexygo** environment, in the offline environment, when the properties are like combo or dbcombo, we will have the option of adding an object or a view instead of establishing a SQL statement.

![Wizzard](/docs_assets/images/offline/PropertyCombo.png "Image 6. Property Combo")

## Extend data model through object views

Object views are used for combo dropdowns or to extend the information that is displayed on object lists or object view pages. All theese views will be created as tables and sent to your mobile device. You only have to fill in the main information, the SQL sentence and save.

![Object View](/docs_assets/images/offline/ObjectView.png "Image 7. Object View")

You can check the generated database schemaat any time just by using the schea button.

![Schema](/docs_assets/images/offline/schema.png "Image 8. Schema")

## Object Pages

It should be noted that the development platform will automatically create the view and list pages for each object that we create through the wizzard. Therefore we can use the initial templates and redesign them to our liking, in addition to adding new ones.

![Object Pages](/docs_assets/images/offline/ObjectPages.png "Image 9. Object Pages")

We therefore have the option of editing existing templates or creating new templates. Only filling description sections (name, type, title), html sections (header, body, footer, empty ) and the SQL sentence in case you need additional information to that offered by the object itself with its properties.

![Object Pages Edit](/docs_assets/images/offline/ObjectPagesEdit.png "Image 9. Object Pages Edit")

## App Menus

They are the shortcuts to the objects that we are going to offer on the device. In the menus section we will have on one side the button to add new menus, in addition to the possibility of editing the existing menus. When creating new menus, as soon as we press the add button, a generic menu will be created that we must modify with the Edit option.

![Menu](/docs_assets/images/offline/MenuMenu1.png "Image 10. Menu")

![Menu](/docs_assets/images/offline/MenuMenu2.png "Image 11. Menu")

## Additional steps

### Designing home page

Access and design of AppOffline HomePage

![Home Page](/docs_assets/images/offline/HomePage.png "Image 12. Home Page")

## Adding additional JavaScript

We can expand functionallity just by creating our own js functions or using native functions of the Offline **flexygo** environment

### Own JavaScript Functions

![JavaScript function](/docs_assets/images/offline/JS.png "Image 13. JavaScript function")

### Using **flexygo** native functions

We can use any of the **flexygo** built in native functions. To check them out just:

In device mode > F12 -> Console > Flexygo + Intro we access the self-documented functions:

![Native Functions](/docs_assets/images/offline/NativeFunctions.png "Image 14. Native Functions")

## Adding additional styles

![Styles](/docs_assets/images/offline/styles.png "Image 15. Styles")

## Adding additional resources

![Files](/docs_assets/images/offline/files.png "Image 16. Files")

## Adding a logo

You can set the login screen app logo on flexygo miscellaneous settings, as can bee seen in the image

![Logo](/docs_assets/images/offline/AddLogo.png "Image 17. Logo")