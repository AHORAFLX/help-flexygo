# Using DataManager in library processes

The `DataManager` object lets you query and execute SQL statements against Flexygo's databases. It's recommended to instantiate it with the session's security context using information from the `ProcessHelper` object.

## Instantiation

```vb
'Against the configuration database
Dim dmConf As DataManager = New DataManager("ConfConnectionString")

'Using ProcessHelper (security context)
Dim dmData As DataManager = New DataManager(Ret.ConfToken.UserSecurity.ConnectionStrings("DataConnectionString"))

'Against the data database
Dim dmData As DataManager = New DataManager("DataConnectionString")
```

You can also use the `DataManager` from the `EntityObject` object.

## Main methods

### GetValue

Gets a single value from a SQL query:

```vb
Dim Ne As Integer = dm.GetValue("SELECT Max(IdEjercicio)+1 As NewEjercicio FROM Conta_Ejercicios", "NewEjercicio")
```

### DataTable

Queries and iterates over record sets:

```vb
Dim dt As DataTable = dmData.DataTable("Select script as field1, field2 from table")
For Each row As DataRow In dt.Rows
    'Process each row
Next
```

Includes transactional control:

* `dmData.BeginTrans()` — starts a transaction
* `dmData.CommitTrans()` — commits changes
* `dmData.RollbackTrans()` — rolls back changes

### ExecuteSql

Executes `INSERT`, `UPDATE`, `DELETE` SQL statements:

```vb
Dim sql As String = "Insert into table (f1, f2, f3, f4) Values ('1','2',3,'4')"
Entity.DataManager.ExecuteSql(sql)
```

### ExecuteStored

Executes stored procedures with parameters:

```vb
Dim params As New BaseCollection
params.Add("IdEjercicio1", IdEjercicio)
params.Add("IdEjercicio2", Ne)

If dm.ExecuteStored("Ejercicios_Trasvase", params) Then
    'Success - OUTPUT parameters updated in the collection
End If
```

### ExecuteStoredResult

Executes stored procedures that return result sets:

```vb
Dim ds As DataSet
If Not dm.ExecuteStoredResult("_testdata", params, ds, "Cli,Emp", True) Then
    Throw New InvalidOperationException("Error", dm.LastException)
End If
```

## Resources

Practical examples are available in the [HighCode GitHub repository](https://github.com/flexygo/HighCode/blob/master/Sample_Project/Sample_Project_Processes/CoursesProcesses.vb).
