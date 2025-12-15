# Notificaciones Push

**flexygo** permite utilizar notificaciones push en tus aplicaciones offline y en tu navegador web.  
En el futuro, las notificaciones push podrían tener un coste adicional dependiendo del número de mensajes enviados.

Para utilizar notificaciones push en el navegador **es obligatorio disponer de un certificado HTTPS** emitido por una entidad autorizada, ya que es necesario para usar el servicio Google Firebase.
{: .flx-warning-card }

## Configuración

1. Primero, debes obtener una **Push API Key** de **flexygo**, que puedes solicitar a través de [flexygo help](https://help.flexygo.com).

2. Una vez tengas tu clave, complétala en los ajustes de **Push API Key**:

![](/docs_assets/images/Push/Push_1.png "Image 1. API Key settings")

3. Completa tu tabla de notificaciones o tu objeto de notificación, seleccionando el tipo de notificación que deseas habilitar.  
   Existen distintos tipos de notificaciones push:

* **app**: notificaciones normales en la campanita dentro del entorno **flexygo**.  
* **push**: notificaciones enviadas a todos los dispositivos conectados a tu aplicación (navegadores y móviles).  
* **pushmobile**: notificaciones push enviadas solo a dispositivos móviles con la app de **flexygo** instalada.  
* **pushweb**: notificaciones push enviadas únicamente al navegador web (requiere certificado HTTPS obligatorio).

![](/docs_assets/images/Push/Push_2.png "Image 2. API Key setting")

## Uso de sentencias de notificación

También puedes utilizar **sentencias de notificación** para automatizar la generación de avisos basados en información y condiciones de la base de datos.  
Para más información consulta: [Notice sentences](/Programming/NoticesSentences)