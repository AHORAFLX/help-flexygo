# Create a product

To create a product in Flexygo, you just need to follow the steps below:

## 1. Define the product name

Enter the product name here so that names are updated automatically and you only need to copy and paste them:

<fh-namepropagator selector="propagated-projectname" placeholder="AhoraFlexy"></fh-namepropagator>

## 2. Install the template

To download the Flexygo template for Visual Studio 2022, use the following URL:
[https://marketplace.visualstudio.com/items?itemName=Flexygo.FlexygoTemplate](https://marketplace.visualstudio.com/items?itemName=Flexygo.FlexygoTemplate)

Or go to **Tools → Extensions and Updates → Online** and search for *Flexygo*.

![](../docs_assets/images/Installation/CreatingProduct/2.png)

## 3. Create the project

Create a new project of type **Flexygo Main Project** using the name defined for the product and solution, and check the option **“Create directory for solution”**.

If you are using Visual Studio 2019, leave the option *“Place solution and project in the same directory”* unchecked.

![](../docs_assets/images/Installation/CreatingProduct/3.png)

## 4. Add a DLL project

Add a new project of type **Flexygo Custom DLL** in the solution folder and name it <fh-copy><span class="propagated-projectname"></span>_Processes</fh-copy>

![](../docs_assets/images/Installation/CreatingProduct/4.png)

## 5. Add a BBDD Config project

Add a new project of type **SQL Server > Flexygo Config Model BBDD** in the solution folder and name it <fh-copy><span class="propagated-projectname"></span>BD</fh-copy>

![](../docs_assets/images/Installation/CreatingProduct/5.png)

## 6. Add a BBDD Data project

Add a new project of type **SQL Server > Flexygo Data Model BBDD** in the solution folder and name it <fh-copy><span class="propagated-projectname"></span>_DataBD</fh-copy>

![](../docs_assets/images/Installation/CreatingProduct/6.png)

## 7. Add Flexygo NuGet repositories

Open the NuGet Package Manager of the main project (right-click on the project → *Manage NuGet Packages*) and add the two Flexygo repositories by clicking the source configuration gear icon.

* Flexygo [https://nuget.ahorabh.com/v3/index.json](https://nuget.ahorabh.com/v3/index.json)

![](../docs_assets/images/Installation/CreatingProduct/7.png)

## 8. Restore NuGet packages

Right-click on the solution and select *Restore NuGet Packages*.

## 9. Update NuGet packages

Update the Flexygo NuGet package to the latest version.

This process takes a few minutes. You will know it has finished when the *readme.html* file is loaded on the screen.

## 10. Install Crystal Reports for Visual Studio

To resolve Crystal Reports dependencies, install the developer version
[CRforVS_13_0_22.exe](./readme/utils/CRforVS_13_0_22.zip)

**Important note:** Due to SAP environment restrictions, to install it you must have VS 2017 or earlier installed at that moment, even if you plan to develop later using newer versions.

## 11. Add reference to processes

In the main project, remove the reference to **flxCustomProcesses** and instead add a reference to your processes project <fh-copy><span class="propagated-projectname"></span>_Processes</fh-copy>

## 12. Fix BBDD references

In the project <fh-copy><span class="propagated-projectname"></span>BD</fh-copy>
remove both references and add them again:

* **FlexygoDB** from the DACPAC included in the **db** folder of the main project with the following configuration:
  ![](../docs_assets/images/Installation/CreatingProduct/12_1.png)

* **Master** as a reference to the system database:
  ![](../docs_assets/images/Installation/CreatingProduct/12_2.png)

## 13. Fix dependencies

Fix the failed project dependencies by using those included in the
**packages\Flexygo.x.x.xx.xx\lib\net46** folder of the solution.

![](../docs_assets/images/Installation/CreatingProduct/13.png)

## 14. Fix the BBDD build script

In the properties of the project <fh-copy><span class="propagated-projectname"></span>BD</fh-copy>,
go to **Build Events** and change the product name in the existing command from *flxWeb* to your product name:

powershell -ExecutionPolicy Unrestricted -Command "& '$(SolutionDir)fhnamepropagator\db\mergeSSDTScripts.ps1' '$(SolutionDir)' '$(ProjectName)' '$(OutputPath)' '$(TargetPath)'

![](../docs_assets/images/Installation/CreatingProduct/14.png)

## 15. Define assembly name and namespace

In the properties of each project, set the correct assembly name and namespace, using the same value as the project name.

Replace **flxDB_data** with <fh-copy><span class="propagated-projectname"></span>_DataBD</fh-copy>

Replace **flxDB_processes** with <fh-copy><span class="propagated-projectname"></span>_processes</fh-copy>

Replace **flx** with <fh-copy><span class="propagated-projectname"></span></fh-copy>

Replace **flxDB** with <fh-copy><span class="propagated-projectname"></span>BD</fh-copy>

![](../docs_assets/images/Installation/CreatingProduct/15.png)

## 16. TypeScript

Install [TypeScript](CreatingWebComponent.md#typescript)

## 17. Publishing

Publish both BBDD projects and update the connection strings in the **web.config** of the main project so they point to these databases.

## 18. Run

If everything has worked correctly, click the Run button in Visual Studio and the project will start with the debugger attached.