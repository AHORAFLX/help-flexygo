# Friendly URLs { .flx-title-with-image }

![flexygo](../docs_assets/images/FlexygoLogo.png){ .fh-image-of-title }

## Configuration

Configuring Friendly URLs in **flexygo** is as easy as accessing the object configuration and turning the Friendly URL switch on. It's important to know that this configuration is only setted on the **object** and **not in the collection**, but once is configured on the first friendly URLs will be active on both.

Objects with no Friendly URL switch active will **not get redirected** when using one of this URLs.

![Friendly URLs configuration](../docs_assets/images/Information/FriendlyURLs.png "Image 1. Reference and Subreference configuration")

## URL Structure

### List

| Structure | Example |
| --- | --- |
| <fh-copy>/list/:object</fh-copy> | /list/locations |
| <fh-copy>/list/:object/page/:pageName</fh-copy> | /list/locations/page/my\_list |
| <fh-copy>/list/:object?field1=value1&field2=value2</fh-copy> | /list/locations?userid=1&accuracy<20 |
| <fh-copy>/list/:object/page/:pageName?field1=value1&field2=value2</fh-copy> | /list/locations/page/my\_list?userid=1&accuracy<20 |

### View

| Structure | Example |
| --- | --- |
| <fh-copy>/view/:object/:primarykey</fh-copy> | /view/location/1 |
| <fh-copy>/view/:object/:primarykey/page/:pageName</fh-copy> | /view/location/1/page/my\_view |

### Edit

| Structure | Example |
| --- | --- |
| <fh-copy>/edit/:object/:primarykey</fh-copy> | /edit/location/1 |
| <fh-copy>/edit/:object/:primarykey/page/:pageName</fh-copy> | /edit/location/1/page/my\_edit |

### Insert

| Structure | Example |
| --- | --- |
| <fh-copy>/insert/:object</fh-copy> | /insert/location |
| <fh-copy>/insert/:object/page/:pageName</fh-copy> | /insert/location/page/my\_edit |

## Observations

If no page is specified, it will navigate to the generic one.

The primary key will be taken from the one configured as **Unique Key**, if no **Unique Key** is configured key field will be used, but if the object contains multiple key fields an error will be returned.