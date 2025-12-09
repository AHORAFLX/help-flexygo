# Typography and Styles

## Headers and leads

| Label | Font | Examples |
| --- | --- | --- |
|  &lt;h1&gt; | 'Helvetica Neue' 26px Light' | <h1> &lt;h1&gt; h1. flexygo Heading &lt;/h1&gt; </h1> |
| &lt;h2&gt; | 'Helvetica Neue' 22px Light' | <h2> &lt;h2&gt; h2. flexygo Heading &lt;/h2&gt; </h2> |
| &lt;h3&gt; | 'Helvetica Neue' 20px Light' | <h3> &lt;h3&gt; h3. flexygo Heading &lt;/h3&gt; </h3> |
| &lt;h4&gt; | 'Helvetica Neue' 18px Light' | <h4> &lt;h4&gt; h4. flexygo Heading &lt;/h4&gt; </h4> |
| &lt;h5&gt; | 'Helvetica Neue' 17px Light' | <h5> &lt;h5&gt; h5. flexygo Heading &lt;/h5&gt; </h5> |
| &lt;h6&gt; | 'Helvetica Neue' 15px Bold' | <h6> &lt;h6&gt; h6. flexygo Heading &lt;/h6&gt; </h6> |

## Text and BG color options

| Text | Background | Buttons |
| --- | --- | --- |
| <span class="txt-outstanding">.txt-outstanding </span> | <span class="bg-outstanding"> .bg-outstanding </span> | <span class="btn btn-outstanding"> .btn .btn-outstanding </span> |
| <span class="txt-success">.txt-success </span> | <span class="bg-success"> .bg-success </span> | <span class="btn btn-success"> .btn .btn-success </span> |
| <span class="txt-warning">.txt-warning </span> | <span class="bg-warning"> .bg-warning </span> | <span class="btn btn-warning"> .btn .btn-warning </span> |
| <span class="txt-primary">.txt-primary </span> | <span class="bg-primary"> .bg-primary </span> | <span class="btn btn-primary"> .btn .btn-primary </span> |
| <span class="txt-danger">.txt-danger </span> | <span class="bg-danger"> .bg-danger </span> | <span class="btn btn-danger"> .btn .btn-danger </span> |
| <span class="txt-notify">.txt-notify </span> | <span class="bg-notify"> .bg-notify </span> | <span class="btn btn-notify"> .btn .btn-notify </span> |
| <span class="txt-tools">.txt-tools </span> | <span class="bg-tools"> .bg-tools </span> | <span class="btn btn-tools"> .btn .btn-tools </span> |
| <span class="txt-info">.txt-info </span> | <span class="bg-info"> .bg-info </span> | <span class="btn btn-info"> .btn .btn-info </span> |

## Alignments

<p style="text-align: left;">Left aligned text.</p>
<p style="text-align: center;">Center aligned text.</p>
<p style="text-align: right;">Right aligned text.</p>

```html
<p class="text-left">Left aligned text. </p>
<p class="text-center">Center aligned text.</p>
<p class="text-right">Right aligned text. </p>
```

## Font sizes

Take full control over the font by controling the size with the following CSS classes.

<p>
    <span class="size-l">.size-l</span>
    <span class="size-m">.size-m</span>
    <span class="size-s">.size-s</span>
    <span class="size-xs">.size-xs</span>
</p>

```html
<p class="size-l">.size-l</p>
<p class="size-m">.size-m</p>
<p class="size-s">.size-s</p>
<p class="size-xs">.size-xs</p>
```

## Muted text

To put text off **txt-muted** is used, displays the text in a gray color that makes the text appear to be disabled.

Color text muted 
{ .txt-muted }

```html
<p class = "txt-muted">Color text muted</p>
```

## Strikethrough text

Text decoration with **strike** class.

~~Strike class~~

```html
<p class = "strike">Text decoration</p>
```

## Acronyms

The **<abbr\>** tag defines an abbreviation or an acronym.

<p> I do  <abbr title = "Hypertext Markup Language"> HTML </p>

```html
<p> I do  <abbr title = "Hypertext Markup Language"> HTML </p>
```

## Secondary text

Secondary text of the heading **<small\>**.

<h4> h4. flexygo Heading <small> Secondary text </small></h4>

```html
<h4> h5. flexygo Heading <small> Secondary text </small></h4>
```
## Description List

