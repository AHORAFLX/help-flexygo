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

To see which version of the server you have installed:

```bash
flexygo-mcp --version
```

---

## Claude Code

The server is used from **Claude Code**, in any of its forms: the desktop app, the VS Code extension or the terminal. The `/flx-*` commands of the workflow, the [Flexygo panel](./7PanelAndBoard.md), the status line and the checks that watch what the agent does belong to Claude Code.

The server also copies the commands into the project's `.github/skills/`, where **GitHub Copilot** finds them. With Copilot, or with another MCP client, the server's tools are used, but without the panel, the status line or those checks.

---

## Node.js and Google Chrome

When each block closes, the agent checks what it built in the browser. For that, the server adds a browser server (`playwright`) to the project's `.mcp.json`, which starts with `npx` and opens **Google Chrome**. You need on the machine:

- **Node.js**, which ships `npx`: [https://nodejs.org](https://nodejs.org).
- **Google Chrome**, installed in its usual place.

If either is missing, the server says so when it starts and tells you where to get it.

---

## SqlPackage

To publish the project's databases from its database projects (when setting it up with `/flx-setup` and in the final check of each development), the server uses **SqlPackage**. If you don't have it, install it as a global tool:

```bash
dotnet tool install -g Microsoft.SqlServer.SqlPackage
```

The final check publishes the product into databases of its own (`<database>_release`) on **this machine's** SQL Server. If the project's databases are on another server, it stops and asks you where it may publish them.

---

## Configured connection strings

!!! danger "Blocking requirement"
    The `flexygo-mcp` server needs access to the project's databases in order to operate. If the Backend's `appsettings.json` **doesn't have the connection strings configured**, the server will start but won't be able to run any tool — the agent will get errors on every operation.

    Complete the Configuration Wizard before using the MCP, or type `/flx-setup` in Claude Code: it guides you through creating or choosing the databases and writing `ConfConnectionString` and `DataConnectionString`. With them configured, the server works correctly.

---

## Troubleshooting: manual installation

If the MCP server doesn't start or the `flexygo-mcp` command isn't recognized, the automatic installation may not have completed correctly. First check whether the tool is installed:

```bash
dotnet tool list -g
```

Look for `flexygo-mcp` in the list. If it doesn't appear, install it manually:

```bash
dotnet tool install -g flexygo-mcp --add-source https://nuget.ahorabh.com/v3/index.json
```

If it's already installed but you want to update to the latest version:

```bash
dotnet tool update -g flexygo-mcp --add-source https://nuget.ahorabh.com/v3/index.json
```

You don't need to keep an eye on it: when a new version is published, the server says so in its first answer of the session, with the exact command to update. After updating, open a new chat: the server that was already running keeps the previous version.
