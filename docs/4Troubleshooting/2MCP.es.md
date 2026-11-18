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
   dotnet tool install -g flexygo-mcp --add-source https://nuget.ahorabh.com/v3/index.json
   ```

4. Si el comando sigue sin reconocerse, añade el directorio de tools de .NET al PATH:
   - **Windows:** `%USERPROFILE%\.dotnet\tools`
   - **Linux/macOS:** `~/.dotnet/tools`

!!! tip "Instalación automática"
    Al crear un producto nuevo desde el Instalador, `flexygo-mcp` se instala automáticamente. Si el error ocurre después de una instalación manual, sigue los pasos anteriores. Consulta los [prerrequisitos de MCP](../2ProductDevelopment/MCP/1Prerequisites.md).


## Los comandos `/flx-*` no aparecen

**Síntoma:** El servidor está conectado, pero al escribir `/flx-` no aparece ningún comando.

**Causa:** El servidor instala los comandos en el proyecto al arrancar, y la sesión se abrió antes.

**Solución:** Vuelve a abrir el proyecto en Claude Code (en VS Code, *Developer: Reload Window*), que recoge los comandos y las instrucciones del proyecto. Si siguen sin aparecer, instálalos desde una terminal abierta en la carpeta del proyecto y vuelve a abrirlo:

```bash
flexygo-mcp --sync-skills .
```


## Las herramientas fallan con errores de base de datos

**Síntoma:** Las herramientas aparecen, pero todas devuelven errores de conexión o dicen que no hay cadenas de conexión.

**Causa A:** El `appsettings` del Backend no tiene `ConfConnectionString` y `DataConnectionString`.

**Causa B:** El servidor lee otro `appsettings`. La variable `ASPNETCORE_ENVIRONMENT` de `.mcp.json` decide cuál: con `Development`, `appsettings.Development.json`.

**Solución:** Escribe `/flx-setup`: comprueba qué bases de datos existen, publica las que faltan y escribe las cadenas de conexión. Consulta [Las bases de datos](../2ProductDevelopment/MCP/3Configuration.md#las-bases-de-datos).


## Lo que acaba de crear el agente no aparece en la aplicación

**Síntoma:** El agente creó un objeto o cambió una propiedad, pero la aplicación no lo enseña, una lista responde con un error 500, o aparece `The given key was not present in the dictionary`.

**Causa:** La aplicación en marcha guarda en memoria la definición de los objetos y no la vuelve a leer. Lo que el agente escribe está en la base de datos, pero la aplicación todavía no lo ve. No es un error de configuración.

**Solución:**

1. Tras cada cambio, el servidor recarga la caché él solo. Para eso inicia sesión con un usuario que pueda hacerlo: si el proyecto guarda la contraseña de un usuario de pruebas que puede, la usa; si no, el agente te pide la tuya una vez. Se guarda solo en memoria, durante esa sesión.
2. Si el Backend está en otro equipo, el agente te dice su nombre y te pregunta antes de enviarle tus credenciales. Consulta [Comprobaciones de seguridad](../2ProductDevelopment/MCP/3Configuration.md#comprobaciones-de-seguridad).
3. Si no quieres dar la contraseña, usa el botón **Reload Cache** de la lista de usuarios, o reinicia el Backend.
4. Si tenías la pantalla abierta en el navegador, vuelve a cargarla.


## El agente no puede guardar un módulo, un plugin o un proceso

**Síntoma:** El agente dice que el servidor ha rechazado un módulo HTML, un plugin, un parámetro de proceso, un procedimiento o una vista.

**Causa:** Lo que intentaba guardar es algo que el servidor no deja construir: cargar código a mano o desde una CDN, poner código en línea (`onclick` y similares) en un módulo HTML, decidir comparando con el rol `'admins'`, tomar el usuario o el rol del navegador, o construir SQL al ejecutarse sin tu permiso.

**Solución:** El rechazo dice qué usar en su lugar, y el agente lo hace así. No es un fallo: consulta [Lo que el agente no construye](../2ProductDevelopment/MCP/6Workflow.md#lo-que-el-agente-no-construye).


## El desarrollo no se cierra

**Síntoma:** Todo está construido y verificado, pero el estado sigue pidiendo `/flx-security`, `/flx-quality` o `/flx-release`.

**Causa A:** A una regla de seguridad le falta su prueba con el rol. Una regla que quita algo solo pasa si el intento se **rechazó**.

**Causa B:** Un cupo de calidad está por encima de su límite y no tiene apuntado su motivo.

**Causa C:** La auditoría de seguridad de `/flx-release` tiene un hallazgo alto abierto. Un arreglo construido después de la auditoría la vuelve a abrir, y `/flx-release` audita de nuevo lo que cambió.

**Causa D:** La comprobación final salió en rojo: una prueba que falla, un recorrido que no llegó a ejecutarse, o unos datos de demostración que no cargan en una base nueva. Las bases `<base>_release` se conservan para que se pueda mirar qué pasó.

**Solución:** Escribe `/flx-status`: dice qué regla, qué cupo, qué hallazgo o qué parte de la comprobación final falla. Arregla la regla y vuelve a probarla; baja cada cupo de su límite o di por qué se queda así; cierra cada hallazgo alto arreglándolo o aceptándolo tú; y deja que el arreglo de la comprobación final se construya como una tarea más del último bloque, con `/flx-execute`, antes de volver a `/flx-release`. La auditoría no la hace el chat que construyó la aplicación, sino un agente aparte. Consulta [Seguridad: quién puede qué](../2ProductDevelopment/MCP/6Workflow.md#seguridad-quien-puede-que), [La auditoría de seguridad](../2ProductDevelopment/MCP/6Workflow.md#la-auditoria-de-seguridad), [Los cupos de calidad](../2ProductDevelopment/MCP/6Workflow.md#los-cupos-de-calidad) y [La comprobación final](../2ProductDevelopment/MCP/6Workflow.md#la-comprobacion-final-flx-release).


## El panel de Flexygo no aparece

**Síntoma:** No ves la banda sobre el chat ni el panel lateral.

**Causa A:** Claude Code no sabe dónde está el panel en este equipo: falta el paso único `flexygo-mcp --enable-panel`.

**Causa B:** El chat se abrió antes de activarlo: el panel aparece al abrir un chat o una sesión nueva.

**Causa C:** El proyecto tiene el panel apagado en su `.claude/settings.json`.

**Causa D:** Usas Claude Code sin interfaz (`claude -p`), donde no hay panel.

**Solución:** Consulta [Cómo activar el panel y el tablero](../2ProductDevelopment/MCP/7PanelAndBoard.md#como-activar-el-panel-y-el-tablero).


## Después de actualizar, el agente no ve lo nuevo

**Síntoma:** Has actualizado el servidor con `dotnet tool update -g flexygo-mcp`, pero el agente no usa las herramientas o los parámetros nuevos.

**Causa:** Un chat ya empezado sigue con el servidor y la lista de herramientas que recibió al arrancar. La línea de estado lo dice: `server X runs, Y installed → new chat`.

**Solución:** Abre un chat nuevo.


## La actualización de `flexygo-mcp` falla porque el fichero está en uso

**Síntoma:** `dotnet tool update -g flexygo-mcp` falla con `Access to the path ... is denied` o dice que el fichero está en uso.

**Causa:** El servidor está en marcha: Claude Code, VS Code u otro cliente lo tiene abierto.

**Solución:** Cierra las sesiones de Claude Code y de los demás clientes que usan el servidor, actualiza, y vuelve a abrir el proyecto.


## El agente no puede comprobar la aplicación en el navegador

**Síntoma:** El agente dice que no puede abrir el navegador, o el servidor `playwright` no aparece conectado en `/mcp`.

**Causa A:** Falta Node.js (con `npx`) o Google Chrome en el equipo.

**Causa B:** La entrada `playwright` se acaba de añadir a `.mcp.json`, y una sesión que ya estaba en marcha sigue con los servidores con los que empezó.

**Solución:** Instala lo que falte (consulta los [prerrequisitos](../2ProductDevelopment/MCP/1Prerequisites.md#nodejs-y-google-chrome)) y vuelve a abrir el proyecto (en VS Code, *Developer: Reload Window*). Si Claude Code te pregunta si quieres usar el servidor `playwright` del proyecto, acepta.
