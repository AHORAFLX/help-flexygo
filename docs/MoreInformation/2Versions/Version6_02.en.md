# Version 6.2

## New features

* The flx-dbcombo and flx-multicombo components now let you add new values that are saved to the associated object

![](../../docs_assets/images/Versions/Version6_02/1.png)

* The property manager has been redesigned to display every property uniformly with the edit view

![](../../docs_assets/images/Versions/Version6_02/2.png)

* Ability to assign a default schema when creating objects through the wizard
* Insert, update and delete processes now accept the C# Embedded type
* Support for sending JSON parameters to processes (converted to a string)
* flx-img images let you configure text and background color
* Object List nodes now use presets
* JavaScript processes include an eventData parameter with event information
* New option in the developer menu to access object or collection processes

## Fixes

* Check and switch controls keep their values when affected by dependencies
* Listings now load filters correctly when reloading the page
* Prompt message callbacks now run only once with Enter
* Fixed an error in flx-chatter when mentioning users with an avatar
* flx-textareas with no options in HTML modules now load correctly
* flx-htmledits restore controls that were removed in the previous version
* Fixes when retrieving mail templates
* JobLog now shows the real execution time of cron jobs
* Fixed errors in Oracle object views

## Deprecated features

* **Mandatory requirement:** .NET Framework 4.7.2 installed on the IIS server ([download](https://dotnet.microsoft.com/en-us/download/dotnet-framework/net472))

