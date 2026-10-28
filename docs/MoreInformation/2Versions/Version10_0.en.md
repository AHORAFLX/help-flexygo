# Version 10.0

Flexygo 10.0 moves to .NET 9, introduces the Flexygo 2026 skin and puts artificial intelligence to work with you. Installing, updating and exporting your projects is also simpler.

## Highlights

### Flexygo on .NET 9

Flexygo runs on .NET 9. The interface, the backend and the database can run on the same server or on different ones, on IIS, as a service or in Docker, on both Windows and Linux.

![Flexygo on .NET 9](../../docs_assets/images/Versions/Version10_0/net9-architecture.png)

[More information: Flexygo architecture](../../1Deployment/Architecture.md)

### Setup wizard

The first time you open a new installation, a wizard on the login page takes you through the connection, the databases, the project and the mail. It checks every value before saving it and, if you leave, you continue where you left off.

![Setup wizard](../../docs_assets/images/Versions/Version10_0/setup-wizard.png)

[More information: configuration wizard](../../1Deployment/2ConfigWizard/Configuration.md)

### The Flexygo 2026 skin

A complete redesign of the application, with a side bar that groups the menus and can be collapsed, new typography and controls, and light, dark or system themes. The previous skin is still available.

![The Flexygo 2026 skin](../../docs_assets/images/Versions/Version10_0/skin-2026.png)

[More information: Flexygo 2026 skin](../../Help/Administration/Skin2026.md)

### Icon browser

Search more than 5,000 icons, preview them and copy them. Administrators can add their own SVGs and generate the font of the project's icon libraries.

![Icon browser](../../docs_assets/images/Versions/Version10_0/icon-browser.png)

[More information: icons](../../Help/Style/Icon.md)

### AI assistants through MCP

Connect Claude or ChatGPT to Flexygo to query your data and, if you allow it, change records and run processes. Always with the user's permissions, and the user decides whether the access is read-only.

![AI assistants through MCP](../../docs_assets/images/Versions/Version10_0/mcp-assistant-panel.png)

[More information: AI assistants](../../Help/AIAssistants/1TryIt.md)

### A renewed updater

A wizard installs, reverts or switches versions: it checks the requirements and the locks, shows the progress and the result of each step, and rolls back if something fails.

![A renewed updater](../../docs_assets/images/Versions/Version10_0/updater-wizard.png)

[More information: update flow](../../1Deployment/3Updater/UpdateFlow.md)

### Export your project as a product

Turn the installed application into a product project: choose what it includes and its template, follow the progress and download a ZIP ready to open in Visual Studio.

![Export your project as a product](../../docs_assets/images/Versions/Version10_0/export-as-project.png)

[More information: export a project](../../2ProductDevelopment/8ExportProject/1TryIt.md)

### Build products by talking

Tell an AI assistant connected to the Flexygo MCP what application you need: it gathers the requirements, proposes the design and builds it with you. A board brings together the tasks, the decisions and the quality checks.

![Build products by talking](../../docs_assets/images/Versions/Version10_0/mcp-product-building.png)

[More information: MCP workflow](../../2ProductDevelopment/MCP/6Workflow.md)

## Other new features

### Installation and deployment

- **Unattended installation:** the installation can complete on its own when the backend starts. [More information](../../MoreInformation/3DidYouKnow/UnattendedInstallCLI.md)
- **Docker:** Flexygo images, database deployment and updates from the maintenance page. [More information](../../1Deployment/4Docker/index.md)
- **Separate frontend and backend:** file operations work across both servers.
- **Linux:** the deployment scripts and the updater downloads work on Linux.
- **Data databases:** published from the configurator, also empty or without a definition file.

### Configuration and administration

- **Configuration screen:** administrators view and edit the installation settings, and nothing is saved until it is checked to work. [More information](../../1Deployment/2ConfigWizard/AppSettingsReference.md)
- **Encrypted secrets:** passwords and keys in the configuration are stored encrypted. [More information](../../1Deployment/2ConfigWizard/EncryptedSettings.md)
- **Maintenance mode:** shows users a notice while the application is unavailable. [More information](../../MoreInformation/3DidYouKnow/MaintenanceMode.md)
- **Reload the screens** of every connected user or of specific sessions.
- **Licenses:** a page shows the level, the extensions and the status of the license.
- **Offline applications:** their configuration is organised in sections, with a sync history and a mobile emulator.

