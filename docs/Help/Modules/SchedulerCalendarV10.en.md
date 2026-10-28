# Calendars with FullCalendar 6 <span class="fh-version-tag" title="Available since version 10">10.0+</span>

Starting with **version 10**, Flexygo's three calendar modules are rendered with **FullCalendar 6**:

| Module | Before | Now |
|---|---|---|
| `flx-scheduler` (month / week / day / list) | FullCalendar 3.4 | FullCalendar 6 |
| `flx-scheduleryear` (year) | `jqyc` plugin (jQuery Year Calendar) + Bootstrap popover | FullCalendar 6, `multiMonthYear` view |
| `flx-schedulerview` (month with day panel) | custom grid drawn by the component | FullCalendar 6, `dayGridMonth` view (the day panel is kept) |

FullCalendar 3, `jqyc` and their stylesheets **are removed** from disk and from the `Plugins` table. The new library is `index.global.min.js` (it includes interaction: `dateClick`, dragging and resizing) and is loaded through `Plugins` like any other.

This page is the complete reference for calendars in this version: **what arrives when you update and what you need to do**, **how they are configured** (existing and new options, in a single table), **which behaviors change**, **what can break** in a product that relied on the previous libraries, and how to check it.

---

## 0. When updating a product

### 0.1 What arrives with the packages alone

| Package | What it brings |
|---|---|
| `{Product}.Frontend` | The three components on FullCalendar 6, the skin stylesheet and the library in `js/plugins/fullcalendar/` (`index.global.min.js`, `locales-all.global.min.js`). The version 3 files (`fullcalendar.min.js`, `fullcalendar.min.css`, `locale-all.js`) and `js/plugins/jquery-year/` **no longer exist** |
| `{Product}.Backend` / `.Library` | The server side of the three calendars: the new `Scheduler` columns in the configuration the components receive, and the new rule for the end of a record (2.1) |
| `{Product}.Conf.Database` | When publishing the configuration database: the **six new columns** of `Scheduler` and the **two** of `Scheduler_Objects` (with their default values: nothing changes until they are enabled), the properties and dependencies of the scheduler record view (`sysScheduler`, `sysSchedulerObject`), their translations in the six cultures, and the `Plugins` rows (the two for version 6 come in, the three for version 3 and the two for `jquery-year` go out). All with origin 0, through the usual `MERGE` statements: **there is no manual script** |

### 0.2 What you need to do

1. Update the packages with the [Product Tools](../../2ProductDevelopment/3ProductManagement.md) and publish the configuration database, as with any version.
2. Review the **product's** `Plugins` table (rows with its origin): a custom row pointing to `~/js/plugins/fullcalendar/fullcalendar.min.js`, `locale-all.js`, `fullcalendar.min.css` or `jquery-year/` returns a 404, and a custom copy of FullCalendar would load the library twice. Remove it.
3. Run the `grep` searches from section 4 on the product repository and resolve each finding with the tables in section 3 (calls to `.fullCalendar(…)` still work with a warning, 3.6, but it is advisable to change them).
4. Test the product's calendars in both skins, and in skin2026 in light and dark mode: records are drawn, clicking and record creation work, `OnClickJS`/`OnClickDayJS` scripts and `selected` listeners still do their job.
5. Optional: enable the new options per calendar (1.1) and give text to the legend (1.2).

### 0.3 Browsers

FullCalendar 6 and the skin2026 skin use modern CSS: `:has()` (Chrome 105+, Safari 15.4+, Firefox 121+) and, for color normalization (2.4), the relative color syntax `oklch(from …)` (Chrome/Edge 119+, Safari 16.4+, Firefox 128+). In a browser without relative color support, normalization is not applied (`@supports`) and skin2026 marks are drawn with the color as is, as in flexy2022, which depends on neither.

---

## 1. Configuration reference

A calendar is configured at three levels: the **`Scheduler`** row (one per calendar), the **`Scheduler_Objects`** rows (one per object and view the calendar draws) and the **`Params`** of the module that hosts it. All three are edited from the scheduler record view, where each new option has its own control and **is only shown when it applies** (for example, the current time line does not appear if the calendar has neither a week nor a day view).

