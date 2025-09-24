# Database script job

This innovative utility of **flexygo**, allows the developer to make changes in the data model. Simply by creating the registry with the SQL instruction, the system will start it at startup, informing the user of any problems detected. In the case of having more than one script, it will execute them in the specified order.

## How it works

The scripts run automatically when the **flexygo** service restarts, for example, when we update **flexygo** to a new version. Only scripts in Pending or Error status will be executed. You can also run the scripts manually from the list of records itself.

## General considerations

The scripts must be idempotent. That is, they must be prepared to be able to execute more than once with the same result.

Keywords such as GO are not allowed

### Connection string

You must select the connection string to indicate the data model, and very importantly, the user must have privileges to modify the data model.

After the update, **flexygo** does not overwrite the status of existing scripts. Therefore, in case of switching to a database, the administrator must change the status of the scripts so that they are executed again.

### States

*   **Draft:** System does nothing
*   **Pending:** Run process execute the script automatically or manually
*   **Error:** Display an error. The system could rerun it again. You must repair the script or change the status to draft or to fix it later
*   **Success:** Everything went well. System does nothing

###### Examples

To create a new table:

IF NOT EXISTS (Select 1 from sys.tables where name = 'MyNewTable') BEGIN CREATE TABLE \[dbo\].\[MyNewTable\]( \[RegId\] \[smallint\] NOT NULL, \[Descrip\] \[nvarchar\](50) NOT NULL, \[CssClass\] \[nvarchar\](255) NULL, \[IconCssClass\] \[nvarchar\](255) NULL, \[Visible\] \[bit\] NOT NULL DEFAULT (1), \[Inserted\] \[smalldatetime\] NULL, \[Modify\] \[smalldatetime\] NOT NULL, CONSTRAINT \[PK\_MyNewTable\] PRIMARY KEY CLUSTERED (\[RegId\] ASC) ) ON \[PRIMARY\] END;

To create new columns:

IF NOT EXISTS(SELECT \* FROM sys.columns WHERE name = 'CreatedById' AND OBJECT\_ID=OBJECT\_ID('MyNewTable')) BEGIN ALTER TABLE MyNewTable ADD CreatedById float DEFAULT (0) NULL END IF NOT EXISTS(SELECT \* FROM sys.columns WHERE name = 'ModifiedById' AND OBJECT\_ID=OBJECT\_ID('MyNewTable')) BEGIN ALTER TABLE MyNewTable ADD ModifiedById int NULL END

To create a trigger using executesql:

DECLARE @SQL nvarchar (MAX)='' IF Exists (Select 1 from sys.triggers where name = 'mytrig') BEGIN DROP TRIGGER mytrig END SET @SQL = ' -- ============================================= -- Author: Daniel E. Lutz -- Create date: 01/11/2019 -- Description: trigger example -- ============================================= CREATE TRIGGER \[dbo\].\[mytrig\] ON \[dbo\].\[mytable\] FOR Insert AS BEGIN SET NOCOUNT ON; IF EXISTS(SELECT 1 FROM inserted) BEGIN --do something print ''hello'' END END ' EXEC sp\_executesql @SQL