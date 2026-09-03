# Version 6.3

## Main new features

* **Multi-Factor Authentication (MFA)**: implemented MFA via SMS or email to strengthen data security

![](../../docs_assets/images/Versions/Version6_03/1.png)

* **New versions page**: migrated to NuGet V3 with detailed information about Flexygo and associated products

![](../../docs_assets/images/Versions/Version6_03/2.png)

* **"Scheduler" module**: new tool to create and view schedules for multiple objects in a configurable way

![](../../docs_assets/images/Versions/Version6_03/3.png)

* **Confirmed secure deletion**: option to configure data deletion with text confirmation

![](../../docs_assets/images/Versions/Version6_03/4.png)

* **Performance improvements**:
    * Faster loading of the module manager
    * Combos/dbcombos now load values only when viewing objects
    * Assigning the page description as the title through `{{PageDescrip}}`
* **Extended functionality**: callback in `flexygo.utils.execprocess` when parameter windows are closed
* **Improved styles**: new "Test Methods" documentation in the Web API with dark mode

## Main fixes

* Creating MailChimp contacts from campaigns
* Objects in Oracle with Identity and boolean fields
* Improved random color generation
* Multiple upload in ERP document management
* Minimum and maximum validators
* Friendly URLs with Unique Identifier
* Behavior in virtual directories
* Combos with values containing quotes
* Default parameters in reports
* iPad compatibility with Chrome
