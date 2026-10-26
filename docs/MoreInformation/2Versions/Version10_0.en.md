# Version 10.0

The Flexygo 2026 skin redesigns the application with an adaptable sidebar and new shortcuts, and allows the interface, backend, and database to be deployed separately on .NET 9.

## New features

### Skins

- **The Flexygo 2026 skin redesigns the application and adds a responsive sidebar and new shortcuts.** It renews screens, menus, lists, forms, panels and dialogs, with new typography, colors, spacing and controls. The sidebar can be collapsed and includes shortcuts to alerts and the profile; it also offers the Ctrl+K shortcut and keeps the previous skin available.

    ![The Flexygo 2026 skin redesigns the application and adds a responsive sidebar and new shortcuts.](../../docs_assets/images/Versions/Version10_0/skin-2026.png)
- **The 2026 skin retains its configuration when database scripts are published.** Publishing includes the skin’s appearance, menus, panels and pages, even when starting from an empty database. This lets a new installation start with these items available.
- **You can customize account page resources from your product.** Adapt styles, scripts and icons at different customization levels. This lets you adjust sign-in, registration and password recovery pages for each product.
- **You can switch between light, dark and system themes.** The interface and some integrated elements adapt their appearance to the selected theme. If you choose the system theme, Flexygo follows the device’s appearance preference.
- **You can use custom CSS variables in your styles.** Flexygo supports custom CSS variables when applying styles. In addition, style loading does not fail if a LESS variable is missing from the CSS variables.

### Artificial Intelligence

- **New GPT models are added for artificial intelligence features.** The available models are updated for use in the artificial intelligence settings. You can select the available models for these features there.

### Charts

- **The ECharts module displays its configuration options and keeps the query when you change the chart type.** After correcting the configuration, the chart can be displayed again without reloading the page. If an error occurs, the message appears in English. JSON options remain available for components that use them, and HTML modules do not show options that do not apply to them.
- **ECharts charts offer more options for customizing series, labels, indicators, and reference lines.** You can configure stacking, value formatting, end labels, and highlighted points. You can also show information when hovering over the chart and add reference lines for the average or a specific value. In pie charts, you can place labels inside slices, highlight values, and limit labels for small slices; reference lines are displayed with readable labels and without automatic values when they have no label.
- **Doughnut charts can display a centered total with local formatting and different calculations.** The number can adapt to the user's culture, including separators and decimal places, or be displayed without formatting. You can also choose whether the total represents the sum, average, maximum, or count, and configure labels for each module without changing the shared theme.
- **Statistics cards support trends, empty states, and figures with a thousands separator.** You can choose different display modes and apply semantic colors. Trends and targets are displayed when their data is included.
- **The new ECharts module supports radar, bubble, combination, pie, doughnut, semicircular, polar area, line, and horizontal bar charts.** You can combine different series types in the same chart or choose one of the new visualizations. The module works alongside existing Chart.js charts and lets you assign a theme.
- **ECharts charts load without associated configuration and adjust their size when displayed or resized.** They also adapt when you open a tab or resize the module, even if they are initialized while hidden or collapsed. When you change nested options, the rest of the configuration is preserved, and chart resources are released when it is redrawn.
- **You can synchronize legends between charts and display ECharts charts with data from a list.** Synchronization works between charts in the same group. Charts inserted in lists use data that has already been loaded.
- **Bubble and radar charts correctly display zero, negative, and flat values.** Labels for bubbles with a value of zero are preserved. Radar charts can also represent data with no variation without calculation errors.

### Configuration

- **Administrators can view and edit the installation configuration from a dedicated screen, with checks before saving.** The screen brings together options, log levels, connections, and credentials; it also groups connections and shows the status of their checks. It highlights fields that need attention and explains invalid values; passwords are masked.
- **Administrators can enable maintenance mode and display a notice while the application is unavailable.** The control is available in the administration panel, and the notice updates when the status changes. Open pages are refreshed, and visitors to the site can return to their page when maintenance ends.
- **You can configure the delimiter used when exporting CSV files.** Choose the format that best suits each application. The option changes the delimiter used in exported files.
- **Configure offline applications from a screen organized into sections.** From the screen, you can manage objects, menus, pages, code, resources, and synchronization, as well as view the synchronization history. The emulator lets you see how the application looks on a mobile device.
- **Refresh the screens of all connected users or select specific sessions.** The action is in the actions menu of the version information. You can search for users and choose who to send the refresh to.
- **Administrators can view the configuration and process status on read-only screens.** The configuration is displayed separately for the application and the server. The status of processes, the database, and available resources can also be viewed, without changing those values from these screens.
- **You can open the page configuration from a button next to the tool for arranging modules.** The shortcut is available in development mode. When you navigate to another page, it continues to show the current page's configuration without rebuilding the header.
- **Configure the application with values specific to each environment.** You can load and save settings for each environment, such as development. This keeps those values separate from the general configuration.
- **Publish a database from the configurator.** The configuration tool includes this task, so you can perform it there without using another shortcut.

### Deployment

- **You can export large projects and choose which custom content to include and which template to use.** Export supports projects larger than 2 GB, checks available space, and displays progress and elapsed time. From the administration area, authorized users can export the installed application as a product project in a ZIP file; exports and errors are logged. You can adjust the installed product template, review the version and source, and choose custom folders and files; document and image repositories and other large files are excluded by default.
- **File operations work between the frontend and backend when they are on separate servers.** You can upload, download, and delete files in this configuration. Support also covers access through impersonation.
- **You can deploy the different parts of Flexygo in Docker, including the database, and configure integration with RDS.** Files are included to generate Flexygo images and start its components together, as well as to deploy the database. Connection strings are obtained from the application configuration, and the update flow lets you apply configuration changes.
- **You can publish databases from the configurator.** The process supports empty databases or databases without a definition file. An error when updating databases in Docker environments is also fixed.

### Development Tools

- **Browse and select icons, and generate fonts for exportable libraries.** The browser lets you explore libraries and categories, and preview icons before choosing them. The generator supports libraries with glyphs and offers a ZIP download; if there are no compatible libraries, the option is disabled with an explanation.
- **External objects let you query and update data through REST and expand their compatibility with Flexygo.** The wizard can analyze a service and suggest its properties. Lists support pagination; forms show the source of selection fields and, when inserting, retrieve the key generated by the WebAPI. You can also query totals and measures, display data in panels, and retain configuration settings when exporting projects, except those specific to the environment.
- **Add sliders that display their value in applications.** The value is confirmed when you release the control, and you can also respond while it is being dragged. The control is available among the shared elements.
- **Create tabbed interfaces and link each tab to its content.** Tabs and their content are linked by a value. This lets you manage which section remains active.
- **Create, name and manage tabs directly from the designer strip.** The strip appears even if the object does not yet have tabs, so you can add the first one. From each tab, you can change its name, choose an icon, configure its options or delete it; the first tab groups the object's initial content.
- **Configure properties from a larger quick settings panel in the object bank.** When editing a property, the panel opens next to the object bank, and you can close it without expanding the navigation again. Fields have more space, and scrolling stays within the panel.
- **Developers can subscribe to DataManager's SQL information messages.** The option lets you receive these messages from external code that uses DataManager. This allows you to incorporate them into your own development processes.
- **Make GET requests with flexygo.ajax.get.** The function lets you access operations that require this type of request. The version query used by the footer also works again.
- **getView in the WebAPI applies the corresponding default values.** When querying a view, the operation returns its corresponding default values. This fixes the response, which could include incorrect values or fail to apply them.
- **Default values are applied when resolving friendly URLs.** These URLs are now resolved with the corresponding default values. This lets you use the URL without having to define them manually.
- **Create guided tours by pointing directly to elements on each screen.** The editor groups steps by screen and lets you reorder them; before saving, it shows the selected element for each step. You can customize the welcome card with an image or Flexygo branding, which can be displayed with a typing animation.
- **The 2026 skin adds tabs for processes and reports, object wizards, and document and image managers.** Image managers can display content as a gallery or a list. Development tools are available in their respective areas, and previews have their own card.
- **In development mode, a module's menu provides access to its object configuration.** The options are grouped at the end of the menu. They are not shown in the classic skin.
- **Organize a page's modules directly from the page, without opening the module manager.** You can move modules between zones, choose a different layout and create modules from the organizer. Before saving, you will be warned if a layout change leaves positions unassigned or if an update will revert the organization because the page comes from a distribution.
- **Integrate Flexygo with other systems using webhooks.** Developers can use this functionality to connect their applications to other systems. This lets them incorporate webhooks into their integrations.
- **Change package optimization from the development menu.** The option lets you toggle this setting without leaving the menu. You can change it directly from the development tools.

