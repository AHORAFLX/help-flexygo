# Zebra Printer

This section contains a collection of functionalities for Zebra printer operations.
It includes methods to show available printers, get available printers, print text, get printer status, and enable Bluetooth.

## Functions

### showAvailablePrinters()

> **showAvailablePrinters**(): `Promise`\<`unknown`\>

Shows a modal with the list of available bluetooth printers and returns the mac address of the selected printer.

#### Returns

`Promise`\<`unknown`\>

- A promise that resolves to the mac address of the selected printer.

***

### getAvailablePrinters()

> **getAvailablePrinters**(): `Promise`\<`BluetoothDevices`[]\>

Gets the list of available bluetooth printers.

#### Returns

`Promise`\<`BluetoothDevices`[]\>

- A promise that resolves to an array of available [bluetooth printers](https://github.com/Limbertfenixio/capacitor-ble-printer?tab=readme-ov-file#bluetoothdevices).

***

### print()

> **print**(`mac_address`, `text`): `Promise`\<`any`\>

Prints text to a specified bluetooth printer.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `mac_address` | `string` | The mac address of the bluetooth printer. |
| `text` | `string` | The text to print in ZPL format. |

#### Returns

`Promise`\<`any`\>

- A promise that resolves when the print job is sent.

***

### getStatusOfPrinter()

> **getStatusOfPrinter**(`mac_address`): `Promise`\<`string`\>

Gets the status of a specified bluetooth printer.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `mac_address` | `string` | The mac address of the bluetooth printer. |

#### Returns

`Promise`\<`string`\>

- A promise that resolves to the status of the printer.

***

### enableBluetooth()

> **enableBluetooth**(): `Promise`\<`boolean`\>

Enables Bluetooth on the device if it is not already enabled.
It also checks for necessary permissions and requests them if not granted.

#### Returns

`Promise`\<`boolean`\>

- A promise that resolves to true if Bluetooth is enabled and permissions are granted, otherwise false.
