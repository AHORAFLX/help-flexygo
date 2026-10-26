# Troubleshooting: MCP

Diagnostic guide for the most common problems with the `flexygo-mcp` server in Claude Code.


## Claude Code cannot find the server

**Symptom:** When you type `/mcp`, the `flexygo` server does not show, or it shows with an error. The agent uses no Flexygo tool.

**Cause A:** Claude Code is not open in the project's root folder, which is where `.mcp.json` lives.

**Cause B:** The project's server has not been approved.

**Cause C:** The `flexygo-mcp` tool is not installed (see the next section).

**Solution:**

1. Open Claude Code in the project's root folder, the one that holds `.mcp.json` and the `.claude` folder.
2. Check that `.mcp.json` has the `flexygo` entry with `"command": "flexygo-mcp"`. See the [server configuration](../2ProductDevelopment/MCP/3Configuration.md).
3. If Claude Code asked whether to use the project's server and you said no, turn it on from `/mcp`.
4. Open a new chat.


## `flexygo-mcp` is not recognized as a command

**Symptom:** When you run `flexygo-mcp` in the terminal you get the error:
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
   If no `10.x.x` version shows, download it from [https://dotnet.microsoft.com/download](https://dotnet.microsoft.com/download).

2. Check whether the tool is already installed:
   ```bash
   dotnet tool list -g
   ```
   Look for `flexygo-mcp` in the list.

3. If it is not there, install it manually:
   ```bash
   dotnet tool install -g flexygo-mcp
   ```

4. If the command is still not recognized, add the .NET tools directory to the PATH:
   - **Windows:** `%USERPROFILE%\.dotnet\tools`
   - **Linux/macOS:** `~/.dotnet/tools`

!!! tip "Automatic installation"
    When you create a new product from the Installer, `flexygo-mcp` is installed automatically. If the error happens after a manual installation, follow the steps above. See the [MCP prerequisites](../2ProductDevelopment/MCP/1Prerequisites.md).


## The `/flx-*` commands do not show

**Symptom:** The server is connected, but typing `/flx-` shows no command.

**Cause:** The server installs the commands in the project when it starts, and the chat was opened before that.

**Solution:** Open a new chat in the project. If they still do not show, ask the agent to sync the Flexygo commands and open a chat again.


## The tools fail with database errors

**Symptom:** The tools show, but all of them return connection errors or say there are no connection strings.

**Cause A:** The Backend's `appsettings` has no `ConfConnectionString` and `DataConnectionString`.

**Cause B:** The server reads another `appsettings` file. The `ASPNETCORE_ENVIRONMENT` variable in `.mcp.json` decides which: with `Development`, `appsettings.Development.json`.

**Solution:** Type `/flx-setup`: it checks which databases exist, publishes the missing ones and writes the connection strings. See [The databases](../2ProductDevelopment/MCP/3Configuration.md#the-databases).


## What the agent just created does not show in the application

**Symptom:** The agent created an object or changed a property, but the application does not show it, a list answers with a 500 error, or `The given key was not present in the dictionary` appears.

**Cause:** The running application keeps the object definitions in memory and does not read them again. What the agent writes is in the database, but the application does not see it yet. It is not a configuration error.

**Solution:**

1. The first time, the agent asks for your Flexygo password to reload the cache. It is kept in memory only, for that session, and from then on the cache reloads by itself after each change.
2. If the Backend is on another computer, the agent tells you its name and asks before sending your credentials to it. See [Security checks](../2ProductDevelopment/MCP/3Configuration.md#security-checks).
3. If you would rather not give the password, use the **Reload Cache** button in the users list, or restart the Backend.
4. If you had the screen open in the browser, load it again.


## The Flexygo panel does not show

**Symptom:** You see neither the band above the chat nor the side pane.

**Cause A:** The one-time step `flexygo-mcp --enable-panel` has not been run on this computer.

**Cause B:** The chat was opened before turning it on: the panel shows when you open a new chat or session.

**Cause C:** The project has the panel turned off in its `.claude/settings.json`.

**Cause D:** You are using Claude Code with no interface (`claude -p`), where there is no panel.

**Solution:** See [How to turn on the panel and the board](../2ProductDevelopment/MCP/7PanelAndBoard.md#how-to-turn-on-the-panel-and-the-board).


## After an update, the agent does not see what is new

**Symptom:** You updated the server with `dotnet tool update -g flexygo-mcp`, but the agent does not use the new tools or parameters.

**Cause:** A chat already under way keeps the list of tools it received when it started.

**Solution:** Open a new chat.
