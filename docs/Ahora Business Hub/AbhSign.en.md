# Abh Sign

Abh sign is an integration of Ahora Business Hub that allows **flexygo** to send pdf documents to sign and save them in document management.

## How to hire ABH Sign services?

AHB Sign is not included in the Flexygo license, therefore it is a service that must be contracted separately.

To hire the service you can do it in any of the following ways:

*   **By E-Mail:** Sending an E-Mail to [abh@ahora.es](mailto:abh@ahora.es) with the subject "Hire ABH Sign" and, into the message, your contact details such as your name, the name of the company and a contact phone number. A sales agent will contact you to carry out the process.

## Enable Abh Sign

<flx-navbutton class="button" type="openpage" pagetypeid="list" objectname="sysAbhSigns_Objects_Config" excludehist="false">
    Add Abh Sign to your project 🦦
</flx-navbutton>

## Configure Abh Sign


![Abh Sign configuration](/assets/images/AbhSign/AbhSignSettings.png "Abh Sign configuration")

**Object Name:** Object we want to enable Abh Sign.

**Type:** Signature mode that we want to enable.

*   **Remote:** Send an email with the document to sign.
*   **In-person:** Send the document to be signed to a [compatible device](https://www.validatedid.com/es/dispositivos) to perform the signature. It is necessary to download the following application to view pending documents, available on [Android](https://help.vidsigner.net/s/article/Manual-de-usuario-de-la-Firma-Bio-para-Android?language=es), [iOS](https://help.vidsigner.net/s/article/Manual-de-Usuario-de-la-Firma-BIO-para-iOS?language=es) and [Windows](https://help.vidsigner.net/s/article/Manual-de-usuario-de-la-Firma-Bio-para-Windows?language=es).

**Client Id:** Ahora Business Hub client id.

For more information consult on [https://help.flexygo.com/](https://help.flexygo.com/)
{: .flx-warning-card }

**Client Secret:** Ahora Business Hub client secret.

For more information consult on [https://help.flexygo.com/](https://help.flexygo.com/)
{: .flx-warning-card }

**Tenant Id:** Ahora Business Hub tenant id.

For more information consult on [https://help.flexygo.com/](https://help.flexygo.com/)
{: .flx-warning-card }

## Configure Reports

Once configured, a module is enabled to configure the reports that we want to be able to send.

![Abh Sign reports configuration](/assets/images/AbhSign/AbhSignReports.png "Abh Sign reports configuration")

**Type:** Enable configuration by report or document management.

**Report:** Report that we want to enable, the reports associated with the configured object appear.

**Document Category:** Category (Id) that we want to enable, the documents associated with the configured object that have that category appear (If the category is empty, the configuration applies to all).

**After Process:** Process that we want to execute once we recover the signed document. (You can add the DocGuid parameter to receive the inserted document or any property of the object)

To choose where we want to sign in the document, there is an assistant that is enabled with a button on the toolbar in which we can upload an example document and draw where we want to sign.

![Signing assistant](/assets/images/AbhSign/SelectSign.png "Signing assistant")

## Processes

In the configured object, a process called "Send signed report" or "Send signed document" is enabled, in which you select a report or document from those configured and an email is sent for a person to sign it.

A cron job is enabled in the system that every 30 minutes checks if any of the documents sent has been signed and, if so, collects it and inserts it into document management. Execute after process if configured.

![Abh Sign operation](/assets/images/AbhSign/AbhSignOperation.png "Abh Sign operation")