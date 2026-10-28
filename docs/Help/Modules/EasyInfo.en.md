# Easy info: cards, links and periods <span class="fh-version-tag" title="Available since version 10">10.0+</span>

As of **version 10** the `flx-easyinfo` module says more with the same contract as always: **every column returned by the SQL reaches the component under its name**, and the new capabilities are switched on **by returning one more column**. There is no setting to learn and no JSON to write: everything that belongs to a tile goes in its SQL row, which is also where its texts are translated.

This page is the complete reference for the easy info in this version: **what arrives when you update**, **the entire SQL contract** (the usual and the new in a single table), **the single-tile card**, **the period switch**, **which module form fields it reads and which it does not**, **attribute mode**, **each mode in pictures with the SQL that produces it** and how to verify it. Everything works the same in **skin2026 and flexy2022**: the structure is shared and each skin supplies its colors. The administrator home screen is built entirely with this and serves as an example.

<figure markdown="span">
  ![The cards on the skin2026 home screen](../../docs_assets/images/EasyInfo/tarjetas.png)
  <figcaption>Eight easy info modules of one row each, on the skin2026 home screen. Errores has the period switch; Origen, six links at the bottom; Módulos sin colocar, the <code>target</code> bar</figcaption>
</figure>

---

## 0. When updating a product

### 0.1 What arrives with the packages alone

| Package | What it brings |
|---|---|
| `{Product}.Frontend` | The `flx-easyinfo` component with the card, the new columns, the switch and the unknown column warning in development mode (1.6), plus its texts in the seven languages |
| `{Product}.Backend` / `.Library` | `EasyPie.GetHTML` forwards `Modules.Empty` (the empty text) and resolves the context variables (`{{currentUserId}}`, `{{currentUserCultureId}}`…) also in a module **without an object**; before, without an object, they stayed as plain text and the query matched nothing |
| `{Product}.Conf.Database` | The `Modules_Types` row for the **"EasyInfo Rows"** type (`flx-easyinfo mode="rows"`, 1.3) and the module form rules for both types: **`Empty` is shown** and **Toolbar is hidden** (2.1), and the **help for the SQL Sentence field** with the columns of each type. The five cards on the administrator home screen that come from SQL (Errores, Jobs, Usuarios, Módulos sin colocar and Origen) already have `mode="card"` in **Params**. All with origin 0, through the usual `MERGE` statements |

### 0.2 What changes without touching anything

| Skin | What the user sees |
|---|---|
| **Both** | An easy info is still a tile, or a strip of tiles, as always. The **card** (1.2) is new and is requested with `mode="card"` in the module's **Params**: without the tile's small label —the title is the module's—, the badge at the start of the subline and the number in the tone's color. Numbers are grouped by thousands with the user's culture, `color` accepts the six semantic names (1.1), a module with no rows always says something (1.5), column names are **not case-sensitive** and, **in development mode**, a column the component does not read is flagged in the module itself (1.6). |
| **flexy2022** | This is the skin where it shows most: until this version flexy2022 ignored `actions`, `scope`, `series` and `target`, had no card or list, and a module with no rows was left blank. It now paints the same as skin2026, with its own colors. The attribute-based counter strips in templates (the one in the administration area, for example) look as before. |
| **skin2026** | Three fixes: the sparkline no longer overlaps the bottom links, the list with new columns stays as icon · label · badge · value, and the color of a tile with no icon goes to the number. |

No module turns into a card just by updating: the card has to be requested. Nor does it depend on how many rows the query returns, so a module does not change its look the day its SQL returns one more row.

<figure markdown="span">
  ![The same modules in flexy2022](../../docs_assets/images/EasyInfo/flexy2022.png)
  <figcaption>The same modules opened with the flexy2022 profile: the same structure with that skin's colors</figcaption>
</figure>

### 0.3 What you have to do

Nothing mandatory. The new features are adopted module by module, by adding columns to the SQL (1.1) or by choosing the "EasyInfo Rows" type in the module's type combo (1.3). If a module had buttons in **Toolbar**, they were never painted and the form no longer shows the field: whatever those buttons did goes in `click` or in `actions` (1.1).

