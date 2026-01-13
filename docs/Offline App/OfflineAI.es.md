# IA offline

## Assistentes IA

Antes de nada se debe saber que para que funcione la IA en las aplicaciones offline hace falta primero configurar [IA de Flexygo](/Connectors/OpenAI).

Después de haber configurado la IA en flexygo, usarla en la app es tan sencillo como utilizar cualquiera de estas dos funciones:

## Usar un asistente

Con <fh-copy>flexygo.nav.goAI</fh-copy> te permitirá navegar al asistente IA que le indiques.

### Parámetros

| Parametro | Tipo | Descripción |
| ------ | ------ | ------ |
| setting_id | string | En este parámetro tan solo debes indicar el id del asistente al que deseas navegar |
| first_message? | string | Al asignarle un valor la conversación empezará con un mensaje ya enviado por el usuario y el asistente responderá a este |
| defaults? | string | Los defaults a parsear por el asistente en el prompt de sistema |
| is_first_message_by_mic? | bool | Esto es un valor interno que no debería ser alterado |

![Go AI](/docs_assets/images/offline/GoAi.png "Image 1. Go AI")

## Empezar mediante reconocimiento de voz

Puedes iniciar un asistente IA directamente con un mensaje enviado por el usuario usando el micrófono utilizando <fh-copy>flexygo.ai.startVoiceRecognition</fh-copy>.

El reconocimiento de voz se parará automaticamente tras detectar un breve silencio y tras ello navegará a al asistente con el mensaje que haya escuchado ya enviado. De todos modos si el usuario prefiere parar el reconocimiento antes de una pausa puede pulsar el icono del micrófono.

### Parámetros

| Parametro | Tipo | Descripción |
| ------ | ------ | ------ |
| setting_id | string | En este parámetro tan solo debes indicar el id del asistente al que deseas navegar |
| defaults? | string | Los defaults a parsear por el asistente en el prompt de sistema |

![Voice Recognition](/docs_assets/images/offline/VoiceRecognition.png "Image 2. Voice Recognition")

## Texto a voz

La app offline también admite convertir texto en un mensaje de voz mediante la función <fh-copy>flexygo.ai.textToSpeech</fh-copy>:

Con esta función podrás hacer que la app lea al usuario el texto que le especifiques.

### Parámetros

| Parametro | Tipo | Descripción |
| ------ | ------ | ------ |
| text | string | En este parámetro tan solo debes indicar el id del asistente al que deseas navegar |
| language? | string | Puede especificar el idioma del texto para que se pronuncie correctamente. El formato debe ser «es-ES», como en cualquier elemento HTML, tal y como se ve. [aquí.](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) Si no se especifica, se utilizará el idioma actual del usuario. |
| volume? | decimal | Solo indica el volumen del discurso, que puede oscilar entre 0 y 2. Por defecto, se establecerá en 1. |
| speed? | decimal | Altera la velocidad a la que la voz leerá el texto, puede variar entre 0 y 2. Por defecto, se establecerá en 1. |