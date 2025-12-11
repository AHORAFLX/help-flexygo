# Google Places { .flx-title-with-image }

![Google Places](/assets/images/Google/GooglePlaces.png){ .flx-image-of-title }

La integración con **Google Places** proporciona una interfaz cómoda para conectar y consultar las APIs de Google Maps Platform.  
Puede utilizarse para ofrecer funcionalidad de autocompletado en búsquedas geográficas basadas en texto, devolviendo lugares como negocios, direcciones y puntos de interés.  
Para hacerlo posible es necesario seguir algunos pasos.

## Configuración

1.  Una vez que hayas obtenido tu **Google API Key** siguiendo  
    [las instrucciones en la ayuda de flexygo](/Connectors/GoogleAPIKey), podrás empezar a configurar Google Places.

2.  Con este conector puedes transformar un simple **textbox** en un **desplegable con autocompletado de direcciones**, obteniendo cada parte de la dirección dividida en distintos campos.

![Autocomplete Preview](/assets/images/GoogleAPIKey/autocomplete_preview.png "Autocomplete Preview")

3.  Para añadir esta funcionalidad, debes invocar la siguiente función desde el evento **AfterLoadJS** del módulo.

![AfterLoadJS](/assets/images/GoogleAPIKey/jsafterload.png "AfterLoadJS")

#### Documentación JavaScript

Puedes encontrar más información detallada sobre Google Autocomplete en  
[Google Maps Platform](https://developers.google.com/maps/documentation/places/web-service/autocomplete)
{: .flx-warning-card }

```js
flexygo.utils.googlePlaces.autocomplete.init(adressTextBox: string, config: Object, options: Object, callback: Function);

// adressTextBox: Nombre de la propiedad o ID del input para autocompletar.

config (opcional) // Objeto con nombres de propiedades o IDs de inputs donde se asignarán los valores.
{
    "administrative_area_level_1": 'txtDependentLocality',
    "administrative_area_level_1_short": 'txtDependentLocalityCode',
    "administrative_area_level_2": 'txtDoubleDependentLocality',
    "administrative_area_level_2_short": 'txtDoubleDependentLocalityCode',
    "country": 'txtCountry',
    "country_short": 'txtCountryId',
    "geo": 'txtCoords',
    "lat": 'txtLatitude',
    "lng": 'txtLongitude',
    "locality": 'txtLocality',
    "postal_code": 'txtPostalCode',
    "route": 'txtStreet',
    "street_number": 'txtNumber'
}

options (opcional) // Opciones del autocompletado de Google Places. Ejemplo:
{
    componentRestrictions: { country: ["us", "ca"] },
    types: ["address"],
}

callback (opcional) // Función que recibe un objeto con la dirección seleccionada tras el evento change.
```