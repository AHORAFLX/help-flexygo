# Imports

Imports allow us to transfer information from files to the system, for example from an Excel file. It can be configured from the control panel located at Admin Work Area > Other Tools > Imports or just click here.

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

![Import settings](/assets/images/Imports/setting.png "Image 1. Create Import Setting")

## Excel

The format that Excel-type files must follow is as shown in the following image.

The first row must be the names of the columns, they cannot be empty, they cannot contain special characters, spaces, the letter ñ. In any case the system will replace any character not accepted.

More than one sheet can be added as in the example, the name of the sheets follows the same criteria as the columns.

![Excel example](/assets/images/Imports/excel.png "Image 2. Excel example")

## Process example

1.  Add it to **flexygo** process repository at **Admin Work Area** > **Logic and Rules** > **DB Stored Procedures or Server Dll**.
    
![Create Process](/assets/images/Imports/process.png "Image 3. Create Process")
    
2.  Stored example
    
3.  Dll example
    
4.  Json value example
    

## Execute import

To execute the import it is found in the upper menu Tools->Import.

In the process window a button appears to download the template of the file that has been previously placed in the creation of the setting.

![Process window](/assets/images/Imports/process_window.png "Image 4. Process window")

#### Stored example

  CREATE PROCEDURE \[dbo\].\[pImportacion\]  @JSONVALUE nvarchar(max)  as  BEGIN    BEGIN TRY      select Campo1,Campo2,Campo3,Campo4,Campo5  into importacion   from openjson(@JsonValue,'$.Hoja1')     with (    \[Campo1\] NVARCHAR(max) '$.Campo1',    \[Campo2\] NVARCHAR(max) '$.Campo2',    \[Campo3\] NVARCHAR(max) '$.Campo3',    \[Campo4\] NVARCHAR(max) '$.Campo4',    \[Campo5\] NVARCHAR(max) '$.Campo5'     )              select ...   from openjson(@JsonValue,'$.Hoja2')     with (    ...     )     return 1    END TRY  BEGIN CATCH          IF @@TRANCOUNT >0 BEGIN              ROLLBACK TRAN        END          DECLARE @CatchError NVARCHAR(MAX)          SET @CatchError=dbo.funPrintError(ERROR\_MESSAGE(),ERROR\_NUMBER(),ERROR\_PROCEDURE(),@@PROCID ,ERROR\_LINE())          RAISERROR(@CatchError,12,1)          RETURN 0    END CATCH    END          

#### Dll example

      Imports System.Web.Script.Serialization            Public Shared Function Importacion(Entity As EntityObject, JSONVALUE As String, Ret As ProcessHelper) As Boolean          Try              Dim Table As Object = New JavaScriptSerializer().Deserialize(Of Object)(JSONVALUE)                For Each Row As Object In Table("Hoja1")                  Dim ImportacionObj As New EntityObject("Importacion", Ret.ConfToken)                  ImportacionObj("Campo1") = Row("Campo1")                  ImportacionObj("Campo2") = Row("Campo2")                  ImportacionObj("Campo3") = Row("Campo3")                  ImportacionObj("Campo4") = Row("Campo4")                  ImportacionObj("Campo5") = Row("Campo5")                    ImportacionObj.InsertProcess(ImportacionObj.TableName, Settings.ObjectSettings.eUpdateType.Standard, "")                Next                            For Each Row As Object In Table("Hoja2")                  ...              Next                Ret.Success = True              Return Ret.Success            Catch ex As Exception              Ret.Success = False              Ret.LastException = ex              Return False          End Try      End Function          

×

#### Json example

  {      "Hoja1": \[          {              "Campo1": "1",              "Campo2": "Texto 1",              "Campo3": "Texto 2",              "Campo4": "Texto 3",              "Campo5": "Texto 4"          },          {              "Campo1": "2",              "Campo2": "24/02/2022",              "Campo3": "25/02/2022",              "Campo4": "26/02/2022",              "Campo5": "27/02/2022"          },          {              "Campo1": "3",              "Campo2": "10.3",              "Campo3": "10.3",              "Campo4": "10.3",              "Campo5": "10.3"          },          {              "Campo1": "4",              "Campo2": "25/02/2022",              "Campo3": "Texto 2",              "Campo4": "10.3",              "Campo5": "Texto"          }      \],      "Hoja2": \[          {              "Campo1": "1",              "Campo2": "Texto 1",              "Campo3": "Texto 2",              "Campo4": "Texto 3",              "Campo5": "Texto 4"          },          {              "Campo1": "2",              "Campo2": "24/02/2022",              "Campo3": "25/02/2022",              "Campo4": "26/02/2022",              "Campo5": "27/02/2022"          },          {              "Campo1": "3",              "Campo2": "10.3",              "Campo3": "10.3",              "Campo4": "10.3",              "Campo5": "10.3"          },          {              "Campo1": "4",              "Campo2": "25/02/2022",              "Campo3": "Texto 2",              "Campo4": "10.3",              "Campo5": "Texto"          }      \]  }