### 1.1 `Scheduler` — one row per calendar

| Column | What it does | Applies to | |
|---|---|---|---|
| `SchedulerName` | Calendar identifier; the module references it | all three | |
| `ActiveMode` | View the month calendar opens with: `month`, `agendaWeek`, `agendaDay`, `listWeek` | month | |
| `MonthView`, `AgendaWeekView`, `AgendaDayView`, `ListWeekView` | Which view buttons the toolbar offers | month | |
| `MinTime`, `MaxTime` | First and last hour of the week and day views (`HH:mm`) | month | |
| `SlotDuration` | Size of the time slot (`HH:mm`). **Since this version it is also the duration of a record created with a click** (previously, a fixed 15 minutes) | month | **changed** |
| `AllDaySlot` | "All day" row in week and day views | month | |
| `EventLimit` | Collapse records that do not fit in the month cell into "+N more" | month | |
| `DisableDrag`, `DisableResize` | Prevent moving or resizing records by dragging. `DisableDrag` also governs dragging from the day panel of the view | month, view | |
| `OnClickEvent` | Whether clicking a record does something | month | |
| `EventPageTypeId`, `EventTargetId` | What opens when a record is clicked (`edit`, `view` or `generic`) and where. With `generic`, `OnClickJS` runs instead of opening a page | all three | |
| `OnClickJS` | Script run when a record is clicked (`objectname, objectwhere, calEvent, jsEvent, view`); only with `EventPageTypeId = 'generic'` | all three | |
| `OnClickDayJS` | Script run when a day is clicked (`date, jsEvent, view`) instead of opening the new record form; in the view, when clicking the "+" of the day panel | month, view | |
| `TokenDefault` | Context variable (e.g. `currentUserId`) the calendar opens filtered by when the user has not chosen anyone. "Clear" in the funnel goes back to this person, not to "everyone" (1.5) | all three | |
| `ObjectName`, `ViewName`, `SQLValueField`, `SQLDisplayField`, `SQLFilterField`, `DirectTemplate` | The **people filter**: object and view the list comes from, value and text fields, SQL filter for searching (`@findstring`: only acts when searching) and template. It is no longer a combo in its own row above the calendar: it is a **funnel in the toolbar** with a badge showing how many people are selected, and a panel with search, the list, **"Select all"** (selects everyone the list shows; with a search, only those, added to what is already selected) and **"Clear"**. **The funnel is not shown** if the calendar has no filter configured or if its view returns only **one person** (the employee who only sees themselves: there is no one to choose) | all three (**new in the view** in this version) | **changed** |
| `HolidaysObjectName`, `HolidaysViewName`, `DateHolidayField` | Where holidays come from; they are drawn in the cell (`.flx-holiday`) | year, view | |
| `SelectRange` | **Range selection**: dragging over days or hours and releasing opens the new record form with start **and end** (month and view) or fires `selected` with both ends (year). A simple click is still the usual click. Off by default | all three | **new** |
| `AllowOverlap` | With **no**, when dragging, resizing or selecting in week and day views another record cannot be overlapped. In day grids selection is not blocked (there overlap is in hours, not days). It does not validate what comes in through a form or what is already overlapping in the database. **Yes** by default | month | **new** |
| `NowIndicator` | Current time line in week and day views. Off by default | month | **new** |
| `BusinessHoursStart`, `BusinessHoursEnd` | **Business hours** (`HH:mm`): everything outside is shaded in week and day views, and non-working days in all grids. Empty = no shading | all three | **new** |
| `BusinessDays` | Working days, `"1,2,3,4,5"` with `0` = Sunday … `6` = Saturday (a working Saturday is `"1,2,3,4,5,6"`). Empty = Monday to Friday | all three | **new** |

The colors the product writes in `ColorField` and in the `StyleField` classes are **normalized by the skin2026 skin** when drawn (2.4): same hue, lightness bounded per mode and capped saturation, so a color configured for light mode is also visible in dark mode, and a garish red or green fits in with the rest. Anything already within bounds is unchanged; flexy2022 draws the color as is.

### 1.2 `Scheduler_Objects` — one row per object and view

