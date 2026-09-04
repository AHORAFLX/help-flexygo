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
      MSSQL_PID: "Evaluation"
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
- **Backend (API)**: [http://localhost:60952/swagger](http://localhost:60952/swagger)
- **Database (SQL Server)**: user `sa`, the password you defined

---

## 🧹 Stopping or restarting

To stop and remove all containers:

```bash
docker compose down
```

To view the backend logs:

```bash
docker logs flexygo-backend
```


---

## ⚙️ Additional configuration for production

!!! warning "Disable automatic updates in Docker"
    In production Docker environments, set the `AutoUpdateEnable` environment variable to `false` to avoid unexpected container restarts during an automatic update:

    ```yaml
    environment:
      - AutoUpdateEnable=false
    ```
    Add this variable to the `flx-frontend` and `flx-backend` services in your `docker-compose.yml`.
