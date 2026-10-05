# Try it: from installed application to a project that builds and runs <span class="fh-version-tag" title="Available since version 10">10.0+</span>

Here an application built by hand on top of the core becomes a **.NET project from the product template**: you export it from the control panel, build it on your machine, publish its two databases and run it. In the end you have the same application —menus, pages, objects, processes and the master data you choose— running from a project that can now be pushed to a repository and taken to continuous integration.

What travels and what doesn't, every option in the window and every server step are in the reference: [Export the application as a project](2Reference.md).

---

## What you need

| | |
|---|---|
| **A version 10 application with your project's origin active** | What travels is what belongs to the **active origin** (for example, 2 · Project). What was created with origin 0 active is indistinguishable from the core and does not travel. |
| **An administrator user** | Only administrators use the window. |
| **On the server**: access to the updater's NuGet feed | The export installs the `Flexygo.Product.Template` template of the **same version** as the application. If there is no .NET SDK, it downloads it the first time. |
| **On your machine**: .NET SDK, SQL Server and `sqlpackage` | To build, publish the databases and run. And access to the same NuGet feeds (the project's `nuget.config`). |

---

## 1. Open the window and read the preview

Control panel → action list → **Export as project**. The window reads the installation and says what it is going to take.

![The window: configuration, data model, static files, custom folder, DLLs, SDK and template](../../docs_assets/images/CoreProductDevelopment/ExportProject/pruebalo-ventana.png)

**Check**:

- *The configuration of origin N*: the origin is your project's, not 0 (with 0 the window says so and does not allow exporting).
- *The data model*: the connection of your tables (those marked with **Update data model** in *Connection strings*). If it says *none marked*, the project will carry an empty data project.
- *.NET SDK found* and the template for your application's version (*already installed*, or that it will be downloaded).

## 2. Choose the master data

Expand **Choose the tables that travel with their rows**. The **catalogs** come checked (small tables that others point to: statuses, types, categories): without their rows nothing could be created in the project. Also check whatever you need for testing. If you check a large table, or one that points to another that does not travel, the window warns in yellow; it does not prevent exporting.

![The catalogs, checked by default](../../docs_assets/images/CoreProductDevelopment/ExportProject/datos-maestros.png){ width="640" }

## 3. Export

Type the **Product name** (letters, digits and underscore; it names the solution and each project: `SalesExamples.Backend`, `SalesExamples.Conf.Database`…), leave **Scripts travel as origin** at *1 · Product* and click **Export**.

The window shows the steps with their time and, when finished, downloads the zip.

![The result: the zip, what is worth a look and the steps](../../docs_assets/images/CoreProductDevelopment/ExportProject/pruebalo-resultado.png)

**Check**: *exported*, all steps in green (or in yellow with their reason in *Worth a look*) and a zip of a few MB. In a small application it takes one or two minutes; the first time somewhat longer, because it installs the template.

## 4. Build it on your machine

Unzip the file and, in its folder:

```bash
dotnet build SalesExamples.sln
```

**Check**: *Build succeeded*, 0 errors. The first time it takes several minutes, because it downloads the template packages.

## 5. Publish both databases from scratch

The `README.md` at the root of the zip has both commands already written with your product name:

```bash
sqlpackage /a:Publish /sf:SalesExamples.Conf.Database\bin\Debug\SalesExamples.Conf.Database.dacpac /tsn:<server> /tdn:SalesExamples_Conf /tu:<user> /tp:<password> /ttsc:True /p:IncludeCompositeObjects=True /v:ProjectName=SalesExamples /v:OriginDatabaseName=NULL /v:CurrentDacVersion=1.0.0.0
sqlpackage /a:Publish /sf:SalesExamples.Data.Database\bin\Debug\SalesExamples.Data.Database.dacpac /tsn:<server> /tdn:SalesExamples_Data /tu:<user> /tp:<password> /ttsc:True
```

**Check**: *Successfully published database* in both. The configuration database has the core plus your configuration (as origin 1), and the data database, your tables with the master data rows.

## 6. Run it

In `SalesExamples.Backend\conf\appsettings.Development.json`:

- `ConfConnectionString` and `DataConnectionString`, pointing to the two databases you have just published;
- `MailSettings.Configured` set to `true` (a new installation waits for mail to be configured on its first start);
- and, if you are going to have the original application open at the same time, other ports (also in the Frontend's `appsettings.Development.json`).

Start Backend and Frontend together (the `SalesExamples.slnLaunch.user` profile in Visual Studio) and log in with your user.

**Check**: the same menu, the same pages and lists, the same objects and the same settings you changed (the AI assistant or the web API turned on, the application description) as in the source application. And **create a record** in a table that depends on a catalog: if it saves, the master data have travelled correctly.

## 7. Republish it

Publish the databases again on top, without deleting them (increase `CurrentDacVersion` in the configuration one). The `MERGE` scripts insert and update, and **never delete**: the record you created is still there. This is what will happen on every product update.

---

## If something goes wrong

| What you see | Why | What to do |
|---|---|---|
| The window does not allow exporting and mentions origin 0 | The active origin is the core's | Activate the project's origin and reopen the window |
| The template step comes out in yellow, or with another version | The feed does not have your application's version (happens with development versions of the core) | The configuration may fail to publish in step 5: use an application of a released version |
| The configuration database does not publish and names a column | The installed template is of a different version than the application | The same: the application version and the package version must match |
| Creating a record fails with "It would generate duplicates" | A row that a foreign key points to is missing (a catalog or a record, such as the administrator's employee) | Check that table in step 2 and export again |
| The data project comes out empty | No connection marked with *Update data model* | Mark it in *Connection strings*, or leave the project without tables |
| A setting you had changed in the application is missing | Changed settings travel as `UPDATE` at the end of `config.sql`, **except environment ones**: those of the updater, telemetry, paths, passwords and integrations with credentials (Azure, Google, Office, payments…) | Put it in the project's `config.sql`, or in each installation if it is an environment one |
