# Integración con Ahora ERP { .fh-title-with-image }

![Ahora ERP](../docs_assets/images/AhoraERP/ahora.svg){ .fh-image-of-title }

**Flexygo** facilita la integración con **Ahora ERP**. Para ello, pone a un solo clic una serie de procesos que simplifican el desarrollo de soluciones sobre la base de datos de Ahora ERP.

## Configuración

1. Configura los campos **Reference** y **Subreference** para el registro de usuarios  
   (ubicado en *Admin Work Area > Security > Users*)  
   de modo que dispongan de desplegables de la tabla **employee** y la tabla **delegation** respectivamente.
    
    ![Reference and Subreference configuration](../docs_assets/images/AhoraERP/ReferenceSubreference.png "Image 1. Reference and Subreference configuration")
    
2. Activa los objetos especiales para gestionar **Imágenes de Ahora ERP** en lugar de la gestión estándar de imágenes de **flexygo**.  
3. Activa los objetos especiales para gestionar **Documentos de Ahora ERP** en lugar de la gestión estándar de documentos de **flexygo**.  
4. Se habilita un proceso **afterLogin** que crea la sesión de Ahora y establece el **context-info** antes de ejecutar cualquier consulta en la base de datos.

## Ejecutar proceso

Puedes ejecutar el proceso estándar de integración haciendo clic en:

<flx-navbutton class="button" type="execprocess" processname="pNet_ERPAhoraIntegration" excludehist="false" showprogress="false">
    Generar integración de Ahora ERP con el proceso estándar posterior al inicio de sesión
</flx-navbutton>

Puedes cambiar el proceso *afterlogin* estándar por el proceso *Portal Afterlogin*  
(integra con un único usuario, empleado 0 y dpto 0)  
o por el proceso *Anti-fraud law: User SQL Impersonate Afterlogin*  
(usa el usuario SQL asociado al empleado en el ERP; es obligatorio que el empleado tenga un login definido en Ahora ERP):

<flx-navbutton class="button" type="execprocess" processname="pNet_ERP_SetAfterloginProcess" excludehist="false" showprogress="false">
    Cambiar el proceso estandar de después del inicio de sesión a un proceso de después del inicio de sesión del Portal o ley antifraude
</flx-navbutton>