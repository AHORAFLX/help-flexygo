# DLL Personalizada

En algunos casos, es necesario programar funcionalidades que flexygo no tiene. Para esto, es posible personalizar nuestras propias DLLs. Es necesario:

1.   Crear una nueva biblioteca de clases de C# para **.NET 9** (`net9.0`, la misma versión que las bibliotecas de flexygo), por ejemplo con `dotnet new classlib -f net9.0`.
2.   Agregar la referencia al paquete NuGet **Flexygo.Library**, que trae las bibliotecas de flexygo (Tabla 1). Usa la misma versión de flexygo que tiene la aplicación:

     ```xml
     <ItemGroup>
       <PackageReference Include="Flexygo.Library" Version="x.x.x" />
     </ItemGroup>
     ```

| Tabla 1. Algunas bibliotecas de flexygo incluidas en el paquete |     |     |
| --- | --- | --- |
| flxDataManager | flxEntity | flxGlobals |
| flxLocalization | flxMail | flxObjectConfig |
| flxSession | flxSettings | flxUtilities |

3.  Ver el código de ejemplo en C#:

     <fh-modal class="button" modal_id="fhmodal_insert" modal_title="Función de insertar, actualizar y eliminar objeto">Función de insertar, actualizar y eliminar objeto</fh-modal>

     <fh-modal class="button" modal_id="fhmodal_process" modal_title="Proceso de objeto con parámetros">Proceso de objeto con parámetros</fh-modal>

     <fh-modal class="button" modal_id="fhmodal_process_no_params" modal_title="Proceso de objeto sin parámetros">Proceso de objeto sin parámetros</fh-modal>

     <fh-modal class="button" modal_id="fhmodal_collection" modal_title="Proceso de colección con parámetros">Proceso de colección con parámetros *</fh-modal>

     <fh-modal class="button" modal_id="fhmodal_collection_no_params" modal_title="Proceso de colección sin parámetros">Proceso de colección sin parámetros *</fh-modal>

     <fh-modal class="button" modal_id="fhmodal_load" modal_title="Cargar objeto o cambiar propiedad">Cargar objeto o cambiar propiedad</fh-modal>

     Los métodos tienen que ser `public static`. flexygo pasa cada parámetro del proceso por su nombre, además de `Entity` y `Ret`.
     {: .flx-info-card }

     No olvide configurar el Identificador Único en la configuración del objeto
     {: .flx-warning-card }
    
4.   Compilar la DLL personalizada y copiarla en la carpeta `custom/bin` del **Backend** (en el proceso, el fichero se indica como `~/custom/bin/MiLibreria.dll`; `~` es la carpeta del Backend).
5.   Configurar su proceso dentro de flexygo, visualizar imagen (Imagen 1.) 
    
![Custom DLL configuration example](../../docs_assets/images/Custom_DLL/Custom_DLL.png "Image 1. Custom DLL configuration example")
    

## C# Personalizado

Los procesos de C# embebidos sirven para el mismo propósito que los procesos de DLL personalizadas.

Las referencias a bibliotecas y el código del proceso se insertan directamente en el formulario de flexygo (Imagen 2.)

