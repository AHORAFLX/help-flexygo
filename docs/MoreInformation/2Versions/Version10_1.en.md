# Version 10.1

Flexygo 10.1 streamlines project preparation and updates, including in Docker. It also adds ways to work with the 2026 skin and improves several development and configuration tools.

## Other new features

### Updater

- **Self-update:** the Updater can update itself and complete delegated preparations and updates without the general timeout limit. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Preload description:** information about this process is available in more languages. [More information](../../1Deployment/3Updater/UpdateFlow.md)

### Deployment and preparation

- **Docker updates:** a five-step wizard guides the process, shows a final summary, and lets you review pending custom differences. [More information](../../1Deployment/3Updater/DockerUpdate.md)
- **Overnight preparation:** prepares the project’s next version in the background and records the result of each task. [More information](../../1Deployment/3Updater/UpdateFlow.md)

### Interface and navigation

- **2026 skin menu:** manage menu nodes with the right mouse button. [More information](../../Help/Administration/Skin2026.md)
- **Search and quick access:** in the 2026 skin, use / to search the visible list and Ctrl+K to open favorites, recent pages, and shortcuts. [More information](../../Help/Administration/Skin2026.md)

### Development tools

- **Journey editor:** keeps markers next to the selected item and makes it easier to identify modules and reorder steps.
- **Module layout:** place modules with the right mouse button or by dragging them, and change the layout from a clearer toolbar.
- **Lowdy:** the plugin lets you rotate the character to any angle.

### Configuration

- **Database connections:** the “encrypt” attribute is explained when configuring them. [More information](../../1Deployment/2ConfigWizard/AppSettingsReference.md)
- **Panels in the 2022 skin:** the configuration and health panels adapt their design to the skin’s colors. [More information](../../Help/Administration/HealthPanel.md)

### Process and skin customization

- **Process buttons:** you can leave generic buttons without an icon.
- **Skin designers:** when you sign in, they open directly in development mode without needing to launch it from the menu.

## Fixes

??? note "See the fixes in this version"

    - **Reports:** Crystal Reports can once again be generated from databases using Windows authentication.
    - **MCP security:** the MCP application now includes an SDK version with a security fix.
    - **Interface:** images for five page layouts are visible again on Linux and Docker, and unread notifications regain their intended style in the 2022 skin.
    - **Scheduled tasks:** they stop correctly when the application is restarted or updated in IIS.
