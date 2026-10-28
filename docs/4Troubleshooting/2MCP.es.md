# Solución de Problemas: MCP

Guía de diagnóstico para los problemas más frecuentes con el servidor `flexygo-mcp` en Claude Code.


## Claude Code no encuentra el servidor

**Síntoma:** Al escribir `/mcp`, el servidor `flexygo` no aparece, o aparece con error. El agente no usa ninguna herramienta de Flexygo.

**Causa A:** Claude Code no está abierto en la carpeta raíz del proyecto, que es donde está `.mcp.json`.

**Causa B:** El servidor del proyecto no está aprobado.

**Causa C:** La herramienta `flexygo-mcp` no está instalada (ver la sección siguiente).

**Solución:**

1. Abre Claude Code en la carpeta raíz del proyecto, la que contiene `.mcp.json` y la carpeta `.claude`.
2. Comprueba que `.mcp.json` tiene la entrada `flexygo` con `"command": "flexygo-mcp"`. Consulta la [configuración del servidor](../2ProductDevelopment/MCP/3Configuration.md).
3. Si Claude Code preguntó si usar el servidor del proyecto y lo rechazaste, actívalo desde `/mcp`.
4. Abre un chat nuevo.


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


## Los comandos `/flx-*` no aparecen

**Síntoma:** El servidor está conectado, pero al escribir `/flx-` no aparece ningún comando.

**Causa:** El servidor instala los comandos en el proyecto al arrancar, y el chat se abrió antes.

**Solución:** Abre un chat nuevo en el proyecto. Si siguen sin aparecer, pide al agente que sincronice los comandos de Flexygo y vuelve a abrir un chat.


## Las herramientas fallan con errores de base de datos

**Síntoma:** Las herramientas aparecen, pero todas devuelven errores de conexión o dicen que no hay cadenas de conexión.

**Causa A:** El `appsettings` del Backend no tiene `ConfConnectionString` y `DataConnectionString`.

**Causa B:** El servidor lee otro `appsettings`. La variable `ASPNETCORE_ENVIRONMENT` de `.mcp.json` decide cuál: con `Development`, `appsettings.Development.json`.

**Solución:** Escribe `/flx-setup`: comprueba qué bases de datos existen, publica las que faltan y escribe las cadenas de conexión. Consulta [Las bases de datos](../2ProductDevelopment/MCP/3Configuration.md#las-bases-de-datos).


## Lo que acaba de crear el agente no aparece en la aplicación

**Síntoma:** El agente creó un objeto o cambió una propiedad, pero la aplicación no lo enseña, una lista responde con un error 500, o aparece `The given key was not present in the dictionary`.

**Causa:** La aplicación en marcha guarda en memoria la definición de los objetos y no la vuelve a leer. Lo que el agente escribe está en la base de datos, pero la aplicación todavía no lo ve. No es un error de configuración.

**Solución:**

1. La primera vez, el agente te pide tu contraseña de Flexygo para recargar la caché. Se guarda solo en memoria, durante esa sesión, y desde entonces la caché se recarga sola tras cada cambio.
2. Si el Backend está en otro equipo, el agente te dice su nombre y te pregunta antes de enviarle tus credenciales. Consulta [Comprobaciones de seguridad](../2ProductDevelopment/MCP/3Configuration.md#comprobaciones-de-seguridad).
3. Si no quieres dar la contraseña, usa el botón **Reload Cache** de la lista de usuarios, o reinicia el Backend.
4. Si tenías la pantalla abierta en el navegador, vuelve a cargarla.


## El panel de Flexygo no aparece

**Síntoma:** No ves la banda sobre el chat ni el panel lateral.

**Causa A:** Falta el paso único `flexygo-mcp --enable-panel` en este equipo.

**Causa B:** El chat se abrió antes de activarlo: el panel aparece al abrir un chat o una sesión nueva.

**Causa C:** El proyecto tiene el panel apagado en su `.claude/settings.json`.

**Causa D:** Usas Claude Code sin interfaz (`claude -p`), donde no hay panel.

**Solución:** Consulta [Cómo activar el panel y el tablero](../2ProductDevelopment/MCP/7PanelAndBoard.md#como-activar-el-panel-y-el-tablero).


## Después de actualizar, el agente no ve lo nuevo

**Síntoma:** Has actualizado el servidor con `dotnet tool update -g flexygo-mcp`, pero el agente no usa las herramientas o los parámetros nuevos.

**Causa:** Un chat ya empezado sigue con la lista de herramientas que recibió al arrancar.

**Solución:** Abre un chat nuevo.
