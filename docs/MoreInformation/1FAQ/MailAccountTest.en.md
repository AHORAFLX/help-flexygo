# Checking that a mail account works before using it on any of our platforms

Any Flexygo application requires several different mail accounts. Generally you need at least one generic account to send notifications and activation emails.

## Checking accounts

It's essential to verify that these accounts work, bearing in mind that they will be used from the server where the application is published, since these servers can have particular restrictions.

## Testing tool: MailTest.exe

A simple executable application called `MailTest.exe` is provided to run tests. The process is:

1. Fill in the account details to test
2. Enter a test recipient address
3. Fill in the subject and body of the message
4. Click the send button

![](../../docs_assets/images/FAQ/MailAccountTest/1.png)

## Possible results

**Success case:** the application confirms the message was sent successfully, validating that the configuration data is correct.

![](../../docs_assets/images/FAQ/MailAccountTest/2.png)

**Error case:** the application returns an error message that must be analyzed to identify the cause of the failure.

![](../../docs_assets/images/FAQ/MailAccountTest/3.png)

## Support

In some cases you'll need help from the person responsible for systems and mail account management for the domain to resolve configuration, connection, or authentication issues.

## Attachment

Download [MailTest.zip](./readme/utils/MailTest.zip).

## See also

* [Sincronización con la agenda de mi cuenta de correo](https://help.flexygo.com/support/solutions/articles/154000130134-sincronizaci%C3%B3n-con-la-agenda-de-mi-cuenta-de-correo)
* [Funcionamiento integración con AHORA ERP](https://help.flexygo.com/support/solutions/articles/154000151255-funcionamiento-integraci%C3%B3n-con-ahora-erp)
* [AHORA SAT - App móvil - Partes](https://help.flexygo.com/support/solutions/articles/154000152016-ahora-sat-app-m%C3%B3vil-partes)
