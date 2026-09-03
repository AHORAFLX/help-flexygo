# Camera

Camera functions that allow you to take pictures, access gallery images and scan codes using the device camera.

## Functions

### scanCode()

```ts { .no-language }
scanCode(options): Promise<unknown>
```

Scan codes(different types of barcodes and QRs) using device camera

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`BarcodeScannerOptions`](types.md#barcodescanneroptions) | BarcodeScannerOptions object type { {boolean} preferFrontCamera?: Prefer front camera. Supported on iOS and Android. {boolean} showFlipCameraButton?: Show flip camera button. Supported on iOS and Android. {boolean} showTorchButton Show torch button. Supported on iOS and Android. {boolean} disableAnimations?: Disable animations. Supported on iOS only. {boolean} disableSuccessBeep?: Disable success beep. Supported on iOS only. {string} prompt?: Prompt text. Supported on Android only. {string} formats?: Formats separated by commas. Defaults to all formats except `PDF_417` and `RSS_EXPANDED`. Formats: QR_CODE, DATA_MATRIX, UPC_E, UPC_A, EAN_8, EAN_13, CODE_128, CODE_39, CODE_93, CODABAR, ITF, RSS14, RSS_EXPANDED, PDF_417, AZTEC, MSI {string} Orientation?: Orientation. Supported on Android only. Can be set to `portrait` or `landscape`. Defaults to none so the user can rotate the phone and pick an orientation. {boolean} torchOn?: Launch with the torch switched on (if available). Supported on Android only. {number} resultDisplayDuration?: Display scanned text for X ms. 0 suppresses it entirely, default 1500. Supported on Android only. } |

#### Returns

`Promise<unknown>`

- returns a promise that resolves with an object containing the scanned code format, text, and a cancelled boolean

***

### checkCameraPermission()

```ts { .no-language }
checkCameraPermission(): Promise<unknown>
```

Check for camera permissions before doing anything with it

#### Returns

`Promise<unknown>`

- returns a promise that resolves with a boolean indicating if the camera permission is granted

***

### stopScan()

```ts { .no-language }
stopScan(): void
```

Stops the scanning process

#### Returns

`void`

***

### toggleScannerTorch()

```ts { .no-language }
toggleScannerTorch(): void
```

Toggles the device torch (flashlight) on or off

#### Returns

`void`

***

### getPicture()

```ts { .no-language }
getPicture(width, height, quality, typeCrop?, alternativeCam?): Promise<unknown>
```

Take a picture using the device camera app or an alternative camera implementation for older devices

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `width` | `number` | `1000` | The width of the picture in pixels (default is 1000) |
| `height` | `number` | `1000` | The height of the picture in pixels (default is 1000) |
| `quality` | `number` | `50` | The quality of the picture so lowering this value will make images smaller but with a bigger compression (0-100) (default is 50) |
| `typeCrop?` | `any` | `undefined` | The type of cropping to apply to the picture (this is an outdated parameter and has no effect) |
| `alternativeCam?` | `boolean` | `false` | If true, an alternative camera implementation will be used, it's not advised to be used unless your userbase is having problems with older phones (default is false) |

#### Returns

`Promise<unknown>`

- returns a promise that resolves with the base64 string of the picture

***

### getGalleryPicture()

```ts { .no-language }
getGalleryPicture(width, height, quality): Promise<any[]>
```

Asks the user for pictures from the device gallery

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `width` | `number` | `1000` | The width of the picture in pixels (default is 1000) |
| `height` | `number` | `1000` | The height of the picture in pixels (default is 1000) |
| `quality` | `number` | `50` | The quality of the picture so lowering this value will make images smaller but with a bigger compression (0-100) (default is 50) |

#### Returns

`Promise<any[]>`

- returns a promise that resolves with an array of base64 strings of the selected pictures

***

### savePicture()

```ts { .no-language }
savePicture(image): Promise<any>
```

Saves a base64 image string to the local database flxImages table (it's use is not adivesed, you should use flx-imagegallery configuration in practically every case)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `image` | [`ImageObject`](types.md#imageobject) | The image object containing the image data with this properties: {"ImageId", "ObjectName", "ObjectId", "ObjectGUID", "Name", "Descrip", "ImageClassId", "MainImage", "OrderNumber", "CreationDate", "URL", "B64","_isInserted"} |

#### Returns

`Promise<any>`

- returns a promise that resolves when the image is saved
