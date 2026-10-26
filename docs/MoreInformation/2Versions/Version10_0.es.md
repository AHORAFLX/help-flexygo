# Versión 10.0

Flexygo funciona sobre .NET 9, permite desplegar por separado la interfaz, el backend y la base de datos, y estrena la skin 2026 con barra lateral adaptable y nuevos accesos.

## Novedades

### Skins

- **Estrena la skin 2026, un rediseño completo con barra lateral adaptable y nuevos accesos.** Renueva las pantallas, los menús, las listas, los formularios, los paneles y los diálogos, con nueva tipografía, colores y controles. Puedes contraer la barra lateral, acceder a alertas y a tu perfil, y usar Ctrl+K; la skin anterior sigue disponible.

    ![Estrena la skin 2026, un rediseño completo con barra lateral adaptable y nuevos accesos.](../../docs_assets/images/Versions/Version10_0/skin-2026.png)
- **La publicación de la base de datos conserva la configuración de la skin 2026.** Se incluyen la apariencia, los menús, los paneles y las páginas de la skin en los scripts de publicación. Esto permite que una instalación nueva arranque con esos elementos configurados.
- **Personaliza los recursos de las páginas de cuenta desde tu producto.** Puedes adaptar estilos, scripts e iconos de las páginas de acceso, registro y recuperación de contraseña. La personalización admite distintos niveles.
- **Puedes cambiar entre los temas claro, oscuro y del sistema.** La interfaz y algunos elementos integrados adaptan su apariencia al tema elegido. Si seleccionas el tema del sistema, Flexygo sigue la preferencia de apariencia de tu dispositivo.
- **Puedes utilizar variables CSS personalizadas en tus estilos.** Flexygo admite variables CSS propias al aplicar estilos. Esto te permite ampliar las opciones para adaptar la apariencia de la aplicación.

### Actualizador

- **Actualiza, revierte o cambia de versión desde un asistente guiado que muestra el progreso y el resultado de cada operación.** El asistente reúne los pasos del proceso y comunica su estado y sus errores con claridad. También permite seguir la operación aunque se cierre la pestaña durante el inicio, y evita mezclar resultados de operaciones distintas.
- **Consulta las operaciones del actualizador en curso y sigue las iniciadas por otros administradores.** La pantalla indica quién controla cada operación y permite seguirla en modo de solo lectura cuando corresponde. Las pestañas del propietario pueden retomar una preparación interrumpida; además, el actualizador evita iniciar operaciones incompatibles y conserva correctamente los avances y resultados.
- **Consulta el historial de operaciones del actualizador y abre sus resultados y registros.** Puedes borrar el historial sin afectar a una operación activa. Así tienes a mano la información de operaciones anteriores cuando necesitas revisar su resultado.
- **Consulta registros en directo desde el asistente, con filtros por nivel y contexto y búsqueda.** El modo avanzado adapta la presentación de los registros y del progreso a pantallas pequeñas. También puedes alternar entre el resumen y el registro, consultar el proceso mientras sigue activo y cancelar ante un error.
- **Consulta el resultado de cada actualización o eliminación, con la versión que queda en uso y los detalles de los errores.** Puedes copiar la información técnica del error, incluido su código. Al cerrar el resultado, se actualiza el listado de versiones.
- **El asistente comprueba los requisitos y los bloqueos antes de permitir continuar con la actualización.** Los avisos que no son bloqueantes permiten seguir, mientras que los errores impiden avanzar. También se identifica quién mantiene bloqueada la aplicación cuando es posible reconocer al usuario y al equipo, incluidos los bloqueos de red.
- **Resuelve conflictos de configuración durante una actualización y consulta las versiones de la aplicación.** Al resolver un conflicto manualmente puedes elegir un valor en blanco, el anterior, uno personalizado o el de la versión nueva. También puedes reanudar una actualización interrumpida y ampliar la ventana a pantalla completa.
- **Consulta y gestiona las versiones disponibles, instaladas o eliminadas desde la página de versiones.** La información se presenta con una interfaz renovada, traducida y ordenada por estado y número de versión. Desde el actualizador también puedes aplicar la última versión disponible y eliminar versiones descargadas.
- **La skin 2026 muestra la versión instalada y puede avisar de las novedades disponibles.** La versión instalada aparece en el pie de la barra lateral y el aviso de novedades se muestra una vez por versión principal y secundaria. Desde el aviso puedes consultar el detalle de la actualización, que abre el gestor de versiones.
- **El actualizador reconoce y compara versiones de paquetes preliminares, y permite configurar si las busca.** La búsqueda tiene en cuenta la versión instalada y la nomenclatura de los paquetes beta. Esto permite identificar correctamente las versiones preliminares durante el proceso de actualización.
- **Instala y actualiza la base de datos desde el configurador, con seguimiento del progreso y los errores durante el mantenimiento.** Las tareas de actualización pueden ejecutarse en segundo plano y sus errores se muestran durante el proceso. También puedes validar bases de datos ERP, y las tareas necesarias para actualizar pueden continuar en modo de mantenimiento.
- **Actualiza la base de datos de Flexygo en entornos Docker.** El proceso gestiona errores de sesión y redirección para evitar problemas al continuar o volver a la aplicación. Si la actualización falla, se muestra un mensaje más descriptivo.
- **Actualiza Flexygo en una instalación Docker desde la página de mantenimiento.** El proceso muestra información sobre la actualización y permite gestionar el mantenimiento de la instalación.
- **El proceso de actualización admite repositorios locales, credenciales de conexión y rutas de descarga en Linux.** La actualización de la base de datos puede usar credenciales cuando la instalación las requiere. Al terminar, el proceso vuelve a la aplicación.
- **Revierte una actualización si el proceso no termina correctamente.** La opción permite volver atrás y recuperar el estado anterior cuando surgen problemas durante la actualización.
- **Puedes actualizar la versión de la base de datos desde el proceso de actualización.** Esta capacidad forma parte de la gestión de versiones de Flexygo y permite actualizar también la base de datos durante el proceso.
- **Consulta las versiones de la aplicación y gestiona las versiones disponibles e instaladas.** La información de versiones incluye cuáles están disponibles, instaladas o eliminadas. Esto permite conocer y administrar las versiones de la aplicación desde Flexygo.

### Configuración

- **Los administradores pueden activar el modo de mantenimiento y mostrar un aviso mientras la aplicación no está disponible.** El control está en el panel de administración y se muestra una página pública durante el mantenimiento. Las páginas abiertas se actualizan al cambiar el estado, y quienes visitan el sitio pueden volver a su página cuando termina.
- **Puedes configurar el separador que se utiliza al exportar archivos CSV.** Así puedes adaptar el formato de los archivos exportados a las necesidades de cada aplicación.
- **Configura aplicaciones sin conexión desde una pantalla organizada por secciones.** La pantalla reúne objetos, menús, páginas, código, recursos y sincronización, e incluye el historial de sincronización y un emulador para ver la aplicación en un dispositivo móvil. Ya no aparece la opción de enlazar un objeto desde esta pantalla, aunque se mantienen las opciones para crear y clonar objetos.
- **Actualiza las pantallas de todos los usuarios conectados o selecciona sesiones concretas.** La acción está disponible en el menú de acciones de la información de versión. Puedes buscar y seleccionar usuarios para enviarles la actualización.
- **Los administradores pueden consultar la configuración y el estado de los procesos en pantallas de solo lectura.** La configuración se muestra por separado para la aplicación y el servidor. También se puede consultar el estado de los procesos, la base de datos y los recursos disponibles.
- **Puedes abrir la configuración de la página desde un botón junto a la herramienta para organizar módulos.** El acceso está disponible en modo de desarrollo y sigue la página actual al navegar a otra, sin reconstruir la cabecera.
- **Configura la aplicación con valores específicos para cada entorno.** La aplicación puede cargar y guardar ajustes propios de cada entorno, como desarrollo. Así, esos valores no se mezclan con la configuración general.
- **Publica una base de datos desde el configurador.** La herramienta permite realizar esta tarea desde la propia configuración de la aplicación.

