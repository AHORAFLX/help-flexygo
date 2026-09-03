# Servidores Vinculados

## Múltiples bases de datos en una consulta

Flexygo incluye la posibilidad de añadir vistas de diferentes bases de datos en diferentes motores SQL en una única sentencia SQL sin tener que preocuparse por el nombre de la base de datos.

Por ejemplo, esta consulta:

```sql
SELECT EmployeeId, [Name], Surname, isnull(DocsQ,0) as DocsQuantity
FROM employees
LEFT JOIN (
      SELECT ObjectName, ObjectId, Count(*) as DocsQ 
      FROM MyServer.flexygo_ic.dbo.documents_objects D 
      GROUP BY objectname, objectid
      ) Docs
ON Employees.EmployeeId = Docs.ObjectId and Docs.ObjectName = 'Employee'
```

puede ser reemplazada por esta otra usando el prefijo de cadena de conexión **{ ~ConfConnectionString~ }**. (sin espacios en blanco):

```sql
SELECT EmployeeId, [Name], Surname, isnull(DocsQ,0) as DocsQuantity
FROM employees
LEFT JOIN(
      SELECT ObjectName, ObjectId, Count(*) as DocsQ 
      FROM   { ~ConfConnectionString~ }.dbo.documents_objects D 
      GROUP BY objectname, objectid
      ) Docs
ON Employees.EmployeeId = Docs.ObjectId and Docs.ObjectName = 'Employee'
```

## Servidor vinculado

Si las bases de datos están alojadas en diferentes instancias SQL, puedes establecer un nombre de servidor vinculado relacionado con un servidor SQL para permitir que flexygo incluya el prefijo del servidor de la base de datos. <flx-navbutton class="link" type="openEditTable" tablename="DBConnectionStrings_LinkedServers" objectname="sysAbhSigns_Objects_Config" tabledescrip="Linked Servers">Añadir servidor vinculado</flx-navbutton>.