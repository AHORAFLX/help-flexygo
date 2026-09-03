# Secure Configuration Guide: Flexygo

## Executive summary

This document presents recommendations for installing Flexygo securely on IIS environments, minimizing vulnerabilities and protecting associated data and services.

## 1. Introduction

The goal is to establish good practices for a secure implementation of Flexygo on IIS infrastructure.

## 2. Recommended architecture

The suggested structure includes three separate components:

* **Web server (IIS)**: dedicated exclusively to Flexygo and its associated web services
* **Database server (SQL Server)**: an instance independent from IIS, with no external exposure, accessible only from the internal network or VPN
* **File server (NAS)**: an external repository for documents managed by the platform

## 3. Secure installation on IIS

### 3.1 Installation location

* Install in an independent folder outside the standard structure (example: `D:\WebApps\Flexygo`)
* Assign the minimum permissions required to the Application Pool account

### 3.2 IIS security configuration

Key measures:

* Disable Directory Browsing
* Remove server headers through URL Rewrite
* Enable Request Filtering to block unnecessary extensions (.cmd, .bat, .exe, .dll)

## 4. External document management

* Storage must not reside inside the IIS website
* Use a NAS or dedicated server accessible only from the internal network
* Implement secure SMB or NFS authentication
* Control access through NTFS permissions or ACLs

## 5. Database (SQL Server)

* Install on an independent server on an internal subnet with no direct Internet access
* Disable "sa" authentication and enable Windows authentication
* Create a dedicated user for Flexygo
* Restrict access ports through an internal firewall

## 6. HTTPS and SSL/TLS certificates

* Install a valid SSL certificate from a trusted CA
* Force HTTPS across the whole site through 301 redirection
* Configure TLS 1.2 or higher, disabling older versions (SSL 2.0, SSL 3.0, TLS 1.0)

## 7. Additional hardening

Hardening practices:

* Regularly update IIS, .NET, Windows and Flexygo
* Implement a web application firewall (WAF)
* Enable detailed logging (IIS Logs, Event Viewer, Flexygo logs)
* Implement automated backups
* Enable monitoring and alerts for suspicious access
* Enable MFA in Flexygo or in the delegated authentication system