### Correo electrónico

- **La integración con el correo web puede renovar sus credenciales de acceso.** Se añade una notificación para gestionar la autenticación y se corrige el proceso de renovación de credenciales.

### Despliegue

- **La exportación de proyectos admite archivos grandes y permite definir su plantilla, contenido y acceso desde el área de administración.** El proceso admite proyectos de más de 2 GB, comprueba el espacio disponible y muestra el progreso y el tiempo transcurrido. Puedes elegir carpetas y archivos personalizados; los repositorios de documentos e imágenes y otros archivos grandes se excluyen de forma predeterminada. La plantilla corresponde al producto instalado, aunque puedes personalizarla; la ventana muestra la plantilla y la versión, avisa de orígenes reservados y propone un destino disponible. Desde las herramientas del área de administración, los administradores autorizados pueden exportar la aplicación instalada como proyecto de producto en un ZIP y consultar el registro de exportaciones y errores.
- **En instalaciones con frontend y backend separados, las operaciones con archivos funcionan entre ambos servidores.** La aplicación puede transferir archivos durante las operaciones de carga, descarga y eliminación. Este soporte también funciona al acceder mediante suplantación.
- **Puedes generar imágenes de Flexygo con Docker y desplegar también su base de datos.** La configuración de Docker permite iniciar conjuntamente las partes de la aplicación y obtener las cadenas de conexión desde la configuración disponible en el entorno de despliegue. También puedes integrar RDS y aplicar cambios de configuración durante la actualización.
- **Puedes publicar bases de datos de datos desde el configurador.** La publicación admite bases de datos vacías o que no tienen su archivo de definición. También se corrige un error que podía producirse al actualizar bases de datos en entornos Docker.

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

- **Configura cuántos intentos fallidos bloquean una cuenta y durante cuánto tiempo.** Ajusta el límite de intentos y la duración del bloqueo desde la configuración. Así puedes adaptar esta medida de seguridad a las necesidades de tu aplicación.
- **Consulta las noticias en la página de inicio de sesión y desactiva su visualización cuando lo prefieras.** La opción permite decidir si las noticias aparecen durante el acceso a la aplicación.
- **Personaliza las páginas de inicio de sesión, recuperación de contraseña y registro.** La personalización también está disponible en las páginas de autenticación y gestión de contraseña de los productos creados con Flexygo.
- **Puedes iniciar sesión con autenticación multifactor y añadir un paso de verificación.** El proceso incluye las pantallas y los mensajes necesarios para completar la verificación. También se adaptan los correos y las traducciones relacionados con el acceso, el registro y la recuperación de contraseña.
- **Inicia sesión mediante LDAP y completa correctamente el proceso de acceso.** LDAP se incorpora como método de autenticación y puede configurarse para acceder con las credenciales de la organización.
- **Inicia sesión mediante SSO y, si lo deseas, recuerda el acceso.** Puedes configurar la integración y Flexygo comprueba que la licencia cubra los módulos activos. La pantalla no ofrece opciones de SSO que no estén disponibles.
- **Puedes iniciar sesión sin conexión mediante SSO con ABH o LDAP.** Esta opción está disponible para los accesos SSO que utilizan esos métodos.
- **Accede mediante Cl@ve con un proceso de autenticación corregido.** Se ajustan la respuesta y la relación entre las solicitudes y respuestas de Cl@ve. También se corrigen el enlace de registro en instalaciones con ruta base y la carga durante el acceso, y se muestran los errores con más claridad.
- **Puedes restablecer la contraseña y acceder con una confirmación, incluso en instalaciones con ruta base.** Al completar el restablecimiento, se inicia la sesión automáticamente. Se corrigen los enlaces de correo y la generación de direcciones para las páginas de acceso y gestión de contraseña.
- **Gestiona la contraseña de tu cuenta desde un proceso específico.** La opción permite acceder a la gestión de contraseña desde un proceso dedicado. También se corrige la integración del acceso mediante Cl@ve.
- **Disfruta de una página de inicio de sesión renovada, con la opción de recordar la sesión.** La pantalla adopta el estilo habitual de Flexygo y permite usar Intro para continuar. También se ajustan las cookies, las traducciones, el inicio y cierre de sesión, y el acceso con correo o con claves que difieren en mayúsculas y minúsculas.
- **Puedes crear una cuenta con un proceso de registro renovado.** Se actualizan la página de registro, sus traducciones y los correos asociados.
- **El proceso para restablecer la contraseña estrena una experiencia renovada.** Se actualizan la página, los mensajes y los correos relacionados con el restablecimiento.
- **Si falla la conexión durante el acceso, Flexygo vuelve a intentarlo hasta tres veces.** Los nuevos intentos permiten continuar el proceso de inicio de sesión ante un error de conexión.
- **Puedes iniciar sesión y gestionar el acceso a tu cuenta.** Se adaptan las plantillas de acceso, registro y recuperación de contraseña. La selección de idioma queda oculta temporalmente.

### Instalación

- **Puedes configurar una instalación desatendida que se completa automáticamente al iniciar el backend.** Permite crear, actualizar o reutilizar bases de datos, además de establecer el nombre del proyecto y la contraseña de administración. Si falla algún paso, la instalación lo comunica mediante un inicio fallido.
- **El asistente crea un paso por cada conexión de datos activa que aún necesita configuración.** Así, los pasos del asistente se adaptan a las conexiones definidas en cada instalación.
- **Instala y actualiza Flexygo desde el configurador, incluida la creación y actualización de la base de datos.** El asistente reúne estas tareas en las pantallas de configuración y permite consultar el progreso del despliegue. Muestra la conexión cuando la base de datos ya está configurada y permite desplegarla también en entornos de desarrollo. Descarga e instala los paquetes necesarios, y contempla operaciones afectadas por archivos o recursos bloqueados.
- **La configuración inicial renovada permite registrar usuarios y configurar el proyecto, la base de datos y el correo.** El flujo incorpora ajustes visuales y contempla que el nombre del proyecto o el título del estado estén vacíos. Así puedes completar la puesta en marcha desde la configuración inicial sin esos datos.

### Integraciones

- **La integración MCP mejora la selección de herramientas y el registro de asistentes mediante metadatos.** Los asistentes pueden distinguir qué herramientas consultan datos, modifican información o admiten reintentos, lo que les ayuda a elegir cómo utilizarlas. También pueden registrarse a partir de su documento de metadatos sin duplicarse; la respuesta de inicio de sesión incluye el emisor y sigue disponible el registro dinámico de clientes. Además, los procesos de más de diez minutos ya no fallan. Flexygo.Library mantiene la versión de MCP compatible con la aplicación.

### Inteligencia artificial

- **Se incorporan nuevos modelos GPT para las funciones de inteligencia artificial.** Los modelos disponibles se actualizan para su uso en la configuración de inteligencia artificial. Desde allí se pueden seleccionar los modelos disponibles para estas funciones.

### Interfaz

