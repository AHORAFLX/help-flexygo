# CI/CD — Visión general

Este apartado resume un flujo **genérico** de CI/CD aplicable a GitHub Actions, GitLab CI, TeamCity y Azure Pipelines. La idea es que cada plataforma ejecute los **mismos pasos** con su sintaxis específica.

## Objetivos

- **CI (Integración continua)**: compilar, testear, analizar y generar artefactos en cada cambio.
- **CD (Despliegue continuo)**: versionar, publicar y desplegar de forma repetible y trazable.

## Pasos mínimos del pipeline

1. **Trigger**: al hacer `push`, `pull_request` o `merge`.
2. **Checkout del repo**.
3. **Preparar entorno**:
    - En nuestro caso SDK .NET 9.
4. **Restore de dependencias**:
    - `dotnet restore`
5. **Compilar Solución**:
    - `dotnet build ProjectName.sln -c Release`
6. **Publicar Frontend**:
    - `dotnet publish ProjectName.Frontend.csproj -c Release --no-build`
7. **Publicar Backend**:
    - `dotnet publish ProjectName.Backend.csproj -c Release --no-build`
8. **Compilar BD Configuración**:
    - `dotnet build ProjectName.Conf.Database.sqlproj -c Release --no-build`
9. **Compilar  BD Datos (opcional)**:
    - `dotnet build ProjectName.Data.Database.sqlproj -c Release --no-build`
10. **Tests unitarios**:
    - `dotnet test ProjectName.UnitTest.csproj -c Release --no-build`
11. **Tests de interfaz**:
    - `dotnet test ProjectName.InterfaceTest.csproj -c Release --no-build`
12. **Generación de NuGets**:
    - Con Nuspec (Por defecto):
        - `nuget pack ProjectName.Frontend.nuspec -Properties Configuration=Release`
        - `nuget pack ProjectName.Backend.nuspec -Properties Configuration=Release`
        - `nuget pack ProjectName.Conf.Database.nuspec -Properties Configuration=Release`
        - `nuget pack ProjectName.Data.Database.nuspec -Properties Configuration=Release`
    - Con dotnet:
        - `dotnet pack ProjectName.Frontend.csproj -c Release --no-build`
        - `dotnet pack ProjectName.Backend.csproj -c Release --no-build`
        - `dotnet pack ProjectName.Conf.Database.sqlproj -c Release --no-build`
        - `dotnet pack ProjectName.Data.Database.sqlproj -c Release --no-build`
13. **Generación de imágenes docker**:
    - `docker build -t Repositorio/Nombre:Version -f Dockerfile PublicacionProjectName`
