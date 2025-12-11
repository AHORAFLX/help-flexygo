# Formularios (Forms)

Esta sección únicamente contiene la funcionalidad de guardado para formularios.

## Funciones

### save()

> **save**(`btn`, `showMessage?`, `goBack?`): `Promise`\<`unknown`\>

Guarda la información del formulario.

#### Parámetros

| Parámetro | Tipo | Valor por defecto | Descripción |
| --------- | ----- | ---------------- | ----------- |
| `btn` | `any` | `undefined` | El elemento botón que desencadenó la acción de guardado. |
| `showMessage?` | `boolean` | `true` | Indica si debe mostrarse un mensaje de éxito tras guardar (por defecto: true). |
| `goBack?` | `boolean` | `false` | Indica si debe navegar atrás tras guardar (por defecto: false). |

#### Devuelve

`Promise`\<`unknown`\>

- Una promesa que se resuelve en `true` si el guardado fue exitoso.

#### Método

save
