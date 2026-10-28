# How to configure the mailbox with a Gmail account

## Step 1. Enable POP and IMAP

Go into Gmail's settings to enable POP and IMAP.

![](../../docs_assets/images/FAQ/GmailMailbox/1.png)

![](../../docs_assets/images/FAQ/GmailMailbox/2.png)

## Step 2. Prepare Flexygo's access to the account

Google no longer allows less secure apps to sign in with the account's user name and password. You have two options:

* **App password:** go to your Google profile, open the security section, turn on 2-Step Verification and generate an app password. That's the password you'll enter in Flexygo, with basic authentication.

![](../../docs_assets/images/FAQ/GmailMailbox/3.png)

* **OAuth 2.0:** Flexygo also supports Google accounts with *Bearer token* authentication, without storing any password. See [Did you know you can now configure applications' mail and Web Mail accounts with the OAuth 2.0 protocol?](../3DidYouKnow/OAuthMailAccounts.md).

## Step 3. Configure the Flexygo user account

Open the Flexygo user's record, go to the email account section, add a new one, create it and save the user's changes with the access credentials (the app password, if you use basic authentication).

![](../../docs_assets/images/FAQ/GmailMailbox/6.png)

![](../../docs_assets/images/FAQ/GmailMailbox/7.png)

## Step 4. Reload the cache and the application

Flexygo will connect to your inbox and you'll be able to manage it from the platform.

![](../../docs_assets/images/FAQ/GmailMailbox/8.png)

## See also

* [Sincronización con la agenda de mi cuenta de correo](https://help.flexygo.com/support/solutions/articles/154000130134-sincronizaci%C3%B3n-con-la-agenda-de-mi-cuenta-de-correo)
* [Configuración de notificaciones](https://help.flexygo.com/support/solutions/articles/154000215685-configuraci%C3%B3n-de-notificaciones)
