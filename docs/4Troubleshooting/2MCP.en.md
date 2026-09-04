# Troubleshooting: MCP

Diagnostic guide for the most common problems with the `flexygo-mcp` server.


## The AI client cannot find the server

**Symptom in VS Code:** The `flexygo` server does not appear in the MCP panel, or it appears as "disconnected" / "error". Copilot does not list the Flexygo tools.

**Symptom in Claude Desktop:** The Flexygo tools do not appear in the available tools panel.

**Most common cause A:** The `flexygo-mcp` server is not running.

**Most common cause B:** The URL configured in the client is not correct.

**Solution A — Check that the server is running:**

Open a terminal and run:
```bash
flexygo-mcp
```

The server should show output similar to:
```
Flexygo MCP Server started at http://localhost:5100
Waiting for connections...
```

Keep the terminal open while you use the AI client.

**Solution B — Check the client's URL:**

- **VS Code:** Check that the URL in the MCP configuration is `http://localhost:5100` (no trailing slash).
- **Claude Desktop:** Verify that `claude_desktop_config.json` contains:
  ```json
  {
    "mcpServers": {
      "flexygo": {
        "url": "http://localhost:5100"
      }
    }
  }
  ```

After fixing it, restart the AI client.


## `flexygo-mcp` is not recognized as a command

**Symptom:** Running `flexygo-mcp` in the terminal produces the error:
```
'flexygo-mcp' is not recognized as an internal or external command
```
or in PowerShell:
```
The term 'flexygo-mcp' is not recognized as the name of a cmdlet, function...
```

**Cause A:** The .NET 10 SDK is not installed.

**Cause B:** The `flexygo-mcp` global tool is not installed, or the installation failed.

**Cause C:** The .NET global tools directory is not in the system PATH.

**Solution:**

1. Check that the .NET 10 SDK is installed:
   ```bash
   dotnet --list-sdks
   ```
   If no `10.x.x` version appears, download it from [https://dotnet.microsoft.com/download](https://dotnet.microsoft.com/download).

2. Check whether the tool is already installed:
   ```bash
   dotnet tool list -g
   ```
   Look for `flexygo-mcp` in the list.

3. If it does not appear, install it manually:
   ```bash
   dotnet tool install -g flexygo-mcp
   ```

4. If the command is still not recognized, add the .NET tools directory to the PATH:
   - **Windows:** `%USERPROFILE%\.dotnet\tools`
   - **Linux/macOS:** `~/.dotnet/tools`

!!! tip "Automatic installation"
    When you create a new product from the Installer, `flexygo-mcp` is installed automatically. If the error occurs after a manual installation, follow the steps above. See the [MCP prerequisites](../2ProductDevelopment/MCP/1Prerequisites.md).


## The server starts but the tools do not appear

**Symptom:** `flexygo-mcp` is running and responds at `http://localhost:5100`, but the AI client does not list any Flexygo tool (or lists 0 tools).

**Cause A:** The `mcp.json` file is missing from the Flexygo project's root directory.

**Cause B:** `mcp.json` has the wrong backend URL — the MCP server cannot connect to the backend to register the tools.

**Cause C:** The client did not reconnect to the server after it started.

**Solution A — Check mcp.json:**

1. Check that `mcp.json` exists at the root of your project (at the same level as `appsettings.json`):
   ```bash
   ls mcp.json
   ```
2. The file should have a structure similar to:
   ```json
   {
     "backendUrl": "http://localhost/flexygo-backend",
     "apiKey": "YOUR_API_KEY"
   }
   ```
3. Make sure `backendUrl` points to the running Flexygo Backend.

**Solution B — Force a reconnection in the client:**

- **VS Code:** Reload the window (`Ctrl+Shift+P` → **Developer: Reload Window**) or restart VS Code.
- **Claude Desktop:** Close and reopen the application.


## Port 5100 is already in use

**Symptom:** When starting `flexygo-mcp`, the following error appears:
```
Failed to bind to address http://localhost:5100: address already in use
```

**Cause:** Another process is listening on port 5100 (it could be a previous instance of the MCP server that did not close correctly, or another service).

**Solution:**

1. Identify which process is using the port:
   ```bash
   # Windows
   netstat -ano | findstr ":5100"
   ```
   Note the PID (last column).

2. Terminate the process:
   ```bash
   # Windows
   taskkill /PID {PID} /F
   ```

3. Start `flexygo-mcp` again.

!!! note "Previous instances"
    If you close the terminal where `flexygo-mcp` was running with Ctrl+C, the process normally terminates. If the terminal was closed abruptly, an orphaned process may remain. The step above resolves it.


## Errors when running tools (access denied, backend unreachable)

**Symptom:** The MCP server is running and the tools appear in the client, but invoking them returns errors such as:

- `Error: Unable to connect to backend`
- `Error: Access denied` / `Unauthorized`
- `Error: Database connection failed`

**Most common cause A:** The Flexygo Backend is not running or is not reachable from the MCP server.

**Most common cause B:** The credentials in `mcp.json` (API key, user) are incorrect or have expired.

**Solution:**

1. Verify that the Backend is running by accessing its URL in a browser or with `curl`:
   ```bash
   curl http://localhost/flexygo-backend/api/health
   ```
   It should respond with HTTP 200.

2. Review the credentials in `mcp.json`:
   - The `apiKey` must match the one configured in the Backend.
   - The `backendUrl` must be reachable from the machine where the MCP server is running.

3. Check the MCP server logs in the terminal for the specific error — the full error message usually indicates exactly what is failing.

See the [MCP configuration guide](../2ProductDevelopment/MCP/3Configuration.md) for the full structure of `mcp.json`.


## A specific tool is not available

**Symptom:** Most tools work, but one or more specific tools do not appear, or return an error when invoked.

**Cause:** The tool requires a specific Backend feature to be enabled, or the product to have a certain configuration.

**Solution:**

1. See the [MCP tools reference](../2ProductDevelopment/MCP/4Tools.md) for the requirements of each tool.
2. Verify that the Flexygo Backend has the module or endpoint that the tool needs enabled.
3. Restart the MCP server to force rediscovery of the available tools.