### Document and Image Management

- **Upload files in parts and check progress from upload controls and file fields.** The progress bar appears in upload and edit controls. The maximum allowed size is also handled, and upload messages available in several languages are displayed.
- **Manage documents and images from Flexygo and ERP with correct display in the 2026 skin.** Managers display documents, images, and gallery views correctly, and their text is translated. The update also includes changes to Crystal Reports generation.
- **You can manage file uploads through the application proxy, which preserves the user's identity.** The proxy prevents an upload from incorrectly overwriting another file. If the application and service are on the same server, the proxy is not used.

### Email

- **The webmail integration can renew its access credentials.** A notification has been added to manage authentication, and the credential renewal process has been fixed.

### Filters

- **The 2026 skin displays filters as editable chips and applies changes automatically.** Each chip shows the filter name and its value; you can edit it or clear filters from the row. Changes are applied when you finish choosing options or leave the row, and text searches are performed when you finish typing. You can also change a checkbox's state by clicking anywhere on its chip; the previous skin keeps its filter behavior.

### Forms

- **View records that other users have just created in the list without reloading the page.** New rows appear when you request to view them, and your permissions and filters are applied. On pages with multiple lists, the notification appears next to the relevant list, even if it does not show its header; lists for other objects are not updated by that notification. The counter reflects the marked rows that are still visible, and dismissing the notification does not remove the displayed rows.

### Home

- **In skin 2026, customize the modules on each page and view a revamped home dashboard, with the license expiry date fixed.** Each user can reorder, pin, and collapse modules, or restore the administrator’s layout. The dashboard brings together cards with information about errors, tasks, users, the license, activity, and other application data. The license expiry date is displayed in the expected format.

### Installation

- **Configure and set up Flexygo using a guided wizard from the login screen.** The wizard brings together project, database, email, and publishing configuration, replacing the previous installer. You can resume installation from the first pending step; completed steps remain closed, and errors are shown in the relevant step so you can retry it. You can also choose the schema source, such as a dacpac file or a NuGet feed, and view the progress of publishing and database creation.
- **Unattended installation can be completed automatically when the backend starts.** You can choose whether databases are created, updated, or reused, and set the project name and administrator password. If a step fails, the installation reports it through a failed startup.
- **The wizard adds steps based on the active data connections that still need configuration.** This way, the flow adapts to the connections defined in each installation and only asks you to configure those that are pending.
- **The configurator lets you set the connection and view database deployment progress.** The connection is shown once the database is configured. You can also view the deployment stages, including in development environments.
- **You can install a database from the Flexygo configurator.** Installation starts directly from the configurator. The new flow also fixes starting this operation from that screen.
- **You can install and update Flexygo from the initial configuration screens or from the configurator.** The update process includes the application and database changes, and downloads and deploys the required packages. It also accounts for operations affected by locked files or resources.

### Integrations

- **The MCP integration improves tool selection and assistant registration through metadata.** Assistants can distinguish which tools retrieve data, modify information or support retries, helping them choose how to use them. They can also be registered from their metadata document without being duplicated; the login response includes the issuer, and dynamic client registration remains available. In addition, processes that run for more than ten minutes no longer fail. Flexygo.Library maintains the MCP version compatible with the application.

### Interface

- **In the 2026 skin, you can edit values directly in lists and add rows from the list or form.** Each row is saved when you leave it and keeps its record actions menu. The experience adapts to phones and tablets and is available in light and dark modes; the flexy2022 skin is unchanged. Editable lists also retain changes when rows are edited, canceled, or sorted, and their combos and columns adapt to the available space.
- **From the 2026 dashboard, you can view and edit the home page for each profile.** Each profile has a schematic preview based on its configuration. The preview does not run the page or save changes.
- **The redesigned calendars include an annual view, filters, and range selection.** They include a legend and options to configure overlap and working hours. In the annual view, you can view records for each day, and changes made by other people appear in the monthly view. Marker colors adapt to remain legible in different modes; the annual view and timeline also highlight days with activity and selected items more clearly.
- **The new interface includes administration screens and updated navigation.** It includes administration for users, roles, properties, processes, settings, and other items. Navigation adds quick access, a collapsible sidebar, and a resizable panel. Module administration options open in side panels, with more room for their controls and without covering the entire page; the gear opens the module, and the other options are grouped in another menu.
- **The administrator and guest profiles now have avatars, and the profile photo is displayed in the footer and header.** The profile image is shared between both skins, including the classic one. Avatar initials and the content of tooltips are also easier to read.
- **Administrators can switch a page to free layout and move or resize its modules on a grid.** When you enable the option, modules are placed according to the zones already shown on the page, and you can drag them and adjust their size directly. You can save or discard changes; if you leave without saving, you are asked to confirm and can restore the previous layout. Pages with free layout keep their defined positions and sizes, and on narrow screens the modules move into a single column while preserving reading order.
- **Developers can open the global search configuration from the palette.** The option appears at the bottom of the palette and lets you return to the generic filters manager to configure the search. It is only available in development mode.
- **When organizing a page, you can also drag modules without headers and access their settings from the organization bar.** Modules without headers show a drag strip only while this mode is active. Settings open in a side panel so the content stays visible; if the page reloads without changes, the layout is rebuilt. When you change pages, the mode closes and you are notified if there are unsaved changes.
- **You can display search results over the page without replacing its content.** Palette mode is optional and groups results by criterion, showing their title, description and destination. Search responds faster and avoids sending the browser data it does not need to display.
- **Indicator cards show optional descriptions, variations and trends, with a more consistent presentation.** The main value stands out, and cards in the same row share the same width and height to make comparisons easier; their values and footers remain aligned even when they include additional information. When they appear inside a list, they avoid duplicating its frame while retaining their content and layout.
- **The Flexygo Core interface adopts a more modern design.** Navigation and the user menu are renewed, and the color palette is updated. The new menu includes the missing translations, and the adjustments complete the application of the new visual style across different skins.
- **You can access Flexygo pages using friendly URLs.** This way of resolving addresses is available in the Flexygo core. It lets you open pages using friendly URLs.

### Licenses

- **You can view license information on a dedicated page and see its status in a watermark.** The watermark lets you identify the license status at a glance while using the application. License information is also available on a dedicated page.
- **Flexygo can generate licenses for production applications.** This lets you have a license when running the application in that environment.

### Login

- **You can configure the number of failed attempts that trigger a lockout and how long it lasts.** Set the attempt limit and the account lockout duration. The handling of attempts from an IP address and password recovery have also been reviewed.
- **You can manage and reset your password using updated pages and access links.** The process lets you manage your password from a specific option and access the application with the new password after resetting it. Links work under base paths and lead to the correct destination; when recovery is complete, you are signed in with a confirmation.
- **You can view or disable the news shown at login.** The option lets you choose whether to show news on the login screen. When news is available, you can view it from that same page.
- **You can sign in using Cl@ve.** The authentication process and the response received by the application are fixed. The registration link and loading under a base path are also adjusted, and access errors are displayed more clearly.
- **You can sign in using LDAP.** LDAP authentication is added to the access process and can be configured in the relevant settings. The flow is also fixed so that it completes the sign-in correctly.
- **You can sign in offline using SSO with ABH or LDAP.** The option lets you sign in offline using these SSO methods.
- **You can sign in using SSO and keep your session active with the Remember me option.** The screen does not offer SSO types that are unavailable. Before allowing access, Flexygo checks that the active modules are covered by the license.
- **If a connection error occurs during access, the system retries up to three times.** Retries let the process continue when the connection fails temporarily.
- **You can customize the login, password recovery, and registration pages.** Customization is also available on the authentication and password management pages of products created with Flexygo.
- **You can protect login with multifactor authentication.** Access can require an additional verification step integrated into the access pages and processes. Related screens, translations, and email templates are also adapted, including those for registration and password recovery.
- **You can create an account with an updated registration process.** The registration page, its translations, and associated emails have been updated.
- **You can sign in and out and keep your session active so you do not have to enter your credentials again.** Access also supports email addresses. Translations and cookie handling are updated, and issues with keys that differ in uppercase and lowercase are fixed.
- **You can sign in and manage access to your account.** The login, registration, and password recovery templates are updated. Language selection is temporarily hidden.

