# Linked Servers

## Multiple databases in one query

**flexygo** includes possibility to add views from different databases at different SQL Engines on unique SQL Sentence without having to worry about the database name.

For example, this query:

SELECT EmployeeId, \[Name\], Surname, isnull(DocsQ,0) as DocsQuantity FROM employees LEFT JOIN ( SELECT ObjectName, ObjectId, Count(\*) as DocsQ FROM MyServer.flexygo\_ic.dbo.documents\_objects D GROUP BY objectname, objectid ) Docs ON Employees.EmployeeId = Docs.ObjectId and Docs.ObjectName = 'Employee'

can be replaced by this other using connection string prefix { ~ConfConnectionString~ }. (without blank spaces):

SELECT EmployeeId, \[Name\], Surname, isnull(DocsQ,0) as DocsQuantity FROM employees LEFT JOIN( SELECT ObjectName, ObjectId, Count(\*) as DocsQ FROM { ~ConfConnectionString~ }.dbo.documents\_objects D GROUP BY objectname, objectid ) Docs ON Employees.EmployeeId = Docs.ObjectId and Docs.ObjectName = 'Employee'

## Linked server

If databases are hosted in different SQL instances you can set linked server name related to one SQL server for allowing **flexygo** include database server prefix. Add linked server