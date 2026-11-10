# Version 10.1

Flexygo 10.1 makes updates easier to manage and adds new shortcuts for navigating the 2026 skin. It also improves working with Docker, configuration, and several development tools.

## Highlights

### Scheduled updates

Schedule, change, or cancel an update and let it run in the background. Before confirming, review the action and a preview of maintenance mode. You’ll receive notifications during the process, and maintenance mode will turn off automatically when the update is complete.

[More information: Flexygo updater](../../1Deployment/3Updater/UpdateFlow.md)

### 2026 skin shortcuts

Press / to search the visible list, or Ctrl+K to open favorites and recent pages, pin pages, and see available shortcuts. Press ? to view shortcuts when you’re not typing. These changes are exclusive to the 2026 skin; the 2022 skin is unchanged.

[More information: skin updates](../../Help/Administration/Skin2026.md)

## Other new features

### Updates

- **Preparation:** the updater can update itself and complete delegated preparations and updates even when they exceed the usual timeout. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Nightly task:** prepares the project’s next version in the background and records the result. [More information](../../1Deployment/3Updater/UpdateFlow.md)

### Docker and deployment

- **Docker updates:** follow a five-step wizard and finish with a summary of the result. [More information](../../1Deployment/3Updater/DockerUpdate.md)
- **Images and maintenance:** the documentation explains how to update with Docker images and keeps customizations on the maintenance page. [More information](../../1Deployment/3Updater/DockerUpdate.md)

### Development tools

- **Lowdy:** rotate the character to any angle.
- **Tour editor:** keeps markers next to the selected item, makes modules easier to identify, and helps reorder steps.
- **Modules:** place them with the right mouse button or by dragging, and change the layout from a clearer toolbar. [More information](../../Help/Modules/ModuleManagement.md)

### Menus and navigation

- **Menu nodes:** in the 2026 skin, manage them with the right mouse button. [More information](../../Help/Administration/Skin2026.md)
- **Import:** the sidebar shows this option only when an import configuration is active.

### Configuration and skins

- **Database connections:** the configuration explains the “encrypt” attribute. [More information](../../1Deployment/2ConfigWizard/Configuration.md)
- **2022 skin:** the configuration and health panels adapt their design to its colors. [More information](../../Help/Administration/HealthPanel.md)

### Processes and design

- **Process buttons:** generic buttons can be left without an icon.
- **Skin designers:** go straight into development mode when they sign in.

## Fixes

??? note "See the fixes in this version"

    - **Reports:** related reports again apply the current record and its filters, and reports work correctly with Windows authentication.
    - **Security and integrations:** the MCP application now includes an SDK version with a security fix. [More information](../../2ProductDevelopment/MCP/1Prerequisites.md)
    - **Interface and pages:** new records show an appropriate title, pages without permission display a security notice, and five page designs are visible again on Linux and Docker.
    - **Notifications:** unread notifications once again have a white background, blue bar, and blue text in the 2022 skin.
    - **Scheduled tasks:** stop correctly when the application restarts or updates in IIS.
