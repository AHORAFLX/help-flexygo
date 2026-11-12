# System Requirements

This page lists the requirements needed to install Flexygo in a Windows environment with IIS.

---

## :material-tools: Prerequisites

Before you begin, make sure your environment has:

- **IIS** installed and configured (the installer can install it if it isn't)
- **SQL Server 2017 or later** (can also optionally be installed from the installer)
- **.NET Hosting Bundle** (installed automatically by the installer if its absence is detected)
- **Administrator permissions** on the machine

---

## :material-server: Installing IIS and SQL Server

In advanced mode, the installer offers automatic options to:

- Install **IIS** if it is not present on the system.
- Install **SQL Server** Developer Edition if the user requests it (ideal for test environments or local installations).

---

## :material-wifi: WebSocket

For Flexygo to work correctly, you must enable **WebSocket** in the Windows features:

Go to **Control Panel → Programs → Turn Windows features on or off** and make sure **WebSocket** is enabled under the IIS features.

---

## :material-database: SQL Server

!!! danger "Flexygo 10 requires SQL Server 2017 or later"
    Starting with Flexygo 10, the minimum SQL Server version is **SQL Server 2017**. The application's databases must be on a SQL Server 2017 or later server; if the server is older, upgrade it before installing, updating or migrating the application.

---

## :material-chart-line: Sizing guide

!!! tip "To fine-tune your own case"
    Use the resource calculator of the application’s health panel (**Health and resources → Resource calculator**): it asks about the operating system, several applications, the SQL Server edition and what already lives on that server, and gives its recommendations. The figures on this page come from it, with its same code.

Figures for **normal use** (lists, forms, short processes and small reports), about **10 GB of data** and Windows Server.

- **People at the same time** are the ones working in the same minute, not the users with an account (if you only know the users, about one in five; an estimate, not measured).
- **vCPU:** the CPU per request is **measured** in load tests of Flexygo; the step to server vCPU (×1.3) is **estimated**. Reference processor: Intel Xeon or AMD EPYC from 2016 onwards, at 2.2 GHz or more.
- **Memory:** the **whole server’s**: the system, Flexygo with margin and SQL Server with its cap, rounded up to a usual size and expandable. What was measured is below it.
- **Disk:** 100 GB or more for the system and Flexygo, plus the data, the documents and the backups (the calculator gives 105 GB for the application and 120 GB for SQL Server with 10 GB of data, without backups).

### Everything on one server

The application (IIS) and SQL Server on the same machine. From 100 people on, SQL Server is better apart: they compete for CPU and disk.

| People at the same time | vCPU | Memory | `max server memory` |
|---|---|---|---|
| 5 | 4 vCPU or more | 16 GB | 8 GB |
| 20 | 4 vCPU or more | 16 GB | 8 GB |
| 50 | 4 vCPU or more | 24 GB | 12 GB |
| 100 | 5 vCPU or more | 32 GB | 18 GB |
| 200 | 7 vCPU or more | 48 GB | 24 GB |

### The application on one server and SQL Server on another

| People at the same time | Application (IIS): vCPU | Memory | SQL Server: vCPU | Memory | `max server memory` |
|---|---|---|---|---|---|
| 5 | 2 vCPU or more | 8 GB | 2 vCPU or more | 12 GB | 8 GB |
| 20 | 2 vCPU or more | 8 GB | 2 vCPU or more | 12 GB | 8 GB |
| 50 | 2 vCPU or more | 8 GB | 2 vCPU or more | 16 GB | 12 GB |
| 100 | 3 vCPU or more | 12 GB | 2 vCPU or more | 24 GB | 18 GB |
| 200 | 5 vCPU or more | 16 GB | 2 vCPU or more | 32 GB | 24 GB |

### Frontend, backend and SQL Server, each on its own server

Only for security or network reasons: the frontend needs little. The frontend’s disk is the system’s and Flexygo’s, 100 GB.

| People at the same time | Frontend: vCPU | Memory | Backend: vCPU | Memory | SQL Server: vCPU | Memory | `max server memory` |
|---|---|---|---|---|---|---|---|
| 5 | 2 vCPU or more | 8 GB | 2 vCPU or more | 8 GB | 2 vCPU or more | 12 GB | 8 GB |
| 20 | 2 vCPU or more | 8 GB | 2 vCPU or more | 8 GB | 2 vCPU or more | 12 GB | 8 GB |
| 50 | 2 vCPU or more | 8 GB | 2 vCPU or more | 8 GB | 2 vCPU or more | 16 GB | 12 GB |
| 100 | 2 vCPU or more | 8 GB | 3 vCPU or more | 8 GB | 2 vCPU or more | 24 GB | 18 GB |
| 200 | 2 vCPU or more | 8 GB | 5 vCPU or more | 12 GB | 2 vCPU or more | 32 GB | 24 GB |

### SQL Server shared with other databases

As an example, the SQL Server also holds other databases that add up to 40 GB and use 1 core at their busiest hour; its memory grows with them. In this example, the calculator gives 170 GB of disk for SQL Server (100 GB plus about 70 GB of data), without backups.

| People at the same time | Application (IIS): vCPU | Memory | SQL Server: vCPU | Memory | `max server memory` |
|---|---|---|---|---|---|
| 5 | 2 vCPU or more | 8 GB | 3 vCPU or more | 32 GB | 24 GB |
| 20 | 2 vCPU or more | 8 GB | 3 vCPU or more | 32 GB | 24 GB |
| 50 | 2 vCPU or more | 8 GB | 3 vCPU or more | 32 GB | 24 GB |
| 100 | 3 vCPU or more | 12 GB | 3 vCPU or more | 32 GB | 24 GB |
| 200 | 5 vCPU or more | 16 GB | 4 vCPU or more | 32 GB | 24 GB |

### Operating system

- **Windows Server 2016-2025** (with desktop or Server Core): the recommended one. Server Core leaves somewhat more memory free.
- **Windows 10/11:** only for tests or very few people. IIS on a Windows client runs at most 10 requests at once (3 on Home) and the rest wait ([Microsoft](https://learn.microsoft.com/iis/troubleshoot/request-restrictions)).
- **Linux and Docker:** not measured; a cautious estimate in its own part, below.

### Most important recommendations

1. **Always set SQL Server’s memory cap** (`max server memory`) to the value of the tables: by default it has no limit and ends up taking the memory of the system and of IIS ([Microsoft](https://learn.microsoft.com/sql/database-engine/configure-windows/server-memory-server-configuration-options)).
2. **From 100 people on, SQL Server on its own server:** on the same machine they compete for CPU and disk.
3. **Exclude from the antivirus** SQL Server’s data, log and backup files and `sqlservr.exe` ([Microsoft](https://learn.microsoft.com/troubleshoot/sql/database-engine/security/antivirus-and-sql-server)).
4. **In IIS, keep the application pool from stopping** when idle (by default, after 20 minutes) and recycle it at a fixed time outside working hours instead of every 29 hours.

!!! warning "Heavy use"
    With long processes, large Excel exports or reports that read months of data, SQL Server needs much more CPU: with the application and SQL Server apart, 4 vCPU for 100 people and 8 vCPU for 200. Text search in lists of millions of rows is slow even with a few people, and more hardware does not fix it.

### Linux and Docker

!!! warning "Not measured"
    The figures in this part are a **cautious estimate**: the load tests were run on Windows with IIS. They will be measured with the same load test kit; until then, do not count on saving anything.

- **vCPU:** the same as on Windows, in the tables above.
- **Memory:** Linux reserves 2 GB for the system instead of 4, but each container gets its own limit with margin: a container that runs out of memory is stopped. .NET takes 75 % of its container’s limit for itself.
- **SQL Server in a container** needs its persistent volumes (`flx-db-data`, `flx-db-log` and `flx-db-secrets` in `docker-compose.yml`; without them, the database is lost when the container is recreated) and two limits: the container’s and `MSSQL_MEMORY_LIMIT_MB`, below it. With both equal, or without a container limit, the system may kill SQL Server. Turn on swap on the host as a safety net.

| People at the same time | flx-frontend | flx-backend | flx-db (SQL Server) | `MSSQL_MEMORY_LIMIT_MB` | `max server memory` | Host with the three | Host with frontend and backend only |
|---|---|---|---|---|---|---|---|
| 5 | 2 GB, 2 CPU | 4 GB, 2 CPU | 12 GB, 2 CPU | 10240 | 7 GB | 24 GB, 6 vCPU | 8 GB, 4 vCPU |
| 20 | 2 GB, 2 CPU | 4 GB, 2 CPU | 12 GB, 2 CPU | 10240 | 7 GB | 24 GB, 6 vCPU | 8 GB, 4 vCPU |
| 50 | 2 GB, 2 CPU | 4 GB, 2 CPU | 16 GB, 2 CPU | 13312 | 11 GB | 24 GB, 6 vCPU | 8 GB, 4 vCPU |
| 100 | 2 GB, 2 CPU | 4 GB, 3 CPU | 24 GB, 2 CPU | 20480 | 17 GB | 32 GB, 7 vCPU | 8 GB, 5 vCPU |
| 200 | 3 GB, 2 CPU | 6 GB, 5 CPU | 32 GB, 2 CPU | 27648 | 23 GB | 48 GB, 9 vCPU | 12 GB, 7 vCPU |

For 100 people, in `docker-compose.yml`:

```yaml
  flx-frontend:
    mem_limit: 2g
    cpus: 2
  flx-backend:
    mem_limit: 4g
    cpus: 3
  flx-db:
    mem_limit: 24g
    cpus: 2
    environment:
      MSSQL_MEMORY_LIMIT_MB: "20480"
```

!!! tip "To fine-tune your own case"
    Use the resource calculator of the application’s health panel (**Health and resources → Resource calculator**): it asks about the operating system, several applications, the SQL Server edition and what already lives on that server, and gives its recommendations. The figures on this page come from it, with its same code.

