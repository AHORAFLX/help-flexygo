# Solución de Problemas: MCP

Guía de diagnóstico para los problemas más frecuentes con el servidor `flexygo-mcp`.


## El cliente de IA no encuentra el servidor

**Síntoma en VS Code:** El servidor `flexygo` no aparece en el panel MCP, o aparece como "disconnected" / "error". Copilot no lista las herramientas de Flexygo.

**Síntoma en Claude Desktop:** Las herramientas de Flexygo no aparecen en el panel de herramientas disponibles.

**Causa más frecuente A:** El servidor `flexygo-mcp` no está en ejecución.

**Causa más frecuente B:** La URL configurada en el cliente no es correcta.

**Solución A — Verificar que el servidor está corriendo:**

Abre un terminal y ejecuta:
```bash
flexygo-mcp
```

El servidor debe mostrar una salida similar a:
```
Flexygo MCP Server iniciado en http://localhost:5100
Esperando conexiones...
```

Mantén el terminal abierto mientras uses el cliente de IA.

**Solución B — Verificar la URL del cliente:**

- **VS Code:** Comprueba que la URL en la configuración MCP es `http://localhost:5100` (sin barra final).
- **Claude Desktop:** Verifica que `claude_desktop_config.json` contiene:
  ```json
  {
    "mcpServers": {
      "flexygo": {
        "url": "http://localhost:5100"
      }
    }
  }
  ```

Después de corregir, reinicia el cliente de IA.


## `flexygo-mcp` no se reconoce como comando

**Síntoma:** Al ejecutar `flexygo-mcp` en el terminal aparece el error:
```
'flexygo-mcp' is not recognized as an internal or external command
```
o en PowerShell:
```
The term 'flexygo-mcp' is not recognized as the name of a cmdlet, function...
```

**Causa A:** .NET 10 SDK no está instalado.

**Causa B:** La tool global `flexygo-mcp` no está instalada o la instalación falló.

**Causa C:** El directorio de tools globales de .NET no está en el PATH del sistema.

**Solución:**

1. Verifica que .NET 10 SDK está instalado:
   ```bash
   dotnet --list-sdks
   ```
   Si no aparece una versión `10.x.x`, descárgala desde [https://dotnet.microsoft.com/download](https://dotnet.microsoft.com/download).

2. Comprueba si la tool ya está instalada:
   ```bash
   dotnet tool list -g
   ```
   Busca `flexygo-mcp` en la lista.

3. Si no aparece, instálala manualmente:
   ```bash
   dotnet tool install -g flexygo-mcp
   ```

4. Si el comando sigue sin reconocerse, añade el directorio de tools de .NET al PATH:
   - **Windows:** `%USERPROFILE%\.dotnet\tools`
   - **Linux/macOS:** `~/.dotnet/tools`

!!! tip "Instalación automática"
    Al crear un producto nuevo desde el Instalador, `flexygo-mcp` se instala automáticamente. Si el error ocurre después de una instalación manual, sigue los pasos anteriores. Consulta los [prerrequisitos de MCP](../2ProductDevelopment/MCP/1Prerequisites.md).


## El servidor arranca pero las herramientas no aparecen

**Síntoma:** `flexygo-mcp` está en ejecución y responde en `http://localhost:5100`, pero el cliente de IA no lista ninguna herramienta de Flexygo (o lista 0 tools).

**Causa A:** El archivo `mcp.json` falta en el directorio raíz del proyecto Flexygo.

**Causa B:** El `mcp.json` tiene la URL del backend incorrecta — el servidor MCP no puede conectarse al backend para registrar las herramientas.

**Causa C:** El cliente no se reconectó al servidor después de que éste arrancó.

**Solución A — Verificar mcp.json:**

1. Comprueba que existe `mcp.json` en la raíz de tu proyecto (al mismo nivel que `appsettings.json`):
   ```bash
   ls mcp.json
   ```
2. El archivo debe tener una estructura similar a:
   ```json
   {
     "backendUrl": "http://localhost/flexygo-backend",
     "apiKey": "TU_API_KEY"
   }
   ```
3. Asegúrate de que `backendUrl` apunta al Backend de Flexygo en ejecución.

**Solución B — Forzar reconexión en el cliente:**

- **VS Code:** Recarga la ventana (`Ctrl+Shift+P` → **Developer: Reload Window**) o reinicia VS Code.
- **Claude Desktop:** Cierra y vuelve a abrir la aplicación.


## Puerto 5100 ya está en uso

**Síntoma:** Al arrancar `flexygo-mcp` aparece el error:
```
Failed to bind to address http://localhost:5100: address already in use
```

**Causa:** Otro proceso está escuchando en el puerto 5100 (puede ser una instancia anterior del servidor MCP que no se cerró correctamente, u otro servicio).

**Solución:**

1. Identifica qué proceso usa el puerto:
   ```bash
   # Windows
   netstat -ano | findstr ":5100"
   ```
   Anota el PID (última columna).

2. Termina el proceso:
   ```bash
   # Windows
   taskkill /PID {PID} /F
   ```

3. Vuelve a arrancar `flexygo-mcp`.

!!! note "Instancias anteriores"
    Si cierras el terminal donde corría `flexygo-mcp` con Ctrl+C, el proceso normalmente termina. Si el terminal se cerró de forma abrupta, puede quedar un proceso huérfano. El paso anterior lo resuelve.


## Errores al ejecutar herramientas (acceso denegado, backend inaccesible)

**Síntoma:** El servidor MCP está en ejecución y las herramientas aparecen en el cliente, pero al invocarlas devuelven errores como:

- `Error: Unable to connect to backend`
- `Error: Access denied` / `Unauthorized`
- `Error: Database connection failed`

**Causa más frecuente A:** El Backend de Flexygo no está en ejecución o no es accesible desde el servidor MCP.

**Causa más frecuente B:** Las credenciales en `mcp.json` (clave API, usuario) son incorrectas o han expirado.

**Solución:**

1. Verifica que el Backend está corriendo accediendo a su URL en el navegador o con `curl`:
   ```bash
   curl http://localhost/flexygo-backend/api/health
   ```
   Debe responder con HTTP 200.

2. Revisa las credenciales en `mcp.json`:
   - La `apiKey` debe coincidir con la configurada en el Backend.
   - La `backendUrl` debe ser accesible desde la máquina donde corre el servidor MCP.

3. Comprueba los logs del servidor MCP en el terminal para ver el error específico — el mensaje de error completo suele indicar exactamente qué falla.

Consulta la [guía de configuración de MCP](../2ProductDevelopment/MCP/3Configuration.md) para ver la estructura completa de `mcp.json`.


## Herramienta específica no disponible

**Síntoma:** La mayoría de herramientas funcionan pero una o varias herramientas concretas no aparecen o devuelven error al invocarlas.

**Causa:** La herramienta requiere que una funcionalidad específica del Backend esté habilitada o que el producto tenga cierta configuración.

**Solución:**

1. Consulta la [referencia de herramientas MCP](../2ProductDevelopment/MCP/4Tools.md) para ver los requisitos de cada herramienta.
2. Verifica que el Backend de Flexygo tiene habilitado el módulo o endpoint que la herramienta necesita.
3. Reinicia el servidor MCP para forzar la redescubierta de herramientas disponibles.
