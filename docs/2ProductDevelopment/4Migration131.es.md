# Migración a Flexygo 1.3.0.1

La versión **1.3.0.1** de Flexygo introduce cambios estructurales importantes en los proyectos derivados: nuevo sistema de assets estáticos vía NuGet, carpeta `conf/` de configuración, sistema `buildTransitive`, nuevo `nuget.config` a nivel de solución y eliminación de los `install.map.json`, entre otros.

Para facilitar esta transición, se proporciona un script de PowerShell (`migration-script.ps1`) que automatiza todos los cambios necesarios de forma segura.

---

## 1. Descarga del script

<div class="download-box" markdown>

[:fontawesome-solid-file-zipper: Descargar migration-script.zip](./readme/utils/script.zip){ .md-button .md-button--primary }

</div>

El archivo `.zip` contiene el script principal y las plantillas de archivos que se aplicarán durante la migración:

```
migration-script.zip
├── migration-script.ps1      ← Script principal
└── templates/                ← Plantillas de archivos gestionadas por el script
```

---

## 2. Ubicación del script en tu proyecto

Extrae el contenido del `.zip` directamente en la **raíz del repositorio**, al mismo nivel que el archivo `.sln`.

La estructura resultante debe ser la siguiente:

```
📁 MiProducto/              ← Raíz del repositorio (abre la terminal aquí)
├── 📁 script/
│   ├── migration-script.ps1
│   └── 📁 templates/
├── MiProducto.sln
├── MiProducto.Backend/
├── MiProducto.Frontend/
└── ...
```

!!! warning "El script debe estar al mismo nivel que el `.sln`"
    Extrae la carpeta `script/` en la raíz del repositorio, junto al archivo `.sln`. El script detectará el proyecto automáticamente desde el directorio actual.

---

## 3. Requisitos previos

### Versión mínima de Flexygo: 1.2.0.21

!!! warning "El script se detendrá si los paquetes Flexygo están por debajo de `1.2.0.21`"

El script comprueba los paquetes `Flexygo.*` en los siguientes archivos de proyecto:

| Archivo | Paquetes verificados |
|---------|----------------------|
| `*.Backend.csproj` | `Flexygo.*` |
| `*.Frontend.csproj` | `Flexygo.*` |
| `*.Processes.csproj` | `Flexygo.*` |
| `*.Conf.Database.sqlproj` | `Flexygo.*` |

**Si tu producto está en una versión anterior a `1.2.0.21`:**

1. Abre VS Code en tu proyecto.
2. Usa la extensión **Flexygo Developer Tools** y ejecuta la acción **"Update Product"** especificando la versión `1.2.0.21`.
3. Una vez actualizado a `1.2.0.21`, vuelve a ejecutar el script de migración.

### PowerShell

- PowerShell 5.1 o superior (incluido en Windows 10/11 por defecto).
- PowerShell 7+ también es compatible.

### Estructura del proyecto

La carpeta indicada en `-ProjectPath` debe contener un archivo `.sln`.

---

## 4. Seguridad: repositorio git y cambios locales

### Si tu proyecto ya está en un repositorio git

!!! danger "Si hay cambios locales sin commitear, el script se detendrá"

Esta es una medida de seguridad: el script no puede revertirse automáticamente si ya hay trabajo en progreso sin registrar en el historial.

**Opciones antes de ejecutar la migración:**

```powershell
# Opción 1 — Guardar cambios temporalmente (recomendado)
git stash

# Opción 2 — Commitear el estado actual
git add .
git commit -m "wip: estado antes de la migración"

# Opción 3 — Descartar todos los cambios (¡irreversible!)
git checkout -- .
```

Una vez que el árbol de trabajo esté limpio, vuelve a ejecutar el script.

### Si tu proyecto NO está en un repositorio git

El script **inicializa automáticamente** un repositorio git local y guarda el estado completo del proyecto antes de aplicar cualquier cambio, con el mensaje:

```
initial: master snapshot before migration
```

Esto te permite revisar o revertir la migración en cualquier momento:

```powershell
# Ver qué cambió la migración
git diff HEAD~1

# Ver solo los archivos afectados
git diff HEAD~1 --name-only

# Revertir completamente la migración
git reset --hard HEAD~1
```

