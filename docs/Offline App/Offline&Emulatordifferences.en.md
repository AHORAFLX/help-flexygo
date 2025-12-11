# App/Emulator differences

## Getting SQL data on JS

When getting SQL data from js functions its a common mistake to try using directly the rows property from the returned object, but this way it will only work on the emulator. To get rows data from js functions we have the **flexygo.sql.getRow** and **flexygo.sql.getRows** methods, which will be the ones in charge of the retrieval of this information.

**flexygo.sql.getRow** is normally the preferable method, unless you need to use most of the sql results, in which case it would be better to use the **flexygo.sql.getRows**.

![Object View](/assets/images/offline/EmulatorPhoneSQL.png "Emulator/Phone SQL differences")

## Image gallery methods

Image gallery on emulator will only show the getPicture button, which will upload a default image. While on the phone three buttons will appear the **getPicture** (it takes a camera picture), the **getGalleryPicture** (gets a picture directly from the phone gallery) and the **getPicture** with multiple setting active (takes camera pictures until camera gets cancelled).

## Tracking

Tracking will only be done when using a mobile device.