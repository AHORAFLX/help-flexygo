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

---

## Claude Code

El servidor se usa desde **Claude Code**, en cualquiera de sus formas: la aplicación de escritorio, la extensión de VS Code o la terminal. Los comandos `/flx-*` del flujo de trabajo y el [panel de Flexygo](./7PanelAndBoard.md) son de Claude Code.

Otros clientes MCP pueden usar las herramientas del servidor, pero sin los comandos ni el panel.

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
dotnet tool install -g flexygo-mcp
```

Si ya está instalada pero quieres actualizar a la última versión:

```bash
dotnet tool update -g flexygo-mcp
```
