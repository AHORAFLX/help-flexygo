# ¿Sabías que puedes instalar Flexygo de forma desatendida?

A partir de la versión 10, el Backend puede aplicar por sí solo todos los pasos del [asistente de configuración](../../1Deployment/2ConfigWizard/Configuration.md) al arrancar, sin que nadie abra el asistente. Los valores se leen de la configuración, normalmente de variables de entorno (por ejemplo, en un `docker-compose.yml` o en el `.env`). Así puedes automatizar un despliegue de principio a fin.

!!! note "Nota"
    El antiguo `FlexygoInstaller.exe /unatended ...` ya no existe en la versión 10.

## Variables

| Variable | Obligatoria | Para qué sirve |
|---|---|---|
| `Setup__Unattended` | Sí | `true` activa la configuración desatendida. |
| `Setup__ProjectName` | Sí | Nombre del proyecto. No puede quedar vacío ni ser `rename`. |
| `Setup__AdminPassword` | Sí | Contraseña del usuario administrador. |
| `ConnectionStrings__ConfConnectionString` | Sí | Cadena de conexión completa de la base de datos de configuración. |
| `ConnectionStrings__DataConnectionString` | Sí, si la usa el producto | Cadena de conexión de cada base de datos de datos: una variable `ConnectionStrings__<nombre>` por cada conexión activa que tenga registrada la base de datos de configuración. |
| `MailSettings__Host` | No | Servidor SMTP. Si no se indica, se omite el paso de correo saliente. |
| `MailSettings__Port` | No | Puerto SMTP (por defecto, `25`). |
| `MailSettings__Ssl` | No | `true` para usar SSL. |
| `MailSettings__From`, `MailSettings__UserName`, `MailSettings__Password` | No | Remitente y credenciales del servidor SMTP. |

Las cadenas de conexión deben incluir servidor (`Data Source`), base de datos y autenticación de SQL Server (`User ID` y `Password`); no se admite la seguridad integrada.

## Ejemplo

```yaml
services:
  flx-backend:
    environment:
      Setup__Unattended: "true"
      Setup__ProjectName: "NombreCliente_CRM"
      Setup__AdminPassword: "MyAdminPassword"
      ConnectionStrings__ConfConnectionString: "Data Source=sqlserver;Initial Catalog=CRM_IC;User ID=sa;Password=MyPassword;TrustServerCertificate=True"
      ConnectionStrings__DataConnectionString: "Data Source=sqlserver;Initial Catalog=CRM_Data;User ID=sa;Password=MyPassword;TrustServerCertificate=True"
      MailSettings__Host: "mail.mycompany.com"
      MailSettings__Port: "25"
      MailSettings__Ssl: "true"
      MailSettings__From: "admin@mycompany.com"
      MailSettings__UserName: "MymailUser"
      MailSettings__Password: "MyMailPassword"
```

## Cómo funciona

1. Al arrancar, el Backend valida los valores. Si falta alguno, indica en el log qué variable hay que definir.
2. Configura la base de datos de configuración (la crea, la actualiza o la deja como está), aplica el nombre del proyecto y la contraseña del administrador, y configura cada base de datos de datos y el correo saliente. Usa los mismos pasos que el asistente.
3. Al terminar, guarda `Setup:UnattendedCompleted = true` en el `appsettings.json` del Backend, de modo que no se vuelve a ejecutar en los siguientes arranques.

No hay pantalla: el progreso se escribe en el log. Mientras dura, `api/backend/setup/ready` responde 503, así que el contenedor de Docker aparece como «starting» hasta que termina. Si falla, el Backend se detiene con un código de salida distinto de cero; con una política de reinicio, el contenedor lo vuelve a intentar.
