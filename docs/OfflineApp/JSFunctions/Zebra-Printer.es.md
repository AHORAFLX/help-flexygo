# Zebra Printer

Esta sección contiene una colección de funcionalidades para operaciones con impresoras Zebra.  
Incluye métodos para mostrar impresoras disponibles, obtener impresoras disponibles, imprimir texto, obtener el estado de la impresora y habilitar el Bluetooth.

## Funciones

### showAvailablePrinters()

```ts { .no-language }
showAvailablePrinters(): Promise<unknown>
```

Muestra un modal con la lista de impresoras bluetooth disponibles y devuelve la dirección MAC de la impresora seleccionada.

#### Devuelve

`Promise<unknown>`

- Una promesa que se resuelve con la dirección MAC de la impresora seleccionada.

### getAvailablePrinters()

```ts { .no-language }
getAvailablePrinters(): Promise<BluetoothDevices[]>
```

Obtiene la lista de impresoras bluetooth disponibles.

#### Devuelve

`Promise<BluetoothDevices[]>`

- Una promesa que se resuelve con un array de [impresoras bluetooth disponibles](https://github.com/Limbertfenixio/capacitor-ble-printer?tab=readme-ov-file#bluetoothdevices).

### print()

```ts { .no-language }
print(mac_address, text): Promise<any>
```

Imprime texto en una impresora bluetooth especificada.

#### Parámetros

| Parámetro | Tipo | Descripción |
| --------- | ------ | ----------- |
| `mac_address` | `string` | La dirección MAC de la impresora bluetooth. |
| `text` | `string` | El texto a imprimir en formato ZPL. |

#### Devuelve

`Promise<any>`

- Una promesa que se resuelve cuando el trabajo de impresión es enviado.

### getStatusOfPrinter()

```ts { .no-language }
getStatusOfPrinter(mac_address): Promise<string>
```

Obtiene el estado de una impresora bluetooth especificada.

#### Parámetros

| Parámetro | Tipo | Descripción |
| --------- | ------ | ----------- |
| `mac_address` | `string` | La dirección MAC de la impresora bluetooth. |

#### Devuelve

`Promise<string>`

- Una promesa que se resuelve con el estado de la impresora.

### enableBluetooth()

```ts { .no-language }
enableBluetooth(): Promise<boolean>
```

Habilita el Bluetooth en el dispositivo si aún no está activado.  
También comprueba los permisos necesarios y los solicita si no han sido concedidos.

#### Devuelve

`Promise<boolean>`

- Una promesa que se resuelve en true si el Bluetooth está habilitado y los permisos han sido concedidos, o false en caso contrario.
