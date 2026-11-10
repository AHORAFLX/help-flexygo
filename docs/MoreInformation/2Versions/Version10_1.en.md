# Version 10.1

Flexygo 10.1 brings together information for monitoring your application’s health and resources in a single panel. It also makes updates easier and adds practical changes to development tools and the interface.

## Highlights

### Health and resources in one panel

View alerts, recommendations, connected users and metrics in a single panel. You can also review application settings and suggestions for optimizing it; changes are recorded, and suggested indexes can be undone. The panel is available to administrators and from the skin 2026 control panel.

![Health and resources in one panel](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[More information: application panel](../../Help/Administration/HealthPanel.md)

## Other new features

### Updates

- **Scheduling:** schedule, change or cancel updates, which run in the background with notifications and a coordinated maintenance mode. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Preparation:** the Updater can update itself and complete delegated preparations and updates that exceed the usual timeout. The nightly task prepares the next project version and records the result. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Languages:** the description of the Updater’s preload process is available in more languages. [More information](../../1Deployment/3Updater/UpdateFlow.md)

### Docker

- **Update wizard:** in Docker, the update follows five steps and ends with a summary of the result. [More information](../../1Deployment/3Updater/DockerUpdate.md)
- **Documentation:** the versions page explains how to update using images, and the maintenance page preserves customizations. [More information](../../1Deployment/3Updater/DockerUpdate.md)

### Configuration

- **Collections:** configure their settings from the object workbench.
- **Database connections:** the configuration explains the “encrypt” attribute. [More information](../../1Deployment/2ConfigWizard/Configuration.md)

### Development tools

- **Tour editor:** markers follow the selected element as you scroll through the page.
- **Module layout:** place modules with the right mouse button or by dragging them, and change the layout from a clearer toolbar. [More information](../../Help/Modules/ModuleManagement.md)

### Interface and navigation

- **Skin 2026 menu:** manage its nodes with the right mouse button. [More information](../../Help/Administration/Skin2026.md)
- **Search in skin 2026:** use / to search the visible list and Ctrl+K to view favorites and recent pages. [More information](../../Help/Administration/Skin2026.md)
- **Sidebar:** shows Import only when an import configuration is active.

### Skins and processes

- **Skin 2022:** the configuration and health panels adapt their design to its colors. [More information](../../Help/Administration/HealthPanel.md)
- **Designers:** when they sign in, they enter development mode automatically without having to open it from the menu.
- **Process buttons:** you can leave generic buttons without an icon.

## Fixes

??? note "See the fixes in this version"

    - **Reports:** related reports apply the current record and its filters; Crystal Reports works with databases that use Windows authentication.
    - **Security and integrations:** the MCP application includes an SDK version with a security fix.
    - **Interface:** new records show an appropriate title, pages without permission display a notice, and images for five page layouts are shown again on Linux and Docker.
    - **Notifications:** in skin 2022, unread notifications are shown again with a white background, blue bar and blue text.
    - **Scheduled tasks:** in IIS, they stop correctly when the application restarts or updates.
