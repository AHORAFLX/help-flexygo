# Parser

This section contains a collection of functionalities for parsing and compiling templates.

## Functions

### recursiveCompile()

```ts { .no-language }
recursiveCompile(json, template, conf, contextFunctions?, lastTemplate?, AddTimeZone?): Promise<string>
```

Recursively compiles a template string by replacing markers with corresponding values from a JSON object and context vars.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `json` | `any` | `undefined` | The JSON object containing values to replace in the template. |
| `template` | `string` | `undefined` | The template string containing markers to be replaced. |
| `conf` | [`ConfToken`](types.md#conftoken) | `undefined` | The configuration object containing user and resource information. |
| `contextFunctions?` | `any` | `undefined` | An optional object containing functions that can be called within the template. |
| `lastTemplate?` | `string` | `undefined` | The last processed template string to prevent infinite recursion. |
| `AddTimeZone?` | `boolean` | `false` | Whether to add timezone information when formatting dates. |

#### Returns

`Promise<string>`

- A promise that resolves to the compiled template string.

***

### compile()

```ts { .no-language }
compile(json, template, files, contextFunctions?, AddTimeZone?): Promise<string>
```

Compiles a template string by replacing markers with corresponding values from a JSON object and context vars.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `json` | `any` | `undefined` | The JSON object containing values to replace in the template. |
| `template` | `string` | `undefined` | The template string containing markers to be replaced. |
| `files` | [`fileResource`](types.md#fileresource)[] | `undefined` | An array of file resources that can be used in the template. |
| `contextFunctions?` | `any` | `undefined` | An optional object containing functions that can be called within the template. |
| `AddTimeZone?` | `boolean` | `false` | Whether to add timezone information when formatting dates. |

#### Returns

`Promise<string>`

- A promise that resolves to the compiled template string.

***

### findTemplate()

```ts { .no-language }
findTemplate(object, typeId, pageName): [PageConfig](types.md#pageconfig)
```

Given an object, the template type and the pagename it returns the proper template.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `object` | [`ObjectConfig`](types.md#objectconfig-1) | The object configuration containing available pages. |
| `typeId` | `string` | The type of template to search for (e.g., 'edit', 'list'). |
| `pageName` | `string` | The specific page name to search for. If provided, it takes precedence over typeId. |

#### Returns

`[PageConfig](types.md#pageconfig)`

- The matching page configuration or null if not found.

***

### replaceAll()

```ts { .no-language }
replaceAll(text, text_to_find, replace_text): any
```

Replaces all occurrences of a substring within a string with a new substring.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `text` | `any` | The original string. |
| `text_to_find` | `any` | The substring to find within the original string. |
| `replace_text` | `any` | The substring to replace the found substring with. |

#### Returns

`any`

- The modified string with all occurrences replaced.

***

### escapeJsString()

```ts { .no-language }
escapeJsString(str): string
```

Returns an escaped JS string

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | String |

#### Returns

`string`

***

### escapeSqltring()

```ts { .no-language }
escapeSqltring(str): string
```

Returns an escaped SQL string

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | String to be scaped |

#### Returns

`string`

***

### splitParams()

```ts { .no-language }
splitParams(pStr): any[]
```

Splits a parameter string into an array of parameters, considering nested arrays.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pStr` | `any` | The parameter string to split. |

#### Returns

`any[]`

- An array of individual parameters.

***

### escapeHtmlString()

```ts { .no-language }
escapeHtmlString(str, attr): string
```

Returns an escapep HTML string

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | String |
| `attr` | `boolean` | Determine if the line breaks are substituted |

#### Returns

`string`

***

### lowerKeys()

```ts { .no-language }
lowerKeys(obj, recursive?): object
```

Transform object keys into lower case.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `obj` | `any` | `undefined` | Object to transform. |
| `recursive?` | `boolean` | `false` | Set recursive mode on/off. |

#### Returns

`object`

transformed object.

***

### execDynamicCode()

```ts { .no-language }
execDynamicCode(dynamicCode): any
```

Evaluates JavaScript code and executes it.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `dynamicCode` | `string` | Dynamic Code. |

#### Returns

`any`

***

### sortObject()

```ts { .no-language }
sortObject(obj, property, property2?): any[]
```

Sorts an object's array by specified properties.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `obj` | `any` | Object to order. |
| `property` | `string` | Order property |
| `property2?` | `string` | Second order property |

#### Returns

`any[]`

Ordered object.
