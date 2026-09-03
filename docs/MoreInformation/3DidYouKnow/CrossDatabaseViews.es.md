# ¿Sabías que puedes hacer vistas con información de distintas bases de datos?

Flexygo tiene la capacidad de trabajar simultáneamente con múltiples bases de datos mediante distintas cadenas de conexión. El sistema utiliza `ConfConnectionString` para acceder a tablas y funciones en la base de datos de configuración, mientras que `DataConnectionString` sirve como el modelo de datos principal.

## Implementación de múltiples conexiones

Para añadir cadenas de conexión adicionales, es necesario:

* Incorporarlas al archivo `web.config`
* Crear una entrada en la tabla del sistema `DbConnectionStrings`

## Consultas cruzadas entre bases de datos

En las vistas de datos de Flexygo, puedes hacer tu SQL Query mezclando varios modelos de datos, simplemente nombrando la cadena de conexión, seguida de un punto, esquema y el nombre de la tabla.

**Sintaxis:**

```sql
LEFT JOIN {~ConfConnectionString~}.dbo.AspNetUsers
```

**Ejemplo práctico:**

```sql
SELECT EMPLOYEE.employee_id, EMPLOYEE.firstname,
       EMPLOYEE.lastname, u.Id as UserId
FROM EMPLOYEE
LEFT JOIN {~ConfConnectionString~}.dbo.AspNetUsers U
  on U.Reference=EMPLOYEE.employee_id
```

Este enfoque permite combinar información de empleados con datos de usuarios de la aplicación en una única vista.