| Column | What it does | |
|---|---|---|
| `ObjectName`, `ViewName` | Object and view the records come from | |
| `StartDateField`, `EndDateField` | Start and end date fields of the record | |
| `StartTimeField`, `EndTimeField` | Time fields (`HH:mm`), if the object keeps them separate from the date | |
| `DurationField` | Field with the duration **in minutes**. When drawing, it fills in what the object does not declare (end date or time); when creating, the calendar fills it in. See 2.1 | **changed** |
| `AllDayField` | "All day" boolean field; record creation fills it depending on whether it is created in a day grid or an hour grid | |
| `DescripTemplate` | Template for the record title | |
| `ColorField`, `TextColorField` | Fields with the record color and its text color | |
| `StyleField` | Field with a **CSS class** per record. It reaches the event (month), the day mark (year) and the bar and panel (view), and is drawn as a ring: it is the record's **second state**, in addition to the color. Built-in classes: `flx-status-success`, `flx-status-warning`, `flx-status-danger`, `flx-status-muted`; a custom class only needs to declare `--flx-state: <color>` | **changed**: version 3 did not apply it as a class |
| `UserIdField` | Field the people funnel (and `TokenDefault`) filters by | |
| `ColorDescripField`, `StyleDescripField` | Fields with the **text** each color and each class means: with them the calendar builds the **legend** ("Legend" button in the toolbar). Without them there is no legend | **new** |

### 1.3 `Modules.Params` — module attributes

They are written as HTML attributes, which the module pastes as is into the component tag:

```
legend="inline" daymaxevents="5" liveinsert="false"
```

| Attribute | What it does | Applies to |
|---|---|---|
| `legend="inline"` | The legend as a row of chips above the calendar, instead of the "Legend" button in the toolbar | all three |
| `daymaxevents="N"` | How many records a cell shows before collapsing the rest into "+N more" (3 in the month, 6 in the view if not specified; the year puts everything in the day popup) | month, view |
| `liveinsert="true|false"` | Draw the just-saved record and changes by other users in place, instead of redrawing the whole calendar. If not specified: yes in skin2026, no in flexy2022. What arrives from other users is governed first by the object's `InsertTriggerEvent` / `UpdateTriggerEvent` / `DeleteTriggerEvent` | all three |

### 1.4 Events and hooks the product can use

| What | Where |
|---|---|
| `OnClickJS` and `OnClickDayJS` (1.1), with the same signature as in version 3. In `flx-scheduler`, `calEvent` and `view` arrive **in the version 3 shape** (`calEvent.title`, `calEvent.start`, `view.name`, `date` as `moment`); in year and view, `calEvent` is the **record row** (`calendar`, `eventName`, `Date`, `table`, `key`, `id`, `Row`…) and `jsEvent`/`view` are not filled in, as before | all three |
| Module event `selected` when clicking a day: `masterIdentity = 'YYYYMMDD'`, `sender` = the element. With `SelectRange`, a range dragged in the year arrives with the last day in `detailIdentity`; a click leaves it `null`, as always | year, view |
| `dialog closed` event: the calendar refreshes when the record view of one of its objects is closed | all three |
| Element properties: `additionalWhere`, `objectWhere`, `init()`, `refresh()`, `manualInit` attribute; `initialDate` (`YYYYMMDD`) in the view; in the year `events`, `holidays`, `filter`, `year`; in the month `calendar` (the FullCalendar 6 instance, see 3.6) | depending on module |
| **`additionalWhere` works with or without its leading `and`** in all three: `" and PersonId = '5'"` and `"PersonId = '5'"` give the same result. Until this version, the month and the view pasted it as is (it had to start with `" and "`) and the year added the `and` itself, so one written for one calendar broke the other; the server removes a leading `and` if present and joins with a single one. Then, `el.refresh()` | all three |
| Day panel of `flx-schedulerview`: `.details`, `.events`, `.event`, `.event-category`, `.event.empty`, `.addnew` | view |

