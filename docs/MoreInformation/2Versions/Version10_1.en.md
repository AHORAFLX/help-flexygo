# Version 10.1

Flexygo 10.1 helps you monitor your application’s health and improves update and deployment management. It also adds configuration options and changes to development tools, navigation and reporting.

## Highlights

### Application health panel

View application alerts, recommendations, connected users, metrics and settings in one panel. You can also review suggestions to optimize it; changes are recorded, and suggested indexes can be undone. The panel is available to administrators and from the skin 2026 control panel.

![Application health panel](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[More information: health panel](../../Help/Administration/HealthPanel.md)

## Other new features

### Updates

- **Scheduling:** schedule, change or cancel updates to run in the background, with notifications and coordinated maintenance mode. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Preparation and duration:** the Updater can update itself and complete delegated preparations and updates even when they exceed the usual timeout. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Overnight preparation:** a task prepares the project’s next version in the background and records the result. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Languages:** the description of the Updater’s preload process is available in more languages. [More information](../../1Deployment/3Updater/UpdateFlow.md)

### Deployment and products

- **Docker updates:** follow a five-step wizard and view a summary of the result. [More information](../../1Deployment/3Updater/DockerUpdate.md)
- **Product export:** when exporting a project as a product, choose whether to include its data database. [More information](../../2ProductDevelopment/8ExportProject/2Reference.md)
- **Docker:** the versions page explains how to update using images, and the maintenance page preserves customizations. [More information](../../1Deployment/3Updater/DockerUpdate.md)

### Configuration and security

- **Call duration:** configure how long frontend-to-backend calls can run in the application settings. [More information](../../Help/Administration/AppSettings.md)
- **Application settings:** administrators can view and change them from the configuration screen. [More information](../../Help/Administration/AppSettings.md)
- **Database connections:** when configuring them, the meaning of the “encrypt” attribute is explained. [More information](../../1Deployment/2ConfigWizard/EncryptedSettings.md)
- **Skin 2022:** the configuration and health panels use a clear design adapted to its colors. [More information](../../Help/Administration/AppSettings.md)
- **Visibility filters:** they are applied when reading records by key from any screen or call. [More information](../../Help/Administration/RolesAndPermissions/1Overview.md)

### Development tools

- **Collections:** configure their settings from the object workbench.
- **Lowdy:** rotate the plugin’s character to any angle.
- **Tour editor:** markers follow the selected item as you scroll through the page.
- **Modules:** place them with a right-click or by dragging, and change the layout from a clearer toolbar. [More information](../../Help/Modules/ModuleManagement.md)
- **Process buttons:** you can leave generic buttons without an icon.

### Interface and home

- **Search in skin 2026:** use / to search the visible list and Ctrl+K to browse favorites and recent pages. [More information](../../Help/Administration/Skin2026.md)
- **Home notifications:** they appear in an orderly way, and version updates include patches and betas.
- **Sidebar:** shows Import only when an import configuration is active.
- **Development mode:** designers enter it when they sign in, without opening it from the menu.
- **Skin 2026 menu:** manage its nodes with a right-click. [More information](../../Help/Administration/Skin2026.md)

### Integrations and reports

- **Brevo:** add or remove contacts from a list using only their email address. [More information](../../Help/Connectors/SendinBlue.md)
- **Excel export:** export reports and lists at the same time without their files getting mixed up.

## Fixes

??? note "See the fixes in this version"

    - **Reports:** related reports again use the current record’s data and filters; Crystal Reports works again with databases that use Windows authentication.
    - **MCP integration:** the MCP application again uses an SDK with the security fix included. [More information](../../2ProductDevelopment/MCP/2Usage.md)
    - **Interface and permissions:** new records show an appropriate title again, and pages without permission display a security notice.
    - **Page layouts:** images for five layouts are displayed again on Linux and Docker installations.
    - **Notifications:** in skin 2022, unread notifications again appear with a white background, blue bar and blue text.
    - **WebAPI and MCP:** each process runs only on the object it is defined for. [More information](../../Help/Administration/RolesAndPermissions/4WebAPIMCP.md)
    - **Scheduled tasks:** in IIS, they stop correctly when the application restarts or updates.
