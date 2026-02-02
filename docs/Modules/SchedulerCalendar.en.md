# Scheduler and Calendar

See how to use the Scheduller and Calendar web component. With Scheduller and Calendar it's possible to use the same configuration and obtain different visualizations.

![](../docs_assets/images/Scheduller/Calendar_2.jpg "Image 1. Calendar")

## Scheduler and Calendar configuration

![](../docs_assets/images/Scheduller/Scheduller_conf.PNG "Image 2. Calendar Configuration")

| DESCRIPTION | WHAT DO THE PARAMETERS MEAN? |
| --- | --- |
| SCHEDULLER OPTIONS |     |
| --- | --- |
| Default mode | How to display the default calendar |
| Min / Max time | Start and end time of the calendar total time |
| Slot duration | Defines the time applied of cells division in the form of day or week display |
| Month / Week / List week / Day view | Allow the user to choose between different ways of viewing the calendar |
| All Day Slot | Enable events with full-day duration |
| Onclick Event | Allow event access to the records painted in the calendar |
| Event Page Type | Open the view or edit from object |
| Event target | Type of window where the view or edit of the object will open |
| USER FILTER |     |
| Object Name | Object that will work as a filter |
| View Name | The SQL query associated to the object that will bring us the data with which to work the searches |
| Value field | Property that brings value |
| Display Field | Property that brings what we seek to paint |
| Token Default | You must have the contextual variables configured. This field adds a filter to the search combo previously configured in the calendar |

## How to associate objects to already created calendar

![](../docs_assets/images/Scheduller/Scheduller_conf_objt.PNG "Image 2. Scheduller Configuration Object")

| DESCRIPTION | WHAT DO THE PARAMETERS MEAN? |
| --- | --- |
| SCHEDULLER OPTIONS |     |
| --- | --- |
| Scheduler name | The calendar name already created |
| Object name | The object that we're going to associate |
| View name Example | The SQL query that will bring us the data. Important that, the first two fields are the primary key of the object and the primary key of the object that we're using in the search |
| FIELDS |     |
| Start date field | Obligatory field that, must come from the query indicated above. **Indicate the start date** |
| End date field | Field come from the query indicated above. **Indicate the end date** |
| Start time field | Field come from the query indicated above. **Indicate the start hour** |
| End time field | Field come from the query indicated above. **Indicate the end hour** |
| Duration field | Avoid putting the field Start time and end time. With duration field, FlexyGo would calculate it automatically. If you fill in the fields start time, end time, duration field the first two have priority. |
| Color field | Color to paint the background of the record in the calendar. Provided through the SQL query |
| Text color field | Color to paint the text of the record in the calendar. Provided through the SQL query |
| User id field | It's the field by which you will filter the previously configured search |
| Appointment Template | Marked html in charge of painting the record in the calendar |

Watch the following video for additional information

<div class="video-wrapper">  
    <iframe src="https://www.youtube.com/embed/lKKMce5PsrA" title="Reproductor de video de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>

## Monthly calendar view

In the monthly calendar you can choose the month/day to display by using the parameters of the associated module.  
This parameter can use the page defaults.

Example : initialDate='20240110' The format of the indicated date must be **YYYYMMDD**
{: .flx-warning-card }

![](../docs_assets/images/Scheduller/Scheduller_ModParam.png "Image 3. Scheduller Configuration Object")

![](../docs_assets/images/Scheduller/ViewObjt_Action.PNG)