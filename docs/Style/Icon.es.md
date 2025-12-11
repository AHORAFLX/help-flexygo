# Iconos

Utiliza la colección de iconos de flexygo en tus plantillas y en la configuración de objetos/colecciones, controles personalizados.

Mira el siguiente video para información adicional:

<div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/tQLW8-CSRS4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>

## Iconos Básicos

Puedes colocar iconos de flexygo prácticamente en cualquier lugar usando el prefijo CSS flx-icon y el nombre del icono. flexygo está diseñado para ser utilizado con elementos en línea (nos gusta la etiqueta **<i\>** por brevedad, pero usar un **<span\>** es más semánticamente correcto).

Si cambias el tamaño de la fuente del contenedor del icono, el icono se vuelve más grande. Lo mismo ocurre con el color, la sombra de caída y cualquier otra cosa que se herede usando CSS.
{: flx-warning-card }

<p><i class="flx-icon icon-process icon-margin-right"></i>icon icon-process</p>

```html
<i class="flx-icon icon-process"></i> icon icon-process
```


## Iconos Más Grandes

Para aumentar el tamaño de los iconos en relación con su contenedor, utiliza las clases **icon-lg** (aumento del 33%), **icon-2x**, **icon-3x**, **icon-4x**, o **icon-5x** classes.

Si tus iconos se están cortando por arriba y por abajo, asegúrate de tener suficiente altura de línea.
{: .flx-warning-card }

<p>
    <span class="margin-right-xl inline-flex-center"><i class="flx-icon  icon-process icon-lg"></i> icon-lg</span>
    <span class="margin-right-xl inline-flex-center"><i class="flx-icon  icon-process icon-2x"></i> icon-2x</span>
    <span class="margin-right-xl inline-flex-center"><i class="flx-icon  icon-process icon-3x"></i> icon-3x</span>
    <span class="margin-right-xl inline-flex-center"><i class="flx-icon  icon-process icon-4x"></i> icon-4x</span>
    <span class="inline-flex-center"><i class="flx-icon  icon-process icon-5x "></i> icon-5x</span>
</p>

```html
<i class="flx-icon  icon-process icon-lg"></i> icon-lg
<i class="flx-icon  icon-process icon-2x"></i> icon-2x
<i class="flx-icon  icon-process icon-3x"></i> icon-3x
<i class="flx-icon  icon-process icon-4x"></i> icon-4x
<i class="flx-icon  icon-process icon-5x"></i> icon-5x
```

## Iconos de Ancho Fijo

Utiliza **icon-fw** para establecer iconos en un ancho fijo. Es excelente para usar cuando diferentes anchuras de iconos desalinean el contenido. Especialmente útil en cosas como listas de navegación y grupos de listas.

<div class="list-group">
    <span class="list-group-item"><i class="flx-icon icon-women icon-fw"></i>Mujeres</span>
    <span class="list-group-item"><i class="flx-icon icon-client icon-fw"></i>Clientes</span>
    <span class="list-group-item"><i class="flx-icon icon-pencil icon-fw"></i>Lapiz</span>
    <span class="list-group-item"><i class="flx-icon icon-settings-2 icon-fw"></i>Ajustes</span>
</div>

```html
<div class="list-group">
    <a class="list-group-item" href="#"><i class="flx-icon icon-weman icon-fw"></i>&nbsp; Inicio</a>
    <a class="list-group-item" href="#"><i class="flx-icon icon-client icon-fw"></i>&nbsp; Biblioteca</a>
    <a class="list-group-item" href="#"><i class="flx-icon icon-pencil icon-fw"></i>&nbsp; Aplicaciones</a>
    <a class="list-group-item" href="#"><i class="flx-icon icon-settings-2 icon-fw"></i>&nbsp; Configuraciones</a>
</div>
```

## Iconos de Lista

Usa **icon-ul** y **icon-li** para reemplazar fácilmente las viñetas por defecto en listas desordenadas.

<ul class="icon-ul">
    <li><i class="flx-icon icon-li icon-star"></i>Iconos de lista</li>
    <li><i class="flx-icon icon-li icon-non-check"></i>pueden ser usados</li>
    <li><i class="flx-icon icon-li icon-load icon-spin"></i>como viñetas</li>
    <li><i class="flx-icon icon-li icon-square"></i>en listas</li>
