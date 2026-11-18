# Basic use of the MCP server

Once the [prerequisites](./1Prerequisites.md) are met, the project already includes everything needed to work with the MCP server from **Claude Code**.

This video shows the whole journey, from creating the product with the installer to building the application with `/flx-setup` and `/flx-build-product` (in Spanish):

<div class="video-wrapper">
  <iframe src="https://www.youtube.com/embed/wlQOwgZJAR4" title="Crea un producto Flexygo con tu asistente de IA y el servidor MCP" frameborder="0" allowfullscreen></iframe>
</div>

---

## Opening the project in Claude Code

The project generated from the Flexygo template carries, at its root, the `.mcp.json` file, which tells Claude Code how to start the server, and `.claude/settings.json`, which approves the `flexygo` server and turns on the [Flexygo panel](./7PanelAndBoard.md). There is nothing to start by hand: Claude Code launches the server when you open the project folder.

1. Open the project folder in Claude Code: in the desktop app, in the VS Code extension, or in a terminal with `claude` from that folder.
2. If Claude Code asks whether to use the project's servers, accept `flexygo` and `playwright`, the browser the agent checks the application with. `stitch` is only needed to draw the screens with Google Stitch.
3. Type `/mcp` to check that the `flexygo` server shows as connected.

The first time it starts, the server installs the `/flx-*` commands in the project, turns on the panel and adds the browser server to `.mcp.json`. A session that was already open may not see it: if the commands do not show when you type `/flx-`, reopen the project (in VS Code, *Developer: Reload Window*), which picks up everything. See [What the server adds to the project](./3Configuration.md#what-the-server-adds-to-the-project).

!!! warning "Before you start: spec-driven tools"
    If you use tools such as **GSD**, **Spec Kit** or others based on *spec-driven development*, **do not combine them with the Flexygo MCP server**. The context they generate interferes with the real context the MCP provides and degrades the agent's quality. See [Best practices](./5BestPractices.md#spec-driven-development-tools-gsd-spec-kit-and-similar) for more detail.

---

## First steps

You don't need to type commands: just tell the assistant what you want, and it starts each step. The [Guide](./0Guide.md) describes the ways to start, with examples of what you can say.

If you would rather go straight to a step, the commands start with `/flx-`. To begin:

| Situation | Command |
|---|---|
| A freshly created project, with no databases or connections | `/flx-setup` prepares the databases and the connection strings. |
| The first time you work on the project | `/flx-context` gathers what the application is about and who uses it. |
| You want a whole application | `/flx-build-product`, with a description of what you want to build. |
| You want to add something to a project that already has things built | `/flx-new-development`, then `/flx-plan`. |
| You have screens already approved, made with Lovable or another tool | `/flx-lovable`, with the generated project's folder. |
| You want to see the design of the screens before they are built | `/flx-design`. |
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
