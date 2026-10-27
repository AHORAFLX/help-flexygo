# Workflow with commands

!!! info "New in version 10.0"

    You can now create a Flexygo application by talking to an assistant connected to the MCP. The assistant gathers the requirements, asks you questions before starting, proposes a design and organises the work into blocks and tasks. It then builds the application and opens it in the browser so you can check it.

    You can also open a board from the assistant to follow tasks, decisions, history and quality checks.

    ![New in version 10.0](../../docs_assets/images/6Workflow/mcp-product-building.png)

With Claude Code, the Flexygo MCP server is driven by **commands** that start with `/flx-`. Each command is a phase, and each phase is the gate to the next one: the agent does not skip a phase or guess which one it is in.

!!! tip "Can't see the commands?"
    The commands are installed in the project the first time the server starts. If they do not show when you type `/flx-`, ask the agent to sync the Flexygo commands and open a new chat.

---

## The flow, in order

| Command | What it is for |
|---|---|
| `/flx-context` | Gathers the project's context: the business, the prefixes, the conventions and **who uses the application** (roles, public screens, and whether anyone will use it from outside). Writes `ONBOARDING.md` at the project root. |
| `/flx-plan` | Turns the request into blocks with their task list. If the application has several roles, the plan carries a security task; if it has screens, it ends with demo data. |
| `/flx-discuss` | Closes the plan's open points one at a time and records each decision. |
| `/flx-execute` | Builds **one** block, task by task. |
| `/flx-review` | Compares what was agreed with what was built. |
| `/flx-verify` | Checks in the browser that it works, by replaying the recorded walks. |
| `/flx-test` | Writes the product's own tests and leaves them green. |
| `/flx-quality` | Looks for what is missing (pager, empty state, way back…) and records your decision on each finding. |
| `/flx-help` | Gives the application its help for the end user: a welcome tour per role, on the start page, that opens by itself the first time the user enters; a guided tour per screen; field help; and a help page with screenshots. |
| `/flx-api` | Only if the application is used from outside: exposes what was built through the WebAPI, read-only by default and per role, and tests it with one user of each role. |

At any time, as well:

- `/flx-status` says where the work stands and what comes next.
- `/flx-origin` says which origin new work lands in.
- `/flx-build-product` walks the whole flow for "an application for…".
- `/flx-new-development` starts new work in a project that already has things built.

### Small changes: `/flx-fast`

A minor change to something that already exists (a property, a label, a filter, a module, a list) needs no plan and no blocks: `/flx-fast` makes it and keeps a record.

If the change is bigger, `/flx-fast` sends it to `/flx-new-development`. It is bigger if it does any of these:

- creates new tables or entities;
- touches permissions;
- loads data;
- deletes an entity;
- adds up to more than about five changes.

It only asks before starting if the change deletes something or is ambiguous.

---

## Cheaper verification: recorded walks

`/flx-verify` no longer has the agent look at every screen again. Each screen has a **walk**: a browser route recorded in a file of the interface test project (`{Product}.InterfaceTest/walks/`). It is product code: it travels with git and also runs in continuous integration.

When verifying, the server replays every walk at once, in a single browser:

- **A walk that passes** against its accepted baseline is recorded as "seen working", with its capture. You are not asked to look at that screen again.
- **A walk that fails** is recorded red and reopens its task.
- **A new or changed capture** comes back to you with the difference painted in red. You open it, look at it, and accept or reject it. What you accept is recorded.

Each capture is also measured on its own: contrast, untranslated identifiers, broken images, sideways scroll and the order of lists.

The saving is that the agent only deals with what fails or changes, instead of going through every screen one by one.

---

## The product's own tests

`/flx-test` writes tests that stay in the product's repository, in its two test projects:

- **`{Product}.UnitTest`**: at least one test for each new process or business rule.
- **`{Product}.InterfaceTest`**: at least one walk for each new screen. It checks that the screen opens without errors, that its main action works and that the effect shows.

The agent proposes the list to you in business terms and waits for your yes. Each test creates its own data and deletes it at the end, without touching the demo data.

Before calling the tests good, the agent breaks one on purpose, sees it fail and puts it back to green. The unit tests run in continuous integration before every publication. The interface tests need the application to be running.

If you decide to go without tests, that is recorded as a decision.

---

## Resuming without paying for the whole conversation

Resuming a long conversation is expensive: the model reads all of it again. So for each development the server keeps a **checkpoint** of about 2 KB with the essentials:

- the phase and the block;
- the open decisions;
- the last verification result;
- the known incidents;
- what comes next.

To carry on another day, or when the chat is getting heavy:

1. Open a **new chat**.
2. Type `/flx-status`, or just the next command of the flow.

The agent starts from the checkpoint, not from the previous conversation. The status line under the text box warns with `context N% → new chat` when it is time to change chats.

---

## Error telemetry

When one of the server's tools fails, the server records what is needed to reproduce the failure:

- the tool and its arguments, with passwords and SQL values masked;
- the error;
- the versions;
- the phase and task where it happened.

**It never sends the conversation or the rows of a query.**

By default, errors go to an OpenTelemetry collector on the same computer (`http://localhost:7472`), so they do not leave it. The server's first answer in each session reminds you of this.

To send them to another collector, put its address in the `FLEXYGO_MCP_ERROR_TELEMETRY` environment variable. To turn it off:

```bash
FLEXYGO_MCP_ERROR_TELEMETRY=off
```

---

## Panel and board

The state of the flow can also be seen without asking: in the Flexygo panel, above the chat, and on the developer's board. See [Panel and board](./7PanelAndBoard.md).