!!! note "Filtering by the page record: the year and the view do, the month does not"
    On a page with an object and a record, a module with `ObjectName = {{objectname}}` and `ObjectFilter = {{objectwhere}}` filters the **year** and the **view** by that record with nothing else (measured: 246 → 50 and 38 → 14 records with a task on the page). The **month does not apply it, and did not apply it in version 3 either**: its component does not send the page filter to the server. Alternative for the month: provide the filter with `additionalWhere` from the module JS and refresh, for example `el.additionalWhere = " and Tareas.ProyectoId = '" + id + "'"; el.refresh();` (table and field of the calendar object), or put the condition in the object view with context variables.

!!! note "The year has never opened a new record form when clicking a day"
    `flx-scheduleryear` fires the `selected` event with the date and nothing more, as always. Anyone who needs to open something when clicking a day in the year does so by listening to that event.

### 1.5 Recipe: each user sees their own and the manager filters

You don't need two calendars. With one:

1. `UserIdField` in each object and `TokenDefault = currentUserId` in `Scheduler`: with nobody selected in the funnel, everyone sees their own.
2. The **funnel people view** (`Scheduler.ViewName`) returns rows depending on who is looking, for example `WHERE PersonId = '{{currentUserId}}' OR '{{currentRoleId}}' = 'managers'`. The employee receives a single person and **does not see the funnel**; the manager sees everyone and filters.
3. **Real security goes in the events view** of each object (or in the object filter), with the same condition: the filter is sent by the browser, and anyone who knows how to use the console can request someone else's events. What the server returns is what counts.

"Clear" and "Select all" are not the same with `TokenDefault`: "Clear" goes back to "mine" and "Select all" shows everyone on the list (on the test bench, 38 versus 87 records). Without `TokenDefault`, "Clear" stops filtering by person (it includes records with no person or with people the list does not offer) and "Select all" keeps only those on the list.

Two calendars on the same page with module security by role (one with a funnel and one without) also work, but they duplicate the configuration and, without point 3, protect nothing.

---

## 2. Behaviors that change

### 2.1 End of the record: what is declared rules, the duration fills in what is missing

When drawing a record, the end comes from the fields the object declares in `Scheduler_Objects`: `EndDateField` gives the date and `EndTimeField` the time. **`DurationField` only fills in what is not declared or is empty**: if there is no end time, the time is `start + duration`; if there is no end date, the date too.

Previously, with a declared duration and no end time, the calendar **ignored the end date** even if the object declared it and the form showed it. An object with `EndDate` (date), `StartTime` and `Duration` now draws the date it stores and the time derived from the duration.

If an object declares an end date **and** a duration, keeping them consistent is up to the object (a property dependency that recalculates one when the other changes); the calendar fills them in consistently on creation, but does not watch what the user edits afterwards.

### 2.2 What record creation fills in

| How it is created | `StartDateField` / `StartTimeField` | `EndDateField` / `EndTimeField` | `DurationField` | `AllDayField` |
|---|---|---|---|---|
| Click on a day (month, day grid) | the day, `00:00` | the same day | one `SlotDuration` (previously: fixed 15) | yes |
| Click on an hour (week, day) | the day and the hour | the same day, hour + one slot | one `SlotDuration` | no |
| Day range (`SelectRange`) | the first day, `00:00` | the **last** day, `00:00` | minutes from the start to the last day at 00:00 (21→24 = 4,320) | yes |
| Hour range (`SelectRange`) | the start | the exact end | the minutes between the two | no |
| "+" of the day panel (view) | the day | — (range: the last day) | — | — |

The end date of a day range is the **last day at 00:00** because that is how the calendar reads it: a record ending at 00:00 on a day counts that day as its own.

### 2.3 Other behavior changes

- **`StyleField` is applied** as a record class in all three calendars (version 3 read it and did not use it).
- **The record color is normalized in skin2026** (2.4).
- **The year** collapses all records of a day into its **native popup** (previously, a Bootstrap popover); each record in the popup opens its record view or runs `OnClickJS`. It opens with the `TokenDefault` person, like the month.
- **The view** gains the people filter, dragging from the day panel (respects `DisableDrag`) and the day panel to the right of the month.
- **The month** shows the "Objects" panel as a toolbar button, and with `liveinsert` applies changes by other users in place (remote new records appear as a module notice: "N new records · Show them").
- **The people filter** is a funnel in the toolbar of all three calendars, with its own panel (1.1); with no filter configured, or with a single person in its list, it is not shown.
- Three defects from the previous version are fixed: with several objects, record creation did not receive `AllDayField`; record creation did not respect `EventTargetId`; and the `TokenDefault` chip did not arrive with its text (`TokenDefaultValue`). And one more, from 2023: in the **year** and the **view**, with a record on the page and the module with an object but no filter of its own, the server built `… and  and UserId in (…)`, the SQL failed and the calendar came out empty.

