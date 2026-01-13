# Create a custom WebComponent

To create a WebComponent in flexygo, you just need to follow these steps:

## 1. Define the product name

Put the product name here so that names are automatically updated and you only need to copy and paste them:

<fh-namepropagator selector="propagated-projectname" placeholder="AhoraFlexy"></fh-namepropagator>

## 2. TypeScript

We will install the TypeScript 5.0.4 NuGet package, as shown in the screenshot (right-click on the main project > Manage NuGet Packages):

![](/docs_assets/images/Installation/CreatingWebComponent/2_1.png)

Once installed, we will check that the TypeScript configuration of the project matches the one shown in the image (to access the configuration, right-click on the main project > Properties > TypeScript Build):

![](/docs_assets/images/Installation/CreatingWebComponent/2_2.png)

## 3. Structure the project

Within the project, we will create a folder called **ahoraflexy** to host our project components, and inside it we will generate the structure **controllers**, **plugins**, and **wc**.

![](/docs_assets/images/Installation/CreatingWebComponent/3.png)

## 4. Create the WebComponent

We will add a TS file named **afl-carousel** to our **wc** folder with the following code:

```ts
/**
 * @namespace ahoraflexy.ui.wc
 */

namespace ahoraflexy.ui.wc {
/**
* Library for the AflCarousel
*
* @class AflCarousel
* @constructor
* @return {aflCarousel} .
*/
    export class AflCarousel extends HTMLElement {

        constructor() {
            // If a constructor is defined, it is REQUIRED to call the super constructor
            super();
        }

        /**
        * Array of observed attributes. REQUIRED
        * @property observedAttributes {Array}
        */
        static get observedAttributes() {
            return ['ObjectName', 'ObjectWhere', 'ModuleName','asd'];
        }

        /**
        * Set if element has been connected to DOM
        * @property connected {boolean}
        */
        connected: boolean = false;

        /**
        * Database row Module ID
        * @property moduleName {string}
        */
        moduleName: string;

        /**
        * Component Object Name
        * @property objectName {string}
        */
        objectName: string;

        /**
        * Component Object Where
        * @property objectWhere {string}
        */
        objectWhere: string;

        /**
        * Init the webcomponent. REQUIRED.
        * @method init
        */
        init(): void {
            this.render();
        }

        /**
        * Refresh the webcomponent. REQUIRED.
        * @method refresh
        */
        refresh(): void {
            this.render();
        }

        /**
        * Render HTML data.
        * @method render
        */
        render(): void {
            $(this).html('Hello flexygo');
        }

        /**
        * Fires when element is attached to DOM
        * @method connectedCallback
        */
        connectedCallback(): void {

            let element = $(this);
            this.connected = true;

            this.objectName = element.attr("ObjectName");
            this.objectWhere = element.attr("ObjectWhere");
            this.moduleName = element.attr("ModuleName");

            this.init();
        }

        /**
        * Fires when the attribute value of the element is changed.
        * @method attributeChangedCallback
        */
        attributeChangedCallback(attrName, oldVal, newVal): void {

            let needInit: boolean = false;

            if (attrName.toLowerCase() == 'modulename' && newVal && newVal != '') {
                this.moduleName = newVal;
                needInit = true;
            } else if (attrName.toLowerCase() == 'objectname' && newVal && newVal != '') {
                this.objectName = newVal;
                needInit = true;
            } else if (attrName.toLowerCase() == 'objectwhere' && newVal && newVal != '') {
                this.objectWhere = newVal;
                needInit = true;
            }

            if (this.connected && needInit) {
                this.init();
            }
        }
    }
}

window.customElements.define("afl-carousel", ahoraflexy.ui.wc.AflCarousel);
```

## 5. Link databases and JS

We set the databases to product mode and insert the module type and the link to the JS file:

```sql  { .propagated-projectname }
update origins set active=case originid when 1 then 1 else 0 end

Insert into Interfaces_Types_JS (InterfaceTypeId,TypeId,FilePath,Description,[Order],OriginId)
values (NEWID(),-1,'~/fhnamepropagator/wc/afl-carousel.js','Carousel WebComponent',999,1)

Insert into Modules_Types (TypeId,Descrip,IconName,SettingsTable,WebComponent,UseCollection,OriginId)
values ('afl-carousel','Carousel','fighter-jet','','afl-carousel',1,1)
```

## 6. Create a new module

We create a new module and include it on the home page.

![](/docs_assets/images/Installation/CreatingWebComponent/6_2.png)

![](/docs_assets/images/Installation/CreatingWebComponent/6_2.png)

## 7. Prepare the databases

We create a table to store the image records.

We add a **Carousel.sql** file in the **dbo/tables** folder of our data model:

```sql
CREATE TABLE [dbo].[Carousel] (
    [ImageId] INT            NOT NULL,
    [Description]   NVARCHAR (50) NULL,
    [File]   NVARCHAR (250) NULL,
CONSTRAINT [PK_Carousel] PRIMARY KEY CLUSTERED ([ImageId] ASC)
);
```

We add the static data to the **data.sql** file in the **scripts/data** folder of our data model:

