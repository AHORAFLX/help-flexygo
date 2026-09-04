# Despliegue con Kestrel

Kestrel es el servidor web integrado que incluye .NET. Es ligero, rápido y multiplataforma, por lo que es ideal para **entornos de desarrollo**, pruebas o despliegues personalizados en entornos controlados.

Actualmente, **Flexygo puede ejecutarse directamente con Kestrel sin necesidad de configuraciones adicionales**, aunque en este momento **no contamos con un instalador específico para despliegues finales con Kestrel** como sí hacemos con IIS.

---

## ▶️ Ejecución básica (modo desarrollo)

Para iniciar las aplicaciones frontend y backend usando Kestrel, tienes dos opciones:

### Opción 1: Ejecutables `.exe`

Si has publicado el proyecto con `dotnet publish`, encontrarás archivos `.exe` para cada aplicación:

- Haz doble clic en `Flexygo.WebApp.Frontend.exe`
- Haz doble clic en `Flexygo.WebApp.Backend.exe`

Esto levantará las aplicaciones en sus respectivos puertos (por ejemplo `http://localhost:5000` y `http://localhost:5001`).

### Opción 2: Usar `dotnet run`

```bash
cd Ruta\Al\Proyecto\Frontend
dotnet run

cd Ruta\Al\Proyecto\Backend
dotnet run
```

Esto compilará y levantará ambas aplicaciones directamente.

---

> Las secciones siguientes cubren la configuración recomendada para entornos de producción con Kestrel.

---

## 🧠 Recomendación actual

- Para desarrollo local: **Kestrel** es ideal por su simplicidad.
- Para producción con Windows: **el instalador con IIS** ofrece la experiencia más guiada y configuración automática.
- Para producción en Linux o entornos personalizados: **Kestrel + nginx** es la alternativa recomendada (ver secciones siguientes).

---

## Ejecutar como servicio del sistema

Para que Kestrel arranque automáticamente con el sistema operativo y se reinicie tras fallos, configúralo como servicio.

### Windows Service

1. Publica la aplicación para Windows:

```powershell
dotnet publish src/Backend/Backend.csproj -c Release -r win-x64 --self-contained false -o C:\inetpub\flexygo\backend
```

2. Instala el servicio:

```powershell
sc.exe create FlexygoBackend binPath="C:\inetpub\flexygo\backend\Backend.exe" start=auto
sc.exe start FlexygoBackend
```

3. Verifica que el servicio está corriendo:

```powershell
sc.exe query FlexygoBackend
```

> Para desinstalar: `sc.exe stop FlexygoBackend` seguido de `sc.exe delete FlexygoBackend`.

### Linux (systemd)

1. Publica la aplicación para Linux:

```bash
dotnet publish src/Backend/Backend.csproj -c Release -r linux-x64 --self-contained false -o /opt/flexygo/backend
```

2. Crea el archivo de unidad en `/etc/systemd/system/flexygo-backend.service`:

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

3. Activa e inicia el servicio:

```bash
sudo systemctl daemon-reload
sudo systemctl enable flexygo-backend
sudo systemctl start flexygo-backend
sudo systemctl status flexygo-backend
```

---

## Reverse proxy con nginx

En producción, coloca nginx delante de Kestrel para gestionar TLS, cabeceras y balanceo de carga.

### Instalación de nginx

```bash
sudo apt update && sudo apt install nginx -y
```

### Configuración del virtual host

Crea el archivo `/etc/nginx/sites-available/flexygo`:

```nginx
server {
    listen 80;
    server_name tu-dominio.com;

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

Activa la configuración y recarga nginx:

```bash
sudo ln -s /etc/nginx/sites-available/flexygo /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### TLS con Let's Encrypt (recomendado)

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d tu-dominio.com
```

Certbot actualizará automáticamente la configuración de nginx para añadir los bloques `listen 443` y el certificado renovable.

> **Cabeceras de forwarding:** Cuando el tráfico llega a Kestrel a través de nginx, añade la siguiente configuración en `appsettings.json` para que la aplicación reconozca el protocolo real del cliente:
>
> ```json
> {
>   "ForwardedHeaders": {
>     "ForwardedHeaders": "XForwardedFor, XForwardedProto"
>   }
> }
> ```
