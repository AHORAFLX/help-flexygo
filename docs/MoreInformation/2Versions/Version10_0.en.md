# Version 10.0

Flexygo runs on .NET 9, lets you deploy the interface, backend and database separately, and introduces a skin with adaptable navigation and light, dark or automatic themes.

## New features

### Skins

- **Introducing the 2026 skin, with adaptable side navigation and light, dark or system-based themes.** The sidebar can be collapsed and groups the menus; you also have access to alerts and your profile, as well as the Ctrl+K shortcut. You can choose the theme from the user menu, and Flexygo remembers your selection; the system theme follows your device's appearance preference.

    ![Introducing the 2026 skin, with adaptable side navigation and light, dark or system-based themes.](../../docs_assets/images/Versions/Version10_0/skin-2026.png)
- **The 2026 skin's configuration is retained when publishing database scripts.** The publication includes this skin's appearance, menus, panels and pages, rather than removing them from the database. It also lets an installation from an empty database include its elements and start with the complete appearance.
- **Customize account page resources from your product.** You can customize styles, scripts and icons at different levels. This lets you adapt the login, registration and password recovery pages for each product.
- **You can use custom CSS variables in your styles.** This expands the options for adapting the application's appearance. In addition, loading styles does not fail if a LESS variable is missing from the CSS variables.

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

- **Administrators can enable maintenance mode and display a notice that updates immediately.** The control is available in the administration panel and displays a public page while the application is unavailable. Open pages reflect the status change, and users can return to their page when maintenance ends.
- **You can configure the separator used when exporting CSV files.** Adjust this option to adapt the format of exported files to each application's needs. This ensures the CSV uses the separator its recipients expect.
- **Configure offline applications from a screen organized into sections and view their synchronization history.** The screen brings together objects, menus, pages, code, resources, and synchronization, and includes an emulator for previewing the application on a mobile device. You can no longer link an object from this screen, but the options to create and clone objects remain available.
- **Refresh the screens of all connected users or select specific sessions.** You will find the action in the version information menu. You can search for users and choose who to send the refresh to.
- **Administrators can view configuration and process status on read-only screens.** The application configuration and server configuration are shown separately. You can also view the status of processes, the database, and available resources.
- **You can open page settings from a button next to the tool for organizing modules.** The option is available in development mode and follows the current page when you navigate to another one, without rebuilding the header.
- **You can configure the application with values specific to each environment.** The application can load and save settings specific to environments such as development. These values are kept separate from the general configuration.
- **You can publish a database from the configurator.** The tool includes this task so you can publish from the configurator itself, without using another administration option.

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

- **The MCP endpoint registers assistants using their metadata and includes the issuer in the login response.** Assistants are identified using their metadata document and are not duplicated; dynamic client registration remains available. In addition, processes lasting more than ten minutes no longer fail.

### Interface

- **In skin 2026, you can edit values directly in lists and add rows from the list or form.** Each row is saved when you leave it and retains the record actions menu. The experience adapts to mobile phones and tablets and is available in light and dark modes; the flexy2022 skin is unchanged. Changes are also retained when sorting or refreshing, and editable lists adapt to the available space.
- **From the 2026 dashboard, you can view and edit the home page for each profile.** Each profile has a schematic preview based on its configuration. The preview does not run the page or save changes.
- **Enjoy refreshed calendars with an annual view, filters, and range selection.** They include a legend and options to configure overlapping events and working hours. In the annual view, you can check the records for each day, and changes made by other people appear in the monthly view; marker colors remain legible in the different modes.
- **The new interface includes administration screens and refreshed navigation.** It includes administration for users, roles, properties, processes, settings, and other items. Navigation adds quick access, a collapsible sidebar, and a resizable panel.
- **Administrator and guest profiles have an avatar, and the profile photo is displayed in the header and footer.** The profile image is shared between both skins, including the classic one. When you change the photo from the menu or user form, it updates in the interface without reloading the page; the legibility of initials and pop-up notifications has also been improved.
- **Administrators can switch a page to free layout and rearrange its modules directly in the grid.** When free layout is enabled, modules are placed according to the areas already shown on the page, and you can drag and resize them. Modules without a header can also be arranged; changes can be saved or discarded, and pages with this layout adapt their modules to narrow screens while preserving the reading order.
- **Administrators can offer guided tours of the product to authorized users.** The tour is configured with steps and added to a page as a module; the module security determines who can view and restart it. Steps can point to specific items and perform predefined actions, and the tour continues when changing screens without leaving layers that block the page.
- **Developers can open the global search configuration from the palette.** The option appears at the bottom of the palette and lets you return to the generic filters manager to configure the search. It is only available in development mode.
- **You can display search results over the page without replacing its content.** Palette mode is optional and groups results by criterion, with a title, description, and destination. Search responds faster and sends only the data needed to display results to the browser.
- **Indicator cards display values, descriptions, and optional trends more clearly.** Cards in the same row share the same width and height, and align their values and footers even when they include additional information. When they appear inside a list, they avoid duplicating the frame: the list keeps its frame, and the card retains its content and layout.
- **The Flexygo Core interface adopts a more modern design.** The navigation and user menu have been redesigned, with the missing translations added. Core colors have also been updated, and the new visual style has been applied more fully across different skins.
- **You can access Flexygo pages using friendly URLs.** This new way of resolving addresses is available in the Flexygo core. It lets you reach pages using this type of URL.

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

