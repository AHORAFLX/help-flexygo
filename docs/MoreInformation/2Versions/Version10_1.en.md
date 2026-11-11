# Version 10.1

Flexygo 10.1 makes it easier to update and monitor your applications, and expands the options for working with Docker and developing. It also adds navigation improvements and fixes several issues with reports, security and the interface.

## Highlights

### Health and resources panel

View application alerts, recommendations, connected users, metrics and settings in one panel. You can also review optimization suggestions; changes are recorded, and you can undo suggested indexes. The panel is available to administrators and from the skin 2026 dashboard.

![Health and resources panel](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[More information: application panel](../../Help/Administration/HealthPanel.md)

## Other new features

### Updates

- **Scheduled updates:** schedule, change or cancel them; they run in the background with notifications and a coordinated maintenance mode. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Updater:** it can update itself and complete delegated preparations and updates even when they exceed the usual timeout. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Overnight preparation:** a task prepares the next project version in the background and records the result. [More information](../../1Deployment/3Updater/UpdateFlow.md)

### Docker and deployment

- **Update wizard:** in Docker, follow five steps and finish with a summary of the result. [More information](../../1Deployment/3Updater/DockerUpdate.md)
- **Docker guides:** the versions page explains how to update using images, and the maintenance page retains customizations. [More information](../../1Deployment/3Updater/DockerUpdate.md)

### Development tools

- **Collection settings:** configure them from the object workbench.
- **Tour editor:** markers follow the selected element as you scroll the page.
- **Module placement:** place modules with the right mouse button or by dragging them, and change their layout from a clearer toolbar. [More information](../../Help/Modules/ModuleManagement.md)

### Navigation in skin 2026

- **Menu nodes:** manage them with the right mouse button. [More information](../../Help/Administration/Skin2026.md)
- **Quick search:** use / to search the visible list and Ctrl+K to browse favorites and recent pages. [More information](../../Help/Administration/Skin2026.md)

### Interface settings

- **Skin 2022:** the settings and health panels adapt their design to its colors. [More information](../../Help/Administration/HealthPanel.md)
- **Sidebar:** Import only appears when an import configuration is active.

### Home and development mode

- **Startup notices:** they appear in an orderly way, and version updates include patches and betas.
- **Skin designers:** they enter development mode when they sign in, without having to open it from the menu.

## Fixes

??? note "See the fixes in this version"

    - **Reports:** related reports correctly use the current record and its filters; Crystal Reports works with databases using Windows authentication.
    - **WebAPI and MCP security:** each process runs only on the object it is defined for; the MCP application includes an SDK version with a security fix. [More information](../../Help/Administration/RolesAndPermissions/4WebAPIMCP.md)
    - **Interface:** new records show an appropriate title, pages without permission display a warning, and images for five page layouts are visible again on Linux and Docker.
    - **Notifications:** in skin 2022, unread notifications once again have a white background, blue bar and blue text.
    - **Scheduled tasks:** they stop correctly when the application is restarted or updated in IIS.
