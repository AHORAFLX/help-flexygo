# Create an addon

An **addon** is an extension installed on top of an already-deployed Flexygo product, with its own version cycle independent of the product (see [Packaging addons](./3ProductManagement.md#c-packaging-addons)). You can create a new addon directly from the **Flexygo Installer**, without having to use the command-line template (`dotnet new flexygoaddon`).

## 1. Create the addon from the Installer

In the Installer, go to the **Development** section and select **Create addon**.

![Development section of the installer, with the Create addon option](../docs_assets/images/CoreProductDevelopment/Addons/1Instalador.png)

On the **Create addon** screen, fill in:

- **Product folder**: the root folder of the product on which the addon will be created.
    - If the folder **already contains a product**, the installer adds the addon to that existing product.
    - If the folder **is empty**, the installer first creates the product and then the addon, all in a single pass.
- **Addon name**: the addon's identifier (for example, `AddonFlexy`). It must be different from the product name, use only letters, numbers and underscores, and cannot start with a number. This identifier is what's always used to refer to the addon — for example, in the Backend's `custom/AddonName` path, or when activating it during development (see below).

![Create addon screen with the Product folder and Addon name fields](../docs_assets/images/CoreProductDevelopment/Addons/2CrearAddon.png)

Click **Create Addon**. The installer automatically generates all the necessary projects (database configuration, data model, processes), already wired together and to the product's template — there's no need to create or configure them by hand.

## 2. Check the Processes project's output path

The generated `{AddonName}.Processes` project already includes, by default, an output path (`OutputPath`) that points to the product's Backend `custom/{AddonName}` folder, so that all of the addon's DLLs end up together in that folder:

```xml
<!-- All the addon's DLLs in a single custom/<Addon>/dll folder -->
<OutputPath>..\..\{Product}.Backend\custom\{AddonName}\dll\</OutputPath>
```

![The addon's Processes project .csproj file, with the output path highlighted](../docs_assets/images/CoreProductDevelopment/Addons/3DLL.png)

Check that this path actually points to `custom/{AddonName}` inside your product's **Backend** project — especially if the product or addon name don't match what the default template generated, or if you move the addon to a different folder.

## 3. Develop the addon

The rest of the setup (database projects, project references) is handled automatically by the installer. The only thing left for you to do is develop the addon itself.

### Activate Addon mode

To develop the addon, first select the origin you want to work on and choose the **Addon** option.

![Origin selector with the Addon option highlighted](../docs_assets/images/CoreProductDevelopment/Addons/4.png)

Then enter the **Origin Addon Id** (your addon's identifier, for example `AddonFlexy`) and click **Activate**.

![Origin Addon Id field and Activate button](../docs_assets/images/CoreProductDevelopment/Addons/5.png)

With Addon mode active, you can develop as usual: everything you create or modify will be recorded under your addon's origin.

### Generate the addon's scripts

Once development is complete, generate the addon's database scripts by clicking the database icon in the top bar, visible while Addon mode is active (the **ADDON MODE** indicator).

![Generate scripts icon in the top bar, with the ADDON MODE indicator](../docs_assets/images/CoreProductDevelopment/Addons/6.png)

With the scripts generated, continue with [Packaging the addon as a NuGet](#4-packaging-the-addon-as-a-nuget) to prepare the addon's manifest and `.nuspec`.

## 4. Packaging the addon as a NuGet

### module.json file

Inside your addon's `config` folder you'll find the `module.json` file, where the actions to perform when installing the addon are defined.

![The addon's config/module.json file](../docs_assets/images/CoreProductDevelopment/Addons/7.png)

Its definition is the same as always, with one new addition: a resource's `scope` can now also be `backend`, which is where the addon's DLLs go.

**General**

| Attribute | Example | Description |
|---|---|---|
| `name` | `"AddonFlexy"` | Our addon's identifier. |
| `description` | `"Description."` | Brief description of the addon's purpose or functionality. |
| `type` | `"Flexygo"` | Currently always Flexygo. |
| `flexygoVersionMin` | `"4.0.0.6"` | Minimum Flexygo version required to install the addon. |
| `flexygoVersionMax` | `"8.4.0.6"` | Maximum Flexygo version required to install the addon. |
| `productVersionMin` | `"4.0.0.6"` | Minimum product version required to install the addon. |
| `productVersionMax` | `"8.4.0.6"` | Maximum product version required to install the addon. |
| `resources` | `[ ... ]` | List of resources included in the addon and how they should be handled. |
| `postProcess` | `[ ... ]` | List of processes that will run after installing the addon. |

**resources**

| Attribute | Example | Description |
|---|---|---|
| `path` | `"content/sql/AddonFlexy.Data.Database.dacpac"` | Path of the resource within the NuGet package. |
| `targetConnectionString` | `"DataConnectionString"` | Name of the connection string the resource will be applied to (only if scope is `database`). |
| `uninstallPrefix` | `"AddonFlexy_"` | Prefix used to identify and remove objects (tables, views, stored procedures, functions) when uninstalling the addon. |
| `scope` | `"database"` / `"backend"` / `"frontend"` | Defines the resource's installation scope:<br>• **database:** applies a `.dacpac` file to the database.<br>• **backend:** copies the addon's DLL to the `custom/{AddonName}` folder of the Backend.<br>• **frontend:** copies the files to the client environment (JS, CSS, images, etc.). |

**postProcess**

| Attribute | Example | Description |
|---|---|---|
| `processName` | `"pPostNuget"` | Name of the process (defined in Flexygo) that will run once the addon's installation finishes. |
| `params` | `{ "Param1": true, "Param2": "2025-09-25", ... }` | Process parameters defined in Flexygo. |
| `order` | `0` | Execution order of the processes. |

### .nuspec file

Your addon's project already includes an automatically generated `.nuspec` file with the files and paths needed for packaging: the `module.json` manifest, the databases' `.dacpac` files, the Backend DLL and, if your addon ships static assets, the Frontend section (commented out by default).

![The addon's generated .nuspec file](../docs_assets/images/CoreProductDevelopment/Addons/8.png)

Pay special attention to the Backend entry: the `src` path must point to the same folder you configured as `OutputPath` in step 2. If your addon includes static assets (JS, CSS, images), uncomment the Frontend entry — otherwise `nuget pack` will fail if those files don't exist.

With the `module.json` and `.nuspec` ready, generate the addon's NuGet package following the process described in [Packaging addons](./3ProductManagement.md#c-packaging-addons).
