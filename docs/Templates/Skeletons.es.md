# Esqueletos

Al cargar un módulo, siempre es bueno mostrar al usuario que algo está sucediendo, así que aquí es donde entran en juego los esqueletos.

Los esqueletos son estructuras básicas de html que se mostrarán mientras el módulo se está cargando, en lugar de dejar módulos en blanco. Pueden ser añadidos a cada módulo, donde se puede usar uno estándar o crear uno nuevo.

Los tipos de módulos más comunes (flx-list, flx-edit, flx-view, flx-moduletab y flx-buttontab) tienen un conjunto de esqueletos estándar, pero se puede sobrescribir configurando el módulo deseado con el esqueleto que se quiere mostrar.

## Cómo crear tu propio esqueleto

El esqueleto puede dividirse en tres partes (skeletonHeader, skeletonBody, skeletonFooter) esto se debe a la necesidad de mostrar o no ciertos elementos dependiendo si es la primera carga del módulo o si es una actualización. Para que Flexygo sepa qué parte es, será necesario encapsular el esqueleto con divs que contengan las clases (skeletonHeader, skeletonBody, skeletonFooter), como en el siguiente ejemplo.

![Navegación del Menú de la Base de Datos](/docs_assets/images/Skeletons/SkeletonNavigation.png "Imagen 1. Navegación del Menú de la Base de Datos")

El esqueleto puede dividirse en tres partes (skeletonHeader, skeletonBody, skeletonFooter) esto se debe a la necesidad de mostrar o no ciertos elementos dependiendo si es la primera carga del módulo o si es una actualización. Para que Flexygo sepa qué parte es, será necesario encapsular el esqueleto con divs que contengan las clases (skeletonHeader, skeletonBody, skeletonFooter), como en el siguiente ejemplo.

_Ejemplo:_

```html
<div class="skeletonHeader">
    <div> My Skeleton Header </div>
</div>
    
<div class="skeletonBody">
    <div> My Skeleton Body </div>
</div>
    
<div class="skeletonFooter">
    <div> My Skeleton Footer </div>
</div>
```

Una vez establecido el html del esqueleto, puedes agregar una imagen al esqueleto para que al buscar a través de la lista de esqueletos sea más fácil de encontrar, pero no es obligatorio.

## Usar el efecto de esqueleto de Flexygo

Los esqueletos de Flexygo utilizan una animación para mostrar al usuario que la aplicación sigue funcionando correctamente. Usar esta animación es tan fácil como utilizar las clases skeletonElementContainer y skeletonElement como se muestra en este ejemplo.

_Ejemplo:_

```html
<div class="skeletonElementContainer">
    <div class="skeletonElement"></div>
</div>
```

_Resultado:_

<div class="flxSkeleton">
    <div class="skeletonElementContainer">
        <div class="skeletonElement"></div>
    </div>
</div>