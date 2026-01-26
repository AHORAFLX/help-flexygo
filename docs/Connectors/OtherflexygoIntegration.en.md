# Flexygo Integration { .flx-title-with-image }

![flexygo](/docs_assets/images/FlexygoLogo.png){ .fh-image-of-title }

In case you need to launch pages of external **flexygo** applications from this **flexygo**, you can connect both apps using the connector especially developed to make possible integration betweet two different **flexygo**.

## Settings

1.  First of all, you need to register the external app that you want to open using this configuration window: <flx-navbutton class="link" type="openpage" pagetypeid="list" objectname="sysFlexygoConnectors" showprogress="false">connect flexygo application</flx-navbutton>.
    **App name** is the project name of your second **flexygo** (2) application and **external url** is the second **flexygo** url (2).
    
    ![Connected flexygo](/docs_assets/images/FlexygoConnector/ConnectedFlexygo.PNG "Image 1. Connected flexygo")
    
2.  In your external **flexygo** application (not in this), you must authroize this app:
    
    *   Open your external app and go to **Admin Work Area > Security > WebAPI** and press **Authorized Apps** button.
    *   Create new authorized app using current project name as App ID. **App ID** is project name of your first **flexygo** (1) application and **return token url** is web token url of previous step on your first **flexygo** (1).
    
    ![Authorized Apps](/docs_assets/images/FlexygoConnector/AuthorizedApps.PNG "Image 2. Authorized Apps")
    

## Flexygo integration navigation

You can use **nav-button** component or **flexygo.nav.external** JS functions to access to external **flexygo** pages specifying external app name:

### Go Home

To go home use:
```html
<flx-navbutton type="externalhome" appname="myflexygo" targetid="current">
	<button class="btn btn-outstanding">View sample here</button>
</flx-navbutton>
```

Instead of onclick event with:
```javascript
flexygo.nav.external.goHome('myflexygo','current');
```

### Open Page

To edit an object use:
```html
<flx-navbutton type="externalopenpage" appname="myflexygo" pagetypeid="edit" objectname="sysHelpItem" objectwhere="(HelpId='{{syshelp-navbutton}}')" defaults="{'Field':'{{value}}','DateField':'{{value|date:YYYY-MM-DD}}'}" targetid="current">
    <button class="btn btn-outstanding">View sample here</button>
</flx-navbutton>
```

Instead of onclick event with:
```javascript
flexygo.nav.external.openPage('myflexygo','edit','sysHelpItem','(HelpId=\\'syshelp-navbutton\\')','{"Field":"{{value}}","DateField":"{{value|date:YYYY-MM-DD}}"}','current',$(this));
```

To view an object use:
```html
<flx-navbutton type="externalopenpage" appname="myflexygo" pagetypeid="view" objectname="sysHelpItem" objectwhere="(HelpId='syshelp-navbutton')" defaults="" targetid="popup">
	<button class="btn btn-outstanding">View sample here</button>
</flx-navbutton>
```

Instead of onclick event with:
```javascript
flexygo.nav.external.openPage('myflexygo','view','sysHelpItem','(HelpId=\\'syshelp-navbutton\\')','null','popup',$(this));
```
To list a collection use:
```html
<flx-navbutton type="externalopenpage" appname="myflexygo" pagetypeid="list" objectname="sysHelp" objectwhere="" defaults="" targetid="popup">
	<button class="btn txt-notify">View sample here</button>
</flx-navbutton>
```

Instead of onclick event with:
```javascript
flexygo.nav.external.openPage('myflexygo','list','sysHelpItems','','null','popup',$(this));
```
### Open Page Name

To open a page:
```html
<flx-navbutton class="test" type="externalopenpagename" appname="myflexygo" pagename="syspage-generic-admon" targetid="popup">
	<div class="clickable txt-outstanding">Click here to Open Page by Name</div>
</flx-navbutton>
```

Instead of onclick event with:
```javascript
flexygo.nav.external.openPageName('myflexygo','syspage-generic-admon','','',null,'popup',$(this));
```

You can also open a page with an object, use:
```html
<flx-navbutton class="test" type="externalopenpagename" appname="myflexygo" objectname="sysobject" objectwhere="ObjectName='sysactionlog'" pagename="syspage-generic-admon" targetid="popup">
	<div class="clickable txt-outstanding">Click here to Open Page by Name with Sysactionlog object</div>
</flx-navbutton>
```

Instead of onclick event with:
```javascript
flexygo.nav.external.openPageName('myflexygo','syspage-generic-admon','sysobject','objectname=\\'sysactionlog\\'',null,'popup',$(this));
```