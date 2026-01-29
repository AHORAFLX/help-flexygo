# Modules

**Flexygo** modules have been specially designed to facilitate the creation of various utilities that will be useful for your project. Modules can help us to add additional information to existen pages, for instance, using Popover you can show additional information; organizate your team work with Kanban module; represent location with Maps.

Before you'll start to configure selected modules, it's essential to read the article about [Module Management](/Modules/ModuleManagement)
{: .flx-warning-card }

In this chapter we will shortly explain all **flexygo** modules, for more information you'll be able to redirect to the special article with detailed module information.

## Button Tab

A tab button is a UI component that is placed inside of a tab bar. The following module does the function of a tab, but with the appearance of a drop-down button. This module can be useful when you need to save space on your page.

![](../docs_assets/images/ModulesConf/buttonTab.png "Image 1. Button Tab")

To add this module we must fill in the following fields of the configuration form:

![Button Tab](../docs_assets/images/ModulesConf/buttonTabConf.png "Image 2. Button Tab Configuration")

For the correct configuration of this module it is necessary to fill in the following fields:

|   Field  |  Description  |
| --- | --- |
| Id  | Identify the module |
| Type | Module type, in this case Button Tab |
| Description | Brief description of the module |
| Title | Title that appears on the module |
| Classification | Since it is not a default module it is always Project Module |
| Container | Module container type |

## Module Tab

A module tab is a design pattern where content is separated into different panes, and each pane is viewable one at a time. The user requests content to be displayed by clicking the content’s corresponding tab control. The following module works as a tabulator with different modules inside. It can be used as traditional tab or as dropdown buttons.

![Module Tab](../docs_assets/images/ModulesConf/moduletab.png "Image 3. Module Tab")

To add this module ans setup its configuration form:

![Module Tab Configuration](../docs_assets/images/ModulesConf/moduletabConf.png "Image 4. Module Tab Configuration")

For the correct configuration of this module it is necessary to fill in the following fields:

|   Field  |  Description  |
| --- | --- |
| Id  | Identify the module |
| Type | Module type, Module tab or Module dropdown buttons |
| Description | Brief description of the module |
| Title | Title that appears on the module |
| Classification | Since it is not a default module it is always Project Module |
| Container | Module container type |

## Calendar and Scheduller

The following module allows us to display a calendar. It provides its users with features that help them plan and schedule important events and tasks while also enabling various functions such as creating time reports and analyzing the time allocation to different sectors.

![Calendar](../docs_assets/images/ModulesConf/CalendarMonth.png "Image 5. Calendar")

<div class="flx-info-card" markdown="1">
Check out additional help to see how to set it up:

[Manual Calendar and Scheduler](/Modules/Scheduler&Calendar)

