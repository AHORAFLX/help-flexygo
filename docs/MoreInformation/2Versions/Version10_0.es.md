# Versión 10.0

Estrena la skin 2026, con navegación lateral adaptable y modos claro y oscuro.

## Novedades

### Skins

- **Estrena la skin 2026, con navegación lateral adaptable y modos claro y oscuro.** Puedes contraer la barra lateral y acceder a las alertas y al perfil desde la nueva interfaz. También incluye el atajo Ctrl+K y mantiene disponible la skin anterior.

    ![Estrena la skin 2026, con navegación lateral adaptable y modos claro y oscuro.](../../docs_assets/images/Versions/Version10_0/skin2026.png)
- **La configuración de la skin 2026 se conserva al publicar los scripts de la base de datos.** La publicación mantiene la apariencia, los menús, los paneles y las páginas de la skin. Las publicaciones desde una base de datos vacía también incluyen sus elementos.
- **Personaliza los recursos de las páginas de cuenta desde tu producto.** Puedes adaptar los estilos, scripts e iconos en distintos niveles de personalización. Esto permite ajustar las páginas de acceso, registro y recuperación de contraseña.
- **Puedes cambiar entre los temas claro, oscuro y del sistema.** La interfaz y algunos elementos integrados adaptan su apariencia al tema seleccionado. Si eliges el tema del sistema, Flexygo sigue la preferencia de apariencia del dispositivo.
- **Puedes utilizar variables CSS personalizadas en tus estilos.** Esto amplía las opciones para adaptar la apariencia de la aplicación. La carga de estilos tampoco falla si falta una variable de estilos.

### Actualizador

- **Sigue las operaciones del actualizador en curso, incluidas las iniciadas por otros administradores.** Puedes ver quién dirige cada operación y seguirla en modo de solo lectura cuando la ha iniciado otra persona. El asistente evita operaciones incompatibles simultáneas, conserva los avances y permite retomar preparaciones interrumpidas desde otra pestaña.
- **Gestiona actualizaciones, reversiones, cambios y eliminaciones de versiones desde un asistente guiado.** El asistente muestra el avance y el resultado de cada operación, y permite volver a pasos anteriores durante el proceso. La pantalla de eliminación permanece visible antes de iniciar el borrado, y una operación puede completar su inicio aunque se cierre la pestaña.
- **Consulta el historial y el resultado de las operaciones, con acceso a sus registros y errores.** Puedes abrir el resultado y el registro de operaciones anteriores, consultar los detalles de errores y copiar su información técnica. El historial se puede borrar sin afectar a una operación activa, y el resultado pendiente sigue disponible al volver a la página de versiones.
- **La skin 2026 muestra la versión instalada y puede avisar de las novedades disponibles.** La versión aparece en el pie de la barra lateral y el aviso se presenta una vez por versión principal y secundaria. Desde el aviso puedes abrir el detalle de la actualización en el gestor de versiones.
- **Consulta los registros de actualización en directo con filtros y búsqueda.** El modo avanzado permite filtrar por nivel y contexto, además de buscar en los registros. La presentación del progreso y de los registros se adapta a pantallas pequeñas.
- **Resuelve conflictos de configuración durante una actualización y consulta las versiones de la aplicación.** La pantalla de conflictos permite revisar diferencias y elegir un valor inicial en blanco, anterior, personalizado o de la versión nueva. También puedes continuar una actualización interrumpida desde el punto alcanzado y ampliar el cuadro a pantalla completa.
- **Consulta y gestiona las versiones disponibles, instaladas o eliminadas desde la página de versiones.** Puedes conocer el estado de las versiones de la aplicación y gestionar las disponibles desde Flexygo. También puedes actualizar a la última versión y eliminar versiones descargadas.
- **El actualizador busca y compara correctamente los paquetes, incluidas las versiones preliminares.** Puedes configurar si se buscan versiones beta o preliminares. El actualizador reconoce su nomenclatura y las versiones de los paquetes para localizar y comparar las opciones correspondientes a la versión instalada.
- **El asistente guía la actualización de Flexygo y muestra sus pasos y progreso.** La experiencia reúne las fases necesarias para actualizar, comprobar requisitos y consultar el avance desde la aplicación. También comunica con más claridad el estado, los errores y los ajustes del proceso.
- **Actualiza la base de datos de Flexygo en entornos Docker.** El proceso permite mantener al día la base de datos cuando Flexygo se ejecuta en Docker, y muestra mensajes más descriptivos si se produce un error. También se han corregido problemas de sesión y redirección durante la actualización.
- **Instala y actualiza la base de datos desde el configurador, con seguimiento del progreso y los errores.** Las tareas pueden ejecutarse en segundo plano y mostrar sus avances y detalles de error. También se pueden validar bases de datos ERP y mantener las tareas necesarias durante el modo de mantenimiento.
- **El proceso de actualización puede actualizar la base de datos y usar credenciales de conexión.** La compatibilidad con credenciales permite realizar la actualización en instalaciones que las necesitan para conectarse a la base de datos. El proceso también admite volver a la aplicación al terminar y rutas de descarga en Linux.
- **Actualiza Flexygo en Docker desde la página de mantenimiento.** El proceso muestra información sobre la actualización y permite gestionar el mantenimiento de la instalación. Esta opción facilita actualizar Flexygo en despliegues Docker.
- **El asistente comprueba los bloqueos antes de continuar con la actualización.** La nueva comprobación se incorpora como un paso del proceso de actualización, junto con la revisión de requisitos.
- **Puedes actualizar Flexygo desde un asistente que guía el proceso y muestra su progreso.** El asistente acompaña la actualización y presenta sus distintas fases. Así puedes seguir el avance desde la propia aplicación.
- **Puedes seguir en tiempo real las operaciones de actualización, cambio y eliminación de versiones.** La comunicación entre Flexygo y la interfaz muestra el progreso de estas operaciones mientras se ejecutan.
- **Puedes revertir una actualización si el proceso no termina correctamente.** El proceso de actualización incorpora una opción para volver atrás. Así, puedes recuperar el estado anterior cuando surgen problemas durante la actualización.
- **Consulta y gestiona las versiones disponibles, instaladas o eliminadas de la aplicación.** La información de versiones está disponible desde Flexygo. Así puedes revisar qué versiones tienes y administrar las que están disponibles o instaladas.
- **Puedes revertir una actualización si el proceso no termina correctamente.** La opción de volver atrás permite recuperar el estado anterior cuando surgen problemas durante la actualización. Úsala para deshacer una actualización que no se haya completado correctamente.
- **Actualiza Flexygo desde el configurador con un proceso que instala la nueva versión y actualiza la base de datos.** El proceso descarga e instala los paquetes necesarios y despliega la nueva versión. También gestiona los cambios de base de datos y contempla operaciones que pueden verse afectadas por archivos o recursos bloqueados.
- **Puedes instalar Flexygo y actualizarlo desde las pantallas de configuración inicial.** El asistente reúne las opciones de instalación y actualización para que puedas realizar estas tareas desde la propia aplicación.

### Configuración

- **Los cambios del modo de mantenimiento se aplican al momento y permiten mostrar un aviso mientras la aplicación no está disponible.** Los administradores pueden activar o desactivar el modo desde el panel de administración. Las páginas abiertas se actualizan con el nuevo estado y, al finalizar el mantenimiento, las personas pueden volver a su página.
- **Puedes configurar el separador utilizado al exportar archivos CSV.** Ajusta esta opción para adaptar el formato de los archivos exportados a las necesidades de cada aplicación.
- **Configura las aplicaciones sin conexión desde una pantalla organizada por secciones.** La pantalla reúne objetos, menús, páginas, código, recursos y sincronización, y permite consultar el historial de sincronización. También incluye un emulador para previsualizar la aplicación en un dispositivo móvil.
- **Actualiza las pantallas de todos los usuarios conectados o selecciona sesiones concretas.** Encontrarás la acción en el menú de la información de versión. Puedes buscar y elegir usuarios para enviarles la actualización.
- **Consulta la configuración y el estado de los procesos en pantallas de solo lectura.** La configuración aparece separada para la aplicación y el servidor. También puedes revisar el estado de los procesos, la base de datos y los recursos disponibles.
- **Abre la configuración de la página desde un botón junto a la herramienta para organizar módulos.** El acceso está disponible en modo de desarrollo y sigue la página actual al navegar a otra, sin reconstruir la cabecera.
- **Configura la aplicación con valores específicos para cada entorno.** Puedes cargar y guardar ajustes propios de entornos como desarrollo sin mezclarlos con la configuración general de la aplicación.
- **Publica una base de datos desde el configurador.** La herramienta permite realizar esta tarea desde el propio proceso de configuración, sin salir de ella.

### Correo electrónico

- **La integración con el correo web permite renovar las credenciales de acceso.** Una notificación te permite gestionar la autenticación cuando sea necesario. También se corrige el proceso de renovación de credenciales.

### Despliegue

- **Exporta proyectos de gran tamaño con control sobre su contenido, plantilla y origen.** La exportación admite archivos de más de 2 GB y comprueba el espacio disponible antes de empezar. Desde las herramientas de administración, los usuarios autorizados pueden elegir carpetas y archivos personalizados; los repositorios de documentos e imágenes y otros archivos grandes se excluyen inicialmente. También se puede modificar la plantilla o recuperar los valores del producto instalado, y la ventana muestra la plantilla y la versión seleccionadas. El asistente prepara un archivo ZIP, indica el progreso y permite consultar el tiempo transcurrido; además, registra exportaciones y errores, avisa si el origen está reservado y propone un destino disponible.
- **Las operaciones con archivos funcionan entre servidores frontend y backend separados.** La aplicación puede transferir archivos entre ambos servidores durante la carga, descarga y eliminación. Este soporte también cubre el acceso mediante suplantación.
- **Puedes integrar RDS en despliegues con Docker y actualizar la configuración.** La integración amplía las opciones disponibles para el despliegue. El proceso de actualización permite aplicar cambios de configuración.
- **Publica bases de datos desde el configurador, incluso si están vacías o no tienen archivo de definición.** Además, se corrige un error al actualizar bases de datos en entornos Docker.
- **Puedes desplegar la base de datos y generar imágenes de Flexygo con Docker.** Se incluyen los archivos necesarios para desplegar la base de datos y una configuración para iniciar conjuntamente las partes de la aplicación.

### Filtros

- **En la skin 2026, los filtros se muestran como chips editables y se aplican automáticamente al cambiar sus valores.** Cada chip muestra el nombre del filtro y su valor; puedes abrirlo para editarlo o limpiar los filtros desde la fila. Los resultados se actualizan al terminar de escribir o al salir de la fila, y la actualización espera mientras haya un desplegable abierto. También puedes cambiar el estado de una casilla pulsando en cualquier parte de su chip, y la búsqueda conserva una presentación coherente con los demás controles.

### Formularios

- **Consulta en las listas los registros recién creados por otros usuarios, sin recargar la página.** Las nuevas filas aparecen cuando solicitas mostrarlas, y se aplican tus permisos y filtros antes de presentarlas. Los avisos indican las filas visibles y permanecen junto a la lista correspondiente, aunque no se muestre su cabecera. Al descartar un aviso se conservan las filas ya mostradas, y otras listas no se actualizan por ese aviso.

### Gestión de documentos e imágenes

- **Carga archivos por partes y consulta su progreso desde los controles de carga y edición.** La función está disponible en los controles de carga y en los campos de archivo. Durante la operación se informa del tamaño máximo permitido y se muestran mensajes de carga en varios idiomas.
- **Puedes gestionar documentos e imágenes desde Flexygo, con una visualización mejorada en la skin 2026.** Los gestores están disponibles para Flexygo y ERP y muestran correctamente documentos, imágenes y vistas de galería. También se traducen los textos añadidos y se incluyen cambios en la generación de informes Crystal Reports.
- **La gestión de archivos mediante proxy admite cargas y descargas con el contexto y las rutas correctos.** Las cargas mediante el proxy evitan sobrescribir archivos de forma incorrecta y conservan la identidad del usuario, el nombre y la ruta del documento. Si la aplicación y el servicio están en el mismo servidor, se evita recurrir al proxy; cuando están en servidores distintos, las descargas funcionan correctamente. También se respeta la opción de eliminar el archivo después de descargarlo.

### Gráficos

