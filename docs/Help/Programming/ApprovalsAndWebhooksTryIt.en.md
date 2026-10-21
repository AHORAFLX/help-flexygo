# Try it: a decision and an outbound webhook <span class="fh-version-tag" title="Available since version 10">10.0+</span>

In about fifteen minutes you will have two things working, without a line of code:

- **a decision**: every time someone creates a role, an administrator has to approve it, from their inbox;
- **an outbound webhook**: every time a role is saved, another system receives the whole record, signed.

We use **Roles** because every application has it; with any other object it works the same way.

This page is the **short path to try it**. What each piece does, the web API, the signature, the retries and the n8n example are in the reference: [Approvals, human tasks and outbound webhooks](ApprovalsAndWebhooks.md).

---

## What you need

| | |
|---|---|
| **A version 10 Flexygo application** | A local development installation will do. Log in with an **administrator** user (*Admins* role). |
| **An HTTP receiver for the webhook** | The quickest is a [webhook.site](https://webhook.site) address, which shows every request it receives. An n8n *Webhook* node also works. Only for steps 4 and 5. |

Both skins (skin2026 and flexy2022) have the same screens. Where the path differs, both are given.

---

## 1. Creating a decision rule

| skin2026 | flexy2022 |
|---|---|
| **Control panel › Logic and rules › Decision rules** | **Admin › Lógica y reglas › Reglas de decisión** |

![Logic and rules in the control panel](../../docs_assets/images/ApprovalsAndWebhooks/panel-logica.png)

**New**, and fill in:

| Field | Value |
|---|---|
| **Name** | `New role, approve it` |
| **Object** | *Role* |
| **Enabled**, **After insert** | on |
| **Title** | `Approve the new role {{Name}}` (the braces read the record's field) |
| **Description** | `{{currentUserLogin}} created the role {{Name}}` |
| **Assigned role** | *Admins* |
| **Due in (minutes)** | `60` |

Leave **Options** empty (they will be *Approve* / *Reject*) and **Only if** empty (every new role). Save.

![The rule's record view](../../docs_assets/images/ApprovalsAndWebhooks/regla.png)

**Check**: in the record view's menu, **Test with a record**, with `Id = 'admins'`. A dialog shows the task it would open (rendered title, to whom, priority, due date), **without creating it**.

![Test with a record](../../docs_assets/images/ApprovalsAndWebhooks/probar-regla.png){ width="600" }

## 2. Creating a role

Open the roles list (in skin2026, the **Roles** shortcut in the control panel; in flexy2022, under **Admin › Seguridad**) and press **New**: Id `salestest`, name *Sales test*. Save.

**Check**: the **Decisions** menu node (*Decisiones*) raises its counter by one, and there is a notice in the bell. If you do not see it straight away, reload the page.

## 3. Deciding

Open **Decisions**. The task *Approve the new role Sales test* is among yours, assigned to *Admins* («anyone in the role»), with its deadline and the link to the role. The segments at the top separate what is yours, what belongs to your roles, everything open and what is resolved.

![The decisions inbox](../../docs_assets/images/ApprovalsAndWebhooks/bandeja.png)

Press **Approve** on the row. **Check**: the row moves to **Resolved**, with who decided and when.

!!! tip "The card on the record's record view"
    On objects that use the **default record view**, the same decision shows at the top of the record's record view, with its comment and its history. It is the most direct way to decide while looking at the record. Roles has its own record view, so it does not show there: the `sysmod-task-decision-2026` module is placed by hand, like any other.

    ![The decision card](../../docs_assets/images/ApprovalsAndWebhooks/tarjeta.png)

## 4. Creating an outbound webhook

| skin2026 | flexy2022 |
|---|---|
| **Control panel › Logic and rules › Outgoing webhooks** | **Admin › Lógica y reglas › Webhooks de salida** |

It is one screen with two tabs: **Subscriptions** (*Suscripciones*), what is being watched, and **Deliveries** (*Envíos*), everything that has been sent.

![Outgoing webhooks](../../docs_assets/images/ApprovalsAndWebhooks/webhooks-suscripciones.png)

On **Subscriptions**, **New**:

| Field | Value |
|---|---|
| **Name** | `Roles to my receiver` |
| **Object** | *Role* |
| **Enabled**, **After insert**, **After update** | on |
| **Url** | your receiver's address (the webhook.site one, for example) |
| **Secret** | any long string; write it down, the receiver needs it to check the signature |
| **Payload** | *The whole record* |

Save. The secret is masked in the record view.

![A subscription's record view](../../docs_assets/images/ApprovalsAndWebhooks/suscripcion.png)

**Check**: in the record view's menu, **Send a test**, with `Id = 'admins'`. It queues a real delivery with `event: test`. In less than a minute it shows on the **Deliveries** tab as `sent` with status `200`, and your receiver shows the `POST`.

## 5. Watching it arrive for real

Edit the *Sales test* role (change the name) and save. The save does not wait for the receiver: the delivery is queued and goes out within the next minute.

**Check**:

- on **Deliveries** there is a new row, event `update`, `sent`, `200`;
- the receiver gets the envelope with the whole role in `data`, and the headers `X-Flexygo-Event: update` and `X-Flexygo-Signature: sha256=…`.

![The Deliveries tab](../../docs_assets/images/ApprovalsAndWebhooks/webhooks-envios.png)

To check the signature with the secret from step 4, the code is in the reference: [Headers and signature](ApprovalsAndWebhooks.md#headers-and-signature).

## 6. Going further: an orchestrator waiting for the decision

The two pieces come together when an orchestrator (n8n, Make…) opens the task through the web API and **waits** for someone to decide:

1. it calls `sysTaskCreate` with a `CallbackUrl` and a `CallbackSecret`;
2. the person decides in the inbox;
3. Flexygo sends the result, signed, to that URL.

The complete n8n example is in the reference: [n8n orchestrates, Flexygo decides](ApprovalsAndWebhooks.md#6-example-n8n-orchestrates-flexygo-decides).

## 7. Cleaning up

Turn off **Enabled** in the rule and in the subscription (or delete them) and delete the *Sales test* role.

---

## If something does not work

| What you see | Why | What to do |
|---|---|---|
| No task opens when the role is created | The rule is disabled, has no **After insert**, or its **Only if** is not met | Step 1: **Test with a record** says which of the three |
| The **Decisions** counter does not go up | The task is assigned to a role that is not yours | Look at **All open** in the inbox; change **Assigned role** |
| **Reject** asks for a comment | The option or the rule requires a comment | That is expected: write the reason |
| **Only if** is disabled | The chosen object is external: its records live behind an API and there is no table to evaluate a `WHERE` on | It works without a condition; see [External objects](ApprovalsAndWebhooks.md#2-decision-rules) |
| The delivery stays `pending` | The **flxWebhookDispatcher** job is not running | In **Logic and rules › Cron Jobs**, make sure it is active |
| The delivery comes out `failed` with a code | The receiver did not answer `2xx` within the timeout | It retries on its own (1, 5, 15, 60, 240 and 720 minutes); **Retry** on the delivery's record view sends it now |
| The signature does not match at the receiver | The receiver computes over the already parsed body, or with another secret | Compute the HMAC over the **raw** body, with the same **Secret** |
| The rule's record view does not accept the **Callback URL** | The field validates a public address: `localhost` or `192.168.…` do not pass | Use a public address, or open the task through the web API |

For everything else (statuses, escalation, the web API, the shape of the body and of the callback) there is the reference: [Approvals, human tasks and outbound webhooks](ApprovalsAndWebhooks.md).