---

## 1. SQL contract reference

An easy info is a query whose rows are tiles. The component reads **the alias of each column**, **case-insensitively** (`value`, `Value` and `VALUE` are the same; if a row has two spellings of the same column, the lowercase one wins). **The order of the tiles is the query's `ORDER BY`**.

The help (ⓘ) of the form's **SQL Sentence** field summarizes this table.

### 1.1 Columns, one row = one tile

| Column | What it does | Since | |
|---|---|---|---|
| `value` | The big number. Grouped by thousands with the user's culture (`2.696`); a value already formatted by the SQL (`10,6 min`, `92,4 %`) is kept as is. Empty paints `—` in muted ink (a `0` is data and is painted) | always | the only one required |
| `label` | The small label above the number | always | not painted on the card (1.2): the title is the module's |
| `iconclass` | Icon class (`flx-icon icon-bug`) | always | not painted on the card: the icon is the module's |
| `color` | A literal (`#ff9a02`) **or one of the six names**: `danger`, `warning`, `ok`, `info`, `accent`, `muted`. With a name, the skin picks the ink according to the mode (light/dark) and with measured contrast; a literal is painted as is. It tints the icon; on a tile with no icon, and on the card, the number | names: **v10** | |
| `symbol` | Text next to the number: the unit (`%`, `€`) or, on the card, a qualifier (`in 24 h`) | always | |
| `click` | Script when clicking anywhere on the tile (`flexygo.nav.openPage(…)`) | always | |
| `variation` | Variation badge (`+12 %`, `2 causes`). On the card it is painted at the start of the subline, in ink | v10 | |
| `trend` | Trend line with the icon in front | v10 | |
| `trendlabel` | The muted subline below the number | v10 | |
| `target` | The total that `value` is measured against: switches on "of N" next to the number, the progress bar and the percentage | v10 | |
| `series` | Comma-separated numbers, oldest first: draws a sparkline at the bottom, in the tone's color | v10 | |
| `actions` | **Links at the bottom of the tile**, one per line: `Text\|script`. Each one has its own `onclick` and does not fire the tile's `click`. They are separated by a line break (`CHAR(10)`) and not by `;`, because a script contains semicolons | v10 | |
| `scope` | **Period label** (`24 h`, `7 d`, `30 d`, or any other text). If **all** rows have it, the card paints one and a switch to change row (1.4) | v10 | on the card |
| `size` | Size of the tile in the strip (`s`, `m`, `l`) | always | ignored on the card: the tile fills the module |

Any other column **is not read**, and in development mode the module says so (1.6). With one exception: **`OrderTiles`**. Many modules return it because it was believed to be the column that orders the tiles, but nobody reads it and it orders nothing (the `ORDER BY` that usually accompanies it does the ordering); it is tolerated without warning.

Any text the user reads is translated in the SQL itself, as in any module: `dbo.fTranslateArea('{{currentUserCultureId}}', N'texto', 'Templates')`, with its row in `Translate` for each culture.

### 1.2 The single-tile card

It is requested by writing `mode="card"` in the **Params** of the module form (Params is appended as is to the component tag). It paints one row: the first one, or the one chosen in the switch if all of them have `scope` (1.4). If the query returns several rows without `scope`, they are painted as a strip even if the module requests the card. Without `mode="card"`, the easy info is always a tile or a strip, whether it returns one row or twenty.

What changes compared to a strip tile: the tile fills the module and loses its own border (the card is the module); it does not paint `label` or `iconclass` (title and icon are the module's: the form's **Title** and **Icon**); `variation` opens the subline in bold; the number takes the tone's ink (`color`); a `value` that is not a number ("Not activated", "Warning") is preceded by a dot in the tone's color; `symbol` is painted as a qualifier next to the number; and `actions` goes at the bottom, in link ink, wrapping onto a new line if it does not fit.

