# URLs amigables { .flx-title-with-image }

![flexygo](../docs_assets/images/FlexygoLogo.png){ .fh-image-of-title }

## Configuration

Configurar URLs amigables en **flexygo** es tan sencillo como acceder a la configuración del objeto y activar el interruptor de *Friendly URL*.  
Es importante tener en cuenta que esta configuración se aplica únicamente al **objeto**, **no a la colección**, aunque una vez activada, las URLs amigables funcionan en ambas.

Los objetos que no tengan el interruptor de Friendly URL activo **no serán redirigidos** cuando se acceda mediante una de estas URLs.

![URLs amigables configuration](../docs_assets/images/Information/FriendlyURLs.png "Image 1. Reference and Subreference configuration")

## URL Structure

### List

| Structure | Example |
| --- | --- |
| <fh-copy>/list/:object</fh-copy> | /list/locations |
| <fh-copy>/list/:object/page/:pageName</fh-copy> | /list/locations/page/my_list |
| <fh-copy>/list/:object?field1=value1&field2=value2</fh-copy> | /list/locations?userid=1&accuracy<20 |
| <fh-copy>/list/:object/page/:pageName?field1=value1&field2=value2</fh-copy> | /list/locations/page/my_list?userid=1&accuracy<20 |

### View

| Structure | Example |
| --- | --- |
| <fh-copy>/view/:object/:primarykey</fh-copy> | /view/location/1 |
| <fh-copy>/view/:object/:primarykey/page/:pageName</fh-copy> | /view/location/1/page/my_view |

### Edit

| Structure | Example |
| --- | --- |
| <fh-copy>/edit/:object/:primarykey</fh-copy> | /edit/location/1 |
| <fh-copy>/edit/:object/:primarykey/page/:pageName</fh-copy> | /edit/location/1/page/my_edit |

### Insert

| Structure | Example |
| --- | --- |
| <fh-copy>/insert/:object</fh-copy> | /insert/location |
| <fh-copy>/insert/:object/page/:pageName</fh-copy> | /insert/location/page/my_edit |

## Observations

Si no se especifica una página, se navegará a la página genérica.

La clave primaria se tomará de la que esté configurada como **Unique Key**.  
Si no existe una **Unique Key** configurada, se utilizará el campo Key.  
Pero si el objeto contiene múltiples campos clave, se devolverá un error.