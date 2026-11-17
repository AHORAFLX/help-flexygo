# Version 10.1

Flexygo 10.1 brings application health, metrics and settings together in one panel, and streamlines updates and deployment. It also adds improvements for development, the interface and data protection.

## Highlights

### Health and resources panel

From Administration > Environment > Health and resources, you can review alerts, recommendations, connected users and metrics, as well as settings and suggestions to optimize the application. Changes are recorded, and you can undo suggested indexes. The panel is also available from the skin 2026 dashboard.

![Health and resources panel](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[More information: health panel](../../Help/Administration/HealthPanel.md)

## Other new features

### Installation and deployment

- **Scheduled updates:** schedule, change or cancel updates. They run in the background with notifications and a coordinated maintenance mode. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Updater:** it can update itself and complete delegated preparations and updates even when they exceed the usual timeout. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Docker:** updates follow a five-step wizard and end with a summary of the result. [More information](../../1Deployment/3Updater/DockerUpdate.md)
- **Overnight preparation:** a task prepares the next project version in the background and records the result. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Deployment resources:** check how your installation compares with recommendations and calculate the servers needed for expected usage.
- **Product export:** when exporting a project as a product, choose whether to include its data database. [More information](../../2ProductDevelopment/8ExportProject/2Reference.md)

### Development tools

- **Scripts:** generate them from quick access; they also respect the user's culture and can wait for processes.
- **C# 14:** integrated processes and views recompiled at runtime can use this version.
- **Collection settings:** configure them from the object workbench.
- **Design changes:** designer and MCP changes take effect on the next request, without clearing the cache when saving data. [More information](../../2ProductDevelopment/MCP/2Usage.md)

### AI and integrations

- **Views for AI assistants:** they can query views with typed parameters and validate that submitted values are correct. [More information](../../Help/AIAssistants/2Reference.md)
- **Actions from chat:** the assistant can interact with Flexygo screens, subject to user approval. [More information](../../Help/AIAssistants/3Decisions.md)
- **Brevo:** add or remove contacts from a list using only their email address.

### Configuration and administration

- **Development settings:** changes take effect on the next request, without reloading the cache. [More information](../../Help/Administration/AppSettings.md)
- **Timeout:** set how long frontend calls to the backend can run in the application settings. [More information](../../Help/Administration/AppSettings.md)
- **Application settings:** administrators can view and edit them from the settings screen. [More information](../../Help/Administration/AppSettings.md)
- **Database connections:** the settings explain what the `encrypt` attribute means. [More information](../../1Deployment/2ConfigWizard/EncryptedSettings.md)

### Interface and navigation

- **Quick search:** brings together favourites, recent pages and shortcuts; in skin 2026, search the active list with `/`. [More information](../../Help/Administration/Skin2026.md)
- **Skin 2026 menu:** manage its nodes with the right mouse button. [More information](../../Help/Administration/Skin2026.md)
- **Modules:** place them with the right mouse button or by dragging, and change the layout from a clearer toolbar. [More information](../../Help/Modules/ModuleManagement.md)
- **Skin 2026:** pages refresh and navigate with fewer waits and jumps, and development mode turns on at sign-in for designers. [More information](../../Help/Administration/Skin2026.md)

### Reports, lists and processes

- **Excel export:** export reports and lists at the same time without the files getting mixed up.
- **Kanban:** shows that there are no results if the board record does not exist, instead of remaining stuck loading. [More information](../../Help/Modules/Kanban.md)
- **Process parameters:** configured values are retained for hidden or locked parameters.

### Performance

- **Opening pages and processes:** definitions are reused in memory so pages, modules and processes open faster.
- **Loading and updates:** settings and several screens load faster; database updates show progress through their stages and tables.

### Security

- **Edit permissions:** role restrictions also apply when saving values. [More information](../../Help/Administration/RolesAndPermissions/1Overview.md)
- **Record visibility:** filters apply when reading records by key from any screen or call. [More information](../../Help/Administration/RolesAndPermissions/1Overview.md)

## Fixes

??? note "See the fixes in this version"

    - **Settings:** the screen no longer shows or accepts database connections; saving settings is immediate again when caching is disabled, and telemetry sends logs correctly. [More information](../../Help/Administration/AppSettings.md)
    - **Filters and conditions:** searches and conditions accept values with quotes, accents or braces; additional conditions for lists, charts, kanban, planners and records are validated before being applied.
    - **Forms:** you can resize fields in the designer again after adding or deleting fields, or switching tabs.
    - **Reports:** related reports use the correct record and filters; Crystal Reports can be generated again with databases that use Windows authentication.
    - **Sign-in:** LDAP sign-in validates the password against the directory again.
    - **Integrations:** external connections work with MySQL 8.0 and later, a certificate key password issue is fixed, and MCP includes a security fix. [More information](../../2ProductDevelopment/MCP/2Usage.md)
    - **AI:** the assistant can filter and sort by each view's columns, including calculated and shared columns. [More information](../../Help/AIAssistants/2Reference.md)
    - **Interface:** pages, menus and views continue working after a busy sign-in; unread notification counts, duplicate columns, new record titles, security notices and some images on Linux and Docker are fixed.
    - **Notifications:** in skin 2022, unread notifications again appear with a white background, blue bar and blue text.
    - **Processes and security:** processes on filtered lists support objects without a unique identifier; scheduled tasks stop when IIS restarts, and entered data is shown as safe text. WebAPI and MCP restrict each process to the object it is defined for. [More information](../../Help/Administration/RolesAndPermissions/4WebAPIMCP.md)
