# External entities (objects over a REST API)

An **external object** is a Flexygo object whose records do not live in a database table but **behind a REST API**. It is defined, listed, queried and edited like any other object —lists, record views, forms, relations, kanban, calendars, web API—, and the core reads and writes through the API without the screens knowing.

Whatever **runs SQL** against the database (a SQL list, a chart, a Crystal report) cannot read an API, and says so with a message. At the end of this page there is the table of what works and what doesn't.

---

## How it works

| Piece | What it is |
|---|---|
| **External service** (`External_Services`) | The API: base URL, authentication, how it pages, sorts and filters, where the records come in the response. One service serves several objects. |
| **Object** with source `rest` (`Objects.SourceType`) + its **API configuration** (`Objects_External`) | The paths and methods for listing, reading, inserting, updating and deleting. |
| **Properties** | The fields. An API has no schema to read, so properties are proposed from the JSON it returns. Each one can carry an **external name** (`ExternalName`) and one is the **key** (`IsKey`). |
| **Views** | Columns only, no SQL: the API returns the records and Flexygo chooses which columns to show. |

List filters, searches and security conditions are translated into the service's language (OData, query parameters) or, if the API does not filter, applied in memory over what it returns.

!!! info "Configured without SQL or hand-written JSON"
    The object creation wizard has an "External API" source that **probes** the service and proposes the properties from the response. Afterwards, the object's workbench has an **API** section to fine-tune paths and methods. In the rest of the configuration —views, templates, pages, modules, security— an external object is treated like any other.

---

## 1. Register the service

The API is registered once in **External services**: control panel → **Objects** area → *External services* (in flexy2022, *Admin Work Area → Object Management → External services*), the search box (**Ctrl K**), or from the object wizard, with the **+** next to the service; the link button beside it opens the chosen service. Each external object points to a service.

Want to try it end to end with a public API? [Try it: an object that lives in a REST API](ExternalEntitiesTryIt.md).

<figure markdown="span">
  ![List of external services](../../docs_assets/images/ExternalEntities/ext-01-servicios.png)
  <figcaption>External services: each one is an API that one or more objects point to</figcaption>
</figure>

<figure markdown="span">
  ![Form of an external service](../../docs_assets/images/ExternalEntities/ext-02-servicio.png)
  <figcaption>A service with API key authentication: the header and, next to it, the secret, whose label says what it holds</figcaption>
</figure>

| Field | What for |
|---|---|
| **Service Id** | Service identifier. |
| **Base URL** | Root of the API. The object's paths are relative to it. |
| **Authentication** | `None`, `API key` (header, `X-Api-Key` by default), `Basic` (the secret is `user:password`), `Bearer` (the secret is the token) or `OAuth2 client credentials` (token URL, client id and scope; the secret is the client secret). |
| **Secret** | The key, the token, `user:password` or the client secret, depending on the authentication. Its label changes with it: **API key**, **Token**, **User:password** or **Client Secret**. With `None` it does not appear. |
| **Filter mode** | How filters, sorting and pages are requested from the API: **OData** (`$filter`, `$orderby`, `$top`, `$skip`), **Query string** (templates `{field}={value}` and `{field} {dir}` defined on the object) or **None** (the API returns everything and Flexygo filters, sorts and pages in memory). |
| **Page / Page size / Offset / Sort parameter** | Names of the API's paging and sorting parameters, and the number of the first page. |
| **Max rows in memory** | Cap on the rows fetched when the API does not filter (`None`); 5,000 by default. If the API returns more, a warning is shown. |
| **Error path** | JSON path of the error node, for APIs that answer errors with a 200. |
| **Default headers** | Fixed headers for all calls, in JSON. |

!!! warning "The secret is stored with the service"
    The key, token or password is stored in the service itself (`External_Services.Secret`), in plain text, like the product's other integration secrets. That is why the field is a password field, the web API does not return it and it is not loaded with the objects' configuration: the provider reads it only when it authenticates. **Testing** a service that has not been saved yet uses the secret typed in the form.

    Without a secret, the call is rejected with a message saying what is missing: *Service miServicio: no secret configured. Fill in the Secret of the service.*

