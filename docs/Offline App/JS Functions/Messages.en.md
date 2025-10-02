# Messages

This section is a collection of message-related functions that can be used in various parts of the application.
It contains functionalities for displaying error messages, warnings, success messages, confirmations, prompts, and alerts.

## Functions

### showError()

> **showError**(`err`, `auditable?`, `write_on_console?`): `Promise`\<`void`\>

Shows an error message. If auditable is true (default) and the message is not a required field exception, it will be logged in the local database.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `err` | `any` | `undefined` | The error object or message to be displayed. |
| `auditable?` | `boolean` | `true` | If true, the error will be logged in the local database unless it's a required field exception. |
| `write_on_console?` | `boolean` | `true` | If true, the error will also be logged to the console. |

#### Returns

`Promise`\<`void`\>

- A promise that resolves when the error message has been displayed.

***

### danger()

> **danger**(`msg`, `moreInfo?`): `Promise`\<`void`\>

Shows a danger toast message.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `msg` | `string` | The message to be displayed. |
| `moreInfo?` | `object` | Optional additional information to be shown when the toast is clicked. |

#### Returns

`Promise`\<`void`\>

- A promise that resolves when the toast message has been displayed.

***

### warning()

> **warning**(`msg`, `moreInfo?`): `Promise`\<`void`\>

Shows a warning toast message.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `msg` | `string` | The message to be displayed. |
| `moreInfo?` | `object` | Optional additional information to be shown when the toast is clicked. |

#### Returns

`Promise`\<`void`\>

- A promise that resolves when the toast message has been displayed.

***

### success()

> **success**(`msg`, `moreInfo?`): `Promise`\<`void`\>

Shows a success toast message.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `msg` | `string` | The message to be displayed. |
| `moreInfo?` | `object` | Optional additional information to be shown when the toast is clicked. |

#### Returns

`Promise`\<`void`\>

- A promise that resolves when the toast message has been displayed.

***

### generic()

> **generic**(`msg`, `color`, `duration`, `moreInfo?`): `Promise`\<`void`\>

Shows a generic toast message with a more advanced configuration than the predefined types (danger, warning, success).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `msg` | `string` | The message to be displayed. |
| `color` | `string` | The color of the toast message (eg. "primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", and "dark"). |
| `duration` | `number` | The duration in milliseconds for which the toast message will be displayed. |
| `moreInfo?` | `object` | Optional additional information to be shown when the toast is clicked. |

#### Returns

`Promise`\<`void`\>

- A promise that resolves when the toast message has been displayed.

***

### confirm()

> **confirm**(`header`, `message`, `css_class?`, `showCancelButton?`, `afterAlertPresent?`): `Promise`\<`unknown`\>

Displays a confirmation dialog with customizable options.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `header` | `string` | `undefined` | The header text of the confirmation dialog. |
| `message` | `string` | `undefined` | The message text of the confirmation dialog. |
| `css_class?` | `string` | `undefined` | Optional CSS class to apply to the dialog for custom styling. |
| `showCancelButton?` | `boolean` | `true` | Whether to show the cancel button in the dialog (default: true). |
| `afterAlertPresent?` | `Function` | `undefined` | Optional callback function to be executed after the alert is presented. |

#### Returns

`Promise`\<`unknown`\>

- A promise that resolves if the user confirms, and rejects if the user cancels.

***

### prompt()

> **prompt**(`header`, `message?`, `default_value?`, `showCancelButton?`, `afterAlertPresent?`): `Promise`\<`unknown`\>

Displays a prompt dialog with a single input field.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `header` | `string` | `undefined` | The header text of the prompt dialog. |
| `message?` | `string` | `undefined` | The message text of the prompt dialog. |
| `default_value?` | `string` | `undefined` | The default value to be pre-filled in the input field. |
| `showCancelButton?` | `boolean` | `true` | Whether to show the cancel button in the dialog (default: true). |
| `afterAlertPresent?` | `Function` | `undefined` | Optional callback function to be executed after the alert is presented. |

#### Returns

`Promise`\<`unknown`\>

- A promise that resolves with the input data if the user confirms, and rejects if the user cancels.

***

### prompts()

> **prompts**(`header`, `inputs`, `showCancelButton?`, `afterAlertPresent?`): `Promise`\<`unknown`\>

Displays a prompt dialog with multiple input fields.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `header` | `string` | `undefined` | The header text of the prompt dialog. |
| `inputs` | `AlertInput`[] | `undefined` | An array of input field configurations. |
| `showCancelButton?` | `boolean` | `true` | Whether to show the cancel button in the dialog (default: true). |
| `afterAlertPresent?` | `Function` | `undefined` | Optional callback function to be executed after the alert is presented. |

#### Returns

`Promise`\<`unknown`\>

- A promise that resolves with the input data if the user confirms, and rejects if the user cancels.

***

### alert()

> **alert**(`header`, `message`): `HTMLIonAlertElement`

Displays an alert dialog with a single "Ok" button.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `header` | `string` | The header text of the alert dialog. |
| `message` | `string` | The message text of the alert dialog. |

#### Returns

`HTMLIonAlertElement`

- The created alert element.
