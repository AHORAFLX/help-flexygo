# Did you know you can install Flexygo unattended from the command line?

Flexygo lets you run installations without a graphical interface using command-line parameters. To view every available option, run:

```
./FlexygoInstaller.exe /?
```

## CRM installation example

Below is a sample command to install a CRM system:

```
./FlexygoInstaller.exe /unatended /r:"https://nuget.flexygo.com/nuget"
/p:"FlexygoCRM" /pn:"NombreCliente_CRM" /ap:"MyAdminPassword"
/virtualPath:"/CRM" /phisicalPath:"c:\Webs\CRM" /confDB:"CRM_IC"
/confDBu:"sa" /confDBp:"-a123456" /confDBh:"localhost"
/dataDB:"concello" /dataDBu:"sa" /dataDBp:"-a123456"
/dataDBh:"localhost" /mailAdmin:"admin@mycompany.com"
/mailHost:"mail.mycompany.com" /mailUser:"MymailUser"
/mailPass:"MyMailPassword" /mailPort:"25" /mailSSL:"true"
```

![](../../docs_assets/images/DidYouKnow/UnattendedInstallCLI/1.png)

This approach enables fully automating the installation process without any manual intervention in the graphical interface.
