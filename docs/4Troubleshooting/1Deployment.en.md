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


### Infinite redirect loop behind a reverse proxy

**Symptom:** The application never loads and the browser keeps redirecting. Inspecting the request shows a **307** response whose `location` header is **identical to the requested URL**. No error appears anywhere: not in the Event Viewer, not in the application logs, not in the IIS logs.

**Cause:** There is a reverse proxy in front (nginx, ARR, a load balancer) that terminates TLS and hands the request to Flexygo over `http` without forwarding the `X-Forwarded-Proto` header. The application then believes the request is insecure and redirects to `https`; the proxy hands it over again via `http` and the cycle never ends. A 307 is a valid response, which is why it is not logged anywhere.

**Solution:**

1. Configure the proxy to forward the original scheme. In nginx, inside the `location` block:
   ```nginx
   proxy_set_header X-Forwarded-Proto $scheme;
   ```
2. Reload the proxy and test again.
3. If you cannot change the proxy right away, disable the redirection in the Frontend's `appsettings.json` and recycle the application pool:
   ```json
   {
     "HttpsRedirection": false
   }
   ```

!!! tip "Full configuration"
    The requirements for a deployment with a proxy in front are in [Deployment behind a reverse proxy](../1Deployment/6ReverseProxy/index.md).


### Access auditing always records the same IP

**Symptom:** All sign-ins appear with the same IP address, or the per-user IP restrictions block people they should not.

**Cause:** There is a reverse proxy in front and the application sees its address instead of the client's. Flexygo only accepts the forwarded IP when the request comes from a declared proxy.

**Solution:**

1. Find out which address the proxy uses to open the connection to the server. In IIS it is the `c-ip` field of the site log, under `C:\inetpub\logs\LogFiles`.
2. Declare it in the `appsettings.json` of both Frontend and Backend:
   ```json
   {
     "ForwardedHeaders": {
       "KnownProxies": [ "192.168.1.10" ]
     }
   }
   ```
3. Check that the proxy forwards the `X-Forwarded-For` header.
4. Recycle the application pools.

!!! note "Proxy on the same machine"
    If the proxy runs on the same server as Flexygo, nothing needs to be declared: local addresses are accepted by default.


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
