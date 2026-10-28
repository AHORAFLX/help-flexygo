# MCP tools and resources

The `flexygo-mcp` server exposes tools the agent uses to work on the Flexygo project: reading and creating objects, properties, pages, modules, processes, security, tests… You don't need to know them: the `/flx-*` commands and the agent itself use them according to what you ask for.

---

## Exploring the available tools

In Claude Code, type `/mcp` and choose the `flexygo` server to see whether it is connected and the list of its tools.

While the agent works, the chat shows each tool it calls. That way you see what it is reading or changing in the project.

---

## MCP Apps

Besides the data tools, the server includes three **MCP Apps**: interactive visual interfaces that the agent can open in response to specific requests. They show in clients that display MCP Apps.

### Flexygo Schema Diagram UI

An interactive diagram of the project's database model, with hierarchy and relationships between entities. Useful for visualizing the current schema before making changes or for understanding the structure of an existing project.

**How to use it:**
```text
Show me the project's current database model
```

<figure markdown="span">
  ![Interactive database model diagram with tables and relationships](../../docs_assets/images/CoreProductDevelopment/MCP/showDBModel.png)
  <figcaption>The diagram shows the project's tables, columns, types, and foreign keys</figcaption>
</figure>

### Color Picker UI

An interactive color picker. Once a color is confirmed, the agent automatically modifies the application's two main variables: the header color and the navigation color.

**How to use it:**
```text
Change the application's main color to a dark corporate blue using the color picker
```

<figure markdown="span">
  ![Color Picker with a color wheel, hex #3498DB, and an Apply color to project button](../../docs_assets/images/CoreProductDevelopment/MCP/colorPicker.png)
  <figcaption>Pick the color and press "Apply color to project" for the agent to apply the change</figcaption>
</figure>

### Flexygo Page Designer UI

A preview of the page designer: shows the available positions (slots) on each page and the modules configured in each one. Useful for reviewing the layout before making modifications.

**How to use it:**
```text
Open the page designer to see which modules are on each page
```

<figure markdown="span">
  ![Page designer with a 3-slot layout and modules panel](../../docs_assets/images/CoreProductDevelopment/MCP/pageDesigner.png)
  <figcaption>The designer shows the selected page's layout with its positions and assigned modules</figcaption>
</figure>
