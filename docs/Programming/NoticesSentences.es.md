# Frases de Notificación

Las frases de notificación son una utilidad para gestionar alertas automáticas, ya sea a través de advertencias en pantalla, notificaciones push o envío de correos electrónicos. Consiste en automatizar un proceso para añadir registros a las tablas del sistema Notices, Notices\_Users y/o Mails\_Outbox. Para utilizar las frases de notificación debemos definir 2 cosas: una frase de notificación y una tarea cron.

*   **La frase de notificación**: consiste en definir consultas en SQL que nos proporcionarán la información para incluir en las tablas de notificación.
*   **La tarea cron**: se utiliza para definir cuándo queremos que se generen las notificaciones.

## Notificaciones

Es la forma en que el sistema puede enviar notificaciones push o mostrar alertas en la pantalla. Esto se muestra con una lista en un ícono que se ilumina cuando el usuario tiene mensajes no leídos. Para generar una notificación, es suficiente con añadir un registro en la tabla "Notices", y si necesitamos que la notificación se muestre para un grupo de usuarios, debemos añadirlos como registros en la tabla "Notices\_Users".

Para que funcione, la tarea cron llamada **UpdateNoticeBadge** debe estar activa.
{: .flx-warning-card }

## Frases

En primera instancia, definiremos una frase de notificación indicando una descripción, una tarea cron y la cadena de conexión (base de datos donde se realizarán las consultas SQL).

### Frases de Notificación

Utiliza la Frase de Notificación para seleccionar qué campos se colocarán en la Tabla de Notificaciones.

Recuerda que la tabla de notificaciones funciona de manera similar a un nodo de navegación.
{: .flx-warning-card }

```sql
SELECT 'Nuevas acciones pendientes' as <b>Título</b>,
'Tienes una nueva acción pendiente' as <b>Mensaje</b>,
cast(getdate() as smallDatetime) as <b>HoraRecordatorio</b>, 
cast(Dateadd(WEEK,1,getdate()) as smalldatetime) as <b>HoraExpiración</b>, 
'app' as <b>NombreMétodo</b>, 
0 as <b>TodasLosUsuarios</b>, 
'object' as <b>IdTipo</b>, 
'action' as <b>NombreObjeto</b>, 
'EstadoAcción=0' as <b>ObjetoDonde</b>, 
'list' as <b>IdTipoPágina</b>, 
EmployeeId as <b>ReferenciaActual</b>
FROM ...
```

| Propiedad | Descripción | Requerido |
| --- | --- | --- |
| **Título** | Título de la Notificación | ✓ |
| **Mensaje de Notificación** | Usar un Marcado HTML | ✓ |
| **Nombre del Método** | **App** Notificación, **Push** notificación, **PushMobile** solo para notificación de dispositivo móvil o **Pushweb** solo para notificación de navegador web | ✓ |
| **Hora de Recordatorio** | Desde cuándo debería aparecer | ✓ |
| **Fecha de Expiración** | La notificación debería desaparecer | ✓ |
| **Todas Los Usuarios** | Si se establece en falso, recuerda completar la frase de usuario de la notificación | ✓ |
| **IdTipo** | Uno de los tipos de nodo válidos: Enlace de Objeto (object), Enlace de Página (page), Proceso (process), Texto (text), etc. | ✓ |
| **ReferenciaActual** | Valor correspondiente al campo "Referencia" del usuario de Flexygo. Puede contener múltiples valores separados por ";". Con esto evitas tener que poner una declaración de usuario. |     |
| **IdUsuario** | Valor correspondiente al campo "Id" del usuario de Flexygo. Puede contener múltiples valores separados por ";". Con esto evitas tener que poner una declaración de usuario. Si usas el campo ReferenciaActual, no necesitas especificarlo. |     |
| **EventoDespuésDeClic** | Ejecutar tu propia función después del clic |     |
| **ClaseCss** |     |     |
| **NombreObjeto** | Enlace clic a un objeto |     |
| **ObjetoDonde** | Enlace clic a un objeto |     |
| **IdTipoPágina** | Enlace clic a un tipo de página |     |
| **NombrePágina** | Enlace clic a un nombre de página |     |
| **NombreReporte** | Enlace clic al nombre del reporte |     |
| **ParametrosReporte** | Enlace clic al reporte con parámetros |     |
| **NombreProceso** | Enlace clic al nombre del proceso |     |
| **Parámetros** | Para parámetros de proceso |     |
| **IdAyuda** | Enlace clic a ayuda |     |
| **URL** | Enlace clic a una url externa |     |
| **NombreTabla** | Enlace clic a la tabla maestra |     |

