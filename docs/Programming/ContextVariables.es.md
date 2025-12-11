# Variables de Contexto

Las variables de contexto son aquellas que pueden tener diferentes valores en diferentes entornos. Estas variables se utilizan para hacer que el código esté listo para producción y se pueden usar en soluciones como tokens en cualquier plantilla o sentencia SQL.

Mira el siguiente video sobre las variables de contexto.

<div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/0MMp44TEmg4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>

## Tokens por Defecto

Todos los tokens deben ser referenciados con llaves **{{** / **}}**. Flexygo incluye las siguientes variables por defecto:


*    **{{currentReference}}**: Comodín utilizado para vincular otros elementos del sistema al usuario actual
*    **{{currentSubreference}}**: Segundo comodín utilizado para vincular otros elementos del sistema al usuario actual
*    **{{currentRole}}**: Nombre del rol actual del usuario
*    **{{currentRoleId}}**: Id del rol actual del usuario
*    **{{currentUserLogin}}**: Login del usuario actual
*    **{{currentUserId}}**: Id del usuario actual
*    **{{currentUserFullName}}**: Nombre completo del usuario actual
*    **{{currentUserCultureId}}**: Id de cultura del usuario actual
*    **{{currentUserLang}}**: Idioma del usuario actual. Primeros dos dígitos del Id de cultura
*    **{{currentUserEmail}}**: Correo electrónico del usuario actual.
*    **{{currentDate}}**: Fecha actual.
*    **{{currentTime}}**: Hora actual con precisión de minutos.
*    **{{currentTimeSec}}**: Hora actual con precisión de segundos.
*    **{{currentDateTime}}**: Fecha y hora actual con precisión de minutos.
*    **{{currentDateTimeSec}}**: Fecha y hora actual con precisión de segundos.


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

*    **{{objectmenu}}**: Se utiliza para mostrar un botón de menú de proceso de objeto
*    **{{viewbutton}}**: Se utiliza para mostrar un botón de vista de objeto
*    **{{editbutton}}**: Se utiliza para mostrar un botón de edición de objeto
*    **{{newbutton}}**: Se utiliza para mostrar un botón de nuevo objeto
*    **{{deletebutton}}**: Se utiliza para mostrar un botón de eliminación de objeto


### Correos electrónicos o enlaces externos

*    **{{externalObjectView}}**: Ruta completa al formulario de vista de objeto
*    **{{externalObjectEdit}}**: Ruta completa al formulario de edición de objeto
