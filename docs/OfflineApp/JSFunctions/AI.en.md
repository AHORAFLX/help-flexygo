# AI

Currently flexygo's app does contain two possible AI capabilities, the AI assistants and text to speech.
For using any of them we will use flexygo.ai.function_name

## Functions

### startVoiceRecognition()

```ts { .no-language }
startVoiceRecognition(setting_id, defaults): void
```

It opens a modal which will listen anything you say and after you end talking, or you press the mic button, it will open the desired assistant with you already
having sent the message you said so the AI directly responds to it, reading out loud its response.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `setting_id` | `string` | The [setting id](../../../Connectors/OpenAI) that identifies the assistant |
| `defaults` | `string` | The defaults that will be parsed on the assistant prompt |

#### Returns

`void`

***

### textToSpeech()

```ts { .no-language }
textToSpeech(text, language?, volume?, speed?): Promise<boolean>
```

Any text that is sent will be read out loud by the app.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `text` | `string` | The text that will be read out loud |
| `language?` | `string` | The language in which the AI will read the message, by default it will use the users language. Languages needs to be specified in [BCP 47](https://www.techonthenet.com/js/language_tags.php) |
| `volume?` | `number` | The loudness in which the assistant will talk, it goes from 0.0 to 1.0. By default it'll be 1 |
| `speed?` | `number` | The speed in which the assistant will talk, it goes from 0.1 to 10.0. By default it'll be 1 |

#### Returns

`Promise<boolean>`

A promise that ends when the assistant ends speaking

***

### stopTextToSpeech()

```ts { .no-language }
stopTextToSpeech(): Promise<void>
```

Stops the text to speech if there's any playing

#### Returns

`Promise<void>`

A promise that ends when the assistant gets stopped

***

### toggleTextToSpeech()

```ts { .no-language }
toggleTextToSpeech(text, language?, volume?, speed?): Promise<void> | Promise<boolean>
```

Any text that is sent will be read out loud by the app unless if the assistant is already talking in which case it will stop it from speaking.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `text` | `string` | The text that will be read out loud |
| `language?` | `string` | The language in which the AI will read the message, by default it will use the users language. Languages needs to be specified in [BCP 47](https://www.techonthenet.com/js/language_tags.php) |
| `volume?` | `number` | The loudness in which the assistant will talk, it goes from 0.0 to 1.0. By default it'll be 1 |
| `speed?` | `number` | The speed in which the assistant will talk, it goes from 0.1 to 10.0. By default it'll be 1 |

#### Returns

`Promise<void> | Promise<boolean>`

A promise that ends when one of the actions ends
