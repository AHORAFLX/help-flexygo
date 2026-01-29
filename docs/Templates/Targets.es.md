# Objetivos

Elige la pantalla de proyección.

## Actual

Abrir en la página actual.

![Current target](../docs_assets/images/Targets/Current.png#only-light "Current target"){data-gallery="light"}
![Current target](../docs_assets/images/Targets/Current_dark.png#only-dark "Current target"){data-gallery="dark"}

```js
flexygo.nav.openHelpId('syshelp-typography','current',false,$(this))
```

## Modal

Abrir en una ventana modal.

Bloquear todas las funciones para concentrar el enfoque en la ventana modal.

*   modal**{width}**x**{height}**
  
![Modal target](../docs_assets/images/Targets/Modal.png#only-light "Modal target"){data-gallery="light"}
![Modal target](../docs_assets/images/Targets/Modal_dark.png#only-dark "Modal target"){data-gallery="dark"}

```js
flexygo.nav.openHelpId('syshelp-typography','modal800x600',false,$(this))
```

## Popup

Abrir en una ventana emergente.

*   popup**{width}**x**{height}**
  
![Popup target](../docs_assets/images/Targets/Popup.png#only-light "Popup target"){data-gallery="light"}
![Popup target](../docs_assets/images/Targets/Popup_dark.png#only-dark "Popup target"){data-gallery="dark"}

```js
flexygo.nav.openHelpId('syshelp-typography','popup800x600',false,$(this))
```

## Deslizar

Abrir en una ventana de deslizar.

###### Two ways :

*   slide**{lado}**x**{píxeles}** : slide**right**x**800**
  
*   slide**{lado}**x**{porcentaje de pantalla}**% : slide**right**x**60**%
  
![Slide target](../docs_assets/images/Targets/Slide.png#only-light "Slide target"){data-gallery="light"}
![Slide target](../docs_assets/images/Targets/Slide_dark.png#only-dark "Slide target"){data-gallery="dark"}

```js
flexygo.nav.openHelpId('syshelp-typography','sliderightx60%',false,$(this))
```

## Menú

Abrir en una ventana de menú.

*   menu**{ancho}**x**{alto}**

![Menu target](../docs_assets/images/Targets/Menu.png#only-light "Menu target"){data-gallery="light"}
![Menu target](../docs_assets/images/Targets/Menu_dark.png#only-dark "Menu target"){data-gallery="dark"}

```js
flexygo.nav.openHelpId('syshelp-typography','menu600x400',false,$(this))
```