---
search:
  exclude: true
---

# Azure DevOps (Azure Pipelines)

Azure Pipelines supports two modes:  
- **YAML** in the repository (`azure-pipelines.yml`) — recommended.  
- **Classic (UI)** — legacy.

---

## Complete example (`azure-pipelines.yml`)

```yaml
trigger:
  branches:
    include: [ main ]

pool:
  vmImage: 'ubuntu-latest'

variables:
  productName: 'MiProducto'   # prefix of the solution projects

stages:
- stage: Build
  displayName: Build & Test
  jobs:
  - job: Build_Test
    steps:
    - checkout: self
    - task: UseDotNet@2
      inputs:
        packageType: sdk
        version: '9.0.x'
    - script: dotnet restore
      displayName: Restore
    - script: dotnet build --configuration Release --no-restore
      displayName: Build
    - script: dotnet test --configuration Release --no-build
      displayName: Test
    - script: dotnet publish $(productName).Frontend/$(productName).Frontend.csproj -c Release -o out/frontend
      displayName: Publish Frontend
    - script: dotnet publish $(productName).Backend/$(productName).Backend.csproj -c Release -o out/backend
      displayName: Publish Backend
    - task: PublishBuildArtifacts@1
      inputs:
        pathToPublish: 'out/frontend'
        artifactName: 'frontend-drop'
    - task: PublishBuildArtifacts@1
      inputs:
        pathToPublish: 'out/backend'
        artifactName: 'backend-drop'
- stage: Deploy
  dependsOn: Build
  jobs:
  - deployment: to_dev
    environment: 'dev'
    strategy:
      runOnce:
        deploy:
          steps:
          - download: current
            artifact: frontend-drop
          - download: current
            artifact: backend-drop
          # Requires the agent to be registered in a Deployment Group with the target IIS server
          - task: IISWebAppDeploymentOnMachineGroup@0
            displayName: Deploy Backend to IIS
            inputs:
              WebSiteName: 'FlexygoBackend'
              Package: '$(Pipeline.Workspace)/backend-drop'
              TakeAppOfflineFlag: true
              JSONFiles: '**/conf/appsettings.json'
          - task: IISWebAppDeploymentOnMachineGroup@0
            displayName: Deploy Frontend to IIS
            inputs:
              WebSiteName: 'FlexygoFrontend'
              Package: '$(Pipeline.Workspace)/frontend-drop'
              TakeAppOfflineFlag: true
              JSONFiles: '**/conf/appsettings.json'
```

---

## Recommended pipeline variables

Define these variables in **Pipelines → {your pipeline} → Edit → Variables**:

| Variable | Description | Scope |
|---|---|---|
| `ASPNETCORE_ENVIRONMENT` | Execution environment (`Production`, `Staging`) | Deployment |
| `ConnectionStrings.ConfConnectionString` | Connection string of the configuration database (Backend) | Deployment |
| `ConnectionStrings.DataConnectionString` | Connection string of the data database (Backend) | Deployment |
| `BackendEndpoint` | Backend URL used by the Frontend, ending in `/api/backend/` | Deployment |
| `WebSiteName` | Target IIS site name | Deployment |

> Mark sensitive variables as **Secret** so they are masked in the pipeline logs.

The deployment substitutes these variables in each application's `conf/appsettings.json` (`JSONFiles`); JSON levels are separated with a dot. In IIS the application encrypts the connection strings on its next startup (see [Encrypted appsettings](../1Deployment/2ConfigWizard/EncryptedSettings.md)). As environment variables, for example in the *App settings* of an Azure Web App, they are written with a double underscore: `ConnectionStrings__ConfConnectionString`, `ConnectionStrings__DataConnectionString`.

---

## Alternative: Deploying to Azure Web App

If you deploy to Azure App Service instead of IIS, replace each `IISWebAppDeploymentOnMachineGroup@0` task with one like this (the Frontend's with `frontend-drop` and its own app):

```yaml
          - task: AzureWebApp@1
            displayName: Deploy to Azure Web App
            inputs:
              azureSubscription: 'your-service-connection'
              appName: 'your-app-name'
              package: '$(Pipeline.Workspace)/backend-drop'
```

---

## Environments and approvals

Use Azure DevOps **Environments** to add manual approval controls before deploying to production:

1. Go to **Pipelines → Environments** and create a `production` environment
2. Configure **Approvals and checks** on the environment (e.g., manual approval from a responsible person)
3. Change `environment: 'dev'` to `environment: 'production'` in the YAML so the pipeline waits for approval

---

## Deploying to Docker

If your target is a Docker host, add this alternative job to the Deploy stage:

```yaml
  - job: Deploy_Docker
    steps:
    - task: Docker@2
      displayName: Build and push image
      inputs:
        command: buildAndPush
        repository: 'your-registry/flexygo-backend'
        dockerfile: '$(productName).Backend/Dockerfile'
        tags: |
          $(Build.BuildId)
          latest
```
