# Calendarios con FullCalendar 6 <span class="fh-version-tag" title="Disponible desde la versión 10">10.0+</span>

A partir de la **versión 10** los tres módulos de calendario de Flexygo se pintan con **FullCalendar 6**:

| Módulo | Antes | Ahora |
|---|---|---|
| `flx-scheduler` (mes / semana / día / lista) | FullCalendar 3.4 | FullCalendar 6 |
| `flx-scheduleryear` (año) | plugin `jqyc` (jQuery Year Calendar) + popover de Bootstrap | FullCalendar 6, vista `multiMonthYear` |
| `flx-schedulerview` (mes con panel de día) | rejilla propia dibujada por el componente | FullCalendar 6, vista `dayGridMonth` (el panel del día se conserva) |

FullCalendar 3, `jqyc` y sus hojas de estilo **se retiran** del disco y de la tabla `Plugins`. La librería nueva es `index.global.min.js` (incluye la interacción: `dateClick`, arrastre y redimensión) y se carga por `Plugins` como cualquier otra.

Esta página es la referencia completa de los calendarios en esta versión: **qué llega al actualizar y qué hay que hacer**, **cómo se configuran** (lo que ya existía y lo nuevo, en una sola tabla), **qué comportamientos cambian**, **qué puede romperse** en un producto que leía las librerías anteriores, y cómo comprobarlo.

---

## 0. Al actualizar un producto

### 0.1 Qué llega solo con los paquetes

| Paquete | Qué trae |
|---|---|
| `{Producto}.Frontend` | Los tres componentes sobre FullCalendar 6, la hoja de la piel y la librería en `js/plugins/fullcalendar/` (`index.global.min.js`, `locales-all.global.min.js`). Los ficheros de la 3 (`fullcalendar.min.js`, `fullcalendar.min.css`, `locale-all.js`) y `js/plugins/jquery-year/` **dejan de existir** |
| `{Producto}.Backend` / `.Library` | El servidor de los tres calendarios: las columnas nuevas de `Scheduler` en la configuración que reciben los componentes, y la regla nueva del fin del registro (2.1) |
| `{Producto}.Conf.Database` | Al publicar la base de configuración: las **seis columnas nuevas** de `Scheduler` y las **dos** de `Scheduler_Objects` (con sus valores por defecto: nada cambia hasta que se activa), las propiedades y dependencias de la ficha del scheduler (`sysScheduler`, `sysSchedulerObject`), sus traducciones en las seis culturas, y las filas de `Plugins` (entran las dos de la 6, salen las tres de la 3 y las dos de `jquery-year`). Todo con origen 0, por los `MERGE` de siempre: **no hay guion manual** |

### 0.2 Qué hay que hacer

1. Actualizar los paquetes con las [Product Tools](../../2ProductDevelopment/3ProductManagement.md) y publicar la base de configuración, como en cualquier versión.
2. Revisar la tabla `Plugins` **del producto** (filas con su origen): una fila propia que apunte a `~/js/plugins/fullcalendar/fullcalendar.min.js`, `locale-all.js`, `fullcalendar.min.css` o a `jquery-year/` da 404, y una copia propia de FullCalendar cargaría la librería dos veces. Se quita.
3. Pasar los `grep` del apartado 4 sobre el repositorio del producto y resolver cada hallazgo con las tablas del apartado 3 (las llamadas a `.fullCalendar(…)` siguen funcionando con aviso, 3.6, pero conviene cambiarlas).
4. Probar los calendarios del producto en las dos pieles, y en skin2026 en claro y en oscuro: los registros se pintan, el clic y el alta funcionan, los scripts `OnClickJS`/`OnClickDayJS` y los oyentes de `selected` siguen haciendo lo suyo.
5. Opcional: activar por calendario lo nuevo (1.1) y dar texto a la leyenda (1.2).

### 0.3 Navegadores

FullCalendar 6 y la piel skin2026 usan CSS moderno: `:has()` (Chrome 105+, Safari 15.4+, Firefox 121+) y, para la normalización del color (2.4), la sintaxis de color relativo `oklch(from …)` (Chrome/Edge 119+, Safari 16.4+, Firefox 128+). En un navegador sin color relativo la normalización no se aplica (`@supports`) y las marcas de skin2026 se pintan con el color tal cual, como en flexy2022, que no depende de ninguna de las dos.

---

## 1. Referencia de configuración

Un calendario se configura en tres niveles: la fila de **`Scheduler`** (una por calendario), las filas de **`Scheduler_Objects`** (una por objeto y vista que el calendario pinta) y los **`Params`** del módulo que lo aloja. Las tres se editan desde la ficha del scheduler, donde cada opción nueva tiene su control y **solo se muestra cuando aplica** (por ejemplo, la línea de la hora actual no aparece si el calendario no tiene vista de semana ni de día).

