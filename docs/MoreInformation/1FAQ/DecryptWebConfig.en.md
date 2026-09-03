# How do I decrypt the connection string and mail account from the Web.config file?

For security reasons, the Flexygo applications installer encrypts the content of 2 sections of the `Web.config` file, which hold the connection strings and the mail account configuration the system uses to send emails.

There are 2 separate articles for these, since they are different sections within the same file. Both detail the commands to decrypt them as well as to re-encrypt them once the relevant changes have been made.

## Sections to decrypt

* **Connection strings:** [How do I modify the encrypted connection strings?](EncryptedConnectionStrings.md)
* **Mail account configuration:** [How do I modify the encrypted mail configuration?](EncryptedMailConfig.md)

!!! warning "Important note"
    Encryption/decryption is only valid on the machine where the initial installation was performed, since the seed used depends on that specific machine.

    If the file is moved between machines, it is recommended to decrypt it on the original machine first. Otherwise, both sections would need to be manually rewritten in decrypted form.
