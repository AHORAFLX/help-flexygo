# Version 10.0

Refreshes the skin with a responsive sidebar, integrates AI assistants and adds guided assistants for installation and updates, as well as new deployment and icon management options.

## New features

### Skins

- **The Flexygo 2026 skin redesigns the application and adds a responsive sidebar and new shortcuts.** It renews screens, menus, lists, forms, panels and dialogs, with new typography, colors, spacing and controls. The sidebar can be collapsed and includes shortcuts to alerts and the profile; it also offers the Ctrl+K shortcut and keeps the previous skin available.

    ![The Flexygo 2026 skin redesigns the application and adds a responsive sidebar and new shortcuts.](../../docs_assets/images/Versions/Version10_0/skin-2026.png)
- **The 2026 skin retains its configuration when database scripts are published.** Publishing includes the skin’s appearance, menus, panels and pages, even when starting from an empty database. This lets a new installation start with these items available.
- **You can customize account page resources from your product.** Adapt styles, scripts and icons at different customization levels. This lets you adjust sign-in, registration and password recovery pages for each product.
- **You can switch between light, dark and system themes.** The interface and some integrated elements adapt their appearance to the selected theme. If you choose the system theme, Flexygo follows the device’s appearance preference.
- **You can use custom CSS variables in your styles.** Flexygo supports custom CSS variables when applying styles. In addition, style loading does not fail if a LESS variable is missing from the CSS variables.

### Integrations

- **Connect AI assistants to query data and, if you authorize them, modify records and run processes.** The administrator enables MCP in Administración > Seguridad > WebAPI and assigns the permission to users or roles. When connecting Claude or ChatGPT from the profile menu, each user authorizes access and decides whether it will be read-only or also allow data changes. Assistants respect the user's permissions, can be viewed or disconnected from «Asistentes conectados», and the tools indicate whether they query, modify or allow retries. The MCP endpoint registers assistants from their metadata to avoid duplicates, includes the issuer in the login response and keeps dynamic client registration available. In addition, processes that take more than ten minutes no longer fail, and the application remains compatible with MCP.

    ![Connect AI assistants to query data and, if you authorize them, modify records and run processes.](../../docs_assets/images/Versions/Version10_0/mcp-assistant-panel.png)

### Updater

- **Manage updates, rollbacks and versions from an assistant that guides you through the process and shows its progress.** The assistant lets you review the requirements before continuing and check the version changes. It also shows the result of each operation and lets you return to previous steps.

    ![Manage updates, rollbacks and versions from an assistant that guides you through the process and shows its progress.](../../docs_assets/images/Versions/Version10_0/updater-wizard.png)
- **Check ongoing operations and follow those started by other administrators.** You can see who is running each operation and follow it in read-only mode if you did not start it. The Updater prevents incompatible operations from running simultaneously and lets you resume interrupted preparations from another tab, retaining the tracking information and completed steps.
- **Check the operation history from the version information.** You can open the result and log of a previous operation. Deleting the history does not affect operations that are still in progress.
- **Read the full version notes and see what changes you will receive when you update.** The history includes beta versions, shows changes from previous versions and lets you review the differences between the installed version and the latest one. It also includes published Backend notes and excludes unpublished versions.
- **View and manage available, installed and downloaded versions from the versions page.** The page shows the status of each version and keeps the information up to date when you change its status or delete a version. You can also apply the latest available version and delete downloaded versions from the Updater.
- **You can roll back an update if the process does not finish correctly.** This option lets you return to the previous state if problems occur during the update. You can restore the previous version from the Updater process.
- **View logs in real time and filter their contents from the assistant's advanced mode.** You can search the logs and filter them by level and context, as well as switch between the summary and the log in the results. Reading or clearing the log during an operation does not interrupt incoming messages, and on small screens the views appear in tabs.
- **View the result of each update or deletion, with details of any errors.** The screen shows what happened and which version is in use, and lets you copy the technical error details along with its code. Closing the result refreshes the versions list.
- **Resolve configuration conflicts during an update and choose the initial value for each conflict.** The assistant lets you review pending differences and start with a blank value, the previous value, a custom value or the new version's value. You can also resume an interrupted update from where it stopped and expand the window to full screen.
- **The Updater recognizes preview versions and lets you configure whether it searches for them.** Compatibility includes correctly searching for and comparing beta packages based on the installed version. You can control the use of preview versions in the settings.
- **The 2026 skin shows the installed version and can notify you about changes.** The version appears in the sidebar footer, and the notification is shown once for each major and minor version. You can view the update details from the notification; administrators also receive updates for each minor version.
- **Update the Flexygo database in Docker environments and use connection credentials.** The process also lets you update the database from installations that require credentials. Error messages and the handling of session or network issues during the update have been improved.
- **Install and update the database from the configurator.** The configurator includes these tasks so you can perform them from the configuration tool. This makes it easier to manage the database during installation and updates.
- **Update Flexygo in a Docker installation from the maintenance page.** The process provides information about the update and lets you manage installation maintenance.
- **The Updater checks local repositories and supports download paths in Linux.** When the process finishes, it returns to the application. Some informational messages in the update flow have also been reviewed.
- **You can roll back an update if the process does not finish correctly.** The option is available during the update process. Use it to restore the previous state if problems occur.