---

## 5. Ejecución del script

Abre un terminal PowerShell en la **raíz del repositorio** (la carpeta que contiene el `.sln` y la carpeta `script/`):

### Paso 1 — Previsualización (recomendado)

Ejecuta primero en modo **dry-run** para ver exactamente qué se va a cambiar sin modificar nada:

```powershell
.\script\migration-script.ps1 -DryRun
```

### Paso 2 — Aplicar la migración

Una vez revisado el plan, ejecuta sin `-DryRun`. El script pedirá confirmación antes de aplicar los cambios:

```powershell
.\script\migration-script.ps1
```

Escribe `yes` o `y` cuando se solicite confirmación para continuar.

### Especificar el nombre del proyecto manualmente

Si el nombre del proyecto no se detecta correctamente desde el `.sln`, puedes indicarlo de forma explícita:

```powershell
.\script\migration-script.ps1 -ProjectName MiProducto
```

### Parámetros disponibles

| Parámetro | Descripción | Por defecto |
|-----------|-------------|-------------|
| `-ProjectPath` | Ruta a la carpeta raíz del producto (debe contener `.sln`) | Directorio actual |
| `-ProjectName` | Nombre del proyecto. Si se omite, se detecta automáticamente del `.sln` | Auto-detectado |
| `-DryRun` | Previsualiza los cambios sin modificar nada | `false` |
| `-MinVersion` | Versión mínima requerida de los paquetes Flexygo | `1.2.0.21` |
| `-TargetVersion` | Versión objetivo que se escribe en las plantillas | `1.3.0.1` |

---

## 6. Qué hace el script

La ejecución se divide en cuatro fases internas:

### Fase 1 — Validación de precondiciones

Verifica que `-ProjectPath` existe y contiene un `.sln`, detecta el nombre del proyecto y comprueba que todos los paquetes `Flexygo.*` sean `>= 1.2.0.21`. Si alguna validación falla, el script se detiene con un mensaje de error descriptivo.

### Fase 2 — Seguridad git

- **Con repositorio git:** verifica árbol de trabajo limpio. Si hay cambios pendientes, se detiene.
- **Sin repositorio git:** inicializa uno y realiza commit del estado pre-migración.
- **Sin `git` en el PATH:** muestra advertencia y continúa sin la comprobación.

### Fase 3 — Construcción del plan

Calcula todas las acciones necesarias comparando el estado actual del proyecto con el esperado por las plantillas. El resultado se muestra en pantalla antes de aplicar nada:

| Indicador | Significado |
|-----------|-------------|
| `[CREATE]` | Archivo nuevo que será creado |
| `[UPDATE]` | Archivo existente que será reescrito |
| `[DELETE]` | Archivo o carpeta que será eliminado |
| `[MUTATE]` | `.csproj`, `.sqlproj` o `.gitignore` con modificaciones de XML o texto |
| `[SKIP]`   | Sin cambios necesarios (ya está actualizado) |

### Fase 4 — Ejecución

Tras confirmar con `yes` / `y`:

1. Crea directorios y escribe todos los archivos de plantilla.
2. Elimina archivos y carpetas obsoletos.
3. Aplica mutaciones a los `.csproj`, `.sqlproj` y `.gitignore`.
4. Guarda un log de ejecución en la raíz del proyecto: `migration-log-YYYYMMDD-HHMMSS.txt`.

---

## 7. Cambios aplicados

### Archivos creados o actualizados

