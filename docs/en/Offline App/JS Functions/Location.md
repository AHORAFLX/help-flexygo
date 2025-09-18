# GPS

## Functions

### getCoords()

> **getCoords**(`geoTimeout`, `maximumAge`): `Promise`\<`Position`\>

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `geoTimeout` | `number` | `10000` |
| `maximumAge` | `number` | `10` |

#### Returns

`Promise`\<`Position`\>

***

### requestGPSStatus()

> **requestGPSStatus**(): `Promise`\<`any`\>

Requests gps permission and returns the status after the user has interacted with the message

#### Returns

`Promise`\<`any`\>

Possible values: GRANTED, DENIED, DENIED_ONCE, NOT_REQUESTED, DENIED_ALWAYS, RESTRICTED, GRANTED_WHEN_IN_USE;

***

### requestGPSPermission()

> **requestGPSPermission**(): `Promise`\<`boolean`\>

Requests gps permission and when user has denied always it will navigate to app settings

#### Returns

`Promise`\<`boolean`\>

Promise with a result of true when gps is granted and false when it isn't

***

### requestGPSActivation()

> **requestGPSActivation**(): `Promise`\<`boolean`\>

Asks user to activate gps

#### Returns

`Promise`\<`boolean`\>

Promise with a result of true when gps is activated and false when it isn't

***

### showActivationMsg()

> **showActivationMsg**(`activateBackLocation`, `permissionRequest`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `activateBackLocation` | `boolean` |
| `permissionRequest` | `boolean` |

#### Returns

`Promise`\<`void`\>

***

### isGPSOff()

> **isGPSOff**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>
