# Navigation button

Navigation button, developed such as web component, used to avoid pasting JavaScript in to your HTML markup and keeping the markup clean.

#### Go Home

To go home use:

View sample here

Instead of onclick event with:

flexygo.nav.goHome();

#### Open Page

*   Edit sample here
*   View sample here
*   List sample here
*   List with preset id sample here
*   List with preset object sample here

To edit an object use:

Instead of onclick event with:

flexygo.nav.openPage('edit','sysHelpItem','(HelpId=\\'syshelp-navbutton\\')','{"Field":"{{value}}","DateField":"{{value|date:YYYY-MM-DD}}"}','current',false,$(this));

To view an object use:

View sample here

Instead of onclick event with:

flexygo.nav.openPage('view','sysHelpItem','(HelpId=\\'syshelp-navbutton\\')','null','popup',false,$(this));

To list a collection use:

View sample here

Instead of onclick event with:

flexygo.nav.openPage('list','sysHelpItems','','null','popup',false,$(this));

To list a collection with a global default preset use:

View sample here

Instead of onclick event with:

flexygo.nav.openPage('list','sysHelpItems','','null','popup',false,$(this),null,null,'Help\_Offline\_App');

To **list** a collection with a **default preset for a module** use:

View sample here

Instead of onclick event with:

flexygo.nav.openPage('list','sysHelpItems','','null','popup',false,$(this),null,null,'{"sys-systemHelp":"Help\_Offline\_App"}');

#### OpenPageName

Click here to Open Page by Name

To **open** a page:

Click here to Open Page by Name

Instead of onclick event with:

flexygo.nav.openPageName('syspage-generic-admon','','',null,'popup',false,$(this));

You can also open a page with an object, use:

Click here to Open Page by Name with Sysactionlog object

Instead of onclick event with:

flexygo.nav.openPageName('syspage-generic-admon','sysobject','objectname=\\'sysactionlog\\'',null,'popup',false,$(this));

#### ExecProcess

Click to execute PrintPage procees

To execute a process use:

Click to execute PrintPage process

Instead of onclick event with:

flexygo.nav.execProcess('PrintPage','','',null,null,'popup',false,$(this),false);

#### ViewReport

Click to view report

To view a report use:

Click to view report

Instead of onclick event with:

flexygo.nav.viewReport('reportname','','yourobject','yourwhere',null,null,'popup',false,$(this));

#### OpenHelpId

Click to open help

To open help use:

Click to open help

Instead of onclick event with:

flexygo.nav.openHelpId('syshelp-navbutton','popup',false,$(this));

#### OpenProcessParams and OpenProcessParamsPage

To open default process parameter page use:

Click to open process params page

Instead of onclick event with:

flexygo.nav.openProcessParams('testprocess', 'sysHelpItem', '(HelpId=\\'{{syshelp-navbutton}}\\')', '{"Field":"{{value}}"}', 'popup', false, $(this));

To open process specific parameter page use:

Click to open specific process params page

Instead of onclick event with:

flexygo.nav.openProcessParams('yourpagename','testprocess', 'sysHelpItem', '(HelpId=\\'{{syshelp-navbutton}}\\')', '{"Field":"{{value}}"}', 'popup', false, $(this));

#### OpenReportParams and OpenReportsParamsPage

To open default reports parameter page use:

Click to open report params page

Instead of onclick event with:

flexygo.nav.openReportsParams('testreport', '', 'sysHelpItem', '(HelpId=\\'{{syshelp-navbutton}}\\')', '{"Field":"{{value}}"}', 'popup', false, $(this));

To open report specific parameter page use:

Click to open specific report params page

Instead of onclick event with:

flexygo.nav.openProcessParams('yourpagename','testreport','', 'sysHelpItem', '(HelpId=\\'{{syshelp-navbutton}}\\')', '{"Field":"{{value}}"}', 'popup', false, $(this));