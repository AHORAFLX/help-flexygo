# Guía de actualización en contenedores (modo mantenimiento)

## 1) Prerrequisitos

- **Tabla `Settings`** (en la BD de configuración) con:
    - `AutoUpdateURL` — URL del feed NuGet (ej.: https://nuget.ahorabh.com/v3/index.json).
    - `AutoUpdatePackageNamespace` — Namespace del producto que identifica todos los nugets. (ej.: de `CRMCORE.Conf.Database` sería **CRMCORE**).
    - `AutoUpdateBeta` — 0/1 para permitir versiones prerelease.
- **Tabla `DbConnectionStrings`** (en la BD de configuración) con:
    - `ConnStringId` (ej.: `ConfConnectionString` / `DataConnectionString`)
    - `PackageDbName` **sin** el prefijo `ProductName` **ni** el sufijo `Database`, solo la parte intermedia (ej.: `Conf`) el resto se concatena con el setting `AutoUpdatePackageNamespace` y .Database.
    - `Active = 1` y `UpdateDataModel = 1` para las conexiones que se deben actualizar.

- **Docker Compose**:
    - En **backend**:
      - En caso de usar un repositorio nuget con credenciales usar las variables `NUGET_USER` y `NUGET_PASSWORD`. 
      - Variable `FLEXYGO_PACKAGES_ROOT` apuntando a la **misma ruta** creada en el Dockerfile del backend (p. ej. `/var/lib/flexygo/packages`).
      - **Healthcheck** para que el frontend espere a que el backend esté listo:
            - El contenedor del backend debe tener `curl` instalado.
            - La ruta de health debe existir y devolver 200 (ver ejemplo en el punto 2).
    - En **frontend**: 
        - Variable `MAINT_TOKEN` (el token que pedirá para la actualización).
        - **depends_on** del frontend sobre el backend con `condition: service_healthy`.

> Nota: crea la carpeta de paquetes en el **Dockerfile** del backend, con permisos de escritura para el usuario que ejecuta la app:
>
> ```dockerfile
> RUN mkdir -p /var/lib/flexygo/packages \
>  && chown -R 1000:1000 /var/lib/flexygo
> ```
>
> Si usas healthcheck con `curl`, instálalo:
>
> ```dockerfile
> RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*
> ```
---

## 2) Ejemplo `docker-compose.yml`

```yaml
services:
  flx-frontend:
    image: flexygo-frontend
    restart: unless-stopped
    environment:
      - ASPNETCORE_ENVIRONMENT=Development
      - MAINT_TOKEN=${MAINT_TOKEN}
    ports:
      - "${FRONTEND_PORT}:8080"
    volumes:
      - flx-front-conf:/app/conf
      - flx-front-custom:/app/custom
    networks:
      - flx-front-network
    depends_on:
      flx-backend:
        condition: service_healthy

  flx-backend:
    image: flexygo-backend
    restart: unless-stopped
    environment:
      - ASPNETCORE_ENVIRONMENT=Development
      - FLEXYGO_PACKAGES_ROOT=/var/lib/flexygo/packages
    volumes:
      - flx-back-conf:/app/conf
      - flx-back-custom:/app/custom
    networks:
      - flx-front-network
      - flx-back-network
    healthcheck:
      test: ["CMD-SHELL", "curl -fsS http://flx-backend:8080/api/backend/Sys/ApplicationStatus || exit 1"]
      interval: 10s
      timeout: 3s
      retries: 10
      start_period: 3s
networks:
  flx-front-network:
    driver: bridge
  flx-back-network:
    driver: bridge
volumes:
    flx-front-conf:
    flx-front-custom:
    flx-back-conf:
    flx-back-custom:
```

---

## 3) Comportamiento al levantar nueva versión

- Lanza `docker compose up -d` con la nueva imagen.
- Si la **versión de la app** > **versión de BD**, el **frontend entra en modo mantenimiento** automáticamente.

---

## 4) Proceso de actualización

1. Accede a **`/maintenance/update`**.
2. Introduce el **`MAINT_TOKEN`** (mismo valor que en el *compose* del frontend).
3. Al confirmar:
    - Se leen las conexiones de `DbConnectionStrings` con `Active = 1` y `UpdateDataModel = 1`.
    - Se descarga el paquete **NuGet** (usando `FLEXYGO_PACKAGES_ROOT`).
    - Se aplican las **actualizaciones de todas las BDs** marcadas.
4. Al finalizar:
    - Se **desactiva** el modo mantenimiento.
    - Se **redirige** al login.

---

## 5) Checklist de diagnóstico rápido

#### DbConnectionStrings
- `PackageId` correcto (sin `.Database`)
- `Active = 1` y `UpdateDataModel = 1`

### Settings
- `AutoUpdateURL` válido y accesible desde los contenedores
- `AutoUpdateNugetUser` / `AutoUpdateNugetPassword` definidos si el feed requiere credenciales
- `AutoUpdateBeta` según necesites prerelease

#### FLEXYGO_PACKAGES_ROOT
- Existe y es **escribible** en el contenedor backend  

#### MAINT_TOKEN
- Definido en el **frontend** y coincide con el introducido en **`/maintenance/update`**
