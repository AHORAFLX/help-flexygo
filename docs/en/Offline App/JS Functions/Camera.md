# Camera

## Functions

### scanCode()

> **scanCode**(`options`): `Promise`\<`unknown`\>

Scan codes using device camera.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`BarcodeScannerOptions`](types.md#barcodescanneroptions) | BarcodeScannerOptions object type { {boolean} preferFrontCamera?: Prefer front camera. Supported on iOS and Android. {boolean} showFlipCameraButton?: Show flip camera button. Supported on iOS and Android. {boolean} showTorchButton Show torch button. Supported on iOS and Android. {boolean} disableAnimations?: Disable animations. Supported on iOS only. {boolean} disableSuccessBeep?: Disable success beep. Supported on iOS only. {string} prompt?: Prompt text. Supported on Android only. {string} formats?: Formats separated by commas. Defaults to all formats except `PDF_417` and `RSS_EXPANDED`. Formats: QR_CODE, DATA_MATRIX, UPC_E, UPC_A, EAN_8, EAN_13, CODE_128, CODE_39, CODE_93, CODABAR, ITF, RSS14, RSS_EXPANDED, PDF_417, AZTEC, MSI {string} Orientation?: Orientation. Supported on Android only. Can be set to `portrait` or `landscape`. Defaults to none so the user can rotate the phone and pick an orientation. {boolean} torchOn?: Launch with the torch switched on (if available). Supported on Android only. {number} resultDisplayDuration?: Display scanned text for X ms. 0 suppresses it entirely, default 1500. Supported on Android only. } |

#### Returns

`Promise`\<`unknown`\>

- if share = false returns promise with pdf base64 object.

#### Method

scanCode

***

### checkCameraPermission()

> **checkCameraPermission**(): `Promise`\<`unknown`\>

#### Returns

`Promise`\<`unknown`\>

***

### stopScan()

> **stopScan**(): `void`

#### Returns

`void`

***

### toggleScannerTorch()

> **toggleScannerTorch**(): `void`

#### Returns

`void`

***

### onFail()

> **onFail**(`message`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `any` |

#### Returns

`void`

***

### getPicture()

> **getPicture**(`myWidth`, `myHeight`, `myQuality`, `typeCrop?`, `alternativeCam?`): `Promise`\<`unknown`\>

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `myWidth` | `number` | `1000` |
| `myHeight` | `number` | `1000` |
| `myQuality` | `number` | `50` |
| `typeCrop?` | `any` | `undefined` |
| `alternativeCam?` | `boolean` | `false` |

#### Returns

`Promise`\<`unknown`\>

***

### stopCamera()

> **stopCamera**(): `void`

#### Returns

`void`

***

### getGalleryPicture()

> **getGalleryPicture**(`myWidth`, `myHeight`, `myQuality`): `Promise`\<`any`[]\>

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `myWidth` | `number` | `1000` |
| `myHeight` | `number` | `1000` |
| `myQuality` | `number` | `50` |

#### Returns

`Promise`\<`any`[]\>

***

### savePicture()

> **savePicture**(`image`): `Promise`\<`any`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `image` | `any` |

#### Returns

`Promise`\<`any`\>

***

### getDefaultImage()

> **getDefaultImage**(): `string`

#### Returns

`string`
