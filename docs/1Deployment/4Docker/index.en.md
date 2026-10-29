# Deploying with Docker

Flexygo can easily be deployed in Docker containers using a `docker-compose.yml` file. The following services are typically involved:

- `flexygo-frontend` (web interface)
- `flexygo-backend` (Web API)
- `flexygo-db` (SQL Server) **optional** ~ only for demos or quick tests

> 🧠 **Recommendation**: for **production** or serious environments, use **SQL Server outside of Docker**. You'll gain in performance, tooling, and options.

---

## ✅ Requirements

Before you begin, make sure you have installed:

- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/)

---

## 🛠️ Step 1: Create the `docker-compose.yml` file
### Docker-compose with a database
Copy this content into a file named `docker-compose.yml`:


```yaml
services:
  flx-frontend:
    image: flexygo/flexygo-frontend
    restart: unless-stopped
    environment:
      ASPNETCORE_ENVIRONMENT: "Development"
    ports:
      - "${FRONTEND_PORT}:8080"
    volumes:
      - flx-front-conf:/app/conf
      - flx-front-custom:/app/custom
    networks:
      - flx-front-network
    depends_on:
      - flx-backend

  flx-backend:
    image: flexygo/flexygo-backend
    restart: unless-stopped
    environment:
      ASPNETCORE_ENVIRONMENT: "Development"
      MSSQL_SA_PASSWORD: "${SQL_PASSWORD}"
    ports:
      - "60952:8080"
    volumes:
      - flx-back-conf:/app/conf
      - flx-back-custom:/app/custom
    networks:
      - flx-front-network
      - flx-back-network
    depends_on:
      flx-db:
        condition: service_healthy

  flx-db:
    image: flexygo/flexygo-db
    restart: unless-stopped
    environment:
      ACCEPT_EULA: "Y"
      MSSQL_SA_PASSWORD: "${SQL_PASSWORD}"
    networks:
      - flx-back-network
    volumes:
      - flx-db-data:/var/opt/mssql/data/
      - flx-db-log:/var/opt/mssql/log/
      - flx-db-secrets:/var/opt/mssql/secrets/

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
    flx-db-data:
    flx-db-log:
    flx-db-secrets:
```
> 🔐 **Use strong passwords**. SQL Server enforces complexity requirements.

The database image already runs SQL Server Express. To use a licensed edition, add `MSSQL_PID` (for example `Standard`, `Enterprise`, or a product key) to the `environment` of the `flx-db` service.

### Connecting to the container's SQL Server from your Management tool (SSMS/Azure Data Studio)

If you want to access the container's database from your machine (SSMS, Azure Data Studio, etc.), publish the container's port:

```yaml
  flx-db:
    ports:
      - "14333:1433"   # host:container
```

### How to connect

- **Server**: `localhost,14333`  
- **User**: `sa`  
- **Password**: the one set in `${SQL_PASSWORD}` in the `.env`  

### Docker-compose without a database

```yaml
services:
  flx-frontend:
    image: flexygo/flexygo-frontend
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
    image: flexygo/flexygo-backend
    restart: unless-stopped
    environment:
      - ASPNETCORE_ENVIRONMENT=Development
      - ConnectionStrings__ConfConnectionString=${ConnectionStrings__ConfConnectionString}
      - ConnectionStrings__DataConnectionString=${ConnectionStrings__DataConnectionString}  
      - FLEXYGO_PACKAGES_ROOT=/var/lib/flexygo/packages
    ports:
      - "${BACKEND_PORT}:8080"
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

## 📁 Step 2: Create the ".env" file

### What the .env file is and what it's for

The .env file stores environment variables (VAR=value pairs) so you don't hardcode data in the docker-compose.yml.  
Docker Compose reads it automatically if it's in the same folder, and it lets you:

- Reuse values with ${VAR} in the YAML (ports, connection strings, etc.).
- Change per-environment configuration without editing the compose file (you only change .env).
- Keep credentials out of the repository (don't push .env to git).

Create a ".env" file in the same folder as your "docker-compose.yml":

```dotenv
# Exposed ports
FRONTEND_PORT=3200
BACKEND_PORT=60952

