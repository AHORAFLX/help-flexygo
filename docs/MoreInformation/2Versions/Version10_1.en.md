# Version 10.1

Flexygo 10.1 brings application health, metrics and settings together in one panel. It also makes updating and deployment easier, with improvements for administering and building your application.

## Highlights

### Health and resources

Check alerts, recommendations, connected users and metrics in one panel. You can also review settings and suggestions for improving the application; changes are recorded, and suggested indexes can be undone. The panel is available to administrators and from the skin 2026 dashboard.

![Health and resources](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[More information: application panel](../../Help/Administration/HealthPanel.md)

## Other new features

### Updates

- **Scheduled updates:** schedule, change or cancel updates; they run in the background with notifications and a coordinated maintenance mode. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Updater:** it can update itself and complete delegated preparations and updates even when they exceed the usual timeout. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Nightly preparation:** a task prepares the next project version in the background and records the result. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Docker:** updates follow a five-step wizard and finish with a summary of the result. [More information](../../1Deployment/3Updater/DockerUpdate.md)

### Deployment and products

- **Exporting a product:** when exporting a project as a product, you can choose whether to include its data database.
- **Docker:** the versions page explains how to update using images, and the maintenance page preserves customizations. [More information](../../1Deployment/3Updater/DockerUpdate.md)

### Administration and security

- **Application settings:** set how long frontend-to-backend calls can take, and view or change settings from the application settings screen. [More information](../../Help/Administration/AppSettings.md)
- **Database connections:** when configuring a connection, the meaning of the “encrypt” attribute is explained. [More information](../../1Deployment/2ConfigWizard/AppSettingsReference.md)
- **Visibility filters:** they are applied when reading records by key from any screen or call. [More information](../../Help/Administration/RolesAndPermissions/1Overview.md)
- **Skin 2022:** the settings and health panels use a clear design adapted to its colors. [More information](../../Help/Administration/AppSettings.md)

### Interface and navigation

- **Search in skin 2026:** use / to search the visible list and Ctrl+K to view favorites and recent pages. [More information](../../Help/Administration/Skin2026.md)
- **Skin 2026 menu:** manage its nodes with the right mouse button. [More information](../../Help/Administration/Skin2026.md)
- **Sidebar:** Import appears only when an import configuration is active.
- **Startup notifications:** they appear in an orderly way, and version updates also include patches and beta versions.

### Development tools

- **Collections:** configure their settings from the object workbench.
- **Guided tours:** editor markers follow the selected element as you scroll through the page.
- **Modules:** place them with the right mouse button or by dragging, and change the layout from a clearer toolbar. [More information](../../Help/Modules/ModuleManagement.md)
- **Lowdy:** rotate its character to any angle.
- **Designers:** they enter development mode when you sign in, without needing to open it from the menu.

### Reports and processes

- **Excel:** export reports and lists at the same time without the files getting mixed up.
- **Process buttons:** generic buttons can be left without an icon.

## Fixes

??? note "See the fixes in this version"

    - **Reports:** related reports use the current record’s data and filters; Crystal Reports works with databases that use Windows authentication.
    - **MCP and WebAPI:** the MCP application includes an SDK version with a security fix, and each process runs only on the object it is defined for.
    - **Interface:** new records show an appropriate title, pages without permission display a security notice, and layout images appear again on Linux and Docker.
    - **Notifications:** in skin 2022, unread notifications again appear with a white background, blue bar and blue text.
    - **Scheduled tasks:** they stop correctly when the application restarts or updates in IIS.
