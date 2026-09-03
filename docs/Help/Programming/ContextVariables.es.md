# Variables de Contexto

Las variables de contexto son aquellas que pueden tener diferentes valores en diferentes entornos. Estas variables se utilizan para hacer que el código esté listo para producción y se pueden usar en soluciones como tokens en cualquier plantilla o sentencia SQL.

Mira el siguiente video sobre las variables de contexto.

<div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/0MMp44TEmg4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>

## Tokens por Defecto

Todos los tokens deben ser referenciados con llaves **{{** / **}}**. Flexygo incluye las siguientes variables por defecto:


*    <fh-copy>{{currentReference}}</fh-copy>: Comodín utilizado para vincular otros elementos del sistema al usuario actual
*    <fh-copy>{{currentSubreference}}</fh-copy>: Segundo comodín utilizado para vincular otros elementos del sistema al usuario actual
*    <fh-copy>{{currentRole}}</fh-copy>: Nombre del rol actual del usuario
*    <fh-copy>{{currentRoleId}}</fh-copy>: Id del rol actual del usuario
*    <fh-copy>{{currentUserLogin}}</fh-copy>: Login del usuario actual
*    <fh-copy>{{currentUserId}}</fh-copy>: Id del usuario actual
*    <fh-copy>{{currentUserFullName}}</fh-copy>: Nombre completo del usuario actual
*    <fh-copy>{{currentUserCultureId}}</fh-copy>: Id de cultura del usuario actual
*    <fh-copy>{{currentUserLang}}</fh-copy>: Idioma del usuario actual. Primeros dos dígitos del Id de cultura
*    <fh-copy>{{currentUserEmail}}</fh-copy>: Correo electrónico del usuario actual.
*    <fh-copy>{{currentDate}}</fh-copy>: Fecha actual.
*    <fh-copy>{{currentTime}}</fh-copy>: Hora actual con precisión de minutos.
*    <fh-copy>{{currentTimeSec}}</fh-copy>: Hora actual con precisión de segundos.
*    <fh-copy>{{currentDateTime}}</fh-copy>: Fecha y hora actual con precisión de minutos.
*    <fh-copy>{{currentDateTimeSec}}</fh-copy>: Fecha y hora actual con precisión de segundos.


## Generar Tokens

Flexygo te permite generar tus propios Tokens utilizando sentencias SQL. Indicaremos la cadena de conexión que queremos usar y qué sentencia SQL utilizando cualquiera de los tokens previamente generados.

Si tengo una tabla de Empleados en mi modelo de datos con un correo electrónico y quiero obtener el EmployeeID de la tabla de empleados. Podemos crear un nuevo token llamado  **{{EmployeeId}}**
```sql
SELECT EmployeeId FROM Employees WHERE Email = '{{currentUserEmail}}'
```

Ahora nuestro nuevo token {{EmployeeId}} puede ser utilizado como una variable estándar en cualquier parte de nuestra solución.

## Tokens Especiales

Existen algunos tokens especiales para acceder a formularios de objetos o menús que se pueden usar en plantillas o correos electrónicos

### Plantillas

*    <fh-copy>{{objectmenu}}</fh-copy>: Se utiliza para mostrar un botón de menú de proceso de objeto
*    <fh-copy>{{viewbutton}}</fh-copy>: Se utiliza para mostrar un botón de vista de objeto
*    <fh-copy>{{editbutton}}</fh-copy>: Se utiliza para mostrar un botón de edición de objeto
*    <fh-copy>{{newbutton}}</fh-copy>: Se utiliza para mostrar un botón de nuevo objeto
*    <fh-copy>{{deletebutton}}</fh-copy>: Se utiliza para mostrar un botón de eliminación de objeto


### Correos electrónicos o enlaces externos

*    <fh-copy>{{externalObjectView}}</fh-copy>: Ruta completa al formulario de vista de objeto
*    <fh-copy>{{externalObjectEdit}}</fh-copy>: Ruta completa al formulario de edición de objeto
