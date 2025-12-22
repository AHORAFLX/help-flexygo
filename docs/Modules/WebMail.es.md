# Web Mail

## Nuevo flujo de credenciales OAuth 2.0

Tanto Microsoft como Google están dejando de usar la Autenticación Básica y migrando a OAuth. En ambos casos debemos realizar configuraciones y requisitos adicionales.

## Microsoft

Registra tu aplicación usando el [portal de Azure](https://docs.microsoft.com/en-us/graph/auth-register-app-v2).  
Otro ejemplo [aquí](https://www.re-mark-able.net/how-to-access-data-from-the-beta-channel-of-graph-api/).

### Configuración Office 365

Asegúrate de que IMAP/POP3/SMTP están habilitados para tu organización y buzón.

Primero inicia sesión como administrador en [https://admin.microsoft.com/](https://admin.microsoft.com/), ve a la pantalla Org settings y busca la entrada Modern authentication.

![](/docs_assets/images/ModulesConf/MailOffice4.png "Image 1. Show all settings")

![](/docs_assets/images/ModulesConf/MailOffice5.png "Image 2. Org settings")

Marca **Turn on modern authentication…** para los flujos OAuth y las opciones **IMAP**, **POP3** y **SMTP** para los flujos de contraseñas de aplicaciones.

![](/docs_assets/images/ModulesConf/MailOffice6.png "Image 3. Modern authentication")

Luego ve a la pantalla **Users**:

![](/docs_assets/images/ModulesConf/MailOffice7.png "Image 4. Users")

Selecciona un usuario y en la pestaña Mail haz clic en Manage email apps.

![](/docs_assets/images/ModulesConf/MailOffice8.png "Image 5. User config")

Activa **IMAP**, **POP** y **Authenticated SMTP** para habilitar los protocolos en esta cuenta.

![](/docs_assets/images/ModulesConf/MailOffice9.png "Image 6. Manage email apps")

Ten en cuenta que los cambios pueden tardar entre 20 y 30 minutos en aplicarse.

### Configuración Azure

En tu Active Directory asegúrate de que Enable Security defaults esté en No.

![](/docs_assets/images/ModulesConf/MailOffice10.png "Image 7. Security defaults")

Asegúrate de que no haya políticas definidas en Conditional Access | Policies.

![](/docs_assets/images/ModulesConf/MailOffice11.png "Image 8. Policies")

Una vez registrada la aplicación, lo primero será indicar la URL base de tu app + /Webhooks/MailToken.aspx como URL de redirección.

![](/docs_assets/images/ModulesConf/MailOffice1.png "Image 9. Redirect URL")

Luego aplica los permisos correctos y concede el admin consent a tu dominio. En API permissions / Add a permission, selecciona Microsoft Graph y luego Delegated permissions para añadir:

* offline_access  
* email  
* IMAP.AccessAsUser.All  
* POP.AccessAsUser.All  
* SMTP.Send  
* User.Read  

Recuerda conceder el admin consent.

![](/docs_assets/images/ModulesConf/MailOffice2.png "Image 10. API permissions")

Crea un secreto para la app y guarda su valor.

![](/docs_assets/images/ModulesConf/MailOffice3.png "Image 11. Client secret")

Para finalizar, rellena los <flx-navbutton class="link" type="openpage" pagetypeid="edit" objectname="SysMail_Account_Endpoint" defaults="{'AccountTypeId':1}" showprogress="false">campos de configuración del endpoint de la cuenta de correo</flx-navbutton> con el **client id**, **tenant id** y el **secret** generado.

## Google

Primero inicia sesión en [https://console.cloud.google.com/](https://console.cloud.google.com/) y selecciona un proyecto existente o crea uno nuevo.

![](/docs_assets/images/ModulesConf/MailOffice12.png "Image 12. Projects")

Después busca Gmail API en la biblioteca de APIs y actívala.

![](/docs_assets/images/ModulesConf/MailOffice13.png "Image 1. Gmail API")

Antes de crear las credenciales OAuth debemos configurar la pantalla de consentimiento. Lo primero es seleccionarlo como interno (solo organización) o externo.

![](/docs_assets/images/ModulesConf/MailOffice18.png "Image 13. Consent screen")

Luego rellena la información de la aplicación, dominio, etc.

![](/docs_assets/images/ModulesConf/MailOffice19.png "Image 14. App information")

Aplica los siguientes scopes:

*   <fh-copy class="link">https://mail.google.com/</fh-copy>
*   <fh-copy class="link">https://www.googleapis.com/auth/userinfo.profile</fh-copy>
*   <fh-copy class="link">https://www.googleapis.com/auth/userinfo.email</fh-copy>

En el siguiente paso añade los usuarios que usarán la aplicación.

![](/docs_assets/images/ModulesConf/MailOffice20.png "Image 15. Users")

Una vez configurado, añade las credenciales para usar el flujo OAuth.

![](/docs_assets/images/ModulesConf/MailOffice14.png "Image 16. Credentials")

En el primer paso elige el tipo de aplicación: web application.

![](/docs_assets/images/ModulesConf/MailOffice15.png "Image 17. Application type")

Luego asigna un nombre y añade una URL de redirección autorizada: URL base + /Webhooks/MailToken.aspx.

![](/docs_assets/images/ModulesConf/MailOffice16.png "Image 18. Credentials 2")

Una vez registradas las credenciales, puedes descargar un archivo JSON que contiene todos los datos necesarios como ClientID, ClientSecret, etc.

![](/docs_assets/images/ModulesConf/MailOffice17.png "Image 19. Client ID")

Para finalizar, rellena <flx-navbutton class="link" type="openpage" pagetypeid="edit" objectname="SysMail_Account_Endpoint" defaults="{'AccountTypeId':2}" showprogress="false">los campos del endpoint de correo</flx-navbutton> con el client id, tenant id y el secreto generado.

## Nueva configuración para la ruta de la aplicación

Para evitar problemas al tomar automáticamente la URL de la aplicación al autorizar el webmail, se ha creado una <flx-navbutton class="link" type="execprocess" processname="sysEditSettings" objectname="sysSettings" objectwhere="(Settings.[GroupName]='flx-system')" showprogress="false">nueva configuración</flx-navbutton> que permite asignar manualmente el valor de la URL.

## Módulo Webmail

Este módulo permite añadir un correo web a tus proyectos **flexygo**.

![](/docs_assets/images/ModulesConf/mail.png "Image 20. Web Mail")

## Añadir icono de Webmail a la barra de herramientas

El icono ya existe, pero está deshabilitado por defecto. Puedes habilitarlo como administrador en la barra superior.

![](/docs_assets/images/ModulesConf/Mail2.png "Image 21. Webmail icon")

o haciendo clic en el siguiente enlace: <flx-navbutton class="link" type="execprocess" processname="EnableMailSettings" targetid="popup" excludehist="false" showprogress="false">Activar opciones de correo</flx-navbutton>. Tras activarlo, sal y vuelve a iniciar sesión.

## Establecer conexión con el servidor de correo

Para habilitar Webmail debes configurar el servidor de correo. Usa el icono de configuración.

![](/docs_assets/images/ModulesConf/Mail6.png "Image 22. Webmail settings")

Configura los parámetros de tu cuenta de correo:

![](/docs_assets/images/ModulesConf/Mail3.png "Image 23. Webmail settings")

* **SMTP Host:** Host SMTP  
* **PopImap Host:** Host IMAP  
* **Account User Name:** Nombre de la cuenta  
* **Acount:** Tu e-mail  
* **SMTP Port:** Puerto SMTP  
* **PopImap Port:** Puerto POP  
* **Visible Name:** Alias de la cuenta  
* **Acount Password:** Contraseña del correo  
* **SSL:** Si usa SSL  
* **Use TLS:** Poner en true para servidores Exchange

## Vincular correos a tus objetos

Puedes guardar correos localmente y vincularlos a objetos igual que con documentos o imágenes. Para ello carga cualquier formulario y como admin haz clic en la barra lateral derecha.

![](/docs_assets/images/ModulesConf/Mail5.png "Image 24. Webmail settings")

Haz clic en mail settings y completa el formulario.

![](/docs_assets/images/ModulesConf/Mail4.png "Image 25. Web Mail")

* **Object Name:** Objeto al que se vincularán los correos  
* **Object Primary Key:** Clave primaria del objeto  
* **Email Address Field:** Campo e-mail del objeto para hacer el filtrado  
* **Filter Using Domain:** Si se activa, solo usa el dominio del correo para filtrar  
* **Path:** Ruta donde se guardarán los correos localmente