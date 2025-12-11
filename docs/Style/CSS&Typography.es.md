# Tipografía y Estilos

## Encabezados y textos principales

| Label | Font | Examples |
| --- | --- | --- |
|  &lt;h1&gt; | 'Helvetica Neue' 26px Light' | <h1> &lt;h1&gt; h1. Encabezado flexygo &lt;/h1&gt; </h1> |
| &lt;h2&gt; | 'Helvetica Neue' 22px Light' | <h2> &lt;h2&gt; h2. Encabezado flexygo &lt;/h2&gt; </h2> |
| &lt;h3&gt; | 'Helvetica Neue' 20px Light' | <h3> &lt;h3&gt; h3. Encabezado flexygo &lt;/h3&gt; </h3> |
| &lt;h4&gt; | 'Helvetica Neue' 18px Light' | <h4> &lt;h4&gt; h4. Encabezado flexygo &lt;/h4&gt; </h4> |
| &lt;h5&gt; | 'Helvetica Neue' 17px Light' | <h5> &lt;h5&gt; h5. Encabezado flexygo &lt;/h5&gt; </h5> |
| &lt;h6&gt; | 'Helvetica Neue' 15px Bold' | <h6> &lt;h6&gt; h6. Encabezado flexygo &lt;/h6&gt; </h6> |

## Opciones de color de texto y fondo

| Texto | Fondo | Botones |
| --- | --- | --- |
| <span class="txt-outstanding">.txt-outstanding </span> | <span class="bg-outstanding"> .bg-outstanding </span> | <span class="btn btn-outstanding"> .btn .btn-outstanding </span> |
| <span class="txt-success">.txt-success </span> | <span class="bg-success"> .bg-success </span> | <span class="btn btn-success"> .btn .btn-success </span> |
| <span class="txt-warning">.txt-warning </span> | <span class="bg-warning"> .bg-warning </span> | <span class="btn btn-warning"> .btn .btn-warning </span> |
| <span class="txt-primary">.txt-primary </span> | <span class="bg-primary"> .bg-primary </span> | <span class="btn btn-primary"> .btn .btn-primary </span> |
| <span class="txt-danger">.txt-danger </span> | <span class="bg-danger"> .bg-danger </span> | <span class="btn btn-danger"> .btn .btn-danger </span> |
| <span class="txt-notify">.txt-notify </span> | <span class="bg-notify"> .bg-notify </span> | <span class="btn btn-notify"> .btn .btn-notify </span> |
| <span class="txt-tools">.txt-tools </span> | <span class="bg-tools"> .bg-tools </span> | <span class="btn btn-tools"> .btn .btn-tools </span> |
| <span class="txt-info">.txt-info </span> | <span class="bg-info"> .bg-info </span> | <span class="btn btn-info"> .btn .btn-info </span> |

## Alineación y tamaños de texto

<p style="text-align: left;">Texto alineado a la izquierda.</p>
<p style="text-align: center;">Texto alineado al centro.</p>
<p style="text-align: right;">Texto alineado a la derecha.</p>

```html
<p class="text-left">Texto alineado a la izquierda.</p>
<p class="text-center">Texto alineado al centro.</p>
<p class="text-right">Texto alineado a la derecha.</p>
```

## Tamaño de fuente

 Toma el control total sobre la fuente ajustando el tamaño con las siguientes clases CSS. 

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

## Atenuar texto

Para atenuar texto se usa **txt-muted**, mostrando el texto en un color gris que hace que parezca deshabilitado.

Texto atenuado
{ .txt-muted }

```html
<p class = "txt-muted">Texto atenuado</p>
```

## Texto tachado

Decoración de texto con la clase .strike

~~Clase Strike~~

```html
<p class = "strike">Clase Strike</p>
```

## Acrónimos

La etiqueta **<abbr\>** define una abreviatura o acrónimo.

<p> Hago  <abbr title = "Hypertext Markup Language"> HTML </p>

```html
<p> Hago  <abbr title = "Hypertext Markup Language"> HTML </p>
```

## Text secundario

Texto secundario del encabezado con la etiqueta **<small\>**.

<h4> h4. Encabezado flexygo <small> Texto secundario </small></h4>

```html
<h4> h5. Encabezado flexygo <small> Texto secundario </small></h4>
```
## Lista de Descripción

Alinear términos y descripciones horizontalmente usando las clases predefinidas del sistema de cuadrícula

