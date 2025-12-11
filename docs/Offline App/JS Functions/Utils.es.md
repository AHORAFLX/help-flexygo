# Utils

Esta sección es una colección de funciones utilitarias que pueden utilizarse en varias partes de la aplicación. Contiene una amplia gama de funcionalidades, desde generar IDs únicos hasta manejar archivos, parsear JSON, traducir claves, ejecutar código dinámico y más.

## Funciones

### GUID()

> **GUID**(): `string`

Genera un identificador único.

#### Devuelve

`string`

Nombre único.

### blobToBase64()

> **blobToBase64**(`blob`): `Promise`\<`unknown`\>

Convierte un Blob a una cadena Base64.

#### Parámetros

| Parámetro | Tipo | Descripción |
| --------- | ----- | ----------- |
| `blob` | `any` | El blob a convertir |

#### Devuelve

`Promise`\<`unknown`\>

Una promesa que se resuelve con la cadena Base64.

### b64toBlob()

> **b64toBlob**(`b64Data`, `contentType`, `sliceSize`): `Blob`

Convierte una cadena Base64 a un Blob.

#### Parámetros

| Parámetro | Tipo | Valor por defecto | Descripción |
| --------- | ----- | ---------------- | ----------- |
| `b64Data` | `any` | `undefined` | La cadena Base64 a convertir |
| `contentType` | `string` | `''` | El tipo de contenido del blob resultante |
| `sliceSize` | `number` | `512` | Tamaño del fragmento en bytes |

#### Devuelve

`Blob`

El blob resultante.

### urlToB64()

> **urlToB64**(`url`): `Promise`\<`unknown`\>

Convierte una URL de imagen a una cadena Base64.

#### Parámetros

| Parámetro | Tipo | Descripción |
| --------- | ----- | ----------- |
| `url` | `any` | La URL a convertir |

#### Devuelve

`Promise`\<`unknown`\>

Una promesa que se resuelve con la cadena Base64.

### b64ToTempFile()

> **b64ToTempFile**(`title`, `base64`): `Promise`\<`WriteFileResult`\>

Guarda una cadena Base64 como un archivo temporal.

#### Parámetros

| Parámetro | Tipo | Descripción |
| --------- | ----- | ----------- |
| `title` | `any` | Nombre del archivo a crear (con extensión) |
| `base64` | `any` | Cadena Base64 a guardar |

#### Devuelve

`Promise`\<`WriteFileResult`\>

Una promesa que se resuelve con la URI del archivo creado.

### blobToTempFile()

> **blobToTempFile**(`title`, `blob`): `Promise`\<`string`\>

Guarda un Blob como un archivo temporal.

#### Parámetros

| Parámetro | Tipo | Descripción |
| --------- | ----- | ----------- |
| `title` | `string` | Nombre del archivo a crear (con extensión) |
| `blob` | `Blob` | Blob a guardar |

#### Devuelve

`Promise`\<`string`\>

La URI del archivo creado.

### urlToBlob()

> **urlToBlob**(`url`): `Promise`\<`unknown`\>

Convierte una URL de imagen en un Blob.

#### Parámetros

| Parámetro | Tipo | Descripción |
| --------- | ----- | ----------- |
| `url` | `any` | La URL a convertir |

#### Devuelve

`Promise`\<`unknown`\>

El Blob resultante.

### parseJSON()

> **parseJSON**(`json`): `any`

Parsea una cadena JSON que puede contener claves sin comillas.

#### Parámetros

| Parámetro | Tipo | Descripción |
| --------- | ----- | ----------- |
| `json` | `string` | Cadena JSON a parsear |

#### Devuelve

`any`

El objeto resultante.

### getFirstRow()

> **getFirstRow**(`objectName`): `Promise`\<`any`\>

Obtiene el filtro necesario para seleccionar la primera fila de un objeto.

#### Parámetros

| Parámetro | Tipo | Descripción |
| --------- | ----- | ----------- |
| `objectName` | `any` | El nombre del objeto |

#### Devuelve

`Promise`\<`any`\>

Cadena de filtro necesaria para seleccionar la primera fila.

### getPrimaryKeysFilter()

> **getPrimaryKeysFilter**(`object`, `row`): `string`

Obtiene un filtro con las claves primarias y valores de una fila.

#### Parámetros

