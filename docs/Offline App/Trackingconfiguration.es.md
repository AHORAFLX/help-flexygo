# Configuración de seguimiento

## Configurar dispositivo

Antes de empezar, es importante configurar los dispositivos para permitir que la aplicación rastree la posición de los usuarios mientras está cerrada. Para esto, la aplicación solicitará automáticamente permisos a los usuarios con el seguimiento habilitado, pero la mayoría de los dispositivos necesitarán configuración adicional dependiendo de su marca, por lo que deberías seguir los pasos de [dontkillmyapp](https://dontkillmyapp.com/).

## Menú de configuración de seguimiento

Se ha añadido un nuevo botón de seguimiento al menú de creación de aplicaciones, que te llevará al menú de configuración de seguimiento, donde podrás configurar y visualizar cada ajuste de seguimiento:

![](/assets/images/offline/TrackingButton.png "Image 1. Set tracking")

En este nuevo menú podrás ver esta información en los siguientes módulos:

Últimas ubicaciones: Muestra la última ubicación conocida de cada usuario, y cuando se hace clic en el marcador, podrás ver cuándo se tomó esa ubicación y el teléfono y correo electrónico del usuario.

Horario de seguimiento: Muestra cada horario de seguimiento establecido y permite crear más y editar los que ya existen.

Información de seguimiento del usuario: Muestra cada usuario y su información de configuración de seguimiento (radio e imprecisión) dividida entre usuarios con seguimiento activo y aquellos que no lo tienen. A la derecha de cada usuario habrá un icono que muestra si hay un calendario asignado a él (icono azul) o si no (icono rojo). Si se hace clic, navegarás a esa vista de calendario, o si no tiene calendario, a la creación de un nuevo horario para ese usuario. Por último, si haces clic en el icono verde de mapa (que solo aparece en usuarios configurados correctamente), verás la ruta de ese usuario.

![](/assets/images/offline/TrackingCnfMenu.png "Image 2. Set tracking")

## Configurar el seguimiento del usuario

El seguimiento se activa individualmente en cada creación o edición de usuario.

Allí necesitas activar el interruptor de seguimiento y configurar las siguientes propiedades:

### Radio

El radio es la distancia, en metros, que el usuario necesita moverse para que la aplicación actualice su posición.

Cuanto más pequeño sea el parámetro de radio, más datos obtendrá la base de datos, por lo que se recomienda no configurarlo por debajo de 20 para evitar registrar demasiados logs en la base de datos.

### Máxima imprecisión

La máxima imprecisión se utiliza para enviar al servidor solo aquellas coordenadas de las que la aplicación sabe que la distancia entre las coordenadas obtenidas y la verdadera posición del usuario es menor que este valor. Este valor es importante para evitar obtener información incorrecta, por lo que se recomienda que el valor no sea inferior a 45.

![](/assets/images/offline/SetTracking.png "Image 3. Set tracking")

Cuando estos parámetros están configurados y guardados, la aplicación podrá rastrear cada posición todo el tiempo desde la primera iniciación de la aplicación del usuario. Pero esta no es la forma en que esta funcionalidad está destinada a ser utilizada, por eso necesitarás establecer horarios para que la funcionalidad funcione durante las horas laborales indicadas. Para ello, tenemos el objeto Horario de Seguimiento, que se puede ver y crear desde el menú de configuración de seguimiento. Cuando creas uno, solo necesitas seleccionar a quién se aplicará (usuario individual o un rol), establecer un título para que lo identifiques, establecer un horario diario y establecer la vista (que el objeto debe ser sysUsers) que debe contener una columna con cada día festivo del usuario; puede ser tan simple como se muestra en estas dos imágenes.

Una vez que tengas todo esto configurado, la funcionalidad estará completamente operativa.

![](/assets/images/offline/SelectTrackingSchedules.png "Image 5. Set schedules")

![](/assets/images/offline/SetHolidaysView.png "Image 5. Set holidays")

## Configurar proceso de limpieza de datos

De forma predeterminada, flexygo tiene un Cronjob llamado ClearLocations que eliminará cada semana los registros de ubicaciones más antiguos de 7 días, que deberás habilitar.

Este trabajo también se puede editar para que se active en un intervalo de tiempo diferente y puedes modificar su parámetro de días para eliminar registros más antiguos que ese valor.

![](/assets/images/offline/SelectTrackingProcess.png "Image 6. Select clear locations process")

![](/assets/images/offline/ConfigureClearLocations.png "Image 7. Configure clear locations process")