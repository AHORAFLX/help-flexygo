# Version 10.1

Flexygo 10.1 helps you understand your application’s health and keep it up to date more easily. It also brings improvements to deployment, configuration, navigation, and performance.

## Highlights

### Health and resources panel

View your application’s alerts, recommendations, connected users, metrics, and settings in one panel. You’ll also find optimization suggestions; changes are recorded, and you can undo suggested indexes. The panel is available to administrators and from the skin 2026 control panel.

![Health and resources panel](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[More information: health panel](../../Help/Administration/HealthPanel.md)

## Other new features

### Updater and maintenance

- **Scheduled updates:** schedule, change, or cancel updates; they run in the background with notifications and a coordinated maintenance mode. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Updater:** it can update itself and complete delegated preparations or updates that exceed the usual timeout. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Docker updates:** a five-step wizard guides you through the process and shows a summary of the result. [More information](../../1Deployment/3Updater/DockerUpdate.md)
- **Version preparation:** the nightly task prepares the project’s next version in the background and records the result. [More information](../../1Deployment/3Updater/UpdateFlow.md)

### Deployment and export

- **Deployment resources:** compare your installation with the resource calculator’s recommendations and work out the suggested servers for your expected usage. [More information](../../1Deployment/SystemRequirements.md)
- **Product export:** when exporting a project as a product, you can choose whether to include its data database. [More information](../../2ProductDevelopment/8ExportProject/2Reference.md)
- **Docker:** the versions page explains how to update using images, and the maintenance page preserves customizations. [More information](../../1Deployment/3Updater/DockerUpdate.md)

### Configuration and administration

- **Application settings:** set how long frontend calls to the backend can run, and view or change settings from their configuration screen. [More information](../../Help/Administration/AppSettings.md)
- **Database connections:** the configuration explains what the “encrypt” attribute means. [More information](../../Help/Administration/AppSettings.md)
- **Skin 2022:** its configuration and health panels now use a clear design adapted to its colors. [More information](../../Help/Administration/HealthPanel.md)

### Development tools

- **Collections:** configure their settings from the object workbench.
- **Tour editor:** markers follow the selected element as you scroll through the page.
- **Modules:** place them with a right-click or by dragging, and change the layout from a clearer toolbar. [More information](../../Help/Modules/ModuleManagement.md)

### Interface and navigation

- **Quick search:** in skin 2026, press / to search and Ctrl+K to open favorites, recent pages, and shortcuts. [More information](../../Help/Administration/Skin2026.md)
- **Skin 2026 menu:** manage its nodes with a right-click. [More information](../../Help/Administration/Skin2026.md)
- **Sidebar:** Import appears only when an import configuration is active.
- **Skin designers:** they enter development mode as soon as they sign in, without opening it from the menu. [More information](../../Help/Administration/Skin2026.md)
- **Startup notices:** they appear in order, and version updates include patches and beta releases.

### Integrations and reports

- **Brevo:** add or remove contacts from a list using only their email address. [More information](../../Help/Connectors/SendinBlue.md)
- **Excel export:** export reports and lists at the same time without their files getting mixed up.

### Performance and security

- **Application loading:** configuration and the main pages and lists load faster.
- **Role visibility:** restrictions are enforced when viewing and saving records. [More information](../../Help/Administration/RolesAndPermissions/1Overview.md)

## Fixes

??? note "See the fixes in this version"

    - **Reports:** related reports again use the current record’s data and filters, and Crystal Reports works with databases that use Windows authentication.
    - **Integrations:** the MCP application includes a security fix in its SDK.
    - **AI assistant:** it can again filter and sort by each view’s columns, including calculated or shared columns.
    - **Interface:** fixes restore the unread notice count, remove duplicate columns, correct new record titles, and show security notices on pages without permission.
    - **Page layouts:** images for five layouts appear again on Linux and Docker installations.
    - **Notifications:** unread notifications regain their white background, blue bar, and blue text in skin 2022.
    - **WebAPI and MCP:** each process runs only on the object it is defined for. [More information](../../Help/Administration/RolesAndPermissions/4WebAPIMCP.md)
    - **Scheduled tasks:** they stop correctly when the application is restarted or updated in IIS.
