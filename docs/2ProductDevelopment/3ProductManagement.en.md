# Product Management

## Installing and using Flexygo Product Tools

**Flexygo Product Tools** is a set of utilities that let you manage and maintain your Flexygo products easily. With them you can generate your own custom NuGet packages, package your product's addons, update your solution to new versions, and automatically sync resources and configuration.

!!! tip "CLI is optional"
    Using the command-line tool is optional. The same operations are available from the **Flexygo Installer**, the **Visual Studio 2022 extension** ([see more](./5IDEExtensions.md)), and the **Flexygo Developer Tools extension for VS Code** ([see more](./5IDEExtensions.md)), without needing to use the terminal.


!!! warning "Important"
    Do not update the solution's projects manually, since the updater performs additional actions that are necessary for the system to work correctly.

## 1. Installing the tool

The tools are distributed as a **.NET Global Tool** and are installed by running the following command in a terminal:

```bash
dotnet tool install --global Flexygo.Tools.Product
```

This makes the ```flexygo-product``` command globally available on your system.

> **Note:**  
> If you need parameter autocompletion support in the console, you can also install:
>
> ```bash
> dotnet tool install --global dotnet-suggest
> ```

## 2. Basic usage

The main command is ```flexygo-product```, which has three subcommands: ```nuget```, ```update```, and ```addon```.

### a) Generate a custom NuGet

Lets you generate your solution's NuGet packages.

```bash
flexygo-product nuget -s "PATH_TO_YOUR_SOLUTION" -v VERSION [-c CONFIGURATION] [--include-addons]
```

- ```-s```: Path to the solution (**required**)
- ```-v```: Version to generate for the NuGet (**required**)
- ```-c```: Configuration (```Release``` or ```Debug```, defaults to ```Release```)
- ```--include-addons```: Also packages the solution's addons (**optional**, see [Packaging addons](#c-packaging-addons))

### b) Update your Flexygo product

Updates your Flexygo solution to the latest version (or to a specific version if you provide one).

```bash
flexygo-product update -s "PATH_TO_YOUR_SOLUTION" [-v VERSION] [-n NAMESPACE]
```