</ul>

```html
<ul class="icon-ul">
    <li><i class="flx-icon icon-li icon-star"></i>Iconos de lista</li>
    <li><i class="flx-icon icon-li icon-non-check"></i>pueden ser usados</li>
    <li><i class="flx-icon icon-li icon-load icon-spin"></i>como viñetas</li>
    <li><i class="flx-icon icon-li icon-square"></i>en listas</li>
</ul>
```

## Iconos con Borde y Arrastrados

Utilice **icon-border** y **icon-pull-right** o **icon-pull-left**  para citas extraídas fácilmente o íconos de artículos.

<p><i class="flx-icon icon-client icon-3x icon-pull-left icon-border"></i> ...mañana correremos más rápido, extenderemos nuestros brazos...
Y luego, una hermosa mañana— Así seguimos, barcos contra la
corriente, llevados de regreso incesantemente al pasado.
</p>

```html
<i class="flx-icon icon-quote-left icon-3x icon-pull-left icon-border"></i>
...mañana correremos más rápido, extenderemos nuestros brazos...
Y luego, una hermosa mañana— Así seguimos, barcos contra la
corriente, llevados de regreso incesantemente al pasado.
```

## Íconos Animados

Utilice la clase **icon-spin** para hacer que cualquier ícono gire, y use **icon-pulse** para que gire con 8 pasos. Funciona bien con **icon-star**, **icon-refresh**, y **icon-load**. 

