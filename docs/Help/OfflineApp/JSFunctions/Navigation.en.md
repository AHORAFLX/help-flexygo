# Navigation

This section is a collection of navigation-related functions that can be used in various parts of the application.
It contains functionalities for navigating between pages, opening modals, and handling back navigation.

It's important to note the differences between `go` and `transfer` functions:
- `go` functions navigate to a new page and add it to the navigation stack, allowing users to return to the previous page.
- `transfer` functions navigate to a new page but replace the current page in the navigation stack, preventing users from returning to the previous page.

## Functions

### goBack()

```ts { .no-language }
goBack(current?): void
```

Handles back navigation. If a modal is open, it closes the modal; otherwise, it navigates back in the router history.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `current?` | `any` | The current element (only used to close a modal, it must be the one contained by the modal). |

#### Returns

`void`

***

### closeModal()

```ts { .no-language }
closeModal(current?, data?): void
```

Closes the currently open modal. If a specific element is provided, it closes the modal associated with that element.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `current?` | `any` | The current element which is contained by the modal. |
| `data?` | `any` | Data to pass back when closing the modal. |

#### Returns

`void`

***

### goHome()

```ts { .no-language }
goHome(): void
```

Navigates to the home page of the application, resetting the navigation stack.

#### Returns

`void`

***

### goSync()

```ts { .no-language }
goSync(): void
```

Navigates to the synchronization page of the application, resetting the navigation stack.

#### Returns

`void`

***

### goLogin()

```ts { .no-language }
goLogin(force_login?): void
```

Navigates to the login page of the application, resetting the navigation stack.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `force_login?` | `boolean` | `false` | If true, forces navigation to the login page even if is sleepmode active (should not be used) |

#### Returns

`void`

***

### goList()

```ts { .no-language }
goList(object, pagename, filter?, defaults?): void
```

Navigates to the list of the specified object and pagename

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `object` | `string` | The object name |
| `pagename` | `string` | The page name |
| `filter?` | `string` | Optional filter to apply to the kust |
| `defaults?` | `string` \| `Object` | Optional default values for the new record (can be a json string or an object) |

#### Returns

`void`

***

### goEdit()

```ts { .no-language }
goEdit(object, pagename, filter, defaults?): void
```

Navigates to the edit page of the specified object and pagename

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `object` | `string` | The object name |
| `pagename` | `string` | The page name |
| `filter` | `string` | Filter to apply to select the record to edit |
| `defaults?` | `string` \| `Object` | Optional default values for the new record (can be a json string or an object) |

#### Returns

`void`

***

### goView()

```ts { .no-language }
goView(object, pagename, filter, defaults?): void
```

Navigates to the view page of the specified object and pagename

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `object` | `string` | The object name |
| `pagename` | `string` | The page name |
| `filter` | `string` | Filter to apply to select the record to view |
| `defaults?` | `string` \| `Object` | Optional default values for the new record (can be a json string or an object) |

#### Returns

`void`

***

### goInsert()

```ts { .no-language }
goInsert(object, pagename, defaults?): void
```

Navigates to the insert page of the specified object and pagename

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `object` | `string` | The object name |
| `pagename` | `string` | The page name |
| `defaults?` | `string` \| `Object` | Optional default values for the new record (can be a json string or an object) |

#### Returns

`void`

***

### goGallery()

```ts { .no-language }
goGallery(object, objectid, defaults?): void
```

Navigates to the gallery page of the specified object and objectid

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `object` | `string` | The object name |
| `objectid` | `string` | The object id |
| `defaults?` | `string` \| `Object` | Optional default values for the new record (can be a json string or an object) |

#### Returns

`void`

***

### goDocuments()

```ts { .no-language }
goDocuments(object, objectid, defaults?): void
```

Navigates to the documents page of the specified object and objectid

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `object` | `string` | The object name |
| `objectid` | `string` | The object id |
| `defaults?` | `string` \| `Object` | Optional default values for the new record (can be a json string or an object) |

#### Returns

`void`

***

### goAI()

```ts { .no-language }
goAI(setting_id, first_message?, defaults?, is_first_message_by_mic?): void
```

Opens the AI modal with the specified settings

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `setting_id` | `string` | The AI setting id to use |
| `first_message?` | `string` | Optional first message to send to the AI |
| `defaults?` | `any` | Optional default values for the AI (can be a json string or an object) |
| `is_first_message_by_mic?` | `boolean` | If true, the mic popup will be shown first and the message will get send as first message to the assitant |

#### Returns

`void`

***

### transferList()

```ts { .no-language }
transferList(object, pagename, filter?, defaults?): void
```

Transfers to the list of the specified object and pagename, not allowing to go back to the previous page

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `object` | `string` | The object name |
| `pagename` | `string` | The page name |
| `filter?` | `string` | Optional filter to apply to the kust |
| `defaults?` | `string` \| `Object` | Optional default values for the new record (can be a json string or an object) |

#### Returns

`void`

***

### transferEdit()

```ts { .no-language }
transferEdit(object, pagename, filter, defaults?): void
```

