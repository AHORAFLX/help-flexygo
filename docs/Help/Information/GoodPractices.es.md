# Buenas prácticas  { .fh-title-with-image }

![flexygo](../../docs_assets/images/FlexygoLogo.png){ .fh-image-of-title }

Sigue estos sencillos consejos para extender o personalizar tu entorno **flexygo** y crear un proyecto de alta calidad.

## Custom folder

Crear una carpeta **custom** es un paso fundamental en el desarrollo de tu proyecto **flexygo**.  En esta carpeta colocarás tus archivos personalizados: css, javascript, imágenes, documentos, informes, etc.

Coloca tu carpeta personalizada, por ejemplo con el mismo nombre de tu proyecto, en: _~/yourCustomFolder/_

## Login

Los estilos y scripts nativos de las páginas de cuenta (login, registro, contraseña olvidada, autenticación en dos pasos…) **no deben modificarse**, ya que se sobrescriben en la siguiente actualización de versión.  
Para personalizarlas, crea tus propios ficheros con la misma ruta en la carpeta `custom/` del Frontend (o en la carpeta de tu producto). flexygo los busca en cascada —`custom/` → producto → nativo— y carga todos los que encuentra, de forma que los tuyos ganan. Por ejemplo:

* `custom/css/views/account/account.css` y `custom/js/views/account/account.js` para todas las páginas de cuenta.
* `custom/css/views/account/login/login.css` y `custom/js/views/account/login/login.js` solo para el login.
* `custom/css/views/account/authentication/authentication.css` solo para la página de autenticación.

Tienes todas las rutas y las variables de tema en [Personalización de assets](../../2ProductDevelopment/6Customization.md).

Además, puedes fijar el idioma de la pantalla de login con el ajuste **LoginLanguage** (grupo *Security*) en el panel de control → área **Environment** → *Settings* (en la skin flexy2022: *Admin Work Area > Environment > Settings*). Admite 7 idiomas: _ca-ES | de-DE | en-GB | es-ES | fr-FR | it-IT | pt-PT_. Si se deja vacío, el login usa el idioma del navegador.

<div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/wcsCSw3GMIA" title="YouTube video player" frameborder="0" allowfullscreen=""></iframe>
</div>

## Skin

**Flexygo** usa el lenguaje de estilos **less**, por lo que la mayoría de variables como colores o tamaños de pantalla pueden cambiarse directamente desde la interfaz de diseño de **flexygo**.

Puedes añadir estilos para sobrescribir o ampliar el skin por defecto en varios lugares:

* Encabezado de una plantilla  
* Campo de estilo personalizado de la interfaz  
* Campo css del skin  
* Añadiendo un archivo css personalizado a tus plugins de flexygo (recomendado)

Si usas esta última opción, recuerda colocar el archivo dentro de tu carpeta css personalizada.
{: .flx-warning-card }

Puedes ver también el video tutorial:

<div class="video-wrapper">  
    <iframe src="https://www.youtube.com/embed/2Hged5XQ4G0" title="YouTube video player" frameborder="0" allowfullscreen=""></iframe>
</div>

## System mails

**Flexygo** incluye varias **plantillas de correo** usadas por el sistema (default, confirm, resetpass).  
En la sección de mail templates puedes modificar el asunto y el cuerpo de los mensajes.

Es importante recordar que, en el caso de los emails de **confirmación (confirm)** y **recuperación de contraseña (resetpass)**, debes mantener el marcador **{{Msg}}** dentro del cuerpo del mensaje, ya que será reemplazado por el enlace enviado al usuario.
{: .flx-warning-card }

## Scripts

**Flexygo** utiliza **plugins** para incluir web-components, código jQuery o javascript.  
Puedes añadir código cliente personalizado para extender flexygo de las siguientes formas:

* Añadir código en tus módulos  
* Añadir código en el header, footer o body de tus plantillas  
* Añadir código en el control de script de tu interfaz  
* Añadir código en el control de script del Skin  
* Añadir código como archivo dentro de los plugins de flexygo  

## DLL Processes

**Coloca tus dll personalizadas en la carpeta `custom/bin` del Backend.**  
Puedes ver cómo crear procesos dll consultando el tutorial de [DLL personalizada](../Programming/CustomDLL.md).

No coloques las dll directamente en la carpeta del Backend junto a las de flexygo o se perderán al actualizar la versión.

## Favicon

Coloca tu archivo **favicon.ico** directamente dentro de tu custom folder, por ejemplo: _~/yourCustomFolder/yourFavicon_