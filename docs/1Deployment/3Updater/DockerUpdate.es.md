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

Con `ASPNETCORE_ENVIRONMENT=Production` los contenedores guardan cifradas las contraseñas y claves de sus `appsettings`. El secreto `flexygo_config_key` les da la llave: crea el fichero `flexygo_config_key.txt` **antes del primer `docker compose up`** (`openssl rand -base64 32 > flexygo_config_key.txt`) y guárdalo a salvo. Los detalles están en [Cifrado de los appsettings](../2ConfigWizard/EncryptedSettings.md#8-docker).

---

## 3) Comportamiento al levantar nueva versión

- Lanza `docker compose up -d` con la nueva imagen.
- Si la **versión de la app** > **versión de BD**, el **frontend entra en modo mantenimiento** automáticamente. Los usuarios ven la **página de mantenimiento** (la misma que en IIS, en el verde corporativo y con sus personalizaciones si las tiene), que avisa de que **se recarga sola** al terminar.

---

## 4) Proceso de actualización

1. Accede a **`/maintenance/update`**. La pantalla **Update available** dice que la aplicación ya está en la versión nueva y la base de datos aún no.
2. Introduce el **Maintenance token**, el valor de **`MAINT_TOKEN`** del *compose* del frontend, y pulsa **Update**.
3. La actualización avanza en **cinco pasos**, con el mismo aspecto que el asistente de actualización de IIS. No cierres la ventana:

    | Paso | Qué hace |
    |---|---|
    | **Backup** | Copia de seguridad de las bases de configuración y de datos antes de tocar nada |
    | **Working copy** | Restaura las bases con otro nombre: la que está en uso no se toca |
    | **Schema update (DACPAC)** | Aplica la versión nueva a esa copia |
    | **Customized differences** | Compara tu configuración con la de la versión nueva |
    | **Database switch** | La copia actualizada pasa a ser la base en uso |

    Se actualizan las conexiones de `DbConnectionStrings` con `Active = 1` y `UpdateDataModel = 1`, con el paquete **NuGet** que se descarga en `FLEXYGO_PACKAGES_ROOT`. **Show log** enseña el registro mientras corre.

4. Al terminar, la **pantalla de resultado** resume la versión de la base y de la aplicación, las bases actualizadas, la copia de seguridad y las **diferencias personalizadas**. Si hay diferencias por revisar (campos que cambiaste y que esta versión también cambia), **hasta que las revises tienen el valor de la versión nueva**. **Review differences** abre la página de versiones en el resolutor, pasando por el login de administrador si no hay sesión; **Later** lo deja para otro momento. También se abren desde la fila de la versión del menú lateral de skin2026. Ver [Resolver las diferencias personalizadas](UpdateFlow.md).
5. Se **desactiva** el modo mantenimiento.

Si un paso falla, **se deshace todo**: las bases quedan como estaban y Flexygo sigue en la versión anterior. La pantalla dice qué paso falló, y el detalle está en **Show log**, en **View error details** y en el log del servidor. Cuando lo corrijas, vuelve a lanzar la actualización desde la página de mantenimiento.

### La página de versiones en Docker

En Docker, la página de versiones **explica cómo actualizar con las imágenes** y ya no ofrece actualizar, cambiar de versión ni borrar, que en un contenedor no tienen sentido. Las notas de cada versión y la resolución de las diferencias personalizadas siguen funcionando.

<!-- CAPTURA PENDIENTE: /maintenance/update con los cinco pasos en marcha y la pantalla de resultado con «Review differences», en una instalación Docker de la rama. -->

---

## 5) Checklist de diagnóstico rápido

#### DbConnectionStrings
- `PackageDbName` correcto: solo la parte intermedia, sin el namespace ni `.Database` (ej.: `Conf`)
- `Active = 1` y `UpdateDataModel = 1`

### Settings
- `AutoUpdateURL` válido y accesible desde los contenedores
- `AutoUpdateNugetUser` / `AutoUpdateNugetPassword` definidos si el feed requiere credenciales
- `AutoUpdateBeta` según necesites prerelease

#### FLEXYGO_PACKAGES_ROOT
- Existe y es **escribible** en el contenedor backend  

#### MAINT_TOKEN
- Definido en el **frontend** y coincide con el introducido en **`/maintenance/update`**
