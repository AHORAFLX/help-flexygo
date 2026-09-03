# Did you know Flexygo has an emergency stop mode?

Flexygo offers two modes for managing the application's availability.

## Maintenance mode

Administrators can keep the application operational while update tasks are performed.

## Emergency stop mode

To completely stop an application, you can rename the `app_online.htm` file to `app_offline.htm` in the application's root path. This will:

* **Block connections**: every connection to the system will be stopped
* **Show a browser message**: a page indicating the offline status will be shown

![](../../docs_assets/images/DidYouKnow/EmergencyStopMode/1.png)

## Restoring the service

Once maintenance is finished, the original file name is restored and the service resumes automatically.

!!! warning "Important warning"
    This action will leave the application completely inaccessible.
