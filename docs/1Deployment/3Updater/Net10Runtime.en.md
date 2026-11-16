# Install .NET 10 before updating to 10.1 <span class="fh-version-tag" title="Available since version 10.1">10.1+</span>

From version **10.1** on, Flexygo runs on **.NET 10**. Version 10.0 ran on .NET 9. Before you update an application from 10.0 to 10.1 or later, install **ASP.NET Core 10** on every server that runs its frontend or backend. Without it the new version does not start: IIS answers with **HTTP Error 500.31** (*Failed to load ASP.NET Core runtime*).

## What the updater does

The **Version management** wizard checks it before it starts, among its requirements (**.NET runtime**):

- If the chosen version needs .NET 10 and the server does not have it, it shows an **error** and does not let you continue.
- If it cannot tell what the chosen version needs, it shows a **warning**: you can continue, since the version may not need it (for example, a 10.0 fix).
- When the update starts it checks again: if it is missing, the update stops **before it changes anything**, and the application stays on its current version.

The updater does not install .NET itself: installing it restarts IIS and affects every application on the server, so it is up to whoever administers the server.

## Steps on IIS

1. **Choose the moment.** Installing restarts IIS, and every application on the server stops answering for a few seconds. The application stays on its current version, on .NET 9: it does not have to be stopped.
2. **Download the Hosting Bundle.** On [dotnet.microsoft.com/download/dotnet/10.0](https://dotnet.microsoft.com/download/dotnet/10.0), in the **ASP.NET Core Runtime 10.0** column, under **Windows**, choose **Hosting Bundle**. If the server has no internet access, download it on another machine and copy it.
3. **Install it as an administrator** on every server with the frontend or the backend. If they are on different servers, on both.
4. **Restart IIS** if the installer has not. In an administrator console:

    ```bat
    net stop was /y
    net start w3svc
    ```

5. **Check that it is installed.** In a console:

    ```bat
    dotnet --list-runtimes
    ```

    A line `Microsoft.AspNetCore.App 10.0.x` must appear.

6. **Go back to Version management** and start the update. The **.NET runtime** requirement now passes.

!!! warning "Do not uninstall .NET 9 yet"
    The current version needs it until you update, and so does going back to a 10.0 version from the wizard. Once the application is on 10.1 and you are not going back, you can remove it if no other application on the server uses it.

## Standalone service (Kestrel)

Install the **ASP.NET Core Runtime 10.0** (on Windows the Hosting Bundle also works) and restart each application's service. On Linux, install your distribution's `aspnetcore-runtime-10.0` package: see [Install .NET on Linux](https://learn.microsoft.com/dotnet/core/install/linux). See also [Deploying with Kestrel](../5Kestrel/index.md).

## Docker

There is nothing to install: the 10.1 images already carry .NET 10. Update as usual: see the [Container update guide](DockerUpdate.md).

## If you already updated and see error 500.31

Install the Hosting Bundle as in the steps above and restart IIS. There is no need to reinstall or to repeat the update.
