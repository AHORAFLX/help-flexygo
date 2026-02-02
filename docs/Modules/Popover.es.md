# Popover y Tooltip

Los popovers y tooltips permiten mostrar información adicional sobre un elemento cuando el usuario **hace clic (popover)** o **pasa el ratón por encima (tooltip)**. Es muy útil cuando necesitas mostrar información ampliada.

## Configuración

El componente web flx-popover tiene dos modos de funcionamiento y cuatro atributos adicionales:

### Modos

*   **tooltip:** Desaparece cuando se pierde el foco
*   **popover:** Aparece al hacer clic y desaparece al hacer clic en cualquier otro elemento

### Atributos

*   **objectname:** Nombre del objeto
*   **objectwhere:** Filtro del objeto
*   **templateid:** Plantilla del objeto
*   **placement:** auto, arriba o abajo del elemento padre
*   **container:** Contenedor padre opcional. Si no se define, toma el primer contenedor padre

## Ejemplos

<fh-popover class="button margin-right-m" src="../../docs_assets/images/Popover/Popover.png" mode="tooltip">Modo Tooltip</fh-popover>
<fh-popover class="button margin-right-m" src="../../docs_assets/images/Popover/Popover.png" mode="popover">Modo Popover</fh-popover>

<fh-popover class="link margin-right-m" src="../../docs_assets/images/Popover/Popover.png" mode="tooltip">Modo Tooltip</fh-popover>
<fh-popover class="link margin-right-m" src="../../docs_assets/images/Popover/Popover.png" mode="popover">Modo Popover</fh-popover>

### Ejemplos de código
```html
<button class="btn bg-info">
    <flx-tooltip mode="tooltip" objectname="sysObject" objectwhere="objectName='sysObject'" templateid="flx-sysobjectview"></flx-tooltip>
	<i class="flx-icon icon-choose-hand tex-white"></i>Modo Tooltip
</button>
```
```html
<span class="btn txt-info">
    <flx-tooltip mode="popover" objectname="sysObject" objectwhere="objectName='sysObject'" templateid="flx-sysobjectview"></flx-tooltip>
    <i class="flx-icon icon-choose-hand tex-white"></i>Popover mode
</span>
```

Mira el siguiente vídeo en nuestro canal de YouTube para más información
<div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/lKKMce5PsrA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>