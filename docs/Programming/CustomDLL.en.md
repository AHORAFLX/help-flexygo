# Custom DLL

In some cases it's necessary to program functionalities which **flexygo** doesn't have. For this, it's possible to customize our own DLLs. It's necessary:

1.  Create new library class with Framework 4.6
2.  Add **flexygo** libraries references (Table 1.)

| Table 1. **flexygo** libraries |     |     |
| --- | --- | --- |
| flxDataManager | flxEntity | flxGlobals |
| flxLocalization | flxMail | flxObjectConfig |
| flxSession | flxSettings | flxUtilities |

4.  See SampleCode.vb code:

     <fh-modal class="button" modal_id="fhmodal_insert" modal_title="Insert object function">Insert, Update And Delete object function</fh-modal>

     <fh-modal class="button" modal_id="fhmodal_process" modal_title="Process with parameters">Object Process with parameters</fh-modal>

     <fh-modal class="button" modal_id="fhmodal_process_no_params" modal_title="Process without parameters">Object Process without parameters</fh-modal>

     <fh-modal class="button" modal_id="fhmodal_collection" modal_title="Collection Process with parameters">Collection Process with parameters *</fh-modal>

     <fh-modal class="button" modal_id="fhmodal_collection_no_params" modal_title="Collection Process without parameters">Collection Process without parameters *</fh-modal>

     <fh-modal class="button" modal_id="fhmodal_load" modal_title="Load Object/Process/Report or Change Property">Load Object or Change Property</fh-modal>

     Don't forget to configure Unique Identifier in object configuration
     {: .flx-warning-card }
    
5.  Compile custom DLL and add it to the folder ~/custom/bin
6.  Configure your process inside **flexygo**, visualize image (Image 1.)
    
![Custom DLL configuration example](../docs_assets/images/Custom_DLL/Custom_DLL.png "Image 1. Custom DLL configuration example")
    

## Custom C\#

Embedded C# processes serve the same purpose as custom DLL processes.

References to libraries and the code of the process are directly inserted into the flexygo form (Image 2.)

