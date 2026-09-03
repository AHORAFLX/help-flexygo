# Secure Development Guide in Flexygo

## 1. Principle of least privilege (mandatory)

Every object, process or customization **MUST** be created applying the principle of **least privilege**.

* Explicitly define roles with access and their read, write and delete permissions
* Avoid objects accessible by *all users*.
* Do not rely on button visibility as a security control.
* Block direct execution by URL when it should not be allowed.
* Do not expose unnecessary objects in the API.

## 2. Integrating Flexygo into a CI/CD cycle

Flexygo must be integrated into a **CI/CD pipeline** to guarantee ongoing quality and security.

* Version control through NuGet packages.
* Use centralized repositories (Git).
* Define a Hotfix policy.

## 3. Including tests in CI/CD

Every development must include **automated tests**, adapted to Flexygo's low-code nature.

* Develop interface tests to ensure full functionality and access.
* Unit tests to test DLLs or stored procedures.
* Include running Flexygo's native tests to verify the tool's structure.
* Add load tests if you'll be working in environments with many users.

## 4. Protecting passwords and secrets

It is mandatory to ensure that **no password or secret** leaves the system.

**Forbidden:**

* Hardcoding passwords in code, SQL or configuration.
* Sending credentials through logs or error messages.
* Committing passwords to source control.

**Mandatory:**

* Add pipeline checks that:
    * Look for secret patterns in the code.
    * Block the deployment if any are detected.

## 5. Auditing

### 5.1 Enabling auditing

Enable auditing on every object that:

* Handles sensitive data
* Allows critical changes
* Affects key business processes

## 6. Secure DLL development

When developing **custom DLLs**, the following rules must be strictly followed.

### 6.1 Database access

Use exclusively:

* Parameterized SQL
* Stored Procedures

Dynamic SQL built by string concatenation is forbidden.

❌ Incorrect:

```csharp
string sql = "SELECT * FROM Clientes WHERE Id = " + id;
```

✅ Correct:

```csharp
SqlCommand cmd = new SqlCommand("GetClienteById", conn);
cmd.CommandType = CommandType.StoredProcedure;
cmd.Parameters.AddWithValue("@Id", id);
```

## 7. Pre-production review checklist

Before deploying to production, make sure you meet these points:

* [ ] Least privilege is applied to all objects
* [ ] Flexygo is integrated into CI/CD
* [ ] Tests run successfully in the pipeline
* [ ] No passwords or secrets are exposed
* [ ] Auditing is enabled where appropriate
* [ ] DLLs use parameterized SQL or stored procedures
