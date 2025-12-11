# Botón de navegación

El botón de navegación, desarrollado como un componente web, se utiliza para evitar pegar JavaScript en el marcado HTML y mantener el marcado limpio.

## Ir a Inicio

Para ir a inicio usa:

```html
<flx-navbutton type="home">
    <button class="btn btn-outstanding">Ver ejemplo aquí</button>
</flx-navbutton>
```

En lugar de un evento onclick con:
```js
flexygo.nav.goHome();
```

## Abrir Página

<flx-navbutton class="button" type="openpage" pagetypeid="edit" objectname="sysHelpItem" objectwhere="(HelpId='syshelp-navbutton')">Editar ejemplo aquí</flx-navbutton>
<flx-navbutton class="button" type="openpage" pagetypeid="view" objectname="sysHelpItem" objectwhere="(HelpId='syshelp-navbutton')">Ver ejemplo aquí</flx-navbutton>
<flx-navbutton class="button" type="openpage" pagetypeid="list" objectname="sysHelpItem" objectwhere="(HelpId='syshelp-navbutton')">Lista de ejemplo aquí</flx-navbutton>
<flx-navbutton class="button" type="openpage" pagetypeid="list" objectname="sysHelpItem" objectwhere="(HelpId='syshelp-navbutton')" presets="Help_Offline_App">Lista con id de preset aquí</flx-navbutton>
<flx-navbutton class="button" type="openpage" pagetypeid="list" objectname="sysHelpItem" objectwhere="(HelpId='syshelp-navbutton')" presets="{'sys-systemHelp':'Help_Offline_App'}">Lista con objeto de preset aquí</flx-navbutton>

Para editar un objeto usa:

```html
<flx-navbutton type="openpage" pagetypeid="edit" objectname="sysHelpItem" objectwhere="(HelpId='{{syshelp-navbutton}}')" defaults="{'Field':'{{value}}','DateField':'{{value|date:YYYY-MM-DD}}'}" targetid="current" excludehist="false"></flx-navbutton>
```

En lugar de un evento onclick con:

```js
flexygo.nav.openPage('edit','sysHelpItem','(HelpId=\\'syshelp-navbutton\\')','{"Field":"{{value}}","DateField":"{{value|date:YYYY-MM-DD}}"}','current',false,$(this));
```

Para ver un objeto usa:
```html
<flx-navbutton type="openpage" pagetypeid="view" objectname="sysHelpItem" objectwhere="(HelpId='syshelp-navbutton')" defaults="" targetid="popup" excludehist="false">
    <button class="btn btn-outstanding">View sample here</button>
</flx-navbutton>
```

En lugar de un evento onclick con:

```js
flexygo.nav.openPage('view','sysHelpItem','(HelpId=\\'syshelp-navbutton\\')','null','popup',false,$(this));
```

Para listar una colección usa:
```html
<flx-navbutton type="openpage" pagetypeid="list" objectname="sysHelp" objectwhere="" defaults="" targetid="popup" excludehist="false">
    <button class="btn btn-outstanding">View sample here</button>
</flx-navbutton>
```

En lugar de un evento onclick con:

```js
flexygo.nav.openPage('list','sysHelpItems','','null','popup',false,$(this));
```

Para listar una colección con un preset global por defecto usa:

```html
<flx-navbutton type="openpage" pagetypeid="list" objectname="sysHelp" objectwhere="" defaults="" targetid="popup" excludehist="false" presets="Help_Offline_App">
    <button class="btn btn-outstanding">View sample here</button>
</flx-navbutton>
```

En lugar de un evento onclick con:
```js
flexygo.nav.openPage('list','sysHelpItems','','null','popup',false,$(this),null,null,'Help\_Offline\_App');
```

Para listar una colección con un preset por defecto para un módulo usa:

```html
<flx-navbutton type="openpage" pagetypeid="list" objectname="sysHelp" objectwhere="" defaults="" targetid="popup" excludehist="false" presets="{'sys-systemHelp':'Help_Offline_App'}">
    <button class="btn btn-outstanding">View sample here</button>
</flx-navbutton>
```

En lugar de un evento onclick con:

```js
flexygo.nav.openPage('list','sysHelpItems','','null','popup',false,$(this),null,null,'{"sys-systemHelp":"Help\_Offline\_App"}');
```

## OpenPageName

<flx-navbutton class="button" type="openpage" pagetypeid="list" objectname="sysHelp" presets="{'sys-systemHelp':'Help_Offline_App'}">Haz click aquí para abrir la página por nombre</flx-navbutton>

Para **abrir** una página:

```html
<flx-navbutton class="test" type="openpagename" pagename="syspage-generic-admon" targetid="popup" excludehist="false">
     <div class="btn btn-outstanding">Haz clic aquí para abrir la página por nombre</div>
</flx-navbutton>
```

En lugar de un evento onclick con:
```js
flexygo.nav.openPageName('syspage-generic-admon','','',null,'popup',false,$(this));
```

También puedes abrir una página con un objeto, usa:

