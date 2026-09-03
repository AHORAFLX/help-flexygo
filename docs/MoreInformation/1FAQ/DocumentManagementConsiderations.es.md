# ¿Qué aspectos debo tener en cuenta para la gestión documental?

Para que la gestión documental se realice correctamente se deben tener en cuenta varios aspectos.

## 1. Rutas de almacenamiento personalizadas

Si queremos que las imágenes o archivos se guarden en un `PATH` diferente al del proyecto, debemos configurar `DocumentPath`, `ImagePath` y los parámetros `Impersonate`:

![](../../docs_assets/images/FAQ/DocumentManagementConsiderations/1.png)

Para acceder a la modificación de estos valores vamos a **Área de diseño → Entorno → Parámetros → Editar**.

![](../../docs_assets/images/FAQ/DocumentManagementConsiderations/2.png)

## 2. Permisos del usuario de IIS

El usuario del IIS debe tener permisos de lectura y escritura en las carpetas a las que se desea acceder con la gestión documental.

![](../../docs_assets/images/FAQ/DocumentManagementConsiderations/3.png)

## 3. Tipos de configuración disponibles

En la configuración de la gestión documental podemos elegir entre dos tipos de configuración:

![](../../docs_assets/images/FAQ/DocumentManagementConsiderations/4.png)

* Si elegimos **Ahora Freeware ERP**, nuestra gestión documental se enlazará a la gestión documental del ERP; para ello deberemos indicar el objeto del ERP al cual se enlaza y la clave de dicho objeto.
* Si elegimos **Flexygo standard**, nuestra gestión documental se guardará en la ruta por defecto del proyecto en Flexygo (por ejemplo, `~\Custom\Documentos`).

## 4. Limitaciones de filtrado

Si se necesitasen dos niveles de filtrado para visualizarlo, ten en cuenta que la gestión documental no puede filtrar por el mismo campo dos veces. Para lograrlo, es necesario crear un campo nuevo que concatene ambos valores —este será el campo por el que se relacione la gestión documental y de imágenes— o añadir un campo `identity` a la tabla principal.
