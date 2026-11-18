# Configuración del servidor MCP

El proyecto generado desde la plantilla de Flexygo ya trae la configuración necesaria. No hace falta tocarla para empezar.

---

## El fichero `.mcp.json`

En la raíz del proyecto, `.mcp.json` le dice a Claude Code cómo arrancar el servidor. La plantilla lo trae así:

```json
{
  "mcpServers": {
    "flexygo": {
      "command": "flexygo-mcp",
      "env": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      }
    },
    "stitch": {
      "type": "http",
      "timeout": 600000,
      "url": "https://stitch.googleapis.com/mcp",
      "headers": {
        "X-Goog-Api-Key": "${STITCH_API_KEY}"
      }
    }
  }
}
```

- `command` es la herramienta global `flexygo-mcp`, instalada con el .NET 10 SDK (ver [Prerrequisitos](./1Prerequisites.md)).
- `ASPNETCORE_ENVIRONMENT` decide qué `appsettings` del Backend se leen. Con `Development`, se lee `appsettings.Development.json`. El servidor lo pone así si falta: sin él, funcionaría como producción y ocultaría las cadenas de conexión.
- La entrada `stitch` la usa `/flx-design` para dibujar las pantallas con Google Stitch. Toma la clave de la variable de entorno `STITCH_API_KEY`, así que la clave no se guarda en el fichero. Si no la usas, no estorba; y si ya tienes Stitch configurado en tu propia configuración de Claude y no defines la variable, el servidor quita la entrada del proyecto para que se use la tuya.

Al arrancar, el servidor añade una tercera entrada, `playwright`: el navegador con el que el agente comprueba la aplicación (necesita Node.js y Google Chrome). Abre Chrome con la ventana visible y guarda la sesión iniciada en `.playwright-mcp/`.

Si cambias `.mcp.json` a mano, o lo cambia el servidor, una sesión que ya está en marcha sigue con los servidores con los que empezó: vuelve a abrir el proyecto (en VS Code, *Developer: Reload Window*).

---

## El fichero `.claude/settings.json`

El `.claude/settings.json` que trae la plantilla deja aprobado el servidor `flexygo`, para que Claude Code no lo pregunte cada vez, y declara y enciende el [panel de Flexygo](./7PanelAndBoard.md). Si alguien apaga el panel en un proyecto, el servidor lo respeta.

---

## Lo que el servidor añade al proyecto

Cada vez que arranca, el servidor deja al día en el proyecto lo que es suyo, y no toca lo demás:

