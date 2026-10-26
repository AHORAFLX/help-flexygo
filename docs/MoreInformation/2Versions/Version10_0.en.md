# Version 10.0

Flexygo runs on .NET 9, lets you deploy the interface, backend and database separately, and introduces the 2026 skin with an adaptable sidebar and new shortcuts.

## New features

### Skins

- **Introducing skin 2026, a complete redesign with a responsive sidebar and new shortcuts.** The screens, menus, lists, forms, panels, and dialogs have been redesigned with new typography, colors, and controls. You can collapse the sidebar, access alerts and your profile, and use Ctrl+K; the previous skin is still available.

    ![Introducing skin 2026, a complete redesign with a responsive sidebar and new shortcuts.](../../docs_assets/images/Versions/Version10_0/skin-2026.png)
- **Database publishing preserves the skin 2026 configuration.** The skin's appearance, menus, panels, and pages are included in the publishing scripts. This allows a new installation to start with these elements configured.
- **Customize account page resources from your product.** You can adapt the styles, scripts, and icons for the login, registration, and password recovery pages. Customization supports different levels.
- **You can switch between light, dark, and system themes.** The interface and some built-in elements adapt their appearance to the selected theme. If you select the system theme, Flexygo follows your device's appearance preference.
- **You can use custom CSS variables in your styles.** Flexygo supports custom CSS variables when applying styles. This gives you more options for adapting the application's appearance.

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

- **Administrators can enable maintenance mode and display a notice while the application is unavailable.** The control is in the administration panel, and a public page is displayed during maintenance. Open pages update when the status changes, and visitors can return to their page when maintenance ends.
- **You can configure the separator used when exporting CSV files.** This lets you adapt the format of exported files to the needs of each application.
- **Configure offline applications from a screen organized into sections.** The screen brings together objects, menus, pages, code, resources and synchronization, and includes the synchronization history and an emulator for viewing the application on a mobile device. The option to link an object is no longer shown on this screen, but the options to create and clone objects remain.
- **Update the screens of all connected users or select specific sessions.** The action is available in the actions menu for the version information. You can search for and select users to send them the update.
- **Administrators can view the configuration and status of processes on read-only screens.** The configuration is shown separately for the application and the server. You can also view the status of processes, the database and available resources.
- **You can open page settings from a button next to the tool for organizing modules.** The option is available in development mode and follows the current page when you navigate to another one, without rebuilding the header.
- **Configure the application with values specific to each environment.** The application can load and save settings for each environment, such as development. This keeps those values separate from the general configuration.
- **Publish a database from the configurator.** The tool lets you do this from the application configuration itself.

### Deployment

- **Project export supports large files and lets you define its template, content and access from the administration area.** The process supports projects larger than 2 GB, checks available space, and shows progress and elapsed time. You can choose custom folders and files; document and image repositories and other large files are excluded by default. The template corresponds to the installed product, although you can customize it; the window shows the template and version, warns about reserved sources, and suggests an available destination. From the administration area's tools, authorized administrators can export the installed application as a product project in a ZIP and view the export and error logs.
- **In installations with separate frontend and backend servers, file operations work across both servers.** The application can transfer files during upload, download and deletion operations. This support also works when accessing through impersonation.
- **You can generate Flexygo images with Docker and deploy its database too.** The Docker configuration lets you start the application components together and retrieve connection strings from the configuration available in the deployment environment. You can also integrate RDS and apply configuration changes during the update.
- **You can publish data databases from the configurator.** Publishing supports empty databases or databases that do not have their definition file. An error that could occur when updating databases in Docker environments is also fixed.

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

- **You can configure an unattended installation that completes automatically when the backend starts.** This lets you create, update, or reuse databases, as well as set the project name and administrator password. If any step fails, the installation reports it through a failed startup.
- **The wizard creates a step for each active data connection that still needs configuration.** This means the wizard steps adapt to the connections defined in each installation.
- **Install and update Flexygo from the configurator, including database creation and updates.** The wizard brings these tasks together on the configuration screens and lets you check deployment progress. It displays the connection when the database is already configured and also lets you deploy it in development environments. It downloads and installs the required packages, and handles operations affected by locked files or resources.
- **The revamped initial setup lets you register users and configure the project, database, and email.** The flow includes visual updates and handles cases where the project name or status title is empty. This lets you complete the initial setup without this information.

### Integrations

- **The MCP integration improves tool selection and assistant registration through metadata.** Assistants can distinguish which tools retrieve data, modify information or support retries, helping them choose how to use them. They can also be registered from their metadata document without being duplicated; the login response includes the issuer, and dynamic client registration remains available. In addition, processes that run for more than ten minutes no longer fail. Flexygo.Library maintains the MCP version compatible with the application.

### Interface

