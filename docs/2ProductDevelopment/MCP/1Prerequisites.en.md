# MCP server prerequisites

Make sure you have the [project's general requirements](../1Requirements.md) covered before continuing. In addition, the MCP server has its own extra requirements.

---

## .NET 10 SDK

The MCP server is distributed as a **global dotnet tool** and is installed automatically when creating a new product from the installer or when migrating a Flexygo Framework project. For that automatic installation to work, the team must already have the **.NET 10 SDK** installed.

Download it from the official page:
👉 [https://dotnet.microsoft.com/download](https://dotnet.microsoft.com/download)

Verify that it's installed:

```bash
dotnet --list-sdks
```

---

## Configured connection strings

!!! danger "Blocking requirement"
    The `flexygo-mcp` server needs access to the project's databases in order to operate. If the Backend's `appsettings.json` **doesn't have the connection strings configured**, the server will start but won't be able to run any tool — the agent will get errors on every operation.

    Make sure you've completed the Configuration Wizard before using the MCP. Once `ConfConnectionString` and `DataConnectionString` are configured, the server will work correctly.

---

## Troubleshooting: manual installation

If the MCP server doesn't start or the `flexygo-mcp` command isn't recognized, the automatic installation may not have completed correctly. First check whether the tool is installed:

```bash
dotnet tool list -g
```

Look for `flexygo-mcp` in the list. If it doesn't appear, install it manually:

```bash
dotnet tool install -g flexygo-mcp
```

If it's already installed but you want to update to the latest version:

```bash
dotnet tool update -g flexygo-mcp
```
