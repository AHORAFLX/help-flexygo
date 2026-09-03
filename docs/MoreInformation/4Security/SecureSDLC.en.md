# Secure Development Life Cycle (SDLC)

## 1. Introduction

The Flexygo project implements a formally structured Secure Development Life Cycle, integrating security practices, quality control and traceability at every phase of the process. The continuous integration (CI/CD) system documents and executes more than 30 automated steps that ensure the integrity, availability and security of the software.

## 2. General flow of the applied SDLC

The process is structured in sequential stages, with each step's execution conditioned by the success of the previous ones:

1. Environment preparation and cleanup
2. Controlled code compilation
3. Secure dependency management
4. Validation and unit testing
5. Quality and coverage analysis
6. Artifact generation and publication
7. Automated technical documentation
8. Version backup and retention
9. Secure configuration closure

## 3. Security controls and implemented procedures

### 3.1 Environment preparation (steps 1–2)

* **Connection string cleanup**: a PowerShell script removes or masks credentials in `web.config` before compiling
* **Source code backup**: automated backup prior to compilation

### 3.2 Compilation and dependency management (steps 3–6)

* **NuGet package restore**: from controlled sources, with verified and locked versions
* **Solution build**: through MSBuild with full traceability
* **Configuration publication**: through SQLPACKAGE with conditioned validation

### 3.3 Testing, validation and technical audit (steps 11–14, 23–25, 30)

* **Unit testing**: Visual Studio Test (VSTest) for the main modules
* **Code coverage**: JetBrains dotCover for validation metrics
* **Static analysis**: SonarQube audits TypeScript, T-SQL and VB modules looking for vulnerabilities, bad practices or insecure code

![](../../docs_assets/images/SecureSDLC/1.png)
![](../../docs_assets/images/SecureSDLC/2.png)

### 3.4 Artifact generation and documentation (steps 16–22)

* **Automated changelog**: through PowerShell for traceability between versions
* **Secure packaging**: ZIP APP, ZIP DOCU, NuGet package with versioning and digital signature
* **Automated technical documentation**:
    * JavaScript: YUIDoc
    * VB: GhostDoc
    * SQL: TeamCity SQLDoc

### 3.5 Backup and configuration control (steps 26 and 12–15)

* Post-publication backup copy
* Configuration file management to avoid credential exposure

### 3.6 Dynamic security scanning and validation (SecDevOps)

The SecDevOps pipeline includes:

1. Downloading the installer
2. Installing Flexygo in an isolated environment
3. Running automated security tests (Python script `flexygoscan.py`) covering authentication validation, SQL injection, XSS and session manipulation
4. Uninstalling Flexygo
5. Removing the test database

![](../../docs_assets/images/SecureSDLC/3.png)

### 3.7 Artifact publication and distribution control

* Publication to the corporate repository (nuget.ahorabh.com) and the official one (nuget.org)
* Marking artifacts as "pinned" to prevent accidental deletion

## 4. Audits and traceability

Every stage is logged in the CI system, allowing execution times, test results, logs, versions and configuration changes to be audited. The pipeline blocks progress to the next phase if a step does not run successfully.

## 5. Conclusions

The model incorporates security, control and traceability mechanisms aligned with international standards such as OWASP SAMM, ISO/IEC 27034 and NIST SP 800-218 (SSDF), providing guarantees of integrity, traceability and security for the software produced.