### 2.4 The data color, normalized by the skin

`ColorField` accepts any CSS color (`#1d4ed8`, `rgb(…)`, `red`), written once for both modes. In skin2026 each mark —the month dot, the week and view bar, the year pill, the state ring, the legend and the day panel— draws that color with **the same hue**, lightness bounded to a band per mode and capped saturation: in light mode a fluorescent yellow or green goes down to a shade visible on white; in dark mode a navy blue or an intense red goes up to a shade visible on the card. A color already within the band is unchanged, and the hue never moves, so the legend still tells the truth. In flexy2022 the color is drawn as is.

Measured with `#ff0000`, `#00ff00`, `#ffff00`, `#000080`, `#000000`, `#ffffff`, `#ff00ff` and `#8b4513`: in light mode every mark is at 3.4:1 or more against the background; in dark mode, at 4.2 or more.

---

## 3. What can break the product

The configuration does not move and the contract in section 1 is preserved. **What breaks is product code that read the DOM or the classes of the previous libraries**, and it does so **without an error**: the code keeps running and finds nothing.

What the tool itself takes care of and what it doesn't:

| Customization | Does it keep working without changes? |
|---|---|
| `OnClickJS`, `OnClickDayJS`, the `selected` event | **Yes**: they receive the same as in version 3 (1.4) |
| Former public methods and state of the year and the view (`changeEvents`, `nextMonth`, `prevMonth`, `currentYear`, `currentMonth`, `repaintDay`, `el.me.current`, `el.me.events`…) | **Yes**, as aliases on top of the new machinery (3.4); obsolete |
| Methods that drew the old grid (`draw*`, `getWeek`, `backFill`…) and the rest of the view's `el.me` | **No**: there is no grid to draw by hand; alternative in 3.4 |
| Calling `$(…).fullCalendar('method', …)` on the month | **Yes**, with a compatibility layer that warns in the console (3.6); obsolete |
| `additionalWhere` with or without a leading `and` | **Yes**, in all three (1.4) |
| DOM selectors from `jqyc` (year) or from the view's custom grid | **No**: change them using tables 3.1 and 3.2 |
| Product CSS with FullCalendar 3 classes | **No**: rename them using table 3.3 |
| Scripts that paint cells by hand | **No**: replace them with the configuration in 3.5 |
| Creating a custom calendar with `$('#calendar').fullCalendar({...})` | **No**: it goes through `Scheduler` (1.1) and `Params` (1.3) |

Imitating the `jqyc` DOM, the old view grid or the version 3 classes **is deliberately not done**: it would mean drawing two structures for every cell at once, and a half copy would fail just as silently as their absence. What does need changing is cheap and can be located with the `grep` searches in section 4.

### 3.1 The year DOM is no longer `jqyc`

| Before (`jqyc`) | Now (FullCalendar 6) |
|---|---|
| `td.jqyc-td[data-month][data-day-of-month][data-year]` | `.fc-daygrid-day[data-date="YYYY-MM-DD"]` |
| `td[currentdate="YYYYMMDD"]` | `data-date="YYYY-MM-DD"` (with hyphens) |
| `td.jqyc-not-empty-td` (day with records) | `.fc-daygrid-day:has(.flx-yearmark)` — or, better, the data: `el.events` |
| `attr('data-original-title')` (left by the Bootstrap popover on days with records) | does not exist; the popover is FullCalendar's (`.fc-more-popover`) |
| `.jqyc-year-chooser[data-current-year]` | `el.year` (element property) |
| `.jqyc-month`, `.jqyc-months`, `.jqyc-prev-year`, `.jqyc-next-year` | `.fc-multimonth-month`, buttons `.fc-prev-button` / `.fc-next-button` |
| today: no class | `.fc-day-today` |
| weekend: no class (calculated in JS) | `.fc-day-sat`, `.fc-day-sun` |
| holiday | `.flx-holiday` on the cell |

