# Deploying with Kestrel

Kestrel is the web server built into .NET. It is lightweight, fast, and cross-platform, making it ideal for **development environments**, testing, or custom deployments in controlled environments.

Currently, **Flexygo can run directly with Kestrel with no additional configuration needed**, although at this time **we don't have a specific installer for final Kestrel deployments** the way we do for IIS.

---

## ▶️ Basic run (development mode)

To start the frontend and backend applications using Kestrel, you have two options:

### Option 1: `.exe` executables

If you published the project with `dotnet publish`, you'll find `.exe` files for each application:

- Double-click `Flexygo.WebApp.Frontend.exe`
- Double-click `Flexygo.WebApp.Backend.exe`

This will bring up the applications on their respective ports (for example `http://localhost:5000` and `http://localhost:5001`).

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

For Kestrel to start automatically with the operating system and restart after failures, configure it as a service.

### Windows Service

1. Publish the application for Windows:

```powershell
dotnet publish src/Backend/Backend.csproj -c Release -r win-x64 --self-contained false -o C:\inetpub\flexygo\backend
```

2. Install the service:

```powershell
sc.exe create FlexygoBackend binPath="C:\inetpub\flexygo\backend\Backend.exe" start=auto
sc.exe start FlexygoBackend
```

3. Check that the service is running:

```powershell
sc.exe query FlexygoBackend
```

> To uninstall: `sc.exe stop FlexygoBackend` followed by `sc.exe delete FlexygoBackend`.

### Linux (systemd)

1. Publish the application for Linux:

```bash
dotnet publish src/Backend/Backend.csproj -c Release -r linux-x64 --self-contained false -o /opt/flexygo/backend
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
ExecStart=/opt/flexygo/backend/Backend
Restart=always
RestartSec=10
Environment=ASPNETCORE_ENVIRONMENT=Production
Environment=ASPNETCORE_URLS=http://localhost:5001

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

---

## Reverse proxy with nginx

In production, place nginx in front of Kestrel to handle TLS, headers, and load balancing.

### Installing nginx

```bash
sudo apt update && sudo apt install nginx -y
```

### Virtual host configuration

Create the file `/etc/nginx/sites-available/flexygo`:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location /api/ {
        proxy_pass         http://localhost:5001/;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_set_header   X-Real-IP $remote_addr;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    location / {
        proxy_pass         http://localhost:5000/;
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

> **Forwarding headers:** When traffic reaches Kestrel through nginx, add the following configuration in `appsettings.json` so the application recognizes the client's real protocol:
>
> ```json
> {
>   "ForwardedHeaders": {
>     "ForwardedHeaders": "XForwardedFor, XForwardedProto"
>   }
> }
> ```
