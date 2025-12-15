# Módulos

Los módulos de **flexygo** han sido diseñados específicamente para facilitar la creación de diversas utilidades que serán útiles para tu proyecto. Los módulos pueden ayudarnos a añadir información adicional a páginas existentes; por ejemplo, usando Popover puedes mostrar información adicional, organizar el trabajo en equipo con el módulo Kanban o representar ubicaciones con Maps.

Antes de empezar a configurar los módulos seleccionados, es esencial leer el artículo sobre [Gestión de Módulos](/Modules/ModuleManagement)
{: .flx-warning-card }

En este capítulo explicaremos brevemente todos los módulos de **flexygo**; para obtener más información, podrás dirigirte a los artículos específicos con información detallada de cada módulo.

## Button Tab

Un botón de pestaña es un componente de UI que se coloca dentro de una barra de pestañas. Este módulo funciona como una pestaña, pero con la apariencia de un botón desplegable. Es útil cuando necesitas ahorrar espacio en tu página.

![](/docs_assets/images/ModulesConf/buttonTab.png "Imagen 1. Button Tab")

Para añadir este módulo debemos rellenar los siguientes campos del formulario de configuración:

![Button Tab](/docs_assets/images/ModulesConf/buttonTabConf.png "Imagen 2. Configuración Button Tab")

| Campo | Descripción |
| --- | --- |
| Id | Identifica el módulo |
| Type | Tipo de módulo, en este caso Button Tab |
| Description | Breve descripción del módulo |
| Title | Título que aparece en el módulo |
| Classification | Al no ser un módulo por defecto, siempre es Project Module |
| Container | Tipo de contenedor del módulo |

## Module Tab

Un Module Tab es un patrón de diseño donde el contenido se separa en paneles distintos, cada uno visible individualmente. El usuario selecciona qué contenido mostrar al hacer clic en la pestaña correspondiente. Este módulo funciona como un tabulador con distintos módulos en su interior; puede usarse como pestaña tradicional o como menú desplegable.

![Module Tab](/docs_assets/images/ModulesConf/moduletab.png "Imagen 3. Module Tab")

![Module Tab Configuration](/docs_assets/images/ModulesConf/moduletabConf.png "Imagen 4. Configuración Module Tab")

| Campo | Descripción |
| --- | --- |
| Id | Identifica el módulo |
| Type | Tipo de módulo, Module Tab o Module dropdown buttons |
| Description | Breve descripción del módulo |
| Title | Título que aparece en el módulo |
| Classification | Siempre Project Module |
| Container | Tipo de contenedor del módulo |

## Calendar and Scheduler

Este módulo permite mostrar un calendario. Facilita al usuario la planificación de eventos y tareas, permitiendo además informar tiempos y analizar la asignación temporal a distintos sectores.

![Calendar](/docs_assets/images/ModulesConf/CalendarMonth.png "Imagen 5. Calendar")

<div class="flx-info-card" markdown="1">
Consulta ayuda adicional para configurar el módulo:

[Manual Calendar and Scheduler](/Modules/Scheduler&Calendar)

