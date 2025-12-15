# Importaciones

Las importaciones nos permiten transferir información desde archivos al sistema, por ejemplo, desde un archivo de Excel. Se puede configurar desde el panel de control ubicado en Área de Trabajo de Administración > Otras Herramientas > Importaciones o simplemente haga <flx-navbutton class="link" type="openPage" pagetypeid="list" objectname="sysImportSettings">clic aquí</flx-navbutton>.

## Creando configuración

* Descripción
* Nombre del Objeto
* Tipo: Excel solo por ahora.
* Nombre del Proceso: Especificaremos el proceso que se ejecutará después de procesar el archivo a importar, es responsable de insertar/eliminar/actualizar los datos. El   proceso, con solo 1 parámetro **@JSONVALUE**, contiene toda la información del archivo.
* Archivo de Plantilla: Es el archivo que sirve como plantilla para el usuario, el archivo se almacena en ~/custom/imports/templates/{{ImportId}}
* Activo: Habilitar/Deshabilitar la configuración de importación.
* Eliminar Archivo Exitoso
    *  Habilitado: Cuando la importación se ejecuta con éxito, el archivo importado se elimina.
    *  Deshabilitado: Cuando la importación se ejecuta con éxito, el archivo importado se almacena en ~/custom/imports/{{ImportId}}.
* Eliminar Archivo Erróneo
    *  Habilitado: Cuando la importación falla, el archivo importado se elimina.
    *  Deshabilitado: Cuando la importación falla, el archivo importado se almacena en ~/custom/imports/{{ImportId}}.


![Import settings](/docs_assets/images/Imports/setting.png "Image 1. Create Import Setting")

## Excel

El formato que deben seguir los archivos tipo Excel es como se muestra en la siguiente imagen.

La primera fila debe ser los nombres de las columnas, no pueden estar vacías, no pueden contener caracteres especiales, espacios ni la letra ñ. En cualquier caso, el sistema reemplazará cualquier carácter no aceptado.

Se pueden agregar más de una hoja como en el ejemplo, el nombre de las hojas sigue los mismos criterios que las columnas.

![Excel example](/docs_assets/images/Imports/excel.png "Image 2. Excel example")

## Ejemplo de Proceso

1.  Agregarlo al repositorio de procesos de flexygo en **Área de Trabajo de Administración** > **Lógica y Reglas** > **Procedimientos Almacenados de DB o Dll de Servidor**.
    
![Create Process](/docs_assets/images/Imports/process.png "Image 3. Create Process")
    
<fh-modal class="button" modal_id="fhmodal_stored" modal_title="Stored example">Ejemplo Almacenado</fh-modal>
<fh-modal class="button" modal_id="fhmodal_dll" modal_title="Dll example">Ejemplo DLL</fh-modal>
<fh-modal class="button" modal_id="fhmodal_json" modal_title="Json example">Ejemplo de valor Json</fh-modal>

## Ejecutar importación

Para ejecutar la importación se encuentra en el menú superior Herramientas->Importar.

En la ventana del proceso aparece un botón para descargar la plantilla del archivo que se ha colocado previamente en la creación de la configuración.

![Process window](/docs_assets/images/Imports/process_window.png "Image 4. Process window")

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

```vbnet { #fhmodal_dll }
Imports System.Web.Script.Serialization
    
    Public Shared Function Importacion(Entity As EntityObject, JSONVALUE As String, Ret As ProcessHelper) As Boolean
        Try
            Dim Table As Object = New JavaScriptSerializer().Deserialize(Of Object)(JSONVALUE)

            For Each Row As Object In Table("Hoja1")
                Dim ImportacionObj As New EntityObject("Importacion", Ret.ConfToken)
                ImportacionObj("Campo1") = Row("Campo1")
                ImportacionObj("Campo2") = Row("Campo2")
                ImportacionObj("Campo3") = Row("Campo3")
                ImportacionObj("Campo4") = Row("Campo4")
                ImportacionObj("Campo5") = Row("Campo5")

                ImportacionObj.InsertProcess(ImportacionObj.TableName, Settings.ObjectSettings.eUpdateType.Standard, "")

            Next
            
            For Each Row As Object In Table("Hoja2")
                ...
            Next

            Ret.Success = True
            Return Ret.Success

        Catch ex As Exception
            Ret.Success = False
            Ret.LastException = ex
            Return False
        End Try
    End Function
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