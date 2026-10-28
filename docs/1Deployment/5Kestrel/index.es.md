# Despliegue con Kestrel

Kestrel es el servidor web integrado que incluye .NET. Es ligero, rápido y multiplataforma, por lo que es ideal para **entornos de desarrollo**, pruebas o despliegues personalizados en entornos controlados.

Actualmente, **Flexygo puede ejecutarse directamente con Kestrel sin necesidad de configuraciones adicionales**, aunque en este momento **no contamos con un instalador específico para despliegues finales con Kestrel** como sí hacemos con IIS.

---

## ▶️ Ejecución básica (modo desarrollo)

Para iniciar las aplicaciones frontend y backend usando Kestrel, tienes dos opciones:

### Opción 1: Ejecutables `.exe`

Si has publicado el proyecto con `dotnet publish`, encontrarás archivos `.exe` para cada aplicación:

- Haz doble clic en `Flexygo.Frontend.exe`
- Haz doble clic en `Flexygo.Backend.exe`

En un producto se llaman `{Producto}.Frontend.exe` y `{Producto}.Backend.exe`.

Esto levantará las aplicaciones en los puertos que indica `Kestrel:Endpoints` en el `conf/appsettings.json` de cada una: por defecto `http://localhost:7111` el Frontend y `http://localhost:7110` el Backend.

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

Para que Kestrel arranque automáticamente con el sistema operativo en Linux y se reinicie tras fallos, configúralo como servicio de systemd. En Windows usa el [instalador con IIS](../1Installer/Introduction.md).

### Linux (systemd)

Los pasos son los mismos para el Backend y para el Frontend; el ejemplo es el del Backend.

1. Publica la aplicación para Linux:

```bash
dotnet publish {Producto}.Backend/{Producto}.Backend.csproj -c Release -r linux-x64 --self-contained false -o /opt/flexygo/backend
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
ExecStart=/opt/flexygo/backend/{Producto}.Backend
Restart=always
RestartSec=10
Environment=ASPNETCORE_ENVIRONMENT=Production
Environment=Kestrel__Endpoints__Http__Url=http://localhost:7110

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

Para el Frontend crea `flexygo-frontend.service` con `/opt/flexygo/frontend`, el ejecutable `{Producto}.Frontend` y el puerto `7111`. El Frontend llega al Backend con la clave `BackendEndpoint` de su `conf/appsettings.json`; con los dos en la misma máquina, `http://localhost:7110/api/backend/`.

---

## Reverse proxy con nginx

En producción, coloca nginx delante de Kestrel para gestionar TLS, cabeceras y balanceo de carga.

!!! tip "Requisitos del proxy"
    Las cabeceras que el proxy debe reenviar, los proxies de confianza y la redirección a HTTPS están en [Despliegue tras un proxy inverso](../6ReverseProxy/index.md).

### Instalación de nginx

```bash
sudo apt update && sudo apt install nginx -y
```

### Configuración del virtual host

El navegador, la WebAPI (`/webapi`, `/token`) y el servidor MCP (`/mcp`) solo hablan con el **Frontend**, y es el Frontend quien llama al Backend. Por eso nginx envía todo al Frontend y el Backend se queda escuchando en `localhost`, sin publicarlo. No reescribas rutas: el Frontend atiende rutas que empiezan por `/api/` (`api/frontend/...`, `api/updater/status`, `api/Sys/...`), y el Backend espera las suyas con el prefijo `/api/backend/`.

Crea el archivo `/etc/nginx/sites-available/flexygo`:

```nginx
server {
    listen 80;
    server_name tu-dominio.com;

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

> **Cabeceras de forwarding:** Flexygo atiende siempre `X-Forwarded-Proto` y `X-Forwarded-For` sin configurar nada en `appsettings.json`. Con nginx en la misma máquina basta con las cabeceras del ejemplo; si nginx corre en otra máquina, declara su dirección en `ForwardedHeaders:KnownProxies`. Los detalles están en [Despliegue tras un proxy inverso](../6ReverseProxy/index.md#proxies-de-confianza).