- **Define which records for each object should generate notifications.** You can set the conditions in the object configuration, alongside its notification events. They are combined with the security rules so that a notification is sent only when the record meets the specified conditions.
- **Receive real-time notifications about new records only when you can view the record.** The notification appears in the bottom-right corner and lets you open the record or its list. List filters and each recipient's permissions are checked; if several records of the same type are created, the notification is updated instead of accumulating. The connection for receiving live updates is also fixed.
- **Enable notifications to track insertions, modifications, and deletions in the objects you choose.** Each user receives notifications according to their own session and permissions. This lets you track changes to records in the objects you have configured.
- **The application includes a push notification service.** The service integrates with the application's offline features. You can use push notifications together with this mode of operation.

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

- **You can configure permissions to control who runs each process, even if it is not linked to an object.** Permissions can be assigned to users, roles, and faculties, and configured from the security screens or the process form. You can also add an SQL condition, which is evaluated when checking the permission: the process can only be run if it returns 1 or true. If the condition is not met, the process is hidden from menus and toolbars.
- **You can configure object security conditions by selecting a property, operator, and value.** The wizard offers the object's properties and lets you select context values, without needing to remember table names or special tags. Before saving, you can test the condition and review the SQL executed.
- **Skin 2026 adds a screen for viewing and managing the security of roles, users, and faculties.** From the workspace, you can create, modify, and delete rules, and compare permissions between objects. The screen displays field permissions under their object, rules for navigation items, and when a module condition determines access. It also explains which rule allows a user to see an item and displays the applied rules alongside the default policy; the previous screen remains available in flexy2022.

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

- **The administrator starts with the 2026admin profile, does not see «Decisions», and only administrators can change profiles.** The option to change profiles is no longer shown to users who do not have permission to use it. This ensures that each person only sees the actions they can perform.
- **SQL connection errors are correctly identified for different network problems.** The information distinguishes problems locating the server, timeouts, and rejected connections. This makes it easier to identify the type of connection problem that occurred.
- **The quick configuration panel is easier to read in the 2026 skin.** Labels, section headings, and help text are clearer. The appearance of the save button has also been adjusted.
- **When configuring email with SSL, the selected option is applied and a default port is suggested.** The email configuration wizard uses the SSL value you selected and fills in the corresponding port. This means you do not have to enter it manually for an SSL connection.
- **Configuration groups show how many options they contain and appear as clearer cards in the 2026 skin.** The layout takes up less space and makes it easier to find each group. The edit action remains visible when you hover over it.
- **The action to convert the development database clearly states what it does and warns about its consequences.** Its name avoids confusion with the interface's development mode. The action is also marked as dangerous.
- **You can search for and configure chart themes from Flexygo administration.** Themes appear in navigation and in configuration searches. You can then assign them to chart modules.
- **Flexygo creates a default configuration if the application starts without a configuration file.** This lets the application start even if that file has not yet been created. The default configuration is available at startup.
- **You can configure the Flexygo port, schema, and URL.** These values let you adapt the application configuration to the environment where it runs. You can set them to match that environment's details.

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