### 1.1 `Scheduler` — una fila por calendario

| Columna | Qué hace | Aplica a | |
|---|---|---|---|
| `SchedulerName` | Identificador del calendario; el módulo lo referencia | los tres | |
| `ActiveMode` | Vista con la que abre el mes: `month`, `agendaWeek`, `agendaDay`, `listWeek` | mes | |
| `MonthView`, `AgendaWeekView`, `AgendaDayView`, `ListWeekView` | Qué botones de vista ofrece la barra | mes | |
| `MinTime`, `MaxTime` | Primera y última hora de las vistas de semana y día (`HH:mm`) | mes | |
| `SlotDuration` | Tamaño del tramo horario (`HH:mm`). **Desde esta versión es también lo que dura un registro creado con un clic** (antes, 15 minutos fijos) | mes | **cambiado** |
| `AllDaySlot` | Fila «todo el día» en semana y día | mes | |
| `EventLimit` | Plegar los registros que no caben en la celda del mes en «+N more» | mes | |
| `DisableDrag`, `DisableResize` | Prohibir mover o redimensionar registros arrastrando. `DisableDrag` gobierna también el arrastre desde el panel del día de la vista | mes, vista | |
| `OnClickEvent` | Si pulsar un registro hace algo | mes | |
| `EventPageTypeId`, `EventTargetId` | Qué se abre al pulsar un registro (`edit`, `view` o `generic`) y dónde. Con `generic` se ejecuta `OnClickJS` en vez de abrir una página | los tres | |
| `OnClickJS` | Script al pulsar un registro (`objectname, objectwhere, calEvent, jsEvent, view`); solo con `EventPageTypeId = 'generic'` | los tres | |
| `OnClickDayJS` | Script al pulsar un día (`date, jsEvent, view`) en vez de abrir el alta; en la vista, al pulsar el «+» del panel del día | mes, vista | |
| `TokenDefault` | Variable de contexto (p. ej. `currentUserId`) con la que el calendario abre filtrado cuando el usuario no ha elegido a nadie. «Clear» en el embudo vuelve a esta persona, no a «todos» (1.5) | los tres | |
| `ObjectName`, `ViewName`, `SQLValueField`, `SQLDisplayField`, `SQLFilterField`, `DirectTemplate` | El **filtro de personas**: objeto y vista de la que sale la lista, campos de valor y texto, filtro SQL de la búsqueda (`@findstring`: solo actúa al buscar) y plantilla. Ya no es un combo en una fila propia sobre el calendario: es un **embudo en la barra** con una insignia de cuántas personas hay marcadas, y un panel con búsqueda, la lista, **«Select all»** (marca a todos los que la lista enseña; con una búsqueda, solo a esos, sumados a lo marcado) y **«Clear»**. **El embudo no sale** si el calendario no tiene filtro configurado ni si su vista solo devuelve **una persona** (el empleado que solo se ve a sí mismo: no hay a quién elegir) | los tres (**la vista lo estrena** en esta versión) | **cambiado** |
| `HolidaysObjectName`, `HolidaysViewName`, `DateHolidayField` | De dónde salen los festivos, que se pintan en la celda (`.flx-holiday`) | año, vista | |
| `SelectRange` | **Selección de rango**: arrastrar sobre días u horas y soltar abre el alta con inicio **y fin** (mes y vista) o lanza `selected` con los dos extremos (año). Un clic simple sigue siendo el clic de siempre. Por defecto no | los tres | **nuevo** |
| `AllowOverlap` | Con **no**, al arrastrar, redimensionar o seleccionar en semana y día no se puede pisar otro registro. En las rejillas de días la selección no se bloquea (ahí el solape es de horas, no de días). No valida lo que entra por formulario ni lo ya solapado en la base. Por defecto **sí** | mes | **nuevo** |
| `NowIndicator` | Línea de la hora actual en semana y día. Por defecto no | mes | **nuevo** |
| `BusinessHoursStart`, `BusinessHoursEnd` | **Horario laboral** (`HH:mm`): lo de fuera se sombrea en semana y día, y los días no laborables en todas las rejillas. Vacíos = sin sombreado | los tres | **nuevo** |
| `BusinessDays` | Días laborables, `"1,2,3,4,5"` con `0` = domingo … `6` = sábado (un sábado laborable es `"1,2,3,4,5,6"`). Vacío = lunes a viernes | los tres | **nuevo** |

Los colores que el producto escribe en `ColorField` y en las clases de `StyleField` los **normaliza la piel skin2026** al pintarlos (2.4): mismo tono, luminosidad acotada por modo y saturación con tope, así un color configurado para claro se ve también en oscuro y un rojo o un verde chillón entran en familia. Lo que ya está dentro de las cotas no cambia; flexy2022 pinta el color tal cual.

