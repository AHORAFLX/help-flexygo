# Utils

Una prueba

## Variables

### colors

> **colors**: `string`[]

## Functions

### GUID()

> **GUID**(): `string`

Generates an unique id

#### Returns

`string`

unique name.

#### Method

GUID

***

### blobToBase64()

> **blobToBase64**(`blob`): `Promise`\<`unknown`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `blob` | `any` |

#### Returns

`Promise`\<`unknown`\>

***

### b64toBlob()

> **b64toBlob**(`b64Data`, `contentType`, `sliceSize`): `Blob`

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `b64Data` | `any` | `undefined` |
| `contentType` | `string` | `''` |
| `sliceSize` | `number` | `512` |

#### Returns

`Blob`

***

### urlToB64()

> **urlToB64**(`url`): `Promise`\<`unknown`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `any` |

#### Returns

`Promise`\<`unknown`\>

***

### b64ToTempFile()

> **b64ToTempFile**(`title`, `base64`): `Promise`\<`WriteFileResult`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `title` | `any` |
| `base64` | `any` |

#### Returns

`Promise`\<`WriteFileResult`\>

***

### blobToTempFile()

> **blobToTempFile**(`title`, `blob`): `Promise`\<`string`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `title` | `string` |
| `blob` | `Blob` |

#### Returns

`Promise`\<`string`\>

***

### urlToBlob()

> **urlToBlob**(`url`): `Promise`\<`unknown`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `any` |

#### Returns

`Promise`\<`unknown`\>

***

### parseJSON()

> **parseJSON**(`json`): `any`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `json` | `string` |

#### Returns

`any`

***

### getFirstRow()

> **getFirstRow**(`objectName`): `Promise`\<`any`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `objectName` | `any` |

#### Returns

`Promise`\<`any`\>

***

### getPrimaryKeysFilter()

> **getPrimaryKeysFilter**(`obj`, `row`): `string`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `obj` | [`ObjectConfig`](types.md#objectconfig-1) |
| `row` | `any` |

#### Returns

`string`

***

### currentDate()

> **currentDate**(): `string`

#### Returns

`string`

***

### currentDateTime()

> **currentDateTime**(): `string`

#### Returns

`string`

***

### currentTime()

> **currentTime**(): `string`

#### Returns

`string`

***

### translate()

> **translate**(`key`, `deviceLanguage`): `string`

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `key` | `string` | `undefined` |
| `deviceLanguage` | `boolean` | `false` |

#### Returns

`string`

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

### execAsyncFunction()

> **execAsyncFunction**(`jsFunction`, `paramNames`, `paramValues`): `Promise`\<`any`\>

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `jsFunction` | `string` | `undefined` |
| `paramNames` | `string`[] | `[]` |
| `paramValues` | `any`[] | `[]` |

#### Returns

`Promise`\<`any`\>

***

### hexToRgbA()

> **hexToRgbA**(`hex`, `opacity`): `string`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `hex` | `any` |
| `opacity` | `any` |

#### Returns

`string`

***

### getB64MIME()

> **getB64MIME**(`b64`): `string`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `b64` | `any` |

#### Returns

`string`

***

### getMIMEtype()

> **getMIMEtype**(`fileName`): `any`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fileName` | `any` |

#### Returns

`any`

***

### createNotification()

> **createNotification**(`options`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `any` |

#### Returns

`void`

***

### createNotificationWithEvent()

> **createNotificationWithEvent**(`options`, `callBack`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `any` |
| `callBack` | `any` |

#### Returns

`void`

***

### openFile()

> **openFile**(`uri`, `fileMIME`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `uri` | `string` |
| `fileMIME` | `string` |

#### Returns

`void`

***

### downloadByUrlNavigator()

> **downloadByUrlNavigator**(`url`, `fileName`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `any` |
| `fileName` | `any` |

#### Returns

`void`

***

### downloadByUrlPhone()

> **downloadByUrlPhone**(`url`, `fileName`): `Promise`\<`unknown`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `any` |
| `fileName` | `any` |

#### Returns

`Promise`\<`unknown`\>

***

### downloadByB64Phone()

> **downloadByB64Phone**(`data`, `fileName`): `Promise`\<`unknown`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `any` |
| `fileName` | `any` |

#### Returns

`Promise`\<`unknown`\>

***

### downloadByB64Navigator()

> **downloadByB64Navigator**(`b64`, `fileName`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `b64` | `any` |
| `fileName` | `any` |

#### Returns

`void`

***

### share()

> **share**(`options`): `Promise`\<`void`\>

Opciones posibles:
message: STRING, //No soportado por ciertas apps (Facebook, Instagram)
subject: STRING, //Para aplicaciones de email
files: Array,    //Un array ocon los ficheros a compartir, locales o remotos
url: STRING,     //URL a compartir    
chooserTitle: STRING, //Título del pop up
appPackageName: STRING, //Id de la app con la que compartir (Sólo para Android)
iPadCoordinates: STRING //Coordenadas para el mensaje. Formateado con x,y,width,height. ej: '0,0,0,0' (sólo para IOS)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `any` |

#### Returns

`Promise`\<`void`\>

***

### getNextSevenDates()

> **getNextSevenDates**(): `String`[]

#### Returns

`String`[]

***

### getPing()

> **getPing**(`timeout`): `Promise`\<`number`\>

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `timeout` | `number` | `0` |

#### Returns

`Promise`\<`number`\>

***

### getTableFields()

> **getTableFields**(`tableName`): `Promise`\<`string`[]\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tableName` | `string` |

#### Returns

`Promise`\<`string`[]\>

***

### getTableFieldsConfig()

> **getTableFieldsConfig**(`tableName`): `Promise`\<[`fieldConfig`](types.md#fieldconfig)[]\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tableName` | `string` |

#### Returns

`Promise`\<[`fieldConfig`](types.md#fieldconfig)[]\>

***

### sendErrorsLogs()

> **sendErrorsLogs**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### getOSVersion()

> **getOSVersion**(): `string`

#### Returns

`string`

***

### hasChangesPending()

> **hasChangesPending**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

***

### isSimilar()

> **isSimilar**(`text1`, `text2`, `isUrl`): `boolean`

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `text1` | `string` | `undefined` |
| `text2` | `string` | `undefined` |
| `isUrl` | `boolean` | `false` |

#### Returns

`boolean`

***

### showLoading()

> **showLoading**(`message?`): `Promise`\<`HTMLIonLoadingElement`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

#### Returns

`Promise`\<`HTMLIonLoadingElement`\>

***

### splitArray()

> **splitArray**(`array`, `split_size`): `any`[]

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `array` | `any`[] | `undefined` |
| `split_size` | `number` | `500` |

#### Returns

`any`[]

***

### generateQR()

> **generateQR**(`text`, `size`): `string`

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `text` | `any` | `undefined` |
| `size` | `number` | `400` |

#### Returns

`string`

***

### showQR()

> **showQR**(`text`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |

#### Returns

`Promise`\<`void`\>

***

### getCurrentTime()

> **getCurrentTime**(`showSeconds`): `string`

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `showSeconds` | `boolean` | `false` |

#### Returns

`string`
