# Flexygo MFA

¡Nuevo en flexygo! Implementación del sistema de **Autenticación Multifactor (MFA)**.

¿Qué es MFA y por qué es importante? MFA añade una capa adicional de seguridad al requerir que los usuarios verifiquen su identidad utilizando dos o más métodos antes de acceder a sus cuentas. Esto reduce significativamente el riesgo de accesos no autorizados, protegiendo tus datos y la integridad de tu información.

## Opciones de verificación

Con flexygo MFA, los **administradores** pueden elegir entre dos métodos de verificación: **email y SMS**. Esto permite seleccionar la opción que mejor se adapte a las necesidades y recursos de la organización.

Recuerda que para usar **MFA por SMS** debes tener configurada la [integración de Abh SMS](/Ahora%20Business%20Hub/AbhSms).
{: .flx-warning-card }

## Control granular

En flexygo entendemos que no todos los usuarios requieren el mismo nivel de seguridad. Por esta razón, se ha incorporado la posibilidad de definir qué **roles o usuarios** tendrán habilitada la verificación en dos pasos. Esto permite una gestión precisa y eficiente de la seguridad de la aplicación.

## ¿Cómo configurarlo?

En primer lugar, tenemos 2 nuevos ajustes:

![](/docs_assets/images/MFA/mfa_settings.png "Image 1. MFA Settings")

* **MFA_cookie_duration**: En esta sección puedes definir el número de días durante los cuales estará activo el mensaje "¿Confiar en este dispositivo?".
* **MFA_Type**: En esta sección el administrador puede definir qué tipo de MFA se utilizará.

Después de configurar estos parámetros como consideremos oportuno, podemos definir a nivel de usuario o rol a quién activar el MFA.

![](/docs_assets/images/MFA/mfa_user.png "Image 2. MFA in user")

![](/docs_assets/images/MFA/mfa_role.png "Image 3. MFA in role")

Finalmente, si intentamos iniciar sesión con un usuario que tenga MFA activo, veremos la siguiente pantalla para introducir nuestro código de seguridad:

![](/docs_assets/images/MFA/mfa_screen.png "Image 4. MFA Screen")