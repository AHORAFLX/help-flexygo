# Versión 10.0

La skin Flexygo 2026 añade barra lateral adaptable; se separan los despliegues de interfaz, backend y base de datos, y asistentes de IA consultan datos, modifican registros y ejecutan procesos con autorización.

## Novedades

### Skins

- **La skin Flexygo 2026 rediseña la aplicación e incorpora una barra lateral adaptable y nuevos accesos.** Renueva pantallas, menús, listas, formularios, paneles y diálogos, con nueva tipografía, colores, espaciado y controles. La barra lateral se puede contraer e incluye accesos a alertas y perfil; también ofrece el atajo Ctrl+K y mantiene disponible la skin anterior.

    ![La skin Flexygo 2026 rediseña la aplicación e incorpora una barra lateral adaptable y nuevos accesos.](../../docs_assets/images/Versions/Version10_0/skin-2026.png)
- **La skin 2026 conserva su configuración al publicar los scripts de la base de datos.** La publicación incluye la apariencia, los menús, los paneles y las páginas de la skin, también al partir de una base de datos vacía. Así, la instalación nueva puede arrancar con esos elementos disponibles.
- **Puedes personalizar los recursos de las páginas de cuenta desde tu producto.** Adapta estilos, scripts e iconos en distintos niveles de personalización. Esto permite ajustar las páginas de acceso, registro y recuperación de contraseña a cada producto.
- **Puedes cambiar entre los temas claro, oscuro y del sistema.** La interfaz y algunos elementos integrados adaptan su apariencia al tema seleccionado. Si eliges el tema del sistema, Flexygo sigue la preferencia de apariencia del dispositivo.
- **Puedes utilizar variables CSS personalizadas en tus estilos.** Flexygo admite variables CSS propias al aplicar los estilos. Además, la carga de estilos no falla si falta una variable LESS en las variables CSS.

### Integraciones

- **Conecta asistentes de IA para consultar datos y, si lo autorizas, modificar registros y ejecutar procesos.** El administrador activa MCP en Administración > Seguridad > WebAPI y asigna el permiso a usuarios o roles. Al conectar Claude o ChatGPT desde el menú del perfil, cada usuario autoriza el acceso y decide si será de solo lectura o también podrá cambiar datos. Los asistentes respetan los permisos del usuario, se pueden consultar o desconectar desde «Asistentes conectados» y las herramientas indican si consultan, modifican o permiten reintentos. El endpoint MCP registra asistentes a partir de sus metadatos para evitar duplicados, incluye el emisor en la respuesta de inicio de sesión y mantiene disponible el registro dinámico de clientes. Además, los procesos que superan diez minutos ya no fallan y se mantiene la compatibilidad de la aplicación con MCP.

    ![Conecta asistentes de IA para consultar datos y, si lo autorizas, modificar registros y ejecutar procesos.](../../docs_assets/images/Versions/Version10_0/mcp-assistant-panel.png)

### Actualizador

- **Consulta las novedades de cada versión y descubre qué cambios recibirás al actualizar.** La página permite revisar las notas completas de las versiones posteriores a la instalada, incluidas las preliminares, y distinguir las novedades. Las notas publicadas del paquete Backend aparecen ordenadas, y el historial carga cinco versiones cada vez que solicitas más.
- **Actualiza, revierte o cambia de versión desde un asistente que guía el proceso y muestra su progreso.** El asistente reúne las fases de la operación, sus ajustes y los mensajes de estado y error en la propia aplicación. Puedes seguir el avance y consultar el resultado de lo que has iniciado.
- **Sigue las operaciones del actualizador en curso, incluidas las iniciadas por otros administradores.** La pantalla indica quién dirige cada operación y permite a los demás administradores seguirla en modo de solo lectura. Se evitan operaciones incompatibles simultáneas y se conservan los pasos completados; también puedes retomar una preparación interrumpida desde otra pestaña.
- **Consulta el resultado de cada actualización o eliminación y accede al registro del proceso.** La pantalla indica qué ha ocurrido y qué versión queda en uso, y permite copiar los detalles técnicos del error, incluido su código. Puedes alternar entre el resumen y el registro incluso mientras la operación sigue en curso; al terminar, se ocultan los controles que ya no necesitas.
- **Consulta registros en directo desde el modo avanzado del asistente de actualización.** Puedes buscar y filtrar los registros por nivel y contexto, y consultar los registros separados por proyecto. La presentación se adapta a pantallas pequeñas para facilitar el seguimiento.
- **Resuelve conflictos de configuración durante una actualización y continúa desde el punto alcanzado.** Al resolver un conflicto manualmente, puedes elegir un valor en blanco, el anterior, uno personalizado o el de la versión nueva. También puedes ampliar el diálogo a pantalla completa y reintentar una actualización interrumpida sin empezar desde cero.
- **Consulta y gestiona las versiones disponibles, instaladas o eliminadas desde la página de versiones.** La información se presenta con una interfaz renovada, traducida y ordenada por estado y número de versión. La página conserva una presentación correcta al cambiar el estado de una versión o eliminarla.
- **La skin 2026 muestra la versión instalada y puede avisar de las novedades disponibles.** La versión instalada queda visible en el pie de la barra lateral. El aviso aparece una vez por versión principal y secundaria, y permite abrir el detalle de la actualización desde la interfaz.
- **Actualiza la base de datos de Flexygo en entornos Docker.** El proceso admite credenciales de conexión y ofrece mensajes más descriptivos cuando se produce un error. También se han corregido problemas de sesión y redirección durante la operación.
- **Instala y actualiza la base de datos desde el configurador.** El configurador incorpora estas tareas para que puedas realizarlas desde la propia herramienta de configuración.
- **Actualiza Flexygo en una instalación Docker desde la página de mantenimiento.** El proceso muestra información sobre la actualización y permite gestionar el mantenimiento de la instalación.
- **Consulta el historial de operaciones del actualizador desde la información de versiones.** Puedes abrir el resultado y el registro de una operación anterior, o borrar el historial sin afectar a una operación activa.
- **Puedes revertir una actualización si el proceso no termina correctamente.** La opción para volver atrás permite recuperar el estado anterior cuando surgen problemas durante la actualización.
- **Actualiza a la última versión disponible y elimina versiones descargadas desde el actualizador.** Puedes aplicar la versión más reciente disponible y retirar versiones que ya no necesitas desde el mismo lugar.
- **Puedes actualizar, revertir o cambiar de versión desde el asistente de actualización.** El asistente muestra el avance y el resultado de las operaciones. También permite que el inicio de una operación termine aunque se cierre la pestaña durante el proceso.
- **Puedes actualizar, revertir o cambiar de versión desde el asistente de actualización.** El asistente muestra el avance y el resultado de las operaciones. Las reversiones utilizan el nombre del proyecto de la propia aplicación para ejecutar el proceso.
- **Puedes actualizar, revertir o cambiar de versión desde el asistente de actualización.** El asistente muestra el avance y el resultado de las operaciones. El progreso recibido después de que una operación haya caducado ya no la reactiva.
- **El asistente de actualización comprueba los requisitos antes de iniciar el proceso.** La nueva pantalla reúne las comprobaciones previas a la actualización. Así puedes revisar los requisitos antes de continuar.
- **Puedes revertir una actualización si el proceso no termina correctamente.** El proceso de actualización incorpora una opción para volver atrás. Así, puedes recuperar el estado anterior cuando surgen problemas durante la actualización.

### Configuración

- **Los administradores pueden consultar y editar la configuración de la instalación desde una pantalla específica, con comprobaciones antes de guardar.** La pantalla reúne opciones, niveles de registro, conexiones y credenciales; también agrupa las conexiones y muestra el estado de sus comprobaciones. Señala los campos que requieren atención y explica los valores no válidos; las contraseñas aparecen enmascaradas.
- **Los administradores pueden activar el modo de mantenimiento y mostrar un aviso mientras la aplicación no está disponible.** El control está disponible en el panel de administración y el aviso se actualiza al cambiar el estado. Las páginas abiertas se actualizan, y quienes visitan el sitio pueden volver a su página cuando termina el mantenimiento.
- **Puedes configurar el separador que se utiliza al exportar archivos CSV.** Elige el formato que mejor se adapte a cada aplicación. La opción modifica el separador de los archivos exportados.
- **Configura aplicaciones sin conexión desde una pantalla organizada por secciones.** Desde la pantalla puedes gestionar objetos, menús, páginas, código, recursos y sincronización, además de consultar el historial de sincronización. El emulador permite ver cómo queda la aplicación en un dispositivo móvil.
- **Actualiza las pantallas de todos los usuarios conectados o selecciona sesiones concretas.** La acción se encuentra en el menú de acciones de la información de versión. Puedes buscar usuarios y elegir a quién enviar la actualización.
- **Los administradores pueden consultar la configuración y el estado de los procesos en pantallas de solo lectura.** La configuración se muestra por separado para la aplicación y el servidor. También se puede consultar el estado de los procesos, la base de datos y los recursos disponibles, sin modificar esos valores desde estas pantallas.
- **Puedes abrir la configuración de la página desde un botón junto a la herramienta para organizar módulos.** El acceso está disponible en modo de desarrollo. Al navegar a otra página, sigue mostrando la configuración de la página actual sin reconstruir la cabecera.
- **Configura la aplicación con valores específicos para cada entorno.** Puedes cargar y guardar ajustes propios de cada entorno, como desarrollo. Así, esos valores se mantienen separados de la configuración general.
- **Publica una base de datos desde el configurador.** La herramienta de configuración incorpora esta tarea, por lo que puedes realizarla desde allí sin recurrir a otro acceso.

### Correo electrónico

- **La integración con el correo web puede renovar sus credenciales de acceso.** Se añade una notificación para gestionar la autenticación y se corrige el proceso de renovación de credenciales.

### Despliegue

- **Puedes exportar proyectos grandes y elegir qué contenido personalizado incluir y qué plantilla utilizar.** La exportación admite proyectos de más de 2 GB, comprueba el espacio disponible y muestra el progreso y el tiempo transcurrido. Desde el área de administración, los usuarios autorizados pueden exportar la aplicación instalada como un proyecto de producto en un archivo ZIP; las exportaciones y los errores quedan registrados. Puedes ajustar la plantilla del producto instalado, revisar la versión y el origen, y elegir carpetas y archivos personalizados; los repositorios de documentos e imágenes y otros archivos grandes se excluyen de forma predeterminada.
- **Las operaciones con archivos funcionan entre frontend y backend cuando están en servidores separados.** Puedes cargar, descargar y eliminar archivos en esta configuración. El soporte también cubre el acceso mediante suplantación.
- **Puedes desplegar en Docker las distintas partes de Flexygo, incluida la base de datos, y configurar la integración con RDS.** Se incluyen archivos para generar imágenes de Flexygo e iniciar conjuntamente sus componentes, así como para desplegar la base de datos. Las cadenas de conexión se obtienen de la configuración de la aplicación y el flujo de actualización permite aplicar cambios de configuración.
- **Puedes publicar bases de datos desde el configurador.** El proceso admite bases de datos vacías o sin archivo de definición. También se corrige un error al actualizar bases de datos en entornos Docker.

### Filtros

- **La skin 2026 presenta los filtros como chips editables y aplica los cambios automáticamente.** Cada chip muestra el nombre del filtro y su valor; puedes editarlo o limpiar los filtros desde la fila. Los cambios se aplican al terminar de elegir opciones o salir de la fila, y la búsqueda de texto se realiza al terminar de escribir. También puedes cambiar el estado de una casilla pulsando en cualquier parte de su chip; la skin anterior conserva su comportamiento de filtros.

### Formularios

