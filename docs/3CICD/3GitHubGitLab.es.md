# GitHub Actions y GitLab CI (YAML)

## GitHub Actions — `.github/workflows/ci.yml`

```yaml
name: Core Product Test (mínimo)

on:
  workflow_dispatch:
  push:
    branches: [ "master" ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      # SDK
      - name: Setup .NET 9
        uses: actions/setup-dotnet@v4
        with:
          dotnet-version: '9.x'

      - name: Generar versión
        shell: bash
        run: |
          base="1.0.0"
          ver="$base.${GITHUB_RUN_NUMBER}"
          echo "VERSION=$ver" >> $GITHUB_ENV
          echo "INFOVER=$ver+${GITHUB_SHA}" >> $GITHUB_ENV
      - name: NuGet.Config (feeds privados)
        shell: bash
        run: |
          cat > $GITHUB_WORKSPACE/NuGet.Config <<EOF
          <?xml version="1.0" encoding="utf-8"?>
          <configuration>
            <packageSources>
              <add key="nuget.org" value="https://api.nuget.org/v3/index.json" />
              <add key="Flexygo" value="https://nuget.ahorabh.com/v3/index.json" />
            </packageSources>
          </configuration>
          EOF
      - name: Restore
        run: dotnet restore ./CoreProductTC/CoreProductTC.sln --configfile NuGet.Config
        
      # ---- PUBLICAR FRONTEND (.NET 9) ----
      - name: Publish Frontend
        run: >
          dotnet publish ./CoreProductTC/CoreProductTC.Frontend/CoreProductTC.Frontend.csproj
          -c Release
          -o $GITHUB_WORKSPACE/publish/CoreProductTC/CoreProductTC.Frontend
          /p:Version=$VERSION
          /p:FileVersion=$VERSION
          /p:InformationalVersion=$INFOVER

      # ---- PUBLICAR BACKEND (.NET 9) ----
      - name: Publish Backend
        run: >
          dotnet publish ./CoreProductTC/CoreProductTC.Backend/CoreProductTC.Backend.csproj
          -c Release
          -o $GITHUB_WORKSPACE/publish/CoreProductTC/CoreProductTC.Backend
          /p:Version=$VERSION
          /p:FileVersion=$VERSION
          /p:InformationalVersion=$INFOVER

      # ---- COMPILAR BBDD CONF ----
      - name: Build Conf Database
        run: >
          dotnet build ./CoreProductTC/CoreProductTC.Conf.Database/CoreProductTC.Conf.Database.sqlproj
          -c Release
          /p:DacVersion=$VERSION

      # ---- COMPILAR BBDD DATA ----
      - name: Build Data Database
        run: >
          dotnet build ./CoreProductTC/CoreProductTC.Data.Database/CoreProductTC.Data.Database.sqlproj
          -c Release
          /p:DacVersion=$VERSION
          
      # Zip lo publicado y sube artifacts (FE/BE + DACPACs)
      - name: Empaquetar publish + dacpacs
        run: |
          mkdir -p artifacts
          # Zips de publish
          (cd $GITHUB_WORKSPACE/publish/CoreProductTC && \
            zip -r ../../artifacts/CoreProductTC.Frontend.zip CoreProductTC.Frontend && \
            zip -r ../../artifacts/CoreProductTC.Backend.zip  CoreProductTC.Backend)
          # DACPACs (Conf/Data)
          find ./CoreProductTC -type f -name "*.dacpac" -print -exec cp {} artifacts/ \;
      
      - name: Subir artifacts
        uses: actions/upload-artifact@v4
        with:
          name: coreproduct-build-${{ env.VERSION }}
          path: |
            artifacts/CoreProductTC.Frontend.zip
            artifacts/CoreProductTC.Backend.zip
            artifacts/*.dacpac
          retention-days: 30
```
## GitLab CI — `.gitlab-ci.yml`

