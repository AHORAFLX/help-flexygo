# Version 10.1

Flexygo 10.1 improves update management and navigation with the 2026 skin. It also adds adjustments for development work and fixes issues with reports, security and the interface.

## Highlights

### Scheduled updates

Schedule, change or cancel updates to run in the background, with notifications and coordinated maintenance mode. Before confirming, you can review the action and preview maintenance mode; when the update finishes, maintenance mode is turned off and administrators receive a notification.

[More information: update flow](../../1Deployment/3Updater/UpdateFlow.md)

### 2026 skin shortcuts

Use / to search the visible list and Ctrl+K to open favorites and recent pages. From there, you can pin pages and browse them with the arrow keys and Enter; press ? to see the shortcuts. These options do not change the 2022 skin or interfere with typing.

[More information: 2026 skin](../../Help/Administration/Skin2026.md)

## Other new features

### Updates

- **Version preparation:** the Updater can update itself and complete delegated preparations and updates even when they exceed the usual time limit. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Overnight preparation:** a task prepares the next project version in the background and records the result.
- **Languages:** the description of the Updater’s preload process is available in more languages. [More information](../../1Deployment/3Updater/UpdateFlow.md)

### Docker and deployment

- **Update wizard:** in Docker, follow five steps and finish with a summary of the result. [More information](../../1Deployment/3Updater/DockerUpdate.md)
- **Docker documentation:** the version page explains how to update using images, and the maintenance page preserves customizations. [More information](../../1Deployment/3Updater/DockerUpdate.md)

### Objects and modules

- **Collection settings:** configure them from the object workbench.
- **Module layout:** place modules with the right-click menu or by dragging them, and change the layout from a clearer toolbar. [More information](../../Help/Modules/ModuleManagement.md)

### Development tools

- **Lowdy:** rotate its character to any angle from the plugin.
- **Tour editor:** markers follow the selected element as you scroll through the page.
- **Development mode:** designers enter it when they sign in, without having to open it from the menu.

### Interface and navigation

- **2026 skin menu:** manage its nodes with the right mouse button. [More information](../../Help/Administration/Skin2026.md)
- **Side menu:** shows Import only when an import configuration is active.
- **Configuration and health panels:** in the 2022 skin, their design uses the skin’s colors. [More information](../../Help/Administration/HealthPanel.md)

### Configuration and processes

- **Database connections:** the `encrypt` attribute is explained when configuring them. [More information](../../1Deployment/2ConfigWizard/Configuration.md)
- **Process buttons:** generic buttons can be shown without an icon.

## Fixes

??? note "See the fixes in this version"

    - **Reports:** related reports apply the current record and its filters again; Crystal Reports works with databases that use Windows authentication.
    - **MCP and security:** the MCP application includes an SDK version with a security fix.
    - **Interface and pages:** new records show an appropriate title, pages without permission display a warning, and five page designs appear again on Linux and Docker.
    - **Notifications:** in the 2022 skin, unread notifications once again have a white background, blue bar and blue text.
    - **Scheduled tasks:** they stop correctly when the application is restarted or updated in IIS.
