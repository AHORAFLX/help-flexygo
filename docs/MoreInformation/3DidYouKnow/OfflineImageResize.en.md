# Did you know you can resize images coming from offline?

Starting with Flexygo version 4.6.0.1, the offline section lets you configure image compression to prevent images from being stored in the database at excessive sizes.

## Steps to configure compression

1. Go to the wizard for the object that has the image configuration

![](../../docs_assets/images/DidYouKnow/OfflineImageResize/1.png)

2. Navigate to step 7 and open the image configuration

![](../../docs_assets/images/DidYouKnow/OfflineImageResize/2.png)

3. Set values in the compression section using three parameters:
    * **Compression**: offers four levels: "Nothing", "Low", "Medium" and "High". The last three reduce the size but affect visual quality
    * **Maximum width** and **Maximum height**: set limit dimensions for images, keeping the original proportions without exceeding the specified values

![](../../docs_assets/images/DidYouKnow/OfflineImageResize/3.png)

This feature optimizes data storage by letting the application automatically resize images captured in offline mode.
