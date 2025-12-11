# Common Functions

## Open page

We can open any object default page using the flexygo.nav.openPage method and indicating the taget type and the entity or collection.

```ts
/**
* Opens the default object page
 * @method openPage
 * @param {string} pagetypeid - Type of the page (list, view, edit)
 * @param {string} objectname - Name of the collection or entity
 * @param {string} objectwhere - Where of the collection or entity
 * @param {string} defaults - Defaults to be added to the page
 * @param {string} targetid - Target to open the window
 * @param {boolean} excludeHist - True to not store in history
 * @param {JQuery} triggerElement - Relative element to open the page
 * @param {boolean} isClone - Only for opening page with clone options
 * @param {flexygo.nav.FlexygoHistory} previousHist - Previous page history
 * @param {string} presets - Used for opening page with a default preset, can be a preset ID or a JSON string 
 */
openPage(pagetypeid: string, objectname: string, objectwhere: string, defaults: string | flexygo.nav.PageDefaults, targetid: string, excludeHist?: boolean, triggerElement?: JQuery, isClone?: boolean, previousHist?: flexygo.nav.FlexygoHistory, presets?: string ): void
```

## Open page by name

We can open an specific page using the **flexygo.nav.openPageName** method and indicating the paget name and the entity or collection

```ts
 /**
 * Opens a page by its name
 * @method openPageName
 * @param {string} pagename - Identifier of the page
 * @param {string} objectname - Name of the collection or entity
 * @param {string} objectwhere - Where of the collection or entity
 * @param {string} defaults - Defaults to be added to the page
 * @param {string} targetid - Target to open the window
 * @param {boolean} excludeHist - True to not store in history
 * @param {JQuery} triggerElement - Relative element to open the page
 * @param {boolean} isClone -Only for opening page with clone options
 * @param {flexygo.nav.FlexygoHistory} previousHist - Previous page history
 * @param {string} presets - Used for opening page with a default preset, can be a preset ID or a JSON string 
 */

openPageName(pagename: string, objectname: string, objectwhere: string, defaults: string, targetid: string, excludeHist: boolean, triggerElement?: JQuery, isClone?: boolean, previousHist?: flexygo.nav.FlexygoHistory, presets?: string): void 
```

## Execute process

We can execute any process in the **flexygo** repository by using the **flexygo.nav.executeProcess** method and indicating the process and the entity or collection.

```ts
/**
 * Executes a process, opening its param page if required
 * @method execProcess
 * @param {string} processname - Identifier of the process
 * @param {string} objectname - Name of the collection or entity
 * @param {string} objectwhere - Where of the collection or entity
 * @param {string} defaults - Defaults to be added to the process
 * @param {any} processparams - Array of process parameters
 * @param {string} targetid - Target to open the window
 * @param {boolean} excludeHist - True to not store in history
 * @param {JQuery} triggerElement - Relative element to open the page
 * @param {function} callBack - callback to be called after execute
* @param {boolean} showprogress - false to hide progress indicator
 */

execProcess(processname: string, objectname: string, objectwhere: string, defaults: string | flexygo.nav.PageDefaults, processparams: any, targetid: string, excludeHist: boolean, triggerElement: JQuery, callBack?: any, showProgress?: boolean):void
```

##### Sample of executing a process with parameters

In this sample we shall translate the content of the MyTextbox property on the current edit form using the The TranslateTextTo process

```js
let module = $(triggerElement).closest('flx-module')[0];
let TextBox =$(module).find("[Property='MyTextbox']")[0];
let qs= TextBox.getValue();
if(qs!=null){
	flexygo.nav.execProcess('TranslateTextTo','sysProcess','',null,[{"key":'Text',"value":qs},{"key":'Lang',"value":'es'}],'current',false,$(this),function (ret){TextBox.setValue(ret.JSCode)})
}
```

## Object actions

We can create any entity or collection and execute object actions such as read, insert, update, delete using **flexygo.obj.Entity** method

```js
/**
* Library to access entity objects and collections from JS.
*
* @class flexygo.Entity
* @constructor
* @param {string} objectName - The object name.
* @param {string} [objectWhere] - Where condition (only if object isn't new).
* @return {object} - Entity object.
*/
var e = flexygo.obj.Entity (objectName, objectWhere);


/* read object info */
e.read();
/* insert */
e.data.PropertyName=newValue;
e.insert();
/* update */
e['PropertyName']=newValue;
e.update();
/* delete */
e.delete();
```