- **ECharts muestra los avisos de error en inglés y recupera el gráfico al corregir la configuración.** Si el gráfico no puede representarse, aparece un aviso en inglés. Cuando corriges la configuración, vuelve a mostrarse sin recargar la página.
- **La configuración de ECharts conserva las opciones de consulta y permite editar sus ajustes sin perder el resto.** El formulario incluye los campos propios de ECharts y los módulos HTML dejan de mostrar opciones que no les corresponden. Al cambiar el tipo de gráfico se conservan las opciones de la consulta, y puedes modificar ajustes anidados sin sobrescribir los demás. El módulo carga incluso si no tiene una configuración asociada; las opciones JSON siguen disponibles para los componentes que las utilizan.
- **Puedes configurar las series, las etiquetas, la información emergente y las líneas de referencia de los gráficos.** Los ajustes permiten cambiar el formato de los valores, añadir indicadores y elegir la posición de las etiquetas. En gráficos circulares puedes destacar un valor concreto y limitar las etiquetas de las porciones pequeñas; las líneas de referencia pueden señalar el promedio o un valor fijo. En los gráficos de anillo puedes mostrar en el centro la suma, la media, el máximo o el recuento, con el formato numérico de la cultura del usuario o sin formato.
- **Las tarjetas de estadísticas muestran tendencias, estados vacíos y cifras con separador de miles.** Puedes elegir distintos modos de visualización y colores semánticos. Las tendencias y los objetivos se activan al incluir sus datos.
- **Los temas de gráficos se adaptan a la apariencia de Flexygo y permiten personalizar su estilo.** Puedes elegir un tema monocromático o uno inspirado en shadcn, y ajustar aspectos como el espaciado, las etiquetas y la forma de las series. Los colores se adaptan al tema visual y al modo claro u oscuro, con contraste para facilitar la lectura de las etiquetas. Los cambios de tema se reflejan sin recargar la página y cada módulo conserva sus propios colores; el tema Flexygo también presenta una cuadrícula más despejada.
- **El nuevo módulo ECharts amplía las opciones de visualización y convive con el módulo de gráficos existente.** Incluye gráficos de líneas, barras horizontales, radar, burbujas, circulares, de anillo, semicirculares y de área polar. También puedes combinar tipos de serie en un mismo gráfico. Los gráficos de burbujas y radar representan correctamente datos con valores cero, negativos o sin variación.
- **Puedes sincronizar las leyendas entre gráficos ECharts y mostrar gráficos con datos de una lista.** La sincronización se aplica a los gráficos del mismo grupo. Los gráficos incluidos en listas aprovechan los datos que ya se han cargado.
- **Los gráficos ECharts ajustan su tamaño al mostrarse, al abrir una pestaña o al cambiar el tamaño del módulo.** Así mantienen un tamaño correcto aunque se inicialicen mientras están ocultos o contraídos.

### Herramientas de desarrollo

- **Los objetos externos amplían su uso en Flexygo y conservan más opciones al exportar proyectos.** Puedes consultar y actualizar datos mediante servicios REST y utilizar estos objetos en listas, formularios, calendarios, paneles Kanban e informes HTML. Las listas admiten paginación, los formularios muestran el origen de los campos de selección y, al insertar registros, se recoge la clave generada por el servicio. También puedes consultar totales y medidas, mostrar datos en paneles y conservar en la exportación los ajustes modificados, excepto los propios del entorno.
- **Incorpora controles deslizantes con el valor visible en tus aplicaciones.** El valor se confirma al soltar el control, aunque también puedes reaccionar mientras se arrastra. Está disponible entre los elementos compartidos.
- **Crea interfaces con pestañas mediante los nuevos controles compartidos.** Puedes vincular las pestañas y su contenido mediante un valor. Así se gestiona qué sección permanece activa.
- **Crea, organiza y personaliza pestañas desde la tira del diseñador.** La tira aparece aunque el objeto aún no tenga pestañas y permite añadir la primera, renombrar las existentes, elegir sus iconos o eliminarlas. Las opciones se gestionan desde la propia pestaña, sin ocupar el área de diseño.
- **Configura propiedades desde un panel de ajustes rápidos más amplio.** Al editar una propiedad, el panel se abre junto al banco de objetos y puedes cerrarlo sin volver a desplegar la navegación. Los campos tienen más espacio y el desplazamiento se mantiene dentro del panel.
- **Busca y selecciona iconos desde un explorador visual.** Puedes recorrer bibliotecas y categorías y previsualizar los iconos antes de elegirlos.
- **Define en las plantillas de listas SQL los enlaces a los registros.** La plantilla puede construir enlaces incluso cuando las filas contienen distintos tipos de objeto. Se mantienen la ordenación y el redimensionado de columnas, sin depender de la detección automática de enlaces.
- **La operación getView de la WebAPI aplica los valores predeterminados correspondientes.** Al consultar una vista, se devuelven sus valores predeterminados correctos.
- **Consulta los errores en una lista filtrable, paginada y con detalles desplegables.** Puedes combinar filtros para acotar los resultados y consultar las opciones disponibles en cada criterio. El acceso desde el panel de inicio muestra los errores de las últimas 24 horas.
- **Crea recorridos guiados señalando los elementos de cada pantalla.** El editor agrupa los pasos por pantalla, permite reordenarlos y muestra el elemento seleccionado antes de guardar. Puedes personalizar la tarjeta de bienvenida con una imagen o con la marca de Flexygo, que puede mostrarse con una animación de escritura.
- **La skin 2026 incorpora pestañas en procesos e informes, asistentes para objetos y gestores de documentos e imágenes.** Los gestores de imágenes permiten presentar el contenido como galería o como lista. Las pestañas amplían la organización de propiedades más allá de la edición de objetos.
- **Elige el origen de la nueva skin y cierra el diálogo sin cambiarlo.** El origen actual queda señalado y las opciones se distinguen con una insignia de color. Los orígenes caben en el diálogo y se muestran con sus nombres; el addon se presenta por separado. La etiqueta activa se actualiza al cambiar de origen, sin recargar la pantalla.
- **En modo de desarrollo, el menú de un módulo ofrece accesos a la configuración de su objeto.** Las opciones aparecen agrupadas al final del menú y no se muestran en la skin clásica.
- **Organiza los módulos de una página directamente desde la propia página.** Puedes mover módulos entre zonas, elegir otro diseño y crear módulos sin ir al gestor. Antes de guardar, se avisa si el cambio deja posiciones sin asignar o si la página procede de una distribución y se revertirá al actualizar.
- **Integra Flexygo con otros sistemas mediante webhooks.** Los desarrolladores pueden utilizar esta funcionalidad para conectar sus aplicaciones con otros sistemas.
- **Cambia la optimización de los paquetes desde el menú de desarrollo.** Puedes alternar este ajuste sin salir del menú.
- **Los desarrolladores pueden suscribirse a los mensajes informativos de SQL de DataManager.** La opción permite recibir esos mensajes desde código externo que utilice DataManager.
- **Los desarrolladores ya pueden realizar consultas GET con flexygo.ajax.get.** Esta función permite acceder a operaciones que requieren ese tipo de consulta. También vuelve a funcionar la consulta de versiones que utiliza el pie de página.
- **Se aplican valores predeterminados a las URL amigables.** La resolución de estas direcciones cuenta ahora con valores predeterminados.

### Informes

- **Puedes administrar temas de color y aplicarlos a los gráficos de Flexygo, incluidos los gráficos incrustados y ECharts.** Hay temas disponibles y opciones para editar su configuración. También puedes consultar el tema de un gráfico incrustado y elegir uno al generar su contenido.
- **Puedes generar informes Crystal desde proyectos de Flexygo.** La generación permite incorporar informes creados con Crystal Reports a los proyectos. También se corrigen problemas de compatibilidad y ubicación, y la carga de definiciones del editor.
- **Puedes obtener informes PDF en formato base64, tanto de Crystal Reports como de DevExpress.** Este formato permite utilizar el PDF generado desde otras funciones de la aplicación. También se corrige la lectura de parámetros al abrir un informe desde un enlace.
- **Puedes personalizar el diseñador de informes de DevExpress y exportar informes a PDF sin errores.** La personalización permite adaptar la presentación y la configuración del diseñador. Además, la lectura de parámetros ya no depende de que coincidan las mayúsculas y minúsculas.
- **Puedes diseñar informes desde Flexygo.** La aplicación incorpora un diseñador para crear y editar informes. Puedes utilizarlo para preparar informes directamente desde Flexygo.

### Inicio

- **Personaliza la disposición de los módulos y consulta un panel de inicio renovado en la skin 2026.** En cada página puedes ordenar, fijar y contraer módulos, o recuperar la distribución definida por el administrador. El panel reúne tarjetas con información sobre errores, tareas, usuarios, licencia y actividad, y muestra correctamente la fecha de caducidad de la licencia.

### Inicio de sesión

- **Puedes configurar cuántos intentos fallidos provocan el bloqueo de una cuenta y cuánto dura.** Ajusta el límite de intentos y la duración del bloqueo desde la configuración para adaptar esta protección a las necesidades de tu aplicación.
- **Puedes consultar y desactivar las noticias que aparecen en la página de inicio de sesión.** La opción permite decidir si las noticias se muestran durante el acceso a la aplicación.
- **Puedes iniciar sesión mediante Cl@ve, con mejoras en la autenticación y en sus mensajes de error.** Se corrige el tratamiento de las respuestas de autenticación y se ajustan el enlace de registro y la carga durante el acceso. También se muestran con más claridad algunos errores de acceso y cambio de contraseña.
- **Puedes iniciar sesión mediante LDAP.** La autenticación con LDAP se integra en el proceso de acceso y completa correctamente el inicio de sesión. Puedes configurar esta opción en los ajustes correspondientes.
- **Puedes iniciar sesión sin conexión mediante SSO con ABH o LDAP.** Esta opción permite acceder con esos métodos SSO cuando no hay conexión.
- **Puedes personalizar las páginas de inicio de sesión, recuperación de contraseña y registro.** La personalización también está disponible en las páginas de autenticación y gestión de contraseña de los productos creados con Flexygo.
- **Puedes iniciar sesión mediante SSO.** La opción se integra en el proceso de acceso y la pantalla no ofrece tipos de SSO que no estén disponibles.
- **Puedes gestionar el acceso a tu cuenta, con mejoras en los reintentos y la recuperación de contraseña.** Si falla la conexión durante el acceso, se vuelve a intentar hasta tres veces. También puedes iniciar sesión con la nueva contraseña después de recuperarla, y se adaptan las plantillas de acceso, registro y recuperación.
- **Puedes gestionar la contraseña de tu cuenta desde un proceso específico.** La opción permite realizar la gestión de la contraseña desde el proceso de acceso a la cuenta.
- **Puedes proteger el inicio de sesión con autenticación multifactor.** El acceso puede requerir un paso adicional de verificación. Se adaptan las pantallas, los mensajes y los correos relacionados con esta opción, así como los de registro y recuperación de contraseña.
- **Puedes crear una cuenta con un proceso de registro renovado.** Se actualizan la página de registro, sus traducciones y los correos asociados.
- **Puedes iniciar sesión y mantener activa la sesión para no volver a introducir tus credenciales.** El acceso permite usar la dirección de correo y recordar la sesión. También se ajustan el cierre de sesión, las cookies y el tratamiento de claves que difieren en mayúsculas y minúsculas; la pantalla de acceso estrena un diseño renovado.

### Instalación

- **La instalación desatendida puede completarse automáticamente al iniciar el servicio de la aplicación.** Puedes elegir si se crean, actualizan o reutilizan las bases de datos, además de indicar el nombre del proyecto y la contraseña de administración. Si falla algún paso, se comunica el error y la puesta en marcha no se da por completada.
- **El asistente configura dinámicamente cada conexión de datos activa que aún está pendiente.** Se añade un paso por cada conexión que necesita configuración. Así, el recorrido del asistente se adapta a las conexiones definidas en cada instalación.
- **El configurador permite preparar la conexión y consultar el progreso del despliegue de la base de datos.** Muestra la conexión cuando la base de datos ya está configurada e informa de las etapas del despliegue. También permite realizarlo en entornos de desarrollo.
- **Puedes iniciar la instalación de una base de datos desde el configurador.** La puesta en marcha de la base de datos se inicia desde el propio configurador de Flexygo.
- **Puedes instalar, actualizar y configurar Flexygo desde el asistente de puesta en marcha.** Las pantallas iniciales reúnen estas tareas y permiten crear la base de datos. El flujo también guía la configuración del proyecto y del correo, e incorpora el registro de usuarios.

### Inteligencia artificial

- **Se incorporan nuevos modelos GPT para las funciones de inteligencia artificial.** La lista de modelos disponibles para configurar la inteligencia artificial queda actualizada. Desde esa configuración se eligen los modelos que se utilizarán.
- **La WebAPI ofrece una descripción de IA del objeto sysOfflineApp.** Los desarrolladores pueden consultar esta descripción junto con la información del objeto a través de la WebAPI. Esto facilita conocerlo al trabajar con la aplicación móvil.

### Interfaz

- **En la skin 2026 puedes editar valores directamente en las listas y añadir filas desde la lista o el formulario.** Cada fila se guarda al salir de ella y mantiene el menú de acciones del registro. La experiencia se adapta a móviles y tabletas y está disponible en los modos claro y oscuro; la skin flexy2022 no cambia.
- **Desde el panel de control 2026 puedes consultar y editar la página de inicio de cada perfil.** Cada perfil cuenta con una vista previa esquemática basada en su configuración. La vista previa no ejecuta la página ni guarda cambios.
- **Estrena calendarios con vista anual, filtros y selección de rangos.** Incluyen una leyenda y opciones para configurar el solapamiento y el horario laboral. En la vista anual puedes consultar los registros de cada día, y los cambios de otras personas se reflejan en la vista mensual; las marcas mantienen su legibilidad en distintos modos de visualización.
- **La nueva interfaz incorpora pantallas de administración y una navegación renovada.** Incluye administración de usuarios, roles, propiedades, procesos, ajustes y otros elementos. La navegación añade acceso rápido, barra lateral plegable y panel redimensionable.
- **Los perfiles de administrador e invitado ya tienen avatar, y la foto de perfil se muestra en el pie y la cabecera.** La imagen del perfil se comparte entre ambas skins, incluida la clásica. Las iniciales y los avisos emergentes también se leen con mayor claridad.
- **Los administradores pueden organizar y redimensionar módulos directamente en una página de diseño libre.** Pueden activar este diseño conservando la disposición actual, arrastrar los módulos y ajustar su tamaño. Los cambios se pueden guardar o descartar; al salir del modo de diseño sin guardar, se puede restaurar la disposición anterior. En pantallas estrechas, los módulos pasan a una columna y mantienen el orden de lectura.
- **Los desarrolladores pueden abrir desde la paleta la configuración de la búsqueda global.** La opción aparece en la parte inferior de la paleta y permite volver al gestor de filtros genéricos para configurar la búsqueda. Solo está disponible en modo de desarrollo.
- **Al organizar una página, puedes arrastrar módulos sin cabecera y acceder a la configuración desde las herramientas de organización.** Los módulos sin cabecera muestran una franja de arrastre mientras está activo este modo. La configuración se abre en un panel lateral y deja visible el contenido que estás organizando. Si cambias de página, el modo se cierra y te avisa de los cambios sin guardar; al recargar la misma página, se reconstruye la organización.
- **Puedes mostrar los resultados de búsqueda sobre la página, sin sustituir su contenido.** El modo de paleta es opcional y agrupa los resultados por criterio, con su título, descripción y destino. La búsqueda responde con más rapidez y evita enviar al navegador datos que no necesita mostrar.
- **Las tarjetas de indicadores ofrecen descripciones, variaciones y tendencias opcionales, con una presentación más uniforme.** Cuando aparecen dentro de una lista, evitan mostrar un marco duplicado y conservan su contenido y disposición. Las tarjetas de una misma fila comparten anchura y altura, lo que alinea los valores y pies incluso si algunas incluyen información adicional.
- **Puedes acceder a las páginas de Flexygo mediante URL amigables.** Esta nueva forma de resolver las direcciones está disponible en el núcleo de Flexygo.

