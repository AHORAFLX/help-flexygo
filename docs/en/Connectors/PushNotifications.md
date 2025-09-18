# Push Notifications

**flexygo** enables you to use push notifications in your offline apps and in your web browser. Push notifications may be subject to additional charges in the future depending on number of messages.

It is mandatory for using push notifications in your web browser to have a domain **HTTPS certificate** issued by an authorized entity, required to use the Google Firebase service.

## Settings

1\. Firstly, you must obtain a Push API Key from **flexygo** which you can order through [flexygo help](https://help.flexygo.com).

2\. Once you have obtained your key, fill out your Push API Key settings.

![](./img/Help/Push/Push_1.png "Image 1. API Key settings")

Image 1. API Key settings

3\. Fill out your notices table or notice object, selecting the type of notification you would like to enable. There are some different types of push notification:

*   **app** for normal bell notifications in your **flexygo** environment.
*   **push** for push notification that will be sent to all devices connected to your application (browsers and devices).
*   **pushmobile** for push notifications only on mobile devices with a **flexygo** app installed.
*   **pushweb** for push notifications only in web browser running **flexygo** (it's mandatory https domain certificate).

![](./img/Help/Push/Push_2.png "Image 2. API Key setting")

Image 2. API Key setting

## Using notices sentences

You can also use the notice sentences to automatize the generation of notices based on database information an conditions. For more info checkout: Notice sentences