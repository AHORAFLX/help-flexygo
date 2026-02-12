# WhatsApp Addon

![WhatsApp](../docs_assets/images/WhatsApp/WhatsApp.png){.fh-image-of-title}

[WhatsApp Business](https://business.whatsapp.com/products/business-app){:target="\_blank"} (Cloud API) is an official Meta tool that allows you to integrate WhatsApp messaging into your business solutions.

By following these steps, you will be able to integrate it with **Flexygo**, add contacts, send and receive messages, and even **automate conversations with AI agents**.

---

## Prerequisites

Find and **install the WhatsApp addon** from the marketplace located inside Flexygo.

Before being able to use it, you will need to create:

-   A **Facebook Developer Account**.
-   A **WhatsApp Business Application**.
-   A **Business Portfolio** for your company.

In the prerequisites section and in the first step of the [official documentation](https://developers.facebook.com/documentation/business-messaging/whatsapp/get-started#prerequisites){:target="\_blank"} they explain in detail how to complete this process.

> While configuring and developing, we **recommend** keeping the
> application in development mode (a mode in which messages cannot be
> sent) and using the test number provided by WhatsApp.

> Once the configuration is complete, you can switch to **production
> mode**, verify your business, add your phone number, and start using
> WhatsApp Business from FlexyGo.

---

## Application Configuration

Once you have completed the prerequisites, continue with the following
steps:

### 1. Add Domains

First, add your **domains** in the application configuration.

Enter them in the Basic Information section within the **Application Settings** of [your WhatsApp Business application](https://developers.facebook.com/apps){:target="\_blank"}:

![WhatsApp Business Configuration](../docs_assets/images/WhatsApp/whatsapp_conf.png)

> You must provide a URL for the **Privacy Policy** and the **Terms of Service**.

---

### 2. Facebook Login for Business

Add the **Facebook Login for Business** product to your application.

Make sure these options are enabled and that you configure a **Redirect URI**:

![WhatsApp Business OAuth Configuration](../docs_assets/images/WhatsApp/whatsapp_oauth_conf.png)

> The Redirect URI must be: **Your domain** + `/Webhooks/WhatsAppToken`

---

### 3. Webhooks Endpoint

Add the **Webhooks** product to your application.

Complete the following fields:

-   Callback URL: **Your domain** + `/api/WhatsApp/Webhook`
-   Verification Token: Enter a password that we will use later.
    (Explained in the next section)

![Webhook Configuration](../docs_assets/images/WhatsApp/whatsapp_webhook_conf.png)

Make sure you are subscribed to the **messages** field.

![Webhook Fields](../docs_assets/images/WhatsApp/whatsapp_webhook_fields_conf.png)

> Before clicking Verify and Save, **complete the Flexygo configuration first**, and once finished you can verify it.

---

## Flexygo Configuration

Open the <flx-navbutton class="link" type="openpagename" pagetypeid="list" pagename="syspage-edit-settings" objectname="sysSettings" objectwhere="GroupName='flx-whatsapp'" defaults="" targetid="popup1400x600" excludehist="true">WhatsApp Business settings</flx-navbutton> in Flexygo and complete the following fields:

### Default User

(Identified as `WhatsApp_DefaultAnswerUser`)

Filling this field determines which **user will be assigned by default** to contacts created from now on. Leaving it empty means:

1.  The system will search for the first **user with the same phone number** as the contact.
2.  If found, that user will be assigned.
3.  If not found, the guest user will be assigned.

### Default AI Assistant

(Identified as `WhatsApp_DefaultAssistantAI`)

Filling this field determines which **AI assistant will be assigned by default** to contacts created from now on. Leaving it empty means:

1.  The system will search for the **default assistant of the assigned user's role**.
2.  If found, it will be assigned.
3.  If not found, the AI will not be able to respond to this contact.

### Access Token

(Identified as `WhatsAppAccessToken`)

Token required to send messages.

-   OAuth-generated token → lasts 1 hour.
-   Recommended → Generate a **System User Access Token** from [Meta Business Suite](https://business.facebook.com/latest/settings){:target="\_blank"}, in the System Users section.

![Access Token](../docs_assets/images/WhatsApp/whatsapp_access_token_conf.png)

---

### Application ID

(Identified as `WhatsAppAccountId`)

Required to refresh the token via OAuth.

---

### Client Secret

(Identified as `WhatsAppClientSecret`)

Required to verify webhook signatures. This and the previous value can be found in the Basic Information section within the **Application Settings** of [your WhatsApp Business application](https://developers.facebook.com/apps){:target="\_blank"}:

![ApplicationId and Client Secret](../docs_assets/images/WhatsApp/whatsapp_client_secret_conf.png)

---

### Account ID and Phone ID

(Identified as `WhatsAppApplicationId` and `WhatsAppPhoneId`)

Required to send messages. In your application, go to **Products** \> **WhatsApp** \> **API Setup**.

![Phone ID](../docs_assets/images/WhatsApp/whatsapp_phoneid_accountid_conf.png)

---

### Verification Token

(Identified as `WhatsAppVerificationId`)

Required to verify your Webhook endpoint with WhatsApp. It must be **the same value you entered in the Webhooks section**.

---

### Signature Verification

(Identified as `WhatsAppVerifySignature`)

When enabled, this option **rejects all requests** made to the Webhooks endpoint and **only accepts those coming from Meta servers**.

It is enabled by default and should only be disabled to send test requests to your endpoint.

---

## Basic Usage

Once configured, you can send and receive messages from <flx-navbutton class="link" type="openpagename" pagetypeid="list" pagename="7df84455-fa8e-4e90-a99c-ccce9dede1e7" objectname="" objectwhere="" defaults="" targetid="popup1500x2000" excludehist="false"> WhatsApp page in Flexygo</flx-navbutton>.

![WhatsApp Page](../docs_assets/images/WhatsApp/whatsapp_flexygo_page.png)

1.  **Navigation bar options**. You can open the help section, create a new contact, and switch between active and archived conversations.
2.  **Conversation list** to switch between conversations.
3.  **Toggle button** between manual mode (off) and automatic mode (on).
4.  **Messages** of the selected conversation.
5.  **Text box** to write messages.
6.  **Sending options**. Includes buttons to attach files, send text messages, and other message types.

---

### Automatic and Manual Mode

A conversation can be in two modes: **automatic** or **manual**. You can switch between modes at any time using the **toggle button** in the conversation list.

-   In manual mode: Messages can only be sent from the interface.
-   In automatic mode:

    1.  If an AI assistant is **assigned** and **enabled**, it will respond to each incoming message.
    2.  If not, predefined messages will be sent asking the user to wait until someone responds. (The assigned user's language will be used.)

---

### Contacts / Conversations

There are 2 ways to create a new contact:

1.  **Receive a message from a new number**, in which case a contact will automatically be created with that number.
2.  **Manually**, in which case you must specify a number, a name, and a message template (because WhatsApp Business only allows starting a conversation by sending an approved template).

Once created, you can archive the conversation **by swiping right**:

![Archive Conversation](../docs_assets/images/WhatsApp/whatsapp_conversation_archive.png)

And edit the contact **by swiping left**:

![Edit Conversation](../docs_assets/images/WhatsApp/whatsapp_conversation_edit.png)

---

### Sending Messages

WhatsApp supports a wide variety of message types:

-   Templates
-   Text
-   Images
-   Documents
-   Audio
-   Videos
-   Call-to-action URLs
-   Lists
-   Locations
-   Reply Buttons
-   Contacts

We can divide them into 4 types:

#### Files

Sent using the attach files button. The following extensions are allowed:

| Type     | Extensions                         |
|----------|--------------------------------------|
| Images | .jpeg, .png                         |
| Documents | .txt, .xls, .xlsx, .doc, .docx, .ppt, .pptx, .pdf |
| Audio    | .aac, .amr, .mp3, .mp4, .ogg        |
| Video    | .3gp, .mp4                          |

#### Messages Without Body

Messages that do not contain an array of elements. You simply fill in the required fields and send them. You also have the option to **create the message as an object** so it can be reused easily. (Text, URLs, Location, Location Request, and Contact).

#### Messages With Body

Messages that **DO** contain an array of elements. In addition to filling in required fields, you must add one or more elements to their
body. For this type of message, it is **mandatory to create it as an object before sending**. (Lists and Reply Buttons)

#### Templates

Predefined messages that must be created in [Meta Business Suite](https://business.facebook.com/latest/settings){:target="\_blank"} and approved by Meta.

Some accept variables, which must always be completed before sending.

![Message Buttons](../docs_assets/images/WhatsApp/whatsapp_messages_buttons.png)

---

### Basic Flow

**Receiving messages**:

```plaintext { .no-language }
WhastsApp -> Endpoint Webhook -> Flexygo
```

**Sending messages**:

```plaintext { .no-language }
Flexygo -> WhatsApp Cloud API -> WhatsApp
```

---

### Rules and Limitations

-   When a message is sent manually, the conversation is **always switched** to manual mode.
-   AI assistants within the WhatsApp scope:
    -   Automatically gain the ability to **generate supported message types**.
    -   Can detect when the user prefers to speak with a human and **auto-disable themselves**.
-   When archiving a conversation, it is **always switched** to automatic mode and its AI assistant is activated (if assigned).
-   To manually start a conversation, **only templates can be sent**.
-   If more than 24 hours have passed since the user's last message, **only templates can be sent** until they reply.
-   Sending and receiving messages is subject to [Meta's WhatsApp Business pricing](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing){:target="\_blank"}.

---

## Integration Effects

Once you complete the
<flx-navbutton class="link" type="openpagename" pagetypeid="list" pagename="syspage-edit-settings" objectname="sysSettings" objectwhere="GroupName='flx-whatsapp'" defaults="" targetid="popup1400x600" excludehist="true">WhatsApp Business configuration</flx-navbutton> in Flexygo, **refresh the cache** and reload the page. The integration between WhatsApp Business and Flexygo will be activated. This will trigger the following:

-   A **WhatsApp icon button** will appear in the top navigation bar. Clicking it will take you directly to <flx-navbutton class="link" type="openpagename" pagetypeid="list" pagename="7df84455-fa8e-4e90-a99c-ccce9dede1e7" objectname="" objectwhere="" defaults="" targetid="popup1500x2000" excludehist="false">the WhatsApp page in Flexygo</flx-navbutton>.

-   The Cron task `CheckNewWhatsAppMessages` will be activated. Every minute it will **check for new messages** and notify if there are any.

-   The Cron task `WhatsAppActivateInactiveConversations` will be activated. Each day it will look for conversations whose **last message is older than 24 hours**, have an **AI assistant assigned**, and are in manual mode. These will be switched to automatic mode.

-   It is recommended to enable the Cron task `RefreshWhatsAppAccessToken` so you don't need to manually generate new tokens. Check the duration of your [Access Token](./#access-token), and adjust the execution frequency accordingly. For example, if the token lasts 60 days, run it every 59 days, because if it expires, the refresh will not work.

---

## Security Considerations

-   Never share or expose any token, ID, or secret.
-   Keep **Signature Verification** enabled in the <flx-navbutton class="link" type="openpagename" pagetypeid="list" pagename="syspage-edit-settings" objectname="sysSettings" objectwhere="GroupName='flx-whatsapp'" defaults="" targetid="popup1400x600" excludehist="true"> Flexygo configuration </flx-navbutton> when not testing.
-   Carefully review which sensitive information and processes AI assistants can access before assigning them to a conversation.

---

## Troubleshooting

If at any point you are unable to receive/send messages, check the following:

-   Make a GET request to the following URL to check your account status. If any issue is indicated, it must be resolved.

```plaintext { .no-language }
https://graph.facebook.com/v24.0/{{Account ID}}?fields=health_status
```
> Replace **[Account ID](./#account-id-and-phone-id)** with the appropriate value.

-   Check in [your WhatsApp Business application](https://developers.facebook.com/apps){:target="\_blank"} under **Products** \> **WhatsApp** \> **API Setup** \> **Webhook Events** which webhook events are being received related to your activity.

![Webhook Events Check](../docs_assets/images/WhatsApp/whatsapp_troubleshooting.png)

The most common errors are:

-   Expired token
-   Webhook not verified
-   Incorrect ID
-   Invalid signature
-   Number not approved
-   Business not verified
-   Account blocked

Remember that you can always contact [official WhatsApp Business support](https://developers.facebook.com/documentation/business-messaging/whatsapp/support){:target="\_blank"}.

For more technical information, consult the [official WhatsApp Business documentation](https://developers.facebook.com/documentation/business-messaging/whatsapp/overview){:target="\_blank"}.