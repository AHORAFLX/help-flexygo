# Buenas prácticas  { .flx-title-with-image }

![flexygo](/docs_assets/images/FlexygoLogo.png){ .flx-image-of-title }

Sigue estos sencillos consejos para extender o personalizar tu entorno **flexygo** y crear un proyecto de alta calidad.

## Custom folder

Crear una carpeta **custom** es un paso fundamental en el desarrollo de tu proyecto **flexygo**.  
En esta carpeta colocarás tus archivos personalizados: css, javascript, imágenes, documentos, informes, etc.

Coloca tu carpeta personalizada, por ejemplo con el mismo nombre de tu proyecto, en:  
_~/yourCustomFolder/_

## Login

**flexygo** tiene un **login.css por defecto que no debe modificarse ni moverse** de su carpeta original, ya que será sobrescrito en la siguiente actualización de versión.  
Crea una carpeta **css** dentro de tu custom folder y coloca allí un archivo **login.css**, el cual sobrescribirá al login.less original.  
De esta forma puedes cambiar cualquier clase o id de la pantalla de login.

También puedes crear una carpeta **js** en el custom folder y añadir un **login.js** para incluir lógica de cliente.

Además, puedes personalizar el idioma de la pantalla de login modificando *Login Language Setting* en:  
**Admin Work Area > Environment > Settings**, con 4 opciones disponibles:  
_es-ES | ca-ES | fr-FR | de-DE_

<div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/wcsCSw3GMIA" title="YouTube video player" frameborder="0" allowfullscreen=""></iframe>
</div>

## Skin

**flexygo** usa el lenguaje de estilos **less**, por lo que la mayoría de variables como colores o tamaños de pantalla pueden cambiarse directamente desde la interfaz de diseño de **flexygo**.

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

**flexygo** incluye varias **plantillas de correo** usadas por el sistema (default, confirm, resetpass).  
En la sección de mail templates puedes modificar el asunto y el cuerpo de los mensajes.

Es importante recordar que, en el caso de los emails de **confirmación (confirm)** y **recuperación de contraseña (resetpass)**, debes mantener el marcador **{{Msg}}** dentro del cuerpo del mensaje, ya que será reemplazado por el enlace enviado al usuario.
{: .flx-warning-card }

## Scripts

**flexygo** utiliza **plugins** para incluir web-components, código jQuery o javascript.  
Puedes añadir código cliente personalizado para extender flexygo de las siguientes formas:

* Añadir código en tus módulos  
* Añadir código en el header, footer o body de tus plantillas  
* Añadir código en el control de script de tu interfaz  
* Añadir código en el control de script del Skin  
* Añadir código como archivo dentro de los plugins de flexygo  

## DLL Processes

**Crea una carpeta bin dentro del custom folder** y coloca allí tus dll personalizadas.  
Puedes ver cómo crear procesos dll consultando el tutorial de Custom dll.

No coloques las dll directamente en la carpeta bin de flexygo o se perderán al actualizar la versión.

## Favicon

Coloca tu archivo **favicon.ico** directamente dentro de tu custom folder, por ejemplo:  
_~/yourCustomFolder/yourFavicon_