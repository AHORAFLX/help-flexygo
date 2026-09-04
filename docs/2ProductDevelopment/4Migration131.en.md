# Migration to Flexygo 1.3.0.1

Version **1.3.0.1** of Flexygo introduces important structural changes in derived projects: a new static assets system via NuGet, a `conf/` configuration folder, a `buildTransitive` system, a new solution-level `nuget.config`, and the removal of `install.map.json`, among others.

To make this transition easier, a PowerShell script (`migration-script.ps1`) is provided that safely automates all the necessary changes.

---

## 1. Downloading the script

<div class="download-box" markdown>

[:fontawesome-solid-file-zipper: Download migration-script.zip](./readme/utils/script.zip){ .md-button .md-button--primary }

</div>

The `.zip` file contains the main script and the file templates that will be applied during the migration:

```
migration-script.zip
├── migration-script.ps1      ← Main script
└── templates/                ← File templates managed by the script
```

---

## 2. Placing the script in your project

Extract the contents of the `.zip` directly into the **repository root**, at the same level as the `.sln` file.

The resulting structure should be as follows:

```
📁 MyProduct/              ← Repository root (open the terminal here)
├── 📁 script/
│   ├── migration-script.ps1
│   └── 📁 templates/
├── MyProduct.sln
├── MyProduct.Backend/
├── MyProduct.Frontend/
└── ...
```

!!! warning "The script must be at the same level as the `.sln`"
    Extract the `script/` folder into the repository root, next to the `.sln` file. The script will automatically detect the project from the current directory.

---

## 3. Prerequisites

### Minimum Flexygo version: 1.2.0.21

!!! warning "The script will stop if the Flexygo packages are below `1.2.0.21`"

The script checks the `Flexygo.*` packages in the following project files:

| File | Packages checked |
|---------|----------------------|
| `*.Backend.csproj` | `Flexygo.*` |
| `*.Frontend.csproj` | `Flexygo.*` |
| `*.Processes.csproj` | `Flexygo.*` |
| `*.Conf.Database.sqlproj` | `Flexygo.*` |

**If your product is on a version earlier than `1.2.0.21`:**

1. Open VS Code on your project.
2. Use the **Flexygo Developer Tools** extension and run the **"Update Product"** action specifying version `1.2.0.21`.
3. Once updated to `1.2.0.21`, run the migration script again.

### PowerShell

- PowerShell 5.1 or higher (included by default in Windows 10/11).
- PowerShell 7+ is also supported.

### Project structure

The folder specified in `-ProjectPath` must contain a `.sln` file.

---

## 4. Safety: git repository and local changes

### If your project is already in a git repository

!!! danger "If there are uncommitted local changes, the script will stop"

This is a safety measure: the script cannot automatically be reverted if there is already work in progress that hasn't been recorded in the history.

**Options before running the migration:**

```powershell
# Option 1 — Temporarily stash changes (recommended)
git stash

# Option 2 — Commit the current state
git add .
git commit -m "wip: state before migration"

# Option 3 — Discard all changes (irreversible!)
git checkout -- .
```

Once the working tree is clean, run the script again.

### If your project is NOT in a git repository

The script **automatically initializes** a local git repository and saves the project's complete state before applying any changes, with the message:

```
initial: master snapshot before migration
```

This lets you review or revert the migration at any time:

```powershell
# See what the migration changed
git diff HEAD~1

# See only the affected files
git diff HEAD~1 --name-only

# Fully revert the migration
git reset --hard HEAD~1
```

---

## 5. Running the script

Open a PowerShell terminal in the **repository root** (the folder containing the `.sln` and the `script/` folder):

### Step 1 — Preview (recommended)

First run it in **dry-run** mode to see exactly what will change without modifying anything:

```powershell
.\script\migration-script.ps1 -DryRun
```

### Step 2 — Apply the migration

Once you've reviewed the plan, run it without `-DryRun`. The script will ask for confirmation before applying the changes:

```powershell
.\script\migration-script.ps1
```

Type `yes` or `y` when asked to confirm to continue.

### Specifying the project name manually

If the project name is not detected correctly from the `.sln`, you can specify it explicitly:

```powershell
.\script\migration-script.ps1 -ProjectName MyProduct
```

### Available parameters

| Parameter | Description | Default |
|-----------|-------------|-------------|
| `-ProjectPath` | Path to the product's root folder (must contain a `.sln`) | Current directory |
| `-ProjectName` | Project name. If omitted, it's automatically detected from the `.sln` | Auto-detected |
| `-DryRun` | Previews the changes without modifying anything | `false` |
| `-MinVersion` | Minimum required version of the Flexygo packages | `1.2.0.21` |
| `-TargetVersion` | Target version written into the templates | `1.3.0.1` |