- **Consulta en la lista los registros que otros usuarios acaban de crear, sin recargar la página.** Las nuevas filas aparecen cuando solicitas que se muestren y se aplican tus permisos y filtros. En páginas con varias listas, el aviso aparece junto a la lista correspondiente, aunque no muestre su cabecera; las listas de otros objetos no se actualizan por ese aviso. El contador refleja las filas marcadas que siguen visibles y descartar el aviso no elimina las filas mostradas.

### Gestión de documentos e imágenes

- **Carga archivos por partes y consulta el progreso desde los controles de carga y los campos de archivo.** La barra de progreso aparece en los controles de carga y edición. También se gestiona el tamaño máximo permitido y se muestran los mensajes de carga disponibles en varios idiomas.
- **Gestiona documentos e imágenes desde Flexygo y ERP con una visualización correcta en la skin 2026.** Los gestores muestran correctamente documentos, imágenes y vistas de galería, y se traducen los textos que incluyen. La actualización también incorpora cambios en la generación de informes Crystal Reports.
- **Puedes gestionar cargas de archivos mediante el proxy de la aplicación, que conserva la identidad del usuario.** El proxy evita que una carga sobrescriba otro archivo de forma incorrecta. Si la aplicación y el servicio están en el mismo servidor, se evita recurrir al proxy.

### Gráficos

- **El módulo ECharts muestra sus opciones de configuración y mantiene la consulta al cambiar el tipo de gráfico.** Al corregir la configuración, el gráfico puede volver a mostrarse sin recargar la página. Si se produce un error, el aviso aparece en inglés. Las opciones JSON siguen disponibles para los componentes que las utilizan, y los módulos HTML no muestran opciones que no les corresponden.
- **Los gráficos ECharts ofrecen más opciones para personalizar series, etiquetas, indicadores y líneas de referencia.** Puedes configurar el apilado, el formato de los valores, las etiquetas finales y los puntos destacados. También puedes mostrar información al pasar sobre el gráfico y añadir líneas de referencia para el promedio o un valor concreto. En gráficos circulares, puedes colocar etiquetas dentro de las porciones, resaltar valores y limitar las etiquetas de las porciones pequeñas; las líneas de referencia se muestran con etiquetas legibles y sin valores automáticos cuando no tienen etiqueta.
- **Los gráficos de anillo pueden mostrar un total central con formato local y distintos cálculos.** El número puede adaptarse a la cultura del usuario, incluidos los separadores y los decimales, o mostrarse sin formato. También puedes elegir si el total representa la suma, la media, el máximo o el recuento, y configurar las etiquetas para cada módulo sin cambiar el tema compartido.
- **Las tarjetas de estadísticas admiten tendencias, estados vacíos y cifras con separador de miles.** Puedes elegir distintos modos de visualización y aplicar colores semánticos. Las tendencias y los objetivos se muestran al incluir sus datos.
- **El nuevo módulo ECharts admite gráficos de radar, burbujas, combinados, circulares, de anillo, semicirculares, de área polar, de líneas y de barras horizontales.** Puedes combinar distintos tipos de serie en un mismo gráfico o elegir una de las nuevas representaciones. El módulo convive con los gráficos actuales basados en Chart.js y permite asignar un tema.
- **Los gráficos ECharts se cargan sin configuración asociada y ajustan su tamaño al mostrarse o cambiar de tamaño.** También se adaptan al abrir una pestaña o cambiar el tamaño del módulo, incluso si se inicializan ocultos o contraídos. Al cambiar opciones anidadas, se conserva el resto de la configuración y se liberan los recursos del gráfico al volver a dibujarlo.
- **Puedes sincronizar las leyendas entre gráficos y mostrar gráficos ECharts con datos de una lista.** La sincronización funciona entre gráficos del mismo grupo. Los gráficos insertados en listas utilizan los datos que ya se han cargado.
- **Los gráficos de burbujas y radar muestran correctamente valores cero, negativos y planos.** Se conservan las etiquetas de las burbujas con valor cero. Los gráficos radar también pueden representar datos sin variación sin fallar en el cálculo.

### Herramientas de desarrollo

- **Explora y selecciona iconos, y genera fuentes para bibliotecas exportables.** El explorador permite recorrer bibliotecas y categorías, y previsualizar los iconos antes de elegirlos. El generador admite bibliotecas con glifos y ofrece la descarga en ZIP; si no hay bibliotecas compatibles, la opción aparece deshabilitada con una explicación.
- **Los objetos externos permiten consultar y actualizar datos mediante REST y amplían su compatibilidad con Flexygo.** El asistente puede analizar un servicio y proponer sus propiedades. Las listas admiten paginación; los formularios muestran el origen de los campos de selección y, al insertar, recogen la clave generada por la WebAPI. También puedes consultar totales y medidas, mostrar datos en paneles y conservar ajustes de configuración al exportar proyectos, excepto los propios del entorno.
- **Incorpora controles deslizantes que muestran su valor en las aplicaciones.** El valor se confirma al soltar el control, y también puedes reaccionar mientras se arrastra. El control está disponible entre los elementos compartidos.
- **Crea interfaces con pestañas y vincula cada pestaña con su contenido.** Las pestañas y su contenido se relacionan mediante un valor. Esto permite gestionar qué sección permanece activa.
- **Crea, nombra y administra pestañas directamente desde la tira del diseñador.** La tira aparece aunque el objeto todavía no tenga pestañas, para que puedas añadir la primera. Desde cada pestaña puedes cambiar el nombre, elegir un icono, configurar sus opciones o eliminarla; la primera agrupa el contenido inicial del objeto.
- **Configura propiedades desde un panel de ajustes rápidos más amplio en el banco de objetos.** Al editar una propiedad, el panel se abre junto al banco de objetos y puedes cerrarlo sin desplegar de nuevo la navegación. Los campos tienen más espacio y el desplazamiento se mantiene dentro del panel.
- **Los desarrolladores pueden suscribirse a los mensajes informativos de SQL de DataManager.** La opción permite recibir esos mensajes desde código externo que utilice DataManager. Así puedes incorporarlos a tus propios procesos de desarrollo.
- **Realiza consultas GET con flexygo.ajax.get.** La función permite acceder a operaciones que requieren ese tipo de consulta. También vuelve a funcionar la consulta de versiones que utiliza el pie de página.
- **getView en la WebAPI aplica los valores predeterminados correspondientes.** Al consultar una vista, la operación devuelve los valores predeterminados que le corresponden. Se corrige así la respuesta, que podía incluir valores incorrectos o no aplicarlos.
- **Se aplican valores predeterminados al resolver URL amigables.** La resolución de estas direcciones cuenta ahora con los valores predeterminados correspondientes. Esto permite usar la dirección sin tener que definirlos manualmente.
- **Crea recorridos guiados señalando directamente los elementos de cada pantalla.** El editor agrupa los pasos por pantalla y permite reordenarlos; antes de guardar, muestra el elemento seleccionado para cada paso. Puedes personalizar la tarjeta de bienvenida con una imagen o con la marca de Flexygo, que puede mostrarse con una animación de escritura.
- **La skin 2026 incorpora pestañas en procesos e informes, asistentes para objetos y gestores de documentos e imágenes.** Los gestores de imágenes permiten presentar el contenido como galería o como lista. Las herramientas de desarrollo están disponibles en sus áreas correspondientes, y las vistas previas tienen una tarjeta propia.
- **En modo de desarrollo, el menú de un módulo ofrece accesos a la configuración de su objeto.** Las opciones aparecen agrupadas al final del menú. No se muestran en la skin clásica.
- **Organiza los módulos de una página directamente desde la página, sin abrir el gestor de módulos.** Puedes mover módulos entre zonas, elegir otro diseño y crear módulos desde el organizador. Antes de guardar, recibirás avisos si el cambio de diseño deja posiciones sin asignar o si una actualización revertirá la organización por proceder la página de una distribución.
- **Integra Flexygo con otros sistemas mediante webhooks.** Los desarrolladores pueden utilizar esta funcionalidad para conectar sus aplicaciones con otros sistemas. Así, pueden incorporar webhooks a sus integraciones.
- **Cambia la optimización de los paquetes desde el menú de desarrollo.** La opción permite alternar este ajuste sin salir del menú. Puedes modificarlo directamente desde las herramientas de desarrollo.

### Informes

- **Gestiona temas para los gráficos y personaliza sus colores, etiquetas y otros elementos visuales.** Puedes elegir temas disponibles, como una paleta monocromática o un tema inspirado en shadcn, y ajustar opciones como el espaciado y la forma de las series. Los gráficos adaptan sus colores a la skin y a los modos claro y oscuro, y reflejan los cambios de tema sin recargar la página. También se mantienen los colores adecuados al combinar temas o compartir páginas, y puedes aplicar temas opcionales a gráficos ECharts y consultar el tema de gráficos incrustados.
- **Genera informes Crystal desde proyectos de Flexygo.** Puedes incorporar a tus proyectos informes creados con Crystal Reports. Se corrigen problemas de compatibilidad y ubicación para que funcionen en distintos entornos, así como la carga de definiciones del editor.
- **Puedes obtener informes PDF en formato base64, tanto de Crystal Reports como de DevExpress.** Este formato facilita el uso del PDF generado desde otras funciones de la aplicación. También se corrige la carga de parámetros al abrir informes, incluidos los que se abren desde un enlace.
- **Diseña y personaliza informes con el diseñador de Flexygo y expórtalos a PDF sin los errores corregidos.** Puedes adaptar la presentación y configuración del diseñador DevExpress. Se corrigen problemas de exportación, traducciones y lectura de parámetros, que ya no depende de que coincidan las mayúsculas y minúsculas.

### Inicio

- **En skin 2026, personaliza los módulos de cada página y consulta un panel de inicio renovado, con la fecha de caducidad de licencia corregida.** Cada usuario puede ordenar, fijar y contraer módulos, o recuperar la distribución del administrador. El panel reúne tarjetas con información sobre errores, tareas, usuarios, licencia, actividad y otros datos de la aplicación. La fecha de caducidad de la licencia se muestra con el formato esperado.

### Inicio de sesión

- **Puedes configurar los intentos fallidos que provocan un bloqueo y cuánto dura.** Ajusta el límite de intentos y la duración del bloqueo de la cuenta. También se han revisado el control de intentos desde una dirección IP y la recuperación de contraseña.
- **Puedes gestionar y restablecer la contraseña con páginas y enlaces de acceso renovados.** El proceso permite gestionar la contraseña desde una opción específica y acceder con la nueva contraseña tras restablecerla. Los enlaces funcionan bajo rutas base, conducen al destino correcto y, al terminar la recuperación, se inicia sesión con una confirmación.
- **Puedes consultar o desactivar las noticias que aparecen al iniciar sesión.** La opción permite decidir si se muestran noticias en la pantalla de acceso. Cuando están disponibles, puedes consultarlas desde esa misma página.
- **Puedes iniciar sesión mediante Cl@ve.** Se corrige el proceso de autenticación y la respuesta que recibe la aplicación. También se ajustan el enlace de registro y la carga en instalaciones bajo una ruta base, y se muestran los errores de acceso con más claridad.
- **Puedes iniciar sesión mediante LDAP.** La autenticación con LDAP se incorpora al proceso de acceso y puede configurarse en los ajustes correspondientes. También se corrige el flujo para que complete el inicio de sesión correctamente.
- **Puedes iniciar sesión sin conexión mediante SSO con ABH o LDAP.** La opción permite realizar el acceso sin conexión con esos métodos de SSO.
- **Puedes iniciar sesión mediante SSO y mantener la sesión con la opción de recordar el acceso.** La pantalla no ofrece tipos de SSO que no estén disponibles. Antes de permitir el acceso, Flexygo comprueba que los módulos activos estén cubiertos por la licencia.
- **Si se produce un error de conexión durante el acceso, el sistema vuelve a intentarlo hasta tres veces.** Los reintentos permiten continuar el proceso cuando falla temporalmente la conexión.
- **Puedes personalizar las páginas de inicio de sesión, recuperación de contraseña y registro.** La personalización también está disponible en las páginas de autenticación y gestión de contraseña de los productos creados con Flexygo.
- **Puedes proteger el inicio de sesión con autenticación multifactor.** El acceso puede requerir un paso adicional de verificación, integrado en las páginas y los procesos de acceso. También se adaptan las pantallas, traducciones y plantillas de correo relacionadas, incluidas las de registro y recuperación de contraseña.
- **Puedes crear una cuenta con un proceso de registro renovado.** Se actualizan la página de registro, sus traducciones y los correos asociados.
- **Puedes iniciar y cerrar sesión y mantenerla activa para no volver a introducir tus credenciales.** El acceso también admite la dirección de correo. Se actualizan las traducciones y el tratamiento de cookies, y se corrigen problemas con claves que difieren en mayúsculas y minúsculas.
- **Puedes iniciar sesión y gestionar el acceso a tu cuenta.** Se adaptan las plantillas de acceso, registro y recuperación de contraseña. La selección de idioma queda oculta temporalmente.

