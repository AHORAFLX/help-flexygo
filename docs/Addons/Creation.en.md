# Create an addon

To develop an addon, you need to have a Visual Studio [product](../Installation/CreatingProduct.en.md).

## 1. Install flexygos template

Install the flexygo template for Visual Studio 2022 through [here](https://marketplace.visualstudio.com/items?itemName=Flexygo.FlexygoTemplate).

Or go to **Tools -> Extensions and Updates -> Online** and search for **Flexygo**.

![Install flexygo template](../docs_assets/images/Addon/Creation/0.png "Install flexygo template")

## 2. Define the addon name

Enter the addon name here so that the names are automatically updated and you only have to copy and paste them:

<fh-namepropagator selector="propagated-addonname" placeholder="AddonFlexy"></fh-namepropagator>

!!! warning "Addon Identifier Is Permanent"
	This name will be the addon identifier that we will always use.

Keep in mind that, when an addon is installed, it is located in the path **custom/<span class="propagated-addonname"></span>**.

Therefore, any file that is part of the addon (js, css, dll, etc.) must be placed inside that same folder.

In our case, the path will be **ProductFlexy/custom/<span class="propagated-addonname"></span>**, where we will leave our files and which should be referenced by the paths used in the project.

## 3. Create root folder

In the root folder of our product, create a folder with the identifier of our addon (<fh-copy><span class="propagated-addonname"></span></fh-copy>). We will add our addon projects there.

![Addon root folder](../docs_assets/images/Addon/Creation/1.png "Addon root folder")

## 4. Add a Config Model project

Add a new project of type <fh-copy>Flexygo Addon Config Model BBDD</fh-copy> to the product solution, with the name <fh-copy><span class="propagated-addonname"></span>BD</fh-copy>. Save it inside the folder created in step 3.

![New addon project](../docs_assets/images/Addon/Creation/2.png "New addon project")

![AddonBD project](../docs_assets/images/Addon/Creation/3.png "AddonBD project")

## 5. Add a Data Model project

Add a new project of type <fh-copy>Flexygo Data Model BBDD</fh-copy> to the product solution, with the name **<span class="propagated-addonname"></span>_DataBD**. Save it inside the folder created in step 3.

![New data project](../docs_assets/images/Addon/Creation/2.png "New data project")

![Addon_DataBD project](../docs_assets/images/Addon/Creation/4.png "Addon_DataBD project")

## 6. Add a Custom CSharp DLL project

Add a new project of type <fh-copy>Flexygo Addon Custom CSharp DLL</fh-copy> to the product solution, with the name <fh-copy><span class="propagated-addonname"></span>_Processes</fh-copy>. Save it inside the folder created in step 3.

![New CSharp DLL project](../docs_assets/images/Addon/Creation/2.png "New CSharp DLL project")

![Addon_Processes project](../docs_assets/images/Addon/Creation/5.png "Addon_Processes project")

## 7. Modify the build path

In the properties of **<span class="propagated-addonname"></span>_Processes**, modify the build output path to the project **custom** folder. Inside **custom**, there must be a folder with your addon identifier, in our case **<span class="propagated-addonname"></span>** Inside this folder, you can organize your structure as needed; we will keep it in a folder named **dll**.

Replace **ProductFlexy** with your project name and **AddonFlexy** with your addon identifier <fh-copy><span class="propagated-addonname"></span></fh-copy>.

!!! warning "Use Shared DLL Output"
	If you have several related DLL projects, their output path must be the same folder.

![Build output path](../docs_assets/images/Addon/Creation/6.png "Build output path")

## 8. Fix failed dependencies

Fix failed project dependencies using the ones included in the **packages\Flexygo.x.x.xx.xx\lib\net46** folder of your solution.

![Project dependencies](../docs_assets/images/Addon/Creation/7.png "Project dependencies")

## 9. Define assembly name and namespace

In each project properties, set the correct assembly name and namespace, using the same value as the addon name.

- Replace **flxDB_data** with <fh-copy><span class="propagated-addonname"></span>_DataBD</fh-copy>.
- Replace **flxDB_processes** with <fh-copy><span class="propagated-addonname"></span>_Processes</fh-copy>.
- Replace **flxDB** with <fh-copy><span class="propagated-addonname"></span>BD</fh-copy>.

![Assembly name and namespace](../docs_assets/images/Addon/Creation/8.png "Assembly name and namespace")

## 10. Develop the addon

With the project started, select **addon** as origin mode and set the addon identifier name <fh-copy><span class="propagated-addonname"></span></fh-copy> to activate it.

![Addon origin mode](../docs_assets/images/Addon/Creation/9.png "Addon origin mode")

![Addon activation](../docs_assets/images/Addon/Creation/10.png "Addon activation")

## 11. Generate scripts

Once development is complete, generate the scripts inside your **<span class="propagated-addonname"></span>BD** project.

![Generate scripts](../docs_assets/images/Addon/Creation/11.png "Generate scripts")