| Parámetro | Tipo | Descripción |
| --------- | ----- | ----------- |
| `object` | [`ObjectConfig`](types.md#objectconfig-1) | Objeto del cual obtener claves primarias |
| `row` | `any` | Fila desde la cual obtener las claves |

#### Devuelve

`string`

Filtro con claves primarias y valores.

### currentDate()

> **currentDate**(): `string`

Obtiene la fecha actual en formato `YYYY-MM-DD`.

#### Devuelve

`string`

Fecha actual.

### currentDateTime()

> **currentDateTime**(): `string`

Obtiene la fecha y hora actual en formato `YYYY-MM-DDTHH:mm:ss`.

#### Devuelve

`string`

Fecha y hora actual.

### currentTime()

> **currentTime**(): `string`

Obtiene la hora actual en formato `HH:mm`.

#### Devuelve

`string`

Hora actual.

### translate()

> **translate**(`key`, `deviceLanguage`): `string`

Traduce una clave a la cultura del usuario o del dispositivo.

#### Parámetros

| Parámetro | Tipo | Valor por defecto | Descripción |
| --------- | ----- | ---------------- | ----------- |
| `key` | `string` | `undefined` | Clave a traducir |
| `deviceLanguage` | `boolean` | `false` | Si true, usa el idioma del dispositivo |

#### Devuelve

`string`

Traducción o la clave si no se encuentra.

### execDynamicCode()

> **execDynamicCode**(`code`): `any`

Ejecuta una cadena como código JavaScript.

#### Parámetros

| Parámetro | Tipo | Descripción |
| --------- | ----- | ----------- |
| `code` | `string` | Código a ejecutar |

#### Devuelve

`any`

Resultado del código.

### execAsyncFunction()

> **execAsyncFunction**(`code`, `param_names`, `param_values`): `Promise`\<`any`\>

Ejecuta código JavaScript dentro de una función async.

#### Parámetros

| Parámetro | Tipo | Valor por defecto | Descripción |
| --------- | ----- | ---------------- | ----------- |
| `code` | `string` | `undefined` | Código de la función |
| `param_names` | `string`[] | `[]` | Nombres de parámetros |
| `param_values` | `any`[] | `[]` | Valores de parámetros |

#### Devuelve

`Promise`\<`any`\>

Resultado de la función.

### hexToRgbA()

> **hexToRgbA**(`hex`, `opacity`): `string`

Convierte un color hex a rgba.

#### Parámetros

| Parámetro | Tipo | Descripción |
| --------- | ----- | ----------- |
| `hex` | `any` | Color hexadecimal |
| `opacity` | `any` | Opacidad (0–1) |

#### Devuelve

`string`

Color rgba.

### getB64MIME()

> **getB64MIME**(`b64`): `string`

Obtiene el tipo MIME de un Base64.

#### Parámetros

| Parámetro | Tipo | Descripción |
| --------- | ----- | ----------- |
| `b64` | `any` | Cadena Base64 |

#### Devuelve

`string`

Tipo MIME.

### getMIMEtype()

> **getMIMEtype**(`fileName`): `any`

Obtiene el tipo MIME según la extensión del archivo.

#### Parámetros

| Parámetro | Tipo | Descripción |
| --------- | ----- | ----------- |
| `fileName` | `any` | Nombre del archivo |

#### Devuelve

`any`

Tipo MIME.

### createNotification()

> **createNotification**(`options`): `void`

Crea una notificación.

#### Parámetros

| Parámetro | Tipo | Descripción |
| --------- | ----- | ----------- |
| `options` | `any` | Opciones de notificación |

#### Devuelve

`void`

### createNotificationWithEvent()

> **createNotificationWithEvent**(`options`, `callBack`): `void`

Crea una notificación que ejecuta un callback cuando se realiza una acción.

#### Parámetros

| Parámetro | Tipo | Descripción |
| --------- | ----- | ----------- |
| `options` | `any` | Opciones de notificación |
| `callBack` | `any` | Función callback |

#### Devuelve

`void`

### openFile()

> **openFile**(`uri`, `MIME`): `void`

Muestra un modal para abrir un archivo.

#### Parámetros

| Parámetro | Tipo | Descripción |
| --------- | ----- | ----------- |
| `uri` | `string` | URI del archivo |
| `MIME` | `string` | Tipo MIME |

#### Devuelve

`void`

### downloadByUrlNavigator()

> **downloadByUrlNavigator**(`url`, `file_name`): `void`

Descarga un archivo desde una URL (solo navegador).

#### Parámetros

| Parámetro | Tipo | Descripción |
| --------- | ----- | ----------- |
| `url` | `any` | URL del archivo |
| `file_name` | `any` | Nombre del archivo |

#### Devuelve

`void`

### downloadByUrlPhone()

> **downloadByUrlPhone**(`url`, `file_name`): `Promise`\<`unknown`\>

Descarga un archivo desde una URL (solo teléfono).

#### Parámetros

| Parámetro | Tipo | Descripción |
| --------- | ----- | ----------- |
| `url` | `any` | URL del archivo |
| `file_name` | `any` | Nombre del archivo |

#### Devuelve

`Promise`\<`unknown`\>

URI del archivo descargado.

### downloadByB64Phone()

> **downloadByB64Phone**(`b64`, `file_name`): `Promise`\<`unknown`\>

Descarga un archivo desde Base64 (solo teléfono).

#### Parámetros

| Parámetro | Tipo | Descripción |
| --------- | ----- | ----------- |
| `b64` | `any` | Base64 del archivo |
| `file_name` | `any` | Nombre del archivo |

#### Devuelve

`Promise`\<`unknown`\>

URI del archivo descargado.

### downloadByB64Navigator()

> **downloadByB64Navigator**(`b64`, `fileName`): `void`

Descarga un archivo desde Base64 (solo navegador).

#### Parámetros

| Parámetro | Tipo | Descripción |
| --------- | ----- | ----------- |
| `b64` | `any` | Base64 del archivo |
| `fileName` | `any` | Nombre del archivo |

#### Devuelve

`void`

### share()

> **share**(`options`): `Promise`\<`void`\>

Comparte un mensaje, archivo o URL usando el widget nativo.

#### Parámetros

| Parámetro | Tipo | Descripción |
| --------- | ----- | ----------- |
| `options` | `any` | Opciones de compartición |

#### Devuelve

`Promise`\<`void`\>

### getNextSevenDates()

> **getNextSevenDates**(): `String`[]

Obtiene las próximas siete fechas en formato `YYYY/MM/DD`.

#### Devuelve

`String`[]

Array con fechas.

### getPing()

> **getPing**(`timeout`): `Promise`\<`number`\>

Hace ping al servidor y devuelve el tiempo en ms.

#### Parámetros

| Parámetro | Tipo | Valor por defecto | Descripción |
| --------- | ----- | ---------------- | ----------- |
| `timeout` | `number` | `0` | Tiempo máximo de espera |

#### Devuelve

`Promise`\<`number`\>

Tiempo en milisegundos.

### getTableFields()

> **getTableFields**(`table_name`): `Promise`\<`string`[]\>

Obtiene los campos de una tabla.

#### Parámetros

| Parámetro | Tipo | Descripción |
| --------- | ----- | ----------- |
| `table_name` | `string` | Nombre de la tabla |

#### Devuelve

`Promise`\<`string`[]\>

Lista de campos.

### getTableFieldsConfig()

> **getTableFieldsConfig**(`table_name`): `Promise`\<[`fieldConfig`](types.md#fieldconfig)[]\>

Obtiene la configuración de los campos de una tabla.

#### Parámetros

| Parámetro | Tipo | Descripción |
| --------- | ----- | ----------- |
| `table_name` | `string` | Nombre de la tabla |

#### Devuelve

`Promise`\<[`fieldConfig`](types.md#fieldconfig)[]\>

Array con FieldName y FieldType.

### sendErrorsLogs()

> **sendErrorsLogs**(): `Promise`\<`void`\>

Envía un correo con los registros de error.

#### Devuelve

`Promise`\<`void`\>

### getOSVersion()

> **getOSVersion**(): `string`

Obtiene la versión del sistema operativo.

#### Devuelve

`string`

La versión del SO o mensajes alternativos.

### hasChangesPending()

> **hasChangesPending**(): `Promise`\<`boolean`\>

Comprueba si hay cambios pendientes por sincronizar.

#### Devuelve

`Promise`\<`boolean`\>

True si hay cambios, false si no.

### isSimilar()

> **isSimilar**(`text_1`, `text_2`, `isUrl`): `boolean`

Compara dos cadenas y devuelve si son similares.

#### Parámetros

| Parámetro | Tipo | Valor por defecto | Descripción |
| --------- | ----- | ---------------- | ----------- |
| `text_1` | `string` | `undefined` | - |
| `text_2` | `string` | `undefined` | - |
| `isUrl` | `boolean` | `false` | Ignora protocolo si es URL |

#### Devuelve

`boolean`

True si son similares.

### showLoading()

> **showLoading**(`message?`): `Promise`\<`HTMLIonLoadingElement`\>

Muestra un modal de carga.

#### Parámetros

| Parámetro | Tipo | Descripción |
| --------- | ----- | ----------- |
| `message?` | `string` | Mensaje opcional |

#### Devuelve

`Promise`\<`HTMLIonLoadingElement`\>

### splitArray()

> **splitArray**(`array`, `split_size`): `any`[]

Divide un array en partes más pequeñas.

#### Parámetros

| Parámetro | Tipo | Valor por defecto | Descripción |
| --------- | ----- | ---------------- | ----------- |
| `array` | `any`[] | `undefined` | Array a dividir |
| `split_size` | `number` | `500` | Tamaño de cada parte |

#### Devuelve

`any`[]

Array de arrays.

### generateQR()

> **generateQR**(`text`, `size`): `string`

Genera un código QR y lo devuelve como Base64.

#### Parámetros

| Parámetro | Tipo | Valor por defecto | Descripción |
| --------- | ----- | ---------------- | ----------- |
| `text` | `any` | `undefined` | Texto a codificar |
| `size` | `number` | `400` | Tamaño en píxeles |

#### Devuelve

`string`

Data URL del QR.

### showQR()

> **showQR**(`text`): `Promise`\<`void`\>

Muestra un código QR en un modal.

#### Parámetros

| Parámetro | Tipo | Descripción |
| --------- | ----- | ----------- |
| `text` | `string` | Texto a codificar |

#### Devuelve

`Promise`\<`void`\>

### getCurrentTime()

> **getCurrentTime**(`showSeconds`): `string`

Obtiene la hora actual en formato `HH:mm` o `HH:mm:ss`.

#### Parámetros

| Parámetro | Tipo | Valor por defecto | Descripción |
| --------- | ----- | ---------------- | ----------- |
| `showSeconds` | `boolean` | `false` | Incluir segundos |

#### Devuelve

`string`

Hora actual.