```sql
Insert into Carousel (ImageId,[Description],[File]) values (1,'Photo 1','~/img/loading1.gif')
Insert into Carousel (ImageId,[Description],[File]) values (2,'Photo 2','~/img/loading2.gif')
Insert into Carousel (ImageId,[Description],[File]) values (3,'Photo 3','~/img/loading3.gif')
Insert into Carousel (ImageId,[Description],[File]) values (4,'Photo 4','~/img/loading4.gif')
```

**IMPORTANT**: republish the database after completing these steps.

## 8. Add a server controller

For this case, we will create a controller called **CarouselController.vb** with the following code:

```vbnet
Imports System.Web.Mvc
Imports FLEXYGO
Imports FLEXYGO.Environment
Imports FLEXYGO.Web
Imports FLEXYGO.Utilities.General.Util
Imports FLEXYGO.Data
Imports FLEXYGO.Utilities.SQL.SQLUtilities

Namespace ahoraflexy.controllers

    ''' <summary>
    ''' Class CarouselController.
    ''' Allows process execution by process Id or process name
    ''' </summary>
    <SessionState(System.Web.SessionState.SessionStateBehavior.ReadOnly)>
    Public Class CarouselController
        Inherits FlxController

        ''' <summary>
        ''' Reads data for carousel module
        ''' </summary>
        ''' <param name="ObjectName">Object name.</param>
        ''' <param name="ObjectWhere">The object where.</param>
        ''' <param name="ModuleName">The module identifier.</param>
        ''' <returns>returns list of images as ActionResult.</returns>
        <Compress>
        Public Function GetData(ByVal ObjectName As String, ByVal ObjectWhere As String, ByVal ModuleName As String) As ActionResult

            Try
                Return Json(ReadImages())
            Catch ex As Exception
                Return Json(ajaxError.ajaxException("Error in GetData GetData", ex, Response))
            End Try

        End Function

        ''' <summary>
        ''' Reads image data for carousel module
        ''' </summary>
        ''' <returns>returns list of images</returns>
        Public Function ReadImages() As List(Of FLEXYGO.Utilities.General.BaseCollection)

            Dim dm As New DataManager(GlobalVars.ConfToken.UserSecurity.ConnectionStrings("DataConnectionString"))
            Dim dt As DataTable = dm.DataTable("Select * from carousel")

            If dm.LastException IsNot Nothing Then
                Throw New InvalidOperationException("Error reading data", dm.LastException)
            End If

            Return DataTableToList(dt, Nothing)
        End Function

    End Class
End Namespace
```

## 9. Add the plugin and reference it in the configuration database

Download the file [jR3DCarousel.min.js](./readme/utils/plugin.zip) and place it in the <fh-copy><span class="propagated-projectname"></span>/plugins</fh-copy> folder:

```sql
Insert into Plugins (PluginId,[Path],Descrip,[Order],typeId,Bundle,[Enabled],OriginId)
values (newid(),'~/AhoraFlexy/plugins/jR3DCarousel.min.js','jR3DCarousel JS',999,0,1,1,1)
```

## 10. Call the controller from the WebComponent

We add the **loadData()** function to our WebComponent and invoke it from **render()**:

```ts
/**
* Render HTML data.
* @method render
*/
render(): void {
    this.loadData()
}

/**
* Calls controller and loads carousel
* @method loadData
*/
loadData(): void {

    let me = $(this);

    let params = {
        ObjectName: me.attr('ObjectName'),
        ObjectWhere: me.attr('ObjectWhere'),
        ModuleName: this.moduleName
    };

    flexygo.ajax.post('~/api/Carousel', 'getData', params, (response) => {
        if (response) {
            debugger;
            let imgs = new Array();
            for (let i = 0; i < response.length; i++) {
                imgs.push({ src: flexygo.utils.resolveUrl(response[i].File) })
            }
            let carr = $('<div class="carrousel"><div>')
            me.html(carr);
            carr.jR3DCarousel({ slides: imgs });
        }
    });
}
```

## 11. Test after clearing cache

We reload the cache and the page; the result should be as follows:

![](/docs_assets/images/Installation/CreatingWebComponent/11.png)

## 12. Add data scripts

We generate the product configuration scripts.

We delete all files from the **scripts/data** folder of our configuration database.

![](/docs_assets/images/Installation/CreatingWebComponent/12_1.png)

If this is the first time working with this database, enable **cmd_shell** by executing the following command:

```sql
-- To allow advanced options to be changed.
EXEC sp_configure 'show advanced options', 1;
GO
-- To update the currently configured value for advanced options.
RECONFIGURE with override;
GO
-- To enable the feature.
EXEC sp_configure 'xp_cmdshell', 1;
GO
-- To update the currently configured value for this feature.
RECONFIGURE with override;
GO
```

We check the permissions of the **scripts/data** folder:

![](/docs_assets/images/Installation/CreatingWebComponent/12_2.png)

We execute the following script in the database to generate the static data:

```sql
zscript 1, 'C:\temp\AhoraFlexy\AhoraFlexyBD\scripts\data'
```

We include the new files that have appeared, set their **Build Action** property to **None**, and reference them in the **scripts/Script.PostDeployment.sql** file:

![](/docs_assets/images/Installation/CreatingWebComponent/12_3.png)

![](/docs_assets/images/Installation/CreatingWebComponent/12_4.png)

![](/docs_assets/images/Installation/CreatingWebComponent/12_5.png)

## 13. Publish databases

We publish the database and make sure everything is still working correctly.