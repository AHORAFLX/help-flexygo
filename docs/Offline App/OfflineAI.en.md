# Offline AI

## AI Assistants

Before anything you've gotta know that for the offline ai to work you must first configure the [Flexygo AI](/Connectors/OpenAI).

After configuring Flexygo AI, using it at an offline app is as easy as utilizing one of this two functions:

## Using an assistant

With <fh-copy class="link">flexygo.nav.goAI</fh-copy> this function you will be able of navigating to any configured Flexygo AI asstistant.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| setting_id | string | Thee assitant Id of the one you want to navigate to |
| first_message? | string | A message that will be sent as the first message of the chat with the assistant |
| defaults? | string | The defaults for the assistant to parse in its system prompt |
| is_first_message_by_mic? | bool | This is an internal parameter that should not be altered |

![Go AI](/docs_assets/images/offline/GoAi.png "Image 1. Go AI")

## Starting with voice reconition

You can start an AI Assistant directly with a first message that the user asks with its mic using <fh-copy class="link">flexygo.ai.startVoiceRecognition</fh-copy>.

The voice recognition will stop after a moment of silence, and it will automatically navigate to the chat with that message. But iff the user wants to stop it before it just needs to press the mic button.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| setting_id | string | Thee assitant Id of the one you want to navigate to |
| defaults? | string | The defaults for the assistant to parse in its system prompt |

![Voice Recognition](/docs_assets/images/offline/VoiceRecognition.png "Image 2. Voice Recognition")

## Text to speech

Offline app also admits the possibility of turning text into audio. For that we've got the <fh-copy class="link">flexygo.ai.textToSpeech</fh-copy> function:

With this function the text that is given will be read directly to the user.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| text | string | Thee assitant Id of the one you want to navigate to |
| language? | string | You can specify the language of the text so it gets properly pronounced, the format must be like "es-ES" as in any HTML element as seen [here.](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) If its not specified it will get the current user language |
| volume? | decimal | It just indicates how loud will the speech be, can range from 0 to 2. By default it will be set as 1 |
| speed? | decimal | It alters the speed in which the voice will read the text, can range from 0 to 2. By default it will be set as 1 |