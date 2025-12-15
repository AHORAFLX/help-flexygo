# URLs amigables { .flx-title-with-image }

![flexygo](/docs_assets/images/FlexygoLogo.png){ .flx-image-of-title }

## Configuration

Configurar URLs amigables en **flexygo** es tan sencillo como acceder a la configuración del objeto y activar el interruptor de *Friendly URL*.  
Es importante tener en cuenta que esta configuración se aplica únicamente al **objeto**, no a la **colección**, aunque una vez activada, las URLs amigables funcionan en ambas.

Los objetos que no tengan el interruptor de Friendly URL activo **no serán redirigidos** cuando se acceda mediante una de estas URLs.

![URLs amigables configuration](/docs_assets/images/Information/FriendlyURLs.png "Image 1. Reference and Subreference configuration")

## URL Structure

### List

| Structure | Example |
| --- | --- |
| /list/:object | /list/locations |
| /list/:object/page/:pageName | /list/locations/page/my_list |
| /list/:object?field1=value1&field2=value2 | /list/locations?userid=1&accuracy<20 |
| /list/:object/page/:pageName?field1=value1&field2=value2 | /list/locations/page/my_list?userid=1&accuracy<20 |

### View

| Structure | Example |
| --- | --- |
| /view/:object/:primarykey | /view/location/1 |
| /view/:object/:primarykey/page/:pageName | /view/location/1/page/my_view |

### Edit

| Structure | Example |
| --- | --- |
| /edit/:object/:primarykey | /edit/location/1 |
| /edit/:object/:primarykey/page/:pageName | /edit/location/1/page/my_edit |

### Insert

| Structure | Example |
| --- | --- |
| /insert/:object | /insert/location |
| /insert/:object/page/:pageName | /insert/location/page/my_edit |

## Observations

Si no se especifica una página, se navegará a la página genérica.

La clave primaria se tomará de la que esté configurada como **Unique Key**.  
Si no existe una Unique Key configurada, se utilizará el campo Key.  
Pero si el objeto contiene múltiples campos clave, se devolverá un error.