| Archivo destino | Descripción |
|-----------------|-------------|
| `*.Backend.nuspec` | Spec de packaging del Backend |
| `*.Frontend.nuspec` | Spec de packaging del Frontend |
| `*.Library.nuspec` | **Nuevo** — spec de packaging de la librería (separado del Backend) |
| `*.Conf.Database.nuspec` | Spec de packaging de la BD de configuración |
| `*.Data.Database.nuspec` | Spec de packaging de la BD de datos |
| `*.Backend/conf/appsettings.json` | Configuración runtime del Backend |
| `*.Backend/conf/appsettings.Development.json` | Configuración de entorno de desarrollo del Backend |
| `*.Frontend/conf/appsettings.json` | Configuración runtime del Frontend |
| `*.Frontend/conf/appsettings.Development.json` | Configuración de entorno de desarrollo del Frontend |
| `*.Backend/buildTransitive/*.Backend.props` | Props de build transitivo del Backend |
| `*.Frontend/buildTransitive/*.Frontend.props` | Props de build transitivo del Frontend |
| `*.Conf.Database/buildTransitive/*.Conf.Database.props` | Props de build transitivo de Conf.Database |
| `*.Conf.Database/buildTransitive/*.Conf.Database.targets` | Targets de build transitivo de Conf.Database |
| `*.Data.Database/buildTransitive/*.Data.Database.props` | Props de build transitivo de Data.Database |
| `*.Frontend/tsconfig.json` | Configuración TypeScript (movida desde `wwwroot/`) |
| `*.Conf.Database/local.publish.xml` | Perfil de publicación local de la BD de configuración |
| `*.Data.Database/local.publish.xml` | Perfil de publicación local de la BD de datos |
| `nuget.config` | **Nuevo** — feeds NuGet a nivel de solución (nuget.org, beta, prod) |
| `.vscode/extensions.json` | **Nuevo** — extensiones recomendadas para VS Code |
| `*.Frontend/wwwroot/*/css/README.md` | Placeholder para CSS personalizado |
| `*.Frontend/wwwroot/*/js/README.md` | Placeholder para JS personalizado |

### Archivos y carpetas eliminados

#### `install.map.json` (× 4)

| Target eliminado | Motivo |
|------------------|--------|
| `*.Backend/install.map.json` | El instalador ahora consume directamente el output de `dotnet publish` |
| `*.Frontend/install.map.json` | Ídem |
| `*.Conf.Database/install.map.json` | Ídem |
| `*.Data.Database/install.map.json` | Ídem |

#### `*.Frontend/wwwroot/` — subdirectorios y archivos raíz

Los assets estáticos de Flexygo ya no residen en el código fuente del producto; ahora se sirven como `staticwebassets` vía el paquete NuGet `Flexygo.Frontend`.

| Target eliminado | Contenido |
|------------------|-----------|
| `wwwroot/css/` | Estilos/skin por defecto |
| `wwwroot/docs/` | Documentación interna |
| `wwwroot/img/` | Imágenes y animaciones Lottie |
| `wwwroot/js/` | Librería JS, plugins y vistas |
| `wwwroot/mobile/` | App móvil completa (Ionic/Capacitor) |
| `wwwroot/reports/` | Plantillas de informes |
| `wwwroot/Scripts/` | Typings de terceros |
| `wwwroot/xsl/` | Hojas de transformación XSL |
| `wwwroot/favicon.ico` | Favicon (proviene del NuGet) |
| `wwwroot/Flexygo.Frontend.styles.css` | CSS generado por Blazor CSS isolation |
| `wwwroot/manifest.json` | Manifest de PWA |
| `wwwroot/tsconfig.json` | Movido a la raíz del proyecto Frontend |
| `wwwroot/versions.json` | Manifest de versiones |

#### Otros archivos y carpetas

| Target eliminado | Motivo |
|------------------|--------|
| `*.Conf.Database/build/` | Los `.targets` se mueven a `buildTransitive/` para propagarse a todos los niveles hijos |
| `*.Backend/updater/` | Artefactos de build del paquete padre — no son código fuente del producto |
| `*.Frontend/updater/` | Ídem |
| `*.Backend/Flexygo.UnitTest.deps.json` | Artefacto de runtime del UnitTest framework padre |
| `*.Backend/Flexygo.UnitTest.runtimeconfig.json` | Ídem |
| `*.Backend/MailLicense.xml` | Ahora proviene del paquete NuGet `Flexygo.Backend` como `contentFile` |

#### Carpetas `bin/` y `obj/` (todos los proyectos)

El script elimina las carpetas de compilación de los 7 proyectos para garantizar un build limpio tras la migración:

`*.Backend`, `*.Frontend`, `*.Conf.Database`, `*.Data.Database`, `*.Processes`, `*.UnitTest`, `*.InterfaceTest`

