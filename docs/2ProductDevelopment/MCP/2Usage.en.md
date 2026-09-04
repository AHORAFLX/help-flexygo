# Basic use of the MCP server

Once the [prerequisites](./1Prerequisites.md) are met, the project already includes everything needed to start the MCP server directly from VS Code.

---

## Starting the server from VS Code

The project generated from the Flexygo template includes a preconfigured `.vscode/mcp.json` file:

```json
{
  "servers": {
    "flexygo": {
      "command": "flexygo-mcp"
    }
  }
}
```

Open that file in VS Code and click **Start** to launch the server.

<figure markdown="span">
  ![.vscode/mcp.json file with the Start link](../../docs_assets/images/CoreProductDevelopment/MCP/startMCP.png)
  <figcaption>The mcp.json file includes the Start link directly in the editor</figcaption>
</figure>

Once the server is active, the file shows the **Running** status alongside the number of available tools and prompts.

<figure markdown="span">
  ![Active MCP server — Running with 138 tools](../../docs_assets/images/CoreProductDevelopment/MCP/startedMCP.png)
  <figcaption>The server is ready when Running appears with the tool count</figcaption>
</figure>

!!! tip "The server must be active before using the agent"
    Always start the MCP server before opening the Copilot chat in agent mode. If Copilot was already open when you started the server, reload the VS Code window (`Ctrl+Shift+P` → **Developer: Reload Window**).

!!! warning "Before you start: spec-driven tools"
    If you use tools like **GSD**, **Spec Kit**, or others based on *spec-driven development*, **don't combine them with the Flexygo MCP server**. The context they generate interferes with the real context provided by the MCP and degrades the agent's quality. See [Best Practices](./5BestPractices.md#spec-driven-development-tools-gsd-spec-kit-and-similar) for more detail.

---

## The /build-mvp flow

Once the server is connected, the main workflow is creating a Flexygo product from scratch using the `/build-mvp` prompt. This prompt triggers an orchestrated flow in which the agent guides the entire process.

### How to start it

In GitHub Copilot's agent mode, launch the prompt with a minimal description of what you want to build:

<figure markdown="span">
  ![Input dialog for the /build-mvp prompt](../../docs_assets/images/CoreProductDevelopment/MCP/buildMvpRequest.png)
  <figcaption>The agent asks for a description of the application to build</figcaption>
</figure>

```text
/build-mvp I want a backoffice to manage a call center
```

The more specific you are in the initial description, the better starting point the agent will have.

<figure markdown="span">
  ![The agent starts the Build MVP flow](../../docs_assets/images/CoreProductDevelopment/MCP/buildMvpChat.png)
  <figcaption>The agent kicks off the orchestrated product-building flow</figcaption>
</figure>

### Flow phases

**1. Analysis and data model**

The agent analyzes the described domain and presents a proposed data model: entities, properties, relationships, and types. At this point you can review and adjust whatever you consider before continuing.

**2. Visual style**

Once the data model is confirmed, the agent asks for style preferences: typography, main colors, and any visual guidelines relevant to the product.

**3. Implementation plan**

With the model and style confirmed, the agent generates a complete implementation plan as a checklist: everything it's going to create (objects, properties, relationships, configurations) before executing any change. You can review it and request adjustments.

**4. Product generation**

The agent executes the plan by orchestrating subagents to preserve the context window. It builds the product's complete structure autonomously.

**5. Verification**

When finished, the agent performs automatic checks to verify that everything generated is correct and consistent.

**6. Migration scripts (optional)**

As a final step, it offers to generate scripts for both the configuration database and the data database, ready to apply to the current project.

!!! tip "Tips for better results"
    See [Tips with Copilot](./5BestPractices.md) for recommendations on which model to use and prompting patterns that improve result quality.
