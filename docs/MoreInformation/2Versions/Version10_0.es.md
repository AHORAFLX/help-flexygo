# Versión 10.0

La skin Flexygo 2026 renueva la aplicación, permite desplegar sus partes por separado, conectar asistentes de IA para consultar datos, gestionar actualizaciones y exportar la aplicación como proyecto de producto.

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

- **Gestiona actualizaciones, reversiones y versiones desde un asistente que guía el proceso y muestra su progreso.** El asistente permite revisar los requisitos antes de continuar y consultar las novedades de las versiones. También muestra el resultado de cada operación y permite volver a pasos anteriores.

    ![Gestiona actualizaciones, reversiones y versiones desde un asistente que guía el proceso y muestra su progreso.](../../docs_assets/images/Versions/Version10_0/updater-wizard.png)
- **Consulta las operaciones en curso y sigue las iniciadas por otros administradores.** Puedes ver quién dirige cada operación y seguirla en modo de solo lectura cuando no la hayas iniciado. El actualizador evita operaciones incompatibles simultáneas y permite retomar preparaciones interrumpidas desde otra pestaña, conservando el seguimiento y los pasos completados.
- **Consulta el historial de operaciones desde la información de versiones.** Puedes abrir el resultado y el registro de una operación anterior. Borrar el historial no afecta a las operaciones que siguen en curso.
- **Consulta las notas completas de las versiones y las novedades que recibirás al actualizar.** El historial incluye versiones beta, muestra las novedades respecto a versiones anteriores y permite revisar los cambios entre la versión instalada y la más reciente. También incluye las notas publicadas de Backend y excluye las versiones que no están publicadas.
- **Consulta y gestiona las versiones disponibles, instaladas y descargadas desde la página de versiones.** La página muestra el estado de cada versión y mantiene la información actualizada al cambiarlo o eliminar una versión. Desde el actualizador también puedes aplicar la última versión disponible y eliminar versiones descargadas.
- **Puedes revertir una actualización si el proceso no termina correctamente.** La opción permite volver al estado anterior cuando surgen problemas durante la actualización. Así puedes recuperar la versión previa desde el proceso del actualizador.
- **Consulta los registros en directo y filtra su contenido desde el modo avanzado del asistente.** Puedes buscar en los registros y filtrarlos por nivel y contexto, además de alternar entre el resumen y el registro desde los resultados. Leer o limpiar el registro durante una operación no interrumpe la llegada de nuevos mensajes, y en pantallas pequeñas las vistas se muestran en pestañas.
- **Consulta el resultado de cada actualización o eliminación, con detalles de los errores.** La pantalla indica qué ocurrió y qué versión queda en uso, y permite copiar los detalles técnicos del error junto con su código. Al cerrar el resultado, se actualiza el listado de versiones.
- **Resuelve conflictos de configuración durante una actualización y elige el valor inicial para cada conflicto.** El asistente permite revisar las diferencias pendientes y partir de un valor en blanco, del anterior, de uno personalizado o de la versión nueva. También puedes continuar una actualización interrumpida desde el punto alcanzado y ampliar la ventana a pantalla completa.
- **El actualizador reconoce las versiones preliminares y permite configurar si las busca.** La compatibilidad incluye la búsqueda y comparación correcta de paquetes beta según la versión instalada. Puedes controlar el uso de versiones preliminares desde la configuración.
- **La skin 2026 muestra la versión instalada y puede avisar de las novedades.** La versión aparece en el pie de la barra lateral y el aviso se muestra una vez por versión principal y secundaria. Desde el aviso puedes consultar el detalle de la actualización; los administradores también reciben novedades de cada versión menor.
- **Actualiza la base de datos de Flexygo en entornos Docker y admite credenciales de conexión.** El proceso también permite actualizar la base de datos desde instalaciones que requieren credenciales. Se mejoran los mensajes de error y el tratamiento de problemas de sesión o red durante la actualización.
- **Instala y actualiza la base de datos desde el configurador.** El configurador incorpora estas tareas para que puedas realizarlas desde la herramienta de configuración. La opción facilita la gestión de la base de datos durante la instalación y las actualizaciones.
- **Actualiza Flexygo en una instalación Docker desde la página de mantenimiento.** El proceso muestra información sobre la actualización y permite gestionar el mantenimiento de la instalación.
- **El actualizador consulta repositorios locales y admite rutas de descarga en Linux.** Al finalizar, el proceso vuelve a la aplicación. También se revisan algunos mensajes informativos del flujo de actualización.
- **Puedes revertir una actualización si el proceso no termina correctamente.** La opción está disponible durante el proceso de actualización. Úsala para recuperar el estado anterior si surgen problemas.

### Despliegue

- **Exporta la aplicación instalada como proyecto de producto y configura su contenido, plantilla y opciones desde el área de administración.** El asistente genera un ZIP listo para abrir y compilar en Visual Studio, muestra el progreso y registra las exportaciones y los errores. Puedes elegir carpetas y archivos personalizados y modificar la plantilla; de forma predeterminada usa la del producto instalado y excluye los repositorios de documentos e imágenes y otros archivos grandes. Admite proyectos de más de 2 GB y comprueba que haya espacio suficiente; no incluye usuarios y conserva los secretos en un archivo local que no se comparte. Está disponible para administradores autorizados y muestra la plantilla y la versión elegidas; si el origen activo está reservado, avisa y propone el primer destino disponible.

    ![Exporta la aplicación instalada como proyecto de producto y configura su contenido, plantilla y opciones desde el área de administración.](../../docs_assets/images/Versions/Version10_0/export-as-project.png)