### Licencias

- **La página de licencias identifica Flexygo Core como producto.** Al consultar las licencias, Flexygo Core aparece como un tipo de producto disponible.
- **Puedes consultar la información de la licencia en una página específica y ver su estado en una marca de agua.** La página reúne los datos de la licencia, mientras que la marca de agua permite reconocer su estado mientras utilizas la aplicación.

### Notificaciones

- **Define qué registros de cada objeto deben generar avisos.** Puedes establecer las condiciones en la configuración del objeto, junto a sus eventos de aviso. Se combinan con las reglas de seguridad para que solo se avise cuando el registro cumpla las condiciones establecidas.
- **Recibe avisos en tiempo real de nuevas altas solo cuando puedas consultar el registro.** El aviso aparece en la esquina inferior derecha y permite abrir el registro o su lista. Se comprueban los filtros de la lista y los permisos de cada destinatario; si se crean varios registros del mismo tipo, el aviso se actualiza en lugar de acumularse. También se corrige la conexión para recibir las actualizaciones en directo.
- **Activa avisos para seguir inserciones, modificaciones y eliminaciones en los objetos que elijas.** Cada usuario recibe los avisos según su propia sesión y sus permisos. Así puedes seguir los cambios de los registros de los objetos que hayas configurado.
- **La aplicación incorpora un servicio de notificaciones push.** El servicio se integra con las funciones de uso sin conexión de la aplicación. Puedes utilizar las notificaciones push junto con esa modalidad de uso.

### Procesos

- **Gestiona las aprobaciones desde una bandeja y configura reglas de decisión y webhooks para cada objeto.** Las personas responsables reciben avisos y pueden revisar las decisiones en la bandeja o en la ficha del registro; cada persona ve las suyas y las de sus roles, mientras que los administradores pueden consultarlas todas. Las reglas permiten abrir decisiones al guardar, establecer plazos y escalarlas. También puedes enviar webhooks al guardar o eliminar, probarlos y configurar reintentos; las decisiones se pueden abrir y resolver mediante la WebAPI.
- **El planificador, las vistas de agenda y el tablero kanban muestran las tarjetas nuevas sin cambiar de pantalla.** Las tarjetas aparecen en la celda, el día o la columna que les corresponde, respetando los filtros y permisos; en el kanban, un aviso ayuda a localizarlas incluso si quedan fuera de la zona visible. Al guardar, las vistas actualizan los cambios y conservan el resto del contenido, incluida la selección y el desplazamiento; las tarjetas nuevas pueden quedar marcadas temporalmente. La actualización del calendario de planificación sin dejar la vista en blanco está disponible en la skin 2026.
- **Los administradores pueden iniciar la creación de un recorrido guiado desde su registro.** La creación abre la página del primer paso y el panel de configuración, e informa si el recorrido no tiene pasos. Las invitaciones aparecen en la página donde empieza el recorrido y se conservan las respuestas de los usuarios.
- **Los procesos integrados y los módulos activos están disponibles en el contexto de la aplicación.** Los desarrolladores de producto pueden consultar esa información desde el contexto. También se ajustan los colores que se muestran y se evitan errores al buscar rutas de procesos inexistentes.

### Seguridad

- **La skin 2026 incorpora un gestor unificado para consultar y administrar la seguridad de usuarios, roles, facultades y elementos de Flexygo.** Se abre desde el área de trabajo o desde las fichas correspondientes, con el elemento seleccionado; al cambiar de ámbito se conserva el objeto y una búsqueda nueva limpia el filtro. La tabla muestra las reglas aplicadas y la política predeterminada, explica el orden de roles, facultades y usuarios, y permite comparar permisos entre objetos y consultar condiciones. Puedes crear, modificar o eliminar reglas, añadir condiciones, bloquearlas, filtrar elementos con reglas y quitar todas las reglas de una familia; las acciones sobre roles y usuarios incluyen una vista previa. También agrupa los permisos de los campos bajo su objeto, muestra cuándo una condición de módulo determina el acceso y permite gestionar elementos de navegación identificados por su ruta. Está traducido a los siete idiomas disponibles; el acceso a la seguridad de objetos no aparece si el objeto no tiene conexión y la skin 2022 conserva la pantalla anterior.
- **Puedes controlar quién ejecuta cada proceso, incluso si no está vinculado a un objeto, y limitarlo mediante condiciones SQL.** Configura permisos para usuarios, roles y facultades desde sus pantallas de seguridad o desde la ficha del proceso. La condición se comprueba cada vez que se valida el permiso y solo autoriza la ejecución si devuelve 1 o true; si no se cumple, el proceso queda oculto en menús y barras de herramientas. La regla se aplica antes que los permisos específicos del objeto y la pantalla de seguridad permite revisar quién puede ejecutar cada proceso y qué condición lo limita.
- **Configura condiciones de seguridad de objetos eligiendo una propiedad, un operador y un valor.** El asistente muestra las propiedades disponibles y permite seleccionar valores de contexto, sin tener que recordar nombres de tablas ni marcas especiales. Antes de guardar, puedes probar la condición y consultar el SQL ejecutado.

### Seguridad de la WebAPI

- **La WebAPI y MCP limitan los datos expuestos a las propiedades definidas en cada objeto.** La opción está activada de forma predeterminada e incluye las propiedades definidas y las claves. Las respuestas y los esquemas omiten las columnas que no están disponibles en todas las instalaciones.
- **Flexygo incorpora un servidor MCP para asistentes y aplica los permisos del token en la WebAPI.** El servidor MCP está desactivado inicialmente y cuenta con permisos propios por usuario y rol, además de pantallas de administración. La WebAPI rechaza las operaciones no permitidas con un motivo y no las muestra en OpenAPI.
- **La navegación incorpora búsqueda y la WebAPI permite operaciones masivas y consultas de relaciones.** La búsqueda ayuda a localizar contenido desde la navegación. Además, los desarrolladores pueden realizar operaciones masivas y consultar relaciones a través de la WebAPI.
- **Scalar permite consultar las definiciones de API del backend y la WebAPI.** La vista ofrece a quienes desarrollan sobre Flexygo una referencia de las API disponibles. Desde ella pueden consultar las definiciones correspondientes al backend y a la WebAPI.
- **Puedes exponer entidades de la aplicación mediante la WebAPI.** La WebAPI incorpora autenticación mediante tokens y opciones para definir y consultar entidades, lo que permite conectar otras aplicaciones con Flexygo. La configuración de orígenes permitidos admite el uso de comodines.

### Tareas programadas

- **Ejecuta scripts como tareas programadas.** Puedes configurar scripts para que se ejecuten como trabajos programados. La aplicación incorpora la configuración necesaria para definirlos y ejecutarlos.
- **Puedes desactivar las tareas programadas desde la configuración de la aplicación.** Utiliza esta opción cuando quieras impedir la ejecución de las tareas programadas en la aplicación. Se configura desde los ajustes de la aplicación.

## Mejoras

### Actualizador

- **Consulta las notas completas de cada versión y descubre qué novedades recibirás al actualizar.** La página muestra las notas publicadas, incluidas las versiones preliminares, y permite revisar cinco versiones por página. También compara las novedades con la versión instalada y carga más resultados cuando los solicitas.
- **El asistente mantiene visibles el progreso y la pantalla de transición durante un cambio de versión.** La pantalla muestra el estado de la aplicación y las versiones implicadas mientras se realiza el cambio. La reconexión respeta la interrupción prevista, la animación permanece activa y los pasos del progreso se enlazan correctamente.
- **El progreso distingue los pasos completados y conserva el estado más avanzado, incluso durante una reversión.** Los pasos ya realizados aparecen como completados para que puedas identificar dónde se produjo un fallo. El progreso de una reversión no hace retroceder los pasos de la actualización ni sustituye un error final por un estado anterior.
- **El asistente presenta con más claridad los conflictos, los requisitos y el progreso de la actualización.** Los pasos de conflictos y requisitos se reorganizan, y se mejoran la pantalla de progreso y el registro de actividad. Puedes continuar si hay avisos no bloqueantes, mientras que los errores siguen impidiendo avanzar.
- **El asistente identifica quién mantiene bloqueada la aplicación, incluidos algunos bloqueos de red.** Cuando puede reconocerlos, muestra el usuario y el equipo asociados al bloqueo. Así puedes identificar quién debe liberar la aplicación antes de continuar.
- **La interfaz del progreso de actualización y de la página de versiones se ha renovado.** La página de versiones presenta la información con una interfaz mejorada y traducida, y ordena las versiones por estado y número. También se corrige un fallo que podía producirse al cargarlas.
- **Puedes consultar los registros del actualizador separados por proyecto.** Los registros se guardan en la carpeta correspondiente a cada proyecto. Así resulta más sencillo localizar los de una instalación concreta.
- **El actualizador reintenta operaciones de archivos ante fallos temporales y genera un informe si falla el despliegue de la base de datos.** Los reintentos ayudan a completar actualizaciones cuando se producen errores puntuales al gestionar archivos. El informe aporta información para revisar los problemas del despliegue de la base de datos.
- **El actualizador consulta repositorios locales y muestra un aviso si no puede obtener la última versión.** La información de un repositorio local se obtiene correctamente. Si no se puede consultar la versión disponible, el proceso indica el error en lugar de dejarlo sin explicar.

### Configuración

- **El perfil administrador pasa a ser 2026admin y la opción para cambiar de perfil solo se muestra a administradores.** Además, el menú deja de incluir la opción «Decisions». Así, cada persona ve únicamente las acciones de administración que puede utilizar.
- **Los errores de conexión a SQL se identifican correctamente ante distintos problemas de red.** Esto ayuda a distinguir entre problemas al localizar el servidor, tiempos de espera agotados y conexiones rechazadas.
- **La opción para activar los avisos de inserción ya está traducida al italiano.** La descripción mantiene en italiano el mismo formato que las opciones de avisos de actualización y eliminación.
- **El panel de configuración rápida resulta más legible en la skin 2026.** Se facilita la lectura de etiquetas, títulos y ayudas, y se ajusta el aspecto del botón para guardar los cambios.
- **Al activar SSL en la configuración del correo, se propone el puerto predeterminado y se aplica la opción seleccionada.** El asistente de configuración rellena el puerto para conexiones con SSL y respeta el valor elegido. Así, no es necesario introducir el puerto manualmente en ese caso.
- **Los grupos de configuración de la skin 2026 muestran cuántas opciones contienen y se presentan en tarjetas más claras.** La nueva disposición ocupa menos espacio y facilita localizar cada grupo. La acción para editarlo permanece visible al pasar el cursor.
- **La acción para convertir la base de datos de desarrollo indica su efecto y advierte de sus consecuencias.** El nombre ya no se confunde con el modo de desarrollo de la interfaz y la acción se identifica como peligrosa antes de ejecutarla.
- **Puedes buscar y configurar los temas de gráficos desde la administración de Flexygo.** Los temas aparecen en la navegación y en las búsquedas de configuración, y pueden asignarse a los módulos de gráfico.
- **Al activar la telemetría, se recarga la caché y se actualiza la configuración predeterminada del proyecto.** También se elimina un ajuste de telemetría de la configuración. Estos cambios afectan a la configuración inicial de la aplicación.
- **Flexygo crea una configuración predeterminada si la aplicación arranca sin archivo de configuración.** Esto permite poner en marcha la aplicación aunque todavía no se haya creado ese archivo.
- **Puedes configurar el puerto, el esquema y la URL de Flexygo.** Estos valores permiten adaptar la aplicación al entorno donde se ejecuta.

### Despliegue

