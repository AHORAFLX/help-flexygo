# How do I decrypt and re-encrypt the configuration?

For security, Flexygo keeps the connection strings, the mail password and other keys of its configuration encrypted. They live in the `appsettings` files of the `conf` folder of the Backend and the Frontend, and they are encrypted value by value: the rest of the file stays readable.

* **Which files:** only `appsettings.json` and `appsettings.Production.json`. The others (`appsettings.Development.json`…) always stay in plain text.
* **Where:** in IIS and in production Docker containers. Anywhere else (development, Kestrel, the installer's test Docker) the application decrypts them when it starts.
* **The key:** on Windows there is **one per server** (`%ProgramData%\Flexygo\keys\config.key`), shared by every application on the server. To move an application to another server, `config export-key` on the source and `config import-key` on the destination.
* **Docker:** in production the key is given as the secret `flexygo_config_key`, the same one for every container. If the secret's file is missing, the application does not start and says why.

## Changing a connection string, the mail account or another key

1. In the application's folder, from an administrator console, decrypt the configuration:

    ```
    Flexygo.Backend.exe config decrypt
    ```

    (or `Flexygo.Frontend.exe config decrypt` for the Frontend).

2. Edit the value in `appsettings.json`: the connection string under `ConnectionStrings`, the mail account under `MailSettings`.
3. Restart the application (in IIS, recycle the pool). When it starts it encrypts again whatever is left in plain text.

`config status` says where the key is and what each file holds encrypted.

All the detail (the console, losing the key, updating, moving servers and Docker) is in [Encrypted appsettings](../../1Deployment/2ConfigWizard/EncryptedSettings.md).
