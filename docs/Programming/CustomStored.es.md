# Procedimiento Almacenado Personalizado

Un procedimiento almacenado es una colección de sentencias SQL y lógica de comandos SQL, que se compila y se almacena en la base de datos. Los procedimientos almacenados en SQL nos permiten crear consultas SQL que se almacenan y se ejecutan en el servidor. El principal objetivo de los procedimientos almacenados es ocultar las consultas SQL directas del código y mejorar el rendimiento de las operaciones de base de datos, como seleccionar, actualizar y eliminar datos. Puedes crear tu propio procedimiento almacenado. En este artículo veremos la diferencia entre el procedimiento almacenado de objeto y el procedimiento almacenado de colección.

Mira el video sobre cómo crear un procedimiento almacenado en el entorno de flexygo:

## Procedimiento Almacenado de Objeto

### Agregar proceso de procedimiento almacenado al menú de objeto

1.  Codificar el procedimiento almacenado en la base de datos. <fh-modal class="link" modal_id="fhmodal_object" modal_title="Object Stored Procedure">Ejemplo</fh-modal>.

2.  Agregalo al repositorio de procedimientos almacenados de flexygo en Área de Trabajo del Administrador > Lógica y Reglas > Procedimientos Almacenados DB.
    
    ![Stored Procedure Repository](/docs_assets/images/Custom_DLL/ObjectStored.png "Image 1. Stored Procedure Repository")
    
3.  Si el procedimiento tiene parámetros, insértalos automáticamente usando el menú **Generar parámetros**.

4.  Agrega relación al objeto en Área de Trabajo del Administrador > Gestión de objetos > Lógica.
    
    ![Stored and Object Relation](/docs_assets/images/Custom_DLL/RelatedObjectStored.png "Image 2. Stored and Object Relation")
    

##  Procedimiento Almacenado de Colección

### Agregar proceso de procedimiento almacenado al menú de lista

1.  Establecer **Campo Identificador Único** en la configuración del objeto para permitir el proceso de colección. 
    
    ![Set Unique Identifier Field](/docs_assets/images/Custom_DLL/UniqueIdentifier.png "Image 3. Set Unique Identifier Field")
    
2.  Codificar el procedimiento almacenado en la base de datos. Agrega un parámetro con el nombre @sysCollectionSentence y tipo nvarchar(max) para recibir un SQL con los elementos seleccionados. <fh-modal class="link" modal_id="fhmodal_collection" modal_title="Collection Stored Procedure">Ejemplo</fh-modal>

3.  Agregalo al repositorio de procedimientos almacenados de flexygo en Área de Trabajo del Administrador > Lógica y Reglas > Procedimientos Almacenados DB. 
    
    ![Stored Procedure Repository](/docs_assets/images/Custom_DLL/CollectionStored.png "Image 4. Stored Procedure Repository")
    
4.  Si el procedimiento tiene parámetros, insértalos automáticamente usando el menú **Generar parámetros**.

5.  Agrega relación a la colección en Área de Trabajo del Administrador > Gestión de objetos > Lógica. Si el proceso solo puede ejecutarse con los elementos seleccionados, por favor establece el interruptor en verdadero, de lo contrario el proceso se ejecutará con todos los elementos filtrados en la pantalla actual. 
    
    ![Stored and Collection Relation](/docs_assets/images/Custom_DLL/RelatedCollectionStored.png "Image 5. Stored and Collection Relation")

## Procedimiento Almacenado al Cargar el Objeto o Cambiar la Propiedad

Se puede asignar un Procedimiento Almacenado Personalizado a cada objeto o propiedad para que se ejecute cuando este sea creado o cambiado, para eso el Procedimiento recibirá un XML con cada valor de propiedad, aquí tienes un ejemplo de cómo usarlo:

<fh-modal class="button" modal_id="fhmodal_property_change" modal_title="Stored Procedure on object load or property changed">Ejemplo</fh-modal>

```sql { #fhmodal_ }
```

```sql { #fhmodal_object }
CREATE PROCEDURE [dbo].[pPers_LockClient]

        @IdClient int,
        @IdState int, 
        @BlockReason varchar(250),
        @BlockDate smalldatetime

        AS

            BEGIN TRY

            if exists (select * from Client where IdClient = @IdClient and IdState = @IdState ) begin
                RAISERROR( 'Selected client is already blocked.',12,1)
            end

            begin tran	

                    -- Update Client
                    UPDATE Client SET IdState = @IdState, blockReason = @BlockReason, blockDate = @BlockDate				
                    WHERE IdClient = @IdClient

            COMMIT TRAN			
            RETURN -1
        END TRY
        BEGIN CATCH

            IF @@TRANCOUNT >0 BEGIN
                ROLLBACK TRAN 
            END

            print 'The selected client could not be updated. ' + ERROR_MESSAGE()
            RETURN 0

        END CATCH
```

