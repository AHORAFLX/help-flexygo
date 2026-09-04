# Referencia: appsettings.json

El archivo `appsettings.json` del **Backend** contiene toda la configuración de la aplicación. El Asistente de Configuración gestiona automáticamente las claves principales; el resto raramente requiere intervención manual.

---

## Backend — appsettings.json completo

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

1. **Kestrel** — Puerto en el que escucha el Backend. Configurado por el instalador según el entorno. Solo modificar si cambias el puerto manualmente.
2. **ProjectName** — Nombre del proyecto/producto. El instalador lo rellena con el nombre del producto instalado.
3. **Logging** — Niveles de log de la aplicación y del Event Log de Windows. Los valores por defecto son adecuados para producción.
4. **ConnectionStrings** — Cadenas de conexión a las dos bases de datos. El Asistente de Configuración las genera y actualiza automáticamente. `ConfConnectionString` apunta a la BD de configuración y `DataConnectionString` a la BD de datos.
5. **MailSettings** — Parámetros del servidor SMTP. Configurados por el Asistente. La clave `Configured: true` indica que el asistente ya ha pasado por este paso; si se pone a `false`, el asistente vuelve a solicitar la configuración de correo al iniciar la aplicación.
6. **DatabaseNuget** — Fuente NuGet desde donde el sistema comprueba actualizaciones de la base de datos de configuración. No modificar salvo que uses un feed NuGet corporativo propio.
7. **DisableCronJobs** — Deshabilita las tareas programadas internas de Flexygo. Útil en entornos de prueba o cuando hay múltiples instancias del Backend.
8. **FrontendEndpoint** — URL del Frontend tal como la conoce el Backend. Configurada automáticamente por el instalador. Solo modificar en caso de cambio de dominio o puerto tras la instalación.
9. **WebApiOrigins** — Orígenes permitidos para las peticiones CORS a la API. `"*"` permite cualquier origen. Restringir en producción si se requiere.
10. **DebugUpdater** — Activa el modo de depuración del actualizador. Solo para diagnóstico; mantener en `false` en producción.

---

## Claves generadas automáticamente (Backend)

Al arrancar la aplicación por primera vez, el sistema genera y persiste en `appsettings.json` las siguientes claves de seguridad. **El usuario no debe modificarlas** salvo en escenarios muy específicos (p.ej. rotación de claves en entornos con múltiples instancias):

| Clave | Propósito |
|-------|-----------|
| `JwtSettings.SecretKey` | Firma de los tokens JWT de autenticación |
| `DataProtection.ApplicationId` | Identificador de la aplicación para el cifrado de datos sensibles |
| `DataProtection.Key` | Clave de cifrado para la protección de datos de ASP.NET Core |

Estas claves no aparecen en el archivo hasta el primer arranque y son invisibles para el usuario en el flujo normal de instalación y configuración.

---

## Frontend — appsettings.json completo

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

1. **Kestrel** — Puerto en el que escucha el Frontend. Configurado por el instalador. Solo modificar si cambias el puerto manualmente.
2. **Logging** — Niveles de log. Idéntico al Backend; los valores por defecto son adecuados para producción.
3. **BackendEndpoint** — URL de la API del Backend que el Frontend consume. Configurada automáticamente por el instalador. Solo modificar en caso de cambio de dominio o puerto tras la instalación.
4. **WebApiOrigins** — Orígenes permitidos para CORS. `"*"` permite cualquier origen. Restringir en producción si se requiere.
5. **DebugUpdater** — Activa el modo de depuración del actualizador en el Frontend. Mantener en `false` en producción.

## Claves generadas automáticamente (Frontend)

Al igual que el Backend, el Frontend genera y persiste estas claves en el primer arranque. **No modificar** salvo casos muy específicos:

| Clave | Propósito |
|-------|-----------|
| `JwtSettings.SecretKey` | Verificación de los tokens JWT recibidos del Backend |
| `DataProtection.ApplicationId` | Identificador para el cifrado de datos de sesión |
| `DataProtection.Key` | Clave de cifrado para la protección de datos de ASP.NET Core |
