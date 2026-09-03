# Uso de DataManager en procesos de librerías

El objeto `DataManager` permite consultar y ejecutar sentencias SQL contra las bases de datos de Flexygo. Se recomienda instanciarlo con el contexto de seguridad de la sesión usando información del objeto `ProcessHelper`.

## Instanciación

```vb
'Contra base de datos de configuración
Dim dmConf As DataManager = New DataManager("ConfConnectionString")

'Con ProcessHelper (contexto de seguridad)
Dim dmData As DataManager = New DataManager(Ret.ConfToken.UserSecurity.ConnectionStrings("DataConnectionString"))

'Contra base de datos de datos
Dim dmData As DataManager = New DataManager("DataConnectionString")
```

También es posible utilizar el `DataManager` del objeto `EntityObject`.

## Métodos principales

### GetValue

Obtiene un único valor de una consulta SQL:

```vb
Dim Ne As Integer = dm.GetValue("SELECT Max(IdEjercicio)+1 As NewEjercicio FROM Conta_Ejercicios", "NewEjercicio")
```

### DataTable

Consulta y recorre conjuntos de registros:

```vb
Dim dt As DataTable = dmData.DataTable("Select script as field1, field2 from table")
For Each row As DataRow In dt.Rows
    'Procesar cada fila
Next
```

Incluye control transaccional:

* `dmData.BeginTrans()` — inicia transacción
* `dmData.CommitTrans()` — confirma cambios
* `dmData.RollbackTrans()` — revierte cambios

### ExecuteSql

Ejecuta instrucciones SQL `INSERT`, `UPDATE`, `DELETE`:

```vb
Dim sql As String = "Insert into table (f1, f2, f3, f4) Values ('1','2',3,'4')"
Entity.DataManager.ExecuteSql(sql)
```

### ExecuteStored

Ejecuta procedimientos almacenados con parámetros:

```vb
Dim params As New BaseCollection
params.Add("IdEjercicio1", IdEjercicio)
params.Add("IdEjercicio2", Ne)

If dm.ExecuteStored("Ejercicios_Trasvase", params) Then
    'Éxito - parámetros OUTPUT actualizados en la colección
End If
```

### ExecuteStoredResult

Ejecuta procedimientos que retornan conjuntos de resultados:

```vb
Dim ds As DataSet
If Not dm.ExecuteStoredResult("_testdata", params, ds, "Cli,Emp", True) Then
    Throw New InvalidOperationException("Error", dm.LastException)
End If
```

## Recursos

Ejemplos prácticos disponibles en el [repositorio HighCode de GitHub](https://github.com/flexygo/HighCode/blob/master/Sample_Project/Sample_Project_Processes/CoursesProcesses.vb).
