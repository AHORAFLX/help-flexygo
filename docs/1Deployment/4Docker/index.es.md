# Despliegue con Docker

Flexygo puede desplegarse fácilmente en contenedores Docker mediante un archivo `docker-compose.yml`. Normalmente intervienen los siguientes servicios:

- `flexygo-frontend` (interfaz web)
- `flexygo-backend` (Web API)
- `flexygo-db` (SQL Server) **opcional** ~ solo para demos o pruebas rápidas

> 🧠 **Recomendación**: para **producción** o entornos serios, usa **SQL Server fuera de Docker**. Ganarás en rendimiento, herramientas y opciones.

---

## ✅ Requisitos

Antes de empezar, asegúrate de tener instalado:

- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/)

---

## 🛠️ Paso 1: Crear el archivo `docker-compose.yml`
### Docker-compose con BD
Copia este contenido en un archivo llamado `docker-compose.yml`:


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
> 🔐 **Usa contraseñas complejas**. SQL Server impone requisitos de complejidad.
### Conectar a SQL Server del contenedor desde tu Management (SSMS/Azure Data Studio)

Si quieres entrar a la BD del contenedor desde tu equipo (SSMS, Azure Data Studio, etc.), publica el puerto del contenedor:

```yaml
  flx-db:
    ports:
      - "14333:1433"   # host:contenedor
```

### Cómo conectarte

- **Servidor**: `localhost,14333`  
- **Usuario**: `sa`  
- **Contraseña**: la de `${SQL_PASSWORD}` del `.env`  

### Docker-compose sin BD

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

## 📁 Paso 2: Crea el ".env"

### Que es y para que sirve el fichero .env

El fichero .env guarda variables de entorno (pares VAR=valor) para no hardcodear datos en el docker-compose.yml.  
Docker Compose lo lee automaticamente si esta en la misma carpeta y permite:

- Reutilizar valores con ${VAR} en el YAML (puertos, cadenas de conexion, etc.).
- Cambiar configuraciones por entorno sin editar el compose (solo cambias .env).
- Mantener credenciales fuera del repositorio (no subir .env a git).

Crea un archivo ".env" en la misma carpeta que tu "docker-compose.yml":

```dotenv
# Puertos expuestos
FRONTEND_PORT=3200
BACKEND_PORT=60952

# Entorno .NET
ASPNETCORE_ENVIRONMENT=Development

# DB en contenedor (solo demos)
SQL_PASSWORD=TuPasswordSegura123!

# DB externa (si usas connection strings directas)
ConnectionStrings__ConfConnectionString=Server=host.docker.internal;Initial Catalog=DatabaseName_IC;User ID=sa;Password=-a123456;TrustServerCertificate=True;Encrypt=False;
ConnectionStrings__DataConnectionString=Server=host.docker.internal;Initial Catalog=DatabaseName_I;User ID=sa;Password=-a123456;TrustServerCertificate=True;Encrypt=False;

# Token mantenimiento (necesario para actualizar la BD)
MAINT_TOKEN=-aZ123456
```
---

## ▶️ Paso 3: Levantar todo el entorno

En el mismo directorio donde tengas el archivo `docker-compose.yml`, ejecuta:

```bash
docker compose up -d
```

Esto descargará las imágenes necesarias y levantará todo automáticamente.

---

## 🧭 Acceder a la aplicación

Una vez finalizado el arranque:

- **Frontend**: [http://localhost:${FRONTEND_PORT}](http://localhost:${FRONTEND_PORT})
- **Backend (API)**: [http://localhost:60952/swagger](http://localhost:60952/swagger)
- **Base de datos (SQL Server)**: usuario `sa`, contraseña la que hayas definido

---

## 🧹 Parar o reiniciar

Para detener y eliminar todos los contenedores:

```bash
docker compose down
```

Para ver los logs del backend:

```bash
docker logs flexygo-backend
```


---

## ⚙️ Configuración adicional para producción

!!! warning "Deshabilitar actualizaciones automáticas en Docker"
    En entornos Docker en producción, establece la variable de entorno `AutoUpdateEnable` a `false` para evitar reinicios inesperados del contenedor durante una actualización automática:

    ```yaml
    environment:
      - AutoUpdateEnable=false
    ```
    Añade esta variable al servicio `flx-frontend` y `flx-backend` en tu `docker-compose.yml`.