### Instalación

- **Configura y pon en marcha Flexygo con un asistente guiado desde la pantalla de inicio de sesión.** El asistente reúne la configuración del proyecto, las bases de datos, el correo y la publicación, y sustituye al instalador anterior. Puedes retomar la instalación desde el primer paso pendiente; los pasos completados quedan cerrados y los errores se muestran en el paso correspondiente para que puedas reintentarlo. También puedes elegir el origen del esquema, como un archivo dacpac o un feed de NuGet, y consultar el avance de la publicación y la creación de bases de datos.
- **La instalación desatendida puede completarse automáticamente al iniciar el backend.** Puedes elegir si se crean, actualizan o reutilizan las bases de datos, además de establecer el nombre del proyecto y la contraseña de administración. Si un paso falla, la instalación lo comunica mediante un inicio fallido.
- **El asistente añade pasos según las conexiones de datos activas que todavía necesitan configuración.** Así, el flujo se adapta a las conexiones definidas en cada instalación y solo solicita configurar las que están pendientes.
- **El configurador permite establecer la conexión y consultar el progreso del despliegue de la base de datos.** La conexión se muestra cuando la base de datos ya está configurada. También puedes consultar las etapas del despliegue, incluso en entornos de desarrollo.
- **Puedes instalar una base de datos desde el configurador de Flexygo.** La instalación se inicia directamente desde el configurador. El nuevo flujo también corrige el inicio de esta operación desde esa pantalla.
- **Puedes instalar y actualizar Flexygo desde las pantallas de configuración inicial o desde el configurador.** El proceso de actualización incluye la aplicación y los cambios de base de datos, y descarga y despliega los paquetes necesarios. También contempla operaciones afectadas por archivos o recursos bloqueados.

### Inteligencia artificial

- **Se incorporan nuevos modelos GPT para las funciones de inteligencia artificial.** Los modelos disponibles se actualizan para su uso en la configuración de inteligencia artificial. Desde allí se pueden seleccionar los modelos disponibles para estas funciones.

### Interfaz

- **En la skin 2026 puedes editar valores directamente en las listas y añadir filas desde la lista o el formulario.** Cada fila se guarda al salir de ella y conserva el menú de acciones del registro. La experiencia se adapta a móviles y tabletas, y está disponible en los modos claro y oscuro; la skin flexy2022 no cambia. Además, las listas editables conservan los cambios al modificar, cancelar u ordenar filas, y sus combos y columnas se ajustan al espacio disponible.
- **Desde el panel de control 2026 puedes consultar y editar la página de inicio de cada perfil.** Cada perfil tiene una vista previa esquemática basada en su configuración. La vista previa no ejecuta la página ni guarda cambios.
- **Los calendarios renovados incorporan vista anual, filtros y selección de rangos.** Incluyen una leyenda y opciones para configurar el solapamiento y el horario laboral. En la vista anual puedes consultar los registros de cada día, y los cambios de otras personas se reflejan en la vista mensual. Los colores de las marcas se adaptan para seguir siendo legibles en los distintos modos; la vista anual y la línea temporal también destacan mejor los días con actividad y los elementos seleccionados.
- **La nueva interfaz incorpora pantallas de administración y una navegación renovada.** Incluye administración de usuarios, roles, propiedades, procesos, ajustes y otros elementos. La navegación añade acceso rápido, barra lateral plegable y panel redimensionable. Las opciones de administración del módulo se abren en paneles laterales, con más espacio para sus controles y sin cubrir toda la página; el engranaje abre el módulo y las demás opciones quedan agrupadas en otro menú.
- **Los perfiles de administrador e invitado ya tienen avatar, y la foto de perfil se muestra en el pie y la cabecera.** La imagen del perfil se comparte entre ambas skins, incluida la clásica. Las iniciales de los avatares y el contenido de los avisos emergentes también se leen con mayor claridad.
- **Los administradores pueden cambiar una página al diseño libre y mover o redimensionar sus módulos en una rejilla.** Al activar la opción, los módulos se colocan según las zonas que ya aparecen en la página, y puedes arrastrarlos y ajustar su tamaño directamente. Los cambios se pueden guardar o descartar; al salir sin guardar se solicita confirmación y se puede restaurar la disposición anterior. Las páginas con diseño libre conservan la posición y el tamaño definidos, y en pantallas estrechas los módulos pasan a una columna respetando el orden de lectura.
- **Los desarrolladores pueden abrir desde la paleta la configuración de la búsqueda global.** La opción aparece en la parte inferior de la paleta y permite volver al gestor de filtros genéricos para configurar la búsqueda. Solo está disponible en modo de desarrollo.
- **Al organizar una página, puedes arrastrar también los módulos sin cabecera y acceder a su configuración desde la barra de organización.** Los módulos sin cabecera muestran una franja de arrastre solo mientras está activo este modo. La configuración se abre en un panel lateral para mantener visible el contenido; si la página se recarga sin cambios, se reconstruye la organización. Al cambiar de página se cierra el modo y se avisa si quedan cambios sin guardar.
- **Puedes mostrar los resultados de búsqueda sobre la página, sin sustituir su contenido.** El modo de paleta es opcional y agrupa los resultados por criterio, mostrando su título, descripción y destino. La búsqueda responde con más rapidez y evita enviar al navegador datos que no necesita mostrar.
- **Las tarjetas de indicadores muestran descripciones, variaciones y tendencias opcionales, con una presentación más uniforme.** El valor principal destaca y las tarjetas de una misma fila comparten anchura y altura para facilitar la comparación; sus valores y pies quedan alineados aunque incluyan información adicional. Cuando aparecen dentro de una lista, evitan duplicar el marco de esta y conservan su contenido y disposición.
- **La interfaz de Flexygo Core adopta un diseño más actual.** Se renueva la navegación y el menú de usuario, y se actualiza la paleta de colores. El nuevo menú incluye las traducciones que faltaban y los ajustes completan la aplicación del nuevo estilo visual en distintas skins.
- **Puedes acceder a las páginas de Flexygo mediante URL amigables.** Esta forma de resolver las direcciones está disponible en el núcleo de Flexygo. Permite abrir las páginas utilizando URL amigables.

### Licencias

- **Puedes consultar la información de la licencia desde una página específica y ver su estado en una marca de agua.** La marca de agua permite identificar de un vistazo el estado de la licencia mientras utilizas la aplicación. La información de la licencia también está disponible en una página específica.
- **Flexygo puede generar licencias para aplicaciones en producción.** Esto permite disponer de una licencia al ejecutar la aplicación en ese entorno.

### Notificaciones

- **Recibe avisos en tiempo real cuando se crean registros y configura qué usuarios pueden verlos.** Puedes definir en la configuración del objeto qué registros generan avisos; se aplican los filtros y las condiciones de seguridad de la lista para cada destinatario. El aviso aparece en la esquina inferior derecha y permite abrir el registro o su lista. Si se crean varios registros del mismo tipo, el aviso se actualiza en lugar de acumularse.
- **Activa avisos para seguir los cambios de los registros que quieras.** Los avisos informan de inserciones, modificaciones y eliminaciones en los objetos configurados. Cada usuario recibe el aviso según su propia sesión y sus permisos.
- **La aplicación incorpora un servicio de notificaciones push.** El servicio se integra con las funciones de uso sin conexión de la aplicación.

### Procesos

- **Gestiona las aprobaciones de registros y configura reglas de decisión y webhooks para cada objeto.** Las personas responsables reciben avisos y pueden revisar las decisiones en una bandeja de entrada o en la ficha del registro. Las reglas permiten abrir decisiones al guardar, establecer plazos y escalarlas; los webhooks se envían al guardar o eliminar, con reintentos y opción de prueba. También puedes abrir y resolver decisiones mediante la WebAPI. Cada persona consulta sus decisiones y las de sus roles, mientras que los administradores pueden verlas todas; las decisiones deben asignarse a un usuario o rol.
- **El planificador, las vistas de agenda y el kanban muestran las nuevas tarjetas y cambios sin cambiar de pantalla.** Al crear o guardar registros, las tarjetas aparecen en su celda, día o columna y se marcan para que puedas localizarlas, incluso si quedan fuera del área visible. Se respetan los filtros y permisos, y las actualizaciones parciales conservan la posición, la selección y el desplazamiento; si el cambio no corresponde a la vista o al filtro, se realiza la actualización completa. En la skin 2026, el calendario de planificación actualiza el periodo y los objetos visibles sin quedarse en blanco durante la recarga.
- **Los administradores pueden iniciar la creación de un recorrido guiado desde un registro de recorrido.** La creación abre la página del primer paso y muestra el panel de configuración; si no hay pasos, se informa de ello. Las invitaciones aparecen en la página donde comienza el recorrido y se conservan las respuestas de los usuarios.
- **El contexto de la aplicación incluye los procesos integrados y los módulos activos.** Esta información queda disponible para que los desarrolladores de producto trabajen con ella desde el contexto de la aplicación. También se ajustan los colores y se evitan errores al buscar rutas de procesos inexistentes.

### Seguridad

- **Puedes controlar quién ejecuta cada proceso, incluso si no está vinculado a un objeto, y limitarlo con condiciones SQL opcionales.** Los permisos se configuran para usuarios, roles y facultades, desde sus pantallas de seguridad o desde la ficha del proceso. La condición SQL se evalúa al comprobar el permiso y solo permite ejecutar el proceso si devuelve 1 o true. La pantalla de seguridad permite consultar si el proceso se puede ejecutar y qué condición restringe su uso; si no se cumple, el proceso queda oculto en menús y barras de herramientas.
- **La skin 2026 incorpora una pantalla para consultar y gestionar la seguridad de roles, usuarios y facultades.** Desde el área de trabajo puedes abrir el gestor con el elemento seleccionado y revisar reglas de objetos, campos y navegación, incluidos los permisos de lectura y edición y las rutas afectadas. La pantalla permite comparar permisos concedidos, denegados o no definidos, y muestra qué regla, condición y prioridad determinan el acceso, junto con la política predeterminada. Puedes crear, modificar o eliminar reglas y definir su nivel inicial; también consultar las condiciones de acceso de los módulos y gestionar acciones con una vista previa de los cambios. La tabla permite filtrar elementos con reglas, añadir condiciones, bloquear reglas o eliminar todas las de una familia, y cuenta con traducciones en los siete idiomas disponibles. La pantalla se abre desde la skin 2026; la anterior sigue disponible en flexy2022.
- **Consulta la seguridad de objetos, módulos, propiedades y procesos desde una misma pantalla del workbench.** Puedes acceder a cada área desde esa pantalla y abrirla con un elemento concreto ya seleccionado. Desde la pantalla de un objeto, la búsqueda mantiene la selección al cambiar de ámbito y se limpia al iniciar una búsqueda nueva; la skin 2022 conserva su pantalla anterior.
- **Puedes configurar condiciones de seguridad de objetos eligiendo una propiedad, un operador y un valor.** El asistente ofrece las propiedades del objeto y permite seleccionar valores de contexto, sin tener que recordar nombres de tablas o marcas especiales. También puedes probar la condición antes de guardarla y consultar el SQL ejecutado.