- **In the 2026 skin, edit values directly in lists and add rows from the list or form.** Each row is saved when you leave it and retains the record actions menu. Lists also keep changes when sorting or refreshing, display values and formats correctly, and let you resize columns and scroll horizontally. In narrow spaces, combos and lists fit the available width.
- **From the 2026 control panel, you can view and edit the home page for each profile.** Each profile has a schematic preview based on its configuration. The preview does not run the page or save changes, so you can review the configuration without modifying it.
- **Try the redesigned calendars, with an annual view, filters and range selection.** They include a legend and options to configure overlap and working hours. In the annual view, you can see the records for each day, and changes made by other people appear in the monthly view. Marker colors remain legible in different modes.
- **The new interface includes administration screens and refreshed navigation.** It includes administration for users, roles, properties, processes, settings, and other items. Navigation adds quick access, a collapsible sidebar, and a resizable panel.
- **The administrator and guest profiles now have avatars, and the profile picture is displayed in the footer and header.** The profile image is shared between both skins, including the classic one. When a user's photo is changed, it is also updated in those areas.
- **Administrators can switch a page to free layout and keep the arrangement of its modules.** When the option is enabled, modules are placed in the grid according to the areas already shown on the page. You can save or discard the change.
- **Administrators can drag and resize modules in a page's grid.** Placement mode lets you rearrange modules and adjust their size directly on the page. You can save or discard the changes.
- **Pages with free layout display each module in its defined position and size.** On narrow screens, modules move to a single column and keep the established reading order. Pages without free layout continue to display as before.
- **Administrators can offer guided product tours to authorized users.** A tour is configured with steps and added to a page as a module; the module's security settings determine who can view and restart it. Steps can point to elements, perform actions, and guide users through different screens. The tour has also been reviewed so it can continue even if a step or element is unavailable, and so it does not block the page.
- **Developers can open the global search configuration from the palette.** The option appears at the bottom of the palette and lets you return to the generic filters manager to configure the search. It is only available in development mode.
- **The new skin brings the theme, profile, and sign-out options together in a menu accessible from the footer.** The menu also shows the signed-in person's details and lets you switch between light and dark themes. The theme change is applied on screen as soon as you select it.
- **When arranging a page, you can also drag modules that have no header.** These modules display a drag strip while arrangement mode is active and hide it when you exit that mode. The page configuration opens on the side to keep the content you are arranging visible.
- **You can display search results over the page without replacing its content.** Palette mode is optional and groups results by criterion, with their title, description, and destination. Search responds faster and does not send data to the browser that it does not need to display.
- **Indicator cards offer optional descriptions and trends, with a clearer layout.** Cards in a row share the same width and height, and their values and footers are aligned even when some include additional information. If they appear in a list, they avoid duplicating the frame: the list keeps its frame, and the card keeps its content.
- **The Flexygo Core interface adopts a more modern design.** Visual elements in the navigation and user menu are updated, along with the color palette. The new menu includes the missing translations, and the changes complete the visual style across different skins.
- **You can access Flexygo pages through friendly URLs.** This new way of resolving addresses is available in the Flexygo core.

### Licenses

- **You can view license information on a dedicated page and see its status in a watermark.** The watermark lets you identify the license status at a glance while using the application. License information is also available on a dedicated page.
- **Flexygo can generate licenses for production applications.** This lets you have a license when running the application in that environment.

### Login

- **Configure how many failed attempts will lock an account and for how long.** Adjust the attempt limit and lockout duration in the settings. This lets you adapt this security measure to your application’s needs.
- **View the news on the login page and turn off its display whenever you want.** The option lets you decide whether news appears while accessing the application.
- **Customize the login, password recovery, and registration pages.** Customization is also available on the authentication and password management pages of products created with Flexygo.
- **You can sign in with multifactor authentication and add a verification step.** The process includes the screens and messages needed to complete verification. Emails and translations related to login, registration, and password recovery are also updated.
- **Sign in using LDAP and complete the login process successfully.** LDAP is added as an authentication method and can be configured for signing in with your organization’s credentials.
- **Sign in using SSO and, if you want, remember the session.** You can configure the integration, and Flexygo checks that the license covers the active modules. The screen does not offer SSO options that are unavailable.
- **You can sign in offline using SSO with ABH or LDAP.** This option is available for SSO sign-ins that use these methods.
- **Access the application using Cl@ve with a corrected authentication process.** The response and the relationship between Cl@ve requests and responses are adjusted. The registration link in installations with a base path and loading during login are also fixed, and errors are displayed more clearly.
- **You can reset your password and sign in with confirmation, even in installations with a base path.** When the reset is complete, you are signed in automatically. Email links and address generation for the login and password management pages are fixed.
- **Manage your account password through a dedicated process.** The option lets you access password management through a dedicated process. Access through Cl@ve is also fixed.
- **Enjoy a revamped login page, with the option to remember your session.** The screen adopts Flexygo’s usual style and lets you press Enter to continue. Cookies, translations, signing in and out, and access using email or passwords that differ in uppercase and lowercase letters are also adjusted.
- **You can create an account with an updated registration process.** The registration page, its translations, and associated emails have been updated.
- **The password reset process has a new look and feel.** The page, messages, and emails related to resetting the password are updated.
- **If the connection fails during login, Flexygo retries up to three times.** The retries let you continue the login process if a connection error occurs.
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

- **Run scripts as scheduled tasks.** You can configure scripts to run as scheduled jobs. The application includes the configuration needed to define and run them.
- **You can disable scheduled tasks from the application settings.** Use this option when you want to prevent scheduled tasks from running in the application. Configure it in the application settings.

