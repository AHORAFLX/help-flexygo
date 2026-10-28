# Installer: Uninstall Mode

The uninstaller removes a Flexygo application deployed in IIS. It is accessed from the **Uninstall** button in the bottom-left corner of the installer's main screen.

<figure markdown="span">
  ![Installer main screen with the Uninstall option](../../docs_assets/images/CoreDeployment/installer/Desinstalar/Desinstalar.png)
  <figcaption>Access to Uninstall mode from the installer's main screen</figcaption>
</figure>

---

## Available applications

The uninstaller automatically detects all Flexygo applications installed in IIS and shows them in a list. Each application has its own **Uninstall** button.

<figure markdown="span">
  ![List of installed applications](../../docs_assets/images/CoreDeployment/installer/Desinstalar/DesinstalarLista.png)
  <figcaption>List of Flexygo applications found in IIS</figcaption>
</figure>

---

## Confirmation

When you click **Uninstall** on an application, a confirmation dialog is shown detailing what will be removed:

<figure markdown="span">
  ![Uninstall confirmation dialog](../../docs_assets/images/CoreDeployment/installer/Desinstalar/DesinstalarConfirmar.png)
  <figcaption>The installer states exactly what will be removed before proceeding</figcaption>
</figure>

**This action will remove:**

- Applications: Frontend and Backend
- The IIS sites/applications
- The Application Pools
- The configuration database (`ConfConnectionString`)
- The physical files on disk

!!! warning "Data databases"
    Data databases (`DataConnectionString` and others) are **NOT removed automatically**. If you want to delete them, do so manually from SQL Server once the uninstallation is complete.

!!! danger "This action cannot be undone"
    Back up the data database before continuing if you need to keep the application's records.

---

## Uninstallation completed

When finished, the installer shows a summary of the removed items.

<figure markdown="span">
  ![Uninstallation completed](../../docs_assets/images/CoreDeployment/installer/Desinstalar/DesinstalarCompleto.png)
  <figcaption>Confirmation of completed uninstallation with a summary of removed items</figcaption>
</figure>

!!! tip "Reinstalling after uninstalling"
    To reinstall Flexygo on the same server, run the installer again in [Deployment](Deployment.md) mode.
