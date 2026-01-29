# Integración con Wacom SDK { .flx-title-with-image }
![Wacom](../docs_assets/images/Wacom/Wacom_Logo_WhiteType.svg){ .fh-image-of-title }

**Flexygo** ha incorporado con éxito la capacidad de firmar con tabletas STU de forma fluida y sencilla. 

Esta guía ofrece instrucciones detalladas paso a paso sobre cómo instalar y configurar el SDK y los servicios necesarios para habilitar la captura de firmas usando los **Wacom Signature Controls**.  

Además, se explican los distintos valores personalizables que pueden configurarse para adaptar la experiencia de firma según tus necesidades.

## Configuración inicial (Set Up)

1. Instalar el **Wacom SDK** y los drivers que permiten la detección de dispositivos STU:
      * Descarga los archivos necesarios desde el **[Wacom Directory](https://docs.flexygo.com/setup/wacom.zip "Wacom Directory")**.
      * Ejecuta **Wacom-SigCaptX-1.25.4.exe** como **Administrador**.
      * Ejecuta **ConfigureServicePort.bat** como **Administrador**, para cambiar el puerto usado por el servicio y evitar conflictos.

##    Cómo usarlo (How to use)

1. Define una propiedad de tipo **Wacom Signature**:

      ![Adding a property of Wacom Signature Type](../docs_assets/images/Wacom/first_ss.png "Image 1. Using a Wacom Signature property")

2. Configurar Opciones: Puedes personalizar algunas características del **Wacom Signature control** usando el campo **Options**, ubicado al final del formulario de configuración de la propiedad:

```json
{
    "biometric": "PropertyName",
    "titleText": "Title",
    "titleProperty": "PropertyName",
    "nameText": "Steve Smith",
    "nameProperty": "PropertyName",
    "style": {
        "inkColor": "(50,168,82)",
        "backgroundColor": "(60,50,168)"
    }
}
```

* **biometric**: Si deseas almacenar los datos biométricos de la firma, indica aquí el nombre de la propiedad donde se guardarán.
* **titleText**: Texto fijo que se mostrará como título.
* **titleProperty**: Nombre de una propiedad cuyo valor se mostrará dinámicamente como título.

![Title demostration](../docs_assets/images/Wacom/title_demostration.png "Image 2. Title demostration")

* **nameText**: Texto fijo que se mostrará como nombre del firmante.
* **nameProperty**: Nombre de una propiedad cuyo valor se mostrará dinámicamente como nombre.

![Name demostration](../docs_assets/images/Wacom/name_demostration.png "Image 3. Name demostration")

* **style**: Dentro de esta sección puedes definir dos propiedades **(solo afectan al guardar, no en la vista previa)**:

   * **inkColor**: Color de la tinta de la firma.
   * **backgroundColor**: Color de fondo de la imagen generada con la firma.

![Style demostration](../docs_assets/images/Wacom/style_demostration.png "Image 4. Style demostration")