- **Las traducciones de producto se conservan al publicar los datos de configuración.** La publicación puede incluir las traducciones asociadas a elementos del producto y excluir las que pertenecen a módulos de prueba.
- **Los scripts de publicación incluyen cambios recientes de configuración.** Esto permite trasladar a otras bases de datos los cambios de recorridos, colocadores, distintivos de navegación y árboles de parámetros.
- **Las instalaciones en Docker obtienen las cadenas de conexión de la configuración de la aplicación.** Así puedes configurar las conexiones desde la configuración disponible en el entorno de despliegue.
- **Los scripts de despliegue son compatibles con Linux.** Esta compatibilidad facilita el despliegue de Flexygo en entornos Linux.
- **Puedes elegir qué archivos JavaScript y CSS se incluyen en los archivos agrupados.** La agrupación separa los plugins personalizados de los del sistema y mejora la compatibilidad con instalaciones alojadas dentro de una aplicación IIS. También se corrige la carga de estilos personalizados y se evitan errores del plugin de PDF al optimizar los archivos.

### Filtros

- **Los filtros y paneles de la interfaz 2026 se adaptan mejor a móviles y muestran información más clara.** Puedes consultar los valores de las etiquetas de filtro en una ayuda emergente y usar el gestor de filtros en pantallas pequeñas. También se ajustan el panel de selección y la búsqueda del menú de desarrollo.
- **Puedes ordenar los resultados añadiendo criterios de campo y dirección.** La lista de campos permite buscar y el diálogo ocupa solo el espacio necesario. Los criterios aparecen en el orden en que se aplicarán.
- **El gestor de dependencias mantiene un contraste legible al pasar el puntero.** Las filas y etiquetas resaltadas utilizan el color de acento, tanto en el modo claro como en el oscuro.
- **El gestor de filtros organiza mejor sus paneles y facilita la edición de campos y búsquedas.** El árbol de propiedades y las filas de campos se muestran en paneles independientes, y las dependencias se identifican con texto. También puedes acceder a la seguridad de los campos, borrar búsquedas y consultar las propiedades después de guardar; el contenido se ajusta al diálogo y puede desplazarse dentro de él.

### Formularios

- **Los formularios se adaptan mejor a pantallas pequeñas y recolocan los campos cuando cambian las dependencias.** En pantallas estrechas, los campos se muestran en una sola columna y los formularios funcionan en móviles. Al mover campos al banco de propiedades se conserva su distribución, y se mantienen las alturas mínimas de imágenes y editores al cambiar su tamaño.
- **La barra de guardado permanece alineada y a la vista al desplazarte por formularios largos.** En formularios cortos conserva su posición habitual. En los formularios largos, la barra queda junto al borde inferior del cuadro y el botón Guardar no queda tapado por la etiqueta del objeto.
- **Las etiquetas de la nueva skin son más claras y se ordenan mejor junto a los campos.** En formularios, vistas y ajustes rápidos se elimina el punto final de las etiquetas. Las etiquetas largas se acortan visualmente y permiten consultar el texto completo al pasar el cursor; los interruptores permanecen junto a su etiqueta. La skin flexy2022 conserva su presentación anterior.
- **Los campos editables en línea de las listas mantienen el aspecto de los campos del formulario.** La apariencia es coherente también en las filas de inserción y en las listas editables.
- **La posición y el tamaño de los módulos se gestionan desde el configurador de páginas.** Los campos de fila, columna, ancho y alto dejan de aparecer en el formulario de relación entre página y módulo. Así, guardar un formulario abierto no sobrescribe la posición configurada; otros campos con los mismos nombres no cambian.
- **El campo de imagen aprovecha el espacio asignado y muestra la fotografía a mayor tamaño.** La imagen y el control para editarla ya no quedan recortados en campos altos. El comportamiento se adapta al espacio definido, incluso cuando el campo está vacío.
- **La edición de propiedades conserva la pestaña abierta y ofrece controles de pestañas solo en la skin compatible.** Al guardar un registro, la pestaña seleccionada se restaura y queda visible en la tira de pestañas. La creación de pestañas no se ofrece en flexy2022, donde no se pueden representar.
- **En la nueva skin, los campos y el botón Guardar se alinean con el título de su tarjeta.** La alineación se mantiene aunque cambie cuál es el primer elemento del formulario.
- **Más campos se leen correctamente en la nueva skin con el modo oscuro activado.** Los campos de listas de correo, del visor de modelos de datos y del editor de relaciones adaptan el fondo, el texto y los bordes. Los formularios de edición mantienen su tamaño y espaciado actuales.

### Gráficos

- **Los gráficos aprovechan mejor el espacio y evitan que las etiquetas se solapen con la leyenda.** En gráficos circulares, el tamaño y la posición se ajustan a la leyenda cuando no hay etiquetas exteriores. En gráficos con muchas categorías, las etiquetas se ocultan si no hay espacio suficiente para leerlas; en los circulares, no coinciden con las etiquetas exteriores.

### Herramientas de desarrollo

- **Configura más opciones en los controles compartidos.** Puedes añadir un botón para borrar la selección, elegir cuándo un diálogo ocupa toda la pantalla y controlar el foco del campo de texto. Las tarjetas de opción también admiten un color de acento.
- **Configura documentos e imágenes y accede a listas, formularios y seguridad desde el espacio del objeto.** La sección de archivos permite alternar entre documentos e imágenes y carga la configuración correspondiente. También puedes abrir la lista o un formulario nuevo; el acceso a la lista aparece cuando el objeto tiene una colección asociada.
- **La sección de diseño de vista del banco de objetos tiene un nombre más claro.** El nuevo nombre evita confundirla con el diseño del registro. Está disponible en los siete idiomas incluidos.
- **Agrupa y pliega los módulos por tipo en el panel de colocación.** Puedes mantener abiertos los grupos que estés utilizando. Al buscar, se despliegan los grupos que contienen resultados.
- **El editor de recorridos y el configurador de páginas muestran sus textos traducidos.** Ambas herramientas están disponibles en siete idiomas y, si falta una traducción, se muestra el texto original en inglés. En el editor de recorridos también se traducen los nombres de los anclajes propios de Flexygo; los textos escritos por quien configura el recorrido se mantienen.
- **Durante el desarrollo, los archivos modificados se actualizan al volver a solicitarlos.** El navegador puede cargar los cambios sin reiniciar la aplicación. La mejora también permite que los productos derivados arranquen aunque no tengan las mismas carpetas de desarrollo; en producción no es necesaria.
- **Al colocar módulos, puedes consultar detalles, localizar los ya añadidos y desplazarte por la página.** Las tarjetas muestran información del módulo y las páginas donde aparece. Puedes mover módulos incluso si no tienen cabecera y los controles de redimensionado quedan alineados con sus esquinas; el menú conserva sus clics aunque coincida con esos controles. También puedes cerrar las capas de colocación una a una con Escape y seguir moviendo módulos después de cancelar un arrastre con esa tecla.
- **El marketplace de addons presenta las opciones en filas y gestiona mejor los resultados.** La nueva disposición aprovecha mejor el espacio y mantiene a la vista la información y las acciones de cada addon. También se corrige la carga cuando falla una consulta, los controles de las tarjetas instaladas y el espacio sobrante cuando no hay resultados.
- **Quienes tienen permisos de diseño acceden directamente al modo de desarrollo y pueden desactivarlo desde el menú.** El modo conserva el estado elegido al volver a entrar y el acceso solo aparece para quienes tienen el rol correspondiente. Desactivarlo funciona aunque no haya un panel lateral que cerrar; la selección de origen presenta el addon por separado.
- **En la nueva skin, las herramientas de desarrollo están disponibles en sus áreas y las vistas previas tienen tarjeta propia.** Los ajustes de objetos, páginas y catálogos se encuentran en sus ubicaciones específicas, en vez de duplicarse en el panel lateral. El control de giro prepara la orientación de la siguiente apertura de la vista previa.
- **El acceso para crear objetos se distingue mejor y permite iniciar la creación desde el catálogo.** El botón de suma aumenta su contraste al pasar el puntero y tiene un fondo propio. Al pulsarlo se abre el asistente sin activar el acceso al catálogo que lo contiene.
- **Las vistas previas de móvil y tableta permiten elegir dispositivo y cambiar la orientación.** Puedes cambiar de dispositivo sin perder la orientación actual. El giro afecta a la vista previa abierta y no tiene efecto si no hay ninguna abierta.
- **Activa o desactiva Minificar JS/CSS desde una tarjeta del panel de control.** La tarjeta se integra con las demás opciones y permite cambiar el ajuste desde toda su superficie.
- **Los procesos admiten distintos tipos de respuesta al comunicarse con el proxy.** Esto permite gestionar las respuestas necesarias para operaciones con documentos.
- **Los desarrolladores pueden depurar el código de la aplicación con source maps.** Esta mejora facilita localizar el origen de un problema durante la depuración y está orientada a quienes desarrollan sobre Flexygo.
- **La documentación de Flexygo amplía sus contenidos sobre formación, addons y conectores.** Incluye cursos, tutoriales y documentación sobre distintos addons e integraciones.
- **La herramienta de traducción incluye textos localizados.** Esto facilita su uso a quienes trabajan con la localización de la aplicación.
- **La configuración de objetos muestra sus textos traducidos en los siete idiomas disponibles.** La traducción incluye los títulos de las secciones y sus descripciones.
- **El administrador de vistas se muestra correctamente y resulta más legible en la skin 2026.** Se corrigen la disposición de sus campos, los colores del texto y los estados al pasar el puntero. Las mejoras se aplican también al administrador cuando se abre como plantilla.

### Informes

- **Se actualiza la ruta del mapa utilizada en los informes.** El cambio afecta al mapa asociado a los informes. Los informes utilizarán la ruta actualizada al mostrarlo.

### Inicio

- **Los textos de las tarjetas e indicadores de inicio se muestran traducidos.** La traducción incluye las etiquetas de las variaciones y los textos asociados a los valores de los indicadores. Si no hay una traducción disponible, se mantiene el texto original.
- **La página de inicio y el panel aprovechan mejor el espacio y destacan información útil para actuar.** En la página de inicio, las listas y los bloques informativos se distribuyen para reducir los huecos, y los errores se agrupan por causa. En el panel, los accesos y la actividad reciente quedan más compactos, y se muestran recuentos de objetos y módulos junto con indicadores revisados para ofrecer información más relevante.
- **Puedes abrir las listas relacionadas desde los indicadores de estado de la página de inicio.** Al seleccionar un indicador, accedes a los registros correspondientes, incluidos los resultados de ejecución de trabajos. Los enlaces de las listas llevan al destino adecuado y sus totales coinciden con el contenido mostrado.
- **La nueva aplicación web de Flexygo muestra correctamente la página de inicio.** Se ajusta el acceso a la página de inicio en la nueva aplicación web. Así puedes llegar a esa página al entrar en la aplicación.

### Inicio de sesión

- **El proceso posterior al inicio de sesión se ejecuta una sola vez, también para usuarios invitados y accesos con SSO o segundo factor.** Si el proceso falla, el acceso a la aplicación no se bloquea: el error se registra y se muestra una vez en la primera página. Así, las acciones previstas se ejecutan de forma coherente en cada acceso.
- **La navegación por las páginas de cuenta y la recuperación de contraseña ofrecen información más clara.** Al volver atrás en el navegador, las páginas ya no quedan bloqueadas en estado de carga. También se distinguen los problemas de correo no confirmado y de configuración del envío, y los mensajes de error de los procesos de cuenta aparecen traducidos.
- **Puedes crear usuarios con barras invertidas en el nombre y acceder aunque la cuenta no tenga alias.** La validación admite la barra invertida al crear una cuenta y la búsqueda del usuario no falla cuando falta el alias.
- **Flexygo comprueba las condiciones de seguridad y la licencia antes de permitir el acceso.** Se tienen en cuenta la dirección IP, los bloqueos y la cobertura de los módulos activos. También se evitan errores al comprobar licencias antiguas.
- **El proceso para restablecer la contraseña estrena una experiencia renovada y redirige a las direcciones correctas.** Se actualizan la página, los mensajes y los correos relacionados con el restablecimiento. Los enlaces y las rutas funcionan bajo una ruta base, y al terminar puedes iniciar sesión con una confirmación.
- **Puedes iniciar sesión mediante SSO y mantener la sesión activa con la opción de recordar el acceso.** Flexygo también comprueba que los módulos activos estén cubiertos por la licencia. El cambio incluye ajustes relacionados con informes y procesos prolongados.
- **La página de inicio de sesión adopta el estilo habitual de Flexygo y permite usar Intro para acceder.** El diseño aplica los estilos estándar de Flexygo y evita intentar cargar scripts que no existen.

### Instalación

- **La configuración inicial de Flexygo estrena un flujo para registrar y configurar la aplicación.** El recorrido incluye la configuración del proyecto, la base de datos y el correo, además del registro de usuarios. También se ajustan la presentación del flujo y el tratamiento de campos vacíos, como el nombre del proyecto o el título del estado.
- **El asistente de instalación presenta sus pasos en un orden distinto.** El cambio modifica el recorrido que sigues durante el proceso de instalación.
- **Se ajustan los textos de estado que aparecen durante la instalación.** Los mensajes del instalador reflejan el estado del proceso con textos actualizados.

### Inteligencia artificial

- **Las solicitudes a los servicios de inteligencia artificial dejan de esperar indefinidamente.** Si el servicio no responde, la espera termina al alcanzar el límite establecido. Así se evita que una solicitud quede pendiente sin fin.

### Interfaz