### Security

- **You can control who runs each process, even if it is not linked to an object, and restrict it with SQL conditions.** Configure permissions for users, roles, and capabilities from their security screens or from the process record. Optional conditions are checked when validating the permission and only allow the process to run if they return 1 or true; if the condition is not met, the process is hidden from menus and toolbars.
- **View and modify permissions for users, roles, capabilities, and objects from a security table.** The table shows permissions by action and lets you add conditions, block rules, or delete them directly. You can filter for items that have rules and remove all the rules in a family. You can also open the manager from users, roles, capabilities, and objects with the item already selected, view the available actions, and review a preview before applying changes; the screen is translated into the seven available languages.
- **View the security of objects, modules, properties, and processes from a single workbench screen.** The screen lets you access each of these areas and open the view with a specific item selected. From an object's screen, you can open its security settings; when you change scope, the selected object is retained, and a new search clears the previous selection. The 2022 skin retains its previous screen.
- **Configure object security conditions by choosing a property, an operator, and a value.** The wizard displays the object's properties and lets you select context values, so you do not have to remember table names or special markers. Before saving, you can test the condition and view the SQL that was executed.
- **Skin 2026 includes a screen for viewing and managing the security of roles, users, and capabilities.** The screen brings together rules and default policies, explains which rule determines permissions, and shows the conditions and application order for roles, capabilities, and users. It lets you create, modify, and delete rules, compare permissions between objects, and manage field and navigation item permissions. It also shows the conditions of modules that determine access; you can access it from the skin 2026 workspace, and the previous screen is still available in flexy2022.

### Updater

- **Update, roll back, or change versions with a guided wizard that shows the progress and result of each operation.** The wizard brings together the process steps and clearly reports its status and errors. You can also track the operation if the tab is closed while it starts, and results from different operations are kept separate.
- **View updater operations in progress and track those started by other administrators.** The screen shows who controls each operation and lets you track it in read-only mode when appropriate. The owner's tabs can resume an interrupted preparation; the updater also prevents incompatible operations from starting and correctly preserves progress and results.
- **View the updater operation history and open its results and logs.** You can clear the history without affecting an active operation. This keeps information about previous operations at hand when you need to review their results.
- **View live logs from the wizard, with filters by level and context, and search.** Advanced mode adapts the display of logs and progress to small screens. You can also switch between the summary and the log, check the process while it is still active, and cancel if an error occurs.
- **View the result of each update or deletion, including the version left in use and details of any errors.** You can copy the technical error information, including its code. Closing the result refreshes the versions list.
- **The wizard checks requirements and blockers before allowing you to continue with the update.** Warnings that are not blockers let you continue, while errors prevent you from proceeding. When possible, the wizard also identifies who is blocking the application by recognizing the user and device, including for network locks.
- **Resolve configuration conflicts during an update and view application versions.** When resolving a conflict manually, you can choose a blank value, the previous value, a custom value, or the value from the new version. You can also resume an interrupted update and expand the window to full screen.
- **View and manage available, installed, or deleted versions from the versions page.** Information is presented in a refreshed, translated interface and sorted by status and version number. You can also apply the latest available version and delete downloaded versions from the updater.
- **The 2026 skin shows the installed version and can notify you about available changes.** The installed version appears in the sidebar footer, and the update notification is shown once for each major and minor version. From the notification, you can view the update details, which open the version manager.
- **The updater recognizes and compares preliminary package versions and lets you configure whether it searches for them.** The search takes the installed version and beta package naming into account. This lets the updater correctly identify preliminary versions during the update process.
- **Install and update the database from the configurator, with progress and error tracking during maintenance.** Update tasks can run in the background, and their errors are shown during the process. You can also validate ERP databases, and the tasks required for an update can continue in maintenance mode.
- **Update the Flexygo database in Docker environments.** The process handles session and redirection errors to prevent problems when continuing or returning to the application. If the update fails, a more descriptive message is shown.
- **Update Flexygo in a Docker installation from the maintenance page.** The process provides information about the update and lets you manage installation maintenance.
- **The update process supports local repositories, connection credentials, and download paths in Linux.** The database update can use credentials when the installation requires them. When it finishes, the process returns to the application.
- **Roll back an update if the process does not complete successfully.** This option lets you go back and restore the previous state if problems occur during the update.
- **You can update the database version during the update process.** This capability is part of Flexygo version management and also lets you update the database during the process.
- **View application versions and manage available and installed versions.** Version information shows which versions are available, installed, or deleted. This lets you view and manage application versions from Flexygo.

### WebAPI Security

- **The WebAPI and MCP limit responses by default to the properties defined for each object.** This adjustment includes defined properties and keys, in both responses and schemas. This omits columns that are not part of the object definition or are not available in all installations.
- **Flexygo includes an MCP server for assistants and applies token permissions in the WebAPI.** The MCP server is disabled by default and has its own permissions by user and role, as well as administration screens. The WebAPI explains why it rejects disallowed operations and does not include them in OpenAPI.
- **The navigation bar adds search, and the WebAPI supports bulk operations and relationship queries.** Search helps you find content from navigation. Developers can perform bulk operations and query relationships through the WebAPI.
- **Developers can view backend API and WebAPI definitions in Scalar.** Scalar provides a reference for Flexygo APIs for those developing on the platform.
- **You can expose application entities through the WebAPI.** The WebAPI includes token authentication and options for defining and querying entities. The allowed origins configuration supports wildcards to connect other applications to Flexygo.

