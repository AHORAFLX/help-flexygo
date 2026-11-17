# Version 10.1

Flexygo 10.1 helps you understand and optimize your application's health, and makes updates and deployments easier to manage. It also improves security, development workflows and the interface experience.

## Highlights

### Application health and resources

View your application's alerts, recommendations, connected users, metrics and settings in one panel. You can also review optimization suggestions, undo suggested indexes and check the recorded changes; the panel is available to administrators and from the skin 2026 dashboard.

![Application health and resources](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[More information: application health](../../Help/Administration/HealthPanel.md)

## Other new features

### Installation and updates

- **Scheduled updates:** schedule, change or cancel them; they run in the background with notifications and a coordinated maintenance mode. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Version preparation:** the Updater can update itself, complete delegated tasks that exceed the usual timeout and prepare the project's next version in the background. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Docker updates:** follow a five-step wizard and review a summary of the result when it finishes. [More information](../../1Deployment/3Updater/DockerUpdate.md)

### Deployment

- **Recommended resources:** calculate recommended servers for a deployment based on usage, and check how your installation compares with those recommendations.
- **Product exports:** when exporting a project as a product, you can choose whether to include its data database. [More information](../../2ProductDevelopment/8ExportProject/2Reference.md)

### Configuration and administration

- **Applying changes:** in development, configuration, designer and MCP changes take effect on the next request without reloading the cache. [More information](../../Help/Administration/AppSettings.md)
- **Application settings:** set how long frontend-to-backend calls can run, and view or change settings from the application settings screen. [More information](../../Help/Administration/AppSettings.md)
- **Database connections:** the meaning of the `encrypt` attribute is explained when you configure them.

### Development tools

- **C# 14:** built-in processes and views recompiled at runtime support this version.
- **Collections:** configure them from the object workbench.
- **Scripts:** they respect the user's culture and can wait for processes to finish.
- **Tour and module designers:** markers follow the selected element as you scroll; place modules with the right mouse button or by dragging them, and change their layout from a clearer toolbar.

### AI and integrations

- **Brevo:** add or remove contacts from a list using only their email address. [More information](../../Help/Connectors/SendinBlue.md)
- **AI queries:** assistants can query views with typed parameters and validate that submitted values are correct. [More information](../../Help/AIAssistants/2Reference.md)
- **Actions from chat:** the assistant can interact with Flexygo screens if the user approves the action. [More information](../../Help/AIAssistants/3Decisions.md)

### Interface and skins

- **Quick search:** brings together favorites, recent pages and shortcuts; in the skin 2026, press / to search the active list. [More information](../../Help/Administration/Skin2026.md)
- **Skin 2026 menu:** manage its nodes with the right mouse button. [More information](../../Help/Administration/Skin2026.md)
- **Navigation and development:** skin 2026 pages navigate with fewer waits and jumps, and its development mode turns on automatically when designers sign in. [More information](../../Help/Administration/Skin2026.md)
- **Startup notices:** they appear in an orderly way, and version updates include patches and betas.

### Reports and performance

- **Excel exports:** export reports and lists at the same time without their files getting mixed up.
- **Faster loading:** pages, modules, processes, settings and several screens reuse definitions in memory to open sooner.
- **Database updates:** show the progress of their phases and tables.

### Security and processes

- **Process parameters:** configured values are retained for hidden or locked parameters.
- **Edit permissions:** role restrictions also apply when saving values. [More information](../../Help/Administration/RolesAndPermissions/1Overview.md)
- **Record visibility:** filters apply when reading records by key from any screen or call. [More information](../../Help/Administration/RolesAndPermissions/1Overview.md)

## Fixes

??? note "See the fixes in this version"

    - **Configuration:** it no longer displays or accepts database connections, saves settings immediately when the cache is disabled, and sends diagnostic and product logs again.
    - **Filters and conditions:** filters, searches and conditions accept values with quotation marks, accents or braces; additional conditions for lists, charts, kanban, planners and records are validated before being applied.
    - **Forms:** resizing designer fields works again after adding or removing items, or switching tabs.
    - **Reports:** related reports use the correct record and filters, and Crystal Reports can be generated from databases using Windows authentication.
    - **Sign-in:** LDAP access validates the password against the directory again.
    - **Integrations:** external connections work with MySQL 8.0 and later, an issue with the certificate key password is fixed, and MCP includes an SDK version with a security fix.
    - **AI assistant:** it can filter and sort by each view's columns, including calculated and shared columns.
    - **Interface and notifications:** pages, menus and views work after a busy sign-in; fixes cover notice counts, duplicate columns, new record titles, security notices, layout images and the appearance of unread notifications in skin 2022.
    - **Processes and scheduled tasks:** processes on filtered lists support objects with composite keys and no unique identifier; tasks stop correctly when the application restarts or updates in IIS.
    - **Security:** data entered in records is displayed as safe text and does not run template code; the WebAPI and MCP run each process only on the object it is defined for. [More information](../../Help/Administration/RolesAndPermissions/4WebAPIMCP.md)