### Seguridad de la WebAPI

- **La WebAPI y MCP limitan por defecto las respuestas a las propiedades definidas en cada objeto.** El ajuste incluye las propiedades definidas y las claves, tanto en las respuestas como en los esquemas. Así se omiten columnas que no forman parte de la definición del objeto o que no están disponibles en todas las instalaciones.
- **Flexygo incorpora un servidor MCP para asistentes y aplica los permisos del token en la WebAPI.** El servidor MCP está desactivado inicialmente y tiene permisos propios por usuario y rol, además de pantallas de administración. La WebAPI explica por qué rechaza las operaciones no permitidas y no las incluye en OpenAPI.
- **La barra de navegación incorpora búsqueda y la WebAPI permite operaciones masivas y consultas de relaciones.** La búsqueda ayuda a localizar contenido desde la navegación. Los desarrolladores pueden realizar operaciones masivas y consultar relaciones a través de la WebAPI.
- **Los desarrolladores pueden consultar en Scalar las definiciones de API del backend y la WebAPI.** Scalar ofrece una referencia de las API de Flexygo para quienes desarrollan sobre la plataforma.
- **Puedes exponer entidades de la aplicación mediante la WebAPI.** La WebAPI incorpora autenticación mediante tokens y opciones para definir y consultar entidades. La configuración de orígenes permitidos admite comodines para conectar otras aplicaciones con Flexygo.

### Tareas programadas

- **Puedes desactivar las tareas programadas y los scripts desde la configuración de la aplicación.** Al activar esta opción, el proceso deja de iniciar esos trabajos. También se respeta al insertar o editar una tarea, para evitar que se ejecuten trabajos desactivados.
- **Ejecuta scripts como tareas programadas.** Puedes configurar scripts asociados a tareas y trabajos programados. Así, los scripts configurados se ejecutan como parte de la planificación de tareas de la aplicación.

## Mejoras

### Despliegue

- **Flexygo funciona sobre .NET 9 y permite desplegar por separado la interfaz, el backend y la base de datos.** Puedes instalarlo en IIS, como servicio independiente o en Docker, en Windows o Linux y con sus componentes en uno o varios servidores. El asistente de versiones permite revertir actualizaciones, y los scripts de despliegue son compatibles con Linux.

    ![Flexygo funciona sobre .NET 9 y permite desplegar por separado la interfaz, el backend y la base de datos.](../../docs_assets/images/Versions/Version10_0/net9-architecture.png)
- **Las traducciones de producto se conservan al publicar los datos de configuración.** Puedes incluir las traducciones asociadas a los elementos de producto en la publicación. Las traducciones de módulos de prueba se pueden excluir.
- **Puedes elegir qué archivos JavaScript y CSS se incluyen en los archivos agrupados.** La agrupación carga correctamente los estilos personalizados y evita errores al optimizar archivos con el plugin de PDF. También separa los plugins personalizados de los del sistema y mejora la compatibilidad con aplicaciones alojadas dentro de IIS.

### Actualizador

- **La pantalla de progreso organiza los pasos en vistas verticales u horizontales y muestra de forma coherente los avances y errores.** Puedes cambiar entre ambas vistas con una transición animada. Los pasos completados se mantienen visibles aunque haya un fallo o se revierta la operación, y el recorrido del progreso se muestra sin interrupciones.
- **Al volver a la información de versiones, puedes recuperar la operación o el resultado pendiente.** El resultado permanece disponible para quien inició la operación hasta que lo cierre o empiece otra, incluso después de reiniciar o recargar la aplicación. Los datos y errores del resultado no se sustituyen al comenzar otra operación.
- **Las pantallas del asistente muestran transiciones más fluidas al cambiar de fase o de versión.** El cambio se realiza dentro del mismo diálogo y tiene en cuenta la preferencia de movimiento reducido. Durante un cambio de versión, se mantiene visible la transición y el aviso de reconexión espera a que la aplicación vuelva a estar disponible.
- **El asistente muestra una pantalla específica antes de eliminar una versión.** La pantalla presenta la operación y su animación antes de iniciar el borrado. Si cierras el asistente durante ese intervalo, la eliminación no comienza.
- **Puedes continuar la actualización cuando los requisitos solo muestran avisos no bloqueantes.** Los errores siguen impidiendo avanzar. También se avisa si la tabla de registros del actualizador supera el límite configurado.
- **El asistente comprueba los bloqueos y presenta con más claridad los conflictos, requisitos y el progreso.** La revisión de bloqueos se incorpora al proceso antes de continuar con la actualización. Además, se reorganizan las pantallas de conflictos y requisitos y se mejoran la vista de progreso y el registro de actividad.
- **El asistente identifica quién mantiene bloqueada la aplicación, incluidos algunos bloqueos de red.** Cuando puede reconocerlos, muestra el usuario y el equipo asociados al bloqueo para que sepas quién debe liberarlo.
- **El actualizador reconoce las versiones de los paquetes, incluidas las preliminares, y permite controlar su búsqueda.** La comparación de paquetes tiene en cuenta las versiones beta y la versión instalada para localizar los paquetes adecuados. Puedes configurar si se buscan versiones preliminares; también se admiten sus nombres y repositorios locales.
- **La configuración y el mantenimiento muestran el progreso y los errores de actualización y permiten validar bases de datos ERP.** Las tareas se ejecutan en segundo plano y puedes seguir su avance y consultar los detalles de los errores. Las tareas necesarias para actualizar también pueden continuar durante el modo de mantenimiento.
- **El actualizador reintenta las operaciones de archivos cuando se producen fallos temporales.** Los reintentos ayudan a completar la actualización si el problema es puntual. Si falla el despliegue de la base de datos, se genera un informe para facilitar la revisión.
- **El actualizador puede continuar el proceso al terminar y admite rutas de descarga en Linux.** También se han revisado mensajes informativos del flujo de actualización.

### Configuración

- **Los secretos de configuración se mantienen cifrados en IIS y en contenedores Docker de producción.** En otros entornos, se descifran al iniciar la aplicación. Si falta un secreto de Docker o no se puede leer, la aplicación no inicia con una clave nueva.
- **El administrador inicia con el perfil 2026admin y deja de ver «Decisions» en el menú.** El cambio afecta al perfil asignado al usuario administrador. También elimina del menú la entrada de tareas de decisión.
- **Los errores de conexión a SQL se identifican correctamente para distintos problemas de red.** La información permite distinguir entre problemas de resolución del servidor, tiempos de espera y conexiones rechazadas. Así resulta más fácil reconocer el tipo de fallo de conexión.
- **El panel de configuración rápida resulta más legible en la skin 2026.** Las etiquetas, los títulos de sección y las ayudas se leen con más claridad. También se ha ajustado el aspecto del botón para guardar.
- **Al configurar el correo con SSL, se aplica el valor seleccionado y se propone un puerto predeterminado.** El paso de configuración rellena automáticamente el puerto cuando activas SSL. Puedes cambiarlo si necesitas usar otro valor.
- **Los grupos de configuración muestran cuántas opciones contienen y se presentan en tarjetas más claras.** La nueva disposición ocupa menos espacio y facilita localizar cada grupo. Al pasar el cursor, la acción para editarlo permanece visible.
- **La acción para convertir la base de datos de desarrollo indica claramente sus efectos y advierte de sus consecuencias.** Su nombre ya no se confunde con el modo de desarrollo de la interfaz. Además, aparece marcada como una acción peligrosa.
- **Puedes buscar y configurar los temas de gráficos desde la administración de Flexygo.** Los temas aparecen en la navegación y en las búsquedas de configuración. Después puedes asignarlos a los módulos de gráfico.
- **Flexygo crea una configuración predeterminada si la aplicación arranca sin archivo de configuración.** Esto permite iniciar la aplicación aunque todavía no se haya creado dicho archivo. La configuración predeterminada queda disponible para ese primer arranque.
- **Puedes configurar el puerto, el esquema y la URL de Flexygo.** Estos valores permiten adaptar la aplicación al entorno donde se ejecuta. Se establecen en la configuración de la aplicación.

### Filtros

- **Los filtros y paneles de la interfaz 2026 se adaptan mejor a móviles y muestran información más clara.** Puedes consultar los valores de las etiquetas de filtro en una ayuda emergente y el gestor de filtros cabe en la pantalla del móvil. También se corrigen el panel de selección y la búsqueda del menú de desarrollo.
- **Configura el orden de los resultados añadiendo criterios de campo y dirección.** Puedes buscar campos en la lista y el diálogo ocupa solo el espacio necesario. Los criterios aparecen en el mismo orden en que se aplicarán.
- **Las filas y etiquetas del gestor de dependencias mantienen un contraste legible al pasar el puntero.** El resaltado usa el color de acento y se distingue tanto en el modo claro como en el oscuro.
- **El gestor de filtros genéricos organiza mejor sus paneles y permite consultar las dependencias entre campos.** El árbol de propiedades y las filas de campos aparecen en paneles independientes, y las dependencias se muestran con texto. También puedes abrir la seguridad de los campos, borrar búsquedas y consultar las propiedades después de guardar; el contenido se ajusta al diálogo y puede desplazarse dentro de él en flexy2022 y en la skin 2026.

### Formularios

- **Los formularios se adaptan mejor a pantallas pequeñas y recolocan los campos cuando una dependencia los muestra u oculta.** En pantallas estrechas, los campos se muestran en una sola columna y los formularios dejan de bloquearse en móviles. Al colocar campos en el banco de propiedades, se conserva su distribución y se mantienen las alturas mínimas de imágenes y editores al cambiar su tamaño.
- **Las etiquetas de la skin 2026 se muestran sin dos puntos y mantienen una disposición ordenada junto a los campos.** Las etiquetas largas se acortan visualmente y puedes consultar el texto completo al pasar el cursor. Los interruptores aparecen junto a su etiqueta, sin invadir otros campos. El cambio se aplica a formularios, vistas y ajustes rápidos; la skin flexy2022 conserva su presentación anterior.
- **La barra de guardado de la skin 2026 permanece a la vista y alineada con el cuadro en formularios largos.** Al desplazarte por un formulario largo, la barra se mantiene junto al borde inferior del cuadro. La etiqueta del objeto no tapa el botón Guardar cuando la barra queda fija abajo. En formularios cortos, la barra permanece en su posición habitual.
- **Los campos editables en línea de las listas mantienen el mismo aspecto que los del formulario.** La apariencia es coherente, por ejemplo, en las filas de inserción y en las listas editables.
- **El campo de imagen ocupa el espacio asignado en el formulario y muestra la fotografía a mayor tamaño.** La imagen y el control para editarla ya no quedan recortados en los campos altos. El comportamiento se adapta al espacio definido para el campo, incluso cuando está vacío.
- **La edición de propiedades conserva la pestaña abierta al guardar y solo permite crear pestañas en la skin compatible.** Al actualizar el formulario de edición de la skin 2026, se restaura la pestaña seleccionada y queda visible en la tira de pestañas. En flexy2022 no se muestran controles para crear pestañas, ya que esa skin no puede representarlas.
- **En la skin 2026, los campos y el botón Guardar quedan alineados con el título de su tarjeta.** La alineación se mantiene aunque cambie el primer elemento del formulario.
- **Los campos se leen correctamente en más pantallas con la nueva skin en modo oscuro.** Los campos de listas de correo, del visor de modelos de datos y del editor de relaciones adaptan el fondo, el texto y los bordes. Los formularios de edición mantienen su tamaño y espaciado actuales.

