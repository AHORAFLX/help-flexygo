# Deployment behind a reverse proxy

It is common to place a reverse proxy in front of Flexygo —nginx, IIS ARR, Cloudflare or a load balancer— to terminate TLS, publish several applications under the same domain or distribute load. It is compatible with both deployment modes, IIS and Kestrel, but **the proxy must be configured**: without that, the application cannot know what the original request looked like and behaves as if all traffic arrived unencrypted.

---

## What the proxy must forward

With a proxy in front, the one opening the connection to Flexygo is the proxy, not the browser. As far as the application is concerned, **all requests come from the same address and always over `http`**, even if the user is browsing over `https`. The proxy preserves that information in two headers, and both are required:

| Header | What it carries | What happens if it is missing |
|----------|----------------|---------------------|
| `X-Forwarded-Proto` | The scheme the browser used (`https`) | **Infinite redirect loop.** The application believes the request is insecure and redirects to `https`; the proxy hands it over again via `http`, and the cycle never ends |
| `X-Forwarded-For` | The real IP address of the client | Access auditing and per-user IP restrictions see the proxy's address instead of the user's |

### nginx

Inside the `location` block that acts as the proxy:

```nginx
proxy_set_header Host              $host;
proxy_set_header X-Forwarded-Proto $scheme;
proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
```

The full example for a Kestrel deployment on Linux is in [Deploying with Kestrel](../5Kestrel/index.md#reverse-proxy-with-nginx).

### IIS ARR

ARR forwards `X-Forwarded-For` on its own, but **does not add `X-Forwarded-Proto`**. You must create an inbound rewrite rule that sets that header from the `HTTPS` server variable.

### Cloudflare and managed load balancers

They send both headers with no additional configuration.

---

## Trusted proxies

`X-Forwarded-*` headers are text that anyone can send, so Flexygo **only accepts the forwarded IP address if the request comes from a declared proxy**. Otherwise, someone able to reach the server without going through the proxy could claim any address and bypass IP-based access restrictions.

- If the proxy runs **on the same machine** as Flexygo, nothing needs to be declared: local addresses are accepted by default.
- If the proxy runs **on another machine**, you must add its address to the `appsettings.json` of both Frontend and Backend:

```json
{
  "ForwardedHeaders": {
    "KnownProxies": [ "192.168.1.10" ]
  }
}
```

!!! warning "It is the address Flexygo sees, not the public one"
    This is not the site's public IP, but the one from which the proxy opens the connection to the server. In IIS you can read it in the `c-ip` field of the site log, under `C:\inetpub\logs\LogFiles`.

Without that key the deployment works the same, but the address recorded in the access audit will be the proxy's.

---

## HTTPS redirection

When the proxy terminates TLS, the edge already enforces `https` and the redirection performed by the application is redundant. It can be disabled in the Frontend's `appsettings.json`:

```json
{
  "HttpsRedirection": false
}
```

It is enabled by default and **it is best to leave it that way** if the server can be reached directly over `http`: the session cookie is issued as secure, so a user coming in over `http` would not be able to sign in.

---

## Verification

Once the proxy is configured, the application must respond at its public URL without repeated redirects. If there is still a loop, see [Troubleshooting: Deployment](../../4Troubleshooting/1Deployment.md).
