# What it builds on Flexygo 10

With a project on **Flexygo 10**, the MCP server uses what this version brings: ECharts charts, KPI cards, rules on save, live notices, REST objects, brand and account screens…

## ECharts charts and themes

On Flexygo 10 every chart is **ECharts**: ten types (bars, lines, doughnut, radar…). It can also:

- put the total in the centre of a doughnut;
- add a target line;
- put the unit after every figure;
- add a footer line with the change ("+12% vs last month").

Figures follow the user's language format (`35,000` in English, `35.000` in Spanish).

If you ask for no theme, the chart uses Flexygo 10's default one. It can also create a **theme of the product's own**, with its colours and the shapes of one of the factory themes, without touching the factory themes, which every application shares.

<figure markdown="span">
  ![The same bar chart with the four factory themes and a theme of its own](../../docs_assets/images/CoreProductDevelopment/MCP/flx10EChartThemes.png)
  <figcaption>The same chart with the factory themes and, on the right, a theme of its own created by the agent</figcaption>
</figure>

## KPI cards

KPI modules (*easy info*) are drawn as **cards**. A card can carry:

- the change and the trend;
- a target with its progress bar;
- a small chart of the evolution;
- action links;
- a period switch (24 h, 7 days, 30 days), which remembers the user's choice.

The colour follows the skin and dark mode.

<figure markdown="span">
  ![Card with the figure, the target, the progress bar, the change and the evolution](../../docs_assets/images/CoreProductDevelopment/MCP/flx10StatCard.png)
  <figcaption>A card with a target, the change and the evolution</figcaption>
</figure>

## Rules on save and decisions

For what must happen **when a record is saved**, the agent creates an **object rule** instead of a scheduled job. The rule fires on insert, update or delete, and can carry conditions:

- the record matches a condition;
- a column has changed;
- a column has changed to a given value.

What it does can be:

- send a notice to the bell of a role or a user;
- send an email;
- create or update records;
- run a process;
- ask for a **decision**: a task with options, a deadline and escalation, approved or rejected from the bell or from the record.

<figure markdown="span">
  ![A pending decision on the record and in the bell](../../docs_assets/images/CoreProductDevelopment/MCP/flx10RuleDecision.png)
  <figcaption>A rule asks to approve notes over €1,000: the decision shows on the record and in the bell</figcaption>
</figure>

## Live notices

The agent can turn on an object's **live notices**, so connected users see the records others save without reloading. Object security, per-user filters and hidden properties are respected.

What reaches each module, in the 2026 skin:

| Module | Inserts | Updates and deletes |
|---|---|---|
| List | Yes: a "Show them" strip on the module bar | No |
| Planner | Yes | No |
| Kanban | Yes: it draws the card | No |
| Calendar | Yes | Yes |
| Timeline | No | No |
| Another page | Yes: a notice at the bottom right | No |

Live notices are not added to the bell. To notify in the bell, use a rule on save.

<figure markdown="span">
  ![List with the strip "1 new record · By admin" and the Show them and Dismiss buttons](../../docs_assets/images/CoreProductDevelopment/MCP/flx10LiveNoticeList.png)
  <figcaption>Another user has added a work order: the list says so and shows it on "Show them"</figcaption>
</figure>

## REST objects

An object can keep its records in another system, behind a REST API. The agent registers the service, with its address, authentication and paging, and then creates the objects that read from it. The service's key is never repeated in the answers.

## Brand, account screens and maintenance

The agent places the brand files with the names Flexygo 10 expects:

- the logo and its variant for dark backgrounds;
- the symbol for the folded sidebar;
- the browser icon;
- the image of the account screens and the one of the maintenance page.

It also styles the sign-in and the maintenance page. It never turns maintenance mode on or off: an administrator does that.

<figure markdown="span">
  ![The product's logo in the sidebar, light and dark](../../docs_assets/images/CoreProductDevelopment/MCP/flx10Brand.png)
  <figcaption>The product's logo in the sidebar, light and dark</figcaption>
</figure>

## What the platform already does well stays

A design reference (a mock-up, a screenshot, a screen from another tool) may lack something Flexygo 10 already does well: the top bar with the notices bell and the Ctrl+K search, the control panel or the user menu. **The reference leaving it out is no reason to remove it**: it is the reference that is wrong.

- The agent never removes or hides a working platform element on its own. It only does so if you decide it, and the decision is recorded.
- When comparing with the reference, that difference closes as "the reference is wrong": the platform's element stays, with a note saying which one.
- Putting the brand in the side panel does not remove the top bar.
- After every block, the quality review checks that the top bar is still there with its bell, that Ctrl+K opens the search and finds a record, and that every menu option has its label. Verification looks at every screen in light and in dark, in the user's language.

<figure markdown="span">
  ![On the left, the screen designed in Stitch; on the right, the one built on Flexygo 10](../../docs_assets/images/CoreProductDevelopment/MCP/flx10StitchVsBuilt.png)
  <figcaption>The Stitch reference and the built screen: it follows its design and keeps the top bar with the Ctrl+K search and the bell</figcaption>
</figure>

## More of Flexygo 10

- **Process security with a condition**: a process allowed or denied to a role only when a condition holds.
- **Tabs in forms**: a long form is split into tabs.
- **Toolbar buttons**: the agent marks each module's main button and decides which ones fold into the **…** menu.
- **Calendar**: working hours, overlaps, the "now" line and the rest of the Flexygo 10 calendar options.
- **New settings**, such as hiding the news or allowing users to sign up.

## Search with Ctrl+K

In `/flx-discuss`, once the data model is settled, the agent asks **one** question: which collections the **Ctrl+K** search should find, and by which fields. It proposes three to five collections with two or three fields each, and you add, drop or say none. Each user only sees the groups of the objects they may see. The names of the groups and objects show in English even when the user works in another language: it is a platform limit.

<figure markdown="span">
  ![The Ctrl+K search finds a customer when typing "cole"](../../docs_assets/images/CoreProductDevelopment/MCP/flx10SearchPalette.png)
  <figcaption>The search finds a customer by name; the group and the object show in English</figcaption>
</figure>

## Screen texts in English, translated

Labels, buttons, tabs, titles, menu options and guided tour steps are written in **English**, the original the platform translates from. In the same step, the agent translates them into the project's language and every other active language. That way a user who works in English never sees texts in Spanish.
