# Icons

Use **flexygo** icon's collection in your templates and object/collection configuration, custom controls.

Watch the following video for additional information:

## Basic Icons

icon icon-process

You can place **flexygo** icons nearly anywhere using the CSS Prefix flx-icon and the icon's name. **flexygo** is designed to be used with inline elements (we like the <i> tag for brevity, but using a <span> is more semantically correct).

```
<i class="flx-icon icon-process"></i> icon icon-process
```

If you change the font-size of the icon's container, the icon gets bigger. Same things goes for color, drop shadow, and anything else that gets inherited using CSS.

## Larger Icons

icon-lg

icon-2x

icon-3x

icon-4x

icon-5x

To increase icon sizes relative to their container, use the icon-lg (33% increase), icon-2x, icon-3x, icon-4x, or icon-5x classes.

```
<i class="flx-icon  icon-process icon-lg"></i> icon-lg  <i class="flx-icon  icon-process icon-2x"></i> icon-2x  <i class="flx-icon  icon-process icon-3x"></i> icon-3x  <i class="flx-icon  icon-process icon-4x"></i> icon-4x  <i class="flx-icon  icon-process icon-5x"></i> icon-5x
```

If your icons are getting chopped off on top and bottom, make sure you havesufficient line-height.

## Fixed Width Icons

  Women   Cliente   Pencil   Settings

Use icon-fw to set icons at a fixed width. Great to use when different icon widths throw off alignment. Especially usefull in things like nav lists & list groups.

```
<div class="list-group">  <a class="list-group-item" href="#"><i class="flx-icon icon-weman icon-fw"></i>&nbsp; Home</a>  <a class="list-group-item" href="#"><i class="flx-icon icon-client icon-fw"></i>&nbsp; Library</a>  <a class="list-group-item" href="#"><i class="flx-icon icon-pencil icon-fw"></i>&nbsp; Applications</a>  <a class="list-group-item" href="#"><i class="flx-icon icon-settings-2 icon-fw"></i>&nbsp; Settings</a>  </div>
```

## List Icons

*   List icons
*   can be used
*   as bullets
*   in lists

Use icon-ul and icon-li to easily replace deult bullets in unordered lists.

```
<ul class="icon-ul">  <li><i class="flx-icon icon-li icon-star"></i>List icons</li>  <li><i class="flx-icon icon-li icon-non-check"></i>can be used</li>  <li><i class="flx-icon icon-li icon-load icon-spin"></i>as bullets</li>  <li><i class="flx-icon icon-li icon-square"></i>in lists</li>  </ul>
```

## Bordered & Pulled Icons

…tomorrow we will run ster, stretch out our arms rther… And then one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past.

Use icon-border and icon-pull-right or icon-pull-left for easy pull quotes or article icons.

```
<i class="flx-icon icon-quote-left icon-3x icon-pull-left icon-border"></i>  ...tomorrow we will run ster, stretch out our arms rther...  And then one fine morning— So we beat on, boats against the  current, borne back ceaselessly into the past.
```

## Animated Icons

Use the icon-spin class to get any icon to rotate, and use icon-pulse to have it rotate with 8 steps. Works well with icon-star, icon-refresh, and icon-load.

```
<i class=" icon-spinner icon-spin"></i>  <i class="flx-icon icon-star icon-spin"></i>  <i class="flx-icon icon-refresh icon-spin"></i>  <i class="flx-icon icon-load icon-spin"></i>  <i class="flx-icon icon-load icon-pulse"></i>
```

Some browsers on some platforms have issues with animated icons resulting in a jittery wobbling effect. See [issue #671](https://github.com/FortAwesome/Font-Awesome/issues/671) for examples and possible workarounds.

CSS3 animations aren't supported in IE8 - IE9.

## Rotated & Flipped

  normal  
  icon-rotate-90  
  icon-rotate-180  
  icon-rotate-270  
  icon-flip-horizontal  
  icon-flip-vertical

To arbitrarily rotate and flip icons, use the icon-rotate-\* and icon-flip-\* classes.

```
<i class="flx-icon icon-image"></i> normal<br>  <i class="flx-icon icon-image icon-rotate-90"></i> icon-rotate-90<br>  <i class="flx-icon icon-image icon-rotate-180"></i> icon-rotate-180<br>  <i class="flx-icon icon-image icon-rotate-270"></i> icon-rotate-270<br>  <i class="flx-icon icon-image icon-flip-horizontal"></i> icon-flip-horizontal<br>  <i class="flx-icon icon-image icon-flip-vertical"></i> icon-flip-vertical 
```

## Zoom on Icons hover

Use the icon-zoom class to get any icon zoom on hover event.

```
<i class="flx-icon icon-wasp icon-2x icon-zoom-115"></i>
```

```
<i class="flx-icon icon-home icon-2x icon-zoom-125"></i>
```

```
<i class="flx-icon icon-chat icon-2x icon-zoom-15"></i>
```

```
<i class="flx-icon icon-black-cloud icon-2x icon-zoom-175"></i>
```

```
<i class="flx-icon icon-modules-settings icon-2x icon-zoom-2"></i>
```

## Stacked Icons

icon on right corner  
icon on center  
icon on center reversed  

To stack multiple icons, use the icon-stack class on the parent, the icon-stack-1x for the regularly sized icon, and icon-stack-2x for the larger icon. icon-inverse can be used as an alternative icon color. You can even throw [larger icon](#larger) classes on the parent to get further control of sizing. Use icon-stack-right to stack a smaller icon to the right of a bigger icon.

```
<span class="icon-stack ">   <i class="flx-icon icon-listbox icon-stack-2x text-muted"></i>   <i class="txt-outstanding icon-stack-right flx-icon icon-settings"></i>  </span> icon on right corner<br>    <span class="icon-stack ">   <i class="flx-icon icon-circle-1 icon-stack-2x text-muted"></i><i class="txt-outstanding icon-stack-1x flx-icon icon-twitter-icon"></i>  </span> icon on center<br>    <span class="icon-stack ">   <i class="flx-icon icon-circle-1 icon-stack-2x "></i><i class="icon-inverse icon-stack-1x flx-icon icon-twitter-icon"></i>  </span> icon on center<br>
```

## Tree Icons

Click on icon to collapse

Child Nodes

To convert a listview in to a tree, use the icon-tree-collapse class on the i element. You can then combine with an a or a button element with the data-toggle="collapse" option.

```
<div>    <small>   <a class="collapsed "data-toggle="collapse"data-target="#IdTree">    <i class="flx-icon tree-icon-toggle"></i>   </a>    </small>    <div class="row collapse "Id="IdTree">   <div class="Child Nodes"Child Nodes></div>    </div>  </div>
```