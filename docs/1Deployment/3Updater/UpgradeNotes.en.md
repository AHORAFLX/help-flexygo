# What to check when updating <span class="fh-version-tag" title="Available since version 10">10.0+</span>

Version 10 brings many new features that change nothing of what you already had: they are in the release notes. This page gathers the opposite: **what already existed and now works differently**, and what is worth checking before or right after updating an application.

It is ordered by who notices it. If you only have a minute, start with the checklist.

## Checklist

| | Check | If… |
|---|---|---|
| ☐ | [SQL Server 2022 or later](#3-configuration-and-deployment) | the SQL server is older than SQL Server 2022 |
| ☐ | [Process calls through the WebAPI](#1-integrations-through-the-webapi) | you have integrations that run processes with `/webapi/exec` |
| ☐ | [Columns an integration reads](#only-the-defined-properties-are-served) | an integration reads columns that are not properties of the object |
| ☐ | [Reverse proxy and IP lockout](#ip-lockout-after-failed-token-attempts) | the application is behind a proxy or a load balancer |
| ☐ | [Your own administration pages](#node-security-and-page-security) | you created pages that only an administrator should see |
| ☐ | [Your own style sheets, interface and logo](#4-moving-a-profile-from-flexy2022-to-skin2026) | you are going to move users from flexy2022 to skin2026 |
| ☐ | [Your own code on calendars, forms or icons](#5-for-product-developers) | your product has custom JavaScript or CSS |

---

## 1. Integrations through the WebAPI

### An object's processes are called with their object

A process defined on an object always runs **through that object**: `POST /webapi/exec/{Process}/{Object}/{id}`, or `POST /webapi/exec/{Process}/{Object}?filter=…` for the collection. Called without the object, it answers `400`; so does a collection without `filter`. Processes that hang from no object are called as before.

Refusals now have their own status (`403` for the role, `404` if the record does not exist, `409` if its state does not allow it) instead of a `500` or a `200` with the error inside. The details and the "before and now" table are in [WebAPI security](../../Help/Programming/WebAPISecurity.md).

!!! warning "If you generate the client from the OpenAPI"
    Each token's OpenAPI only announces what its role can see or run, paging starts at 0 and the operations have their own names. **Regenerate the client** after updating.

### Only the defined properties are served

The **`WebAPI_OnlyDefinedProperties`** setting comes **on** (also when it is missing from the settings table): the WebAPI and the MCP server return only the object's **defined properties** and its keys, in lists, records, insert schemas and the OpenAPI. Before, they returned every column of the table, property or not.

If an integration reads a column that is not a property, define it as a property of the object or, if there is no other way, set the option to `false`.

### IP lockout after failed token attempts

**50 failed `POST /token` attempts in 60 seconds** from the same address lock it out, **in the whole application** (sign-in page included) and **with no end date**: it stays locked until an administrator removes the row in **IP Lockouts**. A user that does not exist, a wrong password and an invalid `refresh_token` count. Every failure is written to the WebAPI log.

| Setting | Default | `0` |
|---|---|---|
| `WebAPI_MaxFailedTokenAttempts` | `50` | turns the lockout off |
| `WebAPI_FailedTokenInterval` | `60` (seconds) | turns the lockout off |

!!! danger "Behind a proxy, declare the proxy"
    If the application is behind a reverse proxy or a load balancer that is not in `ForwardedHeaders:KnownProxies`, every request arrives with **the proxy's IP**: an integration with an expired password locks out **every user**. Configure it as explained in [Deployment behind a reverse proxy](../6ReverseProxy/index.md).

    And if the Frontend and the Backend are on different machines, both need the same `JwtSettings:SecretKey`: the Frontend uses it to sign the client's real IP.

### Other changes an integrator notices

- **Validated filters.** A `filter` with comments (`--`), `;` or unclosed brackets or quotes answers `400`. A role's collection filter always applies to the rows; if it cannot be applied, the request fails instead of being served unfiltered.
- **Dates.** Inserts and edits through the WebAPI read and write the date as it is stored in the database, with no time-zone conversion. `GET /webapi/context` gives the server's time zone (`serverTimeZone`, `serverUtcOffset`). Check the clients that compensated for the time zone.
- ***OnChange* processes.** On an insert through the WebAPI, a property's change process runs even if the property has no dependents.
- **Licence.** The WebAPI's data operations require a valid licence.

---

## 2. Security and access

### Node security and page security

The security of a menu **node** only decides whether **the shortcut is shown**: the page it opens can still be opened by typing its address. For one of your administration pages to be seen by nobody else, set **page security** as well (`allUsers` without permission). Administrators and designers bypass that check.

### Screens for administrators only

**Change profile** in the user menu is only shown to administrators, and develop mode only to designer roles. The global search over system objects (objects, pages, processes…) is only offered to administrators and designers: what a regular user should search for is configured in their searches.

### Process security

An object-and-process rule on an object the process is **not linked to** stops applying: the process's general rule is used.

The **general** rules are new: they are set per process (by role, user or faculty) and also protect the processes that hang from no object. Without general rules, each process behaves as before.

### Other changes

- **Role and permission changes** apply within a few seconds, without the user signing in again.
- **The after-sign-in process** (`AfterLoginProcess`) runs only once and, if it fails, the user still gets in and sees the error. If you relied on it to stop the sign-in, review it.
- **Account lockout**: it is configured with `UserLockoutMaxFailedAttempts` and `UserLockoutMinutes` (5 and 5). The user's `LockoutEndDateUtc` property is renamed **`LockoutEnd`**: change it in your templates or code.
- **Live notices of inserts and changes**: an object with `InsertTriggerEvent`, `UpdateTriggerEvent` or `DeleteTriggerEvent` turned on **starts notifying**; before, those columns had no effect.
- **A module security condition that fails** no longer leaves the page blank: the module is hidden and the error is written to the log.

---

## 3. Configuration and deployment

| What | Now | What to do |
|---|---|---|
| SQL server | The minimum requirement is **SQL Server 2022** or later | Update the SQL server before updating the application. See [System requirements](../SystemRequirements.md) |
| Configuration file | `appsettings.{Environment}.json` is loaded; `appsettings.Development.json` is not published | Check which file holds your configuration |
| Updater packages | In `C:\ProgramData\Flexygo\Packages` (`FLEXYGO_PACKAGES_ROOT` wins if it exists) | Permissions and space on the new path |
| Maintenance mode | It is turned on from the application's panel and keeps everyone out except the administrator who turned it on. The system processes `EnableMaintenanceMode` and `DisableMaintenanceMode` are withdrawn | If you called them from a button or an integration, use the panel |
| Upload size | Up to 2 GB in Kestrel, IIS and `web.config` | Check the proxy's limit, if there is one |
| Static resources | Compressed and with long caching; the address changes with the content | Check the cache of a CDN or proxy |
| News on the sign-in page | They are fetched from an external service | Without internet access, set `DisableNews` to `true` |

**New scheduled tasks.** The update adds three tasks that start on their own:

- **Webhook sending** (`flxWebhookDispatcher`, every minute): sends the pending notices to external systems and retries those that failed. It only does something if you have set up outbound webhooks.
- **Task escalation** (`flxTaskEscalation`, every 5 minutes): approval tasks that go past their deadline are escalated to the person named; if they name no one, they expire.
- **Health watch** (`HealthWatch`, every 15 minutes): checks the same as the health panel (machine, SQL Server, databases, backups, Frontend…) and, if something is in alarm or warning, notifies the administrators in the bell. Alarms also by email, if there is an email account configured. Each notice is sent only once and is not repeated for a week.

Check that the email account is configured if you want to receive the alarms.

---

## 4. Moving a profile from flexy2022 to skin2026

Updating **does not change anyone's skin**: every user keeps their profile. **New installations** start in skin2026, and a new user inherits the skin of whoever creates them. When you decide to move a profile to skin2026, check this:

1. **Your own style sheets.** The sheets you registered for the flexy2022 skin in **Skins_Css** are not loaded in skin2026, and there is no warning. Whatever must be seen in both skins goes to **Plugins** as CSS (type `1`).
2. **Your own interface.** skin2026 uses its own menus (*Main Menu 2026*, *Work Area 2026*) and has no logo or script of its own. The easy way is to create a 2026 interface copied from the factory one and move your **nodes**, your **logo**, your **script** (the global functions your templates call) and your **style** to it.
3. **Logo.** With the sidebar folded, skin2026 looks for a `<name>-mini.<ext>` next to your logo; if it does not find one, it uses the logo scaled down. The dark variant is looked for as `<name>-dark.<ext>`.
4. **Nested CSS.** A sheet of yours with nesting (`&`) works, but it is served **unminified**. If weight matters, write it without nesting.

### What also changes in flexy2022

Some pieces were fixed in both skins and now bring out of the box what you may already have done by hand in your sheets. If you see a duplicated border or effect, **remove your patch**:

| Piece | What changed |
|---|---|
| Easy info | Common card structure; the card is asked for with `mode="card"` in the module parameters, and values are shown as text (the HTML returned by the SQL is no longer interpreted). See [Easy info](../../Help/Modules/EasyInfo.md#0-when-updating-a-product) |
| Calendars | FullCalendar 6, with a look similar to the previous one. See [Calendars with FullCalendar 6](../../Help/Modules/SchedulerCalendarV10.md) |
| Lists | Group by any column; the actions column stays in front |
| Default record views | At the top, the pending decision card, only when the record has one |

!!! danger "Easy info: the HTML returned by the SQL is no longer interpreted"
    An easy info's values are written as **text**. If the SQL of an existing easy info returns HTML (tags, styles, icons), the code will now show instead of the formatting, and the card can break. Check your easy info SQL before updating: what changes and what to do, in [Easy info · When updating a product](../../Help/Modules/EasyInfo.md#0-when-updating-a-product).

---

## 5. For product developers

- **Calendars**: they move to FullCalendar 6. What changes and how to migrate your own code, with examples, in [Calendars with FullCalendar 6](../../Help/Modules/SchedulerCalendarV10.md#0-when-updating-a-product).
- **Charts:** the ECharts module is the recommended one from now on. Move your charts to it following [Charts with ECharts](../../Help/Modules/ECharts.md#0-when-updating-a-product); the old module may be withdrawn in a future version.

| What | Before | Now | What to do |
|---|---|---|---|
| Forms (only your own code that touches their grid) | gridstack 0.2.5 (`data-gs-*`, `$(…).gridstack()`) | gridstack 12 (`gs-x`, `gs-y`, `gs-w`, `gs-h`, `GridStack.init`). Configured forms adapt on their own; below 768 px they go to one column | If your code touches the form's grid, look for `data-gs-`, `.gridstack(` and `gridstack-flexygo` |
| Font Awesome | 4.5 | 7 with v4 compatibility: `fa fa-*` still works | Check the CSS that adjusts icon widths (they now have a fixed width) |
| `flexygo.debug` | Reached everyone | Designers only | Check that it exists before using it: `if (flexygo.debug && flexygo.debug.isDevelopMode())` |

---

## 6. Export as project

**Export as project** (new, administrators only) generates from the installed application a zip with everything needed to keep developing it as a project: configuration, static files and DLLs always travel.

- **`custom` folder:** you choose which folders and files are included, seeing the size of each one. The document and image repositories, the folders the application writes while it runs and anything over 100 MB come unticked to start with.
- **Disk space:** the zip is written to the server's disk, and before that it is checked that there is room.

Check the `custom` selection before clicking **Export**. The complete guide is in [Export the application as a project](../../2ProductDevelopment/8ExportProject/2Reference.md).
