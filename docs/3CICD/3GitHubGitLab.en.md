# GitHub Actions and GitLab CI

The [product template](../2ProductDevelopment/2Template.md) ships the pipelines for **GitHub Actions** and for **GitLab CI**, ready but **disabled**. Each has two workflows: one generates the product's NuGets and the other its Docker images. Both tools do the same, with the same version.

The steps follow the same order as the [TeamCity](2TeamCity.md) template: restore, publish, databases, tests and NuGets; these pipelines add the release and the Docker images. The differences are in [Differences from TeamCity](#differences-from-teamcity). For the general idea of the pipeline, see the [overview](1Overview.md).

!!! note "Project names"
    The examples use `<ProductName>` as the product's name: the prefix of the solution's projects (`<ProductName>.Frontend`, `<ProductName>.Backend`, `<ProductName>.Conf.Database`, `<ProductName>.Data.Database`…). In your product, the template has already replaced it.

---

## Enabling them

The files come with the `.disabled` extension so a new product does not start builds until you decide. To enable them, remove that extension:

| Tool | Files | What to rename |
|---|---|---|
| GitHub Actions | `.github/workflows/<ProductName>-nugets.yml.disabled` and `<ProductName>-docker.yml.disabled` | Remove `.disabled` from both, or only from the one you want. |
| GitLab CI | `.gitlab-ci.yml.disabled`, which includes `.gitlab/workflows/<ProductName>-nugets.yml` and `<ProductName>-docker.yml` | Remove `.disabled` from `.gitlab-ci.yml`. To keep only one of the two workflows, remove its `include` line. |

---

## When they run

- **GitHub Actions:** on every push to any branch, on every `v*` tag and by hand (*Run workflow*).
- **GitLab CI:** on every pipeline of the project, for any branch.

What gets published depends on the branch:

| Branch | NuGets | Release | Publishes the NuGets | Publishes the images |
|---|---|---|---|---|
| `main` or `master` | Yes | Yes | Yes | Yes |
| `develop` | Yes | Yes | No | No |
| Any other | Yes | No | No | No |

On every branch, the NuGets and the images are kept as artifacts of the run.

---

## The version

The version comes from `<ProductName>-version.json`, which holds the *major* and the *minor*:

```json
{
  "major": 1,
  "minor": 0
}
```

The pipeline works out the rest by counting commits since the last one that touched that file:

| Branch | Package version | Example |
|---|---|---|
| `main` or `master` | `Major.Minor.0.N`, with N = commits since the last version change + 1 | `1.0.0.7` |
| `develop` | `Major.Minor.N.1-beta`, with N = commits since the last version change | `1.0.23.1-beta` |
| Any other | `Major.Minor.N.1-alpha.K`, with N = the commits `develop` had where the branch left it and K = the branch's own commits | `1.0.23.1-alpha.4` |

To raise the version, change the *major* or the *minor* in the file: the counter starts again by itself. The assemblies, the dacpacs' `DacVersion`, the NuGets and the images carry the same number; the assemblies, without the `-beta` or `-alpha` suffix.

Both workflows need the full git history to count: GitHub fetches it with `fetch-depth: 0` and GitLab with `GIT_DEPTH: "0"`.

---

## The steps

The NuGets workflow runs steps 1 to 6; the images one, step 7.

### 1. Restore

`dotnet restore <ProductName>.sln`, with the sources in the product's `nuget.config`: nuget.org and Flexygo's two feeds, the stable and the beta one.

!!! warning "DevExpress packages"
    The template's `nuget.config` does not include the DevExpress feed. If your product needs its packages, add its source before restoring, with the key kept as a secret (for example `DEVEXPRESS_API`), never written in the file.

### 2. Publish

`dotnet publish` in Release of the Frontend and the Backend to `publish/<ProductName>/`, with the version, the file version and the informational version (the package's plus the commit). It produces the DLLs the NuGets package.

!!! warning "Node.js"
    The Frontend compiles TypeScript with `node`. GitHub's runners (`ubuntu-latest`) already have it; the GitLab workflow installs it in its `before_script`. Without it, publishing the Frontend fails with `MSB6003`.

### 3. Databases

`dotnet build` of `<ProductName>.Conf.Database.sqlproj` and `<ProductName>.Data.Database.sqlproj` in Release, with `-p:NetCoreBuild=true` and `/p:DacVersion=<version>`. It produces the dacpacs the database NuGets package.

### 4. Tests

These pipelines run no tests: they go from the databases straight to the NuGets. See [Tests](#tests).

### 5. NuGets

One `dotnet pack` of `tools/pack.csproj` per product `.nuspec`, to `publish/nuget`: Frontend, Library, Backend, Conf.Database and Data.Database. `tools/pack.csproj` builds nothing: it only exists because `dotnet pack` needs a project.

```bash
dotnet pack tools/pack.csproj -o publish/nuget -p:NuspecProperties="version=<version>" \
  -p:NuspecFile=$PWD/<ProductName>.Frontend/<ProductName>.Frontend.nuspec \
  -p:NuspecBasePath=$PWD/<ProductName>.Frontend
```

The `.nupkg` files are kept as an artifact of the run on every branch.

### 6. Release and publishing

On `main`, `master` and `develop` a `v<version>` release is created:

- **GitHub:** with generated notes and the `.nupkg` files attached.
- **GitLab:** with `glab release create`. If the release already exists, for example when the pipeline is run again, it is updated instead of failing.

Then the NuGets are published, only on `main` or `master`:

- **GitHub:** to the repository owner's GitHub Packages.
- **GitLab:** to the project's *Package Registry*.

If the package already exists with that version, it is skipped.

### 7. Docker images

It builds three images with the same version as the NuGets: **frontend**, **backend** and **db**, the database with both catalogues. Each one:

1. is built with its version's tag; the **db** one also gets that version as `DAC_VERSION`, so the backend does not update the schema on the first start;
2. is exported with `docker save` to `publish/docker/<ProductName>-<image>-<version>.tar.gz` and kept as an artifact of the run;
3. on `main` or `master`, is pushed to the registry with its version and with `latest`: **GHCR** (`ghcr.io/<owner>/…`) on GitHub and the project's *Container Registry* on GitLab.

On GitLab, if the instance does not have the *Container Registry* enabled, the push is skipped and the rest carries on. This workflow creates no release: the NuGets one already does.

To build the same images on your computer: `pwsh tools/build-docker-images.ps1`.

---

## Differences from TeamCity

| | GitHub Actions and GitLab CI | [TeamCity](2TeamCity.md) |
|---|---|---|
| Enabling | `.disabled` files in the product; enabled by removing the extension | Configuration created from the **Template flexygo products core** template |
| Version | `<ProductName>-version.json` and the branch: `Major.Minor.0.N`, `-beta` or `-alpha.K` | `1.0.%build.counter%.1` |
| Restore | The sources in the product's `nuget.config` | Four sources, DevExpress included |
| Databases | Only built | Built and published to test databases with sqlpackage |
| Tests | None | Starts the application and runs the core's, the product's and the interface tests |
| NuGets | `dotnet pack` of `tools/pack.csproj` per `.nuspec` | NuGet Pack with NuGet.CommandLine 6.12.2 |
| Release | Yes, on `main`, `master` and `develop` | No |
| Docker images | Frontend, backend and db, published on `main` or `master` | Not built |

---

## Secrets and variables

No secret has to be set up to publish:

- **GitHub** uses `GITHUB_TOKEN`, which the run creates itself, with the `packages: write` permission.
- **GitLab** uses `CI_JOB_TOKEN`, which is also generated by itself.

What does have to be prepared:

- **GitLab:** enable the *Package Registry* and, for the images, the *Container Registry* under *Settings › General › Visibility, project features, permissions*. The images workflow needs a `docker` executor in privileged mode, because it uses the `docker:dind` service.
- **The keys you add**, such as DevExpress's: as a *secret* on GitHub, which masks it by itself, or as a **Masked** variable on GitLab. A normal variable shows as it is in the log.

---

## Tests

**These pipelines do not run tests today**: they build, pack and publish. The unit tests are run on your computer against the product's database image:

```powershell
pwsh tools/run-tests-with-db.ps1 -Version 1.0.1.1
```

The script starts the database image, waits for it to answer, points the tests at it, runs them and cleans everything up at the end, also when they fail. The container's `sa` password is taken from the `SQL_PASSWORD` environment variable, and `SQL_PORT` changes the port if 1433 is already taken by a SQL Server on your computer. It needs Docker.

`pwsh tools/dev-pipeline.ps1` chains restore, publish, the database image, the tests and packing locally, without publishing anything.

On Windows without PowerShell 7, replace `pwsh` with `powershell -NoProfile -ExecutionPolicy Bypass -File`.
