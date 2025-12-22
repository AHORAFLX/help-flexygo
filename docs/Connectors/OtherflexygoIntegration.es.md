# Integración con Flexygo { .flx-title-with-image }

![flexygo](/docs_assets/images/FlexygoLogo.png){ .flx-image-of-title }

En caso de necesitar abrir páginas de aplicaciones **flexygo** externas desde tu **flexygo** actual, puedes conectar ambas apps utilizando el conector especialmente diseñado para permitir la integración entre dos aplicaciones **flexygo** diferentes.

## Configuración

1.  Primero debes registrar la aplicación externa que quieres abrir usando esta ventana de configuración:  <flx-navbutton class="link" type="openpage" pagetypeid="list" objectname="sysFlexygoConnectors" showprogress="false">connect flexygo application</flx-navbutton>.  **App name** es el nombre del proyecto de tu segunda aplicación **flexygo** (2) y **external url** es la URL de esa segunda app.

    ![Connected flexygo](/docs_assets/images/FlexygoConnector/ConnectedFlexygo.PNG "Image 1. Connected flexygo")

2.  En tu aplicación externa **flexygo** (no en esta), debes autorizar esta app:
    * Abre tu aplicación externa y ve a **Admin Work Area > Security > WebAPI**, luego pulsa **Authorized Apps**.
    * Crea una nueva app autorizada usando el nombre del proyecto actual como App ID.  
      **App ID** es el nombre del proyecto de tu primera aplicación **flexygo** (1) y **return token url** es la URL del token web configurada en el paso anterior en tu flexygo principal (1).

    ![Authorized Apps](/docs_assets/images/FlexygoConnector/AuthorizedApps.PNG "Image 2. Authorized Apps")

## Navegación con integración Flexygo

Puedes usar el componente **nav-button** o las funciones JS **flexygo.nav.external** para acceder a páginas externas de **flexygo**, indicando el nombre de la app externa.

### Ir a Home

Para ir a la página principal:

```html
<flx-navbutton type="externalhome" appname="myflexygo" targetid="current">
	<button class="btn btn-outstanding">View sample here</button>
</flx-navbutton>
```

Equivalente en onclick:

```javascript
flexygo.nav.external.goHome('myflexygo','current');
```

### Abrir Página

Para editar un objeto:

```html
<flx-navbutton type="externalopenpage" appname="myflexygo" pagetypeid="edit" objectname="sysHelpItem" objectwhere="(HelpId='{{syshelp-navbutton}}')" defaults="{'Field':'{{value}}','DateField':'{{value|date:YYYY-MM-DD}}'}" targetid="current">
    <button class="btn btn-outstanding">View sample here</button>
</flx-navbutton>
```

Equivalente en onclick:

```javascript
flexygo.nav.external.openPage(
  'myflexygo',
  'edit',
  'sysHelpItem',
  '(HelpId=\\'syshelp-navbutton\\')',
  '{"Field":"{{value}}","DateField":"{{value|date:YYYY-MM-DD}}"}',
  'current',
  $(this)
);
```

Para visualizar un objeto:

```html
<flx-navbutton type="externalopenpage" appname="myflexygo" pagetypeid="view" objectname="sysHelpItem" objectwhere="(HelpId='syshelp-navbutton')" defaults="" targetid="popup">
	<button class="btn btn-outstanding">View sample here</button>
</flx-navbutton>
```

Equivalente en onclick:

```javascript
flexygo.nav.external.openPage(
  'myflexygo',
  'view',
  'sysHelpItem',
  '(HelpId=\\'syshelp-navbutton\\')',
  'null',
  'popup',
  $(this)
);
```

Para listar una colección:

```html
<flx-navbutton type="externalopenpage" appname="myflexygo" pagetypeid="list" objectname="sysHelp" objectwhere="" defaults="" targetid="popup">
	<button class="btn txt-notify">View sample here</button>
</flx-navbutton>
```

Equivalente en onclick:

```javascript
flexygo.nav.external.openPage(
  'myflexygo',
  'list',
  'sysHelpItems',
  '',
  'null',
  'popup',
  $(this)
);
```

### Abrir Página por Nombre

Para abrir una página concreta:

```html
<flx-navbutton class="test" type="externalopenpagename" appname="myflexygo" pagename="syspage-generic-admon" targetid="popup">
	<div class="clickable txt-outstanding">Click here to Open Page by Name</div>
</flx-navbutton>
```

Equivalente en onclick:

```javascript
flexygo.nav.external.openPageName(
  'myflexygo',
  'syspage-generic-admon',
  '',
  '',
  null,
  'popup',
  $(this)
);
```

Para abrir una página con un objeto:

```html
<flx-navbutton class="test" type="externalopenpagename" appname="myflexygo" objectname="sysobject" objectwhere="ObjectName='sysactionlog'" pagename="syspage-generic-admon" targetid="popup">
	<div class="clickable txt-outstanding">Click here to Open Page by Name with Sysactionlog object</div>
</flx-navbutton>
```

Equivalente en onclick:

```javascript
flexygo.nav.external.openPageName(
  'myflexygo',
  'syspage-generic-admon',
  'sysobject',
  'objectname=\\'sysactionlog\\'',
  null,
  'popup',
  $(this)
);
```