```html
<flx-navbutton class="test" type="openpagename" objectname="sysobject" objectwhere="ObjectName='sysactionlog'" pagename="syspage-generic-admon" targetid="popup" excludehist="false">
    <div class="btn btn-outstanding">Click here to Open Page by Name with Sysactionlog object</div>
</flx-navbutton>
```

En lugar de un evento onclick con:

```js
flexygo.nav.openPageName('syspage-generic-admon','sysobject','objectname=\\'sysactionlog\\'',null,'popup',false,$(this));
```

## ExecProcess

<flx-navbutton class="button" type="execprocess" processname="PrintPage">Haz click para ejecutar proceso PrintPage</flx-navbutton>

Para ejecutar un proceso usa:

```html
<flx-navbutton class="test" type="execprocess" processname="GoHome" targetid="popup" excludehist="false" showprogress="false">
      <button class="btn btn-outstanding">Click to execute PrintPage process</button>
</flx-navbutton>
```

En lugar de un evento onclick con:

```js
flexygo.nav.execProcess('PrintPage','','',null,null,'popup',false,$(this),false);
```

## ViewReport

<flx-navbutton class="button" type="viewReport" reportname="test_object_html_print" objectname="sysUsers">Click to view report</flx-navbutton>

Para ver un reporte usa:

```html
<flx-navbutton type="viewReport" reportname="reportname" objectname="yourobject" objectwhere="yourwhere" targetid="popup" excludehist="false">
       <button class="btn btn-outstanding">Click to view report</button>
</flx-navbutton>
```

En lugar de un evento onclick con:

```js
flexygo.nav.viewReport('reportname','','yourobject','yourwhere',null,null,'popup',false,$(this));
```

## OpenHelpId

[Haz click para abrir la ayuda](./){ .button }

Para abrir la ayuda usa:

```html
<flx-navbutton type="openhelpid" helpid="syshelp-navbutton" targetid="popup" excludehist="false">
       <button class="btn btn-outstanding">Click to open help</button>
</flx-navbutton>
```

En lugar de un evento onclick con:

```js
flexygo.nav.openHelpId('syshelp-navbutton','popup',false,$(this));
```

## OpenProcessParams

Para abrir la página de parámetros de proceso por defecto usa:

```html
<flx-navbutton type="openprocessparams" processname="testprocess" objectname="sysHelpItem" objectwhere="(HelpId='{{syshelp-navbutton}}')" defaults="{'Field':'{{value}}'}" targetid="popup" excludehist="false">
    <button class="btn btn-outstanding">Click to open process params page</button>
</flx-navbutton>
```

En lugar de un evento onclick con:

```js
flexygo.nav.openProcessParams('testprocess', 'sysHelpItem', '(HelpId=\\'{{syshelp-navbutton}}\\')', '{"Field":"{{value}}"}', 'popup', false, $(this));
```

## OpenProcessParamsPage

Para abrir la página de parámetros de proceso específica usa:

```html
<flx-navbutton type="openprocessparamspage" pagename="yourpagename" processname="testprocess" objectname="sysHelpItem" objectwhere="(HelpId='{{syshelp-navbutton}}')" defaults="{'Field':'{{value}}'}" targetid="popup" excludehist="false">
    <button class="btn btn-outstanding">Click to open specific process params page</button>
</flx-navbutton>
```

En lugar de un evento onclick con:

```js
flexygo.nav.openProcessParams('yourpagename','testprocess', 'sysHelpItem', '(HelpId=\\'{{syshelp-navbutton}}\\')', '{"Field":"{{value}}"}', 'popup', false, $(this));
```

## OpenReportParams

Para abrir la página de parámetros del reporte por defecto usa:

```html
<flx-navbutton type="openreportparams" reportname="testreport" reportwhere="" objectname="sysHelpItem" objectwhere="(HelpId='{{syshelp-navbutton}}')" defaults="{'Field':'{{value}}'}" targetid="popup" excludehist="false">
    <button class="btn btn-outstanding">Click to open report params page</button>
</flx-navbutton>
```

En lugar de un evento onclick con:

```js
flexygo.nav.openReportsParams('testreport', '', 'sysHelpItem', '(HelpId=\\'{{syshelp-navbutton}}\\')', '{"Field":"{{value}}"}', 'popup', false, $(this));
```

## OpenReportsParamsPage

Para abrir la página de parámetros específicos del reporte usa:

```html
<flx-navbutton type="openreportparamspage" pagename="yourpagename" reportname="testreport" reportwhere="" objectname="sysHelpItem" objectwhere="(HelpId='{{syshelp-navbutton}}')" defaults="{'Field':'{{value}}'}" targetid="popup" excludehist="false">
    <button class="btn btn-outstanding">Click to open specific report params page</button>
</flx-navbutton>
```

En lugar de un evento onclick con:

```js
flexygo.nav.openProcessParams('yourpagename','testreport','', 'sysHelpItem', '(HelpId=\\'{{syshelp-navbutton}}\\')', '{"Field":"{{value}}"}', 'popup', false, $(this));
```