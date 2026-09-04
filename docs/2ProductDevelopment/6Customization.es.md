# Personalización de Assets

Flexygo permite personalizar la apariencia visual del producto en todos los niveles sin modificar el núcleo de la plataforma. Las personalizaciones se realizan mediante archivos de assets — CSS, JS, favicon, manifiesto PWA y variables de tema — que **sobreviven a las actualizaciones** de la aplicación.

---

## Niveles de personalización y prioridad

Flexygo resuelve los assets mediante una **cadena de 3 niveles**. Cada nivel puede proporcionar su propia versión de cualquier archivo soportado. Los niveles superiores tienen prioridad.

| Prioridad | Nivel | Raíz de ruta | Quién lo usa |
|:---------:|-------|--------------|--------------|
| 1 *(mayor)* | **Instalación** | `custom/` | Instalaciones de cliente final |
| 2 | **Producto** | `{carpeta-producto}/` | Branding del producto / white-label |
| 3 *(menor)* | **Flexygo** | (raíz de wwwroot) | Valores nativos de Flexygo |

**Cómo funciona la prioridad:**

- Para archivos **CSS/JS**, se emiten en la página todos los niveles que contengan el archivo, en orden de menor a mayor prioridad. La cascada CSS del navegador y el orden de ejecución de scripts permiten que las personalizaciones de mayor prioridad ganen.
- Para archivos **únicos** (`manifest.json`, `favicon.ico`), solo se usa el archivo encontrado con mayor prioridad (*first-found-wins*).

### Descubrimiento automático de la carpeta de producto

La carpeta de producto se **descubre automáticamente** al iniciar la aplicación — no necesitas configurar su nombre. El sistema explora los subdirectorios de `wwwroot` y considera carpeta de producto al **primero que contenga el archivo marcador `css/theme.less`**. La primera coincidencia gana.

!!! danger "El archivo `css/theme.less` es obligatorio"
    Una carpeta de `wwwroot` **solo se detecta como carpeta de producto si contiene `css/theme.less`**. El archivo puede estar **vacío**, pero debe existir. Sin él, la carpeta se ignora por completo y todas tus personalizaciones de producto (CSS, JS, `favicon.ico`, `manifest.json`…) quedarán sin efecto, degradándose el sistema a la cadena de 2 niveles (Instalación → Flexygo).

!!! info "Convención: carpeta creada por el instalador"
    El **instalador de Flexygo** ya crea automáticamente la carpeta de producto —con su `css/theme.less`— durante la creación o migración de un proyecto. Esta es la carpeta que debes usar como convención para todas tus personalizaciones a nivel de producto. No es necesario que crees una manualmente ni que adivines el nombre — utiliza la que el instalador ha generado.

!!! warning "Nombres de carpeta válidos"
    El nombre de la carpeta de producto solo puede contener caracteres `[a-zA-Z0-9_-]+`. Otros caracteres serán rechazados por seguridad.

---

## Estructura de directorios esperada

### Nivel Producto (`{carpeta-producto}/`)

```
wwwroot/
  mi-producto/                       ← Tu carpeta de producto (cualquier nombre válido)
    manifest.json                    ← Manifiesto PWA
    favicon.ico                      ← Favicon del producto
    css/
      theme.less                     ← OBLIGATORIO: marcador de carpeta de producto (puede estar vacío) + variables de tema
      views/
        account/
          account.css                ← CSS genérico de cuenta
          login/login.css            ← CSS específico de página
          register/register.css
          forgot/forgot.css
          authentication/authentication.css
          manage-password/manage-password.css
    js/
      views/
        account/
          account.js                 ← JS genérico de cuenta
          login/login.js             ← JS específico de página
          register/register.js
          forgot/forgot.js
          authentication/authentication.js
          manage-password/manage-password.js
```

### Nivel Instalación (`custom/`)

```
wwwroot/
  custom/
    manifest.json                    ← Sobrescritura de manifiesto PWA
    favicon.ico                      ← Sobrescritura de favicon
    css/
      theme.less                     ← Variables de tema de instalación
      views/
        account/
          account.css                ← CSS genérico de cuenta
          login/login.css
          register/register.css
          ...
    js/
      views/
        account/
          account.js                 ← JS genérico de cuenta
          login/login.js
          register/register.js
          ...
```

> **Nota de compatibilidad:** Existe una ruta plana heredada `custom/css/account.css` para la vista de Mantenimiento. El sistema `AssetOverrideResolver` usa la estructura anidada `custom/css/views/account/` documentada aquí. Planifica una migración futura si actualmente dependes de la ruta plana.

---

## Assets Soportados

### `manifest.json` — Manifiesto PWA

**Resolución:** *First-found-wins* (solo se usa el archivo de mayor prioridad).

| Nivel | Ruta |
|-------|------|
| Instalación | `custom/manifest.json` |
| Producto | `{producto}/manifest.json` |
| Flexygo | `manifest.json` |

**Ejemplo — Manifiesto a nivel de producto:**

