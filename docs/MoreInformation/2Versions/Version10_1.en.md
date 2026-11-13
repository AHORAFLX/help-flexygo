# Version 10.1

Flexygo 10.1 makes it easier to monitor your application's health and streamlines updates and deployment. It also brings improvements to settings, the interface and security.

## Highlights

### Application health and resources

See your application's alerts, recommendations, connected users, metrics and settings in one panel. You’ll also find suggestions to help optimise it; changes are recorded, and you can undo suggested indexes. The panel is available to administrators and from the skin 2026 control panel.

![Application health and resources](../../docs_assets/images/Versions/Version10_1/application-panel.png)

[More information: health panel](../../Help/Administration/HealthPanel.md)

## Other new features

### Updates and deployment

- **Updates:** schedule, change or cancel them; they run in the background with notifications and coordinated maintenance mode. The Updater can also update itself. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Updater in Docker:** follow a five-step wizard and view a summary of the result. The version guide explains how to update with images and preserves maintenance customisations. [More information](../../1Deployment/3Updater/DockerUpdate.md)
- **Version preparation:** an overnight task prepares the next project version in the background and records the result. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Deployment resources:** check whether your installation matches the recommendations and calculate recommended servers based on usage patterns.
- **Product export:** when exporting a project as a product, you can choose whether to include its data database. [More information](../../2ProductDevelopment/8ExportProject/2Reference.md)

### Settings and administration

- **Application settings:** administrators can view and change settings from their settings screen, including how long frontend-to-backend calls can run. [More information](../../Help/Administration/AppSettings.md)
- **Database connections:** the settings explain what the “encrypt” attribute means. [More information](../../1Deployment/2ConfigWizard/EncryptedSettings.md)
- **Skin 2022:** the settings and health panels use a clear design adapted to its colours. [More information](../../Help/Administration/HealthPanel.md)

### Development tools

- **Collections:** configure their settings from the object workbench.
- **Modules:** place them with a right-click or by dragging, and change their layout from a clearer toolbar. [More information](../../Help/Modules/ModuleManagement.md)
- **Tour editor:** markers follow the selected item as you scroll through the page.

### Interface

- **Skin 2026:** search quickly with / and open favourites, recent pages and shortcuts with Ctrl+K. [More information](../../Help/Administration/Skin2026.md)
- **Sidebar:** in skin 2026, manage menu nodes with a right-click; Import appears only when an import configuration is active. [More information](../../Help/Administration/Skin2026.md)
- **Skin designers:** they enter development mode as soon as they sign in.

### Reports and home page

- **Excel exports:** export reports and lists at the same time without their files getting mixed up.
- **Home page notices:** appear in an orderly way, and version updates now include patches and beta releases.

### Performance and security

- **Application loading:** settings and the main pages and lists load faster.
- **Role-based visibility:** restrictions apply when viewing and saving records. [More information](../../Help/Administration/RolesAndPermissions/1Overview.md)

## Fixes

??? note "See the fixes in this version"

    - **Reports:** related reports use the current record's data and filters; Crystal Reports works again with databases that use Windows authentication.
    - **Sign-in and integrations:** LDAP once again validates passwords against the directory, and the MCP application includes a security fix.
    - **AI assistant:** filtering and sorting work again for each view's columns, including calculated or shared columns.
    - **Pages and records:** the counter includes all unread notices, module columns are no longer duplicated, and new records show an appropriate title.
    - **Page access:** pages you do not have permission to view once again show a security notice.
    - **Page layouts:** images for five layouts are displayed again on Linux and Docker installations.
    - **Notifications:** in skin 2022, unread notifications once again appear with a white background, blue bar and blue text.
    - **WebAPI and MCP:** each process runs only on the object it is defined for. [More information](../../Help/Administration/RolesAndPermissions/4WebAPIMCP.md)
    - **Scheduled tasks:** stop correctly when the application is restarted or updated in IIS.
