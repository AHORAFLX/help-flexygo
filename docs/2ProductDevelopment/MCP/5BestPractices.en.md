# Best practices

These recommendations assume the `flexygo-mcp` server is connected to Claude Code. If you haven't set it up yet, see [Basic use](./2Usage.md) first.

---

## Recommended model

Use a current Claude model. For thinking and deciding (`/flx-context`, `/flx-plan`, `/flx-discuss`), use the most capable model you have; for executing a block already decided (`/flx-execute`, `/flx-verify`), a faster and cheaper one is enough.

---

## Managing the context window

This is the factor that most affects the quality of the work with the agent. As the conversation grows, the agent starts to lose coherence, forgets earlier instructions and makes mistakes it wouldn't make with a clean context. Every message in a long conversation also costs more.

**Practical rules:**

- **A new chat for each phase or block.** The server keeps a checkpoint of each development, so a new chat resumes the work without rereading the previous conversation: type `/flx-status` or the next command. See [Resuming the work](./6Workflow.md#resuming-without-paying-for-the-whole-conversation).
- **Heed the status line's warning.** When the context fills up, the Flexygo status line says so with `context N% → new chat`.
- **Don't use the same conversation to plan and to execute.** The analysis or discussion phase uses up context that is then needed for the execution.
- **For `/flx-build-product`, always start with a clean context.**

---

## Spec-driven development tools (GSD, Spec Kit, and similar)

!!! warning "Don't use spec-driven tools alongside the MCP server"
    Tools like **GSD**, **Spec Kit**, or others based on *spec-driven development* gather large amounts of project context (file structure, history, decisions, plans, etc.). However, **they should not be used together with the Flexygo MCP server**.

    **Why?**

    The MCP server already injects its own specialized context about the state of the application and the database. These planning tools don't have real access to how the application works or to the DB structure, so the context they generate doesn't reflect the reality of the Flexygo project.

    The result is counterproductive: the context they gather **interferes with the real context the MCP provides** and occupies context window space with information that has no operational value. The agent ends up working with contradictory signals.

    **Use the MCP server directly**, without additional layers of spec-driven planning. For complex tasks, follow the advice in the [Managing the context window](#managing-the-context-window) section and break the work into steps.

---

## Follow the command flow

The `/flx-*` commands take the work phase by phase: context, plan, decisions, execution block by block, review, verification, tests, quality, help and, if needed, the API. Each phase is the gate to the next, so you don't need to remember what comes next: the agent, the panel and `/flx-status` tell you. See the [whole flow](./6Workflow.md).

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

## Tips for using Claude Code

- If the agent doesn't use the Flexygo tools when it should, remind it explicitly: `"Use the Flexygo MCP tools for this"`.
- When the agent proposes several approaches, pick one before continuing. Sustained ambiguity uses up context without progress.
- If an answer was wrong, correct it in the next message before continuing with the task — don't ignore it or the agent will build on the error.
- When you update the server (`dotnet tool update -g flexygo-mcp`), open a **new chat**: a chat already under way keeps the tools it started with.

---

## Verify that the agent is using the tools

The Claude Code chat shows in real time which tools the agent is calling. **If the agent doesn't show any Flexygo tool being used, it's making the answer up** — it isn't reading or changing anything real in the project.

Signs that the agent is hallucinating instead of using the MCP:

- It answers immediately without showing any tool call
- It describes entities or structures that don't match your real project
- The changes it "made" don't show up in the application

If it happens, stop the conversation, check with `/mcp` that the `flexygo` server is connected, and explicitly ask the agent to use the Flexygo tools.

---

## Make a checkpoint commit before iterating

When you close a block or a development and have reviewed and approved it, **make a Git commit before continuing** with requests for improvements or individual changes.

This checkpoint has several advantages:

- You have a clear point to return to if a later iteration breaks something
- The agent can see exactly what changed in each task (clean diff)
- You keep control of what is "approved base" and what are later changes

It's good practice to commit often as you go — don't wait until the product is finished.

---

## Adjust the complexity of what you ask for

A small change to something that already exists goes through `/flx-fast`, with no plan. Anything that creates tables or entities, touches permissions or loads data goes through `/flx-new-development` and `/flx-plan`, which splits it into blocks.

In any case, **it's the user's responsibility not to ask for tasks that are too complex or have too many open fronts at once**. The more variables a request has, the more likely the result won't be what was expected or the agent will lose coherence halfway through.

If the task you have in mind seems big, split it yourself before giving it to the agent.
