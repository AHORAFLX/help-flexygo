---
search:
  exclude: true
---

# Azure DevOps (Azure Pipelines)

Azure Pipelines soporta dos modos:  
- **YAML** en el repositorio (`azure-pipelines.yml`) — recomendado.  
- **Clásico (UI)** — legado.

---

## Ejemplo completo (`azure-pipelines.yml`)

```yaml
trigger:
  branches:
    include: [ main ]

pool:
  vmImage: 'ubuntu-latest'

variables:
  productName: 'MiProducto'   # prefijo de los proyectos de la solución

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
          # Requiere que el agente esté registrado en un Deployment Group con el servidor IIS destino
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

## Variables de pipeline recomendadas

Define estas variables en **Pipelines → {tu pipeline} → Edit → Variables**:

| Variable | Descripción | Scope |
|---|---|---|
| `ASPNETCORE_ENVIRONMENT` | Entorno de ejecución (`Production`, `Staging`) | Deployment |
| `ConnectionStrings.ConfConnectionString` | Cadena de conexión a la base de datos de configuración (Backend) | Deployment |
| `ConnectionStrings.DataConnectionString` | Cadena de conexión a la base de datos de datos (Backend) | Deployment |
| `BackendEndpoint` | URL del Backend que usa el Frontend, terminada en `/api/backend/` | Deployment |
| `WebSiteName` | Nombre del sitio IIS destino | Deployment |

> Marca las variables sensibles como **Secret** para que se enmascaren en los logs de pipeline.

El despliegue sustituye estas variables en el `conf/appsettings.json` de cada aplicación (`JSONFiles`); los niveles del JSON se separan con un punto. En IIS la aplicación cifra las cadenas de conexión en el siguiente arranque (ver [Cifrado de los appsettings](../1Deployment/2ConfigWizard/EncryptedSettings.md)). Como variables de entorno, por ejemplo en los *App settings* de una Azure Web App, se escriben con doble guion bajo: `ConnectionStrings__ConfConnectionString`, `ConnectionStrings__DataConnectionString`.

---

## Alternativa: Despliegue en Azure Web App

Si despliegas en Azure App Service en lugar de IIS, sustituye cada task `IISWebAppDeploymentOnMachineGroup@0` por uno como este (el del Frontend, con `frontend-drop` y su propia app):

```yaml
          - task: AzureWebApp@1
            displayName: Deploy to Azure Web App
            inputs:
              azureSubscription: 'tu-service-connection'
              appName: 'nombre-de-tu-app'
              package: '$(Pipeline.Workspace)/backend-drop'
```

---

## Environments y aprobaciones

Usa **Environments** de Azure DevOps para añadir controles de aprobación manual antes del despliegue a producción:

1. Ve a **Pipelines → Environments** y crea un environment `production`
2. Configura **Approvals and checks** en el environment (p. ej. aprobación manual de un responsable)
3. Cambia `environment: 'dev'` por `environment: 'production'` en el YAML para que el pipeline espere la aprobación

---

## Despliegue en Docker

Si tu target es un host Docker, añade este job alternativo al stage Deploy:

```yaml
  - job: Deploy_Docker
    steps:
    - task: Docker@2
      displayName: Build and push image
      inputs:
        command: buildAndPush
        repository: 'tu-registry/flexygo-backend'
        dockerfile: '$(productName).Backend/Dockerfile'
        tags: |
          $(Build.BuildId)
          latest
```