### Notifications

- **Receive real-time notifications when records are created, and configure which users can see them.** You can define in the object configuration which records generate notifications; list filters and security conditions are applied for each recipient. The notification appears in the lower-right corner and lets you open the record or its list. If several records of the same type are created, the notification is updated instead of accumulating.
- **Enable notifications to track changes to the records you want.** Notifications report inserts, modifications, and deletions in configured objects. Each user receives notifications according to their own session and permissions.
- **The application includes a push notification service.** The service integrates with the application's offline features.

### Processes

- **Manage record approvals and configure decision rules and webhooks for each object.** Those responsible receive notifications and can review decisions in an inbox or on the record form. Rules can open decisions when saving, set deadlines, and escalate them; webhooks are sent when saving or deleting, with retries and a test option. You can also open and resolve decisions through the WebAPI. Each person can view their own decisions and those of their roles, while administrators can view them all; decisions must be assigned to a user or role.
- **The scheduler, agenda views, and kanban display new cards and changes without switching screens.** When you create or save records, cards appear in their cell, day, or column and are highlighted so you can find them, even if they are outside the visible area. Filters and permissions are respected, and partial updates preserve position, selection, and scrolling; if the change does not match the view or filter, a full update is performed. In skin 2026, the planning calendar updates the period and visible objects without going blank during reloading.
- **Administrators can start creating a guided tour from a tour record.** Creation opens the first step page and displays the configuration panel; if there are no steps, this is indicated. Invitations appear on the page where the tour starts, and users' responses are retained.
- **The application context includes integrated processes and active modules.** This information is available to product developers through the application context. Colors are also adjusted, and errors are prevented when searching for paths to nonexistent processes.

### Reports

- **Manage themes for charts and customize their colors, labels, and other visual elements.** You can choose available themes, such as a monochromatic palette or a shadcn-inspired theme, and adjust options such as spacing and series shape. Charts adapt their colors to the skin and light and dark modes, and reflect theme changes without reloading the page. Appropriate colors are also retained when combining themes or sharing pages, and you can apply optional themes to ECharts charts and view the theme of embedded charts.
- **Generate Crystal reports from Flexygo projects.** You can add reports created with Crystal Reports to your projects. Compatibility and location issues are fixed so they work in different environments, as are issues with loading editor definitions.
- **You can get PDF reports in base64 format, from both Crystal Reports and DevExpress.** This format makes it easier to use the generated PDF from other application functions. Parameter loading when opening reports is also fixed, including reports opened from a link.
- **Design and customize reports with the Flexygo designer and export them to PDF without the issues that have been fixed.** You can adapt the presentation and settings of the DevExpress designer. Export, translation, and parameter-reading issues are fixed, and reading parameters no longer depends on matching uppercase and lowercase letters.

### Scheduled Tasks

- **You can disable scheduled tasks and scripts from the application settings.** When you enable this option, the process stops starting those jobs. It is also respected when inserting or editing a task, to prevent disabled jobs from running.
- **Run scripts as scheduled tasks.** You can configure scripts associated with scheduled tasks and jobs. This way, the configured scripts run as part of the application's task schedule.

### Security

- **You can control who runs each process, even if it is not linked to an object, and restrict it with optional SQL conditions.** Permissions are configured for users, roles and faculties, from their security screens or from the process record. The SQL condition is evaluated when checking permission and allows the process to run only if it returns 1 or true. The security screen lets you check whether the process can run and which condition restricts its use; if the condition is not met, the process is hidden from menus and toolbars.
- **The 2026 skin includes a screen for viewing and managing the security of roles, users and faculties.** From the workspace, you can open the manager with the selected item and review object, field and navigation rules, including read and edit permissions and affected paths. The screen lets you compare granted, denied or undefined permissions, and shows which rule, condition and priority determine access, along with the default policy. You can create, edit or delete rules and set their initial level; you can also view module access conditions and manage actions with a preview of the changes. The table lets you filter items with rules, add conditions, block rules or delete all rules in a family, and includes translations in the seven available languages. The screen opens from the 2026 skin; the previous one remains available in flexy2022.
- **View the security of objects, modules, properties and processes from a single workbench screen.** You can access each area from that screen and open it with a specific item already selected. From an object screen, the search keeps the selection when you change scope and clears it when you start a new search; the 2022 skin retains its previous screen.
- **You can configure object security conditions by choosing a property, an operator and a value.** The wizard provides the object’s properties and lets you select context values, without needing to remember table names or special tags. You can also test the condition before saving it and view the SQL that was run.

### Updater

- **View what's new in each version and find out what changes you'll receive when you update.** The page lets you review the full release notes for versions later than the installed version, including previews, and identify what's new. Published notes for the Backend package are sorted, and the history loads five versions each time you request more.
- **Update, roll back, or change versions from a wizard that guides you through the process and shows its progress.** The wizard brings together the operation's stages, settings, and status and error messages in the application itself. You can follow the progress and check the result of what you started.
- **Follow updater operations in progress, including those started by other administrators.** The screen indicates who is managing each operation and lets other administrators follow it in read-only mode. Incompatible simultaneous operations are prevented and completed steps are retained; you can also resume an interrupted preparation from another tab.
- **View the result of each update or removal and access the process log.** The screen indicates what happened and which version is in use, and lets you copy technical error details, including the error code. You can switch between the summary and the log even while the operation is in progress; when it finishes, controls you no longer need are hidden.
- **View live logs from the advanced mode of the update wizard.** You can search and filter logs by level and context, and view logs separated by project. The display adapts to small screens to make it easier to follow.
- **Resolve configuration conflicts during an update and continue from where you left off.** When resolving a conflict manually, you can choose a blank value, the previous value, a custom value, or the value from the new version. You can also expand the dialog to full screen and retry an interrupted update without starting from scratch.
- **View and manage available, installed, or removed versions from the versions page.** The information is displayed in a refreshed, translated interface, sorted by status and version number. The page continues to display correctly when a version's status is changed or it is removed.
- **The 2026 skin displays the installed version and can notify you about available updates.** The installed version is visible in the sidebar footer. The notice appears once for each major and minor version, and lets you open the update details from the interface.
- **Update the Flexygo database in Docker environments.** The process supports connection credentials and provides more descriptive messages when an error occurs. Session and redirection issues during the operation have also been fixed.
- **Install and update the database from the configurator.** The configurator includes these tasks so you can perform them from the configuration tool itself.
- **Update Flexygo in a Docker installation from the maintenance page.** The process provides information about the update and lets you manage installation maintenance.
- **View the updater operation history from the version information.** You can open the result and log of a previous operation, or clear the history without affecting an active operation.
- **You can roll back an update if the process does not finish successfully.** The rollback option lets you restore the previous state if problems occur during the update.
- **Update to the latest available version and remove downloaded versions from the updater.** You can apply the latest available version and remove versions you no longer need from the same place.
- **You can update, roll back, or change versions from the update wizard.** The wizard shows the progress and result of operations. It also lets an operation finish starting even if the tab is closed during the process.
- **You can update, roll back, or change versions from the update wizard.** The wizard shows the progress and result of operations. Rollbacks use the application's own project name to run the process.
- **You can update, roll back, or change versions from the update wizard.** The wizard shows the progress and result of operations. Progress received after an operation has expired no longer reactivates it.
- **The update wizard checks the requirements before starting the process.** The new screen brings together the checks that take place before updating. This lets you review the requirements before continuing.
- **You can roll back an update if the process does not finish successfully.** The update process includes a rollback option. This lets you restore the previous state if problems occur during the update.

