# MCP server configuration

The project generated from the Flexygo template already carries the configuration it needs. There is nothing to change to get started.

---

## The `.mcp.json` file

At the project root, `.mcp.json` tells Claude Code how to start the server. The template ships it like this:

```json
{
  "mcpServers": {
    "flexygo": {
      "command": "flexygo-mcp",
      "env": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      }
    },
    "stitch": {
      "type": "http",
      "timeout": 600000,
      "url": "https://stitch.googleapis.com/mcp",
      "headers": {
        "X-Goog-Api-Key": "${STITCH_API_KEY}"
      }
    }
  }
}
```

- `command` is the global `flexygo-mcp` tool, installed with the .NET 10 SDK (see [Prerequisites](./1Prerequisites.md)).
- `ASPNETCORE_ENVIRONMENT` decides which of the Backend's `appsettings` files are read. With `Development`, `appsettings.Development.json` is read. The server sets it this way if it is missing: without it, it would run as production and would mask the connection strings.
- The `stitch` entry is used by `/flx-design` to draw the screens with Google Stitch. It takes the key from the `STITCH_API_KEY` environment variable, so the key is not stored in the file. If you do not use it, it does no harm; and if you already have Stitch set up in your own Claude configuration and do not define the variable, the server removes the project's entry so that yours is used.

When it starts, the server adds a third entry, `playwright`: the browser the agent checks the application with (it needs Node.js and Google Chrome). It opens Chrome with a visible window and keeps the signed-in session in `.playwright-mcp/`.

If you change `.mcp.json` by hand, or the server changes it, a session already running keeps the servers it started with: reopen the project (in VS Code, *Developer: Reload Window*).

---

## The `.claude/settings.json` file

The `.claude/settings.json` the template ships approves the `flexygo` server, so Claude Code does not ask every time, and declares and turns on the [Flexygo panel](./7PanelAndBoard.md). If someone turns the panel off in a project, the server respects it.

---

## What the server adds to the project

Every time it starts, the server brings up to date in the project what is its own, and leaves the rest alone:

- **The `/flx-*` commands**, in `.claude/skills/` and, for GitHub Copilot, in `.github/skills/`. The project's own skills are not touched.
- **Its block of instructions in `.claude/CLAUDE.md`**, between markers. What the team writes outside that block belongs to the project.
- **In `.claude/settings.local.json`**: the Flexygo status line and the checks that watch what the agent does (see [Security checks](#security-checks)). If the project already has a status line of its own, it is kept.
- **The `playwright` entry of `.mcp.json`**, described above.
- **`tools/app.ps1`**, the script the panel starts and stops the application with, if the project does not have it.

The commands can also be installed from outside Claude Code, before opening the project, with `flexygo-mcp --sync-skills <project folder>`.

---

## The databases

The server has no connections of its own: it reads `ConfConnectionString` and `DataConnectionString` from the `appsettings` of the project's Backend. If they are not configured, `/flx-setup` guides you through creating or choosing the databases and writing them.

The server looks for the project in the folder Claude Code starts it in. If it starts it from another folder, the `FLEXYGO_WORKSPACE_DIR` environment variable tells it where the project is.

---

## Command-line options

Besides starting as a server, `flexygo-mcp` accepts these options in a terminal:

| Option | What it does |
|---|---|
| `--version` | Prints the installed version. |
| `--enable-panel` | Turns on the Flexygo panel on this computer. See [How to turn on the panel and the board](./7PanelAndBoard.md#how-to-turn-on-the-panel-and-the-board). |
| `--board` | Opens the developer's board in the browser, with the project in the current folder and the other projects on this computer. |
| `--sync-skills <folder>` | Installs the `/flx-*` commands into that project without opening Claude Code. |
| `--http` | Starts the server over HTTP instead of standard input and output, for MCP clients that need it. |

---

## Environment variables

| Variable | What for |
|---|---|
| `ASPNETCORE_ENVIRONMENT` | Which of the Backend's `appsettings` files are read. In `.mcp.json`, `Development`. |
| `FLEXYGO_WORKSPACE_DIR` | The project folder, when Claude Code starts the server from another one. |
| `STITCH_API_KEY` | The Google Stitch key, for `/flx-design`. |
| `FLEXYGO_MODEL_PER_PHASE` | With `auto`, each `/flx-*` command carries the recommended model for its phase. Off by default. See [The model for each phase](./6Workflow.md#the-model-for-each-phase). |
| `FLEXYGO_MCP_ERROR_TELEMETRY` | Which collector the tools' errors go to, or `off` to turn it off. |
| `FLEXYGO_MCP_TELEMETRY` | `off` turns the product telemetry off. |

The server's variables go in the `env` block of its entry in `.mcp.json`, or in the computer's environment. `STITCH_API_KEY` is a key: it always goes in your computer's environment, never written in `.mcp.json`, which travels with the project.

---

## Telemetry

The server sends two things:

- **The tools' errors**, with what it takes to reproduce them: the tool and its arguments (with anything that looks secret and the SQL values masked), the error, the versions, and the phase and task it happened in. By default they go to a collector on this same computer, so they do not leave it. The `FLEXYGO_MCP_ERROR_TELEMETRY` variable sends them to another collector, or turns them off with `off`. They never carry the conversation or the rows of a query. The server's first answer in each session reminds you of it. See [Error telemetry](./6Workflow.md#error-telemetry).
- **The product telemetry**, which does leave the computer, for Flexygo's telemetry collector: the server's unexpected errors (their type and message, never the SQL statement that caused them) and what the agent records that the server cannot do yet, described rather than copied from what you asked. It carries the project's name and the server's version. It is used to learn what fails and what is missing across all projects. It is on by default; `FLEXYGO_MCP_TELEMETRY=off` turns it off.

---

## Security checks

The server, and the checks it installs in Claude Code, set these limits:

- **Application addresses.** The panel, the board and the `tools/app.ps1` script take the application's address from the project's `launchSettings.json`, and only open or start something at an `http` or `https` address on **this computer** (`localhost`, `127.0.0.1` or `[::1]`). Any other address is ignored.
- **Cache reload.** To reload the application's cache, the server signs in with a user allowed to do it. If the Backend is on this computer, it does so without asking, and it can use the password of a test user kept in `*.InterfaceTest/appsettings.local.json`, as long as git ignores that file; it never repeats it or writes it anywhere, and if it is missing or wrong, it asks you for it. If the Backend is on **another computer**, it sends nothing: the agent tells you that computer's exact name and asks whether you want to send your credentials to it. Only with your yes, and only to that computer, does it sign in.
- **Passwords in files.** The agent cannot read or print the file with the test users' passwords (`*.InterfaceTest/appsettings.local.json`): it is told what to use instead. If it reads another file with a password written in it, such as a compose file or a connection string, it sees it masked (`***`); and a search or a console command that would print it on screen does not run.
- **Databases and `.flexygo/`.** The agent reaches the databases only through the server's tools, never with `sqlcmd`. Nor does it write by hand inside `.flexygo/`, from the editor or from the console, because only the server's tools write that folder; and it does not save browser captures there or at the project's root.
- **Administrator roles.** To give a user an administrator or designer role, the agent has to ask you first, saying who.
- **Secrets in git.** The project's status warns if a `conf/appsettings*.json` tracked by git holds secrets, never showing their value. It also warns of a compose file that gives a password a default value or connects the application as `sa`, and of a finished product with no README of its own.

The Claude Code checks (the status line and the limits on passwords, `sqlcmd` and `.flexygo/`) do not run if `disableAllHooks` is set in any Claude Code configuration; the server warns about it when it starts.
