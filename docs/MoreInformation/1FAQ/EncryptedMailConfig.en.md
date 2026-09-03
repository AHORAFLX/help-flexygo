# How do I modify the encrypted mail configuration?

For security reasons, Flexygo automatically encrypts the mail configuration during installation or upgrade. To modify these settings you first need to decrypt them using a few specific Windows commands.

## Steps to decrypt and modify

1. Open a CMD window with administrator permissions.
2. Go to the directory of the active .NET framework version:

    ```
    cd C:\Windows\Microsoft.NET\Framework\v4.0.30319
    ```

    !!! note "Note"
        Adjust the folder version to match the one installed on your system.

3. Run this command to decrypt (replace `C:\webs\Prueba` with your installation's actual path):

    ```
    aspnet_regiis.exe -pdf "system.net/mailSettings/smtp" "C:\webs\Prueba"
    ```

4. You can now edit the mail configuration.
5. To re-encrypt it, run:

    ```
    aspnet_regiis.exe -pef "system.net/mailSettings/smtp" "C:\webs\Prueba"
    ```

    Alternatively, encryption is re-enabled automatically when Flexygo is upgraded.

## See also

* [How do I modify the encrypted connection strings?](EncryptedConnectionStrings.md)
* [How do I decrypt the connection string and mail account from the Web.config file?](DecryptWebConfig.md)