### WebAPI Security

- **The WebAPI and MCP limit responses by default to the properties defined for each object.** This adjustment includes defined properties and keys, in both responses and schemas. This omits columns that are not part of the object definition or are not available in all installations.
- **Flexygo includes an MCP server for assistants and applies token permissions in the WebAPI.** The MCP server is disabled by default and has its own permissions by user and role, as well as administration screens. The WebAPI explains why it rejects disallowed operations and does not include them in OpenAPI.
- **The navigation bar adds search, and the WebAPI supports bulk operations and relationship queries.** Search helps you find content from navigation. Developers can perform bulk operations and query relationships through the WebAPI.
- **Developers can view backend API and WebAPI definitions in Scalar.** Scalar provides a reference for Flexygo APIs for those developing on the platform.
- **You can expose application entities through the WebAPI.** The WebAPI includes token authentication and options for defining and querying entities. The allowed origins configuration supports wildcards to connect other applications to Flexygo.

## Improvements

### Deployment

- **Flexygo runs on .NET 9 and lets you deploy the interface, backend, and database separately.** You can install it in IIS, as a standalone service, or in Docker, on Windows or Linux, with its components on one or more servers. The version wizard lets you roll back updates, and the deployment scripts are compatible with Linux.

    ![Flexygo runs on .NET 9 and lets you deploy the interface, backend, and database separately.](../../docs_assets/images/Versions/Version10_0/net9-architecture.png)
- **Product translations are retained when configuration data is published.** You can include translations associated with product items in the publication. Translations for test modules can be excluded.
- **You can choose which JavaScript and CSS files are included in bundled files.** Bundling loads custom styles correctly and prevents errors when optimizing files with the PDF plugin. It also separates custom plugins from system plugins and improves compatibility with applications hosted inside IIS.

### Artificial Intelligence

- **Artificial intelligence requests have a timeout limit.** This prevents a call that does not respond from remaining pending indefinitely. This lets the application continue working even if the artificial intelligence provider does not respond.

### Charts

- **Bar and pie charts make better use of the available space.** In charts with many categories, labels are hidden when there is not enough room to read them. In pie charts, the legend and outside labels are not displayed at the same time, and the chart size and position are adjusted to reduce empty space.

### Configuration

- **Configuration secrets remain encrypted in IIS and production Docker containers.** In other environments, they are decrypted when the application starts. If a Docker secret is missing or cannot be read, the application does not start with a new key.
- **The administrator signs in with the 2026admin profile and no longer sees “Decisions” in the menu.** The change affects the profile assigned to the administrator user. It also removes the decision task entry from the menu.
- **SQL connection errors are correctly identified for different network problems.** The information lets you distinguish between server resolution problems, timeouts, and rejected connections. This makes it easier to identify the type of connection failure.
- **The quick configuration panel is more readable in the 2026 skin.** Labels, section headings, and help text are easier to read. The appearance of the save button has also been adjusted.
- **When configuring email with SSL, the selected value is applied and a default port is suggested.** The configuration step automatically fills in the port when you enable SSL. You can change it if you need to use a different value.
- **Configuration groups show how many options they contain and are displayed in clearer cards.** The new layout takes up less space and makes it easier to find each group. When you hover over a group, the edit action remains visible.
- **The action to convert the development database clearly describes its effects and warns of the consequences.** Its name can no longer be confused with the interface's development mode. It is also marked as a dangerous action.
- **You can search for and configure chart themes from Flexygo administration.** Themes appear in navigation and configuration searches. You can then assign them to chart modules.
- **Flexygo creates a default configuration if the application starts without a configuration file.** This lets the application start even if the file has not yet been created. The default configuration is available for that first startup.
- **You can configure the port, schema, and Flexygo URL.** These values let you adapt the application to the environment where it runs. They are set in the application configuration.

### Development Tools

- **Shared controls offer more configuration options.** You can add a button to clear the selection, choose when a dialog fills the screen, and control the text field's focus. Option cards also support an accent color.
- **Configure documents and images, and access lists and forms from the object's configuration area.** The files section lets you switch between documents and images and loads the corresponding configuration. You can also open the object's list if it has an associated collection, or create a new form.
- **The view design section in the object bank has a clearer name.** The new name avoids confusion with record design. The change is available in the seven included languages.
- **The placement panel lets you group modules, view their details and find those already added.** You can collapse groups by type and keep the ones you are using open; searches expand groups with results. Cards show module information and the pages where it appears, and placed modules remain visible in the panel. You can also scroll through the page and close placement mode layers one at a time with Esc.
- **The 2026 skin's source menu displays the options correctly and lets you close the dialog without changing the source.** The four sources are displayed in two columns, and the current source is marked with a colored badge; Addon appears separately. The active label updates when you change the source, and you can close the dialog with the button or Esc.
- **The tour editor and page configurator display their translated text.** The text in both tools is available in seven languages, including the names of Flexygo-specific anchors in the tour editor. Text entered by the person configuring the tour is retained; if a translation is missing, the original English text is shown.
- **SQL list templates let you define links to records.** You can create links even when rows contain different object types and do without automatic detection in the 2026 skin. Column sorting and resizing are retained.
- **Object configuration displays its text translated into the seven available languages.** The translation includes section titles and their descriptions. This makes it easier to identify each setting in the selected language.
- **The view manager displays correctly and is more readable in the 2026 skin.** Field layout, text colors and hover states are fixed. These improvements also apply when the manager is opened as a template.
- **View errors in a filterable, paginated list with expandable details.** You can combine filters to narrow down results and view the options available for each criterion. Accessing the list from the home panel opens it with errors from the last 24 hours.
- **The addons marketplace displays options in rows and keeps their actions visible.** The new layout makes better use of space, whether there are few or many addons, and aligns the search with the list. Controls on installed cards and the extra space shown when there are no results are also fixed; if a query fails, the marketplace no longer gets stuck loading.
- **Users with development permissions get direct access with development mode enabled and can turn it off from the menu.** The mode retains the selected state when you return and does not cause errors when turned off if there is no side panel to close. Access is only shown to users with a designer role; the source selector does not include Addon, which is presented separately.
- **The button for creating objects is easier to distinguish and lets you start creating from the catalog access point.** The plus symbol has more contrast on hover and its own background to distinguish it from the catalog. When clicked, the wizard opens without activating the access point that contains it.
- **Mobile and tablet previews let you choose the device and change the orientation.** You can change devices without losing the current orientation. Rotation affects the open preview and does nothing if none is open.
- **Turn Minify JS/CSS on or off from a control panel card.** The card fits in with the other panel options and lets you change the setting from anywhere on its surface. You do not need to leave the panel to change it.
- **Process communication with the proxy supports different response types.** This lets you handle the responses required for document operations. Processes can therefore work with the different formats those operations require.
- **Developers can debug application code with source maps.** This option makes it easier to find the source of a problem during debugging. It is intended for people developing on Flexygo.

### Filters

- **Filters and panels in the 2026 interface work better on mobile devices and display clearer information.** You can view filter label values in a tooltip, and the filter manager fits on a mobile screen. The selection panel and development menu search are also fixed.
- **Set the order of results by adding field and direction criteria.** You can search for fields in the list, and the dialog takes up only the space it needs. Criteria appear in the order in which they will be applied.
- **Rows and labels in the dependency manager remain readable when you hover over them.** The highlight uses the accent color and stands out in both light and dark mode.
- **The generic filter manager organizes its panels better and lets you view dependencies between fields.** The properties tree and field rows appear in separate panels, and dependencies are shown as text. You can also open field security, clear searches, and view properties after saving; content fits the dialog and can be scrolled within it in flexy2022 and in the 2026 skin.

### Forms

