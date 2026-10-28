# Imports

Imports allow us to transfer information from files to the system, for example from an Excel file. It is configured in the *Imports* tool of the **Other tools** area of the [control panel](../Administration/ControlPanel.md) (in the flexy2022 skin: *Admin Work Area > Other Tools > Imports*) or just <flx-navbutton class="link" type="openPage" pagetypeid="list" objectname="sysImportSettings">click here</flx-navbutton>.

## Creating setting

*   Description
*   Object Name
*   Type: Excel only for now.
*   Process Name: We will specify the process that will be executed after processing the file to be imported, it is responsible for inserting/deleting/updating the data. The process, with only 1 parameter **@JSONVALUE** , contains all the information of the file.
*   Template File: It is the file that serves as a template for the user, the file is stored in ~/custom/imports/templates/{{ImportId}}
*   Active: Enable/Unable the import setting.
*   Success Delete File

    *   Enabled: When the import is executed successfully the imported file is deleted.
    *   Unable: When the import is executed successfully the imported file is stored in ~/custom/imports/{{ImportId}}.

*   Error Delete File

    *   Enabled: When the import fails the imported file is deleted.
    *   Unable: When the import fails the imported file is stored in ~/custom/imports/{{ImportId}}.

![Import settings](../../docs_assets/images/Imports/setting.png "Image 1. Create Import Setting")

## Excel

The format that Excel-type files must follow is as shown in the following image.

The first row must be the names of the columns, they cannot be empty, they cannot contain special characters, spaces, the letter ñ. In any case the system will replace any character not accepted.

More than one sheet can be added as in the example, the name of the sheets follows the same criteria as the columns.

![Excel example](../../docs_assets/images/Imports/excel.png "Image 2. Excel example")

## Process example

1.  Add it to **flexygo** process repository: control panel → **Logic and rules** area → *DB Stored Procedures* or *Server Dll* (in the flexy2022 skin: *Admin Work Area > Logic and Rules*).
    
![Create Process](../../docs_assets/images/Imports/process.png "Image 3. Create Process")
    
<fh-modal class="button" modal_id="fhmodal_stored" modal_title="Stored example">Stored example</fh-modal>
<fh-modal class="button" modal_id="fhmodal_dll" modal_title="Dll example">Dll example</fh-modal>
<fh-modal class="button" modal_id="fhmodal_json" modal_title="Json example">Json value example</fh-modal>

## Execute import

The import is executed from the **Import** entry of the side menu (in the flexy2022 skin, from the upper menu **Tools > Import**): it lists the objects with an active setting and, inside each one, its settings.

Each setting executes the **sysImportsSettings** process with its `ImportId` as default value. When there are no settings, the entry shows *No import settings found.*

In the process window a button appears to download the template of the file that has been previously placed in the creation of the setting.

![Process window](../../docs_assets/images/Imports/process_window.png "Image 4. Process window")

```sql { #fhmodal_stored }
CREATE PROCEDURE [dbo].[pImportacion]
@JSONVALUE nvarchar(max)
as
BEGIN

BEGIN TRY 

	select Campo1,Campo2,Campo3,Campo4,Campo5  into importacion
	from openjson(@JsonValue,'$.Hoja1')
	  with (
		[Campo1] NVARCHAR(max) '$.Campo1',
		[Campo2] NVARCHAR(max) '$.Campo2',
		[Campo3] NVARCHAR(max) '$.Campo3',
		[Campo4] NVARCHAR(max) '$.Campo4',
		[Campo5] NVARCHAR(max) '$.Campo5'
	  )
      
    select ...
	from openjson(@JsonValue,'$.Hoja2')
	  with (
		...
	  )

	return 1

END TRY
BEGIN CATCH

      IF @@TRANCOUNT >0 BEGIN
            ROLLBACK TRAN
      END

      DECLARE @CatchError NVARCHAR(MAX)

      SET @CatchError=dbo.funPrintError(ERROR_MESSAGE(),ERROR_NUMBER(),ERROR_PROCEDURE(),@@PROCID ,ERROR_LINE())

      RAISERROR(@CatchError,12,1)

      RETURN 0

END CATCH

END
```

```csharp { #fhmodal_dll }
using System;
using FLEXYGO.Objects;
using FLEXYGO.Objects.Settings;
using Newtonsoft.Json.Linq;
using static FLEXYGO.Processing.ProcessManager;

public static bool Importacion(EntityObject Entity, string JSONVALUE, ref ProcessHelper Ret)
{
    try
    {
        JObject table = JObject.Parse(JSONVALUE);

        foreach (JObject row in table["Hoja1"])
        {
            EntityObject importacionObj = new EntityObject("Importacion", Ret.ConfToken);
            importacionObj["Campo1"] = (string)row["Campo1"];
            importacionObj["Campo2"] = (string)row["Campo2"];
            importacionObj["Campo3"] = (string)row["Campo3"];
            importacionObj["Campo4"] = (string)row["Campo4"];
            importacionObj["Campo5"] = (string)row["Campo5"];

            importacionObj.InsertProcess(importacionObj.TableName, ObjectSettings.eUpdateType.Standard, "");
        }

        foreach (JObject row in table["Hoja2"])
        {
            // ...
        }

        Ret.Success = true;
        return Ret.Success;
    }
    catch (Exception ex)
    {
        Ret.Success = false;
        Ret.LastException = ex;
        return false;
    }
}
```

```json { #fhmodal_json }
{
    "Hoja1": [
        {
            "Campo1": "1",
            "Campo2": "Texto 1",
            "Campo3": "Texto 2",
            "Campo4": "Texto 3",
            "Campo5": "Texto 4"
        },
        {
            "Campo1": "2",
            "Campo2": "24/02/2022",
            "Campo3": "25/02/2022",
            "Campo4": "26/02/2022",
            "Campo5": "27/02/2022"
        },
        {
            "Campo1": "3",
            "Campo2": "10.3",
            "Campo3": "10.3",
            "Campo4": "10.3",
            "Campo5": "10.3"
        },
        {
            "Campo1": "4",
            "Campo2": "25/02/2022",
            "Campo3": "Texto 2",
            "Campo4": "10.3",
            "Campo5": "Texto"
        }
    ],
    "Hoja2": [
        {
            "Campo1": "1",
            "Campo2": "Texto 1",
            "Campo3": "Texto 2",
            "Campo4": "Texto 3",
            "Campo5": "Texto 4"
        },
        {
            "Campo1": "2",
            "Campo2": "24/02/2022",
            "Campo3": "25/02/2022",
            "Campo4": "26/02/2022",
            "Campo5": "27/02/2022"
        },
        {
            "Campo1": "3",
            "Campo2": "10.3",
            "Campo3": "10.3",
            "Campo4": "10.3",
            "Campo5": "10.3"
        },
        {
            "Campo1": "4",
            "Campo2": "25/02/2022",
            "Campo3": "Texto 2",
            "Campo4": "10.3",
            "Campo5": "Texto"
        }
    ]
}
```