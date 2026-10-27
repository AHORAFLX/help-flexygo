# Common mistakes and how to check <span class="fh-version-tag" title="Available since version 10">10.0+</span>

## How to check a rule

1. **Sign in as a user of the role in a private window** of the browser. That way you do not close your administrator session and you see exactly what that person sees.
2. **Look at the screen affected**: the list, the record, the **⋮** menu, the side menu.
3. **If you do not get what you expected, ask Diagnosis**: user, object, **Explain**. It tells you which layer decides and what each one says.
4. **For the API or an assistant**, try with a token of that same user (see [The web API and AI assistants](4WebAPIMCP.md#5-how-to-check-it)).

---

## Common mistakes

| What happens | Why | What to do |
|---|---|---|
| **«I took a permission away and I still see it»** | You are looking as an **administrator**: security does not apply to them. | Check it with a user of the role, in a private window. |
| **The user rule «opens» things the role had closed** | The deciding layer **replaces the whole row**. A user rule for an object with everything granted except print also grants delete, even if the role did not. | When writing a user exception, go over the row's six permissions, not just the one you wanted to change. **Diagnosis** shows it. |
| **The list's condition filters nothing** | It is on the row tagged **collection**. The server reads the list from the **object**'s row. | Remove the rule from the *collection* row and put the condition on **View collection** of the object's row. |
| **I hid a menu entry and they still reach the list** | The menu only hides: it can be reached by a link, the search or the API. | Deny **View collection** (or **View**) in **Objects**. |
| **The process disappears from every object** | It is denied in **Processes (global)**, which decides everywhere. | If you only wanted to take it off one object, use the **Processes** family. |
| **The global process with SQL never shows** | The query does not return 1 (it returns 0, nothing, or fails). An error leaves the process hidden and goes to the error log. | Run the query by hand, replacing the variables, and check it returns 1. Check the rule's **Connection String**. |
| **A module's condition is not saved** | The screen runs it against the page's object before saving it, and it could not run. | Fix the condition: the fields must exist in that object. |
| **A module's condition makes no difference** | It applies from each person's **next sign-in**. | Sign the test user out and in again. |
| **A user who is not signed in sees nothing** | For **Not Registered**, what is not written **is denied**. | Grant explicitly what a public page needs to show. |
| **«Start from another role» did not change a rule it already had** | It only brings what the destination role has not written: **it never overwrites**. | Remove the destination's rule first, or change it by hand. |
| **«Set to read-only» took my conditions away** | It deletes **every** object rule of the role before writing the new ones. | Use it when starting a role, not on one already set up. |
| **An AI assistant cannot connect** | **Enable MCP** is off, or the role's or user's robot is not ticked in **Authorized People**. | See [Who can connect an assistant](4WebAPIMCP.md#3-who-can-connect-an-ai-assistant). |
| **The assistant reads but changes nothing** | **Change data** was unticked on the consent page, or the role cannot, or the object is not published for editing. | Check the three; to change the consent, disconnect the assistant and connect it again. |