# .NET environment
ASPNETCORE_ENVIRONMENT=Development

# DB in container (demos only)
SQL_PASSWORD=TuPasswordSegura123!

# External DB (if using direct connection strings)
ConnectionStrings__ConfConnectionString=Server=host.docker.internal;Initial Catalog=DatabaseName_IC;User ID=sa;Password=-a123456;TrustServerCertificate=True;Encrypt=False;
ConnectionStrings__DataConnectionString=Server=host.docker.internal;Initial Catalog=DatabaseName_I;User ID=sa;Password=-a123456;TrustServerCertificate=True;Encrypt=False;

# Maintenance token (needed to update the DB)
MAINT_TOKEN=-aZ123456
```
---

## ▶️ Step 3: Bring up the whole environment

In the same directory where you have the `docker-compose.yml` file, run:

```bash
docker compose up -d
```

This will download the necessary images and bring everything up automatically.

---

## 🧭 Accessing the application

Once startup is finished:

- **Frontend**: [http://localhost:${FRONTEND_PORT}](http://localhost:${FRONTEND_PORT})
- **Backend (API)**: [http://localhost:60952/scalar/v1](http://localhost:60952/scalar/v1), the API reference in Scalar (the port is the one you publish for `flx-backend`)
- **Database (SQL Server)**: user `sa`, the password you defined

---

## 🧹 Stopping or restarting

To stop and remove all containers:

```bash
docker compose down
```

To view the backend logs:

```bash
docker compose logs flx-backend
```


---

## 📦 Building and deploying your product's Docker images <span class="fh-version-tag" title="Available since version 10">10.0+</span>

Flexygo's images (`flexygo/flexygo-frontend`, `-backend` and `-db`) and those of a product made with the [template](../../2ProductDevelopment/2Template.md) work the same way. This section is what you need to know to build them right and deploy them on another machine.

### Building the images

The database image carries the product version. It is passed when building it:

```bash
docker build --build-arg DAC_VERSION=1.2.3.4 -f <Product>.Conf.Database/Dockerfile .
```

**Without `DAC_VERSION` the image says `1.0.0.0`**: the backend thinks the database is out of date and updates the schema on the first start. With the unattended installation it only takes longer; with the wizard it stays on the maintenance page asking for the `MAINT_TOKEN`.

The template already passes it: `tools/build-docker-images.ps1` takes it from `-Tag` (when it is four numbers) or from `-DacVersion`, `docker compose build` reads it from the `DAC_VERSION` variable, and the [GitHub and GitLab](../../3CICD/3GitHubGitLab.md) pipelines give it the version they work out. The product's `DOCKER.md` explains it in detail.

### What deploying them needs

- **Container names**: `<prefix>-frontend`, `<prefix>-backend` and `<prefix>-db` (in Flexygo, `flx-…`), or those names as aliases on the network. The images expect the frontend to find the backend at `BackendEndpoint` and the backend to find the frontend at `FrontendEndpoint`, and **the backend only hands its keys to the `FrontendEndpoint` host**. If the containers have other names, pass those two variables as environment variables.
- **The backend's `conf` volume must be persistent**: it keeps the connection strings, the keys and the installation-done mark. If it is lost, the installation starts from scratch.
- **Passwords go in a `.env`** next to the compose, out of git, and the compose uses them with `${...}`. Never written in the compose.
- **The database image already runs SQL Server Express.** `MSSQL_PID` is only needed to switch to a licensed edition.
- **The examples use `ASPNETCORE_ENVIRONMENT: "Development"` for testing.** In a real installation set `Production` and give it the encryption key from the first start (see [Additional configuration for production](#additional-configuration-for-production)).

### Backend variables

| Variable | What for |
|---|---|
| `Setup__Unattended`, `Setup__ProjectName`, `Setup__AdminPassword` | Install with no wizard on the first start, only once. If one is missing, the backend stops with an error naming it (`Define Setup__AdminPassword.`) and, with `restart: unless-stopped`, retries until it is fixed. |
| `ConnectionStrings__ConfConnectionString` | Configuration database: complete string, with a SQL Server user. |
| `ConnectionStrings__<id>` | One per active data connection (in Flexygo, `DataConnectionString`), just as complete. |
| `MailSettings__Host`, `__Port`, `__Ssl`, `__From`, `__UserName`, `__Password` | Outgoing mail. Optional. |

Each one in detail, in [Unattended installation](../../MoreInformation/3DidYouKnow/UnattendedInstallCLI.md).

### Example 1: database in a container and unattended installation

Everything in Docker and no wizard: when it comes up, the backend creates the databases, sets the project name and the `admin` password, and goes straight to the sign-in page. The [installer](../1Installer/Deployment.md), with the internal database option, sets up a compose like this one, but without `MAINT_TOKEN`: if you are going to update from the maintenance page, add it yourself.

```yaml
services:
  flx-frontend:
    image: flexygo/flexygo-frontend:${FLEXYGO_TAG}
    restart: unless-stopped
    environment:
      ASPNETCORE_ENVIRONMENT: "Development"
      MAINT_TOKEN: "${MAINT_TOKEN}"
    ports:
      - "${FRONTEND_PORT}:8080"
    volumes:
      - flx-front-conf:/app/conf
      - flx-front-custom:/app/custom
    networks:
      - flx-front-network
    depends_on:
      - flx-backend

  flx-backend:
    image: flexygo/flexygo-backend:${FLEXYGO_TAG}
    restart: unless-stopped
    environment:
      ASPNETCORE_ENVIRONMENT: "Development"
      Setup__Unattended: "true"
      Setup__ProjectName: "${Setup__ProjectName}"
      Setup__AdminPassword: "${Setup__AdminPassword}"
      ConnectionStrings__ConfConnectionString: "Server=flx-db;Initial Catalog=Flexygo_IC;User ID=sa;Password=${SQL_PASSWORD};Encrypt=False;TrustServerCertificate=True"
      ConnectionStrings__DataConnectionString: "Server=flx-db;Initial Catalog=Flexygo_I;User ID=sa;Password=${SQL_PASSWORD};Encrypt=False;TrustServerCertificate=True"
    volumes:
      - flx-back-conf:/app/conf
      - flx-back-custom:/app/custom
    networks:
      - flx-front-network
      - flx-back-network
    depends_on:
      flx-db:
        condition: service_healthy

  flx-db:
    image: flexygo/flexygo-db:${FLEXYGO_TAG}
    restart: unless-stopped
    environment:
      ACCEPT_EULA: "Y"
      MSSQL_SA_PASSWORD: "${SQL_PASSWORD}"
    volumes:
      - flx-db-data:/var/opt/mssql/data/
      - flx-db-log:/var/opt/mssql/log/
      - flx-db-secrets:/var/opt/mssql/secrets/
    networks:
      - flx-back-network

