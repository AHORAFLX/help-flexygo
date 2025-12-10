# Targets

Choose the projection screen.

## Current

Open on the current page.

![Current target](/assets/images/Targets/Current.png#only-light "Current target"){data-gallery="light"}
![Current target](/assets/images/Targets/Current_dark.png#only-dark "Current target"){data-gallery="dark"}

```js
flexygo.nav.openHelpId('syshelp-typography','current',false,$(this))
```

## Modal

Open in a modal window.  
Block all functions to concentrate focus on the modal window.

*   modal**{width}**x**{height}**
  
![Modal target](/assets/images/Targets/Modal.png#only-light "Modal target"){data-gallery="light"}
![Modal target](/assets/images/Targets/Modal_dark.png#only-dark "Modal target"){data-gallery="dark"}

```js
flexygo.nav.openHelpId('syshelp-typography','modal800x600',false,$(this))
```

## Popup

Open in a popup window.

*   popup**{width}**x**{height}**
  
![Popup target](/assets/images/Targets/Popup.png#only-light "Popup target"){data-gallery="light"}
![Popup target](/assets/images/Targets/Popup_dark.png#only-dark "Popup target"){data-gallery="dark"}

```js
flexygo.nav.openHelpId('syshelp-typography','popup800x600',false,$(this))
```

## Slide

Open in a slide window.

###### Two ways :

*   slide**{side}**x**{pixels}** : slide**right**x**800**
  
*   slide**{side}**x**{screen percentage}**% : slide**right**x**60**%
  
![Slide target](/assets/images/Targets/Slide.png#only-light "Slide target"){data-gallery="light"}
![Slide target](/assets/images/Targets/Slide_dark.png#only-dark "Slide target"){data-gallery="dark"}

```js
flexygo.nav.openHelpId('syshelp-typography','sliderightx60%',false,$(this))
```

## Menu

Open in a menu window.

*   menu**{width}**x**{height}**

![Menu target](/assets/images/Targets/Menu.png#only-light "Menu target"){data-gallery="light"}
![Menu target](/assets/images/Targets/Menu_dark.png#only-dark "Menu target"){data-gallery="dark"}

```js
flexygo.nav.openHelpId('syshelp-typography','menu600x400',false,$(this))
```