- **En la skin 2026, edita los valores directamente en las listas y añade filas desde la lista o el formulario.** Cada fila se guarda al salir de ella y conserva el menú de acciones del registro. Las listas también mantienen los cambios al ordenar o actualizar, muestran correctamente valores y formatos, y permiten redimensionar columnas y desplazarse horizontalmente. En espacios estrechos, los combos y las listas se ajustan al ancho disponible.
- **Desde el panel de control 2026 puedes consultar y editar la página de inicio de cada perfil.** Cada perfil tiene una vista previa esquemática basada en su configuración. La vista previa no ejecuta la página ni guarda cambios, por lo que permite revisar la configuración sin modificarla.
- **Estrena calendarios renovados con vista anual, filtros y selección de rangos.** Incluyen una leyenda y opciones para configurar el solapamiento y el horario laboral. En la vista anual puedes consultar los registros de cada día, y los cambios de otras personas se reflejan en la vista mensual. Los colores de las marcas se mantienen legibles en los distintos modos.
- **La nueva interfaz incorpora pantallas de administración y una navegación renovada.** Incluye administración de usuarios, roles, propiedades, procesos, ajustes y otros elementos. La navegación añade acceso rápido, barra lateral plegable y panel redimensionable.
- **Los perfiles de administrador e invitado ya tienen avatar, y la foto de perfil se muestra en el pie y la cabecera.** La imagen del perfil se comparte entre ambas skins, incluida la clásica. Al cambiar la foto de un usuario, se refleja también en esos espacios.
- **Los administradores pueden cambiar una página al diseño libre y conservar la disposición de sus módulos.** Al activar la opción, los módulos se colocan en la rejilla según las zonas que ya aparecen en la página. El cambio se puede guardar o descartar.
- **Los administradores pueden arrastrar y redimensionar módulos en la rejilla de una página.** El modo de colocación permite reorganizar los módulos y ajustar su tamaño directamente en la página. Los cambios se pueden guardar o descartar.
- **Las páginas con diseño libre muestran cada módulo en la posición y el tamaño definidos.** En pantallas estrechas, los módulos pasan a una columna y mantienen el orden de lectura establecido. Las páginas sin diseño libre siguen mostrándose como antes.
- **Los administradores pueden ofrecer visitas guiadas por el producto a los usuarios autorizados.** La visita se configura con pasos y se añade a una página como un módulo; la seguridad del módulo determina quién puede verla y volver a iniciarla. Los pasos pueden señalar elementos, realizar acciones y guiar al usuario por distintas pantallas. El recorrido también se ha revisado para continuar aunque algún paso o elemento no esté disponible y evitar que la visita bloquee la página.
- **Los desarrolladores pueden abrir desde la paleta la configuración de la búsqueda global.** La opción aparece en la parte inferior de la paleta y permite volver al gestor de filtros genéricos para configurar la búsqueda. Solo está disponible en modo de desarrollo.
- **La nueva skin reúne el tema, el perfil y el cierre de sesión en un menú accesible desde el pie de página.** El menú muestra también los datos de la persona conectada y permite cambiar entre tema claro y oscuro. El cambio de tema se aplica en pantalla al seleccionarlo.
- **Al organizar una página, también puedes arrastrar los módulos que no tienen cabecera.** Estos módulos muestran una franja de arrastre mientras está activa la organización y la ocultan al salir de ese modo. La configuración de la página se abre lateralmente para dejar visible el contenido que estás organizando.
- **Puedes mostrar los resultados de búsqueda sobre la página, sin sustituir su contenido.** El modo de paleta es opcional y agrupa los resultados por criterio, con su título, descripción y destino. La búsqueda responde con más rapidez y no envía al navegador datos que no necesita mostrar.
- **Las tarjetas de indicadores ofrecen descripciones y tendencias opcionales, con una disposición más clara.** Las tarjetas de una fila comparten anchura y altura, y sus valores y pies quedan alineados aunque algunas incluyan información adicional. Si aparecen dentro de una lista, evitan duplicar el marco: la lista conserva el suyo y la tarjeta mantiene su contenido.
- **La interfaz de Flexygo Core adopta un diseño más actual.** Se actualizan elementos visuales de la navegación y del menú de usuario, junto con la paleta de colores. El nuevo menú incluye las traducciones que faltaban y los ajustes completan el estilo visual en distintas skins.
- **Puedes acceder a las páginas de Flexygo mediante URL amigables.** Esta nueva forma de resolver las direcciones está disponible en el núcleo de Flexygo.

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

- **Puedes controlar quién ejecuta cada proceso, también si no está vinculado a un objeto, y limitarlo con condiciones SQL.** Configura permisos para usuarios, roles y facultades desde sus pantallas de seguridad o desde la ficha del proceso. Las condiciones opcionales se comprueban al validar el permiso y solo permiten ejecutar el proceso si devuelven 1 o true; si no se cumple la condición, el proceso queda oculto en menús y barras de herramientas.
- **Consulta y modifica permisos de usuarios, roles, facultades y objetos desde una tabla de seguridad.** La tabla muestra los permisos por acción y permite añadir condiciones, bloquear o eliminar reglas directamente. Puedes filtrar los elementos que tienen reglas y quitar todas las reglas de una familia. También puedes abrir el gestor desde usuarios, roles, facultades y objetos con el elemento ya seleccionado, consultar las acciones disponibles y revisar una vista previa antes de aplicar cambios; la pantalla está traducida a los siete idiomas disponibles.
- **Consulta la seguridad de objetos, módulos, propiedades y procesos desde una misma pantalla del workbench.** La pantalla permite acceder a cada una de estas áreas y abrir la vista con un elemento concreto seleccionado. Desde la pantalla de un objeto puedes abrir su configuración de seguridad; al cambiar de ámbito se conserva el objeto seleccionado y una nueva búsqueda limpia la selección anterior. La skin 2022 conserva su pantalla anterior.
- **Configura condiciones de seguridad de objetos eligiendo una propiedad, un operador y un valor.** El asistente muestra las propiedades del objeto y permite seleccionar valores de contexto, sin tener que recordar nombres de tablas o marcas especiales. Antes de guardar, puedes probar la condición y consultar el SQL ejecutado.
- **La skin 2026 incorpora una pantalla para consultar y gestionar la seguridad de roles, usuarios y facultades.** La pantalla reúne reglas y políticas predeterminadas, explica qué regla determina los permisos y muestra las condiciones y el orden de aplicación de roles, facultades y usuarios. Permite crear, modificar y eliminar reglas, comparar permisos entre objetos y gestionar permisos de campos y elementos de navegación. También muestra las condiciones de los módulos que determinan el acceso; se accede desde el área de trabajo de la skin 2026 y la pantalla anterior sigue disponible en flexy2022.

### Seguridad de la WebAPI

- **La WebAPI y MCP limitan por defecto las respuestas a las propiedades definidas en cada objeto.** El ajuste incluye las propiedades definidas y las claves, tanto en las respuestas como en los esquemas. Así se omiten columnas que no forman parte de la definición del objeto o que no están disponibles en todas las instalaciones.
- **Flexygo incorpora un servidor MCP para asistentes y aplica los permisos del token en la WebAPI.** El servidor MCP está desactivado inicialmente y tiene permisos propios por usuario y rol, además de pantallas de administración. La WebAPI explica por qué rechaza las operaciones no permitidas y no las incluye en OpenAPI.
- **La barra de navegación incorpora búsqueda y la WebAPI permite operaciones masivas y consultas de relaciones.** La búsqueda ayuda a localizar contenido desde la navegación. Los desarrolladores pueden realizar operaciones masivas y consultar relaciones a través de la WebAPI.
- **Los desarrolladores pueden consultar en Scalar las definiciones de API del backend y la WebAPI.** Scalar ofrece una referencia de las API de Flexygo para quienes desarrollan sobre la plataforma.
- **Puedes exponer entidades de la aplicación mediante la WebAPI.** La WebAPI incorpora autenticación mediante tokens y opciones para definir y consultar entidades. La configuración de orígenes permitidos admite comodines para conectar otras aplicaciones con Flexygo.

