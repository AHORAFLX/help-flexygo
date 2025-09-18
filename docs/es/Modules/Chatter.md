# Chatter

Chatter module allows participants to have a synchronous discussion in real time on related objects. By adding the chat feature in your application, you are moving towards the customer-centric approach which means you are concerned regarding your clients or just mantain informed all users about some detailes.

![](./img/Help/Chatter/chatter-example.png "Image 1. Chatter")

Image 1. Chatter

## Settings

To enable this module, follow the next steps:

![Chatter Configuration](./img/Help/Chatter/ChatterConf1.png "Image 2. Chatter Configuration")

Image 2. Chatter Configuration

|     |     |
| --- | --- |
| Id  | Identify the module |
| Type | Module type, in this case **Chatter** |
| Description | Brief description of the module |
| Title | Title that appears on the module |
| Icon | Icon that appears on the module |
| Classification | Since it is not a default module it is always Project Module |
| Container | Module container type |
| Object Name | In this case you should choose **sysChatter** |

After setting up the previous configuration, you'll see the following box. Click on Settings Icon.

![Chatter Configuration](./img/Help/Chatter/ChatterConf2.png "Image 3. Chatter Configuration")

Image 3. Chatter Configuration

Put the name of the object you want to relate chatter module.

![Chatter Configuration](./img/Help/Chatter/ChatterConf3.png "Image 4. Chatter Configuration")

Image 4. Chatter Configuration

If you want to define a specific field of your object for the subject **(email notifications)** you can define here:

![Subject Definition](./img/Help/Chatter/subject_definition.png "Image 5. Subject Definition")

Image 5. Subject Definition

## Mentions Configuration

Now we will select the object and the view that contain the information for mention autocomplete and which will be used later for the alerts/notifications.

![Mentions Configuration](./img/Help/Chatter/mention_config.png "Image 6. Mentions Configuration")

Image 6. Mentions Configuration

The correct data structure in the mention view is:

| Alias | Description | Required |
| --- | --- | --- |
| id  | user id | ✔   |
| name | name to display | ✔   |
| avatar | image to show | ✘   |
| email | email address for email notifications | ✘   |

After configure the mentions, you can decide what kind of notification will receive the mentioned users.

(Remember, if you want to use the email notification you have to configure your SMTP service)

![Alerts Configuration](./img/Help/Chatter/mention_notifications.png "Image 7. Alerts Configuration")

Image 7. Alerts Configuration

If You want to use the following option in email notifications:

![Email notification](./img/Help/Chatter/email_notification.png "Image 8. Email notification")

Image 8. Email notification

You need to configure the following setting:

![Link configuration](./img/Help/Chatter/link_configuration.png "Image 8. Link configuration")

Image 9. Link configuration