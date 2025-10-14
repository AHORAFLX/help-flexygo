# RedSys Integration

![](/assets/images/RedSys/RedSysLogo.png)

Redsys is a secure virtual payment platform that you can apply to e-commerce to offer your customers/clients credit and debit card payments from different banks. **flexygo** has the ability to make payments through this platform.

## Settings

In the following steps we'll explain how to realize integration with RedSys platform.

1.  Configure flexygo settings
2.  Configure RedSys settings
3.  Configure a process that will run when the payment is made. It can be a Stored or DLL process.
    
    ![](/assets/images/RedSys/RedSys_2.png "Image 1. RedSys configuration")
    
    Image 1. RedSys configuration
    
    ![](/assets/images/RedSys/RedSys_3.png "Image 2. RedSys configuration")
    
    Image 2. RedSys configuration
    
    The process can receive as parameter the fields of the parsed object or response param. To receive the response, you must include a parameter in your process with the name of **ResponseCode**.
4.  After that, open the Redsys configuration and configure a new object relationship.
    
    ![](/assets/images/RedSys/RedSys_1.png "Image 3. RedSys configuration")
    
    Image 3. RedSys configuration
    
    *   **Object Name:** Name of the object to relate to Redsys
    *   **Process Name:** Process that will be executed when making the payment through Redsys
    *   **Amount Field:** Object field specifying quantity
    *   **Success Message:** Message if process runs successfully
    *   **Error Message:** Message if process runs incorrectly
    *   **Only Success:** Decide if you want to run the process only if the payment is successful or if you want to run it in both cases

## Configure standard RedSys process

You can either use the standard payment process and link it to an object.

![](/assets/images/RedSys/RedSys_6.png "Image 4. RedSys configuration")

Image 4. RedSys configuration

Also you can generate a new DLL process and call the standard payment process (FLEXYGO.PaymentsProcess.PayRequest). The process receives the object as a parameter and optionally a quantity field. If the quantity field is not specified, the price will be obtained from the field informed in the relationship of the object with RedSys.

## Log

All transactions carried out with RedSys are registered in a log where it indicates the status it is in and the response received. Go to RedSys Log.

To know the meaning of the response codes, visit the following [**link**](https://pagosonline.redsys.es/codigosRespuesta.html#codigo-dsresponse).

## Tests

RedSys has a test environment where the correct functioning of the system can be verified before making the implementation in the real environment. For more information visit the following [**link**](https://pagosonline.redsys.es/entornosPruebas.html).