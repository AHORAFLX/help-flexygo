# Version 10.1

Flexygo 10.1 brings your application’s health, metrics and settings together in one panel. It also makes updates easier and adds refinements to the development tools and interface.

## Highlights

### Health and resources panel

View alerts, recommendations, connected users and metrics in one administration panel. You can also review settings and suggestions to optimise the application; changes are recorded, and suggested indexes can be undone. The panel is available to administrators and from the skin 2026 control panel.

![Health and resources panel](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[More information: application health](../../Help/Administration/HealthPanel.md)

## Other new features

### Updates

- **Scheduling:** schedule, change or cancel updates that run in the background, with notifications and a coordinated maintenance mode. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Updater:** it can update itself and complete delegated preparations and updates even when they exceed the usual timeout. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Overnight preparation:** a task prepares the next project version in the background and records the result. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Process information:** the Updater’s preloading description is available in more languages. [More information](../../1Deployment/3Updater/UpdateFlow.md)

### Docker and deployment

- **Update wizard:** in Docker, follow five steps and finish with a summary of the result. [More information](../../1Deployment/3Updater/DockerUpdate.md)
- **Docker documentation:** the version page explains image-based updates, and the maintenance page preserves customisations. [More information](../../1Deployment/3Updater/DockerUpdate.md)

### Development tools

- **Collections:** configure their settings from the object workbench.
- **Tour editor:** markers follow the selected element as you scroll through the page.
- **Module layout:** place modules with the right mouse button or by dragging them, and change the layout from a clearer toolbar. [More information](../../Help/Modules/ModuleManagement.md)

### Interface and navigation

- **Skin 2026 menu:** manage menu nodes with the right mouse button. [More information](../../Help/Administration/Skin2026.md)
- **Quick search:** in skin 2026, use / to search the visible list and Ctrl+K to find favourites and recent pages. [More information](../../Help/Administration/Skin2026.md)
- **Sidebar:** shows Import only when an import configuration is active.

### Settings and appearance

- **Database connections:** the settings explain the “encrypt” attribute. [More information](../../1Deployment/2ConfigWizard/Configuration.md)
- **Skin 2022:** the settings and health panels adapt their design to its colours. [More information](../../Help/Administration/HealthPanel.md)

### Design and processes

- **Development mode:** designers enter this mode when they sign in, without needing to open it from the menu.
- **Lowdy:** the plugin lets you rotate its character to any angle.
- **Process buttons:** you can leave generic buttons without an icon.

## Fixes

??? note "See the fixes in this version"

    - **Reports:** related reports apply the current record and its filters; Crystal Reports works with databases that use Windows authentication.
    - **Integrations and security:** MCP includes a security fix, and the WebAPI and MCP restrict each process to the object it is defined for. [More information](../../Help/Administration/RolesAndPermissions/4WebAPIMCP.md)
    - **Interface:** new records show an appropriate title, pages without permission display a notice, and five page designs are visible again on Linux and Docker.
    - **Notifications:** in skin 2022, unread notifications once again appear with a white background, blue bar and blue text.
    - **Scheduled tasks:** they stop correctly when the application is restarted or updated in IIS.
