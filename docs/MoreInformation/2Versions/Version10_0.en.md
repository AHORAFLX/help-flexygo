# Version 10.0

Includes assistants for configuring and updating the application, creating applications with AI and querying data, as well as a new responsive skin and deployment and export options.

## New features

### Installation

- **Configure Flexygo from the login screen with a wizard that guides you through setup and lets you resume it.** The wizard brings together the connection, databases, project, email, and publishing, and lets you configure pending data connections for each installation. It checks the values, shows progress, and keeps each step available so you can fix errors or try again; if you leave, you can continue from the first pending step. It is only available while installation is pending and replaces the previous installer.

    ![Configure Flexygo from the login screen with a wizard that guides you through setup and lets you resume it.](../../docs_assets/images/Versions/Version10_0/setup-wizard.png)
- **You can configure an unattended installation to complete automatically when the backend starts.** It lets you create, update, or reuse databases, as well as set the project name and administrator password. If a step fails, the installation reports it with a failed startup.
- **You can install a database and check deployment progress from the configurator.** The configurator shows the connection when the database is already configured and reports the deployment stages. This option also works in development environments.
- **Initial setup introduces a new flow for configuring Flexygo and registering users.** The process includes project, database, and email settings. It also handles states without a title and an empty project name.
- **Install and update Flexygo from the configuration screens, including updates to the application and database.** The new update process is managed from the configurator and downloads and installs the packages needed to deploy the new version. It also accounts for operations affected by locked files or resources.
- **You can install and update Flexygo from the initial configuration screens.** The wizard brings together the application installation and update options. This lets you perform these tasks from within the application itself.

### Skins

- **The Flexygo 2026 skin refreshes the design of the entire application and adds a responsive sidebar.** The redesign covers screens, menus, lists, forms, panels and dialogs, with new typography, colors, spacing and controls. The sidebar groups menus and can be collapsed; it also includes shortcuts to alerts and profile, and the Ctrl+K shortcut. The previous skin remains available.

    ![The Flexygo 2026 skin refreshes the design of the entire application and adds a responsive sidebar.](../../docs_assets/images/Versions/Version10_0/skin-2026.png)
- **The Flexygo 2026 skin adds the Import menu and a connectors section to the control panel.** Import is available to registered users, but not guests. The connectors section includes MailChimp, Ahora ERP and Power BI, among others.
- **Database script publishing preserves the 2026 skin configuration.** The skin's appearance, menus, panels and pages are included. This allows a new installation to start with the complete configuration, even when publishing from an empty database.
- **You can customize account page resources from your product.** You can adapt styles, scripts and icons at different customization levels. This lets you tailor the sign-in, registration and password recovery pages for each product.
- **You can switch between light, dark and system themes.** The interface and some built-in elements adapt their appearance to the selected theme. If you choose the system theme, Flexygo follows the device's appearance preference; the selector also adapts its options to the active theme.
- **You can use custom CSS variables in your styles.** Flexygo supports custom CSS variables when applying styles. This gives you more options for adapting the application's appearance.

### Development Tools

