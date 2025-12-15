# Google Places { .flx-title-with-image }

![Google Places](/docs_assets/images/Google/GooglePlaces.png){ .flx-image-of-title }

Google Places integration provides a convenient UI for connecting to and querying Google Maps Platform APIs. It can be used to provide autocomplete functionality for text-based geographic searches by returning places such as businesses, addresses and points of interest. To make it possible you need to realize some steps.

## Settings

1.  Once you've obtained Google API Key by following [some steps in flexygo help](/Connectors/GoogleAPIKey), you can start configurating Google Places.
2.  With this connector you can transform a simple textbox into a autocomplete address dropdown and get sliced each part on distinct fields.
    
![Autocomplete Preview](/docs_assets/images/GoogleAPIKey/autocomplete_preview.png "Autocomplete Preview")
    
3.  To add this function, you need to invoke the following function from **AfterLoadJS** module event.
    
![AfterLoadJS](/docs_assets/images/GoogleAPIKey/jsafterload.png "AfterLoadJS")
    

#### JavaScript documentation

You can find more information about some specifics of Google Autocomplete visiting [Google Maps Platform](https://developers.google.com/maps/documentation/places/web-service/autocomplete)
{: .flx-warning-card }

```js
flexygo.utils.googlePlaces.autocomplete.init(adressTextBox: string, config: Object, options: Object, cllback:Function);
//adressTextBox: Property name or Input ID of autocomplete text input.
config (optional) //Object with property names or input ids to set values.
{
    "administrative_area_level_1": 'txtDependentLocality'
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
 

options (optional) //Goolge Places autocomplete options. Example:
{
	componentRestrictions: { country: ["us", "ca"] },
	types: ["address"],
}

callback (optional) //function that recives an object with select adress after change event.
```