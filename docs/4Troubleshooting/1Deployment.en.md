# Troubleshooting: Deployment

Diagnostic guide for the most common problems when configuring and starting up Flexygo.

---

## Configuration

### The Frontend cannot connect to the Backend

**Symptom:** The Frontend application loads but shows no data. API requests return network errors (`Failed to fetch`, `ERR_CONNECTION_REFUSED`) or CORS errors.

**Cause:** The backend URL configured in the Frontend's `appsettings.json` is incorrect, points to a host that is not reachable, or is missing the protocol (`http://`).

**Solution:**

1. Open the Frontend component's `appsettings.json` in the installation directory.
2. Locate the `ApiUrl` key (or equivalent) and verify that it points to the correct Backend URL:
   ```json
   {
     "ApiUrl": "http://myserver/flexygo-backend"
   }
   ```
3. Make sure the URL includes the protocol (`http://` or `https://`) and the virtual path, if any.
4. If you use HTTPS, verify that the SSL certificate is valid and trusted.
5. Restart the Frontend's application pool in IIS.

!!! tip "Configuration wizard"
    You can use the built-in configuration wizard to set the backend URL without manually editing `appsettings.json`. See the [deployment configuration guide](../1Deployment/2ConfigWizard/Configuration.md).


### The Backend does not start: database error

**Symptom:** The Backend returns HTTP 500 on every request. The IIS logs or Event Viewer show messages such as `Cannot open database`, `Login failed for user`, or `A network-related error occurred`.

**Cause:** The SQL Server connection string in the Backend's `appsettings.json` is incorrect: the server name is misspelled, the credentials are wrong, or the database does not exist.

**Solution:**

1. Open the Backend component's `appsettings.json` in the installation directory.
2. Locate the `ConnectionStrings.DefaultConnection` key and check each part:
   ```json
   {
     "ConnectionStrings": {
       "DefaultConnection": "Server=SERVER_NAME;Database=DATABASE_NAME;User Id=USER;Password=PASSWORD;"
     }
   }
   ```
3. Check that you can connect with those credentials from SQL Server Management Studio or `sqlcmd`.
4. If you use Windows authentication, make sure the application pool account has access to the database.
5. Restart the Backend's application pool.


### Changes to appsettings.json have no effect

**Symptom:** `appsettings.json` is edited but the application keeps behaving the same way. The changes are not reflected.

**Cause:** The application has the file cached in memory. IIS does not automatically detect the change in every environment.

**Solution:**

1. In IIS, select the corresponding application pool.
2. Right-click → **Recycle**.
3. If the problem persists, stop and restart the application pool.


## Development environment

### VS Code does not recognize the project (IntelliSense does not work)

**Symptom:** VS Code shows reference errors in `.cs` files. IntelliSense offers no suggestions or shows "Unable to resolve...". The C# Dev Kit extension shows warnings in the status bar.

**Most common cause A:** The required .NET SDK is not installed, or the version is incorrect.

**Most common cause B:** VS Code was opened in a parent directory instead of the root directory of the project/`.sln` solution.

**Solution A — Check the SDK:**

```bash
dotnet --version
dotnet --list-sdks
```

The Flexygo project requires **.NET 9** for the backend/frontend. The MCP server requires **.NET 10**. If either is missing, download it from [https://dotnet.microsoft.com/download](https://dotnet.microsoft.com/download).

**Solution B — Open the correct directory:**

1. In VS Code, use **File → Open Folder** and select the folder that contains your solution's `.sln` file.
2. Alternatively, open the solution directly from Visual Studio 2022.
3. Reload the window with `Ctrl+Shift+P` → **Developer: Reload Window**.

!!! note "Visual Studio 2022"
    To work with database projects (`.sqlproj`), **Visual Studio 2022** is required. VS 2026 Insiders does not support SDK-style database projects. See the [product requirements](../2ProductDevelopment/1Requirements.md).


### Docker: the container does not start or keeps restarting in a loop

**Symptom:** When running `docker compose up`, one or more containers enter the `Restarting` state. The logs show connection errors or undefined environment variables.

**Most common cause:** Environment variables not defined in the `.env` file, or an incorrect connection string.

**Solution:**

1. Check the container logs:
   ```bash
   docker compose logs flexygo-backend
   ```
2. Check that the `.env` file exists next to `docker-compose.yml` and defines all the required variables (at minimum `SQL_PASSWORD` and `FRONTEND_PORT`/`BACKEND_PORT`).
3. Verify that `AutoUpdateEnable` is set to `false` in production (see the [Docker guide](../1Deployment/4Docker/index.md)):
   ```yaml
   environment:
     AutoUpdateEnable: "false"
   ```
4. Make sure the ports are not already in use by another process:
   ```bash
   netstat -ano | findstr "8080"
   ```
