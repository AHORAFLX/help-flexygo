# Health panel <span class="fh-version-tag" title="Available since version 10">10.0+</span>

**Health and resources** brings together the state of the installation on one screen: the machine, the Backend and Frontend processes, SQL Server, each connected database and how much space the history takes up. It only reports what it has been able to measure, and when something is wrong, why it matters.

<figure markdown="span">
  ![The health panel in skin2026](../../docs_assets/images/HealthPanel/panel.png)
  <figcaption>The panel with one alarm (the database disk almost full) and four warnings, each with its explanation below</figcaption>
</figure>

---

## 1. Where it is and who sees it

- In the **control panel**, **Environment** area → **Health and resources**.
- From the administrator home screen, the **Health** card → **Health and resources** ([Administrator home screen](AdminDashboard.md)).

It is an **administrators'** screen: the data is only served to a user with the administrator role. The control panel entry is in skin2026.

---

## 2. What you see

At the top, the summary: how many **alarms** and **warnings** there are, how many **connected users**, whether Frontend, Backend and SQL Server are on the same machine or on several, and the **Alert history** link (4). The panel refreshes itself every 30 seconds, and **Refresh** does it immediately.

Below, one card per component. Each row gives its figure and, if it is wrong, carries the **Alarm** or **Warning** mark and a line explaining what happens if it is left as is.

| Card | What it says |
|---|---|
| **The machine** | Processors, free memory and each disk, with how much free space is left. If SQL Server is on that machine, the disk holding the database files is flagged: if it fills up, the database stops |
| **Backend** / **Frontend** | The process memory and what share of the machine it is, the CPU as an **average over the last few seconds** (it says how many), threads and handles, and how long it has been running. The Frontend also says how many **connected users** there are and how many open connections (a user with two tabs is two connections) |
| **Configuration** | The Frontend address the Backend uses and the mail account, with a warning if either does not respond |
| **SQL Server** | Edition, memory in use and how much of it is in RAM (not paged), how long it has been running, connections to the server (to this database and from how many machines) and **who makes the backups**, according to the server's own history |
| **Configuration** / **Data** | One per connected database: whether it responds, the size of the data and of the transaction log, the recovery model, what the log is waiting for before it can be reused, the last full backup and how it grows |
| **History and retention** | How much space the history tables take compared to the real tables, and how many cleanup jobs are enabled |

At the bottom there may be a note with things worth knowing even if they are not an alarm, for example which cleanup jobs are disabled.

!!! note "If permissions are missing, it says so"
    Part of the SQL Server data (memory, CPU, connections and disk space) requires the **VIEW SERVER STATE** server permission for the user the application uses to log in to SQL Server. If it does not have it, the panel does not make up those figures or set them to zero: it says so, naming the missing permission. Each database's data is read with the normal permissions on it.

In **skin2026** the panel only flags what needs looking at —alarms and warnings—: what is correct carries no mark, because when nothing shows up, everything is fine. In flexy2022 it also counts what is correct and does not have the **Alert history** link.

---

## 3. Warnings arrive on their own

You don't need to have the panel open. Every quarter of an hour the installation checks the same things the panel shows, and for each new alarm or warning:

- it **notifies administrators in the notification bell**, with the title (what and where) and the reason; clicking it opens the panel;
- if it is an **alarm** and the application mail is configured, it **also sends an email** to each administrator with an email address.

Each problem notifies once: it is not repeated every quarter of an hour while it persists.

---

## 4. The alert history

**Alert history** opens the notification list filtered to health notifications: every alarm and warning that has been raised, with its reason and when.

<figure markdown="span">
  ![The health alert history](../../docs_assets/images/HealthPanel/historial.png)
  <figcaption>Alert history: the installation's health alarms and warnings, with pending ones highlighted</figcaption>
</figure>