### 1.2 `Scheduler_Objects` — una fila por objeto y vista

| Columna | Qué hace | |
|---|---|---|
| `ObjectName`, `ViewName` | Objeto y vista de la que salen los registros | |
| `StartDateField`, `EndDateField` | Campos de fecha de inicio y fin del registro | |
| `StartTimeField`, `EndTimeField` | Campos de hora (`HH:mm`), si el objeto los separa de la fecha | |
| `DurationField` | Campo con la duración **en minutos**. Al pintar, rellena lo que el objeto no declare (fecha o hora de fin); al crear, el calendario lo deja relleno. Ver 2.1 | **cambiado** |
| `AllDayField` | Campo booleano «todo el día»; el alta lo rellena según se cree en una rejilla de días o de horas | |
| `DescripTemplate` | Plantilla del título del registro | |
| `ColorField`, `TextColorField` | Campos con el color del registro y el de su texto | |
| `StyleField` | Campo con una **clase CSS** por registro. Llega al evento (mes), a la marca del día (año) y a la barra y el panel (vista), y se pinta como anillo: es el **segundo estado** del registro, además del color. Clases de serie: `flx-status-success`, `flx-status-warning`, `flx-status-danger`, `flx-status-muted`; una clase propia solo tiene que declarar `--flx-state: <color>` | **cambiado**: la 3 no la aplicaba como clase |
| `UserIdField` | Campo por el que filtra el embudo de personas (y el `TokenDefault`) | |
| `ColorDescripField`, `StyleDescripField` | Campos con el **texto** que significa cada color y cada clase: con ellos el calendario construye la **leyenda** (botón «Legend» en la barra). Sin ellos no hay leyenda | **nuevo** |

### 1.3 `Modules.Params` — atributos del módulo

Se escriben como atributos HTML, que el módulo pega tal cual en la etiqueta del componente:

```
legend="inline" daymaxevents="5" liveinsert="false"
```

| Atributo | Qué hace | Aplica a |
|---|---|---|
| `legend="inline"` | La leyenda como fila de chips sobre el calendario, en vez del botón «Legend» de la barra | los tres |
| `daymaxevents="N"` | Cuántos registros muestra una celda antes de plegar el resto en «+N more» (3 en el mes, 6 en la vista si no se indica; el año lo lleva todo al popup del día) | mes, vista |
| `liveinsert="true|false"` | Pintar en su sitio el registro recién guardado y los cambios de otros usuarios, en vez de repintar el calendario entero. Sin indicarlo: sí en skin2026, no en flexy2022. Lo que llega de otros usuarios lo gobiernan antes los `InsertTriggerEvent` / `UpdateTriggerEvent` / `DeleteTriggerEvent` del objeto | los tres |

### 1.4 Eventos y ganchos que el producto puede usar

| Qué | Dónde |
|---|---|
| `OnClickJS` y `OnClickDayJS` (1.1), con la misma firma que en la versión 3. En `flx-scheduler`, `calEvent` y `view` llegan **con la forma de la 3** (`calEvent.title`, `calEvent.start`, `view.name`, `date` como `moment`); en año y vista `calEvent` es la **fila del registro** (`calendar`, `eventName`, `Date`, `table`, `key`, `id`, `Row`…) y `jsEvent`/`view` no se rellenan, como antes | los tres |
| Evento de módulo `selected` al pulsar un día: `masterIdentity = 'YYYYMMDD'`, `sender` = el elemento. Con `SelectRange`, un rango arrastrado en el año llega con el último día en `detailIdentity`; un clic lo deja `null`, como siempre | año, vista |
| Evento `dialog closed`: el calendario se actualiza al cerrar la ficha de uno de sus objetos | los tres |
| Propiedades del elemento: `additionalWhere`, `objectWhere`, `init()`, `refresh()`, atributo `manualInit`; `initialDate` (`YYYYMMDD`) en la vista; en el año `events`, `holidays`, `filter`, `year`; en el mes `calendar` (la instancia de FullCalendar 6, ver 3.6) | según módulo |
| **`additionalWhere` vale con o sin su `and` inicial** en los tres: `" and PersonId = '5'"` y `"PersonId = '5'"` dan lo mismo. Hasta esta versión el mes y la vista lo pegaban tal cual (tenía que empezar por `" and "`) y el año ponía el `and` él, así que uno escrito para un calendario rompía el otro; el servidor quita un `and` inicial si viene y une con uno solo. Después, `el.refresh()` | los tres |
| Panel del día de `flx-schedulerview`: `.details`, `.events`, `.event`, `.event-category`, `.event.empty`, `.addnew` | vista |

