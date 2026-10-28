# Instalador: Modo Desarrollo

El modo **Desarrollo** del instalador está orientado a desarrolladores que trabajan con proyectos Flexygo en Visual Studio o VS Code. Ofrece tres operaciones: crear un nuevo producto desde la plantilla oficial, crear un addon (en los productos que los admiten, como Flexygo) o gestionar productos ya existentes en el workspace.

!!! warning "Requisito previo para VS Code: Node.js en PATH global"
    Si vas a trabajar con el proyecto desde **VS Code**, necesitas tener **Node.js** instalado y disponible en el **PATH global** del sistema. Si no está en el PATH, la compilación del Frontend fallará. Consulta los [requisitos de desarrollo](../../2ProductDevelopment/1Requirements.md).

<figure markdown="span">
  ![Pantalla principal del instalador — sección Desarrollo](../../docs_assets/images/CoreDeployment/installer/Desarrollo/Inicio.png)
  <figcaption>Pantalla principal del modo Desarrollo</figcaption>
</figure>

---

=== "Crear producto"

    ## Crear un nuevo producto

    Esta opción genera la estructura completa de un producto Flexygo a partir de la plantilla oficial: proyectos Frontend, Backend y bases de datos, listos para abrir en Visual Studio o VS Code.

    <figure markdown="span">
      ![Pantalla de creación de producto](../../docs_assets/images/CoreDeployment/installer/Desarrollo/creaProducto.png)
      <figcaption>Formulario para crear un nuevo producto</figcaption>
    </figure>

    Introduce el nombre del producto y la ruta donde se generará el proyecto. El instalador instala la plantilla (o la actualiza si ya está instalada) e instala o actualiza también las herramientas de desarrollo:

    - **Flexygo Product Tools** — permite generar NuGets y actualizar el proyecto desde línea de comandos o desde las extensiones de Visual Studio y VS Code
    - **Flexygo MCP** — servidor MCP para construir la aplicación con Claude Code y otros clientes de IA

    Una vez completado, crea la solución a partir de la plantilla.

    <figure markdown="span">
      ![Producto creado correctamente](../../docs_assets/images/CoreDeployment/installer/Desarrollo/creaProductoCompleto.png)
      <figcaption>Producto generado — listo para abrir en Visual Studio o VS Code</figcaption>
    </figure>

    !!! tip "Alternativa por línea de comandos"
        También puedes crear un producto usando la plantilla directamente con `dotnet new`. Consulta la guía de [Plantilla de producto](../../2ProductDevelopment/2Template.md).

=== "Crear addon"

    ## Crear un addon

    La opción **Crear addon** solo aparece en los productos que admiten addons, como Flexygo. Genera la solución de un addon con la plantilla de addon del producto: pide la carpeta del producto y el nombre del addon, que tiene que ser distinto del del producto. Si la carpeta está vacía, crea primero el producto y después el addon.

    El proceso completo, desde la creación hasta el empaquetado como NuGet, está en [Crear un addon](../../2ProductDevelopment/7Addons.md).

=== "Gestionar productos"

    ## Gestionar productos existentes

    Esta opción escanea el workspace en busca de proyectos Flexygo y permite **actualizar** la versión del Core o **generar los NuGets** del producto.

    ### Carga del workspace

    Al entrar, el instalador analiza el workspace en busca de soluciones Flexygo.

    <figure markdown="span">
      ![Buscando proyectos actualizables](../../docs_assets/images/CoreDeployment/installer/Desarrollo/gestionProductoCargando.png)
      <figcaption>El instalador escanea el workspace en busca de proyectos Flexygo</figcaption>
    </figure>

    ### Lista de productos

    Una vez cargados, los productos aparecen mostrando la versión actual instalada y la última versión estable disponible de Flexygo. Se puede alternar entre vista de lista y cuadrícula, y filtrar por nombre.

    <figure markdown="span">
      ![Lista de productos encontrados](../../docs_assets/images/CoreDeployment/installer/Desarrollo/gestionProductoLista.png)
      <figcaption>Vista de lista: versión actual → última versión estable disponible, con acciones por producto</figcaption>
    </figure>

    <figure markdown="span">
      ![Vista de cuadrícula con filtro](../../docs_assets/images/CoreDeployment/installer/Desarrollo/gestionProductoFiltro.png)
      <figcaption>Vista de cuadrícula con filtro activo</figcaption>
    </figure>

    ### Actualizar versión del Core

    Pulsa **Actualizar** en el producto deseado para actualizar los paquetes NuGet del Core a la versión disponible. El instalador realiza el proceso y confirma el resultado.

    <figure markdown="span">
      ![Producto actualizado correctamente](../../docs_assets/images/CoreDeployment/installer/Desarrollo/productoActualizado.png)
      <figcaption>Confirmación de actualización del producto a la nueva versión del Core</figcaption>
    </figure>

    !!! warning "No actualices manualmente los paquetes NuGet"
        El actualizador realiza pasos adicionales (sincronización de recursos, sustitución de los `appsettings` conservando tus `ConnectionStrings`, `DatabaseNuget` y `MailSettings`…; ver [Gestión de productos](../../2ProductDevelopment/3ProductManagement.md)) que no ocurren con una actualización manual de NuGet desde Visual Studio o VS Code.

    ### Generar NuGets del producto

    Pulsa **Generar NuGets** para empaquetar el producto. El instalador pide la versión con la que etiquetar los paquetes generados.

    <figure markdown="span">
      ![Diálogo de versión para generar NuGet](../../docs_assets/images/CoreDeployment/installer/Desarrollo/generarNuget.png)
      <figcaption>Introduce la versión con la que se generarán los paquetes NuGet del producto</figcaption>
    </figure>

    Al completarse, se abre automáticamente el explorador de archivos con la carpeta donde se han generado los paquetes. Los paquetes resultantes (Frontend, Backend, Conf.Database, Data.Database) quedan disponibles para publicar en un feed NuGet o distribuir al instalador.