### Tareas programadas

- **Ejecuta scripts como tareas programadas.** Puedes configurar scripts para que se ejecuten como trabajos programados. La aplicación incorpora la configuración necesaria para definirlos y ejecutarlos.
- **Puedes desactivar las tareas programadas desde la configuración de la aplicación.** Utiliza esta opción cuando quieras impedir la ejecución de las tareas programadas en la aplicación. Se configura desde los ajustes de la aplicación.

## Mejoras

### Despliegue

- **Flexygo funciona sobre .NET 9 y permite desplegar por separado la interfaz, el backend y la base de datos.** Puedes instalarlo en IIS, como servicio independiente o en Docker, tanto en Windows como en Linux. La interfaz, el backend y la base de datos pueden ejecutarse en un mismo servidor o en servidores distintos, y puedes revertir actualizaciones desde el asistente de versiones.

    ![Flexygo funciona sobre .NET 9 y permite desplegar por separado la interfaz, el backend y la base de datos.](../../docs_assets/images/Versions/Version10_0/net9-architecture.png)
- **Las traducciones de producto se conservan al publicar los datos de configuración.** Puedes incluir en la publicación las traducciones asociadas a elementos de producto. Las traducciones pertenecientes a módulos de prueba se pueden excluir.
- **Puedes decidir qué archivos JavaScript y CSS se incluyen en los archivos agrupados.** También mejora la carga de los estilos personalizados y evita errores al optimizar archivos cuando está instalado el plugin de PDF. Los plugins personalizados se agrupan por separado de los del sistema, y el proceso es más compatible con instalaciones alojadas dentro de una aplicación IIS.
- **Los scripts de despliegue son compatibles con Linux.** Esta compatibilidad facilita el despliegue de Flexygo en entornos Linux.

### Actualizador

- **Consulta las notas completas de cada versión, incluidas las preliminares, y compara sus novedades desde la página de versiones.** El historial muestra cinco versiones por página y carga más cuando lo solicitas. También incluye las notas publicadas del paquete Backend y permite identificar qué novedades posteriores no están en la versión instalada.
- **Las pantallas de transición y eliminación del asistente muestran con más claridad el estado de cada operación.** El cambio de versión mantiene visible la transición hasta que la aplicación vuelve a estar disponible. La pantalla de eliminación permanece a la vista antes de iniciar el borrado, y los pasos del asistente cambian con transiciones más fluidas que respetan la preferencia de movimiento reducido.
- **El asistente presenta con más claridad los conflictos, los requisitos y el progreso de la actualización.** Se reorganiza la información de los pasos de conflictos y requisitos, y se mejora la presentación de la ventana de progreso. También se actualizan los textos en español e inglés.
- **El actualizador reintenta operaciones de archivos si fallan temporalmente y genera un informe si falla el despliegue de la base de datos.** Los reintentos ayudan a completar actualizaciones ante fallos puntuales al gestionar archivos. El informe facilita revisar los problemas de despliegue de la base de datos.
- **Los registros del actualizador se guardan separados por proyecto.** Cada proyecto tiene sus propios registros, lo que facilita localizar los correspondientes a una instalación concreta.
- **Puedes continuar con la actualización si los requisitos muestran avisos que no son bloqueantes.** Los errores siguen impidiendo avanzar. También se avisa si la tabla de registros del actualizador supera el límite configurado.

### Configuración

- **Los secretos de configuración permanecen cifrados en IIS y en Docker en producción.** En otros entornos, se descifran al iniciar la aplicación. Si falta un secreto de Docker o no se puede leer, la aplicación no inicia en lugar de crear una clave nueva.
- **El perfil 2026admin se asigna al administrador y la opción para cambiar de perfil solo se muestra a administradores.** El administrador deja de ver «Decisions» en el menú. Los demás usuarios tampoco ven una opción que no pueden utilizar.
- **Los errores de conexión a SQL se identifican correctamente ante distintos problemas de red.** Esto ayuda a distinguir problemas al resolver el servidor, tiempos de espera y conexiones rechazadas.
- **El panel de configuración rápida resulta más legible en la skin 2026.** Se mejora la lectura de las etiquetas, los títulos de sección y las ayudas. También se ajusta el aspecto del botón para guardar.
- **La configuración del correo aplica SSL y propone un puerto predeterminado cuando lo activas.** Durante la configuración, se aplica el valor SSL seleccionado y se rellena el puerto para las conexiones SSL. Así no tienes que introducirlo manualmente en ese caso.
- **Los grupos de configuración muestran cuántas opciones contienen y se presentan en tarjetas más claras.** La disposición ocupa menos espacio y facilita localizar cada grupo. Al pasar el cursor, la acción para editarlo permanece visible.
- **La acción para convertir la base de datos de desarrollo indica claramente su efecto y advierte de sus consecuencias.** Su nombre deja de confundirse con el modo de desarrollo de la interfaz. Además, la acción aparece marcada como peligrosa.
- **Puedes buscar y configurar los temas de gráficos desde la administración de Flexygo.** Los temas aparecen en la navegación y en las búsquedas de configuración. También pueden asignarse a los módulos de gráfico.
- **Flexygo crea una configuración predeterminada si la aplicación arranca sin archivo de configuración.** Esto permite poner en marcha la aplicación cuando todavía no se ha creado ese archivo.
- **Puedes configurar el puerto, el esquema y la URL de Flexygo.** Estos valores se establecen en la configuración de la aplicación para adaptarla al entorno donde se ejecuta.

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

- **El proceso posterior al inicio de sesión se ejecuta una sola vez, también para invitados y accesos con SSO o segundo factor.** Si el proceso falla, el error se registra y se muestra en la primera página, pero no impide acceder a la aplicación. En los accesos con SSO o segundo factor también se genera correctamente el token de sesión.
- **Flexygo comprueba las condiciones de seguridad antes de permitir el acceso.** Se validan la dirección IP, los bloqueos y la licencia, incluida la compatibilidad con licencias antiguas. También se ajustan la recuperación de contraseña y el control de intentos desde una dirección IP.
- **Las páginas de cuenta no quedan bloqueadas al volver atrás y muestran información más clara al recuperar la contraseña.** Se distinguen los problemas de correo no confirmado y de configuración del envío de correo. Los errores de los procesos de cuenta también aparecen traducidos.
- **Puedes crear usuarios con barras invertidas en el nombre de usuario.** La validación del nombre de usuario acepta este carácter al crear una cuenta.

### Inteligencia artificial

- **Las solicitudes de inteligencia artificial tienen un tiempo de espera limitado.** Así, una llamada que no responde no queda pendiente indefinidamente. Esto permite que la aplicación continúe funcionando aunque el proveedor de inteligencia artificial no responda.

### Interfaz

