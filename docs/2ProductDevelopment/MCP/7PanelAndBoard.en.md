# Panel and board

While you work with the agent, the Flexygo MCP server shows where the development stands without you having to ask. It does so in two places:

- **The Flexygo panel**, inside Claude Code, beside the chat.
- **The developer's board**, a page in the browser with all the detail.

---

## The Flexygo panel

### The band above the chat

In the Claude Code desktop app and in the VS Code extension, the panel is a **band above the text box** with three parts: **Now** (the phase and the command that comes next), **Your call** (what is waiting for a decision of yours) and **Next**.

"Next" and what is left to close come from the same list, in your words; if there is more than one thing, the rest unfolds below.

The band has three modes: full, lite and off.

- **Full** also shows cards with the task ring, what is left to close, how the last block's verification went and how full the chat is.
- **Off** leaves a single pill, **Flexygo ▸**, to open it again. Typing `/flexygo` also brings it back.

Its buttons:

| Button | What it does |
|---|---|
| **Go** | Writes the command that comes next in the text box, without sending it. |
| **Start apps** / **Stop apps** | Starts or stops the product's Backend and Frontend, with a dot that says whether they answer. It uses the product's `tools/app.ps1` script, which the server adds if it is missing. |
| **Board** | Opens the board on the tab that matters now: **Decisions** if a decision is open, **Resources** if there are files not yet reviewed and, otherwise, the last one you looked at. |
| **Live view** | Shows the screen being built (see below). |

If the buttons do not fit in one row, **Live view** and the apps buttons move to a **…** menu. Each open decision carries one button per option, with the recommended one marked.

There is no verify button: when a block closes, `/flx-execute` verifies it by itself and the band only shows how it went. The band is in Spanish.

