# Navegación online

La navegación online permite ir a las páginas online de **flexygo** incluidas en la app móvil.  
Esta sección contiene un conjunto de funcionalidades para navegar en flexygo online: ir a home, listados, edición, vista, inserción, reports y URLs externas.

## Funciones

### goHome()

```ts { .no-language }
goHome(): void
```

Navega a la página de inicio.

#### Devuelve

`void`


---

### goList()

```ts { .no-language }
goList(objectName, navigateFun?, defaults?, objectWhere?, filterValues?, pageName?, hideMenuBar?): void
```

Navega a la página de lista del objeto indicado.

#### Parámetros

| Parámetro | Tipo | Valor por defecto | Descripción |
|----------|--------|------------------|-------------|
| `objectName` | `string` | â€” | Nombre del objeto a listar. |
| `navigateFun?` | `string` | `'openpage'` | Función de navegación a usar. |
| `defaults?` | `string` | â€” | Valores por defecto a pasar a la página. |
| `objectWhere?` | `string` | â€” | Filtro WHERE. |
| `filterValues?` | `string` | â€” | Valores de filtro adicionales. |
| `pageName?` | `string` | â€” | Nombre de la página especí­fica. |
| `hideMenuBar?` | `boolean` | â€” | Ocultar la barra de menú. |

#### Devuelve

`void`


---

### goEdit()

```ts { .no-language }
goEdit(objectName, objectWhere, navigateFun?, defaults?, filterValues?, pageName?, hideMenuBar?): void
```

Navega a una página de edición del objeto indicado.

#### Parámetros

| Parámetro | Tipo | Valor por defecto | Descripción |
|----------|--------|------------------|-------------|
| `objectName` | `string` | â€” | Nombre del objeto. |
| `objectWhere` | `string` | â€” | WHERE para identificar el registro. |
| `navigateFun?` | `string` | `'openpage'` | Función de navegación. |
| `defaults?` | `string` | â€” | Valores por defecto. |
| `filterValues?` | `string` | â€” | Valores de filtro. |
| `pageName?` | `string` | â€” | Nombre de la página. |
| `hideMenuBar?` | `boolean` | â€” | Ocultar la barra de menú. |

#### Devuelve

`void`


---

### goView()

```ts { .no-language }
goView(objectName, objectWhere, navigateFun?, defaults?, filterValues?, pageName?, hideMenuBar?): void
```

Navega a una página de vista del objeto indicado.

#### Devuelve

`void`


*(Parámetros idénticos a goEdit, excepto que es para ver un registro.)*

---

### goInsert()

```ts { .no-language }
goInsert(objectName, navigateFun?, defaults?, filterValues?, pageName?, hideMenuBar?): void
```

Navega a la página de inserción del objeto.

#### Devuelve

`void`


---

### goReport()

```ts { .no-language }
goReport(reportName, objectName, objectWhere): void
```

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

```ts { .no-language }
goPage(pageTypeId, objectName, navigateFun?, defaults?, objectWhere?, filterValues?, pageName?, hideMenuBar?): Promise<void>
```

Navegación genérica a cualquier tipo de página.

#### Devuelve

`Promise<void>`


---

### goExternalURL()

```ts { .no-language }
goExternalURL(url): Promise<void>
```

Navega a una URL externa a flexygo.

#### Parámetros

| Parámetro | Tipo | Descripción |
|----------|--------|-------------|
| `url` | `string` | URL externa. |

#### Devuelve

`Promise<void>`

