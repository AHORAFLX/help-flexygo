# Asset Customization

Flexygo lets you customize the product's visual appearance at every level without modifying the platform's core. Customizations are done through asset files — CSS, JS, favicon, PWA manifest, and theme variables — that **survive application updates**.

---

## Customization levels and priority

Flexygo resolves assets through a **3-level chain**. Each level can provide its own version of any supported file. Higher levels take priority.

| Priority | Level | Path root | Who uses it |
|:---------:|-------|--------------|--------------|
| 1 *(highest)* | **Installation** | `custom/` | End-customer installations |
| 2 | **Product** | `{product-folder}/` | Product branding / white-label |
| 3 *(lowest)* | **Flexygo** | (wwwroot root) | Flexygo's native defaults |

**How priority works:**

- For **CSS/JS** files, every level containing the file is emitted on the page, in order from lowest to highest priority. The browser's CSS cascade and the script execution order let the higher-priority customizations win.
- For **single** files (`manifest.json`, `favicon.ico`), only the file found at the highest priority is used (*first-found-wins*).

### Automatic discovery of the product folder

The product folder is **discovered automatically** when the application starts — you don't need to configure its name. The system scans the subdirectories of `wwwroot` and treats as the product folder the **first one that contains the marker file `css/theme.less`**. The first match wins.

!!! danger "The `css/theme.less` file is mandatory"
    A `wwwroot` folder **is only detected as a product folder if it contains `css/theme.less`**. The file can be **empty**, but it must exist. Without it, the folder is ignored entirely and all your product-level customizations (CSS, JS, `favicon.ico`, `manifest.json`…) will have no effect, degrading the system to the 2-level chain (Installation → Flexygo).

!!! info "Convention: folder created by the installer"
    The **Flexygo Installer** already automatically creates the product folder — with its `css/theme.less` — during the creation or migration of a project. This is the folder you should use as the convention for all your product-level customizations. There's no need to create one manually or guess the name — use the one the installer generated.

!!! warning "Valid folder names"
    The product folder's name can only contain the characters `[a-zA-Z0-9_-]+`. Other characters will be rejected for security reasons.

---

## Expected directory structure

### Product level (`{product-folder}/`)

```
wwwroot/
  my-product/                        ← Your product folder (any valid name)
    manifest.json                    ← PWA manifest
    favicon.ico                      ← Product favicon
    css/
      theme.less                     ← REQUIRED: product folder marker (can be empty) + theme variables
      views/
        account/
          account.css                ← Generic account CSS
          login/login.css            ← Page-specific CSS
          register/register.css
          forgot/forgot.css
          authentication/authentication.css
          manage-password/manage-password.css
    js/
      views/
        account/
          account.js                 ← Generic account JS
          login/login.js             ← Page-specific JS
          register/register.js
          forgot/forgot.js
          authentication/authentication.js
          manage-password/manage-password.js
```

### Installation level (`custom/`)

```
wwwroot/
  custom/
    manifest.json                    ← PWA manifest override
    favicon.ico                      ← Favicon override
    css/
      theme.less                     ← Installation theme variables
      views/
        account/
          account.css                ← Generic account CSS
          login/login.css
          register/register.css
          ...
    js/
      views/
        account/
          account.js                 ← Generic account JS
          login/login.js
          register/register.js
          ...
```

> **Compatibility note:** There's a legacy flat path `custom/css/account.css` for the Maintenance view. The `AssetOverrideResolver` system uses the nested structure `custom/css/views/account/` documented here. Plan a future migration if you currently depend on the flat path.

---

## Supported Assets

### `manifest.json` — PWA Manifest

**Resolution:** *First-found-wins* (only the highest-priority file is used).

| Level | Path |
|-------|------|
| Installation | `custom/manifest.json` |
| Product | `{product}/manifest.json` |
| Flexygo | `manifest.json` |

**Example — Product-level manifest:**

```json
{
  "name": "MyProduct",
  "short_name": "MyProduct",
  "start_url": "/",
  "display": "standalone",
  "icons": [{
    "src": "assets/icon/icon192.png",
    "sizes": "192x192",
    "type": "image/png"
  }, {
    "src": "assets/icon/icon512.png",
    "sizes": "512x512",
    "type": "image/png"
  }],
  "background_color": "#1a1a2e",
  "theme_color": "#e94560"
}
```

Place this file at `wwwroot/{product}/manifest.json`.

---

### `theme.less` — Theme Variables and CSS Properties