### Gráficos

- **Los gráficos de barras y circulares aprovechan mejor el espacio disponible.** En gráficos con muchas categorías, las etiquetas se ocultan cuando no hay espacio suficiente para leerlas. En los gráficos circulares, la leyenda y las etiquetas exteriores no aparecen a la vez, y el tamaño y la posición del gráfico se ajustan para reducir el espacio vacío.

### Herramientas de desarrollo

- **Los controles compartidos ofrecen más opciones de configuración.** Puedes añadir un botón para borrar la selección, decidir cuándo un diálogo ocupa toda la pantalla y controlar el foco del campo de texto. Las tarjetas de opción también admiten un color de acento.
- **Configura documentos e imágenes y accede a las listas y formularios desde el espacio de configuración del objeto.** La sección de archivos permite alternar entre documentos e imágenes y carga la configuración correspondiente. También puedes abrir la lista del objeto si tiene una colección asociada, o crear un formulario nuevo.
- **La sección de diseño de vista del banco de objetos tiene un nombre más claro.** El nuevo nombre evita confundirla con el diseño del registro. El cambio está disponible en los siete idiomas incluidos.
- **El panel de colocación permite agrupar módulos, consultar sus detalles y localizar los que ya están añadidos.** Puedes plegar los grupos por tipo y mantener abiertos los que estés utilizando; las búsquedas despliegan los grupos con resultados. Las tarjetas muestran información del módulo y las páginas donde aparece, y los módulos colocados siguen visibles en el panel. También puedes desplazarte por la página y cerrar las capas del modo de colocación una a una con Esc.
- **El menú de origen de la skin 2026 muestra correctamente las opciones y permite cerrar el diálogo sin cambiar el origen.** Los cuatro orígenes se presentan en dos columnas y el origen actual queda señalado con una insignia de color; Addon aparece por separado. La etiqueta activa se actualiza al cambiar de origen y puedes cerrar el diálogo con el botón o con Esc.
- **El editor de recorridos y el configurador de páginas muestran sus textos traducidos.** Los textos de ambas herramientas están disponibles en siete idiomas, incluidos los nombres de los anclajes propios de Flexygo en el editor de recorridos. Los textos escritos por quien configura el recorrido se mantienen; si falta una traducción, se muestra el original en inglés.
- **Las plantillas de listas SQL permiten definir los enlaces a los registros.** Puedes crear enlaces incluso cuando las filas contienen distintos tipos de objeto y prescindir de la detección automática de la skin 2026. Se mantienen la ordenación y el redimensionado de columnas.
- **La configuración de objetos muestra sus textos traducidos en los siete idiomas disponibles.** La traducción incluye los títulos de las secciones y sus descripciones. Así resulta más fácil identificar cada ajuste en el idioma elegido.
- **El administrador de vistas se muestra correctamente y es más legible en la skin 2026.** Se corrigen la disposición de los campos, los colores del texto y los estados al pasar el puntero. Las mejoras también se aplican cuando el administrador se abre como plantilla.
- **Consulta los errores en una lista filtrable, paginada y con detalles desplegables.** Puedes combinar filtros para acotar los resultados y consultar las opciones disponibles para cada criterio. El acceso desde el panel de inicio abre la lista con los errores de las últimas 24 horas.
- **El marketplace de addons muestra las opciones en filas y mantiene sus acciones a la vista.** La nueva disposición aprovecha mejor el espacio, tanto si hay pocos addons como si hay muchos, y alinea la búsqueda con la lista. También se corrigen los controles de las tarjetas instaladas y el espacio sobrante cuando no hay resultados; si falla una consulta, el marketplace deja de quedarse cargando.
- **Quienes tienen permisos de desarrollo acceden directamente con el modo de desarrollo activado y pueden desactivarlo desde el menú.** El modo conserva el estado elegido al volver a entrar y no produce errores al desactivarse cuando no hay un panel lateral que cerrar. El acceso solo aparece para usuarios con un rol de diseñador; la selección de origen no incluye Addon, que se presenta por separado.
- **El botón para crear objetos se distingue mejor y permite iniciar la creación desde el acceso al catálogo.** El símbolo de suma aumenta su contraste al pasar el puntero y tiene un fondo propio para diferenciarlo del catálogo. Al pulsarlo, se abre el asistente sin activar el acceso que lo contiene.
- **Las vistas previas de móvil y tableta permiten elegir el dispositivo y cambiar la orientación.** Puedes cambiar de dispositivo sin perder la orientación actual. El giro afecta a la vista previa abierta y no hace nada si no hay ninguna abierta.
- **Activa o desactiva Minificar JS/CSS desde una tarjeta del panel de control.** La tarjeta se integra con las demás opciones del panel y permite cambiar el ajuste desde toda su superficie. No es necesario salir del panel para modificarlo.
- **La comunicación de los procesos con el proxy admite distintos tipos de respuesta.** Esto permite gestionar las respuestas necesarias para operaciones con documentos. Así, los procesos pueden trabajar con los distintos formatos que requieren esas operaciones.
- **Los desarrolladores pueden depurar el código de la aplicación con source maps.** Esta opción facilita localizar el origen de un problema durante la depuración. Está orientada a quienes desarrollan sobre Flexygo.

### Inicio

- **La página de inicio y el panel presentan sus contenidos de forma más clara y aprovechan mejor el espacio.** En la página de inicio, las listas y los bloques informativos se distribuyen para reducir los huecos. En el panel, los accesos y la actividad reciente quedan agrupados de forma más compacta.
- **Los indicadores de la página de inicio y del panel muestran información más útil y permiten abrir los registros relacionados.** En la página de inicio, los errores se agrupan por causa y los indicadores enlazan con sus registros, incluidos los resultados de ejecución de trabajos. El panel muestra el recuento de objetos y módulos, y los totales de las listas coinciden con su contenido.

### Inicio de sesión

- **El proceso posterior al inicio de sesión se ejecuta una sola vez y no impide el acceso si falla.** Se aplica también a usuarios invitados y a accesos con SSO o segundo factor. Si se produce un error, se registra y se muestra en la primera página, sin bloquear la entrada.
- **La navegación por las páginas de cuenta no se queda bloqueada y los errores de recuperación se explican mejor.** Volver atrás en el navegador ya no deja la página cargando. Los mensajes distinguen los problemas de correo no confirmado y de configuración del envío, y los errores de los procesos de cuenta aparecen traducidos.
- **Puedes crear usuarios con barras invertidas en el nombre de usuario.** La validación acepta este carácter al crear una cuenta.
- **Flexygo comprueba las condiciones de seguridad antes de permitir el acceso.** La validación tiene en cuenta la dirección IP, los bloqueos y la licencia. También se ajusta la comprobación de licencia para evitar errores con licencias antiguas.
- **La página de inicio de sesión adopta el estilo habitual de Flexygo.** Puedes usar la tecla Intro como botón predeterminado. Las nuevas páginas se muestran sin intentar cargar scripts que no existen.
- **La página de inicio de sesión adopta el estilo habitual de Flexygo.** El acceso también permite usar la tecla Intro como botón predeterminado.

### Inteligencia artificial

- **Las solicitudes de inteligencia artificial tienen un tiempo de espera limitado.** Así, una llamada que no responde no queda pendiente indefinidamente. Esto permite que la aplicación continúe funcionando aunque el proveedor de inteligencia artificial no responda.

### Interfaz