- **En instalaciones con frontend y backend separados, las operaciones con archivos funcionan entre ambos servidores.** La aplicación puede transferir archivos durante las operaciones de carga, descarga y eliminación. Este soporte también cubre el acceso mediante suplantación.
- **Puedes integrar RDS en despliegues con Docker y aplicar cambios de configuración durante las actualizaciones.** La integración con RDS amplía las opciones de despliegue. El flujo de actualización permite aplicar cambios de configuración.
- **Publica bases de datos de datos desde el configurador, incluidas las vacías o sin archivo de definición.** También se corrige un error al actualizar bases de datos en entornos Docker.
- **Puedes desplegar la base de datos de Flexygo con Docker.** Se incluyen los archivos de Docker necesarios para desplegar la base de datos con esta tecnología.
- **Genera imágenes de Flexygo con Docker y configura el inicio conjunto de sus componentes.** Se incluyen los archivos de Docker y una configuración para iniciar conjuntamente las distintas partes de la aplicación. Esto permite preparar el despliegue de Flexygo con Docker.

### Herramientas de desarrollo

- **Explora miles de iconos, añade SVG propios y genera fuentes para las bibliotecas de iconos del proyecto.** Desde Ayuda > Lista de iconos puedes buscar entre más de 5.000 iconos, filtrarlos por biblioteca y categoría y previsualizarlos. Los administradores pueden añadir iconos SVG y generar fuentes para bibliotecas compatibles con glifos. Si no hay ninguna compatible, se explica por qué no está disponible la opción y se puede descargar un ZIP como alternativa.

    ![Explora miles de iconos, añade SVG propios y genera fuentes para las bibliotecas de iconos del proyecto.](../../docs_assets/images/Versions/Version10_0/icon-browser.png)
- **Crea objetos externos conectados a servicios REST y utilízalos en más funciones de Flexygo.** El asistente puede analizar el servicio y proponer las propiedades del objeto. Los objetos externos se pueden usar en listas, formularios, calendarios, paneles Kanban e informes HTML; las listas admiten paginación y los formularios muestran el origen de los campos de selección. También se recoge la clave generada al insertar registros, y los asistentes pueden consultar totales y medidas; el servidor MCP puede mostrar estos datos en paneles. La exportación de proyectos conserva los ajustes modificados en la instalación, excepto los propios del entorno.
- **Añade controles deslizantes que muestran el valor seleccionado en tus aplicaciones.** El valor se confirma al soltar el control, y también puedes reaccionar mientras se arrastra. El control está disponible entre los elementos compartidos.
- **Crea interfaces con pestañas mediante los controles compartidos de pestañas.** Cada pestaña y su contenido se vinculan mediante un valor. Esto permite gestionar qué sección está activa.
- **Crea, nombra y configura pestañas desde la tira de pestañas del diseñador.** La tira aparece aunque el objeto todavía no tenga pestañas y permite añadir la primera. Desde cada pestaña puedes cambiar el nombre, elegir un icono o eliminarla; la primera agrupa el contenido inicial del objeto.
- **Configura documentos e imágenes y abre listas o formularios desde el espacio de configuración del objeto.** La sección de archivos permite alternar entre documentos e imágenes y carga la configuración correspondiente. Desde allí también puedes acceder a la seguridad del objeto, a su lista o a un formulario nuevo; el acceso a la lista aparece si el objeto tiene una colección asociada.
- **Configura propiedades desde un panel de ajustes rápidos más amplio en el banco de objetos.** Al editar una propiedad, el panel se abre junto al banco de objetos y puedes cerrarlo sin desplegar de nuevo la navegación. Los campos disponen de más espacio y el desplazamiento se mantiene dentro del panel.
- **Elige y cambia el origen desde el diálogo de la skin 2026, incluido Addon.** El origen activo queda señalado y las opciones se muestran sin desbordarse; Addon se presenta por separado. La etiqueta se actualiza al cambiar de origen sin recargar la pantalla, y puedes cerrar el diálogo sin modificar la selección, también con Esc.
- **Suscríbete desde código externo a los mensajes informativos de SQL de DataManager.** La opción permite recibir esos mensajes desde código externo que utilice DataManager.
- **Realiza consultas GET con flexygo.ajax.get.** Así puedes acceder a operaciones que requieren este tipo de consulta. También vuelve a funcionar la consulta de versiones del pie de página.
- **Define en las plantillas de listas SQL los enlaces a los registros.** La plantilla puede crear enlaces aunque las filas contengan distintos tipos de objeto. También puedes prescindir de la detección automática de enlaces de la skin 2026, sin perder la ordenación ni el redimensionado de columnas.
- **La operación getView de la WebAPI aplica los valores predeterminados correspondientes.** Al consultar una vista mediante esta operación, se aplican los valores predeterminados correctos.
- **Se aplican valores predeterminados a las URL amigables.** La resolución de estas direcciones cuenta ahora con valores predeterminados.
- **Crea recorridos guiados señalando los elementos de cada pantalla y personaliza su bienvenida.** El editor agrupa los pasos por pantalla, permite reordenarlos y muestra el elemento seleccionado para cada paso antes de guardar. La tarjeta de bienvenida puede incluir una imagen o la marca de Flexygo, con una animación de escritura para esta última.
- **La skin 2026 incorpora pestañas en procesos e informes, asistentes para objetos y gestores de documentos e imágenes.** Los gestores de imágenes permiten presentar el contenido como galería o como lista. Las pestañas amplían la organización de propiedades más allá de la edición de objetos.
- **En modo de desarrollo, el menú de un módulo ofrece accesos a la configuración de su objeto.** Las opciones aparecen agrupadas al final del menú y no se muestran en la skin clásica.
- **Organiza los módulos de una página directamente desde la propia página.** Puedes mover módulos entre zonas, elegir otro diseño y crear módulos desde el organizador. Antes de guardar, se avisa si quedan posiciones sin asignar o si la página procede de una distribución y los cambios se revertirán con una actualización.
- **Integra Flexygo con otros sistemas mediante webhooks.** Los desarrolladores pueden utilizar esta funcionalidad para conectar sus aplicaciones con otros sistemas.
- **Cambia la optimización de los paquetes desde el menú de desarrollo.** La opción permite alternar este ajuste sin salir del menú.

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

