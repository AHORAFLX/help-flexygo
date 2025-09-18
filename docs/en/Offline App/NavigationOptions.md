App description Common JS Functions Creating App Design Environment Designing App Navigation Options Return Data Process Useful Tokens Tracking Configuration Database Debugging App/Emulator differences Offline AI

# Offline Navigation options

## Before we start

We must distinguish between to different way of navigation **Go** and **Transfer**

*   **Go** leaves a trail so we can go backward and forward
*   **Transfer** does not which means it replaces one page for another in the navigation history

When using go the navigated pages will remain in the [ion-nav](https://ionicframework.com/docs/api/nav) DOM component just covered with an aria-hidden attribute. This pages will be eliminated of the DOM once the user goBacks from it or if it navigates with a transfer from it, as specified before.

Warning: The same page with and without a where is detected as differents. So there could be a situation where the same page is instanced two times in the DOM.

##### Advices

This behaviour makes navigation faster, but it may cause some developer to make some mistakes when interacting with the pages, so here are some tips:

$( 'flx-list:not(\[aria-hidden\])' )\[ 0 )\].refresh());

Do

$('flx-list')\[0\].refresh();

Don't

Usually when you need to refresh a flexygo component in the app, a simple jquery selector is used, but this could create a conflict between the component you wanna refresh and the ones previously when navigating to which you want to refresh. So to avoid that you could just add a ":not(\[aria-hidden\])" to the selector which will ignore the hidden ones.

$('flx-list\[page-name="My\_Page"\]')\[0\].refresh();

Do

$('flx-list')\[0\].refresh();

Dont

When modifying a hidden page the something similar to the example before could happen, but in this case it getting aria-hidden attribute wouldn't solve the problem. So when trying to reload a hidden component it is recommended to add the page-name to the selector.

Advice: Knowing that the same page opened with and without a "where" clause are detected as different pages, if this strange situation ever happens you just should check the where attributes on the selector.

## GO Options

All the following options can be included in an **onclick** event of any of your HTML items.

##### Go to synchronization page

flexygo.nav.goSync();

##### Go to home page

flexygo.nav.goHome();

##### Go back

flexygo.nav.goBack();

##### Go to login page

flexygo.nav.goLogin();

##### Go to object list page

flexygo.nav.goList(objectname, pagename, filter, defaults);

###### Example:

flexygo.nav.goList('Offline\_Action', 'Offline\_Action\_List',{{objIdent|JS}}, null);

##### Go to object view page

flexygo.nav.goView(objectname, pagename, filter, defaults);

###### Example:

flexygo.nav.goView('Offline\_Action', 'Offline\_Action\_View',{{objIdent|JS}}, null);

##### Go to object edit page

flexygo.nav.goEdit(objectname, pagename, filter, defaults);

###### Example:

flexygo.nav.goEdit('Offline\_Action', '',{{objIdent|JS}}, null);

##### Go to object insert page to create a new object

flexygo.nav.goInsert(objectname, pagename, defaults);

###### Example:

flexygo.nav.goInsert('Offline\_Action', '','{"EmployeeId":"{{currentReference}}"}');

##### Go to object related image gallery

flexygo.nav.goGallery(objectname, objectId);

###### Example:

flexygo.nav.goGallery('Offline\_Action', 1);

##### Go to object related documents

flexygo.nav.goDocuments(objectname, objectId);

###### Example:

flexygo.nav.goDocuments('Offline\_Action', 1);

## Transfer Options

##### Transfer to object list page

flexygo.nav.transferList(objectname, pagename, filter, defaults);

###### Example:

flexygo.nav.transferList('Offline\_Action', 'Offline\_Action\_List',{{objIdent|JS}}, null);

##### Transfer to object view page

flexygo.nav.transferView(objectname, pagename, filter, defaults);

###### Example:

flexygo.nav.transferView('Offline\_Action', 'Offline\_Action\_View',{{objIdent|JS}}, null);

##### Transfer to object edit page

flexygo.nav.transferEdit(objectname, pagename, filter, defaults);

###### Example:

flexygo.nav.transferEdit('Offline\_Action', '',{{objIdent|JS}}, null);

##### Transfer to object insert page to create a new object

flexygo.nav.transferInsert(objectname, pagename, defaults);

###### Example:

flexygo.nav.transferInsert('Offline\_Action', '','{"EmployeeId":"{{currentReference}}"}');

##### Transfer to object related image gallery

flexygo.nav.transferGallery(objectname, objectId);

###### Example:

flexygo.nav.transferGallery('Offline\_Action', 1);

##### Transfer to object related documents

flexygo.nav.transferDocuments(objectname, objectId);

###### Example:

flexygo.nav.transferDocuments('Offline\_Action', 1);

## Modal Options

##### Modal to object list page

flexygo.nav.modalList(objectname, pagename, filter, defaults);

###### Example:

flexygo.nav.modalList('Offline\_Action', 'Offline\_Action\_List',{{objIdent|JS}}, null);

##### Modal to object view page

flexygo.nav.modalView(objectname, pagename, filter, defaults);

###### Example:

flexygo.nav.modalView('Offline\_Action', 'Offline\_Action\_View',{{objIdent|JS}}, null);

##### Modal to object edit page

flexygo.nav.modalEdit(objectname, pagename, filter, defaults);

###### Example:

flexygo.nav.modalEdit('Offline\_Action', '',{{objIdent|JS}}, null);

##### Modal to object insert page to create a new object

flexygo.nav.modalInsert(objectname, pagename, defaults);

###### Example:

flexygo.nav.modalInsert('Offline\_Action', '','{"EmployeeId":"{{currentReference}}"}');

## Usefull tokens

In the filter parameter you can use the {{objIdent|JS}} token which allows you to autogenerate the object identity. You can reference previous uploaded resources using {{Filename.png|file}} token.

## Online Navigation options

For online navigation flexygo has two possibilities, by parameters and by URL

*   ## By Parameters
    
    The parameters which have a value assigned mean that that would be their value unless you give them one (not null, in that case they would get their assigned value).
    
    ##### Go to online home page
    
    flexygo.navOnline.goHome();
    
    ##### Go to the specified object insert page
    
    Required parameter: **objectName**.
    
    flexygo.navOnline.goInsert(objectName, navigateFun, defaults, filterValues);
    
    ##### Go to the specified object list page
    
    Required parameter: **objectName**.
    
    flexygo.navOnline.goList(objectName, navigateFun, defaults, objectWhere, filterValues);
    
    ##### Go to the specified object edit page
    
    Required parameters: **objectName** and **objectWhere**.
    
    flexygo.navOnline.goEdit(objectName, objectWhere, navigateFun, defaults, filterValues);
    
    ##### Go to the specified object view page
    
    Required parameters: **objectName** and **objectWhere**.
    
    flexygo.navOnline.goView(objectName, objectWhere, navigateFun , defaults, filterValues);
*   ## By URL
    
    ##### Go to the specified website
    
    Required parameters: **url**.
    
    flexygo.navOnline.goExternalURL(url);