### 3.2 The view grid DOM is no longer custom

`flx-schedulerview` drew its month with its own classes. The grid is now FullCalendar's; **the day panel is kept** with its classes.

| Before (custom grid) | Now |
|---|---|
| `.header`, `.h1-datepicker`, `.left`, `.right` | FullCalendar toolbar: `.fc-toolbar`, `.fc-toolbar-title`, `.fc-prev-button`, `.fc-next-button` |
| `.month`, `.week`, `.day`, `.day-name`, `.day-number`, `.day.today`, `.day.daySelected`, `.arrow` | `.fc-daygrid-body`, `.fc-daygrid-day`, `.fc-col-header-cell`, `.fc-daygrid-day-number`, `.fc-day-today`; the selected day carries a `.flx-selected` background event |
| `.legend`, `.colorLegend`, `.entry` | legend shared by the three calendars (`.flx-legend-host`) |
| `.details`, `.events`, `.event`, `.event-category`, `.addnew` | **unchanged** |

### 3.3 FullCalendar 3 classes in the product CSS

| FullCalendar 3 | FullCalendar 6 |
|---|---|
| `.fc-view-container` | `.fc-view-harness` |
| `.fc-basic-view`, `.fc-month-view` | `.fc-dayGridMonth-view` |
| `.fc-agenda-view`, `.fc-time-grid` | `.fc-timeGridWeek-view` / `.fc-timeGridDay-view`, `.fc-timegrid` |
| `.fc-list-view`, `tr.fc-list-item`, `.fc-list-heading`, `.fc-list-item-time` | `.fc-listWeek-view`, `.fc-list-event`, `.fc-list-day`, `.fc-list-event-time` |
| `.fc-content`, `.fc-title` | `.fc-event-main`, `.fc-event-title` |
| `.fc-bg`, `.fc-row` | `.fc-daygrid-day-bg`, `.fc-daygrid-body tr` |
| `.fc-day-grid-event` | `.fc-daygrid-event` |
| `.fc-scroller` | `.fc-scroller` (still exists, but hangs from `.fc-view-harness`) |
| `.fc-button` (Bootstrap) | `.fc-button`, with the colors in `--fc-button-*` variables |

The complete reference is in the FullCalendar documentation ("Upgrading to v5/v6").

### 3.4 The former public methods and state: back as aliases

**The month has lost nothing**: methods, properties, attributes and events are those of the previous version, plus the new ones. **The basics are unchanged in all three**: `refresh()`, `init()`, `additionalWhere`, `objectWhere`, the `manualInit` attribute, the module `Params` and the `selected` and `dialog closed` events.

The year (on `jqyc`) and the view (a grid of our own) also had methods and state in `el.me` (the jQuery wrapper of the element) that a product script could use. **They come back as aliases** that do the same thing with the new machinery; the contract is the right-hand column, and the aliases will be removed in a future version.

| Before (still works, obsolete) | What it does now | Contract |
|---|---|---|
| year: `el.changeEvents(additionalWhere, filter)` | sets the filter and requests the year again **without changing year** | `el.additionalWhere = …; el.filter = …; el.refresh()` (goes back to the current year) or `el.calendar.refetchEvents()` |
| year: `el.currentYear()` | requests the year again; the library draws | `el.calendar.refetchEvents()` |
| year: `el.me.events`, `el.me.filter`, `el.me.holidays` | mirror `el.events`, `el.filter`, `el.holidays` | the element properties |
| year: `el.me.current` | `moment` of January 1 of the year on screen | `el.year` |
| view: `el.changeEvents(additionalWhere)` | sets the filter and requests the month again **without changing month** | `el.additionalWhere = …; el.refresh()` |
| view: `el.nextMonth()`, `el.prevMonth()` | moves to another month | `el.calendar.next()`, `el.calendar.prev()` |
| view: `el.currentMonth()`, `el.repaintDay(day)` | requests the month again; the library draws | `el.calendar.refetchEvents()` |
| view: `el.me.current` | `moment` of day 1 of the month on screen | `el.calendar.view.currentStart` |
| view: `el.me.events`, `el.me.conf` | mirror `el.events` (the records in the range) and `el.conf` (the configuration of each object) | the element properties |
| view: `el.me.start`, `el.me.end` | the range requested from the server (`YYYYMMDD`) | `el.calendar.view.activeStart` / `activeEnd` |

