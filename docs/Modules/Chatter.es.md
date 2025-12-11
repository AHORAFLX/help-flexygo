# Chatter

El módulo Chatter permite a los participantes mantener discusiones síncronas en tiempo real sobre objetos relacionados. Al añadir la funcionalidad de chat en tu aplicación, avanzas hacia un enfoque centrado en el cliente, lo que significa que te preocupas por tus usuarios o simplemente mantienes informados a todos sobre ciertos detalles.

![](/assets/images/Chatter/chatter-example.png "Image 1. Chatter")

## Configuración

Para habilitar este módulo, sigue los siguientes pasos:

![Chatter Configuration](/assets/images/Chatter/ChatterConf1.png "Image 2. Chatter Configuration")

| Propiedad | Descripción |
| --- | --- |
| Id | Identifica el módulo |
| Type | Tipo de módulo, en este caso **Chatter** |
| Description | Breve descripción del módulo |
| Title | Título que aparece en el módulo |
| Icon | Icono que aparece en el módulo |
| Classification | Como no es un módulo por defecto, siempre es Project Module |
| Container | Tipo de contenedor del módulo |
| Object Name | En este caso debes elegir **sysChatter** |

Tras configurar lo anterior, verás la siguiente caja. Haz clic en el icono de Settings.

![Chatter Configuration](/assets/images/Chatter/ChatterConf2.png "Image 3. Chatter Configuration")

Introduce el nombre del objeto que quieres relacionar con el módulo chatter.

![Chatter Configuration](/assets/images/Chatter/ChatterConf3.png "Image 4. Chatter Configuration")

Si quieres definir un campo específico de tu objeto como asunto **(notificaciones por email)**, puedes hacerlo aquí:

![Subject Definition](/assets/images/Chatter/subject_definition.png "Image 5. Subject Definition")

## Configuración de Menciones

Ahora seleccionaremos el objeto y la vista que contienen la información para el autocompletado de menciones y que se utilizarán más adelante para las alertas/notificaciones.

![Mentions Configuration](/assets/images/Chatter/mention_config.png "Image 6. Mentions Configuration")

La estructura correcta en la vista de menciones es:

| Alias | Descripción | Requerido |
| --- | --- | --- |
| id | id de usuario | ✓ |
| name | nombre a mostrar | ✓ |
| avatar | imagen a mostrar | ✘ |
| email | dirección de correo para notificaciones | ✘ |

Después de configurar las menciones, puedes decidir qué tipo de notificación recibirán los usuarios mencionados.

(Recuerda, si quieres usar la notificación por email debes configurar tu servicio SMTP)

![Alerts Configuration](/assets/images/Chatter/mention_notifications.png "Image 7. Alerts Configuration")

Si quieres usar la siguiente opción en las notificaciones por email:

![Email notification](/assets/images/Chatter/email_notification.png "Image 8. Email notification")

Necesitas configurar el siguiente ajuste:

![Link configuration](/assets/images/Chatter/link_configuration.png "Image 8. Link configuration")