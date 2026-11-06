# Version 10.1

Flexygo 10.1 makes updates easier, with new steps for Docker and background tasks that prepare the next version. It also adds navigation and development tool improvements, and fixes issues with reports, the interface, and scheduled tasks.

## Other new features

### Updater

- **Updater updates:** it can update itself and complete delegated preparations and updates without the general timeout limit. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Docker:** the update follows a five-step wizard with a final summary, and lets you review pending custom differences. [More information](../../1Deployment/3Updater/DockerUpdate.md)

### Version preparation

- **Overnight preparation:** it prepares the next project version in the background and records the result of each task. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Process information:** the description of the Updater's preload process is available in more languages. [More information](../../1Deployment/3Updater/UpdateFlow.md)

### Navigation in skin 2026

- **Menu:** manage its nodes with the right mouse button. [More information](../../Help/Administration/Skin2026.md)
- **Search and shortcuts:** use / to search the visible list and Ctrl+K to open favorites, recent pages, and keyboard shortcuts. [More information](../../Help/Administration/Skin2026.md)

### Development tools

- **Lowdy:** the plugin lets you rotate the character to any angle.
- **Tour editor:** keeps markers beside the selected element, helps identify modules, and makes it easier to reorder steps.
- **Module placement:** add modules with the right mouse button or by dragging them, and change their layout from a clearer toolbar.

### Configuration

- **Database connections:** the configuration now explains the “encrypt” attribute. [More information](../../1Deployment/2ConfigWizard/AppSettingsReference.md)
- **Skin 2022:** the configuration and health panels adapt their design to the skin's colors. [More information](../../Help/Administration/HealthPanel.md)

### Customization

- **Process buttons:** you can leave generic buttons without an icon.
- **Skin designers:** they now enter development mode when they sign in, without having to open it from the menu.

## Fixes

??? note "See the fixes in this version"

    - **Reports:** Crystal Reports can once again be generated with databases that use Windows authentication.
    - **MCP security:** the application includes an SDK version with a security fix.
    - **Interface:** new records show an appropriate title, pages without permission display a warning, and page design images appear again on Linux and Docker.
    - **Notifications:** in skin 2022, unread notifications once again appear with a white background, blue bar, and blue text.
    - **Scheduled tasks:** they now stop correctly when the application restarts or updates in IIS.