## Improvements

### Deployment

- **Flexygo runs on .NET 9 and lets you deploy the interface, backend and database separately.** You can install it on IIS, as a standalone service or in Docker, on both Windows and Linux. The interface, backend and database can run on the same server or on different servers, and you can roll back updates from the version wizard.

    ![Flexygo runs on .NET 9 and lets you deploy the interface, backend and database separately.](../../docs_assets/images/Versions/Version10_0/net9-architecture.png)
- **Product translations are retained when publishing configuration data.** You can include translations associated with product elements in the publication. Translations belonging to test modules can be excluded.
- **You can choose which JavaScript and CSS files are included in bundled files.** Loading custom styles is also improved, and errors are prevented when optimizing files with the PDF plugin installed. Custom plugins are bundled separately from system plugins, and the process is more compatible with installations hosted within an IIS application.
- **Deployment scripts are compatible with Linux.** This compatibility makes it easier to deploy Flexygo in Linux environments.

### Artificial Intelligence

- **Artificial intelligence requests have a timeout limit.** This prevents a call that does not respond from remaining pending indefinitely. This lets the application continue working even if the artificial intelligence provider does not respond.

### Charts

- **Bar and pie charts make better use of the available space.** In charts with many categories, labels are hidden when there is not enough room to read them. In pie charts, the legend and outside labels are not displayed at the same time, and the chart size and position are adjusted to reduce empty space.

### Configuration

- **Configuration secrets remain encrypted in IIS and Docker in production.** In other environments, they are decrypted when the application starts. If a Docker secret is missing or cannot be read, the application will not start instead of creating a new key.
- **The 2026admin profile is assigned to the administrator, and the option to change profiles is only shown to administrators.** The administrator no longer sees “Decisions” in the menu. Other users also do not see an option they cannot use.
- **SQL connection errors are correctly identified for different network problems.** This helps distinguish problems resolving the server, timeouts and rejected connections.
- **The quick configuration panel is easier to read in the 2026 skin.** The readability of labels, section titles and help text is improved. The appearance of the save button is also adjusted.
- **The email configuration applies SSL and suggests a default port when you enable it.** During configuration, the selected SSL value is applied and the port is filled in for SSL connections. This means you do not have to enter it manually in that case.
- **Configuration groups show how many options they contain and are displayed as clearer cards.** The layout takes up less space and makes each group easier to find. The edit action remains visible when you hover over it.
- **The action to convert the development database clearly states its effect and warns of its consequences.** Its name is no longer confused with the interface development mode. The action is also marked as dangerous.
- **You can search for and configure chart themes from Flexygo administration.** Themes appear in navigation and configuration searches. They can also be assigned to chart modules.
- **Flexygo creates a default configuration if the application starts without a configuration file.** This lets you start the application when that file has not yet been created.
- **You can configure the Flexygo port, schema and URL.** These values are set in the application configuration to adapt it to the environment where it runs.

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

