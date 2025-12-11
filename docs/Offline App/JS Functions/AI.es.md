# IA

Actualmente la aplicación de flexygo contiene dos capacidades de IA: los asistentes de IA y la conversión de texto a voz (text-to-speech).  
Para utilizar cualquiera de ellas emplearemos **flexygo.ai.function_name**.

## Funciones

### startVoiceRecognition()

> **startVoiceRecognition**(`setting_id`, `defaults`): `void`

Abre un modal que escuchará todo lo que digas y, al terminar de hablar o pulsar el botón del micrófono, abrirá el asistente deseado enviando automáticamente el mensaje reconocido, para que la IA responda directamente leyéndolo en voz alta.

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------ | ------ | ------ |
| `setting_id` | `string` | El **ID de configuración** del asistente (ver sección OpenAI Connectors) |
| `defaults` | `string` | Los valores por defecto que se incluirán en el prompt del asistente |

#### Devuelve

`void`

***

### textToSpeech()

> **textToSpeech**(`text`, `language?`, `volume?`, `speed?`): `Promise`\<`boolean`\>

Cualquier texto enviado será leído en voz alta por la aplicación.

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------ | ------ | ------ |
| `text` | `string` | Texto que se leerá en voz alta |
| `language?` | `string` | Idioma en el que la IA leerá el mensaje. Por defecto usa el idioma del usuario. Debe seguir el estándar [BCP 47](https://www.techonthenet.com/js/language_tags.php) |
| `volume?` | `number` | Volumen de lectura, entre 0.0 y 1.0. Por defecto es 1 |
| `speed?` | `number` | Velocidad de lectura, entre 0.1 y 10.0. Por defecto es 1 |

#### Devuelve

`Promise`\<`boolean`\>  
Una promesa que finaliza cuando la IA termina de hablar.

***

### stopTextToSpeech()

> **stopTextToSpeech**(): `Promise`\<`void`\>

Detiene la lectura de texto si se está reproduciendo.

#### Devuelve

`Promise`\<`void`\>  
Una promesa que finaliza cuando la lectura se detiene.

***

### toggleTextToSpeech()

> **toggleTextToSpeech**(`text`, `language?`, `volume?`, `speed?`): `Promise`\<`void`\> \| `Promise`\<`boolean`\>

Lee en voz alta el texto indicado, a menos que la IA ya esté hablando; en ese caso, la detiene.

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------ | ------ | ------ |
| `text` | `string` | Texto que se leerá en voz alta |
| `language?` | `string` | Idioma de lectura (BCP 47). Por defecto usa el idioma del usuario |
| `volume?` | `number` | Volumen, entre 0.0 y 1.0 |
| `speed?` | `number` | Velocidad, entre 0.1 y 10.0 |

#### Devuelve

`Promise`\<`void`\> \| `Promise`\<`boolean`\>  
Finaliza cuando la acción solicitada (reproducir o detener) haya terminado.