- **Flexygo icons use the updated Font Awesome 7 names.** The update covers icons in screens, views, navigation, and other application elements.
- **The 2026 skin refreshes email, notifications, and AI chat to make them easier to use.** In email, you can view folders next to the list, filter by read messages, search by subject, and open each message in a side panel. Notifications include filters and the option to mark them all as read; AI chat appears in a compact panel. The flexy2022 skin keeps its current look.
- **The 2026 interface quick access menu lets you return to the control panel or dashboard from any page.** The shortcuts appear in an administration section of the menu, even if the project menu does not include that group.
- **The 2026 skin improves the display and use of windows, lists, combos, and wizards.** Button tooltips are displayed again, and lists and tabs are better organized. The template wizard is also restored, and creating objects offline is easier.
- **New installations start with the 2026 interface, and new users inherit the profile of the person who creates them.** Existing installations retain their profile, and products are unaffected. The 2026 administration profile is only offered to users with an administrator role.
- **You can copy an error’s technical details without showing additional notifications.** The button confirms the copy visually by changing its icon. It is also available as a shared item for developers.
- **The 2026 skin improves lists, mobile use, and several work tools.** List groupings and headers stay visible, and editing is faster. On mobile devices, side navigation adapts to a sheet, and rows and controls are easier to use with touch; calendars, charts, and offline synchronization are also improved.
- **Loading screens use a new animation.** The animation displays the logo or the default indicator, depending on the loading context.
- **Dropdown menus are displayed in full and are no longer clipped by their containing area.** Their position adjusts relative to the control that opens them, even inside scrollable areas.
- **flexy2022 calendars have a layout similar to the previous one again.** The monthly and annual views, the position of pop-up notifications, and the alignment of the planning view have been adjusted. The change only affects this skin.
- **The skin 2026 views display their fields and labels more clearly.** Labels and long values stay on one line and are clipped when they do not fit. Spacing between rows and the display of headers have also been improved.
- **Logos can adapt to the light or dark theme and change without reloading the page.** You can use a logo variant for the dark theme. Flexygo also correctly finds that variant and keeps the configured logo if no alternative exists; images are displayed even when their paths contain backslashes.
- **The skin 2026 side panels separate their controls from the content with a top bar.** The title is on the left and the controls are on the right, with the content below. This makes it easier to distinguish side panel actions from the icons of the module that contains it.
- **The emulator displays the selected device and keeps its screen visible as you scroll.** It represents an iPhone 17 or a Samsung Galaxy S25 with the corresponding dimensions. The iPhone frame is the same height as the Samsung frame, and sections are rearranged in narrower windows.
- **The timeline and annual calendar are displayed more clearly in the skin 2026.** Selected items and days with activity are easier to distinguish. The current day is highlighted, and pop-up notifications and empty states are more legible.
- **The parameter view is better integrated with the skin 2026.** The new layout applies only to this view and does not change how it is displayed in the Flexygo 2022 skin.
- **New card markers are easier to distinguish in the skin 2026.** The adjustment improves visibility on both dashboard cards and the column indicator.
- **Links and clickable labels are easier to distinguish in the 2026 skin, in both light and dark modes.** Actual links are underlined and have their own color. Labels that act as controls use the text color and are underlined on hover.
- **Module administration options open in side panels that are easier to use.** Configuration has more space to display fields and buttons on a single row while keeping part of the page visible. Security and events panels appear from the bottom, and the events panel adjusts its height to the content; they also include the page relationship options.
- **The gear opens the module configuration, and the other administration options are grouped in another menu.** In development mode, the additional menu brings together the security, events, and page relationship options. Branches in the navigation panel show whether they are open or closed, can be expanded without closing the panel, and keep their icons in the expected order.
- **Notifications and prompts in the page configurator are easier to read in the skin 2026.** The contrast has been increased for the notification about the page source and the prompt that appears when you hover over a module.
- **Interface text is displayed in the selected language when a translation is available.** This improvement covers manager titles and buttons, chart messages, types and names of items in recent changes, list headers, and home page messages. It also includes chart theme names, options, wizards, and templates in the skin 2026; the search box correctly displays its text in German.
- **The skin 2026 navigation keeps the menu footer when refreshed and allows you to open profile options.** The language option opens the corresponding form from the menu again. The display of footer shortcuts when refreshing the menu has also been fixed.
- **Grid design mode opens from navigation and keeps module titles visible.** Access remains available after refreshing navigation and keeps the keyboard shortcut. Drag areas do not cover titles, the page makes better use of space, and charts and forms adapt to the size of their modules.
- **Pages in the skin 2026 balance the space between content and the window edges.** Space is left below the last module, empty space above pages is reduced, and the space taken up by the sidebar is accounted for. Content is better separated from the brand and side shortcuts.
- **Related items are displayed as compact tags that are easier to navigate.** Links to objects, processes, and reports take up less space and are easier to distinguish when you hover over them. This change prevents titles that do not perform an action from being highlighted as interactive.
- **The agenda distinguishes events more clearly and keeps their category visible in light and dark modes.** Events are displayed as cards, and their color is retained as a side marker. Controls and the grid are also updated to match the new skin.
- **The new skin groups module actions next to the title and hides secondary options in a menu.** The main action is readily available, and the bar takes up less space, especially in narrow modules. Less frequently used options remain available from the three-dot menu.
- **Semantic color text and secondary text are easier to read in light and dark modes.** The contrast of text in lists and other views has been adjusted without changing the background, button, or chart colors. The legibility of labels, icons, and object cards has also been improved.
- **The agenda displays the month alongside the events for the selected day.** Days, events, and the current date are easier to distinguish, and the panel lets you view all events for the day. The month selector adapts to the language and color mode.
- **In the skin 2026, module headers display fewer maximize and minimize buttons.** The refresh and collapse buttons remain. The classic skin keeps its current buttons.
- **The skin 2026 displays a progress bar while a page loads.** The visible bar lets you track navigation progress and replaces the spinner.
- **Palette search indicates when it is working and distinguishes empty results from errors.** While results are loading, the screen keeps its space and displays a wait prompt. If there are no matches or the search fails, each situation is reported separately.
- **The skin 2026 profile menu groups the theme, profile, and sign-out options in the footer.** It displays the details of the person who is signed in and lets you switch between the light and dark themes; the change is applied as soon as you select it. From the menu, you can change the language, password, and profile photo, and the language option displays the corresponding flag when the culture includes a country.
- **Modules fit better in the narrow columns of the new skin.** The toolbar can wrap onto several lines instead of widening the module and causing horizontal scrolling on the page. At greater widths, the layout does not change.
- **The free grid keeps modules within their allocated space and prevents empty scrollbars.** Charts use the available space, and form blocks no longer appear collapsed. The page avoids unnecessarily extending the empty area at the end.
- **Navigation remains accessible when viewing the offline configuration screen in the skin 2026.** The sidebar collapses instead of disappearing and restores its saved state when another page loads.
- **The security screen has a clearer, more spacious layout in the skin 2026.** Titles, labels, controls, and the save button are easier to distinguish within the module.
- **Page configuration is available from the module organization bar.** Access is next to the tools for organizing the page. The display of the control panel and translated menus has also been adjusted.
- **The Kanban board has clearer columns and cards, including when moving or archiving them and in dark mode.** Drop zones for cards fill the entire column, even when it is empty, and the archive area stays within its strip when cards are dragged. Cards stand out better from the background, and target areas are easier to identify.
- **Pop-up menus for filters, processes, and notifications have a more consistent appearance.** They share the same shadow and border style, making them fit together better. This gives the different menus a uniform visual appearance.
- **The planner has a more organized toolbar and side panel.** Buttons make the active option easier to identify and reserve red for dangerous actions. Panel labels and types are easier to read, align with the grid, and take up only the necessary space; the panel also collapses without visual delay.
- **Module tabs have a clearer design and can be navigated when they do not fit on screen.** Active tabs are easier to distinguish from inactive ones. Long tabs can be scrolled without leaving the module, and the module selector adopts the style of the other controls.
- **Maps, network charts, and the agenda are displayed correctly in dark mode.** Their display areas no longer depend on a light background. This lets them better match the dark appearance of the application.
- **In the new skin, controls and navigation items are better integrated with dark mode.** Light backgrounds that made some items difficult to read have been fixed. The light skin is unchanged.
- **Submenus appear nested, and the last column can fill the table’s remaining space.** When you resize a table, the last column adjusts to prevent a gap. Context menus retain the hierarchy of their options.
- **Version updates refresh affected web files, and access handles Backend interruptions better.** Files that have not changed can be kept in the browser. Access labels for SSO are also translated.
- **Application errors are displayed more consistently.** The display of messages across different operations has been unified. This makes errors easier to understand and gives them a consistent appearance.

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

