# Google Map

Google Maps es un servicio desarrollado por Google con el cual puedes encontrar la ubicación exacta de ciudades, negocios o atracciones en Internet. Para implementar Google Maps en tu flexygo proyecto, necesitas obtener una clave de API de Google. Una vez que tengas la clave, deberías agregarla a la configuración de flexygo (Imagen 1).

![](/docs_assets/images/ModulesConf/ApiKey.png "Image 1. API Keys")

Consulta cómo obtener la clave de API de Google en la [ayuda de flexygo ](/Connectors/GoogleAPIKey).
{: .flx-warning-card }

Agregar un mapa de Google es muy simple. Necesitarás hacer referencia a un módulo de mapa.
```html
<flx-map modulename="sysmod-map"></flx-map>
```

O puedes agregar directamente el componente web flx-map.
```html
<flx-map>         
	<marker address="Polígono Industrial Camí del Mar, C/ Ceramistes, 19, 46120 Alboraia, Valencia" title="Ahora Freeware">Content</marker>
</flx-map> 
```

![Standard map](/docs_assets/images/Maps/Main.png "Standard map")

## Opciones del Módulo

1.  Agrega tu sentencia SQL al módulo para crear marcadores: 
    ```sql
    SELECT '60' AS lat, '20' AS lng, 'Noruega' AS address, 'Titulo' AS title, 'Content' AS content, 'Icon' AS icon, 'Label' AS label, '1' AS zIndex
    ```

2.  Configura las opciones JSON: 
    ```json
    {"Cluster":"true","Color":"retro","Width":"100%","Height":"400"}
    ```

## Ejemplo de Agrupación de Marcadores

![Marker cluster map](/docs_assets/images/Maps/Cluster.png "Marker cluster map")

## Rutas

Con flx-map también puedes crear rutas como esta.

Si deseas agregar información al hacer clic en uno de los puntos de la ruta, necesitas establecer un id. Esa información se puede establecer en el título o como parte del html interno del marcador.
```html
<flx-map cluster="false" width="auto" height="400" route="true" linewidht="3">
    <marker lat="39.501294" lng="-0.343337" id="1" title="Ahora Freeware">Content</marker>
    <marker lat="39.501467" lng="-0.343836" id="2" title="Ahora Freeware">Content</marker>
    <marker lat="39.502849" lng="-0.342913" id="3" title="Ahora Freeware"></marker>
    <marker lat="39.503330" lng="-0.344072" id="4" title="Ahora Freeware"></marker>
</flx-map>
```

![Routes map](/docs_assets/images/Maps/Routes.png "Routes map")

### Personalizar el Estilo de la Ruta

Las rutas se pueden personalizar utilizando estas propiedades:

**Flecha**: Establece un ícono de flecha al principio y al final de la ruta para hacer la dirección más visual. (predeterminado: verdadero)

**Punteado**: Establece un ícono de punto en cada marcador. (predeterminado: verdadero)