```yaml
image: mcr.microsoft.com/dotnet/sdk:9.0

workflow:
  rules:
    - if: $CI_COMMIT_BRANCH == "master"        # ejecuta en pushes a master
    - if: $CI_PIPELINE_SOURCE == "web"         # permite lanzarlo manualmente desde UI

stages:
  - prepare
  - build
  - publish
  - package

# ==== Variables y cache (estilo del template) ====
variables:
  BUILD_CONFIG: "Release"
  BASE_VERSION: "1.0.0"
  # Cache estilo template
  OBJECTS_DIRECTORY: "obj"
  NUGET_PACKAGES_DIRECTORY: ".nuget/packages"
  SOURCE_CODE_PATH: "CoreProductTC/**/"
  # Rutas de solución y proyectos
  SOLUTION_PATH: "CoreProductTC/CoreProductTC.sln"
  FE_PROJ: "CoreProductTC/CoreProductTC.Frontend/CoreProductTC.Frontend.csproj"
  BE_PROJ: "CoreProductTC/CoreProductTC.Backend/CoreProductTC.Backend.csproj"
  DB_CONF_PROJ: "CoreProductTC/CoreProductTC.Conf.Database/CoreProductTC.Conf.Database.sqlproj"
  DB_DATA_PROJ: "CoreProductTC/CoreProductTC.Data.Database/CoreProductTC.Data.Database.sqlproj"

cache:
  key: "$CI_JOB_STAGE-$CI_COMMIT_REF_SLUG"
  paths:
    - "$SOURCE_CODE_PATH$OBJECTS_DIRECTORY/project.assets.json"
    - "$SOURCE_CODE_PATH$OBJECTS_DIRECTORY/*.csproj.nuget.*"
    - "$NUGET_PACKAGES_DIRECTORY"
  policy: pull-push

# ==== before_script: NuGet.Config + Restore (como en el template) ====
before_script:
  - dotnet --info
  - |
    echo "==> Generar NuGet.Config (feeds privados)"
    cat > "$CI_PROJECT_DIR/NuGet.Config" <<EOF
    <?xml version="1.0" encoding="utf-8"?>
    <configuration>
      <packageSources>
        <add key="nuget.org" value="https://api.nuget.org/v3/index.json" />
        <add key="Flexygo" value="https://nuget.ahorabh.com/v3/index.json" />
      </packageSources>
    </configuration>
    EOF
  - |
    echo "==> Restore con cache local"
    dotnet restore "$SOLUTION_PATH" \
      --configfile NuGet.Config \
      --packages "$NUGET_PACKAGES_DIRECTORY"

# ==== PREPARE: calcular VERSION/INFOVER y compartirlo con el resto de jobs ====
prepare_version:
  stage: prepare
  script:
    - |
      VERSION="${BASE_VERSION}.${CI_PIPELINE_IID}"
      INFOVER="${VERSION}+${CI_COMMIT_SHA}"
      echo "VERSION=$VERSION"   >> version.env
      echo "INFOVER=$INFOVER"   >> version.env
      echo "Generadas variables: VERSION=$VERSION, INFOVER=$INFOVER"
  artifacts:
    reports:
      dotenv: version.env

# ==== BUILD: compilar solución y BBDD (DACPACs) ====
build_solution:
  stage: build
  needs: ["prepare_version"]
  script:
    - dotnet build "$SOLUTION_PATH" -c "$BUILD_CONFIG" --no-restore

build_db_conf:
  stage: build
  needs: ["prepare_version"]
  script:
    - dotnet build "$DB_CONF_PROJ" -c "$BUILD_CONFIG" --no-restore /p:DacVersion="$VERSION"

build_db_data:
  stage: build
  needs: ["prepare_version"]
  rules:
    - exists:
        - "$DB_DATA_PROJ"
  script:
    - dotnet build "$DB_DATA_PROJ" -c "$BUILD_CONFIG" --no-restore /p:DacVersion="$VERSION"

# ==== PUBLISH: publicar Frontend y Backend (mismas rutas que en GitHub) ====
publish_frontend:
  stage: publish
  needs: ["build_solution", "prepare_version"]
  script:
    - >
      dotnet publish "$FE_PROJ"
      -c "$BUILD_CONFIG"
      -o "$CI_PROJECT_DIR/publish/CoreProductTC/CoreProductTC.Frontend"
      /p:Version="$VERSION"
      /p:FileVersion="$VERSION"
      /p:InformationalVersion="$INFOVER"

publish_backend:
  stage: publish
  needs: ["build_solution", "prepare_version"]
  script:
    - >
      dotnet publish "$BE_PROJ"
      -c "$BUILD_CONFIG"
      -o "$CI_PROJECT_DIR/publish/CoreProductTC/CoreProductTC.Backend"
      /p:Version="$VERSION"
      /p:FileVersion="$VERSION"
      /p:InformationalVersion="$INFOVER"

# ==== PACKAGE: zips de publish + recoger DACPACs como artifacts ====
package_artifacts:
  stage: package
  needs:
    - job: publish_frontend
      artifacts: true
    - job: publish_backend
      artifacts: true
    - job: build_db_conf
      artifacts: true
    - job: build_db_data
      optional: true
      artifacts: true
    - job: prepare_version
      artifacts: true
  script:
    - apt-get update && apt-get install -y --no-install-recommends zip ca-certificates
    - mkdir -p artifacts
    - |
      echo "==> Empaquetar publish (Frontend/Backend)"
      (cd "$CI_PROJECT_DIR/publish/CoreProductTC" && \
        zip -r "$CI_PROJECT_DIR/artifacts/CoreProductTC.Frontend.zip" CoreProductTC.Frontend && \
        zip -r "$CI_PROJECT_DIR/artifacts/CoreProductTC.Backend.zip"  CoreProductTC.Backend)
    - |
      echo "==> Recoger DACPACs"
      find ./CoreProductTC -type f -name "*.dacpac" -print -exec cp {} artifacts/ \;
  artifacts:
    name: "coreproduct-build-$VERSION"
    expire_in: 30 days
    when: always
    paths:
      - artifacts/CoreProductTC.Frontend.zip
      - artifacts/CoreProductTC.Backend.zip
      - artifacts/*.dacpac

```
