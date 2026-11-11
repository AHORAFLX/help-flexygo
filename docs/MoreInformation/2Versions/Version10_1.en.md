# Version 10.1

Flexygo 10.1 brings the application’s status and resources together in one panel and makes its settings easier to manage. It also improves updates, deployment and several everyday tools.

## Highlights

### Health and resources panel

View application alerts, recommendations, connected users and metrics in one panel. You can also review settings and suggestions to optimize the application; changes are recorded, and suggested indexes can be undone. The panel is available to administrators and from the skin 2026 dashboard.

![Health and resources panel](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[More information: application health](../../Help/Administration/HealthPanel.md)

## Other new features

### Updates

- **Scheduling:** schedule, change or cancel updates; they run in the background with notifications and coordinated maintenance mode. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Updater:** it can now update itself and complete delegated preparations and updates that exceed the usual timeout. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Docker:** follow a five-step update wizard and review a summary of the result when it finishes. [More information](../../1Deployment/3Updater/DockerUpdate.md)
- **Nightly preparation:** the nightly task prepares the next project version in the background and records the result. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Preloading:** the description of the preloading process is available in more languages. [More information](../../1Deployment/3Updater/UpdateFlow.md)

### Deployment

- **Export products:** when exporting a project as a product, choose whether to include its data database. [More information](../../2ProductDevelopment/8ExportProject/2Reference.md)
- **Docker:** the versions page explains how to update using images, and the maintenance page preserves customizations. [More information](../../1Deployment/3Updater/DockerUpdate.md)

### Administration and settings

- **Application settings:** administrators can view and change settings from the application settings screen. [More information](../../Help/Administration/AppSettings.md)
- **Connections:** the configuration clarifies the purpose of the `encrypt` attribute for application and database connections. [More information](../../1Deployment/2ConfigWizard/EncryptedSettings.md)
- **Skin 2022:** the settings and health panels have a clear design that matches its colors.

### Development tools

- **Collections:** configure their settings from the object workbench.
- **Menus:** in skin 2026, manage menu nodes with the right mouse button. [More information](../../Help/Administration/Skin2026.md)
- **Guided tours:** in the editor, markers follow the selected element as you scroll the page.
- **Modules:** place them with the right mouse button or by dragging, and change their layout from a clearer toolbar. [More information](../../Help/Modules/ModuleManagement.md)
- **Development mode:** designers enter this mode when they sign in, without having to open it from the menu.

### Interface

- **Search in skin 2026:** use `/` to search the visible list and `Ctrl+K` to view favorites and recent pages. [More information](../../Help/Administration/Skin2026.md)
- **Sidebar:** Import appears only when an import configuration is active.

### Home and processes

- **Home notifications:** they appear in an orderly way; version updates also include patches and beta releases.
- **Process buttons:** generic process buttons can be displayed without an icon.

## Fixes

??? note "See the fixes in this version"

    - **Reports:** related reports respect the current record and its filters; Crystal Reports works with databases that use Windows authentication.
    - **Security and integrations:** MCP includes an SDK version with a security fix, and the Web API and MCP run each process only on its defined object.
    - **Interface:** new records display an appropriate title, and pages without permission show a restriction notice.
    - **Page layouts:** images for five layouts are displayed again on Linux and Docker installations.
    - **Notifications:** in skin 2022, unread notifications again have a white background, blue bar and blue text.
    - **Scheduled tasks:** they stop correctly when the application is restarted or updated in IIS.
