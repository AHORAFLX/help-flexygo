# Compilador de Plantillas

Esta sección contiene un conjunto de funcionalidades para analizar y compilar plantillas.

## **Funciones**

### **recursiveCompile() — compilación recursiva**

> **recursiveCompile**(`json`, `template`, `conf`, `contextFunctions?`, `lastTemplate?`, `AddTimeZone?`): `Promise<string>`

Compila recursivamente una plantilla reemplazando las marcas por los valores correspondientes del JSON y de variables de contexto.

#### **Parámetros**

| Parámetro           | Tipo        | Valor por defecto | Descripción                                                                |
| ------------------- | ----------- | ----------------- | -------------------------------------------------------------------------- |
| `json`              | `any`       | `undefined`       | Objeto JSON con los valores a reemplazar en la plantilla.                  |
| `template`          | `string`    | `undefined`       | Cadena de plantilla con marcadores a reemplazar.                           |
| `conf`              | `ConfToken` | `undefined`       | Objeto de configuración con información del usuario y recursos.            |
| `contextFunctions?` | `any`       | `undefined`       | Objeto opcional con funciones que pueden ser invocadas desde la plantilla. |
| `lastTemplate?`     | `string`    | `undefined`       | Última plantilla procesada para evitar bucles infinitos.                   |
| `AddTimeZone?`      | `boolean`   | `false`           | Indica si debe añadirse información de zona horaria al formatear fechas.   |

#### **Devuelve**

`Promise<string>` — Plantilla compilada.

### **compile() — compilación simple**

> **compile**(`json`, `template`, `files`, `contextFunctions?`, `AddTimeZone?`): `Promise<string>`

Compila una plantilla reemplazando marcadores por valores del JSON y variables de contexto.

#### **Parámetros**

| Parámetro           | Tipo             | Descripción                                                |
| ------------------- | ---------------- | ---------------------------------------------------------- |
| `json`              | `any`            | Objeto JSON con los datos.                                 |
| `template`          | `string`         | Plantilla que contiene marcadores.                         |
| `files`             | `fileResource[]` | Recursos de archivo utilizables dentro de la plantilla.    |
| `contextFunctions?` | `any`            | Funciones opcionales para ejecutar dentro de la plantilla. |
| `AddTimeZone?`      | `boolean`        | Añadir zona horaria al formatear fechas.                   |

#### **Devuelve**

`Promise<string>` — Plantilla compilada.

### **findTemplate() — obtener plantilla**

> **findTemplate**(`object`, `typeId`, `pageName`): `PageConfig`

Retorna la plantilla adecuada según el tipo y nombre de página.

#### **Parámetros**

| Parámetro  | Tipo           | Descripción                                                    |
| ---------- | -------------- | -------------------------------------------------------------- |
| `object`   | `ObjectConfig` | Configuración del objeto con sus páginas disponibles.          |
| `typeId`   | `string`       | Tipo de plantilla (ej. "edit", "list").                        |
| `pageName` | `string`       | Nombre específico de la página (tiene prioridad sobre typeId). |

#### **Devuelve**

`PageConfig` — Configuración de la página o null si no se encuentra.

### **replaceAll() — reemplazar texto**

> **replaceAll**(`text`, `text_to_find`, `replace_text`)

Reemplaza todas las ocurrencias de un texto dentro de otro.

#### **Parámetros**

| Parámetro      | Tipo  | Descripción         |
| -------------- | ----- | ------------------- |
| `text`         | `any` | Texto original.     |
| `text_to_find` | `any` | Texto a buscar.     |
| `replace_text` | `any` | Texto de reemplazo. |

#### **Devuelve**

Texto modificado.

### **escapeJsString() — escapar cadena para JS**

> **escapeJsString**(`str`): `string`

Escapa una cadena para uso seguro en JavaScript.

### **escapeSqlString() — escapar cadena para SQL**

> **escapeSqlString**(`str`): `string`

Escapa una cadena para uso seguro en SQL.

### **splitParams() — separar parámetros**

> **splitParams**(`pStr`): `any[]`

Divide una cadena de parámetros en un array, teniendo en cuenta arreglos anidados.

### **escapeHtmlString() — escapar HTML**

> **escapeHtmlString**(`str`, `attr`): `string`

Escapa una cadena para uso seguro en HTML.

### **lowerKeys() — minificar claves**

> **lowerKeys**(`obj`, `recursive?`): `object`

Convierte todas las claves de un objeto a minúsculas.

### **execDynamicCode() — ejecutar código dinámico**

> **execDynamicCode**(`dynamicCode`): `any`

Evalúa y ejecuta código JavaScript dinámico.

### **sortObject() — ordenar objetos**

> **sortObject**(`obj`, `property`, `property2?`): `any[]`

Ordena un array de objetos por una o dos propiedades.