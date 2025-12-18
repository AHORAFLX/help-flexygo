# DLL Personalizada

En algunos casos, es necesario programar funcionalidades que flexygo no tiene. Para esto, es posible personalizar nuestras propias DLLs. Es necesario:

1.   Crear una nueva clase de biblioteca con Framework 4.6
2.   Agregar referencias a las bibliotecas de flexygo (Tabla 1.)

| Tabla 1. Bibliotecas de flexygo |     |     |
| --- | --- | --- |
| flxDataManager | flxEntity | flxGlobals |
| flxLocalization | flxMail | flxObjectConfig |
| flxSession | flxSettings | flxUtilities |

4.  Ver el código SampleCode.vb:

     <fh-modal class="button" modal_id="fhmodal_insert" modal_title="Insert object function">Función de insertar, actualizar y eliminar objeto</fh-modal>

     <fh-modal class="button" modal_id="fhmodal_process" modal_title="Process with parameters">Proceso de objeto con parámetros</fh-modal>

     <fh-modal class="button" modal_id="fhmodal_process_no_params" modal_title="Process without parameters">Proceso de objeto sin parámetros</fh-modal>

     <fh-modal class="button" modal_id="fhmodal_collection" modal_title="Collection Process with parameters">Proceso de colección con parámetros *</fh-modal>

     <fh-modal class="button" modal_id="fhmodal_collection_no_params" modal_title="Collection Process without parameters">Proceso de colección sin parámetros *</fh-modal>

     <fh-modal class="button" modal_id="fhmodal_load" modal_title="Load Object/Process/Report or Change Property">Cargar objeto o cambiar propiedad</fh-modal>

     No olvide configurar el Identificador Único en la configuración del objeto
     {: .flx-warning-card }
    
5.   Compilar la DLL personalizada y agregarla a la carpeta ~/custom/bin
6.   Configurar su proceso dentro de flexygo, visualizar imagen (Imagen 1.) 
    
![Custom DLL configuration example](/docs_assets/images/Custom_DLL/Custom_DLL.png "Image 1. Custom DLL configuration example")
    

## C# Personalizado

Los procesos de C# embebidos sirven para el mismo propósito que los procesos de DLL personalizadas.

Las referencias a bibliotecas y el código del proceso se insertan directamente en el formulario de flexygo (Imagen 2.)

![Custom C# Process in flexygo](/docs_assets/images/Custom_DLL/CSharpProcess.png "Image 2. Custom C# Process in flexygo")

Cuando guardas tu proceso C# en flexygo, se compila para verificar si hay errores.

Para comenzar a depurar un proceso C#: 

1.  Necesitas activar el modo de depuración en el Área de Administración navegando a Entorno -> Configuración -> Procesos de Depuración.
2.  Para establecer un punto de interrupción en una ubicación específica de tu código C#, puedes insertar.
```vbnet
System.Diagnostics.Debugger.Break();
```

Esto abrirá el código C# generado en Visual Studio, permitiéndote depurar el proceso.


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