# Navegación online

La navegación online permite ir a las páginas online de **flexygo** incluidas en la app móvil.  
Esta sección contiene un conjunto de funcionalidades para navegar en flexygo online: ir a home, listados, edición, vista, inserción, reports y URLs externas.

## Funciones

### goHome()

> **goHome**(): `void`

Navega a la página de inicio.

#### Devuelve

`void`

---

### goList()

> **goList**(`objectName`, `navigateFun?`, `defaults?`, `objectWhere?`, `filterValues?`, `pageName?`, `hideMenuBar?`): `void`

Navega a la página de lista del objeto indicado.

#### Parámetros

| Parámetro | Tipo | Valor por defecto | Descripción |
|----------|--------|------------------|-------------|
| `objectName` | `string` | — | Nombre del objeto a listar. |
| `navigateFun?` | `string` | `'openpage'` | Función de navegación a usar. |
| `defaults?` | `string` | — | Valores por defecto a pasar a la página. |
| `objectWhere?` | `string` | — | Filtro WHERE. |
| `filterValues?` | `string` | — | Valores de filtro adicionales. |
| `pageName?` | `string` | — | Nombre de la página específica. |
| `hideMenuBar?` | `boolean` | — | Ocultar la barra de menú. |

#### Devuelve

`void`

---

### goEdit()

> **goEdit**(`objectName`, `objectWhere`, `navigateFun?`, `defaults?`, `filterValues?`, `pageName?`, `hideMenuBar?`): `void`

Navega a una página de edición del objeto indicado.

#### Parámetros

| Parámetro | Tipo | Valor por defecto | Descripción |
|----------|--------|------------------|-------------|
| `objectName` | `string` | — | Nombre del objeto. |
| `objectWhere` | `string` | — | WHERE para identificar el registro. |
| `navigateFun?` | `string` | `'openpage'` | Función de navegación. |
| `defaults?` | `string` | — | Valores por defecto. |
| `filterValues?` | `string` | — | Valores de filtro. |
| `pageName?` | `string` | — | Nombre de la página. |
| `hideMenuBar?` | `boolean` | — | Ocultar la barra de menú. |

#### Devuelve

`void`

---

### goView()

> **goView**(`objectName`, `objectWhere`, `navigateFun?`, `defaults?`, `filterValues?`, `pageName?`, `hideMenuBar?`): `void`

Navega a una página de vista del objeto indicado.

#### Devuelve

`void`

*(Parámetros idénticos a goEdit, excepto que es para ver un registro.)*

---

### goInsert()

> **goInsert**(`objectName`, `navigateFun?`, `defaults?`, `filterValues?`, `pageName?`, `hideMenuBar?`): `void`

Navega a la página de inserción del objeto.

#### Devuelve

`void`

---

### goReport()

> **goReport**(`reportName`, `objectName`, `objectWhere`): `void`

Navega a una página de report del objeto indicado.

#### Parámetros

| Parámetro | Tipo | Descripción |
|----------|--------|-------------|
| `reportName` | `string` | Nombre del report. |
| `objectName` | `string` | Objeto del report. |
| `objectWhere` | `string` | Filtro WHERE para la consulta. |

#### Devuelve

`void`

---

### goPage()

> **goPage**(`pageTypeId`, `objectName`, `navigateFun?`, `defaults?`, `objectWhere?`, `filterValues?`, `pageName?`, `hideMenuBar?`): `Promise`\<`void`\>

Navegación genérica a cualquier tipo de página.

#### Devuelve

`Promise`\<`void`\>

---

### goExternalURL()

> **goExternalURL**(`url`): `Promise`\<`void`\>

Navega a una URL externa a flexygo.

#### Parámetros

| Parámetro | Tipo | Descripción |
|----------|--------|-------------|
| `url` | `string` | URL externa. |

#### Devuelve

`Promise`\<`void`\>
