# Formatos

Para llamar a una propiedad del objeto, colección o vista, necesitas usar llaves **{{...}}**.

_Ejemplo:_

```html
<span> {{UserName}} </span>
```

Para utilizar el formato, necesitamos tres parámetros. El primero es la propiedad que queremos usar, el segundo es el tipo de dato y el último parámetro es el valor que queremos darle al formato.

```html
<span> {{ Property | format : values }} </span>
```

## Booleano

Para agregar un estilo, primero indicamos la propiedad, seguida por el tipo de dato y finalmente necesitamos dos parámetros para completar el tipo Booleano (valor verdadero, valor falso).

```json
{{ Property | bool: value true, value false }}
```

En el siguiente ejemplo, podemos ver cómo la propiedad CanView aplicada a la clase de la etiqueta permite dar un estilo u otro. Si el valor que contiene es true, se aplicará la clase text-muted, en cambio si el valor de la propiedad es false, se aplicará la clase txt-danger.

También podemos observar en el ejemplo adecuado el mismo funcionamiento para el título de la etiqueta.

_Ejemplo:_

```html
<i class = "flx-icon icon-eye {{CanView|bool:text-muted,txt-danger}}" title = "{{CanView|bool:Visible,Not Visible}}"></i>
```

En el caso de que uno de los dos valores esté vacío, tomará el valor por defecto y no realizará cambios.

_Ejemplo:_

```html
<i class = "flx-icon icon-eye {{CanView|bool:,txt-danger}}" </i>
```

| Si el valor es false entonces... | Si el valor es true entonces... |
| --- | --- |
| Si el valor no está definido | Si el valor está definido |
| Si no hay valor | Si hay valor |
| Si el valor = false | Si el valor = true |
| Si el valor = ' ' | Si el valor = 'true' |
| Si el valor = 0 | Si el valor = 1 |
| Si el valor = null | \-  |
| Si el valor = null | \-  |

## Decimal

Para formatear el tipo de dato decimal, usamos la misma sintaxis que en los ejemplos anteriores, con la diferencia de los parámetros de valor. En este caso, solo necesitamos uno, que indicará la cantidad de decimales que deseamos mostrar.

```html
<span> {{ Property | format : value }} </span>
```

El código que vemos en el ejemplo, formatea el valor retornado por la propiedad Number a tres decimales.

_Ejemplo:_

```html
<span> {{Number|decimal:3}} </span>
```

## Url

Con el formato de tipo **url**, analizamos las rutas a imágenes, íconos o direcciones con rutas relativas. Así no perderemos la visualización del elemento y evitaremos tener que analizar manualmente la ruta.

Solo necesitamos la llamada a la propiedad y la palabra **url**.

```html
<span> {{ Property | url }} </span>
```

A continuación, se muestra un ejemplo de llamada a una imagen de la propiedad "Avatar" asociada a la dirección ~/profiles/miFoto.png.

_Ejemplo:_

```html
<img class = "img-responsive img-circle" src = "{{Avatar| url}}" alt = "profile">
```

## String

El formato de tipo **String** mantiene la misma sintaxis que hemos usado hasta ahora, y también ofrece tres posibilidades de configuración. Si deseas mostrar el texto retornado por la propiedad en minúsculas, usaremos lo siguiente:

### Minúsculas

```html
<span> {{ Address|string: lower }} </span>
```

### Mayúsculas

```html
<span> {{ Address|string: upper }} </span>
```

### Iniciales en Mayúsculas / Title case

```html
<span> {{ Address|string: capitalized }} </span>
```

### Longitud de la cadena

Finalmente, nos permite decir cuántos caracteres queremos mostrar, añadiendo puntos suspensivos al final. Debemos tener en cuenta que los espacios también se cuentan.

```html
<span> {{ Address|string: 20 }} </span>
```

En el ejemplo, hemos configurado la propiedad **Address** para mostrar los primeros 20 caracteres: Mostramos una dirección e...

## IsNull

El formato de tipo **IsNull** establece un nuevo valor cuando el valor retornado está vacío o es null. Si el valor no es null, mostrará el valor original.

```json
<span> {{ Address|isnull: No address }} </span>
```

También acepta un parámetro opcional si necesitamos cambiar el valor original.

_Ejemplo:_

```json
<span> {{ Address|isnull: No address, Address found }} </span>
```

## Switch

Este tipo de formato nos permite insertar una lista de valores, que deben coincidir con uno de ellos de la propiedad asociada. Si la propiedad no coincide con ninguno de los valores, se aplicará directamente el valor de Else.

```json
{{ Property | switch: [value1:result1, value2:result2, value3:result3, else:result4] }}
```

_Ejemplo:_

```html
<span> {{State|switch:[1:'Receive',2:'Accept',3:'Complete',null:'Outstanding',else:'Closed']}}" ></span>
```

## Formatos de Fecha

El formato de tipo fecha mantiene la misma sintaxis que hemos utilizado hasta ahora, pero ofrece tres posibilidades de configuración.

```json
{{UpgradeDate|date:LL}}
```

```js
moment().format(MMMM Do YYYY, h:mm:ss a); // October 17th 2025, 10:08:03 am
moment().format(dddd);			          // Friday
moment().format(MMM Do YY);		          // Oct 17th 25
moment().format(YYYY [escaped] YYYY);	  // 2025 escaped 2025
moment().format();			              // 2025-10-17T10:08:03+02:00
```