- **Los iconos de Flexygo se muestran con los nombres actualizados de Font Awesome 7.** La actualización abarca iconos de pantallas, vistas, navegación y otros elementos de la aplicación.
- **Las acciones de cada fila aparecen al final de la lista, en una columna ajustada a sus botones.** Los datos se leen antes que las acciones y las columnas quedan alineadas en las dos skins. La columna ocupa menos espacio vacío, también en la fila para añadir datos de las listas editables.
- **Las ventanas del asistente, el actualizador y otras áreas comparten una cabecera, un tamaño y una presentación coherentes.** La cabecera reúne el icono, el título, el subtítulo y las acciones disponibles. Los diálogos de instalación y actualización mantienen el mismo tamaño, y sus pantallas de resultado muestran errores y acciones con un estilo común.
- **La skin 2026 renueva el correo, las notificaciones y el chat de IA para facilitar su uso.** En el correo puedes consultar las carpetas junto a la lista, filtrar por mensajes leídos, buscar por asunto y abrir mensajes en un panel lateral. Las notificaciones incluyen filtros y la opción de marcarlas todas como leídas; el chat de IA se muestra en un panel compacto. La skin flexy2022 mantiene su aspecto actual.
- **El menú de acceso rápido de la interfaz 2026 permite volver al panel de control o al cuadro de mando desde cualquier página.** Los accesos aparecen en una sección de administración del menú, aunque el menú del proyecto no incluya ese grupo.
- **La skin 2026 mejora la presentación y el uso de ventanas, listas, combos y asistentes.** Vuelven a mostrarse las ayudas de los botones y se ordenan mejor las listas y las pestañas. También se recupera el asistente de plantillas, se facilita la creación de objetos sin conexión y se mejora la visualización de combos y ajustes de propiedades.
- **Las nuevas instalaciones comienzan con la interfaz 2026 y los nuevos usuarios heredan el perfil de quien los crea.** Las instalaciones existentes conservan su perfil y los productos no se ven afectados. El perfil de administración 2026 solo se ofrece a usuarios con el rol de administradores.
- **Puedes copiar los detalles técnicos de un error sin mostrar avisos adicionales.** El botón confirma la copia con un cambio de icono. También está disponible como elemento compartido para los desarrolladores.
- **La skin 2026 mejora las listas, el uso en móviles y varias herramientas de trabajo.** Las agrupaciones y encabezados de las listas se mantienen a la vista, y la edición es más rápida. En móviles, la navegación lateral se adapta a una hoja y las filas y controles son más cómodos al tacto. También se mejoran calendarios, gráficos y la sincronización sin conexión.
- **Las pantallas de carga utilizan una nueva animación.** La animación muestra el logotipo o el indicador predeterminado según el contexto de carga.
- **Los menús desplegables se muestran sin quedar recortados por el área que los contiene.** Su posición se ajusta respecto al control que los abre, incluso dentro de zonas con desplazamiento.
- **Los calendarios de flexy2022 recuperan una presentación similar a la anterior.** Se ajustan las vistas mensual y anual, la posición de los avisos emergentes y la alineación de la vista de planificación. El cambio solo afecta a la skin flexy2022.
- **Las vistas de la skin 2026 muestran sus campos y etiquetas con más claridad.** Las etiquetas y los valores largos se mantienen en una línea y se recortan cuando no caben. También mejora la separación entre filas y la presentación de los encabezados.
- **Los logotipos pueden cambiar según el tema claro u oscuro.** El logotipo de la aplicación se adapta al tema sin recargar la página y puede usar una variante para el modo oscuro. Si no existe esa variante, se conserva el logotipo configurado; las rutas con barras invertidas también se muestran correctamente y la preferencia de tema se aplica al actualizar la página.
- **Los paneles laterales de la skin 2026 muestran una barra superior que separa sus controles del contenido.** El título queda a la izquierda y los controles a la derecha, con el contenido debajo. Así se distinguen mejor las acciones del panel lateral de los iconos del módulo que contiene.
- **El emulador de la aplicación sin conexión representa un iPhone 17 o un Samsung Galaxy S25, según el dispositivo seleccionado.** La aplicación se muestra con las dimensiones de pantalla correspondientes al modelo elegido. El emulador mantiene visible el dispositivo mientras se desplaza el resto de la pantalla y reorganiza sus secciones en ventanas estrechas; el marco del iPhone queda a la misma altura que el del Samsung.
- **La navegación sigue accesible al consultar la configuración sin conexión en la skin 2026.** La barra lateral se pliega en lugar de desaparecer y recupera el estado guardado al cargar otra página.
- **Las marcas de tarjetas nuevas se distinguen mejor en la skin 2026.** El ajuste mejora la visibilidad tanto en las tarjetas del tablero como en el indicador de la columna.
- **Los enlaces y las etiquetas pulsables se distinguen mejor en la skin 2026, tanto en modo claro como oscuro.** Los enlaces reales aparecen subrayados y con un color propio. Las etiquetas que actúan como controles usan el color del texto y se subrayan al pasar el cursor.
- **Las ramas del panel de navegación muestran si están abiertas o cerradas y se pueden desplegar sin cerrar el panel.** El indicador aparece en las ramas que contienen opciones y cambia de orientación al abrirlas; las opciones sin elementos no lo muestran. Al seleccionar una rama, sus opciones se muestran u ocultan y el panel permanece abierto; las opciones finales siguen navegando a su destino y cierran el panel. Al abrir un grupo se cierra cualquier menú de opciones que estuviera abierto, y los iconos mantienen el orden esperado.
- **Los avisos y las indicaciones del configurador de páginas se leen mejor en la skin 2026.** Se aumenta el contraste del aviso sobre el origen de la página y de la indicación que aparece al situar el cursor sobre un módulo.
- **La interfaz muestra traducidos títulos, botones, encabezados y mensajes cuando hay una traducción disponible.** Se corrigen textos que aparecían como claves internas o en inglés en los gestores de propiedades e imágenes, los gráficos y las listas, incluidas las listas sin objeto asociado. También se traducen los mensajes de inicio, los nombres de temas de gráficos, los tipos de elemento y sus nombres en la lista de cambios recientes; se mantienen los nombres definidos por cada usuario y los identificadores necesarios para ordenar y conservar anchos de columnas. La nueva skin muestra traducidos sus menús, asistentes y plantillas en los idiomas disponibles, y el buscador corrige su texto en alemán.
- **La navegación de la skin 2026 conserva el pie del menú al actualizarse y permite abrir las opciones del menú de perfil.** La opción de idioma vuelve a abrir el formulario correspondiente desde el menú. Las opciones del pie no desaparecen al refrescar la navegación.
- **La vista de parámetros se integra mejor con la skin 2026.** La nueva presentación se aplica únicamente a esta vista, sin alterar cómo se muestra en la skin Flexygo 2022.
- **El modo de diseño de la rejilla se abre desde un botón integrado en la navegación y mantiene visibles los títulos de los módulos.** El acceso conserva el atajo de teclado y vuelve a aparecer al actualizar la navegación. La zona de arrastre no tapa los encabezados y el indicador aparece al pasar el puntero; los controles de las filas permanecen en su sitio y se puede seguir arrastrando y guardando la disposición. La página aprovecha mejor el espacio y evita huecos vacíos innecesarios al final.
- **Las visitas guiadas se adaptan a la navegación y ayudan a localizar las pantallas y elementos que describen.** Los administradores pueden ofrecerlas a usuarios autorizados, añadirlas como módulo y configurar pasos que señalan elementos o realizan acciones. El recorrido continúa al cambiar de pantalla, aunque algún paso no esté disponible o un elemento tarde en cargarse, y no deja capas que bloqueen la página. Sus textos se muestran en el idioma seleccionado y se revisan los pasos del asistente, el espacio de trabajo, la seguridad y el registro de errores.
- **Los elementos relacionados se muestran como etiquetas compactas y más fáciles de recorrer.** Los enlaces a objetos, procesos e informes ocupan menos espacio y se distinguen mejor al pasar el cursor. El cambio evita resaltar como interactivos los títulos que no realizan ninguna acción.
- **La agenda distingue mejor los eventos y muestra el mes junto a los eventos del día seleccionado.** Los eventos se presentan como tarjetas y su categoría se conserva como una marca lateral, legible en los modos claro y oscuro. Se distinguen mejor los días, los eventos y la fecha actual, y el panel permite consultar todos los eventos del día; los controles, la cuadrícula y el selector de mes se adaptan a la nueva skin y al idioma.
- **La nueva skin reúne las acciones del módulo junto al título y oculta las opciones secundarias en un menú.** La acción principal queda a mano y la barra ocupa menos espacio, especialmente en módulos estrechos. Las opciones menos frecuentes siguen disponibles desde el menú de tres puntos.
- **Los textos de colores semánticos y los textos secundarios se leen mejor en la skin 2026.** Se ajusta el color del texto para mejorar el contraste en los modos claro y oscuro sin cambiar los colores de fondo, botones o gráficos. La mejora también afecta a los textos de listas, etiquetas e iconos, y mantiene los fondos y botones de acento con su aspecto habitual.
- **La búsqueda de la paleta indica que está trabajando y diferencia los resultados vacíos de los errores.** Mientras se cargan los resultados, la pantalla conserva su espacio y muestra una indicación de espera. Si no hay coincidencias o la búsqueda falla, cada situación se comunica por separado.
- **Los módulos se ajustan mejor a las columnas estrechas en la nueva skin.** La barra de herramientas puede ocupar varias líneas en vez de ensanchar el módulo y provocar desplazamiento horizontal en la página. A anchuras mayores, la distribución no cambia.
- **El menú de perfil de la nueva skin permite cambiar el idioma, la contraseña, la foto y el tema.** El menú, accesible desde el pie de página, reúne el perfil, el tema y el cierre de sesión, y muestra los datos de la persona conectada. Cada opción abre directamente su acción correspondiente; la bandera del idioma ayuda a identificar la cultura seleccionada. Las opciones vuelven a responder correctamente y el cierre de sesión está disponible.
- **Las cabeceras de los módulos de la nueva skin muestran menos botones de maximizar y minimizar.** Los botones de actualizar y contraer se mantienen. La skin clásica conserva sus botones actuales.
- **La nueva skin muestra una barra de progreso mientras se carga una página, sin el indicador giratorio.** La barra visible permite seguir el avance de la navegación.
- **El tablero Kanban organiza las tarjetas en columnas más claras y legibles, también en modo oscuro.** Las tarjetas se distinguen mejor del fondo y las zonas para soltarlas ocupan toda la columna, incluso si está vacía. Al moverlas, el área de archivo queda contenida en su franja y se identifican mejor las zonas de destino.
- **El planificador presenta una barra de herramientas y un panel lateral más ordenados.** Los controles tienen una apariencia coherente y los botones distinguen mejor la opción activa, reservando el rojo para acciones de peligro. Las etiquetas se alinean con la cuadrícula y los tipos se leen mejor; además, el panel evita el retardo visual al plegarse y ocupa solo el espacio necesario.
- **Los menús emergentes de filtros, procesos y notificaciones tienen una apariencia más coherente.** Comparten el estilo de sombra y borde para que las distintas opciones se integren visualmente entre sí.
- **Las pestañas de los módulos tienen un diseño más claro y se pueden recorrer cuando no caben en pantalla.** Las pestañas activas se distinguen mejor y el selector de módulos sigue el estilo de los demás controles. Las pestañas largas se pueden desplazar sin salirse del módulo.
- **Los mapas, los gráficos de red y la agenda se muestran correctamente en modo oscuro.** Sus áreas de visualización ya no dependen de un fondo claro y se integran mejor con el aspecto oscuro de la aplicación.
- **En la nueva skin, los controles y elementos de navegación se integran mejor con el modo oscuro.** Se corrigen los fondos claros que dificultaban la lectura de algunos elementos. La skin clara no cambia.
- **Los submenús se muestran anidados y la última columna puede ocupar el espacio libre de la tabla.** Al redimensionar una tabla, la columna final se reajusta para evitar huecos. Los menús contextuales conservan la jerarquía de sus opciones.
- **Los cambios de una versión actualizan los archivos web afectados y el acceso gestiona mejor las interrupciones del Backend.** Los archivos que no han cambiado pueden conservarse en el navegador. También se traducen las etiquetas de acceso mediante SSO.
- **Los errores de la aplicación se muestran de forma más coherente.** Se unifica su presentación en distintas operaciones para que los mensajes resulten más claros.

### Licencias

- **La página de licencias presenta con más claridad el nivel, el estado de las extensiones y el código de solicitud.** El nivel de tarifa, como PRO o LITE, aparece junto al tipo de licencia cuando corresponde. Si falta el código de solicitud, se indica y no se ofrece copiarlo; también se confirma cuándo se ha copiado el identificador.
- **La gestión de licencias reconoce nuevas tarifas para más productos.** Se amplían las tarifas de producto compatibles. Así, la gestión de licencias puede reconocer tarifas de licencia adicionales para productos compatibles.
- **Puedes validar una licencia que incluya varios nombres de equipo.** Escribe los nombres en la lista de equipos de la licencia y sepáralos con el carácter «|».

### Notificaciones

- **La tarjeta de decisión solo aparece cuando corresponde y la campana se actualiza al cambiar las notificaciones.** Así, las notificaciones reflejan cuándo hay una decisión que atender y evitan actualizaciones innecesarias de la campana.
- **Los avisos de error y advertencia pueden permanecer en pantalla hasta que el usuario los cierre.** Esta opción resulta útil cuando el mensaje necesita leerse con atención y no debe desaparecer automáticamente.

### Procesos

- **ABH Sign puede leer documentos a través del proxy de la aplicación.** Esto permite gestionar documentos cuando el proceso de firma y la aplicación están en servidores distintos.
- **Al revisar errores, también puedes consultar las excepciones encadenadas de los procesos.** La traza del error muestra información sobre las excepciones que se producen dentro de procesos encadenados.
- **Los parámetros de procesos e informes se conservan al guardar su configuración.** Así, los valores asociados a procesos e informes se mantienen al guardar los cambios de configuración.

### Rendimiento

- **Las páginas con muchos componentes cargan más rápido al leer la skin una sola vez.** Si se recargan las hojas de estilo de la skin sin recargar la página, se vuelve a leer para aplicar los cambios.
- **La aplicación comprime los recursos que sirve y refleja los cambios de estilo en su versión.** La compresión reduce el volumen de datos que se descarga al cargar la aplicación, especialmente en conexiones lentas. Además, los cambios en las hojas de estilo quedan reflejados en la dirección de los archivos.
- **La recarga silenciosa de la caché actualiza también los datos almacenados en memoria.** Al realizar esta recarga, los datos en memoria se actualizan junto con el resto de la caché.

### Seguridad

- **La configuración de la aplicación cifra en disco las contraseñas y claves sensibles.** Se protegen, entre otros datos, las cadenas de conexión, las contraseñas de correo y NuGet, y las claves JWT y Data Protection. El ejecutable permite gestionar la clave de cifrado y trasladarla a otro servidor sin necesitar el SDK.
- **La API de licencias separa la consulta y la actualización del estado, y envía el código de activación en la solicitud.** El cambio afecta a las integraciones que consultan el estado de la licencia, lo actualizan o envían un código de activación.
- **Los cambios de roles y permisos se aplican sin que el usuario tenga que volver a iniciar sesión.** Los cambios de rol se reflejan en la siguiente solicitud del usuario. La actualización también alcanza a los permisos asociados a objetos, páginas e informes, por lo que los cambios de seguridad pueden hacerse efectivos de inmediato.
- **Los objetos nuevos muestran su nombre en singular y se incorpora una vista para las facultades de página.** La nueva vista permite consultar las facultades de página mediante la capa de seguridad. Al crear objetos, se deja de usar como nombre el título plural de la colección.
- **El catálogo de reglas de seguridad incluye páginas, plantillas e informes.** También identifica las familias que no tienen una vista disponible y evita repetir plantillas en los resultados.
- **La página de cambio de contraseña muestra los errores y validaciones del formulario.** Así puedes identificar los problemas al introducir o actualizar la contraseña.

### Seguridad de la WebAPI

