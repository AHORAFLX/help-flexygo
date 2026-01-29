# Opciones de la cuadrícula

Vea cómo usar el sistema de cuadrícula para trabajar en múltiples dispositivos. flexygo el sistema se comporta genial no solo en los navegadores de escritorio más recientes, sino también en navegadores de tabletas y smartphones. Está repleto de grandes características, como la tabla con 12 columnas.

![flexygo grid](../docs_assets/images/Style/resp_flexygo_horizontal.png "Image 1. flexygo grid")

<table>
    <thead>
        <tr>
                <th>FUNCIONAMIENTO DEL SISTEMA</th>
                <th>Dispositivos pequeños</th>
                <th>Dispositivos medianos</th>
                <th>Dispositivos grandes</th>
                <th>Dispositivos extragrandes</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="bold">Comportamiento de la cuadrícula</td>
            <td colspan="4">Colapsado para comenzar, horizontal por encima de los puntos de ruptura</td>
        </tr>                  
        <tr>
            <td class="bold">Ancho máximo del contenedor</td>                    
            <td>728px</td>
            <td>992px</td>
            <td>1200px</td>
            <td>Larger than 1200px </td>
        </tr>
        <tr>
            <td class="bold">Prefijo de clase</td>                    
            <td>col-s</td>
            <td>col-m</td>
            <td>col-l</td>
            <td>col-xl</td>
        </tr>
        <tr>
            <td class="bold">Desplazamientos</td>                    
            <td colspan="4">Sí</td>
        </tr>
        <tr>
            <td class="bold">Anidables</td>                    
            <td colspan="4">Sí</td>
        </tr>
    </tbody>
</table>

## Ejemplos

### General

Usando un único conjunto de **.col-\***.

<div class="bg-white" style="margin-bottom:1%;">
    <div class="row col-12 borderAll">.row .col-12</div>      
    <div class="row">
        <div class="col-1  borderAll padding-s">.col-1</div>
        <div class="col-1  borderAll padding-s">.col-1</div>
        <div class="col-1  borderAll padding-s">.col-1</div>
        <div class="col-1  borderAll padding-s">.col-1</div>
        <div class="col-1  borderAll padding-s">.col-1</div>
        <div class="col-1  borderAll padding-s">.col-1</div>
        <div class="col-1  borderAll padding-s">.col-1</div>
        <div class="col-1  borderAll padding-s">.col-1</div>
        <div class="col-1  borderAll padding-s">.col-1</div>
        <div class="col-1  borderAll padding-s">.col-1</div>
        <div class="col-1  borderAll padding-s">.col-1</div>
        <div class="col-1  borderAll padding-s">.col-1</div>
    </div>
    <div class="row ">
        <div class="col-2  borderAll padding-s">.col-2</div>
        <div class="col-2  borderAll padding-s">.col-2</div>
        <div class="col-2  borderAll padding-s">.col-2</div>
        <div class="col-2  borderAll padding-s">.col-2</div>
        <div class="col-2  borderAll padding-s">.col-2</div>
        <div class="col-2  borderAll padding-s">.col-2</div>
    </div>
    <div class="row ">
        <div class="col-3  borderAll padding-s">.col-3</div>
        <div class="col-3  borderAll padding-s">.col-3</div>
        <div class="col-3  borderAll padding-s">.col-3</div>
        <div class="col-3  borderAll padding-s">.col-3</div>
    </div>
    <div class="row ">
        <div class="col-4  borderAll padding-s">.col-4</div>
        <div class="col-4  borderAll padding-s">.col-4</div>
        <div class="col-4  borderAll padding-s">.col-4</div>
    </div>  
    <div class="row ">
        <div class="col-6  borderAll padding-s">.col-6</div>
        <div class="col-6  borderAll padding-s">.col-6</div>
    </div>
</div> 

### Móviles, tabletas, escritorios

¿No quieres que tus columnas simplemente se apilen en dispositivos más pequeños? Utiliza las clases de cuadrícula para dispositivos extra pequeños y medianos agregando .**.col-s-\* .col-m-\*** a tus columnas. Consulta el ejemplo a continuación para tener una mejor idea de cómo funciona todo.

<div class="bg-white" style="margin-bottom:1%;">              
    <div class="row">
        <div class="col-s-12 col-m-8 col-8 borderAll padding-s">.col-s-12 .col-m-8 .col-8</div>
        <div class="col-s-12 col-m-4 col-4 borderAll padding-s">.col-s-12 .col-m-4 .col-4</div>
    </div>  
    <div class="row">
        <div class="col-s-12 col-m-4 col-4  borderAll padding-s">.col-s-12 .col-m-4 .col-4</div>
        <div class="col-s-12 col-m-4 col-4  borderAll padding-s">.col-s-12 .col-m-4 .col-4</div>
        <div class="col-s-12 col-m-4 col-4  borderAll padding-s">.col-s-12 .col-m-4 .col-4</div>
    </div>
    <div class="row">
        <div class="col-s-6 col-6 borderAll padding-s">.col-s-6 .col-6</div>
        <div class="col-s-6 col-6 borderAll padding-s">.col-s-6 .col-6</div>                
    </div>
</div>

### Desplazando columnas

Mueve columnas a la derecha usando las clases .padL-*. Estas clases aumentan el margen izquierdo de una columna por \* columnas. Por ejemplo, **.padL-m-4** mueve **.col-4** cuatro columnas a la derecha.

<div class="bg-white">              
    <div class="row">
        <div class="col-4 borderAll padding-s">.col-4</div>
        <div class="col-4 padL-4 borderAll padding-s">.col-4 .padL-4</div>
    </div>
    <div class="row">
        <div class="col-3 padL-3 borderAll padding-s">.col-3 .padL-3</div>
        <div class="col-3 padL-3 borderAll padding-s">.col-3 .padL-3</div>
    </div>
    <div class="row">
        <div class="col-6 padL-3 borderAll padding-s">.col-6 .padL-3</div>
    </div>              
</div>

### Desplazamiento responsive de columnas

Mueve columnas a la derecha usando las clases **.padL-s-\* .padL-m-\* .padL-l-\* .padL-xl-\*** Estas clases aumentan el margen izquierdo de una columna por * columnas, con un máximo de 12.

<div class="row">
    <div class="col-3 padL-3 padL-s-0 borderAll padding-s">.col-3 .padL-3 .padL-s-0</div>
    <div class="col-3 padL-3 padL-s-0 borderAll padding-s">.col-3 .padL-3 .padL-s-0</div>
</div>

### Anidando columnas

Para anidar tu contenido con la cuadrícula predeterminada, agrega una nueva .row y un conjunto de **.col-\*** columnas dentro de una columna existente **.col-\*** . Las filas anidadas deben incluir un conjunto de columnas que sumen 12.

<div class="row">
    <div class="col-12 borderAll padding-l">
        <p>Level 1: .col-12</p>
        <div class="col-6 col-s-12 borderAll padding-s">Level 2: .col-6 .col-s-12</div>
        <div class="col-6 col-s-12 borderAll padding-s">Level 2: .col-6 .col-s-12</div>
    </div>
</div>

### Columnas ocultas

Oculta la columna dependiendo del tamaño de pantalla indicado. Si usamos la clase  **.hidden-s**, cuando la pantalla es pequeña, esta columna estará oculta.

<div class="bg-white docs-section">              
    <div class="row">
        <div class="col-12 col-m-6 hidden-s borderAll padding-s">.col-12 .col-m-6 .hidden-s</div>
        <div class="col-12 col-m-6 col-s-12 borderAll padding-s">.col-12 .col-m-6 .col-s-12</div>
    </div>                        
</div>