!!! note "Filtrar por el registro de la página: el año y la vista sí, el mes no"
    En una página con objeto y registro, un módulo con `ObjectName = {{objectname}}` y `ObjectFilter = {{objectwhere}}` filtra el **año** y la **vista** por ese registro sin nada más (medido: 246 → 50 y 38 → 14 registros con una tarea en la página). El **mes no lo aplica, y no lo aplicaba en la versión 3**: su componente no manda el filtro de la página al servidor. Alternativa para el mes: dar el filtro con `additionalWhere` desde el JS del módulo y refrescar, por ejemplo `el.additionalWhere = " and Tareas.ProyectoId = '" + id + "'"; el.refresh();` (tabla y campo del objeto del calendario), o poner la condición en la vista del objeto con variables de contexto.

!!! note "El año nunca ha abierto un alta al pulsar un día"
    `flx-scheduleryear` lanza el evento `selected` con la fecha y nada más, como siempre. Quien necesite abrir algo al pulsar un día del año lo hace escuchando ese evento.

### 1.5 Receta: cada usuario ve lo suyo y el responsable filtra

No hacen falta dos calendarios. Con uno:

1. `UserIdField` en cada objeto y `TokenDefault = currentUserId` en `Scheduler`: sin nadie marcado en el embudo, cada uno ve lo suyo.
2. La **vista de personas del embudo** (`Scheduler.ViewName`) devuelve según quién mira, por ejemplo `WHERE PersonId = '{{currentUserId}}' OR '{{currentRoleId}}' = 'managers'`. El empleado recibe una sola persona y **no ve el embudo**; el responsable ve a todos y filtra.
3. **La seguridad de verdad va en la vista de eventos** de cada objeto (o en el filtro del objeto), con la misma condición: el filtro lo manda el navegador, y quien sepa usar la consola puede pedir los eventos de otro. Lo que el servidor devuelve es lo que manda.

«Clear» y «Select all» no son lo mismo con `TokenDefault`: «Clear» vuelve a «lo mío» y «Select all» enseña a todos los de la lista (en el banco de pruebas, 38 frente a 87 registros). Sin `TokenDefault`, «Clear» deja de filtrar por persona (incluye registros sin persona o de personas que la lista no ofrece) y «Select all» se queda solo con las de la lista.

Dos calendarios en la misma página con seguridad de módulo por rol (uno con embudo y otro sin él) también funcionan, pero duplican la configuración y, sin el punto 3, no protegen nada.

---

## 2. Comportamientos que cambian

### 2.1 Fin del registro: lo declarado manda, la duración rellena lo que falta

Al pintar un registro, el fin sale de los campos que el objeto declara en `Scheduler_Objects`: `EndDateField` da la fecha y `EndTimeField` la hora. **`DurationField` solo rellena lo que no esté declarado o venga vacío**: si no hay hora de fin, la hora es `inicio + duración`; si no hay fecha de fin, también la fecha.

Antes, con duración declarada y sin hora de fin, el calendario **ignoraba la fecha de fin** aunque el objeto la declarase y el formulario la mostrase. Un objeto con `EndDate` (fecha), `StartTime` y `Duration` pinta ahora la fecha que guarda y la hora que sale de la duración.

Si un objeto declara fecha de fin **y** duración, mantenerlas coherentes es cosa del objeto (una dependencia de propiedades que recalcule una al cambiar la otra); el calendario las rellena coherentes al crear, pero no vigila lo que el usuario edite después.

### 2.2 Lo que rellena el alta

| Cómo se crea | `StartDateField` / `StartTimeField` | `EndDateField` / `EndTimeField` | `DurationField` | `AllDayField` |
|---|---|---|---|---|
| Clic en un día (mes, rejilla de días) | el día, `00:00` | el mismo día | un `SlotDuration` (antes: 15 fijo) | sí |
| Clic en una hora (semana, día) | el día y la hora | el mismo día, hora + un tramo | un `SlotDuration` | no |
| Rango de días (`SelectRange`) | el primer día, `00:00` | el **último** día, `00:00` | minutos desde el inicio hasta el último día a las 00:00 (21→24 = 4 320) | sí |
| Rango de horas (`SelectRange`) | el inicio | el fin exacto | los minutos entre los dos | no |
| «+» del panel del día (vista) | el día | — (rango: el último día) | — | — |

La fecha de fin de un rango de días es el **último día a las 00:00** porque así la lee el calendario: un registro que acaba a las 00:00 de un día cuenta ese día como suyo.

### 2.3 Otros cambios de comportamiento

