# Module Management

Cada página tiene un diseño (layout) donde es posible añadir diferentes módulos relacionados con la información del objeto de la página.

## Skin 2026: organizar los módulos en la propia página

En la skin 2026, con el **modo desarrollo** encendido, los módulos se organizan directamente sobre la página, sin abrir el gestor de módulos:

1. Abre la página y pulsa **Ctrl Mayús M**, o abre **Acceso rápido** (la pastilla de abajo a la derecha, **Ctrl Espacio**) y, en **Página**, elige **Colocar módulos**.
2. Arriba aparece la barra **Colocando módulos**, con el nombre de la página y sus zonas. Arrastra los módulos entre zonas y cambia su orden; el panel **Módulos** permite buscar los módulos existentes, añadirlos o **Crear un módulo nuevo**. Cada módulo tiene su menú para configurarlo, ver su seguridad y eventos o quitarlo de la página.
3. Con **Cambiar disposición** eliges otro diseño, y con **Disposición libre** cada módulo tiene su sitio y su tamaño en una rejilla de 12 columnas.
4. **Guardar** escribe los cambios; **Descartar** los deshace. La barra avisa de lo que conviene saber antes de guardar: los módulos que no tienen zona en el diseño nuevo pasan a la primera, una página del sistema (origen 0) no se puede guardar trabajando con otro origen, y guardar una página genérica crea una página nueva.

La configuración de la página se abre con el botón **Ajustes de la página** de la misma barra, junto a las herramientas para organizar los módulos.

<figure markdown="span">
  ![Colocar módulos en la skin 2026](../../docs_assets/images/ModuleManagement/module-placer-2026.png)
  <figcaption>Colocar módulos: la barra de arriba y, a la derecha, el panel <b>Módulos</b></figcaption>
</figure>

## Skin 2026: que cada usuario ordene los módulos

Puedes dejar que cada usuario ordene a su gusto los módulos de una página. Se activa página a página y viene apagado:

1. Abre la página, pulsa **Ctrl Mayús M** y, en la barra **Colocando módulos**, abre **Ajustes de la página**.
2. Marca **Los usuarios pueden reordenar** y guarda.

Desde ese momento, cada usuario puede:

- **mover** un módulo arrastrándolo por su cabecera, a otra zona o a otro puesto de la misma; en una página con **Disposición libre**, a otra celda de la rejilla;
- **fijar** un módulo en su sitio con la chincheta de su cabecera, para que los demás se muevan a su alrededor;
- **volver a tu disposición** con la línea que sale al pie de la página en cuanto ha movido algo.

Lo que no puede hacer: cambiar el tamaño de los módulos, mostrarlos u ocultarlos, ni añadir o quitar ninguno. Eso sigue siendo cosa tuya.

Cada cambio se guarda en cuanto el usuario suelta el módulo, solo para él. Se guarda la zona, el orden, si el módulo está plegado o fijado y, en una página con disposición libre, su celda. Si después apagas la opción, todos vuelven a ver tu disposición, y lo que cada uno tenía guardado se conserva por si la vuelves a encender.

Solo funciona en la skin 2026, y en la página principal: no en los diálogos. En el ancho de móvil no hay nada que ordenar, porque los módulos se apilan; una página con disposición libre se ordena a partir de 1280 px de ancho. Mientras colocas módulos, el orden de cada usuario queda en pausa.

Cómo lo ve el usuario: [Ordenar los módulos de una página](../Administration/Skin2026.md#7-ordenar-los-modulos-de-una-pagina).

## Skin flexy2022: Page config y Module Manager

En la skin flexy2022, es necesario acceder a la página, hacer clic en la pestaña **Page config** situada a la derecha de la pantalla y acceder al **Module Manager**. En la *imagen 1* se pueden visualizar las distintas posibilidades de diseño que existen para dividir la pantalla.

En un segundo nivel aparecen dos columnas.  
En la columna izquierda podemos ver los distintos **placeholders** según el layout seleccionado previamente.  
En la columna derecha tenemos una lista con todos los módulos disponibles. Esta lista incluye un buscador para localizar fácilmente los módulos ya creados. El buscador tiene dos iconos:  
- El **primer icono** genera rápidamente un módulo de tipo tabulador.  
- El **segundo icono** nos permite crear nuevos tipos de módulos.

![](../../docs_assets/images/ModuleManagement/ModuleManagement_2.JPG "Imagen 1. Gestión de Módulos")

![](../../docs_assets/images/ModuleManagement/ModuleManagement_NewTab.JPG "Imagen 2. Crear nueva pestaña")

Las pestañas (tabs) no son más que módulos clasificados como tabuladores. Con ellos es posible anidar múltiples módulos en su interior, facilitando un acceso más compacto y una visualización más ordenada de diferentes secciones. El usuario puede generar una nueva pestaña desde la ventana de gestión de módulos (primer icono del buscador). Existen dos tipos de pestañas:  
- El **button tabulator** (pestaña tipo botón)  
- El **default tabulator** (tabulador por defecto)

Ambos pueden verse en la siguiente imagen:

![](../../docs_assets/images/ModuleManagement/tabs.PNG "Imagen 3. Tipos de Tabuladores")

A continuación, un ejemplo de anidación de módulos:

![](../../docs_assets/images/ModuleManagement/ModuleManagement.png "Imagen 4. Ejemplo de módulos anidados")

Mira el siguiente vídeo en nuestro canal de YouTube para más información:
<div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/-VYdJIDVIG8" title="Reproductor de video de YouTube" frameborder="0" allow="accelerómetro; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>
