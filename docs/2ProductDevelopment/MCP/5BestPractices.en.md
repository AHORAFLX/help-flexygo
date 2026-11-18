# Best practices

These recommendations assume the `flexygo-mcp` server is connected to Claude Code. If you haven't set it up yet, see [Basic use](./2Usage.md) first. To see how to work by talking to the assistant, see the [Guide](./0Guide.md).

---

## Recommended model

Use a current Claude model. For thinking and deciding (`/flx-plan`, `/flx-discuss`, `/flx-review`, `/flx-quality` and the security audit of `/flx-release`), use the most capable model you have; for building and checking (`/flx-context`, `/flx-execute`, `/flx-security`, `/flx-help`, `/flx-api`, `/flx-release`…), a faster and cheaper one is enough. The agent recommends the one for each phase: see [The model for each phase](./6Workflow.md#the-model-for-each-phase).

---

## Managing the context window

This is the factor that most affects the quality of the work with the agent. As the conversation grows, the agent starts to lose coherence, forgets earlier instructions and makes mistakes it wouldn't make with a clean context. Every message in a long conversation also costs more.

**Practical rules:**

- **A new chat for each phase or block.** The server keeps a checkpoint of each development, so a new chat resumes the work without rereading the previous conversation: type `/flx-status` or the next command. See [Resuming the work](./6Workflow.md#resuming-without-paying-for-the-whole-conversation).
- **Heed the status line's warning.** When the context fills up, the Flexygo status line says so with `context N% → new chat`, from 80 %.
- **Accept the new chat the agent offers.** In a very long chat, when a task or a block closes, it proposes going on in a new one and gives you the message to start it.
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

The `/flx-*` commands take the work phase by phase: context, plan, decisions, execution block by block (each block is checked in the browser and tested in its own chat), review, security, quality, help, the API if needed, and the final check (`/flx-release`: security audit, delivery documents and the product published from scratch with all its tests). Each phase is the gate to the next, so you don't need to remember what comes next: the agent, the panel and `/flx-status` tell you. See the [whole flow](./6Workflow.md).

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

### Let the flow split the work

If a task has several parts (a new entity, its relation, its form and its menu option), don't split it into messages yourself: ask for it with `/flx-new-development` and `/flx-plan`, which split it into blocks sized to a chat and ask you first whatever needs deciding.

Nor do you need to describe the state of the project to the agent: before changing something, it reads its configuration. Naming the object you work on is enough.

---

### Ask for a review before running data changes

For any operation that modifies the database, ask the agent to describe what it's going to do before executing it:

```text
Before running any change to the database, explain exactly which
operations you're going to perform and wait for my confirmation.
```

---

## Tips for using Claude Code

- If the agent doesn't use the Flexygo tools when it should, remind it explicitly: `"Use the Flexygo MCP tools for this"`.
- When the agent proposes several approaches, pick one before continuing. Sustained ambiguity uses up context without progress.
- If an answer was wrong, correct it in the next message before continuing with the task — don't ignore it or the agent will build on the error.
- When you update the server (`dotnet tool update -g flexygo-mcp`), open a **new chat**: a chat already under way keeps the tools it started with. The server tells you when a new version is published, and the status line says `server X runs, Y installed → new chat` while the chat is still on the previous version.

---

## Verify that the agent is using the tools

The Claude Code chat shows in real time which tools the agent is calling. **If the agent doesn't show any Flexygo tool being used, it's making the answer up** — it isn't reading or changing anything real in the project.

Signs that the agent is hallucinating instead of using the MCP:

- It answers immediately without showing any tool call
- It describes entities or structures that don't match your real project
- The changes it "made" don't show up in the application

If it happens, stop the conversation, check with `/mcp` that the `flexygo` server is connected, and explicitly ask the agent to use the Flexygo tools.

---

## Accept each block's commit

When preparing the project, the agent asks you once what to do when each block and each phase that changes the configuration closes: commit only, commit and push, or nothing. With the commit you have a point to go back to for each block, without files that hold secrets; the push is made with your own git and never forced. See [Version control](./6Workflow.md#version-control).

Accept it before asking for improvements or individual changes:

- You have a clear point to return to if a later iteration breaks something
- The agent can see exactly what changed in each task (clean diff)
- You keep control of what is "approved base" and what are later changes

---

## Adjust the complexity of what you ask for

A small change to something that already exists goes through `/flx-fast`, with no plan. Anything that creates tables or entities, touches permissions or loads data goes through `/flx-new-development` and `/flx-plan`, which splits it into blocks.

In any case, **it's the user's responsibility not to ask for tasks that are too complex or have too many open fronts at once**. The more variables a request has, the more likely the result won't be what was expected or the agent will lose coherence halfway through.

If the task you have in mind seems big, split it yourself before giving it to the agent.