```json
{
  "name": "MiProducto",
  "short_name": "MiProducto",
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

Coloca este archivo en `wwwroot/{producto}/manifest.json`.

---

### `theme.less` — Variables de Tema y Propiedades CSS

**Propósito:** Recibir valores específicos del producto desde la base de datos, asignarlos a variables Less y exponerlos como propiedades CSS personalizadas (`--*`).

!!! danger "Doble función: también es el marcador de carpeta de producto"
    La presencia de `{producto}/css/theme.less` es lo que hace que Flexygo reconozca `{producto}/` como carpeta de producto. **Debe existir siempre** en tu carpeta de producto, aunque sea un archivo vacío. Si no vas a definir variables de tema propias, créalo igualmente vacío.

**Resolución:** Se concatenan los 3 niveles (Flexygo → Producto → Instalación). El pipeline `ReplaceLessVars` procesa el `theme.less` de cada nivel: los placeholders `dbColor()`/`dbSize()` se reemplazan con valores calculados desde base de datos, y las variables Less se convierten en propiedades CSS mediante `:root { --*: @variable; }`.

| Nivel | Ruta |
|-------|------|
| Instalación | `custom/css/theme.less` |
| Producto | `{producto}/css/theme.less` |
| Flexygo | `css/theme.less` |

**Estructura de un archivo `theme.less`:**

```less
/* === PASO 1: Mapear valores de base de datos a variables Less === */
@header-color: dbColor(HeaderColor);
@menu-color: dbColor(MenuColor);
@bg-color: dbColor(bgColor);
@primary-color: dbColor(PrimaryColor);
@danger-color: dbColor(DangerColor);
@small: dbSize(small);
@large: dbSize(large);
/* ... variables adicionales ... */

/* === PASO 2: Exponer como propiedades CSS personalizadas === */
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

**Ejemplo a nivel de producto** — añade tus propios colores de marca:

```less
/* mi-producto/css/theme.less */

/* Añadir variables Less mapeadas a BD */
@brand-accent: dbColor(BrandAccent);
@brand-bg: dbColor(BrandBg);
@brand-text: dbColor(BrandText);

/* Exponer propiedades CSS de marca */
:root {
    --brand-accent: @brand-accent;
    --brand-bg: @brand-bg;
    --brand-text: @brand-text;
    --brand-radius: 12px;
    --brand-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
}
```

!!! warning "Solo dos bloques permitidos"
    `theme.less` solo admite dos tipos de bloques: (1) definiciones `@variable: dbColor()/dbSize()`, y (2) el bloque `:root { --*: @variable; }`. No añadas mixins, reglas CSS ni otras construcciones — pertenecen a archivos `.less` separados.

!!! tip "Nuevas variables en base de datos"
    `dbColor(Nombre)` y `dbSize(Nombre)` se reemplazan en tiempo de ejecución con valores de la base de datos de configuración. Si introduces nuevas claves, regístralas en la tabla `Skins_Variables` desde el apartado **Skins** de la aplicación o directamente en la base de datos. Recuerda incluir estas variables en los scripts del proyecto (`{Nombre}.Conf.Database`) para que no se pierdan en otros entornos.

---

### `favicon.ico` — Icono de Pestaña del Navegador

**Resolución:** *First-found-wins*.

| Nivel | Ruta |
|-------|------|
| Instalación | `custom/favicon.ico` |
| Producto | `{producto}/favicon.ico` |
| Flexygo | `favicon.ico` |

Coloca un archivo `.ico` en el nivel deseado. Se recomiendan los tamaños estándar (16×16, 32×32, 48×48).

---

### `account.css` — Estilos Genéricos de Páginas de Cuenta

**Resolución:** Los 3 niveles se emiten como etiquetas `<link>` en orden: Flexygo → Producto → Instalación. La cascada del navegador permite que las reglas posteriores sobrescriban a las anteriores.

| Nivel | Ruta |
|-------|------|
| Instalación | `custom/css/views/account/account.css` |
| Producto | `{producto}/css/views/account/account.css` |
| Flexygo | `css/views/account/account.css` |

**Ejemplo de branding a nivel de producto:**

```css
/* mi-producto/css/views/account/account.css */

/* Reemplazar el logo del producto */
:root {
    --product-logo: url(mi-producto-logo.svg);
    --product-background: url(mi-producto-background.svg);
}

/* Estilizar la tarjeta de cuenta */
.account-card {
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(233, 69, 96, 0.15);
}

/* Estilizar el botón de login */
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

/* Anillo de foco en los inputs */
.account-card-body .cell:focus-within {
    outline-color: var(--brand-accent, #e94560);
}

/* Fondo de la página */
body {
    background-color: #0f0f1a;
    background-image: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
}
```

**Variables CSS disponibles** (definidas en el `account.css` de Flexygo):

