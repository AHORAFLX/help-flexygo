# MCP server configuration

The project generated from the Flexygo template already carries the configuration it needs. There is nothing to change to get started.

---

## The `.mcp.json` file

At the project root, `.mcp.json` tells Claude Code how to start the server:

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

- `command` is the global `flexygo-mcp` tool, installed with the .NET 10 SDK (see [Prerequisites](./1Prerequisites.md)).
- `ASPNETCORE_ENVIRONMENT` decides which of the Backend's `appsettings` files are read. With `Development`, `appsettings.Development.json` is read.

The project's `.claude/settings.json` file turns the `flexygo` server on, so Claude Code does not have to ask every time.

!!! note "Design with Google Stitch"
    The template also carries a `stitch` entry in `.mcp.json`, which `/flx-design` uses to draw the screens. It needs the `STITCH_API_KEY` environment variable. If you do not use it, it does no harm.

---

## The databases

The server has no connections of its own: it reads `ConfConnectionString` and `DataConnectionString` from the `appsettings` of the project's Backend. If they are not configured, `/flx-setup` guides you through creating or choosing the databases and writing them.

---

## Error telemetry

Errors of the server's tools are recorded in a collector on the same computer. The `FLEXYGO_MCP_ERROR_TELEMETRY` environment variable sends them to another collector, or turns them off with `off`. See [Error telemetry](./6Workflow.md#error-telemetry).

---

## Security checks

The server reads some addresses from files that travel with the project, such as `launchSettings.json` or `appsettings.json`. A cloned project could bring them changed, so the server checks them before using them:

- **Application addresses.** The panel, the board and the `tools/app.ps1` script only use an `http` or `https` address on **this computer** (`localhost`, `127.0.0.1` or `[::1]`). Only its scheme, computer and port are taken. Anything else is ignored, and nothing is opened or started with it: a scheme such as `file:`, an address on another computer, or text added after the address.
- **Cache reload.** To reload the application's cache, the server signs in with your user and password. If the Backend is on this computer, it does so without asking. If it is on **another computer**, it sends nothing: the agent tells you that computer's exact name and asks whether you want to send your credentials to it. Only with your yes, and only to that computer, does it sign in. With the Backend on this computer, it can use the test user's password kept in `*.InterfaceTest/appsettings.local.json`, as long as git ignores that file; it never repeats it or writes it anywhere, and if it is missing or wrong, it asks you for it.
- **Protected files.** The agent cannot read or print the file with the test users' passwords (`*.InterfaceTest/appsettings.local.json`): it is told what to use instead. Nor can it write from the console inside `.flexygo/`, which only the server's tools write.
- **Secrets in git.** The project's status warns if a `conf/appsettings*.json` tracked by git holds secrets, never showing their value.