---

## 6. What the script does

Execution is divided into four internal phases:

### Phase 1 — Precondition validation

Verifies that `-ProjectPath` exists and contains a `.sln`, detects the project name, and checks that all `Flexygo.*` packages are `>= 1.2.0.21`. If any validation fails, the script stops with a descriptive error message.

### Phase 2 — Git safety

- **With a git repository:** verifies a clean working tree. If there are pending changes, it stops.
- **Without a git repository:** initializes one and commits the pre-migration state.
- **Without `git` on the PATH:** shows a warning and continues without the check.

### Phase 3 — Building the plan

Calculates all the necessary actions by comparing the project's current state with what the templates expect. The result is shown on screen before anything is applied:

| Indicator | Meaning |
|-----------|-------------|
| `[CREATE]` | New file that will be created |
| `[UPDATE]` | Existing file that will be rewritten |
| `[DELETE]` | File or folder that will be removed |
| `[MUTATE]` | `.csproj`, `.sqlproj`, or `.gitignore` with XML or text modifications |
| `[SKIP]`   | No changes needed (already up to date) |

### Phase 4 — Execution

After confirming with `yes` / `y`:

1. Creates directories and writes all the template files.
2. Removes obsolete files and folders.
3. Applies mutations to the `.csproj`, `.sqlproj`, and `.gitignore`.
4. Saves an execution log at the project root: `migration-log-YYYYMMDD-HHMMSS.txt`.

---

## 7. Changes applied

### Files created or updated

| Target file | Description |
|-----------------|-------------|
| `*.Backend.nuspec` | Backend packaging spec |
| `*.Frontend.nuspec` | Frontend packaging spec |
| `*.Library.nuspec` | **New** — library packaging spec (separated from the Backend) |
| `*.Conf.Database.nuspec` | Configuration database packaging spec |
| `*.Data.Database.nuspec` | Data database packaging spec |
| `*.Backend/conf/appsettings.json` | Backend runtime configuration |
| `*.Backend/conf/appsettings.Development.json` | Backend development environment configuration |
| `*.Frontend/conf/appsettings.json` | Frontend runtime configuration |
| `*.Frontend/conf/appsettings.Development.json` | Frontend development environment configuration |
| `*.Backend/buildTransitive/*.Backend.props` | Backend build-transitive props |
| `*.Frontend/buildTransitive/*.Frontend.props` | Frontend build-transitive props |
| `*.Conf.Database/buildTransitive/*.Conf.Database.props` | Conf.Database build-transitive props |
| `*.Conf.Database/buildTransitive/*.Conf.Database.targets` | Conf.Database build-transitive targets |
| `*.Data.Database/buildTransitive/*.Data.Database.props` | Data.Database build-transitive props |
| `*.Frontend/tsconfig.json` | TypeScript configuration (moved from `wwwroot/`) |
| `*.Conf.Database/local.publish.xml` | Local publish profile for the configuration database |
| `*.Data.Database/local.publish.xml` | Local publish profile for the data database |
| `nuget.config` | **New** — solution-level NuGet feeds (nuget.org, beta, prod) |
| `.vscode/extensions.json` | **New** — recommended extensions for VS Code |
| `*.Frontend/wwwroot/*/css/README.md` | Placeholder for custom CSS |
| `*.Frontend/wwwroot/*/js/README.md` | Placeholder for custom JS |

### Files and folders removed

#### `install.map.json` (× 4)

| Target removed | Reason |
|------------------|--------|
| `*.Backend/install.map.json` | The installer now consumes the `dotnet publish` output directly |
| `*.Frontend/install.map.json` | Same as above |
| `*.Conf.Database/install.map.json` | Same as above |
| `*.Data.Database/install.map.json` | Same as above |

#### `*.Frontend/wwwroot/` — subdirectories and root files

Flexygo's static assets no longer live in the product's source code; they're now served as `staticwebassets` via the `Flexygo.Frontend` NuGet package.

| Target removed | Content |
|------------------|-----------|
| `wwwroot/css/` | Default styles/skin |
| `wwwroot/docs/` | Internal documentation |
| `wwwroot/img/` | Images and Lottie animations |
| `wwwroot/js/` | JS library, plugins, and views |
| `wwwroot/mobile/` | Full mobile app (Ionic/Capacitor) |
| `wwwroot/reports/` | Report templates |
| `wwwroot/Scripts/` | Third-party typings |
| `wwwroot/xsl/` | XSL transformation sheets |
| `wwwroot/favicon.ico` | Favicon (now comes from the NuGet) |
| `wwwroot/Flexygo.Frontend.styles.css` | CSS generated by Blazor CSS isolation |
| `wwwroot/manifest.json` | PWA manifest |
| `wwwroot/tsconfig.json` | Moved to the Frontend project root |
| `wwwroot/versions.json` | Version manifest |

