# Best practices

These recommendations assume the `flexygo-mcp` server is running and connected to GitHub Copilot in agent mode. If you haven't set it up yet, see [Basic use](./2Usage.md) first.

---

## Recommended model

To work with the Flexygo MCP server, it's recommended to use **Claude Sonnet 4.6** as the model in Copilot's agent. It offers the best balance between reasoning, MCP tool handling, and generated code quality.

---

## Managing the context window

This is the factor that most affects the quality of working with the agent. As the conversation grows, the agent starts losing coherence, forgets earlier instructions, and makes mistakes it wouldn't make with a clean context.

**Practical rules:**

- **One task per conversation.** Open a new agent conversation for each independent task. Don't accumulate the history of previous sessions.
- **Close and reopen when you notice degradation.** If the agent starts giving inconsistent answers or ignoring instructions, the conversation is too loaded. Open a new one and summarize the state.
- **Don't use the same conversation to plan and to execute.** The analysis or discussion phase consumes context that's later needed for execution.
- **For long flows like `/build-mvp`, always start with a clean context.** The agent needs the entire available window to correctly orchestrate the whole flow.

---

## Spec-driven development tools (GSD, Spec Kit, and similar)

!!! warning "Don't use spec-driven tools alongside the MCP server"
    Tools like **GSD**, **Spec Kit**, or others based on *spec-driven development* gather large amounts of project context (file structure, history, decisions, plans, etc.). However, **they should not be used together with the Flexygo MCP server**.

    **Why?**

    The MCP server already injects its own specialized context about the state of the application and the database. These planning tools don't have real access to how the application works or to the DB structure, so the context they generate doesn't reflect the reality of the Flexygo project.

    The result is counterproductive: the context they gather **interferes with the real context the MCP provides** and occupies context window space with information that has no operational value. The agent ends up working with contradictory signals.

    **Use the MCP server directly**, without additional layers of spec-driven planning. For complex tasks, follow the advice in the [Managing the context window](#managing-the-context-window) section and break the work into steps.

---

## The /build-mvp prompt

The main prompt for **creating a Flexygo product from scratch**. Just describe what you want to build:

```text
/build-mvp I want a backoffice to manage a call center
```

The agent guides the whole process: data model → style → implementation plan → generation → verification → migration scripts. See the [full flow in Basic use](./2Usage.md#the-build-mvp-flow) to see each phase in detail.

---

## How to give effective instructions

### Always identify the object you're working on

When you want to modify something, explicitly state what it is and what it's called. The agent works with a project that can have dozens of modules, entities, or pages — without that context, it interprets or asks.

=== "Too vague"

    ```text
    Modify the listing module so it also shows the phone number
    ```

=== "Effective"

    ```text
    In the "CustomerList" module (Customer entity), add the Phone property
    as a visible column in the grid. The field already exists on the entity.
    ```

---

### Set boundaries for the task's scope

State what shouldn't be touched. Agents tend to be more creative than necessary when the scope isn't clear.

```text
I want to change the header color to #1a3a5c.
Use the Color Picker MCP App. Don't modify anything else about the style.
```

---

### Split the phases when the task is complex

If a task has several parts, ask for them in steps and wait for confirmation between them. Don't throw everything into a single prompt.

=== "A prompt that can spiral out of control"

    ```text
    Create the Order entity, add the relationship with Customer, generate the
    creation form, and update the navigation menu
    ```

=== "Same work, under control"

    ```text
    Step 1: Create the Order entity with the fields: id, date, total, customerId (FK to Customer).
    Once you have it, confirm and wait.
    ```
    *(After confirmation)*
    ```text
    Step 2: Generate the creation form for the Order entity.
    Once you have it, confirm and wait.
    ```

---

### Ask for a review before running data changes

For any operation that modifies the database, ask the agent to describe what it's going to do before executing it:

```text
Before running any change to the database, explain exactly which
operations you're going to perform and wait for my confirmation.
```

---

### Give context at the start of each conversation

If the task starts from a specific state of the project, orient the agent before asking for anything:

```text
I'm in the "OrderManagement" module. The Order entity has the fields:
id, date, total, status (enum: Pending/Shipped/Delivered), customerId.
I want to add a status filter in the main listing.
```

The agent will work on what you describe to it — don't assume it "knows" the current state of your project.

---

## Tips for using Copilot

- Start the `flexygo-mcp` server **before** opening VS Code. If Copilot was already open, reload the window (`Ctrl+Shift+P` → **Developer: Reload Window**).
- Always use **Agent** mode in the Chat panel, not the inline edit chat — only agent mode has access to the MCP tools.
- If the agent doesn't use the MCP tools when it should, explicitly remind it: `"Use the Flexygo MCP tools for this"`.
- When the agent proposes several approaches, pick one before continuing. Sustained ambiguity consumes context without moving forward.
- If a response was wrong, correct it in the next message before continuing with the task — don't ignore it, or the agent will build on top of the error.

---

## Verify that the agent is using the tools

The Copilot chat shows in real time which tools the agent is invoking. **If the agent doesn't appear to be using any Flexygo tool, it's making up the answer** — it isn't querying or modifying anything real in the project.

Signs that the agent is hallucinating instead of using the MCP:

- It responds immediately without showing any tool invocation
- It describes entities or structures that don't match your actual project
- The changes it "made" don't show up reflected in the application

If this happens, stop the conversation, verify the server is active in `.vscode/mcp.json` (**Running** status), and explicitly ask the agent to use the Flexygo tools.

---

## Make a checkpoint commit before iterating

Once you've completed the `/build-mvp` flow and the user has reviewed and approved the generated base, **make a commit to Git before continuing** with requests for improvements or individual modifications.

This checkpoint has several advantages:

- You have a clear point to return to if a later iteration breaks something
- The agent can see exactly what changed in each task (clean diff)
- You keep control over what is the "approved base" and what are later changes

It's good practice to make frequent commits as you go — don't wait until the product is finished.

---

## Adjust the complexity of what you ask for

The MCP server can assess the size of a task and decide how to approach it: if the task is large enough it will generate a plan before executing; if it's more limited it will tackle it directly.

Either way, **it's the user's responsibility not to ask for tasks that are too complex or that open too many fronts at once**. The more variables a request has, the more likely the result won't be what was expected, or the agent will lose coherence partway through the process.

If the task you have in mind seems large, break it down yourself before giving it to the agent.
