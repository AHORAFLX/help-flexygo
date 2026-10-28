# System Requirements

This page lists the requirements needed to install Flexygo in a Windows environment with IIS.

---

## :material-tools: Prerequisites

Before you begin, make sure your environment has:

- **IIS** installed and configured (the installer can install it if it isn't)
- **SQL Server 2022 or later** (can also optionally be installed from the installer)
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

!!! danger "Flexygo 10 requires SQL Server 2022 or later"
    Starting with Flexygo 10, the minimum SQL Server version is **SQL Server 2022**. The application's databases must be on a SQL Server 2022 or later server; if the server is older, upgrade it before installing, updating or migrating the application.

---

## :material-chart-line: Sizing guide

For around **100 simultaneous users**, it is recommended to run the application and SQL Server on separate machines:

| | SQL Server machine | Application machine (IIS) |
|---|---|---|
| Operating system | Windows Server 2016 Standard or later | Windows Server 2016 Standard or later |
| Processor | Intel Xeon (reference: E5-2650 v4 @ 2.20GHz) | Intel Xeon (reference: E5-2650 v4 @ 2.20GHz) |
| Memory | 16 GB RAM (expandable) | 8 GB RAM (expandable) |
| Disk | 500 GB | 500 GB |

Disk space depends on the project; for large-scale document or image management an external NAS is recommended. More users are spread over several application machines behind a load balancer. For databases over 30 GB, see [this article on SQL Server memory](https://www.brentozar.com/archive/2018/11/how-much-memory-is-normal-for-sql-servers/).