- **La WebAPI bloquea temporalmente las IP tras 50 intentos fallidos de token en un minuto.** La protección identifica correctamente la IP del cliente, también cuando accede a través del frontend, y se aplica a los accesos con contraseña, LDAP, SSO y renovación de token. Los administradores pueden ajustar los valores predeterminados, y se rechazan los accesos de usuarios bloqueados.
- **El acceso a las herramientas de WebAPI requiere una licencia válida.** La validación impide utilizar herramientas de WebAPI que no estén cubiertas por la licencia de Flexygo.
- **La especificación de la WebAPI se genera más rápido al procesar solo los objetos expuestos.** Los objetos sin permisos de acceso a través de la WebAPI se excluyen de la generación de la documentación.
- **La documentación de la WebAPI ofrece definiciones más claras y orientaciones para consultar e integrar sus operaciones.** Incluye descripciones de los objetos cuando están disponibles, explica desde qué valor empiezan las páginas y cómo escribir fechas en los filtros. También organiza mejor las operaciones, las respuestas, los modelos de error y los esquemas compartidos.
- **La WebAPI permite consultar la fecha, la hora y la zona horaria del servidor.** Esta información se añade a los datos de contexto existentes sin sustituirlos.
- **Los contadores de los nodos de navegación se calculan sin enviar sus consultas al navegador.** La aplicación envía los identificadores de los nodos y recibe los valores de sus contadores. Se aplica a los nodos que tengan un contador configurado.
- **La WebAPI devuelve las fechas con un formato actualizado.** Las aplicaciones que consumen la WebAPI reciben las fechas en un formato que permite tratarlas de forma coherente durante la integración.
- **Flexygo vuelve a comprobar las condiciones de seguridad de los usuarios que ya han iniciado sesión.** Si esas condiciones dejan de cumplirse, el acceso no se mantiene como si siguieran vigentes.

### Skins

- **La skin 2026 mejora el contraste y la legibilidad de menús, controles, avisos y campos.** Los ajustes afectan a los modos claro y oscuro, desde el botón Aplicar de los diálogos y las opciones de peligro hasta las tarjetas, los pasos de asistentes y los avisos del planificador. También se distinguen mejor los botones de procesos, los enlaces atenuados y los mensajes de error, que aparecen junto a la etiqueta del campo.
- **Los controles de campos y conmutadores de la skin 2026 mantienen un aspecto coherente fuera de los formularios de edición.** Los campos conservan el estilo adecuado cuando aparecen en otras pantallas. Los conmutadores desactivados que están encendidos mantienen un color de acento sólido.
- **La skin 2026 mantiene en la barra de herramientas los procesos que tienen texto visible.** Los procesos sin texto siguen agrupados en el menú de tres puntos. Así se conservan a mano las acciones con nombre sin recargar la barra.
- **En la skin 2026, los filtros y el menú de acciones ocupan menos espacio sobre el contenido.** Estos controles se sitúan junto al título del módulo. Si no hay filtros que mostrar, desaparece la fila vacía.
- **La skin 2026 utiliza la tipografía Geist en lugar de IBM Plex.** El cambio modifica la apariencia del texto y reduce el tamaño de los archivos tipográficos utilizados por esta skin.
- **Desde la cabecera de la skin 2026 puedes abrir el organizador de módulos con un botón o un atajo de teclado.** El botón aparece junto a las notificaciones y el atajo es Ctrl+Mayús+M. El acceso respeta los permisos de diseño.
- **Puedes mostrar un logotipo distinto según el modo de interfaz.** La aplicación busca la variante del logotipo correspondiente al modo activo. Así puedes adaptar su apariencia a cada modo.
- **El logotipo predeterminado de Flexygo muestra un fondo gris en lugar de blanco.** El cambio se aplica a la imagen del logotipo que se incluye de forma predeterminada.
- **Puedes acceder a las variables de las skins sin distinguir mayúsculas y minúsculas.** La búsqueda de variables también funciona cuando se escriben con un uso distinto de mayúsculas.

### Tareas programadas

- **Los iconos del planificador mantienen un contraste legible en los modos claro y oscuro.** Los iconos de configuración y actualización cambian de color según el modo de visualización. Así, se distinguen mejor en ambos fondos.

## Correcciones

### Actualizador

- **El actualizador indica cuando no puede consultar la versión disponible.** En lugar de dejar la consulta sin respuesta, muestra un error para que puedas reconocer el problema.
- **Los consejos del actualizador también aparecen al seguir una operación en curso.** La información se carga tanto en el asistente que inició la operación como en las vistas que la siguen después.

### Configuración

- **La opción para cambiar de perfil solo aparece a los administradores.** Los demás usuarios dejan de ver una acción que no pueden ejecutar. Así, las opciones disponibles se ajustan a sus permisos.
- **Se recuperan traducciones que faltaban, se completan las de las nuevas pantallas administrativas y se corrige una lista de registros.** La lista de registros de ejecución incluye el identificador necesario para reconocer cada fila. También se unifican los scripts de traducción utilizados durante la instalación.
- **Se corrigen los errores al guardar dependencias y obtener valores de licencia.** Ambas operaciones vuelven a funcionar correctamente. Esto permite guardar las dependencias y consultar los valores de licencia sin los fallos anteriores.
- **Las tablas de configuración incluyen las columnas que faltaban.** La definición utilizada para crear o actualizar estas tablas incorpora ahora todas las columnas previstas. Así, las tablas quedan completas tras la operación.

### Conversaciones

- **Se corrige el envío de correos con archivos adjuntos cuando la aplicación utiliza servidores distintos.** Ahora puedes enviar correos con archivos adjuntos en esta configuración.
- **Se corrige el funcionamiento de las menciones y sus notificaciones en las conversaciones.** Puedes mencionar a otras personas y recibir las notificaciones correspondientes. Estas incluyen los valores predeterminados de la página.

### Despliegue

- **La publicación local copia al frontend las claves compartidas necesarias para iniciar sesión.** Si el backend aún no las ha generado, recibirás un aviso. Así podrás identificar por qué todavía no se puede completar el inicio de sesión en una instalación recién publicada.
- **El despliegue de la base de datos evita errores relacionados con los cambios en los iconos.** El proceso prepara los cambios de las tablas de iconos durante el despliegue, para que este pueda completarse sin ese error.

### Filtros

- **Las listas con descripciones ya no fallan en ciertos casos de búsqueda o conexión de datos.** Se corrigen las búsquedas que usan columnas no seleccionadas y las que se ejecutan en otra conexión. Si no se puede obtener una descripción, la lista sigue mostrando el resto de los datos.
- **Las dependencias de los filtros se ejecutan al cargar los valores preestablecidos.** Al cargar el filtro, se actualizan los controles dependientes sin que tengas que cambiar ningún valor. Se conservan tanto el valor seleccionado como su texto mientras se actualizan las opciones relacionadas.
- **Puedes guardar dependencias de filtros y recibir una confirmación clara cuando se guardan.** Los mensajes están disponibles en inglés, catalán, alemán, español, francés, italiano y portugués. Además, en el modo de lista del gestor, las opciones visibles y sus acciones quedan mejor identificadas.
- **En la skin clásica, la lista de opciones de un filtro de selección múltiple vuelve a abrirse debajo del campo correspondiente.** La lista deja de aparecer desplazada a la izquierda del campo.
- **Los filtros funcionan correctamente cuando se aplican con un valor vacío.** La corrección evita que la aplicación del filtro falle cuando el valor está vacío.

### Formularios

- **Al crear un registro desde una celda del calendario, se conserva el día seleccionado.** La fecha ya no se desplaza al día anterior al abrir el nuevo registro. La corrección afecta al planificador y al calendario mensual.
- **La posición y el tamaño de los módulos se gestionan desde el configurador de páginas, no desde el formulario del módulo.** Los campos de fila, columna, ancho y alto dejan de mostrarse en el formulario de relación entre página y módulo. Así, guardar un formulario que ya estaba abierto no sobrescribe la posición configurada. Otros campos homónimos de otros formularios no cambian.
- **Puedes guardar valores booleanos en propiedades de tipo byte sin que falle la conversión.** El problema se producía al insertar los datos. La conversión corregida permite completar ese guardado correctamente.
- **Los procesos y los informes sin descripción muestran «General» como nombre de su pestaña principal.** La pestaña tiene un nombre reconocible aunque el proceso o el informe no incluya una descripción. También se corrigen textos relacionados con la apertura de informes.
- **El selector de base de datos funciona aunque no se haya definido el tamaño de página.** No es necesario definir ese tamaño para utilizar el selector y elegir una base de datos.
- **Se corrige un error al utilizar valores decimales.** La corrección evita el error que se producía al utilizar esos valores.

### Gestión de documentos e imágenes

- **Las descargas mediante el proxy respetan la eliminación posterior configurada y funcionan entre servidores distintos.** Cuando está activada la opción correspondiente, el archivo se elimina después de descargarlo. También se corrige el cifrado de las solicitudes entre servidores.
- **Se corrige la conservación de las rutas y los nombres de documentos e imágenes al guardarlos y gestionarlos mediante el proxy.** Al guardar archivos se conserva la ruta original. En las operaciones con proxy, los documentos mantienen el nombre y la ruta correctos para que puedan localizarse en los procesos que los reciben o gestionan.
- **El control de imágenes funciona al guardar archivos en una carpeta externa.** Puedes utilizar el control de imágenes aunque los archivos se guarden fuera de las carpetas habituales de la aplicación.

### Gráficos

- **Los módulos EasyInfo sin objeto pueden utilizar variables de contexto.** Esto permite usar valores como el usuario o la fecha actuales en las consultas. Así, las variables de contexto también están disponibles cuando el módulo no tiene un objeto asociado.

### Herramientas de desarrollo

- **La exportación de proyectos excluye usuarios y secretos y genera scripts compatibles con datos de cualquier tipo y tamaño.** Los secretos se guardan en un archivo local ignorado por Git y solo se aplican al publicar en Debug. Así, la publicación no sobrescribe los secretos configurados en cada instalación.
- **Los cambios en propiedades se guardan correctamente y el asistente abre el administrador adecuado.** Puedes mover propiedades entre pestañas y reordenarlas también en procesos e informes. Al editar la configuración de un proceso, informe u objeto, ya no se abre un administrador vacío o sin título.
- **Se corrigen las variables LESS personalizadas y la ruta de los archivos exportados con cambios de base de datos.** Los estilos personalizados se procesan correctamente. Además, la exportación de cambios de base de datos utiliza la ruta corregida.
- **Se corrigen errores de análisis y carga del editor Monaco.** Los ajustes evitan fallos al procesar contenido y al cargar el editor. También se corrige la carga de definiciones TypeScript.
- **Puedes cambiar el orden de los nodos sin errores al cargar sus propiedades.** Se corrige el comportamiento durante la edición de nodos y la carga de sus propiedades. Así puedes reorganizarlos sin que se produzcan errores.
- **Se corrige el clonado de barras de herramientas.** Al clonar una barra de herramientas, se conservan correctamente sus datos. Así, la copia mantiene la información de la barra original.

### Informes

- **Los proyectos existentes pueden seguir generando PDF con su código anterior.** Se mantiene la llamada síncrona utilizada por el código generado. Así, los proyectos que ya la usan pueden continuar generando PDF sin cambiar ese código.
- **Los informes vuelven a mostrarse con su nombre.** Se utiliza el nombre del informe en lugar de su descripción. Así puedes identificarlo por el nombre que tiene asignado.

### Inicio de sesión

- **Si faltan claves compartidas del backend, el inicio de sesión indica qué configuración debes copiar.** El aviso señala las secciones necesarias para que el acceso funcione. Después de copiarlas, reinicia la aplicación para que se compruebe de nuevo la configuración.
- **La confirmación del correo no te pide configurar de nuevo una contraseña que ya existe.** El resultado de la confirmación se adapta a si la cuenta ya tiene una contraseña configurada.
- **Puedes iniciar sesión aunque tu cuenta no tenga un alias.** Se evita que la búsqueda del usuario falle cuando falta ese dato.

