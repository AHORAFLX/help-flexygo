# Zebra Printer

## Functions

### showAvailablePrinters()

> **showAvailablePrinters**(): `Promise`\<`unknown`\>

#### Returns

`Promise`\<`unknown`\>

***

### getAvailablePrinters()

> **getAvailablePrinters**(): `Promise`\<`BluetoothDevices`[]\>

#### Returns

`Promise`\<`BluetoothDevices`[]\>

***

### print()

> **print**(`mac_address`, `text`): `Promise`\<`any`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `mac_address` | `string` |
| `text` | `string` |

#### Returns

`Promise`\<`any`\>

***

### getStatusOfPrinter()

> **getStatusOfPrinter**(`mac_address`): `Promise`\<`string`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `mac_address` | `string` |

#### Returns

`Promise`\<`string`\>

***

### enableBluetooth()

> **enableBluetooth**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>