- **Keep error or warning messages on screen until you close them.** This option is useful when you need to read a message carefully before dismissing it. You can configure it to prevent the message from disappearing automatically.

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

- **The configuration encrypts the application's passwords and sensitive keys on disk.** This protects, among other data, connection strings, email and NuGet passwords, and JWT and Data Protection keys. The executable lets you manage the encryption key and move it to another server without needing the SDK.
- **The license API separates status queries from status updates and sends the activation code in the request.** This change affects integrations that query or update the license status, or send an activation code. Review these operations in integrations that use the API.
- **Role and permission changes take effect without requiring the user to sign in again.** Updated permissions are reflected in the user's subsequent requests. This includes permissions associated with roles and those for objects, pages, and reports.
- **You can view and modify permissions in a security table and open it directly from users, roles, faculties, and objects.** The table displays permissions by action and lets you add conditions, block or delete rules, filter items with rules, and remove all rules from a family. When opened from an item, that item is selected. You can also view the security of objects, modules, properties, and processes on a single screen; when changing scope, the selected object is retained until you enter a new search.
- **The security screen is translated into all seven available languages.** Labels and options are displayed in the corresponding language instead of relying on fallback English text. This makes them easier to review and configure in the different language versions.
- **New objects display their name in singular form, and a view for page faculties is added.** The new view lets you review page faculties through the security layer. Also, when creating an object, its singular name is used instead of the collection's plural title.
- **You can access role and user security actions from the security screen.** When you select a user or role, the available actions are displayed. Before applying them, a preview lets you review which rules will be retained.
- **The security rules catalog includes pages, templates, and reports.** The catalog identifies families that do not have a view available and avoids repeating templates in the results. This lets you review the rules for these items alongside the rest of the catalog.
- **The password change page displays form errors and validations.** You can identify and fix problems that arise when entering or updating the password before continuing.

