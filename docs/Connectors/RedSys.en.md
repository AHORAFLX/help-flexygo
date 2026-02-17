# RedSys Integration { .fh-title-with-image }

![](../docs_assets/images/RedSys/RedSysLogo.png){ .fh-image-of-title }

Redsys is a secure virtual payment platform that you can apply to e-commerce to offer your customers/clients credit and debit card payments from different banks. **flexygo** has the ability to make payments through this platform.

## Settings

In the following steps we'll explain how to realize integration with RedSys platform.

1.  Configure <flx-navbutton class="link" type="execprocess" processname="sysEditSettings" objectname="sysSettings" objectwhere="(Settings.[GroupName]='flx-payments')"  showprogress="false">flexygo settings</flx-navbutton>
2.  Configure <flx-navbutton class="link" type="openpage" pagetypeid="list" objectname="RedSys_Settings" showprogress="false">RedSys settings</flx-navbutton>
3.  Configure a process that will run when the payment is made. It can be a Stored or DLL process.

![](../docs_assets/images/RedSys/RedSys_2.PNG "Image 1. RedSys configuration")

![](../docs_assets/images/RedSys/RedSys_3.PNG "Image 2. RedSys configuration")

The process can receive as parameter the fields of the parsed object or response param. To receive the response, you must include a parameter in your process with the name of **ResponseCode**.

4.  After that, open the Redsys configuration and configure a new object relationship.
    
![](../docs_assets/images/RedSys/RedSys_1.PNG "Image 3. RedSys configuration")

*   **Object Name:** Name of the object to relate to Redsys
*   **Process Name:** Process that will be executed when making the payment through Redsys
*   **Amount Field:** Object field specifying quantity
*   **Success Message:** Message if process runs successfully
*   **Error Message:** Message if process runs incorrectly
*   **Only Success:** Decide if you want to run the process only if the payment is successful or if you want to run it in both cases

## Configure standard RedSys process

You can either use the standard payment process and link it to an object.

![](../docs_assets/images/RedSys/RedSys_6.PNG "Image 4. RedSys configuration")

Also you can generate a new DLL process and call the standard payment process (<fh-copy>FLEXYGO.PaymentsProcess.PayRequest</fh-copy>). The process receives the object as a parameter and optionally a quantity field. If the quantity field is not specified, the price will be obtained from the field informed in the relationship of the object with RedSys.

## Log

All transactions carried out with RedSys are registered in a log where it indicates the status it is in and the response received. <flx-navbutton class="link" type="openpage" pagetypeid="list" objectname="RedSys_Logs" showprogress="false">Go to RedSys Log</flx-navbutton>.

To know the meaning of the response codes, visit the following [**link**](https://pagosonline.redsys.es/codigosRespuesta.html#codigo-dsresponse).
{: .flx-warning-card }

## Tests

RedSys has a test environment where the correct functioning of the system can be verified before making the implementation in the real environment. For more information visit the following [**link**](https://pagosonline.redsys.es/desarrolladores-inicio/integrate-con-nosotros/tarjetas-y-entornos-de-prueba/).