<dl>
	<dt>Mi lista de Descripción</dt>
	<dd>Mi descripcion</dd>
    <dt>Mi descripcion lista 2</dt>
	<dd>Mi descripcion 2</dd>
</dl>

```html
<dl>
	<dt>Mi lista de Descripción</dt>
	<dd>Mi descripcion</dd>
    <dt>Mi descripcion lista 2</dt>
	<dd>Mi descripcion 2</dd>
</dl>
```

### Horizontal

Puedese usar la clase **dl-horizontal** para hacer dt i dd alineado con su pareja una al lado de la otra.

<dl class="dl-horizontal">
	<dt>Mi lista de Descripción</dt>
	<dd>Mi descripcion</dd>
    <dt>Mi descripcion lista 2</dt>
	<dd>Mi descripcion 2</dd>
</dl>

```html
<dl class="dl-horizontal">
	<dt>Mi lista de Descripción</dt>
	<dd>Mi descripcion</dd>
    <dt>Mi descripcion lista 2</dt>
	<dd>Mi descripcion 2</dd>
</dl>
```

## Listas

Hay multiples tipos de listas a hacer facil usando directamente HTML sin pasar por CSS.

### No ordenada

Esto añadirá el espaciado de la lista y añadirá un punto junto a cada elemento de la lista.

<ul>
    <li>Lechuga</li>
    <li>Tomates</li>
    <li>Arroz</li>
</ul>

```html
<ul>
    <li>Lechuga</li>
    <li>Tomates</li>
    <li>Arroz</li>
</ul>
```

### Ordenada

Esto añadirá el espaciado de la lista y añadirá a cada elemento su número correspondiente.

<ol>
  <li>Cocine las verduras</li>
  <li>Añada el arroz y el agua</li>
  <li>Cuando se haya absorbido el agua, sirva y disfrute de su comida</li>
</ol>

```html
<ol>
  <li>Cocine las verduras</li>
  <li>Añada el arroz y el agua</li>
  <li>Cuando se haya absorbido el agua, sirva y disfrute de su comida</li>
</ol>
```

### En una línea

Crea una lista en una sola línea.

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

### En una línea con barras verticales

Crea una lista en una sola línea, pero separada mediante barras verticales.

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

## Dirección

Presenta la información de contacto. Conserva el formato terminando todas las líneas con **<br\>**.

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

## Citas

Para citar bloques de contenido de otra fuente dentro de tu documento. Envuelve **<blockquote\>** alrededor de cualquier HTML como cita.

<blockquote>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <small>Alguien famoso en 
    <cite title="Título de la fuente">Título de la fuente</cite>
  </small>
</blockquote>

```html
<blockquote>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <small>Alguien famoso en 
    <cite title="Título de la fuente">Título de la fuente</cite>
  </small>
</blockquote>
```

## Clases de flexygo aplicables a los elementos HTML

