# Tarea de script de base de datos

Esta innovadora utilidad de flexygo permite al desarrollador hacer cambios en el modelo de datos. Simplemente creando el registro con la instrucción SQL, el sistema lo iniciará al inicio, informando al usuario de cualquier problema detectado. En el caso de tener más de un script, los ejecutará en el orden especificado.

## Cómo funciona

Los scripts se ejecutan automáticamente cuando el servicio flexygo se reinicia, por ejemplo, cuando actualizamos flexygo a una nueva versión. Sólo se ejecutarán los scripts con estado Pendiente o Error. También puede ejecutar los scripts manualmente desde la lista de registros.

## Consideraciones generales

Los scripts deben ser idempotentes. Es decir, deben estar preparados para poder ejecutarse más de una vez con el mismo resultado.

No se permiten palabras clave como GO
{: .flx-warning-card }

### Cadena de conexión

Debe seleccionar la cadena de conexión para indicar el modelo de datos, y muy importante, el usuario debe tener privilegios para modificar el modelo de datos.

Después de la actualización, flexygo no sobrescribe el estado de los scripts existentes. Por lo tanto, en caso de cambiar a una base de datos, el administrador debe cambiar el estado de los scripts para que se ejecuten nuevamente.

### Estados

*   **Borrador**: El sistema no hace nada
*   **Pendiente**: Ejecutar proceso para ejecutar el script automáticamente o manualmente
*   **Error**: Mostrar un error. El sistema podría volver a ejecutarlo. Debe reparar el script o cambiar el estado a borrador o para arreglarlo más tarde.
*   **Éxito**: Todo salió bien. El sistema no hace nada.

###### Ejemplos

Para crear una nueva tabla:

```vbnet
IF NOT EXISTS (Select 1 from sys.tables where name = 'MyNewTable') 
BEGIN
CREATE TABLE [dbo].[MyNewTable](
	[RegId] [smallint] NOT NULL, 
	[Descrip] [nvarchar](50) NOT NULL, 
	[CssClass] [nvarchar](255) NULL,
	[IconCssClass] [nvarchar](255) NULL,
	[Visible] [bit] NOT NULL DEFAULT (1),
	[Inserted] [smalldatetime] NULL,
	[Modify] [smalldatetime] NOT NULL,
	CONSTRAINT [PK_MyNewTable] PRIMARY KEY CLUSTERED
	([RegId] ASC)
) ON [PRIMARY]
END;
```

Para crear nuevas columnas:
```vbnet
IF NOT EXISTS(SELECT * FROM sys.columns WHERE name = 'CreatedById' AND OBJECT_ID=OBJECT_ID('MyNewTable'))	
BEGIN
	ALTER TABLE MyNewTable ADD CreatedById float DEFAULT (0) NULL
END
IF NOT EXISTS(SELECT * FROM sys.columns WHERE name = 'ModifiedById' AND OBJECT_ID=OBJECT_ID('MyNewTable'))	
BEGIN
	ALTER TABLE MyNewTable ADD ModifiedById int NULL
END
```

Para crear un trigger utilizando executesql:
```vbnet
DECLARE @SQL nvarchar (MAX)='' 
IF Exists (Select 1 from sys.triggers where name = 'mytrig') 
BEGIN
	DROP TRIGGER mytrig
END

SET @SQL = '
	-- =============================================
	-- Author:		Daniel E. Lutz
	-- Create date: 01/11/2019
	-- Description:	trigger example
	-- =============================================
	CREATE TRIGGER [dbo].[mytrig] 
	ON  [dbo].[mytable]
	FOR Insert AS 
	BEGIN
		SET NOCOUNT ON;
		IF EXISTS(SELECT 1 FROM inserted) 
		BEGIN
        	--do something
        	print ''hello''
        END
    END
'
EXEC sp_executesql @SQL
```