# Container Update Guide (Maintenance Mode)

## 1) Prerequisites

- **`Settings` table** (in the configuration database) with:
    - `AutoUpdateURL` — URL of the NuGet feed (e.g. https://nuget.ahorabh.com/v3/index.json).
    - `AutoUpdatePackageNamespace` — Product namespace that identifies all the nugets (e.g. from `CRMCORE.Conf.Database` it would be **CRMCORE**).
    - `AutoUpdateBeta` — 0/1 to allow prerelease versions.
- **`DbConnectionStrings` table** (in the configuration database) with:
    - `ConnStringId` (e.g. `ConfConnectionString` / `DataConnectionString`)
    - `PackageDbName` **without** the `ProductName` prefix **or** the `Database` suffix, just the middle part (e.g. `Conf`); the rest is concatenated with the `AutoUpdatePackageNamespace` setting and `.Database`.
    - `Active = 1` and `UpdateDataModel = 1` for the connections that must be updated.

- **Docker Compose**:
    - In **backend**:
      - If using a NuGet repository with credentials, use the `NUGET_USER` and `NUGET_PASSWORD` variables.
      - `FLEXYGO_PACKAGES_ROOT` variable pointing to the **same path** created in the backend's Dockerfile (e.g. `/var/lib/flexygo/packages`).
      - **Healthcheck** so the frontend waits until the backend is ready:
            - The backend container must have `curl` installed.
            - The health route must exist and return 200 (see the example in point 2).
    - In **frontend**:
        - `MAINT_TOKEN` variable (the token that will be requested for the update).
        - **depends_on** on the frontend pointing to the backend with `condition: service_healthy`.

> Note: create the packages folder in the backend's **Dockerfile**, with write permissions for the user running the app:
>
> ```dockerfile
> RUN mkdir -p /var/lib/flexygo/packages \
>  && chown -R 1000:1000 /var/lib/flexygo
> ```
>
> If you use a healthcheck with `curl`, install it:
>
> ```dockerfile
> RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*
> ```
---

## 2) Example `docker-compose.yml`

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

## 3) Behavior when bringing up a new version

- Run `docker compose up -d` with the new image.
- If the **app version** > the **DB version**, the **frontend automatically enters maintenance mode**.

---

## 4) Update process

1. Go to **`/maintenance/update`**.
2. Enter the **`MAINT_TOKEN`** (same value as in the frontend's *compose*).
3. On confirming:
    - The `DbConnectionStrings` connections with `Active = 1` and `UpdateDataModel = 1` are read.
    - The **NuGet** package is downloaded (using `FLEXYGO_PACKAGES_ROOT`).
    - The **updates for all marked DBs** are applied.
4. When finished:
    - Maintenance mode is **disabled**.
    - The user is **redirected** to the login page.

---

## 5) Quick diagnostic checklist

#### DbConnectionStrings
- `PackageId` correct (without `.Database`)
- `Active = 1` and `UpdateDataModel = 1`

### Settings
- `AutoUpdateURL` valid and reachable from the containers
- `AutoUpdateNugetUser` / `AutoUpdateNugetPassword` defined if the feed requires credentials
- `AutoUpdateBeta` set according to whether you need prerelease

#### FLEXYGO_PACKAGES_ROOT
- Exists and is **writable** in the backend container

#### MAINT_TOKEN
- Defined in the **frontend** and matches the one entered at **`/maintenance/update`**
