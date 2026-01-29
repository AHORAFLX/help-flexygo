# Grid Options

See how to use the grid system to work across multiple devices. **flexygo** system behaves great not only in the latest desktop browsers, but also in tablets and smartphone browsers too. It's packed with great features, such as the table with 12 columns.

![flexygo grid](../docs_assets/images/Style/resp_flexygo_horizontal.png "Image 1. flexygo grid")

<table>
    <thead>
        <tr>
                <th>SYSTEM WORK</th>
                <th>Small devices</th>
                <th>Medium devices</th>
                <th>Large devices</th>
                <th>Extra large devices</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="bold">Grid behavior</td>
            <td colspan="4">Collapsed to start, horizontal above breakpoints</td>
        </tr>                  
        <tr>
            <td class="bold">Max container width</td>                    
            <td>728px</td>
            <td>992px</td>
            <td>1200px</td>
            <td>Larger than 1200px </td>
        </tr>
        <tr>
            <td class="bold">Class prefix</td>                    
            <td>col-s</td>
            <td>col-m</td>
            <td>col-l</td>
            <td>col-xl</td>
        </tr>
        <tr>
            <td class="bold">OffSets</td>                    
            <td colspan="4">Yes</td>
        </tr>
        <tr>
            <td class="bold">Nestable</td>                    
            <td colspan="4">Yes</td>
        </tr>
    </tbody>
</table>

## Examples

### General

Using a single set of **.col-\***.

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

### Mobile, tablet, desktops

Don't want your columns to simply stack in smaller devices? Use the extra small and medium device grid classes by adding **.col-s-\* .col-m-\*** to your columns. See the example below for a better idea of how it all works

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

### Offsetting columns

Move columns to the right using **.padL-\*** classes. These classes increase the left margin of a column by \* columns. For example, **.padL-m-4** moves **.col-4** over four columns.

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

### Responsive offsetting columns

Move columns to the right using **.padL-s-\* .padL-m-\* .padL-l-\* .padL-xl-\*** classes. These classes increase the left margin of a column by \* columns with a maximum to 12.

<div class="row">
    <div class="col-3 padL-3 padL-s-0 borderAll padding-s">.col-3 .padL-3 .padL-s-0</div>
    <div class="col-3 padL-3 padL-s-0 borderAll padding-s">.col-3 .padL-3 .padL-s-0</div>
</div>

### Nesting columns

To nest your content with the default grid, add a new .row and set of **.col-\*** columns within an existing **.col-\*** column. Nested rows should include a set of columns that add up to 12.

<div class="row">
    <div class="col-12 borderAll padding-l">
        <p>Level 1: .col-12</p>
        <div class="col-6 col-s-12 borderAll padding-s">Level 2: .col-6 .col-s-12</div>
        <div class="col-6 col-s-12 borderAll padding-s">Level 2: .col-6 .col-s-12</div>
    </div>
</div>

### Hidden columns

Hide the column depending on the indicated screen size. If we use **.hidden-s** class, when the screen is small this column will be hidden.

<div class="bg-white docs-section">              
    <div class="row">
        <div class="col-12 col-m-6 hidden-s borderAll padding-s">.col-12 .col-m-6 .hidden-s</div>
        <div class="col-12 col-m-6 col-s-12 borderAll padding-s">.col-12 .col-m-6 .col-s-12</div>
    </div>                        
</div>