_Ejemplo:_ "Próximas ofertas que expiran"

```sql
SELECT 'Ofertas que expiran esta semana ' + CAST(DATEPART (week, getdate())  AS varchar) AS [Título],
'Tienes ' +  
CASE WHEN count(1)=1 THEN 'una oferta que expira en los próximos 7 días'  
ELSE CAST (count(1) AS varchar) + ' ofertas que expiran en los próximos 7 días' END AS [Mensaje], 
CAST(getdate() AS smallDatetime) AS HoraRecordatorio, 
CAST(Dateadd(dd,1,getdate()) AS smalldatetime) AS HoraExpiración, 
0 AS TodasLosUsuarios, 
EmployeeId AS referenciaActual, 
'app' AS NombreMétodo, 
'object' AS IdTipo, 
'current' AS IdObjetivo, 
'list' AS IdTipoPágina, 
'offers' AS NombreObjeto, 
'Offers.sellbydate BETWEEN ( ''' + convert(varchar(10),GETDATE(),112) + ''' ) 
      AND DATEADD (WEEK, 1, ''' + convert(varchar(10),GETDATE(),112) + ''') 
      AND (Offers.State = 0)  AND (Offers.EmployeeId={{referenciaActual}})' as ObjetoDonde
FROM (
	SELECT Offers.IdOferta, Offers.EmployeeId as EmployeeId
	FROM Offers
	WHERE Offers.SellByDate BETWEEN CAST(GETDATE() as date) AND dateadd(DAY,7, CAST(GETDATE() as date))
	AND (Offers.State = 0) AND Offers.SellByDate is not null
	) AS Asignado
GROUP BY EmployeeId
```

### Frase de Notificación de Usuario

 Si no has utilizado la referencia al usuario en la declaración principal de notificación, puedes establecer qué usuarios recibirán la notificación usando una consulta SQL, en la que puedes especificar el identificador de usuario (IdUsuario) o la referencia (ReferenciaActual).

Utiliza "Frase de Notificación de Usuario" para seleccionar qué IdUsuario debería recibir la notificación.
Recuerda que el IdUsuario debe obtenerse de la Base de Datos de Configuración.

```sql
SELECT UserId FROM ... WHERE ...
```

 A veces el usuario no está definido en nuestro modelo de datos, entonces podemos usar la referencia al usuario.

```sql
SELECT EmployeeId AS CurrentReference FROM ... WHERE ...
```

| Propiedad | Descripcion | RRequeridoequired |
| --- | --- | --- |
| **CurrentReference** | Referencia de AspNetUsers | ✓ |
| **UserId** | ID de Usuario de AspNetUsers | ✓ |

_Ejemplo_: "Próximas ofertas que expiran" 

```sql
SELECT distinct 1 as UserId, 
EmployeeId as CurrentReference
FROM ( 
	SELECT Offers.IdOferta, Offers.EmployeeId AS EmployeeId
          FROM Offers
          WHERE Offers.SellByDate BETWEEN cast(GETDATE() as date) AND dateadd(DAY,7, cast(GETDATE() as date))
          AND (Offers.State =0) AND Offers.SellByDate is not null
    ) AS Assigned
GROUP BY EmployeeId
```

### Sentencia de Actualización

Utiliza una sentencia de actualización si es necesario después de llenar las tablas de correos o avisos.
En el caso de que la notificación no esté dirigida a todos los usuarios, sino a un grupo específico, debemos indicar a qué usuarios.
Ya sea identificándolos utilizando el identificador de usuario del sistema (UserId) o la referencia a él en el modelo de datos (Referencia). 

