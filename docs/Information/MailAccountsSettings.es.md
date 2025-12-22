# Ajustes de cuenta de email

Configura cuentas de correo para usuarios y perfiles sobrescribiendo las opciones SMTP del **web.config**.  
Si configuras una cuenta de correo para un usuario, se usará esa configuración para enviar los correos.  
Si la configuras para un perfil, se usará la del perfil.  
Si ambos están relacionados, prevalece la configuración del usuario.  
Si no existe ninguna configuración personalizada, la aplicación usará la configuración SMTP del *web.config*.

## Create Mail Account

Puedes gestionar la configuración de cuentas de correo desde: **Admin Panel Area > Security > Mail Account**.

![](/docs_assets/images/MailAccountsSettings/AdminWorkArea.PNG "Image 1. Admin Work Area")

Completa la información del servidor de correo y los datos de la cuenta para enviar correos con una configuración específica.

![](/docs_assets/images/MailAccountsSettings/NewMailAccountSetting.PNG "Image 2. New Mail Account Setting")

## Link Mail Account

Puedes vincular configuraciones de correo a usuarios desde: **Admin Work Area > Security > Users**.

![](/docs_assets/images/MailAccountsSettings/MailAccountUsers.PNG "Image 3. Mail Account Users")

También puedes vincular configuraciones de correo a perfiles desde: **Admin Work Area > Security > Profiles**.

![](/docs_assets/images/MailAccountsSettings/MailAccountProfiles.PNG "Image 4. Mail Account Profiles")

## Testing Mail Account

Tienes dos opciones para probar una configuración de correo:

1. Probar la configuración desde una cuenta de correo específica o completando manualmente los datos de la cuenta.

![](/docs_assets/images/MailAccountsSettings/MailAccountSettingProcesses.PNG "Image 5. Mail Account Setting Processes")

2. Probar la configuración de correo asociada a un **usuario concreto** enviando un correo de prueba.

![](/docs_assets/images/MailAccountsSettings/MailAccountMailTest.PNG "Image 6. Mail Account Mail Test")

También puedes probar cualquier configuración desde el proceso de colección enviando un correo de prueba:

![](/docs_assets/images/MailAccountsSettings/MailAccountsSettingsCollectionProcesses.PNG "Image 7. Mail Accounts Settings Collection Processes")

![](/docs_assets/images/MailAccountsSettings/MailAccountsSettingsMailTest.PNG "Image 8. Mail Accounts Settings Mail Test")

## Change Mail Account Password

Como administrador, puedes cambiar la contraseña de la cuenta de correo de cualquier usuario.

![](/docs_assets/images/MailAccountsSettings/MailAccountChangePassword.PNG "Image 9. Mail Account Change Password")

Cualquier usuario que tenga una cuenta de correo asociada puede cambiar su contraseña desde su panel de control.

![](/docs_assets/images/MailAccountsSettings/UserChangeMailPassword.PNG "Image 10. User Change Mail Password")