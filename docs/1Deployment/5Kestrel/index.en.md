# Deploying with Kestrel

Kestrel is the web server built into .NET. It is lightweight, fast, and cross-platform, making it ideal for **development environments**, testing, or custom deployments in controlled environments.

Currently, **Flexygo can run directly with Kestrel with no additional configuration needed**, although at this time **we don't have a specific installer for final Kestrel deployments** the way we do for IIS.

---

## ▶️ Basic run (development mode)

To start the frontend and backend applications using Kestrel, you have two options:

### Option 1: `.exe` executables

If you published the project with `dotnet publish`, you'll find `.exe` files for each application:

- Double-click `Flexygo.Frontend.exe`
- Double-click `Flexygo.Backend.exe`

In a product they are called `{Product}.Frontend.exe` and `{Product}.Backend.exe`.

This will bring up the applications on the ports set in `Kestrel:Endpoints` in each one's `conf/appsettings.json`: by default `http://localhost:7111` for the Frontend and `http://localhost:7110` for the Backend.

### Option 2: Using `dotnet run`

```bash
cd Path\To\Project\Frontend
dotnet run

cd Path\To\Project\Backend
dotnet run
```

This will build and start both applications directly.

---

> The following sections cover the recommended configuration for production environments with Kestrel.

---

## 🧠 Current recommendation

- For local development: **Kestrel** is ideal for its simplicity.
- For production on Windows: **the installer with IIS** offers the most guided experience and automatic configuration.
- For production on Linux or custom environments: **Kestrel + nginx** is the recommended alternative (see the following sections).

---

## Running as a system service

For Kestrel to start automatically with the operating system on Linux and restart after failures, configure it as a systemd service. On Windows, use the [installer with IIS](../1Installer/Introduction.md).

### Linux (systemd)

The steps are the same for the Backend and the Frontend; the example is the Backend's.

1. Publish the application for Linux:

```bash
dotnet publish {Product}.Backend/{Product}.Backend.csproj -c Release -r linux-x64 --self-contained false -o /opt/flexygo/backend
```

2. Create the unit file at `/etc/systemd/system/flexygo-backend.service`:

```ini
[Unit]
Description=Flexygo Backend
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/opt/flexygo/backend
ExecStart=/opt/flexygo/backend/{Product}.Backend
Restart=always
RestartSec=10
Environment=ASPNETCORE_ENVIRONMENT=Production
Environment=Kestrel__Endpoints__Http__Url=http://localhost:7110

[Install]
WantedBy=multi-user.target
```

3. Enable and start the service:

```bash
sudo systemctl daemon-reload
sudo systemctl enable flexygo-backend
sudo systemctl start flexygo-backend
sudo systemctl status flexygo-backend
```

For the Frontend, create `flexygo-frontend.service` with `/opt/flexygo/frontend`, the `{Product}.Frontend` executable and port `7111`. The Frontend reaches the Backend through the `BackendEndpoint` key in its `conf/appsettings.json`; with both on the same machine, `http://localhost:7110/api/backend/`.

---

## Reverse proxy with nginx

In production, place nginx in front of Kestrel to handle TLS, headers, and load balancing.

!!! tip "Proxy requirements"
    The headers the proxy must forward, trusted proxies and HTTPS redirection are covered in [Deploying behind a reverse proxy](../6ReverseProxy/index.md).

### Installing nginx

```bash
sudo apt update && sudo apt install nginx -y
```

### Virtual host configuration

The browser, the WebAPI (`/webapi`, `/token`) and the MCP server (`/mcp`) only talk to the **Frontend**, and the Frontend is the one that calls the Backend. So nginx sends everything to the Frontend and the Backend keeps listening on `localhost`, without being published. Don't rewrite paths: the Frontend serves routes starting with `/api/` (`api/frontend/...`, `api/updater/status`, `api/Sys/...`), and the Backend expects its own with the `/api/backend/` prefix.

Create the file `/etc/nginx/sites-available/flexygo`:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass         http://localhost:7111;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_set_header   X-Real-IP $remote_addr;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the configuration and reload nginx:

```bash
sudo ln -s /etc/nginx/sites-available/flexygo /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### TLS with Let's Encrypt (recommended)

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d your-domain.com
```

Certbot will automatically update the nginx configuration to add the `listen 443` blocks and the renewable certificate.

> **Forwarding headers:** Flexygo always honours `X-Forwarded-Proto` and `X-Forwarded-For` without any setting in `appsettings.json`. With nginx on the same machine the headers in the example are enough; if nginx runs on another machine, declare its address in `ForwardedHeaders:KnownProxies`. The details are in [Deploying behind a reverse proxy](../6ReverseProxy/index.md#trusted-proxies).