### Login

- **New sign-in methods:** multi-factor authentication, LDAP, Cl@ve and SSO. [More information](../../Help/Information/MFA.md)
- **Configurable account lockout:** failed attempts and duration.
- **Renewed account pages** to sign up, sign in and recover the password, customisable from your product.
- **News** on the login page, which you can turn off.

### Security

- **Security screen:** manage permissions and rules from a table and see how they apply to users, roles and faculties. [More information](../../Help/Administration/RolesAndPermissions/1Overview.md)
- **Permissions per process**, also without an object, with optional SQL conditions.
- **Object security conditions** by choosing a property, an operator and a value.
- Role and permission changes apply **without signing in again**.

### WebAPI and integrations

- **Token permissions:** the WebAPI and MCP apply the token's permissions and can limit responses to each object's properties. [More information](../../Help/Administration/RolesAndPermissions/4WebAPIMCP.md)
- **Attack protection:** IPs with too many failed attempts are blocked for a while.
- **Bulk operations** and relation queries, with a clearer OpenAPI definition you can browse in Scalar. [More information](../../Help/Programming/WebAPI.md)
- **External objects:** query and update data from REST services in lists, forms, calendars and kanban boards. [More information](../../Help/Programming/ExternalEntities.md)
- **Webhooks** and rules that automate actions when records are saved. [More information](../../Help/Programming/ApprovalsAndWebhooks.md)

### Interface

- **Editing in lists:** edit values right in the list and add rows from it.
- **Filters as chips** you can edit, applied at once.
- **Arrange the modules** of a page by dragging and resizing them on the page itself. [More information](../../Help/Modules/ModuleManagement.md)
- **Renewed home dashboard** and a home page you can set per profile.
- **Calendars** with a year view, filters and range selection. [More information](../../Help/Modules/SchedulerCalendarV10.md)
- **Welcome tour** with Lowdy, and a builder to make your own by pointing at the elements of each screen.
- Forms fit small screens better and the save bar always stays in view.
- Pages load faster and show a progress bar.

### Charts and reports

- **ECharts module:** radar, bubble, combined, doughnut, polar area and more, with many more customisation options. [More information](../../Help/Modules/ECharts.md)
- **Chart themes** you can configure, which follow the skin and the light or dark mode.
- **Renewed indicator cards**, with optional trends.
- **Crystal and DevExpress reports** as PDF, also in base64.

### Notifications and jobs

- **Real-time notices** when records of the objects you follow are created, changed or deleted, only for the records each user can see.
- **Push notifications.** [More information](../../Help/Connectors/PushNotifications.md)
- **Scripts as scheduled jobs**, which can be turned off from the configuration. [More information](../../Help/Programming/DatabaseScriptJobs.md)
- Lists, the planner and the kanban board show new records without reloading the page.

### Development tools

- **Object designer:** tabs, wider quick settings and shortcuts to the object's list, form and security.
- **New shared controls:** tabs and sliders.
- **Friendly URLs** for pages. [More information](../../Help/Information/FriendlyURLs.md)
- **Chunked file uploads**, with progress.
- **Error list** you can filter, with the details of each error.
- **Debugging** with source maps, and bundle optimisation from the development menu.

## Fixes

??? note "See the fixes in this version"

    - **Security:** records, templates and object views apply the role's permissions and filters; external addresses and return URLs are validated.
    - **WebAPI:** token validation, redirection, requests without a body and processes on inserts are fixed.
    - **Login:** signing in works without an alias and after resetting the password, and the after-login process runs only once.
    - **Lists and filters:** deleting the last row shows the last page; filters work with empty values and with their dependencies.
    - **Forms:** decimal and boolean values, the barcode control and closing dialogs on delete are fixed.
    - **Documents and images:** downloads and file names are right through the proxy and with external folders.
    - **Processes:** C# code processes, the Excel import, Redsys and restarting failed jobs are fixed.
    - **Artificial intelligence:** vector searches, ChatGPT requests and the layout on different screen sizes are fixed.
    - **Interface:** layout details in the kanban board, the calendars, dark mode and the module grid are fixed.
    - **Notifications and conversations:** mentions notify again and the sound no longer repeats when many notifications arrive at once.
