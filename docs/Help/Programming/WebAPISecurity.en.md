# WebAPI security: what the role can't do, the API can't either <span class="fh-version-tag" title="Available since version 10">10.0+</span>

Since version 10, **the web API applies the security of the token's role just like the user interface**: what a role cannot see or run on screen, it cannot request through the API either, and the response says so with its own HTTP status and a sentence explaining the reason. The application's OpenAPI (`GET /webapi`) is also trimmed by role: an integration only sees advertised what it can actually use.

This page is for those who integrate with the application (n8n, an ERP, a script) and for those who administer it. AI assistants use the same mechanism: see [AI assistants (MCP)](../AIAssistants/2Reference.md).

---

## 1. Who gets into the API

It is configured in the **WebAPI** tool of the **Security** area of the [control panel](../Administration/ControlPanel.md) (in flexy2022, *Admin Work Area › Security › WebAPI*):

<figure markdown="span">
  ![The WebAPI screen: general switch, authorized data and authorized people](../../docs_assets/images/WebAPISecurity/configuracion.png)
  <figcaption>At the top, the general switch and the timeouts; on the left, what is exposed; on the right, who gets in</figcaption>
</figure>

| Where | What it decides |
|---|---|
| **Enable WebAPI** (`WebAPI_Enabled`) | The whole API, on or off. |
| **Authorized Data** | Which objects, views and processes are published and what can be done with each object (view, list, create, edit, delete, print). What is not published does not exist for the API. |
| **Authorized People**, eye column | Which roles or users can use the API (`WebAPI_Roles`, `WebAPI_Users`; the user overrides their role). |
| **Authorized People**, robot column | The **AI assistants (MCP)** permission, separate from the API one: a role can have one without the other. |

And underneath all that, **the role's usual security**: object permissions (view the record view, view the list), row filters and the permissions of each process. Publishing an object in the API does not bypass any of that.

The token is requested with `POST /token` (`grant_type=password`, `username`, `password`) and travels in `Authorization: Bearer …`.

---

## 2. Refusals: one status per reason, plus the sentence

Each refusal carries its HTTP status and a sentence in the body saying **what** was refused and **why**. Real responses:

**403: the role cannot see that list.**

```http
GET /webapi/list/sysUser
Authorization: Bearer <token of a user with role users>

HTTP/1.1 403 Forbidden
{"Content":{"Title":"Internal server error","Message":"Unauthorized collection sysUsers for role users","StackTrace":"","InnerMessage":null,"Msgtype":1},"Type":"Ajax"}
```

**400: an object process requested without its object.**

```http
POST /webapi/exec/SyncData

HTTP/1.1 400 Bad Request
{"Content":{"Title":"Bad request","Message":"Process SyncData is defined on sysOfflineSync: send the object and the record (id or filter) to run it on","StackTrace":"","InnerMessage":"","Msgtype":0},"Type":"Ajax"}
```

**404: the record the process is requested on does not exist.**

```http
POST /webapi/exec/SyncData/sysOfflineSync/999999

HTTP/1.1 404 Not Found
{"Content":{"Title":"Not found","Message":"sysOfflineSync record not found: [Offline_Sync].[SyncId]='999999'","StackTrace":"","InnerMessage":"","Msgtype":0},"Type":"Ajax"}
```

The full table:

| Status | When | Sentence |
|---|---|---|
| **401** | Missing, expired or invalid token. | — |
| **403** | The role cannot see the object's list. | `Unauthorized collection {Collection} for role {Role}` |
| **403** | The role cannot see that record (object permission or row filter). | `Unauthorized object {Object} for role {Role}` |
| **403** | The role cannot run the process on that object. | `Unauthorized process {Process} on {Object} for role {Role}` |
| **400** | Process defined on an object, requested without the object. | `Process {Process} is defined on {Object}: send the object and the record (id or filter) to run it on` |
| **400** | Collection process without `filter`: it would run on **all** records. | `Please send filter to select the {Object} records to run {Process} on` |
| **404** | The process's record does not exist (or the role's row filter hides it). | `{Object} record not found: {where}` |
| **409** | The record exists, but its state does not allow the process (*EnabledValues*, *DisabledValues*, *SQLEnabled*). | `Process {Process} is not available for this {Object} record ({where}): its state does not allow it` |

