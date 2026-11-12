# Version 10.1

Flexygo 10.1 brings application health, metrics and settings together in one panel. It also makes updates easier and adds options for deployment, administration and everyday work.

## Highlights

### Application health panel

Review alerts, recommendations, connected users, metrics and settings in one panel. You can also check suggestions for improving the application; changes are recorded, and you can undo recommended indexes. The panel is available to administrators and from the skin 2026 control panel.

![Application health panel](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[More information: application health](../../Help/Administration/HealthPanel.md)

## Other new features

### Updates

- **Scheduling:** schedule, change or cancel updates that run in the background, with notifications and coordinated maintenance mode. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Updater:** it can update itself and complete delegated preparations and updates that exceed the usual timeout. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Docker and preparation:** a five-step wizard guides Docker updates; a nightly task prepares the next version and records the result. [More information](../../1Deployment/3Updater/DockerUpdate.md)

### Deployment and products

- **Resources:** compare your installation with recommendations and calculate recommended servers based on usage patterns.
- **Project export:** when exporting a project as a product, you can choose whether to include its data database. [More information](../../2ProductDevelopment/8ExportProject/2Reference.md)
- **Docker:** the guidance on image-based updates is expanded, and the maintenance page preserves customizations. [More information](../../1Deployment/3Updater/DockerUpdate.md)

### Settings and administration

- **Application settings:** administrators can view and change them from the settings screen. [More information](../../Help/Administration/AppSettings.md)
- **Timeout:** set how long frontend-to-backend calls can run in the application settings. [More information](../../Help/Administration/AppSettings.md)
- **Connections and skin 2022:** the settings explain the “encrypt” attribute, and the skin displays the settings and health panels in a design that matches its colors. [More information](../../Help/Administration/AppSettings.md)

### Development tools

- **Collections:** configure their settings from the object workbench.
- **Menus in skin 2026:** manage menu nodes with a right-click. [More information](../../Help/Administration/Skin2026.md)
- **Guided tours and modules:** editor markers follow the selected element as you scroll; you can also place modules with a right-click or by dragging them, and change their layout from a clearer toolbar. [More information](../../Help/Modules/ModuleManagement.md)

### Interface and navigation

- **Search shortcuts in skin 2026:** use / to search the visible list and Ctrl+K to browse favorites and recent pages. [More information](../../Help/Administration/Skin2026.md)
- **Sidebar and startup:** Import appears only when an import configuration is active; startup notices are displayed in order, and version updates include patches and betas.

### Reports and integrations

- **Excel export:** export reports and lists at the same time without their files getting mixed up.
- **Brevo:** add or remove contacts from a list using only their email address.

### Security and processes

- **Role visibility:** visibility restrictions are applied when viewing and saving records. [More information](../../Help/Administration/RolesAndPermissions/3Rules.md)
- **Process buttons:** you can leave generic buttons without an icon.

## Fixes

??? note "See the fixes in this version"

    - **Reports:** related reports use the current record’s data and filters; Crystal Reports works with databases that use Windows authentication.
    - **WebAPI and MCP:** an MCP SDK security issue is fixed, and both now run each process only on the object it is defined for. [More information](../../Help/Administration/RolesAndPermissions/4WebAPIMCP.md)
    - **AI assistants:** filtering and sorting by each view’s columns works again, including calculated and shared columns.
    - **Screens and permissions:** new records display an appropriate title, and pages without permission show a security notice.
    - **Layouts and images:** images for five page layouts are displayed again on Linux and Docker installations.
    - **Notifications:** in skin 2022, unread notifications once again have a white background, blue bar and blue text.
    - **Scheduled tasks:** they stop correctly when the application restarts or updates in IIS.