The panel also records **the time and API usage price of each** `/flx-*` **command**, subagents included. They are kept per project on this computer. The band shows no money: the price is on the [board](#api-usage-price).

### How full the chat is

The band shows how much context the chat has used: **context N %**. The fuller it is, the worse the agent answers, so it warns in time:

- **Below 70 %**, there is room left in this chat.
- **From 70 %**, it asks you to finish the current step and carry on in a new chat.
- **From 80 %**, it warns that from there on it answers worse.

The warnings quote the real percentage, for example "Context at 82 %: …".

From 70 % the **New chat and go on** button shows. It clears the chat (`/clear`) and, in the new chat, runs the command that comes next. Nothing is lost: the agent carries on from the development's [checkpoint](./6Workflow.md#resuming-without-paying-for-the-whole-conversation), not from the conversation.

If Claude Code does not let the panel clear the chat, the band asks you to send `/clear` yourself. The next command is already kept, and runs by itself when the new chat starts if you do it within 10 minutes.

<!-- SCREENSHOT PENDING: the band with "context N %" above 70 % and the "New chat and go on" button. -->

!!! note "In the terminal"
    With Claude Code in a terminal there is no band: the panel opens as a side pane with the same information. That pane also has the **Project** button, which opens `ONBOARDING.md`, and **ES / EN** to change the language.

### Live view

**Live view** opens the board on the **Live** tab: the application beside a chat with Claude. See [Live: the application and the chat with Claude](#live-the-application-and-the-chat-with-claude).

The button shows when the product has its Frontend; if the Frontend does not answer, the board starts it.

---

## The developer's board

The board brings together on one page what is done and what is pending, what is left to verify, the API usage price and time per command, the data model, the decisions and the quality findings. It shows every Flexygo project on this computer, with its developments, except test benches: copies of another project and folders marked with a `.flexygo-bench` file. The project you open always shows.

<figure markdown="span">
  ![Developer's board, Overview tab](../../docs_assets/images/CoreProductDevelopment/MCP/boardOverview.png)
  <figcaption>The Overview: what the application is, its context and the next step</figcaption>
</figure>

Its tabs are **Overview**, **Live**, **Kanban**, **Dependencies**, **History**, **Decisions**, **Model**, **Screens**, **Quality** and **Resources**. The **Copy next command** button puts the command that comes next on the clipboard, and **ES / EN** changes the language.

The **Overview** opens with what the application is, in two or three sentences: what it is for, for whom and its main flow. `/flx-context` writes it and `/flx-review` keeps it current. Below, in short lines, the business, the users and roles, the flow, your decisions, whether it is used from outside and what has been built.

### How to open it

- From the band, with the **Board** button.
- By hand, from the project folder:

```bash
flexygo-mcp --board
```

With `--tab decisions` it opens straight on that tab.

The board opens only when you ask for it. It is served by a small local server that only answers on this computer and stops by itself after 30 minutes without use; each chat message counts as use. If the project has no Frontend, the board is a static page.

### API usage price

The board shows the **API usage price**: what the agent's work would cost at Anthropic API prices. It is worked out the way Claude Code works out `/cost`, with its price table per model and the real tokens of each turn.

- In **History**, per command and per phase.
- In **Kanban** and **Dependencies**, the development's total.

If you use Claude Code with a subscription, that is not what you pay: the real cost is not known. It is there to compare phases and developments with each other. It only shows on the board: the band shows no money.

<!-- SCREENSHOT PENDING: the board's History with the "API usage price" column and the per-phase chart. -->

### Resources

The **Resources** tab shows the project's `Resources/` folder: the material it is built from. Drop files there, or choose them, to upload them; you can also add a link with a note on what it is and why it matters.

- It takes images, PDF, Office documents, CSV, text, JSON, XML and zip, up to 50 MB per file and 300 MB in all.
- Each file shows as **new** until `/flx-context` reads it, and then as **reviewed**.
- To upload files, the board has to be opened from the project and served with its Frontend.

### Live: the application and the chat with Claude

The **Live** tab shows the application beside a conversation with Claude. The board itself serves the chat by calling Claude Code on this computer, so **it keeps working even if you close the editor**.

- At the top you choose the project's conversation, or start one with **+ New**. The answer arrives as it is generated, and **■ Stop** cuts it.
- If another window has just written in that same conversation, the board shows it as **open in** that window and does not let you write in it, so two do not write at once. Write there or open a new one here.
- From the board, Claude may only use Flexygo's tools. If it tries another one, a **Permission refused** card shows what it wanted to do; **Allow this time and retry** lets it through that once.
- It needs Claude Code installed and signed in on this computer. If either is missing, the board says so in a card.

!!! note "Cost"
    Each message of the board's chat loads the project's context again, so it costs more than a message in the editor's chat.

<figure markdown="span">
  ![The application on the Live tab, with the Select, Pause and Full screen buttons](../../docs_assets/images/CoreProductDevelopment/MCP/boardLive.png)
  <figcaption>The application on the Live tab, with Select, Pause and Full screen</figcaption>
</figure>

With **Select** you ask for changes on the application itself:

1. Press **Select**.
2. Click what you want to change: a page, a module, a field, a column, a button, a menu option…
3. Answer **What should change?** and press **Send** (or Enter). Esc cancels.

The message reaches the conversation saying which element it is about.

---

## How to turn on the panel and the board

### One-time step: `--enable-panel`

The panel is a Claude Code add-on that ships inside the Flexygo MCP server. For Claude Code to know about it, run this **once per user and computer**, in a terminal:

```bash
flexygo-mcp --enable-panel
```

This command does two things, and nothing else:

1. It copies the panel to the `~/.flexygo-mcp/mods` folder, which is kept when you update the server.
2. It adds one entry to your Claude Code user settings (`~/.claude/settings.json`) that tells it where the panel is.

You do not need to remember the command: when this step is missing, `/flx-setup` asks whether you want to turn it on and only runs it with your yes. The server never runs it on its own, because it writes to your user settings.

Each project turns the panel on in its own `.claude/settings.json`, and the server does that by itself when it starts. If someone turned it off in a project, it stays off.

The panel shows when you open a **new chat or session** of Claude Code in the project.

### Where it works

| Where you use Claude Code | What you see |
|---|---|
| Desktop app | The band above the chat. **Live view** opens the board on the Live tab. |
| VS Code extension | The band above the chat, with the mode in a drop-down. **Live view** opens the board on the Live tab. |
| Terminal | A side pane instead of the band. |
| No interface (`claude -p`) | Nothing to see, but each command's API usage price is still recorded. |

The **board** does not depend on the panel: it is a browser page and works in every case, also with `flexygo-mcp --board`.

!!! info "Coming soon"
    In an upcoming version the panel will install with one click, with no commands.
