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
      - ASPNETCORE_ENVIRONMENT=Production
      - MAINT_TOKEN=${MAINT_TOKEN}
    secrets:
      - flexygo_config_key
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
      - ASPNETCORE_ENVIRONMENT=Production
      - FLEXYGO_PACKAGES_ROOT=/var/lib/flexygo/packages
    secrets:
      - flexygo_config_key
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
secrets:
  flexygo_config_key:
    file: ./flexygo_config_key.txt
```

With `ASPNETCORE_ENVIRONMENT=Production` the containers keep the passwords and keys of their `appsettings` encrypted. The `flexygo_config_key` secret gives them the key: create the `flexygo_config_key.txt` file **before the first `docker compose up`** (`openssl rand -base64 32 > flexygo_config_key.txt`) and keep it safe. The details are in [Encrypted appsettings](../2ConfigWizard/EncryptedSettings.md#8-docker).

---

## 3) Behavior when bringing up a new version

- Run `docker compose up -d` with the new image.
- If the **app version** > **DB version**, the **frontend enters maintenance mode** automatically. Users see the **maintenance page** (the same as on IIS, in the corporate teal and with its customizations if it has any), which tells them it **reloads by itself** when the update is done.

---

## 4) Update process

1. Go to **`/maintenance/update`**. The **Update available** screen says the application is already on the new version and the database is not yet.
2. Enter the **Maintenance token**, the value of **`MAINT_TOKEN`** in the frontend's *compose*, and press **Update**.
3. The update goes through **five steps**, with the same look as the IIS update wizard. Do not close the window:

    | Step | What it does |
    |---|---|
    | **Backup** | Backup of the configuration and data databases before touching anything |
    | **Working copy** | Restores the databases under another name: the one in use is not touched |
    | **Schema update (DACPAC)** | Applies the new version to that copy |
    | **Customized differences** | Compares your configuration with the new version's |
    | **Database switch** | The updated copy becomes the database in use |

    The connections of `DbConnectionStrings` with `Active = 1` and `UpdateDataModel = 1` are updated, with the **NuGet** package downloaded into `FLEXYGO_PACKAGES_ROOT`. **Show log** shows the log while it runs.

4. When it ends, the **result screen** sums up the database and application versions, the databases updated, the backup and the **customized differences**. If there are differences to review (fields you changed that this version changes too), **they have the new version's value until you review them**. **Review differences** opens the versions page on the resolver, through the administrator login when there is no session; **Later** leaves it for another time. They also open from the version row of the skin2026 sidebar. See [Resolving the customized differences](UpdateFlow.md).
5. The maintenance mode is **turned off**.

If a step fails, **everything is rolled back**: the databases are as they were and Flexygo is still on the previous version. The screen says which step failed, and the detail is in **Show log**, in **View error details** and in the server log. Once it is fixed, start the update again from the maintenance page.

### The versions page in Docker

In Docker, the versions page **explains how to update with the images** and no longer offers update, switch or delete, which make no sense in a container. The release notes of each version and the resolution of the customized differences keep working.

<!-- SCREENSHOT PENDING: /maintenance/update with the five steps running and the result screen with "Review differences", on a Docker install of the branch. -->

---

## 5) Quick diagnostic checklist

#### DbConnectionStrings
- `PackageDbName` correct: only the middle part, without the namespace or `.Database` (e.g. `Conf`)
- `Active = 1` and `UpdateDataModel = 1`

### Settings
- `AutoUpdateURL` valid and reachable from the containers
- `AutoUpdateNugetUser` / `AutoUpdateNugetPassword` defined if the feed requires credentials
- `AutoUpdateBeta` set according to whether you need prerelease

#### FLEXYGO_PACKAGES_ROOT
- Exists and is **writable** in the backend container

#### MAINT_TOKEN
- Defined in the **frontend** and matches the one entered at **`/maintenance/update`**