- **Los iconos de Flexygo se muestran con los nombres actualizados de Font Awesome 7.** La actualización abarca iconos de pantallas, vistas, navegación y otros elementos de la aplicación. De este modo, los iconos se muestran con la nomenclatura actualizada.
- **La skin 2026 renueva el correo, las notificaciones y el chat de IA para facilitar su uso.** En el correo puedes consultar las carpetas junto a la lista, filtrar por mensajes leídos, buscar por asunto y abrir cada mensaje en un panel lateral. Las notificaciones incluyen filtros y la opción de marcarlas todas como leídas; el chat de IA se muestra en un panel compacto. La skin flexy2022 mantiene su aspecto actual.
- **El menú de acceso rápido de la interfaz 2026 permite volver al panel de control o al cuadro de mando desde cualquier página.** Los accesos aparecen en una sección de administración del menú. Están disponibles aunque el menú del proyecto no incluya ese grupo.
- **La skin 2026 mejora la presentación y el uso de ventanas, listas, combos y asistentes.** Vuelven a mostrarse las ayudas de los botones y se ordenan mejor las listas y las pestañas. También se recupera el asistente de plantillas y se facilita la creación de objetos sin conexión; la presentación de combos y ajustes de propiedades también mejora.
- **Las nuevas instalaciones de Flexygo comienzan con la interfaz 2026 y los nuevos usuarios heredan el perfil de quien los crea.** Las instalaciones existentes conservan su perfil y los productos no se ven afectados. El perfil de administración 2026 solo se ofrece a usuarios con el rol de administradores.
- **Copia los detalles técnicos de un error sin mostrar avisos adicionales.** El botón confirma visualmente la copia con un cambio de icono. Los desarrolladores también pueden utilizarlo como elemento compartido.
- **La skin 2026 mejora las listas, el uso en móviles y varias herramientas de trabajo.** Las agrupaciones y los encabezados de las listas se mantienen a la vista, y la edición es más rápida. En móviles, la navegación lateral se adapta a una hoja y las filas y controles resultan más cómodos al tacto. También se mejoran calendarios, gráficos y sincronización sin conexión.
- **Las pantallas de carga utilizan una nueva animación.** La animación muestra el logotipo o el indicador predeterminado según el contexto de carga. Así, la pantalla ofrece una señal visual mientras espera.
- **Los menús desplegables se muestran sin quedar recortados por el área que los contiene.** Su posición se ajusta respecto al control que los abre, incluso dentro de zonas con desplazamiento. Así, las opciones permanecen visibles al abrir el menú.
- **Los calendarios de flexy2022 recuperan una presentación similar a la anterior.** Se ajustan las vistas mensual y anual, la posición de los avisos emergentes y la alineación de la vista de planificación. El cambio solo afecta a la skin flexy2022.
- **Las vistas de la skin 2026 muestran sus campos y etiquetas con más claridad.** Las etiquetas y los valores largos se mantienen en una línea y se recortan cuando no caben. También mejora la separación entre filas y la presentación de los encabezados.
- **Los paneles laterales de administración del módulo son más cómodos de usar.** Las opciones de configuración, eventos, seguridad y relación con la página se muestran en paneles que dejan visible parte del contenido. Los controles quedan ordenados y el panel de configuración dispone de más espacio para sus campos y botones.
- **El emulador de la aplicación sin conexión mantiene visible el dispositivo y se adapta a ventanas estrechas.** Representa un iPhone 17 o un Samsung Galaxy S25 según el dispositivo seleccionado, con las dimensiones de pantalla correspondientes. El marco del iPhone queda a la misma altura que el del Samsung, sin cambiar el tamaño de la aplicación dentro del dispositivo.
- **La navegación sigue accesible al consultar la pantalla de configuración sin conexión en la skin 2026.** La barra lateral se pliega en lugar de desaparecer. Al cargar otra página, recupera el estado guardado.
- **La pantalla de seguridad ofrece una presentación más clara y espaciada en la skin 2026.** Los títulos, las etiquetas, los controles y el botón de guardado se distinguen mejor dentro del módulo. Esto facilita la consulta de sus opciones.
- **Las marcas de tarjetas nuevas se distinguen mejor en la skin 2026.** El ajuste mejora su visibilidad tanto en las tarjetas del tablero como en el indicador de la columna. Así, es más fácil identificar las novedades.
- **Los enlaces y las etiquetas pulsables se distinguen mejor en la skin 2026, tanto en modo claro como oscuro.** Los enlaces reales aparecen subrayados y con un color propio. Las etiquetas que actúan como controles usan el color del texto y se subrayan al pasar el cursor.
- **Las opciones de administración del módulo quedan más ordenadas.** El engranaje abre el módulo y las demás opciones se agrupan en otro menú. En modo de desarrollo, este menú reúne las opciones de seguridad, eventos y relación con la página.
- **Las ramas del panel de navegación muestran si están abiertas o cerradas y se pueden desplegar sin cerrar el panel.** El indicador aparece en las ramas que contienen opciones y cambia de orientación al abrirlas; las opciones sin elementos no lo muestran. Las opciones finales siguen navegando a su destino y cerrando el panel, y al abrir un grupo se cierra cualquier menú de opciones que estuviera abierto.
- **Los avisos y las indicaciones del configurador de páginas se leen mejor en la skin 2026.** Se aumenta el contraste del aviso sobre el origen de la página y de la indicación que aparece al situar el cursor sobre un módulo. Así, ambas referencias resultan más visibles.
- **La lista de cambios recientes, los mensajes de inicio y los temas de gráficos muestran traducciones cuando están disponibles.** Se utilizan las traducciones existentes para los tipos de elemento y sus nombres, sin alterar los nombres asignados por cada cliente. Los mensajes de los módulos de inicio también se traducen cuando no hay información que presentar.
- **La nueva skin muestra traducidos sus menús, asistentes y plantillas en los idiomas disponibles.** Se traducen las opciones del perfil, el panel de control y el espacio de trabajo de objetos. Así, estas pantallas ya no mezclan textos en inglés con el idioma seleccionado.
- **La navegación de la skin 2026 conserva el pie de menú al actualizarse y permite abrir las opciones del perfil.** Las opciones del pie no desaparecen al refrescar el menú. Desde el menú de perfil, la opción de idioma vuelve a abrir el formulario correspondiente.
- **Las iniciales de los avatares y el contenido de los avisos emergentes se leen con mayor claridad.** El contraste de las iniciales se ajusta al fondo del avatar. Los avisos emergentes tienen un estilo coherente con el resto de la interfaz.
- **La línea temporal y el calendario anual se presentan con mayor claridad en la skin 2026.** Se distinguen mejor los elementos seleccionados y los días con actividad, y el día actual queda señalado. Los avisos emergentes y los estados vacíos también resultan más legibles.
- **La vista de parámetros se integra mejor con la skin 2026.** La nueva presentación se aplica únicamente a esta vista. No altera cómo se muestra en la skin Flexygo 2022.
- **El modo de diseño de la rejilla se abre desde un botón integrado en la navegación.** El acceso aparece en la interfaz de la skin 2026 y conserva el atajo de teclado para abrirlo. La página aprovecha mejor el espacio y el botón vuelve a aparecer al actualizar la navegación.
- **Las etiquetas de la skin 2026 se leen mejor tanto en modo claro como en modo oscuro.** Los tonos suaves se ajustan para mantener un contraste adecuado en ambos modos. La mejora afecta a los textos de la interfaz de esta skin.
- **Las páginas de la skin 2026 equilibran el espacio entre el contenido y los bordes de la ventana.** Se deja espacio bajo el último módulo y se reduce el espacio vacío sobre las páginas. La barra lateral y la marca quedan mejor diferenciadas, y los márgenes se perciben más uniformes.
- **El modo de diseño mantiene visibles los títulos de los módulos y limita los huecos vacíos de la página.** La zona de arrastre no tapa los encabezados y el indicador aparece al pasar el puntero; los módulos sin encabezado conservan una zona para moverlos. La página mantiene espacios entre módulos, pero evita largas zonas vacías al final.
- **Las visitas guiadas muestran sus textos traducidos y describen correctamente la navegación, las reglas y los errores.** Se revisan las traducciones, los pasos y sus acciones para que lleven a las pantallas y elementos que describen. Sus textos se muestran en el idioma seleccionado, incluidos los siete idiomas disponibles en Flexygo.
- **Los elementos relacionados se muestran como etiquetas compactas y más fáciles de recorrer.** Los enlaces a objetos, procesos e informes ocupan menos espacio y se distinguen mejor al pasar el cursor. Los títulos que no realizan ninguna acción dejan de resaltarse como interactivos.
- **La agenda distingue mejor los eventos y mantiene visible su categoría en los modos claro y oscuro.** Los eventos se presentan como tarjetas y su color se conserva como una marca lateral. También se actualizan los controles y la cuadrícula para que encajen con la nueva skin.
- **La nueva skin reúne las acciones del módulo junto al título y oculta las opciones secundarias en un menú.** La acción principal queda a mano y la barra ocupa menos espacio, especialmente en módulos estrechos. Las opciones menos frecuentes siguen disponibles desde el menú de tres puntos.
- **Los textos de colores semánticos se leen mejor en los modos claro y oscuro.** Se ajusta el color del texto sin cambiar los colores de fondo, botones o gráficos que también usan esos tonos. La mejora se aplica en listas y otras vistas de la nueva skin.
- **La agenda muestra el mes junto a los eventos del día seleccionado.** Se distinguen mejor los días, los eventos y la fecha actual, y el panel permite consultar todos los eventos del día. El selector de mes también se adapta al idioma y al modo de color.
- **Los textos secundarios y los colores de acento se leen mejor en listas y vistas de la nueva skin.** El contraste se ajusta para que los textos destaquen sin competir con los nombres y títulos principales, también en modo oscuro. Los fondos y botones que usan los mismos colores mantienen su aspecto.
- **La búsqueda de la paleta indica cuándo está trabajando y diferencia los resultados vacíos de los errores.** Mientras se cargan los resultados, la pantalla conserva su espacio y muestra una indicación de espera. Si no hay coincidencias o la búsqueda falla, cada situación se comunica por separado.
- **Los módulos se ajustan mejor a las columnas estrechas en la nueva skin.** La barra de herramientas puede ocupar varias líneas en vez de ensanchar el módulo y provocar desplazamiento horizontal en la página. A anchuras mayores, la distribución no cambia.
- **La opción de idioma del menú de perfil muestra la bandera correspondiente a la cultura seleccionada.** La bandera aparece junto al valor del idioma y ayuda a identificarlo de un vistazo. Si la cultura no incluye un país, no se muestra ninguna bandera.
- **Puedes cambiar el idioma, la contraseña y la foto de perfil directamente desde el menú.** Cada opción abre su acción correspondiente sin pasar por una carpeta de preferencias. Se mantienen los campos disponibles para cada cambio.
- **Las etiquetas de las tarjetas de objetos se leen mejor en los modos claro y oscuro.** Las etiquetas tienen un nivel mínimo de contraste y el fondo de la tarjeta se adapta al modo de visualización. El cambio afecta a las tarjetas, sin alterar el significado de los estilos de opacidad en otras zonas.
- **Las acciones de cada fila aparecen al final de la lista, en una columna más ajustada a sus botones.** La columna ocupa menos espacio vacío y deja más sitio para los datos de la lista. En las listas editables, la fila para añadir datos también muestra sus botones en esa columna.
- **En la nueva skin, las cabeceras de los módulos muestran menos botones de maximizar y minimizar.** Los botones de actualizar y de contraer se mantienen. La skin clásica conserva sus botones actuales.
- **La nueva skin muestra una barra de progreso mientras se carga una página, sin el indicador giratorio.** La barra visible permite seguir el avance de la navegación. Así, puedes ver que la página se está cargando.
- **Los paneles laterales de la skin 2026 muestran una barra superior que separa sus controles del contenido.** El título queda a la izquierda y los controles a la derecha, con el contenido debajo de la barra. Así se distinguen mejor las acciones del panel lateral de los iconos del módulo que contiene.
- **Al organizar una página, puedes mover módulos sin cabecera y acceder a la configuración desde la barra de organización.** Al cambiar de página, el modo de organización se cierra y avisa si hay cambios sin guardar. También se corrigen detalles de presentación en el panel de control y en los menús traducidos.
- **El tablero Kanban mejora la claridad de sus columnas y tarjetas, también al moverlas o archivarlas y en modo oscuro.** Las zonas para soltar tarjetas ocupan toda la columna, incluso cuando está vacía. Al arrastrarlas, el área de archivo queda dentro de su franja y se distinguen mejor las zonas de destino.
- **El planificador presenta una barra de herramientas y un panel lateral más ordenados y fáciles de leer.** Los botones resaltan la opción activa y reservan el rojo para las acciones de peligro. Las etiquetas y los tipos se alinean mejor con la cuadrícula y ocupan solo el espacio necesario; además, el panel se pliega sin retardo visual.
- **Las pestañas de los módulos se distinguen mejor y pueden recorrerse cuando no caben en pantalla.** Las pestañas largas se desplazan dentro del módulo sin salirse de él. El selector de módulos adopta el estilo de los demás controles y permite distinguir las pestañas activas de las inactivas.
- **Los mapas, los gráficos de red y la agenda se muestran correctamente en modo oscuro.** Sus áreas de visualización ya no dependen de un fondo claro y se integran mejor con el aspecto oscuro de la aplicación.
- **En la nueva skin, los controles y la navegación se integran mejor con el modo oscuro.** Se corrigen los fondos claros que dificultaban la lectura de algunos elementos. La skin clara no cambia.
- **Los menús emergentes de filtros, procesos y notificaciones tienen una apariencia más coherente.** Comparten el mismo estilo de sombra y borde, para que los distintos menús se vean integrados entre sí.
- **Los submenús se muestran anidados y la última columna puede ocupar el espacio libre de la tabla.** Al redimensionar una tabla, la última columna se reajusta para evitar que quede un hueco. Los menús contextuales conservan la jerarquía de sus opciones.
- **Los cambios de versión actualizan los archivos web afectados y el acceso gestiona mejor las interrupciones del Backend.** Los archivos que no han cambiado pueden conservarse en el navegador. También se traducen las etiquetas de acceso mediante SSO.
- **Los errores de la aplicación se muestran de forma más coherente.** Se unifica su presentación en distintas operaciones para que los mensajes sean más claros.

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