The module header is what lets the user **drag and pin** the card on a page with "Users can reorder", like any other module.

### 1.3 The row layout is a module type

In the module's **Type** combo, "EasyInfo Rows" (`flx-easyinfo mode="rows"`) paints the tiles as a compact list: icon and label on the left; badge (`variation`) or subline (`trendlabel`) and value on the right. The rest of the card (`trend`, `target`, `series`, `actions`) does not fit in a row and is not drawn. It is the same component with an attribute, just as `flx-objectlist` and `flx-editlist` are a `flx-list` with a different `mode`.

The same layout used to be requested by writing `easyinfo-compact` in **ModuleClass**, and that still works. `mode="compact"` in **Params** also works: it is the same as `mode="rows"`.

### 1.4 The period switch

If the SQL returns several rows and **all** of them have `scope`, the card paints **one** (the one the user chose last time for that module, or the first) and a segmented control at the top right with one button per row. Clicking changes the row **without going back to the server** —the rows are already there— and saves the choice per user and module (`flexygo.storage.local`). Each row has its own `value`, `variation`, `trendlabel`, `click` and `actions`, so the link can also follow the period.

<figure markdown="span">
  ![The period switch of the errors card](../../docs_assets/images/EasyInfo/conmutador-30d.png)
  <figcaption>Errores with the switch on "30 d": value, causes, users and the link to Sentinel change with the period</figcaption>
</figure>

The label is free text: it works for periods, and also for "Mine / All", "This year / Previous" or "Pending / Closed". It is only painted on the card (`mode="card"`); without it the rows come out as tiles, one per period.

This is the SQL of the errors card on the home screen, which returns three rows with the same query:

```sql
SELECT s.scope, v.n AS value,
       dbo.fTranslateArea('{{currentUserCultureId}}', N'errors', 'Templates') AS symbol,
       CASE WHEN v.n = 0 THEN 'muted' ELSE 'danger' END AS color,
       CASE WHEN v.c > 0
            THEN REPLACE(dbo.fTranslateArea('{{currentUserCultureId}}', N'{0} causes', 'Templates'), '{0}', CAST(v.c AS varchar(12)))
            ELSE '' END AS variation,
       CASE WHEN v.u > 0
            THEN REPLACE(dbo.fTranslateArea('{{currentUserCultureId}}', N'hit by {0} users', 'Templates'), '{0}', CAST(v.u AS varchar(12)))
            ELSE dbo.fTranslateArea('{{currentUserCultureId}}', N'nothing to report', 'Templates') END AS trendlabel,
       CAST(REPLACE(REPLACE(N'flexygo.nav.openPageName(^syspage-sentinel-2026^,null,null,^{"since":"#"}^,^current^,false,null)', '^', CHAR(39)), '#', s.code) AS nvarchar(400)) AS click,
       dbo.fTranslateArea('{{currentUserCultureId}}', N'Sentinel', 'Templates') + '|'
         + REPLACE(N'flexygo.nav.openPageName(^syspage-sentinel-2026^,null,null,null,^current^,false,null)', '^', CHAR(39)) AS actions,
       s.ord AS OrderTiles
  FROM (VALUES (1, dbo.fTranslateArea('{{currentUserCultureId}}', N'24 h', 'Templates'), DATEADD(hour, -24, GETDATE()), '24h'),
               (2, dbo.fTranslateArea('{{currentUserCultureId}}', N'7 d',  'Templates'), DATEADD(day,  -7, GETDATE()), '7d'),
               (3, dbo.fTranslateArea('{{currentUserCultureId}}', N'30 d', 'Templates'), DATEADD(day, -30, GETDATE()), '30d')) s(ord, scope, since, code)
 CROSS APPLY (SELECT COUNT(1) AS n,
                     COUNT(DISTINCT LEFT(ErrorMessage, 120)) AS c,
                     COUNT(DISTINCT UserId) AS u
                FROM Error_Log WHERE TimeStamp >= s.since) v
 ORDER BY s.ord
```