- **La skin 2026 renueva el correo, las notificaciones y el chat de IA para facilitar su uso.** En el correo puedes consultar las carpetas junto a la lista, filtrar por mensajes leídos, buscar por asunto y abrir mensajes en un panel lateral. Las notificaciones incluyen filtros y una opción para marcarlas todas como leídas; el chat de IA se muestra en un panel compacto. La skin flexy2022 mantiene su aspecto actual.
- **El menú de acceso rápido de la interfaz 2026 permite volver al panel de control o al cuadro de mando desde cualquier página.** Los accesos aparecen en una sección de administración del menú, incluso si el menú del proyecto no incluye ese grupo.
- **La skin 2026 mejora el uso de ventanas, listas, combos y asistentes, y añade ajustes para trabajar en móviles y sin conexión.** Se recuperan las ayudas de los botones y el asistente de plantillas, y se ordenan mejor las listas y las pestañas. También se facilita la creación de objetos sin conexión, se mejoran los combos y los ajustes de propiedades, y se adaptan la navegación lateral y los controles al uso en móviles.
- **Las nuevas instalaciones de Flexygo comienzan con la interfaz 2026 y los nuevos usuarios heredan el perfil de quien los crea.** Las instalaciones existentes conservan su perfil y los productos no se ven afectados. El perfil de administración 2026 solo se ofrece a usuarios con el rol de administradores.
- **Puedes copiar los detalles técnicos de un error sin mostrar avisos adicionales.** El botón confirma visualmente la copia mediante un cambio de icono. También está disponible como elemento compartido para desarrolladores.
- **Las pantallas de carga utilizan una nueva animación.** La animación muestra el logotipo o el indicador predeterminado según el contexto de carga.
- **Los menús desplegables se muestran sin quedar recortados por el área que los contiene.** Su posición se ajusta respecto al control que los abre, incluso dentro de zonas con desplazamiento.
- **Los calendarios de flexy2022 recuperan una presentación similar a la anterior.** Se ajustan las vistas mensual y anual, la posición de los avisos emergentes y la alineación de la vista de planificación. El cambio solo afecta a la skin flexy2022.
- **Las vistas de la skin 2026 muestran sus campos y etiquetas con más claridad.** Las etiquetas y los valores largos se mantienen en una línea y se recortan cuando no caben. También mejora la separación entre filas y la presentación de los encabezados.
- **Los logotipos pueden adaptarse al tema claro u oscuro y se muestran correctamente aunque sus rutas incluyan barras invertidas.** Puedes usar una variante del logotipo para el tema oscuro, y el cambio de modo se aplica al actualizar la página. Si no existe una variante oscura, se conserva el logotipo configurado.
- **Los paneles laterales de la skin 2026 muestran una barra superior que separa sus controles del contenido.** El título queda a la izquierda y los controles a la derecha, con el contenido debajo. Así se distinguen mejor las acciones del panel lateral de los iconos del módulo que lo contiene.
- **El emulador de la aplicación sin conexión mejora la consulta en distintos dispositivos y tamaños de ventana.** Representa un iPhone 17 o un Samsung Galaxy S25 según el dispositivo seleccionado y mantiene visible el modelo mientras se desplaza el resto de la pantalla. También reorganiza sus secciones en ventanas estrechas; el tamaño de la vista de la aplicación no cambia.
- **La navegación lateral de la skin 2026 sigue accesible al consultar la configuración sin conexión.** La barra lateral se pliega en lugar de desaparecer y recupera el estado guardado al cargar otra página.
- **La pantalla de seguridad ofrece una presentación más clara y espaciada en la skin 2026.** Los títulos, las etiquetas, los controles y el botón de guardado se distinguen mejor dentro del módulo.
- **Las marcas de tarjetas nuevas se distinguen mejor en la skin 2026.** El ajuste mejora la visibilidad tanto en las tarjetas del tablero como en el indicador de la columna.
- **Los enlaces y las etiquetas pulsables se distinguen mejor en la skin 2026, tanto en modo claro como oscuro.** Los enlaces reales aparecen subrayados y con un color propio. Las etiquetas que actúan como controles usan el color del texto y se subrayan al pasar el cursor.
- **Las opciones de administración del módulo se abren en paneles laterales más cómodos de usar.** La configuración dispone de más espacio para mostrar campos y botones en una sola fila, mientras los paneles de seguridad, eventos y relación con la página conservan parte de la pantalla visible. Los paneles se adaptan al contenido y ordenan mejor los controles de su cabecera.
- **Las ramas del panel de navegación 2026 muestran si están abiertas o cerradas y se despliegan sin cerrar el panel.** Los indicadores reflejan el estado de cada rama y los iconos mantienen el orden esperado. Al abrir un grupo, se cierra cualquier menú de opciones que estuviera abierto; las opciones finales siguen navegando a su destino y cerrando el panel.
- **El engranaje abre el módulo y las demás opciones de administración quedan agrupadas en otro menú.** En modo de desarrollo, el menú adicional reúne las opciones de seguridad, eventos y relación con la página. La opción de configurar el módulo deja de estar en ese menú.
- **Los avisos y las indicaciones del configurador de páginas se leen mejor en la skin 2026.** Se aumenta el contraste del aviso sobre el origen de la página y de la indicación que aparece al situar el cursor sobre un módulo.
- **La interfaz muestra traducidos los textos disponibles en listas, gestores, gráficos, menús y plantillas.** Se aplican las traducciones existentes a títulos, botones, encabezados de columnas, tipos de elemento, mensajes de inicio y temas de gráficos. También se traducen menús, asistentes y plantillas de la skin 2026; se conservan los nombres asignados por cada usuario y los identificadores necesarios para ordenar y guardar anchos.
- **La navegación de la skin 2026 conserva el pie del menú al actualizarse.** Así, las opciones del pie no desaparecen al refrescar el menú.
- **El menú de perfil de la skin 2026 reúne las opciones para cambiar idioma, contraseña, foto y tema, y cerrar sesión.** Se accede desde el pie de página y muestra los datos de la persona conectada. Puedes cambiar entre tema claro y oscuro, abrir las acciones de idioma, contraseña y foto directamente, y cerrar sesión; la opción de idioma muestra la bandera correspondiente cuando está disponible. Los cambios y las opciones del menú responden correctamente y pueden mostrarse en los distintos idiomas.
- **La línea temporal y el calendario anual se presentan con mayor claridad en la skin 2026.** Se distinguen mejor los elementos seleccionados y los días con actividad. El día actual queda señalado y los avisos emergentes y estados vacíos resultan más legibles.
- **La rejilla mantiene en su sitio los controles de las filas al interactuar con ellas.** Al seleccionar una fila, sus iconos ya no se desplazan fuera de la zona visible. Se mantiene la posibilidad de arrastrar y guardar la disposición.
- **La vista de parámetros se integra mejor con la skin 2026.** La nueva presentación se aplica únicamente a esta vista, sin alterar cómo se muestra en la skin Flexygo 2022.
- **Las páginas de la skin 2026 equilibran el espacio entre el contenido y los bordes de la ventana.** Se deja margen bajo el último módulo, se compensa el espacio que ocupa la barra lateral y se reduce el hueco sobre las páginas. La marca queda visualmente diferenciada de los accesos laterales, y el cursor de redimensionado solo aparece en las zonas correspondientes.
- **Las visitas guiadas ofrecen recorridos traducidos y revisados por las pantallas del producto.** Los administradores pueden configurarlas con pasos y añadirlas a una página como un módulo; su seguridad determina quién puede verlas y reiniciarlas. Los pasos señalan elementos concretos, realizan acciones predefinidas y se adaptan a las pantallas disponibles; el recorrido continúa aunque una pantalla o un paso no esté disponible. Los textos se muestran en el idioma seleccionado y la visita ya no deja capas que bloqueen la página al navegar.
- **Los elementos relacionados se muestran como etiquetas compactas y más fáciles de recorrer.** Los enlaces a objetos, procesos e informes ocupan menos espacio y se distinguen mejor al pasar el cursor. También se evita resaltar como interactivos los títulos que no realizan ninguna acción.
- **La agenda distingue mejor los eventos y mantiene visible su categoría en los modos claro y oscuro.** Los eventos se presentan como tarjetas y su color se conserva como una marca lateral. También se actualizan los controles y la cuadrícula para que encajen con la nueva skin.
- **La nueva skin reúne las acciones del módulo junto al título y oculta las opciones secundarias en un menú.** La acción principal queda a mano y la barra ocupa menos espacio, especialmente en módulos estrechos. Las opciones menos frecuentes siguen disponibles desde el menú de tres puntos.
- **La agenda muestra el mes junto a los eventos del día seleccionado.** Se distinguen mejor los días, los eventos y la fecha actual, y el panel permite consultar todos los eventos del día. El selector de mes también se adapta al idioma y al modo de color.
- **Los textos y las etiquetas de la skin 2026 se leen mejor en los modos claro y oscuro.** Se ajustan los colores de textos semánticos, secundarios y resaltados para mejorar el contraste sin cambiar el aspecto de fondos y botones. Las etiquetas de las tarjetas también mantienen una legibilidad adecuada en ambos modos.
- **Los campos de solo lectura muestran una separación clara entre filas y un guion cuando no tienen valor.** La vista evita que los valores vacíos dejen huecos y presenta las filas sin confundirlas con campos editables. También se simplifica la separación visual de los encabezados.
- **La búsqueda de la paleta indica que está trabajando y diferencia los resultados vacíos de los errores.** Mientras se cargan los resultados, la pantalla conserva su espacio y muestra una indicación de espera. Si no hay coincidencias o la búsqueda falla, cada situación se comunica por separado.
- **Los módulos se ajustan mejor a las columnas estrechas en la nueva skin.** La barra de herramientas puede ocupar varias líneas en vez de ensanchar el módulo y provocar desplazamiento horizontal en la página. A anchuras mayores, la distribución no cambia.
- **Las acciones de cada fila aparecen al final de la lista, en una columna más ajustada a sus botones.** La columna ocupa menos espacio vacío y deja más sitio para los datos de la lista.
- **En la nueva skin, las cabeceras de los módulos muestran menos botones de maximizar y minimizar.** Los botones de actualizar y de contraer se mantienen. La skin clásica conserva sus botones actuales.
- **Las listas editables muestran la fila para añadir datos a la altura del resto y sitúan las acciones en una columna final más ajustada.** Los botones quedan al final de cada fila para que los datos se lean antes. La disposición también se mantiene alineada entre las dos skins.
- **La nueva skin muestra una barra de progreso mientras se carga una página.** La barra permite seguir el avance de la navegación y sustituye al indicador giratorio durante la carga.
- **El tablero Kanban presenta columnas y tarjetas más claras y legibles, también en modo oscuro y al mover o archivar tarjetas.** Las tarjetas se distinguen mejor del fondo y las zonas para soltarlas ocupan toda la columna, incluso si está vacía. Al arrastrar una tarjeta, el área de archivo queda contenida en su franja y se identifican mejor las zonas de destino.
- **Los menús emergentes de filtros, procesos y notificaciones tienen una apariencia más coherente.** Comparten el estilo de sombra y borde, por lo que las distintas superficies quedan mejor integradas entre sí.
- **El planificador presenta una barra de herramientas y un panel lateral más ordenados.** Los botones destacan la opción activa y reservan el rojo para las acciones de peligro. Las etiquetas y los tipos del panel se leen mejor, se alinean con la cuadrícula y ocupan solo el espacio necesario; además, el panel se pliega sin retardo visual.
- **Las pestañas de los módulos tienen un diseño más claro y se pueden recorrer cuando no caben en pantalla.** La pestaña activa se distingue mejor y el selector de módulos adopta el estilo de los demás controles. Las pestañas largas pueden desplazarse sin salirse del módulo.
- **Los elementos de navegación y los módulos se integran mejor con el modo oscuro.** Los mapas, los gráficos de red y la agenda dejan de mostrar fondos claros que contrastaban con el resto de la aplicación. En la nueva skin también se adaptan mejor al modo oscuro los controles y elementos de navegación; la skin clara no cambia.
- **Los submenús se muestran anidados y la última columna puede ocupar el espacio libre de la tabla.** Al redimensionar una tabla, la columna final se reajusta para evitar huecos. Los menús contextuales conservan la jerarquía de sus opciones.
- **Las actualizaciones sustituyen los archivos web afectados y el acceso gestiona mejor las interrupciones del servidor.** Los archivos que no han cambiado pueden conservarse en el navegador. También se traducen las etiquetas del inicio de sesión único (SSO).
- **La advertencia muestra la lista de archivos que faltan.** Cuando la aplicación detecta archivos ausentes, presenta sus rutas de forma individual para que puedas identificar cuáles revisar.
- **La interfaz de Flexygo Core adopta un diseño más actual.** Se renueva la paleta de colores y se actualizan elementos de la navegación y del menú de usuario. El menú incluye las traducciones que faltaban y el nuevo estilo se aplica en distintas skins.
- **Los errores de la aplicación se muestran de forma más coherente y clara.** Se unifica su presentación en distintas operaciones para que los mensajes resulten más consistentes.
- **La información de versión se abre en una pestaña nueva.** Así puedes consultar esos datos sin abandonar la pestaña en la que estabas trabajando.
- **Se corrigen errores de licencia, idioma y exportación, y se mejora la personalización de estilos.** Puedes configurar el idioma de inicio; si no lo indicas, se usa el del navegador. Cambiar de idioma ya no requiere volver a iniciar sesión y también se corrigen la marca de licencia y la exportación de cambios de base de datos.
- **Las páginas nuevas incorporan ajustes visuales.** Se han retocado los estilos de algunas páginas para mejorar su presentación.

### Licencias

