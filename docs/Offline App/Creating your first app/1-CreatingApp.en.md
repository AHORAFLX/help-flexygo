# Creating an Offline App

Now that you know what a flexygo offline app consists of you'll get to understand the basic concepts that are needed to create one.

## Creating the App

From the admin work area we will create a new app. Once you open the new app edit you will see you sections (basic settings and [synchronization settings](Synchronization.md)) we will let the last ones for a later section about [synchronization](Synchronization.md).

![App Edit](/assets/images/offline/creating-your-first-app/app-edit.png "Offline App edit page")

*Basic settings* properties are pretty self-explanatory but here is what you should know about them:

* **App Name**: This is only used as an internal ID, it won't be shown anywhere.

* **Title, Description and Icon**: This are properties to make your app easier to identify. They will be shown in the [offline work area](#work-area) just for you to know in which app you are working on and in the [multi-app](../MultiApp.md) screen when the user has to select which app is going to use.

* **Active**: It's only purpouse is to make an app not accessible when switched off. You should know that iff turned off you wont be able to synchronize even when using the emulator.

## Work Area

After you have created an app you will be redirected to the *work area*. At a first glance it can seem a bit overwhelming, so in this section we will divide it by sections and you will see how easy is it to work on it.

![Work area](/assets/images/offline/creating-your-first-app/work-area.png "Work area")

### Settings Center

On the top of the work area we've got the settings center. Even though it contains a lot of buttons they are pretty staightforward:

![Settings center](/assets/images/offline/creating-your-first-app/settings-center.png "Settings center")

* **Edit Home**: Is a direct access to the edit of the home [page](UnderstandingPages.md). You will learn how pages work at the [pages](UnderstandingPages.md) section.

* **Edit App**: Here you will return to the [app edit page](#Creating-the-App) with all the basic configuration and [synchronization configuration](Synchronization.md).

* **JS Code and CSS Styles**: When clicking in any of them you will navigate to the list containing the js and css code for your app and you will be able to add new js and css through that list. But this will be explained in greater detail on [app personalization](AppPersonalization.md) section.

* **DB Schema**: As the name say it shows the schema of the offline database app, detailing every [object](#Objects-section) and [view](#Views) keys, properties and properties types. It also contains the *return script* button which will facilitate [return stored](Return-stored.md) creation.

* **Resources**: In this section you will be able of uploading files to be sent on app synchronization, the most common ones being image files.

* **Tracking**: Here you can access all the [tracking](../Tracking.md) information and configuration. Tracking is not active on default, for it to run you mast [activate](../Tracking.md) it yourself.

### Objects Section

