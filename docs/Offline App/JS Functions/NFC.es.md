# NFC

Esta sección contiene un conjunto de funcionalidades relacionadas con operaciones NFC.  
Incluye métodos para inicializar el lector NFC, comprobar si está activado, leer tags, detener la lectura, convertir bytes a texto y abrir los ajustes NFC del dispositivo.

## Funciones

### init()

```ts { .no-language }
init(): Promise<unknown>
```

Inicializa el lector NFC y muestra un modal solicitando al usuario escanear una etiqueta NFC.

#### Devuelve

`Promise<unknown>`


- Promesa que se resuelve cuando se lee una etiqueta NFC.

---

### isEnabled()

```ts { .no-language }
isEnabled(): Promise<any>
```

Comprueba si el NFC está activado en el dispositivo.

#### Devuelve

`Promise<any>`


- Promesa que devuelve **true** si el NFC está activado, **false** en caso contrario.

---

### bytesToString()

```ts { .no-language }
bytesToString(text): string
```

Convierte un array de bytes en un string.

#### Parámetros

| Parámetro | Tipo | Descripción |
| --------- | -------- | ----------- |
| `text` | `number`[] | Array de bytes a convertir. |

#### Devuelve

`string`


- Cadena resultante de la conversión.

---

### showSettings()

```ts { .no-language }
showSettings(): Promise<any>
```

Abre la pantalla de ajustes NFC del dispositivo.

#### Devuelve

`Promise<any>`


- Promesa que se resuelve cuando los ajustes se han abierto.

---

### paintSetNFCModal()

```ts { .no-language }
paintSetNFCModal(): Promise<void>
```

Muestra el modal para activar NFC.

#### Devuelve

`Promise<void>`

