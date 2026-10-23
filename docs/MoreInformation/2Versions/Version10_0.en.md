# Version 10.0

AI adds new models and configurable messages; the Web API can protect properties and insert multiple entities, and forms and object search are improved.

## New features

### Artificial Intelligence

- **AI integration adds the Responses API and new GPT models.** The Responses API lets you work with tool calls through AI integration. The new GPT models are also available in this integration.
- **You can configure the messages for AI processes that run JavaScript.** Messages are no longer fixed and can be adapted to the process being run. Configure them in AI processes that run JavaScript.

### Forms

- **Custom controls let you define the root path type.** This option is added to the configuration for properties and custom controls, and only appears when needed. It is also translated in the application.

### Interface

- **The object search tool adds pagination at the bottom.** The pager appears next to the results. This lets you browse lists that span multiple pages.

### Processes

- **You can exclude DLLs from integrated C# processes with a new setting.** Specify in the setting which libraries should not be included in these processes. This lets you control which DLLs are included in integrated C# processes.

### WebAPI Security

- **You can hide properties to prevent them from being queried or modified through the Web API.** The option is configured in the object properties and is also taken into account when inserting data. Dependency settings take into account which properties are hidden in the API.
- **The Web API takes object dependencies into account when inserting data.** Define dependencies on the object so they also apply when data is inserted through the API.
- **The Web API lets you insert multiple entities in a single request.** Bulk insertion lets you send several entities together instead of making a request for each one.

## Improvements

### Document and Image Management

- **The offline application handles image encoding better when sending images.** This improvement applies when sending images through document and image management in the offline application.

### Email

- **Received emails are sorted by date as well as by their UID.** If several messages have the same UID, the date determines their order of receipt. This lets you distinguish their position when the identifier matches.

### Forms

- **The SQL validator recognizes Oracle data types.** This lets you validate SQL queries that use Oracle-specific data types.

### Licenses

- **Licenses now support the Atlas product.** This means Atlas can be used with a license that includes this product.

### Login

- **After resetting the password, the user is redirected to the login page.** Once the change is complete, the user returns to the login screen. From there, they can log in with the new password.

## Fixes

### Artificial Intelligence

- **The configuration applied to AI vector searches and RAG queries is fixed.** This fix affects queries that retrieve information to generate answers. It covers both vector searches and RAG queries.
- **AI provides a corrected explanation when it does not establish data model relationships correctly.** The explanation helps you understand problems that arise when generating model relationships. It is provided when AI does not establish them correctly.

### Conversations

- **Chatter mention notifications include the page defaults.** When you mention someone, the notification they receive includes these values, which were not sent before.

### Email

- **You can receive emails even when they do not include HTML content.** Messages without an HTML part and those with an empty HTML part are both processed. This means they can be downloaded even when they do not contain HTML content.

### Filters

- **Text filters work correctly on objects with related tables.** This fix lets you apply these filters without errors in object lists that include relationships with other tables.

### Forms

- **The barcode control manages its dependencies correctly.** This adjustment affects the use of the control in forms. Its dependencies are now managed correctly.
- **You can mark several file fields in the same form as required.** If a required file is missing, validation correctly identifies the fields that need to be completed. This helps you identify which fields in the form are missing.

### Integrations

- **Longer URIs are now supported in the Azure integration process.** This prevents errors when using addresses that exceed the previous limit.

### Interface

- **Navigation buttons pass process parameters correctly.** When a process is started from a navigation button, it receives the parameters configured for the action. This means the action runs with the defined values.

### Login

- **Login with Cl@ve is fixed for legal entity certificates.** The certificate's NIF or CIF is used as the login identifier, and the company name is used as the display name. Errors are also avoided when some certificate details are missing.

### Processes

- **Previous and subsequent processes retain the values of separated properties.** When these processes run on an entity, its values are not lost. This means they remain available after execution.
- **The process button remains visible in the toolbar even when its secondary buttons are disabled.** The main action remains visible in this situation. You can access it from the toolbar even when the secondary buttons are unavailable.

### Security

- **The role-based security template is fixed.** The template sets the permissions associated with each role, so this fix affects object security.
