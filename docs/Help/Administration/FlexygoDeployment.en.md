---
title: "Flexygo Deployment"
---

# Flexygo Deployment <span class="fh-version-tag" title="Available since version 10.0">10.0+</span> {.fh-title-with-image}

![Flexygo Deployment](../../docs_assets/images/FlexygoDeployment/net9-architecture.png){ .fh-image-of-title }

Flexygo runs on .NET 9 and ASP.NET Core. The frontend, backend and SQL Server database can run on the same server or on separate servers, and you can scale and update them independently.

## Where to find it
This applies to the whole application and its installation, deployment and updates.

## How to use it
1. Install Flexygo using the guided setup on IIS, as a standalone service or in Docker, on Windows or Linux.
2. Run the frontend, backend and database on the same server or on separate servers.
3. Keep Flexygo up to date from the application's version wizard. You can also use it to roll back an update.

## Settings
Configure the deployment and connection settings for the frontend and backend in each one's appsettings files.
