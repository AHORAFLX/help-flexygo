# How do I remove the Flexygo service, force its update, or install it without installing a Flexygo instance on that machine?

Download the attached zip and extract it into a folder on the server, for example `C:\FlexygoServiceHelper`.

![](../../docs_assets/images/FAQ/RemoveFlexygoService/1.png)

Open a CMD window in administrator mode.

![](../../docs_assets/images/FAQ/RemoveFlexygoService/2.png)

Go to the folder where you extracted the zip using the command:

```
cd c:\FlexygoServiceHelper
```

To remove it, run the following command:

```
EliminarServicio.bat
```

To install it, run the following command:

```
InstalarServicio.bat
```

To update it, simply run both commands:

```
EliminarServicio.bat
InstalarServicio.bat
```

## Attachments

Download [FlexygoServiceHelper.zip](./readme/utils/FlexygoServiceHelper.zip).