- **Forms adapt better to small screens and reposition fields when a dependency shows or hides them.** On narrow screens, fields are displayed in a single column, and forms no longer become unresponsive on mobile devices. When placing fields in the property bank, their layout is preserved, and the minimum heights of images and editors are maintained when they are resized.
- **Labels in the 2026 skin are displayed without colons and stay neatly arranged next to fields.** Long labels are visually shortened, and you can view the full text by hovering over them. Switches appear next to their labels without overlapping other fields. This change applies to forms, views, and quick settings; the flexy2022 skin keeps its previous layout.
- **The save bar in the 2026 skin stays visible and aligned with the panel in long forms.** As you scroll through a long form, the bar stays next to the bottom edge of the panel. The object label does not cover the Save button when the bar is fixed at the bottom. In short forms, the bar stays in its usual position.
- **Inline editable fields in lists have the same appearance as those in the form.** The appearance is consistent, for example, in insert rows and editable lists.
- **The image field uses the space assigned to it in the form and displays the photo at a larger size.** The image and its editing control are no longer cropped in tall fields. The behavior adapts to the space defined for the field, even when it is empty.
- **Property editing keeps the open tab when saving and only allows tabs to be created in the compatible skin.** When the 2026 skin's edit form is updated, the selected tab is restored and remains visible in the tab strip. In flexy2022, controls for creating tabs are not shown because that skin cannot display them.
- **In the 2026 skin, fields and the Save button are aligned with the title of their card.** The alignment is maintained even if the first form element changes.
- **Fields are easier to read on more screens with the new skin in dark mode.** Fields in mailing lists, the data model viewer, and the relationship editor adapt their background, text, and borders. Edit forms keep their current size and spacing.

### Home

- **The home page and dashboard present their content more clearly and make better use of space.** On the home page, lists and information blocks are arranged to reduce gaps. On the dashboard, shortcuts and recent activity are grouped more compactly.
- **Indicators on the home page and dashboard show more useful information and let you open related records.** On the home page, errors are grouped by cause, and indicators link to their records, including job execution results. The dashboard shows the count of objects and modules, and list totals match their contents.

### Interface

- **Flexygo icons are displayed using the updated Font Awesome 7 names.** The update covers icons for screens, views, navigation, and other application elements.
- **The actions for each row appear at the end of the list, in a column sized to fit its buttons.** Data appears before the actions, and columns are aligned in both skins. The column uses less empty space, including in the row used to add data to editable lists.
- **Wizard, updater, and other area windows share a consistent header, size, and layout.** The header brings together the icon, title, subtitle, and available actions. Installation and update dialogs have the same size, and their result screens display errors and actions in a consistent style.
- **The 2026 skin refreshes email, notifications, and AI chat to make them easier to use.** In email, you can view folders alongside the list, filter by read messages, search by subject, and open messages in a side panel. Notifications include filters and an option to mark them all as read; AI chat appears in a compact panel. The flexy2022 skin keeps its current look.
- **The 2026 interface quick access menu lets you return to the dashboard or control panel from any page.** The shortcuts appear in an administration section of the menu, even if the project menu does not include that group.
- **The 2026 skin improves the layout and use of windows, lists, combos, and wizards.** Button help text is displayed again, and lists and tabs are better organized. The template wizard is also restored, creating objects offline is easier, and combos and property settings are displayed more clearly.
- **New installations start with the 2026 interface, and new users inherit the profile of the person who creates them.** Existing installations keep their profile, and products are unaffected. The 2026 administrator profile is only offered to users with the administrator role.
- **You can copy an error’s technical details without displaying additional notifications.** The button confirms the copy by changing its icon. It is also available as a shared item for developers.
- **The 2026 skin improves lists, mobile use, and several work tools.** List groupings and headers remain visible, and editing is faster. On mobile devices, side navigation adapts to a sheet, and rows and controls are easier to use by touch. Calendars, charts, and offline synchronization are also improved.
- **Loading screens use a new animation.** The animation displays the logo or the default indicator depending on the loading context.
- **Drop-down menus are displayed without being clipped by their containing area.** Their position is adjusted relative to the control that opens them, even inside scrollable areas.
- **The flexy2022 calendars return to an appearance similar to the previous one.** The monthly and annual views, the position of pop-up notices and the alignment of the planning view are adjusted. The change only affects the flexy2022 skin.
- **The skin 2026 views display their fields and labels more clearly.** Labels and long values stay on one line and are clipped when they do not fit. Spacing between rows and the display of headers have also been improved.
- **Logos can change depending on the light or dark theme.** The application logo adapts to the theme without reloading the page and can use a variant for dark mode. If no variant exists, the configured logo is retained; paths with backslashes are also displayed correctly, and the theme preference is applied when the page is refreshed.
- **Side panels in the 2026 skin display a top bar that separates their controls from the content.** The title is on the left and the controls are on the right, with the content below. This makes the side panel actions easier to distinguish from the icons of the module it contains.
- **The offline application emulator shows an iPhone 17 or Samsung Galaxy S25, depending on the selected device.** The application is displayed using the screen dimensions for the selected model. The emulator keeps the device visible while the rest of the screen scrolls and rearranges its sections in narrow windows; the iPhone frame is the same height as the Samsung frame.
- **Navigation remains accessible when viewing offline settings in the 2026 skin.** The sidebar collapses instead of disappearing and restores its saved state when another page loads.
- **New card markers are easier to distinguish in the 2026 skin.** The adjustment improves visibility both on dashboard cards and in the column indicator.
- **Links and clickable labels are easier to distinguish in the 2026 skin, in both light and dark modes.** Actual links are underlined and have their own color. Labels that act as controls use the text color and are underlined on hover.
- **Navigation panel branches show whether they are open or closed and can be expanded without closing the panel.** The indicator appears on branches that contain options and changes direction when they are opened; options with no items do not show it. Selecting a branch shows or hides its options, and the panel stays open; final options continue to navigate to their destination and close the panel. Opening a group closes any open options menu, and icons remain in the expected order.
- **Notifications and guidance in the page configurator are easier to read in the 2026 skin.** The contrast is increased for the notification about the page source and the guidance that appears when you hover over a module.
- **The interface displays translated titles, buttons, headings, and messages when a translation is available.** Texts that appeared as internal keys or in English in property and image managers, charts, and lists are fixed, including lists without an associated object. Startup messages, chart theme names, item types, and their names in the recent changes list are also translated; user-defined names and the identifiers needed to sort and retain column widths are preserved. The new skin displays its menus, wizards, and templates translated in the available languages, and the search box text in German is fixed.
- **Navigation in the 2026 skin retains the menu footer when refreshed and lets you open profile menu options.** The language option once again opens the relevant form from the menu. Footer options no longer disappear when navigation is refreshed.
- **The parameter view integrates better with the 2026 skin.** The new presentation applies only to this view and does not change how it appears in the Flexygo 2022 skin.
- **Grid design mode opens from a button integrated into the navigation and keeps module titles visible.** The access retains its keyboard shortcut and reappears when the navigation is refreshed. The drag area does not cover the headers, and the indicator appears when you hover over it; row controls stay in place, and you can continue dragging and saving the layout. The page makes better use of space and avoids unnecessary empty gaps at the bottom.
- **Guided tours adapt to the navigation and help you locate the screens and elements they describe.** Administrators can offer them to authorized users, add them as a module and configure steps that point to elements or perform actions. The tour continues when you change screens, even if a step is unavailable or an element takes time to load, and it does not leave layers that block the page. Its text appears in the selected language, and the wizard steps, workspace, security and error logging have been reviewed.
- **Related items are displayed as compact tags that are easier to browse.** Links to objects, processes and reports take up less space and are easier to distinguish when you hover over them. This change avoids highlighting titles as interactive when they do not perform an action.
- **The calendar distinguishes events more clearly and shows the month alongside events for the selected day.** Events are displayed as cards, and their category is retained as a side marker that is legible in light and dark modes. Days, events and the current date are easier to distinguish, and the panel lets you view all the events for the day; controls, the grid and the month selector adapt to the new skin and language.
- **The new skin groups module actions next to the title and hides secondary options in a menu.** The main action is readily available, and the bar takes up less space, especially in narrow modules. Less frequently used options remain available from the three-dot menu.
- **Semantic color text and secondary text are easier to read in the 2026 skin.** Text colors are adjusted to improve contrast in light and dark modes without changing the background, button or chart colors. The improvement also affects text in lists, tags and icons, while accent backgrounds and buttons retain their usual appearance.
- **Palette search indicates that it is working and distinguishes empty results from errors.** While results are loading, the screen keeps its space and shows a waiting indicator. If there are no matches or the search fails, each situation is reported separately.
- **Modules fit better in narrow columns in the new skin.** The toolbar can wrap onto several lines instead of widening the module and causing horizontal scrolling on the page. At greater widths, the layout does not change.
- **The profile menu in the new skin lets you change the language, password, photo and theme.** The menu, accessible from the footer, brings together the profile, theme and sign-out options, and displays the signed-in person’s details. Each option opens its corresponding action directly; the language flag helps identify the selected culture. The options work correctly again, and sign-out is available.
- **Module headers in the new skin show fewer maximize and minimize buttons.** The refresh and collapse buttons remain. The classic skin keeps its current buttons.
- **The new skin shows a progress bar while a page is loading, instead of the spinning indicator.** The visible bar lets you track navigation progress.
- **The Kanban board organizes cards into clearer, more legible columns, including in dark mode.** Cards stand out better from the background, and drop zones fill the entire column, even when it is empty. When moving cards, the archive area stays within its strip and destination areas are easier to identify.
- **The planner has a more orderly toolbar and side panel.** Controls have a consistent appearance, and buttons make the active option easier to identify, with red reserved for dangerous actions. Labels align with the grid and types are easier to read; in addition, the panel avoids visual delay when collapsing and takes up only the space needed.
- **Filter, process and notification pop-up menus have a more consistent appearance.** They share the same shadow and border style so the different options fit together visually.
- **Module tabs have a clearer design and can be browsed when they do not fit on screen.** Active tabs are easier to distinguish, and the module selector follows the style of the other controls. Long tabs can be scrolled without extending beyond the module.
- **Maps, network charts, and the calendar display correctly in dark mode.** Their display areas no longer depend on a light background and fit better with the application's dark appearance.
- **In the new skin, controls and navigation elements integrate better with dark mode.** Light backgrounds that made some elements difficult to read have been corrected. The light skin is unchanged.
- **Submenus are displayed as nested items, and the last column can fill the table’s free space.** When a table is resized, the last column adjusts to avoid gaps. Context menus retain the hierarchy of their options.
- **Version updates refresh affected web files, and sign-in handles Backend interruptions better.** Files that have not changed can be kept in the browser. SSO sign-in labels are also translated.
- **Application errors are displayed more consistently.** Their presentation is standardized across different operations so that messages are clearer.

