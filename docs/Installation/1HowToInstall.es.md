# Instalación

Aquí te enseñaremos todo lo básico que debes saber para instalar un flexygo correctamente.

## Instalar un flexygo por primera vez

Para instalar flexygo tan solo tendrás que descargarlo utilizando el botón de abajo y seguir los pasos de instalación, pero antes revisa que cumplas los [requisitos mínimos](#requisitos-mínimos):

[Descarga ya](https://docs.flexygo.com/Setup/FlexyGoInstaller.zip){ .button }

## Requisitos mínimos

*   Servidor Windows 2013 o superior
*   Internet Information server
*   Microsof Framework 4.5
*   SQL 2016 Express.

## Recomendaciones técnicas

Además de mirar los requesitos mínimos debes seguir las siguientes recomendaciones para que tu proyecto vaya sobre ruedas. **Flexygo** funciona sobre un **IIS con el framework 4.5** instalado, por lo que necesitaremos un **Servidor Windows 2013 o superior**. Su modelo de datos de configuración es **S****QL de Microsoft a partir de la versión 2016**, siempre recomendamos que sean máquinas separadas para el IIS y para SQL, sobre todo con un volumen alta de usuarios.

Recomendamos en cualquier caso y cuando no sepamos la dimensión que puede adquirir el proyecto, tener un SQL Enterprise sea 2016 o superior. Usar una versión Enterprise permite escalabilidad y uso de más memoria y procesadores conforme pueda ir creciendo el proyecto y el número de usuarios, pero no es un requisito mínimo ya que valdría un SQL2016 Express.

Hacer una estimación de la dimensión de las máquinas depende del tipo de proyecto que se esté abordando, ya que intervienen variables como el tipo de aplicación, número de usuarios y número de integraciones con otros servicios.

Para una aplicación de unos 100 usuarios simultáneos estamos recomendando:

**Maquina SQL:** 

*   Windows Sever 2016 Standard o superior.
*   Procesador intel® Xeon® CPU ES-2650 v4 @ 2.20GHz (sólo como referencia, no tiene por qué ser éste).
*   RAM 16 GB (ampliable).
*   500 GB\* disco.

Sigue [este vídeo](https://www.youtube.com/watch?v=ttcadOncjAM) para su correcta instalación.
  
**Maquina IIS:** 

*   Windows Sever 2016 Standard o superior.
*   Procesador intel® Xeon® CPU ES-2650 v4 @ 2.20GHz (sólo como referencia, no tiene por qué ser éste).
*   RAM 8,00 GB (ampliable).
*   Framework 4.5 de Microsoft.
*   500 GB disco.

Sigue [este vídeo](https://www.youtube.com/watch?v=fFKLuk1N4e4) para su correcta instalación.

El Espacio en disco dependerá de la naturaleza del proyecto, pudiendo optar por una NAS externa si se va a utilizar gestión de documentos o de imágenes de muchísimo volumen.

En función del número de usuarios se pueden ir ampliando el número de Máquinas IIS y poner un balanceador delante, de forma que redirija según la carga de cada una de las máquinas. El tener varias también garantiza cierta seguridad ante la posible caída de uno de los IIS.

### Según criticidad

Existen otra serie de recomendaciones que no son necesarias para **flexygo** , pero que pueden ser interesantes según la criticidad del proyecto, como pueden ser:

*   Servidores redundantes.
*   Sistemas de seguridad.
*   Sistemas de backup de datos.
*   SQL montado sobre un clúster de máquinas.

### Grandes BBDDs 

Cuando vayamos a tener BD grandes de mas de 30 Gb os recomendamos que echéis un vistazo a este artículo para dimensionar correctamente vuestro servidor SQL Server 

[https://www.brentozar.com/archive/2018/11/how-much-memory-is-normal-for-sql-servers/](https://www.brentozar.com/archive/2018/11/how-much-memory-is-normal-for-sql-servers/)