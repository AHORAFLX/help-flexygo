# Navigation

## Functions

### goBack()

> **goBack**(`current?`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `current?` | `any` |

#### Returns

`void`

***

### closeModal()

> **closeModal**(`current?`, `data?`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `current?` | `any` |
| `data?` | `any` |

#### Returns

`void`

***

### goHome()

> **goHome**(): `void`

#### Returns

`void`

***

### goSync()

> **goSync**(): `void`

#### Returns

`void`

***

### goLogin()

> **goLogin**(`force_login`): `void`

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `force_login` | `boolean` | `false` |

#### Returns

`void`

***

### goList()

> **goList**(`object`, `pagename`, `filter?`, `defaults?`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `string` |
| `pagename` | `string` |
| `filter?` | `string` |
| `defaults?` | `string` \| `Object` |

#### Returns

`void`

***

### goEdit()

> **goEdit**(`object`, `pagename`, `filter`, `defaults?`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `string` |
| `pagename` | `string` |
| `filter` | `string` |
| `defaults?` | `string` \| `Object` |

#### Returns

`void`

***

### goView()

> **goView**(`object`, `pagename`, `filter`, `defaults?`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `string` |
| `pagename` | `string` |
| `filter` | `string` |
| `defaults?` | `string` \| `Object` |

#### Returns

`void`

***

### goInsert()

> **goInsert**(`object`, `pagename`, `defaults?`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `string` |
| `pagename` | `string` |
| `defaults?` | `string` \| `Object` |

#### Returns

`void`

***

### goGallery()

> **goGallery**(`object`, `objectid`, `defaults?`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `string` |
| `objectid` | `string` |
| `defaults?` | `string` \| `Object` |

#### Returns

`void`

***

### goDocuments()

> **goDocuments**(`object`, `objectid`, `defaults?`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `string` |
| `objectid` | `string` |
| `defaults?` | `string` \| `Object` |

#### Returns

`void`

***

### goAI()

> **goAI**(`setting_id`, `first_message?`, `defaults?`, `is_first_message_by_mic?`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `setting_id` | `string` |
| `first_message?` | `string` |
| `defaults?` | `any` |
| `is_first_message_by_mic?` | `boolean` |

#### Returns

`void`

***

### transferList()

> **transferList**(`object`, `pagename`, `filter?`, `defaults?`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `string` |
| `pagename` | `string` |
| `filter?` | `string` |
| `defaults?` | `string` \| `Object` |

#### Returns

`void`

***

### transferEdit()

> **transferEdit**(`object`, `pagename`, `filter`, `defaults?`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `string` |
| `pagename` | `string` |
| `filter` | `string` |
| `defaults?` | `string` \| `Object` |

#### Returns

`void`

***

### transferView()

> **transferView**(`object`, `pagename`, `filter`, `defaults?`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `string` |
| `pagename` | `string` |
| `filter` | `string` |
| `defaults?` | `string` \| `Object` |

#### Returns

`void`

***

### transferInsert()

> **transferInsert**(`object`, `pagename`, `defaults?`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `string` |
| `pagename` | `string` |
| `defaults?` | `string` \| `Object` |

#### Returns

`void`

***

### transferGallery()

> **transferGallery**(`object`, `objectid`, `defaults?`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `string` |
| `objectid` | `string` |
| `defaults?` | `string` \| `Object` |

#### Returns

`void`

***

### transferDocuments()

> **transferDocuments**(`object`, `objectid`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `string` |
| `objectid` | `string` |

#### Returns

`void`

***

### modalList()

> **modalList**(`object`, `pagename`, `filter?`, `defaults?`): `Promise`\<`OverlayEventDetail`\<`any`\>\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `string` |
| `pagename` | `string` |
| `filter?` | `string` |
| `defaults?` | `string` \| `Object` |

#### Returns

`Promise`\<`OverlayEventDetail`\<`any`\>\>

***

### modalEdit()

> **modalEdit**(`object`, `pagename`, `filter`, `defaults?`): `Promise`\<`OverlayEventDetail`\<`any`\>\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `string` |
| `pagename` | `string` |
| `filter` | `string` |
| `defaults?` | `string` \| `Object` |

#### Returns

`Promise`\<`OverlayEventDetail`\<`any`\>\>

***

### modalView()

> **modalView**(`object`, `pagename`, `filter`, `defaults?`): `Promise`\<`OverlayEventDetail`\<`any`\>\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `string` |
| `pagename` | `string` |
| `filter` | `string` |
| `defaults?` | `string` \| `Object` |

#### Returns

`Promise`\<`OverlayEventDetail`\<`any`\>\>

***

### modalInsert()

> **modalInsert**(`object`, `pagename`, `defaults?`): `Promise`\<`OverlayEventDetail`\<`any`\>\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `string` |
| `pagename` | `string` |
| `defaults?` | `string` \| `Object` |

#### Returns

`Promise`\<`OverlayEventDetail`\<`any`\>\>

***

### goPage()

> **goPage**(`type`, `object`, `pagename`, `filter`, `defaults`, `direction`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `string` |
| `object` | `string` |
| `pagename` | `string` |
| `filter` | `string` |
| `defaults` | `string` \| `Object` |
| `direction` | `RouterDirection` |

#### Returns

`void`

***

### goPageGallDoc()

> **goPageGallDoc**(`type`, `object`, `objectid`, `defaults`, `direction`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `string` |
| `object` | `string` |
| `objectid` | `string` |
| `defaults` | `string` \| `Object` |
| `direction` | `RouterDirection` |

#### Returns

`void`

***

### currentUrl()

> **currentUrl**(): `string`

#### Returns

`string`

***

### \_nav()

> **\_nav**(`url`, `direction`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `any` |
| `direction` | `RouterDirection` |

#### Returns

`Promise`\<`void`\>

***

### \_goMenu()

> **\_goMenu**(`menu`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `menu` | [`MenuConfig`](types.md#menuconfig-1) |

#### Returns

`Promise`\<`void`\>
