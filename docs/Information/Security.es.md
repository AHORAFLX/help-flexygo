# Security { .flx-title-with-image }

![flexygo](/docs_assets/images/FlexygoLogo.png){ .flx-image-of-title }

**Flexygo** incluye 3 niveles de seguridad diferentes:

* Seguridad por roles  
* Seguridad por facultades (sobrescribe la seguridad por roles)  
* Seguridad por usuario (sobrescribe seguridad por facultades y por roles)

La seguridad por usuario permite establecer permisos específicos para un usuario concreto. Se recomienda usar la seguridad por roles, que permite aplicar seguridad a grupos de usuarios. Recientemente se ha incorporado la seguridad por facultades. Un usuario puede tener tantas facultades como queramos, por lo que es un buen complemento a la seguridad por roles.

_Ejemplo:_  
El usuario John pertenece al rol de ventas. En el rol de ventas se establece que cada comercial solo puede ver clientes de su zona. Puede que haya algunos usuarios que necesiten ver otras zonas. Podemos crear facultades para esas zonas y asignarlas a los usuarios correspondientes.

## Role Security

**Flexygo** incluye cinco roles por defecto, dos roles principales: **Admin** y **All Users**.  
El rol **Admin** concede acceso total a cualquier miembro del grupo.  
El rol **All Users** agrupa al resto de roles y permite asignar permisos directamente a todos los grupos hijos. Dentro de All Users encontramos un segundo nivel con los roles **Registered** y **Not registered**. El rol **Registered** contendrá todos los nuevos roles creados, incluido el rol de usuarios por defecto.

**La seguridad siempre se aplica hacia arriba**: si un grupo inferior tiene seguridad definida, sobrescribe la del grupo superior.  
Lo mismo ocurre si la seguridad se establece a nivel de usuario:  
**la seguridad del usuario siempre sobrescribe la del rol**.

Para comenzar con los ejemplos y explicaciones más extensas, dividiremos en dos grupos principales (All Users y Admin).

![](/docs_assets/images/Security/Circles-graph.png)

### Admin

El rol Admin puede acceder a todas las funciones de cualquier objeto existente: editar, ver, ejecutar procesos o crear nuevos. Tiene acceso a todas las configuraciones del framework, por lo que está completamente excluido del grupo All Users.

### Guest Access

En caso de querer permitir acceso sin registrar a ciertos menús o funcionalidades estándar, utilizaremos el rol Not Registered.  
Debemos asegurarnos de tener un usuario invitado que pertenezca a este rol.  
También debemos establecer una página por defecto para la seguridad del invitado y configurar permisos de visualización al menos en:

* Nodes  
* Pages  
* Modules  
* Objects  
* Processes  
* Reports  

Si queremos permitir acceso no registrado, debemos asegurarnos de que el archivo **web.config** contiene:

1\. Cambiar autenticación de Forms a None:  

```xml
<authentication mode="None">
```

2\. Comentar el bloque de denegación de autorización:  

```xml
<authorization> <deny users="?"/> </authorization> 
```

3\. Establecer **AllowGuest** a **true** en  *Admin Work Area > Environment > Settings*

| ¿A qué podemos aplicar seguridad? | En Roles | En Usuario |
| --- | --- | --- |
| Tables | ✓ | ✓ |
| Modules | ✓ | ✓ |
| Navigation Nodes | ✓ | ✓ |
| Objects | ✓ | ✓ |
| Processes | ✓ | ✓ |
| Reports | ✓ | ✓ |
| Pages | ✓ | ✓ |
| Pages modules | ✓ | ✓ |

### Example

Imaginemos que existe un rol Customers. Este rol puede listar facturas pero no puede ver la factura en detalle. Podemos definir que Customers puede ver el listado pero no abrir la factura.

Para garantizar que no puedan ver nada más, podemos retirar el permiso **Can view** para todos los objetos dentro del grupo Registered.

## LDAP Authentication

**flexygo** puede autenticar usuarios contra Active Directory.  
Solo debemos crear un nuevo usuario en Security > Users usando el formato:

**MiDominio\\MiUsuario**

Si queremos un autologin LDAP con el usuario actual de Windows, seguimos estos pasos:

1. Abrir IIS  
2. Habilitar **Windows Authentication**  
3. Deshabilitar **Anonymous Authentication**  
4. Establecer **EnableLDAPAutoLogin = true** en  
   *Admin Work Area > Environment > Settings*  
5. Editar *web.config* y cambiar la autenticación de Forms a Windows  

## Password Strength

Cuando se usa el formulario de login, **flexygo** permite definir la complejidad de la contraseña editando estas entradas en las configuraciones de entorno:

* **PasswordRequireDigit**: true si se requiere al menos un dígito  
* **PasswordRequiredLength**: longitud mínima  
* **PasswordRequireLowercase**: true si se requiere una minúscula  
* **PasswordRequireNonLetterOrDigit**: true si se requiere un carácter especial  
* **PasswordRequireUppercase**: true si se requiere una mayúscula  

Consulta el siguiente vídeo sobre seguridad en **flexygo**:

<div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/XEgrAegs0mo" title="YouTube video player" frameborder="0" allowfullscreen=""></iframe>
</div>