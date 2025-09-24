# Targets

Choose the projection screen.

## Current

Open on the current page.

```
flexygo.nav.openHelpId('syshelp-typography','current',false,$(this))
```

## Modal

Open in a modal window.  
Block all functions to concentrate focus on the modal window.

*   modal**{width}**x**{height}**
  

```
flexygo.nav.openHelpId('syshelp-typography','modal800x600',false,$(this))
```

## Popup

Open in a popup window.

*   popup**{width}**x**{height}**
  

```
flexygo.nav.openHelpId('syshelp-typography','popup800x600',false,$(this))
```

## Slide

Open in a slide window.

###### Two ways :

*   slide**{side}**x**{pixels}** : slide**right**x**800**
  
*   slide**{side}**x**{screen percentage}**% : slide**right**x**60**%
  

```
flexygo.nav.openHelpId('syshelp-typography','sliderightx60%',false,$(this))
```

## Menu

Open in a menu window.

*   menu**{width}**x**{height}**
  

```
flexygo.nav.openHelpId('syshelp-typography','menu600x400',false,$(this))
```