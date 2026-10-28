# Using DataManager in library processes

The `DataManager` object lets you query and execute SQL statements against Flexygo's databases. It's recommended to instantiate it with the session's security context using information from the `ProcessHelper` object.

## Instantiation

```csharp
// Against the configuration database
DataManager dmConf = new DataManager("ConfConnectionString");

// Using ProcessHelper (security context)
DataManager dmData = new DataManager(Ret.ConfToken.UserSecurity.ConnectionStrings["DataConnectionString"]);

// Against the data database
DataManager dmDataNoContext = new DataManager("DataConnectionString");
```

You can also use the `DataManager` from the `EntityObject` object.

## Main methods

### GetValue

Gets a single value from a SQL query:

```csharp
int ne = Convert.ToInt32(dm.GetValue("SELECT Max(IdEjercicio)+1 As NewEjercicio FROM Conta_Ejercicios", "NewEjercicio"));
```

### DataTable

Queries and iterates over record sets:

```csharp
DataTable dt = dmData.DataTable("Select script as field1, field2 from table");
foreach (DataRow row in dt.Rows)
{
    // Process each row
}
```

Includes transactional control:

* `dmData.BeginTrans()` — starts a transaction
* `dmData.CommitTrans()` — commits changes
* `dmData.RollbackTrans()` — rolls back changes

### ExecuteSql

Executes `INSERT`, `UPDATE`, `DELETE` SQL statements:

```csharp
string sql = "Insert into table (f1, f2, f3, f4) Values ('1','2',3,'4')";
Entity.DataManager.ExecuteSql(sql);
```

### ExecuteStored

Executes stored procedures with parameters:

```csharp
BaseCollection parameters = new BaseCollection();
parameters.Add("IdEjercicio1", idEjercicio);
parameters.Add("IdEjercicio2", ne);

if (dm.ExecuteStored("Ejercicios_Trasvase", parameters))
{
    // Success: OUTPUT parameters updated in the collection
}
```

### ExecuteStoredResult

Executes stored procedures that return result sets:

```csharp
DataSet ds = null;
if (!dm.ExecuteStoredResult("_testdata", parameters, ref ds, "Cli,Emp"))
{
    throw new InvalidOperationException("Error", dm.LastException);
}
```

## Resources

Practical examples are available in the [HighCode GitHub repository](https://github.com/flexygo/HighCode/blob/master/Sample_Project/Sample_Project_Processes/CoursesProcesses.vb).
