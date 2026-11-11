# Version 10.1

Flexygo 10.1 brings the application’s status, metrics and settings together in one panel, and makes updates easier to manage. It also adds Docker options, development tools and navigation improvements for the 2026 skin.

## Highlights

### Application health and resources

Check the application’s status, metrics and settings from a single panel. You’ll also find alerts, recommendations and connected users; review suggestions for improving the application, undo suggested indexes and check the change log. The panel is available to administrators and from the 2026 skin dashboard.

![Application health and resources](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[More information: application health](../../Help/Administration/HealthPanel.md)

## Other new features

### Updates

- **Scheduling:** schedule, change or cancel updates that run in the background, with notifications and coordinated maintenance mode. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Updater:** it can update itself and complete delegated preparations and updates that exceed the usual timeout. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Overnight preparation:** the nightly task prepares the next project version in the background and records the result. [More information](../../1Deployment/3Updater/UpdateFlow.md)

### Docker and deployment

- **Docker updates:** a five-step wizard guides the process and ends with a summary of the result. [More information](../../1Deployment/3Updater/DockerUpdate.md)
- **Product export:** when exporting a project as a product, you can choose whether to include its data database. [More information](../../2ProductDevelopment/8ExportProject/2Reference.md)
- **Docker documentation:** the versions page explains how to update using images, and the maintenance page preserves customizations. [More information](../../1Deployment/3Updater/DockerUpdate.md)

### Configuration and development

- **Collections:** configure their settings directly from the object workbench.
- **Database connections:** the configuration explains the “encrypt” attribute. [More information](../../1Deployment/2ConfigWizard/AppSettingsReference.md)
- **Tour editor:** markers follow the selected element as you scroll through the page.
- **Modules:** place them with the right mouse button or by dragging, and change the layout from a clearer toolbar. [More information](../../Help/Modules/ModuleManagement.md)

### Interface and navigation

- **2026 skin menu:** manage its nodes with the right mouse button. [More information](../../Help/Administration/Skin2026.md)
- **Quick search:** in the 2026 skin, use / to search the visible list and Ctrl+K to access favorites and recent pages. [More information](../../Help/Administration/Skin2026.md)
- **Sidebar:** Import appears only when an import configuration is active. [More information](../../Help/Administration/Skin2026.md)
- **Configuration and health panels:** in the 2022 skin, their design adapts to the interface colors. [More information](../../Help/Administration/HealthPanel.md)

### Home and designers

- **Startup notifications:** they appear in an orderly way, and version updates also include patches and betas.
- **Designers:** they enter development mode when they sign in, without needing to open it from the menu.
- **Process buttons:** you can leave generic buttons without an icon.

## Fixes

??? note "See the fixes in this version"

    - **Reports:** related reports apply the current record and its filters; Crystal Reports works with databases that use Windows authentication.
    - **Security and integrations:** MCP includes an SDK version with a security fix, and the WebAPI and MCP run each process only on the object it is defined for. [More information](../../Help/Administration/RolesAndPermissions/4WebAPIMCP.md)
    - **Interface:** new records show an appropriate title and pages without permission display a security notice; five page designs are also visible again on Linux and Docker.
    - **Notifications:** in the 2022 skin, unread notifications once again appear with a white background, blue bar and blue text.
    - **Scheduled tasks:** they stop correctly when the application is restarted or updated in IIS.
