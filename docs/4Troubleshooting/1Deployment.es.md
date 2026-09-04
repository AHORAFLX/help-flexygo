# Solución de Problemas: Despliegue

Guía de diagnóstico para los problemas más frecuentes al configurar y poner en marcha Flexygo.

---

## Configuración

### El Frontend no conecta con el Backend

**Síntoma:** La aplicación Frontend carga pero no muestra datos. Las peticiones a la API devuelven errores de red (`Failed to fetch`, `ERR_CONNECTION_REFUSED`) o errores CORS.

**Causa:** La URL del backend configurada en `appsettings.json` del Frontend es incorrecta, apunta a un host no accesible, o falta el protocolo (`http://`).

**Solución:**

1. Abre `appsettings.json` del componente Frontend en el directorio de instalación.
2. Localiza la clave `ApiUrl` (o equivalente) y verifica que apunta a la URL correcta del Backend:
   ```json
   {
     "ApiUrl": "http://miservidor/flexygo-backend"
   }
   ```
3. Asegúrate de que la URL incluye el protocolo (`http://` o `https://`) y la ruta virtual si la hay.
4. Si usas HTTPS, verifica que el certificado SSL es válido y de confianza.
5. Reinicia el pool de aplicaciones del Frontend en IIS.

!!! tip "Asistente de configuración"
    Puedes usar el asistente de configuración integrado para establecer la URL del backend sin editar `appsettings.json` manualmente. Consulta la [guía de configuración del despliegue](../1Deployment/2ConfigWizard/Configuration.md).


### El Backend no arranca: error de base de datos

**Síntoma:** El Backend devuelve HTTP 500 en todas las peticiones. Los logs de IIS o del Event Viewer muestran mensajes como `Cannot open database`, `Login failed for user` o `A network-related error occurred`.

**Causa:** La cadena de conexión a SQL Server en `appsettings.json` del Backend es incorrecta: servidor mal escrito, credenciales erróneas o la base de datos no existe.

**Solución:**

1. Abre `appsettings.json` del componente Backend en el directorio de instalación.
2. Localiza la clave `ConnectionStrings.DefaultConnection` y verifica cada parte:
   ```json
   {
     "ConnectionStrings": {
       "DefaultConnection": "Server=NOMBRE_SERVIDOR;Database=NOMBRE_BD;User Id=USUARIO;Password=CONTRASEÑA;"
     }
   }
   ```
3. Comprueba que puedes conectarte con esas credenciales desde SQL Server Management Studio o `sqlcmd`.
4. Si usas autenticación de Windows, asegúrate de que la cuenta del pool de aplicaciones tiene acceso a la BD.
5. Reinicia el pool de aplicaciones del Backend.


### Cambios en appsettings.json no tienen efecto

**Síntoma:** Se edita `appsettings.json` pero la aplicación sigue comportándose igual. Los cambios no se reflejan.

**Causa:** La aplicación tiene el archivo cacheado en memoria. IIS no detecta el cambio automáticamente en todos los entornos.

**Solución:**

1. En IIS, selecciona el pool de aplicaciones correspondiente.
2. Haz clic derecho → **Reciclar** (Recycle).
3. Si el problema persiste, detén y vuelve a iniciar el pool de aplicaciones.


## Entorno de desarrollo

### VS Code no reconoce el proyecto (IntelliSense no funciona)

**Síntoma:** VS Code muestra errores de referencia en archivos `.cs`. IntelliSense no ofrece sugerencias o muestra "Unable to resolve...". La extensión C# Dev Kit muestra advertencias en la barra de estado.

**Causa más frecuente A:** El .NET SDK requerido no está instalado o la versión es incorrecta.

**Causa más frecuente B:** VS Code se abrió en un directorio padre en lugar del directorio raíz del proyecto/solución `.sln`.

**Solución A — Verificar SDK:**

```bash
dotnet --version
dotnet --list-sdks
```

El proyecto Flexygo requiere **.NET 9** para el backend/frontend. El servidor MCP requiere **.NET 10**. Si falta alguno, descárgalo desde [https://dotnet.microsoft.com/download](https://dotnet.microsoft.com/download).

**Solución B — Abrir el directorio correcto:**

1. En VS Code, usa **Archivo → Abrir carpeta** y selecciona la carpeta que contiene el archivo `.sln` de tu solución.
2. Alternativamente, abre la solución directamente desde Visual Studio 2022.
3. Recarga la ventana con `Ctrl+Shift+P` → **Developer: Reload Window**.

!!! note "Visual Studio 2022"
    Para trabajar con proyectos de base de datos (`.sqlproj`), se requiere **Visual Studio 2022**. VS 2026 Insiders no soporta proyectos de BD estilo SDK. Consulta los [requisitos del producto](../2ProductDevelopment/1Requirements.md).


### Docker: el contenedor no arranca o reinicia en bucle

**Síntoma:** Al ejecutar `docker compose up`, uno o varios contenedores entran en estado `Restarting`. Los logs muestran errores de conexión o variables de entorno no definidas.

**Causa más frecuente:** Variables de entorno no definidas en el archivo `.env` o cadena de conexión incorrecta.

**Solución:**

1. Revisa los logs del contenedor:
   ```bash
   docker compose logs flexygo-backend
   ```
2. Comprueba que el archivo `.env` existe junto al `docker-compose.yml` y define todas las variables requeridas (como mínimo `SQL_PASSWORD` y `FRONTEND_PORT`/`BACKEND_PORT`).
3. Verifica que `AutoUpdateEnable` está a `false` en producción (ver la [guía de Docker](../1Deployment/4Docker/index.md)):
   ```yaml
   environment:
     AutoUpdateEnable: "false"
   ```
4. Asegúrate de que los puertos no están en uso por otro proceso:
   ```bash
   netstat -ano | findstr "8080"
   ```