- **`StyleField` se aplica** como clase del registro en los tres calendarios (la 3 la leía y no la usaba).
- **El color del registro se normaliza en skin2026** (2.4).
- **El año** pliega todos los registros de un día en su **popup nativo** (antes, popover de Bootstrap); cada registro del popup abre su ficha o ejecuta `OnClickJS`. Abre con la persona del `TokenDefault`, como el mes.
- **La vista** gana el filtro de personas, el arrastre desde el panel del día (respeta `DisableDrag`) y el panel del día a la derecha del mes.
- **El mes** enseña el panel «Objects» como botón de la barra, y con `liveinsert` aplica en su sitio los cambios de otros usuarios (las altas remotas salen como aviso del módulo: «N new records · Show them»).
- **El filtro de personas** es un embudo en la barra de los tres calendarios, con panel propio (1.1); sin filtro configurado, o con una sola persona en su lista, no sale.
- Tres defectos de la versión anterior quedan arreglados: con varios objetos el alta no recibía `AllDayField`; el alta no respetaba `EventTargetId`; y el chip de `TokenDefault` no llegaba con su texto (`TokenDefaultValue`). Y uno más, de 2023: en el **año** y la **vista**, con un registro en la página y el módulo con objeto pero sin filtro propio, el servidor montaba `… and  and UserId in (…)`, fallaba el SQL y el calendario salía vacío.

### 2.4 El color del dato, normalizado por la piel

`ColorField` admite cualquier color CSS (`#1d4ed8`, `rgb(…)`, `red`), escrito una vez para los dos modos. En skin2026 cada marca —el punto del mes, la barra de semana y de la vista, la píldora del año, el anillo de estado, la leyenda y el panel del día— pinta ese color con **su mismo tono**, la luminosidad acotada a una banda por modo y la saturación con tope: en claro un amarillo o un verde fluorescente bajan a un tono que se ve sobre blanco; en oscuro un azul marino o un rojo intenso suben a un tono que se ve sobre la tarjeta. Un color que ya está dentro de la banda no cambia, y el tono nunca se mueve, así que la leyenda sigue diciendo la verdad. En flexy2022 el color se pinta tal cual.

Medido con `#ff0000`, `#00ff00`, `#ffff00`, `#000080`, `#000000`, `#ffffff`, `#ff00ff` y `#8b4513`: en claro toda marca queda a 3,4:1 o más sobre el fondo; en oscuro, a 4,2 o más.

---

## 3. Lo que puede romper el producto

La configuración no cambia de sitio y el contrato del apartado 1 se conserva. **Lo que se rompe es el código de producto que leía el DOM o las clases de las librerías anteriores**, y lo hace **sin error**: el código sigue ejecutándose y no encuentra nada.

Qué deja resuelto la propia herramienta y qué no:

| Personalización | ¿Sigue funcionando sin tocarla? |
|---|---|
| `OnClickJS`, `OnClickDayJS`, el evento `selected` | **Sí**: reciben lo mismo que en la versión 3 (1.4) |
| Métodos y estado públicos del año y de la vista de antes (`changeEvents`, `nextMonth`, `prevMonth`, `currentYear`, `currentMonth`, `repaintDay`, `el.me.current`, `el.me.events`…) | **Sí**, como alias sobre la maquinaria nueva (3.4); obsoletos |
| Métodos que pintaban la rejilla vieja (`draw*`, `getWeek`, `backFill`…) y el resto de `el.me` de la vista | **No**: no hay rejilla que pintar a mano; alternativa en 3.4 |
| Llamar a `$(…).fullCalendar('método', …)` sobre el mes | **Sí**, con una capa de compatibilidad que avisa en la consola (3.6); obsoleto |
| `additionalWhere` con o sin `and` inicial | **Sí**, en los tres (1.4) |
| Selectores del DOM de `jqyc` (año) o de la rejilla propia de la vista | **No**: se cambian con las tablas 3.1 y 3.2 |
| CSS del producto con clases de FullCalendar 3 | **No**: se renombran con la tabla 3.3 |
| Scripts que pintan celdas a mano | **No**: se sustituyen por la configuración de 3.5 |
| Crear un calendario propio con `$('#calendar').fullCalendar({...})` | **No**: va por `Scheduler` (1.1) y `Params` (1.3) |

Imitar el DOM de `jqyc`, la rejilla antigua de la vista o las clases de la versión 3 **no se hace a propósito**: habría que dibujar a la vez dos estructuras de cada celda, y una copia a medias fallaría igual de callada que la ausencia. Lo que sí se cambia es barato y se localiza con los `grep` del apartado 4.

### 3.1 El DOM del año ya no es `jqyc`

