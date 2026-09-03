# Secure Configuration Guide

## 1. Introduction

The purpose of this document is to establish recommendations and best practices for a **secure Flexygo** installation on an IIS environment, minimizing vulnerabilities and ensuring the protection of associated data and services.

## 2. Recommended architecture

* **Web server (IIS)**: dedicated exclusively to Flexygo and its associated web services.
* **Database server (SQL Server)**: a separate instance from IIS, **not exposed externally**. It should only be accessible from the internal network or via VPN.
* **File server (NAS)**: a repository external to the website where the documents managed by Flexygo will be stored.

## 3. Secure installation on IIS

### 3.1. Installation location

* Install Flexygo **in a separate folder** from IIS's standard structure (`C:\inetpub\wwwroot`).
    * Recommended example: `D:\WebApps\Flexygo`
* Assign the **minimum necessary permissions** to the Application Pool account (Read, Execute).

### 3.2. IIS security configuration

* **Disable directory listing** (Directory Browsing).
* **Remove server headers**: in `web.config` or through the URL Rewrite module:

    ```xml
    <outboundRules>
      <rule name="Remove Server Header">
        <match serverVariable="RESPONSE_Server" pattern=".+" />
        <action type="Rewrite" value="" />
      </rule>
    </outboundRules>
    ```

* Enable **Request Filtering** to block unnecessary extensions (`.cmd`, `.bat`, `.exe`, `.dll`).

## 4. External document management

* Configure Flexygo so that document storage **does not reside within the IIS website**.
* Use a dedicated **NAS or file server**, accessible only from the internal network.
* Implement secure SMB or NFS authentication.
* Control access through specific NTFS permissions or ACLs.

## 5. Database (SQL Server)

* Install on a **separate server**, preferably on an internal subnet with no direct Internet access.
* Disable "sa" authentication and enable **Windows authentication** whenever possible, and create a dedicated user for Flexygo.
* Restrict access ports through an internal firewall.

## 6. HTTPS and SSL/TLS certificates

* Install a **valid SSL certificate** issued by a trusted CA.
* **Force HTTPS** across the whole site (301 redirection from HTTP).
* Configure TLS 1.2 or higher, disabling SSL 2.0, SSL 3.0 and TLS 1.0.

## 7. Additional hardening

* **Regularly update IIS, .NET, Windows and Flexygo**.
* Implement a **web application firewall (WAF)** if available (e.g. ModSecurity or Azure WAF).
* Enable **detailed logging** (IIS Logs + Event Viewer + Flexygo logs).
* Implement **automatic backups** (web, NAS and database).
* Enable **monitoring and alerts** for suspicious access.
* Enable **MFA** either in Flexygo itself or in the delegated authentication system.
