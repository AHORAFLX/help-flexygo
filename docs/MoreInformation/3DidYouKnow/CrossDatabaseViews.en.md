# Did you know you can build views with information from different databases?

Flexygo can work with multiple databases at the same time through different connection strings. The system uses `ConfConnectionString` to access tables and functions in the configuration database, while `DataConnectionString` serves as the main data model.

## Setting up multiple connections

To add additional connection strings, you need to:

* Add them to the `web.config` file
* Create an entry in the `DbConnectionStrings` system table

## Cross-database queries

In Flexygo's data views, you can write your SQL query mixing several data models, simply by naming the connection string, followed by a dot, the schema and the table name.

**Syntax:**

```sql
LEFT JOIN {~ConfConnectionString~}.dbo.AspNetUsers
```

**Practical example:**

```sql
SELECT EMPLOYEE.employee_id, EMPLOYEE.firstname,
       EMPLOYEE.lastname, u.Id as UserId
FROM EMPLOYEE
LEFT JOIN {~ConfConnectionString~}.dbo.AspNetUsers U
  on U.Reference=EMPLOYEE.employee_id
```

This approach lets you combine employee information with the application's user data in a single view.
