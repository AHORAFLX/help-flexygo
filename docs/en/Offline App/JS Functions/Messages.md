# Messages

## Functions

### showError()

> **showError**(`err`, `auditable`, `write_on_console`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `err` | `any` | `undefined` |
| `auditable` | `boolean` | `true` |
| `write_on_console` | `boolean` | `true` |

#### Returns

`Promise`\<`void`\>

***

### danger()

> **danger**(`msg`, `moreInfo?`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `msg` | `string` |
| `moreInfo?` | `object` |

#### Returns

`Promise`\<`void`\>

***

### warning()

> **warning**(`msg`, `moreInfo?`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `msg` | `string` |
| `moreInfo?` | `object` |

#### Returns

`Promise`\<`void`\>

***

### success()

> **success**(`msg`, `moreInfo?`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `msg` | `string` |
| `moreInfo?` | `object` |

#### Returns

`Promise`\<`void`\>

***

### generic()

> **generic**(`msg`, `type`, `duration`, `moreInfo?`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `msg` | `string` |
| `type` | `string` |
| `duration` | `number` |
| `moreInfo?` | `object` |

#### Returns

`Promise`\<`void`\>

***

### confirm()

> **confirm**(`header`, `message`, `cssClass?`, `showCancelButton?`, `afterAlertPresent?`): `Promise`\<`unknown`\>

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `header` | `string` | `undefined` |
| `message` | `string` | `undefined` |
| `cssClass?` | `string` | `undefined` |
| `showCancelButton?` | `boolean` | `true` |
| `afterAlertPresent?` | `Function` | `undefined` |

#### Returns

`Promise`\<`unknown`\>

***

### changePassword()

> **changePassword**(`cancellable`): `HTMLIonAlertElement`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `cancellable` | `any` |

#### Returns

`HTMLIonAlertElement`

***

### prompt()

> **prompt**(`header`, `message?`, `default_value?`, `showCancelButton?`, `afterAlertPresent?`): `Promise`\<`unknown`\>

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `header` | `string` | `undefined` |
| `message?` | `string` | `undefined` |
| `default_value?` | `string` | `undefined` |
| `showCancelButton?` | `boolean` | `true` |
| `afterAlertPresent?` | `Function` | `undefined` |

#### Returns

`Promise`\<`unknown`\>

***

### prompts()

> **prompts**(`header`, `inputs`, `showCancelButton`, `afterAlertPresent?`): `Promise`\<`unknown`\>

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `header` | `string` | `undefined` |
| `inputs` | `AlertInput`[] | `undefined` |
| `showCancelButton` | `boolean` | `true` |
| `afterAlertPresent?` | `Function` | `undefined` |

#### Returns

`Promise`\<`unknown`\>

***

### alert()

> **alert**(`header`, `message`): `HTMLIonAlertElement`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `header` | `string` |
| `message` | `string` |

#### Returns

`HTMLIonAlertElement`
