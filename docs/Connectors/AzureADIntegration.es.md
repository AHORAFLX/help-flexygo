# Integración con Azure AD

Azure es un servicio de computación en la nube operado por Microsoft para la gestión de aplicaciones mediante centros de datos administrados por Microsoft. **flexygo** proporciona la integración con Azure Active Directory. De este modo, todos los usuarios podrán acceder a tu aplicación **flexygo** utilizando su cuenta personal de Microsoft Azure.

Obtén un certificado SSL de una autoridad certificadora para una integración exitosa con Azure AD.
{: .flx-warning-card }

## Claves

Necesitas disponer de ciertas claves como **Tenant Id**, **Client Id** y **Client Secret Id** para ejecutar el proceso de integración.

1.  Inicia sesión en tu cuenta de [Microsoft Azure](https://portal.azure.com/) donde podrás crear todas las claves necesarias.  
2.  Abre Azure Active Directory, en el panel de navegación izquierdo ve a *App Registration* → *Add new app*.  
3.  Finalmente, genera un nuevo **Client Secret Id**: panel izquierdo → *Certificates and Secrets* → *Add new Client Secret*.

Asegúrate de tener los permisos necesarios para crear y gestionar aplicaciones.
{: .flx-warning-card }

### Tenant Id y Client Id

![](/assets/images/AzureAdIntegration/ClientTenant.png)

### Client Secret Id

![](/assets/images/AzureAdIntegration/ClientSecret.png)

## Configuración de plataforma

Para el correcto funcionamiento de la integración con Azure AD se requiere configuración adicional: URL de redirección, URL de cierre de sesión.  
También puedes decidir si quieres restringir el uso de tu aplicación a cuentas de tu propio directorio organizacional (*single tenant*) o permitir cuentas de cualquier directorio organizacional (*multitenant*).  
[Más información](https://docs.microsoft.com/en-us/azure/active-directory/develop/single-and-multi-tenant-apps)

![Redirect URL, logout URL](/assets/images/AzureAdIntegration/URL.png "Image 1. Redirect URL, logout URL")

## Asignación de usuarios

Si deseas restringir el acceso de los usuarios a tu aplicación **flexygo**, puedes activar la opción **assignment required**.  
Cuando está activa, los usuarios deben ser asignados previamente a la aplicación antes de poder acceder.

Para asignar usuarios:  
*Enterprise applications* → selecciona tu aplicación **flexygo** → *Users and groups*

![Users](/assets/images/AzureAdIntegration/Users.png "Image 2. Users")

## Ejecutar proceso

Una vez tengas todas las claves necesarias y configuradas las URLs de redirección y cierre de sesión, puedes ejecutar el siguiente proceso:

<flx-navbutton class="button" type="execprocess" processname="pNet_AzureIntegration" showprogress="false">
    Generate Azure AD Integration
</flx-navbutton>

## Configuración

Puedes habilitar el registro de nuevos usuarios en tu aplicación **flexygo** usando su cuenta de Azure.  
Configura lo siguiente desde Admin Area → Environment → Settings → Security o haciendo clic aquí.

Cuando el usuario completa el registro, se ejecuta el proceso “NewUserFromAAD”, que crea un nuevo usuario aplicando perfil, rol y lenguaje por defecto, además de enviar un email de confirmación.  
Estos valores pueden ser modificados por el administrador.

| Parámetro | Descripción |
| --- | --- |
| **aadRegistrationEnabled** | Permite el registro en tu app usando Azure Microsoft. Valores: true/false |
| **aadRegistrationDefaultProfile** | Nombre del perfil por defecto del nuevo usuario |
| **aadRegistrationDefaultRole** | Id del rol por defecto del nuevo usuario |
| **aadDefaultCultureId** | Idioma por defecto de los nuevos usuarios |