# Crear un addon

Para desarrollar un addon, necesitas disponer de un [producto](../Installation/CreatingProduct.es.md) de Visual Studio.

## 1. Instalar la plantilla de flexygo

Instala la plantilla de flexygo para Visual Studio 2022 desde [aquí](https://marketplace.visualstudio.com/items?itemName=Flexygo.FlexygoTemplate).

O ve a **Herramientas -> Extensiones y actualizaciones -> En línea** y busca **Flexygo**.

![Instalar plantilla de flexygo](../docs_assets/images/Addon/Creation/0.png "Instalar plantilla de flexygo")

## 2. Definir el nombre del addon

Introduce aquí el nombre del addon para que los nombres se actualicen automáticamente y solo tengas que copiar y pegar:

<fh-namepropagator selector="propagated-addonname" placeholder="AddonFlexy"></fh-namepropagator>

!!! warning "Identificador de addon fijo"
	Este nombre será el identificador del addon que utilizaremos siempre.

Ten en cuenta que, cuando se instala un addon, se ubica en la ruta **custom/<span class="propagated-addonname"></span>**.

Por tanto, cualquier fichero que forme parte del addon (js, css, dll, etc.) debe colocarse dentro de esa misma carpeta.

En nuestro caso, la ruta será **ProductoFlexy/custom/<span class="propagated-addonname"></span>**, donde dejaremos nuestros ficheros y que debe ser referenciada por las rutas utilizadas en el proyecto.

## 3. Crear carpeta raíz

En la carpeta raíz de nuestro producto, crea una carpeta con el identificador de nuestro addon (<fh-copy><span class="propagated-addonname"></span></fh-copy>). Ahí añadiremos los proyectos de nuestro addon.

![Carpeta raiz del addon](../docs_assets/images/Addon/Creation/1.png "Carpeta raiz del addon")

## 4. Añadir un proyecto de Config Model

Añade a la solución del producto un nuevo proyecto de tipo <fh-copy>Flexygo Addon Config Model BBDD</fh-copy>, con el nombre <fh-copy><span class="propagated-addonname"></span>BD</fh-copy>. Guárdalo dentro de la carpeta creada en el paso 3.

![Nuevo proyecto de addon](../docs_assets/images/Addon/Creation/2.png "Nuevo proyecto de addon")

![Proyecto AddonFlexyBD](../docs_assets/images/Addon/Creation/3.png "Proyecto AddonFlexyBD")

## 5. Añadir un proyecto de Data Model

Añade a la solución del producto un nuevo proyecto de tipo <fh-copy>Flexygo Data Model BBDD</fh-copy>, con el nombre **<span class="propagated-addonname"></span>_DataBD**. Guárdalo dentro de la carpeta creada en el paso 3.

![Nuevo proyecto de datos](../docs_assets/images/Addon/Creation/2.png "Nuevo proyecto de datos")

![Proyecto AddonFlexy_DataBD](../docs_assets/images/Addon/Creation/4.png "Proyecto AddonFlexy_DataBD")

## 6. Añadir un proyecto Custom CSharp DLL

Añade a la solución del producto un nuevo proyecto de tipo <fh-copy>Flexygo Addon Custom CSharp DLL</fh-copy>, con el nombre <fh-copy><span class="propagated-addonname"></span>_Processes</fh-copy>. Guárdalo dentro de la carpeta creada en el paso 3.

![Nuevo proyecto CSharp DLL](../docs_assets/images/Addon/Creation/2.png "Nuevo proyecto CSharp DLL")

![Proyecto AddonFlexy_Processes](../docs_assets/images/Addon/Creation/5.png "Proyecto AddonFlexy_Processes")

## 7. Modificar la ruta de compilación

En las propiedades de **<span class="propagated-addonname"></span>_Processes**, modifica la ruta de salida de compilación a la carpeta **custom** del proyecto. Dentro de **custom** debe existir una carpeta con el identificador de tu addon, en nuestro caso **<span class="propagated-addonname"></span>**. Dentro de esta carpeta, puedes organizar la estructura como necesites; nosotros la dejaremos en una carpeta llamada **dll**.

Sustituye **ProductFlexy** por el nombre de tu proyecto y **AddonFlexy** por el identificador de tu addon <fh-copy><span class="propagated-addonname"></span></fh-copy>.

!!! warning "Usar salida DLL comun"
	Si tienes varios proyectos DLL relacionados, su ruta de salida debe ser la misma carpeta.

![Ruta de salida de compilacion](../docs_assets/images/Addon/Creation/6.png "Ruta de salida de compilacion")

## 8. Corregir dependencias fallidas

Corrige las dependencias fallidas del proyecto usando las incluidas en la carpeta **packages\Flexygo.x.x.xx.xx\lib\net46** de tu solución.

![Dependencias del proyecto](../docs_assets/images/Addon/Creation/7.png "Dependencias del proyecto")

## 9. Definir nombre de ensamblado y namespace

En las propiedades de cada proyecto, establece el nombre de ensamblado y el namespace correctos, usando el mismo valor que el nombre del addon.

- Sustituye **flxDB_data** por <fh-copy><span class="propagated-addonname"></span>_DataBD</fh-copy>.
- Sustituye **flxDB_processes** por <fh-copy><span class="propagated-addonname"></span>_Processes</fh-copy>.
- Sustituye **flxDB** por <fh-copy><span class="propagated-addonname"></span>BD</fh-copy>.

![Nombre de ensamblado y espacio de nombres](../docs_assets/images/Addon/Creation/8.png "Nombre de ensamblado y espacio de nombres")

## 10. Desarrollar el addon

Con el proyecto iniciado, selecciona **addon** como modo de origin y establece el nombre del identificador del addon <fh-copy><span class="propagated-addonname"></span></fh-copy> para activarlo.

![Modo origin addon](../docs_assets/images/Addon/Creation/9.png "Modo origin addon")

![Activacion del addon](../docs_assets/images/Addon/Creation/10.png "Activacion del addon")

## 11. Generar scripts

Una vez finalizado el desarrollo, genera los scripts dentro de tu proyecto **<span class="propagated-addonname"></span>BD**.

![Generar scripts](../docs_assets/images/Addon/Creation/11.png "Generar scripts")
