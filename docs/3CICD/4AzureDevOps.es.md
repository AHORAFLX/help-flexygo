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
    - script: dotnet publish src/Backend/Backend.csproj -c Release -o out
      displayName: Publish
    - task: PublishBuildArtifacts@1
      inputs:
        pathToPublish: 'out'
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
            artifact: backend-drop
          # Requiere que el agente esté registrado en un Deployment Group con el servidor IIS destino
          - task: IISWebAppDeploymentOnMachineGroup@0
            displayName: Deploy to IIS
            inputs:
              WebSiteName: 'FlexygoBackend'
              Package: '$(Pipeline.Workspace)/backend-drop'
              TakeAppOfflineFlag: true
              XmlVariableSubstitution: true
```

---

## Variables de pipeline recomendadas

Define estas variables en **Pipelines → {tu pipeline} → Edit → Variables**:

| Variable | Descripción | Scope |
|---|---|---|
| `ASPNETCORE_ENVIRONMENT` | Entorno de ejecución (`Production`, `Staging`) | Deployment |
| `ConnectionStrings__Default` | Cadena de conexión a la base de datos | Deployment |
| `WebSiteName` | Nombre del sitio IIS destino | Deployment |

> Marca las variables sensibles como **Secret** para que se enmascaren en los logs de pipeline.

---

## Alternativa: Despliegue en Azure Web App

Si despliegas en Azure App Service en lugar de IIS, sustituye el task `IISWebAppDeploymentOnMachineGroup@0` por:

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
        dockerfile: 'src/Backend/Dockerfile'
        tags: |
          $(Build.BuildId)
          latest
```