![Custom C# Process in flexygo](../docs_assets/images/Custom_DLL/CSharpProcess.png "Image 2. Custom C# Process in flexygo")

When you save your C# process in flexygo, it is compiled to check for any errors.

To start debugging a C# process:

1.  You need to activate the debug mode in the Admin Area by navigating to Environment -> Settings -> Debug Processes.
2.  To set a breakpoint at a specific location in your C# code, you can insert 
```vbnet
System.Diagnostics.Debugger.Break();
```

This will open the generated C# code in Visual Studio, enabling you to debug the process.


```vbnet { #fhmodal_process }
''' <summary>
    ''' Sample object process executed from object with params
    ''' </summary>
    ''' <param name="Entity">The entity.</param>
    ''' <param name="Ret">Returns a Process Helper.</param>
    ''' <param name="Param1">Sample string param</param>
    ''' <param name="Param2">Sample integer param</param>
    ''' <returns><c>true</c> if no error, <c>false</c> otherwise.</returns>
    ''' <exception cref="System.Exception">Returns error</exception>
Public Shared Function SampleUserProcessWithParams(ByVal Entity As EntityObject, ByRef Ret As ProcessHelper, ByVal Param1 As String, ByVal Param2 As Integer) As Boolean
        Try

            ''Do Something

            Ret.Success = True
            Ret.SucessMessage = "Cache reloaded"
            Return True

        Catch ex As Exception
            Ret.Success = False
            Ret.LastException = ex
            Return False
        End Try
    End Function
```
```vbnet { #fhmodal_insert }
Imports FLEXYGO.Configuration.Tokens
Imports FLEXYGO.Data
Imports FLEXYGO.Exceptions
Imports FLEXYGO.Objects
Imports FLEXYGO.Processing
Imports FLEXYGO.Processing.ProcessManager
Imports FLEXYGO.Utilities.General
Imports FLEXYGO.Utilities.General.Util

Public Class SampleDataProcesses


    ''' <summary>
    ''' Insert new object
    ''' </summary>
    ''' <param name="Entity">User Entity object with all info</param>
    ''' <param name="Ret">ProcessHelper for returning results</param>
    Public Shared Function InsertObj(Entity As EntityObject, Ret As ProcessHelper) As Boolean
        Try

            If Not Entity.CanInsert Then
                Ret.LastException = New LocalizedException("You do Not have enough credentials to insert this Object.")
                Return False
            End If

            ''Do something here before insert


            If Entity.InsertProcess(Entity.TableName, Settings.ObjectSettings.eUpdateType.Standard, "") Then

                ''Do something here after insert
                
                Ret.Success = True
                Return True
            Else
                Ret.Success = False
                Ret.LastException = Entity.LastException
                Return False
            End If

        Catch ex As Exception
            Ret.Success = False
            Ret.LastException = ex
            Return False
        End Try
    End Function   
End Class

    Public Shared Function UpdateObj(Entity As EntityObject, Ret As ProcessHelper) As Boolean
        Try

            If Not Entity.CanUpdate Then
                Ret.LastException = New LocalizedException("You do Not have enough credentials to update this Object.")
                Return False
            End If

            Dim lTabla As DataTable = Entity.GetData.Tables(0).GetChanges

            'Dim OldValue As String = lTabla.Rows(0)("my_data_field", DataRowVersion.Original)
            'Dim NewValue As String = lTabla.Rows(0)("my_data_field", DataRowVersion.Original)
            'Use this sintax to compare old and new values

            ''Do something here begore update.

            If Entity.UpdateProcess(Settings.ObjectSettings.eUpdateType.Standard, "") Then


                ''Do something here after update.

                Ret.Success = True
                Return True
            Else
                Ret.Success = False
                Ret.LastException = Entity.LastException
                Return False
            End If

        Catch ex As Exception
            Ret.Success = False
            Ret.LastException = ex
            Return False
        End Try
    End Function
      
    Public Shared Function DeleteObj(Entity As EntityObject, Ret As ProcessHelper) As Boolean
        Try

            If Not Entity.CanDelete Then
                Ret.LastException = New LocalizedException("You do Not have enough credentials to delete this Object.")
                Return False
            End If

            'Do something here before delete

            If Entity.DeleteProcess(Entity.TableName, Settings.ObjectSettings.eUpdateType.Standard, "") Then

                'Do something here after delete

                Ret.Success = True
                Return True
            Else
                Ret.Success = False
                Ret.LastException = Entity.LastException
                Return False
            End If

        Catch ex As Exception
            Ret.Success = False
            Ret.LastException = ex
            Return False
        End Try
    End Function
```
```vbnet { #fhmodal_collection }
Imports FLEXYGO.Configuration.Tokens
Imports FLEXYGO.Data
Imports FLEXYGO.Exceptions
Imports FLEXYGO.Objects
Imports FLEXYGO.Processing
Imports FLEXYGO.Processing.ProcessManager
Imports FLEXYGO.Utilities.General
Imports FLEXYGO.Utilities.General.Util

Public Class SampleUserProcesses


    ''' <summary>
    ''' Sample collection process executed from collection 
    ''' </summary>
    ''' <param name="Entity">The entity collection.</param>
    ''' <param name="Ret">Returns a Process Helper.</param>
    ''' <returns><c>true</c> if no error, <c>false</c> otherwise.</returns>
    ''' <exception cref="System.Exception">Returns error</exception>
    Public Shared Function SampleUserProcess(ByVal Entity As EntityCollection, ByRef Ret As ProcessHelper) As Boolean
        Try

			If Entity.Count > 0 Then
                For Each obj As EntityObject In Entity
                    ''Do Something
                Next
            End If
            

            Ret.Success = True
            Return True

        Catch ex As Exception
            Ret.Success = False
            Ret.LastException = ex
            Return False
        End Try
    End Function
  End Class
```
```vbnet { #fhmodal_collection_no_params }
''' <summary>
    ''' Sample collection process executed from collection with params
    ''' </summary>
    ''' <param name="Entity">The entity collection.</param>
    ''' <param name="Ret">Returns a Process Helper.</param>
    ''' <param name="Param1">Sample string param</param>
    ''' <param name="Param2">Sample integer param</param>
    ''' <returns><c>true</c> if no error, <c>false</c> otherwise.</returns>
    ''' <exception cref="System.Exception">Returns error</exception>
    Public Shared Function SampleUserProcessWithParams(ByVal Entity As EntityCollection, ByRef Ret As ProcessHelper, ByVal Param1 As String, ByVal Param2 As Integer) As Boolean
        Try

            If Entity.Count > 0 Then
                For Each obj As EntityObject In Entity
                    ''Do Something
                Next
            End If

            Ret.Success = True
            Return True

        Catch ex As Exception
            Ret.Success = False
            Ret.LastException = ex
            Return False
        End Try
    End Function
```
```vbnet { #fhmodal_load }
''' <summary>
    ''' Sample load object/change property custom process.
    ''' </summary>
    ''' <param name="aSender">FormSender with objectname, processname or reportname, entity if proceeded and current form values.</param>
    ''' <param name="Ret">Returns a Process Helper.</param>
    ''' <returns>List(Of FormAction) with actions to do with properties.</returns>
    ''' <exception cref="System.Exception">Returns error</exception>
    Public Shared Function SampleLoadProcess(ByVal aSender As FormSender, ByRef Ret As ProcessHelper) As List(Of FormAction)
        Try

            'Define new action after load/change
            Dim action As New FormAction
            action.PropertyName = "OriginId"

            'Set new value to this property
            action.changeValue = True
            action.newValue = "1"

            'Change default class to one property
            action.changeClass = True
            action.newClass = "box-danger"
            
            'Define if property is required
            action.changeRequired = True
            action.newRequired = True

            'Define if property is enabled
            action.changeEnabled = True
            action.newEnabled = False

            'Define current visibility to this property
            action.changeVisibility = True
            action.newVisibility = True

            'set new sql for this property
            action.changeSQL = True
            action.newSQL = "select ObjectName from objects where objectname like '%docu%'"


            ''Append to afterload action array.
            Dim actionResult As New List(Of FormAction)
            actionResult.Add(action)

            Ret.Success = True

            Return actionResult

        Catch ex As Exception
            Ret.Success = False
            Ret.LastException = ex
            Return Nothing
        End Try
    End Function
```
```vbnet { #fhmodal_process_no_params }
''' <summary>
    ''' Sample object process executed from object with params
    ''' </summary>
    ''' <param name="Entity">The entity.</param>
    ''' <param name="Ret">Returns a Process Helper.</param>
    ''' <param name="Param1">Sample string param</param>
    ''' <param name="Param2">Sample integer param</param>
    ''' <returns><c>true</c> if no error, <c>false</c> otherwise.</returns>
    ''' <exception cref="System.Exception">Returns error</exception>
    Public Shared Function SampleUserProcessWithParams(ByVal Entity As EntityObject, ByRef Ret As ProcessHelper, ByVal Param1 As String, ByVal Param2 As Integer) As Boolean
        Try

            ''Do Something

            Ret.Success = True
            Ret.SucessMessage = "Cache reloaded"
            Return True

        Catch ex As Exception
            Ret.Success = False
            Ret.LastException = ex
            Return False
        End Try
    End Function
```