- **Search and copy icons, add your own SVGs and generate fonts for the project's icon libraries.** Under Help > Icon List, you can search among more than 5,000 icons, browse their libraries and categories, and preview them before selecting them. Administrators can add SVGs to the project's libraries and generate a font to include in the exportable project; they can also download a ZIP as an alternative.

    ![Search and copy icons, add your own SVGs and generate fonts for the project's icon libraries.](../../docs_assets/images/Versions/Version10_0/icon-browser.png)
- **Create Flexygo applications through a conversation with an AI assistant connected to the Flexygo MCP.** The assistant gathers requirements, proposes the design and organizes the work before creating the application. You can review and test the result in the browser, while a board displays tasks, decisions, history and quality checks.

    ![Create Flexygo applications through a conversation with an AI assistant connected to the Flexygo MCP.](../../docs_assets/images/Versions/Version10_0/mcp-product-building.png)
- **Edit guided tours and their actions from the creator panel without leaving the tool.** For each step, you can select an existing action, create another one or remove it from the form. The tour form remains available while you open the action dialog, and developers with permissions can access editing from a tour's card.
- **Preview step cards on the page and edit their content from the creator panel.** When you select a step, you can check how its card looks in context and how it changes during editing. The page menus remain available, and the tool indicates if a position cannot display the card.
- **Manage guided tours from a list: view their steps, edit them, create new ones or delete them.** The creator is available under Dashboard > Other Tools. The list shows the name, number of steps and whether each tour is active or disabled.
- **Create guided tours by selecting elements directly on each screen.** The editor groups steps by screen and lets you reorder them. Before saving, it shows which element you selected for each step.
- **External objects let you query and update data through REST and extend their compatibility with Flexygo.** The object wizard can analyze the service and suggest properties. You can use these objects in lists, forms, calendars, Kanban boards and HTML reports; lists also support pagination, forms show the source of selection fields, and inserts retrieve the key generated by the external WebAPI. Queries for totals and measures are also supported, and exports retain settings changed in the installation, except those specific to the environment.
- **Add sliders with a visible value to your applications.** The value is confirmed when you release the control, and you can also respond while it is being dragged. The control is available among the shared elements.
- **Create tabbed interfaces using the new shared tab controls.** Tabs and their content are linked by a value. This lets you manage which section is active.
- **Create, name and manage tabs from the designer's tab strip.** The strip appears even if the object does not yet have tabs and lets you add the first one directly. From each tab, you can change its name or icon, or delete it; the first tab groups the object's initial content.
- **Configure properties from a larger quick settings panel in the Object Bank.** When you edit a property, the panel opens beside the Object Bank, and you can close it without expanding the navigation again. Fields have more space, and scrolling stays within the panel.
- **Open the list or a new form for the object from its configuration space.** The list shortcut appears when the object has an associated collection. This lets you open these views from the configuration space itself.
- **Developers can subscribe to DataManager's SQL informational messages.** This option lets you receive those messages from external code that uses DataManager. It is available to anyone who needs to manage this information from their code.
- **Developers can make GET requests with flexygo.ajax.get.** This function lets you access operations that require this type of request. The version check used by the footer also works again.
- **Define links to records in an SQL list template.** The template can build links even when rows contain different object types. Sorting and column resizing are retained, without relying on skin 2026's automatic link detection.
- **The WebAPI getView operation applies the appropriate default values.** When you query a view using this operation, its default values are applied. This corrects the response so it does not include incorrect default values.
- **Default values are applied to friendly URLs.** These addresses now have default values for resolution. Friendly URLs use these values when they are resolved.
- **The 2026 skin adds tabs to processes and reports, object wizards, and document and image managers.** Image managers can display content as a gallery or a list. Tabs extend the organization of properties beyond object editing.
- **Skin 2026 lets you choose a source or close the dialog without changing it.** The current source is highlighted, and options are distinguished by a color badge. The four sources are displayed in two columns, the addon is excluded from that list, and you can close the dialog using its button or Esc; the active source label updates without reloading the screen.
- **Start creating an object from the shortcut to the object catalog.** The plus button opens the wizard without activating the catalog shortcut that contains it. On hover, the symbol gains contrast and shows its own background to distinguish it from the catalog.
- **In development mode, a module's menu provides shortcuts to its object's settings.** The options are grouped at the end of the menu. They are not shown in the classic skin.
- **Organize a page's modules directly on the page, without going to the module manager.** You can move modules between areas, choose another layout and create modules from the organizer. Before saving, it warns you if a layout change would leave positions unassigned or if the page comes from a distribution and will be reverted by an update.
- **Integrate Flexygo with other systems using webhooks.** Developers can use this feature to connect their applications to other systems. This lets them add webhooks to their integrations.
- **Change package optimization from the development menu.** This option lets you toggle the setting without leaving the menu. You can change it from the development menu itself.

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

### Artificial Intelligence

- **The list of GPT models available for artificial intelligence features has been expanded.** The new models have been added to the artificial intelligence settings. From there, they are available for features that use these models.

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

- **Administrators can view and edit the installation configuration from a dedicated screen, with checks before saving.** The screen brings together options, logging levels, connections, and credentials, and shows how many connections there are and how many checks have failed. The checks flag fields that need attention and let you save directly when there is nothing to review; passwords are masked.
- **Administrators can enable maintenance mode and display a notice while the application is unavailable.** The control is in the administration panel, and a public page is also displayed during maintenance. When the status changes, open pages are refreshed, and when maintenance ends, site visitors can return to their page.
- **Configure offline applications from a screen organized into sections, with a synchronization history and mobile emulator.** The screen brings together objects, menus, pages, code, resources, and synchronization. The option to link an object is no longer available from the offline applications screen, but the options to create and clone objects remain.
- **You can configure the delimiter used when exporting CSV files.** The option lets you adjust the format of exported files to each application's needs. Configure it so the data is separated as needed when you open the file.
- **Refresh the screens of all connected users or select specific sessions.** The action is available in the action menu for version information. You can search for users and select their sessions to send them the update.
- **Administrators can view the configuration and status of processes in read-only screens.** The application configuration and server configuration are shown separately. You can also view the status of processes, the database, and available resources.
- **You can open the page configuration from a button next to the tool for organizing modules.** The option is available in development mode and follows the current page when you navigate to another one, without rebuilding the header.
- **Configure the application with values specific to each environment.** The application can load and save settings specific to each environment, such as development. This keeps those values separate from the general configuration.
- **Publish a database from the configurator.** The configuration tool now includes database publishing. You can perform this task from the configurator itself.

### Document and Image Management

- **File controls allow you to upload files in parts and track upload progress.** Chunked uploads are available in upload controls and in the file field. The progress bar is shown in upload and editing controls.
- **You can manage documents and images from Flexygo, with managers adapted to the 2026 skin.** The managers are available for Flexygo and ERP, and correctly display documents, images, and gallery views in the 2026 skin. Their text is also translated, and changes have been made to Crystal Reports report generation.
- **File uploads can be managed through the application proxy.** The proxy prevents an upload from incorrectly overwriting another file and preserves the user's identity. If both services are on the same server, the application does not use the proxy.

### Email

- **The webmail integration lets you refresh access credentials.** A notification is displayed to manage authentication. The credential refresh process is also fixed.

### Filters

- **The 2026 skin displays filters as editable chips and applies changes automatically.** Each chip shows the filter name and its value; you can edit it or clear filters from the row. Changes are applied when you finish choosing options or leave the row, and text searches are performed when you finish typing. You can also change a checkbox's state by clicking anywhere on its chip; the previous skin keeps its filter behavior.

### Forms

- **View records that other users have just created in the list without reloading the page.** New rows appear when you request to show them, applying your permissions and filters. The notification indicates how many marked rows are still visible, remains even when the list does not show its header, and does not remove the rows if you dismiss it. On pages with multiple lists, each notification corresponds to its own list and does not update lists for other objects.

### Home

- **Lowdy guides users through system tours with clearer instructions and highlighting that follows each element.** Lowdy appears in the invitation, accompanies the cards for each step, and says goodbye when the tour ends. The outline keeps the shape of the highlighted element, even near the edges of the screen. Instructions about the home page, search, notifications, and account are clearer, and two unnecessary steps have been removed; project and addon tours keep their usual appearance.
- **In skin 2026, you can customize the modules on each page and view a redesigned home dashboard.** Each user can reorder, pin, and collapse modules, or restore the layout defined by the administrator. The dashboard brings together cards with information about errors, tasks, users, license, activity, and other application data. The license card now shows the expiry date correctly.

### Interface

- **In the 2026 skin, you can edit values directly in lists and add rows from the list or form.** Each row saves changes when you leave it and keeps its actions menu. The experience adapts to phones and tablets and is available in light and dark modes; the flexy2022 skin is unchanged. Rows display their values and formats correctly, and support resizing columns and horizontal scrolling.
- **From the 2026 dashboard, you can view and edit the home page for each profile.** Each profile has a schematic preview based on its configuration. The preview does not run the page or save changes.
- **The 2026 skin includes administration screens and refreshed navigation.** It includes administration for users, roles, properties, processes, settings, and other elements. Navigation adds quick access, a collapsible sidebar, and a resizable panel.
- **The refreshed calendars include an annual view, filters, range selection, and configuration options.** They include a legend and options for configuring overlapping events and working hours. In the annual view, you can view the records for each day, and changes made by other people appear in the monthly view. Marker colors adapt to the different modes, and the timeline and annual calendar show the selection, current day, and activity more clearly.
- **Administrators can offer guided product tours to authorized users.** The tour is configured with steps and added to a page as a module; its security settings determine who can view and restart it. It can navigate through screens, highlight elements, and perform predefined actions. Steps and their text are displayed in translation, and the tour adapts to the available screens and elements without blocking navigation.
- **The administrator and guest profiles now have avatars, and the photo appears in the header and footer.** The profile image is shared between both skins, including the classic one, and is updated in the interface when changed from the menu or user form. Avatar initials and pop-up notice content are also easier to read.
- **Administrators can rearrange and resize modules directly in a page grid.** Design mode lets you enable free layout while keeping the existing arrangement, move modules, and adjust their size. Changes can be saved or discarded; if you exit without saving, you can restore the previous arrangement. On narrow screens, modules are displayed in one column and keep their reading order.
- **When organizing a page, you can drag modules without headers and access configuration from the organization bar.** Modules without headers display a drag strip while this mode is active. Configuration opens in a side panel so the content you are organizing remains visible. If you reload the page without changing it, the layout is rebuilt; when you switch pages, the mode closes and you are notified if there are unsaved changes.
- **You can display search results over the page without replacing its content.** This palette mode is optional and groups results by criterion, with their title, description, and destination. Search responds faster and does not send the browser data it does not need to display.
- **Indicator cards display values, descriptions, and optional trends in a refreshed design.** You can accompany the main value with a change, trend, or explanatory text; none of this data is required. Cards in the same row have the same width and height so values and footers align, even when they include additional information. When they appear in a list, they avoid duplicating their frame and retain their content and layout.
- **The object search includes pagination at the bottom.** The paginator makes it easier to browse results that span several pages and is displayed alongside them.
- **The Flexygo Core interface adopts a more modern design.** Navigation and the user menu have been refreshed, and the color palette has been updated. Missing translations have also been completed, and the new visual style has been applied to different skins.
- **You can access Flexygo pages using friendly URLs.** This way of accessing pages is available in Flexygo.

### Licenses

- **You can view license information on a dedicated page and see its status in a watermark.** The watermark lets you identify the license status at a glance while using the application. License information is also available on a dedicated page.
- **Flexygo can generate licenses for production applications.** This lets you have a license when running the application in that environment.

### Login

- **You can configure the number of failed attempts that triggers an account lockout and how long it lasts.** Adjust the attempt limit and lockout duration to suit your application's security needs.
- **Recovery links work under base paths, and you receive confirmation when you reset your password.** You are signed in automatically when the reset is complete. Email links and redirects that incorrectly included the base path have also been fixed.
- **You can view news on the sign-in page or disable its display.** The option lets you decide whether news appears on the sign-in screen.
- **You can sign in using Cl@ve or SSO, with improvements to authentication and its error messages.** Cl@ve supports legal entity certificates, and authentication registration, loading, and response handling have been fixed. SSO settings and the sign-in screen, sign-in and password-change errors, and sign-out have also been adjusted; you can also remember your sign-in, and the license for active modules is checked.
- **You can sign in using LDAP.** LDAP authentication is integrated into the sign-in process and can be configured to use your organization's credentials. The flow has also been fixed so that sign-in completes correctly.
- **You can sign in offline using SSO with ABH or LDAP.** This option is available for SSO sign-ins that use those methods.
- **You can customize the sign-in, password recovery, and registration pages.** Customization is also available for the authentication and password management pages of products created with Flexygo.
- **Security conditions and the license are checked before sign-in is allowed.** Validations take into account the IP address, lockouts, and license coverage, including older licenses. Password recovery and the attempt limit from a single IP address have also been adjusted.
- **If a connection error occurs during sign-in, the system retries up to three times.** Retries help complete sign-in when a temporary connection failure occurs.
- **You can manage your account password through a dedicated process.** The account has a dedicated option for managing the password.
- **You can protect sign-in with multifactor authentication.** Sign-in can require an additional verification step. The pages, messages, translations, and emails used in multifactor authentication have been adapted.
- **You can create an account with an updated registration process.** The registration page, its translations, and associated emails have been updated.
- **You can sign in and out, remember your sign-in, and use your email address to sign in.** The sign-in screen has a new design with the familiar Flexygo style. Cookies and the handling of keys that differ in letter case have been adjusted, translations have been added, and you can press Enter to sign in; the system also avoids loading nonexistent resources.
- **The password reset process has a refreshed experience.** The page, messages, and emails related to the reset have been updated.
- **You can sign in and manage access to your account.** The login, registration, and password recovery templates are updated. Language selection is temporarily hidden.

### Notifications

- **Configure real-time alerts for new records and limit them to records each user can view.** Define filters for each object; filters and conditions on lists are also taken into account, as well as each recipient’s permissions. Alerts appear when records are created from another screen and let you open the record or its list. Saving is not blocked while checking who should receive them, even when filters or row-level security apply, and a connection issue that prevented them from being received correctly is fixed.
- **Enable alerts for insertions, modifications, and deletions of the objects you want to track.** Each user receives alerts using their own session and permissions. This ensures the information is tailored to what each person can view.
- **The application includes a push notification service.** The service integrates with the application's offline features.

### Processes

- **Configure rules to automate actions when saving records, and manage decisions and webhooks from different parts of the application.** From the object workbench, you can configure email, notification, record, decision, webhook, or process actions, and test them with a real record. People can see their decisions and those of their roles in the inbox, notifications, or chat; administrators can view them all. Only authorized users can create, edit, or delete decision tasks, which can also be opened and resolved through the WebAPI; rules let you set deadlines and escalate, and webhooks are sent when saving or deleting, with retries and a test option. Decisions are applied after one minute and can be undone; existing decision rules and webhooks are migrated during the update. In addition, the MCP dashboard displays amounts with their currency and has its own color palette, and adapts to the available width.
- **The scheduler, agenda views, and kanban board display new cards without changing screens.** Cards appear in the cell, day, or column they belong in, while respecting the user's filters and permissions. Notifications appear in the module bar and new cards are marked; if a card is outside the visible area, an indicator helps you find it. Updates preserve the position, selection, and scroll, and are limited to changes and visible content where applicable. In the 2026 skin, the planning calendar updates without going blank and temporarily marks new events.
- **Administrators can start creating a guided tour from its record.** Creation opens the first step's page and displays the configuration panel; if there are no steps, a message is shown. Invitations appear on the page where the tour begins, and users' responses are retained.
- **Integrated processes and active modules are available in the application context.** This information can be used from the application context. Displayed colors have also been adjusted, and errors are avoided when searching for paths to processes that do not exist.

### Reports

- **Flexygo includes configurable chart themes, with new palettes and visual options that adapt to the skin and light or dark mode.** You can choose monochrome themes or the shadcn-inspired theme, and adjust spacing, labels, and series shapes. Charts update their colors when the theme or light or dark mode changes, preserve label contrast, and avoid conflicts between modules or shared pages. The Flexygo theme has a cleaner grid, and charts can use the skin palette or a configured theme. Administrators can manage themes, and developers can check the embedded chart theme; ECharts is also available as a plugin.
- **You can generate Crystal reports from Flexygo projects and use them in different environments.** Report generation lets you include reports created with Crystal Reports in projects. Compatibility issues between packages and the location required to generate reports have also been fixed. Loading of editor definitions has been improved.
- **You can design and customize reports from Flexygo and export them to PDF without errors.** The report designer lets you create and edit reports, as well as customize the appearance and settings of the DevExpress designer. Export errors and parameter-reading errors have been fixed, and reading parameters no longer depends on letter case. The designer interface is also displayed correctly when translations are applied.
- **You can get PDF reports in base64 format for Crystal Reports and DevExpress.** This format lets you use the generated PDF from other application functions. Loading parameters when opening a report from a link has also been fixed.

### Scheduled Tasks

- **You can disable scheduled tasks and scripts from the application settings.** When you enable this option, the process stops starting those jobs. It is also respected when inserting or editing a task, to prevent disabled jobs from running.
- **Run scripts as scheduled tasks.** You can configure scripts associated with scheduled tasks and jobs. This way, the configured scripts run as part of the application's task schedule.

### Security

- **Control who can run each process, even without an associated object, using optional permissions and SQL conditions.** Permissions are configured for users, roles, and capabilities, from their security screens or from the process record. The SQL condition is checked each time the permission is validated, and only allows the process to run if it returns 1 or true; if the condition is not met, the process is hidden from menus and toolbars. The security screen lets you review who can run it and what condition limits its use.
- **Manage permissions from a security table and access it directly from users, roles, capabilities, and objects.** The table displays permissions by action and lets you add conditions, block or delete rules, filter items with rules, and remove all rules in a family. When you open it from a user, role, capability, or object, that item is selected. You can also view the actions available to users and roles and preview changes before applying them.
- **View the security of objects, modules, properties, and processes from a single workbench screen.** You can open an object's security configuration from its screen in the workbench, keeping the object selected when changing scope. The search is cleared when you enter a new one, and the 2022 skin retains its previous screen.
- **Configure object security conditions by choosing a property, an operator, and a value.** The wizard offers the object's properties and lets you select context values, so you do not have to remember table names or special markers. You can also test the condition before saving it and view the SQL that was executed.
- **The 2026 skin includes a screen for managing rules and viewing how permissions apply to users, roles, and capabilities.** From the work area, you can view rules for objects, modules, fields, and navigation items, and compare granted, denied, or undefined permissions. The screen displays the conditions and application order for roles, capabilities, and users to explain why an item can be accessed. It also lets you create, modify, and delete rules, and displays the applied rules alongside the default policy; for modules, it indicates when a condition determines access. For fields, it groups read and edit permissions under the object they belong to.

### WebAPI Security

- **The WebAPI and MCP can limit responses to the properties defined for each object.** The option is enabled by default and includes defined properties and keys. This means responses and schemas omit columns that are not available in all installations.
- **Flexygo includes an MCP server for assistants and applies token permissions in the WebAPI.** MCP is disabled initially and has its own permissions by user and role, as well as administration screens. The WebAPI rejects disallowed operations with an explanation and does not display them in OpenAPI.
- **The navigation bar includes search, and the WebAPI supports bulk operations and relationship queries.** Search makes it easier to find content from navigation. Developers can work with bulk operations and relationships through the WebAPI.
- **Developers can view backend API and WebAPI definitions in Scalar.** Scalar provides a reference for Flexygo APIs for those developing on the platform.
- **You can expose application entities through the WebAPI.** The WebAPI includes token authentication and options for defining and querying entities. The allowed-origin configuration supports wildcards, making it easier to connect other applications to Flexygo.

## Improvements

### Deployment

- **Flexygo runs on .NET 9 and lets you deploy the interface, backend and database separately.** You can install the application on IIS, as a standalone service or in Docker, on Windows or Linux. The interface, backend and database can run on the same server or on separate servers; the version assistant also lets you roll back updates.

    ![Flexygo runs on .NET 9 and lets you deploy the interface, backend and database separately.](../../docs_assets/images/Versions/Version10_0/net9-architecture.png)
- **Product translations are retained when publishing configuration data.** The process can include translations associated with product items and exclude those belonging to test modules.
- **Docker installations get connection strings from the application configuration.** This lets you configure connections using the settings available in the deployment environment.
- **Deployment scripts are compatible with Linux.** This makes it easier to deploy Flexygo in Linux environments.
- **Control which JavaScript and CSS files are bundled and improve optimization reliability in IIS.** Bundling lets you choose which files to include, correctly loads custom styles and separates custom plugins from system plugins. It also prevents PDF plugin errors during optimization and improves compatibility with installations hosted inside an IIS application.

### Artificial Intelligence

- **The timeout for artificial intelligence requests is limited.** Calls that do not receive a response no longer remain pending indefinitely. This means requests finish when they reach the set limit.

### Charts

- **Bar and pie charts make better use of the available space.** In charts with many categories, labels are hidden when there is not enough room to read them. In pie charts, the legend and outside labels are not displayed at the same time, and the chart size and position are adjusted to reduce empty space.

### Configuration

- **Configuration secrets remain encrypted in IIS and production Docker containers.** In other environments, secrets are decrypted when the application starts. If a Docker secret is missing or cannot be read, the application does not start by generating a new key.
- **The administrator starts with the 2026admin profile, and only administrators see the option to switch profiles; “Decisions” no longer appears in the menu.** The assigned profile change applies to the administrator user. Other users do not see an action they cannot perform, and the decision tasks entry is removed from the menu.
- **Translations are completed for the Connectors area of the 2026 control panel and the new administration screens.** People who use Flexygo in other languages can view these translated areas. Missing translations are also restored, and a list of records is fixed to include the identifier for each row.
- **SQL connection errors are correctly identified for different network issues.** This helps distinguish server resolution errors, timeouts, and rejected connections. This makes it easier to identify the type of problem preventing a connection to SQL.
- **The quick configuration panel is more readable in the 2026 skin.** Labels, section headings, and help text are easier to read. The appearance of the save button is also adjusted.
- **When you enable SSL in the email settings, a default port is suggested and the selected SSL value is applied.** The email configuration step fills in the port for SSL connections. This means you do not have to enter it manually in that case.
- **Configuration groups show how many options they contain and are displayed in clearer cards.** The new layout takes up less space and makes it easier to find each group. When you hover over a group, the edit action remains visible.
- **The action to convert the development database clearly indicates its effect and warns of its consequences.** The name avoids confusion with the interface development mode. The action is also marked as dangerous.
- **You can search for and configure chart themes from Flexygo administration.** Themes appear in navigation and configuration searches. They can also be assigned to chart modules.
- **Flexygo creates a default configuration if the application starts without a configuration file.** This lets you start the application when that file has not yet been created. The default configuration is created at startup.
- **You can configure the port, scheme, and URL of Flexygo.** These values are set in the application configuration. This lets you adapt it to the environment where it runs.

### Development Tools

- **Guided tours and the page configurator display their text in translation.** The text in these tools is available in seven languages, including the names of Flexygo's own anchors. If a translation is missing, the original English text is displayed; text written when configuring a tour keeps its content.
- **Customize a tour's welcome card with an image or Flexygo branding.** The branding can be displayed with a typing animation. If you select another image, it appears as a static illustration.
- **Developers can configure more options in shared controls.** They can add a button to clear the selection, choose when a dialog fills the screen and control the text field's focus. Option cards also support an accent color.
- **Configure documents and images, and find shortcuts to open lists, forms and security.** The files section lets you switch between documents and images and loads the configuration for the object. The shortcuts mentioned are also available from this space.
- **The view design section in the Object Bank has a clearer name.** The name is no longer confused with record design. The change is available in the seven included languages.
- **Group and collapse modules by type in the placement panel.** You can keep the groups you are using open. When you search, groups containing results expand.
- **Object settings display their text in the seven available languages.** The translation includes section titles and descriptions. This lets you view the settings in the available language you use.
- **The view manager displays correctly and is more readable in skin 2026.** Field layout, text colors and hover states have been fixed. These improvements also apply when the manager is opened as a template.
- **When placing modules, you can scroll through the page, view their details and find those already added.** Cards show module information and the pages where each module appears. Modules already placed remain visible in the side panel, and Esc lets you close the layers in placement mode one at a time.
- **The bar for moving a module without a header is only highlighted on hover.** The drag area remains available even when it is not highlighted. This keeps modules without headers consistent with the others while placing them.
- **View errors in a filterable list with pagination and expandable details.** You can combine filters to narrow down the results and view the options available for each criterion. The shortcut from the home dashboard opens the list with errors from the last 24 hours.
- **The addon marketplace displays each option in a row instead of a wide card.** The new layout makes better use of space whether there are few addons or many. Search is aligned with the list, and each addon's information and actions remain visible.
- **Users with development permissions sign in with development mode enabled and can disable it from the menu.** The mode retains the selected state when you sign in again, and disabling it does not cause an error if there is no side panel to close. The shortcut only appears for users with a designer role; the source selector no longer includes the addon, which is displayed separately.
- **In the 2026 skin, development tools are available in their corresponding areas, and previews have their own card.** Object, page and catalog settings are accessed from their specific locations instead of being duplicated in the side panel. The preview rotation control sets the orientation for the next time it is opened.
- **Mobile and tablet previews use controls to select a device and change its orientation.** You can change devices without losing the current orientation. Rotation affects the open preview and does nothing if no preview is open.
- **You can enable or disable Minify JS/CSS from a dashboard card.** The card fits in with the other dashboard options and lets you change the setting from anywhere on its surface. You do not have to leave the dashboard to change it.
- **Process communication with the proxy supports different response types.** This makes it possible to handle the responses required for ABH Sign document operations. This improvement is intended for those processes.
- **Developers can debug application code with source maps.** This improvement makes it easier to locate the source of a problem during debugging. It is intended for people who develop on Flexygo.

### Filters

- **Filters and panels in the 2026 interface work better on mobile devices and display clearer information.** You can view filter label values in a tooltip, and the filter manager fits on a mobile screen. The selection panel and development menu search are also fixed.
- **Set the order of results by adding field and direction criteria.** You can search for fields in the list, and the dialog takes up only the space it needs. Criteria appear in the order in which they will be applied.
- **Rows and labels in the dependency manager remain readable when you hover over them.** The highlight uses the accent color and stands out in both light and dark mode.
- **The generic filter manager organizes its panels better and lets you view dependencies between fields.** The properties tree and field rows appear in separate panels, and dependencies are shown as text. You can also open field security, clear searches, and view properties after saving; content fits the dialog and can be scrolled within it in flexy2022 and in the 2026 skin.

### Forms

- **Forms adapt better to small screens and reposition fields when dependencies change.** On narrow screens, fields are displayed in a single column and forms work correctly on mobile devices. The property bank reflects the saved layout, and the minimum heights of images and editors are maintained when they are resized.
- **In the 2026 skin, the save bar is aligned with the dialog and keeps the Save button visible.** In modal forms, the bar stays next to the bottom edge as you scroll through a long form. The object label no longer covers the button when the bar is fixed at the bottom; in short forms, the bar stays in its usual position.
- **Form labels in the 2026 skin are displayed neatly and without a colon at the end.** Long labels are shortened visually, and you can view the full text by hovering over them. Switches stay next to their labels without overlapping other fields; this change also applies to views and quick settings. The flexy2022 skin keeps its previous appearance.
- **Inline editable fields in lists keep the same appearance as form fields.** You can see the change, for example, in insertion rows and editable lists.
- **The image field makes use of the allocated space and displays the photo at a larger size.** The image and its editing control are no longer cropped in tall fields. The field adapts to the defined space, even when it is empty.
- **In the compatible skin, you can create tabs, and the form keeps the tab you had open when you save.** The selected tab is restored when the form is refreshed and remains visible in the tab strip. The controls for creating tabs do not appear in flexy2022, where they cannot be displayed.
- **In the new skin, the fields and Save button are aligned with the title of their card.** The alignment is maintained even if the first element in the form changes.
- **Fields are readable on more screens in dark mode with the new skin.** The background, text, and borders are adapted in mailing list fields, the data model viewer, and the relationship editor. Edit forms keep their current size and spacing.
- **The SQL validator recognizes Oracle data types.** This allows you to validate SQL queries that use Oracle-specific data types.

### Home

- **The home page and control panel organize information better and let you access records from their indicators.** On the home page, lists and blocks use space better, errors are grouped by cause, and status indicators open their records, including job execution results. In the control panel, shortcuts and recent activity are presented more compactly, with more useful information about objects and modules. List links and totals match their content.

### Interface

- **Lists in the 2026 skin distribute space better between data, columns, and actions.** The actions column fits its buttons and does not expand to fill leftover space. Editable lists stay within their column, and row combos adjust to the available width.
- **Views in the 2026 skin display fields, labels, and headers more clearly.** Long values stay on one line and are truncated when they do not fit. Spacing between rows is also improved, and photos specified using relative paths are displayed.
- **Flexygo displays its icons using the updated Font Awesome 7 names.** The update covers icons for screens, views, navigation, and other application elements.
- **The windows for the wizard, updater, and other areas share a consistent header and layout.** The header brings together the icon, title, subtitle, and available actions. Installation and update dialogs have a consistent size, and their results and error screens share a style; the retry option is distinguished as destructive.
- **The 2026 skin refreshes email, notifications, and AI chat to make them easier to use.** In email, you can view folders alongside the list, filter by read messages, search by subject, and open messages in a side panel. Notifications include filters and an option to mark them all as read, while AI chat uses a compact panel. The flexy2022 skin keeps its current appearance.
- **The 2026 skin’s quick access menu lets you return to the dashboard or control panel from any page.** The shortcuts appear in an administration section of the menu, even if the project menu does not include that group.
- **New installations start with the 2026 interface, and new users inherit the profile of the person who creates them.** Existing installations keep their profile, and products are not affected. The 2026 administration profile is available only to users with the administrator role.
- **You can copy an error’s technical details without displaying additional notices.** The button visually confirms the copy by changing its icon. It is also available as a shared element for developers.
- **The 2026 skin improves the appearance and use of windows, lists, combos, and wizards.** Button tooltips are restored, and lists and tabs are better organized. The template wizard is also back, creating objects offline is easier, and the display of combos and property settings is improved.
- **The 2026 skin improves lists, mobile use, and several work tools.** List groupings and headers stay visible, and editing is faster. On phones, side navigation adapts to a sheet, and rows and controls are easier to use by touch. Calendars, charts, and offline synchronization are also improved.
- **Loading screens use a new animation.** The animation displays the logo or the default indicator depending on the loading context.
- **The 2026 skin’s agenda and monthly calendar make events, dates, and categories easier to distinguish.** Events are displayed as cards with a colored side marker, visible in light and dark modes. The monthly agenda shows the month alongside the events for the selected day, makes it easier to view all events for that day, and adapts the selector to the language and color mode.
- **Drop-down menus are displayed without being clipped by their containing area.** Their position is adjusted relative to the control that opens them, even inside scrollable areas.
- **The offline emulator keeps the device visible and represents current iPhone and Samsung models.** The iPhone frame is displayed at the same height as the Samsung frame, and the application respects the dimensions of the selected model. The screen reorganizes its sections in narrow windows, and side navigation remains accessible in the 2026 skin.
- **Logos can adapt to the light or dark theme without reloading the page.** You can configure a variant for the dark theme; if none exists, the configured logo is retained. Logos and profile images with paths that include backslashes are also displayed correctly, and the theme preference is applied when the page is refreshed.
- **The security screen has a clearer, more spacious layout in the 2026 skin.** Titles, labels, controls, and the save button are easier to distinguish within the module.
- **Navigation panel branches show whether they are open or closed and can be expanded without closing the panel.** The indicator changes orientation when a branch containing options is opened; options without items do not display it. When groups are expanded, the panel stays open and any other open menu is closed; header icons keep the expected order.
- **The 2026 skin’s menu retains its shortcuts when refreshed and lets you open profile options.** The menu footer no longer disappears when it is refreshed, and the language option opens its form again. Users who are not designers can also open the modules menu.
- **Module administration options open in more convenient side panels.** The configuration, security, events, and page relationship panels have more space without covering the whole screen. Their controls are arranged in a single row, and the events panel adjusts its height to the content; the gear opens the module configuration, and the other options are grouped in another menu in development mode.
- **Notifications and guidance in the page configurator are easier to read in the 2026 skin.** The contrast is increased for the notification about the page source and the guidance that appears when you hover over a module.
- **The interface displays available text in menus, wizards, templates, and lists in translation.** Options in the new skin, home page messages, chart theme names, element types, and list headers are translated when a translation is available. Titles and buttons that appeared as internal keys or in English, the German search text, and the translation of “View Name” are also fixed. Names defined by each client and the identifiers needed to sort and save widths are retained.
- **Labels, links, and text in the 2026 skin are easier to read in light and dark modes.** The contrast of labels, secondary text, and accent colors when used as text is adjusted, without changing backgrounds or buttons. Links are distinguished by their color and underline, while clickable labels are underlined on hover; card labels retain adequate contrast.
- **The application makes better use of module space and adapts to narrow columns in the 2026 skin.** Toolbars can wrap onto multiple lines to avoid horizontal scrolling. Margins are also balanced, empty space above pages is reduced, and space is left below the last module.
- **Grid design mode opens from navigation and keeps module titles visible.** The integrated access retains the keyboard shortcut and remains available when navigation is refreshed. Drag areas do not cover titles, empty gaps at the end of the page are reduced, and row controls do not move when you interact with them; the page makes better use of the space next to the sidebar.
- **Links to objects, processes, and reports are displayed as compact, easy-to-navigate labels.** Related items take up less space and are easier to distinguish on hover. Titles that do not perform any action are not highlighted as interactive.
- **The 2026 skin groups module actions next to the title and hides secondary options in a menu.** The main action is close at hand, and the toolbar takes up less space, especially in narrow modules. Less frequently used options remain available in the three-dot menu; the refresh and collapse buttons remain in the headers.
- **The palette search shows when it is loading and distinguishes empty results from errors.** While results are loading, the screen retains its space and displays a waiting indicator. In development mode, the palette also lets you open the global search configuration.
- **The parameter view integrates better with the 2026 skin.** The new presentation applies only to this view and does not change how it is displayed in Flexygo 2022.
- **Row actions appear at the end of the list, in a column fitted to their buttons.** This means data is read before actions, and columns are aligned in both skins. In editable lists, buttons for adding data also appear in the last column.
- **The new skin displays a progress bar while pages load, instead of a spinning indicator.** The bar lets you track navigation progress while a page loads.
- **The Kanban board displays clearer columns and cards, including when moving or archiving cards and in dark mode.** Cards are easier to distinguish from the background, and columns integrate with the module. When you drag a card, the archive area stays within its strip, and drop zones fill the entire column, even when it is empty.
- **Pop-up menus for filters, processes, and notifications share a more consistent appearance.** The same shadow and border style help these menus fit in visually.
- **The planner has a more organized and readable toolbar and side panel.** Controls share a consistent appearance, and buttons make the active option easier to distinguish, reserving red for dangerous actions. Labels and types align with the grid and take up only the space they need; the panel also collapses without visual delay.
- **Module tabs are easier to distinguish and can be scrolled through when they do not fit on screen.** Long tabs scroll within the module and do not extend beyond its boundaries. The module selector also adopts the style of the other controls.
- **Maps, network charts, and the agenda display correctly in dark mode.** Their display areas integrate with the application’s dark appearance instead of relying on a light background.
- **In the new skin, controls and navigation elements integrate better with dark mode.** Light backgrounds that made some elements difficult to read are fixed. The light skin is unchanged.
- **Submenus retain the hierarchy of their options, and the last column can fill the table’s empty space.** When a table is resized, the last column adjusts to prevent a gap. Context menus keep their options nested.
- **Version changes update affected web files, and sign-in handles service interruptions better.** Files that have not changed can be retained in the browser. SSO sign-in labels are also translated.
- **Application errors are displayed more consistently and with clearer messages.** Their presentation has been unified across different application operations.

### Licenses

- **The licenses page displays the level, extension status, and request code more clearly.** The plan level, such as PRO or LITE, appears next to the license type when applicable. If the request code is missing, this is indicated and the option to copy it is not offered; a confirmation is also displayed when the identifier has been copied.
- **License management recognizes new plans for more products.** The supported product plans have been expanded. This allows license management to recognize additional license plans for compatible products.
- **You can validate a license that includes multiple computer names.** Enter the names in the license computer list and separate them with the «|» character.

### Login

- **Account pages no longer get stuck when you go back and show clearer information when recovering your password.** The system also distinguishes between an account whose email has not been confirmed and a problem with the email-sending configuration.
- **Redirects and URLs for sign-in and password management pages lead to the correct destination.** After resetting your password, you are returned to the sign-in screen. Destinations after changing your password and URL generation for these pages have also been fixed.
- **Error messages from account processes are translated.** Translations are included for exceptions that may occur during these processes.
- **You can create users with backslashes in their usernames.** Username validation accepts this character when creating an account.

### Notifications

- **The decision card appears when appropriate, and the bell immediately reflects changes and unread emails.** You can open unread emails from the bell. When you do, the bell closes and the counter decreases without waiting for a later task.
- **Error and warning messages can remain on screen until the user closes them.** This option is useful when a message needs to be read carefully and should not disappear automatically.

### Performance

- **Pages with many components load faster because the skin is read only once.** If the skin's style sheets are reloaded without reloading the page, they are read again to apply the changes.
- **The application compresses the resources it serves and reflects style changes in their version.** Compression reduces the amount of data downloaded when loading the application, especially on slow connections. In addition, changes to style sheets are reflected in the file URLs.
- **A silent cache reload also updates data stored in memory.** When this reload is performed, in-memory data is updated along with the rest of the cache.

### Processes

- **ABH Sign interprets signature credit information and can read documents through the application proxy.** Managing credits received from the signature service prevents errors. You can also manage documents when the signature process and the application are on different servers.
- **When reviewing errors, you can also view chained exceptions from processes.** The error trace includes information about exceptions that occur within chained processes. This helps you review the error along with its chained origin.
- **Process and report parameters are retained when saving their configuration.** Values associated with processes and reports are maintained when saving the configuration. This helps preserve the parameters that have been set.

### Reports

- **Reports are identified and displayed by name instead of description.** When you view a report, its name is used as the reference and as the displayed text. This restores identification by name.

### Scheduled Tasks

- **Planner icons retain legible contrast in light and dark modes.** Configuration and refresh icons change color according to the display mode. This makes them easier to distinguish against both backgrounds.

### Security

- **The application configuration encrypts passwords and sensitive keys on disk.** This protects, among other data, connection strings, email and NuGet passwords, and JWT and Data Protection keys. The executable lets you manage the encryption key and move it to another server without needing the SDK.
- **The licensing API separates querying and updating the status, and sends the activation code in the request.** This change affects integrations that query or update the license status, or send an activation code.
- **Role and permission changes take effect without requiring the user to log in again.** The update is reflected in the user's next requests. It covers permissions associated with roles and permissions for objects, pages, and reports.
- **User impersonation is now supported for file downloads.** This change affects downloads when impersonation is used.
- **The security screen is translated into all seven available languages.** Its labels and options no longer rely on alternative English text.
- **New objects display their name in the singular, and a view for page capabilities has been added.** The view lets you query page capabilities through the security layer. When creating an object, the plural title of the collection is no longer used as its name.
- **The password-change page displays form errors and validations.** This helps you identify problems when entering or updating the password.
- **The security rules catalog includes pages, templates, and reports.** It also identifies families that do not have an available view and avoids repeating templates in the results.

### Skins

- **The 2026 skin's field and toggle controls keep a consistent appearance outside edit forms.** Fields retain the appropriate style when displayed on other screens. Also, disabled toggles that are on keep a solid accent color.
- **You can display a different logo for each interface mode.** The application selects the variant for the active mode. This lets you adapt the logo's appearance to each mode.
- **The 2026 skin improves the contrast and readability of various controls and text.** The Apply button in the sorting dialog and the button for running processes are easier to distinguish. Text for danger options, cards, wizard steps, and scheduler alerts and controls is also adjusted in light and dark modes.
- **The 2026 skin uses the Geist font instead of IBM Plex.** This changes the appearance of text in this skin. It also reduces the size of the font files it uses.
- **In the 2026 skin, processes with visible text remain in the toolbar.** Processes without text remain grouped in the three-dot menu. This keeps the toolbar tidy without hiding processes that include a visible description.
- **In the 2026 skin, filters and the actions menu take up less space above the content.** The controls appear next to the module title. If there are no filters to show, the empty row disappears.
- **Fields that fail validation are easier to identify in the 2026 skin.** The error message appears next to the field label. This prevents it from being cut off or overlapping the next row.
- **You can open the module organizer from the 2026 skin header using a button or keyboard shortcut.** The button is next to the notifications, and the shortcut is Ctrl+Shift+M. Access respects design permissions.
- **The default Flexygo logo has a gray background instead of a white one.** This change applies to the logo image included by default.
- **You can access skin variables without distinguishing between uppercase and lowercase letters.** The search finds a variable even if it is typed with different capitalization. You do not need to match the capitalization when locating it.

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

- **The WebAPI temporarily blocks IPs with too many failed attempts and identifies them correctly, even through the frontend.** The default is 50 failed token attempts per minute, and administrators can change it. Protection also applies to access through password, LDAP, SSO, and token renewal; in addition, blocked users are rejected.
- **Flexygo tools without a valid license can no longer access the WebAPI.** The license check also applies when these tools try to access the WebAPI.
- **The WebAPI OpenAPI definition is clearer, faster, and limited to enabled and exposed objects.** The documentation better organizes operations, responses, error models, and shared schemas, and includes the object description when available. It also explains which value pages start from and how to write dates in filters; to generate it, only objects with WebAPI access permissions are processed.
- **View the server date, time, and time zone through the WebAPI.** This information is added to the existing context data without replacing it.
- **Navigation node counters are calculated without sending their queries to the browser.** The application sends the node identifiers and receives the counter values. The change applies to nodes with a configured counter.
- **The WebAPI returns dates in an updated format.** The new format lets consuming applications handle dates consistently when integrating with the WebAPI.
- **Flexygo rechecks the security conditions of users who are already signed in.** If those conditions are no longer met, access is not retained as if they were still in force.

## Fixes

### Artificial Intelligence

- **The configuration reference used in AI vector searches has been fixed.** The fix affects queries that retrieve information to generate answers. These searches now use the correct configuration reference.
- **The artificial intelligence interface now displays correctly at different screen sizes.** The interface layout adjusts according to screen size. This means its styles display correctly in different formats.
- **Artificial intelligence processes run again when global context is missing.** The failure that could prevent them from running when the required context was unavailable has been fixed. Missing global context no longer blocks these processes.
- **Processing of ChatGPT requests has been fixed.** The issue could prevent some ChatGPT responses from being interpreted correctly. These responses are now processed correctly.

### Charts

- **EasyInfo modules without an object can use context variables.** This lets you use values such as the current user or date in queries. Context variables are therefore also available when the module has no associated object.

### Configuration

- **Errors when saving dependencies and retrieving license values are fixed.** Operations for saving dependencies and retrieving license values are working correctly again. You can now complete these tasks without the previous errors.
- **The configuration tables script includes the missing columns.** Creating or updating these tables now includes the expected columns. This prevents columns from being missing when you run the script.

### Conversations

- **The behavior of mentions and their notifications in conversations has been fixed.** You can now mention other people correctly. The notification they receive includes the default values of the corresponding page.
- **You can send emails with attachments even when the application uses different servers.** Attachment handling has been fixed when the application is configured to use different servers.

### Deployment

- **Local publishing copies the shared keys required for login to the frontend.** If the backend has not generated these keys yet, publishing warns that they are not available. This prevents a newly published installation from getting stuck between the home page and login.
- **Database deployment avoids an error related to changes to icons.** Changes to the icon tables are prepared during deployment.

### Development Tools

- **When you export a project, users and secrets are excluded, and scripts compatible with data of any type and size are generated.** Secrets are stored in a local file ignored by Git and are only applied when publishing to Debug. Publishing no longer overwrites the secrets configured in each installation.
- **Select the Addon source from the source selector in skin 2026.** When Addon is active, the dashboard also displays its name and color indicator. This lets you identify the selected source in both areas.
- **You can move modules again after canceling a drag with Escape.** This fixes a movement issue that could occur when you canceled the operation with that key. You do not need to reload the page to try again.
- **Changes to properties are saved correctly, and the wizard opens the right manager.** Moving properties between tabs and reordering them also works in processes and reports. When you edit the settings for a process, report or object, an empty or untitled manager no longer opens.
- **Resize controls are aligned with the corners of modules.** The markers are drawn on the visible edge of the card and no longer look like a second outline. The sides retain their resize area.
- **A module's menu is no longer covered by the resize controls.** Menu items remain clickable even when they overlap the controls' area. This fix applies to skin 2026.
- **The addon marketplace no longer gets stuck loading when a query fails.** Controls on installed addon cards are also fixed. When there are no results, the extra space is removed.
- **Custom LESS variables and the path for exported files with database changes are fixed.** Custom styles are processed correctly. In addition, the export of database changes uses the corrected path.
- **Monaco editor parsing and loading errors are fixed.** TypeScript definitions also load correctly in the editor. These fixes prevent failures when processing content and loading Monaco.
- **You can change the order of nodes without errors when loading their properties.** Behavior during node editing and property loading is fixed. You can now reorder them without the issue occurring.
- **Toolbar cloning is fixed.** When you clone a toolbar, its data is retained correctly. This means the clone keeps the information from the original toolbar.

### Document and Image Management

- **Several issues with managing documents and images have been fixed.** Document and image management is more reliable.
- **Downloads through the proxy respect the deletion setting and work across different servers.** If the corresponding option is enabled, the file is deleted after it is downloaded. Encryption of requests is also fixed when the application and service are on different servers.
- **Documents keep the correct name and path when managed through the proxy.** The paths used when managing documents and images are also fixed, preserving the original path when saving files. This prevents errors when locating them in the processes that receive or manage them.
- **The image control works when saving files to an external folder.**

### Email

- **Calendar invitations use the system email account if the user does not have their own.** The system address is also set as the organizer's address.

### Filters

- **Lists with descriptions no longer fail in certain search or data connection cases.** Searches that use unselected columns and searches run on another connection are fixed. If a description cannot be retrieved, the list continues to show the rest of the data.
- **Filter dependencies run when preset values are loaded.** When the filter loads, dependent controls are updated without you having to change any values. The selected value and its text are both preserved while the related options are updated.
- **You can save filter dependencies and receive a clear confirmation when they are saved.** Messages are available in English, Catalan, German, Spanish, French, Italian, and Portuguese. In addition, in the manager's list mode, visible options and their actions are easier to identify.
- **In the classic skin, the options list for a multiple selection filter opens below the corresponding field again.** The list no longer appears shifted to the left of the field.
- **Filters work correctly when applied with an empty value.** This fix prevents the filter from failing to apply when the value is empty.

### Forms

- **When you delete a record from the More menu of a form in a dialog, the dialog now closes correctly.** Previously, the form remained open and empty after the record was deleted. The dialog now closes as it does when you use the delete button on the toolbar.
- **When you create a record from a calendar cell, the selected day is preserved.** The date no longer shifts to the previous day when you open the record. This fix affects the scheduler and the monthly calendar.
- **The position and size of modules are managed from the page configurator, not from their form.** The row, column, width, and height fields no longer appear in the page-module relationship form. This means that saving a form that was already open does not overwrite the configured position; fields with the same names in other forms are unchanged.
- **You can save Boolean values in byte-type properties without conversion errors.** The problem occurred when inserting the data. The corrected conversion lets you complete the save successfully.
- **Processes and reports without a description show “General” as the name of their main tab.** This gives the tab a recognizable name even when the process or report has no description. Text related to opening reports has also been corrected.
- **The barcode control handles its dependencies correctly.** This adjustment affects the use of this control in forms.
- **The database selector works even if no page size has been defined.** You do not need to define a page size to use the selector.
- **An error when using decimal values has been fixed.** This adjustment lets you work with decimal values again without that error occurring.

### Installation

- **Addon installation now correctly recognizes beta versions.** The «-beta» suffix in the addon version is interpreted correctly.

### Interface

- **When you delete the last row in a list, the last available page is displayed and tooltips do not remain floating.** In both skins, pagination adjusts when the last row on the last page is removed. In the 2026 skin, headers also no longer overlap rows while deletion is being confirmed.
- **Row actions appear in the expected position, and headers are aligned with the rows.** In flexy2022, actions appear before the columns; in the 2026 skin, they appear after them. The intermittent issue when sorting from the options menu is also fixed.
- **The Kanban and HTML editor displays, the menu logo, and other interface details are fixed.** The response of the annual calendar days and information cells when interacting with them is also adjusted. The options to disable scheduled tasks and script tasks work again.
- **EasyInfo and charts load correctly for users who are not designers.** These modules no longer fail when the user does not have access to debugging tools. This means they can use EasyInfo and view charts without being designers.
- **The flexy2022 calendars return to an appearance similar to the previous one.** The monthly and annual views, the position of pop-up notices, and the alignment of the planning view are adjusted. The change affects only this skin.
- **The application reloads JavaScript and CSS files when they are updated.** This prevents the browser from continuing to use older versions of those files.
- **Offline application views and their module descriptions display correctly.** Module and page descriptions are also translated into the languages included in the application.
- **Display details in settings groups and flexy2022 information cards are fixed.** In the 2022 skin, unformatted counters are hidden, and information cards regain their width, icon position, and data contrast. Standalone information cards keep their usual size; new-card markers are easier to distinguish in the 2026 skin.
- **The 2026 skin’s profile menu lets you access user options and sign out.** From the menu, you can change your language, password, and profile photo, and view your profile when you have administration permissions. You can also switch between light and dark themes; the language displays its flag when applicable, and the options work correctly in the available languages.
- **Pages in the 2026 skin show fewer unnecessary scroll bars and have better-positioned resize controls.** Margins and module heights are adjusted so content fits better in the allocated space. Placement mode tooltips do not cover titles or content, and resize cursors appear only in enabled areas.
- **The free grid displays complete modules and charts and avoids empty scroll bars.** Form blocks no longer appear collapsed, and charts adapt to the available space. Scroll bars appear only when the content actually needs more space, and the page does not unnecessarily extend the empty area at the end.
- **The object menu no longer repeats processes and actions that already appear in the toolbar.** The option explicitly configured in the toolbar is retained, including actions that open a new window. The menu also opens in the correct position again without disappearing.
- **flexy2022 template cards are readable in dark mode.** The text color adapts to the dark background without changing the appearance in light mode.
- **Layout issues in forms, the control panel, the annual calendar, and icons are fixed.** Form fields are distributed correctly again, and the control panel retains its modules. The annual calendar adapts to the available width and lets you open days with a tap. The calendar’s appearance and the display of some icons are also fixed.
- **Copying exceptions to the clipboard works with special characters.** Certain characters in exception text no longer interrupt the copy action.
- **Translation issues caused by duplicate keys are fixed.** Affected strings are translated correctly even when they share a primary key. The change applies to translated text loaded from the application data.
- **Date compatibility is fixed, and Blazor page styles no longer affect other pages.** Dates retain the format expected by the existing interface. Blazor page styles are also isolated.

### Login

- **If shared backend keys are missing, the sign-in page indicates which settings you need to copy.** The notification identifies the configuration sections required for the frontend to sign in. After you copy them, simply restart for them to be checked again.
- **The process that runs after sign-in is executed only once, and its errors do not prevent access.** It also runs for guest users and for sign-ins with SSO or a second factor. If it fails, the error is logged and displayed on the first page, but you can still access the application; a token is also generated correctly for those sign-ins.
- **You can sign in even if your account does not have an alias.** User lookup no longer fails when this field is empty.
- **When you confirm your email, you do not have to set up a password again if one already exists.** The confirmation displays the appropriate result whether the account already has a password or not.
- **After resetting your password, you can sign in with the new password.** The recovery process lets you continue signing in with the password you have just set.

### Notifications

- **The notification sound no longer repeats continuously when many notifications arrive at once.** This fix prevents the chime from ringing nonstop while scheduled processes are running.

### Performance

- **The application prevents repeated reloads after restarting the application pool.** This reduces simultaneous reloads and improves stability while the service recovers. It also prevents unnecessary data rebuilds when loading pages.

### Processes

- **The ERP process that runs after login also runs for guest users.** Guest logins therefore follow the same post-login flow as other users. This also allows the ERP process to run for those logins.
- **Previous and post-processes retain the values of split properties.** Values are maintained when these processes run on an entity. This means the execution does not delete them or replace them with the loss fixed in this version.
- **The process button remains visible in the toolbar even when its secondary buttons are disabled.** The main action remains available in the toolbar in this situation. Its availability does not depend on whether its secondary buttons are enabled.
- **The Excel import template downloads, and the import works correctly.** The process's download icon once again provides the template for preparing data. The issue that prevented data from being uploaded from Excel has also been fixed.
- **Jobs in an error state are restarted so they can run again.** Jobs that did not finish successfully can be started again. This lets them run again after entering an error state.
- **Translation and serialization errors when using the application offline have been fixed.** Data is processed correctly in offline mode. The fix affects translation and serialization during offline use.
- **Errors in the Redsys integration have been fixed.** The integration once again processes its operations correctly. This fixes the issues that were detected.
- **Parameter creation processes can find libraries even when they are in different paths.** The search for the required library has been fixed when it is not in the expected path. This allows the process to locate it in the different supported paths.
- **Errors when running processes with C# code have been fixed.** Processes that include C# code can run without the errors fixed in this version. The improvement affects their execution.
- **Downloads from integrated processes handle decoding and references correctly.** The fix affects document handling when downloading documents from an integrated process.

### Reports

- **Existing projects can continue generating PDFs with the code they already use.** The method used by existing projects to generate PDFs is retained, so they can continue creating PDFs without changes to their code.

### Scheduled Tasks

- **Processing of scheduled task information is fixed.** This change prevents the previous failures when managing task information. This ensures that it works correctly.
- **Objects related to scheduled tasks correctly apply the configured security.** The configured security is applied to these objects. This ensures that they retain the intended restrictions.

### Security

- **Records, templates, and object views apply list permissions and role filters.** When querying a record without a view, access is denied if the role cannot view it. Filters cannot expand the accessible data and are rejected if they contain comments, semicolons, unbalanced parentheses, or unclosed quotation marks. Administrators and views configured as “No filter” retain their behavior.
- **Authenticated users can no longer obtain the key used to sign tokens.** The key is still generated in the configuration during the first startup, but is no longer available at an address accessible to any authenticated user. This prevents them from using it to create their own tokens.
- **External addresses and return destinations are validated to prevent unsafe connections or redirects.** Retrieving MCP client metadata is restricted to public addresses. Login and password-change returns are restricted to application pages, and decision calls are restricted to public or permitted addresses.
- **You can log in and access downloads and reports using a token included in the URL.** The token is retained during redirects, including when a login is required before opening the link.

### Skins

- **In the 2026 skin, the email editor's footer buttons no longer cover Save.** When editing an email, you can access the Save button without it being covered by the footer controls.
- **In the 2026 skin, list links follow the muted color defined by their template.** This improves the readability of muted text, such as “No address”. It applies to both light and dark modes.
- **Errors when loading styles because a variable is missing are prevented.** Style loading no longer fails if a LESS variable is missing from the CSS variables. This prevents errors when applying the affected styles.
- **The path is fixed so that the main logo is displayed.** Flexygo uses the corrected path to locate the logo. This allows the configured main logo to be displayed.

### Updater

- **The Updater displays an error if it cannot check the latest available version.** This lets you distinguish a failed check from a situation where no newer version is available.

### WebAPI Security

- **IIS allows PUT and DELETE in the WebAPI and displays Backend errors on the page.** Error responses are preserved as returned by the Backend, even when the Frontend and Backend are on different servers.
- **WebAPI lists no longer display the text associated with hidden properties.** The description of a search value is also omitted when the property is marked as hidden.
- **Role filters are applied to the correct records, and invalid conditions are rejected in the WebAPI and MCP.** Related searches no longer cause lists to stop applying the security filter. Conditions that could bypass it are rejected instead of returning unauthorized results.
- **WebAPI inserts run processes associated with properties even when they have no dependencies.** Values calculated by these processes are available to dependencies evaluated afterward.
- **Detailed errors are displayed when defining the WebAPI, and a blank screen is avoided for guests without permission.** Unauthorized guest users are no longer left with a blank page. When a WebAPI definition fails, developers receive clearer information.
- **The WebAPI redirection is fixed.** When accessing the WebAPI, redirection works correctly again.
- **An error when validating WebAPI tokens has been fixed.** Requests that use tokens can now pass the corrected validation.
- **The WebAPI correctly accepts requests sent without content.** Sending this type of request has been fixed so it does not fail when the body is empty.

## Deprecated

### WebAPI Security

- **Obsolete connection-check and maintenance features have been removed.** This change removes the connection-check endpoint and the process for enabling maintenance mode.