!!! note "The 403 title"
    In the 403, the envelope's `Title` field still says *Internal server error*. The status and the `Message` are what count.

!!! info "Reading a record that does not exist"
    `GET /webapi/object/{Object}/{id}` with an id that does not exist responds **200 with an empty record** (fields without values), as before. The 404 belongs to process execution.

---

## 3. Processes: always through their object

Two rules that close paths through which it used to be possible to act on a record without going through its security:

- **A process defined on an object only runs through that object**: `POST /webapi/exec/{Process}/{Object}/{id}` or, for the collection, `POST /webapi/exec/{Process}/{Collection}?filter=…`. Without the object, 400. A process not bound to any object still runs as always, without an object.
- **A parameter that is a field of the record cannot be overridden from the body.** If a parameter's default value is exactly `{{Field}}` and that field belongs to the object, it is taken from the record in the path and whatever arrives in the body is ignored. That way, the state check and the process look at **the same** record. The other parameters (`{{currentDate}}`, those the user fills in…) are still sent.

---

## 4. The OpenAPI, trimmed by role

`GET /webapi` returns the application's OpenAPI **for the token requesting it** (with `Authorization: Bearer …`; without a token, the one for everything published):

| What the role cannot do | What happens in the OpenAPI |
|---|---|
| Neither view the record view nor view the list of an object | The object disappears: no paths and no schemas. |
| Run a process | That process's `/exec` path is not advertised. |

And what is advertised is described better:

- Each **view** carries its description (the one from *Data views*), not just its name.
- Each **process** says which one it is and what it does ("Run *Process* (*description*) on a *Object* record by ID").
- A process's **hidden parameters** appear as `readOnly`, outside the required ones and with the note "Hidden: filled by the process…, do not send it".

!!! warning "Record view yes, list no"
    If a role can see an object's record view but not its list, the whole object is advertised and the `/list/…` path responds 403 when requested. To keep an integration from seeing it, also remove the record view permission or do not publish the object.

---

## 5. IP lockout, with scope

The application has a list of blocked addresses (**IP Lockouts**, in the **Security** area of the control panel; `Security_IP_Lockout` table). In version 10 **it blocks again**: a blocked address receives `401 Unauthorized` on everything that goes through the Backend, login included.

Each lockout has a **scope** (`Scope`):

| Scope | What it closes |
|---|---|
| `All` | The whole application for that address. It is the scope of lockouts added by hand. |
| `MCP` | Only the MCP server paths (`/mcp` and its registration and tokens); the rest of the application stays open for that address. |

Lockouts are also **created automatically**: suspicious requests (Sentinel's blacklist and greylist, and in the MCP, client registrations, failed token exchanges and calls without a session) are counted per address, and when `SentinelMaxBlackRequests` or `SentinelMaxGreyRequests` is exceeded in a short time, the address is blocked with the scope of whatever caused it.

The address that is checked and recorded in the log is **the client's**, not the Frontend's: the Frontend passes it to the Backend. Behind a reverse proxy, configure `ForwardedHeaders` as described in [Reverse proxy](../../1Deployment/6ReverseProxy/index.md), or all requests will appear to come from the proxy.

---

## 6. If you already have an integration

| Before | Now | What to check |
|---|---|---|
| List denied by role → `200 []` | `403` with the sentence | A client that treated the empty list as "no data" now receives an error: that is correct. |
| Record view denied → `500` | `403` | |
| Denial by role → `401` | `403` (401 is reserved for the token) | A client that renewed the token on seeing a 401 will no longer do so on role denials. |
| Process denied, nonexistent record or state that does not allow it → `500` | `403`, `404`, `409` | |
| Collection process without `filter` → ran on all records | `400` | Always send the `filter`. |
| Object process without object → ran | `400` | Use the path with object and record. |
| `{{Field}}` parameter sent in the body → was used | Ignored | Choose the record through the path. |
