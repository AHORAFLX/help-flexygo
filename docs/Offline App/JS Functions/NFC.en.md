# NFC

This section contains a collection of functionalities for NFC operations.
It includes methods to initialize NFC, check if it's enabled, read NFC tags, stop reading, convert bytes to string, and show NFC settings.

## Functions

### init()

```ts { .no-language }
init(): Promise<unknown>
```

Initializes the NFC reader and displays a modal to prompt the user to scan an NFC tag.

#### Returns

`Promise<unknown>`

- A promise that resolves when an NFC tag is read.

***

### isEnabled()

```ts { .no-language }
isEnabled(): Promise<any>
```

Checks if NFC is enabled on the device.

#### Returns

`Promise<any>`

- A promise that resolves to true if NFC is enabled, false otherwise.

***

### bytesToString()

```ts { .no-language }
bytesToString(text): string
```

Converts an array of bytes to a string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `text` | `number`[] | The array of bytes to convert. |

#### Returns

`string`

- The resulting string.

***

### showSettings()

```ts { .no-language }
showSettings(): Promise<any>
```

Opens the NFC settings on the device.

#### Returns

`Promise<any>`

- A promise that resolves when the settings are opened.

***

### paintSetNFCModal()

```ts { .no-language }
paintSetNFCModal(): Promise<void>
```

#### Returns

`Promise<void>`