networks:
  flx-front-network:
  flx-back-network:

volumes:
  flx-front-conf:
  flx-front-custom:
  flx-back-conf:
  flx-back-custom:
  flx-db-data:
  flx-db-log:
  flx-db-secrets:
```

```dotenv
FLEXYGO_TAG=10.0.0.19
FRONTEND_PORT=8080
SQL_PASSWORD='<sa password>'
Setup__ProjectName='MyProject'
Setup__AdminPassword='<admin password>'
MAINT_TOKEN='<token for updates>'
```

In single quotes, Docker Compose takes the value as is, even with `$` or `#` in it. You choose the `MAINT_TOKEN`: it is the key the maintenance page asks for to start an [update](../3Updater/DockerUpdate.md).

When it comes up, the backend log (`docker compose logs flx-backend`) shows `Unattended setup started` and, when it finishes, `completed`. The `Setup:UnattendedCompleted` mark stays in the `conf` volume and it does not run again on restart.

The backend does not need `MSSQL_SA_PASSWORD`: the password is already in its connection strings.

### Example 2: SQL Server outside Docker and the wizard

For production, with the database on your own SQL Server. The compose has no connection strings: the first time, the [setup wizard](../2ConfigWizard/Configuration.md) opens, asks for them and saves them in the `conf` volume.