| Clase | Descripción | Imagen |
| --- | --- | --- |
| **.right** | Mueve el elemento a la derecha | <fh-modal class="link" modal_id="fhmodal_right_left" modal_title="Right and left position">Ejemplo</fh-modal> |
| **.left** | Mueve el elemento a la posición izquierda. | <fh-modal class="link" modal_id="fhmodal_right_left" modal_title="Right and left position">Ejemplo</fh-modal> |
| **.clear-both**, **.clear** | El cuadro sobre el que se aplica baja hasta que su borde superior esté debajo del borde inferior de cualquier elemento flotante a la izquierda o derecha. | <fh-modal class="link" modal_id="fhmodal_clear" modal_title="Clear and clear both">Ejemplo</fh-modal> |
| **.docs-section** | Aplica un margen inferior de 60px al elemento. | <fh-modal class="link" modal_id="fhmodal_docs" modal_title="Docs section">Ejemplo</fh-modal>
| **.nopadding** | Elimina los márgenes del elemento tanto hacia el exterior como hacia el interior. | <fh-modal class="link" modal_id="fhmodal_padding_margin" modal_title="Paddings and margins">Ejemplo</fh-modal> |
| **.padding-0**  <br> **.padding-xs**  <br> **.padding-s**  <br> **.padding-m**  <br> **.padding-l**  <br> **.padding-left-0/xs/s/m/l**  <br> **.padding-right-0/xs/s/m/l**  <br>.**padding-top-0/xs/s/m/l**  <br>**.padding-bottom-0/xs/s/m/l** | Las clases "padding-x" aplican un espacio en los cuatro lados del elemento. "Padding-0" aplica 0px y "Padding-l" aplica 15px. <br> <br>  Las clases "padding-left-x" aplican un espacio y tamaño según el lado indicado. "Padding-left-0" aplica 0 píxeles de espacio a la izquierda y "Padding-top-l" aplica 15 píxeles de espacio en la parte superior. |  <fh-modal class="link" modal_id="fhmodal_padding_margin" modal_title="Paddings and margins">Ejemplo</fh-modal> |
| **.margin-0**  <br> **.margin-xs**  <br> **.margin-s**  <br> **.margin-m**  <br> **.margin-l**  <br> **.margin-left-0/xs/s/m/l**  <br> **.margin-right-0/xs/s/m/l**  <br>.**margin-top-0/xs/s/m/l**  <br> **.margin-bottom-0/xs/s/m/l** | Las clases "margin-x" aplican un espacio en los cuatro lados del elemento. "Margin-0" aplica 0px y "margin-l" aplica 15px. <br> <br> Las clases "margin-left-x" aplican un espacio y tamaño según el lado indicado. "Margin-left-0" aplica 0 píxeles de espacio a la izquierda y "margin-top-l" aplica 15 píxeles de espacio en la parte superior. |  <fh-modal class="link" modal_id="fhmodal_padding_margin" modal_title="Paddings and margins">Ejemplo</fh-modal> |
| **.last-module-margin** | Añade un margen de 100 píxeles debajo del módulo al que se aplique esta clase. | <fh-modal class="link" modal_id="fhmodal_last_margin" modal_title="Last module margin">Ejemplo</fh-modal> |
| **.inline** | Hace que un elemento genere uno o más cuadros en línea. | <fh-modal class="link" modal_id="fhmodal_inline_block" modal_title="Inline, block, inline-block">Ejemplo</fh-modal> |
| **.block** | Transforma un elemento en un bloque, por lo que siempre comienza en una nueva línea y ocupa todo el espacio disponible, incluso si su contenido no ocupa todo el espacio de la línea. | <fh-modal class="link" modal_id="fhmodal_inline_block" modal_title="Inline, block, inline-block">Ejemplo</fh-modal> |
| **.inline-block** | Hace que un elemento se comporte como un elemento en línea, pero permite que tenga un ancho y una altura. | <fh-modal class="link" modal_id="fhmodal_inline_block" modal_title="Inline, block, inline-block">Ejemplo</fh-modal> |
| **.hidden**  <br> **.hidden-s**  <br> **.hidden-m**  <br> **.hidden-l** | Se utiliza comúnmente para ocultar y mostrar elementos sin eliminarlos ni recrearlos. Un elemento con la clase "hidden" no ocupa espacio. <br> <br> La clase "hidden-s" ocultará el elemento cuando el tamaño de la pantalla sea menor a 728 píxeles. Con las otras dos clases, es lo mismo dependiendo del tamaño de la pantalla (m o l). | <fh-modal class="link" modal_id="fhmodal_hidden" modal_title="Hidden">Ejemplo</fh-modal> |
| **.show**  <br> **.show-s**  <br> **.show-m**  <br> **.show-l** | Se utiliza comúnmente para mostrar y ocultar elementos sin eliminarlos ni recrearlos. Un elemento con la clase "show" siempre es visible. <br> <br> La clase "show-s" hará que el elemento se muestre cuando el tamaño de la pantalla sea mayor o igual a 728 píxeles. Con las otras dos clases, es lo mismo dependiendo del tamaño de la pantalla (m o l). | \-  |
| **.hidden-only-s**  <br> **.hidden-only-m**  <br> **.hidden-only-l**  <br> **.hidden-only-xl**  <br> **.show-only-s**  <br> **.show-only-m**  <br> **.show-only-l**  <br>.**show-only-xl** | Estas clases son útiles si deseas ocultar o mostrar algo solo para tamaños específicos de pantalla. <br> <br> La clase "hide-only-s" ocultará el elemento solo si el tamaño de la pantalla está en el rango "s". Con el resto de clases, funciona igual pero para los rangos correspondientes (m, l o xl). | \-  |
| **.nolist** | No muestra los elementos de una lista ordenada o desordenada. | <fh-modal class="link" modal_id="fhmodal_no_list" modal_title="No list">Ejemplo</fh-modal> |
| **.clickable** | Cuando el puntero está sobre el elemento, se añade un icono de cursor. | <fh-modal class="link" modal_id="fhmodal_clickable" modal_title="Clickable">Ejemplo</fh-modal> |
| **.roundBorders** | Cuando se aplica a módulos, sus bordes se redondearán. | <fh-modal class="link" modal_id="fhmodal_round" modal_title="Round borders">Ejemplo</fh-modal> |
| **.fullscreen** | El elemento ocupa el 100% del espacio de la ventana. | <fh-modal class="link" modal_id="fhmodal_fullscreen" modal_title="Fullscreen">Ejemplo</fh-modal> |
| **.show-empty-column** | Añádelo a un elemento con clase bootstrap .col para obtener una columna vacía y evitar el movimiento de las otras columnas. | <fh-modal class="link" modal_id="fhmodal_show_empty" modal_title="Show Empty Column">Ejemplo</fh-modal> |
| **.hover-underline** | El elemento se subraya cuando el puntero pasa sobre él. | \-  |
| **.hover-bold** | El elemento se pone en negrita cuando el puntero pasa sobre él. | \-  |
| **.hover-outstanding**  <br>.hover-primary  <br>.hover-success  <br>.hover-info  <br>.hover-warning  <br>.hover-danger  <br>.hover-notify  <br>.hover-tools | El elemento cambia de color cuando el puntero pasa sobre él. | \-  |
| **.grid-column-separator** | Muestra un separador de columnas en el control de edición de la cuadrícula. | <fh-modal class="link" modal_id="fhmodal_column_separator" modal_title="Grid Column Separator">Ejemplo</fh-modal> |