| Propiedad | Propósito |
|-----------|-----------|
| `--product-logo` | Imagen del logo en la cabecera del icono |
| `--product-background` | Imagen de fondo tras la tarjeta de login |
| `--card-color` | Fondo de la tarjeta de cuenta |
| `--border-card-color` | Color del borde de la tarjeta |
| `--bg-color` | Color de fondo de la página |
| `--bg-color-light` | Fondo de los campos de entrada |
| `--bg-color-dark` | Fondo de los botones |
| `--bg-color-dark-2` | Fondo hover de los botones |
| `--txt-color` | Color del texto |
| `--primary-color` | Anillo de foco, barra de carga, acentos |
| `--danger-color` | Color de error de validación |
| `--outstanding-color` | Scrollbar, destacados |
| `--success-color` | Indicadores de éxito |
| `--account-card-height` | Altura de la tarjeta (defecto: 600px) |
| `--account-card-width` | Anchura de la tarjeta (defecto: 440px) |
| `--input-height` | Altura de inputs/botones (defecto: 50px) |
| `--input-margin` | Padding horizontal en inputs |
| `--font-size-1` | Texto grande (3em) |
| `--font-size-2` | Texto normal (1em) |
| `--font-size-3` | Texto pequeño (0.9em) |
| `--placeholder-color` | Texto del placeholder |
| `--outline-size` | Grosor del anillo de foco |
| `--login-font` | Familia tipográfica para páginas de cuenta |

---

### `account.js` — Scripts Genéricos de Páginas de Cuenta

**Resolución:** Igual que `account.css` — los 3 niveles se emiten en orden de fuente.

| Nivel | Ruta |
|-------|------|
| Instalación | `custom/js/views/account/account.js` |
| Producto | `{producto}/js/views/account/account.js` |
| Flexygo | `js/views/account/account.js` |

!!! warning "Scripts idempotentes"
    Los scripts de sobrescritura deben ser **idempotentes**: se ejecutan junto al script nativo, no en su lugar. Usa *event listeners* en vez de reemplazar funciones globales.

---

### CSS y JS Específicos por Página

Cada página de Cuenta admite sus propias sobrescrituras de CSS y JS. El patrón es idéntico al de `account.css`/`account.js`.

| Página | Ruta CSS | Ruta JS |
|--------|----------|---------|
| Login | `css/views/account/login/login.css` | `js/views/account/login/login.js` |
| Registro | `css/views/account/register/register.css` | `js/views/account/register/register.js` |
| Olvidé mi contraseña | `css/views/account/forgot/forgot.css` | `js/views/account/forgot/forgot.js` |
| MFA | `css/views/account/authentication/authentication.css` | `js/views/account/authentication/authentication.js` |
| Gestionar contraseña | `css/views/account/manage-password/manage-password.css` | `js/views/account/manage-password/manage-password.js` |

Todas siguen la misma estructura `{nivel}/{ruta}`. Ejemplo para CSS de login a nivel de producto:

```
wwwroot/mi-producto/css/views/account/login/login.css
```

---

## Referencia Rápida: Todas las Rutas Soportadas

```
{nivel}/manifest.json
{nivel}/favicon.ico
{nivel}/css/theme.less
{nivel}/css/views/account/account.css
{nivel}/css/views/account/login/login.css
{nivel}/css/views/account/register/register.css
{nivel}/css/views/account/forgot/forgot.css
{nivel}/css/views/account/authentication/authentication.css
{nivel}/css/views/account/manage-password/manage-password.css
{nivel}/js/views/account/account.js
{nivel}/js/views/account/login/login.js
{nivel}/js/views/account/register/register.js
{nivel}/js/views/account/forgot/forgot.js
{nivel}/js/views/account/authentication/authentication.js
{nivel}/js/views/account/manage-password/manage-password.js
```

Donde `{nivel}` es:

- **Instalación:** `custom` (ej. `custom/favicon.ico`, `custom/css/views/account/account.css`)
- **Producto:** el nombre de tu carpeta de producto (ej. `mi-producto/favicon.ico`, `mi-producto/css/views/account/account.css`)
- **Flexygo:** vacío / raíz (ej. `favicon.ico`, `css/views/account/account.css`)

---

## Limitaciones y Comportamiento de Degradación

- **Detección de carpeta de producto** se ejecuta una sola vez al inicio. Se identifica la carpeta de producto por la presencia del archivo marcador `css/theme.less` en un subdirectorio de `wwwroot`. Si ninguna carpeta contiene ese archivo, el sistema se degrada a una cadena de 2 niveles (Instalación → Flexygo).
- **`css/theme.less` ausente** en tu carpeta de producto hace que **toda la carpeta se ignore** — no solo el tema, sino también CSS/JS de vistas, `favicon.ico` y `manifest.json` a nivel de producto. Créalo aunque sea vacío.
- **Múltiples carpetas de producto** (varios subdirectorios con `css/theme.less`) generan una advertencia en el log; solo se usa la primera carpeta encontrada.
- **Archivos ausentes** en cualquier nivel se omiten silenciosamente — solo se emiten los archivos que existen.
- **`manifest.json` y `favicon.ico`** usan el patrón *first-found-wins*; el fallback nativo de Flexygo siempre está disponible.
- **Sobrescritura de vistas** (archivos `.cshtml`) no está soportada en la versión actual. Las sobrescrituras de CSS/JS cubren la mayoría de necesidades de personalización.
- **Hot reload** de archivos de personalización no está soportado; se requiere un reinicio de la aplicación tras desplegar nuevos assets.