- **La página de licencias presenta con más claridad los datos de la licencia, las extensiones y el código de solicitud.** El nivel de tarifa aparece junto al tipo de licencia cuando corresponde, y se confirma cuándo se copia el identificador. También se aclaran los enlaces del portal y el estado de las extensiones; si falta el código de solicitud, se indica y no se ofrece copiarlo.
- **Se amplía el reconocimiento de tarifas para productos adicionales.** La gestión de licencias contempla nuevas tarifas para más productos compatibles, lo que permite administrar también sus licencias.
- **Puedes validar una licencia que incluya varios nombres de equipo.** Indica los nombres en la lista de equipos de la licencia y sepáralos con el carácter «|».
- **La configuración genera correctamente la licencia de evaluación.** El cambio afecta al proceso de puesta en marcha y a la licencia de evaluación que se obtiene durante ese flujo.
- **Flexygo puede generar licencias para aplicaciones en producción.** Así puedes disponer de una licencia al ejecutar la aplicación en ese entorno.

### Notificaciones

- **Mantén los avisos de error o advertencia en pantalla hasta que los cierres.** Esta opción es útil cuando necesitas leer un mensaje con atención antes de descartarlo. Puedes configurarla para evitar que el aviso desaparezca automáticamente.

### Procesos

- **ABH Sign puede leer documentos a través del proxy de la aplicación.** Esto permite gestionar documentos cuando el proceso de firma y la aplicación están en servidores distintos.
- **Al revisar errores, puedes consultar también las excepciones encadenadas de los procesos.** La traza del error incluye información de las excepciones producidas dentro de procesos encadenados, lo que facilita revisar el fallo.
- **Los parámetros de procesos e informes se conservan al guardar su configuración.** Así se mantienen los valores asociados a procesos e informes cuando se guarda la configuración.

### Rendimiento

- **Se comprimen los recursos servidos y se reflejan los cambios de estilo en la versión de sus archivos.** La compresión reduce los datos transferidos al cargar la aplicación, especialmente en conexiones lentas. La dirección de los archivos de estilo cambia cuando estos se modifican.
- **La recarga silenciosa de la caché actualiza también los datos almacenados en memoria.** La información en memoria se actualiza como parte de la recarga, sin necesidad de realizar una acción adicional para refrescar esos datos. Así, la operación incluye tanto la caché como los datos guardados en memoria.

### Seguridad

- **Los cambios de roles y permisos se aplican en las siguientes solicitudes, sin que el usuario tenga que volver a iniciar sesión.** La actualización incluye los permisos asociados a roles y los de objetos, páginas e informes. Así, los cambios de seguridad se reflejan en la siguiente petición del usuario.
- **La API de licencias separa la consulta y la actualización del estado, y envía el código de activación en la solicitud.** Este cambio afecta a las integraciones que consultan o actualizan el estado de la licencia y a las que envían un código de activación. Revisa esas integraciones para adaptarlas a la nueva forma de realizar las solicitudes.
- **El catálogo de reglas de seguridad incluye páginas, plantillas e informes.** También indica las familias que no tienen una vista disponible y evita que las plantillas aparezcan repetidas en los resultados.
- **Los objetos nuevos muestran su nombre en singular y se incorpora una vista para las facultades de página.** La vista permite consultar las facultades de página mediante la capa de seguridad. Al crear objetos, se utiliza el nombre singular en lugar del título plural de la colección.
- **La página de cambio de contraseña muestra los errores y las validaciones del formulario.** Así puedes localizar los problemas al introducir o actualizar la contraseña y corregirlos antes de continuar.

### Seguridad de la WebAPI

- **La WebAPI bloquea temporalmente las IP que superan 50 intentos fallidos de token por minuto.** El límite predeterminado se puede modificar mediante la configuración correspondiente. La protección distingue la IP del cliente, también cuando accede a través del frontend, y se aplica a accesos con contraseña, LDAP, SSO y renovación de token; los usuarios bloqueados no pueden acceder.
- **El acceso a las herramientas de WebAPI requiere una licencia válida.** La validación impide utilizar herramientas de WebAPI que no estén cubiertas por la licencia de Flexygo. De este modo, el acceso a esas herramientas queda sujeto a la licencia disponible.
- **La documentación de la WebAPI y OpenAPI es más clara y se genera considerando solo los objetos expuestos.** La especificación organiza mejor las operaciones, respuestas y modelos de error, y agrupa los esquemas compartidos. También muestra la descripción de los objetos cuando está disponible e indica desde qué valor empiezan las páginas y cómo escribir fechas en los filtros. Los objetos sin permisos de acceso a través de la WebAPI no se procesan al generar la documentación.
- **La WebAPI incluye la fecha, la hora y la zona horaria del servidor en la información de contexto.** Estos datos se añaden a la información de contexto existente, sin sustituirla. Así, las aplicaciones pueden consultar también la referencia temporal del servidor.
- **Los contadores de los nodos de navegación se calculan sin enviar sus consultas al navegador.** La aplicación envía los identificadores de los nodos y recibe los valores de los contadores. El cambio se aplica a los nodos que tienen un contador configurado.
- **La WebAPI devuelve las fechas con un formato actualizado.** El formato que reciben las aplicaciones consumidoras cambia para permitir un tratamiento coherente de las fechas al integrar la WebAPI.
- **Flexygo vuelve a comprobar las condiciones de seguridad de los usuarios que ya han iniciado sesión.** Si esas condiciones dejan de cumplirse, el acceso no se mantiene como si siguieran vigentes. La comprobación permite que la sesión refleje los cambios en las condiciones de seguridad.

### Skins

- **La skin 2026 mejora el contraste y la legibilidad de controles, menús, tarjetas y avisos.** Se ajustan elementos como los diálogos, las opciones de peligro, los botones de proceso, los pasos de los asistentes y los avisos del planificador. También se leen mejor los enlaces atenuados y los mensajes de validación.
- **La skin 2026 utiliza la tipografía Geist en lugar de IBM Plex.** El cambio modifica la apariencia de los textos y reduce el tamaño de los archivos tipográficos utilizados por esta skin.
- **En la skin 2026, los procesos con texto visible permanecen en la barra de herramientas.** Los procesos sin texto siguen agrupados en el menú de tres puntos. Así, puedes localizar los procesos principales sin recargar la barra.
- **Los filtros y el menú de acciones ocupan menos espacio sobre el contenido en la skin 2026.** Los controles se sitúan junto al título del módulo. Si no hay filtros, no se muestra una fila vacía.
- **Los elementos estándar del panel comparten el mismo margen lateral en la skin 2026.** Se armoniza la alineación de las vistas, los módulos compactos y las tarjetas del panel. Las plantillas de base de datos no cambian.
- **El enlace para crear una tarjeta en el kanban recupera su efecto gradual al pasar el cursor.** El ajuste se aplica al kanban cuando utilizas la skin 2026.
- **Puedes abrir el organizador de módulos desde la cabecera de la skin 2026.** Tienes a mano un botón junto a las notificaciones y el atajo Ctrl+Mayús+M. El acceso respeta los permisos de diseño.
- **Puedes acceder a las variables de las skins sin distinguir mayúsculas y minúsculas.** La búsqueda encuentra una variable aunque escribas sus letras con mayúsculas o minúsculas diferentes.
- **Puedes mostrar un logotipo distinto según el modo de interfaz.** La aplicación selecciona la variante correspondiente al modo activo. También se corrige la ruta del logotipo principal y el logotipo predeterminado pasa a tener fondo gris.

### Tareas programadas

- **Los iconos del planificador mantienen un contraste legible en los modos claro y oscuro.** Los iconos de configuración y actualización adaptan su color al modo de visualización seleccionado.

## Correcciones

### Actualizador

- **El asistente conserva el estado correcto del proceso ante avisos tardíos o simultáneos.** Los avisos de preparación no marcan como fallido un cambio de versión ya iniciado, y el progreso no reactiva operaciones caducadas. Si una operación deja de estar activa durante la preparación, no se aplica la versión descargada.
- **El asistente puede iniciar operaciones aunque no se carguen los consejos y evita descargas duplicadas.** Si la fuente de consejos no responde, el proceso continúa sin esa información, salvo que canceles el inicio. Si se vuelve a cargar la página durante la descarga de un paquete, el segundo proceso espera a que termine el primero.
- **El asistente se adapta mejor a teléfonos y ventanas estrechas.** Los títulos, los pasos y los nombres de procesos se ajustan al espacio disponible, y los errores largos no desbordan el diálogo. En móviles, la lista de versiones se desplaza dentro de su panel.
- **La extracción de paquetes funciona aunque ya exista la carpeta de la versión instalada.** Antes, esa carpeta podía impedir procesar el paquete durante una actualización. También se corrige la lectura de rutas con distintos separadores.
- **El actualizador gestiona correctamente la selección de versión y los errores del proceso.** Se corrigen la consulta de la última versión disponible y el cambio de versión para evitar problemas durante la actualización. También se informa de las operaciones fallidas para facilitar la recuperación.
- **El actualizador registra correctamente la hora de inicio de las sesiones.** La hora coherente evita discrepancias en las sesiones iniciadas desde la herramienta de actualización.
- **Salir de la información de versiones durante la carga ya no cierra la sesión de la aplicación.** Si se abandona la página o se pierde la conexión durante la carga, el asistente puede continuar sin finalizar la sesión.
- **El actualizador evita errores cuando la aplicación está en modo de desarrollo.** La corrección permite utilizar el actualizador en este modo sin que se produzcan los errores indicados.

### Configuración

- **Flexygo gestiona correctamente las conexiones seguras cuando se accede a través de un proxy inverso.** Esto evita redirecciones repetidas en instalaciones donde el proxy termina la conexión segura. Si lo necesitas, puedes desactivar la redirección automática con el ajuste HttpsRedirection.
- **Se corrigen la disponibilidad de las pantallas administrativas según la skin y la apertura de la página de objetos 2026.** La skin 2022 deja de mostrar pantallas exclusivas de la skin 2026, y se corrige el contador de esa sección. La página de objetos 2026 también puede abrirse sin seleccionar un objeto y utiliza la conexión de datos configurada para ella.
- **Se recuperan traducciones y se corrige la lista de registros de ejecución.** Se completan las traducciones de las nuevas pantallas administrativas y se unifican los scripts de traducción utilizados en la instalación. La lista incluye el identificador necesario para reconocer cada fila.
- **Los administradores pueden configurar y quitar los distintivos de los nodos de navegación.** Los nodos con distintivo se pueden abrir y sus propiedades se pueden editar desde la interfaz, incluso si ya existían.
- **Puedes copiar y pegar la contraseña de administrador en el configurador.** Se corrige el problema que impedía pegarla durante el proceso de configuración.
- **La configuración ya no entra en un bucle durante la carga.** También se evita que varias solicitudes simultáneas interfieran entre sí al acceder a la configuración.
- **Se corrigen los errores al guardar dependencias y consultar valores de licencia.** Ambas operaciones vuelven a funcionar correctamente desde la configuración.
- **El script de tablas de configuración incluye las columnas que faltaban.** La creación o actualización de estas tablas cuenta así con las columnas previstas.

### Conversaciones

- **Se corrigen errores de tipo que impedían procesar correctamente los datos de las conversaciones.** Así, puedes consultar y mantener conversaciones sin que estos errores interrumpan su uso.
- **Las conversaciones se abren con registros identificados mediante claves de texto.** Esto permite trabajar con registros de ese tipo sin que falle la apertura. Además, su presentación mejora con la nueva skin en los modos claro y oscuro.
- **Las menciones en conversaciones funcionan correctamente y sus notificaciones incluyen los valores predeterminados de la página.** Puedes mencionar a otras personas al participar en una conversación. La persona mencionada recibe la información predeterminada correspondiente a la página.
- **Puedes enviar correos con archivos adjuntos aunque la aplicación use servidores distintos.** Se corrige el tratamiento de los adjuntos en esta configuración para que el envío del correo pueda completarse correctamente.

### Correo electrónico

- **El asistente de configuración del correo aplica correctamente la opción SSL seleccionada.** Al configurar una cuenta de correo, se respeta si quieres usar una conexión SSL. Así, la conexión utiliza la opción elegida en el asistente.
- **La ventana de consentimiento del correo permanece abierta si se produce un error.** Puedes seguir consultando el mensaje de error y decidir cómo continuar sin que desaparezca al cerrarse la ventana.

### Despliegue

- **El despliegue de la base de datos prepara correctamente los cambios en los iconos.** Se evitan errores relacionados con los cambios en las tablas de iconos durante el despliegue.
- **Las publicaciones de bases de datos excluyen módulos, páginas y ubicaciones de prueba.** Se corrige el filtro para que estos elementos no se incluyan en las bases de datos publicadas. Así, no aparecen en la aplicación tras una publicación.
- **La detección de la carpeta del producto admite distintas direcciones y utiliza el archivo del tema.** La carpeta se identifica mediante el archivo del tema. La dirección configurada puede terminar en una barra o no sin afectar a la detección.
- **En Linux se gestionan correctamente las rutas y se muestra el motivo real de los errores al validar tokens.** Los errores de validación dejan de aparecer como respuestas vacías, lo que facilita identificar qué ha fallado.
- **El despliegue de bases de datos respeta la opción de ignorar permisos cuando no se incluyen objetos compuestos.** El ajuste se aplica tanto al crear como al actualizar la base de datos.

### Documentación

- **Los enlaces de documentación redirigen a la documentación del producto correspondiente.** La redirección tiene en cuenta la documentación disponible para cada producto derivado.

### Filtros

