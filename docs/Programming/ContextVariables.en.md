# Context Variables

Context variables are the variables which can have different values in different environments. These variables are used to make the code production ready and can be used in solutions as tokens in any Template or SQL Sentence.

Whatch the following video about context variables.

## Default Tokens

All tokens must be referenced with curly brackets **{{** / **}}**. **flexygo** includes the following variables by default:

*   **{{currentReference}}**: Wildcard used for linking other system elements to the current user
*   **{{currentSubreference}}**: 2º Wildcard used for linking other system elements to the current user
*   **{{currentRole}}**: Current users role name
*   **{{currentRoleId}}**: Current users role Id
*   **{{currentUserLogin}}**: Current users login
*   **{{currentUserId}}**: Current users Id
*   **{{currentUserFullName}}**: Current users full name
*   **{{currentUserCultureId}}**: Current users culture Id
*   **{{currentUserLang}}**: Current users Language. First two digits of culture Id
*   **{{currentUserEmail}}**: Current users Email.
*   **{{currentDate}}**: Current Date.
*   **{{currentTime}}**: Current Time with minutes precision.
*   **{{currentTimeSec}}**: Current Time with seconds precision.
*   **{{currentDateTime}}**: Current Date and Time with minutes precision.
*   **{{currentDateTimeSec}}**: Current Date and Time with seconds precision.

## Generate Tokens

**flexygo** allows you to generate your own Tokens by using SQL sentences. We shall indicate the Connection string we want to use and wich SQL Sentence using any of the previously generated tokens.

If I have an Employee Table in my data model with an Email and I want to obtain EmployeeID from employee table. We can create a new token called **{{EmployeeId}}**
```sql
SELECT EmployeeId FROM Employees WHERE Email = '{{currentUserEmail}}'
```

Now our new {{EmployeeId}} token can be used as a standard variable anywhere in our solution.

## Special Tokens

There are some special tokens to access object forms or menus that can be used in templates or emails

#### Templates

*   **{{objectmenu}}**: Used to display an object process menu button
*   **{{viewbutton}}**: Used to display an object view button
*   **{{editbutton}}**: Used to display an object edit button
*   **{{newbutton}}**: Used to display an object new button
*   **{{deletebutton}}**: Used to display an object delete button

#### Mails o external links

*   **{{externalObjectView}}**: Complete path to object view form
*   **{{externalObjectEdit}}**: Complete path to object view form