Align terms and descriptions horizontally by using our grid system’s predefined classes.

<dl>
	<dt>My description list</dt>
	<dd>My description</dd>
    <dt>My description list 2</dt>
	<dd>My description 2</dd>
</dl>

```html
<dl>
	<dt>My description list</dt>
	<dd>My description</dd>
    <dt>My description list 2</dt>
	<dd>My description 2</dd>
</dl>
```

### Horizontal

You can use the **dl-horizontal** class to make dt and dd aligned with its pair one net to the other.

<dl class="dl-horizontal">
	<dt>My description list</dt>
	<dd>My description</dd>
    <dt>My description list 2</dt>
	<dd>My description 2</dd>
</dl>

```html
<dl class="dl-horizontal">
	<dt>My description list</dt>
	<dd>My description</dd>
    <dt>My description list 2</dt>
	<dd>My description 2</dd>
</dl>
```

## Lists

There are multiple types of easy to do lists using directly html with no CSS.

### Unordered

This will add the list spacing and add a dot next to every element of the list.

<ul>
	<li>Lettuce</li>
	<li>Tomatoes</li>
    <li>Rice</li>
</ul>

```html
<ul>
	<li>Lettuce</li>
	<li>Tomatoes</li>
    <li>Rice</li>
</ul>
```

### Ordered

This will add the list spacing and add each element its correspondent number.

<ol>
  <li>Cook the vegetables</li>
  <li>Add the rice and water</li>
  <li>When water has been absorved serve and enjoy your meal</li>
</ol>

```html
<ol>
  <li>Cook the vegetables</li>
  <li>Add the rice and water</li>
  <li>When water has been absorved serve and enjoy your meal</li>
</ol>
```

### Inline

Create a list all in one line.

<ul class="list-inline text-center">
  <li>The legend of Zelda</li>
  <li>The last of us</li>
  <li>Halo</li>
</ul>

```html
<ul class="list-inline text-center">
  <li>The legend of Zelda</li>
  <li>The last of us</li>
  <li>Halo</li>
</ul>
```

### Piped

Create a list all in one line but separated using pipes.

<ul class="list-piped">
  <li>The legend of Zelda</li>
  <li>The last of us</li>
  <li>Halo</li>
</ul>

```html
<ul class="list-piped">
  <li>The legend of Zelda</li>
  <li>The last of us</li>
  <li>Halo</li>
</ul>
```

## Address

Present contact information. Preserve formatting by ending all lines with **<br\>**.
<address>
  <strong>Ahora Freeware.</strong><br>
  Polígono Industrial Camí del Mar,<br>
  C/Ceramistes, 19, 46120 Alboraia,<br>
  Valencia <br>
  <abbr title="Phone">P:</abbr> (+34) 963 021 000
</address>


```html
<address>
  <strong>Ahora Freeware.</strong><br>
  <i class="flx-icon icon-house"/> Polígono Industrial Camí del Mar,<br>
  <i class="flx-icon icon-house-1"/> C/Ceramistes, 19, 46120 Alboraia,<br>
  Valencia <br>
  <abbr title="Phone">P:</abbr> (+34) 963 021 000
</address>
```

## Quotes

For quoting blocks of content from another source within your document. Wrap **<blockquote\>** around any HTML as the quote.

<blockquote>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <small>Someone famous in 
    <cite title="Source Title">Source Title</cite>
  </small>
</blockquote>

```html
<blockquote>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <small>Someone famous in 
    <cite title="Source Title">Source Title</cite>
  </small>
</blockquote>
```

## Flexygo classes applicable to HTML elements