Three writing details: the `^` are apostrophes (`REPLACE(…, '^', CHAR(39))` avoids doubled quotes inside the literal), the `#` is where the period code goes in the link, and the order of the buttons is given by `ORDER BY s.ord` (the example's `OrderTiles` column comes from older modules and does nothing, 1.1).

And this is the link footer of the Origen card, six links on two lines:

```sql
REPLACE(dbo.fTranslateArea('{{currentUserCultureId}}', N'{0} objects', 'Templates'), '{0}', CAST((SELECT COUNT(1) FROM Objects WHERE OriginId = o.OriginId) AS varchar(12)))
  + '|' + REPLACE(N'flexygo.nav.openPage(^list^,^sysObjects^,^(Objects.OriginId = dbo.funNet_GetOrigin())^,null,^current^,false,null)', '^', CHAR(39))
  + CHAR(10) + … /* pages, modules, processes */
  + CHAR(10) + dbo.fTranslateArea('{{currentUserCultureId}}', N'Change origin', 'Templates')
  + '|' + REPLACE(N'flexygo.nav.openProcessParams(^SetNewOrigin^,^^,^^,null,^modal^,false,null)', '^', CHAR(39)) AS actions
```

### 1.5 The empty text

If the SQL returns no rows, the module says whatever its **Empty** field contains (in the form, under Connection String) and, if it is blank, the generic text ("Nothing to report", translated), shaped as a dotted placeholder the size of a card.

`Empty` is written as **text**, not as HTML: a tag comes out literally.

### 1.6 The misspelled column warning (development mode)

With **development mode** on, if the SQL returns a column that **looks like a mistake**, the module shows a **red icon next to its title**; the full warning appears when hovering over it. It only warns about two things:

- **A column spelled almost like one the component reads**: `vaule`, `lable`, `Colour`… (one letter off in short names, two in long ones; two swapped letters count as one). The warning says which one it looks like.
- **A column with no name**: an expression in the `SELECT` with no alias, which SQL Server returns as `Column1`.

> sysmod-arr-usuarios cannot use these columns of its SQL:<br>
> vaule: did you mean value?<br>
> Column1: a column with no alias

Working columns the component does not use (`cssclass`, `OrderBy`, `class`, any other that does not resemble one of its own) **do not trigger a warning**: they are ignored, as always. Nor does `OrderTiles` (1.1). Anyone not in development mode sees nothing, and the icon does not change the module's height or cover the tiles.

---

## 2. What is configured and where

### 2.1 The module form fields

With the EasyInfo or EasyInfo Rows type, the form shows only what the component uses:

| Field | What it does in an easy info |
|---|---|
| **SQL Sentence** and **Connection String** | The query (1) and the database it runs against. Required. The field's ⓘ summarizes the contract |
| **Object Name** and **Object Filter** | With an object, the query sees the record's fields (`{{Id}}`…) and `Object Filter` is added to it as a `WHERE`. Without an object, the query still sees the context variables |
| **Empty** | The empty text (1.5) |
| **Title** and **Icon** | The module header, which on the card (1.2) is its title and its icon |
| **ModuleClass** | Module classes that change the easy info: `noheader` (no header), `easyinfo-tall` (the tiles of a strip fill the module's height, with the links at the bottom) and `easyinfo-compact` (the row layout; the "EasyInfo Rows" type is better, 1.3) |
| **Header Class**, **Full Screen / Collapsible / Refresh Button**, **Container** | The module's own, as in any type. "Refresh" requests the SQL again |
| **Params** | Attributes appended to the component tag, as in any module. `mode="card"` requests the card (1.2); `mode="rows"` (or `mode="compact"`, which is the same) gives the list, just like the "EasyInfo Rows" type |
| **Manual Init**, **JSAfterLoad**, **Skeleton** | Those of any module |

**Not there, on purpose:**

- **Toolbar**: the easy info has never painted toolbar buttons, and the form no longer shows the field with these two types. Whatever a tile opens goes in `click` and in `actions`.
- **Search Button**: the form shows it with any module type, but the easy info does not read it: checked or not, no search button appears.
- **Json Options**: there is nothing to configure through JSON. What in other visualizations would be a module option is here a column of the row, because each tile of the same module may want its own (color, size, links) and because in the SQL its texts get translated.

### 2.2 Each skin, its own colors

The structure (card, strip, list, switch, bar, sparkline, links, empty) is in the component's shared stylesheet, `skins/default/wc/flx-easyinfo.less`, and everything that is color comes from variables. Each skin resolves them with its palette: skin2026 with its inks measured for light and dark, flexy2022 with its base colors (`--danger-color`, `--warning-color`, `--success-color`, `--info-color`, `--outstanding-color`, `--txt-module-color`), darkened in light mode so that the tone's number passes text contrast (measured: 6.7 to 7.2 in light and 5.1 to 7.6 in dark). A product skin that wants other tones only has to redefine `--flx-tone-ink` and `--flx-tone-solid` in `.flx-statcard.flx-tone-<name>`.

---

## 3. Attribute mode

A standalone `<flx-easyinfo>` in any HTML —a template, a `flx-html` module— is painted from its attributes, with the **same set of columns**: `value`, `symbol`, `label`, `iconclass`, `color`, `click`, `variation`, `trend`, `trendlabel`, `series`, `target`, `actions`.

```html
<flx-easyinfo value="37" target="424" color="warning" trendlabel="with no modules"></flx-easyinfo>
```

The card (1.2) **is not inferred**: with attributes it is requested with `mode="card"`, because a tile hanging from a list template has to remain a tile. This is what the Version, License and Health cards on the home screen use, which have no SQL: a `flx-html` module with `<flx-easyinfo mode="card" manualInit="true" value="">`, whose `ScriptText` requests the data from the API, fills in the attributes, assigns `value` and calls `init()`.

```javascript
(function () {
  var el = document.getElementById('arr-version');
  flexygo.ajax.get('~/api/Versions', 'latest', null, function (r) {
    el.setAttribute('symbol', r.UpdateAvailable ? r.LatestVersion + ' available' : 'up to date');
    el.setAttribute('actions', 'Update|flexygo.nav.openURL(\'./version-info\',\'\',\'current\',false,null)');
    el.value = r.CurrentVersion; el.init();
  });
})();
```

The texts of such a module are translated with `{{translate|…}}` in `data-*` attributes of the element itself, which the template compiles when painting the HTML, and the script reads them from there.

With attributes there is no empty text or column warning: the attributes are what they are.

---

## 4. The modes, in pictures

Each image is a module configured only from its form: the type, the title, sometimes **ModuleClass** or **Empty**, and the **SQL Sentence** query shown below it. All in skin2026 light at 1920 px; in flexy2022 they look the same with its colors (there are some alongside for comparison).

### 4.1 How the mode is chosen

| Mode | When it appears | Chosen with | Skins |
|---|---|---|---|
| Card | Requested | `mode="card"` in **Params** | both |
| Card with switch | Card and several rows, all with `scope` | `mode="card"` + the SQL | both |
| Tile or strip of tiles | Whenever nothing else is requested: one row, one tile; several, a strip | default | both |
| Tall strip | `easyinfo-tall` in ModuleClass | ModuleClass | both |
| No header | `noheader` in ModuleClass | ModuleClass | both |
| List | "EasyInfo Rows" type (or `easyinfo-compact` in ModuleClass) | **Type** combo | both |
| Empty | The query returns no rows | **Empty** field | both |
| Attributes | `<flx-easyinfo …>` in the HTML of an HTML module | the module's HTML | both |
| Column warning | Development mode and a column that is not read | automatic | both |

### 4.2 Card

All the ones in this section have `mode="card"` in **Params**. Without it, the same one-row query is a tile:

![One row without mode: tile](../../docs_assets/images/EasyInfo/ej-min.png)

```sql
SELECT 42 AS value
```

The typical card, with unit, badge, subline, click on the card and two links at the bottom:

![Typical card](../../docs_assets/images/EasyInfo/ej-card.png)

```sql
SELECT 1284 AS value, '€' AS symbol, 'ok' AS color, '+12 %' AS variation, 'vs. last month' AS trendlabel,
       'flexygo.nav.openPage(''list'',''sysJobs'',null,null,''current'',false,null)' AS click,
       'Invoices|flexygo.nav.openPage(''list'',''sysJobs'',null,null,''current'',false,null)' + CHAR(10)
     + 'Customers|flexygo.nav.openPage(''list'',''sysUsers'',null,null,''current'',false,null)' AS actions
```

A value that is a word is preceded by the tone's dot:

![Card with a text value](../../docs_assets/images/EasyInfo/ej-word.png)

```sql
SELECT 'Not activated' AS value, 'danger' AS color, 'the licence expired on 1 Sep' AS trendlabel
```

With `target` (bar and percentage) and with `series` (sparkline):

![Card with target](../../docs_assets/images/EasyInfo/ej-target.png)

```sql
SELECT 318 AS value, 500 AS target, 'orders' AS symbol, 'info' AS color, 'goal for September' AS trendlabel
```

![Card with sparkline](../../docs_assets/images/EasyInfo/ej-series.png)

```sql
SELECT 61 AS value, 'info' AS color, '+17 %' AS variation, 'last 7 days' AS trendlabel, '20,31,28,40,44,52,61' AS series
```

The card with all the columns at once (`label` and `iconclass` are not painted on the card: they are the module's). It needs a module somewhat taller than the rest:

![Full card](../../docs_assets/images/EasyInfo/ej-full.png)

```sql
SELECT 1284 AS value, '€' AS symbol, 'ok' AS color, '+12 %' AS variation, 'Up this month' AS trend, 'vs. last month' AS trendlabel,
       2000 AS target, '620,700,810,760,920,1010,1284' AS series,
       'flexygo.nav.openPage(''list'',''sysJobs'',null,null,''current'',false,null)' AS click,
       'Invoices|…' + CHAR(10) + 'Customers|…' AS actions
```

The same card in flexy2022:

![Card in flexy2022](../../docs_assets/images/EasyInfo/ej-card-2022.png)

### 4.3 Card with switch

![Card with period switch](../../docs_assets/images/EasyInfo/ej-scope.png)

In flexy2022:

![Card with switch in flexy2022](../../docs_assets/images/EasyInfo/ej-scope-2022.png)

```sql
SELECT scope, value, 'failed' AS symbol, color, variation, trendlabel
FROM (VALUES (1, '24 h', 3, 'danger', '2 jobs', 'since yesterday'),
             (2, '7 d', 11, 'warning', '4 jobs', 'this week'),
             (3, '30 d', 27, 'warning', '6 jobs', 'this month')) t(ord, scope, value, color, variation, trendlabel)
ORDER BY ord
```

### 4.4 Strip of tiles

Label, icon, badge, trend with the icon in front, subline and `size`:

![Strip of four tiles](../../docs_assets/images/EasyInfo/ej-strip.png)

```sql
SELECT label, iconclass, value, symbol, color, variation, trend, trendlabel, size
FROM (VALUES (1, 'Orders', 'flx-icon icon-cart', '318', NULL, 'info', '+8 %', 'Up this week', 'vs. last week', 'm'),
             (2, 'Returns', 'fa-solid fa-undo', '12', NULL, 'warning', '-3 %', NULL, 'vs. last week', 's'),
             (3, 'Margin', 'fa-solid fa-percent', '34.6', '%', 'ok', NULL, NULL, 'target 40 %', 'l'),
             (4, 'Tickets', NULL, '0', NULL, 'muted', NULL, NULL, 'nothing open', 'm'))
     t(ord, label, iconclass, value, symbol, color, variation, trend, trendlabel, size)
ORDER BY ord
```

The strip in flexy2022:

![Strip in flexy2022](../../docs_assets/images/EasyInfo/ej-strip-2022.png)

The six color names and a literal. With no icon, the color goes to the number:

![Colors](../../docs_assets/images/EasyInfo/ej-colors.png)

A strip with all the columns:

![Full strip](../../docs_assets/images/EasyInfo/ej-fullstrip.png)

A single row in a module with `noheader` in ModuleClass: the tile without the module header:

![One row with no header](../../docs_assets/images/EasyInfo/ej-noheader.png)

With `easyinfo-tall` in ModuleClass, the tiles fill the module's height and the links move to the bottom:

![Tall strip](../../docs_assets/images/EasyInfo/ej-tall.png)

```sql
SELECT label, value, color, trendlabel, actions
FROM (VALUES (1, 'WebAPI', 'On', 'ok', '12 calls today', 'Settings|flexygo.nav.openPage(''list'',''sysJobs'',null,null,''current'',false,null)'),
             (2, 'Offline app', 'Off', 'muted', 'not published', 'Publish|…' + CHAR(10) + 'Help|…'))
     t(ord, label, value, color, trendlabel, actions)
ORDER BY ord
```

### 4.5 List ("EasyInfo Rows")

![EasyInfo Rows in skin2026](../../docs_assets/images/EasyInfo/ej-rows.png)

```sql
SELECT label, value, symbol, color
FROM (VALUES (1, 'Open orders', '318', NULL, 'info'), (2, 'Late', '12', NULL, 'warning'),
             (3, 'Margin', '34.6', '%', NULL), (4, 'Returns', '0', NULL, 'muted')) t(ord, label, value, symbol, color)
ORDER BY ord
```

The same module in flexy2022:

![EasyInfo Rows in flexy2022](../../docs_assets/images/EasyInfo/ej-rows-2022.png)

With all the columns, the list stays as icon, label, badge or subline, and value:

![EasyInfo Rows with all the columns](../../docs_assets/images/EasyInfo/ej-rowsfull.png)

### 4.6 No rows

With **Empty** filled in ("No orders waiting today") and with **Empty** blank:

![No rows, with Empty](../../docs_assets/images/EasyInfo/ej-empty.png)

![No rows, generic text](../../docs_assets/images/EasyInfo/ej-emptyd.png)

### 4.7 With attributes, in an HTML module

![Card with attributes](../../docs_assets/images/EasyInfo/ej-attr.png)

```html
<flx-easyinfo mode="card" value="37" target="424" color="warning" symbol="modules" trendlabel="with no page"></flx-easyinfo>
```

![Tiles with attributes](../../docs_assets/images/EasyInfo/ej-attr2.png)

```html
<flx-easyinfo value="12" label="Open" color="info" variation="+2"></flx-easyinfo>
<flx-easyinfo value="3" label="Late" color="danger" trendlabel="since Monday"></flx-easyinfo>
```

### 4.8 Misspelled column (development mode)

<figure markdown="span">
  ![The red warning icon next to the module title](../../docs_assets/images/EasyInfo/ej-typo.png){ width="420" }
  <figcaption>The warning is an icon next to the title; the text appears on hover</figcaption>
</figure>

```sql
SELECT 2 AS vaule, 'users' AS label, COUNT(*)   -- vaule: did you mean value?  ·  the third one, with no alias
```

---

## 5. How to verify it

1. Open the page with the skin2026 profile and with flexy2022 (actually changing the profile, not with the menu's "Change profile").
2. In skin2026: a module with `mode="card"` in Params looks like a card and one without it like a tile, the bottom links open what they should, the switch changes row and remembers the choice after reloading; in dark mode, the number takes the tone.
3. In flexy2022: the same as in skin2026, with flexy2022's colors, in light and dark.
4. An easy info with no rows shows its `Empty` and, with `Empty` blank, the generic text.
5. With development mode on, a misspelled alias in the SQL is named in the module; with it off, it is not.
6. In the form of an EasyInfo module: **Empty** is shown, **Toolbar** is not, and the ⓘ of **SQL Sentence** opens the help with the columns.