- **Flexygo icons are displayed using the updated Font Awesome 7 names.** The update covers icons for screens, views, navigation and other application elements. This means icons use the updated naming.
- **The 2026 skin refreshes email, notifications, and AI chat to make them easier to use.** In email, you can view folders next to the list, filter by read messages, search by subject, and open each message in a side panel. Notifications include filters and the option to mark them all as read; AI chat appears in a compact panel. The flexy2022 skin keeps its current look.
- **The 2026 interface quick access menu lets you return to the control panel or dashboard from any page.** The shortcuts appear in an administration section of the menu. They are available even if the project menu does not include that group.
- **The 2026 skin improves the display and use of windows, lists, combos and wizards.** Button help text is shown again, and lists and tabs are better organized. The template wizard is also restored, and creating offline objects is easier; the display of combos and property settings is also improved.
- **New Flexygo installations start with the 2026 interface, and new users inherit the profile of the person who creates them.** Existing installations keep their profile, and products are unaffected. The 2026 administration profile is only offered to users with the administrator role.
- **Copy the technical details of an error without displaying additional notices.** The button visually confirms the copy with an icon change. Developers can also use it as a shared element.
- **The 2026 skin improves lists, mobile use and several work tools.** List groupings and headers stay visible, and editing is faster. On mobile devices, the side navigation adapts to a sheet, and rows and controls are easier to use with touch. Calendars, charts and offline synchronization are also improved.
- **Loading screens use a new animation.** The animation displays the logo or the default indicator depending on the loading context. This provides a visual cue while the screen waits.
- **Drop-down menus are displayed without being clipped by their containing area.** Their position is adjusted relative to the control that opens them, even inside scrollable areas. This keeps the options visible when you open the menu.
- **The flexy2022 calendars return to an appearance similar to the previous one.** The monthly and annual views, the position of pop-up notices and the alignment of the planning view are adjusted. The change only affects the flexy2022 skin.
- **The skin 2026 views display their fields and labels more clearly.** Labels and long values stay on one line and are clipped when they do not fit. Spacing between rows and the display of headers have also been improved.
- **The module administration side panels are easier to use.** Configuration, events, security and page relationship options are displayed in panels that leave some of the content visible. Controls are organized, and the configuration panel has more room for its fields and buttons.
- **The offline application emulator keeps the device visible and adapts to narrow windows.** It displays an iPhone 17 or a Samsung Galaxy S25, depending on the selected device, with the corresponding screen dimensions. The iPhone frame is the same height as the Samsung frame, without changing the size of the application inside the device.
- **Navigation remains accessible when viewing the offline configuration screen in the 2026 skin.** The sidebar collapses instead of disappearing. When another page loads, it restores its saved state.
- **The security screen has a clearer, more spacious layout in the 2026 skin.** Titles, labels, controls and the save button are easier to distinguish within the module. This makes its options easier to review.
- **New card markers are easier to distinguish in the 2026 skin.** This improves their visibility both on dashboard cards and in the column indicator. This makes it easier to identify new items.
- **Links and clickable labels are easier to distinguish in the 2026 skin, in both light and dark modes.** Actual links are underlined and have their own color. Labels that act as controls use the text color and are underlined on hover.
- **Module administration options are better organized.** The gear opens the module, and the other options are grouped in a separate menu. In development mode, this menu groups the security, events and page relationship options.
- **Branches in the navigation panel show whether they are open or closed and can be expanded without closing the panel.** The indicator appears on branches that contain options and changes direction when they are opened; options with no items do not show it. Final options still navigate to their destination and close the panel, and opening a group closes any open options menu.
- **Notices and instructions in the page configurator are easier to read in the 2026 skin.** The contrast of the notice about the page source and the instruction shown when you hover over a module is increased. This makes both references more visible.
- **The recent changes list, startup messages and chart themes display translations when available.** Existing translations are used for item types and their names, without changing names assigned by each customer. Messages in startup modules are also translated when there is no information to display.
- **The new skin displays its menus, wizards and templates in the available languages.** Profile, control panel and object workspace options are translated. This means these screens no longer mix English text with the selected language.
- **The 2026 skin navigation retains the menu footer when refreshed and lets you open profile options.** Footer options no longer disappear when the menu is refreshed. From the profile menu, the language option opens the corresponding form again.
- **Avatar initials and pop-up content are easier to read.** The contrast of the initials is adjusted to the avatar background. Pop-ups have a style consistent with the rest of the interface.
- **The timeline and annual calendar are clearer in the 2026 skin.** Selected items and days with activity are easier to distinguish, and the current day is highlighted. Pop-ups and empty states are also easier to read.
- **The parameter view integrates better with skin 2026.** The new presentation applies only to this view. It does not change how it is displayed in the Flexygo 2022 skin.
- **Grid design mode opens from a button integrated into the navigation.** Access appears in the skin 2026 interface and retains the keyboard shortcut to open it. The page makes better use of the available space, and the button appears again when you refresh the navigation.
- **Labels in skin 2026 are easier to read in both light and dark modes.** Soft tones are adjusted to maintain suitable contrast in both modes. This improvement affects interface text in this skin.
- **Pages in skin 2026 balance the space between content and the edges of the window.** Space is left below the last module, and empty space above the pages is reduced. The sidebar and branding are better differentiated, and margins look more consistent.
- **Design mode keeps module titles visible and limits empty spaces on the page.** The drag area does not cover the headers, and the indicator appears when you hover over it; modules without a header retain an area for moving them. The page keeps spaces between modules but avoids long empty areas at the end.
- **Guided tours display translated text and correctly describe navigation, rules, and errors.** Translations, steps, and their actions are reviewed so they lead to the screens and elements they describe. Their text appears in the selected language, including the seven languages available in Flexygo.
- **Related items are displayed as compact tags that are easier to navigate.** Links to objects, processes, and reports take up less space and stand out more when you hover over them. Titles that do not perform an action are no longer highlighted as interactive.
- **The agenda distinguishes events more clearly and keeps their category visible in light and dark modes.** Events are displayed as cards, and their color is retained as a side marker. Controls and the grid are also updated to match the new skin.
- **The new skin groups module actions next to the title and hides secondary options in a menu.** The main action is readily available, and the bar takes up less space, especially in narrow modules. Less frequently used options remain available from the three-dot menu.
- **Text with semantic colors is easier to read in light and dark modes.** Text colors are adjusted without changing the background, button, or chart colors that also use those tones. The improvement applies to lists and other views in the new skin.
- **The calendar displays the month alongside the events for the selected day.** Days, events, and the current date are easier to distinguish, and the panel lets you view all the events for the day. The month selector also adapts to the language and color mode.
- **Secondary text and accent colors are easier to read in lists and views in the new skin.** Contrast is adjusted so text stands out without competing with primary names and titles, including in dark mode. Backgrounds and buttons that use the same colors keep their appearance.
- **Palette search indicates when it is working and distinguishes empty results from errors.** While results are loading, the screen keeps its space and displays a wait prompt. If there are no matches or the search fails, each situation is reported separately.
- **Modules fit better in narrow columns in the new skin.** The toolbar can wrap onto several lines instead of widening the module and causing horizontal scrolling on the page. At greater widths, the layout does not change.
- **The language option in the profile menu displays the flag for the selected culture.** The flag appears next to the language value and makes it easy to identify at a glance. If the culture does not include a country, no flag is displayed.
- **You can change the language, password, and profile photo directly from the menu.** Each option opens its corresponding action without going through a preferences folder. The fields available for each change remain the same.
- **Object card labels are easier to read in light and dark modes.** Labels have a minimum contrast level, and the card background adapts to the display mode. The change affects cards without changing the meaning of opacity styles in other areas.
- **Row actions appear at the end of the list, in a column better sized to their buttons.** The column takes up less empty space and leaves more room for list data. In editable lists, the row for adding data also displays its buttons in that column.
- **In the new skin, module headers show fewer maximize and minimize buttons.** The refresh and collapse buttons remain. The classic skin keeps its current buttons.
- **The new skin displays a progress bar while a page loads, instead of a spinning indicator.** The visible bar lets you track navigation progress. This way, you can see that the page is loading.
- **Side panels in skin 2026 display a top bar that separates their controls from the content.** The title is on the left and the controls are on the right, with the content below the bar. This makes the side panel actions easier to distinguish from the icons of the module that contains it.
- **When arranging a page, you can move modules without headers and access configuration from the arrangement bar.** When you switch pages, arrangement mode closes and warns you if there are unsaved changes. Display details in the control panel and translated menus are also corrected.
- **The Kanban board makes its columns and cards clearer, including when moving or archiving them and in dark mode.** Drop areas for cards fill the entire column, even when it is empty. When you drag cards, the archive area stays within its strip, and the drop areas are easier to distinguish.
- **The planner has a more orderly and readable toolbar and side panel.** Buttons highlight the active option and reserve red for dangerous actions. Labels and types align better with the grid and take up only the space they need; the panel also folds away without visual delay.
- **Module tabs are easier to distinguish and can be scrolled through when they do not fit on screen.** Long tabs scroll within the module without extending beyond it. The module selector adopts the style of the other controls and makes active and inactive tabs easier to distinguish.
- **Maps, network charts, and the calendar display correctly in dark mode.** Their display areas no longer depend on a light background and fit better with the application's dark appearance.
- **In the new skin, controls and navigation integrate better with dark mode.** Light backgrounds that made some elements difficult to read are corrected. The light skin does not change.
- **Pop-up menus for filters, processes, and notifications have a more consistent appearance.** They share the same shadow and border style, so the different menus look integrated with one another.
- **Submenus are displayed in a nested layout, and the last column can use the table's free space.** When you resize a table, the last column adjusts to prevent a gap from being left. Context menus retain the hierarchy of their options.
- **Version updates refresh affected web files, and access handles Backend interruptions better.** Files that have not changed can be kept in the browser. Access labels for SSO are also translated.
- **Application errors are displayed more consistently.** Their presentation is unified across different operations so messages are clearer.

