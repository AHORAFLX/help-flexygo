# Page Hierarchy

**flexygo** funciona con un documento de página única (SPA). Cada página puede tener diferentes **layouts**, con distintas áreas donde colocar los módulos.

## Layouts

![Layouts](/assets/images/Information/Layouts.png "Layouts")

Haz clic <flx-navbutton class="link" type="openpage" pagetypeid="list" objectname="SysLayouts">aquí</flx-navbutton> para ir al listado de layouts.

Mira el siguiente vídeo en nuestro canal de YouTube sobre Layouts:

<div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/QgvGRPMTKi0" title="YouTube video player" frameborder="0" allowfullscreen=""></iframe>
</div>

## Modulos

Cada módulo es un componente web que puede tener diferentes tipos de contenedores. Además, un módulo puede contener otros componentes web en su interior.  
Las propiedades del módulo permiten seleccionar la toolbar deseada o definir diferentes tipos de página según sea necesario.

La estructura de una página puede verse en este ejemplo:

<div id="module-table-node1">Page
    <div id="module-table-node2">Layout
        <div id="module-table-node3">
            <div id="module-table-node6">Container</div>
            <div id="module-table-node7">Module
                <div id="module-table-node8">Toolbar
                    <div id="module-table-node9">Pager</div>
                </div>
            </div>
        </div>
        <div id="module-table-node5"></div>
        <div id="module-table-node4"></div>
    </div>
</div>

## Contenedores de módulos

Existen varios contenedores de módulo prediseñados que se pueden usar:

* **Default**: Opción por defecto con cabecera completa, botones del objeto y opciones de maximizar y refrescar.
* **Clean**: Opción limpia con título, botones del objeto y opciones de maximizar y refrescar.
* **No Header**: Sin cabecera, pero mantiene botones del objeto y maximizar/refrescar.
* **Empty**: Sin cabecera y sin fondo, pero conserva botones del objeto y maximizar/refrescar.
* **None**: Sin cabecera y sin botones.

**Default**, **Clean** y **No Header** pueden combinarse con la clase CSS **roundBorders** para obtener un efecto redondeado. Esta clase puede añadirse en el campo *Class* del formulario de configuración del módulo.

### Default

![](/assets/images/PageHierarchy/Default.png)

### Default con clase CSS roundBorders

![](/assets/images/PageHierarchy/Default-round.png)

### Clean

![](/assets/images/PageHierarchy/Clean.png)

### Clean con clase CSS roundBorders

![](/assets/images/PageHierarchy/Clean-round.png)

### No Encabezado

![](/assets/images/PageHierarchy/No-header.png)

### No Encabezado con clase CSS roundBorders

![](/assets/images/PageHierarchy/No-header-round.png)

### Vacío

![](/assets/images/PageHierarchy/Empty.png)

### Ninguno

![](/assets/images/PageHierarchy/None.png)