# Parser

## Functions

### recursiveCompile()

> **recursiveCompile**(`json`, `template`, `conf`, `contextFunctions?`, `lastTemplate?`, `AddTimeZone?`): `Promise`\<`string`\>

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `json` | `any` | `undefined` |
| `template` | `string` | `undefined` |
| `conf` | [`ConfToken`](types.md#conftoken) | `undefined` |
| `contextFunctions?` | `any` | `undefined` |
| `lastTemplate?` | `string` | `undefined` |
| `AddTimeZone?` | `boolean` | `false` |

#### Returns

`Promise`\<`string`\>

***

### compile()

> **compile**(`json`, `template`, `files`, `contextFunctions?`, `AddTimeZone?`): `Promise`\<`string`\>

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `json` | `any` | `undefined` |
| `template` | `string` | `undefined` |
| `files` | [`fileResource`](types.md#fileresource)[] | `undefined` |
| `contextFunctions?` | `any` | `undefined` |
| `AddTimeZone?` | `boolean` | `false` |

#### Returns

`Promise`\<`string`\>

***

### findTemplate()

> **findTemplate**(`obj`, `typeId`, `pageName`): [`PageConfig`](types.md#pageconfig)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `obj` | [`ObjectConfig`](types.md#objectconfig-1) |
| `typeId` | `string` |
| `pageName` | `string` |

#### Returns

[`PageConfig`](types.md#pageconfig)

***

### getValue()

> **getValue**(`val`, `prop?`): `any`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `val` | `any` |
| `prop?` | `any` |

#### Returns

`any`

***

### replaceAll()

> **replaceAll**(`str`, `find`, `replace`): `any`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `str` | `any` |
| `find` | `any` |
| `replace` | `any` |

#### Returns

`any`

***

### formatDate()

> **formatDate**(`value`): `any`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `any` |

#### Returns

`any`

***

### formatNumber()

> **formatNumber**(`value`): `any`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `any` |

#### Returns

`any`

***

### formatDecimal()

> **formatDecimal**(`value`): `any`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `any` |

#### Returns

`any`

***

### escapeJsString()

> **escapeJsString**(`str`): `string`

Returns an escaped JS string

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | String |

#### Returns

`string`

#### Method

escapeJsString

***

### escapeSqltring()

> **escapeSqltring**(`str`): `string`

Returns an escaped SQL string

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | String |

#### Returns

`string`

#### Method

escapeSqlString

***

### splitParams()

> **splitParams**(`pStr`): `any`[]

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pStr` | `any` |

#### Returns

`any`[]

***

### escapeHtmlString()

> **escapeHtmlString**(`str`, `attr`): `string`

Returns an escapep HTML string

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | String |
| `attr` | `boolean` | Determine if the line breaks are substituted |

#### Returns

`string`

#### Method

escapeHtmlString

***

### lowerKeys()

> **lowerKeys**(`obj`, `recursive?`): `object`

Transform object keys into lower case.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `obj` | `any` | `undefined` | Object to transform. |
| `recursive?` | `boolean` | `false` | Set recursive mode on/off. |

#### Returns

`object`

transformed object.

#### Method

lowerKeys

***

### execDynamicCode()

> **execDynamicCode**(`dynamicCode`): `any`

Evaluates JavaScript code and executes it.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `dynamicCode` | `string` | Dynamic Code. |

#### Returns

`any`

#### Method

execDynamicCode

***

### sortObject()

> **sortObject**(`obj`, `property`, `property2?`): `any`[]

Sorts an object's array by specified properties.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `obj` | `any` | Object to order. |
| `property` | `string` | Order property |
| `property2?` | `string` | Second order property |

#### Returns

`any`[]

Ordered object.

#### Method

sortObject