## Colores contextuales

Flexygo tiene un conjunto predefinido de clases para colorear texto, fondos y cajas. Cada uno de estos conjuntos de colores está definido bajo una serie de nombres con sus respectivos prefijos para texto, fondo o caja. 

### Destacado

.txt-outstanding
{ .txt-outstanding }

.bg-outstanding
{ .bg-outstanding }

.box-outstanding
{ .box-outstanding }

### Primario

.txt-primary
{ .txt-primary }

.bg-primary
{ .bg-primary }

.box-primary
{ .box-primary }

### Éxito

.txt-success
{ .txt-success }

.bg-success
{ .bg-success }

.box-success 
{ .box-success }

### Información

.txt-info
{ .txt-info }

.bg-info
{ .bg-info }

.box-info
{ .box-info }

### Advertencia

.txt-warning
{ .txt-warning }

.bg-warning
{ .bg-warning }

.box-warning  
{ .box-warning }

### Peligro

.txt-danger
{ .txt-danger }

.bg-danger
{ .bg-danger }

.box-danger  
{ .box-danger }

### Notificación

.txt-notify
{ .txt-notify }

.bg-notify
{ .bg-notify }

.box-notify  
{ .box-notify }

### Herramientas

.txt-tools
{ .txt-tools }

.bg-tools
{ .bg-tools }
  
.box-tools
{ .box-tools }

### Agregar ícono y botón de cierre

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
  <span><strong>¡Información!</strong>Pulsa el botón de cierre.</span>
</div >

```html
<div class="alert box-info">
  <button class="close" data-dismiss="alert">x</button>
  <i class="flx-icon icon-information-2 icon-lg"></i>
  <span><strong>Info!</strong>Press close button. </span>
</div>
```

## Colores de estado

Flexygo tiene un conjunto predefinido de clases para colorear los controles en los formularios. Cada uno de estos conjuntos de colores está definido bajo una serie de nombres y puede ser utilizado en cualquier componente web de flx-control. 

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

## Fijo

### Encabezado fijo

El encabezado de la lista ahora puede configurarse como fijo en los módulos.

Para hacerlo, solo tienes que agregar la clase "sticky-header" al módulo como se muestra en la imagen.

![Sticky toolbar](/assets/images/Typography/StickyHeader.png "Sticky toolbar")

### Barra de herramientas fija

La barra de herramientas ahora puede configurarse como fija en los módulos.

Para hacerlo, solo tienes que agregar la clase "sticky-toolbar" al módulo como se muestra en la imagen.

![Sticky toolbar](/assets/images/Typography/StickyToolbar.png "Sticky toolbar")

## Colores de Flipcard

Flexygo tiene un conjunto predefinido de clases para definir los fondos y textos de los flipcards. Cada uno de estos conjuntos de colores está definido bajo una serie de nombres con sus respectivos prefijos para el frente y el reverso.

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