- **En la skin 2026, edita los valores directamente en las listas y añade filas desde la lista o el formulario.** Cada fila se guarda al salir de ella y conserva el menú de acciones del registro. La experiencia se adapta a móviles y tabletas, y está disponible en los modos claro y oscuro; la skin flexy2022 no cambia. Los combos y las listas se ajustan al espacio disponible.
- **Desde el panel de control 2026 puedes consultar y editar la página de inicio de cada perfil.** Cada perfil tiene una vista previa esquemática basada en su configuración. Esta vista no ejecuta la página ni guarda cambios.
- **La skin 2026 incorpora nuevas pantallas de administración y accesos rápidos para navegar por ellas.** Incluye administración de usuarios, roles, propiedades, procesos, ajustes y otros elementos, además de una barra lateral plegable y un panel redimensionable. El menú de acceso rápido permite volver al panel de control o al cuadro de mando desde cualquier página, aunque el menú del proyecto no incluya ese grupo.
- **Los administradores pueden ofrecer visitas guiadas por el producto a los usuarios autorizados.** Las visitas se configuran con pasos y se añaden a una página como módulos, cuya seguridad determina quién puede verlas y reiniciarlas. Los recorridos revisados muestran los pasos y textos disponibles en el idioma seleccionado, ayudan a localizar elementos y pueden continuar si una pantalla o un paso no está disponible. Al cambiar de página, no dejan capas bloqueando la pantalla; las invitaciones esperan si hay otros avisos y permiten responder y conservar la decisión.
- **Los perfiles de administrador e invitado ya tienen avatar, y la foto de perfil se muestra en el pie y la cabecera.** La imagen del perfil se comparte entre ambas skins, incluida la clásica, y se actualiza en la interfaz al cambiarla desde el menú o el formulario de usuario. También mejora la legibilidad de las iniciales de los avatares y del contenido de los avisos emergentes.
- **La nueva skin reúne el tema, el perfil y el cierre de sesión en un menú accesible desde el pie de página.** El menú muestra los datos de la persona conectada y permite cambiar entre tema claro y oscuro, así como editar el idioma, la contraseña y la foto de perfil. También ofrece acceso a «Mi perfil» para los administradores y muestra la bandera correspondiente al idioma seleccionado; las opciones responden correctamente y el cierre de sesión está disponible.
- **Los administradores pueden convertir páginas al diseño libre y reorganizar sus módulos en una rejilla.** La conversión conserva la disposición existente y permite guardar o descartar los cambios. En el modo de diseño se pueden arrastrar y redimensionar módulos; los títulos y controles permanecen visibles, y la página conserva la disposición al guardar. En pantallas estrechas, los módulos pasan a una columna y mantienen el orden establecido.
- **Los desarrolladores pueden abrir desde la paleta la configuración de la búsqueda global.** La opción aparece en la parte inferior de la paleta y permite volver al gestor de filtros genéricos para configurar la búsqueda. Solo está disponible en modo de desarrollo.
- **Al organizar una página, puedes arrastrar módulos sin cabecera y acceder a la configuración desde la barra de organización.** Los módulos sin cabecera muestran una franja de arrastre mientras está activo este modo. La configuración se abre en un panel lateral y deja visible el contenido; si recargas la página sin cambiarla, se reconstruye la organización. Al cambiar de página se cierra el modo y se avisa si hay cambios sin guardar. También se ajusta la presentación del dashboard y de los menús traducidos.
- **Puedes mostrar los resultados de búsqueda sobre la página, sin sustituir su contenido.** El modo de paleta es opcional y agrupa los resultados por criterio, mostrando su título, descripción y destino. La búsqueda responde con más rapidez y evita enviar al navegador datos que no necesita mostrar.
- **Las tarjetas de indicadores muestran mejor la información y se adaptan a su posición en listas o filas.** Puedes añadir descripciones, variaciones y tendencias opcionales para contextualizar el valor principal. En una lista, la tarjeta evita duplicar el marco; en una fila, todas mantienen la misma anchura y altura para facilitar la comparación. Los valores y pies quedan alineados aunque algunas incluyan información adicional.
- **La interfaz de Flexygo Core adopta un diseño más actual.** La actualización renueva la navegación, el menú de usuario y la paleta de colores, e incluye las traducciones que faltaban. Los ajustes completan la aplicación del nuevo estilo visual en distintas skins.
- **Puedes acceder a las páginas de Flexygo mediante URL amigables.** Esta forma de resolver las direcciones está disponible en el núcleo de Flexygo y permite usar direcciones más fáciles de leer.

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

