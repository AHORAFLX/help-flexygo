# Cámara

Funciones de cámara que permiten hacer fotos, acceder a imágenes de la galerí­a y escanear códigos usando la cámara del dispositivo.

## Funciones

### scanCode()

```ts { .no-language }
scanCode(options): Promise<unknown>
```

Escanea códigos (diferentes tipos de códigos de barras y QR) utilizando la cámara del dispositivo.

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------ | ------ | ------ |
| `options` | [`BarcodeScannerOptions`](types.md#barcodescanneroptions) | Objeto BarcodeScannerOptions con: { {boolean} preferFrontCamera?: Preferir cámara frontal (iOS/Android). {boolean} showFlipCameraButton?: Mostrar botón para cambiar de cámara (iOS/Android). {boolean} showTorchButton?: Mostrar botón de linterna (iOS/Android). {boolean} disableAnimations?: Desactivar animaciones (solo iOS). {boolean} disableSuccessBeep?: Desactivar sonido de éxito (solo iOS). {string} prompt?: Texto de aviso (solo Android). {string} formats?: Formatos separados por comas. Por defecto todos excepto `PDF_417` y `RSS_EXPANDED`. Formatos disponibles: QR_CODE, DATA_MATRIX, UPC_E, UPC_A, EAN_8, EAN_13, CODE_128, CODE_39, CODE_93, CODABAR, ITF, RSS14, RSS_EXPANDED, PDF_417, AZTEC, MSI {string} orientation?: Orientación (solo Android). Puede ser `portrait` o `landscape`. Por defecto ninguna, permitiendo rotación libre. {boolean} torchOn?: Iniciar con linterna encendida (solo Android). {number} resultDisplayDuration?: Mostrar texto escaneado durante X ms (por defecto 1500, 0 lo oculta). } |

#### Devuelve

`Promise<unknown>`


- Devuelve un objeto con el formato del código, el texto y un boolean indicando si se canceló.

***

### checkCameraPermission()

```ts { .no-language }
checkCameraPermission(): Promise<unknown>
```

Comprueba los permisos de cámara antes de usarla.

#### Devuelve

`Promise<unknown>`


- Devuelve un boolean indicando si el permiso fue concedido.

***

### stopScan()

```ts { .no-language }
stopScan(): void
```

Detiene el proceso de escaneo.

#### Devuelve

`void`


***

### toggleScannerTorch()

```ts { .no-language }
toggleScannerTorch(): void
```

Activa o desactiva la linterna del dispositivo.

#### Devuelve

`void`


***

### getPicture()

```ts { .no-language }
getPicture(width, height, quality, typeCrop?, alternativeCam?): Promise<unknown>
```

Realiza una fotografí­a usando la app de cámara del dispositivo o una implementación alternativa para dispositivos antiguos.

#### Parámetros

| Parámetro | Tipo | Valor por defecto | Descripción |
| ------ | ------ | ------ | ------ |
| `width` | `number` | `1000` | Anchura en pí­xeles de la imagen |
| `height` | `number` | `1000` | Altura en pí­xeles de la imagen |
| `quality` | `number` | `50` | Calidad de la imagen (0â€“100). Un valor menor reduce peso pero comprime más |
| `typeCrop?` | `any` | `undefined` | Tipo de recorte (obsoleto, no tiene efecto) |
| `alternativeCam?` | `boolean` | `false` | Usa una cámara alternativa (solo si hay problemas en móviles muy antiguos) |

#### Devuelve

`Promise<unknown>`


- Devuelve un string base64 con la imagen capturada.

***

### getGalleryPicture()

```ts { .no-language }
getGalleryPicture(width, height, quality): Promise<any[]>
```

Solicita al usuario seleccionar imágenes desde la galerí­a del dispositivo.

#### Parámetros

| Parámetro | Tipo | Valor por defecto | Descripción |
| ------ | ------ | ------ | ------ |
| `width` | `number` | `1000` | Anchura en pí­xeles |
| `height` | `number` | `1000` | Altura en pí­xeles |
| `quality` | `number` | `50` | Calidad de la imagen (0â€“100) |

#### Devuelve

`Promise<any[]>`


- Devuelve un array de strings base64 de las imágenes seleccionadas.

***

### savePicture()

```ts { .no-language }
savePicture(image): Promise<any>
```

Guarda una imagen base64 en la base de datos local (tabla flxImages). *No se recomienda su uso salvo en casos muy especí­ficos; normalmente debe usarse la configuración de flx-imagegallery.*

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------ | ------ | ------ |
| `image` | [`ImageObject`](types.md#imageobject) | Objeto imagen con propiedades: {"ImageId", "ObjectName", "ObjectId", "ObjectGUID", "Name", "Descrip", "ImageClassId", "MainImage", "OrderNumber", "CreationDate", "URL", "B64","_isInserted"} |

#### Devuelve

`Promise<any>`


- Finaliza cuando la imagen ha sido guardada.
