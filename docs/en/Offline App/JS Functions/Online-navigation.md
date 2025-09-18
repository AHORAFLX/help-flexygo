# Online navigation

## Functions

### goHome()

> **goHome**(): `void`

#### Returns

`void`

***

### goList()

> **goList**(`objectName`, `navigateFun`, `defaults?`, `objectWhere?`, `filterValues?`, `pageName?`, `hideMenuBar?`): `void`

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `objectName` | `string` | `undefined` |
| `navigateFun` | `string` | `'openpage'` |
| `defaults?` | `string` | `undefined` |
| `objectWhere?` | `string` | `undefined` |
| `filterValues?` | `string` | `undefined` |
| `pageName?` | `string` | `undefined` |
| `hideMenuBar?` | `boolean` | `undefined` |

#### Returns

`void`

***

### goEdit()

> **goEdit**(`objectName`, `objectWhere`, `navigateFun`, `defaults?`, `filterValues?`, `pageName?`, `hideMenuBar?`): `void`

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `objectName` | `string` | `undefined` |
| `objectWhere` | `string` | `undefined` |
| `navigateFun` | `string` | `'openpage'` |
| `defaults?` | `string` | `undefined` |
| `filterValues?` | `string` | `undefined` |
| `pageName?` | `string` | `undefined` |
| `hideMenuBar?` | `boolean` | `undefined` |

#### Returns

`void`

***

### goView()

> **goView**(`objectName`, `objectWhere`, `navigateFun`, `defaults?`, `filterValues?`, `pageName?`, `hideMenuBar?`): `void`

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `objectName` | `string` | `undefined` |
| `objectWhere` | `string` | `undefined` |
| `navigateFun` | `string` | `'openpage'` |
| `defaults?` | `string` | `undefined` |
| `filterValues?` | `string` | `undefined` |
| `pageName?` | `string` | `undefined` |
| `hideMenuBar?` | `boolean` | `undefined` |

#### Returns

`void`

***

### goInsert()

> **goInsert**(`objectName`, `navigateFun`, `defaults?`, `filterValues?`, `pageName?`, `hideMenuBar?`): `void`

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `objectName` | `string` | `undefined` |
| `navigateFun` | `string` | `'openpage'` |
| `defaults?` | `string` | `undefined` |
| `filterValues?` | `string` | `undefined` |
| `pageName?` | `string` | `undefined` |
| `hideMenuBar?` | `boolean` | `undefined` |

#### Returns

`void`

***

### goReport()

> **goReport**(`reportName`, `objectName`, `objectWhere`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `reportName` | `string` |
| `objectName` | `string` |
| `objectWhere` | `string` |

#### Returns

`void`

***

### goPage()

> **goPage**(`pageTypeId`, `objectName`, `navigateFun`, `defaults?`, `objectWhere?`, `filterValues?`, `pageName?`, `hideMenuBar?`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `pageTypeId` | `string` | `undefined` |
| `objectName` | `string` | `undefined` |
| `navigateFun` | `string` | `'openpage'` |
| `defaults?` | `string` | `undefined` |
| `objectWhere?` | `string` | `undefined` |
| `filterValues?` | `string` | `undefined` |
| `pageName?` | `string` | `undefined` |
| `hideMenuBar?` | `boolean` | `undefined` |

#### Returns

`Promise`\<`void`\>

***

### goExternalURL()

> **goExternalURL**(`url`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |

#### Returns

`Promise`\<`void`\>
