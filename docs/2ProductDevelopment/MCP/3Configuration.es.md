# Configuración del servidor MCP

El proyecto generado desde la plantilla de Flexygo ya trae la configuración necesaria. No hace falta tocarla para empezar.

---

## El fichero `.mcp.json`

En la raíz del proyecto, `.mcp.json` le dice a Claude Code cómo arrancar el servidor:

```json
{
  "mcpServers": {
    "flexygo": {
      "command": "flexygo-mcp",
      "env": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      }
    }
  }
}
```

- `command` es la herramienta global `flexygo-mcp`, instalada con el .NET 10 SDK (ver [Prerrequisitos](./1Prerequisites.md)).
- `ASPNETCORE_ENVIRONMENT` decide qué `appsettings` del Backend se leen. Con `Development`, se lee `appsettings.Development.json`.

El fichero `.claude/settings.json` del proyecto deja el servidor `flexygo` activado, para que Claude Code no tenga que preguntarlo cada vez.

!!! note "Diseño con Google Stitch"
    La plantilla trae también una entrada `stitch` en `.mcp.json`, que usa `/flx-design` para dibujar las pantallas. Necesita la variable de entorno `STITCH_API_KEY`. Si no la usas, no estorba.

---

## Las bases de datos

El servidor no tiene conexiones propias: lee `ConfConnectionString` y `DataConnectionString` del `appsettings` del Backend del proyecto. Si no están configuradas, `/flx-setup` te guía para crear o elegir las bases de datos y escribirlas.

---

## Telemetría de errores

Los errores de las herramientas del servidor se registran en un recolector del propio equipo. La variable de entorno `FLEXYGO_MCP_ERROR_TELEMETRY` los envía a otro recolector, o los apaga con `off`. Consulta [Telemetría de errores](./6Workflow.md#telemetria-de-errores).

---

## Comprobaciones de seguridad

El servidor toma algunas direcciones de ficheros que viajan con el proyecto, como `launchSettings.json` o `appsettings.json`. Un proyecto clonado podría traerlas cambiadas, así que el servidor las comprueba antes de usarlas:

- **Direcciones de la aplicación.** El panel, el tablero y el script `tools/app.ps1` solo usan una dirección `http` o `https` de **este equipo** (`localhost`, `127.0.0.1` o `[::1]`). De ella solo se toman el esquema, el equipo y el puerto. Cualquier otra cosa se ignora y no se abre ni se arranca nada con ella: un esquema como `file:`, una dirección de otro equipo o texto añadido detrás de la dirección.
- **Recarga de la caché.** Para recargar la caché de la aplicación, el servidor inicia sesión con tu usuario y contraseña. Si el Backend está en este equipo, lo hace sin preguntar. Si está en **otro equipo**, no envía nada: el agente te dice el nombre exacto de ese equipo y te pregunta si quieres enviarle tus credenciales. Solo con tu sí, y solo a ese equipo, inicia sesión.
