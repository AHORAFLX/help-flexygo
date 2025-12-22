# Planificador

El módulo planificador te permite crear planificaciones a partir de múltiples objetos y con diferentes modos de visualización.

A diferencia del módulo Timeline, este componente **no tiene en cuenta las horas**, solo las fechas.

Algunas propiedades están documentadas en su formulario correspondiente.

## Modos de visualización

Puedes crear tantos modos como necesites en un único planificador. Además, en cada modo puedes crear múltiples tarjetas asociadas a distintos objetos.

![](/docs_assets/images/Planner/planner_example.png "Imagen 1. Configuración básica del planificador")

## Configuración

Para configurar el planificador, debemos completar los siguientes ajustes:

### Configuración del Módulo

![](/docs_assets/images/Planner/planner_module_conf.png "Imagen 2. Configuración del Módulo")

### Configuración del planificador

![](/docs_assets/images/Planner/planner_conf.png "Imagen 3. Configuración del planificador")

La tabla del objeto del módulo debe estar presente en todas las vistas SQL usadas en las configuraciones de modos y tarjetas.
{: .flx-warning-card }

### Configuración de Modos

![](/docs_assets/images/Planner/planner_mode_conf.png "Imagen 4. Ejemplo de Configuración de Modo")

Puedes definir tantos modos como necesites. Cada modo tendrá sus propias tarjetas y configuración de celdas.

**Configuración de la primera columna**: El objeto y la vista que se usarán en la primera columna. El campo *First column id* será el que relacione la primera columna con las tarjetas.

**Title template**: Campo HTML que se mostrará sobre el planificador. Puedes mostrar información o botones con procesos personalizados.

**Menus template**: Permite personalizar el menú de cada día (en el encabezado de la tabla) o de cada celda con procesos. En esta plantilla puedes usar la fecha del scheduler, el identificador del grupo (solo en la celda) y los valores por defecto de la página.

### Configuración de Tarjetas

![](/docs_assets/images/Planner/planner_card_conf.png "Imagen 5. Ejemplo de Configuración de Tarjeta")

Dentro de un modo puedes tener tantas configuraciones de tarjetas como necesites.

**Object configuration**: El objeto y la vista que devolverán todas las tarjetas.

**Priority**: Cuando hay más de un tipo de tarjeta en la celda, la prioridad determina cuál se muestra en el scheduler. Con la misma prioridad, se muestran ambas; con prioridades distintas, se muestra la de menor valor (igual que el orden).

**Card date field**: El campo de la vista SQL que contiene la fecha.

**Card First Column relation**: El campo de la vista SQL que relaciona con la primera columna.

**Class y Style fields**: Campos en la vista SQL que contienen los estilos para la tarjeta.

**Editable**: Si está activo, la tarjeta puede editarse y eliminarse desde el scheduler, además de ser arrastrada de una celda a otra ejecutando la función *OnMove*.

**Draggables**: Esta configuración permite crear una lista de objetos que se pueden arrastrar al planificador para realizar diferentes acciones mediante la ejecución de la función *OnAdd*.

**OnAdd function**: Función que se ejecutará al arrastrar un objeto desde la columna lateral al planificador.

**OnDelete Function**: Función que se ejecutará cuando se elimina un elemento del planificador. Si no se especifica ninguna, se ejecuta el borrado del objeto.

**OnMove Function**: Función que se ejecutará cuando una tarjeta se mueve de una celda a otra.

### Objetos Arrastrables

Puedes tener un objeto arrastrable por cada configuración de tarjeta. Los distintos objetos arrastrables se mostrarán en una lista en la parte izquierda.

![](/docs_assets/images/Planner/planner_draggables.png "Imagen 6. Columna de objetos arrastrables")