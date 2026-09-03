# Security recommendations

Security in Flexygo is based on three fundamental steps.

## Step 1: HTTPS and SSL certificates

The key to most of this is having a secure address for the application (`https://`), by installing a paid certificate for the domain. This allows you to:

* Disable HTTP and use only HTTPS
* Encrypt communications between client and server
* Protect passwords and shared documents

## Step 2: password management

Flexygo implements automatic protection mechanisms, including locking after five failed attempts and configuring complexity parameters.

## Step 3: security audit

For customers with special requirements, a full audit is recommended covering: firewalls, communications, operating system versions and antivirus.

## Security measures built into Flexygo

* Static code analysis
* Security testing (ethical hacking)
* Heuristic blocking using white/grey lists
* Sentinel Agent for forensic auditing
* Continuous deployment
* Audit log of user actions

!!! warning "Important"
    You should never guarantee to your customer that your system is 100% secure, since it isn't — not with Flexygo, nor with anything else.

## See also

* [Secure Configuration Guide](../4Security/SecureConfigurationGuide.md)
* [Minimum requirements](MinimumRequirements.md)