| Class | Description | Image |
| --- | --- | --- |
| **.right** | Move the item to the right | <fh-modal class="link" modal_id="fhmodal_right_left" modal_title="Right and left position">Example</fh-modal> |
| **.left** | Move the item to the right position. | <fh-modal class="link" modal_id="fhmodal_right_left" modal_title="Right and left position">Example</fh-modal> |
| **.clear-both**, **.clear** | The box on which it is applied lowers until its upper edge is below the lower edge of any element floating left or right. | <fh-modal class="link" modal_id="fhmodal_clear" modal_title="Clear and clear both">Example</fh-modal> |
| **.docs-section** | Apply a lower margin on the 60px element. | <fh-modal class="link" modal_id="fhmodal_docs" modal_title="Docs section">Example</fh-modal>
| **.nopadding** | Removes margins from the element to the outside and from the element to the inside. | <fh-modal class="link" modal_id="fhmodal_padding_margin" modal_title="Paddings and margins">Example</fh-modal> |
| **.padding-0**  <br> **.padding-xs**  <br> **.padding-s**  <br> **.padding-m**  <br> **.padding-l**  <br> **.padding-left-0/xs/s/m/l**  <br> **.padding-right-0/xs/s/m/l**  <br>.**padding-top-0/xs/s/m/l**  <br>**.padding-bottom-0/xs/s/m/l** | The "padding-x" classes apply a space on all four sides of the element. Padding-0 apply 0px and Padding-l apply 15px.<br><br>The "padding-left-x" classes apply a space and size by the side indicated. Padding-left-0 apply 0 pixel to left space and Padding-top-l apply 15 pixel to top space. |  <fh-modal class="link" modal_id="fhmodal_padding_margin" modal_title="Paddings and margins">Example</fh-modal> |
| **.margin-0**  <br> **.margin-xs**  <br> **.margin-s**  <br> **.margin-m**  <br> **.margin-l**  <br> **.margin-left-0/xs/s/m/l**  <br> **.margin-right-0/xs/s/m/l**  <br>.**margin-top-0/xs/s/m/l**  <br> **.margin-bottom-0/xs/s/m/l** | The "margin-x" classes apply a space on all four sides of the element. margin-0 apply 0px and margin-l apply 15px.<br><br>The "margin-left-x" classes apply a space and size by the side indicated. margin-left-0 apply 0 pixel to left space and margin-top-l apply 15 pixel to top space. |  <fh-modal class="link" modal_id="fhmodal_padding_margin" modal_title="Paddings and margins">Example</fh-modal> |
| **.last-module-margin** | Add a margin of 100 pixels below the module to which this class is applied. | <fh-modal class="link" modal_id="fhmodal_last_margin" modal_title="Last module margin">Example</fh-modal> |
| **.inline** | Causes an element to generate one or more inline boxes. | <fh-modal class="link" modal_id="fhmodal_inline_block" modal_title="Inline, block, inline-block">Example</fh-modal> |
| **.block** | Transforms an element into a block element, so they always start on a new line and always occupy all available space on the line, even if its contents do not occupy the entire site. | <fh-modal class="link" modal_id="fhmodal_inline_block" modal_title="Inline, block, inline-block">Example</fh-modal> |
| **.inline-block** | It has been possible for a long time to create a grid of boxes that fills the browser width and wraps nicely (when the browser is resized), by using the float property. However, the inline-block value of the display property makes this even easier.<br><br>Inline-block elements are like inline elements but they can have a width and a height. | <fh-modal class="link" modal_id="fhmodal_inline_block" modal_title="Inline, block, inline-block">Example</fh-modal> |
| **.hidden**  <br> **.hidden-s**  <br> **.hidden-m**  <br> **.hidden-l** | Is commonly used to hide and show elements without deleting and recreating them. Element with class hidden does not take up any space.<br><br>The "hidden-s" class will hide the element when the screen size is less than 728 pixels. With the other two classes it's the same depending on the screen size (m or l). | <fh-modal class="link" modal_id="fhmodal_hidden" modal_title="Hidden">Example</fh-modal> |
| **.show**  <br> **.show-s**  <br> **.show-m**  <br> **.show-l** | Is commonly used to show and hide elements without deleting and recreating them. Element with class hidden does not take up any space.<br><br>The "show-s" class will hide the element when the screen size is 728 pixels or more. With the other two classes it's the same depending on the screen size (m or l). | \-  |
| **.hidden-only-s**  <br> **.hidden-only-m**  <br> **.hidden-only-l**  <br> **.hidden-only-xl**  <br> **.show-only-s**  <br> **.show-only-m**  <br> **.show-only-l**  <br>.**show-only-xl** | This classes are usefull if you just want to hide/or show something for specific sizes.<br><br>The "hide-only-s" will hide the element only if the screen size is in the s range (from 0 to the determined database s size). With the rest it will be the same, for example "hide-only-m" will hide element in screens larger than s size but smaller than m size. | \-  |
| **.nolist** | Doesn't display any bookmarks in an ordered or unordered list. | <fh-modal class="link" modal_id="fhmodal_no_list" modal_title="No list">Example</fh-modal> |
| **.clickable** | When the pointer is positioned above the element, it adds a cursor icon. | <fh-modal class="link" modal_id="fhmodal_clickable" modal_title="Clickable">Example</fh-modal> |
| **.roundBorders** | When established on modules their borders will be rounded. | <fh-modal class="link" modal_id="fhmodal_round" modal_title="Round borders">Example</fh-modal> |
| **.fullscreen** | The element occupies 100% of the space of the window. | <fh-modal class="link" modal_id="fhmodal_fullscreen" modal_title="Fullscreen">Example</fh-modal> |
| **.show-empty-column** | Add it to an element with bootstrap .col class to get an empty column and avoid the movement of the other columns. | <fh-modal class="link" modal_id="fhmodal_show_empty" modal_title="Show Empty Column">Example</fh-modal> |
| **.hover-underline** | The element underlines when pointer it's hover. | \-  |
| **.hover-bold** | The element set bold style when pointer it's hover. | \-  |
| **.hover-outstanding**  <br>.hover-primary  <br>.hover-success  <br>.hover-info  <br>.hover-warning  <br>.hover-danger  <br>.hover-notify  <br>.hover-tools | The element set color style when pointer it's hover. | \-  |
| **.grid-column-separator** | Show column separator in edit grid control. | <fh-modal class="link" modal_id="fhmodal_column_separator" modal_title="Grid Column Separator">Example</fh-modal> |