```sql { #fhmodal_collection }
CREATE PROCEDURE [dbo].[pPers_LockClientBatch]
          @IdState int,
          @BlockReason varchar(250),
          @BlockDate smalldatetime,
          @sysCollectionSentence nvarchar(max) --This param has sql sentence with selected items unique identifiers.
          AS

              BEGIN TRY

              begin tran	

                      Declare @Clients Table (IdClient int)
                      INSERT INTO @Clients EXEC sp_executesql @sysCollectionSentence;

                      update C 
                      set IdState=@IdState, BlockReason=@BlockReason, BlockDate=@BlockDate
                      from Client C inner join @Clients Sel on C.IdClient=Sel.IdClient			


              COMMIT TRAN	

              RETURN -1
          END TRY
          BEGIN CATCH

              IF @@TRANCOUNT >0 BEGIN
                  ROLLBACK TRAN 
              END

              declare @Error nvarchar(max) = 'The selected client could not be updated. ' + ERROR_MESSAGE()
              RAISERROR(@Error,12,1)
              RETURN 0

          END CATCH
```

```sql { #fhmodal_property_change }
--#NAME
--		SampleLoadProcess
--#CREATION
-- 		18/02/2022
--#CLASIFICATION
-- 		
--#DESCRIPTION
-- 		Sample load object/change property custom process.
--#PARAMETERS
-- 		@Values : Object properties	,
--		@ContextVars: Flexygo context variables,
--#OBSERVATIONS
-- Values XML Sample
--	< Row rowId="d4ec88a0-3129-4c5d-b5ac-8c9d2867db64" ObjectName="systmpTest"> 
--		< Property Name="TestId" Value="3" OldValue="" TableName="_Test" IsKey="True" /> 
--		< Property Name="Descrip" Value="test3" OldValue="" TableName="_Test" IsKey="False" /> 
--		< Property Name="IdDoc" Value="" OldValue="" TableName="_Test" IsKey="False" /> 
--		< Property Name="InsertUpdate" Value="False" OldValue="False" TableName="_Test" IsKey="False" /> 
--		< Property Name="Usuario" Value="" OldValue="" TableName="_Test" IsKey="False" /> 
--		< Property Name="FechaInsertUpdate" Value="14/02/2018 0:00:00" OldValue="14/02/2018 0:00:00" TableName="_Test" IsKey="False" /> 
--		< Property Name="Config" Value="config3" OldValue="" TableName="_Test_Conf" IsKey="False" /> 
--	< /Row> 
--
-- ContextVars XML Sample		
--  < Row> 
--		< Property Name="reference" Value="0" /> 
--		< Property Name="subReference" Value="0" /> 
--		< Property Name="currentRole" Value="Admins" /> 
--		< Property Name="currentRoleId" Value="admins" /> 
--		< Property Name="currentUserLogin" Value="admin" /> 
--		< Property Name="currentUserId" Value="1" /> 
--		< Property Name="currentUserFullName" Value="admin" /> 
--		< Property Name="currentUserCultureId" Value="en-gb" /> 
--		< Property Name="currentUserLang" Value="en" /> 
--		< Property Name="currentUserEmail" Value="info@ahora.es.com" /> 
--  < /Row> 
--
--#CHANGES
-- 		
----------------------------------------------------------------------------------
CREATE PROCEDURE [dbo].[SampleLoadProcess]
	@Values AS XML,
        @ContextVars as XML
AS
	DECLARE 
	  @PropertyName AS NVARCHAR(50),
	  @changeValue AS BIT,
	  @newValue AS NVARCHAR(MAX),
	  @changeClass AS BIT,
	  @newClass AS NVARCHAR(MAX),
	  @changeRequired AS BIT,
          @newRequired AS BIT,
          @changeEnabled AS BIT,
          @newEnabled AS BIT,
          @changeVisibility AS BIT,
          @newVisibility AS BIT,
          @changeSQL AS BIT,
          @newSQL AS NVARCHAR(MAX),
          @docu AS NVARCHAR(50) 

	SET @docu = @Values.value('(/Row/Property[@Name=''Docu'']/@Value)[1]', 'nvarchar(50)' )
	
        SET @PropertyName = 'OriginId'
	SET @changeValue = 1
	SET @newValue = '1'
	SET @changeClass = 1
	SET @newClass = 'box-danger'
	SET @changeRequired = 1
        SET @newRequired = 1
        SET @changeEnabled = 1
        SET @newEnabled = 0
        SET @changeVisibility = 1
        SET @newVisibility = 1
        SET @changeSQL = 1
	SET @newSQL = 'select ObjectName from objects where objectname like ''' + @docu + ''''
    
        SELECT 
    	    @PropertyName AS PropertyName, 
            @changeValue AS changeValue, 
            @newValue AS newValue, 
            @changeClass AS changeClass, 
            @newClass AS newClass, 
            @changeRequired AS changeRequired, 
            @newRequired AS newRequired, 
            @changeEnabled AS changeEnabled, 
            @newEnabled AS newEnabled, 
            @changeVisibility AS changeVisibility, 
            @newVisibility AS newVisibility, 
            @changeSQL AS changeSQL, 
            @newSQL AS newSQL
	
RETURN 1
```