# Custom Stored Procedure

Stored procedure is a collection SQL statements and sql command logic, which is compiled and stored on the database. Stored procedues in SQL allows us to create SQL queries to be stored and executed on the server. The main purpose of stored procedures to hide direct SQL queries from the code and improve performance of database operations such as select, update, and delete data. You can create your own stored procedure. In this article we'll see the difference between object stored procedure and collection stored procedure.

Whatch video about creating stored procedure in **flexygo** environment:

## Object Stored Procedure

### Add stored procedure process into object menu

1.  Code stored procedure in database. <fh-modal class="link" modal_id="fhmodal_object" modal_title="Object Stored Procedure">Example</fh-modal>

2.  Add it to **flexygo** stored procedure repository at Admin Work Area > Logic and Rules > DB Stored Procedures.
    
    ![Stored Procedure Repository](/assets/images/Custom_DLL/ObjectStored.png "Image 1. Stored Procedure Repository")
    
3.  If stored has parameters insert it automatically using **Generate parameters** menu.

4.  Add relation to object in Admin Work Area > Object management > Logic.
    
    ![Stored and Object Relation](/assets/images/Custom_DLL/RelatedObjectStored.png "Image 2. Stored and Object Relation")
    

## Collection Stored Procedure

### Add stored procedure process into list menu

1.  Set **Unique Identifier Field** in object configuration to allow collection process.
    
    ![Set Unique Identifier Field](/assets/images/Custom_DLL/UniqueIdentifier.png "Image 3. Set Unique Identifier Field")
    
2.  Code stored procedure in database. Append a param with name **@sysCollectionSentence** and type **nvarchar(max)** to recive an SQL with selected items. <fh-modal class="link" modal_id="fhmodal_collection" modal_title="Collection Stored Procedure">Example</fh-modal>

3.  Add it to **flexygo** stored procedure repository at Admin Work Area > Logic and Rules > DB Stored Procedures.
    
    ![Stored Procedure Repository](/assets/images/Custom_DLL/CollectionStored.png "Image 4. Stored Procedure Repository")
    
4.  If stored has parameters insert it automatically using **Generate parameters** menu.

5.  Add relation to collection in Admin Work Area > Object management > Logic. If process only can be executed with selected items, please set switch to true, otherwise process will be executed with all items filtered in current screen.
    
    ![Stored and Collection Relation](/assets/images/Custom_DLL/RelatedCollectionStored.png "Image 5. Stored and Collection Relation")

## Custom Stored on Object Load Or Property Change

To every object or property a Custom Stored can be assigned to get executed when this one is created or changed, for that the Stored will receive an XML with every propertie value, here you have an example on how to use it:

<fh-modal class="button" modal_id="fhmodal_property_change" modal_title="Stored Procedure on object load or property changed">Example</fh-modal>

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