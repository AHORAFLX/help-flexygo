# Componente Web

Los módulos HTML, SQL Feed y RSS Feed utilizan todos el componente web flx-html. La forma en que actúan se basa en el tipo de módulo y esto se recupera indicando el nombre del módulo en el componente web.

## Módulo HTML

Solo agrega un **flx-html** componente web en tu página y inmediatamente obtendrás su contenido mostrado en la pantalla. Puedes incluir cualquier otro flexygo componente web en tu módulo HTML.

Para agregar un módulo SQLFeed o un módulo RSS a tu HTML, simplemente agrega el componente web flx-html e indica tu nombre de módulo SQLFeed o RSS.

```html
<flx-html modulename="sysmod-sqlfeed-grid"></flx-html>
```

## Módulo SQL Feed

Convierte cualquier sentencia SQL en un archivo XML estándar y transforma el resultado con cualquier archivo de transformación XSL que desees. Si no quieres lidiar con el lenguaje XSL complejo, solo utiliza el archivo preconstruido SQLFeed.xsl que te permite mostrar cualquier sentencia SQL como un formulario de vista o como una cuadrícula, solo configurando el modo en las opciones de parámetros del módulo.

### Modo cuadrícula

1.  Agrega tu sentencia SQL al módulo. 
```sql
SELECT Top 3 \* FROM objects
```
2.  Indica la ruta del archivo de transformación XSL o usa el archivo preconstruido SQLFeed.xsl. 
3.  Establece el parámetro del módulo en **mode = "grid"** para obtener un diseño de cuadrícula. 
4.  Agrega una relación al objeto que llama. Esta sentencia será analizada contra el objeto principal que llama o se puede usar un token predeterminado del sistema. Solo usa llaves {{propiedad de objeto o nombre de token}} para analizar el contenido. 

**Ejemplo:**

![SQL Feed en modo cuadrícula](/docs_assets/images/WebComponent/SQLFeedGrid.png "SQL Feed en modo cuadrícula")

### Modo vista

1.  Agrega tu sentencia SQL al módulo: 
```sql
SELECT Top 1 \* FROM objects
```
2.  Indica la ruta del archivo de transformación XSL o usa el archivo preconstruido **Rss.xsl.** 
3.  Establece el parámetro del módulo en **blank** para obtener un diseño de vista.
4.  Agrega una relación al objeto que llama. Esta sentencia será analizada contra el objeto principal que llama o se puede usar un token predeterminado del sistema. Solo usa llaves {{propiedad de objeto o nombre de token}} para analizar el contenido. 

**Ejemplo:**

![SQL Feed en modo vista](/docs_assets/images/WebComponent/SQLFeedView.png "SQL Feed en modo vista")

## Módulo RSS

Convierte cualquier proveedor de RSS externo en tu propio feed de noticias formateado con cualquier archivo de transformación XSL que desees. Si no quieres lidiar con el lenguaje XSL complejo, simplemente utiliza el archivo preconstruido Rss.xsl que te permite mostrar noticias en un formato simple.

1.  Selecciona la dirección URL del RSS externo: 
    
    ```js
    RSS address: https://www.yahoo.com/news/rss 
    ```
    
2.  Selecciona tu archivo de transformación XSL. 
    
    ```js
    XSL file Path: ~/xsl/Rss.xsl
    ```
    
3.  Agrega cualquier variable extra que tu archivo XSL pueda necesitar en la opción de parámetro.