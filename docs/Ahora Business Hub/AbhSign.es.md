# Abh Sign

Abh Sign es una integración de **Ahora Business Hub** que permite a **flexygo** enviar documentos PDF para su firma y guardarlos posteriormente en la gestión documental.

## ¿Cómo contratar los servicios de ABH Sign?

**ABH Sign no está incluido en la licencia de Flexygo**, por lo que debe contratarse por separado.

Puedes contratar el servicio de cualquiera de las siguientes formas:

* **Por Email:** Envía un correo a [abh@ahora.es](mailto:abh@ahora.es) con el asunto **"Hire ABH Sign"** e incluye en el mensaje tus datos de contacto (nombre, empresa y teléfono).  
  Un agente comercial se pondrá en contacto contigo para continuar con el proceso.

## Activar Abh Sign

<flx-navbutton class="button" type="openpage" pagetypeid="list" objectname="sysAbhSigns_Objects_Config" excludehist="false">
    Add Abh Sign to your project 🦦
</flx-navbutton>

## Configurar Abh Sign

![Abh Sign configuration](/assets/images/AbhSign/AbhSignSettings.png "Abh Sign configuration")

**Object Name:** Objeto al que queremos habilitar Abh Sign.

**Type:** Modo de firma que queremos habilitar.

* **Remote:** Envía un correo electrónico con el documento para ser firmado.
* **In-person:** Envía el documento a un [dispositivo compatible](https://www.validatedid.com/es/dispositivos) para realizar la firma de manera presencial.  
  Es necesario descargar la app que muestra los documentos pendientes, disponible en:  
  [Android](https://help.vidsigner.net/s/article/Manual-de-usuario-de-la-Firma-Bio-para-Android?language=es) |  
  [iOS](https://help.vidsigner.net/s/article/Manual-de-Usuario-de-la-Firma-BIO-para-iOS?language=es) |  
  [Windows](https://help.vidsigner.net/s/article/Manual-de-usuario-de-la-Firma-Bio-para-Windows?language=es)

**Client Id:** Identificador de cliente de Ahora Business Hub.  
*Más información en:* https://help.flexygo.com/

**Client Secret:** Clave secreta de cliente de Ahora Business Hub.  
*Más información en:* https://help.flexygo.com/

**Tenant Id:** Identificador de tenant de Ahora Business Hub.  
*Más información en:* https://help.flexygo.com/

## Configurar Reports

Una vez configurado, se habilita un módulo para seleccionar los informes que queremos enviar a firmar.

![Abh Sign reports configuration](/assets/images/AbhSign/AbhSignReports.png "Abh Sign reports configuration")

**Type:** Permite configurar por informe o por gestión documental.

**Report:** Informe que queremos habilitar (se muestran los asociados al objeto configurado).

**Document Category:** Categoría del documento (Id).  
Si la categoría está vacía, la configuración aplica a todos los documentos del objeto.

**After Process:** Proceso que queremos ejecutar cuando el documento firmado sea recuperado.  
(Puede recibir el parámetro DocGuid o cualquier propiedad del objeto).

Para indicar **dónde se debe firmar en el documento**, existe un asistente disponible en la barra de herramientas.  
Permite cargar un PDF de ejemplo y dibujar la posición de la firma.

![Signing assistant](/assets/images/AbhSign/SelectSign.png "Signing assistant")

## Procesos

En el objeto configurado se habilita un proceso llamado **"Send signed report"** o **"Send signed document"**, desde el cual se selecciona un informe/documento configurado y se envía por email para firma.

Además, se añade un **cron job cada 30 minutos** que:

1. Comprueba si algún documento enviado ha sido firmado.  
2. Si lo está, lo recoge y lo inserta en la gestión documental.  
3. Ejecuta el *After Process* si existe.

![Abh Sign operation](/assets/images/AbhSign/AbhSignOperation.png "Abh Sign operation")