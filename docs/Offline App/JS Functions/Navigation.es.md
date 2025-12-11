# Navegación

Esta sección recopila funciones relacionadas con la navegación que pueden usarse en distintas partes de la aplicación.  
Incluye funcionalidades para navegar entre páginas, abrir modales y gestionar la navegación hacia atrás.

Es importante distinguir entre las funciones `go` y `transfer`:

- **go** → Navega a una nueva página *añadiéndola al historial*, permitiendo volver atrás.  
- **transfer** → Navega a una nueva página *reemplazando la actual*, impidiendo volver atrás.

## Funciones

### goBack()

> **goBack**(`current?`): `void`

Gestiona la navegación hacia atrás.  
Si hay un modal abierto, lo cierra; de lo contrario, retrocede en el historial del router.

#### Parámetros

| Parámetro | Tipo | Descripción |
| --------- | ------ | ----------- |
| `current?` | `any` | Elemento contenido por el modal (se usa para cerrarlo). |

#### Devuelve

`void`

---

### closeModal()

> **closeModal**(`current?`, `data?`): `void`

Cierra el modal abierto.  
Si se especifica un elemento, se cierra el modal asociado a dicho elemento.

#### Parámetros

| Parámetro | Tipo | Descripción |
| --------- | ------ | ----------- |
| `current?` | `any` | Elemento contenido por el modal. |
| `data?` | `any` | Datos devueltos al cerrar el modal. |

#### Devuelve

`void`

---

### goHome()

> **goHome**(): `void`

Navega a la página de inicio y reinicia el historial de navegación.

#### Devuelve

`void`

---

### goSync()

> **goSync**(): `void`

Navega a la página de sincronización, reiniciando el historial.

#### Devuelve

`void`

---

### goLogin()

> **goLogin**(`force_login?`): `void`

Navega a la página de login, reiniciando el historial.

#### Parámetros

| Parámetro | Tipo | Valor por defecto | Descripción |
| --------- | ------ | ---------------- | ----------- |
| `force_login?` | `boolean` | `false` | Si es true fuerza la navegación incluso en modo sleep (no recomendado). |

#### Devuelve

`void`

---

### goList()

> **goList**(`object`, `pagename`, `filter?`, `defaults?`): `void`

Navega a la lista del objeto y página especificados.

#### Parámetros

| Parámetro | Tipo | Descripción |
| --------- | ------ | ----------- |
| `object` | `string` | Nombre del objeto. |
| `pagename` | `string` | Nombre de la página. |
| `filter?` | `string` | Filtro opcional. |
| `defaults?` | `string` \| `Object` | Valores por defecto opcionales. |

#### Devuelve

`void`

---

### goEdit()

> **goEdit**(`object`, `pagename`, `filter`, `defaults?`): `void`

Navega a la página de edición del objeto especificado.

#### Parámetros

| Parámetro | Tipo | Descripción |
| --------- | ------ | ----------- |
| `object` | `string` | Nombre del objeto. |
| `pagename` | `string` | Nombre de la página. |
| `filter` | `string` | Filtro para seleccionar el registro. |
| `defaults?` | `string` \| `Object` | Valores por defecto opcionales. |

#### Devuelve

`void`

---

### goView()

> **goView**(`object`, `pagename`, `filter`, `defaults?`): `void`

Navega a la página de visualización del objeto especificado.

---

### goInsert()

> **goInsert**(`object`, `pagename`, `defaults?`): `void`

Navega a la página de inserción de un nuevo registro.

---

### goGallery()

> **goGallery**(`object`, `objectid`, `defaults?`): `void`

Navega a la galería del objeto.

---

### goDocuments()

> **goDocuments**(`object`, `objectid`, `defaults?`): `void`

Navega a los documentos del objeto.

---

### goAI()

> **goAI**(`setting_id`, `first_message?`, `defaults?`, `is_first_message_by_mic?`): `void`

Abre el asistente de IA con la configuración indicada.

---

### transferList()

> **transferList**(`object`, `pagename`, `filter?`, `defaults?`): `void`

Navega a la lista **sin permitir volver atrás**.

---

### transferEdit()

> **transferEdit**(`object`, `pagename`, `filter`, `defaults?`): `void`

Igual que goEdit pero reemplazando la página actual.

---

### transferView()

> **transferView**(`object`, `pagename`, `filter`, `defaults?`): `void`

Como goView pero sin historial.

---

### transferInsert()

> **transferInsert**(`object`, `pagename`, `defaults?`): `void`

Navega a insertar reemplazando la página actual.

---

### transferGallery()

> **transferGallery**(`object`, `objectid`, `defaults?`): `void`

Navega a galería sin permitir volver.

---

### transferDocuments()

> **transferDocuments**(`object`, `objectid`): `void`

Navega a documentos sin permitir volver.

---

### modalList()

> **modalList**(`object`, `pagename`, `filter?`, `defaults?`): `Promise`\<`OverlayEventDetail`\<`any`\>\>

Abre un modal con una lista.

---

### modalEdit()

> **modalEdit**(`object`, `pagename`, `filter`, `defaults?`): `Promise`\<`OverlayEventDetail`\<`any`\>\>

Abre un modal de edición.

---

### modalView()

> **modalView**(`object`, `pagename`, `filter`, `defaults?`): `Promise`\<`OverlayEventDetail`\<`any`\>\>

Abre un modal de visualización.

---

### modalInsert()

> **modalInsert**(`object`, `pagename`, `defaults?`): `Promise`\<`OverlayEventDetail`\<`any`\>\>

Abre un modal para insertar.

---

### goPage()

> **goPage**(`type`, `object`, `pagename`, `filter`, `defaults`, `direction`): `void`

Función genérica de navegación (no recomendada salvo casos avanzados).

---

### goPageGallDoc()

> **goPageGallDoc**(`type`, `object`, `objectid`, `defaults`, `direction`): `void`

Versión genérica para galería y documentos.

---

### currentUrl()

> **currentUrl**(): `string`

Devuelve la URL actual del router.