![Custom C# Process in flexygo](../../docs_assets/images/Custom_DLL/CSharpProcess.png "Image 2. Custom C# Process in flexygo")

Cuando guardas tu proceso C# en flexygo, se compila para verificar si hay errores.

Para comenzar a depurar un proceso C#: 

1.  Activa el ajuste **DebugProcesses**: panel de control → área **Entorno** → *Parámetros*, grupo *Sistema* (en la skin flexy2022: *Admin Work Area > Environment > Settings*).
2.  Para establecer un punto de interrupción en una ubicación específica de tu código C#, puedes insertar:
```csharp
System.Diagnostics.Debugger.Break();
```

Esto abrirá el código C# generado en Visual Studio, permitiéndote depurar el proceso.


```csharp { #fhmodal_process }
/// <summary>
/// Sample object process executed from object with params
/// </summary>
/// <param name="Entity">The entity.</param>
/// <param name="Ret">Returns a Process Helper.</param>
/// <param name="Param1">Sample string param</param>
/// <param name="Param2">Sample integer param</param>
/// <returns><c>true</c> if no error, <c>false</c> otherwise.</returns>
public static bool SampleUserProcessWithParams(EntityObject Entity, ref ProcessHelper Ret, string Param1, int Param2)
{
    try
    {
        // Do something

        Ret.Success = true;
        Ret.SuccessMessage = "Process finished";
        return true;
    }
    catch (Exception ex)
    {
        Ret.Success = false;
        Ret.LastException = ex;
        return false;
    }
}
```
```csharp { #fhmodal_insert }
using System;
using System.Data;
using FLEXYGO.Exceptions;
using FLEXYGO.Objects;
using FLEXYGO.Objects.Settings;
using static FLEXYGO.Processing.ProcessManager;

namespace MyCompany.Processes
{
    public class SampleDataProcesses
    {
        /// <summary>
        /// Insert new object
        /// </summary>
        /// <param name="Entity">User Entity object with all info</param>
        /// <param name="Ret">ProcessHelper for returning results</param>
        public static bool InsertObj(EntityObject Entity, ref ProcessHelper Ret)
        {
            try
            {
                if (!Entity.CanInsert)
                {
                    Ret.LastException = new LocalizedException("You do Not have enough credentials to insert this Object.");
                    return false;
                }

                // Do something here before insert

                if (Entity.InsertProcess(Entity.TableName, ObjectSettings.eUpdateType.Standard, ""))
                {
                    // Do something here after insert

                    Ret.Success = true;
                    return true;
                }
                else
                {
                    Ret.Success = false;
                    Ret.LastException = Entity.LastException;
                    return false;
                }
            }
            catch (Exception ex)
            {
                Ret.Success = false;
                Ret.LastException = ex;
                return false;
            }
        }

        public static bool UpdateObj(EntityObject Entity, ref ProcessHelper Ret)
        {
            try
            {
                if (!Entity.CanUpdate)
                {
                    Ret.LastException = new LocalizedException("You do Not have enough credentials to update this Object.");
                    return false;
                }

                DataTable lTabla = Entity.GetData.Tables[0].GetChanges();

                // string OldValue = lTabla.Rows[0]["my_data_field", DataRowVersion.Original].ToString();
                // string NewValue = lTabla.Rows[0]["my_data_field", DataRowVersion.Current].ToString();
                // Use this syntax to compare old and new values

                // Do something here before update

                if (Entity.UpdateProcess(ObjectSettings.eUpdateType.Standard, ""))
                {
                    // Do something here after update

                    Ret.Success = true;
                    return true;
                }
                else
                {
                    Ret.Success = false;
                    Ret.LastException = Entity.LastException;
                    return false;
                }
            }
            catch (Exception ex)
            {
                Ret.Success = false;
                Ret.LastException = ex;
                return false;
            }
        }

        public static bool DeleteObj(EntityObject Entity, ref ProcessHelper Ret)
        {
            try
            {
                if (!Entity.CanDelete)
                {
                    Ret.LastException = new LocalizedException("You do Not have enough credentials to delete this Object.");
                    return false;
                }

                // Do something here before delete

                if (Entity.DeleteProcess(Entity.TableName, ObjectSettings.eUpdateType.Standard, ""))
                {
                    // Do something here after delete

                    Ret.Success = true;
                    return true;
                }
                else
                {
                    Ret.Success = false;
                    Ret.LastException = Entity.LastException;
                    return false;
                }
            }
            catch (Exception ex)
            {
                Ret.Success = false;
                Ret.LastException = ex;
                return false;
            }
        }
    }
}
```
```csharp { #fhmodal_collection_no_params }
using System;
using FLEXYGO.Objects;
using static FLEXYGO.Processing.ProcessManager;

namespace MyCompany.Processes
{
    public class SampleUserProcesses
    {
        /// <summary>
        /// Sample collection process executed from collection
        /// </summary>
        /// <param name="Entity">The entity collection.</param>
        /// <param name="Ret">Returns a Process Helper.</param>
        /// <returns><c>true</c> if no error, <c>false</c> otherwise.</returns>
        public static bool SampleUserProcess(EntityCollection Entity, ref ProcessHelper Ret)
        {
            try
            {
                foreach (EntityObject obj in Entity)
                {
                    // Do something
                }

                Ret.Success = true;
                return true;
            }
            catch (Exception ex)
            {
                Ret.Success = false;
                Ret.LastException = ex;
                return false;
            }
        }
    }
}
```
```csharp { #fhmodal_collection }
/// <summary>
/// Sample collection process executed from collection with params
/// </summary>
/// <param name="Entity">The entity collection.</param>
/// <param name="Ret">Returns a Process Helper.</param>
/// <param name="Param1">Sample string param</param>
/// <param name="Param2">Sample integer param</param>
/// <returns><c>true</c> if no error, <c>false</c> otherwise.</returns>
public static bool SampleUserProcessWithParams(EntityCollection Entity, ref ProcessHelper Ret, string Param1, int Param2)
{
    try
    {
        foreach (EntityObject obj in Entity)
        {
            // Do something
        }

        Ret.Success = true;
        return true;
    }
    catch (Exception ex)
    {
        Ret.Success = false;
        Ret.LastException = ex;
        return false;
    }
}
```
```csharp { #fhmodal_load }
/// <summary>
/// Sample load object/change property custom process.
/// </summary>
/// <param name="aSender">FormSender with objectname, processname or reportname, entity if proceeded and current form values.</param>
/// <param name="Ret">Returns a Process Helper.</param>
/// <returns>List of FormAction with actions to do with properties.</returns>
public static List<FormAction> SampleLoadProcess(FormSender aSender, ref ProcessHelper Ret)
{
    try
    {
        // Define new action after load/change
        FormAction action = new FormAction();
        action.PropertyName = "OriginId";

        // Set new value to this property
        action.changeValue = true;
        action.newValue = "1";

        // Change default class to one property
        action.changeClass = true;
        action.newClass = "box-danger";

        // Define if property is required
        action.changeRequired = true;
        action.newRequired = true;

        // Define if property is enabled
        action.changeEnabled = true;
        action.newEnabled = false;

        // Define current visibility to this property
        action.changeVisibility = true;
        action.newVisibility = true;

        // Set new sql for this property
        action.changeSQL = true;
        action.newSQL = "select ObjectName from objects where objectname like '%docu%'";

        // Append to afterload action list
        List<FormAction> actionResult = new List<FormAction>();
        actionResult.Add(action);

        Ret.Success = true;
        return actionResult;
    }
    catch (Exception ex)
    {
        Ret.Success = false;
        Ret.LastException = ex;
        return null;
    }
}
```
```csharp { #fhmodal_process_no_params }
/// <summary>
/// Sample object process executed from object without params
/// </summary>
/// <param name="Entity">The entity.</param>
/// <param name="Ret">Returns a Process Helper.</param>
/// <returns><c>true</c> if no error, <c>false</c> otherwise.</returns>
public static bool SampleUserProcess(EntityObject Entity, ref ProcessHelper Ret)
{
    try
    {
        // Do something

        Ret.Success = true;
        Ret.SuccessMessage = "Process finished";
        return true;
    }
    catch (Exception ex)
    {
        Ret.Success = false;
        Ret.LastException = ex;
        return false;
    }
}
```
