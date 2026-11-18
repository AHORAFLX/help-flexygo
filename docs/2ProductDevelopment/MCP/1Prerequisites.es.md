# Prerrequisitos del servidor MCP

Asegúrate de tener cubiertos los [requisitos generales del proyecto](../1Requirements.md) antes de continuar. Además, el servidor MCP tiene requisitos adicionales propios.

---

## .NET 10 SDK

El servidor MCP se distribuye como una **dotnet tool global** y se instala automáticamente al crear un nuevo producto desde el instalador o al migrar un proyecto de Flexygo Framework. Para que esa instalación automática funcione, el equipo debe tener instalado previamente el **.NET 10 SDK**.

Descárgalo desde la página oficial:
👉 [https://dotnet.microsoft.com/download](https://dotnet.microsoft.com/download)

Verifica que está instalado:

```bash
dotnet --list-sdks
```

Para saber qué versión del servidor tienes instalada:

```bash
flexygo-mcp --version
```

---

## Claude Code

El servidor se usa desde **Claude Code**, en cualquiera de sus formas: la aplicación de escritorio, la extensión de VS Code o la terminal. Los comandos `/flx-*` del flujo de trabajo, el [panel de Flexygo](./7PanelAndBoard.md), la línea de estado y las comprobaciones que vigilan lo que hace el agente son de Claude Code.

El servidor copia también los comandos en `.github/skills/` del proyecto, donde los encuentra **GitHub Copilot**. Con Copilot, o con otro cliente MCP, se usan las herramientas del servidor, pero sin el panel, sin la línea de estado y sin esas comprobaciones.

---

## Node.js y Google Chrome

Al cerrar cada bloque, el agente comprueba en el navegador lo que ha construido. Para eso, el servidor añade al `.mcp.json` del proyecto un servidor de navegador (`playwright`), que se arranca con `npx` y abre **Google Chrome**. Necesitas en el equipo:

- **Node.js**, que trae `npx`: [https://nodejs.org](https://nodejs.org).
- **Google Chrome**, instalado en su sitio de siempre.

Si falta alguno, el servidor lo dice al arrancar y te indica dónde conseguirlo.

---

## SqlPackage

Para publicar las bases de datos del proyecto desde sus proyectos de base de datos (al prepararlo con `/flx-setup` y en la comprobación final de cada desarrollo), el servidor usa **SqlPackage**. Si no lo tienes, instálalo como herramienta global:

```bash
dotnet tool install -g Microsoft.SqlServer.SqlPackage
```

La comprobación final publica el producto en unas bases de datos propias (`<base>_release`) del SQL Server de **este equipo**. Si las bases del proyecto están en otro servidor, se para y te pregunta dónde puede publicarlas.

---

## Connection strings configuradas

!!! danger "Requisito bloqueante"
    El servidor `flexygo-mcp` necesita acceso a las bases de datos del proyecto para poder operar. Si el `appsettings.json` del Backend **no tiene las connection strings configuradas**, el servidor arrancará pero no podrá ejecutar ninguna herramienta — el agente recibirá errores en todas las operaciones.

    Completa el Asistente de configuración antes de usar el MCP, o escribe `/flx-setup` en Claude Code: te guía para crear o elegir las bases de datos y escribir `ConfConnectionString` y `DataConnectionString`. Con ellas configuradas, el servidor funciona correctamente.

---

## Solución de problemas: instalación manual

Si el servidor MCP no arranca o el comando `flexygo-mcp` no se reconoce, es posible que la instalación automática no se haya completado correctamente. Verifica primero si la tool está instalada:

```bash
dotnet tool list -g
```

Busca `flexygo-mcp` en la lista. Si no aparece, instálala manualmente:

```bash
dotnet tool install -g flexygo-mcp --add-source https://nuget.ahorabh.com/v3/index.json
```

Si ya está instalada pero quieres actualizar a la última versión:

```bash
dotnet tool update -g flexygo-mcp --add-source https://nuget.ahorabh.com/v3/index.json
```

No hace falta estar pendiente: cuando hay una versión nueva publicada, el servidor lo dice en su primera respuesta de la sesión, con el comando exacto para actualizar. Después de actualizar, abre un chat nuevo: el servidor que ya estaba en marcha sigue con la versión anterior.
