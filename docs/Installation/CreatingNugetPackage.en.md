# Create NuGet package

To create a NuGet package in Flexygo, you just need to follow the steps below:

## 1. Define the product name

Enter the product name here so that the names are automatically updated and you only need to copy and paste them:

<fh-namepropagator selector="propagated-projectname" placeholder="AhoraFlexy"></fh-namepropagator>

## 2. Publish <span class="propagated-projectname"></span>

We will publish the main project to a **publish** folder inside any directory external to the project. Example: `C:\Temp\Publish`

Once published, we will copy into this **Publish** folder the **Scripts** folder located in the main project, if it exists.
  
![](/docs_assets/images/Installation/CreatingNugetPackages/2.png)

## 3. Publish <span class="propagated-projectname"></span>BD

We will publish the configuration database project and copy the resulting **dacpac** into the **publish\db** folder.

![](/docs_assets/images/Installation/CreatingNugetPackages/3.png)

## 4. NuGet utilities

Download the file [nuget.zip](./readme/utils/nuget.zip) and extract it at the same level as the **publish** folder (according to the example, `C:\Temp`).

![](/docs_assets/images/Installation/CreatingNugetPackages/4.png)

## 5. config.nuspec file

Edit the **config.nuspec** file to adapt the values to your project.

![](/docs_assets/images/Installation/CreatingNugetPackages/5.png)

## 6. Generate the NuGet package

Open a command prompt and run the following command:
  
```powershell
nuget pack config.nuspec
```

![](/docs_assets/images/Installation/CreatingNugetPackages/6.png)

## 7. Installation

Copy the **nupkg** file to a folder together with the [flexygo](https://docs.flexygo.com/Setup/FlexyGoInstaller.zip) installer. The installer will detect that there is a package different from flexygo and will ask whether you want to install it instead. 
After that, follow the usual steps, and if everything has worked correctly, your product will be installed.

![](/docs_assets/images/Installation/CreatingNugetPackages/7.png)