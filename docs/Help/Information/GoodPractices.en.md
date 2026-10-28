# Good practices  { .fh-title-with-image }

![flexygo](../../docs_assets/images/FlexygoLogo.png){ .fh-image-of-title }

Follow these simple advices to extended or customize your **flexygo** environment to create a high-quality project.

## Custom folder

Creating custom folder it is a fundamental step in developing your **flexygo** project. In this folder you will place customized css, javascript files, images, documents, reports and etc. Put your custom folder named, for instance, exactly as your project, in _~/yourCustomFolder/_

## Login

The native styles and scripts of the account pages (login, register, forgot password, two-step authentication…) **shouldn't be changed**, because they are overwritten the next time a version update takes place.

To customize them, create your own files with the same path in the Frontend `custom/` folder (or in your product folder). **flexygo** looks for them in cascade —`custom/` → product → native— and loads all it finds, so yours win. For example:

*   `custom/css/views/account/account.css` and `custom/js/views/account/account.js` for every account page.
*   `custom/css/views/account/login/login.css` and `custom/js/views/account/login/login.js` for the login only.
*   `custom/css/views/account/authentication/authentication.css` for the authentication page only.

All the paths and theme variables are in [Asset customization](../../2ProductDevelopment/6Customization.md).

In addition to this, you can set the language of the login screen with the **LoginLanguage** setting (*Security* group) in the control panel → **Environment** area → *Settings* (in the flexy2022 skin: *Admin Work Area > Environment > Settings*). It accepts 7 languages: _ca-ES | de-DE | en-GB | es-ES | fr-FR | it-IT | pt-PT_. If it is empty, the login uses the browser language.

<div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/wcsCSw3GMIA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>

## Skin

**Flexygo** uses **less** style sheet language, so most of the variables like colours or screen sizes can be changed directly on the **flexygo** view interface. You can add styles to overwrite or expand default **flexygo** skin in various places like:

*   A template header
*   Interface custom style field
*   Skin css field
*   Add a customized css file to your flexygo plugins (recommended)

If you are going to use the last option remember to drop the file in your customized css folder.
{: .flx-warning-card }

Also you are welcome to watch our video tutorial.


<div class="video-wrapper">  
    <iframe src="https://www.youtube.com/embed/2Hged5XQ4G0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>


## System mails

**flexygo** has several **email templates** used by the system (default, confirm, resetpass). In the mail templates section you can modify the subject and body of the messages.

It is important to note that in the case of **confirmation -> confirm** and **remember password -> resetpass -> emails**, you must keep the **{{Msg}}** marker in the body of the message as it will be replaced by the link that will be sent to the user.
{: .flx-warning-card }

## Scripts

**Flexygo** uses **plugins** to include web-components, jquery code or javascript code. You can add your own client-side code to expand **flexygo** in the following ways:

*   Add code to your modules
*   Add code to your template header, footer or body
*   Add to your interface form script control
*   Add to your Skin form script control
*   Add as a file to **flexygo** plugins

## DLL Processes

**Place your custom dll files in the `custom/bin` folder of the Backend.** You can see how to create your dll process by looking at the [Custom DLL](../Programming/CustomDLL.md) tutorial. Don’t place dll files directly into the Backend folder next to the **flexygo** ones or you will lose them on the next version update.

## Favicon

Place your favicon.ico file directly into the custom folder, for example: _~/yourCustomFolder/yourFavicon_.