### Licenses

- **The licenses page displays the level, extension status, and request code more clearly.** The plan level, such as PRO or LITE, appears next to the license type when applicable. If the request code is missing, this is indicated and the option to copy it is not offered; a confirmation is also displayed when the identifier has been copied.
- **License management recognizes new plans for more products.** The supported product plans have been expanded. This allows license management to recognize additional license plans for compatible products.
- **You can validate a license that includes multiple computer names.** Enter the names in the license computer list and separate them with the «|» character.

### Login

- **The post-login process runs only once and does not prevent access if it fails.** This also applies to guest users and access with SSO or a second factor. If an error occurs, it is logged and shown on the first page without blocking access.
- **Navigation through account pages no longer gets stuck, and recovery errors are explained more clearly.** Using the browser’s Back button no longer leaves the page loading. Messages distinguish between unconfirmed email and email delivery configuration issues, and errors in account processes are translated.
- **You can create users with backslashes in their usernames.** Validation accepts this character when creating an account.
- **Flexygo checks security conditions before allowing access.** Validation takes the IP address, lockouts, and license into account. The license check is also adjusted to prevent errors with older licenses.
- **The login page adopts the usual Flexygo style.** You can use the Enter key as the default button. The new pages are displayed without trying to load scripts that do not exist.
- **The login page adopts the usual Flexygo style.** You can also use the Enter key as the default button to sign in.

### Notifications

- **The decision card appears only when appropriate, and the bell updates when notifications change.** This way, notifications show when there is a decision to address and avoid unnecessary updates to the bell.
- **Error and warning messages can remain on screen until the user closes them.** This option is useful when a message needs to be read carefully and should not disappear automatically.

### Performance

- **Pages with many components load faster because the skin is read only once.** If the skin's style sheets are reloaded without reloading the page, they are read again to apply the changes.
- **The application compresses the resources it serves and reflects style changes in their version.** Compression reduces the amount of data downloaded when loading the application, especially on slow connections. In addition, changes to style sheets are reflected in the file URLs.
- **A silent cache reload also updates data stored in memory.** When this reload is performed, in-memory data is updated along with the rest of the cache.

### Processes

- **ABH Sign can read documents through the application's proxy.** This lets you manage documents when the signature process and the application are on different servers.
- **When reviewing errors, you can also view chained process exceptions.** The error trace shows information about exceptions that occur within chained processes.
- **Process and report parameters are retained when saving their configuration.** This means values associated with processes and reports are retained when configuration changes are saved.

### Scheduled Tasks

- **Planner icons retain legible contrast in light and dark modes.** Configuration and refresh icons change color according to the display mode. This makes them easier to distinguish against both backgrounds.

### Security

- **Application configuration encrypts passwords and sensitive keys on disk.** This protects, among other data, connection strings, email and NuGet passwords, and JWT and Data Protection keys. The executable can manage the encryption key and move it to another server without requiring the SDK.
- **The license API separates status queries from status updates and sends the activation code in the request.** This change affects integrations that query or update license status, or send an activation code.
- **Role and permission changes take effect without requiring the user to sign in again.** Role changes are reflected in the user’s next request. The update also applies to permissions associated with objects, pages and reports, so security changes can take effect immediately.
- **New objects display their name in the singular, and a view for page faculties is added.** The new view lets you check page faculties through the security layer. When creating objects, the plural title of the collection is no longer used as the name.
- **The security rules catalog includes pages, templates and reports.** It also identifies families that do not have a view available and avoids repeating templates in the results.
- **The password-change page displays form errors and validations.** This helps you identify issues when entering or updating the password.

### Skins

- **The 2026 skin improves the contrast and readability of menus, controls, notifications and fields.** The adjustments apply to light and dark modes, from the Apply button in dialogs and danger options to cards, wizard steps and planner notifications. Process buttons, muted links and error messages are also easier to distinguish, with errors displayed next to the field label.
- **Field and toggle controls in the 2026 skin retain a consistent appearance outside edit forms.** Fields retain the appropriate style when they appear on other screens. Disabled toggles that are switched on retain a solid accent color.
- **In the 2026 skin, processes with visible text remain on the toolbar.** Processes without text remain grouped in the three-dot menu. This keeps named actions readily available without cluttering the toolbar.
- **In the 2026 skin, filters and the actions menu take up less space above the content.** These controls are placed next to the module title. If there are no filters to show, the empty row disappears.
- **The 2026 skin uses the Geist typeface instead of IBM Plex.** This changes the appearance of text and reduces the size of the font files used by this skin.
- **From the 2026 skin header, you can open the module organizer using a button or keyboard shortcut.** The button appears next to notifications, and the shortcut is Ctrl+Shift+M. Access respects design permissions.
- **You can show a different logo depending on the interface mode.** The application looks for the logo variant that corresponds to the active mode. This lets you adapt its appearance to each mode.
- **The default Flexygo logo has a gray background instead of a white one.** The change applies to the logo image included by default.
- **You can access skin variables without distinguishing between uppercase and lowercase letters.** Variable lookup also works when they are entered with different capitalization.

### Updater