## Contextual colors

Flexygo has a predefined set of classes for coloring Text, Backgrounds and Boxes. Each of this color sets are defined under a series of names with their corresponding prefix for text, background or box.

### Outstanding

.txt-outstanding
{ .txt-outstanding }

.bg-outstanding
{ .bg-outstanding }

.box-outstanding
{ .box-outstanding }

### Primary

.txt-primary
{ .txt-primary }

.bg-primary
{ .bg-primary }

.box-primary
{ .box-primary }

### Success

.txt-success
{ .txt-success }

.bg-success
{ .bg-success }

.box-success 
{ .box-success }

### Info

.txt-info
{ .txt-info }

.bg-info
{ .bg-info }

.box-info
{ .box-info }

### Warning

.txt-warning
{ .txt-warning }

.bg-warning
{ .bg-warning }

.box-warning  
{ .box-warning }

### Danger

.txt-danger
{ .txt-danger }

.bg-danger
{ .bg-danger }

.box-danger  
{ .box-danger }

### Notify

.txt-notify
{ .txt-notify }

.bg-notify
{ .bg-notify }

.box-notify  
{ .box-notify }

### Tools

.txt-tools
{ .txt-tools }

.bg-tools
{ .bg-tools }
  
.box-tools
{ .box-tools }

### Add icon and close button

<div class="alert box-info">
  <button class="close" data-dismiss="alert" onclick="this.parentElement.remove()">x</button>
  <span style="
    border: 3px solid #2eafe7;
    width: 22px;
    border-radius: 50%;
    height: 22px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
">i</span>
  <span><strong>Info!</strong>Press close button. </span>
</div >

```html
<div class="alert box-info">
  <button class="close" data-dismiss="alert">x</button>
  <i class="flx-icon icon-information-2 icon-lg"></i>
  <span><strong>Info!</strong>Press close button. </span>
</div>
```

## Input states colors

**flexygo** has a predefined set of classes for coloring controls on forms. Each of theese color sets are defined under a series of names and can be used on nay flx-control web component.

.has-warning
{ .txt-warning }

