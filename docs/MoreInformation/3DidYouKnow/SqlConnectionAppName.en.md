# Did you know you can identify the source of a SQL connection by application?

To analyze the source of the connections to your database, you can filter using the application's name.

![](../../docs_assets/images/DidYouKnow/SqlConnectionAppName/1.png)

The configuration wizard doesn't add this attribute: if you don't set it, SQL Server shows the data provider's generic name. To identify your application, add the **Application Name** attribute to each connection string in the `ConnectionStrings` section of the Backend's `appsettings.json`:

```json
"ConnectionStrings": {
  "ConfConnectionString": "Data Source=MyServer;Initial Catalog=MyApp_IC;User ID=sa;Password=...;TrustServerCertificate=True;Application Name=MyApp",
  "DataConnectionString": "Data Source=MyServer;Initial Catalog=MyApp_Data;User ID=sa;Password=...;TrustServerCertificate=True;Application Name=MyApp"
}
```

Restart the Backend (in IIS, recycle the application pool) so it uses the new strings.

!!! note "Encrypted strings"
    In IIS and in a production container, connection strings are stored encrypted (`enc:v1:...`). To change them, see [Changing an encrypted value by hand](../../1Deployment/2ConfigWizard/EncryptedSettings.md#changing-an-encrypted-value-by-hand).
