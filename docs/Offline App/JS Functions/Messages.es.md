# Mensages

Esta sección recopila funciones relacionadas con mensajes que pueden utilizarse en distintas partes de la aplicación.  
Incluye funcionalidades para mostrar errores, advertencias, mensajes de éxito, confirmaciones, prompts y alerts.

## Funciones

### showError()

```ts { .no-language }
showError(err, auditable?, write_on_console?): Promise<void>
```

Muestra un mensaje de error.  
Si **auditable** es true (por defecto) y el error no es una excepción de campo requerido, se registrará en la base de datos local.

#### Parámetros

| Parámetro | Tipo | Valor por defecto | Descripción |
| --------- | ----- | ---------------- | ----------- |
| `err` | `any` | `undefined` | El error u objeto a mostrar. |
| `auditable?` | `boolean` | `true` | Si es true, se auditará en la base de datos local salvo excepciones de campo requerido. |
| `write_on_console?` | `boolean` | `true` | Si es true, también escribe el error en la consola. |

#### Devuelve

`Promise<void>`


### danger()

```ts { .no-language }
danger(msg, moreInfo?): Promise<void>
```

Muestra un toast de tipo *peligro* (error).

#### Parámetros

| Parámetro | Tipo | Descripción |
| --------- | ----- | ----------- |
| `msg` | `string` | Mensaje a mostrar. |
| `moreInfo?` | `object` | Información adicional al pulsar el toast. |

#### Devuelve

`Promise<void>`


### warning()

```ts { .no-language }
warning(msg, moreInfo?): Promise<void>
```

Muestra un toast de advertencia.

#### Parámetros

| Parámetro | Tipo | Descripción |
| --------- | ----- | ----------- |
| `msg` | `string` | Mensaje a mostrar. |
| `moreInfo?` | `object` | Información adicional al pulsar el toast. |

#### Devuelve

`Promise<void>`


### success()

```ts { .no-language }
success(msg, moreInfo?): Promise<void>
```

Muestra un toast de éxito.

#### Parámetros

| Parámetro | Tipo | Descripción |
| --------- | ----- | ----------- |
| `msg` | `string` | Mensaje a mostrar. |
| `moreInfo?` | `object` | Información adicional al pulsar el toast. |

#### Devuelve

`Promise<void>`


### generic()

```ts { .no-language }
generic(msg, color, duration, moreInfo?): Promise<void>
```

Muestra un toast genérico con configuración avanzada.

#### Parámetros

| Parámetro | Tipo | Descripción |
| --------- | ----- | ----------- |
| `msg` | `string` | Mensaje a mostrar. |
| `color` | `string` | Color del toast (primary, secondary, success, warning, danger, etc.). |
| `duration` | `number` | Duración en milisegundos. |
| `moreInfo?` | `object` | Información adicional al pulsar el toast. |

#### Devuelve

`Promise<void>`


### confirm()

```ts { .no-language }
confirm(header, message, css_class?, showCancelButton?, afterAlertPresent?): Promise<unknown>
```

Muestra un cuadro de confirmación.

#### Parámetros

| Parámetro | Tipo | Valor por defecto | Descripción |
| --------- | ----- | ---------------- | ----------- |
| `header` | `string` | `undefined` | Cabecera del mensaje. |
| `message` | `string` | `undefined` | Texto del mensaje. |
| `css_class?` | `string` | `undefined` | Clase CSS opcional. |
| `showCancelButton?` | `boolean` | `true` | Mostrar botón cancelar. |
| `afterAlertPresent?` | `Function` | `undefined` | Callback tras mostrar la alerta. |

#### Devuelve

`Promise<unknown>`

*Resuelve si el usuario confirma, rechaza si cancela.*

### prompt()

```ts { .no-language }
prompt(header, message?, default_value?, showCancelButton?, afterAlertPresent?): Promise<unknown>
```

Muestra un cuadro de entrada con un único campo.

#### Parámetros

| Parámetro | Tipo | Valor por defecto | Descripción |
| --------- | ----- | ---------------- | ----------- |
| `header` | `string` | `undefined` | Cabecera del prompt. |
| `message?` | `string` | `undefined` | Texto descriptivo. |
| `default_value?` | `string` | `undefined` | Valor inicial. |
| `showCancelButton?` | `boolean` | `true` | Mostrar botón cancelar. |
| `afterAlertPresent?` | `Function` | `undefined` | Callback tras mostrar la alerta. |

#### Devuelve

`Promise<unknown>`

*Resuelve con la entrada del usuario o rechaza si cancela.*

### prompts()

```ts { .no-language }
prompts(header, inputs, showCancelButton?, afterAlertPresent?): Promise<unknown>
```

Muestra un cuadro de entrada con múltiples campos.

#### Parámetros

| Parámetro | Tipo | Valor por defecto | Descripción |
| --------- | ----- | ---------------- | ----------- |
| `header` | `string` | `undefined` | Cabecera del mensaje. |
| `inputs` | `AlertInput`[] | `undefined` | Lista de campos. |
| `showCancelButton?` | `boolean` | `true` | Mostrar botón cancelar. |
| `afterAlertPresent?` | `Function` | `undefined` | Callback tras mostrar la alerta. |

#### Devuelve

`Promise<unknown>`


### alert()

```ts { .no-language }
alert(header, message): HTMLIonAlertElement
```

Muestra un mensaje de alerta con un solo botón **OK**.

#### Parámetros

| Parámetro | Tipo | Descripción |
| --------- | ----- | ----------- |
| `header` | `string` | Cabecera de la alerta. |
| `message` | `string` | Cuerpo del mensaje. |

#### Devuelve

`HTMLIonAlertElement`