---

## 2. Create the object with the wizard

From the **Objects** list, with the wand button (**New object**), in the **Source** step choose **An external API**. The service and the list path are enough; the record path (`{key}` is replaced by the key) makes the record view faster, and the array and total paths are for APIs that wrap the response.

<figure markdown="span">
  ![Wizard Source step with the external API option](../../docs_assets/images/ExternalEntities/ext-03-asistente-origen.png)
  <figcaption>Step 2 — the "External API" source: service, list path and record path</figcaption>
</figure>

**Probe the API** calls the list once, without saving anything, and shows a sample of the records and the **proposed properties**: name, label, inferred type, which one is the key and whether it is mandatory (a long text, such as a base64 image, is never proposed as mandatory). Protocol annotations (`@odata.etag`, `Field@odata.mediaReadLink`, `@id`) are not record data: they are listed separately as skipped. They can be removed, renamed or have their type changed before creating.

<figure markdown="span">
  ![Probe result with the proposed properties](../../docs_assets/images/ExternalEntities/ext-04-asistente-sonda.png)
  <figcaption>The probe: 100 records, a sample and four proposed properties with their key</figcaption>
</figure>

<figure markdown="span">
  ![Review step before creating](../../docs_assets/images/ExternalEntities/ext-05-asistente-revision.png)
  <figcaption>Step 3 — what is going to be created: the object, the collection, the properties and a default list view</figcaption>
</figure>

Once created, the object already lists and opens record views: there is no need to write SQL or define the views by hand.

!!! tip "Key generated by the API"
    If the key is **not** marked as mandatory, Flexygo understands that the API generates it on insert. For APIs that do not return the created record, the **Find inserted record by** field of the API section (for example `UserName = '{UserName}'`) says how to locate it again.

---

## 3. Fine-tune in the workbench

For an external object, the object's workbench shows the **API** section. There you find the **insert, update and delete** paths (empty, the object is read-only: the list does not offer *New*, the record view does not offer *Edit* or *Delete*, and each action appears once its path is set, or if it is written with a custom process), the update method (`PUT` or `PATCH`), the body format (`JSON`), the array and total paths, and the filter and sort templates for APIs with their own convention. The **Probe** button probes the API again and offers to add any missing properties.

<figure markdown="span">
  ![API section of the workbench](../../docs_assets/images/ExternalEntities/ext-06-banco-api.png)
  <figcaption>The API section of the workbench, with the probe: the four properties already exist</figcaption>
</figure>

In each **property**'s form there are two fields that only make sense in an external object: **Is key** (the record's key in the API) and **External name** (the JSON path of the field when it has a different name in the API, for example `address.city`).

<figure markdown="span">
  ![Property form with Is key and External name](../../docs_assets/images/ExternalEntities/ext-07-propiedad.png)
  <figcaption>The `id` property: it is the key and its external name matches, so it is left empty</figcaption>
</figure>

The **views** of an external object have no SQL: you choose the columns and the order, and the API does the rest. The view manager does not offer "from SQL" for these objects.

---

## 4. Use the object

From then on it is just another object: it is placed on pages, given permissions, related to others. The list pages, sorts and filters through the API; the record view and the form read and write the record; the before and after insert, update and delete processes and auditing run the same way.

<figure markdown="span">
  ![List of an external object](../../docs_assets/images/ExternalEntities/ext-08-lista.png)
  <figcaption>The list of the newly created object, read from the API</figcaption>
</figure>

<figure markdown="span">
  ![Record view of an external object with a related list of another external object](../../docs_assets/images/ExternalEntities/ext-09-ficha.png)
  <figcaption>A record view with a related list: both objects are external (a customer and their orders)</figcaption>
</figure>

