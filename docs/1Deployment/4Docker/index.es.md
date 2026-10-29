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

La imagen de la base de datos ya trae SQL Server Express. Si tienes licencia de otra edición, añade `MSSQL_PID` (por ejemplo `Standard`, `Enterprise` o una clave de producto) al `environment` del servicio `flx-db`.

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
SQL_PASSWORD='<contraseña de sa>'

# DB externa (si usas connection strings directas)
ConnectionStrings__ConfConnectionString='Server=host.docker.internal;Initial Catalog=DatabaseName_IC;User ID=sa;Password=<contraseña de SQL Server>;TrustServerCertificate=True;Encrypt=False;'
ConnectionStrings__DataConnectionString='Server=host.docker.internal;Initial Catalog=DatabaseName_I;User ID=sa;Password=<contraseña de SQL Server>;TrustServerCertificate=True;Encrypt=False;'

# Token mantenimiento (necesario para actualizar la BD)
MAINT_TOKEN='<token de mantenimiento>'
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
- **Backend (API)**: [http://localhost:60952/scalar/v1](http://localhost:60952/scalar/v1), la referencia de la API en Scalar (el puerto es el que publiques para `flx-backend`)
- **Base de datos (SQL Server)**: usuario `sa`, contraseña la que hayas definido

---

## 🧹 Parar o reiniciar

Para detener y eliminar todos los contenedores:

```bash
docker compose down
```

Para ver los logs del backend:

```bash
docker compose logs flx-backend
```


---

## 📦 Generar y desplegar las imágenes Docker de tu producto <span class="fh-version-tag" title="Disponible desde la versión 10">10.0+</span>

Las imágenes de Flexygo (`flexygo/flexygo-frontend`, `-backend` y `-db`) y las de un producto hecho con la [plantilla](../../2ProductDevelopment/2Template.md) funcionan igual. Esta sección es lo que hay que saber para generarlas bien y desplegarlas en otro equipo.

### Generar las imágenes

La imagen de la base de datos lleva sellada la versión del producto. Se le pasa al construirla:

```bash
docker build --build-arg DAC_VERSION=1.2.3.4 -f <Producto>.Conf.Database/Dockerfile .
```

**Sin `DAC_VERSION` la imagen dice `1.0.0.0`**: el backend cree que la base está desactualizada y, en el primer arranque, actualiza el esquema. Con la instalación desatendida solo tarda más; con el asistente se queda en la página de mantenimiento pidiendo el `MAINT_TOKEN`.

En la plantilla ya se pasa sola: `tools/build-docker-images.ps1` la toma del `-Tag` (cuando son cuatro números) o de `-DacVersion`, `docker compose build` la lee de la variable `DAC_VERSION` y los pipelines de [GitHub y GitLab](../../3CICD/3GitHubGitLab.md) le dan la versión que calculan. El `DOCKER.md` del producto lo explica con detalle.

### Lo imprescindible al desplegarlas

- **Nombres de los contenedores**: `<prefijo>-frontend`, `<prefijo>-backend` y `<prefijo>-db` (en Flexygo, `flx-…`), o esos nombres como alias en la red. Las imágenes traen apuntado que el frontend busca al backend en `BackendEndpoint` y el backend al frontend en `FrontendEndpoint`, y **el backend solo le entrega las claves al host de `FrontendEndpoint`**. Si los contenedores se llaman de otra forma, pasa esas dos variables por entorno.
- **El volumen `conf` del backend tiene que ser persistente**: guarda las cadenas de conexión, las claves y la marca de instalación hecha. Si se pierde, la instalación empieza de cero.
- **Las contraseñas van en un `.env`** junto al compose, fuera de git, y el compose las usa con `${...}`. Nunca escritas en el compose.
- **La imagen de base de datos ya es SQL Server Express.** `MSSQL_PID` solo hace falta para cambiar a una edición con licencia.
- **Los ejemplos usan `ASPNETCORE_ENVIRONMENT: "Development"` para probar.** En una instalación real pon `Production` y dale la llave de cifrado desde el primer arranque (ver [Configuración adicional para producción](#configuracion-adicional-para-produccion)).

### Variables del backend

| Variable | Para qué |
|---|---|
| `Setup__Unattended`, `Setup__ProjectName`, `Setup__AdminPassword` | Instalan sin asistente en el primer arranque, una sola vez. Si falta una, el backend se para con un error que dice cuál (`Define Setup__AdminPassword.`) y, con `restart: unless-stopped`, lo reintenta hasta que se corrija. |
| `ConnectionStrings__ConfConnectionString` | Base de datos de configuración: cadena completa, con usuario de SQL Server. |
| `ConnectionStrings__<id>` | Una por cada conexión de datos activa (en Flexygo, `DataConnectionString`), igual de completa. |
| `MailSettings__Host`, `__Port`, `__Ssl`, `__From`, `__UserName`, `__Password` | Correo saliente. Opcional. |

El detalle de cada una, en [Instalación desatendida](../../MoreInformation/3DidYouKnow/UnattendedInstallCLI.md).

### Ejemplo 1: base de datos en contenedor e instalación desatendida

Todo en Docker y sin asistente: al levantarlo, el backend crea las bases, pone el nombre del proyecto y la contraseña del `admin`, y abre directamente el inicio de sesión. El [instalador](../1Installer/Deployment.md), con la opción de base de datos interna, monta un compose como este, pero sin `MAINT_TOKEN`: si vas a actualizar desde la página de mantenimiento, añádelo tú.

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
SQL_PASSWORD='<contraseña de sa>'
Setup__ProjectName='MiProyecto'
Setup__AdminPassword='<contraseña del admin>'
MAINT_TOKEN='<token para las actualizaciones>'
```

Entre comillas simples, Docker Compose toma el valor tal cual, también con `$` o `#` dentro. El `MAINT_TOKEN` lo eliges tú: es la clave que pide la página de mantenimiento para lanzar una [actualización](../3Updater/DockerUpdate.md).

Al levantarlo, el log del backend (`docker compose logs flx-backend`) dice `Unattended setup started` y, al acabar, `completed`. La marca `Setup:UnattendedCompleted` queda en el volumen `conf` y no se repite al reiniciar.

El backend no necesita `MSSQL_SA_PASSWORD`: la contraseña ya va en sus cadenas de conexión.

### Ejemplo 2: SQL Server fuera de Docker y asistente

Para producción, con la base de datos en un SQL Server propio. El compose no lleva cadenas de conexión: la primera vez se abre el [asistente de configuración](../2ConfigWizard/Configuration.md), que las pide y las guarda en el volumen `conf`.

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
MAINT_TOKEN='<token para las actualizaciones>'
```

El asistente propone `host.docker.internal` como servidor (el equipo donde corre Docker) y `<Proyecto>_IC` como base de configuración; cámbialos si tu SQL Server está en otro sitio.

!!! warning "No pases las cadenas de conexión por entorno con el asistente"
    Una variable de entorno manda sobre lo que guarda el asistente: si el compose lleva `ConnectionStrings__…`, el valor que elijas en el asistente no se usará.

### Sin instalación desatendida: el usuario `admin`

- **Si el asistente crea la base de configuración** (base nueva en tu SQL Server, como en el ejemplo 2), te pide en ese momento el nombre del proyecto y la contraseña del `admin`.
- **Si la base de configuración ya existe** porque viene en la imagen de base de datos (el compose con BD sin las variables `Setup__…`, o un producto como CRM o SAT con su base de configuración en contenedor), el asistente se salta ese paso. Se entra con el usuario **`admin`** y la contraseña **`-aZ123456`**, y la aplicación obliga a cambiarla en el primer inicio de sesión.

!!! note "Productos con los datos en un ERP externo (CRM, SAT)"
    Con la base de configuración en contenedor, en el paso de **bases de datos de datos** el asistente propone como servidor el del contenedor de configuración (p. ej. `flxsat-db`). Cámbialo por el SQL Server del ERP tal como se ve desde el contenedor: `host.docker.internal` si está en el mismo equipo que Docker, o su nombre o IP en la red.

---

## ⚙️ Configuración adicional para producción

!!! warning "Deshabilitar actualizaciones automáticas en Docker"
    En entornos Docker en producción, pon el ajuste `AutoUpdateEnable` a `false` para evitar reinicios inesperados del contenedor durante una actualización automática.

    No es una variable de entorno, así que no sirve ponerlo en el `docker-compose.yml`: es una fila de la tabla `Settings` de la base de datos de configuración, y se cambia desde los parámetros de Flexygo (panel de control → área **Entorno** → *Parámetros*).

### Llave de cifrado como secreto de Docker

Un contenedor en producción (`ASPNETCORE_ENVIRONMENT` en `Production` o sin poner) guarda cifradas las contraseñas y claves de sus `appsettings`. Si no se le da una llave, la genera y la deja en el volumen de la `conf`, junto a lo que cifra. En producción, dásela como **secreto de Docker** `flexygo_config_key`:

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

Crea el fichero **antes del primer `docker compose up`**, junto al `docker-compose.yml`, con una llave nueva en base64:

```bash
openssl rand -base64 32 > flexygo_config_key.txt
```

!!! warning "Si falta el fichero, la aplicación no arranca"
    `docker compose up` no falla si `flexygo_config_key.txt` no existe: Docker crea en su lugar una **carpeta vacía** con ese nombre y la monta como secreto. La aplicación lo ve y **no arranca**, y en el log del contenedor (`docker compose logs`) dice qué ha encontrado y cómo arreglarlo; nunca cifra con una llave propia. Para arreglarlo: `docker compose down`, borra esa carpeta, crea el fichero y vuelve a levantar. Pasa lo mismo si el fichero está vacío.

- **Todos los contenedores reciben el mismo secreto**: el frontend y el backend, y cada réplica si hay varias. Una réplica con otra llave no puede leer lo que cifraron las demás.
- **Dásela desde el primer arranque.** Si un contenedor arranca sin ella, cifra con una llave propia en el volumen, y al darle después el secreto ya no puede leer lo que cifró.
- **Guarda una copia del fichero** fuera del servidor y no lo subas a git: sin él los valores cifrados no se recuperan.
- Los ejemplos de esta página son para probar (`Development`) y, como el Docker que monta el instalador, no cifran ni necesitan el secreto.

Todo lo demás sobre el cifrado, en [Cifrado de los appsettings](../2ConfigWizard/EncryptedSettings.md).
