# Version 10.1

Flexygo 10.1 brings together information for checking and optimising application health in one panel. It also makes updates easier to manage and improves configuration, development and interface tools.

## Highlights

### Health and resources panel

View alerts, recommendations, connected users, metrics and settings in one panel. You can also review suggestions for optimising the application; changes are recorded, and you can undo suggested indexes. The panel is available to administrators and from the skin 2026 control panel.

![Health and resources panel](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[More information: application health panel](../../Help/Administration/HealthPanel.md)

## Other new features

### Updates

- **Scheduling:** schedule, change or cancel updates; they run in the background with notifications and a coordinated maintenance mode. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Updater:** it can update itself and complete delegated preparation or updates even when they exceed the usual timeout. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Overnight preparation:** prepares the project's next version in the background and records the result. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Docker:** updates follow a five-step guide and end with a summary; the documentation explains image-based updates and preserves maintenance customisations. [More information](../../1Deployment/3Updater/DockerUpdate.md)
- **Preloading:** the description of the Updater's preloading process is available in more languages. [More information](../../1Deployment/3Updater/UpdateFlow.md)

### Deployment

- **Product export:** when exporting a project as a product, you can choose whether to include its data database. [More information](../../2ProductDevelopment/8ExportProject/2Reference.md)

### Configuration and administration

- **Application settings:** administrators can view and edit them from the configuration screen. [More information](../../Help/Administration/AppSettings.md)
- **Connections:** the purpose of the `encrypt` attribute is clarified when configuring application and database connections. [More information](../../1Deployment/2ConfigWizard/EncryptedSettings.md)
- **Skin 2022:** the configuration and health panels have a clear design that matches its colours. [More information](../../Help/Administration/AppSettings.md)

### Development tools

- **Collections:** configure their settings from the object workbench.
- **Tour editor:** markers follow the selected element as you scroll through the page.
- **Page design:** place modules by right-clicking or dragging them, and change the layout from a clearer toolbar. [More information](../../Help/Modules/ModuleManagement.md)

### Interface

- **Lowdy:** the plugin lets you rotate its character to any angle.
- **Skin 2026:** manage menu nodes by right-clicking, search the visible list with /, and use Ctrl+K to open favourites and recent pages. [More information](../../Help/Administration/Skin2026.md)
- **Sidebar:** Import appears only when an import configuration is active. [More information](../../Help/Administration/Skin2026.md)
- **Development mode:** designers enter this mode when they sign in, without having to open it from the menu.

### Reports and home

- **Excel export:** you can export reports and lists at the same time without the files getting mixed up.
- **Notifications and versions:** home notifications appear in order, and version updates include patches and betas.

### Security and processes

- **Visibility filters:** they apply when reading records by key from any screen or call. [More information](../../Help/Administration/RolesAndPermissions/1Overview.md)
- **Process buttons:** you can leave generic buttons without an icon.

## Fixes

??? note "See the fixes in this version"

    - **Reports:** related reports use the current record's data and filters; Crystal Reports works with databases that use Windows authentication.
    - **WebAPI and MCP security:** each process runs only on the object it is defined for; the MCP application includes an SDK version with a security fix. [More information](../../Help/Administration/RolesAndPermissions/4WebAPIMCP.md)
    - **Screens and records:** new records show an appropriate title, and pages without permission display a security warning.
    - **Layouts on Linux and Docker:** images for five page layouts are displayed again.
    - **Notifications:** in skin 2022, unread notifications once again have a white background, blue bar and blue text.
    - **Scheduled tasks:** they stop correctly when the application is restarted or updated in IIS.
