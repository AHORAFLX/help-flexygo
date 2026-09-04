# CI/CD — Overview

This section summarizes a **generic** CI/CD flow applicable to GitHub Actions, GitLab CI, TeamCity, and Azure Pipelines. The idea is that each platform executes the **same steps** using its specific syntax.

## Objectives

- **CI (Continuous Integration)**: build, test, analyze, and generate artifacts on every change.
- **CD (Continuous Deployment)**: version, publish, and deploy in a repeatable and traceable way.

## Minimum pipeline steps

1. **Trigger**: on `push`, `pull_request`, or `merge`.
2. **Checkout the repo**.
3. **Prepare the environment**:
    - In our case, .NET 9 SDK.
4. **Restore dependencies**:
    - `dotnet restore`
5. **Build the Solution**:
    - `dotnet build ProjectName.sln -c Release`
6. **Publish Frontend**:
    - `dotnet publish ProjectName.Frontend.csproj -c Release --no-build`
7. **Publish Backend**:
    - `dotnet publish ProjectName.Backend.csproj -c Release --no-build`
8. **Build Configuration DB**:
    - `dotnet build ProjectName.Conf.Database.sqlproj -c Release --no-build`
9. **Build Data DB (optional)**:
    - `dotnet build ProjectName.Data.Database.sqlproj -c Release --no-build`
10. **Unit tests**:
    - `dotnet test ProjectName.UnitTest.csproj -c Release --no-build`
11. **Interface tests**:
    - `dotnet test ProjectName.InterfaceTest.csproj -c Release --no-build`
12. **NuGet generation**:
    - With Nuspec (Default):
        - `nuget pack ProjectName.Frontend.nuspec -Properties Configuration=Release`
        - `nuget pack ProjectName.Backend.nuspec -Properties Configuration=Release`
        - `nuget pack ProjectName.Conf.Database.nuspec -Properties Configuration=Release`
        - `nuget pack ProjectName.Data.Database.nuspec -Properties Configuration=Release`
    - With dotnet:
        - `dotnet pack ProjectName.Frontend.csproj -c Release --no-build`
        - `dotnet pack ProjectName.Backend.csproj -c Release --no-build`
        - `dotnet pack ProjectName.Conf.Database.sqlproj -c Release --no-build`
        - `dotnet pack ProjectName.Data.Database.sqlproj -c Release --no-build`
13. **Docker image generation**:
    - `docker build -t Repository/Name:Version -f Dockerfile PublicacionProjectName`