**lineColor**: Establece el color de la línea, puedes usar rgb, hex o incluso colores por nombre. (predeterminado: #FF0000)

**lineWidth**: Establece el grosor de la línea. (predeterminado: 3)
```html
<flx-map cluster="false" width="auto" height="400" route="false" arrow="false" dotted="true" linecolor="red" linewidht="2">
    <marker lat="39.501294" lng="-0.343337" id="1" title="Ahora Freeware">Content</marker>
    <marker lat="39.501467" lng="-0.343836" id="2" title="Ahora Freeware"></marker>
    <marker lat="39.502849" lng="-0.342913" id="3" title="Ahora Freeware">Content</marker>
    <marker lat="39.503330" lng="-0.344072" id="4" title="Ahora Freeware"></marker>
</flx-map>
```

![Routes styled red arrows map](/docs_assets/images/Maps/RouteStyledRed.png "Routes styled red arrows map")

```html
<flx-map cluster="false" width="auto" height="400" route="true" arrow="true" dotted="false" linecolor="rgb(114,137,218)" linewidht="5">
    <marker lat="39.501294" lng="-0.343337" id="1" title="Ahora Freeware">Content</marker>
    <marker lat="39.501467" lng="-0.343836" id="2" title="Ahora Freeware"></marker>
    <marker lat="39.502849" lng="-0.342913" id="3" title="Ahora Freeware">Content</marker>
    <marker lat="39.503330" lng="-0.344072" id="4" title="Ahora Freeware"></marker>
</flx-map>
```

![Routes styled blue arrows map](/docs_assets/images/Maps/RouteStyledBlue.png "Routes styled blue arrows map")

### Agregar Múltiples Rutas en un Mapa

Con el parámetro **grupo** podrás dividir los marcadores en diferentes rutas, como se puede ver en este ejemplo.

```html
<flx-map cluster="false" width="auto" height="400" route="true" arrow="true" dotted="false" linecolor="rgb(114,137,218)" linewidht="5">
    <marker lat="39.501294" lng="-0.343337" id="1" group="Ruta1" title="1:1">Content</marker>
      <marker lat="39.501467" lng="-0.343836" id="2" group="Ruta1" title="1:2"></marker>
      <marker lat="39.502849" lng="-0.342913" id="3" group="Ruta1" title="1:3">Content</marker>
      <marker lat="39.503330" lng="-0.344072" id="4" group="Ruta1" title="1:4"></marker>
      <marker lat="39.501112" lng="-0.345742" id="5" group="Ruta2" title="2:1">Content</marker>
      <marker lat="39.500354" lng="-0.343202" id="6" group="Ruta2" title="2:2"></marker>
      <marker lat="39.499427" lng="-0.343997" id="7" group="Ruta2" title="2:3">Content</marker>
      <marker lat="39.498954" lng="-0.342874" id="8" group="Ruta2" title="2:4"></marker>
      <marker lat="39.502818" lng="-0.350026" id="9" group="Ruta3" title="3:1"></marker>
      <marker lat="39.501361" lng="-0.351193" id="10" group="Ruta3" title="3:2"></marker>
      <marker lat="39.500840" lng="-0.352105" id="11" group="Ruta3" title="3:3"></marker>
</flx-map>
```

![Multiple routes map](/docs_assets/images/Maps/MultipleRoutes.png "Multiple routes map")

## Agregar polígonos en Google Maps

Con el parámetro **coords** podrás agregar marcadores con polígonos en lugar de un punto; si se define el parámetro coords, lat y lng, coords tiene prioridad. Puedes verlo en funcionamiento en este ejemplo.

```html
<flx-map cluster="false" width="auto" height="400">
  <marker lat="39.501317756703116" lng="-0.3431863435308278">Ceesi asesores</marker>
  <marker coords="[{lat:39.50147061967978, lng:-0.34315976635630774},{lat:39.50132574650802, lng:-0.3432321859947825},{lat:39.50126365791343, lng:-0.34299615161753155},{lat:39.501387835047176, lng:-0.3429210497702245}]">Parcela 1</marker>
  <marker coords="[{lat:39.50082489693055, lng:-0.3432134105329557},{lat:39.500783504242015, lng:-0.3430712534648387},{lat:39.50096563188717, lng:-0.342931778605554},{lat:39.501013233352104, lng:-0.34309807555316263}]" lat="39.501317756703116" lng="-0.3431863435308278">Parcela 2</marker>
  <marker color="blue" coords="[{lat:39.501475721696295, lng:-0.3445088082995023},{lat:39.50088741697042, lng:-0.3447212284015442},{lat:39.500629849154926, lng:-0.3437994768873265},{lat:39.501136203158666, lng:-0.34349222638258725}]">Parcela 3</marker>
</flx-map>
```

![Polygons map](/docs_assets/images/Maps/Polygons.png "Polygons map")

## Agregar círculos en Google Maps

Con el parámetro **radius** y **radiuscolor** podrás agregar marcadores con círculos y un marcador en el centro. Puedes verlo en funcionamiento en este ejemplo.

```html
<flx-map cluster="false" width="auto" height="400">
    <marker lat="39.501317756703116" lng="-0.3431863435308278" radius="750" radiuscolor="blue">Ceesi asesores</marker>
    <marker address="Valencia" radius="500" radiuscolor="red"></marker>
</flx-map>
```

![Circles map](/docs_assets/images/Maps/Circles.png "Circles map")

## Skins Personalizados

El mapa por defecto usará una apariencia clara u oscura dependiendo del modo del usuario. Pero con la propiedad de color puedes establecer un tema que se mantendrá igual para todos.

### Claro
![Light map](/docs_assets/images/Maps/Light.png "Light map")

### Oscuro
![Dark map](/docs_assets/images/Maps/Dark.png "Dark map")

### Retro
![Retro map](/docs_assets/images/Maps/Retro.png "Retro map")

### Plata
![Silver map](/docs_assets/images/Maps/Silver.png "Silver map")

### Noche
![Night map](/docs_assets/images/Maps/Night.png "Night map")

### Berenjena
![Aubergine map](/docs_assets/images/Maps/Aubergine.png "Aubergine map")

Mira los siguientes videos en nuestro canal de YouTube relacionados con el Módulo de Mapas.

<div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/qV9uGvAL_5g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>

<div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/2CDScKLUVjw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>