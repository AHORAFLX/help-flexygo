# Reference: appsettings.json

The **Backend**'s `appsettings.json` file contains all of the application's configuration. The Configuration Wizard automatically manages the main keys; the rest rarely require manual intervention.

---

## Backend — full appsettings.json

```json
{
  "Kestrel": { // (1)!
    "Endpoints": {
      "Http": {
        "Url": "http://localhost:7110"
      }
    }
  },
  "ProjectName": "RENAME", // (2)!
  "Logging": { // (3)!
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    },
    "EventLog": {
      "LogLevel": {
        "Default": "Information",
        "Microsoft.AspNetCore": "Warning"
      }
    }
  },
  "ConnectionStrings": { // (4)!
    "ConfConnectionString": "Data Source=localhost;Initial Catalog=RENAME;User ID=sa;Password=pass;Encrypt=False;Trust Server Certificate=True",
    "DataConnectionString": "Data Source=localhost;Initial Catalog=RENAME;User ID=sa;Password=pass;Encrypt=False;Trust Server Certificate=True"
  },
  "MailSettings": { // (5)!
    "From": "",
    "Host": "",
    "Port": 25,
    "Ssl": false,
    "UserName": "",
    "Password": "",
    "Configured": true
  },
  "DatabaseNuget": { // (6)!
    "PackageId": "Flexygo.Conf.Database",
    "NugetUrl": "https://nuget.ahorabh.com/v3/index.json",
    "PreReleaseVersions": false
  },
  "DisableCronJobs": false, // (7)!
  "FrontendEndpoint": "http://localhost:7111", // (8)!
  "AllowedHosts": "*",
  "WebApiOrigins": "*", // (9)!
  "DebugUpdater": false // (10)!
}
```

1. **Kestrel** — Port the Backend listens on. Configured by the installer according to the environment. Only change it if you manually change the port.
2. **ProjectName** — Name of the project/product. The installer fills it in with the name of the installed product.
3. **Logging** — Log levels for the application and the Windows Event Log. The default values are suitable for production.
4. **ConnectionStrings** — Connection strings for the two databases. The Configuration Wizard generates and updates these automatically. `ConfConnectionString` points to the configuration database and `DataConnectionString` to the data database.
5. **MailSettings** — SMTP server parameters. Configured by the wizard. The `Configured: true` key indicates that the wizard has already gone through this step; if set to `false`, the wizard will ask for the mail configuration again when the application starts.
6. **DatabaseNuget** — NuGet source from which the system checks for updates to the configuration database. Do not modify unless you use your own corporate NuGet feed.
7. **DisableCronJobs** — Disables Flexygo's internal scheduled tasks. Useful in test environments or when there are multiple Backend instances.
8. **FrontendEndpoint** — URL of the Frontend as known by the Backend. Configured automatically by the installer. Only change it if the domain or port changes after installation.
9. **WebApiOrigins** — Allowed origins for CORS requests to the API. `"*"` allows any origin. Restrict it in production if required.
10. **DebugUpdater** — Enables the updater's debug mode. For diagnostics only; keep it set to `false` in production.

---

## Automatically generated keys (Backend)

The first time the application starts, the system generates and persists the following security keys in `appsettings.json`. **The user should not modify them** except in very specific scenarios (e.g. key rotation in environments with multiple instances):

| Key | Purpose |
|-------|-----------|
| `JwtSettings.SecretKey` | Signs the authentication JWT tokens |
| `DataProtection.ApplicationId` | Application identifier for encrypting sensitive data |
| `DataProtection.Key` | Encryption key for ASP.NET Core data protection |

These keys do not appear in the file until the first startup and are invisible to the user in the normal installation and configuration flow.

---

## Frontend — full appsettings.json

```json
{
  "Kestrel": { // (1)!
    "Endpoints": {
      "Http": {
        "Url": "http://localhost:7111"
      }
    }
  },
  "Logging": { // (2)!
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    },
    "EventLog": {
      "LogLevel": {
        "Default": "Information",
        "Microsoft.AspNetCore": "Warning"
      }
    }
  },
  "BackendEndpoint": "http://localhost:7110/api/backend/", // (3)!
  "AllowedHosts": "*",
  "WebApiOrigins": "*", // (4)!
  "DebugUpdater": false // (5)!
}
```

1. **Kestrel** — Port the Frontend listens on. Configured by the installer. Only change it if you manually change the port.
2. **Logging** — Log levels. Identical to the Backend; the default values are suitable for production.
3. **BackendEndpoint** — URL of the Backend API consumed by the Frontend. Configured automatically by the installer. Only change it if the domain or port changes after installation.
4. **WebApiOrigins** — Allowed origins for CORS. `"*"` allows any origin. Restrict it in production if required.
5. **DebugUpdater** — Enables the updater's debug mode in the Frontend. Keep it set to `false` in production.

## Automatically generated keys (Frontend)

Just like the Backend, the Frontend generates and persists these keys on first startup. **Do not modify** except in very specific cases:

| Key | Purpose |
|-------|-----------|
| `JwtSettings.SecretKey` | Verifies the JWT tokens received from the Backend |
| `DataProtection.ApplicationId` | Identifier for session data encryption |
| `DataProtection.Key` | Encryption key for ASP.NET Core data protection |