```sql
UPDATE Mytable\_Log SET NotifiedError = 1 WHERE HASError = 1 AND NotifiedError = 0
```

### Sentencia de Correo

Utiliza la Sentencia de Correo para seleccionar qué campos se colocarán en la Tabla Mails_Outbox.

```sql
SELECT 'dmi@flx.com' AS FromEmail, 
'David' AS FromName,
'Acciones pendientes nuevas' AS Subject,
'Tienes nuevas acciones pendientes' AS Body, 
CAST(GETDATE() AS smallDatetime) AS SendDate,
'johnpaul@beatdomain.com' AS [To],
'3E0A3AA1-0B56-4091-9736-200964B2D1F4|C49953C3-2BE8-4591-9601-99BDF77B1028' AS attachments
FROM ...
```

| Propiedad | Descripción | Requerido |
| --- | --- | --- |
| **FromEmail** | Correo electrónico del remitente | ✓ |
| **To** | Correo electrónico del destinatario | ✓ |
| **Subject** | Asunto del Correo | ✓ |
| **Body** | Cuerpo del Correo | ✓ |
| **FromName** | Nombre del Remitente |     |
| **CC** | Copia (correo) Carbono |     |
| **CCO or BCC** | Copia (correo) Carbono Oculta |     |
| **UserId** | ID de Usuario del Remitente |     |
| **SendDate** | Fecha utilizada por cron para enviar el correo |     |
| **ReplyTo** | Correo electrónico de Respuesta a |     |
| **ObjectName** | Enlace para hacer clic en un objeto |     |
| **ObjectWhere** | Enlace para hacer clic en un objeto |     |
| **Attachments** | Lista de Guid de documentos del gestor de documentos separados por tuberías \| |     |

### Sentencia de Sms

(Para poder usarlo, es necesario habilitar la integración, para más información consulta la ayuda de [abh sms](/Ahora%20Business%20Hub/AbhSms).)

Utiliza la Sentencia de Sms para seleccionar qué campos se colocarán en la Tabla Sms_Outbox.

```sql
SELECT
'684352406' as Phone
,'Tienes nuevas acciones pendientes' as Text
, cast(getdate() as smallDatetime) as SendDate
FROM ....
```

| Propiedad | Descripcion | Requerido |
| --- | --- | --- |
| **Phone** | Teléfono del remitente | ✓ |
| **Text** | Texto de Sms | ✓ |
| **UserId** | ID de Usuario del Remitente |     |
| **SendDate** | Fecha utilizada por cron para enviar el correo |     |
| **ObjectName** | Enlace para hacer clic en un objeto |     |
| **ObjectWhere** | Enlace para hacer clic en un objeto |     |

### Tareas Cron

Finalmente, debemos crear una nueva tarea cron e indicar un nombre, un grupo de trabajo (por defecto "Defaultgroup"), una breve descripción, habilitado... A continuación, seleccionamos el horario de disparo. En las opciones de proceso debemos poner el proceso BuildMailandNotifications y ejecutarlo como el usuario administrador. En el nombre del proceso pondremos SysNoticeSentences y en el objeto Where pondremos el filtro de la sentencia que acabamos de crear (SentenceId = 'myalert') 

Ve el video sobre la creación de la tarea cron:

<div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/VIIhQnkH-QI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>

## Acerca de los procesos estándar

Una vez que se definen las sentencias, el cronjob completa las tablas mencionadas. Luego, otros procesos estándar son responsables de notificar por correo o pantalla. Para enviar alertas, hay un proceso estándar que cada minuto analiza los registros añadidos a las tablas Notices y Notices_Users y los procesa para enviar alertas. Esto lo realiza otro cronjob llamado UpdateNoticeBadge. Para enviar los correos electrónicos, hay un proceso estándar que cada minuto analiza los registros añadidos a la tabla Mails_Outbox y los procesa para enviar los correos electrónicos. Esto lo realiza otro cronjob llamado SendOutBoxEmails. 