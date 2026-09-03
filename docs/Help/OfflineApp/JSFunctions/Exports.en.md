# Exports

This section is a collection of export functions that can be used in various parts of the application.
It contains functionalities for sending emails and generating PDFs.

## Functions

### sendMail()

```ts { .no-language }
sendMail(to, subject, body, ishtml?, cc?, bcc?, attachments?): Promise<void>
```

Sends email using the default mail system.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `to` | `any` | `undefined` | Receiver email or array with receiver emails . |
| `subject` | `any` | `undefined` | The second param for the sum. |
| `body` | `any` | `undefined` | The second param for the sum. |
| `ishtml?` | `boolean` | `true` | The second param for the sum (defaut: true). |
| `cc?` | `string` | `''` | Other receiver email or array with other receiver receiver emails. |
| `bcc?` | `string` | `''` | bcc email or array with bcc emails. |
| `attachments?` | `any` | `null` | Array with attachments. ['base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',...] |

#### Returns

`Promise<void>`

***

### createPDF()

```ts { .no-language }
createPDF(html, filename, documentsize?, landscape?, share?): any
```

Generate pdf from an html string

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `html` | `any` | `undefined` | HTML string to convert to pdf. |
| `filename` | `string` | `'document.pdf'` | - |
| `documentsize?` | `string` | `'A4'` | Pdf document size [A4|A3|A2] |
| `landscape?` | `boolean` | `false` | Landscape or portrait |
| `share?` | `boolean` | `true` | If true launches share OS window, else return object with base64 encoded file. |

#### Returns

`any`

- if share = false returns promise with pdf base64 object.
