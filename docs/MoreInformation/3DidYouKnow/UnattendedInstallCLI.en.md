# Did you know you can install Flexygo unattended?

Starting with version 10, the Backend can apply every step of the [configuration wizard](../../1Deployment/2ConfigWizard/Configuration.md) on its own when it starts, without anyone opening the wizard. The values are read from configuration, usually from environment variables (for example, in a `docker-compose.yml` or in the `.env` file). This lets you automate a deployment from start to finish.

!!! note "Note"
    The old `FlexygoInstaller.exe /unatended ...` no longer exists in version 10.

## Variables

| Variable | Required | What it's for |
|---|---|---|
| `Setup__Unattended` | Yes | `true` enables the unattended setup. |
| `Setup__ProjectName` | Yes | Project name. It can't be empty or `rename`. |
| `Setup__AdminPassword` | Yes | Password of the administrator user. |
| `ConnectionStrings__ConfConnectionString` | Yes | Full connection string of the configuration database. |
| `ConnectionStrings__DataConnectionString` | Yes, if the product uses it | Connection string of each data database: one `ConnectionStrings__<name>` variable for every active connection registered in the configuration database. |
| `MailSettings__Host` | No | SMTP server. If it isn't set, the outgoing mail step is skipped. |
| `MailSettings__Port` | No | SMTP port (`25` by default). |
| `MailSettings__Ssl` | No | `true` to use SSL. |
| `MailSettings__From`, `MailSettings__UserName`, `MailSettings__Password` | No | Sender and credentials of the SMTP server. |

Connection strings must include the server (`Data Source`), the database and SQL Server authentication (`User ID` and `Password`); integrated security isn't supported.

## Example

```yaml
services:
  flx-backend:
    environment:
      Setup__Unattended: "true"
      Setup__ProjectName: "CustomerName_CRM"
      Setup__AdminPassword: "${ADMIN_PASSWORD}"
      ConnectionStrings__ConfConnectionString: "Data Source=sqlserver;Initial Catalog=CRM_IC;User ID=sa;Password=${SQL_PASSWORD};TrustServerCertificate=True"
      ConnectionStrings__DataConnectionString: "Data Source=sqlserver;Initial Catalog=CRM_Data;User ID=sa;Password=${SQL_PASSWORD};TrustServerCertificate=True"
      MailSettings__Host: "mail.mycompany.com"
      MailSettings__Port: "25"
      MailSettings__Ssl: "true"
      MailSettings__From: "admin@mycompany.com"
      MailSettings__UserName: "MymailUser"
      MailSettings__Password: "${MAIL_PASSWORD}"
```

The passwords go in the `.env` next to the compose, in single quotes so they are taken as is, and that file is not committed to git:

```dotenv
ADMIN_PASSWORD='<admin password>'
SQL_PASSWORD='<SQL Server password>'
MAIL_PASSWORD='<mail password>'
```

A complete compose, with the database in a container, in [Deploying with Docker](../../1Deployment/4Docker/index.md).

## How it works

1. When it starts, the Backend validates the values. If any is missing, the log says which variable must be defined.
2. It sets up the configuration database (creating it, updating it or leaving it as it is), applies the project name and the administrator password, and sets up each data database and the outgoing mail. It uses the same steps as the wizard.
3. When it's done, it saves `Setup:UnattendedCompleted = true` in the Backend's `appsettings.json`, so it doesn't run again on the next starts.

There's no screen: progress is written to the log. While it runs, `api/backend/setup/ready` returns 503, so the Docker container shows as "starting" until it finishes. If it fails, the Backend stops with a non-zero exit code; with a restart policy, the container tries again.