- **Puedes controlar quién ejecuta cada proceso, incluso si no está vinculado a un objeto, y limitarlo con condiciones SQL opcionales.** Configura permisos para usuarios, roles y facultades desde sus pantallas de seguridad o desde la ficha del proceso. Una condición SQL opcional permite la ejecución solo si devuelve 1 o true; si no se cumple, el proceso queda oculto en menús y barras de herramientas. La regla se aplica antes que los permisos específicos del objeto, y puedes consultar desde seguridad quién puede ejecutar cada proceso y qué condición lo limita.
- **La skin 2026 incorpora una pantalla para consultar y gestionar la seguridad de usuarios, roles, facultades y objetos.** Puedes abrirla desde el área de trabajo o desde usuarios, roles, facultades y objetos, con el elemento correspondiente seleccionado; también reúne la seguridad de módulos, propiedades y procesos. La tabla muestra permisos por acción, agrupa los de cada campo bajo su objeto y permite comparar permisos entre objetos; además, muestra las reglas de navegación y las condiciones de acceso de los módulos. Consulta las reglas aplicadas, la política predeterminada y el orden en que roles, facultades y usuarios determinan el acceso, sin modificarlo. Desde la pantalla puedes crear, modificar o eliminar reglas, consultar las acciones disponibles y revisar una vista previa antes de aplicarlas; también puedes filtrar el catálogo, que incluye páginas, plantillas e informes. La pantalla está traducida a los siete idiomas disponibles y la anterior sigue disponible en flexy2022.
- **Puedes configurar condiciones de seguridad de objetos eligiendo una propiedad, un operador y un valor.** El asistente ofrece las propiedades del objeto y permite seleccionar valores de contexto, sin tener que recordar nombres de tablas o marcas especiales. Antes de guardar, puedes probar la condición y consultar el SQL ejecutado.

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

- **Flexygo funciona sobre .NET 9 y permite desplegar por separado la interfaz, el backend y la base de datos.** Puedes instalar la aplicación en IIS, como servicio independiente o en Docker, en Windows o Linux. La interfaz, el backend y la base de datos pueden ejecutarse en el mismo servidor o en servidores distintos; además, el asistente de versiones permite revertir actualizaciones.

    ![Flexygo funciona sobre .NET 9 y permite desplegar por separado la interfaz, el backend y la base de datos.](../../docs_assets/images/Versions/Version10_0/net9-architecture.png)
- **Las traducciones de producto se conservan al publicar los datos de configuración.** El proceso puede incluir las traducciones asociadas a los elementos de producto y excluir las que pertenecen a módulos de prueba.
- **La instalación en Docker obtiene las cadenas de conexión desde la configuración de la aplicación.** Así puedes configurar las conexiones desde la configuración disponible en el entorno de despliegue.
- **Los scripts de despliegue son compatibles con Linux.** Esto facilita el despliegue de Flexygo en entornos Linux.
- **Controla qué archivos JavaScript y CSS se agrupan y mejora la fiabilidad de la optimización en IIS.** La agrupación permite elegir los archivos incluidos, carga correctamente los estilos personalizados y separa los plugins personalizados de los del sistema. También evita errores del plugin de PDF durante la optimización y mejora la compatibilidad con instalaciones alojadas dentro de una aplicación IIS.

### Actualizador

- **La página de versiones presenta una interfaz renovada, ordenada y traducida.** La información se organiza por estado y número de versión, lo que facilita localizar las versiones de la aplicación. También se corrige un fallo que podía producirse al cargar esa información.
- **La pantalla de progreso organiza los pasos en una guía vertical u horizontal y facilita seguir la etapa activa.** La vista básica y la avanzada adaptan la información al formato elegido, y la transición entre ambos se anima. Si una etapa falla, puedes consultar su detalle desde la vista básica.
- **El progreso conserva los pasos completados y no retrocede a estados anteriores.** Si una operación falla, se distingue lo que ya se había ejecutado del paso que ha fallado. También se mantiene correctamente el estado de los pasos durante una reversión.
- **Las pantallas de transición mantienen visible el estado mientras cambia la versión.** La animación sigue activa durante el proceso y el asistente espera a que la aplicación vuelva a estar disponible antes de recargar cuando se prevé una interrupción. Así, el resultado no aparece antes de que termine el cambio.
- **El asistente muestra una pantalla específica antes de eliminar una versión.** La pantalla presenta la operación con un paso y una animación propios. Si cierras el asistente antes de iniciar el borrado, la eliminación no comienza.
- **El actualizador identifica quién mantiene bloqueada la aplicación, incluidos los bloqueos de red.** Cuando se pueden reconocer, se muestran el usuario y el equipo asociados al bloqueo. Esta comprobación se incorpora al proceso antes de continuar con la actualización.
- **Puedes continuar si los requisitos muestran avisos que no bloquean la actualización.** Los errores siguen impidiendo avanzar. También se avisa si la tabla de registros del actualizador supera el límite configurado.
- **Los registros del actualizador se guardan separados por proyecto.** Cada proyecto tiene su propia carpeta de registros. Esto facilita localizar los registros correspondientes a una instalación concreta.
- **La configuración y el mantenimiento muestran el progreso y los errores de actualización.** Puedes seguir las tareas mientras se ejecutan en segundo plano y consultar los detalles si se produce un error. También es posible validar bases de datos ERP desde estas opciones.
- **El actualizador reintenta las operaciones de archivos si se producen fallos temporales.** Los reintentos ayudan a completar la actualización cuando el problema al gestionar archivos es puntual. Si falla el despliegue de la base de datos, se genera un informe para revisar el problema.

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

