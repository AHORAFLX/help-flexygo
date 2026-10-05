# Administrator home screen (skin2026) <span class="fh-version-tag" title="Available since version 10">10.0+</span>

In skin2026 the administrator lands on a home screen of their own: twelve cards that show at a glance how the application is doing —errors, scheduled jobs, users, version, licence, health, origin, activity— and take you with one click to where you need to look.

<figure markdown="span">
  ![The administrator home screen at 1920 px](../../docs_assets/images/AdminDashboard/escritorio.png)
  <figcaption>The administrator home screen in light skin2026, at 1920 px</figcaption>
</figure>

---

## 1. Who sees it

It is the home page of the **Administrator 2026** profile (`2026admin`), and only **administrators** can open it: any other user who requests it by name is denied. The **User 2026** profile (`2026`) starts on whatever page the administrator sets for it.

!!! note "When updating"
    An installation that already had users with the `2026` profile stops sending them to this screen. Its administrator has to switch to the **Administrator 2026** profile to have it as their home page.

---

## 2. The cards

Each card gives its figure and, at the bottom, the links to what lies behind it.

| Card | What it says | Links |
|---|---|---|
| **Errors** | Errors in the period, how many distinct causes and how many users they affect. The **24 h / 7 d / 30 d** toggle changes the period and is remembered | Sentinel |
| **Jobs** | Scheduled jobs failed in 7 days, how many are enabled out of how many, which is next and when, and the slow ones in 24 h | Jobs, Failed runs, Slow runs |
| **Users** | Users, how many have logged in today, rejected logins in 7 days and locked users | Users, Roles, Security, Rejected logins |
| **Modules not placed** | Modules not on any page, out of how many there are, with their bar, and pages without modules | Modules, Empty pages |
| **Version** | The installed version and, if there is one, the new version available | What is new, Update |
| **Licence** | The licence status, its type, the users and the expiry date | Licence |
| **Health** | The worst state of the [health panel](HealthPanel.md) (alarm, warning or correct), how many notes the panel has, free memory, the fullest disk and how SQL Server is doing | Health and resources |
| **Origin** | The active origin and how many objects, pages, modules and processes it has, each figure with its link | Change origin, Generate scripts |
| **Latest logins** | The last five logins: who, when, from where and with which browser | See all |
| **Activity** | Actions and errors for each day of the last two weeks, in a chart | |
| **Recently changed** | The last five configuration changes (objects, pages, modules…): when, of what type, which one and who | See all |
| **Integrations** | The WebAPI (calls in 24 h, average time, authorized applications, exposed objects and processes) and the offline app (synchronizations in 24 h, failed and unfinished ones, active applications and the latest one) | Configuration, Logs · Offline app, Synchronizations |

---

## 3. Each administrator arranges it to their liking

The page lets each user **move the cards**, without enabling anything:

- **Move**: grab a card by its header and drop it somewhere else; the others rearrange themselves. It is saved on drop, **for that user**: the others keep seeing their own order.
- **Pin**: the pin in the header (*Pin this module here*) keeps a card in place; the others move around it. It is released with the same pin.
- **Reset**: as soon as something has been moved, *Put the modules back as the administrator arranged them* appears at the bottom of the page, which restores the original layout.

There is no separate edit mode: the screen is always ready for dragging.

---

## 4. On narrow screens and on mobile

The desktop layout needs room. Below **1280 px** wide, the cards regroup so that none is narrower than half the screen, and on mobile they stack one below the other, at full width. At those sizes **dragging is not available** and the pins are not shown, but the cards appear **in the order the user saved**.

The change happens instantly: when the window is narrowed the screen reorganizes without reloading, and when it is widened again dragging is possible once more.

<figure markdown="span">
  ![The home screen on a mobile phone](../../docs_assets/images/AdminDashboard/movil.png){ width="320" }
  <figcaption>The same screen on a mobile phone (390 px): stacked cards, no pins</figcaption>
</figure>
