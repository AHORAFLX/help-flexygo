# Version 10.1

Flexygo 10.1 improves navigation in skin 2026 and streamlines updates and deployment. It also adds refinements for application designers and developers, along with fixes to the interface, reports and scheduled tasks.

## Highlights

### Search and shortcuts in skin 2026

In skin 2026, press / to search the visible list and Ctrl+K to view your favourites and recent pages. From there, you can pin pages and open them with the arrow keys and Enter, as well as check the shortcuts. Press ? to view them when you are not typing.

[More information: skin 2026 interface](../../Help/Administration/Skin2026.md)

## Other new features

### Updater

- **Updater updates:** it can update itself and complete delegated preparations and updates without the general timeout limit. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Overnight preparation:** gets the next project version ready in the background and records the result of each task. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Preloading:** the process description is available in more languages. [More information](../../1Deployment/3Updater/UpdateFlow.md)

### Docker deployment

- **Guided update:** a five-step wizard provides a final summary and lets you review pending custom differences. [More information](../../1Deployment/3Updater/DockerUpdate.md)
- **Images and maintenance:** the help explains how to update using images and preserves customisations on the maintenance page. [More information](../../1Deployment/3Updater/DockerUpdate.md)

### Development tools

- **Lowdy:** the plugin lets you turn the character to any angle.
- **Tour editor:** keeps markers beside the selected item, makes modules easier to identify and helps you reorder steps.
- **Module layout:** you can place modules with the right mouse button or by dragging them, and change the layout from a clearer toolbar. [More information](../../Help/Modules/ModuleManagement.md)

### Menus and navigation

- **Menu nodes:** in skin 2026, you can manage them with the right mouse button. [More information](../../Help/Administration/Skin2026.md)
- **Import:** the sidebar shows this option only when an import configuration is active.

### Settings

- **Database connections:** the settings explain the “encrypt” attribute. [More information](../../1Deployment/2ConfigWizard/Configuration.md)
- **Panels in skin 2022:** the configuration and health panels adapt their design to the skin’s colours. [More information](../../Help/Administration/ControlPanel.md)

### Design and processes

- **Designers:** when you sign in, they enter development mode without you having to open it from the menu.
- **Generic process buttons:** you can leave them without an icon.

## Fixes

??? note "See the fixes in this version"

    - **Reports:** you can generate Crystal Reports again on databases that use Windows authentication.
    - **Security and integrations:** pages without permission display a security notice, and the MCP application includes an SDK version with a security fix.
    - **Records:** new records display an appropriate title again.
    - **Page layouts:** images for five layouts display again in Linux and Docker installations.
    - **Notifications:** in skin 2022, unread notifications have their white background, blue bar and blue text again.
    - **Scheduled tasks:** they stop correctly when the application restarts or updates in IIS.
