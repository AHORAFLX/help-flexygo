# Grid Options

See how to use the grid system to work across multiple devices. **flexygo** system behaves great not only in the latest desktop browsers, but also in tablets and smartphone browsers too. It's packed with great features, such as the table with 12 columns.

![flexygo grid](./img/resp_flexygo_horizontal.png "Image 1. flexygo grid")

Image 1. flexygo grid

| SYSTEM WORK | Small devices | Medium devices | Large devices | Extra large devices |
| --- | --- | --- | --- | --- |
| Grid behavior | Collapsed to start, horizontal above breakpoints |     |     |     |
| Max container width | 728px | 992px | 1200px | Larger than 1200px |
| Class prefix | col-s | col-m | col-l | col-xl |
| OffSets | Yes |     |     |     |
| Nestable | Yes |     |     |     |

###### Example

Using a single set of .col-\*

.row .col-12

.col-1

.col-1

.col-1

.col-1

.col-1

.col-1

.col-1

.col-1

.col-1

.col-1

.col-1

.col-1

.col-2

.col-2

.col-2

.col-2

.col-2

.col-2

.col-3

.col-3

.col-3

.col-3

.col-4

.col-4

.col-4

.col-6

.col-6

###### Example: Mobile, tablet, desktops

Don't want your columns to simply stack in smaller devices? Use the extra small and medium device grid classes by adding .col-s-\* .col-m-\* to your columns. See the example below for a better idea of how it all works

.col-s-12 .col-m-8 .col-8

.col-s-12 .col-m-4 .col-4

.col-s-12 .col-m-4 .col-4

.col-s-12 .col-m-4 .col-4

.col-s-12 .col-m-4 .col-4

.col-s-6 .col-6

.col-s-6 .col-6

###### Example: Offsetting columns

Move columns to the right using .padL-\* classes. These classes increase the left margin of a column by \* columns. For example, .padL-m-4 moves .col-4 over four columns.

.col-4

.col-4 .padL-4

.col-3 .padL-3

.col-3 .padL-3

.col-6 .padL-3

###### Example: Responsive offsetting columns

Move columns to the right using .padL-s-\* .padL-m-\* .padL-l-\* .padL-xl-\* classes. These classes increase the left margin of a column by \* columns with a maximum to 12.

.col-3 .padL-3 .padL-s-0

.col-3 .padL-3 .padL-s-0

###### Example: Nesting columns

To nest your content with the default grid, add a new .row and set of .col-\* columns within an existing .col-\* column. Nested rows should include a set of columns that add up to 12.

Level 1: .col-12

Level 2: .col-6 .col-s-12

Level 2: .col-6 .col-s-12

###### Example: Hidden columns

Hide the column depending on the indicated screen size. If we use .hidden-s class, when the screen is small this column will be hidden.

.col-12 .col-m-6 .hidden-s

.col-12 .col-m-6 .col-s-12