| Antes (`jqyc`) | Ahora (FullCalendar 6) |
|---|---|
| `td.jqyc-td[data-month][data-day-of-month][data-year]` | `.fc-daygrid-day[data-date="YYYY-MM-DD"]` |
| `td[currentdate="YYYYMMDD"]` | `data-date="YYYY-MM-DD"` (con guiones) |
| `td.jqyc-not-empty-td` (día con registros) | `.fc-daygrid-day:has(.flx-yearmark)` — o, mejor, los datos: `el.events` |
| `attr('data-original-title')` (lo dejaba el popover de Bootstrap en los días con registros) | no existe; el popover es el de FullCalendar (`.fc-more-popover`) |
| `.jqyc-year-chooser[data-current-year]` | `el.year` (propiedad del elemento) |
| `.jqyc-month`, `.jqyc-months`, `.jqyc-prev-year`, `.jqyc-next-year` | `.fc-multimonth-month`, botones `.fc-prev-button` / `.fc-next-button` |
| día de hoy: sin clase | `.fc-day-today` |
| fin de semana: sin clase (se calculaba en JS) | `.fc-day-sat`, `.fc-day-sun` |
| festivo | `.flx-holiday` en la celda |

### 3.2 El DOM de la rejilla de la vista ya no es propio

`flx-schedulerview` pintaba su mes con clases propias. La rejilla es ahora la de FullCalendar; **el panel del día se conserva** con sus clases.

| Antes (rejilla propia) | Ahora |
|---|---|
| `.header`, `.h1-datepicker`, `.left`, `.right` | barra de FullCalendar: `.fc-toolbar`, `.fc-toolbar-title`, `.fc-prev-button`, `.fc-next-button` |
| `.month`, `.week`, `.day`, `.day-name`, `.day-number`, `.day.today`, `.day.daySelected`, `.arrow` | `.fc-daygrid-body`, `.fc-daygrid-day`, `.fc-col-header-cell`, `.fc-daygrid-day-number`, `.fc-day-today`; el día elegido lleva un evento de fondo `.flx-selected` |
| `.legend`, `.colorLegend`, `.entry` | leyenda común de los tres calendarios (`.flx-legend-host`) |
| `.details`, `.events`, `.event`, `.event-category`, `.addnew` | **sin cambio** |

### 3.3 Las clases de FullCalendar 3 en el CSS del producto

| FullCalendar 3 | FullCalendar 6 |
|---|---|
| `.fc-view-container` | `.fc-view-harness` |
| `.fc-basic-view`, `.fc-month-view` | `.fc-dayGridMonth-view` |
| `.fc-agenda-view`, `.fc-time-grid` | `.fc-timeGridWeek-view` / `.fc-timeGridDay-view`, `.fc-timegrid` |
| `.fc-list-view`, `tr.fc-list-item`, `.fc-list-heading`, `.fc-list-item-time` | `.fc-listWeek-view`, `.fc-list-event`, `.fc-list-day`, `.fc-list-event-time` |
| `.fc-content`, `.fc-title` | `.fc-event-main`, `.fc-event-title` |
| `.fc-bg`, `.fc-row` | `.fc-daygrid-day-bg`, `.fc-daygrid-body tr` |
| `.fc-day-grid-event` | `.fc-daygrid-event` |
| `.fc-scroller` | `.fc-scroller` (sigue existiendo, pero cuelga de `.fc-view-harness`) |
| `.fc-button` (Bootstrap) | `.fc-button`, con los colores en variables `--fc-button-*` |

La referencia completa está en la documentación de FullCalendar («Upgrading to v5/v6»).

### 3.4 Los métodos y el estado públicos de antes: vuelven como alias

**El mes no ha perdido nada**: métodos, propiedades, atributos y eventos son los de la versión anterior, más los nuevos. **Lo básico sigue igual en los tres**: `refresh()`, `init()`, `additionalWhere`, `objectWhere`, el atributo `manualInit`, los `Params` del módulo y los eventos `selected` y `dialog closed`.

El año (sobre `jqyc`) y la vista (una rejilla nuestra) tenían además métodos y un estado en `el.me` (el envoltorio jQuery del elemento) que un script de producto podía usar. **Vuelven como alias** que hacen lo mismo con la maquinaria nueva; el contrato es la columna de la derecha, y los alias se retirarán en una versión futura.

