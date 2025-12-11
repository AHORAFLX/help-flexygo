# Tracking configuration

## Configure device

Before even starting is important to configure devices to allow the app to track users position while closed. For this the app will automatically ask permissions to users with tracking enabled, but most devices will need extra configuration depending of their brand, for that you should follow [dontkillmyapp](https://dontkillmyapp.com/) steps.

## Tracking configuration menu

A new tracking button has been added to app creation menu, which will send you to tracking configuration menu, where you'll be able to configure and visualize every tracking setting:

![](/assets/images/offline/TrackingButton.png "Image 1. Set tracking")

In this new menu you'll be able to see this information in the following modules:

Last locations: Shows every user last location known, and when marker is clicked you'll be able to see when was that location taken and users phone and mail address.

Tracking schedule: Shows every stablished tracking schedule, and it allows to create more and edit the ones that already exist.

User tracking information: Shows every user and its tracking configuration information(radius and inaccuracy) divided between users with active tracking and the ones that don't. On the right of every user there'll be an icon which shows if there's a calendar schedule assigned to him (blue icon) or if not (red icon), if clicked you'll navigate to that schedule view, or if it's of a not scheduled one to a new schedule creation for that user. Lastly if you click on the green map icon (only appears on correctly configured users) you'll see that user route

![](/assets/images/offline/TrackingCnfMenu.png "Image 2. Set tracking")

## Configure user tracking

Tracking is activated individually on every user creation or edition

There you need to activate the tracking switch and configure the following properties:

### Radius

Radius is the distance, in meters, that the user needs to move for the app to update its position.

As smaller the radius parameter is, the more data the database will get, so it's recommended not to set it smaller than 20 to avoid getting too many logs into the database.

### Maxim Inaccuracy

Maxim Inaccuracy is used to only send to server those coordenates which the app knows that the distance between obtained coordenates and the true user position is smaller than this value. This value is important to avoid getting bad information, because of that is recommended the value not to be lower than 45.

![](/assets/images/offline/SetTracking.png "Image 3. Set tracking")

When this parameters are configured and saved the app will be able to track every position all the time since the user first app initiation. But this isn't the way this functionalitie is intended to be used for, is cause of that that you will need to set schedules for the functionalitie to work during the indicated work hours, for that we have the Tracking Schedule object, which can be seen and created from the tracking configuration menu. When you create one you just need to select to who it will be applied (individual user or a role), set a title for you to identify it, stablish a daily schedule and set view (which object must be sysUsers) that must contain a column with every user holiday, it can be as simple as it's shown in this two images.

Once you have all of this configured functionalitie will be completely operational.

![](/assets/images/offline/SelectTrackingSchedules.png "Image 5. Set schedules")

![](/assets/images/offline/SetHolidaysView.png "Image 5. Set holidays")

## Configure data clean process

On default flexygo has a Cronjob called ClearLocations that will be deleting every week locations logs older than 7 days, that You will have to enable.

This Job can also be edited to be triggered in a diferent timespan and you can modify its Days process param to delete logs older than that value.

![](/assets/images/offline/SelectTrackingProcess.png "Image 6. Select clear locations process")

![](/assets/images/offline/ConfigureClearLocations.png "Image 7. Configure clear locations process")