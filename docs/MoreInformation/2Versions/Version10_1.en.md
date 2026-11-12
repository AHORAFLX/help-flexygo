# Version 10.1

Flexygo 10.1 adds a panel for checking your application’s health and resources, and makes it easier to plan updates and deploy. It also expands configuration, development and navigation options.

## Highlights

### Application health and resources

Check application alerts, recommendations, connected users and metrics in one panel. You can also review settings and optimization suggestions; changes are recorded, and you can undo suggested indexes. The panel is available to administrators and from the skin 2026 dashboard.

![Application health and resources](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[More information: application health](../../Help/Administration/HealthPanel.md)

## Other new features

### Updates

- **Scheduling:** schedule, change or cancel updates; they run in the background with notifications and coordinated maintenance mode. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Updater:** it can update itself and complete delegated preparations and updates that exceed the usual timeout; the preloading description is available in more languages. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Docker:** updates follow a five-step wizard and end with a summary of the result. [More information](../../1Deployment/3Updater/DockerUpdate.md)
- **Nightly preparation:** a task prepares the project’s next version in the background and records the result.

### Deployment and export

- **Resources:** check how your installation compares with the resource calculator’s recommendations.
- **Sizing:** calculate the recommended servers for a deployment based on its usage characteristics.
- **Product export:** when exporting a project as a product, you can choose whether to include its data database. [More information](../../2ProductDevelopment/8ExportProject/2Reference.md)
- **Docker:** the documentation explains how to update using images and preserves customizations on the maintenance page. [More information](../../1Deployment/3Updater/DockerUpdate.md)

### Configuration and security

- **Application settings:** configure how long frontend-to-backend calls can last, and view or change settings from the application settings screen. [More information](../../Help/Administration/AppSettings.md)
- **Database connections:** the meaning of the “encrypt” attribute is explained when configuring a connection. [More information](../../1Deployment/2ConfigWizard/EncryptedSettings.md)
- **Skin 2022:** the configuration and health panels use a light design adapted to its colours. [More information](../../Help/Administration/HealthPanel.md)
- **Visibility filters:** they apply when reading records by key from any screen or call. [More information](../../Help/Administration/RolesAndPermissions/3Rules.md)

### Development and integrations

- **Collections:** configure their settings from the object workbench.
- **Lowdy:** the plugin’s character can be rotated to any angle.
- **Tour editor:** markers follow the selected element as you scroll through the page.
- **Modules:** place them with the right mouse button or by dragging, and change the layout from a clearer toolbar. [More information](../../Help/Modules/ModuleManagement.md)
- **Designers:** they enter development mode as soon as they sign in.
- **Brevo:** add or remove contacts from a list using only their email address. [More information](../../Help/Connectors/SendinBlue.md)

### Interface and navigation

- **Skin 2026 menu:** manage its nodes with the right mouse button. [More information](../../Help/Administration/Skin2026.md)
- **Skin 2026 search:** use / to search the visible list and Ctrl+K to view favourites and recent pages. [More information](../../Help/Administration/Skin2026.md)
- **Startup notices:** they appear in an orderly way, and version updates include patches and betas.
- **Sidebar:** shows Import only when an import configuration is active.

### Reports and processes

- **Excel export:** you can export reports and lists at the same time without the files getting mixed up.
- **Process buttons:** you can leave generic buttons without an icon.

## Fixes

??? note "See the fixes in this version"

    - **Reports:** related reports apply the current record’s data and filters again, and Crystal Reports works with databases that use Windows authentication.
    - **WebAPI and MCP:** each process runs only on the object it is defined for again; the MCP application includes a security fix in its SDK. [More information](../../Help/Administration/RolesAndPermissions/4WebAPIMCP.md)
    - **Interface:** new records show an appropriate title, pages without permission display a security notice, and layout images are visible again on Linux and Docker.
    - **Notifications:** in skin 2022, unread notifications are shown again with a white background, blue bar and blue text.
    - **Scheduled tasks:** they stop correctly when the application is restarted or updated in IIS.
