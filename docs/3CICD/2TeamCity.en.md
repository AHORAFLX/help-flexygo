# TeamCity

In TeamCity, a pipeline is made up of **Build Steps**. The image below shows a basic build for Flexygo .NET products.

## Build Steps

![Basic product build steps](../docs_assets/images/CoreCICD/ci-cd/teamcity.png)

Each step is described below with the equivalent commands and the recommended options.

!!! note "Project names"
    The examples use `MiProducto` as the product name. Replace it with the prefix of your solution's projects, which are those of the [product template](../2ProductDevelopment/2Template.md): `MiProducto.Frontend`, `MiProducto.Backend`, `MiProducto.Conf.Database`, `MiProducto.Data.Database`, `MiProducto.UnitTest` and `MiProducto.InterfaceTest`. The steps are those of the [overview](1Overview.md); the GitLab pipeline shipped with the template (`.gitlab-ci.yml`) is the complete reference.

### Step 1: Restore

**Runner type:** Command Line

The DevExpress packages come from its private feed, which is added with the key in the `env.DEVEXPRESS_API` variable:

```bash
dotnet nuget add source "https://nuget.devexpress.com/%env.DEVEXPRESS_API%/api/v3/index.json" -n DevExpress --configfile nuget.config
dotnet restore MiProducto.sln
```

### Step 2: Publish Frontend and Backend

**Runner type:** Command Line

```bash
dotnet publish MiProducto.Frontend/MiProducto.Frontend.csproj -c Release -o publish/MiProducto/MiProducto.Frontend /p:Version=%build.number%
dotnet publish MiProducto.Backend/MiProducto.Backend.csproj -c Release -o publish/MiProducto/MiProducto.Backend /p:Version=%build.number%
```

!!! warning "Node.js on the agent"
    The Frontend compiles TypeScript with `node`. If the agent does not have it, the Frontend publish fails with `MSB6003`.

### Step 3: Build the databases

**Runner type:** Command Line

```bash
dotnet build MiProducto.Conf.Database/MiProducto.Conf.Database.sqlproj -c Release -p:NetCoreBuild=true /p:DacVersion=%build.number%
dotnet build MiProducto.Data.Database/MiProducto.Data.Database.sqlproj -c Release -p:NetCoreBuild=true /p:DacVersion=%build.number%
```

The data database is optional: leave out the second line if your product does not have one.

### Step 4: Tests

**Runner type:** Command Line

```bash
dotnet test MiProducto.UnitTest/MiProducto.UnitTest.csproj -c Release --logger "trx;LogFileName=test-results.trx"
dotnet test MiProducto.InterfaceTest/MiProducto.InterfaceTest.csproj -c Release --logger "trx;LogFileName=interface-results.trx"
```

The tests need a product database. The template ships `tools/run-tests-with-db.ps1`, which starts one in a container from the image built by `tools/build-docker-images.ps1 -Only db`, runs the unit tests and removes it at the end; it requires Docker on the agent.

### Step 5: Generate the NuGets

**Runner type:** Command Line

One `dotnet pack` of `tools/pack.csproj` per product `.nuspec` (Frontend, Library, Backend, Conf.Database and Data.Database), with the output in `publish/nuget`. For example, the Frontend's:

```bash
dotnet pack tools/pack.csproj -o publish/nuget -p:NuspecProperties="version=%build.number%" -p:NuspecFile=%system.teamcity.build.checkoutDir%/MiProducto.Frontend/MiProducto.Frontend.nuspec -p:NuspecBasePath=%system.teamcity.build.checkoutDir%/MiProducto.Frontend
```

---

## Configuration variables

Define the following variables in **Build Configuration → Parameters**:

| Variable | Description | Example |
|---|---|---|
| `env.DEVEXPRESS_API` | Key of the DevExpress NuGet feed | — |
| `env.SQL_PASSWORD` | `sa` password of the test database | — |
| `env.NUGET_API_KEY` | Key to publish the NuGets to the feed | — |
| `system.build.number` | Build number (automatic in TeamCity) | `1.0.{build.counter}.1` |

> **Security:** Mark credential variables as type **Password** in TeamCity so they are masked in the build logs.

---

## Configuring the corporate NuGet feed

If your project consumes NuGet packages from a corporate feed (Artifactory, Azure Artifacts, TeamCity NuGet Feed), add a `nuget.config` at the root of the repository:

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <packageSources>
    <add key="Corporate" value="https://your-server/nuget/v3/index.json" />
    <add key="nuget.org" value="https://api.nuget.org/v3/index.json" />
  </packageSources>
</configuration>
```

TeamCity will automatically use this `nuget.config` in the Restore step. For feeds that require authentication, configure the credentials in **Administration → Connections** (not in the configuration file).

---

## Publishing artifacts

In **Build Configuration → General → Artifact paths**, add the following rules:

```
publish/MiProducto/MiProducto.Frontend/** => frontend.zip
publish/MiProducto/MiProducto.Backend/** => backend.zip
publish/nuget/*.nupkg
```

This compresses the publish output of Step 2, collects the NuGets of Step 5 and publishes them as a downloadable artifact from the TeamCity interface, available for subsequent deployment builds.
