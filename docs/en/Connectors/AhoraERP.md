# Ahora ERP Integration

![Ahora ERP](./img/help/AhoraERP/ahora.svg)

**flexygo** facilitates integration with Ahora ERP. To enable this, it puts at a simple click of a button a series of processes that facilitate the development of solutions on the Ahora ERP DB.

## Settings

1.  Configure the **Reference** and **Subreference** fields for user registration (you can find it in Admin Work Area > Security > Users), so they have drop-downs of the **employee** table and the **delegation** table respectively
    
    ![Reference and Subreference configuration](./img/Help/AhoraERP/ReferenceSubreference.png "Image 1. Reference and Subreference configuration")
    
    Image 1. Reference and Subreference configuration
    
2.  Activate special objects for managing **Ahora ERP Images** instead of **flexygo** image management
3.  Activate special objects for managing **Ahora ERP Documents** instead of **flexygo** document management
4.  It enables an **afterLogin** process that creates the Ahora Session and sets the **context-info** before executing any query in the database

## Run process

You can run the standard integration process by clicking on:

Generate Ahora ERP integration with standard afterlogin process

You can change the standard afterlogin process to the Portal Afterlogin process (integrate with a single user, employee 0 and dpto 0) or Anti-fraud law: the User SQL Impersonate afterLogin process (Use the SQL user associated with the employee in the ERP, it is mandatory that the employee have a specified login in the Ahora ERP)

Change standard afterlogin process to Portal Afterlogin process or Anti-fraud law: User SQL impersonate Afterlogin process