**Purpose:** Receive product-specific values from the database, assign them to Less variables, and expose them as custom CSS properties (`--*`).

!!! danger "Dual role: it's also the product folder marker"
    The presence of `{product}/css/theme.less` is what makes Flexygo recognize `{product}/` as the product folder. **It must always exist** in your product folder, even as an empty file. If you're not going to define your own theme variables, create it empty anyway.

**Resolution:** The 3 levels are concatenated (Flexygo → Product → Installation). The `ReplaceLessVars` pipeline processes the `theme.less` of each level: the `dbColor()`/`dbSize()` placeholders are replaced with values calculated from the database, and the Less variables are turned into CSS properties via `:root { --*: @variable; }`.

| Level | Path |
|-------|------|
| Installation | `custom/css/theme.less` |
| Product | `{product}/css/theme.less` |
| Flexygo | `css/theme.less` |

**Structure of a `theme.less` file:**

```less
/* === STEP 1: Map database values to Less variables === */
@header-color: dbColor(HeaderColor);
@menu-color: dbColor(MenuColor);
@bg-color: dbColor(bgColor);
@primary-color: dbColor(PrimaryColor);
@danger-color: dbColor(DangerColor);
@small: dbSize(small);
@large: dbSize(large);
/* ... additional variables ... */

/* === STEP 2: Expose as custom CSS properties === */
:root {
    color-scheme: light dark;

    &:has(body[mode="light"]) { color-scheme: light; }
    &:has(body[mode="dark"])  { color-scheme: dark; }

    --header-color: @header-color;
    --menu-color: @menu-color;
    --bg-color: @bg-color;
    --primary-color: @primary-color;
    --danger-color: @danger-color;
}
```

**Product-level example** — adding your own brand colors:

```less
/* my-product/css/theme.less */

/* Add DB-mapped Less variables */
@brand-accent: dbColor(BrandAccent);
@brand-bg: dbColor(BrandBg);
@brand-text: dbColor(BrandText);

/* Expose brand CSS properties */
:root {
    --brand-accent: @brand-accent;
    --brand-bg: @brand-bg;
    --brand-text: @brand-text;
    --brand-radius: 12px;
    --brand-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
}
```

!!! warning "Only two block types allowed"
    `theme.less` only supports two kinds of blocks: (1) `@variable: dbColor()/dbSize()` definitions, and (2) the `:root { --*: @variable; }` block. Don't add mixins, CSS rules, or other constructs — those belong in separate `.less` files.

!!! tip "New variables in the database"
    `dbColor(Name)` and `dbSize(Name)` are replaced at runtime with values from the configuration database. If you introduce new keys, register them in the `Skins_Variables` table from the application's **Skins** section, or directly in the database. Remember to include these variables in the project's scripts (`{Name}.Conf.Database`) so they aren't lost in other environments.

---

### `favicon.ico` — Browser Tab Icon

**Resolution:** *First-found-wins*.

| Level | Path |
|-------|------|
| Installation | `custom/favicon.ico` |
| Product | `{product}/favicon.ico` |
| Flexygo | `favicon.ico` |

Place an `.ico` file at the desired level. The standard sizes (16×16, 32×32, 48×48) are recommended.

---

### `account.css` — Generic Account Page Styles

**Resolution:** The 3 levels are emitted as `<link>` tags in order: Flexygo → Product → Installation. The browser's cascade lets later rules override earlier ones.

| Level | Path |
|-------|------|
| Installation | `custom/css/views/account/account.css` |
| Product | `{product}/css/views/account/account.css` |
| Flexygo | `css/views/account/account.css` |

**Product-level branding example:**

```css
/* my-product/css/views/account/account.css */

/* Replace the product logo */
:root {
    --product-logo: url(my-product-logo.svg);
    --product-background: url(my-product-background.svg);
}

/* Style the account card */
.account-card {
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(233, 69, 96, 0.15);
}

/* Style the login button */
.account-card .account-button {
    background-color: var(--brand-accent, #e94560);
    color: #fff;
    font-weight: 600;
    border-radius: 8px;
    transition: background-color 0.2s ease;
}

.account-card .account-button:hover {
    background-color: color-mix(in srgb, var(--brand-accent, #e94560) 80%, black);
}

/* Focus ring on inputs */
.account-card-body .cell:focus-within {
    outline-color: var(--brand-accent, #e94560);
}

/* Page background */
body {
    background-color: #0f0f1a;
    background-image: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
}
```

