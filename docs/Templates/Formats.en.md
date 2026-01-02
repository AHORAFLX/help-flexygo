# Formats

To call a property from the object, collection or view, you need to use curly brackets **{{...}}**.

_Example:_

```html
<span> {{UserName}} </span>
```

To use the format, we need three parameters. The first we will indicate the property that you want to use, the second we will indicate the type of data and the last parameter that we need is the value that we are going give to format.

```html
<span> {{ Property | format : values }} </span>
```

## Boolean

To add a style, we will first indicate your property, followed by the data type and finally need two parameters to complete the type Boolean (true value, false value).

```js
{{ Property | bool: value true, value false }}
```

In the next example, we can see as the property **CanView** applied to the class of the label we can give a style or another. If the value that contains corresponds to true will apply the class text-muted, on the contrary if the value of the property is false, will apply the class txt-danger.

Also we can observe in the proper example, the same functioning for the title of the tag.

_Example:_

```html
<i class = "flx-icon icon-eye {{CanView|bool:text-muted,txt-danger}}" title = "{{CanView|bool:Visible,Not Visible}}"></i>
```

It may be the case that one of the two values is empty, it will take the value by default and will not make changes.

_Example:_

```html
<i class = "flx-icon icon-eye {{CanView|bool:,txt-danger}}"></i>
```

| If the value is false then... | If the value is true then... |
| --- | --- |
| If the value is not defined | If the value is defined |
| If no value | If value |
| If value = false | If value = true |
| If value = ' ' | If value = 'true' |
| If value = 0 | If value = 1 |
| If value = null | \-  |
| If value = 'null' | \-  |

## Decimal

To format the type of data **decimal**, use the same syntax as in previous examples, to difference of the parameters of value. In this case, we need only one, this value will indicate the number of decimal places that you want to display.

```html
<span> {{ Property | format : value }} </span>
```

The code that we see in the example, formats the value returned by the property **Number** to three decimals.

_Example:_

```html
<span> {{Number|decimal:3}} </span>
```

## Url

We got with the format type **url**, parse the paths to the images, icons or addresses with relative paths. Thus, we will not lose the display of the element and avoid taking into account the route at the time of parsing manually. Only it is needed the call to the property and the word **url**.

```html
<span> {{ Property | url }} </span>
```

Bellow, there is an example of call to an image of the property "Avatar" having associated to this address _~/profiles/miFoto.png_.

_Example:_

```html
<img class = "img-responsive img-circle" src = "{{Avatar| url}}" alt = "profile">
```

## String

**String** type format keeps the same syntax we've used so far, it also offers three possibilities of configuration. If you want to display the text returned by the property to lowercase, we will use the following:

### Lowercase

```html
<span> {{ Address|string: lower }} </span>
```

### Uppercase

```html
<span> {{ Address|string: upper }} </span>
```

### Capitalized / Title case

```html
<span> {{ Address|string: capitalized }} </span>
```

### String length

Finally, offers us to tell you that number of characters we want to show by adding back three points. We have to take into account that the spaces are counts.

```html
<span> {{ Address|string: 20 }} </span>
```

If we look at the example, we have set the property **Address** to show us the first 20 characters: We show an address e...

## IsNull

**IsNull** type format sets new value when returned value is empty or null. If the value is not null, it will display the original value.

```html
<span> {{ Address|isnull: No address }} </span>
```

It also accepts an optional parameter if we need to change original value.

_Example:_

```html
<span> {{ Address|isnull: No address, Address found }} </span>
```

## Switch

This type of format, allows us to insert a list of values, must meet one of them with the associated property. But when the property doesn't meet any of the values, the value from Else will be applied directly.

```js
{{ Property | switch: [value1:result1, value2:result2, value3:result3, else:result4] }}
```

_Example:_

```html
<span> {{State|switch:[1:'Receive',2:'Accept',3:'Complete',null:'Outstanding',else:'Closed']}}" ></span>
```

## Date Formats

Type format **date** maintains the same syntax we've used so far, it also offers three possibilities of configuration.

