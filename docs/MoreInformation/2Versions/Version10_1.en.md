# Version 10.1

Flexygo 10.1 streamlines updates, including in Docker, and improves development and navigation tools. It also adds configuration refinements and fixes issues with reports, the interface and scheduled tasks.

## Other new features

### Updater

- **Updates without waiting:** the Updater can update itself and complete delegated preparations and updates without the general timeout limit. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Overnight preparation:** prepares the next project version in the background and records the result of each task. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Preload information:** the process description is available in more languages. [More information](../../1Deployment/3Updater/UpdateFlow.md)

### Docker deployment

- **Guided update:** the Docker process has five steps and a final summary, and lets you review pending custom differences. [More information](../../1Deployment/3Updater/DockerUpdate.md)
- **Docker documentation:** the versions page explains how to update using images, and the maintenance page preserves customizations. [More information](../../1Deployment/3Updater/DockerUpdate.md)

### Interface and navigation

- **Menu in skin 2026:** manage menu nodes with the right mouse button. [More information](../../Help/Administration/Skin2026.md)
- **Search and shortcuts:** in skin 2026, use / to search the visible list and Ctrl+K to open favorites, recent pages and keyboard shortcuts. [More information](../../Help/Administration/Skin2026.md)

### Development tools

- **Tour editor:** keeps markers beside the selected item, makes modules easier to identify and lets you reorder steps.
- **Module layout:** place modules with the right mouse button or by dragging them, and change the layout from a clearer toolbar. [More information](../../Help/Modules/ModuleManagement.md)

### Configuration

- **Database connections:** the configuration explains the “encrypt” attribute. [More information](../../1Deployment/2ConfigWizard/AppSettingsReference.md)
- **Panels in skin 2022:** the configuration and health panels adapt their design to the skin’s colors. [More information](../../Help/Administration/HealthPanel.md)

### Design and processes

- **Process buttons:** you can leave generic buttons without an icon.
- **Development mode:** designers enter this mode when they sign in, without having to open it from the menu.

## Fixes

??? note "See the fixes in this version"

    - **Reports and integrations:** Crystal Reports can be generated again with Windows authentication, and the MCP application includes an SDK with a security fix.
    - **Interface:** new records show an appropriate title, pages without permission display a security notice, and images for five page layouts appear again on Linux and Docker.
    - **Notifications:** in skin 2022, unread notifications once again have a white background, blue bar and blue text.
    - **Scheduled tasks:** they stop correctly when the application is restarted or updated in IIS.
