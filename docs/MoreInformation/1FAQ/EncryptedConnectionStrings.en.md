# How do I modify the encrypted connection strings?

For security reasons, Flexygo encrypts the connection strings by default during installation or upgrade. When you need to change the connection user or password, the configuration must be decrypted first.

## Decryption

1. Open a CMD window with administrator permissions.
2. Go to the directory of the active .NET framework version:

    ```
    cd C:\Windows\Microsoft.NET\Framework\v4.0.30319
    ```

3. Run this command (adjusting the path as needed):

    ```
    aspnet_regiis.exe -pdf "connectionStrings" "C:\webs\Prueba"
    ```

4. Modify the connection strings as needed.

## Re-encryption

Run:

```
aspnet_regiis.exe -pef "connectionStrings" "C:\webs\Prueba"
```

Or upgrade Flexygo, since encryption is re-enabled automatically.

## See also

* [How do I modify the encrypted mail configuration?](EncryptedMailConfig.md)
* [How do I decrypt the connection string and mail account from the Web.config file?](DecryptWebConfig.md)