```js
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

### From now

```js
{{DateValue|fromnow}}
```

_Example:_

```js
{{DateValue|fromnow:LLL}}
```

If our property contained the first day of the year 2016.

{{Date|fromnow:LL}} -> 01 de enero de 2016

### From the moment in which it made until now

```js
{{DateValue|tonow}}
```

_Example:_

```js
{{DateValue|tonow:LLL}}
```

If our property contained the first day of the year 2016.

{{Date|tonow:LLL}} -> 01 de enero de 2016 11:30

## Translate

We can translate template text using the following syntax:

```js
{{translate|Any text to translate}}
```

_Example:_

```html
<i class = "flx-icon icon-object" title= "{{translate|More info}}"></i>
```

The translation is taken from the translation table in the **template area**, if it is not found in the template area, it will try to be localized in the **property area**.

## Nested formats

Format strings can be nested inside each other:

_Example:_

```js
{{State|switch:[1:'{{Receive|bool:{{Cad|string:lower}},No}}',2:'Accept',3:'Complete',null:'Outstanding',else:'Closed']}}
```

The previous format string with the following values var obj={State: 1, Receive: 1, Cad: 'this is my result'}  
would produce the following output: "this is my result"

## HTML

Escape HTML string:

```html
<span> {{ Property | html }} </span>
```

With JS:

```js
/**
* Returns an escaped HTML string
* @method escapeHtmlString
* @param {string} str - String
*/
flexygo.utils.parser.escapeHtmlString(str);
```

## JS

Escape JS string:

```html
<span> {{ Property | js }} </span>
```

With JS:

```js
/**
* Returns an escaped JS string
* @method escapeJsString
* @param {string} str - String
*/
flexygo.utils.parser.escapeJsString(str);
```

## SQL

Escape SQL string:

```html
<span> {{ Property | sql }} </span>
```

With JS:

```js
/**
* Returns an escaped SQL string
* @method escapeSqlString
* @param {string} str - String
*/
flexygo.utils.parser.escapeSqlString(str);
```

## QR

Generate a b64 string with QR image, if there's no size, default value is 400:

```html
<img src = "{{ Property | qr:size }}" />
```

## Mask Formats

When we have a form, we can indicate that number of characters we want to enter the user and the correct way that expected to be written.

### Phone

```html
<flx-text placeholder = "flx Telephone Field" name = "phone" iconclass = "flx-icon icon-phone" required = "" Mask = "99-999-99-99"/><span class = "input-group-addon"><i class = "flx-icon icon-phone" </i></span></flx-text>
```

![Phone](/docs_assets/images/Formats/Phone.png "Phone")

### Phone + Extension

```html
<flx-text placeholder = "flx Telephone Field" name = "phone" iconclass = "flx-icon icon-phone" required = "" Mask = "(999) 999-9999? x99999"/><span class = "input-group-addon"><i class = "flx-icon icon-phone"></i></span></flx-text>
```

![Phone + Ext](/docs_assets/images/Formats/PhoneExtension.png "Phone + Ext")

### Email

```html
<flx-text placeholder = "flx Email Field" name = "email" iconclass = "flx-icon icon-web" required = "" Mask = "*******@aaaaaaa.aaa"/><span class = "input-group-addon"><i class = "flx-icon icon-web"></i></span></flx-text>
```

![Email](/docs_assets/images/Formats/Email.png "Email")

### Product key

```html
<flx-text name = "productKey" placeholder = "flx Key Field" iconclass = "flx-icon icon-key" Mask = "a*-999-a999"/>
```

![ProductKey](/docs_assets/images/Formats/ProductKey.png "Product Key")

## File Linking

**flexygo** has a system to return files in an encrypted link, for this, the field of the view that returns the address of the document must have an alias that begins with one of the following formats:

<fh-copy class="link">flxpathimage</fh-copy>: Flexygo image management.

<fh-copy class="link">flxpathdocument</fh-copy>: Flexygo document management.

<fh-copy class="link">flxpath|ObjectName|PropertyName</fh-copy>: The property configuration of that object is read.

<fh-copy class="link">flxpath</fh-copy>: Management of images or ERP documents, as long as the document path is complete.

<fh-copy class="link">flxpathzoom</fh-copy>: Thumbnail image management, can include thumbnail size separated by _, if you do not specify a default size it will be 75x75 [width]x[height].

View:

```sql
SELECT Foto as flxpathzoomEmployee\_120x120 FROM Employees
```

Template:

```html
<img src = "{{flxpathzoomEmployee|url}}"/>
```

## Toolbar

This tags allows you to render a toolbar in a list or a wiew module, using the object configuration of the module to render the buttons:

Template:

```js
{{toolbar|systb-edit}}
```