- **The progress screen arranges the steps in vertical or horizontal views and displays progress and errors consistently.** You can switch between the two views with an animated transition. Completed steps remain visible even if an error occurs or the operation is rolled back, and the progress path is displayed without interruptions.
- **When you return to the version information, you can retrieve the pending operation or result.** The result remains available to the person who started the operation until they close it or start another one, even after restarting or reloading the application. The result's data and errors are not replaced when another operation begins.
- **The wizard screens show smoother transitions when switching stages or versions.** The change takes place within the same dialog and respects the reduced motion preference. During a version change, the transition remains visible and the reconnection notice waits until the application is available again.
- **The wizard displays a dedicated screen before removing a version.** The screen shows the operation and its animation before deletion begins. If you close the wizard during this interval, the removal does not begin.
- **You can continue the update when the requirements show only non-blocking warnings.** Errors still prevent you from proceeding. You are also notified if the updater log table exceeds the configured limit.
- **The wizard checks for blockers and presents conflicts, requirements, and progress more clearly.** Blocker checks are added to the process before continuing with the update. The conflict and requirement screens are also reorganized, and the progress view and activity log are improved.
- **The wizard identifies who is blocking the application, including some network locks.** When it can identify them, it shows the user and computer associated with the lock so you know who needs to release it.
- **The updater recognizes package versions, including previews, and lets you control how they are searched for.** Package comparison takes beta versions and the installed version into account to find the appropriate packages. You can configure whether to search for preview versions; their names and local repositories are also supported.
- **Configuration and maintenance show update progress and errors, and let you validate ERP databases.** Tasks run in the background, and you can follow their progress and view error details. Tasks required for the update can also continue during maintenance mode.
- **The updater retries file operations when temporary failures occur.** Retries help complete the update if the problem is temporary. If database deployment fails, a report is generated to make it easier to investigate.
- **The updater can continue the process when it finishes and supports download paths in Linux.** Informational messages in the update flow have also been reviewed.

### WebAPI Security

- **The WebAPI temporarily blocks IPs after 50 failed token attempts in one minute.** The protection correctly identifies the client's IP, including when accessing through the frontend, and applies to access using password, LDAP, SSO, and token renewal. Administrators can adjust the default values, and access from blocked users is rejected.
- **Access to WebAPI tools requires a valid license.** Validation prevents the use of WebAPI tools that are not covered by the Flexygo license.
- **The WebAPI specification is generated faster by processing only exposed objects.** Objects without permission to be accessed through the WebAPI are excluded from documentation generation.
- **The WebAPI documentation provides clearer definitions and guidance for querying and integrating its operations.** It includes object descriptions when available, explains which value pages start from and how to write dates in filters. It also better organizes operations, responses, error models, and shared schemas.
- **The WebAPI lets you query the server's date, time, and time zone.** This information is added to the existing context data without replacing it.
- **Navigation node counters are calculated without sending their queries to the browser.** The application sends the node IDs and receives their counter values. This applies to nodes with a configured counter.
- **The WebAPI returns dates in an updated format.** Applications that consume the WebAPI receive dates in a format that allows them to be handled consistently during integration.
- **Flexygo rechecks the security conditions of users who are already signed in.** If those conditions are no longer met, access is not retained as if they were still in force.

## Fixes

### Artificial Intelligence

- **The artificial intelligence interface is displayed correctly at different screen sizes.** The layout adapts to the screen size. This means the interface displays correctly on different devices.
- **Artificial intelligence processes run again when the global context is missing.** An error that could prevent these processes from running when the required context was unavailable is fixed. They can now continue in that situation.
- **The processing of some ChatGPT responses is fixed.** The issue prevented certain responses from being interpreted correctly. The affected requests are now processed correctly.

### Charts

- **EasyInfo modules without an object can use context variables.** This lets you use values such as the current user or date in queries. Context variables are therefore also available when the module has no associated object.

### Configuration

- **The option to change profiles is only displayed to administrators.** Other users no longer see an action they cannot perform. This ensures the available options match their permissions.
- **Missing translations are restored, translations for new administration screens are completed, and a log list is fixed.** The runtime log list includes the identifier needed to recognize each row. The translation scripts used during installation are also unified.
- **Errors when saving dependencies and retrieving license values are fixed.** Both operations now work correctly. This lets you save dependencies and retrieve license values without the previous failures.
- **Configuration tables include the missing columns.** The definition used to create or update these tables now includes all the expected columns. This ensures the tables are complete after the operation.

### Conversations

- **Sending emails with attachments is fixed when the application uses different servers.** You can now send emails with attachments in this configuration.
- **Mentions and their notifications in conversations are fixed.** You can mention other people and receive the corresponding notifications. These include the page's default values.

### Deployment

- **Local publishing copies the shared keys required for sign-in to the frontend.** If the backend has not generated them yet, you will receive a notice. This helps you identify why sign-in cannot yet be completed in a newly published installation.
- **Database deployment avoids errors related to changes to icons.** The process prepares changes to the icon tables during deployment, so it can complete without this error.

### Development Tools

- **Project export excludes users and secrets, and generates scripts that support data of any type and size.** Secrets are saved in a local file ignored by Git and are only applied when publishing in Debug. This means publishing does not overwrite the secrets configured in each installation.
- **Changes to properties are saved correctly, and the wizard opens the appropriate manager.** You can move properties between tabs and reorder them in processes and reports too. When editing the configuration of a process, report or object, an empty or untitled manager no longer opens.
- **Custom LESS variables and the path for exported files with database changes are fixed.** Custom styles are processed correctly. In addition, exporting database changes uses the corrected path.
- **Errors in the Monaco editor's parsing and loading are fixed.** The changes prevent failures when processing content and loading the editor. TypeScript definition loading is also fixed.
- **Change the order of nodes without errors when loading their properties.** Behavior when editing nodes and loading their properties is fixed. You can now reorder them without errors.
- **Toolbar cloning is fixed.** When cloning a toolbar, its data is retained correctly. The copy therefore keeps the information from the original toolbar.

### Document and Image Management

- **Downloads through the proxy respect the configured deletion after download and work across different servers.** When the corresponding option is enabled, the file is deleted after it is downloaded. Encryption for requests between servers has also been fixed.
- **The preservation of document and image paths and names when saving and managing them through the proxy has been fixed.** The original path is preserved when saving files. In proxy operations, documents keep the correct name and path so they can be located by the processes that receive or manage them.
- **The image control works when saving files to an external folder.** You can use the image control even when files are saved outside the application's usual folders.

### Filters

- **Lists with descriptions no longer fail in certain search or data connection cases.** Searches that use unselected columns and searches run on another connection are fixed. If a description cannot be retrieved, the list continues to show the rest of the data.
- **Filter dependencies run when preset values are loaded.** When the filter loads, dependent controls are updated without you having to change any values. The selected value and its text are both preserved while the related options are updated.
- **You can save filter dependencies and receive a clear confirmation when they are saved.** Messages are available in English, Catalan, German, Spanish, French, Italian, and Portuguese. In addition, in the manager's list mode, visible options and their actions are easier to identify.
- **In the classic skin, the options list for a multiple selection filter opens below the corresponding field again.** The list no longer appears shifted to the left of the field.
- **Filters work correctly when applied with an empty value.** This fix prevents the filter from failing to apply when the value is empty.

### Forms

- **When you create a record from a calendar cell, the selected day is preserved.** The date no longer shifts to the previous day when you open the new record. This fix applies to the planner and the monthly calendar.
- **Module position and size are managed in the page configurator, not in the module form.** The row, column, width, and height fields are no longer shown in the page-module relationship form. This means saving a form that was already open does not overwrite the configured position. Other fields with the same names in other forms are unchanged.
- **You can save Boolean values in byte-type properties without conversion errors.** The problem occurred when inserting the data. The corrected conversion lets you complete the save successfully.
- **Processes and reports without a description show “General” as the name of their main tab.** The tab has a recognizable name even if the process or report has no description. Texts related to opening reports have also been corrected.
- **The database selector works even if the page size has not been defined.** You do not need to define a page size to use the selector and choose a database.
- **An error when using decimal values has been fixed.** This fix prevents the error that occurred when using these values.

### Installation

- **Addon installation correctly recognizes beta versions.** The “-beta” suffix in the addon version is interpreted correctly.

### Interface