### Skins

- **You can display a different logo for each interface mode.** The application looks for the logo variant corresponding to the active mode. This lets you adapt its appearance to each mode.
- **The 2026 skin improves the readability of controls, messages and secondary text.** Changes affect, among other elements, the Apply button in dialogs, dangerous options in menus, and buttons for running processes. They also make validation errors, scheduler warnings, wizard steps and faded links easier to distinguish in light and dark modes.
- **The 2026 skin uses the Geist typeface instead of IBM Plex.** This change adjusts the appearance of text and reduces the size of the font files used by this skin.
- **In the 2026 skin, processes with visible text remain in the toolbar.** Processes without text remain grouped in the three-dot menu to keep the toolbar tidy.
- **In the 2026 skin, filters and the actions menu take up less space above the content.** The controls are placed next to the module title. If there are no filters to show, the empty row disappears.
- **You can open the module organizer from the 2026 skin header.** Use the button next to notifications or the Ctrl+Shift+M shortcut. Access respects design permissions.
- **The default Flexygo logo displays a gray background instead of a white one.** This change affects the logo image included by default.
- **You can access skin variables without case sensitivity.** Variable lookup works even if you use different capitalization.

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

- **Missing translations are restored, and an execution log list is corrected.** Translations for the new administration screens are also completed. The list now includes the identifier needed to recognize each log entry.
- **Errors when saving dependencies and retrieving license values are fixed.** Both operations work correctly again: you can save dependencies and retrieve license values.
- **The configuration tables script includes the missing columns.** When these tables are created or updated, the expected columns are now included. This prevents required data from being missing.

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

