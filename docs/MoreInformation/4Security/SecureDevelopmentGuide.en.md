# Secure Development Guide in Flexygo

## 1. Principle of least privilege (mandatory)

Every object, process or customization must apply the principle of least privilege:

* Explicitly define roles with read, write and delete permissions
* Avoid objects accessible by every user
* Do not rely on button visibility as a security control
* Block direct execution by URL when it should not be allowed
* Do not expose unnecessary objects in the API

## 2. Integrating Flexygo in a CI/CD cycle

Flexygo must be integrated into a CI/CD pipeline to guarantee quality and security:

* Version control through NuGet packages
* Use centralized repositories (Git)
* Define a Hotfix policy

## 3. Including tests in the CI/CD

Every development must include automated tests:

* Interface tests to guarantee full functionality and access
* Unit tests to test DLLs or stored procedures
* Execution of Flexygo's native tests to validate structure
* Load tests when working in environments with many users

## 4. Protecting passwords and secrets

**Forbidden:**

* Hardcoding passwords in code, SQL or configuration
* Sending credentials through logs or errors
* Uploading passwords to source control

**Mandatory:**

* Add pipeline controls that look for secret patterns
* Block deployment if credentials are detected
{: .flx-warning-card }

## 5. Auditing

### 5.1 Enabling auditing

Enable auditing on objects that:

* Handle sensitive data
* Allow critical changes
* Affect key business processes

## 6. Secure DLL development

### 6.1 Database access

**Use exclusively:**

* Parameterized SQL
* Stored procedures

**Forbidden:** dynamic SQL built by string concatenation.

**Incorrect example:**

```csharp
string sql = "SELECT * FROM Clientes WHERE Id = " + id;
```

**Correct example:**

```csharp
SqlCommand cmd = new SqlCommand("GetClienteById", conn);
cmd.CommandType = CommandType.StoredProcedure;
cmd.Parameters.AddWithValue("@Id", id);
```

## 7. Pre-production review checklist

* ☐ Least privilege is applied to every object
* ☐ Flexygo is integrated into CI/CD
* ☐ Tests run successfully in the pipeline
* ☐ No passwords or secrets are exposed
* ☐ Auditing is enabled where appropriate
* ☐ DLLs use parameterized SQL or stored procedures