- **Configura más opciones en los controles compartidos.** Puedes añadir un botón para borrar la selección, elegir cuándo un diálogo ocupa toda la pantalla y controlar el foco del campo de texto. Las tarjetas de opción también admiten un color de acento.
- **La sección de diseño de vista del banco de objetos tiene ahora un nombre más claro.** El cambio evita confundirla con el diseño del registro y está disponible en los siete idiomas incluidos.
- **El panel de colocación permite agrupar módulos, consultar sus detalles y localizar los que ya están en la página.** Puedes plegar los grupos por tipo y mantener abiertos los que estés utilizando; al buscar, se despliegan los grupos con resultados. Las tarjetas muestran información y las páginas donde aparece cada módulo, y los ya colocados siguen visibles mientras te desplazas por la página. La zona para mover módulos sin cabecera solo se resalta al pasar el puntero, y los controles de redimensionado y el menú del módulo quedan accesibles.
- **El editor de recorridos y el configurador de páginas muestran sus textos traducidos.** Los textos de ambas herramientas están disponibles en siete idiomas y, si falta una traducción, se muestra el original en inglés. En el editor de recorridos también se traducen los nombres de los anclajes propios de Flexygo; se conserva el contenido escrito por quien configura el recorrido.
- **La configuración de objetos muestra sus textos traducidos en los siete idiomas disponibles.** La traducción incluye los títulos de las secciones y sus descripciones.
- **El administrador de vistas se muestra correctamente y resulta más legible en la skin 2026.** Se corrigen la disposición de los campos, los colores del texto y los estados al pasar el puntero. Las mejoras también se aplican cuando el administrador se abre como plantilla.
- **Consulta los errores en una lista filtrable, paginada y con detalle desplegable.** Puedes combinar filtros para acotar los resultados y consultar las opciones disponibles para cada criterio. El acceso desde el panel de inicio abre la lista con los errores de las últimas 24 horas.
- **El marketplace de addons muestra sus opciones en filas y gestiona mejor los resultados.** La nueva disposición aprovecha el espacio tanto si hay pocos addons como si hay muchos, y mantiene visibles la información y las acciones. También se corrigen los controles de las tarjetas instaladas y el estado de carga cuando falla una consulta.
- **En la skin 2026, las herramientas de desarrollo están disponibles en sus áreas y las vistas previas tienen una tarjeta propia.** Los ajustes de objetos, páginas y catálogos se acceden desde sus ubicaciones específicas, en vez de duplicarse en el panel lateral. El control de giro de las vistas previas prepara la orientación para la siguiente apertura.
- **El botón para crear objetos se distingue mejor y permite iniciar la creación desde el catálogo.** El símbolo de suma aumenta su contraste al pasar el puntero y tiene un fondo propio para diferenciarse del acceso al catálogo. Al pulsarlo se abre el asistente sin activar el catálogo que lo contiene.
- **Las vistas previas de móvil y tableta permiten elegir el dispositivo y cambiar la orientación.** Puedes cambiar de dispositivo sin perder la orientación actual. El giro afecta a la vista previa abierta y no hace nada si no hay ninguna abierta.
- **Activa o desactiva Minificar JS/CSS desde una tarjeta del panel de control.** La tarjeta se integra con las demás opciones del panel y permite cambiar el ajuste desde toda su superficie.
- **El acceso al modo de desarrollo solo aparece para usuarios con un rol de diseñador.** Así, quienes no tienen ese rol no ven una opción que no pueden utilizar.
- **La comunicación de los procesos con el proxy admite distintos tipos de respuesta.** Esto permite gestionar las respuestas necesarias para las operaciones de documentos de ABH Sign.
- **Los desarrolladores pueden depurar el código de la aplicación con source maps.** Esta mejora facilita localizar el origen de un problema durante la depuración y está orientada a quienes desarrollan sobre Flexygo.
- **Quienes tienen permisos de desarrollo acceden con el modo de desarrollo activado y pueden desactivarlo desde el menú.** El modo conserva el estado elegido al volver a entrar. Desactivarlo no provoca errores si no hay un panel lateral que cerrar, y la selección de origen presenta Addon por separado.

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
- **Las acciones de las filas aparecen al final de la lista, en una columna ajustada a sus botones y alineada con los datos.** Así, los datos se leen antes que las acciones y se aprovecha mejor el ancho disponible. La posición de las acciones se adapta a cada skin y también se aplica a las filas para añadir datos.
- **Las ventanas del asistente y del actualizador comparten una presentación coherente en sus cabeceras y pantallas de resultado.** Las cabeceras reúnen el icono, el título, el subtítulo y las acciones disponibles, y los diálogos de instalación y actualización mantienen un tamaño común. Los errores y resultados también comparten estilo; la acción para reintentar un error se distingue como destructiva.
- **La skin 2026 renueva el correo, las notificaciones y el chat de IA para facilitar su uso.** En el correo puedes consultar las carpetas junto a la lista, filtrar por mensajes leídos o buscar por asunto y abrir cada mensaje en un panel lateral. Las notificaciones incluyen filtros y la opción de marcarlas todas como leídas; el chat de IA se muestra en un panel compacto. La skin flexy2022 mantiene su aspecto actual.
- **Las nuevas instalaciones de Flexygo comienzan con la skin 2026 y los nuevos usuarios heredan el perfil de quien los crea.** Las instalaciones existentes conservan su perfil y los productos no se ven afectados. El perfil de administración 2026 solo se ofrece a usuarios con el rol de administradores.
- **Copia los detalles técnicos de un error sin mostrar avisos adicionales.** El botón confirma visualmente la copia con un cambio de icono. También está disponible como elemento compartido para los desarrolladores.
- **Las pantallas de carga utilizan una nueva animación.** La animación muestra el logotipo o el indicador predeterminado según el contexto de carga.
- **Los calendarios incorporan vista anual, filtros y selección de rangos, con una presentación más clara.** Incluyen una leyenda y opciones para configurar el solapamiento y el horario laboral. En la vista anual puedes consultar los registros de cada día, y los cambios de otras personas se reflejan en la vista mensual. Los colores de las marcas se mantienen legibles en los distintos modos; la línea temporal y el calendario anual destacan mejor la selección, el día actual y la actividad.
- **Los calendarios de flexy2022 recuperan una presentación similar a la anterior.** Se ajustan las vistas mensual y anual, la posición de los avisos emergentes y la alineación de la vista de planificación. El cambio solo afecta a la skin flexy2022.
- **Las opciones de administración del módulo se abren en paneles laterales más cómodos de usar.** Los paneles de configuración, seguridad, eventos y relación con la página dejan visible parte del contenido mientras se utilizan. La cabecera separa los controles del contenido y las opciones de administración quedan agrupadas en un menú; el engranaje abre la configuración del módulo.
- **Los menús desplegables se muestran sin quedar recortados por el área que los contiene.** Su posición se ajusta respecto al control que los abre, incluso dentro de zonas con desplazamiento.
- **La pantalla de la aplicación sin conexión y su emulador se muestran correctamente en distintos dispositivos.** El emulador permite elegir un iPhone 17 o un Samsung Galaxy S25, mantiene visible el dispositivo mientras se desplaza el resto de la pantalla y reorganiza las secciones en ventanas estrechas. También se corrigen las vistas de la aplicación y se traducen las descripciones de sus módulos y páginas en los idiomas incluidos.
- **Las vistas de la skin 2026 muestran sus campos y etiquetas con más claridad.** Las etiquetas y los valores largos se mantienen en una línea y se recortan cuando no caben. También se mejora la separación entre filas y la presentación de los encabezados.
- **La pantalla de seguridad ofrece una presentación más clara y espaciada en la skin 2026.** Los títulos, las etiquetas, los controles y el botón de guardado se distinguen mejor dentro del módulo.
- **Las marcas de tarjetas nuevas se distinguen mejor en la skin 2026.** El ajuste mejora la visibilidad tanto en las tarjetas del tablero como en el indicador de la columna.
- **Los enlaces y las etiquetas pulsables se distinguen mejor en la skin 2026, tanto en modo claro como oscuro.** Los enlaces reales aparecen subrayados y con un color propio. Las etiquetas que actúan como controles usan el color del texto y se subrayan al pasar el cursor.
- **Las ramas del panel de navegación muestran si están abiertas o cerradas y se pueden desplegar sin cerrar el panel.** El indicador refleja el estado de las ramas que contienen opciones y los iconos mantienen el orden esperado. Al desplegar un grupo se cierra cualquier menú de opciones abierto; las opciones finales siguen navegando a su destino y cerrando el panel.
- **Los avisos y las indicaciones del configurador de páginas se leen mejor en la skin 2026.** Se aumenta el contraste del aviso sobre el origen de la página y de la indicación que aparece al situar el cursor sobre un módulo.
- **Los menús, asistentes, listas y mensajes de la interfaz se muestran traducidos cuando hay una traducción disponible.** Se corrigen textos que aparecían como claves internas o en inglés y se aplican las traducciones existentes a nombres de elementos, encabezados y tipos de cambios recientes. También se traducen mensajes de inicio, temas de gráficos, el buscador y los menús, asistentes y plantillas de la skin 2026; se conservan los nombres asignados por cada cliente.
- **La navegación de la skin 2026 conserva el pie de menú al actualizarse.** Así, las opciones del pie no desaparecen al refrescar el menú.
- **La nueva skin mejora la presentación y el uso de ventanas, listas, combos y asistentes.** Vuelven a mostrarse las ayudas de los botones y se ordenan mejor las listas y las pestañas. También se recupera el asistente de plantillas, se facilita la creación de objetos sin conexión y se mejora la visualización de combos y ajustes de propiedades.
- **Las páginas de la skin 2026 equilibran mejor el espacio entre el contenido y los bordes de la ventana.** Se deja espacio bajo el último módulo, se reduce el espacio vacío sobre las páginas y se compensa el espacio que ocupa la barra lateral. La marca también queda visualmente diferenciada de los accesos laterales.
- **La agenda distingue mejor los eventos y muestra el mes junto a los eventos del día seleccionado.** Las tarjetas conservan su categoría con una marca lateral visible en los modos claro y oscuro. También se distinguen mejor los días, los eventos y la fecha actual; el panel permite consultar todos los eventos del día y el selector de mes se adapta al idioma y al modo de color.
- **Los elementos relacionados se muestran como etiquetas compactas y más fáciles de recorrer.** Los enlaces a objetos, procesos e informes ocupan menos espacio y se distinguen mejor al pasar el cursor. También se evita resaltar como interactivos los títulos que no realizan ninguna acción.
- **La nueva skin reúne las acciones del módulo junto al título y reduce los botones de maximizar y minimizar.** La acción principal queda a mano y las opciones menos frecuentes se agrupan en un menú de tres puntos, por lo que la barra ocupa menos espacio en los módulos estrechos. Los botones de actualizar y contraer se mantienen; la skin clásica conserva sus botones actuales.
- **Los textos y las etiquetas de la skin 2026 se leen mejor en los modos claro y oscuro.** Se ajusta el contraste de los textos semánticos, secundarios, resaltados y de las tarjetas sin cambiar los colores de fondo, botones o gráficos que usan esos tonos. Las etiquetas conservan un contraste mínimo en ambos modos.
- **La búsqueda de la paleta indica que está trabajando y diferencia los resultados vacíos de los errores.** Mientras se cargan los resultados, la pantalla conserva su espacio y muestra una indicación de espera. Si no hay coincidencias o la búsqueda falla, cada situación se comunica por separado.
- **Los módulos se ajustan mejor a las columnas estrechas en la nueva skin.** La barra de herramientas puede ocupar varias líneas en vez de ensanchar el módulo y provocar desplazamiento horizontal en la página. A anchuras mayores, la distribución no cambia.
- **La vista de parámetros se integra mejor con la skin 2026.** La nueva presentación se aplica únicamente a esta vista, sin alterar cómo se muestra en la skin Flexygo 2022.
- **La interfaz 2026 mejora las listas, el uso en móviles y varias herramientas de trabajo.** Las agrupaciones y encabezados de las listas se mantienen a la vista, y la edición de listas es más rápida. En móviles, la navegación lateral se adapta a una hoja y las filas y controles son más cómodos al tacto. También se mejoran calendarios, gráficos y la sincronización sin conexión.
- **La nueva skin muestra una barra de progreso durante la carga de las páginas, en lugar del indicador giratorio.** Así puedes seguir visualmente el avance de la navegación mientras esperas a que se muestre el contenido.
- **El tablero Kanban presenta columnas y tarjetas más claras y legibles, también en modo oscuro y al mover o archivar tarjetas.** Las tarjetas se distinguen mejor del fondo y las zonas donde puedes soltarlas ocupan toda la columna, incluso si está vacía. Al arrastrar una tarjeta al área de archivo, esta queda contenida en su franja, lo que facilita identificar el destino.
- **El planificador tiene una barra de herramientas y un panel lateral más ordenados y fáciles de leer.** Los botones identifican mejor la opción activa y el rojo se reserva para las acciones de peligro. Las etiquetas y los tipos se alinean con la cuadrícula y ocupan solo el espacio necesario. Además, el panel se pliega sin retardo visual.
- **Las pestañas de los módulos se distinguen mejor y pueden desplazarse cuando no caben en pantalla.** Las pestañas activas se reconocen con más facilidad y las más largas pueden recorrerse sin salirse del módulo. El selector de módulos también adopta el estilo de los demás controles.
- **Los mapas, los gráficos de red y la agenda se muestran correctamente en modo oscuro.** Sus áreas de visualización se integran con el aspecto oscuro de la aplicación y dejan de depender de un fondo claro.
- **En la nueva skin, los controles y elementos de navegación se integran mejor con el modo oscuro.** Se corrigen los fondos claros que dificultaban la lectura de algunos elementos. La skin clara no cambia.
- **Los submenús aparecen anidados y la última columna de las tablas aprovecha el espacio libre.** Al cambiar el tamaño de una tabla, la última columna se reajusta para evitar huecos. Los menús contextuales mantienen la jerarquía de sus opciones.
- **Los popup de filtros, procesos y notificaciones tienen una apariencia más coherente.** Comparten el mismo estilo de sombra y borde, de modo que los distintos menús se ven integrados entre sí.
- **Los cambios de versión actualizan los archivos web afectados y el acceso gestiona mejor las interrupciones del Backend.** Los archivos que no han cambiado pueden conservarse en el navegador. También se traducen las etiquetas de acceso mediante SSO.
- **Los errores de la aplicación se muestran de forma más coherente y con mensajes más claros.** La presentación se unifica en distintas operaciones de la aplicación, para que los mensajes resulten más fáciles de entender.

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