- **La configuración de la aplicación cifra en disco las contraseñas y otras claves sensibles.** Se protegen, entre otros datos, las cadenas de conexión, las contraseñas de correo y NuGet y las claves JWT y Data Protection. El ejecutable permite gestionar la clave de cifrado y trasladarla a otro servidor sin necesidad del SDK.
- **La API de licencias separa la consulta y la actualización del estado, y envía el código de activación en la solicitud.** El cambio afecta a las integraciones que consultan el estado de una licencia, lo actualizan o envían un código de activación. Revisa esas integraciones para adaptarlas al nuevo funcionamiento.
- **Los cambios de roles y permisos se aplican sin que el usuario tenga que volver a iniciar sesión.** La actualización incluye permisos asociados a roles y permisos de objetos, páginas e informes. Los cambios se reflejan en las siguientes solicitudes del usuario, incluidos los cambios de rol.
- **Los objetos nuevos muestran su nombre en singular y se incorpora una vista para las facultades de página.** La nueva vista permite consultar las facultades de página mediante la capa de seguridad. Además, al crear un objeto se deja de usar como nombre el título plural de su colección.
- **El catálogo de reglas de seguridad incluye páginas, plantillas e informes.** El catálogo identifica también las familias que no tienen una vista disponible y evita repetir plantillas en los resultados. Así puedes consultar con más claridad los elementos cubiertos por las reglas.
- **La página de cambio de contraseña muestra los errores y validaciones del formulario.** Así puedes identificar los problemas al introducir o actualizar la contraseña y corregirlos antes de continuar.

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