- ```-s```: Path to the solution (**required**)
- ```-v```: Version to update to (**optional**; if not specified, it updates to the latest available)
- ```-n```: Namespace of the product whose NuGets to update, e.g. ```Flexygo``` or ```flxSAT``` (**optional**; see [Non-Flexygo products](#non-flexygo-products))

This automatically does the following:

- Searches for the solution's ```Frontend```, ```Backend```, ```Processes```, and ```Conf.Database``` projects.
- Checks and updates the ```{Product}.Frontend```, ```{Product}.Backend```, ```{Product}.Library```, and ```{Product}.Conf.Database``` NuGet packages to the requested version or the latest available.
- Replaces the ```conf/appsettings.json``` and ```conf/appsettings.Development.json``` files of the Frontend and Backend with those from the updated NuGet.
- Pins the exact version of the parent package in your product's ```.nuspec``` and, if it exists, in the ```Directory.Packages.props```.

!!! warning "What's kept from your ```appsettings``` and what isn't"
    In the **Backend**, the ```appsettings``` are **replaced** with those from the NuGet, and afterwards only three of your own sections are restored: ```DatabaseNuget```, ```ConnectionStrings```, and ```MailSettings```. Any other custom key you added to those files **is lost**.

    In the **Frontend** they are overwritten directly, with nothing preserved.

    If you have your own configuration, keep it outside those files or make a copy before updating.

!!! tip "Version channel (prereleases)"
    If the version you have installed is a prerelease — it contains a hyphen, like ```1.5.0-beta.9``` —, the "latest version" search automatically includes prereleases and you stay on your channel. If you're on a stable version, only stable versions are considered.

If your solution has addons, ```update``` also updates the ```{Product}.Library``` package consumed by each addon's ```Processes```, and if the addon's ```.nuspec``` declares that dependency, it syncs its pinned version.

#### Non-Flexygo products

By default the tool **detects the product's namespace on its own**, by reading the ```PackageReference``` of your solution's ```*.Frontend.csproj``` files. You only need ```-n``` if detection fails because it finds none or finds several different ones. To see the officially supported namespaces:

```bash
flexygo-product products
```

### c) Packaging addons

An **addon** is an extension that is installed on top of an already-deployed Flexygo product. It's distributed as its own NuGet and has **its own version cycle**, independent from the product's. A product can have several addons.

They're created with the template, by running the command **from the folder that contains the product's ```.sln```**:

```bash
dotnet new flexygoaddon --name Facturacion --allow-scripts yes
```

Each addon lives in its own folder with a ```config/module.json``` and a single ```.nuspec``` at its root. Those two files are what the tool uses to detect it, so **the addon's name is free** and doesn't have to be derived from the product's name.

```bash
flexygo-product addon -s "PATH_TO_YOUR_SOLUTION" [-a NAME] [-v VERSION] [-c CONFIGURATION]
```

- ```-s```: Path to the solution (**required**)
- ```-a```: Name of the addon to package (**optional**, repeatable; if not specified, all detected addons are packaged)
- ```-v```: Addon version (**optional**; if not specified, the one already declared in its ```.nuspec``` is used)
- ```-c```: Configuration (```Release``` or ```Debug```, defaults to ```Release```)

Examples:

```bash
# All addons, each with the version from its own .nuspec
flexygo-product addon -s "C:\Proyectos\CRMCore"

# Just one
flexygo-product addon -s "C:\Proyectos\CRMCore" -a Facturacion

# Several specific addons
flexygo-product addon -s "C:\Proyectos\CRMCore" -a Facturacion -a Portal

# Bump an addon's version and package it
flexygo-product addon -s "C:\Proyectos\CRMCore" -a Facturacion -v 2.0.0.5
```

When you specify ```-v```, the version **is written into the addon's ```.nuspec```** and stays there for subsequent runs, so remember to commit that change. Since each addon has its own cycle, ```-v``` is only accepted when you've selected **a single addon** with ```-a```; to bump several, run the command once per addon.

!!! warning "Order matters"
    The ```nuget``` subcommand **clears the ```publish\nuget``` folder** before generating. If you're going to generate the product and addons separately, always run ```nuget``` **before** ```addon```, or you'll lose the addon packages already generated.

!!! tip "Product and addons in a single pass"
    For the release flow, ```flexygo-product nuget -s "PATH" -v 1.2.3 --include-addons``` generates the product's packages and then those of all the addons. Addons **never inherit** the version specified in ```-v```: each is packaged with the one from its own ```.nuspec```. To change it, use the ```addon``` subcommand with ```-v```.

If an addon fails to build or package, **the rest are not aborted**: the other addons and the product's packages are still generated, the failed ones are listed in the final summary, and the command exits with code ```3```.

!!! note "Database projects are always built in Release"
    The ```.nuspec``` generated by the addon template takes the ```.dacpac``` files from ```bin\Release```. That's why its database projects are built in ```Release``` even if you specify ```-c Debug``` — otherwise, an outdated ```.dacpac``` would be packaged or packaging would fail. The ```-c``` option does apply to the addon's ```Processes``` project.

## 3. Available options

You can see all the options at any time with:

```bash
flexygo-product --help
```

And the specific help for each subcommand, which documents its behavior in detail:

```bash
flexygo-product update --help
flexygo-product nuget  --help
flexygo-product addon  --help
```

### Exit codes

Useful if you integrate the tool into a CI *pipeline*:

| Command | Code | Meaning |
|---------|--------|-------------|
| ```update``` | ```0``` | Everything OK |
| ```update``` | ```1``` | Error; the command aborts on the first failure |
| ```nuget``` | ```0``` | Everything OK |
| ```nuget``` | ```2``` | Error generating the product's packages |
| ```nuget``` | ```3``` | The product was generated, but some addon failed |
| ```addon``` | ```0``` | Everything OK |
| ```addon``` | ```3``` | At least one addon failed |

## 4. Important notes

- It's advisable to back up your solution before updating packages and resources, especially if you have manual modifications in the ```wwwroot``` folders.
- After updating, review the ```appsettings``` file in case you want to adjust any new setting.

---

!!! tip "NuGet naming convention"
    For the installer to correctly detect your product's packages they must follow the standard naming convention. See the [NuGet naming convention](./2Template.md#nuget-naming-convention) section in the product creation guide.