**Each old method warns in the console** the first time it is used on the page (once per method), with the one to use now and this section, for example:

```
flx-scheduleryear.changeEvents() is obsolete (before FullCalendar 6): now set additionalWhere and filter, then call refresh(). See the calendar migration guide, 3.4.
```

That way, a product being updated can see in the browser console which of its scripts still use the old way. The `el.me` state does not warn (they are properties): find it with the `grep` in section 4.

**They do not come back**, because they drew by hand a grid that no longer exists:

| Before | Alternative |
|---|---|
| year: `drawEvents`, `markNewDay`, `resetDay` | the library draws the days; to redraw, `el.calendar.refetchEvents()`; to mark days, `ColorField`/`StyleField` or CSS on `.fc-daygrid-day[data-date]` (3.1, 3.5) |
| view: `draw`, `drawDay`, `drawMonth`, `drawHeader`, `drawLegend`, `drawEvents`, `getWeek`, `backFill`, `fowardFill`, `getDayClass` | likewise: the grid is FullCalendar's (3.2); the legend, the shared one (`Legend`, `ColorDescripField`/`StyleDescripField`) |
| view: `el.me.datepicker`, `el.me.header`, `el.me.month`, `el.me.week`, `el.me.el`, `el.me.title`, `el.me.next`, `el.me.oldMonth` | they were pieces of its DOM or its navigation: the title and the month picker are those of the toolbar (`.fc-toolbar-title`, which opens the picker when clicked); the month, `el.calendar.view` |

### 3.5 Painting days from JavaScript

Scripts that waited with `setTimeout` for the plugin to draw and then painted cells by hand (holidays, weekends, colors) stop doing anything. What they did now has its own place:

- **Holidays**: `HolidaysObjectName` in `Scheduler`; the calendar gives them `.flx-holiday` and the skin paints them.
- **Weekends and non-working days**: `BusinessDays` (shaded automatically) or CSS on `.fc-day-sat` / `.fc-day-sun`.
- **Colors and states per record**: `ColorField` and `StyleField` in `Scheduler_Objects`; the skin normalizes them (2.4), so there is no need to choose a color per mode.

### 3.6 The FullCalendar 3 jQuery API (`$('#calendar').fullCalendar(...)`)

In version 3 the month was a jQuery plugin and everything was done with `$(el).find('#calendar').fullCalendar('method', …)`. Version 6 is a class and the component stores its instance in **`el.calendar`** (`el` = the `flx-scheduler` element; the container is still `#calendar`).

**Those calls still work**: the month includes a compatibility layer that answers each method in the table with its equivalent, with `moment` where version 3 gave `moment` and with version 3 view and option names, and warns **once** in the console that the approach is obsolete (and about each method without an equivalent, which does nothing). It is there so nothing breaks when updating: new code, and any code you touch, should use the right-hand column, because the layer will be removed in a future version. Only the month: the year and the view were never FullCalendar 3.