- **La skin 2026 mejora el contraste y la legibilidad de distintos controles, textos y avisos.** Los cambios afectan a diálogos, opciones de menú, botones de procesos, tarjetas, pasos de asistentes y avisos del planificador. Se aplican en los modos claro y oscuro para que estos elementos se distingan mejor.
- **La skin 2026 utiliza la tipografía Geist en lugar de IBM Plex.** El cambio actualiza la apariencia de los textos de esta skin. También reduce el tamaño de los archivos tipográficos utilizados.
- **Puedes mostrar un logotipo distinto según el modo de interfaz.** Flexygo selecciona la variante del logotipo que corresponde al modo activo. Así puedes adaptar su apariencia a cada modo.
- **En la skin 2026, los procesos con texto visible permanecen en la barra de herramientas.** Los procesos sin texto siguen agrupados en el menú de tres puntos. Así se mantiene el acceso a las acciones sin recargar la barra.
- **En la skin 2026, los filtros y el menú de acciones ocupan menos espacio sobre el contenido.** Los controles aparecen junto al título del módulo. Si no hay filtros que mostrar, desaparece la fila vacía.
- **La skin 2026 muestra con más claridad los campos que no superan la validación.** El mensaje de error aparece junto a la etiqueta del campo. Así no queda cortado ni invade la fila siguiente.
- **Puedes abrir el organizador de módulos desde la cabecera de la skin 2026.** El acceso está junto a las notificaciones y también puedes usar Ctrl+Mayús+M. Solo está disponible si tienes permisos de diseño.
- **Puedes acceder a las variables de las skins sin distinguir mayúsculas y minúsculas.** La búsqueda de una variable funciona aunque la escribas con un uso distinto de mayúsculas. Así no tienes que respetar exactamente la capitalización del nombre.

### Tareas programadas

- **Los iconos del planificador mantienen un contraste legible en los modos claro y oscuro.** Los iconos de configuración y actualización adaptan su color al modo de visualización seleccionado.

## Correcciones

### Actualizador

- **El progreso de actualización y reversión conserva los pasos alcanzados y muestra como realizados los completados antes de un fallo.** Los pasos no vuelven a un estado anterior al recibir nuevos avisos, y un error final no queda reemplazado por un estado previo. Así puedes distinguir el trabajo completado del punto en el que se produjo el fallo.
- **El actualizador muestra un error si no puede consultar la última versión disponible.** Así sabrás que no se ha podido obtener la información de versiones, en lugar de que el problema quede sin indicar.

### Configuración

- **Se recuperan traducciones, se completan las de las nuevas pantallas administrativas y se corrige una lista de registros.** También se unifican los recursos de traducción usados durante la instalación. La lista de registros de ejecución incluye el identificador necesario para reconocer cada fila.
- **Se corrigen los errores al guardar dependencias y obtener valores de licencia.** Las operaciones para guardar dependencias y consultar valores de licencia vuelven a funcionar correctamente.
- **El script de tablas de configuración incluye las columnas que faltaban.** Así, al crear o actualizar estas tablas, se incluyen las columnas previstas.

### Conversaciones

- **Se corrige el envío de correos con archivos adjuntos cuando la aplicación utiliza servidores distintos.** Ahora puedes enviar correos con archivos adjuntos en esta configuración.
- **Se corrige el funcionamiento de las menciones y sus notificaciones en las conversaciones.** Puedes mencionar a otras personas y recibir las notificaciones correspondientes. Estas incluyen los valores predeterminados de la página.

### Despliegue

- **El despliegue de la base de datos evita un error relacionado con los cambios en los iconos.** Durante el despliegue, se preparan los cambios en las tablas de iconos para evitar este error.

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

- **Tras cambiar la contraseña, accedes al destino correcto y puedes iniciar sesión con la nueva clave.** Se corrige la redirección al completar el cambio desde el proceso de recuperación, para que puedas continuar con la contraseña actualizada.
- **Al confirmar el correo, no tienes que configurar otra vez una contraseña que ya existe.** La confirmación muestra el resultado adecuado según si la cuenta ya tiene una contraseña configurada.
- **Puedes iniciar sesión aunque tu cuenta no tenga un alias.** Se evita que la búsqueda del usuario falle cuando falta ese dato.

### Instalación

- **La instalación de addons reconoce correctamente las versiones beta.** Se interpreta correctamente el sufijo «-beta» de la versión del addon.

### Inteligencia artificial

- **Se corrige la visualización de la interfaz de inteligencia artificial en distintos tamaños de pantalla.** La disposición de los elementos se adapta al tamaño de la pantalla. Así, la interfaz se muestra correctamente en diferentes dispositivos.
- **Los procesos de inteligencia artificial vuelven a ejecutarse cuando falta el contexto global.** Se corrige un error que podía impedir la ejecución de estos procesos si el contexto necesario no estaba disponible. Ahora pueden continuar en esa situación.
- **Se corrige el procesamiento de algunas respuestas de ChatGPT.** El fallo impedía interpretar correctamente ciertas respuestas. Ahora las solicitudes afectadas se procesan correctamente.

### Interfaz