[Vídeo Scheduler](https://youtu.be/lKKMce5PsrA)
</div>

## Chart

Un gráfico es una representación visual de datos, donde la información se muestra mediante símbolos como barras, líneas o sectores circulares. Este módulo permite mostrar distintos tipos de gráficos.

![Chart](/docs_assets/images/ModulesConf/Chart.png "Imagen 6. Chart")

<div class="flx-info-card" markdown="1">
Ayuda adicional:

[Manual Chart](/Modules/Chart)

[Manual Chart II](/Modules/ChartII)

[Vídeo Chart](https://youtu.be/Nj8si7aUPe4)
</div>

## Document & Image Manager

Este módulo permite subir documentos e imágenes vinculados a un objeto. Posteriormente pueden editarse o eliminarse.

![Document Manager](/docs_assets/images/ModulesConf/DocumentManager.png "Imagen 7. Document Manager")

<div class="flx-info-card" markdown="1">
Ayuda adicional:

[Manual Document & Image Manager](/Modules/Chart)

[Vídeo Document and Image Manager](https://youtu.be/qNQOoO1TcyA)

[Vídeo Document Manager](https://youtu.be/ktET_gXxdl0)

[Vídeo Image Manager](https://youtu.be/apdpn_i0t4A)
</div>

## Chatter

Chatter es un módulo que permite crear conversaciones relacionadas con un objeto.

![Chatter](.\img\Help\Chatter\Chatter-example.png "Imagen 8. Chatter")

<div class="flx-info-card" markdown="1">
Ayuda adicional:

[Manual Chatter](/Modules/Chatter)
</div>

## Easy Pie, Easy Info, Easy Line y Sparklines

Estos componentes permiten realizar gráficos sencillos. Combinados en un módulo HTML pueden crear visualizaciones rápidas y compactas.

![Easy Pie](/docs_assets/images/ModulesConf/EasyInfoExamples.png "Imagen 9. Easy Pie")

<div class="flx-info-card" markdown="1">
Ayuda adicional:

[Manual Easy Pie/Line/Info](/Modules/ChartII)
</div>

## Edit Object List

Permite editar el contenido de una colección sin abrir una nueva ventana.

![Edit Object List](/docs_assets/images/ModulesConf/EditObjectList.png "Imagen 10. Edit Object List")

1. Usar el asistente del objeto para configurar las propiedades de edición:

![Edit Grid Properties](/docs_assets/images/ModulesConf/PrevEditObjectList.png "Imagen 11. Edit Grid Properties")

2. Después configurar el módulo:

![Edit Grid Configuration](/docs_assets/images/ModulesConf/EditObjectListConf.png "Imagen 12. Edit Grid Configuration")

| Campo | Descripción |
| --- | --- |
| Id | Identifica el módulo |
| Type | Tipo de módulo, Edit Object List |
| Description | Breve descripción |
| Title | Título |
| Classification | Siempre Project Module |
| Container | Tipo de contenedor |
| Object Name | Seleccionar la colección a editar |

<div class="flx-info-card" markdown="1">
Ayuda adicional:

[Vídeo Edit Object List](https://youtu.be/UH-WqcCFWJI)
</div>

## Funnel

El embudo se usa comúnmente en marketing para mostrar el recorrido del cliente desde el conocimiento del producto hasta la compra.

![Funnel](/docs_assets/images/ModulesConf/Funnel.png "Imagen 13. Funnel")

![Funnel Configuration](/docs_assets/images/ModulesConf/FunnelConf.png "Imagen 14. Configuración Funnel")

| Campo | Descripción |
| --- | --- |
| Id | Identifica el módulo |
| Type | Funnel |
| Description | Breve descripción |
| Title | Título |
| Classification | Project Module |
| Container | Tipo de contenedor |
| Connection string | Identifica el modelo de datos |
| SQL Sentence | Consulta SQL con estructura: SELECT Label AS label, Value AS value, Background AS background FROM Table |

<div class="flx-info-card" markdown="1">
Ayuda adicional:  
[Manual Funnel](/Modules/Funnel)
</div>

## HTML Module

Incluye un componente *flx-html* en tu página y su contenido se mostrará inmediatamente. Puede contener cualquier otro componente de **flexygo**.

![HTML Module](/docs_assets/images/ModulesConf/html2.png "Imagen 15. HTML Module")

![HTML Module Configuration](/docs_assets/images/ModulesConf/html.png "Imagen 16. Configuración HTML Module")

| Campo | Descripción |
| --- | --- |
| Id | Identifica el módulo |
| Type | HTML |
| Description | Breve descripción |
| Title | Título |
| Classification | Project Module |
| Container | Tipo de contenedor |
| Html | Código HTML |

## Kanban

Kanban es un framework visual que permite gestionar tareas eficientemente mediante tarjetas organizadas en columnas.

![Kanban](/docs_assets/images/ModulesConf/kanban.png "Imagen 17. Kanban")

<div class="flx-info-card" markdown="1">
Ayuda adicional:

[Manual Kanban](/Modules/Kanban)

[Vídeo Kanban](https://youtu.be/AidJrIHQHZc)
</div>

## Timeline

El módulo Timeline es una herramienta visual que representa una secuencia de eventos en un periodo determinado.

![Timeline](.\img\Help\Timeline\Timeline_AdvancedWithGroups_Result.png "Imagen 18. Timeline")

<div class="flx-info-card" markdown="1">
Ayuda adicional:

[Manual Timeline](/Modules/Timeline)

[Vídeo Timeline](https://youtu.be/_bVe_MLU5r0)
</div>

## List Filter

Permite añadir un control de búsqueda a tus formularios y vincularlo al contenido del módulo.

![List Filter](/docs_assets/images/ModulesConf/ListFilter.png "Imagen 19. List Filter")

![List Filter Configuration](/docs_assets/images/ModulesConf/ListFilterConf.png "Imagen 20. Configuración List Filter")

| Campo | Descripción |
| --- | --- |
| Id | Identifica el módulo |
| Type | List Filter |
| Description | Breve descripción |
| Title | Título |
| Classification | Project Module |
| Container | Tipo de contenedor |
| Object Name | Objeto vinculado |

## Map

Permite visualizar un mapa de Google con la dirección deseada.

![Map](/docs_assets/images/ModulesConf/map.png "Imagen 21. Map")

![Map Configuration](/docs_assets/images/ModulesConf/mapConf.png "Imagen 22. Configuración Map")

| Campo | Descripción |
| --- | --- |
| Id | Identifica el módulo |
| Type | List Map |
| Description | Breve descripción |
| Title | Título |
| Classification | Project Module |
| Container | Tipo de contenedor |
| Connection string | Modelo de datos |
| SQL Sentence | Consulta SQL mínima: Select '60' as lat, '20' as lng... {"Cluster":"true","Color":"retro","Width":"100%","Height":"400"} |

## Mail

Permite visualizar tus correos del servidor de correo y vincularlos a objetos.

![Mail](/docs_assets/images/ModulesConf/mail.png "Imagen 23. Mail")

<div class="flx-info-card" markdown="1">
Ayuda adicional:

[Manual Mail](/Modules/Mail)
</div>

## Nav Panel

Permite crear tarjetas con nodos como contenido.

![Navigation Panel](/docs_assets/images/ModulesConf/navPanel.png "Imagen 24. Navigation Panel")

![Navigation Panel Configuration](/docs_assets/images/ModulesConf/navPanelConf.png "Imagen 25. NavPanel Config")

| Campo | Descripción |
| --- | --- |
| Id | Identifica el módulo |
| Type | List Map |
| Description | Breve descripción |
| Title | Título |
| Classification | Project Module |
| Container | Tipo de contenedor |
| Params | Ej.: initNode="10123EDB..." mode="panel" |

## Network Graphic

Muestra un mapa de relaciones entre procesos, propiedades, plantillas, vistas y seguridad de un objeto.

![Network Graphic](/docs_assets/images/ModulesConf/networkGraphic.png "Imagen 26. Network Graphic")

![Network Graphic Configuration](/docs_assets/images/ModulesConf/networkGraphicConf.png "Imagen 27. Configuración Network Graphic")

| Campo | Descripción |
| --- | --- |
| Id | Identifica |
| Type | Network Graphic |
| Description | Breve descripción |
| Title | Título |
| Classification | Project Module |
| Container | Tipo |
| Object Name | Objeto relacionado |
| Object Where | Filtro del objeto |

## Object Edit

Permite editar cualquier objeto.

![Object Edit](/docs_assets/images/ModulesConf/ObjectEdit.png "Imagen 28. Object Edit")

![Object Edit Configuration](/docs_assets/images/ModulesConf/ObjectEditConf.png "Imagen 29. Configuración Object Edit")

| Campo | Descripción |
| --- | --- |
| Id | Identifica |
| Type | Object Edit |
| Description | Breve descripción |
| Title | Título |
| Classification | Project Module |
| Container | Tipo |
| Object Name | Objeto |
| Object Where | Filtro |
| Module Class | size-xs, size-s, size-m, size-l, no-label |

## Object List

Permite mostrar una lista de objetos.

![Object List](/docs_assets/images/ModulesConf/ObjectList.png "Imagen 30. Object List")

![Object List Configuration](/docs_assets/images/ModulesConf/ObjectListConf.png "Imagen 31. Configuración Object List")

| Campo | Descripción |
| --- | --- |
| Id | Identifica |
| Type | Object List |
| Description | Breve descripción |
| Title | Título |
| Classification | Project Module |
| Container | Tipo |
| Object Name | Objeto |
| Object Where | Filtro |

## Object Processes

Permite visualizar los procesos relacionados a un objeto.

![Object Processes](/docs_assets/images/ModulesConf/ObjectProcesses.png "Imagen 32. Object Processes")

![Object Processes Configuration](/docs_assets/images/ModulesConf/ObjectProcessesConf.png "Imagen 33. Configuración Object Processes")

| Campo | Descripción |
| --- | --- |
| Id | Identifica |
| Type | Object Process |
| Description | Breve descripción |
| Title | Título |
| Classification | Project Module |
| Container | Tipo |
| Object Name | Objeto |
| Object Where | Filtro |

<div class="flx-info-card" markdown="1">
Ayuda adicional:

[Update Types](/Programming/UpdateTypes)
</div>

## Object Reports

Permite visualizar los informes relacionados con un objeto.

![Object Reports](/docs_assets/images/ModulesConf/ObjectReports.png "Imagen 34. Object Reports")

![Object Reports Configuration](/docs_assets/images/ModulesConf/ObjectProcessesConf.png "Imagen 35. Configuración Object Reports")

| Campo | Descripción |
| --- | --- |
| Id | Identifica |
| Type | Object Reports |
| Description | Breve descripción |
| Title | Título |
| Classification | Project Module |
| Container | Tipo |
| Object Name | Objeto |
| Object Where | Filtro |

## Object Search

Permite realizar búsquedas de cualquier objeto.

![Object Search](/docs_assets/images/ModulesConf/ObjectSearch.png "Imagen 36. Object Search")

![Object Search Configuration](/docs_assets/images/ModulesConf/ObjectSearchConf.png "Imagen 37. Configuración Object Search")

| Campo | Descripción |
| --- | --- |
| Id | Identifica |
| Type | Object Search |
| Description | Breve descripción |
| Title | Título |
| Classification | Project Module |
| Container | Tipo |
| Object Name | Objeto |

## Object View

Permite visualizar cualquier objeto.

![Object View](/docs_assets/images/ModulesConf/ObjectView.png "Imagen 38. Object View")

![Object View Configuration](/docs_assets/images/ModulesConf/ObjectViewConf.png "Imagen 39. Configuración Object View")

| Campo | Descripción |
| --- | --- |
| Id | Identifica |
| Type | Object View |
| Description | Breve descripción |
| Title | Título |
| Classification | Project Module |
| Container | Tipo |
| Object Name | Objeto |
| Object Where | Filtro |

## Organization Chart

Muestra una estructura jerárquica organizativa.

![Organization Chart](/docs_assets/images/ModulesConf/OrgChart.png "Imagen 40. Organization Chart")

![Organization Chart Configuration](/docs_assets/images/ModulesConf/OrgChartConf.png "Imagen 41. Configuración OrgChart")

| Campo | Descripción |
| --- | --- |
| Id | Identifica |
| Type | Org. Chart |
| Description | Breve descripción |
| Title | Título |
| Classification | Project Module |
| Container | Tipo |
| Object Name | Objeto |
| Object Where | Filtro |
| Connection string | Modelo de datos |
| SQL Sentence | Consulta mínima con campos: Id, Parent, etc. Ejemplo: SELECT EmployeeId AS Id, Responsible AS Parent, Name, Area, Level, Img FROM Employees |
| Html | Template HTML por nodo |
| Header | HTML del encabezado |
| Footer | HTML del pie |
| Options | Cadena JSON con opciones de Treant. Opciones por defecto incluidas |

## Related Objects

Permite mostrar relaciones entre un objeto y sus hijos.

![Related Objects](/docs_assets/images/ModulesConf/RelatedObjectsHtml.png "Imagen 42. Related Objects")

![Related Objects Configuration](/docs_assets/images/ModulesConf/RelatedObjectsHtmlConf.png "Imagen 43. Configuración Related Objects")

| Campo | Descripción |
| --- | --- |
| Id | Identifica |
| Type | Object Html |
| Description | Breve descripción |
| Title | Título |
| Classification | Project Module |
| Container | Tipo |
| Object Name | Objeto |
| Object Where | Filtro |

## Object Related Processes

![Object Related Processes](/docs_assets/images/ModulesConf/RelatedProcessesHtml.png "Imagen 44. Object Related Processes")

Permite ver procesos relacionados con un objeto.

![Related Processes Configuration](/docs_assets/images/ModulesConf/RelatedProcessesHtmlConf.png "Imagen 45. Configuración Related Processes")

| Campo | Descripción |
| --- | --- |
| Id | Identifica |
| Type | Related Processes Html |
| Description | Breve descripción |
| Title | Título |
| Classification | Project Module |
| Container | Tipo |
| Object Name | Objeto |
| Object Where | Filtro |

## Object Related Reports

Permite ver los informes relacionados con un objeto.

![Object Related Reports](/docs_assets/images/ModulesConf/RelatedReportsHtml.png "Imagen 46. Object Related Reports")

![Related Reports Configuration](/docs_assets/images/ModulesConf/RelatedReportsHtmlConf.png "Imagen 47. Configuración Related Reports")

| Campo | Descripción |
| --- | --- |
| Id | Identifica |
| Type | Related Reports Html |
| Description | Breve descripción |
| Title | Título |
| Classification | Project Module |
| Container | Tipo |
| Object Name | Objeto |
| Object Where | Filtro |