### Instalación

- **La instalación de addons reconoce correctamente las versiones beta.** Se interpreta correctamente el sufijo «-beta» de la versión del addon.

### Inteligencia artificial

- **Se corrige la visualización de la interfaz de inteligencia artificial en distintos tamaños de pantalla.** La disposición de los elementos se adapta al tamaño de la pantalla. Así, la interfaz se muestra correctamente en diferentes dispositivos.
- **Los procesos de inteligencia artificial vuelven a ejecutarse cuando falta el contexto global.** Se corrige un error que podía impedir la ejecución de estos procesos si el contexto necesario no estaba disponible. Ahora pueden continuar en esa situación.
- **Se corrige el procesamiento de algunas respuestas de ChatGPT.** El fallo impedía interpretar correctamente ciertas respuestas. Ahora las solicitudes afectadas se procesan correctamente.

### Interfaz

- **Los usuarios que no son diseñadores ya pueden abrir el menú de módulos en la skin 2026.** El acceso al menú ya no depende de tener el perfil de diseñador.
- **Se corrigen la visualización del kanban y del editor HTML, el logo del menú y otros detalles de la interfaz.** También se ajusta la respuesta de los días del calendario anual y de las celdas de información al interactuar con ellas. Además, vuelven a funcionar las opciones para desactivar las tareas programadas y las tareas de script.
- **EasyInfo y los gráficos se cargan correctamente para usuarios que no son diseñadores.** Estos módulos dejan de fallar cuando el usuario no tiene acceso a las herramientas de depuración, por lo que puede utilizarlos sin ese perfil.
- **Se corrigen problemas de distribución en formularios, panel de control, calendario anual e iconos de la skin flexy2022.** Los campos de los formularios vuelven a distribuirse correctamente y el panel de control conserva sus módulos. El calendario anual se adapta al ancho disponible y permite abrir los días con un toque; también se corrigen su apariencia y algunos iconos.
- **Las vistas de la aplicación sin conexión y las descripciones de sus módulos se muestran correctamente.** También se traducen las descripciones de los módulos y las páginas en los idiomas incluidos en la aplicación.
- **Los recorridos guiados continúan si no pueden abrir una pantalla.** Se omiten los pasos de esa pantalla y el recorrido prosigue con los siguientes.
- **La foto de perfil se actualiza al cambiarla desde el menú, sin recargar la página.** La imagen nueva también se refleja en los elementos de la interfaz que muestran el perfil. El cambio funciona al editar la foto desde el menú o desde el formulario de usuario.
- **La invitación al recorrido ya no aparece encima de otros avisos o ventanas.** Si la pantalla está ocupada, la invitación espera a que quede libre. Si no se libera durante un minuto, aparecerá en la siguiente visita.
- **En la skin 2022 ya no aparece un contador sin formato en las tarjetas de grupos de ajustes.** El contador sigue visible como distintivo en la skin 2026. En la skin 2022, donde no tiene un diseño adecuado, queda oculto.
- **Las tarjetas informativas vuelven a ocupar el ancho de su espacio y muestran sus datos con más contraste en la skin 2022.** Los iconos recuperan su posición al borde de cada tarjeta y los datos importantes se leen mejor. Las fichas informativas independientes mantienen su tamaño habitual.
- **Se corrigen la traducción del registro de errores cuando la lista está vacía y la ordenación desde el menú de opciones.** La lista de errores muestra traducidos sus textos y filtros aunque todavía no haya registros. También se corrige el fallo intermitente al ordenar desde el menú de opciones.
- **Las páginas de la skin 2026 aprovechan mejor el espacio y evitan barras de desplazamiento innecesarias.** Se ajustan márgenes, alturas y zonas de redimensionado para que el contenido quepa mejor y los controles no interfieran con títulos ni ayudas. Las páginas dejan espacio bajo el último módulo y equilibran los márgenes respecto a la barra lateral, a la vez que reducen el espacio vacío sobre el contenido. El cursor de redimensionado solo aparece en zonas válidas; en la rejilla, los formularios y gráficos muestran todo su contenido y se adaptan al tamaño del módulo.
- **Los menús del objeto dejan de repetir procesos y acciones que ya aparecen en la barra.** Se conserva la opción configurada expresamente en la barra, incluidas acciones que abren una ventana nueva. Además, el menú vuelve a abrirse en su posición correcta sin desaparecer.
- **Las tarjetas de plantillas de la skin clásica son legibles en modo oscuro.** El color del texto se adapta al fondo oscuro sin alterar la apariencia en modo claro.
- **Los administradores pueden abrir su ficha desde «Mi perfil» en la nueva skin.** La opción lleva a la ficha del usuario conectado y también está disponible en la vista de usuario para quienes tienen permisos de administración.
- **La copia de excepciones al portapapeles funciona con caracteres especiales.** Ciertos caracteres del texto de la excepción ya no interrumpen la acción de copia.
- **Se corrige la traducción de cadenas cuando existen claves duplicadas.** Las cadenas afectadas se traducen correctamente aunque compartan una clave primaria. También se corrigen claves duplicadas que podían interferir con las traducciones cargadas desde los datos de la aplicación.
- **Se corrige la compatibilidad de fechas y se evita que los estilos de Blazor afecten a otras páginas.** Las fechas mantienen el formato esperado por la interfaz existente. Además, los estilos de las páginas Blazor quedan aislados para no alterar el aspecto de otras páginas.

### Notificaciones

- **Puedes abrir desde la campana los correos no leídos y ver cómo su contador se actualiza al momento.** Al abrir un correo, la campana se cierra y el contador de mensajes no leídos disminuye sin esperar a una tarea posterior.
- **El sonido de las notificaciones deja de repetirse continuamente cuando llegan muchas a la vez.** La corrección evita el timbre continuo durante la ejecución de procesos programados.
- **Se corrige un fallo de conexión que impedía recibir correctamente las notificaciones en tiempo real.** El ajuste afecta a la conexión que utiliza la aplicación para recibir actualizaciones en directo.

### Procesos

- **El proceso ERP posterior al inicio de sesión también se ejecuta para usuarios invitados.** Así, los accesos de invitados siguen el mismo flujo posterior al inicio de sesión que los demás usuarios.
- **Se corrige la descarga de documentos desde procesos integrados.** La gestión de las descargas procesa correctamente la descodificación y las referencias de los documentos.
- **ABH Sign interpreta correctamente la información de créditos de firma.** Esto evita errores al procesar los créditos recibidos por el servicio de firma.
- **Se corrigen la descarga de la plantilla y la importación de datos desde Excel.** El icono de descarga vuelve a ofrecer la plantilla necesaria para preparar los datos. También se corrige el proceso para que puedas cargar los datos desde Excel sin el problema anterior.
- **Los trabajos en estado de error se pueden reiniciar para volver a ejecutarse.** Así, los trabajos que no terminaron correctamente pueden ponerse de nuevo en marcha.
- **Se corrigen errores de traducción y serialización al usar la aplicación sin conexión.** Los datos se procesan correctamente en el modo sin conexión.
- **Se corrige el funcionamiento de la integración de Redsys.** La integración vuelve a procesar correctamente sus operaciones.
- **Los procesos de creación de parámetros encuentran las bibliotecas aunque estén en distintas rutas.** Se corrige el problema que impedía localizar la biblioteca necesaria cuando no estaba en la ruta esperada.
- **Se corrigen errores al ejecutar procesos con código C#.** Los procesos que incorporan código C# pueden ejecutarse sin los errores corregidos en esta versión.

### Rendimiento

- **La aplicación evita las recargas repetidas tras reiniciar el grupo de aplicaciones.** Así se reducen las recargas simultáneas y se mejora la estabilidad mientras se recupera el servicio. También se evitan reconstrucciones innecesarias de datos al cargar páginas.

### Seguridad

- **Los usuarios autenticados ya no pueden obtener la clave con la que se firman los tokens.** La clave se genera en la configuración durante el primer inicio, pero ya no se entrega mediante una dirección accesible para usuarios autenticados. Así se evita que puedan utilizarla para crear sus propios tokens.
- **Se validan las direcciones externas y los destinos de retorno para evitar conexiones o redirecciones no seguras.** La obtención de metadatos de clientes MCP se limita a direcciones públicas. Los retornos de inicio de sesión y cambio de contraseña se restringen a páginas de la aplicación, y las llamadas de decisión, a direcciones públicas o permitidas.
- **Puedes iniciar sesión y acceder a descargas e informes mediante un token incluido en la URL.** El token se conserva durante los redireccionamientos, incluso si se solicita iniciar sesión antes de abrir el enlace.

### Seguridad de la WebAPI

- **IIS admite las peticiones PUT y DELETE a la WebAPI y muestra los errores devueltos por el backend.** Las respuestas de error se conservan tal como las envía el backend, incluso cuando el frontend y el backend están en servidores distintos.
- **Las listas de la WebAPI ya no muestran el texto asociado a propiedades ocultas.** También se omite la descripción de un valor de búsqueda cuando su propiedad está marcada como oculta.
- **Los filtros de seguridad por rol se aplican correctamente y se rechazan las condiciones no válidas en la WebAPI y MCP.** Las búsquedas relacionadas ya no hacen que las listas omitan el filtro de seguridad. Las condiciones que podrían eludirlo se rechazan en lugar de devolver registros no autorizados.
- **Las inserciones por la WebAPI ejecutan los procesos asociados a propiedades aunque no tengan dependencias.** Los valores calculados por esos procesos quedan disponibles para las dependencias que se evalúan después.
- **Se muestran errores más claros al definir la WebAPI y se evita una pantalla en blanco al acceder como invitado sin permiso.** Los usuarios invitados sin autorización reciben una respuesta en lugar de quedarse ante una página vacía. Los desarrolladores obtienen información más clara cuando falla una definición de la WebAPI.
- **La definición de la WebAPI solo muestra objetos habilitados.** Las vistas y sus colecciones dejan de aparecer cuando sus objetos están deshabilitados.
- **Se corrige la redirección de la WebAPI.** Al acceder a la WebAPI, la redirección vuelve a funcionar correctamente.
- **Se corrige un error al validar tokens de la WebAPI.** Las solicitudes que utilizan tokens pueden superar correctamente la validación.
- **La WebAPI acepta correctamente las peticiones que se envían sin contenido.** Se corrige el envío de estas peticiones para que no fallen cuando el cuerpo está vacío.

### Skins

- **Los botones del pie de edición del correo ya no tapan el botón Guardar en la skin 2026.** Quienes editan un correo pueden acceder al botón Guardar sin que lo cubran los demás controles del pie.
- **Se corrige la ruta para que se muestre el logotipo principal.** Con este ajuste, el logotipo principal vuelve a mostrarse correctamente en la aplicación.

### Tareas programadas

- **Se corrige el procesamiento de la información de las tareas programadas.** El cambio evita los fallos anteriores al gestionar la información de las tareas. Esto permite que su funcionamiento sea correcto.
- **Los objetos relacionados con tareas programadas aplican correctamente la seguridad configurada.** La seguridad configurada se aplica a estos objetos. Así, conservan las restricciones previstas.

## Obsoleto

### Configuración

- **Ya no aparece la opción de enlazar un objeto desde la pantalla de aplicaciones sin conexión.** La retirada afecta únicamente a esa opción de enlace. Se mantienen las opciones para crear y clonar objetos.

### Seguridad de la WebAPI

- **Se retiran las funciones de comprobación de conexión y activación del modo de mantenimiento.** Dejan de estar disponibles la comprobación de conexión y el proceso para activar el modo de mantenimiento.
