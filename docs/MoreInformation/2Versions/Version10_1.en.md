# Version 10.1

Flexygo 10.1 brings application health, metrics and settings together in one panel. It also streamlines updates and improves configuration, security and everyday development work.

## Highlights

### Health and resources

View application alerts, recommendations, connected users, metrics and settings in one panel. You can also review suggestions for optimizing the application, undo suggested indexes and see a record of changes. The panel is available to administrators and from the skin 2026 dashboard.

![Health and resources](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[More information: health and resources](../../Help/Administration/HealthPanel.md)

## Other new features

### Updates and deployment

- **Scheduled updates:** schedule, change or cancel updates, which run in the background with notifications and coordinated maintenance mode. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Updater:** it can update itself and complete delegated preparations and updates even when they exceed the usual timeout. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Docker:** update through a five-step wizard that ends with a summary of the result. [More information](../../1Deployment/3Updater/DockerUpdate.md)
- **Nightly preparation:** a task prepares the next project version in the background and records the result. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Deployment resources:** compare your installation with recommendations and calculate suitable servers based on expected usage.
- **Product export:** when exporting a project, you can choose whether to include its data database. [More information](../../2ProductDevelopment/8ExportProject/2Reference.md)

### Configuration and administration

- **Development configuration:** changes take effect on the next request without reloading the cache.
- **Application settings:** administrators can view and edit them on their settings screen; the `encrypt` attribute for connections is also explained. [More information](../../Help/Administration/AppSettings.md)
- **Backend connections:** use the application settings to configure how long frontend calls can run. [More information](../../Help/Administration/AppSettings.md)
- **Skin 2022:** the configuration and health panels use a clear design adapted to its colors.

### Development tools

- **C# 14:** integrated processes and views recompiled at runtime support this version.
- **Collections:** configure them from the object workbench.
- **Design changes:** designer and MCP changes take effect on the next request, without clearing the cache when saving data.
- **Scripts:** they respect the user's culture and can wait for processes to finish.
- **Tour designer:** markers follow the selected element as you scroll the page.
- **Modules:** place them with the right mouse button or by dragging, and change the layout from a clearer toolbar. [More information](../../Help/Modules/ModuleManagement.md)
- **Lowdy:** the plugin lets you rotate its character to any angle.

### Interface and navigation

- **Skin 2026 menu:** manage nodes with the right mouse button. [More information](../../Help/Administration/Skin2026.md)
- **Quick search:** brings together favorites, recent pages and shortcuts; in skin 2026, search the active list with / too. [More information](../../Help/Administration/Skin2026.md)
- **Sidebar:** shows Import only when an import configuration is active.
- **Skin 2026:** pages refresh and navigate with fewer delays and jumps; development mode turns on when designers sign in. [More information](../../Help/Administration/Skin2026.md)

### Artificial intelligence and integrations

- **Flexygo assistant:** interact with screens and filter or sort views from chat, with user approval and in line with their permissions. [More information](../../Help/AIAssistants/3Decisions.md)
- **Brevo:** add or remove contacts from a list by providing only their email address. [More information](../../Help/Connectors/SendinBlue.md)

### Reports and exports

- **Report designer:** includes more translated text in Spanish, Catalan, French, Italian, Portuguese and German.
- **Excel export:** export reports and lists at the same time without the files getting mixed up.

### Performance

- **Page and process loading:** pages, modules and processes open faster by reusing their definitions in memory.
- **Configuration and database:** several screens load faster, and database updates show progress through their stages and tables.

### Security

- **Edit permissions:** role restrictions also apply when saving values. [More information](../../Help/Administration/RolesAndPermissions/1Overview.md)
- **Visibility filters:** they apply when reading records by key from any screen or call. [More information](../../Help/Administration/RolesAndPermissions/1Overview.md)

## Fixes

??? note "See the fixes in this version"

    - **Configuration:** settings save immediately again when the cache is disabled, connection handling is corrected, and telemetry sends records properly.
    - **Forms:** you can resize designer fields again after adding or removing them, or switching tabs.
    - **Reports:** related reports use the correct record and filters, and Crystal Reports works with Windows authentication.
    - **Home screen:** the Health, Version and License cards keep their content while updating.
    - **Sign-in:** LDAP access validates the password against the directory again.
    - **Integrations:** external connections work with MySQL 8.0 and later, a certificate key password issue is fixed, and MCP includes a security fix.
    - **Interface:** pages, menus and views keep working after busy sign-ins; notifications, duplicate columns, titles, security messages and images are corrected.
    - **Notifications:** in skin 2022, unread notifications have their white background, blue bar and blue text again.
    - **Security:** entered data is displayed as safe text, and the WebAPI and MCP run each process only on the object it is defined for.
    - **Scheduled tasks:** they stop correctly when the application is restarted or updated in IIS.
