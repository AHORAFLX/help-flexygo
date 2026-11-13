# Version 10.1

Flexygo 10.1 brings application health, metrics and settings together in one panel. It also makes updates and deployment easier, and improves navigation, development and security.

## Highlights

### Health and resources panel

Check application alerts, recommendations, connected users, metrics and settings in one panel. You can also review optimization suggestions: changes are recorded, and you can undo suggested indexes. The panel is available to administrators and from the skin 2026 dashboard.

![Health and resources panel](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[More information: application panel](../../Help/Administration/HealthPanel.md)

## Other new features

### Updates and deployment

- **Scheduled updates:** schedule, change or cancel updates that run in the background with notifications and coordinated maintenance mode. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Updater:** it can update itself and complete preparations and updates that exceed the usual timeout. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Docker:** update with a five-step wizard and a final summary; the documentation explains image-based updates and how to keep maintenance customizations. [More information](../../1Deployment/3Updater/DockerUpdate.md)
- **Overnight preparation:** a task prepares the next project version in the background and records the result. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Deployment resources:** compare your installation with the calculator’s recommendations and estimate the recommended servers based on expected usage.
- **Product export:** when exporting a project as a product, choose whether to include its data database. [More information](../../2ProductDevelopment/8ExportProject/2Reference.md)

### Settings and performance

- **Application settings:** administrators can view and edit them; in development, changes take effect on the next request, and you can configure how long frontend-to-backend calls can run. [More information](../../Help/Administration/AppSettings.md)
- **Database connections:** the settings explain what the “encrypt” attribute means. [More information](../../1Deployment/2ConfigWizard/Configuration.md)
- **Application loading:** pages, modules, processes, settings and several screens load faster; database updates show progress through their phases and tables.

### Development tools

- **Collections:** configure their settings from the object workbench.
- **Lowdy:** rotate the plugin’s character to any angle.
- **Scripts:** respect the user’s culture and can wait for other processes to finish.
- **Tour editor:** markers follow the selected element as you scroll through the page.
- **Module layout:** place modules with the right mouse button or by dragging them, and change their layout from a clearer toolbar. [More information](../../Help/Modules/ModuleManagement.md)
- **Process buttons:** generic buttons can be shown without an icon.

### Interface and navigation

- **Skin 2026 menu:** edit, add, configure the visibility of or delete nodes with the right mouse button. [More information](../../Help/Administration/Skin2026.md)
- **Quick access:** in skin 2026, use / to search and Ctrl+K to open favorites, recent pages and shortcuts. [More information](../../Help/Administration/Skin2026.md)
- **Home:** notifications are displayed in order, and version updates include patches and beta releases.
- **Sidebar:** shows Import only when an import configuration is active.
- **Skin 2026:** pages refresh and navigate with fewer delays and jumps; development mode turns on when designers sign in. [More information](../../Help/Administration/Skin2026.md)
- **Skin 2022:** the settings and health panels have a clear design adapted to its colors. [More information](../../Help/Administration/HealthPanel.md)

### Integrations and reports

- **Brevo:** add or remove contacts from a list using only their email address. [More information](../../Help/Connectors/SendinBlue.md)
- **Excel:** export reports and lists at the same time without the files getting mixed up.

### AI and security

- **Flexygo assistant:** interact with screens and filter or sort views from the chat, with your approval and subject to your permissions. [More information](../../Help/AIAssistants/3Decisions.md)
- **Permissions:** role-based editing restrictions also apply when saving values, and visibility filters are enforced when reading records by key from any screen or call. [More information](../../Help/Administration/RolesAndPermissions/1Overview.md)

## Fixes

??? note "See the fixes in this version"

    - **Reports:** related reports once again apply the current record’s data and filters; Crystal Reports works with databases that use Windows authentication.
    - **Sign-in:** LDAP sign-in once again validates the password against the directory.
    - **Integrations:** certificate passwords are handled correctly again, and the MCP application includes an SDK version with a security fix.
    - **Interface:** fixes restore the unread notification count, remove duplicate columns, correct new record titles and security notices, and display page layout images on Linux and Docker.
    - **Notifications:** unread notifications once again appear with a white background, blue bar and blue text in skin 2022.
    - **Security:** data entered in records is displayed as safe text; the WebAPI and MCP only run each process on the object it is defined for. [More information](../../Help/Administration/RolesAndPermissions/4WebAPIMCP.md)
    - **Scheduled tasks:** stop correctly when the application restarts or updates in IIS.
