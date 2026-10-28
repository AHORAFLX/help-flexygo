# Did you know Flexygo has an emergency stop mode?

Flexygo offers two modes for managing the application's availability.

## Maintenance mode

Administrators can keep the application operational while update tasks are performed. See [Did you know there is a mode for performing maintenance work on the application?](MaintenanceMode.md).

## Emergency stop mode

To completely stop an application published in IIS, create an `app_offline.htm` file in the Frontend's site folder (and in the Backend's, if it's in a separate site or application). Its content is the page users will see. This will:

* **Block connections**: every connection to the system will be stopped
* **Show a browser message**: a page indicating the offline status will be shown

![](../../docs_assets/images/DidYouKnow/EmergencyStopMode/1.png)

## Restoring the service

Once maintenance is finished, delete or rename the `app_offline.htm` file and the service resumes automatically.

!!! note "Note"
    The `app_offline.htm` file is a feature of the ASP.NET Core Module for IIS. It doesn't work in Docker or when the application runs directly on Kestrel: in those cases, stop the container or the service.

!!! warning "Important warning"
    This action will leave the application completely inaccessible.