- **Las listas con descripciones funcionan correctamente con búsquedas y conexiones de datos diversas.** Se corrige el uso de condiciones que incluyen columnas no seleccionadas y de búsquedas alojadas en otra conexión. Si no se puede obtener una descripción, la lista sigue mostrando el resto de los datos.
- **Los campos y demás elementos quedan alineados dentro de las etiquetas de filtro.** El texto, los campos y las casillas mantienen una alineación precisa, también cuando la barra se muestra a tamaño normal. El ajuste funciona en los modos claro y oscuro y no cambia la skin 2022.
- **Los filtros dependientes conservan sus valores preestablecidos y se actualizan al cargarlos.** Al cargar el filtro, se ejecutan las dependencias para actualizar los controles relacionados. También se mantienen el valor y el texto que ya estaban seleccionados.
- **Puedes guardar dependencias de filtros y recibir una confirmación clara.** En el modo de lista, los controles y sus acciones quedan mejor identificados. Los mensajes de confirmación están disponibles en varios idiomas, incluido el español.
- **En la skin clásica, las opciones de selección múltiple vuelven a abrirse debajo del campo.** La lista desplegable deja de aparecer desplazada a la izquierda del campo correspondiente.
- **Los filtros funcionan correctamente cuando se aplican con un valor vacío.** La corrección evita que el filtrado falle si el valor elegido está vacío.

### Formularios

- **Al crear un registro desde el calendario, se conserva el día seleccionado.** La fecha ya no se desplaza al día anterior al abrir el registro. La corrección se aplica tanto al planificador como al calendario mensual.
- **Puedes guardar valores booleanos en propiedades numéricas de tipo byte sin errores de conversión.** La corrección afecta a la inserción de datos y permite completar el guardado de esos valores correctamente.
- **Los procesos y los informes sin descripción muestran «General» en su pestaña principal.** La pestaña tiene así un nombre reconocible aunque falte la descripción. También se corrigen textos relacionados con la apertura de informes.
- **Los iconos y valores de los campos quedan alineados en las vistas.** La corrección se aplica a los campos que muestran un icono junto al valor, también cuando la vista utiliza una plantilla.
- **La fila para añadir datos en una lista editable queda alineada con su encabezado.** El espacio interior coincide a ambos lados, por lo que las etiquetas y los campos mantienen la misma alineación.
- **Los campos de código de las vistas de plantillas muestran su contenido en la nueva skin.** El editor tiene una altura limitada y permite desplazarse por el resto del contenido sin solaparse con otros campos.
- **Los botones de llamada, correo y enlace quedan dentro de su campo en la nueva skin.** Los botones se centran dentro del borde del campo, como los controles desplegables.
- **Los iconos de algunos campos vuelven a mostrarse junto al campo sin desplazar las filas siguientes.** La corrección afecta, por ejemplo, a la descripción, las fechas y el código de las tarjetas de acciones. Así, el icono no ocupa una línea propia ni tapa la etiqueta siguiente.
- **El selector de base de datos funciona aunque no se haya definido el tamaño de página.** Puedes utilizar el selector sin configurar previamente ese tamaño.
- **Se corrige un error al utilizar valores decimales.** La corrección evita el error que podía aparecer al trabajar con esos valores.

### Gestión de documentos e imágenes

- **El control de imágenes funciona al guardar archivos en una carpeta externa.** Puedes utilizar el control de imágenes aunque los archivos se guarden fuera de la ubicación habitual, en una carpeta externa.
- **Se corrige la descarga de archivos con determinadas extensiones.** Los archivos que antes no podían descargarse por su extensión vuelven a estar disponibles mediante descarga.

### Gráficos

- **Los módulos EasyInfo sin objeto asociado pueden utilizar variables de contexto.** Así puedes incluir en sus consultas datos como el usuario o la fecha actuales, aunque el módulo no tenga un objeto asociado.

### Herramientas de desarrollo

- **Los objetos creados sobre una tabla nueva se pueden volver a cargar correctamente.** La corrección evita que la configuración del origen de datos impida abrir el objeto después de crearlo.
- **La documentación se redirige correctamente en productos derivados.** Se corrige la resolución de las rutas al utilizar recursos web estáticos, para que se encuentre la documentación correspondiente a cada producto.
- **Se corrige la carga de estilos LESS en los plugins personalizados.** Los desarrolladores pueden utilizar estos estilos en sus plugins sin los problemas corregidos.
- **Se corrigen las variables LESS personalizadas y la ruta de los archivos exportados con cambios de base de datos.** Los estilos personalizados se procesan correctamente y la exportación de cambios de base de datos utiliza la ruta corregida.
- **Se corrigen los errores de análisis y carga del editor Monaco.** También se corrige la carga de las definiciones TypeScript en el editor.
- **Se evitan errores al publicar la base de datos desde Visual Studio con el asistente de configuración.** Esto facilita a los desarrolladores publicar la base de datos durante la configuración de Flexygo.
- **Puedes cambiar el orden de los nodos sin errores al cargar sus propiedades.** Se corrige el comportamiento durante la edición de nodos y la carga de sus propiedades.
- **Se corrige el clonado de barras de herramientas.** Al clonar una barra de herramientas, se conservan correctamente sus datos.
- **Los cambios en propiedades se guardan correctamente y el asistente abre el administrador adecuado.** Mover propiedades entre pestañas y reordenarlas funciona también en procesos e informes. Al editar la configuración de un proceso, informe u objeto, ya no se abre un administrador vacío o sin título.

### Informes

- **Los proyectos existentes mantienen la compatibilidad al generar informes en PDF con su código actual.** Las soluciones ya creadas pueden seguir generando documentos sin adaptar el código generado. Se conserva el funcionamiento que utilizaban antes.
- **Los informes vuelven a mostrarse con su nombre.** Se muestra el nombre del informe en lugar de su descripción. Así resulta más fácil identificarlo en la aplicación.
- **Los informes de DevExpress funcionan correctamente en aplicaciones instaladas bajo una ruta base.** Se resuelve la ubicación de los informes en este tipo de instalaciones. Así, sus rutas se interpretan correctamente al utilizarlos.
- **Se corrige la detección de conexiones de DevExpress.** Al configurar informes de DevExpress, los desarrolladores pueden descubrir correctamente las conexiones disponibles. Esto facilita su selección durante la configuración.
- **Se corrige la carga de los parámetros de los informes.** Los parámetros vuelven a interpretarse correctamente al abrir un informe. Esto permite cargarlo con los valores previstos.
- **Se corrige un error visual de DevExpress al aplicar traducciones.** La interfaz del diseñador de informes se muestra correctamente con las traducciones aplicadas. Así, los textos traducidos no provocan el problema visual anterior.
- **Se corrigen errores del diseñador de informes y de la exportación a PDF.** Ahora puedes diseñar informes y generar su versión en PDF sin los problemas corregidos. Esto facilita completar ambas tareas desde Flexygo.

### Inicio

- **El nodo «Objetos predeterminados» vuelve a mostrarse en el área de trabajo 2026.** El nodo vuelve a estar disponible en el área de trabajo 2026. Desde esa vista puedes acceder de nuevo a los objetos predeterminados.
- **La aplicación ya no queda atrapada en un bucle de solicitudes durante el inicio.** Se corrige un problema que podía bloquear el arranque. Así puedes acceder a la aplicación sin que ese bucle impida iniciar.

### Inicio de sesión

- **Si el servidor rechaza una sesión, Flexygo te devuelve al inicio de sesión en lugar de mostrar un error.** Esto puede suceder cuando la sesión deja de ser válida para la configuración actual. Al volver a la pantalla de acceso, puedes iniciar sesión de nuevo.
- **Se corrige el acceso con MFA y SSO y se conserva la contraseña de administrador al actualizar.** La actualización ya no sustituye la contraseña del administrador. También se resuelven problemas que podían afectar al inicio de sesión con autenticación multifactor o SSO.
- **Se corrige la redirección de SSO cuando el proveedor no está disponible.** El acceso gestiona esta situación sin dirigir al usuario a un destino incorrecto.
- **Se restablece el inicio de sesión en portales múltiples mediante conexiones HTTP.** Los usuarios pueden volver a acceder a portales múltiples cuando la conexión no es segura.
- **Se corrige la carga de los recursos estáticos y del icono de las páginas de cuenta.** Los archivos necesarios para mostrar estas páginas se cargan correctamente.
- **Se corrige el acceso en instalaciones alojadas bajo una ruta personalizada o una subcarpeta.** Las cookies de autenticación funcionan correctamente en estas instalaciones. También se ajustan el tema predeterminado y la pantalla que aparece al recuperar una conexión.
- **Tras iniciar sesión con SSO o Cl@ve, vuelves a la dirección prevista.** También se corrige la redirección al completar la autenticación o la verificación en dos pasos.
- **El inicio de sesión muestra los errores y evita cargar archivos de estilo o scripts inexistentes.** Así resulta más fácil identificar los problemas al acceder y se evita que la carga de archivos ausentes interfiera con el proceso.

### Instalación

- **La pantalla de diagnóstico muestra únicamente las pruebas de instalación.** El listado se centra así en las comprobaciones relacionadas con la instalación y facilita la revisión de sus resultados.
- **Puedes consultar el progreso y el estado de la instalación aunque esté activo el modo de mantenimiento.** Esto permite seguir el despliegue y saber cuándo ha terminado sin que el mantenimiento impida consultar su avance.
- **La instalación puede descargar bases de datos desde un repositorio NuGet privado con credenciales.** Si no se puede acceder al repositorio, se informa del error en lugar de dar por completada una base de datos vacía.
- **El asistente de configuración conserva el paso completado al continuar.** Tras enviar la información de un paso, puedes seguir con la configuración sin volver a la pantalla de conexión.
- **Puedes publicar desde cero la base de datos de configuración sin errores por los temas de gráficos.** La publicación incorpora también los elementos necesarios para gestionar las versiones de la aplicación en instalaciones nuevas.
- **La instalación de addons reconoce correctamente las versiones beta.** Se interpreta correctamente el sufijo «-beta» de la versión del addon.
- **La instalación funciona cuando la aplicación y el servicio de instalación están en servidores distintos.** Se corrige la comunicación cifrada entre ambos, para evitar fallos en esa configuración.
- **Se corrige un fallo al configurar la base de datos durante la instalación.** El asistente vuelve a cargar la configuración antes de continuar con este paso.
- **La instalación obtiene correctamente el nombre del proyecto y la versión del producto.** Estos datos se utilizan al crear o actualizar la base de datos, para que correspondan al producto instalado.
- **La instalación de la herramienta de bases de datos en Linux ya no falla por los certificados.** Se puede completar la instalación en este entorno sin el error relacionado con los certificados.
- **Se corrigen errores durante la instalación, el inicio de sesión con SSO y el guardado de vistas.** Las correcciones evitan fallos al realizar estas tres operaciones.
- **Se corrigen errores que podían interrumpir la instalación.** Estos ajustes facilitan completar la puesta en marcha de la aplicación.
- **La configuración de la instalación ya no falla al reciclar el grupo de aplicaciones.** El configurador puede continuar con la puesta en marcha sin quedarse bloqueado en ese caso.
- **Se corrigen errores en los scripts de estructura de la base de datos.** La vista de empleados y la sintaxis de los scripts quedan corregidas, para que puedan aplicarse durante la preparación de la base de datos.
- **Se corrige un error en aplicaciones alojadas en subdominios con una ruta adicional.** La corrección evita problemas al acceder a aplicaciones cuya dirección incluye un subdominio y una ruta adicional.
- **Se corrige la obtención de los datos de conexión tras la instalación.** La corrección afecta a la recuperación de esos datos una vez completado el proceso.
- **Se corrige un error de compatibilidad que afectaba a Windows 10.** La aplicación ya no muestra el error de plataforma no compatible en Windows 10.

### Integraciones

- **Se gestionan los errores al obtener tokens de Google, correo y Office.** La mejora afecta a la obtención de tokens de esos servicios.

### Inteligencia artificial

- **Se corrige la visualización de la interfaz de inteligencia artificial en distintos tamaños de pantalla.** La disposición de los elementos se adapta correctamente al tamaño de la pantalla. Esto mejora la presentación de la interfaz en diferentes dispositivos.
- **Los procesos de inteligencia artificial vuelven a ejecutarse cuando falta el contexto global.** Se corrige el fallo que podía impedir su ejecución en esa situación. Así, la ausencia de ese contexto ya no bloquea los procesos.
- **Las solicitudes a ChatGPT procesan correctamente sus respuestas.** Se corrige el fallo que impedía interpretar algunas respuestas. Esto permite que las solicitudes afectadas continúen su procesamiento con normalidad.

### Interfaz

