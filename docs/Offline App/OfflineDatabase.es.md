# Base de datos offline

## Depuración básica

1.  Desde las migraciones de bases de datos de aplicaciones offline a webassembly, se ha añadido un nuevo menú a las opciones avanzadas en el menú de sincronización, desde donde se puede ejecutar SQL. (Este menú solo está disponible en el escritorio)
        
    ![Menu](/docs_assets/images/offline/DatabaseMenuNav.png "Image 1. Database Menu Navigation")

2.  Una vez que ingreses a este menú, podrás ejecutar tus propios selects, desde la entrada superior o ver cualquier tabla haciendo clic en el ícono de la derecha junto a la entrada.
    
    Consejo: Si alguna vez deseas reutilizar un select, puedes hacerlo utilizando las teclas de flecha arriba y abajo.

    Consejo 2: Cuando se deba hacer un select complejo, puedes usar "shift + enter" para añadir otra línea y así hacer que la entrada sea más grande sin ejecutar la sentencia select. Y si tienes un select complejo de otro lugar, al pegarlo, la entrada crecerá automáticamente según el tamaño del select.

    ![Menu](/docs_assets/images/offline/DatabaseMenu.png "Image 2. Database Menu")

3.  Cuando haces clic en la entrada de tablas, se mostrarán todas las tablas en la base de datos actual. Desde allí, si seleccionas cualquiera de estas, se cargarán todos los registros en una tabla como puedes ver en la cuarta imagen.
    
    ![Menu](/docs_assets/images/offline/ShowTablesBtn.png "Image 3. Show Tables button")

    ![Menu](/docs_assets/images/offline/ShowTable.png "Image 4. Show Table")

## Profiler de Base de Datos

Desde la versión 6.11, la aplicación tiene un **profiler de base de datos** que permite registrar todas las sentencias SQL que se ejecutan en segundo plano (como por ejemplo las dependencias).

Para usarlo, solo necesitarás conocer las funciones **flexygo.sql.initProfiler** y **flexygo.sql.stopProfiler**. En futuras actualizaciones, se añadirá un botón visual de play y stop en la pantalla de la base de datos.

Cuando se ejecuta **flexygo.sql.initProfiler**, todas las SQL ejecutadas y sus resultados comenzarán a ser registradas, por lo que cuando ejecutes **flexygo.sql.stopProfiler**, todas ellas se registrarán en la consola.

![Menu](/docs_assets/images/offline/InitStopProfiler.png "Image 5. Initiate and stop profiler")

Si alguna vez deseas buscar una sentencia en particular, lo que puede ser difícil en ediciones grandes con muchas dependencias, puedes usar la función **flexygo.sql.filterProfiler** que filtrará los datos que le pases. Por defecto, no distingue entre mayúsculas y minúsculas, pero si lo prefieres, puedes pasarle el tercer parámetro con el valor true.

![Menu](/docs_assets/images/offline/FilterProfiler.png "Image 6. Filter profiler")