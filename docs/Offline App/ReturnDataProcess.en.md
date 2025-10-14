App description Common JS Functions Creating App Design Environment Designing App Navigation Options Return Data Process Useful Tokens Tracking Configuration Database Debugging App/Emulator differences Offline AI

# Return Data Process

Configure return data process to synchronize device and data model.

1.  Add it to **flexygo** stored procedure repository at **Admin Work Area** > **Logic and Rules** > **DB Stored Procedures**.
    
    ![Create Stored](/assets/images/Offline/CreateStored.png "Image 1. Create Stored")
    
    Image 1. Create Stored
    
2.  Edit the App Offline and assign the process:
    
    ![App Offline](/assets/images/Offline/AppOfflineSave.png "Image 2. App Offline")
    
    Image 2. App Offline
    
3.  Stored example
    
4.  Debugging errors on stored
    

×

#### Stored for return Data Process

  SET ANSI\_NULLS ON  GO  SET QUOTED\_IDENTIFIER ON  GO        ALTER PROCEDURE  \[dbo\].\[pflexy\_offline\_Partes\]  @JSONVALUE nvarchar(max),  @JSONImages nvarchar(max) OUTPUT,  @JSONDocuments nvarchar(max) OUTPUT  as  BEGIN    BEGIN TRY      declare @Partes int   -- Accessing tables and field on JSONVALUE PARAMETER   SELECT @Partes=count(\*)     FROM OPENJSON(@JSONVALUE,'$.Partes')     WITH (    IdParte        NVARCHAR(max)    '$.IdParte',      NumParte        NVARCHAR(max)    '$.NumParte',      IdTipoParte        NVARCHAR(max)    '$.IdTipoParte',      IdCliente        NVARCHAR(max)    '$.IdCliente',      IdArticuloaaa        NVARCHAR(max)    '$.IdArticuloaaa',      Descrip        NVARCHAR(max)    '$.Descrip',      FechaParte        NVARCHAR(max)    '$.FechaParte',      IdEstado        NVARCHAR(max)    '$.IdEstado',      Observaciones        NVARCHAR(max)    '$.Observaciones',      IdEmpleado        NVARCHAR(max)    '$.IdEmpleado',      Telefono        NVARCHAR(max)    '$.Telefono',      HoraAviso        NVARCHAR(max)    '$.HoraAviso',      Prioridad        NVARCHAR(max)    '$.Prioridad',      PersonaContacto        NVARCHAR(max)    '$.PersonaContacto',      \_isInserted        NVARCHAR(max)    '$.\_isInserted',      \_isUpdated        NVARCHAR(max)    '$.\_isUpdated',      \_isDeleted        NVARCHAR(max)    '$.\_isDeleted',      \_syncDate        NVARCHAR(max)    '$.\_syncDate',      \_readyToSend        NVARCHAR(max)    '$.\_readyToSend',      \_lastSendError        NVARCHAR(max)    '$.\_lastSendError',      \_insertDate        NVARCHAR(max)    '$.\_insertDate',      \_updatedDate        NVARCHAR(max)    '$.\_updatedDate',      \_deletedDate        NVARCHAR(max)    '$.\_deletedDate',      \_rowguid        NVARCHAR(max)    '$.\_rowguid'               ) ;     --NOW PROCESSING DATA ON DATA MODEL FOR INSERT/UPDATE/DELETE      return 1    END TRY  BEGIN CATCH          IF @@TRANCOUNT >0 BEGIN              ROLLBACK TRAN        END          DECLARE @CatchError NVARCHAR(MAX)         SET @CatchError=dbo.funImprimeError(ERROR\_MESSAGE(),ERROR\_NUMBER(),ERROR\_PROCEDURE(),@@PROCID ,ERROR\_LINE())          RAISERROR(@CatchError,12,1)          RETURN 0    END CATCH    END          

×

#### Debugging return Data Process

  -- Note: Executing on configuration database  -- Getting specific syncronization  select \* from Offline\_Apps  select \* from Offline\_Sync order by SyncDate desc  select \* from offline\_sync\_tables where syncId=''    -- Obtaining variables  declare @SyncId nvarchar(100)=''    declare @JSONVALUE nvarchar(max)  declare @JSONImages nvarchar(max)  declare @JSONDocuments nvarchar(max)    select @JSONVALUE=dbo.fGetJSON(@SyncId,null)  select @JSONImages=dbo.fGetJSON(@SyncId,'flxImages')  select @JSONDocuments=dbo.fGetJSON(@SyncId,'flxDocuments')    Note: Executing stored on Data Model database  exec MyDataBd\_I..pStoredVuelta @JSONVALUE, @JSONImages, @JSONDocuments           

×

#### App Offline