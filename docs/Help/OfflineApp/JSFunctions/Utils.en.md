# Utils

This section is a collection of utility functions that can be used in various parts of the application. It contains a wide range of functionalities, 
from generating unique IDs to handling files, parsing JSON, translating keys, executing dynamic code, and more.

## Functions

### GUID()

```ts { .no-language }
GUID(): string
```

Generates an unique id

#### Returns

`string`

unique name.

***

### blobToBase64()

```ts { .no-language }
blobToBase64(blob): Promise<unknown>
```

Converts a Blob to a Base64 string

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `blob` | `any` | The blob to convert |

#### Returns

`Promise<unknown>`

A promise that resolves with the Base64 as a string

***

### b64toBlob()

```ts { .no-language }
b64toBlob(b64Data, contentType, sliceSize): Blob
```

Converts a Base64 string to a Blob

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `b64Data` | `any` | `undefined` | The Base64 as a string to convert |
| `contentType` | `string` | `''` | The [content type](https://developer.mozilla.org/es/docs/Web/API/Blob/type) of the resulting blob (mus be a [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types/Common_types)) |
| `sliceSize` | `number` | `512` | The slice size in bytes to use while converting |

#### Returns

`Blob`

The resulting blob

***

### urlToB64()

```ts { .no-language }
urlToB64(url): Promise<unknown>
```

Converts an image URL to a Base64 string

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `any` | The URL to convert |

#### Returns

`Promise<unknown>`

A promise that resolves with the Base64 as a string

***

### b64ToTempFile()

```ts { .no-language }
b64ToTempFile(title, base64): Promise<WriteFileResult>
```

Saves a Base64 string as a temporary file

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `title` | `any` | The name of the file to create (with extension) |
| `base64` | `any` | The Base64 string to save as a file |

#### Returns

`Promise<WriteFileResult>`

A promise that resolves with WriteFileResult that contains the URI of the created file

***

### blobToTempFile()

```ts { .no-language }
blobToTempFile(title, blob): Promise<string>
```

Saves a Blob as a temporary file

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `title` | `string` | The name of the file to create (with extension) |
| `blob` | `Blob` | The Blob to save as a file |

#### Returns

`Promise<string>`

A promise that resolves with WriteFileResult that contains the URI of the created file

***

### urlToBlob()

```ts { .no-language }
urlToBlob(url): Promise<unknown>
```

Converts an image URL to a Blob

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `any` | The URL to convert |

#### Returns

`Promise<unknown>`

A promise that resolves with the Blob

***

### parseJSON()

```ts { .no-language }
parseJSON(json): any
```

Parses a JSON string that may have unquoted keys

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `json` | `string` | The JSON string to parse |

#### Returns

`any`

The resulting object

***

### getFirstRow()

```ts { .no-language }
getFirstRow(objectName): Promise<any>
```

Gets the filter needed to select the first row of an object

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `objectName` | `any` | The name of the object |

#### Returns

`Promise<any>`

A promise that resolves with a filter string of the needed to select the first row

***

### getPrimaryKeysFilter()

```ts { .no-language }
getPrimaryKeysFilter(object, row): string
```

Gets a filter string with the primary keys and values of a row

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `object` | [`ObjectConfig`](types.md#objectconfig-1) | The object of which we will get the primary keys |
| `row` | `any` | A row to get the primary keys from |

#### Returns

`string`

A filter string with the primary keys and values of the row

***

### currentDate()

```ts { .no-language }
currentDate(): string
```

Gets the current date in 'YYYY-MM-DD' format

#### Returns

`string`

The current date in 'YYYY-MM-DD' format

***

### currentDateTime()

```ts { .no-language }
currentDateTime(): string
```

Gets the current date and time in 'YYYY-MM-DDTHH:mm:ss' format

#### Returns

`string`

The current date and time in 'YYYY-MM-DDTHH:mm:ss' format

***

### currentTime()

```ts { .no-language }
currentTime(): string
```

Gets the current time in 'HH:mm' format

#### Returns

`string`

The current time in 'HH:mm' format

***

### translate()

```ts { .no-language }
translate(key, deviceLanguage): string
```

Translates a key to the current culture or the device one

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `key` | `string` | `undefined` | The key to translate (x.y) |
| `deviceLanguage` | `boolean` | `false` | If true, the device language will be used instead of the user culture |

#### Returns

`string`

The translated string or the key if not found

***

### execDynamicCode()

```ts { .no-language }
execDynamicCode(code): any
```

Executes an string as JavaScript code

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `code` | `string` | Code that will get executed |

#### Returns

`any`

The result of the executed code

***

### execAsyncFunction()

```ts { .no-language }
execAsyncFunction(code, param_names, param_values): Promise<any>
```

Executes an string as JavaScript code inside a function, doing so async functions can get used

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `code` | `string` | `undefined` | The function code as a string |
| `param_names` | `string`[] | `[]` | An array with the parameter names, if you've got an object asthe parameters list you could use Object.keys(YourObject) |
| `param_values` | `any`[] | `[]` | An array with the parameter values, if you've got an object asthe parameters list you could use Object.values(YourObject) |

#### Returns

`Promise<any>`

A promise that resolves with the result of the function

***

### hexToRgbA()

```ts { .no-language }
hexToRgbA(hex, opacity): string
```

Converts a hex color to an rgba one

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hex` | `any` | The hex color to convert (e.g. '#ff0000') |
| `opacity` | `any` | The opacity of the resulting color (0 to 1) |

#### Returns

`string`

The resulting rgba color (e.g. 'rgba(255,0,0,0.5)')

***

### getB64MIME()

```ts { .no-language }
getB64MIME(b64): string
```

Gets the MIME type of a Base64 string

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `b64` | `any` | The base64 string |

#### Returns

`string`

The MIME type

***

### getMIMEtype()

```ts { .no-language }
getMIMEtype(fileName): any
```

Gets the MIME type of a file by its extension

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fileName` | `any` | The name of the file |

#### Returns

`any`

The MIME type

***

### createNotification()

```ts { .no-language }
createNotification(options): void
```

Creates a notification

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `any` | The notification options ([ScheduleOptions](https://capacitorjs.com/docs/apis/local-notifications#scheduleoptions) of the Capacitor LocalNotifications plugin) |

#### Returns

`void`

***

### createNotificationWithEvent()

```ts { .no-language }
createNotificationWithEvent(options, callBack): void
```

Creates a notification that will trigger a callback when an [action is perfomed](https://capacitorjs.com/docs/apis/local-notifications#addlistenerlocalnotificationactionperformed-)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `any` | The notification options ([ScheduleOptions](https://capacitorjs.com/docs/apis/local-notifications#scheduleoptions) of the Capacitor LocalNotifications plugin) |
| `callBack` | `any` | A function that will get called when the notification is clicked |

#### Returns

`void`

***

### openFile()

```ts { .no-language }
openFile(uri, MIME): void
```

Shows a modal to open a file

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `uri` | `string` | The URI of the file to open |
| `MIME` | `string` | The MIME type of the file to open |

#### Returns

`void`

***

### downloadByUrlNavigator()

```ts { .no-language }
downloadByUrlNavigator(url, file_name): void
```

Given an URL, downloads the file (only when running in a browser)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `any` | The URL of the file to download |
| `file_name` | `any` | The name of the file to download (with extension) |

#### Returns

`void`

***

### downloadByUrlPhone()

```ts { .no-language }
downloadByUrlPhone(url, file_name): Promise<unknown>
```

Given an URL, downloads the file (only when running in a phone)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `any` | The URL of the file to download |
| `file_name` | `any` | The name of the file to download (with extension) |

#### Returns

`Promise<unknown>`

A promise that resolves with the URI of the downloaded file

***

### downloadByB64Phone()

```ts { .no-language }
downloadByB64Phone(b64, file_name): Promise<unknown>
```

Given a Base64 string, downloads the file (only when running in a phone)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `b64` | `any` | The Base64 string of the file to download |
| `file_name` | `any` | The name of the file to download (with extension) |

#### Returns

`Promise<unknown>`

A promise that resolves with the URI of the downloaded file

***

### downloadByB64Navigator()

```ts { .no-language }
downloadByB64Navigator(b64, fileName): void
```

Given a Base64 string, downloads the file (only when running in a browser)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `b64` | `any` | The Base64 string of the file to download |
| `fileName` | `any` | The name of the file to download (with extension) |

#### Returns

`void`

***

### share()

```ts { .no-language }
share(options): Promise<void>
```

Shares a message, file or URL using the native share widget

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `any` | The sharing options: { message: STRING, //No Not supported on Facebook and Instagram subject: STRING, //For mail apps files: Array, //Files array with the files to share url: STRING, //URL to share chooserTitle: STRING, //Pop up title appPackageName: STRING, //App Id to share with (Android only) iPadCoordinates: STRING //Message coordinates where the share pop up will be shown. Formatted with x,y,width,height. e.g: '0,0,0,0' (iOS only) } |

#### Returns

`Promise<void>`

***

### getNextSevenDates()

```ts { .no-language }
getNextSevenDates(): String[]
```

Gets the next seven dates starting from today in 'YYYY/MM/DD' format

#### Returns

`String[]`

An array with the next seven dates in 'YYYY/MM/DD' format

***

### getPing()

```ts { .no-language }
getPing(timeout): Promise<number>
```

Pings the server and returns the time it took to reachin milliseconds

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `timeout` | `number` | `0` | The maximum time in milliseconds to wait for a response. If the timeout is reached the promise will get rejected |

#### Returns

`Promise<number>`

A promise that resolves with the time it took in milliseconds

***

### getTableFields()

```ts { .no-language }
getTableFields(table_name): Promise<string[]>
```

Gets the fields of a table

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `table_name` | `string` | The name of the table |

#### Returns

`Promise<string[]>`

A promise that resolves with an array the table fields in string format

***

### getTableFieldsConfig()

```ts { .no-language }
getTableFieldsConfig(table_name): Promise<[fieldConfig](types.md#fieldconfig)[]>
```

Gets the configuration of the fields of a table

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `table_name` | `string` | The name of the table |

#### Returns

`Promise<[fieldConfig](types.md#fieldconfig)[]>`

A promise that resolves with an array the table fields with its FieldName and FieldType

***

### sendErrorsLogs()

```ts { .no-language }
sendErrorsLogs(): Promise<void>
```

Sends an email with all the error logs

#### Returns

`Promise<void>`

***

### getOSVersion()

```ts { .no-language }
getOSVersion(): string
```

Gets the OS version

#### Returns

`string`

The OS version or 'Emulator' if not running in a device or 'OS unrecognized' if the OS is either Android, iOS or an emulator

***

### hasChangesPending()

```ts { .no-language }
hasChangesPending(): Promise<boolean>
```

Checks if there are any changes pending to be synced

#### Returns

`Promise<boolean>`

A promise that resolves with true if there are changes pending or false if not

***

### isSimilar()

```ts { .no-language }
isSimilar(text_1, text_2, isUrl): boolean
```

Compares two strings and returns true if they are similar (just ignoring leading and trailing spaces and case, and protocol if isUrl is true)

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `text_1` | `string` | `undefined` | - |
| `text_2` | `string` | `undefined` | - |
| `isUrl` | `boolean` | `false` | If true, the strings will be compared as URLs (ignoring 'http' and 'https') |

#### Returns

`boolean`

True if the strings are similar, false if not

***

### showLoading()

```ts { .no-language }
showLoading(message?): Promise<HTMLIonLoadingElement>
```

Shows a loading modal

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message?` | `string` | An optional message to show in the loading modal |

#### Returns

`Promise<HTMLIonLoadingElement>`

A promise that resolves with the loading element

***

### splitArray()

```ts { .no-language }
splitArray(array, split_size): any[]
```

Splits an array into smaller arrays of a given size

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `array` | `any`[] | `undefined` | The array to split |
| `split_size` | `number` | `500` | The size of the smaller arrays |

#### Returns

`any[]`

An array of smaller arrays

***

### generateQR()

```ts { .no-language }
generateQR(text, size): string
```

Creates a QR code and returns it as a base64

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `text` | `any` | `undefined` | The text to encode in the QR code |
| `size` | `number` | `400` | The size of the QR code in pixels (default is 400) |

#### Returns

`string`

The data URL of the generated QR code

***

### showQR()

```ts { .no-language }
showQR(text): Promise<void>
```

Shows a QR code in a modal

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `text` | `string` | The text to encode in the QR code |

#### Returns

`Promise<void>`

A promise that resolves when the modal is dismissed

***

### getCurrentTime()

```ts { .no-language }
getCurrentTime(showSeconds): string
```

Gets the current time in 'HH:mm' format or 'HH:mm:ss' if showSeconds is true

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `showSeconds` | `boolean` | `false` | If true, the seconds will be included in the result |

#### Returns

`string`

The current time in 'HH:mm' format or 'HH:mm:ss' if showSeconds is true
