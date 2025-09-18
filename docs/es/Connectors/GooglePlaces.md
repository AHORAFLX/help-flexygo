# Google Places

![Google Places](./img/help/Google/GooglePlaces.png)

Google Places integration provides a convenient UI for connecting to and querying Google Maps Platform APIs. It can be used to provide autocomplete functionality for text-based geographic searches by returning places such as businesses, addresses and points of interest. To make it possible you need to realize some steps.

## Settings

1.  Once you've obtained Google API Key by following some steps in flexygo help, you can start configurating Google Places.
2.  With this connector you can transform a simple textbox into a autocomplete address dropdown and get sliced each part on distinct fields.
    
    ![](.\img\Help\GoogleAPIKey\autocomplete_preview.png "Image 1. Autocomplete Preview")
    
    Image 1. Autocomplete Preview
    
3.  To add this function, you need to invoke the following function from **AfterLoadJS** module event.
    
    ![](.\img\Help\GoogleAPIKey\jsafterload.png "Image 2. AfterLoadJS")
    
    Image 2. AfterLoadJS
    

#### JavaScript documentation

You can find more information about some specifics of Google Autocomplete visiting [Google Maps Platform](https://developers.google.com/maps/documentation/places/web-service/autocomplete)

flexygo.utils.googlePlaces.autocomplete.init(adressTextBox: string, config: Object, options: Object, cllback:Function); adressTextBox: Property name or Input ID of autocomplete text input. config (optional): Object with property names or input ids to set values. { "administrative\_area\_level\_1": 'txtDependentLocality' "administrative\_area\_level\_1\_short": 'txtDependentLocalityCode', "administrative\_area\_level\_2": 'txtDoubleDependentLocality', "administrative\_area\_level\_2\_short": 'txtDoubleDependentLocalityCode', "country": 'txtCountry', "country\_short": 'txtCountryId', "geo": 'txtCoords', "lat": 'txtLatitude', "lng": 'txtLongitude', "locality": 'txtLocality', "postal\_code": 'txtPostalCode', "route": 'txtStreet', "street\_number": 'txtNumber' } options (optional): Goolge Places autocomplete options. Example: { componentRestrictions: { country: \["us", "ca"\] }, types: \["address"\], } callback (optional): function that recives an object with select adress after change event.