**Available CSS variables** (defined in Flexygo's `account.css`):

| Property | Purpose |
|-----------|-----------|
| `--product-logo` | Logo image in the icon header |
| `--product-background` | Background image behind the login card |
| `--card-color` | Account card background |
| `--border-card-color` | Card border color |
| `--bg-color` | Page background color |
| `--bg-color-light` | Input field background |
| `--bg-color-dark` | Button background |
| `--bg-color-dark-2` | Button hover background |
| `--txt-color` | Text color |
| `--primary-color` | Focus ring, loading bar, accents |
| `--danger-color` | Validation error color |
| `--outstanding-color` | Scrollbar, highlights |
| `--success-color` | Success indicators |
| `--account-card-height` | Card height (default: 600px) |
| `--account-card-width` | Card width (default: 440px) |
| `--input-height` | Input/button height (default: 50px) |
| `--input-margin` | Horizontal padding on inputs |
| `--font-size-1` | Large text (3em) |
| `--font-size-2` | Normal text (1em) |
| `--font-size-3` | Small text (0.9em) |
| `--placeholder-color` | Placeholder text |
| `--outline-size` | Focus ring thickness |
| `--login-font` | Font family for account pages |

---

### `account.js` — Generic Account Page Scripts

**Resolution:** Same as `account.css` — the 3 levels are emitted in source order.

| Level | Path |
|-------|------|
| Installation | `custom/js/views/account/account.js` |
| Product | `{product}/js/views/account/account.js` |
| Flexygo | `js/views/account/account.js` |

!!! warning "Idempotent scripts"
    Override scripts must be **idempotent**: they run alongside the native script, not in its place. Use *event listeners* instead of replacing global functions.

---

### Page-Specific CSS and JS

Each Account page supports its own CSS and JS overrides. The pattern is identical to `account.css`/`account.js`.

| Page | CSS path | JS path |
|--------|----------|---------|
| Login | `css/views/account/login/login.css` | `js/views/account/login/login.js` |
| Register | `css/views/account/register/register.css` | `js/views/account/register/register.js` |
| Forgot password | `css/views/account/forgot/forgot.css` | `js/views/account/forgot/forgot.js` |
| MFA | `css/views/account/authentication/authentication.css` | `js/views/account/authentication/authentication.js` |
| Manage password | `css/views/account/manage-password/manage-password.css` | `js/views/account/manage-password/manage-password.js` |

All of them follow the same `{level}/{path}` structure. Example for product-level login CSS:

```
wwwroot/my-product/css/views/account/login/login.css
```

---

## Quick Reference: All Supported Paths

```
{level}/manifest.json
{level}/favicon.ico
{level}/css/theme.less
{level}/css/views/account/account.css
{level}/css/views/account/login/login.css
{level}/css/views/account/register/register.css
{level}/css/views/account/forgot/forgot.css
{level}/css/views/account/authentication/authentication.css
{level}/css/views/account/manage-password/manage-password.css
{level}/js/views/account/account.js
{level}/js/views/account/login/login.js
{level}/js/views/account/register/register.js
{level}/js/views/account/forgot/forgot.js
{level}/js/views/account/authentication/authentication.js
{level}/js/views/account/manage-password/manage-password.js
```

Where `{level}` is:

- **Installation:** `custom` (e.g. `custom/favicon.ico`, `custom/css/views/account/account.css`)
- **Product:** the name of your product folder (e.g. `my-product/favicon.ico`, `my-product/css/views/account/account.css`)
- **Flexygo:** empty / root (e.g. `favicon.ico`, `css/views/account/account.css`)

---

## Limitations and Degradation Behavior

- **Product folder detection** runs only once at startup. The product folder is identified by the presence of the marker file `css/theme.less` in a subdirectory of `wwwroot`. If no folder contains that file, the system degrades to a 2-level chain (Installation → Flexygo).
- **Missing `css/theme.less`** in your product folder causes **the entire folder to be ignored** — not just the theme, but also the views' CSS/JS, `favicon.ico`, and `manifest.json` at the product level. Create it even if empty.
- **Multiple product folders** (several subdirectories with `css/theme.less`) generate a warning in the log; only the first folder found is used.
- **Missing files** at any level are silently skipped — only the files that exist are emitted.
- **`manifest.json` and `favicon.ico`** use the *first-found-wins* pattern; Flexygo's native fallback is always available.
- **View overrides** (`.cshtml` files) are not supported in the current version. CSS/JS overrides cover most customization needs.
- **Hot reload** of customization files is not supported; an application restart is required after deploying new assets.