### Deployment

- **Export the installed application as a product project and configure its contents, template and options from the administration area.** The assistant generates a ZIP ready to open and build in Visual Studio, shows progress and logs exports and errors. You can choose custom folders and files and modify the template; by default, it uses the installed product's template and excludes document and image repositories and other large files. It supports projects larger than 2 GB and checks that enough space is available; it does not include users and keeps secrets in a local file that is not shared. It is available to authorized administrators and shows the selected template and version; if the active source is reserved, it warns you and suggests the first available destination.

    ![Export the installed application as a product project and configure its contents, template and options from the administration area.](../../docs_assets/images/Versions/Version10_0/export-as-project.png)
- **File operations work between servers in installations with separate frontend and backend servers.** The application can transfer files during upload, download and deletion operations. This support also covers access through impersonation.
- **You can integrate RDS into Docker deployments and apply configuration changes during updates.** RDS integration expands deployment options. The update flow lets you apply configuration changes.
- **Publish data databases from the configurator, including empty ones or those without a definition file.** An error when updating databases in Docker environments has also been fixed.
- **Deploy the Flexygo database with Docker.** The required Docker files for deploying the database with this technology are included.
- **Generate Flexygo images with Docker and configure its components to start together.** Docker files and a configuration for starting the different parts of the application together are included. This lets you prepare a Flexygo deployment with Docker.

### Development Tools