[Video Scheduller](https://youtu.be/lKKMce5PsrA)
</div>

## Chart

A chart is a graphical representation for data visualization, in which "the data is represented by symbols, such as bars in a bar chart, lines in a line chart, or slices in a pie chart". A chart can represent tabular numeric data, functions or some kinds of quality structure and provides different info. The following module allows us to display different types of charts.

![Chart](../docs_assets/images/ModulesConf/Chart.png "Image 6. Chart")

<div class="flx-info-card" markdown="1">
Check out additional help to see how to set it up:

[Manual Chart](/Modules/Chart)

[Manual Chart II](/Modules/ChartII)

[Video Chart](https://youtu.be/Nj8si7aUPe4)
</div>

## Document & Image Manager

Thanks to this module, you can upload documents and pictures that will be linked to a particular object. Subsequently, you can edit and delete uploaded documents/pictures.

![Document Manager](../docs_assets/images/ModulesConf/DocumentManager.png "Image 7. Chart")

<div class="flx-info-card" markdown="1">
Check out additional help to see how to set it up:

[Manual Document & Image Manager](/Modules/Chart)

[Video Document and Image Manager](https://youtu.be/qNQOoO1TcyA)

[Video Document Manager](https://youtu.be/ktET_gXxdl0)

[Video Image Manager](https://youtu.be/apdpn_i0t4A)
</div>

## Chatter

Chatter is a type of module, which allows us to create object related conversations.

![Chatter](../docs_assets/images/Chatter/chatter-example.png "Image 8. Chatter")

<div class="flx-info-card" markdown="1">
Check out additional help to see how to set it up:

[Manual Chatter](/Modules/Chatter)
</div>

## Easy Pie, Easy Info, Easy Line and Sparklines

Easy Pie, Easy Info, Easy Line and Sparklines are some of the web components you can use for charting. Combined in a HTML module, you could obtain results similar to these ones:

![Easy Pie](../docs_assets/images/ModulesConf/EasyInfoExamples.png "Image 9. Easy Pie")

Check out additional help to see how to set it up

<div class="flx-info-card" markdown="1">
Check out additional help to see how to set it up:

[Manual Easy Pie/Line/Info](/Modules/ChartII)
</div>

## Edit Object List

This module allows you to edit the content of the collection without opening a new window.

![Edit Object List](../docs_assets/images/ModulesConf/EditObjectList.png "Image 10. Edit Object List")

To add this module we must fill in the following fields.

1\. Use Object's wizard to configure the Edit Grid Properties

![Edit Grid Properties](../docs_assets/images/ModulesConf/PrevEditObjectList.png "Image 11. Edit Grid Properties")

2\. Then you can configure the module

![Edit Grid Configuration](../docs_assets/images/ModulesConf/EditObjectListConf.png "Image 12. Edit Grid Configuration")

For the correct configuration of this module it is necessary to fill in the following fields:

|   Field  |  Description  |
| --- | --- |
| Id  | Identify the module |
| Type | Module type, in this case Edit Object List/td> |
| Description | Brief description of the module |
| Title | Title that appears on the module |
| Classification | Since it is not a default module it is always Project Module |
| Container | Module container type |
| Object Name | They have to select the object (Collection) that we want to edit |

<div class="flx-info-card" markdown="1">
Check out additional help to see how to set it up:

[Video Edit Object List](https://youtu.be/UH-WqcCFWJI)
</div>

## Funnel

The funnel is commonly uses in marketing to shows the way a potential customer goes from becoming aware of your brand to purchasing a good or service.

![Funnel](../docs_assets/images/ModulesConf/funnel.png "Image 13. Funnel")

To add this module use its configuration form:

![Edit Grid Configuration](../docs_assets/images/ModulesConf/funnelConf.png "Image 14. Funnel Configuration")

For the correct configuration of this module it is necessary to fill in the following fields:

|   Field  |  Description  |
| --- | --- |
| Id  | Identify the module |
| Type | Module type, in this case Funnel |
| Description | Brief description of the module |
| Title | Title that appears on the module |
| Classification | Since it is not a default module it is always Project Module |
| Container | Module container type |
| Connection string | To identify from wich data model we obtain the data from |
| SQL Sentence | Here we introduce the necessary query that must have the following structure: SELECT Label AS label, Value AS value, Background AS background FROM Table |

<div class="flx-info-card" markdown="1">
Check out additional help to see how to set it up:

[Manual Funnel](/Modules/Funnel)
</div>

## HTML Module

Just add a flx-html web component to your page and you will imediatly get its content displayed on the screen. You can include any other **flexygo** web component y your HTML module.

![HTML Module](../docs_assets/images/ModulesConf/html2.png "Image 15. HTML Module")

To add this module we must fill in the following fields of the configuration form:

![HTML Module Configuration](../docs_assets/images/ModulesConf/html.png "Image 16. HTML Module Configuration")

For the correct configuration of this module it is necessary to fill in the following fields:

|   Field  |  Description  |
| --- | --- |
| Id  | Identify the module |
| Type | Module type, in this case HTML |
| Description | Brief description of the module |
| Title | Title that appears on the module |
| Classification | Since it is not a default module it is always Project Module |
| Container | Module container type |
| Html | Insert your html code |

<div class="flx-info-card" markdown="1">
Check out additional help to see how to set it up:

[HTML module with on-screen programming](https://youtu.be/CReFCxm3S44)
</div>

## Kanban

Kanban is one of the simplest frameworks used as it allows project managers to efficiently manage and keep track of their projects. A distinguishing feature of the Kanban framework among different agile methodologies is its compatibility with the existing organizational setting. The Kanban module simulates a list of posits to organize your tasks:

![Kanban](../docs_assets/images/ModulesConf/kanban.png "Image 17. Kanban")

<div class="flx-info-card" markdown="1">
Check out additional help to see how to set it up:

[Manual Kanban](/Modules/Kanban)

[Video Kanban](https://youtu.be/AidJrIHQHZc)
</div>

## Timeline

Timeline module is a visual tool that outlines a sequence of events for a specific time period. It allows us to create planners based on an object in a simple and easy way.

![Timeline](../docs_assets/images/Timeline/Timeline_AdvancedWithGroups_Result.png "Image 18. Timeline")

<div class="flx-info-card" markdown="1">
Check out additional help to see how to set it up:

[Manual Timeline](/Modules/Timeline)

[Video Timeline](https://youtu.be/_bVe_MLU5r0)
</div>

## List Filter

With this module you can add a search control to your forms and link them to module content.

![List Filter](../docs_assets/images/ModulesConf/ListFilter.png "Image 19. List Filter")

To add this module use the configuration form:

![List Filter Configuration](../docs_assets/images/ModulesConf/ListFilterConf.png "Image 20. List Filter Configuration")

For the correct configuration of this module it is necessary to fill in the following fields:

|   Field  |  Description  |
| --- | --- |
| Id  | Identify the module |
| Type | Module type, in this case List Filter |
| Description | Brief description of the module |
| Title | Title that appears on the module |
| Classification | Since it is not a default module it is always Project Module |
| Container | Module container type |
| Object Name | They have to select the object that we want to relational with the manager |

## Map

With this module you can visualize a Google Map with the desired address:

![Map](../docs_assets/images/ModulesConf/map.png "Image 21. Map")

To add this module we must fill in the following fields of the configuration form:

![Map Configuration](../docs_assets/images/ModulesConf/mapConf.png "Image 22. Map Configuration")

For the correct configuration of this module it is necessary to fill in the following fields:

|   Field  |  Description  |
| --- | --- |
| Id  | Identify the module |
| Type | Module type, in this case List Map |
| Description | Brief description of the module |
| Title | Title that appears on the module |
| Classification | Since it is not a default module it is always Project Module |
| Container | Module container type |
| Connection string | To identify from wich data model we obtain the data from |
| SQl Sentence | Here we introduce the necessary query that must have the following structure. Select '60' as lat, '20' as lng, 'Noruega' as address, 'Titulo' as title, 'Content' as content, 'Icon' as icon, 'Label' as label, '1' as zIndex {"Cluster":"true","Color":"retro","Width":"100%","Height":"400"} |

<div class="flx-info-card" markdown="1">
Check out additional help to see how to set it up:

[Manual Maps](/Modules/Maps)

[Video Maps on dashboard](https://youtu.be/2CDScKLUVjw)

[Video Maps in object view](https://youtu.be/qV9uGvAL_5g)
</div>

## Mail

With this module you can visualize your emails from your mail server. you can also link mails to your aplication objects.

![Mail](../docs_assets/images/ModulesConf/Mail.PNG "Image 23. Mail")

<div class="flx-info-card" markdown="1">
Check out additional help to see how to set it up:

[Manual Mail](/Modules/Mail)
</div>

## Nav Panel

With the following module you can create cards with nodes as content:

![Navigation Panel](../docs_assets/images/ModulesConf/navPanel.png "Image 24. Navigation Panel")

To add this module we must fill in the following fields of the configuration form:

![Navigation Panel Configuration](../docs_assets/images/ModulesConf/navPanelConf.png "Image 25. Navigation Panel Configuration")

For the correct configuration of this module it is necessary to fill in the following fields:

|   Field  |  Description  |
| --- | --- |
| Id  | Identify the module |
| Type | Module type, in this case List Map |
| Description | Brief description of the module |
| Title | Title that appears on the module |
| Classification | Since it is not a default module it is always Project Module |
| Container | Module container type |
| Params | There choose the nodeId and the mode to show. Params: initNode="10123EDB-C67D-4FFB-904D-639DBFD32301" mode="panel" |

## Network Graphic

With this module you can see a map of relations, processes, properties, templates, data views and security for an object.

![Network Graphic](../docs_assets/images/ModulesConf/networkGraphic.png "Image 26. Network Graphic")

To add this module we must fill in the following fields of the configuration form:

![Network Graphic Configuration](../docs_assets/images/ModulesConf/networkGraphicConf.png "Image 27. Network Graphic Configuration")

For the correct configuration of this module it is necessary to fill in the following fields:

|   Field  |  Description  |
| --- | --- |
| Id  | Identify the module |
| Type | Module type, in this case Network Graphic |
| Description | Brief description of the module |
| Title | Title that appears on the module |
| Classification | Since it is not a default module it is always Project Module |
| Container | Module container type |
| Object Name | They have to select the object that we want to relational with the module |
| Object Where | They have to select the where options for the object |

## Object Edit

With this module you can edit any object:

![Object Edit](../docs_assets/images/ModulesConf/ObjectEdit.png "Image 28. Object Edit")

To add this module we must fill in the following fields of the configuration form:

![Object Edit Configuration](../docs_assets/images/ModulesConf/ObjectEditConf.png "Image 29. Object Edit Configuration")

For the correct configuration of this module it is necessary to fill in the following fields:

|   Field  |  Description  |
| --- | --- |
| Id  | Identify the module |
| Type | Module type, in this case Object Edit |
| Description | Brief description of the module |
| Title | Title that appears on the module |
| Classification | Since it is not a default module it is always Project Module |
| Container | Module container type |
| Object Name | They have to select the object that we want to relational with the module |
| Object Where | They have to select the where options for the object |
| Module Class | You can add size-xs, size-s, size-m or size-l to change font size or no-label to hide form all form labels |

## Object List

With this module you can display a list of objects (collection):

![Object List](../docs_assets/images/ModulesConf/ObjectList.png "Image 30. Object List")

To add this module we must fill in the following fields of the configuration form:

![Object List Configuration](../docs_assets/images/ModulesConf/ObjectListConf.png "Image 31. Object List Configuration")

For the correct configuration of this module it is necessary to fill in the following fields:

|   Field  |  Description  |
| --- | --- |
| Id  | Identify the module |
| Type | Module type, in this case Object List |
| Description | Brief description of the module |
| Title | Title that appears on the module |
| Classification | Since it is not a default module it is always Project Module |
| Container | Module container type |
| Object Name | They have to select the object that we want to relational with the module |
| Object Where | They have to select the where options for the object |

## Object Processes

With this module you can visualize the processes related to an object:

![Object Processes](../docs_assets/images/ModulesConf/ObjectProcesses.png "Image 32. Object Processes")

To add this module we must fill in the following fields of the configuration form:

![Object Processes Configuration](../docs_assets/images/ModulesConf/ObjectProcessesConf.png "Image 33. Object Processes Configuration")

For the correct configuration of this module it is necessary to fill in the following fields:

|   Field  |  Description  |
| --- | --- |
| Id  | Identify the module |
| Type | Module type, in this case Object Process |
| Description | Brief description of the module |
| Title | Title that appears on the module |
| Classification | Since it is not a default module it is always Project Module |
| Container | Module container type |
| Object Name | They have to select the object that we want to relational with the module |
| Object Where | They have to select the where options for the object |

<div class="flx-info-card" markdown="1">
Check out additional help to see how to set it up:

[Update Types](/Programming/UpdateTypes)
</div>

## Object Reports

With this module you can visualize the reports related to any object:

![Object Reports](../docs_assets/images/ModulesConf/ObjectReports.png "Image 34. Object Reports")

To add this module we must fill in the following fields of the configuration form:

![Object Reports Configuration](../docs_assets/images/ModulesConf/ObjectProcessesConf.png "Image 35. Object Reports Configuration")

For the correct configuration of this module it is necessary to fill in the following fields:

|   Field  |  Description  |
| --- | --- |
| Id  | Identify the module |
| Type | Module type, in this case Object Reports |
| Description | Brief description of the module |
| Title | Title that appears on the module |
| Classification | Since it is not a default module it is always Project Module |
| Container | Module container type |
| Object Name | They have to select the object that we want to relational with the module |
| Object Where | They have to select the where options for the object |

## Object Search

With this module you can do searches for any object:

![Object Search](../docs_assets/images/ModulesConf/ObjectSearch.png "Image 36. Object Search")

To add this module we must fill in the following fields of the configuration form:

![Object Search Configuration](../docs_assets/images/ModulesConf/ObjectSearchConf.png "Image 37. Object Search Configuration")

For the correct configuration of this module it is necessary to fill in the following fields:

|   Field  |  Description  |
| --- | --- |
| Id  | Identify the module |
| Type | Module type, in this case Object Search |
| Description | Brief description of the module |
| Title | Title that appears on the module |
| Classification | Since it is not a default module it is always Project Module |
| Container | Module container type |
| Object Name | They have to select the object that we want to relational with the module |

## Object View

With this module you can display and view any object:

![Object View](../docs_assets/images/ModulesConf/ObjectView.png "Image 38. Object View")

To add this module we must fill in the following fields of the configuration form:

![Object View Configuration](../docs_assets/images/ModulesConf/ObjectViewConf.png "Image 39. Object View Configuration")

For the correct configuration of this module it is necessary to fill in the following fields:

|   Field  |  Description  |
| --- | --- |
| Id  | Identify the module |
| Type | Module type, in this case Object View |
| Description | Brief description of the module |
| Title | Title that appears on the module |
| Classification | Since it is not a default module it is always Project Module |
| Container | Module container type |
| Object Name | They have to select the object that we want to relational with the module |
| Object Where | They have to select the where options for the object |

## Organization Chart

With this module you can see an organization hierarchical structure:

![Organization Chart](../docs_assets/images/ModulesConf/Orgchart.PNG "Image 40. Organization Chart")

To add this module we must fill in the following fields of the configuration form:

![Organization Chart Configuration](../docs_assets/images/ModulesConf/OrgChartConf.png "Image 41. Organization Chart Configuration")

For the correct configuration of this module it is necessary to fill in the following fields:

|   Field  |  Description  |
| --- | --- |
| Id  | Identify the module |
| Type | Module type, in this case Org. Chart |
| Description | Brief description of the module |
| Title | Title that appears on the module |
| Classification | Since it is not a default module it is always Project Module |
| Container | Module container type |
| Object Name | They have to select the object that we want to relational with the module |
| Object Where | They have to select the where options for the object |
| Connection string | To identify from wich data model we obtain the data from |
| SQL Sentence | Here we introduce the necessary query that must have at least the following fields:<br><br>*   Id<br>*   Parent<br>*   And any other field you need to use in the template<br><br>SELECT EmployeeId AS Id, Responsible AS Parent, Name, Area, Level, Img FROM Employees |
| Html | Insert your html code you want to use as a template for each node |
| Header | Insert your html code you want to use as the headder |
| Footer | Insert your html code you want to use as a the footer |
| Options | A Json string with treant orgchart options. for more info go [here](http://fperucic.github.io/treant-js/). Default options are: Options: { chart: { connectors: { type: 'step' }, node: { HTMLclass: 'orgchartnode' }, hideRootNode: true } } |

## Related Objects

With this module you can display relations between an object and its childs:

![Related Objects](../docs_assets/images/ModulesConf/RelatedObjectsHtml.png "Image 42. Related Objects")

To add this module we must fill in the following fields of the configuration form:

![Related Objects Configuration](../docs_assets/images/ModulesConf/RelatedObjectsHtmlConf.png "Image 43. Related Objects Configuration")

For the correct configuration of this module it is necessary to fill in the following fields:

|   Field  |  Description  |
| --- | --- |
| Id  | Identify the module |
| Type | Module type, in this case Object Html |
| Description | Brief description of the module |
| Title | Title that appears on the module |
| Classification | Since it is not a default module it is always Project Module |
| Container | Module container type |
| Object Name | They have to select the object that we want to relational with the module |
| Object Where | They have to select the where options for the object |

## Object Related Processes

![Object Related Processes](../docs_assets/images/ModulesConf/RelatedProcessesHtml.png "Image 44. Object Related Processes")

With this module you can see processes related to an object.

To add this module we must fill in the following fields of the configuration form:

![Related Objects Processes Configuration](../docs_assets/images/ModulesConf/RelatedProcessesHtmlConf.png "Image 45. Related Objects Processes Configuration")

For the correct configuration of this module it is necessary to fill in the following fields:

|   Field  |  Description  |
| --- | --- |
| Id  | Identify the module |
| Type | Module type, in this case Related Processes Html |
| Description | Brief description of the module |
| Title | Title that appears on the module |
| Classification | Since it is not a default module it is always Project Module |
| Container | Module container type |
| Object Name | They have to select the object that we want to relational with the module |
| Object Where | They have to select the where options for the object |

## Object Related Reports

With this module you can see the related reports to an object.

![Object Related Reports](../docs_assets/images/ModulesConf/RelatedReportsHtml.png "Image 46. Object Related Reports")

To add this module we must fill in the following fields of the configuration form:

![Object Related Reports Configuration](../docs_assets/images/ModulesConf/RelatedReportsHtmlConf.png "Image 47. Object Related Reports Configuration")

For the correct configuration of this module it is necessary to fill in the following fields:

|   Field  |  Description  |
| --- | --- |
| Id  | Identify the module |
| Type | Module type, in this case Related Reports Html |
| Description | Brief description of the module |
| Title | Title that appears on the module |
| Classification | Since it is not a default module it is always Project Module |
| Container | Module container type |
| Object Name | They have to select the object that we want to relational with the module |
| Object Where |