```js
moment().format(W);  			// 2025-10-17T10:08:03+02:00
moment().format(LT);  			// 10:08 AM
moment().format(LTS); 			// 10:08:03 AM
moment().format(L);   			// 10/17/2025
moment().format(l);   			// 10/17/2025
moment().format(LL);  			// October 17, 2025
moment().format(ll);  			// Oct 17, 2025
moment().format(LLL); 			// October 17, 2025 10:08 AM
moment().format(lll); 			// Oct 17, 2025 10:08 AM
moment().format(LLLL);			// Friday, October 17, 2025 10:08 AM
moment().format(llll);			// Fri, Oct 17, 2025 10:08 AM
```

### Desde ahora

```json
{{DateValue|fromnow}}
```

_Ejemplo:_

```json
{{DateValue|fromnow:LLL}}
```

Si nuestra propiedad contenía el primer día del año 2016.

{{Date|fromnow:LL}} -> 01 de enero de 2016

### Desde el momento en que se realizó hasta ahora

```json
{{DateValue|tonow}}
```

_Ejemplo:_

```json
{{DateValue|tonow:LLL}}
```

Si nuestra propiedad contenía el primer día del año 2016.

{{Date|tonow:LLL}} -> 01 de enero de 2016 11:30

## Traducción

Podemos traducir el texto de la plantilla utilizando la siguiente sintaxis: 

```json
{{translate|Any text to translate}}
```

_Ejemplo:_

```html
<i class = "flx-icon icon-object" title= "{{translate|More info}}"></i>
```

La traducción se toma de la tabla de traducción en el área de la plantilla, si no se encuentra en el área de la plantilla, intentará localizarse en el área de la propiedad.

## Formatos Anidados

Las cadenas de formato pueden estar anidadas dentro de otras: 

_Ejemplo:_

```json
{{State|switch:[1:'{{Receive|bool:{{Cad|string:lower}},No}}',2:'Accept',3:'Complete',null:'Outstanding',else:'Closed']}}
```

La cadena de formato anterior con los siguientes valores var obj={State: 1, Receive: 1, Cad: 'este es mi resultado'} produciría la siguiente salida: "este es mi resultado"

## HTML

Escapar cadena HTML:

```html
<span> {{ Property | html }} </span>
```

Con JS:

```js
/**
* Returns an escaped HTML string
* @method escapeHtmlString
* @param {string} str - String
*/
flexygo.utils.parser.escapeHtmlString(str);
```

## JS

Escapar cadena JS: 

```html
<span> {{ Property | js }} </span>
```

Con JS:

```js
/**
* Returns an escaped JS string
* @method escapeJsString
* @param {string} str - String
*/
flexygo.utils.parser.escapeJsString(str);
```

## SQL

Escapar cadena SQL: 

```html
<span> {{ Property | sql }} </span>
```

Con JS:

```js
/**
* Returns an escaped SQL string
* @method escapeSqlString
* @param {string} str - String
*/
flexygo.utils.parser.escapeSqlString(str);
```

## QR

Generar una cadena b64 con imagen QR, si no hay tamaño, el valor predeterminado es 400:

```html
<img src = "{{ Property | qr:size }}" />
```

## Formatos de Máscara

Cuando tenemos un formulario, podemos indicar la cantidad de caracteres que queremos que el usuario ingrese y la forma correcta en que debe ser escrito.

### Teléfono

```html
<flx-text placeholder = "flx Telephone Field" name = "phone" iconclass = "flx-icon icon-phone" required = "" Mask = "99-999-99-99"/><span class = "input-group-addon"><i class = "flx-icon icon-phone" </i></span></flx-text>
```

![Phone](/assets/images/Formats/Phone.png "Phone")

### Teléfono + Ext

```html
<flx-text placeholder = "flx Telephone Field" name = "phone" iconclass = "flx-icon icon-phone" required = "" Mask = "(999) 999-9999? x99999"/><span class = "input-group-addon"><i class = "flx-icon icon-phone" </i></span></flx-text>
```

![Phone + Ext](/assets/images/Formats/PhoneExtension.png "Phone + Ext")

### Correo Electrónico

```html
<flx-text placeholder = "flx Email Field" name = "email" iconclass = "flx-icon icon-web" required = "" Mask = "*******@aaaaaaa.aaa"/><span class = "input-group-addon"><i class = "flx-icon icon-web" </i></span></flx-text>
```

![Email](/assets/images/Formats/Email.png "Email")

### Clave del Producto

```html
<flx-text name = "productKey" placeholder = "flx Key Field" iconclass = "flx-icon icon-key" Mask = "a*-999-a999"/>
```

![ProductKey](/assets/images/Formats/ProductKey.png "Product Key")

## Vinculación de Archivos

Flexygo tiene un sistema para devolver archivos en un enlace cifrado, para esto, el campo de la vista que devuelve la dirección del documento debe tener un alias que comience con uno de los siguientes formatos:

<fh-copy class="link">flxpathimage</fh-copy>: Flexygo gestión de imágenes.

<fh-copy class="link">flxpathdocument</fh-copy>: Flexygo gestión de documentos.

<fh-copy class="link">flxpath|ObjectName|PropertyName</fh-copy>: La configuración de la propiedad de ese objeto es leída.

<fh-copy class="link">flxpath</fh-copy>: Gestión de imágenes o documentos ERP, siempre que la ruta del documento esté completa.

<fh-copy class="link">flxpathzoom</fh-copy>: Gestión de imágenes en miniatura, puede incluir el tamaño de miniatura separado por _, si no se especifica un tamaño por defecto será 75x75 [ancho]x[alto].

Vista:

```sql
SELECT Foto as flxpathzoomEmployee\_120x120 FROM Employees
```

Plantilla:

```html
<img src = "{{flxpathzoomEmployee|url}}"/>
```

## Barra de herramientas

Este tag permite renderizar una barra de herramientas en una lista o módulo de vista, utilizando la configuración del objeto del módulo para renderizar los botones:

Plantilla:

```json
{{toolbar|systb-edit}}
```