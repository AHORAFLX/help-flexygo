# Integración con RedSys { .flx-title-with-image }

![](/docs_assets/images/RedSys/RedSysLogo.png){ .flx-image-of-title }

RedSys es una plataforma segura de pagos virtuales que puedes aplicar en tu e-commerce para ofrecer a tus clientes pagos con tarjeta de crédito y débito de distintos bancos.  
**flexygo** tiene la capacidad de realizar pagos a través de esta plataforma.

## Configuración

En los siguientes pasos se explica cómo realizar la integración con la plataforma RedSys:

1. Configurar los <flx-navbutton class="link" type="execprocess" processname="sysEditSettings" objectname="sysSettings" objectwhere="(Settings.[GroupName]='flx-payments')" showprogress="false">ajustes de flexygo</flx-navbutton>.
2. Configurar los <flx-navbutton class="link" type="openpage" pagetypeid="list" objectname="RedSys_Settings" showprogress="false">ajustes de RedSys</flx-navbutton>.
3. Configurar un proceso que se ejecutará cuando se realice el pago. Puede ser un proceso *Stored* o un proceso *DLL*.

![](/docs_assets/images/RedSys/RedSys_2.png "Image 1. RedSys configuration")

![](/docs_assets/images/RedSys/RedSys_3.png "Image 2. RedSys configuration")

El proceso puede recibir como parámetros los campos del objeto enviado o el parámetro de respuesta.  
Para recibir la respuesta, debes incluir en tu proceso un parámetro con el nombre **ResponseCode**.

4. Después, abre la configuración de RedSys y crea una nueva relación de objeto:

![](/docs_assets/images/RedSys/RedSys_1.png "Image 3. RedSys configuration")

* **Object Name:** Nombre del objeto a relacionar con RedSys  
* **Process Name:** Proceso que se ejecutará al realizar el pago  
* **Amount Field:** Campo del objeto que indica la cantidad a cobrar  
* **Success Message:** Mensaje mostrado si el proceso se ejecuta correctamente  
* **Error Message:** Mensaje mostrado si el proceso falla  
* **Only Success:** Permite decidir si deseas ejecutar el proceso solo si el pago es exitoso o en ambos casos

## Configurar el proceso estándar de RedSys

Puedes usar el proceso estándar de pago y vincularlo directamente a un objeto:

![](/docs_assets/images/RedSys/RedSys_6.png "Image 4. RedSys configuration")

También puedes generar un nuevo proceso DLL y llamar al proceso estándar de pago (<fh-copy>FLEXYGO.PaymentsProcess.PayRequest</fh-copy>(). Este proceso recibe el objeto como parámetro y, de forma opcional, un campo de cantidad.  
Si no se especifica el campo de cantidad, el importe se obtendrá del campo indicado en la relación del objeto con RedSys.

## Log

Todas las transacciones realizadas con RedSys quedan registradas en un log que indica su estado y la respuesta recibida. <flx-navbutton class="link" type="openpage" pagetypeid="list" objectname="RedSys_Logs" showprogress="false">Ir al Log de RedSys</flx-navbutton>.

Para conocer el significado de los códigos de respuesta, visita el siguiente [**enlace**](https://pagosonline.redsys.es/codigosRespuesta.html#codigo-dsresponse).
{: .flx-warning-card }

## Pruebas

RedSys dispone de un entorno de pruebas donde se puede verificar el correcto funcionamiento antes de la implantación real.  
Para más información visita el siguiente [**enlace**](https://pagosonline.redsys.es/entornosPruebas.html).