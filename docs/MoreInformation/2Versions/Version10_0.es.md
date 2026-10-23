# Versión 10.0

La IA añade nuevos modelos y mensajes configurables; la Web API permite proteger propiedades e insertar varias entidades, y mejoran los formularios y la búsqueda de objetos.

## Novedades

### Formularios

- **Los controles personalizados permiten definir el tipo de ruta raíz.** La opción se incorpora a la configuración de propiedades y controles personalizados, y aparece solo cuando es necesaria. También está traducida en la aplicación.

### Inteligencia artificial

- **La integración de IA incorpora la API de respuestas y nuevos modelos GPT.** La API de respuestas permite trabajar con llamadas a herramientas desde la integración de IA. Los nuevos modelos GPT también están disponibles en esta integración.
- **Puedes configurar los mensajes de los procesos de IA que ejecutan JavaScript.** Los mensajes dejan de ser fijos y pueden adaptarse al proceso que se esté ejecutando. Configúralos en los procesos de IA que ejecutan JavaScript.

### Interfaz

- **El buscador de objetos incorpora paginación en la parte inferior.** El paginador se muestra junto a los resultados. Así puedes recorrer listas que ocupan varias páginas.

### Procesos

- **Puedes excluir DLL de los procesos C# integrados mediante una nueva configuración.** Indica en la configuración qué bibliotecas no deben incluirse en esos procesos. Esto permite ajustar qué DLL se incluyen en los procesos C# integrados.

### Seguridad de la WebAPI

- **Puedes ocultar propiedades para impedir que se consulten o modifiquen desde la Web API.** La opción se configura en las propiedades de los objetos y también se tiene en cuenta al insertar datos. La configuración de dependencias contempla qué propiedades quedan ocultas en la API.
- **La Web API tiene en cuenta las dependencias de los objetos al insertar datos.** Define las dependencias en el objeto para que se apliquen también cuando la inserción se realiza mediante la API.
- **La Web API permite insertar varias entidades en una misma petición.** La operación de inserción masiva facilita enviar varias entidades juntas, en lugar de hacer una petición por cada una.

## Mejoras

### Correo electrónico

- **Los correos recibidos se ordenan por fecha, además de por su identificador UID.** Si varios mensajes tienen el mismo UID, la fecha determina su orden de recepción. Esto permite distinguir su posición cuando el identificador coincide.

### Formularios

- **El validador SQL reconoce los tipos de datos de Oracle.** Así, puedes validar consultas SQL que utilicen tipos de datos propios de Oracle.

### Gestión de documentos e imágenes

- **La aplicación sin conexión gestiona mejor la codificación de las imágenes al enviarlas.** La mejora se aplica al envío de imágenes en la gestión de documentos e imágenes desde la aplicación sin conexión.

### Inicio de sesión

- **Tras restablecer la contraseña, se redirige al usuario al inicio de sesión.** Al completar el cambio, el usuario vuelve a la pantalla de acceso. Desde allí puede iniciar sesión con la nueva contraseña.

### Licencias

- **Las licencias admiten ahora el producto Atlas.** Así, Atlas puede utilizarse con una licencia que incluya este producto.

## Correcciones

### Conversaciones

- **Las notificaciones de menciones en el chatter incluyen los valores predeterminados de la página.** Al mencionar a una persona, la notificación que recibe incorpora esos valores, que antes no se enviaban.

### Correo electrónico

- **Puedes recibir correos aunque no incluyan contenido HTML.** Se procesan tanto los mensajes sin una parte HTML como aquellos cuya parte HTML está vacía. Así, pueden descargarse aunque no tengan contenido HTML.

### Filtros

- **Los filtros de texto funcionan correctamente en objetos con tablas relacionadas.** La corrección permite aplicar estos filtros sin errores en listas de objetos que incluyen relaciones con otras tablas.

### Formularios

- **El control de código de barras gestiona correctamente sus dependencias.** El ajuste afecta al uso del control en formularios. De este modo, se gestionan correctamente sus dependencias.
- **Puedes marcar como obligatorios varios campos de archivo del mismo formulario.** Si falta un archivo requerido, la validación señala correctamente los campos que deben completarse. Así puedes identificar qué campos del formulario faltan.

### Inicio de sesión

- **Se corrige el inicio de sesión con Cl@ve para certificados de personas jurídicas.** El NIF o CIF del certificado se utiliza como identificador de acceso y la razón social como nombre visible. También se evitan errores cuando faltan algunos datos del certificado.

### Integraciones

- **Las URI más largas ya se admiten en el proceso de integración con Azure.** Esto evita errores al utilizar direcciones que superan el límite anterior.

### Inteligencia artificial

- **Se corrige la configuración aplicada en las búsquedas vectoriales y consultas RAG de la IA.** La corrección afecta a las consultas que recuperan información para generar respuestas. Incluye tanto las búsquedas vectoriales como las consultas RAG.
- **La IA ofrece una explicación corregida cuando no establece bien las relaciones del modelo de datos.** La explicación ayuda a entender los problemas que aparecen al generar las relaciones del modelo. Se ofrece cuando la IA no las establece correctamente.

### Interfaz

- **Los botones de navegación pasan correctamente los parámetros del proceso.** Al iniciar un proceso desde un botón de navegación, este recibe los parámetros configurados para la acción. Así, la acción se ejecuta con los valores definidos.

### Procesos

- **Los procesos anteriores y posteriores conservan los valores de las propiedades separadas.** Al ejecutar estos procesos sobre una entidad, sus valores no se pierden. Así, se mantienen disponibles después de la ejecución.
- **El botón de proceso sigue apareciendo en la barra de herramientas aunque sus botones secundarios estén deshabilitados.** La acción principal permanece visible en esa situación. Puedes acceder a ella desde la barra de herramientas aunque los botones secundarios no estén disponibles.

### Seguridad

- **Se corrige la plantilla de seguridad basada en roles.** La plantilla establece los permisos asociados a cada rol, por lo que esta corrección afecta a la seguridad de los objetos.
