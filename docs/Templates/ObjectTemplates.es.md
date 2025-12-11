# Plantillas de Objetos

Los módulos de flexygo como listas o vistas normalmente incluyen un botón para cambiar la plantilla . Este botón nos permite cambiar entre diferentes formas de mostrar el módulo, permitiendo que cada usuario establezca qué vista es la más adecuada para él, marcando esta como la plantilla predeterminada. Cada vista para cada módulo se guarda solo con seleccionarla.

![Imagen 1. Botón de Plantilla](/assets/images/ObjectsTemplates/Toolbar.png)

## Plantillas de Listas

El botón de plantilla del módulo de lista muestra los elementos de la siguiente manera:

1.  Plantillas de tipo **Lista Definidas**
2.  Vistas de datos de objeto **Definidas** con la opción "Mostrar como cuadrícula" habilitada

Cuando se carga un módulo de lista, la plantilla mostrada seguirá esta secuencia:

1.   Última plantilla mostrada por el usuario actual
2.   Plantilla de lista marcada como predeterminada
3.   Vista de datos marcada como predeterminada
4.   Vista de datos marcada como mostrar en cuadrícula

## Plantillas de Vista

El botón de plantilla del módulo de lista muestra los elementos de la siguiente manera:

1.   Plantillas de tipo **Vista Definidas**
2.   Formulario de **Edición en modo vista**

Cuando se carga un módulo de vista, la plantilla mostrada seguirá esta secuencia:

1.   Última plantilla mostrada por el usuario actual
2.   Plantilla de vista marcada como predeterminada
3.   Formulario de vista basado en el diseño de Edición

## Plantillas de Edición

El botón de plantilla del módulo de lista muestra los elementos de la siguiente manera

1.   Plantillas de tipo **Vista Definidas**
2.   Formulario de **Edición en modo vista**

Cuando se carga un módulo de edición, la plantilla mostrada seguirá esta secuencia:

1.   Última plantilla mostrada por el usuario actual
2.   Plantilla de edición marcada como predeterminada
3.   Formulario de edición basado en el diseño de Edición

## Tokens Especiales de Plantilla

Las plantillas también pueden incluir cadenas específicas para mostrar diferentes tipos de botones:

*   **{{objectmenu}}**: Para mostrar el menú completo del objeto
*   **{{processmenu}}**: Para mostrar solo el menú de procesos del objeto
*   **{{reportmenu}}**: Para mostrar solo el menú de reportes del objeto
*   **{{deletebutton}}**: Para el botón de eliminar objeto
*   **{{viewbutton}}**: Para el botón de ver objeto
*   **{{editbutton}}**: Para el botón de editar objeto
*   **{{newbutton}}**: Para el botón de nuevo objeto
*   **{{bagbutton}}**: Para mostrar el botón de bolsa en los elementos de una colección (lista)


## Grupos de plantillas

A veces es necesario anidar plantillas para lograr una visualización más compleja:

![template](/assets/images/ObjectsTemplates/Groups.png)

Puede lograr esto utilizando tantos grupos de plantillas como necesite. Para el ejemplo anterior, utilizamos:

![template](/assets/images/ObjectsTemplates/Groups-examples.png)

Después de crear los grupos, puede incluir el siguiente marcado en el encabezado de su plantilla.

![template](/assets/images/ObjectsTemplates/Groups-config.png)