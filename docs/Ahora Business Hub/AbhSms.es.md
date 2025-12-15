# Abh Sms

Abh Sms es una integración de **Ahora Business Hub** que permite a **flexygo** enviar SMS.

## Activar Abh Sms

<flx-navbutton class="button" type="openpage" pagetypeid="list" objectname="sysAbh_Integrations_Settings" defaults="{'IntegrationId':'abh_sms'}" excludehist="false">
    Add Abh Sms to your project
</flx-navbutton>

## Configurar Abh Sms

![Abh Sms configuration](/docs_assets/images/AbhSms/AbhSmsSettings.png "Abh Sms configuration")

**Integration:** Nombre de la integración que vamos a configurar, en este caso *Ahora Business Hub – SMS*.

**Client Id:** Identificador de cliente de Ahora Business Hub.  
Más información en: https://help.flexygo.com/
{: .flx-warning-card }

**Client Secret:** Clave secreta de cliente de Ahora Business Hub.  
Más información en: https://help.flexygo.com/
{: .flx-warning-card }

**Tenant Id:** Identificador de tenant de Ahora Business Hub.  
Más información en: https://help.flexygo.com/
{: .flx-warning-card }

## Casos de uso

Una vez configurados los ajustes, es posible utilizar las *notice sentences* para enviar notificaciones por SMS.  
Para más información, consulta la ayuda de *notice sentences*.

## SMS Outbox

Desde aquí es posible visualizar la bandeja de salida de SMS para controlar errores y envíos realizados.

<flx-navbutton class="button" type="openpage" pagetypeid="list" objectname="sysOutboxsSms">
    Sms Outbox
</flx-navbutton>