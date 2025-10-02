# Forms

This section does only contain save functionality for forms.

## Functions

### save()

> **save**(`btn`, `showMessage?`, `goBack?`): `Promise`\<`unknown`\>

Saves the form data.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `btn` | `any` | `undefined` | The button element that triggered the save action. |
| `showMessage?` | `boolean` | `true` | Whether to show a success message after saving (default is true). |
| `goBack?` | `boolean` | `false` | Whether to navigate back after saving (default is false). |

#### Returns

`Promise`\<`unknown`\>

- A promise that resolves to true if the save was successful.

#### Method

save
