# Good practices  { .flx-title-with-image }

![flexygo](../docs_assets/images/FlexygoLogo.png){ .fh-image-of-title }

Follow these simple advices to extended or customize your **flexygo** environment to create a high-quality project.

## Custom folder

Creating custom folder it is a fundamental step in developing your **flexygo** project. In this folder you will place customized css, javascript files, images, documents, reports and etc. Put your custom folder named, for instance, exactly as your project, in _~/yourCustomFolder/_

## Login

**Flexygo** has a **default login.css, which shouldn't be changed or moved** from its default folder, because it will be overwritten the next time a version update takes place. 

**Create a css folder in your custom folder** and place a login.css file which will overwrite the original login.less file. This way you can change the class or id you want on your login screen. 

You can also create a js folder in the custom folder and add a login.js to add any client-side logic to your login form. In addition to this, you can customize the language of the login screen, modifying Login Language Setting in the **Admin Work Area** > **Enviroment** > **Settings Section** with 4 possible languages: _es-ES | ca-ES | fr-FR | de-DE_

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

**Create a bin folder inside the custom folder** and add your personalizade dll into it. You can see how to create you dll process by looking at the Custom dll tutorial. Don’t place dll directly into **flexygo** bin folder or you will loose then on the next version update.

## Favicon

Place your favicon.ico file directly into the custom folder, for example: _~/yourCustomFolder/yourFavicon_.