- **La configuración de la aplicación cifra en disco las contraseñas y claves sensibles.** La protección incluye, entre otros datos, las cadenas de conexión, las contraseñas de correo y NuGet, y las claves JWT y Data Protection. Puedes gestionar la clave de cifrado con el ejecutable y trasladarla a otro servidor sin necesitar el SDK. Más información en [¿Cómo descifrar y volver a cifrar la configuración?](../1FAQ/DecryptWebConfig.md).
- **La API de licencias separa la consulta y la actualización del estado, y envía el código de activación en la solicitud.** Este cambio afecta a las integraciones que consultan o actualizan el estado de la licencia y a las que envían un código de activación. Revisa las solicitudes de esas integraciones para adaptarlas al nuevo funcionamiento.
- **Los cambios de roles y permisos se aplican sin que el usuario tenga que volver a iniciar sesión.** La actualización se refleja en las siguientes solicitudes del usuario. Incluye permisos asociados a roles y permisos de objetos, páginas e informes.
- **Los objetos nuevos muestran su nombre en singular y se incorpora una vista para consultar las facultades de página.** La nueva vista permite consultar esas facultades mediante la capa de seguridad. Al crear un objeto, se utiliza su nombre en singular en lugar del título plural de la colección.
- **La página de cambio de contraseña muestra los errores y las validaciones del formulario.** Así puedes identificar los problemas al introducir o actualizar la contraseña y corregirlos antes de continuar.

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