- **Se corrigen la visualización del kanban y del editor HTML, el logo del menú y otros detalles de la interfaz.** También se ajusta la respuesta de los días del calendario anual y de las celdas de información al interactuar con ellas. Además, vuelven a funcionar las opciones para desactivar las tareas programadas y las tareas de script.
- **EasyInfo y los gráficos se cargan correctamente para usuarios que no son diseñadores.** Estos módulos ya no fallan cuando el usuario no tiene acceso a las herramientas de depuración. Así, puede utilizar EasyInfo y consultar gráficos sin ser diseñador.
- **Se corrigen problemas de distribución en formularios, panel de control, calendario anual e iconos de flexy2022.** Los campos de los formularios vuelven a distribuirse correctamente y el panel de control conserva sus módulos. El calendario anual se adapta al ancho disponible y permite abrir los días con un toque; también se corrigen su apariencia y algunos iconos.
- **La ayuda de los botones bloqueados aparece junto al botón, incluso dentro de ventanas.** El mensaje ya no se desplaza fuera de lugar ni provoca barras de desplazamiento inesperadas.
- **Los iconos vuelven a mostrarse correctamente en servidores Linux y Docker.** Se corrige un problema que impedía cargar los archivos de iconos en sistemas que distinguen entre mayúsculas y minúsculas.
- **Las vistas de la aplicación sin conexión y las descripciones de sus módulos se muestran correctamente.** También se traducen las descripciones de los módulos y las páginas a los idiomas incluidos en la aplicación.
- **Los combos de las filas de una lista se ajustan al ancho de su columna en la skin 2026.** Cuando el espacio es limitado, los botones de la fila permanecen visibles en lugar de quedar cortados.
- **Las vistas genéricas siguen mostrándose al mover un módulo o cambiar la distribución de la página.** Estas acciones ya no dejan la vista vacía por un error al volver a cargarla.
- **La documentación se abre desde el grupo Ayuda de la skin 2026.** Ayuda queda como grupo de navegación y Documentación como una opción independiente que abre la página correspondiente.
- **La búsqueda de la barra lateral funciona también cuando está desplegada en modo compacto.** Al pulsar el botón de búsqueda, la barra se despliega y el cursor queda situado en el buscador.
- **La foto de perfil se actualiza al cambiarla desde el menú, sin recargar la página.** La imagen nueva también se refleja en los elementos de la interfaz que muestran el perfil. El cambio funciona al editar la foto desde el menú o desde el formulario de usuario.
- **Las acciones de cada fila vuelven a mostrarse en la posición esperada en cada skin.** En flexy2022 aparecen antes de las columnas y en la skin 2026 después de ellas. Los encabezados y las filas mantienen la misma alineación.
- **La invitación a un recorrido no aparece encima de otros avisos o ventanas.** Si la pantalla está ocupada, la invitación espera a que quede libre. Si no se libera durante un minuto, aparecerá en la siguiente visita.
- **Los errores de una página ya no quedan ocultos tras una pantalla en blanco.** Los fallos se envían al sistema de gestión de errores y la aplicación responde con un error 500. Así, el problema queda registrado en lugar de descartarse silenciosamente.
- **En la skin 2022 ya no aparece un contador sin formato en las tarjetas de grupos de ajustes.** El contador sigue visible como distintivo en la skin 2026. En la skin 2022, donde no tiene un diseño adecuado, queda oculto.
- **Las tarjetas informativas vuelven a ocupar el ancho de su espacio y muestran sus datos con más contraste en la skin 2022.** Los iconos recuperan su posición al borde de cada tarjeta y los datos importantes se leen mejor. Las fichas informativas independientes mantienen su tamaño habitual.
- **Se corrigen la traducción del registro de errores cuando la lista está vacía y la ordenación desde el menú de opciones.** La lista de errores muestra traducidos sus textos y filtros aunque todavía no haya registros. También se corrige el fallo intermitente al ordenar desde el menú de opciones.
- **Las páginas de la skin 2026 presentan menos barras de desplazamiento innecesarias y un espaciado más uniforme.** Se ajustan márgenes y alturas para aprovechar mejor el espacio y evitar barras que no hacen falta. También se corrigen controles de redimensionado, ayudas del modo de colocación y módulos cuyo contenido no se mostraba correctamente; las columnas reales siguen pudiéndose ajustar.
- **Se eliminan las barras de desplazamiento vacías y se corrige la respuesta a la invitación de un recorrido.** Las barras dejan de aparecer cuando el contenido cabe en el módulo, pero se mantienen si una tabla realmente necesita espacio. Las opciones de la invitación permiten responder y conservar la decisión.
- **Los menús del objeto dejan de repetir procesos y acciones que ya aparecen en la barra.** Se conserva la opción configurada expresamente en la barra, incluidas acciones que abren una ventana nueva. Además, el menú vuelve a abrirse en su posición correcta sin desaparecer.
- **El menú de tres puntos del catálogo de objetos vuelve a mostrar sus opciones.** Desde ese menú puedes acceder a las seis acciones disponibles, incluida la opción para ordenar.
- **Al ajustar el ancho de una columna, la columna de acciones ya no se expande con el espacio sobrante.** Se corrige el reparto del ancho disponible en las listas para evitar que la columna de acciones quede desproporcionada.
- **Las tarjetas de plantillas de la skin clásica son legibles en modo oscuro.** El color del texto se adapta al fondo oscuro sin alterar la apariencia en modo claro.
- **Las listas editables y sus combos se mantienen dentro del ancho disponible.** Se limita el ancho de la lista y de sus elementos para que las columnas y las acciones no queden desplazadas fuera de su contenedor.
- **En la nueva skin, las etiquetas mantienen su color al pasar el puntero por encima.** En los elementos interactivos, el fondo indica que puedes interactuar sin reducir la legibilidad del texto.
- **La copia de excepciones al portapapeles funciona con caracteres especiales.** Ciertos caracteres del texto de la excepción ya no interrumpen la acción de copia.
- **Se corrigen claves duplicadas que podían interferir con las traducciones de la aplicación.** Las cadenas afectadas se traducen correctamente aunque compartan una clave en los datos de la aplicación.
- **La aplicación se vuelve a cargar automáticamente cuando el servidor se recupera de una desconexión.** Si se rechaza la conexión, la aplicación comprueba si el servidor vuelve a estar disponible y se recarga cuando se recupera.
- **Se evitan errores al convertir fechas con valores extremos.** La conversión valida los valores mínimo y máximo para evitar excepciones relacionadas con la diferencia horaria.
- **Se corrige la compatibilidad de fechas y se evita que los estilos de una página afecten a otras.** Las fechas mantienen el formato esperado por la interfaz existente. Además, los estilos de las páginas Blazor quedan aislados para no alterar el aspecto del resto de páginas.
- **El contenido con estilos integrados se genera y se muestra correctamente en Linux.** Se corrigen los problemas que afectaban a la creación del paquete de estilos y a su visualización en ese entorno.
- **Se corrigen rutas de recursos y redirecciones para que las páginas alojadas bajo subdominios carguen correctamente.** Las imágenes, los archivos, los scripts y los estilos utilizan sus rutas relativas correctas, también cuando la aplicación se aloja en IIS bajo un subdominio.
- **Se corrigen errores al cargar elementos de la interfaz agrupados en JavaScript.** La corrección afecta a varios elementos de la interfaz, como los menús y las pestañas.
- **Se corrige la traducción de cadenas cuando existen claves primarias duplicadas.** Las cadenas afectadas se traducen correctamente aunque compartan una clave primaria.
- **Se corrigen las rutas de estilos y scripts para que se interpreten correctamente.** Los archivos CSS y JavaScript de los recursos de la aplicación pueden cargarse con rutas normalizadas.

### Licencias

- **Se corrige la identificación del producto entre Flexygo y su framework.** La licencia reconoce el mismo identificador en ambos, lo que evita discrepancias al comprobar su estado.
- **Se corrige un error que podía impedir generar una licencia.** El fallo se debía a una discrepancia en el nombre del proyecto, que ya no impide completar la generación.
- **Se corrige la generación de licencias en bases de datos publicadas desde el configurador.** Se resuelve un problema que podía afectar a las licencias generadas durante la publicación. No es necesario realizar ningún ajuste adicional.

### Notificaciones

- **Abre los correos no leídos desde la campana y consulta el contador actualizado al momento.** Al abrir un correo, la campana se cierra y el contador de mensajes no leídos disminuye sin esperar a una actualización posterior.
- **El sonido de las notificaciones deja de repetirse cuando llegan muchas a la vez.** La corrección evita que el timbre suene continuamente durante la ejecución de procesos programados.

### Procesos

- **El proceso ERP posterior al inicio de sesión también se ejecuta para el usuario invitado.** Así, los accesos de invitados siguen el mismo flujo posterior al inicio de sesión que los demás usuarios.
- **Las descargas desde procesos integrados gestionan correctamente la descodificación y las referencias.** La corrección afecta a la gestión de documentos descargados durante la ejecución de un proceso integrado.
- **ABH Sign interpreta correctamente la información de créditos de firma.** Esto evita errores al procesar los créditos recibidos por el servicio de firma.
- **La descarga de la plantilla y la importación de datos desde Excel funcionan correctamente.** Puedes descargar la plantilla desde el proceso de importación, preparar en ella los datos y cargarlos sin los fallos corregidos.
- **Los trabajos en estado de error se reinician para volver a ejecutarse.** Así, los trabajos que no terminaron correctamente pueden ponerse de nuevo en marcha.
- **Se corrigen errores de traducción y serialización al usar la aplicación sin conexión.** Los datos se procesan correctamente cuando se trabaja en modo sin conexión.
- **Se corrige el funcionamiento de la integración de Redsys.** La integración vuelve a procesar correctamente sus operaciones.
- **Los procesos de creación de parámetros encuentran las bibliotecas aunque estén en distintas rutas.** La corrección permite localizar la biblioteca necesaria aunque no esté en la ruta esperada.
- **Se corrigen errores al ejecutar procesos con código C#.** Los procesos que incorporan código C# pueden ejecutarse sin los fallos corregidos en esta versión.
- **Se reducen los errores en operaciones que tardan más en completarse.** Flexygo espera más tiempo antes de dar por fallida una petición, lo que ayuda en procesos prolongados.

### Rendimiento

- **Se evitan las recargas repetidas y simultáneas al recuperar el servicio tras un reinicio.** Esto reduce la carga durante la recuperación y mejora la estabilidad. También evita reconstrucciones innecesarias de datos al cargar páginas.

### Seguridad

- **Puedes iniciar sesión y acceder a descargas e informes mediante un token incluido en la URL.** El token se mantiene durante los redireccionamientos. Así, si el enlace solicita iniciar sesión antes de abrir una descarga o un informe, se conserva la autorización para continuar.
- **Se gestionan los errores al obtener tokens de Google, Mail y Office.** La gestión de errores se aplica a la obtención de tokens en las tres integraciones.
- **Se corrige la validación del acceso después de recargar los datos del servidor.** Así se evita que falle la validación del token en esa situación.

### Seguridad de la WebAPI

- **Las listas de la WebAPI no muestran textos asociados a propiedades ocultas.** También se omite la descripción de los valores de búsqueda cuando la propiedad está marcada como oculta. Así, esos textos no aparecen en las respuestas de la WebAPI.
- **Los filtros de seguridad por rol se aplican correctamente y se rechazan las condiciones no válidas en la WebAPI y MCP.** Las búsquedas relacionadas ya no hacen que las listas omitan el filtro de seguridad. Las condiciones que podrían eludirlo se rechazan, en lugar de devolver registros no autorizados.
- **Las inserciones por la WebAPI ejecutan los procesos asociados a propiedades aunque estas no tengan dependencias.** Los valores calculados por esos procesos quedan disponibles para las dependencias que se evalúan después. Así, el resultado de la inserción puede tener en cuenta esos valores calculados.
- **Las respuestas de error de la WebAPI comunican el estado HTTP correspondiente.** Las aplicaciones que consumen la WebAPI pueden identificar correctamente el resultado de una petición. Por ejemplo, pueden distinguir entre una falta de permisos y un objeto inexistente.
- **Se muestran errores detallados al definir la WebAPI y se evita una pantalla en blanco al acceder como invitado sin permiso.** Los usuarios invitados que no están autorizados reciben una respuesta en lugar de quedarse ante una página vacía. Cuando falla una definición de la WebAPI, también se ofrece información más clara.
- **La definición de la WebAPI solo muestra objetos habilitados.** Las vistas y sus colecciones dejan de aparecer en la definición cuando sus objetos están deshabilitados. Así, la documentación refleja qué objetos están disponibles para su exposición.
- **Se corrige la redirección de la WebAPI.** Al acceder a la WebAPI, la redirección vuelve a funcionar correctamente y permite llegar al destino esperado.
- **Se corrige la validación de tokens de la WebAPI.** Las solicitudes que utilizan tokens pueden superar correctamente la validación. Esto permite acceder a la WebAPI cuando el token es válido.
- **La WebAPI acepta correctamente las peticiones que se envían sin contenido.** Se corrige el envío de peticiones con el cuerpo vacío para que no falle por no incluir contenido.

### Skins

- **Los estilos de la skin 2026 se cargan comprimidos y reflejan correctamente las actualizaciones en producción.** Se corrige también la visualización de los avisos de error. Así, los cambios de estilo no quedan ocultos por versiones anteriores guardadas en el navegador.

### Tareas programadas

- **Se corrige el procesamiento de la información de las tareas programadas.** La información se procesa con un formato que evita los fallos anteriores. Así, las tareas programadas pueden funcionar correctamente.
- **Los objetos relacionados con tareas programadas respetan la seguridad configurada.** La corrección evita que estos objetos queden sin las medidas de seguridad que les corresponden. De este modo, se aplica la configuración de seguridad prevista al trabajar con ellos.

## Obsoleto

### Configuración

- **Ya no se puede enlazar un objeto desde la pantalla de aplicaciones sin conexión.** Las opciones para crear y clonar objetos siguen disponibles en esa pantalla.

### Seguridad de la WebAPI

- **Se retiran las funciones obsoletas de comprobación de conexión y mantenimiento.** Dejan de estar disponibles el endpoint de comprobación de conexión y el proceso para activar el modo de mantenimiento. Las integraciones que los utilicen deberán dejar de depender de esas funciones.