### Licenses

- **The licenses page displays the level, extension status, and request code more clearly.** The plan level, such as PRO or LITE, appears next to the license type when applicable. If the request code is missing, this is indicated and the option to copy it is not offered; a confirmation is also displayed when the identifier has been copied.
- **License management recognizes new plans for more products.** The supported product plans have been expanded. This allows license management to recognize additional license plans for compatible products.
- **You can validate a license that includes multiple computer names.** Enter the names in the license computer list and separate them with the «|» character.

### Login

- **The process after login runs only once, including for guests and sign-ins with SSO or two-factor authentication.** If the process fails, the error is logged and displayed on the first page, but it does not prevent access to the application. A session token is also generated correctly for sign-ins with SSO or two-factor authentication.
- **Flexygo checks security conditions before allowing access.** The IP address, lockouts, and license are validated, including compatibility with older licenses. Password recovery and the attempt control for an IP address are also adjusted.
- **Account pages no longer get stuck when you go back, and they show clearer information when recovering a password.** Issues with unconfirmed email addresses are distinguished from issues with email sending configuration. Errors in account processes are also translated.
- **You can create users with backslashes in their username.** Username validation accepts this character when creating an account.

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

- **Scheduler icons remain legible in light and dark modes.** The configuration and refresh icons adapt their color to the selected display mode.

### Security

- **The application configuration encrypts passwords and other sensitive keys on disk.** This protects, among other data, connection strings, email and NuGet passwords, and JWT and Data Protection keys. The executable lets you manage the encryption key and move it to another server without needing the SDK.
- **The licensing API separates status queries from status updates and sends the activation code in the request.** This change affects integrations that query or update a license status, or send an activation code. Review these integrations and adapt them to the new behavior.
- **Role and permission changes take effect without users having to log in again.** The update includes permissions associated with roles and permissions for objects, pages, and reports. Changes take effect in the user's subsequent requests, including role changes.
- **New objects display their name in singular form, and a view for page capabilities is added.** The new view lets you query page capabilities through the security layer. In addition, when you create an object, its name is no longer taken from the plural title of its collection.
- **The security rules catalog includes pages, templates, and reports.** The catalog also identifies families that do not have a view available and prevents templates from appearing more than once in the results. This makes it easier to see which items are covered by the rules.
- **The password change page displays form errors and validations.** This helps you identify problems when entering or updating your password and fix them before continuing.