| Antes (sigue funcionando, obsoleto) | Qué hace ahora | Contrato |
|---|---|---|
| año: `el.changeEvents(additionalWhere, filter)` | pone el filtro y vuelve a pedir el año **sin cambiar de año** | `el.additionalWhere = …; el.filter = …; el.refresh()` (vuelve al año actual) o `el.calendar.refetchEvents()` |
| año: `el.currentYear()` | vuelve a pedir el año; la librería pinta | `el.calendar.refetchEvents()` |
| año: `el.me.events`, `el.me.filter`, `el.me.holidays` | reflejan `el.events`, `el.filter`, `el.holidays` | las propiedades del elemento |
| año: `el.me.current` | `moment` del 1 de enero del año en pantalla | `el.year` |
| vista: `el.changeEvents(additionalWhere)` | pone el filtro y vuelve a pedir el mes **sin cambiar de mes** | `el.additionalWhere = …; el.refresh()` |
| vista: `el.nextMonth()`, `el.prevMonth()` | pasa de mes | `el.calendar.next()`, `el.calendar.prev()` |
| vista: `el.currentMonth()`, `el.repaintDay(día)` | vuelve a pedir el mes; la librería pinta | `el.calendar.refetchEvents()` |
| vista: `el.me.current` | `moment` del día 1 del mes en pantalla | `el.calendar.view.currentStart` |
| vista: `el.me.events`, `el.me.conf` | reflejan `el.events` (los registros del rango) y `el.conf` (la configuración de cada objeto) | las propiedades del elemento |
| vista: `el.me.start`, `el.me.end` | el rango pedido al servidor (`YYYYMMDD`) | `el.calendar.view.activeStart` / `activeEnd` |

**Cada método antiguo avisa en la consola** la primera vez que se usa en la página (una vez por método), con el que hay que usar ahora y esta sección, por ejemplo:

```
flx-scheduleryear.changeEvents() is obsolete (before FullCalendar 6): now set additionalWhere and filter, then call refresh(). See the calendar migration guide, 3.4.
```

Así un producto que actualiza ve en la consola del navegador qué scripts suyos siguen usando la forma antigua. El estado de `el.me` no avisa (son propiedades): se encuentra con el `grep` de la sección 4.

**No vuelven**, porque pintaban a mano una rejilla que ya no existe:

| Antes | Alternativa |
|---|---|
| año: `drawEvents`, `markNewDay`, `resetDay` | la librería pinta los días; para volver a pintar, `el.calendar.refetchEvents()`; para marcar días, `ColorField`/`StyleField` o CSS sobre `.fc-daygrid-day[data-date]` (3.1, 3.5) |
| vista: `draw`, `drawDay`, `drawMonth`, `drawHeader`, `drawLegend`, `drawEvents`, `getWeek`, `backFill`, `fowardFill`, `getDayClass` | igual: la rejilla es la de FullCalendar (3.2); la leyenda, la común (`Legend`, `ColorDescripField`/`StyleDescripField`) |
| vista: `el.me.datepicker`, `el.me.header`, `el.me.month`, `el.me.week`, `el.me.el`, `el.me.title`, `el.me.next`, `el.me.oldMonth` | eran piezas de su DOM o de su navegación: el título y el selector de mes son los de la barra (`.fc-toolbar-title`, que abre el selector al pulsarlo); el mes, `el.calendar.view` |

### 3.5 Pintar días desde JavaScript

Los scripts que esperaban con `setTimeout` a que el plugin dibujase y pintaban celdas a mano (festivos, fines de semana, colores) dejan de hacer nada. Lo que hacían tiene ya su sitio:

- **Festivos**: `HolidaysObjectName` en `Scheduler`; el calendario les pone `.flx-holiday` y la piel los pinta.
- **Fines de semana y días no laborables**: `BusinessDays` (se sombrean solos) o CSS sobre `.fc-day-sat` / `.fc-day-sun`.
- **Colores y estados por registro**: `ColorField` y `StyleField` de `Scheduler_Objects`; la piel los normaliza (2.4), así que no hace falta elegir un color por modo.

### 3.6 La API jQuery de FullCalendar 3 (`$('#calendar').fullCalendar(...)`)

En la versión 3 el mes era un plugin de jQuery y todo se hacía con `$(el).find('#calendar').fullCalendar('método', …)`. La 6 es una clase y el componente guarda su instancia en **`el.calendar`** (`el` = el elemento `flx-scheduler`; el contenedor sigue siendo `#calendar`).

**Esas llamadas siguen funcionando**: el mes trae una capa de compatibilidad que responde a cada método de la tabla con su equivalente, con `moment` donde la 3 daba `moment` y con los nombres de vista y de opción de la 3, y avisa **una vez** en la consola de que la vía es obsoleta (y de cada método sin equivalente, que no hace nada). Es para no romper al actualizar: el código nuevo, y el que se toque, usa la columna de la derecha, porque la capa se retirará en una versión futura. Solo el mes: el año y la vista nunca fueron FullCalendar 3.