![Has warning input](/assets/images/Typography/warning-input.png#only-light "Has warning input"){data-gallery="light"}
![Has warning input](/assets/images/Typography/warning-input_dark.png#only-dark "Has warning input"){data-gallery="dark"}

.has-error
{ .txt-error }

![Has error input](/assets/images/Typography/error-input.png#only-light "Has error input"){data-gallery="light"}
![Has error input](/assets/images/Typography/error-input_dark.png#only-dark "Has error input"){data-gallery="dark"}

.has-success
{ .txt-success }

![Has success input](/assets/images/Typography/success-input.png#only-light "Has success input"){data-gallery="light"}
![Has success input](/assets/images/Typography/success-input_dark.png#only-dark "Has success input"){data-gallery="dark"}

.has-info
{ .txt-info }

![Has info input](/assets/images/Typography/info-input.png#only-light "Has info input"){data-gallery="light"}
![Has info input](/assets/images/Typography/info-input_dark.png#only-dark "Has info input"){data-gallery="dark"}

.has-outstanding
{ .txt-outstanding }

![Has outstanding input](/assets/images/Typography/outstanding-input.png#only-light "Has outstanding input"){data-gallery="light"}
![Has outstanding input](/assets/images/Typography/outstanding-input_dark.png#only-dark "Has outstanding input"){data-gallery="dark"}

.has-tools
{ .txt-tools }

![Has tools input](/assets/images/Typography/tools-input.png#only-light "Has tools input"){data-gallery="light"}
![Has tools input](/assets/images/Typography/tools-input_dark.png#only-dark "Has tools input"){data-gallery="dark"}

.has-notify
{ .txt-notify }

![Has notify input](/assets/images/Typography/notify-input.png#only-light "Has notify input"){data-gallery="light"}
![Has notify input](/assets/images/Typography/notify-input_dark.png#only-dark "Has notify input"){data-gallery="dark"}

.has-primary
{ .txt-primary }

![Has primary input](/assets/images/Typography/primary-input.png#only-light "Has primary input"){data-gallery="light"}
![Has primary input](/assets/images/Typography/primary-input_dark.png#only-dark "Has primary input"){data-gallery="dark"}

## Sticky

### Sticky header

List header can now be set as sticky on modules.

To do so you just have to add class "sticky-header" to module as portayed in the image.

![Sticky toolbar](/assets/images/Typography/StickyHeader.png "Sticky toolbar")

### Sticky toolbar

Toolbar can now be set as sticky on modules.

To do so you just have to add class "sticky-toolbar" to module as portayed in the image.

![Sticky toolbar](/assets/images/Typography/StickyToolbar.png "Sticky toolbar")

## Flipcard colors

Flexygo has a predefined set of classes for defining flip cards backgrounds and text. Each of this color sets are defined under a series of names with their coresponding prefix for front and back.

![Flipcards](/assets/images/Typography/flipcards.png#only-light "Flipcards"){data-gallery="light"}
![Flipcards](/assets/images/Typography/flipcards_dark.png#only-dark "Flipcards"){data-gallery="dark"}

```html
<div class="card card-outstanding">
    <div class="flip-card" onclick="jQuery(this).toggleClass('flip-card-reverse');">
        <div class="flip-card-flipper">
        <div class="flip-card-front ">
            <div class="admin"><h3>Outstanding</h3><span class="main-icon"> <i class="flx-icon flx-icon icon-pin icon-5x"></i></span></div>
            <div class="more-info"><i class="flx-icon icon-arrow-head-2 "></i>More info</div>
        </div>
        <div class="flip-card-back">
            <div class="admin reverse">
            <div class="child-nodes admin-back"><ul><li><span>Your items</span></li></ul></div>
            <div class="back"><i class="flx-icon icon-arrow-head-2 icon-rotate-180"></i>&nbsp;</div>
            </div>
        </div>
        </div>
    </div>
</div>
```

![](/assets/images/Typography/rightLeft_float.jpg)
{ #fhmodal_right_left }

![](/assets/images/Typography/clearBoth.jpg)
{ #fhmodal_clear }

![](/assets/images/Typography/docSection.jpg)
{ #fhmodal_docs }

![](/assets/images/Typography/padding.jpg)
{ #fhmodal_padding_margin }

![](/assets/images/Typography/LastModuleMargin.jpg)
{ #fhmodal_last_margin }

![](/assets/images/Typography/inlineBlock.jpg)
{ #fhmodal_inline_block }

![](/assets/images/Typography/hidden.jpg)
{ #fhmodal_hidden }

![](/assets/images/Typography/nolist.jpg)
{ #fhmodal_no_list }

![](/assets/images/Typography/cursorPointer.jpg)
{ #fhmodal_clickable }

![](/assets/images/Typography/cleanRounded.png)
{ #fhmodal_round }

![](/assets/images/Typography/fullScreen.jpg)
{ #fhmodal_fullscreen }

![](/assets/images/Typography/ShowEmptyColumn.png)
{ #fhmodal_show_empty }

![](/assets/images/Typography/ColumnSeparator.png)
{ #fhmodal_column_separator }