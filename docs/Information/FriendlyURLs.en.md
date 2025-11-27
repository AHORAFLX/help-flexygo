# Friendly URLs { .flx-title-with-image }

![flexygo](/assets/images/FlexygoLogo.png){ .flx-image-of-title }

## Configuration

Configuring Friendly URLs in **flexygo** is as easy as accessing the object configuration and turning the Friendly URL switch on. It's important to know that this configuration is only setted on the object and not in the collection, but once is configured on the first friendly URLs will be active on both.

Objects with no Friendly URL switch active will not get redirected when using one of this URLs.

![Friendly URLs configuration](/assets/images/Information/FriendlyURLs.png "Image 1. Reference and Subreference configuration")

## URL Structure

### List

| Structure | Example |
| --- | --- |
| /list/:object | /list/locations |
| /list/:object/page/:pageName | /list/locations/page/my\_list |
| /list/:object?field1=value1&field2=value2 | /list/locations?userid=1&accuracy<20 |
| /list/:object/page/:pageName?field1=value1&field2=value2 | /list/locations/page/my\_list?userid=1&accuracy<20 |

### View

| Structure | Example |
| --- | --- |
| /view/:object/:primarykey | /view/location/1 |
| /view/:object/:primarykey/page/:pageName | /view/location/1/page/my\_view |

### Edit

| Structure | Example |
| --- | --- |
| /edit/:object/:primarykey | /edit/location/1 |
| /edit/:object/:primarykey/page/:pageName | /edit/location/1/page/my\_edit |

### Insert

| Structure | Example |
| --- | --- |
| /insert/:object | /insert/location |
| /insert/:object/page/:pageName | /insert/location/page/my\_edit |

## Observations

If no page is specified, it will navigate to the generic one.

The primary key will be taken from the one configured as "Unique Key", if no Unique Key is configured key field will be used, but if the object contains multiple key fields an error will be returned.