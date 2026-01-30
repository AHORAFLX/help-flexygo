# Parser

Esta sección contiene un conjunto de funcionalidades para analizar y compilar plantillas.

## Funciones

### recursiveCompile()

```ts { .no-language }
recursiveCompile(json, template, conf, contextFunctions?, lastTemplate?, AddTimeZone?): Promise<string>
```

Compila recursivamente una cadena de plantilla sustituyendo los marcadores por los valores correspondientes de un objeto JSON y variables de contexto.

#### Parámetros

| Parámetro           | Tipo                              | Valor por defecto | Descripción                                                                            |
| ------------------- | --------------------------------- | ----------------- | -------------------------------------------------------------------------------------- |
| `json`              | `any`                             | `undefined`       | El objeto JSON que contiene los valores para sustituir en la plantilla.                |
| `template`          | `string`                          | `undefined`       | La cadena de plantilla que contiene los marcadores a sustituir.                        |
| `conf`              | [`ConfToken`](types.md#conftoken) | `undefined`       | El objeto de configuración que contiene información del usuario y de los recursos.     |
| `contextFunctions?` | `any`                             | `undefined`       | Objeto opcional que contiene funciones que pueden ser llamadas dentro de la plantilla. |
| `lastTemplate?`     | `string`                          | `undefined`       | La última plantilla procesada para evitar recursión infinita.                          |
| `AddTimeZone?`      | `boolean`                         | `false`           | Indica si se debe añadir información de zona horaria al formatear fechas.              |

#### Devuelve

`Promise<string>`

* Una promesa que se resuelve con la cadena de plantilla compilada.

### compile()

```ts { .no-language }
compile(json, template, files, contextFunctions?, AddTimeZone?): Promise<string>
```

Compila una cadena de plantilla sustituyendo los marcadores por los valores correspondientes de un objeto JSON y variables de contexto.

#### Parámetros

| Parámetro           | Tipo                                      | Valor por defecto | Descripción                                                                            |
| ------------------- | ----------------------------------------- | ----------------- | -------------------------------------------------------------------------------------- |
| `json`              | `any`                                     | `undefined`       | El objeto JSON que contiene los valores para sustituir en la plantilla.                |
| `template`          | `string`                                  | `undefined`       | La cadena de plantilla que contiene los marcadores a sustituir.                        |
| `files`             | [`fileResource`](types.md#fileresource)[] | `undefined`       | Un array de recursos de archivo que pueden usarse en la plantilla.                     |
| `contextFunctions?` | `any`                                     | `undefined`       | Objeto opcional que contiene funciones que pueden ser llamadas dentro de la plantilla. |
| `AddTimeZone?`      | `boolean`                                 | `false`           | Indica si se debe añadir información de zona horaria al formatear fechas.              |

#### Devuelve

`Promise<string>`

* Una promesa que se resuelve con la cadena de plantilla compilada.

### findTemplate()

```ts { .no-language }
findTemplate(object, typeId, pageName): [PageConfig](types.md#pageconfig)
```

Dado un objeto, el tipo de plantilla y el nombre de la página, devuelve la plantilla adecuada.

#### Parámetros

| Parámetro  | Tipo                                      | Descripción                                                                                    |
| ---------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `object`   | [`ObjectConfig`](types.md#objectconfig-1) | La configuración del objeto que contiene las páginas disponibles.                              |
| `typeId`   | `string`                                  | El tipo de plantilla a buscar (por ejemplo, `'edit'`, `'list'`).                               |
| `pageName` | `string`                                  | El nombre específico de la página a buscar. Si se proporciona, tiene prioridad sobre `typeId`. |

#### Devuelve

`[PageConfig](types.md#pageconfig)`

* La configuración de la página coincidente o `null` si no se encuentra.

### replaceAll()

```ts { .no-language }
replaceAll(text, text_to_find, replace_text): any
```

Reemplaza todas las apariciones de una subcadena dentro de una cadena por una nueva subcadena.

#### Parámetros

| Parámetro      | Tipo  | Descripción                                         |
| -------------- | ----- | --------------------------------------------------- |
| `text`         | `any` | La cadena original.                                 |
| `text_to_find` | `any` | La subcadena a buscar dentro de la cadena original. |
| `replace_text` | `any` | La subcadena por la que se reemplazará.             |

#### Devuelve

`any`

* La cadena modificada con todas las apariciones reemplazadas.

### escapeJsString()

```ts { .no-language }
escapeJsString(str): string
```

Devuelve una cadena JavaScript escapada.

#### Parámetros

| Parámetro | Tipo     | Descripción |
| --------- | -------- | ----------- |
| `str`     | `string` | Cadena      |

#### Devuelve

`string`

### escapeSqltring()

```ts { .no-language }
escapeSqltring(str): string
```

Devuelve una cadena SQL escapada.

#### Parámetros

| Parámetro | Tipo     | Descripción      |
| --------- | -------- | ---------------- |
| `str`     | `string` | Cadena a escapar |

#### Devuelve

`string`

### splitParams()

```ts { .no-language }
splitParams(pStr): any[]
```

Divide una cadena de parámetros en un array de parámetros, teniendo en cuenta arrays anidados.

#### Parámetros

| Parámetro | Tipo  | Descripción                        |
| --------- | ----- | ---------------------------------- |
| `pStr`    | `any` | La cadena de parámetros a dividir. |

#### Devuelve

`any[]`

* Un array de parámetros individuales.

### escapeHtmlString()

```ts { .no-language }
escapeHtmlString(str, attr): string
```

Devuelve una cadena HTML escapada.

#### Parámetros

| Parámetro | Tipo      | Descripción                                    |
| --------- | --------- | ---------------------------------------------- |
| `str`     | `string`  | Cadena                                         |
| `attr`    | `boolean` | Determina si los saltos de línea se sustituyen |

#### Devuelve

`string`

### lowerKeys()

```ts { .no-language }
lowerKeys(obj, recursive?): object
```

Transforma las claves de un objeto a minúsculas.

#### Parámetros

| Parámetro    | Tipo      | Valor por defecto | Descripción                           |
| ------------ | --------- | ----------------- | ------------------------------------- |
| `obj`        | `any`     | `undefined`       | Objeto a transformar.                 |
| `recursive?` | `boolean` | `false`           | Activa o desactiva el modo recursivo. |

#### Devuelve

`object`

Objeto transformado.

### execDynamicCode()

```ts { .no-language }
execDynamicCode(dynamicCode): any
```

Evalúa y ejecuta código JavaScript.

#### Parámetros

| Parámetro     | Tipo     | Descripción      |
| ------------- | -------- | ---------------- |
| `dynamicCode` | `string` | Código dinámico. |

#### Devuelve

`any`

### sortObject()

```ts { .no-language }
sortObject(obj, property, property2?): any[]
```

Ordena el array de un objeto según las propiedades especificadas.

#### Parámetros

| Parámetro    | Tipo     | Descripción                      |
| ------------ | -------- | -------------------------------- |
| `obj`        | `any`    | Objeto a ordenar.                |
| `property`   | `string` | Propiedad de ordenación.         |
| `property2?` | `string` | Segunda propiedad de ordenación. |

#### Devuelve

`any[]`

Objeto ordenado.