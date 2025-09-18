# Typography and Styles

### Headers and leads

| Label | Font | Examples |
| --- | --- | --- |
| <h1> | 'Helvetica Neue' 26px Light' | # <h1> h1. flexygo Heading </h1> |
| <h2> | 'Helvetica Neue' 22px Light' | ## <h2> h2. flexygo Heading </h2> |
| <h3> | 'Helvetica Neue' 20px Light' | ### <h3> h3. flexygo Heading </h3> |
| <h4> | 'Helvetica Neue' 18px Light' | #### <h4> h4. flexygo Heading </h4> |
| <h5> | 'Helvetica Neue' 17px Light' | ##### <h5> h5. flexygo Heading </h5> |
| <h6> | 'Helvetica Neue' 15px Bold' | ###### <h6> h6. flexygo Heading </h6> |

### Text and BG color options

| Text | Background | Buttons |
| --- | --- | --- |
| .txt-outstanding | .bg-outstanding | .btn .btn-outstanding |
| .txt-success | .bg-success | .btn .btn-success |
| .txt-warning | .bg-warning | .btn .btn-warning |
| .txt-primary | .bg-primary | .btn .btn-primary |
| .txt-danger | .bg-danger | .btn .btn-danger |
| .txt-notify | .bg-notify | .btn .btn-notify |
| .txt-tools | .bg-tools | .btn .btn-tools |
| .txt-info | .bg-info | .btn .btn-info |

### Alignment and text sizes

| Left, right and center alignment |     |
| --- |
| Left aligned text.<br><br>Center aligned text.<br><br>Right aligned text.<br><br>```<br><p class = "text-left">Left aligned text. </p> <p class = "text-center">Center aligned text.</p> <p class = "text-right">Right aligned text. </p><br>``` |

| Font size |     |
| --- |
| Take full control over the font by controling the size with the following CSS classes.<br><br>*   .size-l<br>*   .size-m<br>*   .size-s<br>*   .size-xs<br><br>```<br><span class="size-xs">.size-xs</span><br>``` |

| Others |     |     |     |
| --- |
| txt-muted is used to put text off, displays the text in a gray color that makes the text appear to be disabled.  <br>_Example:_<br><br>Color text muted<br><br>```<br><p class = "txt-muted">Color text muted</p><br>``` |
| Text decoration with .strike class  <br>_Example:_<br><br>Strike class<br><br>```<br><p class = "strike">Text decoration</p><br>``` |
| The <abbr> tag defines an abbreviation or an acronym.  <br>_Example:_  <br>I do HTML<br><br>```<br><p> I do  <abbr title = "Hypertext Markup Language"> HTML </p><br>``` |
| Secondary text of the heading <small>  <br>_Example:_<br><br>##### h5. flexygo Heading Secondary text<br><br>```<br><h5> h5. flexygo Heading <small> Secondary text </small></h5><br>``` |

### Description List

| Align terms and descriptions horizontally by using our grid system’s predefined classes |
| --- |
| ```<br><dl>  <dt>...</dt>  <dd>...</dd> </dl><br>```<br><br>Description lists<br><br>A description list is perfect for defining terms.<br><br>Euismod<br><br>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.<br><br>Donec id elit non mi porta gravida at eget metus.<br><br>Malesuada porta<br><br>Etiam porta sem malesuada magna mollis euismod.<br><br>Felis euismod semper eget lacinia<br><br>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.<br><br>Nulla sed leo.<br><br>Nulla sed leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos<br><br>Description lists<br><br>A description list is perfect for defining terms.<br><br>Euismod<br><br>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.<br><br>Donec id elit non mi porta gravida at eget metus.<br><br>Malesuada porta<br><br>Etiam porta sem malesuada magna mollis euismod.<br><br>Felis euismod semper eget lacinia<br><br>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.<br><br>Nulla sed leo.<br><br>Nulla sed leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos<br><br>```<br><dl class="dl-horizontal">   <dt>...</dt>   <dd>...</dd> </dl><br>``` |

### All List

