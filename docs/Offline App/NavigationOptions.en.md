# Offline Navigation options

## Before we start

We must distinguish between to different way of navigation **Go** and **Transfer**

*   **Go** leaves a trail so we can go backward and forward
*   **Transfer** does not which means it replaces one page for another in the navigation history

When using go the navigated pages will remain in the [ion-nav](https://ionicframework.com/docs/api/nav) DOM component just covered with an aria-hidden attribute. This pages will be eliminated of the DOM once the user goBacks from it or if it navigates with a transfer from it, as specified before.

The same page with and without a where is detected as differents. So there could be a situation where the same page is instanced two times in the DOM.
{: .flx-warning-card }

## Advices

This behaviour makes navigation faster, but it may cause some developer to make some mistakes when interacting with the pages, so here are some tips:

```js
$( 'flx-list:not(\[aria-hidden\])' )\[ 0 )\].refresh());
```

Do

```js
$('flx-list')\[0\].refresh();
```

Don't

Usually when you need to refresh a flexygo component in the app, a simple jquery selector is used, but this could create a conflict between the component you wanna refresh and the ones previously when navigating to which you want to refresh. So to avoid that you could just add a ":not(\[aria-hidden\])" to the selector which will ignore the hidden ones.

```js
$('flx-list\[page-name="My\_Page"\]')\[0\].refresh();
```

Do

```js
$('flx-list')\[0\].refresh();
```

Dont

When modifying a hidden page the something similar to the example before could happen, but in this case it getting aria-hidden attribute wouldn't solve the problem. So when trying to reload a hidden component it is recommended to add the page-name to the selector.

Knowing that the same page opened with and without a "where" clause are detected as different pages, if this strange situation ever happens you just should check the where attributes on the selector.
{: .flx-warning-card }

## Go Options

All the following options can be included in an **onclick** event of any of your HTML items.

### Synchronization page

```js
flexygo.nav.goSync();
```

### Home page

```js
flexygo.nav.goHome();
```

### Back

```js
flexygo.nav.goBack();
```

### Login page

```js
flexygo.nav.goLogin();
```

### Object list page

```js
flexygo.nav.goList(objectname, pagename, filter, defaults);
```

###### Example:

```js
flexygo.nav.goList('Offline\_Action', 'Offline\_Action\_List',{{objIdent|JS}}, null);
```

### Object view page

```js
flexygo.nav.goView(objectname, pagename, filter, defaults);
```

###### Example:

```js
flexygo.nav.goView('Offline\_Action', 'Offline\_Action\_View',{{objIdent|JS}}, null);
```

### Object edit page

```js
flexygo.nav.goEdit(objectname, pagename, filter, defaults);
```

###### Example:

```js
flexygo.nav.goEdit('Offline\_Action', '',{{objIdent|JS}}, null);
```

### Object insert page to create a new object

```js
flexygo.nav.goInsert(objectname, pagename, defaults);
```

###### Example:

```js
flexygo.nav.goInsert('Offline\_Action', '','{"EmployeeId":"{{currentReference}}"}');
```

### Object related image gallery

```js
flexygo.nav.goGallery(objectname, objectId);
```

###### Example:

```js
flexygo.nav.goGallery('Offline\_Action', 1);
```

### Object related documents

```js
flexygo.nav.goDocuments(objectname, objectId);
```

###### Example:

```js
flexygo.nav.goDocuments('Offline\_Action', 1);
```

## Transfer Options

### Object list page

```js
flexygo.nav.transferList(objectname, pagename, filter, defaults);
```

###### Example:

```js
flexygo.nav.transferList('Offline\_Action', 'Offline\_Action\_List',{{objIdent|JS}}, null);
```

### Object view page

```js
flexygo.nav.transferView(objectname, pagename, filter, defaults);
```

###### Example:

```js
flexygo.nav.transferView('Offline\_Action', 'Offline\_Action\_View',{{objIdent|JS}}, null);
```

### Object edit page

```js
flexygo.nav.transferEdit(objectname, pagename, filter, defaults);
```

###### Example:

```js
flexygo.nav.transferEdit('Offline\_Action', '',{{objIdent|JS}}, null);
```

### Object insert page to create a new object

```js
flexygo.nav.transferInsert(objectname, pagename, defaults);
```

###### Example:

```js
flexygo.nav.transferInsert('Offline\_Action', '','{"EmployeeId":"{{currentReference}}"}');
```

### Object related image gallery

```js
flexygo.nav.transferGallery(objectname, objectId);
```

###### Example:

```js
flexygo.nav.transferGallery('Offline\_Action', 1);
```

### Object related documents

```js
flexygo.nav.transferDocuments(objectname, objectId);
```

###### Example:

```js
flexygo.nav.transferDocuments('Offline\_Action', 1);
```

## Modal

### Object list page

```js
flexygo.nav.modalList(objectname, pagename, filter, defaults);
```

###### Example:

```js
flexygo.nav.modalList('Offline\_Action', 'Offline\_Action\_List',{{objIdent|JS}}, null);
```

### Object view page

```js
flexygo.nav.modalView(objectname, pagename, filter, defaults);
```

###### Example:

```js
flexygo.nav.modalView('Offline\_Action', 'Offline\_Action\_View',{{objIdent|JS}}, null);
```

### Object edit page

```js
flexygo.nav.modalEdit(objectname, pagename, filter, defaults);
```

###### Example:

```js
flexygo.nav.modalEdit('Offline\_Action', '',{{objIdent|JS}}, null);
```

### Object insert page to create a new object

```js
flexygo.nav.modalInsert(objectname, pagename, defaults);
```

###### Example:

```js
flexygo.nav.modalInsert('Offline\_Action', '','{"EmployeeId":"{{currentReference}}"}');
```

## Usefull tokens

In the filter parameter you can use the <fh-copy class="link">{{objIdent|JS}}</fh-copy> token which allows you to autogenerate the object identity. You can reference previous uploaded resources using <fh-copy class="link">{{Filename.png|file}}</fh-copy> token.

## Online Navigation options

For online navigation flexygo has two possibilities, by parameters and by URL.

The parameters which have a value assigned mean that that would be their value unless you give them one (not null, in that case they would get their assigned value).

### Online home page

```js
flexygo.navOnline.goHome();
```    
    
### Object insert page

Required parameter: **objectName**.

```js
flexygo.navOnline.goInsert(objectName, navigateFun, defaults, filterValues);
```

### Object list page

Required parameter: **objectName**.

```js
flexygo.navOnline.goList(objectName, navigateFun, defaults, objectWhere, filterValues);
```

### Object edit page

Required parameters: **objectName** and **objectWhere**.

```js
flexygo.navOnline.goEdit(objectName, objectWhere, navigateFun, defaults, filterValues);
```

### Object view page

Required parameters: **objectName** and **objectWhere**.

```js
flexygo.navOnline.goView(objectName, objectWhere, navigateFun , defaults, filterValues);
```
    
### Specific website

Required parameters: **url**.

```js
flexygo.navOnline.goExternalURL(url);
```