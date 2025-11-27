# Web Mail

## New OAuth 2.0 credential flow

Both Microsoft and Google are deprecating Basic Auth and migrating to OAuth. In each of the two we have to carry out some additional configurations and prerequisites.

## Microsoft

Register your app using the [Azure portal](https://docs.microsoft.com/en-us/graph/auth-register-app-v2).  
Other example [link](https://www.re-mark-able.net/how-to-access-data-from-the-beta-channel-of-graph-api/).

### Office 365 configuration

Make sure IMAP/POP3/SMTP is enabled for your organization and mailbox.

First log in to Microsoft 365 admin portal at https://admin.microsoft.com/ as an administrator, go to Org settings screen and find Modern authentication entry.

![](/assets/images/ModulesConf/MailOffice4.png "Image 1. Show all settings")

![](/assets/images/ModulesConf/MailOffice5.png "Image 2. Org settings")

Check ‘Turn on modern authentication…‘ for OAuth flows and IMAP, POP3 and SMTP for App passwords flows

![](/assets/images/ModulesConf/MailOffice6.png "Image 3. Modern authentication")

Then go to Users screen:

![](/assets/images/ModulesConf/MailOffice7.png "Image 4. Users")

Select an user and on the Mail tab click Manage email apps

![](/assets/images/ModulesConf/MailOffice8.png "Image 5. User config")

Check IMAP, Pop and Authenticated SMTP to turn on the protocols for this account.

![](/assets/images/ModulesConf/MailOffice9.png "Image 6. Manage email apps")

Have in mind it takes 20-30 minutes for the changes to take effect.

### Azure configuration

In your Active Directory, make sure Enable Security defaults is set to No.

![](/assets/images/ModulesConf/MailOffice10.png "Image 7. Security defaults")

Make sure there are no Conditional Access | Policies defined in your AD

![](/assets/images/ModulesConf/MailOffice11.png "Image 8. Policies")

Once you have registered your app the first thing we will do is inform the base URL of your app + /Webhooks/MailToken.aspx as your redirect URl's.

![](/assets/images/ModulesConf/MailOffice1.png "Image 9. Redirect URL")

Then you need to apply correct API permissions and grant the admin consent for your domain. In the API permissions / Add a permission wizard, select Microsoft Graph and then Delegated permissions to find the following permission scopes listed:

*   offline\_access
*   email
*   IMAP.AccessAsUser.All
*   POP.AccessAsUser.All
*   SMTP.Send
*   User.Read

Remember to Grant admin consent.

![](/assets/images/ModulesConf/MailOffice2.png "Image 10. API permissions") 

Create an app secret and remember its value.

![](/assets/images/ModulesConf/MailOffice3.png "Image 11. Client secret")

To finish fill <flx-navbutton class="link" type="openpage" pagetypeid="edit" objectname="SysMail_Account_Endpoint" defaults="{'AccountTypeId':1}" showprogress="false">mail account endpoint setting fields</flx-navbutton> with your app client id, tenant id and genereted secret.

## Google

First you must login on [https://console.cloud.google.com/](https://console.cloud.google.com/) and select an existing project or create a new one.

![](/assets/images/ModulesConf/MailOffice12.png "Image 12. Projects")

After this you have to search in the API Library section, the Gmail API and activate it

![](/assets/images/ModulesConf/MailOffice13.png "Image 1. Gmail API")

Before creating the OAuth credentials we have to configure the consent screen, the first thing is to select if it will be for internal use (only for the organization) or external. Depending on the use that is going to be given.

![](/assets/images/ModulesConf/MailOffice18.png "Image 13. Consent screen")

Then you must fill your app information, domain, etc...

![](/assets/images/ModulesConf/MailOffice19.png "Image 14. App information")

After that apply the next scopes:

*   https://mail.google.com/
*   https://www.googleapis.com/auth/userinfo.profile
*   https://www.googleapis.com/auth/userinfo.email

In the next step add the email users who will use the application.

![](/assets/images/ModulesConf/MailOffice20.png "Image 15. Users")
Once it is configured you have to add credentials to use OAuth flow.

![](/assets/images/ModulesConf/MailOffice14.png "Image 16. Credentials")

In the first step you have to choose the type of application, in our case web application.

![](/assets/images/ModulesConf/MailOffice15.png "Image 17. Application type")

Then give a name and add an authorized redirect URls, remember that the valid structure is the base URL of your app + /Webhooks/MailToken.aspx

![](/assets/images/ModulesConf/MailOffice16.png "Image 18. Credentials 2")

Once you have registered the credentials you can download a JSON file which has all the data you will need to configure in the application like ClientID, ClientSecret, etc...

![](/assets/images/ModulesConf/MailOffice17.png "Image 19. Client ID")

To finish fill <flx-navbutton class="link" type="openpage" pagetypeid="edit" objectname="SysMail_Account_Endpoint" defaults="{'AccountTypeId':2}" showprogress="false">mail account endpoint setting fields</flx-navbutton> with your app client id, tenant id and genereted secret.

## New setting for application path

To avoid problems when automatically taking the url of the application when authorizing the webmail, we have created <flx-navbutton class="link" type="execprocess" processname="sysEditSettings" objectname="sysSettings" objectwhere="(Settings.[GroupName]='flx-system')" showprogress="false">a new setting</flx-navbutton> so that the value of the URL can be assigned manually by the user.

## Webmail module

This module allows you to add a web mail to your **flexygo** projects.

![](/assets/images/ModulesConf/mail.png "Image 20. Web Mail")

## Add Webmail icon to your toolbar

Icon already exists, but it's disabled by default. You can enable it as Admin on the top toolbar

![](/assets/images/ModulesConf/Mail2.png "Image 21. Webmail icon")

or by clicking on the following link: <flx-navbutton class="link" type="execprocess" processname="EnableMailSettings" targetid="popup" excludehist="false" showprogress="false">Enable Mail Options</flx-navbutton>. After clicking on the link, exit and re-login to the system.

## Establish connection with mail server

To enable Webmail, you need to establish mail server settings. Use the mail settings icon to open settings.

![](/assets/images/ModulesConf/Mail6.png "Image 22. Webmail settings")

Set configuration of your mail account. Bellow you'll see the detailed explication.

![](/assets/images/ModulesConf/Mail3.png "Image 23. Webmail settings")

*   **SMTP Host:** SMTP host
*   **PopImap Host:** IMAP host
*   **Account User Name:** Account name
*   **Acount:** Your e-mail
*   **SMTP Port:** Mail SMTP port
*   **PopImap Port:** Mail POP port
*   **Visible Name:** Acount alias (your name)
*   **Acount Password:** The e-mail account password
*   **SSL:** If it's using SSL security
*   **Use TLS:** Set to true when you're using exchange mail server

## Linking mails to your objects

You can save mails locally and link them to objects exactly the same as with document or image management. To do this just load any object form and as admin click on the right hand side bar.

![](/assets/images/ModulesConf/Mail5.png "Image 24. Webmail settings")

Click on mail settings and fill out the form.

![](/assets/images/ModulesConf/Mail4.png "Image 25. Web Mail")

*   **Object Name:** Object to link e-mails to
*   **Object Primary Key:** Object primery key or object Id
*   **Email Address Field:** Object e-mail field to do the filtering with
*   **Filter Using Domain:** When it's setting, it only use e-mail domain part an not whole email to do filtering
*   **Path:** Path where e-mails will be saved locally