| Versión 3 | Versión 6 |
|---|---|
| `fullCalendar('refetchEvents')`, `('rerenderEvents')` | `el.refresh()` — vuelve a pedir al servidor con el filtro y el `additionalWhere` del componente |
| `fullCalendar('gotoDate', fecha)` | `el.calendar.gotoDate(fecha)` — `Date` o `'YYYY-MM-DD'`; un `moment`, con `.toDate()` |
| `fullCalendar('getDate')` | `el.calendar.getDate()` — devuelve `Date`; si el script espera `moment`: `moment(el.calendar.getDate())` |
| `fullCalendar('changeView', 'month' / 'agendaWeek' / 'agendaDay' / 'listWeek')` | `el.calendar.changeView('dayGridMonth' / 'timeGridWeek' / 'timeGridDay' / 'listWeek')` |
| `fullCalendar('getView')` | `el.calendar.view` (`view.type` con los nombres de la 6, `activeStart`/`activeEnd` como `Date`), o con la forma de la 3: `el.scriptView(el.calendar.view)` (`name`, `start`, `end`, `intervalStart`, `intervalEnd` como `moment`) |
| `fullCalendar('prev')`, `('next')`, `('today')` | `el.calendar.prev()`, `.next()`, `.today()` |
| `fullCalendar('clientEvents'[, filtro])` | `el.allEvents([filtro])` o `el.calendar.getEvents()`; los datos del registro van en `ev.extendedProps` (con la forma de la 3: `el.scriptEvent(ev)`) |
| `fullCalendar('removeEvents')` sin argumento | `el.clearEvents()` |
| `fullCalendar('removeEvents', id)` | `el.calendar.getEventById(id).remove()` |
| `fullCalendar('renderEvent', ev)`, `('renderEvents', evs)` | `el.calendar.addEvent(ev)` (uno a uno) |
| `fullCalendar('updateEvent', ev)` | los métodos del propio evento: `ev.setProp('title', …)`, `ev.setStart(…)`, `ev.setEnd(…)`, `ev.setExtendedProp(…)` |
| `fullCalendar('addEventSource', fuente)` | `el.calendar.addEventSource(fuente)` |
| `fullCalendar('select', inicio, fin)`, `('unselect')` | `el.calendar.select(inicio, fin)`, `.unselect()` |
| `fullCalendar('option', nombre, valor)` | `el.calendar.setOption(nombre, valor)` — ojo, varias opciones cambiaron de nombre en la 6: `defaultView` → `initialView`, `header` → `headerToolbar`, `eventLimit` → `dayMaxEvents`, `minTime`/`maxTime` → `slotMinTime`/`slotMaxTime`, `defaultDate` → `initialDate` |
| `fullCalendar('destroy')` | `el.calendar.destroy()` |
| Opciones pasadas al crear (`$('#calendar').fullCalendar({...})` propio) | no se puede reutilizar: la configuración va por `Scheduler` (1.1) y `Params` (1.3); lo que no esté ahí, con `el.calendar.setOption` tras cargar |

`OnClickJS` y `OnClickDayJS` **no** están en esta tabla porque no hay que tocarlos: siguen recibiendo `calEvent`, `view` y `date` con la forma de la 3 (1.4).

---

## 4. Cómo localizar lo que hay que revisar

En el repositorio del producto (JS, TS, LESS, CSS y guiones de `staticdata`):

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

Y en la base de configuración, los scripts guardados en `Scheduler.OnClickJS` / `OnClickDayJS`, los eventos de módulo que escuchan `"module", "selected"`, y los objetos que declaran `DurationField` junto a `EndDateField` (2.1).

Para cada hallazgo:

1. Si lee el DOM de `jqyc` o de la rejilla vieja: cambiar al selector de la tabla del apartado 3 o, mejor, a la propiedad del elemento (`el.events`, `el.year`).
2. Si es CSS de FullCalendar 3: renombrar con la tabla 3.3.
3. Si pinta celdas por JS: sustituir por `HolidaysObjectName`, `BusinessDays`, `ColorField`/`StyleField` o CSS sobre las clases de la 6.
4. Si llama a `.fullCalendar(…)`: sigue funcionando (avisa en la consola), pero cambiar cada llamada por su equivalente de la tabla 3.6 antes de que se retire la capa.
5. Si es `OnClickJS`/`OnClickDayJS` o `selected`: no hay que tocarlo.

---

## 5. Comprobar en el navegador

Con la página del calendario abierta, en la consola:

```js
// el año: qué año muestra y cuántos registros tiene cargados
const y = document.querySelector('flx-scheduleryear');
y.year, y.events.length

// el evento de selección de un día (año y vista); con SelectRange, detailIdentity trae el último día del rango
flexygo.events.on(y, 'module', 'selected', e => console.log(e.masterIdentity, e.detailIdentity));

// días con registros y festivos
document.querySelectorAll('flx-scheduleryear .fc-daygrid-day:has(.flx-yearmark)').length
document.querySelectorAll('flx-scheduleryear .fc-daygrid-day:has(.flx-holiday)').length

// el mes: la configuración que ha recibido
const m = document.querySelector('flx-scheduler');
m.selectRange, m.allowOverlap, m.nowIndicator, m.businessHours
```