<figure markdown="span">
  ![Edit form of an external object](../../docs_assets/images/ExternalEntities/ext-11-edicion.png)
  <figcaption>The edit form: saving is an API call, and its error, if any, reaches the form</figcaption>
</figure>

!!! note "Dropdowns too"
    A property of any object can be a dropdown **over an external object**. The master (statuses, roles…) is registered as another external object and, in the property wizard, you choose the **DbCombo** type, the **Data Source Object** (the master object), its **Data Source View**, the **SQL Value Field** (the code) and the **SQL Display Field** (the text). Values are resolved on the server through the API; the record view and the view show the text, and the text search searches by it (see the table below).

---

## 5. What works and what doesn't

### Works

| Piece | Notes |
|---|---|
| Object list: pages, sorting, filters (`flx-filter`), text search, presets | Filters are translated to the API. The filter manager does not offer `multicombo`, `multitag` or `intersect-*`, which search inside a multi-valued field that no API knows how to split; if configured another way, they are rejected with their message. Filtering by fields of a related object is not supported either. A dropdown is filtered with **Combo**, which accepts several values. |
| Editable list | A saved row is an update in the API. |
| Record view, form, create, edit, delete | With before/after processes and auditing. |
| Related lists (by filter with `{{tokens}}` and by `Objects_Objects` relations), also external → external | |
| Tabs and easy info per object | Easy info resolves the record's tokens; its SQL runs over local tables. |
| Kanban | The board is a database object; the cards can be external; dragging a card updates in the API. |
| Scheduler, monthly and yearly calendar, basic timeline | With the object's date properties. Dragging or resizing updates in the API. |
| Dropdowns over an external object | Resolved on the server. The record view and the view show the value's text; a list in read mode shows the column as the view returns it, just like in a SQL object. |
| Excel export of the list and Excel reports **by view** | |
| **HTML** reports (print template) | |
| **Charts** (`flx-echart`, `flx-chart`) **without SQL** over an external object whose API already returns the chart rows | See [§6](#6-charts-from-an-endpoint). The chart filters go to the API. |
| Global search and the object's text search | A dropdown is searched by the text it shows, as in a SQL object: Flexygo first asks its source (another external object or the property's SQL) which codes have that text and requests them from the API. If more than 500 match, the list asks for a longer text; the global search searches that property by its code. |
| Security: object permissions, collection and record filters (visible, editable, deletable) | Collection filters go to the API; record filters are evaluated in memory. |
| Web API (`webapi/list`, `webapi/object`, `webapi/schema`) | The same paths. |
| AI assistants ([MCP](../AIAssistants/2Reference.md)): list, read a record, totals, breakdowns and dashboards | Rows are requested from the API as in a list (filters and security included) and totals and groupings are computed over them; with a service that does not filter, up to **Max rows in memory**. |
| Download to the **offline** app | The upload is done by each app's sync process, which has to be .NET to reach an API. |

### Rejected with a message