- **Explore thousands of icons, add your own SVGs and generate fonts for the project's icon libraries.** From Help > Icon List, you can search more than 5,000 icons, filter them by library and category, and preview them. Administrators can add SVG icons and generate fonts for libraries that support glyphs. If none are compatible, an explanation is shown as to why the option is unavailable, and you can download a ZIP as an alternative.

    ![Explore thousands of icons, add your own SVGs and generate fonts for the project's icon libraries.](../../docs_assets/images/Versions/Version10_0/icon-browser.png)
- **Create external objects connected to REST services and use them in more Flexygo features.** The assistant can analyze the service and suggest object properties. External objects can be used in lists, forms, calendars, Kanban boards and HTML reports; lists support pagination, and forms show the source of selection fields. The key generated when inserting records is also captured, and assistants can query totals and measures; the MCP server can show this data in dashboards. Project exports retain settings modified in the installation, except those specific to the environment.
- **Add sliders that show the selected value in your applications.** The value is confirmed when you release the control, and you can also respond while it is being dragged. The control is available among the shared elements.
- **Create tabbed interfaces using the shared tab controls.** Each tab and its content are linked by a value. This lets you manage which section is active.
- **Create, name and configure tabs from the designer's tab strip.** The strip appears even if the object does not yet have tabs and lets you add the first one. From each tab, you can change its name, choose an icon or delete it; the first tab groups the object's initial content.
- **Configure documents and images and open lists or forms from the object's configuration area.** The files section lets you switch between documents and images and loads the corresponding settings. From there, you can also access the object's security, its list or a new form; access to the list appears if the object has an associated collection.
- **Configure properties from a larger quick settings panel in the Object Bank.** When you edit a property, the panel opens next to the Object Bank and you can close it without expanding the navigation again. Fields have more space, and scrolling stays within the panel.
- **Choose and change the source from the 2026 skin dialog, including Addon.** The active source is highlighted and the options are displayed without overflowing; Addon is shown separately. The label updates when you change the source without reloading the screen, and you can close the dialog without changing the selection, including by pressing Esc.
- **Subscribe from external code to DataManager SQL information messages.** This option lets external code that uses DataManager receive these messages.
- **Make GET requests with flexygo.ajax.get.** This lets you access operations that require this type of request. The version check in the footer also works again.
- **Define links to records in SQL list templates.** The template can create links even when rows contain different object types. You can also disable automatic link detection in the 2026 skin without losing column sorting or resizing.
- **The getView operation in the WebAPI applies the correct default values.** When you query a view using this operation, the correct default values are applied.
- **Default values are applied to friendly URLs.** These addresses now have default values when they are resolved.
- **Create guided tours by highlighting the elements on each screen and customize their welcome.** The editor groups steps by screen, lets you reorder them, and shows the selected element for each step before saving. The welcome card can include an image or the Flexygo brand, with a typing animation for the latter.
- **The 2026 skin adds tabs to processes and reports, object wizards, and document and image managers.** Image managers can display content as a gallery or a list. Tabs extend the organization of properties beyond object editing.
- **In development mode, a module's menu provides access to its object settings.** The options are grouped at the end of the menu and are not shown in the classic skin.
- **Organize a page's modules directly from the page itself.** You can move modules between areas, choose a different layout, and create modules from the organizer. Before saving, a warning appears if any positions remain unassigned or if the page is based on a distribution and an update will revert the changes.
- **Integrate Flexygo with other systems using webhooks.** Developers can use this feature to connect their applications to other systems.
- **Change package optimization from the development menu.** This option lets you switch this setting without leaving the menu.

### Installation

- **Configure Flexygo with a guided wizard from the login screen, with process tracking and the option to resume it.** The wizard replaces the old installation screen and lets you configure the backend, databases, project, administrator password and, when applicable, email. It checks the values and generates the required steps for each active pending connection; it also supports different schema sources, such as a dacpac file or a NuGet feed. It shows the progress of publishing and database creation, and asks for the project name if it is missing from an existing database. If you leave or an error occurs, you can return to the first pending step and retry without losing the context; credential errors identify the affected fields. If email is already configured, the wizard skips that step, and when it finishes, it reloads the login screen.

    ![Configure Flexygo with a guided wizard from the login screen, with process tracking and the option to resume it.](../../docs_assets/images/Versions/Version10_0/setup-wizard.png)
- **You can configure an unattended installation that completes automatically when the backend starts.** You can create, update or reuse databases and define the project name and administrator password. If a step fails, the installation reports it as a failed startup.
- **Install a database and check deployment progress from the configurator.** The configurator displays the connection when the database is already configured and reports the deployment stages. Database installation from this screen is also available in development environments.
- **Flexygo initial configuration includes a revamped flow for setting up and registering the application.** The process brings together project, database and email configuration, and includes user registration. It also includes empty states and titles on the screen, along with the visual adjustments planned for this flow.
- **You can install and update Flexygo from the initial configuration screens and the configurator.** The new process downloads and installs the application packages and deploys the new version. It can also update the database and accounts for operations that may be affected by locked files or resources.

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

### Interface

- **In the 2026 skin, edit values directly in lists and add rows from the list or form.** Each row is saved when you leave it and retains the record's actions menu. The experience adapts to phones and tablets and is available in light and dark modes; the flexy2022 skin is unchanged. Combos and lists adjust to the available space.
- **From the 2026 control panel, you can view and edit each profile's home page.** Each profile has a schematic preview based on its configuration. This preview does not run the page or save changes.
- **The 2026 skin adds new administration screens and quick access options for navigating them.** It includes administration for users, roles, properties, processes, settings, and other elements, as well as a collapsible sidebar and a resizable panel. The quick access menu lets you return to the control panel or dashboard from any page, even if the project menu does not include that group.
- **Administrators can offer guided product tours to authorized users.** Tours are configured with steps and added to a page as modules; their security settings determine who can view and restart them. Updated tours display the available steps and text in the selected language, help locate elements, and can continue if a screen or step is unavailable. When changing pages, they do not leave layers blocking the screen; invitations wait if there are other notices and let users respond and retain their choice.
- **The administrator and guest profiles now have avatars, and the profile photo appears in the footer and header.** The profile image is shared across both skins, including the classic skin, and is updated in the interface when changed from the menu or user form. The legibility of avatar initials and popup content is also improved.
- **The new skin brings the theme, profile, and sign-out options together in a menu accessible from the footer.** The menu displays the connected user's details and lets them switch between light and dark themes, as well as edit their language, password, and profile photo. It also provides administrators with access to “My Profile” and displays the flag for the selected language; the options work correctly and sign-out is available.
- **Administrators can convert pages to free layout and rearrange their modules in a grid.** The conversion preserves the existing layout and lets you save or discard changes. In design mode, modules can be dragged and resized; titles and controls remain visible, and the page retains its layout when saved. On narrow screens, modules move into a single column and retain their established order.
- **Developers can open the global search configuration from the palette.** The option appears at the bottom of the palette and lets you return to the generic filters manager to configure the search. It is only available in development mode.
- **When organizing a page, you can drag modules without headers and access settings from the organization bar.** Modules without headers display a drag handle while this mode is active. Settings open in a side panel and keep the content visible; if you reload the page without changing it, the organization is rebuilt. When changing pages, the mode closes and a warning appears if there are unsaved changes. The dashboard and translated menus are also adjusted.
- **You can display search results over the page without replacing its content.** Palette mode is optional and groups results by criterion, showing their title, description and destination. Search responds faster and avoids sending the browser data it does not need to display.
- **Indicator cards display information more effectively and adapt to their position in lists or rows.** You can add optional descriptions, variations, and trends to provide context for the main value. In a list, the card avoids duplicating its frame; in a row, all cards have the same width and height to make comparisons easier. Values and footers are aligned even when some cards include additional information.
- **The Flexygo Core interface adopts a more modern design.** The update refreshes the navigation, user menu and color palette, and includes the missing translations. The adjustments complete the implementation of the new visual style across different skins.
- **You can access Flexygo pages using friendly URLs.** This way of resolving addresses is available in the Flexygo core and lets you use addresses that are easier to read.

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

- **Configure rules to automate actions and manage decisions and webhooks from different parts of the application.** From the object configuration, you can create rules with actions such as sending emails, displaying alerts, logging information or starting processes, and test them with a real record. Decisions can be started when saving, have deadlines and be escalated; you can review them from the inbox, notifications, chat or record page, and resolve them through the WebAPI as well. Each person can view their own decisions and those of their roles, while administrators can view them all; decisions must be assigned to a person or a role, take effect after one minute and can be undone. Webhooks can be sent when records are saved or deleted, with retries and a test option; existing decision rules and webhooks are migrated to the new system during an update. In addition, the MCP dashboard displays amounts with their currency and its own palette, and adapts to the available width.
- **The scheduler, agenda views and kanban boards display new records without switching screens.** Cards appear in the corresponding cell, day or column, with a notification in the module bar when applicable. Filters and permissions are applied before the records are displayed. New cards are temporarily highlighted and, if they are outside the visible area, an indicator lets you scroll to them. When saving, only the changes are updated and the rest of the view is preserved, including its position, selection and scroll; when applicable, the usual full refresh is applied. The calendar updates the visible period and objects without going blank, and this improvement is available in the 2026 skin.
- **Administrators can start creating a guided tour from its record.** Creation opens the first step's page and displays the configuration panel; if there are no steps, this is indicated. Invitations appear on the page where the tour starts, and users' responses are retained.
- **Integrated processes and active modules are available in the application context.** This information can be accessed from the context to work with processes and modules. Errors when searching for paths to processes that do not exist are also avoided, and the displayed colors are adjusted.

### Reports

- **Manage themes for charts and customize their colors, labels, and other visual elements.** You can choose available themes, such as a monochromatic palette or a shadcn-inspired theme, and adjust options such as spacing and series shape. Charts adapt their colors to the skin and light and dark modes, and reflect theme changes without reloading the page. Appropriate colors are also retained when combining themes or sharing pages, and you can apply optional themes to ECharts charts and view the theme of embedded charts.
- **Generate Crystal reports from Flexygo projects.** You can add reports created with Crystal Reports to your projects. Compatibility and location issues are fixed so they work in different environments, as are issues with loading editor definitions.
- **You can get PDF reports in base64 format, from both Crystal Reports and DevExpress.** This format makes it easier to use the generated PDF from other application functions. Parameter loading when opening reports is also fixed, including reports opened from a link.
- **Design and customize reports with the Flexygo designer and export them to PDF without the issues that have been fixed.** You can adapt the presentation and settings of the DevExpress designer. Export, translation, and parameter-reading issues are fixed, and reading parameters no longer depends on matching uppercase and lowercase letters.

### Scheduled Tasks

- **You can disable scheduled tasks and scripts from the application settings.** When you enable this option, the process stops starting those jobs. It is also respected when inserting or editing a task, to prevent disabled jobs from running.
- **Run scripts as scheduled tasks.** You can configure scripts associated with scheduled tasks and jobs. This way, the configured scripts run as part of the application's task schedule.

### Security

- **You can control who runs each process, even if it is not linked to an object, and add optional SQL conditions.** Permissions can be configured for users, roles, and capabilities from their security screens or from the process record. The condition is checked when validating the permission and only allows the process to run if it returns 1 or true; if it is not met, the process is hidden from menus and toolbars. From security, you can check which processes can be run and what condition limits their use.
- **View and manage permissions for users, roles, capabilities, objects, modules, properties, and processes from the security screens.** The manager lets you review permissions by action and add conditions, block rules, or delete them. You can open it from the relevant screens with the item selected, and preview changes before applying them. The catalog includes pages, templates, and reports, and the screen is translated into the seven available languages.
- **You can configure object security conditions by choosing a property, an operator, and a value.** The wizard offers the object's properties and lets you select context values, so you do not have to remember table names or special tags. Before saving, you can test the condition and view the SQL that was run.
- **The 2026 skin includes a screen for viewing and managing permissions for users, roles, and capabilities.** The screen shows the applied rules and the default policy, and explains which rule and condition determine access. It lets you create, modify, and delete rules, compare permissions between objects, and view field and navigation item permissions. It also shows when a module condition determines access; the previous screen is still available in flexy2022.

### WebAPI Security

- **The WebAPI and MCP limit responses by default to the properties defined for each object.** This adjustment includes defined properties and keys, in both responses and schemas. This omits columns that are not part of the object definition or are not available in all installations.
- **Flexygo includes an MCP server for assistants and applies token permissions in the WebAPI.** The MCP server is disabled by default and has its own permissions by user and role, as well as administration screens. The WebAPI explains why it rejects disallowed operations and does not include them in OpenAPI.
- **The navigation bar adds search, and the WebAPI supports bulk operations and relationship queries.** Search helps you find content from navigation. Developers can perform bulk operations and query relationships through the WebAPI.
- **Developers can view backend API and WebAPI definitions in Scalar.** Scalar provides a reference for Flexygo APIs for those developing on the platform.
- **You can expose application entities through the WebAPI.** The WebAPI includes token authentication and options for defining and querying entities. The allowed origins configuration supports wildcards to connect other applications to Flexygo.

## Improvements

### Deployment

- **Flexygo runs on .NET 9 and lets you deploy the interface, backend and database separately.** You can install the application on IIS, as a standalone service or in Docker, on Windows or Linux. The interface, backend and database can run on the same server or on separate servers; the version assistant also lets you roll back updates.

    ![Flexygo runs on .NET 9 and lets you deploy the interface, backend and database separately.](../../docs_assets/images/Versions/Version10_0/net9-architecture.png)
- **Product translations are retained when publishing configuration data.** The process can include translations associated with product items and exclude those belonging to test modules.
- **Docker installations get connection strings from the application configuration.** This lets you configure connections using the settings available in the deployment environment.
- **Deployment scripts are compatible with Linux.** This makes it easier to deploy Flexygo in Linux environments.
- **Control which JavaScript and CSS files are bundled and improve optimization reliability in IIS.** Bundling lets you choose which files to include, correctly loads custom styles and separates custom plugins from system plugins. It also prevents PDF plugin errors during optimization and improves compatibility with installations hosted inside an IIS application.

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

- **Configure more options in shared controls.** You can add a button to clear the selection, choose when a dialog fills the screen and control the text field's focus. Option cards also support an accent color.
- **The view design section in the Object Bank now has a clearer name.** The change avoids confusion with record design and is available in all seven included languages.
- **The placement panel lets you group modules, view their details and find those already on the page.** You can collapse groups by type and keep the ones you are using open; when you search, groups with results expand. Cards show information and the pages where each module appears, and modules already placed remain visible as you scroll through the page. The area for moving modules without a header is highlighted only when you hover over it, and the resize controls and module menu remain accessible.
- **The tour editor and page configurator display translated text.** Text in both tools is available in seven languages, and if a translation is missing, the original English text is shown. In the tour editor, Flexygo's own anchor names are also translated; content written by the person configuring the tour is retained.
- **Object settings display translated text in all seven available languages.** The translation includes section titles and descriptions.
- **The view manager displays correctly and is easier to read in the 2026 skin.** Field layouts, text colors and hover states have been fixed. These improvements also apply when the manager is opened as a template.
- **View errors in a filterable, paginated list with expandable details.** You can combine filters to narrow down the results and view the options available for each criterion. Accessing the list from the home dashboard opens it with errors from the last 24 hours.
- **The addons marketplace displays its options in rows and handles results more effectively.** The new layout makes the most of the available space whether there are few addons or many, and keeps information and actions visible. The controls on installed cards and the loading state when a query fails are also fixed.
- **In the 2026 skin, development tools are available in their respective areas, and previews have their own card.** Object, page, and catalog settings are accessed from their specific locations instead of being duplicated in the side panel. The preview rotation control sets the orientation for the next time it is opened.
- **The button for creating objects is easier to distinguish and lets you start creating from the catalog.** The plus symbol has more contrast when you hover over it and has its own background to distinguish it from the catalog access. Clicking it opens the wizard without activating the catalog that contains it.
- **Mobile and tablet previews let you choose the device and change the orientation.** You can change devices without losing the current orientation. Rotation affects the open preview and does nothing if none is open.
- **Turn Minify JS/CSS on or off from a control panel card.** The card is integrated with the other dashboard options and lets you change the setting from anywhere on its surface.
- **Access to development mode only appears for users with a designer role.** This way, users without that role do not see an option they cannot use.
- **Process communication with the proxy supports different response types.** This makes it possible to handle the responses required for ABH Sign document operations.
- **Developers can debug the application's code using source maps.** This improvement makes it easier to locate the source of a problem during debugging and is intended for those who develop on Flexygo.
- **Users with development permissions enter with development mode enabled and can turn it off from the menu.** The mode retains the selected state when you enter again. Turning it off does not cause errors if there is no side panel to close, and the source selection displays Addon separately.

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
- **Row actions appear at the end of the list, in a column sized to fit its buttons and aligned with the data.** This way, data is read before the actions, and the available width is used more effectively. The position of the actions adapts to each skin and also applies to rows for adding data.
- **The wizard and updater windows have a consistent presentation in their headers and result screens.** The headers bring together the icon, title, subtitle, and available actions, and the installation and update dialogs have a consistent size. Errors and results also share a style; the action for retrying an error is marked as destructive.
- **The 2026 skin refreshes email, notifications, and AI chat to make them easier to use.** In email, you can view folders next to the list, filter by read messages or search by subject, and open each message in a side panel. Notifications include filters and an option to mark them all as read; AI chat appears in a compact panel. The flexy2022 skin retains its current appearance.
- **New Flexygo installations start with the 2026 skin, and new users inherit the profile of the person who creates them.** Existing installations retain their profile, and products are unaffected. The 2026 administration profile is only offered to users with the administrators role.
- **Copy the technical details of an error without displaying additional notices.** The button visually confirms the copy by changing its icon. It is also available as a shared element for developers.
- **Loading screens use a new animation.** The animation displays the logo or the default indicator depending on the loading context.
- **Calendars add an annual view, filters, and range selection, with a clearer presentation.** They include a legend and options for configuring overlap and working hours. In the annual view, you can view the records for each day, and changes made by other people are reflected in the monthly view. Marker colors remain legible in different modes; the timeline and annual calendar highlight the selection, current day, and activity more clearly.
- **The flexy2022 calendars return to an appearance similar to the previous one.** The monthly and annual views, the position of pop-up notices and the alignment of the planning view are adjusted. The change only affects the flexy2022 skin.
- **Module administration options open in more convenient side panels.** The configuration, security, events, and page relationship panels keep some of the content visible while you use them. The header separates the controls from the content, and administration options are grouped in a menu; the gear opens the module settings.
- **Drop-down menus are displayed without being clipped by their containing area.** Their position is adjusted relative to the control that opens them, even inside scrollable areas.
- **The offline application screen and its emulator display correctly on different devices.** The emulator lets you choose an iPhone 17 or a Samsung Galaxy S25, keeps the device visible while the rest of the screen scrolls, and rearranges sections in narrow windows. Application views are also fixed, and descriptions for its modules and pages are translated into the included languages.
- **Views in the 2026 skin display their fields and labels more clearly.** Labels and long values stay on one line and are truncated when they do not fit. Row spacing and header presentation are also improved.
- **The security screen has a clearer, more spacious layout in the 2026 skin.** Titles, labels, controls, and the save button are easier to distinguish within the module.
- **New card markers are easier to distinguish in the 2026 skin.** The adjustment improves visibility both on dashboard cards and in the column indicator.
- **Links and clickable labels are easier to distinguish in the 2026 skin, in both light and dark modes.** Actual links are underlined and have their own color. Labels that act as controls use the text color and are underlined on hover.
- **Navigation panel branches show whether they are open or closed and can be expanded without closing the panel.** The indicator reflects the state of branches that contain options, and icons remain in the expected order. Expanding a group closes any open options menu; final options continue to navigate to their destination and close the panel.
- **Notifications and guidance in the page configurator are easier to read in the 2026 skin.** The contrast is increased for the notification about the page source and the guidance that appears when you hover over a module.
- **Menus, wizards, lists, and interface messages are translated when a translation is available.** Texts that appeared as internal keys or in English are fixed, and existing translations are applied to element names, headings, and recent change types. Startup messages, chart themes, the search box, and the 2026 skin's menus, wizards, and templates are also translated; names assigned by each customer are retained.
- **Navigation in the 2026 skin retains the menu footer when refreshed.** This way, footer options do not disappear when the menu is refreshed.
- **The new skin improves the appearance and use of windows, lists, combos, and wizards.** Button tooltips are visible again, and lists and tabs are better organized. The template wizard is also restored, creating offline objects is easier, and the display of combos and property settings is improved.
- **Pages in the 2026 skin balance the space between content and the edges of the window more effectively.** Space is added below the last module, empty space above pages is reduced, and the space occupied by the sidebar is taken into account. The brand is also visually distinguished from the side access options.
- **The agenda distinguishes events more clearly and shows the month alongside events for the selected day.** Cards retain their category with a side marker that is visible in light and dark modes. Days, events, and the current date are also easier to distinguish; the panel lets you view all events for the day, and the month selector adapts to the language and color mode.
- **Related items are displayed as compact tags that are easier to browse.** Links to objects, processes, and reports take up less space and are easier to distinguish when you hover over them. Titles that do not perform an action are also no longer highlighted as interactive.
- **The new skin groups module actions next to the title and reduces the size of the maximize and minimize buttons.** The main action is close at hand, and less frequent options are grouped in a three-dot menu, so the bar takes up less space in narrow modules. The refresh and collapse buttons remain; the classic skin retains its current buttons.
- **Text and labels in the 2026 skin are easier to read in light and dark modes.** The contrast of semantic, secondary, and highlighted text and cards is adjusted without changing the background, button, or chart colors that use these tones. Labels retain a minimum contrast in both modes.
- **Palette search indicates that it is working and distinguishes empty results from errors.** While results are loading, the screen keeps its space and shows a waiting indicator. If there are no matches or the search fails, each situation is reported separately.
- **Modules fit better in narrow columns in the new skin.** The toolbar can wrap onto several lines instead of widening the module and causing horizontal scrolling on the page. At greater widths, the layout does not change.
- **The parameter view integrates better with the 2026 skin.** The new presentation applies only to this view and does not change how it appears in the Flexygo 2022 skin.
- **The 2026 interface improves lists, mobile use, and several work tools.** List groupings and headers remain visible, and editing lists is faster. On mobile devices, side navigation adapts to a sheet, and rows and controls are easier to use by touch. Calendars, charts, and offline synchronization are also improved.
- **The new skin displays a progress bar while pages load instead of a spinning indicator.** This lets you follow the progress of navigation visually while you wait for the content to appear.
- **The Kanban board displays clearer, more legible columns and cards, including in dark mode and when moving or archiving cards.** Cards stand out better against the background, and the drop zones cover the entire column, even when it is empty. When you drag a card to the archive area, it remains within its strip, making the destination easier to identify.
- **The planner has a more organized and readable toolbar and side panel.** Buttons make the active option easier to identify, and red is reserved for dangerous actions. Labels and types align with the grid and take up only the space they need. The panel also collapses without visual delay.
- **Module tabs are easier to distinguish and can be scrolled when they do not fit on screen.** Active tabs are easier to recognize, and longer ones can be scrolled through without extending beyond the module. The module selector also adopts the style of the other controls.
- **Maps, network charts, and the agenda display correctly in dark mode.** Their display areas match the application's dark appearance and no longer rely on a light background.
- **In the new skin, controls and navigation elements integrate better with dark mode.** Light backgrounds that made some elements difficult to read have been corrected. The light skin is unchanged.
- **Submenus are nested, and the last table column makes use of the available space.** When you resize a table, the last column adjusts to avoid gaps. Context menus retain the hierarchy of their options.
- **Popups for filters, processes, and notifications have a more consistent appearance.** They share the same shadow and border style, making the different menus look integrated.
- **Version changes update affected web files, and sign-in handles Backend interruptions more effectively.** Files that have not changed can be retained in the browser. Sign-in labels are also translated for SSO.
- **Application errors are displayed more consistently and with clearer messages.** The display is standardized across different application operations, making the messages easier to understand.

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
- **When reviewing errors, you can also view chained exceptions from processes.** The error trace displays information about exceptions that occur within chained processes.
- **Process and report parameters are retained when saving their configuration.** This keeps the values associated with processes and reports when saving changes.

### Scheduled Tasks

- **Planner icons retain legible contrast in light and dark modes.** Configuration and refresh icons change color according to the display mode. This makes them easier to distinguish against both backgrounds.

### Security

- **The application configuration encrypts passwords and sensitive keys on disk.** The protected data includes connection strings, email and NuGet passwords, and JWT and Data Protection keys. The executable lets you manage the encryption key and transfer it to another server without needing the SDK.
- **The licenses API separates status queries from status updates and sends the activation code in the request.** This change affects integrations that query or update the license status, as well as those that send an activation code. Review these integrations to adapt them to the new separation of operations.
- **Changes to roles and permissions take effect without requiring the user to log in again.** The update includes permissions associated with roles and those for objects, pages, and reports. Changes made are reflected in the user's subsequent requests.
- **New objects display their name in the singular, and a view for consulting page capabilities is added.** The view lets you consult page capabilities through the security layer. When creating an object, the collection's plural title is no longer used as its name.
- **The password-change page displays form errors and validation messages.** This helps you identify problems when entering or updating the password and correct them before continuing.

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

- **The versions page has a redesigned, organized and translated interface.** The information is organized by status and version number, making it easier to find application versions. An issue that could occur when loading this information has also been fixed.
- **The progress screen organizes steps in a vertical or horizontal guide and makes it easier to follow the active stage.** The basic and advanced views adapt the information to the selected format, and switching between them is animated. If a stage fails, you can view its details from the basic view.
- **Progress retains completed steps and does not revert to previous states.** If an operation fails, completed steps are distinguished from the step that failed. Step statuses are also maintained correctly during a rollback.
- **Transition screens keep the status visible while the version changes.** The animation remains active during the process, and the assistant waits for the application to become available again before reloading if an interruption is expected. This prevents the result from appearing before the change is complete.
- **The assistant displays a specific screen before deleting a version.** The screen shows the operation with its own step and animation. If you close the assistant before starting the deletion, it does not begin.
- **The Updater identifies who is locking the application, including network locks.** When identifiable, the user and computer associated with the lock are shown. This check is added to the process before continuing with the update.
- **You can continue if the requirements show warnings that do not block the update.** Errors still prevent you from proceeding. A warning is also shown if the Updater log table exceeds the configured limit.
- **Updater logs are stored separately for each project.** Each project has its own log folder. This makes it easier to find the logs for a specific installation.
- **Configuration and maintenance show update progress and errors.** You can follow tasks while they run in the background and view details if an error occurs. You can also validate ERP databases from these options.
- **The Updater retries file operations if temporary failures occur.** Retries help complete the update when the file handling issue is temporary. If the database deployment fails, a report is generated to help investigate the problem.

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

- **Local publishing copies the shared keys required for login to the frontend.** If the backend has not generated these keys yet, publishing warns that they are not available. This prevents a newly published installation from getting stuck between the home page and login.
- **Database deployment avoids an error related to changes to icons.** Changes to the icon tables are prepared during deployment.

### Development Tools

- **Project export excludes users and secrets, and generates scripts that support data of any type and size.** Secrets are saved in a local file ignored by Git and are only applied when publishing in Debug. This means publishing does not overwrite the secrets configured in each installation.
- **You can move modules again after cancelling a drag with Escape.** This fixes the movement issue that could occur when cancelling the operation with that key.
- **Changes to properties are saved correctly and the appropriate manager opens.** Moving properties between tabs and reordering them also works in processes and reports. When editing the settings for a process, report or object, an empty or untitled manager no longer opens.
- **Custom LESS variables and the path for exported files with database changes are fixed.** Custom styles are processed correctly. In addition, exporting database changes uses the corrected path.
- **Analysis, loading, and TypeScript definition errors in the Monaco editor are fixed.** These fixes prevent failures when processing content, loading the editor, and loading TypeScript definitions.
- **Change the order of nodes without errors when loading their properties.** The behavior when editing nodes and loading their properties is fixed.
- **Toolbar cloning is fixed.** Cloning a toolbar now correctly preserves its data.

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

- **Addon installation correctly recognizes beta versions.** The interpretation of the «-beta» suffix in the addon version is corrected.

### Interface

- **Several details are fixed for versions, AI generation, and the display of images and text in views.** If you have already dismissed a version's notes, clicking it again opens its page. “Generate with AI” updates the design in the 2026 designer, and views correctly display photos with relative paths; the translation of “View Name” is also fixed.
- **Users who are not designers can now open the modules menu in the 2026 skin.** Access to the menu no longer depends on having the designer profile.
- **The display of the kanban and HTML editor, the menu logo and other interface details are fixed.** The response of annual calendar days and information cells when you interact with them is also adjusted. In addition, the options for disabling scheduled tasks and script tasks work again.
- **EasyInfo and charts load correctly for users who are not designers.** These modules no longer fail when the user does not have access to debugging tools. This lets users use EasyInfo and view charts without being designers.
- **Layout issues in forms, the control panel, the annual calendar, and 2022 skin icons are fixed.** Form fields are laid out correctly again, and the control panel retains its modules. The annual calendar adapts to the available width and lets you open days with a tap; the display of some icons is also fixed.
- **Logos can change based on the light or dark theme and display correctly even when their paths contain backslashes.** In dark mode, Flexygo finds the dark logo variant and keeps the configured logo if no variant exists. The theme change is applied when the page is updated and does not require reloading to change the logo.
- **An unformatted counter is no longer shown on settings group cards in the 2022 skin.** The counter remains visible as a badge in the 2026 skin. It is hidden in the 2022 skin, where it does not have a suitable design.
- **Information cards once again fill the width of their space and display their data with more contrast in the 2022 skin.** Icons return to their position at the edge of each card, and important data is easier to read. Standalone information cards retain their usual size.
- **The error log translation when the list is empty and sorting from the options menu are fixed.** The error list displays its text and filters translated even when there are no records yet. The intermittent error when sorting from the options menu is also fixed.
- **Object menus no longer repeat processes and actions that already appear in the bar.** The option explicitly configured in the bar is kept, including actions that open a new window. The menu also opens again in the correct position without disappearing.
- **Template cards in the classic skin are legible in dark mode.** The text color adapts to the dark background without changing the appearance in light mode.
- **Copying exceptions to the clipboard works with special characters.** Certain characters in the text no longer interrupt the action, so you can copy the entire message correctly.
- **Duplicate keys that could interfere with application translations have been fixed.** The affected strings are translated correctly even when they share a primary key or are loaded from the application data.
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

- **The ERP process that runs after login also runs for guest users.** This means guest logins follow the same flow as other users after logging in.
- **Document downloads from integrated processes correctly handle decoding and references.** The fix applies to the handling of documents downloaded from an integrated process.
- **ABH Sign correctly interprets information about signing credits.** This prevents errors when processing credits received from the signing service.
- **The Excel import template downloads and the import process works correctly.** You can download the template from the process icon and upload data from Excel without the issues fixed in this version.
- **Jobs in an error state can be restarted to run again.** This lets you restart jobs that did not finish successfully.
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

- **Records, views, and templates respect the user's role permissions and list filters.** If the role cannot access the list, no results are returned; access to records queried without a view is also denied. The filters sent cannot expand the permitted data and are rejected if they contain certain invalid formats. Administrators and views configured as «No filter» retain their behavior.
- **Authenticated users can no longer obtain the key used to sign tokens.** The key is still generated in the configuration during the first startup. Since it is no longer available through an address accessible to any authenticated user, it cannot be used from there to create custom tokens.
- **External URLs and return destinations are validated to prevent unsafe connections or redirects.** Retrieving metadata for MCP clients is limited to public URLs. Login and password-change return destinations are restricted to application pages; decision calls are limited to public or permitted URLs.
- **You can log in and access downloads and reports using a token included in the URL.** The token is preserved during redirects, even if the link requests a login before opening the content. This keeps the session and access to the destination in place as you continue.

### Skins

- **The email editing footer buttons no longer cover the Save button in the 2026 skin.** Those editing an email can access the Save button without the other footer controls covering it.
- **The path is fixed so that the main logo is displayed.** With this adjustment, the main logo is displayed correctly in the application again.

### Updater

- **The Updater displays an error if it cannot check the latest available version.** This lets you distinguish a failed check from a situation where no newer version is available.

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
