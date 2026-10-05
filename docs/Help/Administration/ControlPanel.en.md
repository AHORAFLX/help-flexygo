# Control panel <span class="fh-version-tag" title="Available since version 10">10.0+</span>

In skin2026 the control panel is a single screen with everything an administrator needs to maintain the application: which origin they are working in, how much there is of each thing, the configuration tools grouped by area, the maintenance actions and the latest things they have touched.

<figure markdown="span">
  ![The control panel in skin2026](../../docs_assets/images/ControlPanel/panel.png)
  <figcaption>The control panel: status and shortcuts at the top, actions, areas with their tools and, on the right, recent work</figcaption>
</figure>

---

## 1. Where it is

In the left rail, under **Administration** → **Control panel**. The entry is visible with **development mode** turned on (**Develop Mode**, at the bottom of the same rail).

---

## 2. What you see

### Status

- **Active origin**: the origin you are working in (whatever is created gets this origin, and it is what *Generate scripts* and *Export as project* export).
- **Licence** → **View status**: opens the licence status.

### Shortcuts

A row of shortcuts to the most used lists, each with its figure:

| Shortcut | Figure |
|---|---|
| **Objects** (with **+** to create one with the wizard), **Pages**, **Modules**, **Processes** | Those of the active origin / the total. `555/578` in Modules: 555 belong to the active origin out of 578 in total |
| **No list template** | Objects of the active origin without a list template / objects of the active origin |
| **Users**, **Roles**, **Templates**, **App offline** | How many there are |
| **AI agents** | No figure: takes you to the configured AI agents |
| **WebAPI** | **on** (in green) if the installation's WebAPI is enabled, **off** (neutral) if not. Takes you to its configuration |

### Actions

<figure markdown="span">
  ![The control panel actions](../../docs_assets/images/ControlPanel/acciones.png)
  <figcaption>The maintenance actions</figcaption>
</figure>

| Action | What it does |
|---|---|
| **Reload cache** | Reads the system configuration again |
| **Convert to dev database** | Converts the database into a development one: deletes the licence and locks users. It carries the warning triangle |
| **Preview** | Shows the page as a phone or tablet would see it, and rotates it |
| **Minify JS/CSS** | Toggle: serves compressed files |
| **Diagnostics** | Environment check |
| **Table changes** | What has changed in the data model |
| **Generate scripts** | The `MERGE` scripts of the active origin |
| **Export as project** | Converts the application into a project of the product template ([Export the application as a project](../../2ProductDevelopment/8ExportProject/2Reference.md)) |
| **Translate** | Translates the database texts into another language |

### Areas

On the left, the configuration areas —**Pages and modules**, **Objects**, **Security**, **Logic and rules**, **Reports**, **Environment**, **Other tools**, **Offline app**—, each with the number of tools it contains. The number counts **what the user can see**: with different security, a different number. When you choose an area, its tools appear to its right; **Environment** contains, for example, the [health panel](HealthPanel.md).

### Your recent work

On the right, the latest records the user has touched: which one, of what type (user, view, page…), what they did (creation, change, deletion, process) and when.