- **El actualizador muestra un error si no puede consultar la última versión disponible.** Así puedes distinguir una consulta fallida de una situación en la que no hay una versión más reciente disponible.

### Configuración

- **La opción para cambiar de perfil solo aparece a los administradores.** Los demás usuarios dejan de ver una acción que no pueden ejecutar. Así, las opciones disponibles se ajustan a sus permisos.
- **Se recuperan traducciones que faltaban, se completan las de las nuevas pantallas administrativas y se corrige una lista de registros.** La lista de registros de ejecución incluye el identificador necesario para reconocer cada fila. También se unifican los scripts de traducción utilizados durante la instalación.
- **Se corrigen los errores al guardar dependencias y obtener valores de licencia.** Ambas operaciones vuelven a funcionar correctamente. Esto permite guardar las dependencias y consultar los valores de licencia sin los fallos anteriores.
- **Las tablas de configuración incluyen las columnas que faltaban.** La definición utilizada para crear o actualizar estas tablas incorpora ahora todas las columnas previstas. Así, las tablas quedan completas tras la operación.

### Conversaciones

- **Se corrige el envío de correos con archivos adjuntos cuando la aplicación utiliza servidores distintos.** Ahora puedes enviar correos con archivos adjuntos en esta configuración.
- **Se corrige el funcionamiento de las menciones y sus notificaciones en las conversaciones.** Puedes mencionar a otras personas y recibir las notificaciones correspondientes. Estas incluyen los valores predeterminados de la página.

### Despliegue

