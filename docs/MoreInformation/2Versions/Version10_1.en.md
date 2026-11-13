# Version 10.1

Flexygo 10.1 helps you understand and optimize your application’s health, while making updates and deployment more flexible. It also brings improvements to configuration, development tools, the interface, and security.

## Highlights

### Health and resources panel

Review your application’s alerts, recommendations, connected users, metrics, and settings in one panel. You can also explore optimization suggestions, undo suggested indexes, and check the change history. The panel is available to administrators and from the skin 2026 dashboard.

![Health and resources panel](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[More information: application health](../../Help/Administration/HealthPanel.md)

## Other new features

### Updates and deployment

- **Scheduled updates:** schedule, change, or cancel updates; they run in the background with notifications and coordinated maintenance mode. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Version preparation:** the Updater can update itself and complete delegated tasks; the overnight task prepares the next version and records the result. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Docker updates:** follow a five-step wizard and review a summary of the result. The documentation explains image-based updates and preserves customizations to the maintenance page. [More information](../../1Deployment/3Updater/DockerUpdate.md)
- **Deployment resources:** calculate recommended servers based on usage and check how your installation compares with the recommendations.
- **Product export:** choose whether to include the data database when exporting a project as a product. [More information](../../2ProductDevelopment/8ExportProject/2Reference.md)

### Configuration

- **Development changes:** take effect on the next request without reloading the cache. [More information](../../Help/Administration/AppSettings.md)
- **Application settings:** configure how long calls between the frontend and backend can last; administrators can also view and change settings from their settings screen. [More information](../../Help/Administration/AppSettings.md)
- **Connections and design:** the configuration explains what the “encrypt” attribute means for database connections, and skin 2022 adapts the configuration and health panels to its colors. [More information](../../1Deployment/2ConfigWizard/EncryptedSettings.md)

### Development tools

- **Collections:** configure their settings from the object workbench.
- **Lowdy plugin:** rotate its character to any angle you choose.
- **Scripts:** respect the user’s culture and can wait for other processes to finish.
- **Tours and modules:** markers follow the selected element as you scroll; place modules by right-clicking or dragging, and change the layout from a clearer toolbar. [More information](../../Help/Modules/ModuleManagement.md)

### Interface

- **Skin 2026 menu:** edit, add, set the visibility of, or remove nodes with a right-click. [More information](../../Help/Administration/Skin2026.md)
- **Quick access:** in skin 2026, press / to search and Ctrl+K to open favorites, recent pages, and shortcuts. [More information](../../Help/Administration/Skin2026.md)
- **Sidebar:** shows Import only when an import configuration is active. Designers enter development mode when they sign in. [More information](../../Help/Administration/Skin2026.md)
- **Startup notices:** appear in order, and version updates include patches and betas.

### Assistants and integrations

- **Flexygo assistant:** interact with screens and filter or sort views from chat, with user approval and in line with their permissions. [More information](../../Help/AIAssistants/3Decisions.md)
- **Brevo:** add or remove contacts from a list using only their email address. [More information](../../Help/Connectors/SendinBlue.md)

### Reports and processes

- **Excel export:** export reports and lists at the same time without their files getting mixed up.
- **Process buttons:** you can leave generic buttons without an icon.

### Performance

- **Application loading:** configuration and the main pages and lists load faster.

### Security

- **Edit permissions:** role restrictions also apply when saving values. [More information](../../Help/Administration/RolesAndPermissions/1Overview.md)
- **Visibility filters:** apply when reading records by key, from any screen or call. [More information](../../Help/Administration/RolesAndPermissions/1Overview.md)

## Fixes

??? note "See the fixes in this version"

    - **Reports:** related reports apply the current record’s data and filters; Crystal Reports works with databases that use Windows authentication.
    - **Sign-in:** LDAP sign-in validates the password against the directory again.
    - **Integrations:** certificate passwords are handled correctly, and the MCP application includes an SDK version with a security fix.
    - **Interface:** the counter includes all unread notices, pages no longer duplicate module columns, new records show an appropriate title, and pages you cannot access display a warning. Page design images also appear again on Linux and Docker, and the appearance of unread notices is restored in skin 2022.
    - **Security:** data entered in records is shown as safe text and does not run template code. The WebAPI and MCP run each process only on the object it is defined for. [More information](../../Help/Administration/RolesAndPermissions/4WebAPIMCP.md)
    - **Scheduled tasks:** stop correctly when the application restarts or is updated in IIS.
