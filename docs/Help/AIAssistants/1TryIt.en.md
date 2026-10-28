# Try it: an AI assistant working with your application (MCP) <span class="fh-version-tag" title="Available since version 10">10.0+</span>

In about fifteen minutes you will have Claude (or another assistant) connected to a Flexygo application **with your user**: you will ask it about your data in plain language —"how many orders are there by status?", "show me customer 1", "build me a sales dashboard"— and it will answer by reading the application with your permissions, not one more. At the end you will see every question logged in the application itself and you will know how to cut the connection.

This page is the **short path to try it**. What each piece does, all the settings and the security are in the reference: [AI assistants (MCP)](2Reference.md).

---

## What you need

| | |
|---|---|
| **A version 10 Flexygo application** | A local development installation is fine. Log in with an **administrator** user. |
| **An object with data** | Any one you already have (orders, customers, incidents…). In the examples on this page it is an *Order* object with its status and its total. |
| **An assistant that speaks MCP** | The quickest way to try it locally is **Claude Code**. Claude (web or desktop) and ChatGPT also work, but they need to reach the application over the internet with HTTPS (step 5). |

---

## 1. Turn on the web API and MCP

In the control panel, **Security → WebAPI** area, turn on **Enable WebAPI** and **Enable MCP**. They are off by default.

![Enable WebAPI and Enable MCP in the WebAPI tool](../../docs_assets/images/AIAssistants/interruptor-mcp.png)

**Check**: your profile menu shows **Connect an assistant** and **Connected assistants**. If they do not appear, log out and back in.

![The profile menu with the two MCP entries](../../docs_assets/images/AIAssistants/menu-perfil.png){ width="320" }

## 2. Give yourself permission to connect an assistant

On the same screen, **Authorized People** panel, **Authorized Roles** tab: tick the **robot column** for your role (for example *Admins*). It is a permission separate from the web API one (the eye): for this test you do not need the eye.

![Authorized People: the robot column is the MCP permission](../../docs_assets/images/AIAssistants/permiso-mcp.png)

**Check**: **Connect an assistant** opens a page with your application's address to copy. If it says you do not have permission, the robot is missing from your role (or from your user, *Authorized Users* tab).

## 3. Show the assistant what it can use

In the **Authorized Data** panel, **Authorized Objects** tab, tick the **eye** (view a record) and the **list** (view the collection) on your object. If you want it to be able to modify too, tick create or edit; for a first test reading is enough.

**What you do not tick does not exist for the assistant.** This is how you decide which part of the application is within the AI's reach.

## 4. Explain what your application is

The assistant is only as accurate as the descriptions are good. For the test, two minutes:

- **Settings → `ApplicationDescription`**: what the application is and your business vocabulary. For example: *"Sales management: orders (statuses Draft, Confirmed, Shipped, Invoiced, Cancelled) and customers. "Revenue" is the sum of the Total of non-cancelled orders."*
- **The object's AI description** (*AI description*, on the object's form) and, on coded fields, their **Description in API** (*"Order status: DRAFT, CONFIRMED, SHIPPED, INVOICED or CANCELLED"*).

It works without this too, but the assistant guesses what your columns mean. The full list of what it reads, with its table and column, and a prompt for an AI to propose it to you from your configuration database, is in [What to fill in](2Reference.md#1-bis-what-to-fill-in-so-the-assistant-gets-it-right).

## 5. Connect the assistant

Open **Connect an assistant** and copy the address (your application's address ending in `/mcp`).

=== "Claude Code (local)"

    ```bash
    claude mcp add --transport http miapp http://localhost:7111/mcp
    ```

    Replace the address with the one you copied. Inside Claude Code, type `/mcp`, choose `miapp` and press **Authenticate**: the browser opens.

=== "Claude web or desktop"

    *Settings → Connectors → Add custom connector*, with a name and the address. It needs the application to be visible from the internet with HTTPS (the one connecting is Anthropic's servers): in a local test, a tunnel (ngrok or similar) to the Frontend. See [Reverse proxy](../../1Deployment/6ReverseProxy/index.md).

=== "Others (ChatGPT, Gemini…)"

    In their connectors, the same address. Any MCP client with *streamable HTTP* and OAuth works: it registers itself when connecting.

In the browser **you log in with your usual user** and see the consent page: who is asking, with which user and what is granted. Press **Allow** (you can untick *Modify data* so that it only reads).

![The consent page](../../docs_assets/images/AIAssistants/consentimiento.png)

**Check**: the assistant says it is connected (in Claude Code, `/mcp` shows it as *connected*).

## 6. Ask it

Some questions to see each thing, with your names instead of the ones in the example:

| Question | What should happen |
|---|---|
| "What is in this application?" | It reads the catalog and summarizes your objects **with your descriptions**. If it only sees the object you ticked in step 3, security works. |
| "How many orders are there by status?" | It gives you a count by status. Compare it with the list in the application: it must match. |
| "How much have we invoiced?" | It sums the Total of the non-cancelled ones, if you explained it in step 4. |
| "Show me order 1" | The form with its fields and a link to open it in the application. |
| "Build me a sales dashboard" | Figures, breakdowns and a table. In Claude web or desktop it appears as an interactive dashboard; in the others, as text and tables. |
| "Change the status of order 1 to Confirmed" | If you did not tick edit in step 3, or you unticked *Modify data* when connecting, it refuses and tells you why. |

## 7. See what happened

In the control panel, **Environment** area:

- **MCP usage**: calls per day (answered and rejected), per tool and per person, and the reason for each rejection.
- **MCP sessions**: your live connection, with whom, since when and what it can do.

![MCP usage after the test](../../docs_assets/images/AIAssistants/uso.png)

## 8. Cut the connection

Profile menu → **Connected assistants** → **Revoke** on the row. The assistant's next question gets a refusal. To come back, connect again (step 5).

![Connected assistants, with Revoke in the row menu](../../docs_assets/images/AIAssistants/asistentes-conectados.png)

And if you turn off **Enable MCP** (step 1), `/mcp` stops existing for everyone immediately.

---

## If something does not work

| What you see | Why | What to do |
|---|---|---|
| The assistant does not connect and the address returns *404* | **Enable MCP** (or **Enable WebAPI**) is off | Step 1 |
| The connect page or the consent page says you do not have permission | The robot is missing from your role or your user | Step 2 |
| The assistant says the object does not exist | It is not ticked in *Authorized Data* | Step 3 |
| It answers, but mixes up fields or statuses | Descriptions are missing | Step 4 |
| Claude web or desktop does not reach the application | It is not accessible from the internet with HTTPS | Step 5: tunnel or reverse proxy |
| Writes are rejected | No edit/create in *Authorized Data*, or *Modify data* unticked when connecting | This is expected: tick it and reconnect if you want to try them |
| The assistant does not appear as approved in *MCP assistants* | `MCP_RequireApprovedClients` is on | Approve it in **MCP assistants** |

For everything else —call limits, prompts, auditing, best practices— see the reference: [AI assistants (MCP)](2Reference.md).
