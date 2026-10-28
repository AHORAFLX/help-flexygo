# Uso de DataManager en procesos de librerías

El objeto `DataManager` permite consultar y ejecutar sentencias SQL contra las bases de datos de Flexygo. Se recomienda instanciarlo con el contexto de seguridad de la sesión usando información del objeto `ProcessHelper`.

## Instanciación

```csharp
// Contra base de datos de configuración
DataManager dmConf = new DataManager("ConfConnectionString");

// Con ProcessHelper (contexto de seguridad)
DataManager dmData = new DataManager(Ret.ConfToken.UserSecurity.ConnectionStrings["DataConnectionString"]);

// Contra base de datos de datos
DataManager dmDataNoContext = new DataManager("DataConnectionString");
```

También es posible utilizar el `DataManager` del objeto `EntityObject`.

## Métodos principales

### GetValue

Obtiene un único valor de una consulta SQL:

```csharp
int ne = Convert.ToInt32(dm.GetValue("SELECT Max(IdEjercicio)+1 As NewEjercicio FROM Conta_Ejercicios", "NewEjercicio"));
```

### DataTable

Consulta y recorre conjuntos de registros:

```csharp
DataTable dt = dmData.DataTable("Select script as field1, field2 from table");
foreach (DataRow row in dt.Rows)
{
    // Procesar cada fila
}
```

Incluye control transaccional:

* `dmData.BeginTrans()` — inicia transacción
* `dmData.CommitTrans()` — confirma cambios
* `dmData.RollbackTrans()` — revierte cambios

### ExecuteSql

Ejecuta instrucciones SQL `INSERT`, `UPDATE`, `DELETE`:

```csharp
string sql = "Insert into table (f1, f2, f3, f4) Values ('1','2',3,'4')";
Entity.DataManager.ExecuteSql(sql);
```

### ExecuteStored

Ejecuta procedimientos almacenados con parámetros:

```csharp
BaseCollection parameters = new BaseCollection();
parameters.Add("IdEjercicio1", idEjercicio);
parameters.Add("IdEjercicio2", ne);

if (dm.ExecuteStored("Ejercicios_Trasvase", parameters))
{
    // Éxito: parámetros OUTPUT actualizados en la colección
}
```

### ExecuteStoredResult

Ejecuta procedimientos que retornan conjuntos de resultados:

```csharp
DataSet ds = null;
if (!dm.ExecuteStoredResult("_testdata", parameters, ref ds, "Cli,Emp"))
{
    throw new InvalidOperationException("Error", dm.LastException);
}
```

## Recursos

Ejemplos prácticos disponibles en el [repositorio HighCode de GitHub](https://github.com/flexygo/HighCode/blob/master/Sample_Project/Sample_Project_Processes/CoursesProcesses.vb).