### Skins

- **Skin 2026 improves the contrast and readability of various controls, text, and notifications.** The changes affect dialogs, menu options, process buttons, cards, wizard steps, and scheduler notifications. They apply in both light and dark modes to make these elements easier to distinguish.
- **Skin 2026 uses the Geist typeface instead of IBM Plex.** This change updates the appearance of text in this skin. It also reduces the size of the font files used.
- **You can display a different logo for each interface mode.** Flexygo selects the logo variant that matches the active mode. This lets you adapt its appearance to each mode.
- **In skin 2026, processes with visible text remain in the toolbar.** Processes without text remain grouped in the three-dot menu. This keeps actions accessible without cluttering the toolbar.
- **In skin 2026, filters and the actions menu take up less space above the content.** The controls appear next to the module title. If there are no filters to display, the empty row is removed.
- **Skin 2026 displays fields that fail validation more clearly.** The error message appears next to the field label. This prevents it from being cut off or overlapping the next row.
- **You can open the module organizer from the skin 2026 header.** The shortcut is next to the notifications, and you can also use Ctrl+Shift+M. It is only available if you have design permissions.
- **You can access skin variables without distinguishing between uppercase and lowercase letters.** A variable search works even if you use different capitalization. This means you do not have to match the capitalization of the name exactly.

### Updater

- **View the full notes for each version, including preliminary versions, and compare their changes on the versions page.** The history shows five versions per page and loads more when you request them. It also includes the published notes for the Backend package and lets you identify changes in later versions that are not in the installed version.
- **The wizard's transition and deletion screens show the status of each operation more clearly.** When changing versions, the transition remains visible until the application is available again. The deletion screen stays visible before the deletion starts, and the wizard steps use smoother transitions that respect the reduced motion preference.
- **The wizard presents conflicts, requirements, and update progress more clearly.** The information in the conflict and requirement steps has been reorganized, and the progress window display has been improved. Spanish and English text has also been updated.
- **The updater retries file operations if they fail temporarily and generates a report if database deployment fails.** Retries help complete updates after intermittent file handling failures. The report makes it easier to review database deployment problems.
- **Updater logs are saved separately for each project.** Each project has its own logs, making it easier to find those for a specific installation.
- **You can continue with the update if the requirements show warnings that are not blockers.** Errors still prevent you from proceeding. You are also notified if the updater log table exceeds the configured limit.

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

- **Translations are restored, translations for the new administration screens are completed, and a list of records is fixed.** Translation resources used during installation are also unified. The execution log list includes the identifier needed to identify each row.
- **Errors when saving dependencies and retrieving license values are fixed.** Operations for saving dependencies and checking license values work correctly again.
- **The configuration table script includes the missing columns.** This ensures that the expected columns are included when these tables are created or updated.

### Conversations

- **Sending emails with attachments is fixed when the application uses different servers.** You can now send emails with attachments in this configuration.
- **Mentions and their notifications in conversations are fixed.** You can mention other people and receive the corresponding notifications. These include the page's default values.

### Deployment

- **Database deployment avoids an error related to changes to icons.** During deployment, changes to the icon tables are prepared to prevent this error.

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