| Piece | Why |
|---|---|
| **SQL list** and **chart** whose SQL names the object's "table" | There is no table: the module says so and suggests an object list, view, kanban, scheduler or timeline. SQL that only uses the object's `{{tokens}}` over local tables does work. A chart **without SQL** reads the API: [§6](#6-charts-from-an-endpoint). |
| **Planner** with an external object in the first column or among the draggables | The first column is built with SQL. The cards can be external. |
| **DevExpress** and **Crystal** reports | They read the table with SQL. They are rejected before the print window opens. Use an HTML report or an Excel report by view. |
| Advanced timeline with group view; SQL feeds, maps, org charts, easy line/pie, sparklines, funnels | They are SQL modules, like the SQL list. |
| Additional tables of the object | Rejected when loading the configuration. |
| Filters that cannot be translated (`BETWEEN`, functions, comparison between fields, `LIKE` with inner wildcards in OData) | Rejected naming the piece; the API is never asked for less than the filter says. |

<figure markdown="span">
  ![Rejection message of a SQL list and a chart over an external object](../../docs_assets/images/ExternalEntities/ext-10-rechazo.png)
  <figcaption>A SQL list and a chart pointed at an external object: the message states the object, the module and the alternative</figcaption>
</figure>

The message reaches the screen as is, without being wrapped in a generic error. The same applies when **the API fails**: the notice states the call and its response (for example *External entity ExtComment: GET https://…/zz-not-found returned 404 Not Found*).

### Limits to keep in mind

- **APIs that do not filter** (`Filter mode = None`): Flexygo fetches all pages and filters in memory, up to the service's **Max rows in memory**. For large volumes, an API that filters is advisable.
- **APIs that cap the page size**: if the API returns fewer rows than requested, Flexygo completes the page with more calls.
- **Dates** travel in ISO format; the core and the calendars can also write them in the compact `yyyyMMdd` form, which is understood.

---

## 6. Charts from an endpoint

A chart (`flx-echart` or `flx-chart`) **without SQL** whose object is an **external collection** draws what the API returns. Flexygo does not aggregate anything: the endpoint already delivers the rows with the same contract the chart's SQL would have ([Charts with ECharts, §2.1](../Modules/ECharts.md)), and Flexygo only calls and draws.

### 6.1 What the endpoint must return

A list of flat rows. For example, sales and purchases by month, with a goal line:

```json
[
  { "label": "2026-01", "serie": "Ventas",  "value": 1250.5, "unit": "€", "goal": 1300, "goalLabel": "Objetivo" },
  { "label": "2026-01", "serie": "Compras", "value": 830 },
  { "label": "2026-02", "serie": "Ventas",  "value": 1410 },
  { "label": "2026-02", "serie": "Compras", "value": 905.25 }
]
```

| Field | What it is | |
|---|---|---|
| the one the module calls `Labels` (`label` in the example) | Category: X axis, slice, radius | mandatory |
| the one the module calls `Series` (`serie`) | Series name | mandatory |
| the one the module calls `Value` (`value`) | Numeric value | mandatory |
| `unit`, `goal`, `goalLabel` | Unit, goal line and its label (`flx-echart` only); the first row that carries them is used | optional |
| `backgroundColor`, `borderColor` | Row color | optional |

- If the API wraps the list (`{ "data": [ ... ] }`), it is set in the object's **Records path**, as in any list.
- **Labels** (`label`, `serie`, `goalLabel`) arrive from the API as is: if they need translating, the API translates them.
- The chart's **filters** (the module filter and the screen filters) travel to the API according to the service's **Filter mode**, just like in a list; one that cannot be translated is rejected with its message.

### 6.2 Setting it up in Flexygo

1. **The service**, as in [section 1](#1-register-the-service).
2. **The external object**, with the endpoint path as the list path and one property per field (`label`, `serie`, `value` and whichever optional ones it brings). The key can be any of them: the chart does not open records. The default view, with those fields.
3. **The module** `flx-echart`, with:

| Module field | Value |
|---|---|
| Object | the external object's **collection** |
| SQL | **empty**: this is what makes the chart read the API |
| `Series` / `Labels` / `Value` | the field names (`serie`, `label`, `value`) |
| Type, theme, `JsonOptions`, `Params` | as in any chart |

<figure markdown="span">
  ![Chart fed by an endpoint](../../docs_assets/images/ExternalEntities/ext-12-grafica-endpoint.png)
  <figcaption>A flx-echart without SQL over an external object: two series and two categories, exactly as the API returns them</figcaption>
</figure>

### 6.3 What it does not do

- **It does not aggregate**: if the API returns raw data (each order, each line), the chart would draw one bar per row. You need an endpoint that already returns the totals.
- **A single source**: `mixed` charts with several SQL statements separated by `;` remain SQL only.
- **The rows requested are all the ones the API returns** at once; if the service does not filter and Flexygo filters in memory, the service's **Max rows in memory** applies.
- A chart **with** SQL over an external object is still rejected as in [section 5](#5-what-works-and-what-doesnt).