- **Los comandos `/flx-*`**, en `.claude/skills/` y, para GitHub Copilot, en `.github/skills/`. Las skills propias del proyecto no se tocan.
- **Su bloque de instrucciones en `.claude/CLAUDE.md`**, entre marcas. Lo que el equipo escriba fuera de ese bloque es del proyecto.
- **En `.claude/settings.local.json`**: la línea de estado de Flexygo y las comprobaciones que vigilan lo que hace el agente (ver [Comprobaciones de seguridad](#comprobaciones-de-seguridad)). Si el proyecto ya tiene su propia línea de estado, la conserva.
- **La entrada `playwright` de `.mcp.json`**, descrita arriba.
- **`tools/app.ps1`**, el script con el que el panel arranca y para la aplicación, si el proyecto no lo tiene.

Los comandos también se pueden instalar desde fuera de Claude Code, antes de abrir el proyecto, con `flexygo-mcp --sync-skills <carpeta del proyecto>`.

---

## Las bases de datos

El servidor no tiene conexiones propias: lee `ConfConnectionString` y `DataConnectionString` del `appsettings` del Backend del proyecto. Si no están configuradas, `/flx-setup` te guía para crear o elegir las bases de datos y escribirlas.

El servidor busca el proyecto en la carpeta en la que lo arranca Claude Code. Si lo arranca desde otra carpeta, la variable de entorno `FLEXYGO_WORKSPACE_DIR` le dice dónde está el proyecto.

---

## Opciones de la línea de comandos

Además de arrancar como servidor, `flexygo-mcp` acepta estas opciones en una terminal:

| Opción | Qué hace |
|---|---|
| `--version` | Dice la versión instalada. |
| `--enable-panel` | Activa el panel de Flexygo en este equipo. Consulta [Cómo activar el panel y el tablero](./7PanelAndBoard.md#como-activar-el-panel-y-el-tablero). |
| `--board` | Abre en el navegador el tablero del desarrollador, con el proyecto de la carpeta actual y los demás proyectos de este equipo. |
| `--sync-skills <carpeta>` | Instala los comandos `/flx-*` en ese proyecto sin abrir Claude Code. |
| `--http` | Arranca el servidor por HTTP en lugar de por la entrada y salida estándar, para clientes MCP que lo necesiten. |

---

## Variables de entorno

| Variable | Para qué |
|---|---|
| `ASPNETCORE_ENVIRONMENT` | Qué `appsettings` del Backend se leen. En `.mcp.json`, `Development`. |
| `FLEXYGO_WORKSPACE_DIR` | La carpeta del proyecto, cuando Claude Code arranca el servidor desde otra. |
| `STITCH_API_KEY` | La clave de Google Stitch, para `/flx-design`. |
| `FLEXYGO_MODEL_PER_PHASE` | Con `auto`, cada comando `/flx-*` lleva el modelo recomendado de su fase. Viene apagada. Consulta [El modelo de cada fase](./6Workflow.md#el-modelo-de-cada-fase). |
| `FLEXYGO_MCP_ERROR_TELEMETRY` | A qué recolector van los errores de las herramientas, u `off` para apagarlo. |
| `FLEXYGO_MCP_TELEMETRY` | `off` apaga la telemetría de producto. |

Las variables del servidor se ponen en el bloque `env` de su entrada en `.mcp.json`, o en el entorno del equipo. `STITCH_API_KEY` es una clave: va siempre en el entorno de tu equipo, nunca escrita en `.mcp.json`, que viaja con el proyecto.

---

## Telemetría

El servidor envía dos cosas:

- **Los errores de las herramientas**, con lo necesario para reproducirlos: la herramienta y sus argumentos (con lo que parece secreto y los valores de SQL tapados), el error, las versiones y la fase y la tarea en que ocurrió. Por defecto van a un recolector de este mismo equipo, así que no salen de él. La variable `FLEXYGO_MCP_ERROR_TELEMETRY` los envía a otro recolector, o los apaga con `off`. Nunca llevan la conversación ni las filas de una consulta. La primera respuesta del servidor en cada sesión lo recuerda. Consulta [Telemetría de errores](./6Workflow.md#telemetria-de-errores).
- **La telemetría de producto**, que sí sale del equipo hacia el recolector de telemetría de Flexygo: los errores inesperados del servidor (su tipo y su mensaje, nunca la sentencia SQL que los produjo) y lo que el agente apunta que el servidor todavía no sabe hacer, descrito y no copiado de lo que pediste. Va con el nombre del proyecto y la versión del servidor. Sirve para saber qué falla y qué falta en todos los proyectos. Viene encendida; `FLEXYGO_MCP_TELEMETRY=off` la apaga.

---

## Comprobaciones de seguridad

El servidor, y las comprobaciones que instala en Claude Code, ponen estos límites:

- **Direcciones de la aplicación.** El panel, el tablero y el script `tools/app.ps1` toman la dirección de la aplicación del `launchSettings.json` del proyecto, y solo abren o arrancan algo en una dirección `http` o `https` de **este equipo** (`localhost`, `127.0.0.1` o `[::1]`). Cualquier otra dirección se ignora.
- **Recarga de la caché.** Para recargar la caché de la aplicación, el servidor inicia sesión con un usuario que pueda hacerlo. Si el Backend está en este equipo, lo hace sin preguntar, y puede usar la contraseña de un usuario de pruebas guardada en `*.InterfaceTest/appsettings.local.json`, siempre que git ignore ese fichero; nunca la repite ni la escribe en ningún sitio, y si no está o no vale, te la pide. Si el Backend está en **otro equipo**, no envía nada: el agente te dice el nombre exacto de ese equipo y te pregunta si quieres enviarle tus credenciales. Solo con tu sí, y solo a ese equipo, inicia sesión.
- **Contraseñas en ficheros.** El agente no puede leer ni imprimir el fichero con las contraseñas de los usuarios de prueba (`*.InterfaceTest/appsettings.local.json`): se le dice qué usar en su lugar. Si lee otro fichero que tiene una contraseña escrita, como un fichero compose o una cadena de conexión, la ve tapada (`***`); y una búsqueda o un comando de consola que la sacaría por pantalla no se ejecuta.
- **Bases de datos y `.flexygo/`.** El agente llega a las bases de datos solo con las herramientas del servidor, nunca con `sqlcmd`. Tampoco escribe a mano dentro de `.flexygo/`, ni desde el editor ni desde la consola, porque esa carpeta solo la escriben las herramientas del servidor; y no guarda capturas del navegador ahí ni en la raíz del proyecto.
- **Roles de administrador.** Para dar a un usuario un rol de administrador o de diseñador, el agente tiene que preguntártelo antes, diciendo a quién.
- **Secretos en git.** El estado del proyecto avisa si un `conf/appsettings*.json` que sigue git guarda secretos, sin enseñar nunca su valor. También avisa de un fichero compose que da una contraseña por defecto o que conecta la aplicación como `sa`, y de un producto terminado sin README propio.

Las comprobaciones de Claude Code (la línea de estado y los límites sobre contraseñas, `sqlcmd` y `.flexygo/`) no se ejecutan si `disableAllHooks` está puesto en alguna configuración de Claude Code; el servidor avisa de ello al arrancar.