| Version 3 | Version 6 |
|---|---|
| `fullCalendar('refetchEvents')`, `('rerenderEvents')` | `el.refresh()` — requests again from the server with the component's filter and `additionalWhere` |
| `fullCalendar('gotoDate', date)` | `el.calendar.gotoDate(date)` — `Date` or `'YYYY-MM-DD'`; a `moment`, with `.toDate()` |
| `fullCalendar('getDate')` | `el.calendar.getDate()` — returns `Date`; if the script expects `moment`: `moment(el.calendar.getDate())` |
| `fullCalendar('changeView', 'month' / 'agendaWeek' / 'agendaDay' / 'listWeek')` | `el.calendar.changeView('dayGridMonth' / 'timeGridWeek' / 'timeGridDay' / 'listWeek')` |
| `fullCalendar('getView')` | `el.calendar.view` (`view.type` with version 6 names, `activeStart`/`activeEnd` as `Date`), or in the version 3 shape: `el.scriptView(el.calendar.view)` (`name`, `start`, `end`, `intervalStart`, `intervalEnd` as `moment`) |
| `fullCalendar('prev')`, `('next')`, `('today')` | `el.calendar.prev()`, `.next()`, `.today()` |
| `fullCalendar('clientEvents'[, filter])` | `el.allEvents([filter])` or `el.calendar.getEvents()`; the record data is in `ev.extendedProps` (in the version 3 shape: `el.scriptEvent(ev)`) |
| `fullCalendar('removeEvents')` with no argument | `el.clearEvents()` |
| `fullCalendar('removeEvents', id)` | `el.calendar.getEventById(id).remove()` |
| `fullCalendar('renderEvent', ev)`, `('renderEvents', evs)` | `el.calendar.addEvent(ev)` (one at a time) |
| `fullCalendar('updateEvent', ev)` | the event's own methods: `ev.setProp('title', …)`, `ev.setStart(…)`, `ev.setEnd(…)`, `ev.setExtendedProp(…)` |
| `fullCalendar('addEventSource', source)` | `el.calendar.addEventSource(source)` |
| `fullCalendar('select', start, end)`, `('unselect')` | `el.calendar.select(start, end)`, `.unselect()` |
| `fullCalendar('option', name, value)` | `el.calendar.setOption(name, value)` — note that several options were renamed in version 6: `defaultView` → `initialView`, `header` → `headerToolbar`, `eventLimit` → `dayMaxEvents`, `minTime`/`maxTime` → `slotMinTime`/`slotMaxTime`, `defaultDate` → `initialDate` |
| `fullCalendar('destroy')` | `el.calendar.destroy()` |
| Options passed on creation (custom `$('#calendar').fullCalendar({...})`) | cannot be reused: configuration goes through `Scheduler` (1.1) and `Params` (1.3); anything not there, with `el.calendar.setOption` after loading |

`OnClickJS` and `OnClickDayJS` are **not** in this table because they don't need to be touched: they still receive `calEvent`, `view` and `date` in the version 3 shape (1.4).

---

## 4. How to locate what needs reviewing

In the product repository (JS, TS, LESS, CSS and `staticdata` scripts):

```
jqyc
currentdate
data-original-title
data-current-year
\.me\.(events|filter|holidays)
fullCalendar\(
fc-view-container|fc-list-item|fc-list-heading|fc-basic-view|fc-agenda|fc-time-grid|fc-content|fc-bg\b
flx-schedulerview \.(header|day|week|month|day-name|day-number|arrow|left|right)
```

And in the configuration database, the scripts stored in `Scheduler.OnClickJS` / `OnClickDayJS`, the module events listening to `"module", "selected"`, and the objects that declare `DurationField` together with `EndDateField` (2.1).

For each finding:

1. If it reads the `jqyc` DOM or the old grid: change to the selector in the section 3 tables or, better, to the element property (`el.events`, `el.year`).
2. If it is FullCalendar 3 CSS: rename using table 3.3.
3. If it paints cells via JS: replace with `HolidaysObjectName`, `BusinessDays`, `ColorField`/`StyleField` or CSS on the version 6 classes.
4. If it calls `.fullCalendar(…)`: it still works (it warns in the console), but change each call to its equivalent in table 3.6 before the layer is removed.
5. If it is `OnClickJS`/`OnClickDayJS` or `selected`: no change needed.

---

## 5. Checking in the browser

With the calendar page open, in the console:

```js
// the year: which year it shows and how many records it has loaded
const y = document.querySelector('flx-scheduleryear');
y.year, y.events.length

// the day selection event (year and view); with SelectRange, detailIdentity carries the last day of the range
flexygo.events.on(y, 'module', 'selected', e => console.log(e.masterIdentity, e.detailIdentity));

// days with records and holidays
document.querySelectorAll('flx-scheduleryear .fc-daygrid-day:has(.flx-yearmark)').length
document.querySelectorAll('flx-scheduleryear .fc-daygrid-day:has(.flx-holiday)').length

// the month: the configuration it has received
const m = document.querySelector('flx-scheduler');
m.selectRange, m.allowOverlap, m.nowIndicator, m.businessHours
```
