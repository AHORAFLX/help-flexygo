# Exportaciones (Exports)

Esta sección es una colección de funciones de exportación que pueden utilizarse en varias partes de la aplicación.
Incluye funcionalidades para enviar correos electrónicos y generar PDFs.

## Funciones

### sendMail()

```ts { .no-language }
sendMail(to, subject, body, ishtml?, cc?, bcc?, attachments?): Promise<void>
```

Enví­a un correo electrónico utilizando el sistema de correo predeterminado.

#### Parámetros

| Parámetro | Tipo | Valor por defecto | Descripción |
| --------- | ----- | ---------------- | ----------- |
| `to` | `any` | `undefined` | Email del destinatario o array de emails destinatarios. |
| `subject` | `any` | `undefined` | Asunto del correo. |
| `body` | `any` | `undefined` | Cuerpo del correo. |
| `ishtml?` | `boolean` | `true` | Indica si el cuerpo del correo está en formato HTML (por defecto: true). |
| `cc?` | `string` | `''` | Email(s) en copia (CC), puede ser string o array. |
| `bcc?` | `string` | `''` | Email(s) en copia oculta (BCC), puede ser string o array. |
| `attachments?` | `any` | `null` | Array de adjuntos. Ejemplo: `['base64:icon.png//iVBORw0KGgoAAAANSUhEUg...']` |

#### Devuelve

`Promise<void>`

### createPDF()

```ts { .no-language }
createPDF(html, filename, documentsize?, landscape?, share?): any
```

Genera un archivo PDF a partir de un string HTML.

#### Parámetros

| Parámetro | Tipo | Valor por defecto | Descripción |
| --------- | ----- | ---------------- | ----------- |
| `html` | `any` | `undefined` | Código HTML en formato string que se convertirá en PDF. |
| `filename` | `string` | `'document.pdf'` | Nombre del archivo PDF. |
| `documentsize?` | `string` | `'A4'` | Tamaí±o del documento PDF. Opciones: `A4`, `A3`, `A2`. |
| `landscape?` | `boolean` | `false` | Orientación horizontal (`true`) o vertical (`false`). |
| `share?` | `boolean` | `true` | Si es `true`, abre la ventana de compartir del sistema operativo. Si es `false`, devuelve el PDF en base64. |

#### Devuelve

`any`


- Si **share = false**, devuelve una promesa con el objeto PDF en base64.