# flexygo Integration

![flexygo](./img/help/FlexygoLogo.png)

In case you need to launch pages of external **flexygo** applications from this **flexygo**, you can connect both apps using the connector especially developed to make possible integration betweet two different **flexygo**.

### Settings

1.  First of all, you need to register the external app that you want to open using this configuration window: connect flexygo application.  
    **App name** is the project name of your second **flexygo** (2) application and **external url** is the second **flexygo** url (2).
    
    ![Connected flexygo](./img/Help/FlexygoConnector/ConnectedFlexygo.PNG "Image 1. Connected flexygo")
    
    Image 1. Connected flexygo
    
2.  In your external **flexygo** application (not in this), you must authroize this app:
    
    *   Open your external app and go to **Admin Work Area > Security > WebAPI** and press **Authorized Apps** button.
    *   Create new authorized app using current project name as App ID. **App ID** is project name of your first **flexygo** (1) application and **return token url** is web token url of previous step on your first **flexygo** (1).
    
    ![Authorized Apps](./img/Help/FlexygoConnector/AuthorizedApps.PNG "Image 2. Authorized Apps")
    
    Image 2. Authorized Apps
    

## **flexygo** integration navigation

You can use **nav-button** component or **flexygo.nav.external** JS functions to access to external **flexygo** pages specifying external app name:

### Go Home

To go home use:

View sample here

Instead of onclick event with:

flexygo.nav.external.goHome('myflexygo','current');

### Open Page

To edit an object use:

View sample here

Instead of onclick event with:

flexygo.nav.external.openPage('myflexygo','edit','sysHelpItem','(HelpId=\\'syshelp-navbutton\\')','{"Field":"{{value}}","DateField":"{{value|date:YYYY-MM-DD}}"}','current',$(this));

To view an object use:

View sample here

Instead of onclick event with:

flexygo.nav.external.openPage('myflexygo','view','sysHelpItem','(HelpId=\\'syshelp-navbutton\\')','null','popup',$(this));

To list a collection use:

View sample here

Instead of onclick event with:

flexygo.nav.external.openPage('myflexygo','list','sysHelpItems','','null','popup',$(this));

### Open Page Name

To open a page:

Click here to Open Page by Name

Instead of onclick event with:

flexygo.nav.external.openPageName('myflexygo','syspage-generic-admon','','',null,'popup',$(this));

You can also open a page with an object, use:

Click here to Open Page by Name with Sysactionlog object

Instead of onclick event with:

flexygo.nav.external.openPageName('myflexygo','syspage-generic-admon','sysobject','objectname=\\'sysactionlog\\'',null,'popup',$(this));