- **Users who are not designers can now open the modules menu in the 2026 skin.** Access to the menu no longer depends on having the designer profile.
- **The display of the kanban and HTML editor, the menu logo and other interface details are fixed.** The response of annual calendar days and information cells when you interact with them is also adjusted. In addition, the options for disabling scheduled tasks and script tasks work again.
- **EasyInfo and charts load correctly for users who are not designers.** These modules no longer fail when a user does not have access to debugging tools, so the user can use them without that profile.
- **Layout issues in forms, the control panel, the annual calendar and icons in the flexy2022 skin are fixed.** Form fields are laid out correctly again, and the control panel retains its modules. The annual calendar adapts to the available width and lets you open days with a tap; its appearance and some icons are also fixed.
- **Offline application views and descriptions of its modules are displayed correctly.** Module and page descriptions are also translated into the languages included in the application.
- **Guided tours continue if they cannot open a screen.** Steps for that screen are skipped, and the tour continues with the next ones.
- **The profile photo updates when changed from the menu, without reloading the page.** The new image is also reflected in interface elements that display the profile. The change works when editing the photo from the menu or the user form.
- **The tour invitation no longer appears on top of other notifications or windows.** If the screen is busy, the invitation waits until it is free. If it does not become free within a minute, the invitation appears on your next visit.
- **An unformatted counter is no longer shown on settings group cards in the 2022 skin.** The counter remains visible as a badge in the 2026 skin. It is hidden in the 2022 skin, where it does not have a suitable design.
- **Information cards once again fill the width of their space and display their data with more contrast in the 2022 skin.** Icons return to their position at the edge of each card, and important data is easier to read. Standalone information cards retain their usual size.
- **The error log translation when the list is empty and sorting from the options menu are fixed.** The error list displays its text and filters translated even when there are no records yet. The intermittent error when sorting from the options menu is also fixed.
- **Pages in the 2026 skin make better use of space and avoid unnecessary scrollbars.** Margins, heights and resizing areas are adjusted so that content fits better and controls do not interfere with titles or help text. Pages leave space below the last module and balance the margins against the sidebar, while reducing the empty space above the content. The resize cursor appears only in valid areas; in the grid, forms and charts show all their content and adapt to the module size.
- **Object menus no longer repeat processes and actions that already appear in the bar.** The option explicitly configured in the bar is kept, including actions that open a new window. The menu also opens again in the correct position without disappearing.
- **Template cards in the classic skin are legible in dark mode.** The text color adapts to the dark background without changing the appearance in light mode.
- **Administrators can open their record from «My Profile» in the new skin.** The option opens the record of the signed-in user and is also available in the user view for those with administrative permissions.
- **Copying exceptions to the clipboard works with special characters.** Certain characters in the exception text no longer interrupt the copy action.
- **String translation is fixed when duplicate keys exist.** Affected strings are translated correctly even when they share a primary key. Duplicate keys that could interfere with translations loaded from application data are also fixed.
- **Date compatibility is fixed, and Blazor styles are prevented from affecting other pages.** Dates retain the format expected by the existing interface. In addition, Blazor page styles are isolated so they do not change the appearance of other pages.

### Login

- **If shared backend keys are missing, the login indicates which configuration you need to copy.** The notification identifies the sections needed for access to work. After copying them, restart the application to check the configuration again.
- **Email confirmation no longer asks you to set up a password again if one already exists.** The confirmation result depends on whether the account already has a password configured.
- **You can sign in even if your account does not have an alias.** The user search no longer fails when this information is missing.

### Notifications

- **You can open unread emails from the bell and see its counter update immediately.** When you open an email, the bell closes and the unread message counter decreases without waiting for a later task.
- **Notification sounds no longer repeat continuously when many notifications arrive at once.** This correction prevents continuous ringing while scheduled processes are running.
- **A connection issue that prevented real-time notifications from being received correctly is corrected.** The change affects the connection the application uses to receive live updates.

### Performance

- **The application prevents repeated reloads after restarting the application pool.** This reduces simultaneous reloads and improves stability while the service recovers. It also prevents unnecessary data rebuilds when loading pages.

### Processes

- **The post-login ERP process also runs for guest users.** This means guest sign-ins follow the same post-login flow as other users.
- **Document downloads from integrated processes are fixed.** Download handling now correctly processes document decoding and references.
- **ABH Sign correctly interprets signature credit information.** This prevents errors when processing credits received from the signature service.
- **Template downloads and data imports from Excel are fixed.** The download icon once again provides the template needed to prepare the data. The process is also fixed so you can upload data from Excel without the previous issue.
- **Jobs in an error state can be restarted to run again.** This means jobs that did not finish successfully can be started again.
- **Translation and serialization errors when using the application offline are fixed.** Data is now processed correctly in offline mode.
- **The Redsys integration is fixed.** The integration processes its operations correctly again.
- **Parameter creation processes can find libraries even when they are in different paths.** This fixes the issue that prevented the required library from being found when it was not in the expected path.
- **Errors when running processes with C# code are fixed.** Processes that include C# code can run without the errors fixed in this version.

### Reports

- **Existing projects can continue generating PDFs with their previous code.** The synchronous call used by generated code is retained. This means projects that already use it can continue generating PDFs without changing that code.
- **Reports are displayed with their names again.** The report name is used instead of its description. This lets you identify it by its assigned name.

### Scheduled Tasks

- **Processing of scheduled task information is fixed.** This change prevents the previous failures when managing task information. This ensures that it works correctly.
- **Objects related to scheduled tasks correctly apply the configured security.** The configured security is applied to these objects. This ensures that they retain the intended restrictions.

### Security

- **Authenticated users can no longer obtain the key used to sign tokens.** The key is generated in the configuration during first startup, but is no longer provided through an address accessible to authenticated users. This prevents them from using it to create their own tokens.
- **External addresses and return destinations are validated to prevent unsafe connections or redirects.** Retrieving MCP client metadata is restricted to public addresses. Sign-in and password-change return destinations are restricted to application pages, and decision calls are restricted to public or permitted addresses.
- **You can sign in and access downloads and reports using a token included in the URL.** The token is retained during redirects, even if sign-in is requested before the link is opened.

### Skins

- **The email editing footer buttons no longer cover the Save button in the 2026 skin.** Those editing an email can access the Save button without the other footer controls covering it.
- **The path is fixed so that the main logo is displayed.** With this adjustment, the main logo is displayed correctly in the application again.

### Updater

- **The updater indicates when it cannot check for the available version.** Instead of leaving the check without a response, it displays an error so you can identify the problem.
- **Updater tips are also displayed when following an operation in progress.** The information is loaded both in the wizard that started the operation and in views that follow it afterward.

### WebAPI Security

- **IIS supports PUT and DELETE requests to the WebAPI and displays errors returned by the backend.** Error responses are preserved exactly as sent by the backend, even when the frontend and backend are on different servers.
- **WebAPI lists no longer display text associated with hidden properties.** The description of a search value is also omitted when its property is marked as hidden.
- **Role-based security filters are applied correctly, and invalid conditions are rejected in the WebAPI and MCP.** Related searches no longer cause lists to omit the security filter. Conditions that could bypass it are rejected instead of returning unauthorized records.
- **WebAPI inserts run processes associated with properties even when they have no dependencies.** Values calculated by these processes are available to dependencies evaluated afterward.
- **Clearer errors are displayed when defining the WebAPI, and a blank screen is prevented when accessing without permission as a guest.** Unauthorized guest users receive a response instead of being left on a blank page. Developers receive clearer information when a WebAPI definition fails.
- **The WebAPI definition only displays enabled objects.** Views and their collections are no longer displayed when their objects are disabled.
- **The WebAPI redirection is fixed.** When accessing the WebAPI, redirection works correctly again.
- **An error when validating WebAPI tokens is fixed.** Requests that use tokens can pass validation correctly.
- **The WebAPI correctly accepts requests sent without content.** Sending these requests is fixed so they do not fail when the body is empty.

## Deprecated

### Configuration

- **The option to link an object is no longer displayed on the offline applications screen.** Only that linking option has been removed. The options to create and clone objects remain available.

### WebAPI Security

- **Connection check and maintenance mode activation functions are being removed.** Connection checking and the process for activating maintenance mode are no longer available.
