# Did you know two Flexygo applications can share a single document management system?

It is very common for an enterprise Flexygo and a customer portal to share document management. When both applications are linked to the same ERP, there is no issue. However, when both are Flexygo instances, one can be used as the main repository while the second accesses the shared documents directly.

## Configuration steps

**Step 1 - Application structure**

* A main application with its own database and configuration
* A second application with its own database and configuration, plus a third connection pointing to the main application's configuration database

**Step 2 - Common path**

Configure a setting that specifies the common path where shared documents will be stored.

![](../../docs_assets/images/DidYouKnow/SharedDocumentManagement/1.jpg)

**Steps 3-5 - Updating connection strings**

Run SQL scripts to change the connections of the following objects and views in the second application:

* Document
* Document_Object
* Document_Version
* Documents
* sysDocumentsCategories

![](../../docs_assets/images/DidYouKnow/SharedDocumentManagement/2.jpg)

These changes point the document objects to the main application's configuration database.
