# Opciones de navegación offline

## Antes de empezar

Debemos distinguir entre dos maneras diferentes de navegación **Ir** y **Transferir**.

*    **Ir (go)** deja un rastro para que podamos ir hacia atrás y hacia adelante
*    **Transferir (transfer)** no lo hace, lo que significa que reemplaza una página por otra en el historial de navegación


Al usar ir, las páginas navegadas permanecerán en el componente DOM [ion-nav](https://ionicframework.com/docs/api/nav) solo cubiertas con un atributo aria-hidden. Estas páginas serán eliminadas del DOM una vez el usuario regrese de ellas o si navega con una transferencia desde ellas, como se especificó antes.

La misma página con y sin un where se detecta como diferentes. Por lo tanto, podría haber una situación en la que la misma página esté instanciada dos veces en el DOM.
{: .flx-warning-card }

## Consejos

Este comportamiento hace que la navegación sea más rápida, pero puede causar que algunos desarrolladores cometan errores al interactuar con las páginas, así que aquí hay algunos consejos:

```js
$( 'flx-list:not(\[aria-hidden\])' )\[ 0 )\].refresh());
```

Haz

```js
$('flx-list')\[0\].refresh();
```

No hagas

Por lo general, cuando necesitas refrescar un componente flexygo en la aplicación, se utiliza un simple selector jquery, pero esto podría crear un conflicto entre el componente que deseas refrescar y los que estaban previamente navegando a los que deseas refrescar. Así que para evitar eso, podrías agregar un ":not([aria-hidden])" al selector que ignorará los ocultos.

```js
$('flx-list\[page-name="My\_Page"\]')\[0\].refresh();
```

Haz

```js
$('flx-list')\[0\].refresh();
```

No hagas

Al modificar una página oculta, podría ocurrir algo similar al ejemplo anterior, pero en este caso obtener el atributo aria-hidden no resolvería el problema. Por lo tanto, al intentar recargar un componente oculto, se recomienda agregar el page-name al selector.

Sabiendo que la misma página abierta con y sin una cláusula "donde" se detectan como páginas diferentes, si alguna vez sucede esta extraña situación, solo debes verificar los atributos where en el selector.
{: .flx-warning-card }

## Opciones de IR

Todas las opciones siguientes pueden ser incluidas en un evento **onclick** de cualquiera de tus elementos HTML.

### Página de sincronización

```js
flexygo.nav.goSync();
```

### Página de inicio

```js
flexygo.nav.goHome();
```

### Volver

```js
flexygo.nav.goBack();
```

### Página de login

```js
flexygo.nav.goLogin();
```

### Lista de objetos

```js
flexygo.nav.goList(objectname, pagename, filter, defaults);
```

###### Ejemplo:

```js
flexygo.nav.goList('Offline_Action', 'Offline_Action_List',{{objIdent|JS}}, null);
```

### Vista de objeto

```js
flexygo.nav.goView(objectname, pagename, filter, defaults);
```

###### Ejemplo:

```js
flexygo.nav.goView('Offline_Action', 'Offline_Action_View',{{objIdent|JS}}, null);
```

### Edición de objeto

```js
flexygo.nav.goEdit(objectname, pagename, filter, defaults);
```

###### Ejemplo:

```js
flexygo.nav.goEdit('Offline_Action', '',{{objIdent|JS}}, null);
```

### Insertar nuevo objeto

```js
flexygo.nav.goInsert(objectname, pagename, defaults);
```

###### Ejemplo:

```js
flexygo.nav.goInsert('Offline_Action', '','{"EmployeeId":"{{currentReference}}"}');
```

### Galería de imágenes relacionada

```js
flexygo.nav.goGallery(objectname, objectId);
```

###### Ejemplo:

```js
flexygo.nav.goGallery('Offline_Action', 1);
```

### Documentos relacionados

```js
flexygo.nav.goDocuments(objectname, objectId);
```

###### Ejemplo:

```js
flexygo.nav.goDocuments('Offline_Action', 1);
```

## Opciones de transferencia

### Lista de objetos

```js
flexygo.nav.transferList(objectname, pagename, filter, defaults);
```

###### Ejemplo:

```js
flexygo.nav.transferList('Offline_Action', 'Offline_Action_List',{{objIdent|JS}}, null);
```

### Vista de objeto

```js
flexygo.nav.transferView(objectname, pagename, filter, defaults);
```

###### Ejemplo:

```js
flexygo.nav.transferView('Offline_Action', 'Offline_Action_View',{{objIdent|JS}}, null);
```

### Edición de objeto

```js
flexygo.nav.transferEdit(objectname, pagename, filter, defaults);
```

###### Ejemplo:

```js
flexygo.nav.transferEdit('Offline_Action', '',{{objIdent|JS}}, null);
```

### Insertar nuevo objeto

```js
flexygo.nav.transferInsert(objectname, pagename, defaults);
```

###### Ejemplo:

```js
flexygo.nav.transferInsert('Offline_Action', '','{"EmployeeId":"{{currentReference}}"}');
```

### Galería de imágenes relacionada

```js
flexygo.nav.transferGallery(objectname, objectId);
```

###### Ejemplo:

```js
flexygo.nav.transferGallery('Offline_Action', 1);
```

### Documentos relacionados

```js
flexygo.nav.transferDocuments(objectname, objectId);
```

###### Ejemplo:

```js
flexygo.nav.transferDocuments('Offline_Action', 1);
```

## Modal

### Lista de objetos

```js
flexygo.nav.modalList(objectname, pagename, filter, defaults);
```

###### Ejemplo:

```js
flexygo.nav.modalList('Offline_Action', 'Offline_Action_List',{{objIdent|JS}}, null);
```

### Vista de objeto

```js
flexygo.nav.modalView(objectname, pagename, filter, defaults);
```

###### Ejemplo:

```js
flexygo.nav.modalView('Offline_Action', 'Offline_Action_View',{{objIdent|JS}}, null);
```

### Edición de objeto

```js
flexygo.nav.modalEdit(objectname, pagename, filter, defaults);
```

###### Ejemplo:

```js
flexygo.nav.modalEdit('Offline_Action', '',{{objIdent|JS}}, null);
```

### Insertar nuevo objeto

```js
flexygo.nav.modalInsert(objectname, pagename, defaults);
```

###### Ejemplo:

```js
flexygo.nav.modalInsert('Offline_Action', '','{"EmployeeId":"{{currentReference}}"}');
```

## Tokens útiles

En el parámetro **filter** puedes usar `{{objIdent|JS}}` para autogenerar la identidad del objeto.  
Puedes referenciar recursos previamente subidos con `{{Filename.png|file}}`.

## Navegación online

### Página principal online

```js
flexygo.navOnline.goHome();
```    
    
### Insertar objeto (requerido: *objectName*)

```js
flexygo.navOnline.goInsert(objectName, navigateFun, defaults, filterValues);
```

### Lista de objetos (requerido: *objectName*)

```js
flexygo.navOnline.goList(objectName, navigateFun, defaults, objectWhere, filterValues);
```

### Editar objeto (requeridos: *objectName*, *objectWhere*)

```js
flexygo.navOnline.goEdit(objectName, objectWhere, navigateFun, defaults, filterValues);
```

### Ver objeto (requeridos: *objectName*, *objectWhere*)

```js
flexygo.navOnline.goView(objectName, objectWhere, navigateFun , defaults, filterValues);
```
    
### URL externa (requerido: *url*)

```js
flexygo.navOnline.goExternalURL(url);
```