Transfers to the edit page of the specified object and pagename, not allowing to go back to the previous page

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `object` | `string` | The object name |
| `pagename` | `string` | The page name |
| `filter` | `string` | Filter to apply to select the record to edit |
| `defaults?` | `string` \| `Object` | - |

#### Returns

`void`

***

### transferView()

```ts { .no-language }
transferView(object, pagename, filter, defaults?): void
```

Transfers to the view page of the specified object and pagename, not allowing to go back to the previous page

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `object` | `string` | The object name |
| `pagename` | `string` | The page name |
| `filter` | `string` | Filter to apply to select the record to view |
| `defaults?` | `string` \| `Object` | Optional default values for the new record (can be a json string or an object) |

#### Returns

`void`

***

### transferInsert()

```ts { .no-language }
transferInsert(object, pagename, defaults?): void
```

Transfers to the insert page of the specified object and pagename, not allowing to go back to the previous page

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `object` | `string` | The object name |
| `pagename` | `string` | The page name |
| `defaults?` | `string` \| `Object` | Optional default values for the new record (can be a json string or an object) |

#### Returns

`void`

***

### transferGallery()

```ts { .no-language }
transferGallery(object, objectid, defaults?): void
```

Transfers to the gallery page of the specified object and objectid, not allowing to go back to the previous page

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `object` | `string` | The object name |
| `objectid` | `string` | The object id |
| `defaults?` | `string` \| `Object` | Optional default values for the new record (can be a json string or an object) |

#### Returns

`void`

***

### transferDocuments()

```ts { .no-language }
transferDocuments(object, objectid): void
```

Transfers to the documents page of the specified object and objectid, not allowing to go back to the previous page

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `object` | `string` | The object name |
| `objectid` | `string` | The object id |

#### Returns

`void`

***

### modalList()

```ts { .no-language }
modalList(object, pagename, filter?, defaults?): Promise<OverlayEventDetail<any>>
```

Opens a modal with a list of the specified object and pagename

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `object` | `string` | The object name |
| `pagename` | `string` | The page name |
| `filter?` | `string` | Optional filter to apply to the kust |
| `defaults?` | `string` \| `Object` | Optional default values for the new record (can be a json string or an object) |

#### Returns

`Promise<OverlayEventDetail<any>>`

***

### modalEdit()

```ts { .no-language }
modalEdit(object, pagename, filter, defaults?): Promise<OverlayEventDetail<any>>
```

Opens a modal with the edit page of the specified object and pagename

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `object` | `string` | The object name |
| `pagename` | `string` | The page name |
| `filter` | `string` | Filter to apply to select the record to edit |
| `defaults?` | `string` \| `Object` | Optional default values for the new record (can be a json string or an object) |

#### Returns

`Promise<OverlayEventDetail<any>>`

***

### modalView()

```ts { .no-language }
modalView(object, pagename, filter, defaults?): Promise<OverlayEventDetail<any>>
```

Opens a modal with the view page of the specified object and pagename

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `object` | `string` | The object name |
| `pagename` | `string` | The page name |
| `filter` | `string` | Filter to apply to select the record to view |
| `defaults?` | `string` \| `Object` | Optional default values for the new record (can be a json string or an object) |

#### Returns

`Promise<OverlayEventDetail<any>>`

***

### modalInsert()

```ts { .no-language }
modalInsert(object, pagename, defaults?): Promise<OverlayEventDetail<any>>
```

Opens a modal with the insert page of the specified object and pagename

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `object` | `string` | The object name |
| `pagename` | `string` | The page name |
| `defaults?` | `string` \| `Object` | Optional default values for the new record (can be a json string or an object) |

#### Returns

`Promise<OverlayEventDetail<any>>`

***

### goPage()

```ts { .no-language }
goPage(type, object, pagename, filter, defaults, direction): void
```

The generic form of navigation (not recommended to be used directly, use the go or back functions instead)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The type of the page (e.g., 'list', 'edit', 'view'). |
| `object` | `string` | The object name. |
| `pagename` | `string` | The page name. |
| `filter` | `string` | The filter to apply. |
| `defaults` | `string` \| `Object` | Default values for the new record (can be a JSON string or an object). |
| `direction` | `RouterDirection` | The direction of the navigation (e.g., 'forward', 'back', 'root'). |

#### Returns

`void`

***

### goPageGallDoc()

```ts { .no-language }
goPageGallDoc(type, object, objectid, defaults, direction): void
```

The generic form of navigation to gallery or documents

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The type of the page ('gallery' or 'documents'). |
| `object` | `string` | The object name. |
| `objectid` | `string` | The object id. |
| `defaults` | `string` \| `Object` | Default values for the new record (can be a JSON string or an object). |
| `direction` | `RouterDirection` | The direction of the navigation (e.g., 'forward', 'back', 'root'). |

#### Returns

`void`

***

### currentUrl()

```ts { .no-language }
currentUrl(): string
```

Returns the current URL of the router

#### Returns

`string`

- The current URL
