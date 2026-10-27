# Basic use of the MCP server

Once the [prerequisites](./1Prerequisites.md) are met, the project already includes everything needed to work with the MCP server from **Claude Code**.

---

## Opening the project in Claude Code

The project generated from the Flexygo template carries, at its root, the `.mcp.json` file, which tells Claude Code how to start the server, and `.claude/settings.json`, which turns it on for the project. There is nothing to start by hand: Claude Code launches the server when you open the project folder.

1. Open the project folder in Claude Code: in the desktop app, in the VS Code extension, or in a terminal with `claude` from that folder.
2. If Claude Code asks whether to use the project's `flexygo` server, accept.
3. Type `/mcp` to check that the `flexygo` server shows as connected.

The first time it starts, the server installs the `/flx-*` commands and the Flexygo panel in the project. If the commands do not show when you type `/flx-`, open a new chat.

!!! warning "Before you start: spec-driven tools"
    If you use tools such as **GSD**, **Spec Kit** or others based on *spec-driven development*, **do not combine them with the Flexygo MCP server**. The context they generate interferes with the real context the MCP provides and degrades the agent's quality. See [Best practices](./5BestPractices.md#spec-driven-development-tools-gsd-spec-kit-and-similar) for more detail.

---

## First steps

The work is done with commands that start with `/flx-`, one phase at a time. To begin:

| Situation | Command |
|---|---|
| A freshly created project, with no databases or connections | `/flx-setup` prepares the databases and the connection strings. |
| The first time you work on the project | `/flx-context` gathers what the application is about and who uses it. |
| You want a whole application | `/flx-build-product`, with a description of what you want to build. |
| You want to add something to a project that already has things built | `/flx-new-development`, then `/flx-plan`. |
| It is a small change to something that already exists | `/flx-fast`. |
| You do not know where you left off | `/flx-status`. |

For example:

```text
/flx-build-product I want a back office to manage a call center
```

The more specific your description, the better the agent's start. From there on, the agent tells you at every moment which command comes next.

See the whole flow, phase by phase, in [Workflow with commands](./6Workflow.md). The state of the work can also be seen in the [panel and board](./7PanelAndBoard.md), and what the agent builds with Flexygo 10, in [What it builds on Flexygo 10](./8Flexygo10.md).

!!! tip "Tips for better results"
    See [Best practices](./5BestPractices.md) for recommendations on how to ask for things and when to open a new chat.