- **La publicación local copia al frontend las claves compartidas necesarias para iniciar sesión.** Si el backend todavía no ha generado esas claves, la publicación avisa de que aún no están disponibles. Así se evita que una instalación recién publicada quede atrapada entre la página de inicio y el inicio de sesión.
- **El despliegue de la base de datos evita un error relacionado con los cambios en los iconos.** Durante el despliegue se preparan los cambios en las tablas de iconos.

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
- **Puedes volver a mover módulos después de cancelar un arrastre con Escape.** Se corrige el fallo de movimiento que podía producirse al cancelar la operación con esa tecla.
- **Los cambios en propiedades se guardan correctamente y se abre el administrador adecuado.** Mover propiedades entre pestañas y reordenarlas funciona también en procesos e informes. Al editar la configuración de un proceso, informe u objeto, ya no se abre un administrador vacío o sin título.
- **Se corrigen las variables LESS personalizadas y la ruta de los archivos exportados con cambios de base de datos.** Los estilos personalizados se procesan correctamente. Además, la exportación de cambios de base de datos utiliza la ruta corregida.
- **Se corrigen errores de análisis, carga y definiciones TypeScript en el editor Monaco.** Estos ajustes evitan fallos al procesar contenido, cargar el editor y cargar definiciones TypeScript.
- **Puedes cambiar el orden de los nodos sin errores al cargar sus propiedades.** Se corrige el comportamiento durante la edición de nodos y la carga de sus propiedades.
- **Se corrige el clonado de barras de herramientas.** Al clonar una barra de herramientas, se conservan correctamente sus datos.

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

- **Se corrigen varios detalles de versiones, generación con IA y visualización de imágenes y textos en las vistas.** Si ya descartaste las notas de una versión, al volver a pulsarla se abre su página. «Generar con IA» actualiza el diseño en el diseñador 2026 y las vistas muestran correctamente las fotos con rutas relativas; también se corrige la traducción de «View Name».
- **Los usuarios que no son diseñadores ya pueden abrir el menú de módulos en la skin 2026.** El acceso al menú deja de depender de tener el perfil de diseñador.
- **Se corrigen la visualización del kanban y del editor HTML, el logo del menú y otros detalles de la interfaz.** También se ajusta la respuesta de los días del calendario anual y de las celdas de información al interactuar con ellas. Además, vuelven a funcionar las opciones para desactivar las tareas programadas y las tareas de script.
- **EasyInfo y los gráficos se cargan correctamente para usuarios que no son diseñadores.** Estos módulos dejan de fallar cuando el usuario no tiene acceso a las herramientas de depuración. Así, los usuarios pueden utilizar EasyInfo y ver los gráficos sin ser diseñadores.
- **Se corrigen problemas de distribución en formularios, panel de control, calendario anual e iconos de la skin 2022.** Los campos de los formularios vuelven a distribuirse correctamente y el panel de control conserva sus módulos. El calendario anual se adapta al ancho disponible y permite abrir los días con un toque; también se corrige la visualización de algunos iconos.
- **Los logotipos pueden cambiar según el tema claro u oscuro y se muestran correctamente aunque sus rutas incluyan barras invertidas.** En modo oscuro, Flexygo encuentra la variante oscura del logotipo y conserva el logotipo configurado si no existe una variante. El cambio de tema se aplica al actualizar la página y no requiere recargarla para cambiar el logotipo.
- **En la skin 2022 ya no aparece un contador sin formato en las tarjetas de grupos de ajustes.** El contador sigue visible como distintivo en la skin 2026. En la skin 2022, donde no tiene un diseño adecuado, queda oculto.
- **Las tarjetas informativas vuelven a ocupar el ancho de su espacio y muestran sus datos con más contraste en la skin 2022.** Los iconos recuperan su posición al borde de cada tarjeta y los datos importantes se leen mejor. Las fichas informativas independientes mantienen su tamaño habitual.
- **Se corrigen la traducción del registro de errores cuando la lista está vacía y la ordenación desde el menú de opciones.** La lista de errores muestra traducidos sus textos y filtros aunque todavía no haya registros. También se corrige el fallo intermitente al ordenar desde el menú de opciones.
- **Los menús del objeto dejan de repetir procesos y acciones que ya aparecen en la barra.** Se conserva la opción configurada expresamente en la barra, incluidas acciones que abren una ventana nueva. Además, el menú vuelve a abrirse en su posición correcta sin desaparecer.
- **Las tarjetas de plantillas de la skin clásica son legibles en modo oscuro.** El color del texto se adapta al fondo oscuro sin alterar la apariencia en modo claro.
- **La copia de excepciones al portapapeles funciona con caracteres especiales.** Ciertos caracteres del texto ya no interrumpen la acción, por lo que puedes copiar el mensaje completo correctamente.
- **Se corrigen claves duplicadas que podían interferir con las traducciones de la aplicación.** Las cadenas afectadas se traducen correctamente aunque compartan una clave primaria o se carguen desde los datos de la aplicación.
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

- **Las vistas de objetos aplican los permisos de lista del rol y no muestran filas fuera de su acceso.** Al consultar una vista desde JavaScript, se aplican los mismos filtros de lista que en la colección. Los filtros enviados no pueden ampliar los permisos y se rechazan si contienen ciertos errores de formato. Los administradores y las vistas configuradas como «No filter» mantienen su comportamiento.
- **Los usuarios autenticados ya no pueden obtener la clave de firma de los tokens.** La clave se genera en la configuración durante el primer inicio, pero deja de estar disponible mediante una dirección accesible para cualquier usuario autenticado. Así se evita que otros usuarios puedan utilizarla para crear tokens propios.
- **Se validan las direcciones externas y los destinos de retorno para evitar conexiones o redirecciones no seguras.** La obtención de metadatos de clientes MCP se limita a direcciones públicas. Los retornos de inicio de sesión y cambio de contraseña se restringen a páginas de la aplicación, y las llamadas de decisión solo pueden dirigirse a direcciones públicas o permitidas.
- **Puedes iniciar sesión y acceder a descargas e informes mediante un token incluido en la URL.** El token se conserva durante los redireccionamientos, también cuando el enlace solicita iniciar sesión antes de abrir el contenido.

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
