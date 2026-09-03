# Online navigation

Online navigation does go to the online flexygo pages of the flexygo that does contain the mobile app.
This section contains a collection of functionalities for flexygo online navigation.
It includes methods to navigate to home, list, edit, view, insert pages, reports, and external URLs.

## Functions

### goHome()

```ts { .no-language }
goHome(): void
```

Navigates to the home page.

#### Returns

`void`

***

### goList()

```ts { .no-language }
goList(objectName, navigateFun?, defaults?, objectWhere?, filterValues?, pageName?, hideMenuBar?): void
```

Navigates to a list page for a specified object.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `objectName` | `string` | `undefined` | The name of the object to list. |
| `navigateFun?` | `string` | `'openpage'` | The navigation function to use (default is 'openpage'). |
| `defaults?` | `string` | `undefined` | Default values to pass to the page |
| `objectWhere?` | `string` | `undefined` | The where clause to filter the object. |
| `filterValues?` | `string` | `undefined` | Filter values to apply to the list. |
| `pageName?` | `string` | `undefined` | The name of the page to navigate to. |
| `hideMenuBar?` | `boolean` | `undefined` | Whether to hide the menu bar on the page. |

#### Returns

`void`

***

### goEdit()

```ts { .no-language }
goEdit(objectName, objectWhere, navigateFun?, defaults?, filterValues?, pageName?, hideMenuBar?): void
```

Navigates to an edit page for a specified object.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `objectName` | `string` | `undefined` | The name of the object to edit. |
| `objectWhere` | `string` | `undefined` | The where clause to identify the specific record to edit. |
| `navigateFun?` | `string` | `'openpage'` | The navigation function to use (default is 'openpage'). |
| `defaults?` | `string` | `undefined` | Default values to pass to the page |
| `filterValues?` | `string` | `undefined` | Filter values to apply to the edit page. |
| `pageName?` | `string` | `undefined` | The name of the page to navigate to. |
| `hideMenuBar?` | `boolean` | `undefined` | Whether to hide the menu bar on the page. |

#### Returns

`void`

***

### goView()

```ts { .no-language }
goView(objectName, objectWhere, navigateFun?, defaults?, filterValues?, pageName?, hideMenuBar?): void
```

Navigates to a view page for a specified object.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `objectName` | `string` | `undefined` | The name of the object to view. |
| `objectWhere` | `string` | `undefined` | The where clause to identify the specific record to view. |
| `navigateFun?` | `string` | `'openpage'` | The navigation function to use (default is 'openpage'). |
| `defaults?` | `string` | `undefined` | Default values to pass to the page |
| `filterValues?` | `string` | `undefined` | Filter values to apply to the view page. |
| `pageName?` | `string` | `undefined` | The name of the page to navigate to. |
| `hideMenuBar?` | `boolean` | `undefined` | Whether to hide the menu bar on the page. |

#### Returns

`void`

***

### goInsert()

```ts { .no-language }
goInsert(objectName, navigateFun?, defaults?, filterValues?, pageName?, hideMenuBar?): void
```

Navigates to an insert page for a specified object.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `objectName` | `string` | `undefined` | The name of the object to insert. |
| `navigateFun?` | `string` | `'openpage'` | The navigation function to use (default is 'openpage'). |
| `defaults?` | `string` | `undefined` | Default values to pass to the page |
| `filterValues?` | `string` | `undefined` | Filter values to apply to the insert page. |
| `pageName?` | `string` | `undefined` | The name of the page to navigate to. |
| `hideMenuBar?` | `boolean` | `undefined` | Whether to hide the menu bar on the page. |

#### Returns

`void`

***

### goReport()

```ts { .no-language }
goReport(reportName, objectName, objectWhere): void
```

Navigates to a report page for a specified report and object.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `reportName` | `string` | The name of the report to generate. |
| `objectName` | `string` | The name of the object to base the report on. |
| `objectWhere` | `string` | The where clause to filter the object for the report. |

#### Returns

`void`

***

### goPage()

```ts { .no-language }
goPage(pageTypeId, objectName, navigateFun?, defaults?, objectWhere?, filterValues?, pageName?, hideMenuBar?): Promise<void>
```

Navigates to a specified page type for a given object with various options.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `pageTypeId` | `string` | `undefined` | The type of page to navigate to (e.g., 'list', 'edit', 'view'). |
| `objectName` | `string` | `undefined` | The name of the object to navigate to. |
| `navigateFun?` | `string` | `'openpage'` | The navigation function to use (default is 'openpage'). |
| `defaults?` | `string` | `undefined` | Default values to pass to the page |
| `objectWhere?` | `string` | `undefined` | The where clause to filter the object. |
| `filterValues?` | `string` | `undefined` | Filter values to apply to the page. |
| `pageName?` | `string` | `undefined` | The name of the page to navigate to. |
| `hideMenuBar?` | `boolean` | `undefined` | Whether to hide the menu bar on the page. |

#### Returns

`Promise<void>`

***

### goExternalURL()

```ts { .no-language }
goExternalURL(url): Promise<void>
```

Navigates to an URL that is external to flexygo.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `string` | The external URL to navigate to. |

#### Returns

`Promise<void>`
