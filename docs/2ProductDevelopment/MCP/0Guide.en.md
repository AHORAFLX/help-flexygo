# Guide: build by talking to the assistant

With the Flexygo MCP server you don't need to learn any command. Open the project in Claude Code and **tell the assistant what you want, in your own words**. It recognises what kind of work it is, starts the step that comes next and, when each one ends, tells you which comes after.

```text
I want an application to manage the staff shifts of a care home.
```

The `/flx-` commands exist and do the same: they are a shortcut for whoever prefers to go straight to a step. They are all in [Workflow with commands](./6Workflow.md).

!!! tip "Before you start"
    You need the project created from the installer and open in Claude Code. See the [Prerequisites](./1Prerequisites.md) and [Basic use](./2Usage.md). If the project has no databases yet, the assistant notices and starts by preparing them.

---

## Ways to start

### From scratch, saying what you want

Describe the application: what it is for, who uses it and what each of them does. The more specific you are, the better the assistant starts.

```text
I want a shift management application. The coordinator creates the week's shifts
and assigns them; each worker sees only their own and can ask for a swap, which
the coordinator approves or rejects.
```

If you have requirements, screenshots, sample data or logos, leave them first in the project's `{Product}.Resources/` folder, or upload them from the [board](./7PanelAndBoard.md#resources): the assistant reads them before asking you anything.

### From a generated application or screens already approved

If the client has already approved an application made with Lovable or another tool, give it the downloaded project's folder:

```text
The client already approved this Lovable prototype. It is in C:\Prototypes\shifts.
Build it in Flexygo.
```

The assistant files those screens as the **original** and builds each one in its image with Flexygo's modules. It will ask you how faithful each screen has to be. See [Implanting an approved original](./6Workflow.md#implanting-an-approved-original).

### From a design

If you have the screens drawn, or want Google Stitch to draw them, ask to see them before anything is built:

```text
Before building anything, I want to see what the screens would look like.
```

```text
Here are the screenshots of what the shifts screen has to look like.
```

The assistant shows you the design and waits for your yes. From then on, that design is the original the build is compared with.

### On an existing database or an ERP

If the data lives in a database that already exists, such as an ERP's, say so from the start:

```text
The data is in the client's ERP database. I want screens to look up orders
and customers.
```

When preparing the project, the assistant always asks whether the data model is ours to build or belongs to a system that is already there. If it is already there, **it creates nothing in that database**: it reads its real tables to build on them, and whatever has to change travels as scripts the application applies by itself.

### A new development in a project that already works

In a project that already has things built, tell it what is new:

```text
Now I want to add holidays: each worker asks for them and the coordinator approves them.
```

The assistant first looks at what is already there (what it is called, what it looks like) so the new work fits, and then plans only the new part.

### A small change

For a tweak to something that already exists, just ask for it:

```text
In the shifts list, add the workplace column.
```

```text
Change the label "Start date" to "Starts".
```

It makes it with no plan or blocks and keeps a record. If the change turns out to be bigger (new tables, permissions, loading data or more than about five changes), it tells you and treats it as a new development.

---

## What happens next

However you start, the work follows the same path. You don't have to remember it: the assistant tells you at every moment where it stands and what comes next.

1. **It asks.** It gathers the context: the business, who uses the application and what each role sees, and whether anyone will use it from outside.
2. **It proposes the plan.** It splits the work into blocks, each sized to a chat, with its task list.
3. **It decides with you.** It closes the plan's open points one at a time before building.
4. **It builds block by block.** One block at a time. When it finishes one, it checks it in the browser by itself with recorded walks and leaves the product's tests for what it built green, all in that block's chat.
5. **It asks for your decision at the key points**: with a recommendation and its options. Nothing is decided by your silence.

And these are included, without you having to ask:

