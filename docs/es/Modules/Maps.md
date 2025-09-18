# Google Map

Google Maps is a service developed by Google with which you can find the exact location of cities, businesses or attractions on the Internet. To implement Google Maps in your **flexygo** project, you need to obtain a Google API Key. Once you have the key, you should add it to **flexygo** settings (Image 1).

![](.\img\Help\ModulesConf\ApiKey.png "Image 1. API Keys")

Image 1. API Keys

See how to obtain Google API Key in flexygo help

Adding a Map from Google is very simple. You’ll need to refer to a map module.

Or you can add directly the flx-map web component.

Content

Google Map

Content

##### Module Options

1.  Add your SQL sentence to the module in order to create markers: SELECT '60' AS lat, '20' AS lng, 'Noruega' AS address, 'Titulo' AS title, 'Content' AS content, 'Icon' AS icon, 'Label' AS label, '1' AS zIndex
2.  Set JSON options: {"Cluster":"true","Color":"retro","Width":"100%","Height":"400"}

### Marker Cluster Example

Marker Cluster

Content

### Routes

With flx-map you can also create routes like this one.

If you want to add information on click to one of the points of the route you need to set an id. That info can be set in title os as part of the marker inner html.

Content Content Content Content

### Customize route style

Routes can be customized using this propperties:

**Arrow**: Sets an arrow icon at the beggining and end of the route to make direction more visual. (default: true)

**Dotted**: Sets a dot icon on every marker. (default: true)

**lineColor**: Sets the line color, you can use rgb, hex or even colors by name. (default: #FF0000)

**lineWidht**: Sets the line width. (default: 3)

Content Content Content Content Content Content Content Content

### Add multiple routes in one map

With the parameter **group** you will be able to divide markers in different routes, as it can be seen in this example.

Content Content Content Content Content Content Content Content

### Add polygons in google maps

With the parameter **coords** you will be able to add markers with polygons instead a point, if coords, lat and lng parameter is defined, coords has priority.You can see it working in this example.

Ceesi asesores Parcela 1 Parcela 2 Parcela 3 Ceesi asesores Parcela 1 Parcela 2 Parcela 3

### Add circles in google maps

With the parameter **radius** and **radiuscolor** you will be able to add markers with circles and a marker on the center.You can see it working in this example.

Ceesi asesores Ceesi asesores

### Custom Skins

Map on default will use light or dark skin depending on users mode. But with the color property you can set a theme that will stay the same for everyone.

Light

Content

Dark

Content

Retro

Content

Silver

Content

Night

Content

Aubergine

Content

Watch the following videos on our YouTube channel related to Maps Module.