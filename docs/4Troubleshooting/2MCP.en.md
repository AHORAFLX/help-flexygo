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
   dotnet tool install -g flexygo-mcp --add-source https://nuget.ahorabh.com/v3/index.json
   ```

4. If the command is still not recognized, add the .NET tools directory to the PATH:
   - **Windows:** `%USERPROFILE%\.dotnet\tools`
   - **Linux/macOS:** `~/.dotnet/tools`

!!! tip "Automatic installation"
    When you create a new product from the Installer, `flexygo-mcp` is installed automatically. If the error happens after a manual installation, follow the steps above. See the [MCP prerequisites](../2ProductDevelopment/MCP/1Prerequisites.md).


## The `/flx-*` commands do not show

**Symptom:** The server is connected, but typing `/flx-` shows no command.

**Cause:** The server installs the commands in the project when it starts, and the session was opened before that.

**Solution:** Reopen the project in Claude Code (in VS Code, *Developer: Reload Window*), which picks up the commands and the project's instructions. If they still do not show, install them from a terminal opened in the project folder and reopen it:

```bash
flexygo-mcp --sync-skills .
```


## The tools fail with database errors

**Symptom:** The tools show, but all of them return connection errors or say there are no connection strings.

**Cause A:** The Backend's `appsettings` has no `ConfConnectionString` and `DataConnectionString`.

**Cause B:** The server reads another `appsettings` file. The `ASPNETCORE_ENVIRONMENT` variable in `.mcp.json` decides which: with `Development`, `appsettings.Development.json`.

**Solution:** Type `/flx-setup`: it checks which databases exist, publishes the missing ones and writes the connection strings. See [The databases](../2ProductDevelopment/MCP/3Configuration.md#the-databases).


## What the agent just created does not show in the application

**Symptom:** The agent created an object or changed a property, but the application does not show it, a list answers with a 500 error, or `The given key was not present in the dictionary` appears.

**Cause:** The running application keeps the object definitions in memory and does not read them again. What the agent writes is in the database, but the application does not see it yet. It is not a configuration error.

**Solution:**

1. After each change, the server reloads the cache by itself. For that it signs in with a user allowed to do it: if the project keeps the password of a test user who is, it uses it; if not, the agent asks you for yours once. It is kept in memory only, for that session.
2. If the Backend is on another computer, the agent tells you its name and asks before sending your credentials to it. See [Security checks](../2ProductDevelopment/MCP/3Configuration.md#security-checks).
3. If you would rather not give the password, use the **Reload Cache** button in the users list, or restart the Backend.
4. If you had the screen open in the browser, load it again.


## The agent cannot save a module, a plugin or a process

**Symptom:** The agent says the server refused an HTML module, a plugin, a process parameter, a procedure or a view.

**Cause:** What it tried to save is something the server will not let it build: loading code by hand or from a CDN, putting inline code (`onclick` and the like) in an HTML module, deciding by comparing with the `'admins'` role, taking the user or the role from the browser, or building SQL at run time without your permission.

**Solution:** The refusal says what to use instead, and the agent does it that way. It is not a fault: see [What the agent does not build](../2ProductDevelopment/MCP/6Workflow.md#what-the-agent-does-not-build).


## The development does not close

**Symptom:** Everything is built and verified, but the status keeps asking for `/flx-security`, `/flx-quality` or `/flx-release`.

**Cause A:** A security rule lacks its try as the role. A rule that takes something away only passes if the attempt was **refused**.

**Cause B:** A quality quota is over its limit and has no reason recorded.

**Cause C:** The security audit of `/flx-release` has a high finding open. A fix built after the audit reopens it, and `/flx-release` audits again what changed.

**Cause D:** The final check came out red: a test that fails, a walk that did not get to run, or demo data that does not load on a new database. The `<database>_release` databases are kept so you can look at what happened.

**Solution:** Type `/flx-status`: it says which rule, quota, finding or part of the final check fails. Fix the rule and try it again; bring each quota under its limit or say why it stays that way; close each high finding by fixing it or accepting it yourself; and let the fix for the final check be built as one more task of the last block, with `/flx-execute`, before going back to `/flx-release`. The audit is not made by the chat that built the application, but by a separate agent. See [Security: who may do what](../2ProductDevelopment/MCP/6Workflow.md#security-who-may-do-what), [The security audit](../2ProductDevelopment/MCP/6Workflow.md#the-security-audit), [The quality quotas](../2ProductDevelopment/MCP/6Workflow.md#the-quality-quotas) and [The final check](../2ProductDevelopment/MCP/6Workflow.md#the-final-check-flx-release).


## The Flexygo panel does not show

**Symptom:** You see neither the band above the chat nor the side pane.

**Cause A:** Claude Code does not know where the panel is on this computer: the one-time step `flexygo-mcp --enable-panel` has not been run.

**Cause B:** The chat was opened before turning it on: the panel shows when you open a new chat or session.

**Cause C:** The project has the panel turned off in its `.claude/settings.json`.

**Cause D:** You are using Claude Code with no interface (`claude -p`), where there is no panel.

**Solution:** See [How to turn on the panel and the board](../2ProductDevelopment/MCP/7PanelAndBoard.md#how-to-turn-on-the-panel-and-the-board).


## After an update, the agent does not see what is new

**Symptom:** You updated the server with `dotnet tool update -g flexygo-mcp`, but the agent does not use the new tools or parameters.

**Cause:** A chat already under way keeps the server and the list of tools it received when it started. The status line says so: `server X runs, Y installed → new chat`.

**Solution:** Open a new chat.


## Updating `flexygo-mcp` fails because the file is in use

**Symptom:** `dotnet tool update -g flexygo-mcp` fails with `Access to the path ... is denied` or says the file is in use.

**Cause:** The server is running: Claude Code, VS Code or another client has it open.

**Solution:** Close the sessions of Claude Code and of the other clients that use the server, update, and reopen the project.


## The agent cannot check the application in the browser

**Symptom:** The agent says it cannot open the browser, or the `playwright` server does not show as connected in `/mcp`.

**Cause A:** Node.js (with `npx`) or Google Chrome is missing on the computer.

**Cause B:** The `playwright` entry was just added to `.mcp.json`, and a session already running keeps the servers it started with.

**Solution:** Install what is missing (see the [prerequisites](../2ProductDevelopment/MCP/1Prerequisites.md#nodejs-and-google-chrome)) and reopen the project (in VS Code, *Developer: Reload Window*). If Claude Code asks whether to use the project's `playwright` server, accept.
