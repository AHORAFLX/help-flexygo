# Did you know you can create a test environment without worrying about the license, thanks to "Set Single User Mode"?

The **Set Single User Mode** process lets you set up a test environment with no license limitations.

## Main purpose

This process is especially useful when moving the production database to a test environment, where the license would normally not work due to environment and existing-user differences.

## Automatic behavior

The process automatically performs the following actions:

* Generates a new evaluation license
* Blocks every user except guest, admin and one selected user
* Allows development with admin and testing with the chosen user according to their profile/role

## Benefits

This approach saves every step described above, leaving only the new license to be activated.

!!! warning "Important warning"
    We recommend verifying that you are indeed working in a test environment that is distinct from production in terms of server, database, configuration and project name.

## Accessing the process

Only administrators can access it from **Admin Area → Object Collection**.

![](../../docs_assets/images/DidYouKnow/TestEnvironmentSingleUserMode/1.png)

![](../../docs_assets/images/DidYouKnow/TestEnvironmentSingleUserMode/2.png)

![](../../docs_assets/images/DidYouKnow/TestEnvironmentSingleUserMode/3.png)

During the process you select a user who, along with admin and guest, will remain active.