- **Los usuarios que no son diseñadores ya pueden abrir el menú de módulos en la skin 2026.** El acceso al menú ya no depende de tener el perfil de diseñador. Así, más usuarios pueden consultar los módulos disponibles.
- **Se corrigen la visualización del kanban y del editor HTML, el logo del menú y otros detalles de la interfaz.** También se ajusta la respuesta de los días del calendario anual y de las celdas de información al interactuar con ellas. Además, vuelven a funcionar las opciones para desactivar las tareas programadas y las tareas de script.
- **EasyInfo y los gráficos se cargan correctamente para usuarios que no son diseñadores.** Estos módulos ya no fallan cuando el usuario no tiene acceso a las herramientas de depuración. Así, los usuarios pueden utilizar EasyInfo y consultar gráficos sin ser diseñadores.
- **Se corrigen problemas de distribución en formularios, panel de control, calendario anual e iconos de la skin flexy2022.** Los campos de los formularios vuelven a distribuirse correctamente y el panel de control conserva sus módulos. El calendario anual se adapta al ancho disponible y permite abrir los días con un toque; también se corrigen su apariencia y algunos iconos.
- **Las vistas de la aplicación sin conexión y las descripciones de sus módulos se muestran correctamente.** También se traducen las descripciones de los módulos y las páginas en los idiomas incluidos en la aplicación. Así, la información puede consultarse correctamente en distintos idiomas.
- **Los logotipos y las imágenes de perfil se muestran correctamente aunque sus rutas incluyan barras invertidas.** En modo oscuro, Flexygo también encuentra la variante oscura del logotipo y conserva el configurado si no existe una variante. Los logotipos pueden cambiar según el tema, sin necesidad de recargar la página.
- **La foto de perfil se actualiza al cambiarla desde el menú o el formulario de usuario, sin recargar la página.** La imagen nueva también se refleja en los demás elementos de la interfaz que muestran el perfil. Así, la misma foto aparece actualizada en los distintos espacios.
- **Las acciones de cada fila vuelven a mostrarse en la posición esperada en cada skin.** En flexy2022 aparecen antes de las columnas y en la skin 2026 después de ellas. Los encabezados y las filas mantienen la misma alineación.
- **En la skin 2022 ya no aparece un contador sin formato en las tarjetas de grupos de ajustes.** El contador sigue visible como distintivo en la skin 2026. En la skin 2022, donde no tiene un diseño adecuado, queda oculto.
- **Las tarjetas informativas vuelven a ocupar el ancho de su espacio y muestran sus datos con más contraste en la skin 2022.** Los iconos recuperan su posición al borde de cada tarjeta y los datos importantes se leen mejor. Las fichas informativas independientes mantienen su tamaño habitual.
- **Se corrigen la traducción del registro de errores cuando está vacío y la ordenación desde el menú de opciones.** La lista de errores muestra traducidos sus textos y filtros aunque todavía no haya registros. También se corrige el fallo intermitente al ordenar desde el menú.
- **Se muestran traducidos los títulos, botones y encabezados que antes aparecían como claves internas o en inglés.** La corrección abarca etiquetas del gestor de propiedades y del gestor de imágenes, mensajes de gráficos y encabezados de listas, incluso cuando no tienen un objeto asociado. También se traducen los textos del buscador en alemán cuando corresponde.
- **Los controles de las filas de la rejilla permanecen en su sitio al interactuar con ellas.** Al seleccionar una fila, sus iconos ya no se desplazan fuera de la zona visible. Se mantiene la posibilidad de arrastrar y guardar la disposición.
- **Al salir del modo de diseño sin guardar, la página recupera la disposición anterior.** Si hay cambios pendientes, se solicita confirmación y se puede restaurar la disposición original. Si no se han hecho cambios, se puede salir directamente.
- **Las páginas de la skin 2026 presentan menos barras de desplazamiento innecesarias y un espaciado más uniforme.** Se ajustan los márgenes y la altura de algunos módulos para que el contenido quepa mejor en el espacio disponible. Los controles de redimensionado y las ayudas del modo de colocación ya no interfieren con los títulos ni el contenido.
- **El cursor de redimensionado ya no aparece en zonas vacías de las páginas de la skin 2026.** Se silencian las zonas de ajuste que quedaban fuera de las columnas, sin afectar al redimensionado de las columnas reales. También se revisa el espacio a la derecha del contenido.
- **Se eliminan barras de desplazamiento vacías y se corrige la respuesta a la invitación de un recorrido.** Las barras dejan de aparecer cuando el contenido cabe en el módulo, sin ocultarse si la tabla realmente necesita espacio. Las opciones de la invitación permiten responder y conservar la decisión.
- **En la rejilla, los módulos muestran todo su contenido y los gráficos ocupan el espacio disponible.** Los bloques de formularios ya no aparecen contraídos y los gráficos se adaptan al tamaño de su módulo. También se evita que la página alargue innecesariamente la zona vacía al final.
- **Los menús del objeto dejan de repetir procesos y acciones que ya aparecen en la barra.** Se conserva la opción configurada expresamente en la barra, incluidas acciones que abren una ventana nueva. Además, el menú vuelve a abrirse en su posición correcta sin desaparecer.
- **Al ajustar el ancho de una columna, la columna de acciones ya no se expande con el espacio sobrante.** Se corrige el reparto del ancho disponible en las listas. Así, la columna de acciones no queda desproporcionada.
- **Las tarjetas de plantillas de la skin clásica son legibles en modo oscuro.** El color del texto se adapta al fondo oscuro. La apariencia en modo claro no cambia.
- **Los administradores pueden abrir su ficha desde «Mi perfil» en la nueva skin.** La opción lleva a la ficha del usuario conectado. También está disponible en la vista de usuario para quienes tienen permisos de administración.
- **Las opciones del menú de perfil responden al seleccionarlas y el cierre de sesión vuelve a estar disponible.** El menú utiliza la acción de cierre de sesión y sus textos pueden mostrarse en los distintos idiomas. El indicador de origen refleja los cambios realizados sin necesidad de recargar.
- **Los recorridos guiados continúan si no pueden abrir una pantalla.** Se omiten los pasos de esa pantalla y el recorrido prosigue con los siguientes.
- **La copia de excepciones al portapapeles funciona con caracteres especiales.** Ciertos caracteres del texto de la excepción ya no interrumpen la acción de copia.
- **Se corrigen problemas de traducción causados por claves duplicadas.** Las cadenas afectadas se traducen correctamente aunque compartan una clave primaria. El cambio también afecta a los textos traducidos que se cargan desde los datos de la aplicación.
- **Se corrige la compatibilidad de fechas y se evita que los estilos de páginas Blazor afecten a otras páginas.** Las fechas mantienen el formato esperado por la interfaz existente. Además, los estilos de las páginas Blazor quedan aislados para no alterar el aspecto de otras páginas.

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

- **Se validan las direcciones externas y los destinos de retorno para evitar conexiones o redirecciones no seguras.** La consulta de metadatos de clientes MCP se limita a direcciones públicas. Los retornos de inicio de sesión y cambio de contraseña se restringen a páginas de la aplicación, y las llamadas de decisión solo pueden dirigirse a direcciones públicas o permitidas.
- **Puedes iniciar sesión y acceder a descargas e informes mediante un token incluido en la URL.** El token se conserva durante los redireccionamientos. Así, el enlace también funciona si antes de abrir el contenido se solicita iniciar sesión.

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

- **En la skin 2026, los botones del pie de edición del correo ya no tapan Guardar.** Al editar un correo, el botón Guardar queda accesible aunque haya otros botones en el pie. Así puedes guardar los cambios sin que los controles se solapen.
- **Se corrige la visualización del logotipo principal y el fondo del logotipo predeterminado.** El logotipo principal vuelve a mostrarse correctamente. La imagen incluida de forma predeterminada tiene ahora un fondo gris en lugar de blanco.
- **En la skin 2026, los enlaces de las listas respetan el color atenuado definido por su plantilla.** El cambio mejora la lectura de textos secundarios, como «Sin dirección». Se aplica tanto en el modo claro como en el oscuro.
- **La carga de estilos ya no falla si falta una variable LESS.** La ausencia de una variable LESS no interrumpe la carga de estilos. Esto evita errores cuando se aplican estilos con variables CSS.

### Tareas programadas

- **Se corrige el procesamiento de la información de las tareas programadas.** La información se procesa con un formato que evita los fallos anteriores. Así, las tareas programadas pueden funcionar correctamente.
- **Los objetos relacionados con tareas programadas respetan la seguridad configurada.** La corrección evita que estos objetos queden sin las medidas de seguridad que les corresponden. De este modo, se aplica la configuración de seguridad prevista al trabajar con ellos.

## Obsoleto

### Seguridad de la WebAPI

- **Se retiran las funciones de comprobación de conexión y activación del modo de mantenimiento.** Dejan de estar disponibles la comprobación de conexión y el proceso para activar el modo de mantenimiento.
