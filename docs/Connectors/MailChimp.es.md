# Integración con MailChimp  { .flx-title-with-image }

![MailChimp](/docs_assets/images/MailChimp/MailChimpLogoBlack.png){ .flx-image-of-title }

MailChimp es una plataforma de automatización de marketing que te ayuda a compartir campañas de correo y publicidad con clientes y otros usuarios.

El área de integración con MailChimp es accesible desde el menú lateral. Haz clic en **Admin Work Area > Integrations >**  
<flx-navbutton class="link" type="openPageName" pagename="syspage-generic-mailchimpcampaigns">MailChimp</flx-navbutton>.

Es necesario un **API Key** para poder conectar con la API de MailChimp, por lo que el primer paso será configurarlo. Si necesitas más información, puedes consultar la [documentación de Mailchimp](https://mailchimp.com/es/help/about-api-keys/).
{: .flx-warning-card }

Después de ejecutar el proceso, los datos principales de MailChimp como listas, plantillas o campañas estarán disponibles en **flexygo**. Este proceso puede tardar varios minutos dependiendo de la cantidad de información almacenada en la cuenta de MailChimp.

![Set APIKey](/docs_assets/images/MailChimp/apikey.png "Image 1. Set APIKey")

## Secciones de MailChimp

### Listas

Una vez completado el proceso, las listas de MailChimp pueden insertarse, modificarse o eliminarse desde **flexygo**. Ejecuta el proceso **Get lists** si las listas se han modificado directamente desde MailChimp para sincronizar la información de nuevo.

![Get lists](/docs_assets/images/MailChimp/lists.png "Image 2. Get lists")

Al visualizar una lista, puedes ver los contactos sincronizados en **flexygo**, desde donde puedes añadir nuevos contactos o eliminarlos; estas acciones se sincronizan inmediatamente con la lista de MailChimp.

![View List](/docs_assets/images/MailChimp/list.png "Image 2.1. View List")

### Campañas

La información principal de las campañas de MailChimp también se muestra en esta sección. Al igual que con las listas, las campañas pueden sincronizarse con el proceso **Get campaigns**. Haz clic en una campaña para ver información adicional.

![List Campaigns](/docs_assets/images/MailChimp/campaigns.png "Image 3. List Campaigns")

En la vista de detalle existen dos procesos: **Get campaign info** y **Launch action campaign**.  
El primero actualiza la información detallada de la campaña.  
El segundo permite ejecutar acciones como enviar, testear o replicar una campaña, por ejemplo.  

Cuando la campaña aún no ha sido lanzada, la información de contactos corresponde a los contactos importados en **flexygo** y asociados a la lista de la campaña, desde donde se pueden añadir contactos que se sincronizarán de inmediato con MailChimp.

![Campaign](/docs_assets/images/MailChimp/campaign_save.png "Image 3.1. Campaign")

Cuando la campaña ha sido lanzada, la información de los contactos corresponde al envío real: si se envió, si abrieron el correo o si hicieron clic.  
También se habilita un módulo con los datos del informe de la campaña.

![Campaign](/docs_assets/images/MailChimp/campaign.png "Image 3.2. Campaign")

### Plantillas

Las plantillas personalizadas y prediseñadas de MailChimp también pueden gestionarse desde esta sección y sincronizarse con **Get templates**.

![Template](/docs_assets/images/MailChimp/template.png "Image Template")

### Contactos

Una de las características más interesantes de la integración es la posibilidad de crear contactos a partir de un objeto de una aplicación **flexygo** para subirlos a MailChimp.

En la configuración de objetos de MailChimp, crea un nuevo registro seleccionando un objeto y sus propiedades para generar contactos. Opcionalmente, se puede usar una vista de objeto para obtener más propiedades.  
El siguiente paso es ejecutar el proceso **Generate contacts**. Después, los contactos aparecerán en el módulo inferior. Se pueden seleccionar y subir a MailChimp con **Upload contacts**.

![Object contact configuration](/docs_assets/images/MailChimp/object.png "Image 4. Object contact configuration")

![Upload contacts](/docs_assets/images/MailChimp/upload.png "Image 5. Upload contacts")

También incluye filtros preestablecidos que permiten localizar contactos modificados o pendientes de subir a MailChimp.

![Upload contacts](/docs_assets/images/MailChimp/contacts_presets.png "Image 5.1 Upload contacts")

### Configuración

El API Key puede cambiarse desde el área de configuración.  
También existe el proceso **Change MailChimp account**, que **elimina** todos los datos de MailChimp almacenados en **flexygo** si deseas conectar con otra cuenta.

![Configuration](/docs_assets/images/MailChimp/configuration.png "Image 6. Configuration")