#### Other files and folders

| Target removed | Reason |
|------------------|--------|
| `*.Conf.Database/build/` | The `.targets` are moved to `buildTransitive/` so they propagate to all child levels |
| `*.Backend/updater/` | Parent package build artifacts — not the product's source code |
| `*.Frontend/updater/` | Same as above |
| `*.Backend/Flexygo.UnitTest.deps.json` | Runtime artifact of the parent UnitTest framework |
| `*.Backend/Flexygo.UnitTest.runtimeconfig.json` | Same as above |
| `*.Backend/MailLicense.xml` | Now comes from the `Flexygo.Backend` NuGet package as a `contentFile` |

#### `bin/` and `obj/` folders (all projects)

The script removes the build folders of the 7 projects to guarantee a clean build after the migration:

`*.Backend`, `*.Frontend`, `*.Conf.Database`, `*.Data.Database`, `*.Processes`, `*.UnitTest`, `*.InterfaceTest`

### Modifications to existing project files

The script applies surgical modifications to the `.csproj`, `.sqlproj`, and `.gitignore` files without replacing them entirely.

#### `.csproj` files (Backend, Frontend, Processes)

| Mutation | Change applied |
|----------|-----------------|
| `SkipPostSharp` | Adds `<SkipPostSharp>true</SkipPostSharp>` — PostSharp comes transitively from the NuGet package, but these projects don't use aspects |
| `ConfItemGroups` | Adds three `<ItemGroup>` elements to manage the `conf/` folder: folder declaration, publish exclusion, and `.local.*` exclusion |
| `TypeScriptCompileRemove` | Removes `<TypeScriptCompile>` entries that pointed to `wwwroot/` (the `tsconfig.json` has been moved to the Frontend project root) |
| `RemoveInstallMapJsonRef` | Removes references to `install.map.json` as `<Content>` or `<None>` |
| `RemoveProjectGuid` | Removes `<ProjectGuid>` (obsolete in SDK-style projects) |
| `RemoveFolderEntry` | Removes obsolete `<Folder>` entries |
| `RemoveMailLicenseRef` | Removes the Backend's reference to `MailLicense.xml` — it now comes from the NuGet package as a `contentFile` |

#### `.sqlproj` files (Conf.Database, Data.Database)

| Mutation | Change applied |
|----------|-----------------|
| `FlexygoParentDatabasePackage` | Updates the reference to the database's parent NuGet package |
| `SqlCmdVariableDefaults` | Updates the default values of the `SqlCmd` variables |
| `RemoveTargetDatabaseSet` | Removes the obsolete `<TargetDatabaseSet>` |
| `RemoveRenameMe` | Removes residual `RenameMe` references |
| `EnsureDboSubFolders` | Ensures the necessary `dbo/` subfolders exist |

#### `.gitignore`

| Action | Detail |
|--------|---------|
| Adds `script/` | The migration script folder is automatically ignored before running the clean-tree check |
| Removes conflicting lines | Removes entries that could collide with the new file structure |
| Adds required entries | Adds the entries needed for the new project layout |

---

## 8. After the migration

### Updating to the latest version with flexygo-product

Once the script has prepared the project structure, the next step is to update the Flexygo NuGet packages to the latest available version using the **Flexygo Product Tools**:

```bash
flexygo-product update -s "PATH_TO_YOUR_SOLUTION"
```

This automatically updates the `Flexygo.Frontend`, `Flexygo.Backend`, `Flexygo.Conf.Database`, and `Flexygo.Library` packages to the latest available version, syncs the resources, and merges the new `appsettings` parameters.

!!! tip "Tool documentation"
    See the full guide in [Product Management](./3ProductManagement.md) for more details on using `flexygo-product update`.

---

### Verification

Once the migration and update are complete, check that everything works correctly:

!!! success "Verification checklist"

    - [ ] **Build the solution** — open the solution in Visual Studio or run `dotnet build` and verify there are no build errors.
    - [ ] **Publish the databases** — publish `*.Conf.Database` and `*.Data.Database` to your local environment using the `local.publish.xml` profiles generated by the script.
    - [ ] **Start the application** — run the project and verify that the application starts correctly and all of the product's features are still operational.

!!! note "Migration log"
    The script generates a `migration-log-YYYYMMDD-HHMMSS.txt` file at the project root with the full detail of every change applied. Check it if you run into any issue.
