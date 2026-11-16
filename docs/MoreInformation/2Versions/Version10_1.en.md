# Version 10.1

Flexygo 10.1 brings application health, metrics and settings together in one panel, and makes updates and deployments easier to manage. It also improves configuration, development tools and the interface.

## Highlights

### Application health and resources

View alerts, recommendations, connected users and metrics alongside application settings. The panel also offers suggestions to help you optimise the application; you can review recorded changes and undo suggested indexes. It is available to administrators and from the skin 2026 dashboard.

![Application health and resources](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[More information: application health](../../Help/Administration/HealthPanel.md)

## Other new features

### Updates and deployment

- **Scheduled updates:** schedule, change or cancel updates, which run in the background with notifications and coordinated maintenance mode. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Updater:** it can update itself and complete delegated preparations and updates that exceed the usual timeout. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Docker updates:** follow a five-step wizard and finish with a summary of the result. [More information](../../1Deployment/3Updater/DockerUpdate.md)
- **Overnight preparation:** a task prepares the next project version in the background and records the result. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Deployment resources:** check how your installation compares with recommendations and calculate suggested servers based on expected usage.
- **Exporting a product:** when exporting a project as a product, choose whether to include its data database. [More information](../../2ProductDevelopment/8ExportProject/2Reference.md)
- **Docker:** the versions page explains image-based updates, and the maintenance page preserves customisations. [More information](../../1Deployment/3Updater/DockerUpdate.md)

### Configuration and administration

- **Configuration changes:** in development, changes apply on the next request without reloading the cache; administrators can also view and edit settings from their settings screen. [More information](../../Help/Administration/AppSettings.md)
- **Timeout:** set how long frontend-to-backend calls can run in the application settings. [More information](../../Help/Administration/AppSettings.md)
- **Database connections:** the configuration explains the «encrypt» attribute. [More information](../../1Deployment/2ConfigWizard/AppSettingsReference.md)
- **Skin 2022:** displays the settings and health panels with a light design adapted to its colours. [More information](../../Help/Administration/HealthPanel.md)

### Development tools

- **C# 14:** built-in processes and views recompiled at runtime support it.
- **Collections:** configure them from the object workbench.
- **Designer and MCP:** changes apply on the next request, without clearing the cache when data is saved. [More information](../../2ProductDevelopment/MCP/2Usage.md)
- **Scripts:** respect the user's culture and can wait for processes to finish.
- **Tour editor:** markers follow the selected element as you scroll through the page.
- **Module layout:** place modules by right-clicking or dragging them, and change the layout from a clearer toolbar. [More information](../../Help/Modules/ModuleManagement.md)

### Interface and navigation

- **Skin 2026 menu:** manage menu nodes with the right mouse button. [More information](../../Help/Administration/Skin2026.md)
- **Quick search:** brings together favourites, recent pages and shortcuts; in skin 2026, press / to search the active list. [More information](../../Help/Administration/Skin2026.md)
- **Sidebar:** shows Import only when an import configuration is active.
- **Skin 2026:** pages refresh and navigate with fewer waits and jumps; development mode turns on when designers sign in. [More information](../../Help/Administration/Skin2026.md)

### Integrations and artificial intelligence

- **Brevo:** add or remove contacts from a list using only their email address. [More information](../../Help/Connectors/SendinBlue.md)
- **Flexygo assistant:** interact with screens and filter or sort views from chat, with user approval and respecting their permissions. [More information](../../Help/AIAssistants/3Decisions.md)

### Reports and performance

- **Report designer:** includes more translated text in Spanish, Catalan, French, Italian, Portuguese and German.
- **Excel export:** export reports and lists at the same time without the files getting mixed up.
- **Faster loading:** pages, modules, processes, settings and several screens open sooner; database updates show progress by phase and table.

### Security and processes

- **Editing permissions:** role restrictions also apply when saving values. [More information](../../Help/Administration/RolesAndPermissions/1Overview.md)
- **Visibility filters:** apply when reading records by key from any screen or call. [More information](../../Help/Administration/RolesAndPermissions/1Overview.md)
- **Process buttons:** generic buttons can be displayed without an icon.

## Fixes

??? note "See the fixes in this version"

    - **Settings and telemetry:** saving settings is immediate again when the cache is disabled, and diagnostic and product data is sent correctly.
    - **Reports:** related reports use the correct record and filters, and Crystal Reports works with databases that use Windows authentication.
    - **Home screen:** the Health, Version and Licence cards keep their content while refreshing.
    - **Sign-in:** LDAP validates the password against the directory again.
    - **Integrations:** external connections work with MySQL 8.0 and later, an issue with the certificate key password is fixed, and MCP includes an SDK security fix.
    - **Interface:** pages, menus and views keep working after busy sign-ins; notification counts, duplicate columns, titles, security notices and layout images are corrected.
    - **Notifications:** unread notifications are displayed again with a white background, blue bar and blue text in skin 2022.
    - **Security:** data entered in records is displayed as safe text and does not run template code.
    - **WebAPI and MCP:** each process runs only on the object it is defined for. [More information](../../Help/Administration/RolesAndPermissions/4WebAPIMCP.md)
    - **Scheduled tasks:** stop correctly when the application restarts or is updated in IIS.
