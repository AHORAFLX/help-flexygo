# Version 10.1

Flexygo 10.1 brings your application’s health information and recommendations together in one panel. It also makes updates easier to manage and improves performance, the interface and security.

## Highlights

### Health and resources panel

Check alerts, recommendations, connected users, metrics and settings in one panel. You can also review suggestions to optimize the application; changes are recorded, and you can undo suggested indexes. The panel is available to administrators and from the skin 2026 dashboard.

![Health and resources panel](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[More information: application panel](../../Help/Administration/HealthPanel.md)

## Other new features

### Updates and deployment

- **Scheduled updates:** schedule, change or cancel them; they run in the background with notifications and coordinated maintenance mode. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Updater:** it can update itself and complete delegated preparation and updates that exceed the usual time limit. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Docker updates:** follow a five-step wizard and finish with a summary of the result. [More information](../../1Deployment/3Updater/DockerUpdate.md)
- **Overnight preparation:** a task prepares the project’s next version in the background and records the result. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Resources and export:** check how your installation compares with resource recommendations, calculate suggested servers, and choose whether to include the data database when exporting a project as a product. [More information](../../2ProductDevelopment/8ExportProject/2Reference.md)

### Configuration and administration

- **Application settings:** administrators can view and change them from their settings screen; in development, changes take effect with the next request. [More information](../../Help/Administration/AppSettings.md)
- **Backend calls:** set their maximum duration in the application settings. [More information](../../Help/Administration/AppSettings.md)
- **Database connections:** the settings explain the meaning of the `encrypt` attribute. [More information](../../1Deployment/2ConfigWizard/EncryptedSettings.md)
- **Skin 2022:** the settings and health panels use a clear design adapted to its colors. [More information](../../Help/Administration/HealthPanel.md)

### Development tools

- **C# 14:** built-in processes and views recompiled at runtime can use this version.
- **Collections:** configure them from the object workbench.
- **Menus in skin 2026:** edit, add, change the visibility or delete nodes with a right-click. [More information](../../Help/Administration/Skin2026.md)
- **Scripts:** respect the user’s culture and let you wait for processes to finish.
- **Modules:** place them with a right-click or by dragging, and change the layout from a clearer toolbar. [More information](../../Help/Modules/ModuleManagement.md)

### Interface and navigation

- **Quick search:** brings together favorites, recent pages and shortcuts; in skin 2026, search the active list with `/`. [More information](../../Help/Administration/Skin2026.md)
- **Sidebar:** shows Import only when an import setting is active.
- **Skin 2026:** pages refresh and navigate with fewer waits and jumps; development mode turns on when designers sign in. [More information](../../Help/Administration/Skin2026.md)
- **Lowdy:** its plugin lets you rotate the character to any angle.

### Performance

- **Pages and processes:** open faster by reusing their definitions in memory.
- **Settings and database updates:** several screens load faster, and you can track progress by phase and table.

### Reports and tasks

- **Report designer:** includes more translated text in Spanish, Catalan, French, Italian, Portuguese and German.
- **Excel export:** export reports and lists at the same time without mixing up the files.
- **Version updates:** startup notifications are ordered and include patches and beta versions.
- **Process buttons:** you can leave generic buttons without an icon.

### AI and integrations

- **Flexygo assistant:** interact with screens and filter and sort views from chat, with your approval and within your permissions. [More information](../../Help/AIAssistants/3Decisions.md)
- **Brevo:** add or remove contacts from a list using only their email address. [More information](../../Help/Connectors/SendinBlue.md)

### Security

- **Edit permissions:** role restrictions also apply when saving values. [More information](../../Help/Administration/RolesAndPermissions/1Overview.md)
- **Visibility filters:** apply when reading records by key from any screen or call. [More information](../../Help/Administration/RolesAndPermissions/1Overview.md)

## Fixes

??? note "See the fixes in this version"

    - **Telemetry:** diagnostic and product records are sent correctly again.
    - **Reports:** related reports use the correct record and filters; Crystal Reports works with Windows authentication.
    - **Sign-in:** LDAP validates passwords against the directory again.
    - **Integrations:** external connections work with MySQL 8.0 and later, and an issue with the certificate key password is fixed.
    - **MCP:** the application uses an SDK version with a security fix.
    - **Interface:** pages, menus and views work after a busy startup; notification counts, duplicate columns, titles, security notices and layout images on Linux and Docker are fixed.
    - **Notifications:** in skin 2022, unread notifications again have a white background, blue bar and blue text.
    - **Security:** data entered in records is displayed as safe text; the WebAPI and MCP only run each process for its associated object. [More information](../../Help/Programming/WebAPISecurity.md)
    - **Scheduled tasks:** stop correctly when the application restarts or updates in IIS.