Algunos navegadores en algunas plataformas tienen problemas con los íconos animados que resultan en un efecto de movimiento tembloroso. Ver [problema #671](https://github.com/FortAwesome/Font-Awesome/issues/671) para ejemplos y posibles soluciones. 
{: .flx-warning-card }

Las animaciones CSS3 no son compatibles en IE8 - IE9.
{: .flx-warning-card }

<p>
    <i class="flx-icon icon-star icon-spin icon-3x margin-right-xl"></i>
    <i class="flx-icon icon-refresh icon-spin icon-3x margin-right-xl"></i>
    <i class="flx-icon icon-load icon-spin icon-3x margin-right-xl"></i>
    <i class="flx-icon icon-load icon-pulse icon-3x margin-right-xl"></i>
</p>

```html
<i class=" icon-spinner icon-spin"></i>
<i class="flx-icon icon-star icon-spin"></i>
<i class="flx-icon icon-refresh icon-spin"></i>
<i class="flx-icon icon-load icon-spin"></i>
<i class="flx-icon icon-load icon-pulse"></i>
```

## Íconos Rotados y Volteados

Para rotar y voltear íconos arbitrariamente, utilice las clases **icon-rotate-\*** y **icon-flip-\***.

<p class="text-center">
    <span class="inline-flex-center margin-right-l"><i class="flx-icon icon-image"></i> normal<br></span>
    <span class="inline-flex-center margin-right-l"><i class="flx-icon icon-image icon-rotate-90"></i> icon-rotate-90<br></span>
    <span class="inline-flex-center margin-right-l"><i class="flx-icon icon-image icon-rotate-180"></i> icon-rotate-180<br></span>
    <span class="inline-flex-center margin-right-l"><i class="flx-icon icon-image icon-rotate-270"></i> icon-rotate-270<br></span>
    <span class="inline-flex-center margin-right-l"><i class="flx-icon icon-image icon-flip-horizontal"></i> icon-flip-horizontal<br></span>
    <span class="inline-flex-center"><i class="flx-icon icon-image icon-flip-vertical"></i> icon-flip-vertical </span>
</p>

```html
<i class="flx-icon icon-image"></i> normal<br>
<i class="flx-icon icon-image icon-rotate-90"></i> icon-rotate-90<br>
<i class="flx-icon icon-image icon-rotate-180"></i> icon-rotate-180<br>
<i class="flx-icon icon-image icon-rotate-270"></i> icon-rotate-270<br>
<i class="flx-icon icon-image icon-flip-horizontal"></i> icon-flip-horizontal<br>
<i class="flx-icon icon-image icon-flip-vertical"></i> icon-flip-vertical
```

## Aumentar al pasar el mouse sobre los íconos

Utilice la clase **icon-zoom** para que cualquier ícono aumente en el evento de pasar el mouse.

<p>
    <span class="margin-right-l"><i class="flx-icon icon-wasp icon-2x icon-zoom-115"></i></span>
    <span class="margin-right-l"><i class="flx-icon icon-home icon-2x icon-zoom-125"></i></span>
    <span class="margin-right-l"><i class="flx-icon icon-chat icon-2x icon-zoom-15"></i></span>
    <span class="margin-right-l"><i class="flx-icon icon-black-cloud icon-2x icon-zoom-175"></i></span>
    <span class="margin-right-l"><i class="flx-icon icon-modules-settings icon-2x icon-zoom-2"></i></span>
</p>

```html
<i class="flx-icon icon-wasp icon-2x icon-zoom-115"></i>
<i class="flx-icon icon-home icon-2x icon-zoom-125"></i>
<i class="flx-icon icon-chat icon-2x icon-zoom-15"></i>
<i class="flx-icon icon-black-cloud icon-2x icon-zoom-175"></i>
<i class="flx-icon icon-modules-settings icon-2x icon-zoom-2"></i>
```

## Íconos Apilados

Para apilar múltiples íconos, utilice la clase **icon-stack** en el padre, la **icon-stack-1x** para el ícono de tamaño regular, y **icon-stack-2x** para el ícono más grande. **icon-inverse** se puede usar como un color alternativo para el ícono. Incluso puede agregar clases de íconos [más grandes](#larger) en el padre para obtener un mayor control del tamaño. Use **icon-stack-right** para apilar un ícono más pequeño a la derecha de un ícono más grande.

<p>
    <span class="inline-flex-center margin-right-l">
        <span class="icon-stack ">
            <i class="flx-icon icon-listbox icon-stack-2x text-muted"></i>
            <i class="txt-outstanding icon-stack-right flx-icon icon-settings"></i>
        </span> ícono en la esquina derecha
    </span>
    <span class="inline-flex-center margin-right-l">
        <span class="icon-stack ">
            <i class="flx-icon icon-circle-1 icon-stack-2x text-muted"></i><i class="txt-outstanding icon-stack-1x flx-icon icon-twitter-icon"></i>
        </span> ícono en el centro
    </span>
    <span class="inline-flex-center margin-right-l">
        <span class="icon-stack ">
            <i class="flx-icon icon-circle-1 icon-stack-2x "></i><i class="icon-inverse icon-stack-1x flx-icon icon-twitter-icon"></i>
        </span> ícono en el centro invertido
    </span>
</p>

```html
<span class="icon-stack ">
    <i class="flx-icon icon-listbox icon-stack-2x text-muted"></i>
    <i class="txt-outstanding icon-stack-right flx-icon icon-settings"></i>
</span> ícono en la esquina derecha<br>

<span class="icon-stack ">
    <i class="flx-icon icon-circle-1 icon-stack-2x text-muted"></i><i class="txt-outstanding icon-stack-1x flx-icon icon-twitter-icon"></i>
</span> ícono en el centro<br>

<span class="icon-stack ">
    <i class="flx-icon icon-circle-1 icon-stack-2x "></i><i class="icon-inverse icon-stack-1x flx-icon icon-twitter-icon"></i>
</span> ícono en el centro invertido<br>
```

## Íconos de Árbol

Para convertir una vista de lista en un árbol, usa la clase **icon-tree-collapse** en el elemento **i**. Luego puedes combinarlo con un **a** o un **button** con la opción **data-toggle="collapse"**.

<div>
    <a>
        <i class="txt-outstanding clickable borderAll" onclick="toggleCollapsable(this)" data-toggle="collapse" data-target="#IdTree">+</i>
        Haz clic en el ícono para colapsar 
    </a>
    <div class="row collapse "Id="IdTree">
        <div class="Child Nodes">Nodos hijos</div>
    </div>
</div>

```html
<div>
    <small>
        <a class="collapsed "data-toggle="collapse"data-target="#IdTree">
            <i class="flx-icon tree-icon-toggle">+</i>
            Click on icon to collapse
        </a>
    </small>
    <div class="row collapse "Id="IdTree">
        <div>Child Nodes</div>
    </div>
</div>
```