```yaml
services:
  flx-frontend:
    image: flexygo/flexygo-frontend:${FLEXYGO_TAG}
    restart: unless-stopped
    environment:
      ASPNETCORE_ENVIRONMENT: "Development"
      MAINT_TOKEN: "${MAINT_TOKEN}"
    ports:
      - "${FRONTEND_PORT}:8080"
    volumes:
      - flx-front-conf:/app/conf
      - flx-front-custom:/app/custom
    networks:
      - flx-front-network
    depends_on:
      - flx-backend

  flx-backend:
    image: flexygo/flexygo-backend:${FLEXYGO_TAG}
    restart: unless-stopped
    environment:
      ASPNETCORE_ENVIRONMENT: "Development"
    volumes:
      - flx-back-conf:/app/conf
      - flx-back-custom:/app/custom
    networks:
      - flx-front-network
    extra_hosts:
      - "host.docker.internal:host-gateway"

networks:
  flx-front-network:

volumes:
  flx-front-conf:
  flx-front-custom:
  flx-back-conf:
  flx-back-custom:
```

```dotenv
FLEXYGO_TAG=10.0.0.19
FRONTEND_PORT=8080
MAINT_TOKEN='<token for updates>'
```

The wizard suggests `host.docker.internal` as the server (the machine running Docker) and `<Project>_IC` as the configuration database; change them if your SQL Server is elsewhere.

!!! warning "Do not pass the connection strings as environment variables with the wizard"
    An environment variable wins over what the wizard saves: if the compose has `ConnectionStrings__…`, the value you choose in the wizard is not used.

---

## ⚙️ Additional configuration for production

!!! warning "Disable automatic updates in Docker"
    In production Docker environments, set the `AutoUpdateEnable` setting to `false` to avoid unexpected container restarts during an automatic update.

    It is not an environment variable, so setting it in `docker-compose.yml` has no effect: it is a row of the `Settings` table in the configuration database, and it is changed from the Flexygo settings.

### Encryption key as a Docker secret

A production container (`ASPNETCORE_ENVIRONMENT` set to `Production` or not set) keeps the passwords and keys of its `appsettings` encrypted. If it is not given a key, it generates one and leaves it in the `conf` volume, next to what it encrypts. In production, give it as the **Docker secret** `flexygo_config_key`:

```yaml
services:
  flx-frontend:
    environment:
      - ASPNETCORE_ENVIRONMENT=Production
    secrets:
      - flexygo_config_key

  flx-backend:
    environment:
      - ASPNETCORE_ENVIRONMENT=Production
    secrets:
      - flexygo_config_key

secrets:
  flexygo_config_key:
    file: ./flexygo_config_key.txt
```

Create the file **before the first `docker compose up`**, next to `docker-compose.yml`, with a new base64 key:

```bash
openssl rand -base64 32 > flexygo_config_key.txt
```

!!! warning "If the file is missing, the application does not start"
    `docker compose up` does not fail when `flexygo_config_key.txt` does not exist: Docker creates an **empty folder** with that name instead and mounts it as the secret. The application notices and **does not start**, and the container's log (`docker compose logs`) says what it found and how to fix it; it never encrypts with a key of its own. To fix it: `docker compose down`, delete that folder, create the file and start again. The same happens when the file is empty.

- **Every container gets the same secret**: the frontend and the backend, and each replica if there are several. A replica with another key cannot read what the others encrypted.
- **Give it from the first start.** If a container starts without it, it encrypts with a key of its own in the volume, and once it gets the secret later it can no longer read what it encrypted.
- **Keep a copy of the file** off the server and do not commit it to git: without it the encrypted values cannot be recovered.
- The examples on this page are for testing (`Development`) and, like the Docker the installer sets up, they do not encrypt and do not need the secret.

Everything else about encryption, in [Encrypted appsettings](../2ConfigWizard/EncryptedSettings.md).