- **Review**: compares what was agreed with what was built.
- **Security**: proposes who may do what, you decide, and it tries every rule signed in as each role, with that role's own test user.
- **Quality**: looks for what is missing, such as the pager, the empty state or the way back.
- **Help**: a help centre for the end user, with guided tours.
- **API**: only if the application is used from outside.
- **Final check**: first, a security audit made by an agent that did not build the application; then the delivery documents (`README.md`, `CI.md` and `ONBOARDING.md`); and last, it publishes the product from scratch, only from what is in its repository, into databases of its own, and runs all its tests there. With everything green, the development closes. See [The final check](./6Workflow.md#the-final-check-flx-release).

---

## Worth knowing

### Picking up the work another day

Open a **new chat** and say, for example:

```text
Where were we?
```

The assistant does not need the previous conversation: it starts from what the server keeps in the project. That is why you can close the chat without fear of losing anything.

### Looking after the context: when to open a new chat

The longer a conversation gets, the worse the assistant answers and the more each message costs, because the model reads it all again. The server is designed so you don't need to drag it along:

- **A checkpoint of about 2 KB** per development, with the phase, the block, the open decisions, the last verification result, the known incidents and what comes next. It is rebuilt with every step, so it is never behind.
- **The project's status**, which any new chat checks to know which phase it is in and what comes next, without guessing.
- **The project's lessons**: your corrections and the limits found pass from one block to the next through the project, not through the chat.
- **Reference guides are read when needed**, not at the start: the assistant asks for the one on reports, security or the WebAPI only when it is about to work on it.

In practice:

- **Open a new chat for each phase or each block**, and always to build a whole application.
- **Follow the panel's band**: it shows how much context the chat has used and turns red from 80 %, when a new chat is due. In a terminal, the status line also warns from 80 %. And in a very long chat, when a task or a block closes, the assistant offers to go on in a new one, with the message to start it.
- **Don't plan and build in the same chat**: what is spent thinking is needed later for building.

See [Resuming the work](./6Workflow.md#resuming-without-paying-for-the-whole-conversation).

### The model for each step

The assistant recommends, in bold and with its reason, the model for the phase the project is in:

- **Opus** for thinking and deciding: the plan, the decisions, the review, quality and the security audit. A mistake there is expensive, because what is decided wrong is built wrong.
- **Sonnet** for building and checking: the context, each block, security, help, the API and the final check.
- **Haiku** for looking at where the work stands. Within a phase, it also proposes it for the mechanical steps: translating the guided tours' texts, taking the help's screenshots or replaying the recorded walks.

Following it means **paying for the expensive model only where it improves the result**. You decide: switch (`/model opus`), keep yours for that phase or always keep yours. The assistant never switches model on its own. See [The model for each phase](./6Workflow.md#the-model-for-each-phase).

### Seeing where it stands

- **The panel's band**, above the chat, says which phase the work is in, what the assistant is doing at that moment, what is waiting for your decision (with a button per option) and what comes next. With its buttons you write the next command, start or stop the application, see it live or open the board. It also warns you when the chat is filling up.
- **The board**, in the browser, has the detail of everything, in tabs: the project's overview, the live application next to a chat, the tasks and their dependencies, the history, what each phase cost, the decisions, the data model, the screens, the design, security, quality and resources.

See [Panel and board](./7PanelAndBoard.md).

### Asking for changes

- **On what it has just built**: say so in the chat, naming the screen or the field. If the assistant got it wrong, correct it: it records the correction and the next blocks already know it.
- **Pointing at the application itself**: in the board's **Live** tab, press **Select**, click on what you want to change and write what you would change.
- **Something new and big**: tell it as a new development.

### What the assistant does and does not do

The assistant reads the configuration before changing anything, asks you before creating, migrating or deleting data and before giving anyone the administrator or designer role, and, when each block and each phase that changes the configuration closes, it saves that configuration into the product's scripts and commits, or commits and pushes, as you decided when the project started. It never forces a push.

There are things it **does not build even when asked**, because they would leave the application open:

- a process that takes the user or the role from the browser, which anyone can change;
- decisions that compare by hand with the administrator role;
- code loaded by hand or from a public CDN;
- buttons with inline code (`onclick` and the like) in an HTML module, which go through neither security nor processes;
- SQL built at run time, except with your express permission.

Nor does it copy a screen in HTML just for likeness: it uses Flexygo's modules, which bring security, the pager and search. See [What the agent does not build](./6Workflow.md#what-the-agent-does-not-build).

### The product video

When a development closes, the assistant offers once a short video of the product or of what was delivered, made with HyperFrames, in landscape and portrait, in the `{Product}.Marketing/videos/` folder. It is optional and not a phase of the flow. You can also ask for it:

```text
Make me a video of what we delivered in this development.
```

It needs Node.js, ffmpeg, the Claude Code `brag` plugin, the HyperFrames skills and the application running. See [Workflow with commands](./6Workflow.md#the-flow-in-order).