| Unordered List |
| --- |
| ```<br><ul>  <li>...</li>  <li>...</li> </ul><br>```<br><br>*   **I am inside of a strong tag**<br>*   _I am Italic!_<br>    *   We can also be red<br>    *   Or green<br>    *   Even purple!<br>*   **_I am inside a strong and Italic tag, I may also break into a new line if squized_**<br>*   I am inside of a small tag |
| Order List |     |
| --- |
| 1.  Ordered List Item<br>2.  **Ordered List Item**<br>    *   Unstyled list with custom icon<br>    *   **Unstyled list with custom icon**<br>    *   _Unstyled list with custom icon_<br>3.  **_I am inside a strong and Italic tag, I may also break into a new line if squized_**<br>  <br>5.  I am a label<br><br>```<br><ol>   <li>...</li> </ol><br>``` |
| Inline / Piped List |     |
| --- |
| *   **Inline Item #1**<br>*   **Inline Item #2**<br>*   **_Inline Item #3_**<br><br>```<br><ul class="list-inline">   <li>...</li> </ul><br>```<br><br>*   **Piped Item #1**<br>*   **Piped Item #2**<br>*   **_Piped Item #3_**<br><br>```<br><ul class="list-piped">   <li>...</li> </ul><br>``` |     |

## Address

