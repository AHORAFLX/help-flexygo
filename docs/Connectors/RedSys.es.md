# RedSys { .fh-title-with-image }

![](../docs_assets/images/RedSys/RedSysLogo.png){ .fh-image-of-title }

**Redsys** es una plataforma de pago virtual segura que puedes aplicar al comercio electrónico para ofrecer a tus clientes pagos con tarjeta de crédito y débito de diferentes bancos. **Flexygo** tiene la capacidad de realizar pagos a través de esta plataforma.

## Configuración en Flexygo

En los siguientes pasos explicaremos cómo realizar la integración con la **plataforma RedSys**.

Configura los siguientes <flx-navbutton class="link" type="execprocess" processname="sysEditSettings" objectname="sysSettings" objectwhere="(Settings.[GroupName]='flx-payments')"  showprogress="false">ajustes de flexygo</flx-navbutton>:

| Ajuste | Descripción |
| --- | --- |
| `Payments_Redsys_Currency` | El código ISO-4271 de la moneda que usas en tus transacciones, por ejemplo euros sería <fh-copy>978</fh-copy>. Puedes encontrar todos los códigos de moneda [aquí](https://es.iban.com/currency-codes) |
| `Payments_Redsys_MerchantCode` | Es el **código FUC** asignado a tu negocio y que tu banco te habrá proporcionado por correo al registrar tu TPV Virtual |
| `Payments_Redsys_MerchantKey` | La **clave de firma de redsys** que encontrarás en la sección de configuración del comerciante con el botón ver clave |
| `Payments_Redsys_SignatureVersion` | Es una constante que indica la versión de firma utilizada, normalmente <fh-copy>HMAC_SHA512_V2</fh-copy> |
| `Payments_Redsys_Terminal` | Es el **número de terminal** del comerciante que vas a utilizar. Debería estar junto al número de comerciante enviado por tu banco y, en la mayoría de los casos, es <fh-copy>001</fh-copy> |
| `Payments_Redsys_Transaction` | Es el tipo de operación que se realizará, normalmente 0. Puedes obtener más información [aquí](https://pagosonline.redsys.es/desarrolladores-inicio/integrate-con-nosotros/parametros-de-entrada-y-salida/) en la sección de tipo de transacción |
| `Payments_Redsys_URL` | La URL a la que el usuario será redirigido al comprar, debe ser <fh-copy>https://sis.redsys.es/sis/realizarPago</fh-copy> o <fh-copy>https://sis-t.redsys.es:25443/sis/realizarPago</fh-copy> para pruebas como se indica [aquí](https://pagosonline.redsys.es/desarrolladores-inicio/documentacion-operativa/operacion-autenticacion/) |

## Configuración del Proceso

Para gestionar el resultado de la transacción de pago devuelta tras un pago, debes configurar un **proceso** en el que puedas hacer lo que quieras con los valores que retorna. Puede ser un **proceso almacenado** o **DLL**.

El proceso puede recibir como parámetro los campos del objeto parseado o el parámetro de respuesta. Para recibir la respuesta, debes incluir un parámetro en tu proceso con el nombre `ResponseCode`.

![](../docs_assets/images/RedSys/RedSys_2.PNG "Imagen 1. Configuración RedSys")

![](../docs_assets/images/RedSys/RedSys_3.PNG "Imagen 2. Configuración RedSys")

## Configuración RedSys

También deberás configurar los <flx-navbutton class="link" type="openpage" pagetypeid="list" objectname="RedSys_Settings">ajustes de RedSys</flx-navbutton>.
    
![](../docs_assets/images/RedSys/RedSys_1.PNG "Imagen 3. Configuración RedSys")

| Ajuste         | Descripción |
|-----------------|-------------|
| **Nombre del Objeto** | Nombre del objeto que contiene el precio y está relacionado con Redsys |
| **Nombre del Proceso** | El proceso que se ejecutará tras realizar el pago con Redsys, mencionado en la [sección anterior](#configuración-del-proceso) |
| **Campo Importe** | Campo del objeto que especifica el precio |
| **Mensaje de Éxito** | Mensaje si el proceso se ejecuta correctamente |
| **Mensaje de Error** | Mensaje si el proceso se ejecuta incorrectamente |
| **Solo Éxito** | Márcalo si quieres ejecutar el proceso solo si el pago es exitoso, si no se ejecutará tanto en éxito como en error |

## Vinculación del Proceso Redsys

Para finalizar la configuración tendrás que vincular el proceso de pago estándar <fh-copy>PayByRedsys</fh-copy>, que no es el mismo que el configurado en la sección anterior, a un objeto. Puedes hacerlo <flx-navbutton class="link" type="openpage" pagetypeid="list" objectname="sysObjectProcesses" objectwhere="Objects_Processes.ObjectName in (Select ObjectName from Objects where offline=0)">aquí</flx-navbutton>.

![](../docs_assets/images/RedSys/RedSys_6.PNG "Imagen 4. Configuración RedSys")

También puedes generar tu propio proceso DLL y llamar al proceso de pago estándar <fh-copy>FLEXYGO.PaymentsProcess.PayRequest</fh-copy>. El proceso recibe el objeto como parámetro y opcionalmente un campo de cantidad. Si no se especifica el campo de cantidad, el precio se obtendrá del campo informado en la relación del objeto con RedSys.

## Logs

Todas las transacciones realizadas con **RedSys** se registran en <flx-navbutton class="link" type="openpage" pagetypeid="list" objectname="RedSys_Logs" showprogress="false">RedSys Logs</flx-navbutton> donde se almacena el estado y la respuesta recibida.

!!! info "Códigos de respuesta"
	Para conocer el significado de los códigos de respuesta, visita el siguiente [enlace](https://pagosonline.redsys.es/desarrolladores-inicio/integrate-con-nosotros/parametros-de-entrada-y-salida/).

## Pruebas

**RedSys** dispone de un entorno de pruebas donde se puede verificar el correcto funcionamiento del sistema antes de realizar la implementación en el entorno real. Para más información visita el siguiente [enlace](https://pagosonline.redsys.es/desarrolladores-inicio/integrate-con-nosotros/tarjetas-y-entornos-de-prueba/).
