App description Common JS Functions Creating App Design Environment Designing App Navigation Options Return Data Process Useful Tokens Tracking Configuration Database Debugging App/Emulator differences Offline AI

# **flexygo** Offline AI

### AI Assistants

Before anything you've gotta know that for the offline ai to work you must first configure the Flexygo AI.

After configuring Flexygo AI, using it at an offline app is as easy as utilizing one of this two functions:

##### **flexygo.nav.goAI:**

With this function you will be able of navigating to any configured Flexygo AI asstistant.

**Parameters:**

**\-Setting Id:** Here you just need to specify Assitant Id of the one you want to navigate to.

**\-First Message (optional):** If you want to start the chat with an already sent message by the user you just need to specify that message here.

![Go AI](./img/Help/offline/GoAi.png "Image 1. Go AI")

Image 1. Go AI

##### flexygo.ai.startVoiceRecognition:

You can start an AI Assistant directly with a first message that the user asks with its mic.

The voice recognition will stop after a moment of silence, and it will automatically navigate to the chat with that message. But iff the user wants to stop it before it just needs to press the mic button.

**Parameters:**

**\-Setting Id:** Here you just need to specify Assitant Id of the one you want to navigate to.

![Voice Recognition](./img/Help/offline/VoiceRecognition.png "Image 2. Voice Recognition")

Image 2. Voice Recognition

### Text to speech

Offline app also admits the possibility of turning text into audio. For that we've got the following function:

##### flexygo.ai.textToSpeech:

With this function the text that is given will be read directly to the user.

**Parameters:**

**\-Text:** This is just the text that will be converted into an audio.

**\-Language (optional):** You can specify the language of the text so it gets properly pronounced, the format must be like "es-ES" as in any HTML element as seen [here.](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) If its not specified it will get the current user language.

**\-Volume (optional):** It just indicates how loud will the speech be. It's a decimal property that can range from 0 to 2. By default it will be set as 1.

**\-Speed (optional):** It alters the speed in which the voice will read the text. It's a decimal property that can range from 0 to 2. By default it will be set as 1.