| Present contact information. Preserve formatting by ending all lines with <br> |
| --- |
| ```<br><address>   <strong>Ahora Freeware.</strong><br>   <i class="flx-icon icon-house"/> Polígono Industrial Camí del Mar,<br>   <i class="flx-icon icon-house-1"/> C/Ceramistes, 19, 46120 Alboraia,<br>   Valencia <br>   <abbr title="Phone">P:</abbr> (+34) 963 021 000 </address> <address>   <strong>Full Name</strong><br>   <i class="flx-icon icon-email-2"/><a href="mailto:#">   info@ahora.es</a> </address><br>```<br><br>**Ahora Freeware.**  <br>Polígono Industrial Camí del Mar,  <br>C/Ceramistes, 19, 46120 Alboraia,  <br>Valencia  <br>P: (+34) 963 021 000<br><br>**Full Name**  <br>_[info@ahora.es](mailto:#)_ |

## Quotes

| For quoting blocks of content from another source within your document. Wrap <blockquote> around any HTML as the quote. |
| --- |
| > Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>> <br>> Someone famous in Source Title<br><br>```<br><blockquote>   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>   <small>Someone famous in      <cite title="Source Title">Source Title</cite>   </small> </blockquote><br>```<br><br>> Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>> <br>> Someone famous in Source Title<br><br>```<br><blockquote class="pull-right">    ... </blockquote><br>``` |

## Own classes applicable to HTML elements

| Class | Description | Image |
| --- | --- | --- |
| .right | Move the item to the right |     |
| .left | Move the item to the right position. |
| .clear-both, clear | The box on which it is applied lowers until its upper edge is below the lower edge of any element floating left or right. |     |
| .docs-section | Apply a lower margin on the 60px element. |     |
| .nopadding | Removes margins from the element to the outside and from the element to the inside. |     |
| .padding-0  <br>.padding-xs  <br>.padding-s  <br>.padding-m  <br>.padding-l  <br>.padding-left-0/xs/s/m/l  <br>.padding-right-0/xs/s/m/l  <br>.padding-top-0/xs/s/m/l  <br>.padding-bottom-0/xs/s/m/l | The "padding-x" classes apply a space on all four sides of the element. Padding-0 apply 0px and Padding-l apply 15px.<br><br>The "padding-left-x" classes apply a space and size by the side indicated. Padding-left-0 apply 0 pixel to left space and Padding-top-l apply 15 pixel to top space. |
| .margin-0  <br>.margin-xs  <br>.margin-s  <br>.margin-m  <br>.margin-l  <br>.margin-left-0/xs/s/m/l  <br>.margin-right-0/xs/s/m/l  <br>.margin-top-0/xs/s/m/l  <br>.margin-bottom-0/xs/s/m/l | The "margin-x" classes apply a space on all four sides of the element. margin-0 apply 0px and margin-l apply 15px.<br><br>The "margin-left-x" classes apply a space and size by the side indicated. margin-left-0 apply 0 pixel to left space and margin-top-l apply 15 pixel to top space. |
| .last-module-margin | Add a margin of 100 pixels below the module to which this class is applied. |     |
| .inline | Causes an element to generate one or more inline boxes. |     |
| .block | Transforms an element into a block element, so they always start on a new line and always occupy all available space on the line, even if its contents do not occupy the entire site. |
| .inline-block | It has been possible for a long time to create a grid of boxes that fills the browser width and wraps nicely (when the browser is resized), by using the float property. However, the inline-block value of the display property makes this even easier.<br><br>Inline-block elements are like inline elements but they can have a width and a height. |
| .hidden  <br>.hidden-s  <br>.hidden-m  <br>.hidden-l | Is commonly used to hide and show elements without deleting and recreating them. Element with class hidden does not take up any space.<br><br>The "hidden-s" class will hide the element when the screen size is less than 728 pixels. With the other two classes it's the same depending on the screen size (m or l). |     |
| .show  <br>.show-s  <br>.show-m  <br>.show-l | Is commonly used to show and hide elements without deleting and recreating them. Element with class hidden does not take up any space.<br><br>The "show-s" class will hide the element when the screen size is 728 pixels or more. With the other two classes it's the same depending on the screen size (m or l). | \-  |
| .hidden-only-s  <br>.hidden-only-m  <br>.hidden-only-l  <br>.hidden-only-xl  <br>.show-only-s  <br>.show-only-m  <br>.show-only-l  <br>.show-only-xl | This classes are usefull if you just want to hide/or show something for specific sizes.<br><br>The "hide-only-s" will hide the element only if the screen size is in the s range (from 0 to the determined database s size). With the rest it will be the same, for example "hide-only-m" will hide element in screens larger than s size but smaller than m size. | \-  |
| .nolist | Doesn't display any bookmarks in an ordered or unordered list. |     |
| .clickable | When the pointer is positioned above the element, it adds a cursor icon. |     |
| .roundBorders | When established on modules their borders will be rounded. |     |
| .fullscreen | The element occupies 100% of the space of the window. |     |
| .show-empty-column | Add it to an element with bootstrap .col class to get an empty column and avoid the movement of the other columns. |     |
| .hover-underline | The element underlines when pointer it's hover. | \-  |
| .hover-bold | The element set bold style when pointer it's hover. | \-  |
| .hover-outstanding  <br>.hover-primary  <br>.hover-success  <br>.hover-info  <br>.hover-warning  <br>.hover-danger  <br>.hover-notify  <br>.hover-tools | The element set color style when pointer it's hover. | \-  |
| .grid-column-separator | Show column separator in edit grid control. |     |

# Color classes

[Click here](javascript:void(0);) to show sample code

## Contextual colors

**flexygo** has a predefined set of classes for coloring Text, Backgrounds and Boxes. Each of this color sets are defined under a series of names with their corresponding prefix for text, background or box.

### Outstanding

.txt-outstanding

.bg-outstanding

  

.box-outstanding  
Etiam porta sem malesuada magna mollis euismod.

### Primary

.txt-primary

.bg-primary

  

.box-primary  
Etiam porta sem malesuada magna mollis euismod.

### Success

.txt-success

.bg-success

  

.box-success  
Etiam porta sem malesuada magna mollis euismod.

### Info

.txt-info

.bg-info

  

.box-info  
Etiam porta sem malesuada magna mollis euismod.

### Warning

.txt-warning

.bg-warning

  

.box-warning  
Etiam porta sem malesuada magna mollis euismod.

### Danger

.txt-danger

.bg-danger

  

.box-danger  
Etiam porta sem malesuada magna mollis euismod.

### Notify

.txt-notify

.bg-notify

  

.box-notify  
Etiam porta sem malesuada magna mollis euismod.

### tools

.txt-tools

.bg-tools

  

.box-tools  
Etiam porta sem malesuada magna mollis euismod.

### Add icon and close button

× **Info!** Press close button.

  
Example

```
<div class="alert box-info">   <button class="close" data-dismiss="alert">x</button>   <i class="flx-icon icon-information-2 icon-lg"></i>   <span><strong>Info!</strong>Press close button. </span> </div >
```

## State colors

**flexygo** has a predefined set of classes for coloring controls on forms. Each of theese color sets are defined under a series of names and can be used on nay flx-control web component.

##### Input States

flx Input warning

flx Input Error

flx Input Success

flx Input info

flx Input outstanding

flx Input tools

flx Input notify

flx Input primary

Example

```
<flx-text type="text" iconclass="flx-icon icon-warning" name="warning" placeholder=".has-warning" required requiredmessage="You must enter a text"></flx-text>
```

```
<flx-text type="text" iconclass="flx-icon icon-close" name="error" placeholder=".has-error" required requiredmessage="You must enter a valid text"></flx-text>
```

```
<flx-text type="text" iconclass="flx-icon icon-accepted" name="success" placeholder=".has-success" required requiredmessage="You must enter a valid text"></flx-text>
```

## Sticky

### Sticky header

List header can now be set as sticky on modules.

To do so you just have to add class "sticky-header" to module as portayed in the image.

![Sticky toolbar](./img/Help/Typography/StickyHeader.png "Sticky toolbar")

Sticky header

### Sticky toolbar

Toolbar can now be set as sticky on modules.

To do so you just have to add class "sticky-toolbar" to module as portayed in the image.

![Sticky toolbar](./img/Help/Typography/StickyToolbar.png "Sticky toolbar")

Sticky toolbar

## Flipcard colors

**flexygo** has a predefined set of classes for defining flip cards backgrounds and text. Each of this color sets are defined under a series of names with their coresponding prefix for front and back.

### Outstanding

More info

*   Your items

### Primary

More info

*   Your items

### Success

More info

*   Your items

### Info

More info

*   Your items

### Warning

More info

*   Your items

### Danger

More info

*   Your items

### Tools

More info

*   Your items

### Notify

More info

*   Your items

```
<div class = "card card-notify">   <div class = "flip-card" onclick = "jQuery(this).toggleClass('flip-card-reverse');">     <div class = "flip-card-flipper">            <div class = "flip-card-front">         <div class = "admin">           <h3>Notify</h3>           <span class = "main-icon"><i class = "flx-icon flx-icon icon-chat-offline icon-5x"></i></span>         </div>         <div class = "more-info"><i class = "flx-icon icon-arrow-head-2 "></i>More Info</div>       </div>        <div class = "flip-card-back">         <div class = "admin reverse">           <div class = "child-nodes admin-back">             <ul><li><span>Your Items </span></li></ul>           </div>           <div class = "back">             <i class = "flx-icon icon-arrow-head-2 icon-rotate-180">Your Items </i>           </div>         </div>       </div>            </div>   </div> </div>
```

×

#### Right and left position

![](./img/help/Typography/rightLeft_float.jpg)

×

#### Clear and clear both

![](./img/help/Typography/clearBoth.jpg)

×

#### Docs Section

![](./img/help/Typography/docSection.jpg)

×

#### Padding and Margin

![](./img/help/Typography/padding.jpg)

×

#### Last Module Margin

![](./img/help/Typography/LastModuleMargin.jpg)

×

#### Inline, block, inline-block

![](./img/help/Typography/inlineBlock.jpg)

×

#### Hidden

![](./img/help/Typography/hidden.jpg)

×

#### No List

![](./img/help/Typography/nolist.jpg)

×

#### Clickable

![](./img/help/Typography/cursorPointer.jpg)

×

#### Round Borders

![](./img/help/Typography/cleanRounded.png)

×

#### Fullscreen

![](./img/help/Typography/fullScreen.jpg)

×

#### Show Empty Column

![](./img/help/Typography/ShowEmptyColumn.png)

×

#### Own classes applicable to HTML elements

×

#### Grid- Column Separator

![](./img/help/Typography/ColumnSeparator.png)