### Modificaciones en archivos de proyecto existentes

El script aplica modificaciones quirúrgicas sobre los archivos `.csproj`, `.sqlproj` y `.gitignore` sin reemplazarlos por completo.

#### Archivos `.csproj` (Backend, Frontend, Processes)

| Mutación | Cambio aplicado |
|----------|-----------------|
| `SkipPostSharp` | Añade `<SkipPostSharp>true</SkipPostSharp>` — PostSharp viene transitivo del paquete NuGet pero estos proyectos no usan aspectos |
| `ConfItemGroups` | Añade tres `<ItemGroup>` para gestionar la carpeta `conf/`: declaración de la carpeta, exclusión de publicación y exclusión de `.local.*` |
| `TypeScriptCompileRemove` | Elimina entradas `<TypeScriptCompile>` que apuntaban a `wwwroot/` (el `tsconfig.json` se ha movido a la raíz del proyecto Frontend) |
| `RemoveInstallMapJsonRef` | Elimina referencias a `install.map.json` como `<Content>` o `<None>` |
| `RemoveProjectGuid` | Elimina `<ProjectGuid>` (obsoleto en proyectos SDK-style) |
| `RemoveFolderEntry` | Elimina entradas `<Folder>` obsoletas |
| `RemoveMailLicenseRef` | Elimina la referencia a `MailLicense.xml` del Backend — ahora proviene del paquete NuGet como `contentFile` |

#### Archivos `.sqlproj` (Conf.Database, Data.Database)

| Mutación | Cambio aplicado |
|----------|-----------------|
| `FlexygoParentDatabasePackage` | Actualiza la referencia al paquete NuGet padre de la base de datos |
| `SqlCmdVariableDefaults` | Actualiza los valores por defecto de las variables `SqlCmd` |
| `RemoveTargetDatabaseSet` | Elimina `<TargetDatabaseSet>` obsoleto |
| `RemoveRenameMe` | Elimina referencias `RenameMe` residuales |
| `EnsureDboSubFolders` | Asegura la existencia de las subcarpetas `dbo/` necesarias |

#### `.gitignore`

| Acción | Detalle |
|--------|---------|
| Añade `script/` | La carpeta del script de migración se ignora automáticamente antes de ejecutar la comprobación de árbol limpio |
| Elimina líneas conflictivas | Elimina entradas que puedan colisionar con la nueva estructura de archivos |
| Añade entradas requeridas | Añade las entradas necesarias para el nuevo layout del proyecto |

---

## 8. Después de la migración

### Actualizar a la última versión con flexygo-product

Una vez que el script ha preparado la estructura del proyecto, el siguiente paso es actualizar los paquetes NuGet de Flexygo a la última versión disponible usando la herramienta **Flexygo Product Tools**:

```bash
flexygo-product update -s "RUTA_A_TU_SOLUCION"
```

Esto actualizará automáticamente los paquetes `Flexygo.Frontend`, `Flexygo.Backend`, `Flexygo.Conf.Database` y `Flexygo.Library` a la última versión disponible, sincronizará los recursos y hará merge de los nuevos parámetros de `appsettings`.

!!! tip "Documentación de la herramienta"
    Consulta la guía completa en [Gestión de producto](./3ProductManagement.md) para más detalles sobre el uso de `flexygo-product update`.

---

### Verificación

Una vez completada la migración y la actualización, comprueba que todo funciona correctamente:

!!! success "Checklist de verificación"

    - [ ] **Compilar la solución** — abre la solución en Visual Studio o ejecuta `dotnet build` y verifica que no hay errores de compilación.
    - [ ] **Publicar las bases de datos** — publica `*.Conf.Database` y `*.Data.Database` en tu entorno local con los perfiles `local.publish.xml` generados por el script.
    - [ ] **Levantar la aplicación** — ejecuta el proyecto y verifica que la aplicación arranca correctamente y todas las funcionalidades del producto siguen operativas.

!!! note "Log de migración"
    El script genera un archivo `migration-log-YYYYMMDD-HHMMSS.txt` en la raíz del proyecto con el detalle completo de todos los cambios aplicados. Consúltalo si encuentras algún problema.