- **Several interface details are fixed, and the options to disable scheduled tasks and script tasks work again.** The display of the kanban and HTML editor, the menu logo, and the response of annual calendar days and information cells when interacting with them are also adjusted.
- **EasyInfo and charts load correctly for users who are not designers.** These modules no longer fail when the user does not have access to debugging tools. They can now be used without designer permissions.
- **Layout issues in forms, the dashboard, the annual calendar, and icons in the flexy2022 skin are fixed.** Form fields are laid out correctly again, and the dashboard retains its modules. The annual calendar adapts to the available width and lets you open days with a tap.
- **The offline application views and their module descriptions are displayed correctly.** Module and page descriptions are also translated into the languages included in the application.
- **Setting group markers and information cards are displayed correctly in the skin 2022.** In the skin 2022, the unformatted counter is hidden on setting group cards. Information cards use the available width, display their data with more contrast, and have their icons back in their original position.
- **The translation of the empty error list and sorting from the options menu have been fixed.** The list displays its text and filters in the correct language even when there are no records yet. The intermittent issue when sorting from the menu has also been fixed.
- **Grid row controls stay in place when you interact with them.** When you select a row, its icons no longer move outside the visible area. You can still drag and save the layout; if you exit design mode without saving, you can restore the previous layout.
- **Pages in the skin 2026 have fewer unnecessary scrollbars and more consistent spacing.** Margins, module height, and available space have been adjusted so content fits better. Resize controls, placement mode prompts, and the cursor that appeared in empty areas have also been fixed.
- **Guided tours continue even if a screen or one of its steps is unavailable.** The tour skips steps that cannot be opened and waits for content to appear without waiting for the entire screen to finish loading. Its text is translated according to the product language, and its steps and actions lead to the corresponding screens and items.
- **Object menus no longer repeat processes and actions that already appear in the bar.** The option explicitly configured in the bar is kept, including actions that open a new window. The menu also opens again in the correct position without disappearing.
- **Row actions appear at the end of the list, aligned in a column sized to fit their buttons.** The column takes up less empty space and leaves more room for data. Its position adapts to each skin and stays aligned with the headers; when you adjust a column's width, the actions column does not expand to fill the extra space.
- **Profile menu options work correctly, and sign-out is available again.** Administrators can open their record from “My profile.” Menu text is displayed in the different languages, and the source indicator reflects changes without needing to reload.
- **Template cards in the classic skin are legible in dark mode.** The text color adapts to the dark background without changing the appearance in light mode.
- **Copying exceptions to the clipboard works with special characters.** Certain characters in the exception text could interrupt the action. You can now copy that text without those characters preventing the copy from completing.
- **Duplicate keys that could interfere with application translations have been fixed.** Affected strings are translated correctly even when they share a primary key. The adjustment also affects translated text loaded from the application data.
- **Date compatibility is fixed, and Blazor styles no longer affect other pages.** Dates retain the format expected by the existing interface. Blazor page styles are also isolated so they do not change the appearance of other pages.

### Login

- **After changing your password, you are taken to the correct destination and can sign in with your new password.** The redirect after completing a change through the recovery process is fixed, so you can continue with your updated password.
- **When confirming your email, you do not have to set up a password again if one already exists.** The confirmation displays the appropriate result depending on whether the account already has a password set up.
- **You can sign in even if your account does not have an alias.** The user search no longer fails when this information is missing.

### Notifications

- **Open unread emails from the bell and see the counter update immediately.** When you open an email, the bell closes and the unread message counter decreases without waiting for a later update.
- **The notification sound no longer repeats when many notifications arrive at once.** The fix prevents the chime from sounding continuously while scheduled processes are running.

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

- **You can sign in and access downloads and reports using a token included in the URL.** The token is retained during redirects, including when sign-in is required before opening the link. This allows access to the destination to continue after authentication.

### Skins

- **The path is fixed so the main logo is displayed.** This change lets the main logo display correctly.

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