- **Non-designer users can now open the module menu in the 2026 skin.** Access to the menu no longer depends on having the designer profile. This lets more users view the available modules.
- **The display of the kanban and HTML editor, the menu logo and other interface details are fixed.** The response of annual calendar days and information cells when you interact with them is also adjusted. In addition, the options for disabling scheduled tasks and script tasks work again.
- **EasyInfo and charts load correctly for non-designer users.** These modules no longer fail when the user does not have access to debugging tools. This lets users work with EasyInfo and view charts without being designers.
- **Layout issues in forms, the control panel, the annual calendar and icons in the flexy2022 skin are fixed.** Form fields are laid out correctly again, and the control panel retains its modules. The annual calendar adapts to the available width and lets you open days with a tap; its appearance and some icons are also fixed.
- **Offline application views and their module descriptions are displayed correctly.** Module and page descriptions are also translated into the languages included in the application. This lets users view the information correctly in different languages.
- **Logos and profile pictures are displayed correctly even when their paths contain backslashes.** In dark mode, Flexygo also finds the dark logo variant and keeps the configured logo if no variant exists. Logos can change with the theme without needing to reload the page.
- **The profile picture updates when changed from the menu or user form, without reloading the page.** The new image is also reflected in other interface elements that show the profile. This keeps the same photo up to date in different places.
- **Row actions are displayed in the expected position in each skin again.** In flexy2022, they appear before the columns, and in the 2026 skin, after them. Headers and rows remain aligned.
- **An unformatted counter is no longer shown on settings group cards in the 2022 skin.** The counter remains visible as a badge in the 2026 skin. It is hidden in the 2022 skin, where it does not have a suitable design.
- **Information cards once again fill the width of their space and display their data with more contrast in the 2022 skin.** Icons return to their position at the edge of each card, and important data is easier to read. Standalone information cards retain their usual size.
- **The translation of the error log when it is empty and sorting from the options menu are fixed.** The error list displays its text and filters in translation even when there are no records yet. The intermittent issue when sorting from the menu is also fixed.
- **Titles, buttons and headers that previously appeared as internal keys or in English are now translated.** The fix covers labels in the property manager and image manager, chart messages and list headers, even when they are not associated with an object. Search text is also translated into German where applicable.
- **Grid row controls stay in place when you interact with them.** When you select a row, its icons no longer move out of the visible area. You can still drag and save the layout.
- **When you exit design mode without saving, the page restores its previous layout.** If there are pending changes, you are asked to confirm, and you can restore the original layout. If no changes have been made, you can exit directly.
- **Pages in skin 2026 have fewer unnecessary scrollbars and more consistent spacing.** Margins and the height of some modules are adjusted so content fits better in the available space. Resize controls and placement mode tips no longer interfere with titles or content.
- **The resize cursor no longer appears in empty areas of pages in skin 2026.** Resize areas outside the columns are disabled without affecting the resizing of actual columns. The space to the right of the content is also reviewed.
- **Empty scrollbars are removed, and the response to a tour invitation is corrected.** Scrollbars no longer appear when the content fits in the module, but remain visible if the table really needs the space. The invitation options let you respond and keep your choice.
- **In the grid, modules display all their content and charts use the available space.** Form blocks no longer appear collapsed, and charts adapt to the size of their module. The page is also prevented from unnecessarily extending the empty area at the bottom.
- **Object menus no longer repeat processes and actions that already appear in the bar.** The option explicitly configured in the bar is kept, including actions that open a new window. The menu also opens again in the correct position without disappearing.
- **When you adjust a column's width, the actions column no longer expands to fill the remaining space.** The distribution of the available width in lists is corrected. This prevents the actions column from becoming disproportionately wide.
- **Template cards in the classic skin are readable in dark mode.** Text color adapts to the dark background. The appearance in light mode does not change.
- **Administrators can open their record from “My Profile” in the new skin.** The option opens the record of the signed-in user. It is also available in the user view for those with administrative permissions.
- **Profile menu options respond when selected, and sign-out is available again.** The menu uses the sign-out action, and its text can be displayed in different languages. The origin indicator reflects changes without needing to reload.
- **Guided tours continue if they cannot open a screen.** Steps for that screen are skipped, and the tour continues with the next ones.
- **Copying exceptions to the clipboard works with special characters.** Certain characters in the exception text no longer interrupt the copy action.
- **Translation issues caused by duplicate keys are corrected.** Affected strings are translated correctly even when they share a primary key. The change also affects translated text loaded from application data.
- **Date compatibility is corrected, and Blazor page styles are prevented from affecting other pages.** Dates keep the format expected by the existing interface. Blazor page styles are also isolated so they do not change the appearance of other pages.

### Login

- **After changing your password, you are taken to the correct destination and can sign in with your new password.** The redirect after completing a change through the recovery process is fixed, so you can continue with your updated password.
- **When confirming your email, you do not have to set up a password again if one already exists.** The confirmation displays the appropriate result depending on whether the account already has a password set up.
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

- **Scheduled task information processing is fixed.** Information is processed in a format that prevents previous errors. This allows scheduled tasks to work correctly.
- **Objects related to scheduled tasks respect the configured security settings.** This fix ensures these objects are not left without the security measures that apply to them. As a result, the intended security configuration is applied when working with them.

### Security

- **External addresses and return destinations are validated to prevent unsafe connections or redirects.** MCP client metadata requests are restricted to public addresses. Login and password change returns are restricted to application pages, and decision calls can only be directed to public or allowed addresses.
- **You can log in and access downloads and reports using a token included in the URL.** The token is retained during redirects. This means the link also works if you are asked to log in before opening the content.

### Skins

- **In skin 2026, the email editing footer buttons no longer cover Save.** When editing an email, the Save button remains accessible even when there are other buttons in the footer. This lets you save changes without the controls overlapping.
- **The display of the main logo and the background of the default logo have been corrected.** The main logo is displayed correctly again. The default image now has a gray background instead of a white one.
- **In skin 2026, list links respect the muted color defined by their template.** This improves the readability of secondary text, such as “No address”. It applies in both light and dark modes.
- **Style loading no longer fails if a LESS variable is missing.** A missing LESS variable does not interrupt style loading. This prevents errors when applying styles with CSS variables.

### Updater

- **Update and rollback progress preserves completed steps and marks steps completed before a failure as done.** Steps do not revert to an earlier state when new updates arrive, and a final error is not replaced by a previous state. This lets you distinguish completed work from the point where the failure occurred.
- **The updater displays an error if it cannot check for the latest available version.** This lets you know that version information could not be retrieved instead of leaving the problem unreported.

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

### WebAPI Security

- **Connection check and maintenance mode activation functions are being removed.** Connection checking and the process for activating maintenance mode are no longer available.
