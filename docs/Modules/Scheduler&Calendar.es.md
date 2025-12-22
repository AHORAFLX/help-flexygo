# Programador y Calendario

Consulta cómo utilizar el componente web Scheduler y Calendar. Con Scheduler y Calendar es posible usar la misma configuración y obtener distintas visualizaciones.

![](/docs_assets/images/Scheduller/Calendar_2.jpg "Imagen 1. Calendario")

## Configuración de Scheduler y Calendar

![](/docs_assets/images/Scheduller/Scheduller_conf.png "Imagen 2. Configuración del Calendario")

| DESCRIPCIÓN | ¿QUÉ SIGNIFICAN LOS PARÁMETROS? |
| --- | --- |
| OPCIONES DEL SCHEDULLER |     |
| --- | --- |
| Default mode | Cómo mostrar el calendario por defecto |
| Min / Max time | Hora de inicio y fin del tiempo total del calendario |
| Slot duration | Define la duración aplicada a la división de celdas en la vista de día o semana |
| Month / Week / List week / Day view | Permite al usuario elegir entre diferentes formas de visualizar el calendario |
| All Day Slot | Habilita eventos con duración de día completo |
| Onclick Event | Permite acceder al registro pintado en el calendario al hacer clic en el evento |
| Event Page Type | Abrir la vista o edición del objeto |
| Event target | Tipo de ventana donde se abrirá la vista o edición del objeto |
| FILTRO DE USUARIO |     |
| Object Name | Objeto que funcionará como filtro |
| View Name | La consulta SQL asociada al objeto que traerá los datos para realizar las búsquedas |
| Value field | Propiedad que aporta el valor |
| Display Field | Propiedad que aporta el texto a mostrar |
| Token Default | Debes tener las variables contextuales configuradas. Este campo agrega un filtro al combo de búsqueda previamente configurado en el calendario |

## Cómo asociar objetos a un calendario ya creado

![](/docs_assets/images/Scheduller/Scheduller_conf_objt.PNG "Imagen 2. Configuración del Objeto del Scheduler")

| DESCRIPCIÓN | ¿QUÉ SIGNIFICAN LOS PARÁMETROS? |
| --- | --- |
| OPCIONES DEL SCHEDULLER |     |
| --- | --- |
| Scheduler name | El nombre del calendario ya creado |
| Object name | El objeto que vamos a asociar |
| View name Example | La consulta SQL que traerá los datos. Importante que los dos primeros campos sean la clave primaria del objeto y la clave primaria del objeto que estamos usando en la búsqueda |
| CAMPOS |     |
| Start date field | Campo obligatorio que debe venir de la consulta indicada arriba. **Indica la fecha de inicio** |
| End date field | Campo proveniente de la consulta indicada. **Indica la fecha de fin** |
| Start time field | Campo proveniente de la consulta indicada. **Indica la hora de inicio** |
| End time field | Campo proveniente de la consulta indicada. **Indica la hora de fin** |
| Duration field | Evita incluir los campos de hora de inicio y fin. Con el campo de duración, FlexyGo lo calculará automáticamente. Si rellenas inicio, fin y duración, los dos primeros tienen prioridad. |
| Color field | Color para pintar el fondo del registro en el calendario. Proporcionado a través de la consulta SQL |
| Text color field | Color para pintar el texto del registro en el calendario. Proporcionado a través de la consulta SQL |
| User id field | Es el campo por el que se filtrará la búsqueda previamente configurada |
| Appointment Template | HTML marcado encargado de pintar el registro en el calendario |

Mira el siguiente vídeo para información adicional:

<div class="video-wrapper">  
    <iframe src="https://www.youtube.com/embed/lKKMce5PsrA" title="Reproductor de video de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>

## Vista de calendario mensual

En el calendario mensual puedes elegir el mes/día a mostrar usando los parámetros del módulo asociado.  
Este parámetro puede usar los valores por defecto de la página.

Ejemplo : initialDate='20240110' El formato de la fecha indicada debe ser **YYYYMMDD**
{: .flx-warning-card }

![](/docs_assets/images/Scheduller/Scheduller_ModParam.PNG "Imagen 3. Configuración del Scheduler")

![](/docs_assets/images/Scheduller/ViewObjt_Action.PNG)