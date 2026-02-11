# Wacom SDK Integration { .fh-title-with-image }
![Wacom](../docs_assets/images/Wacom/Wacom_Logo_WhiteType.svg){ .fh-image-of-title }

**flexygo** has successfully incorporated the capability to sign with STU tablets in a seamless and user-friendly manner.

This guide provides detailed, step-by-step instructions on how to install and set up the required SDK and services to enable signature capture using Wacom Signature Controls. 

Furthermore, it explores the various customizable values that can be configured to adapt the signature capture experience according to your specific needs.

## Set Up

1.  Install the **Wacom SDK** and drivers that allows the STU detection:
    *   Download the necessary files from [Wacom Directory](https://docs.flexygo.com/setup/wacom.zip "Wacom Directory").
    *   Execute the **Wacom-SigCaptX-1.25.4.exe** as **Admin**.
    *   Execute the **ConfigureServicePort.bat** as **Admin** that change the port used by the service to avoid conflicts.

## How to use

1.  Define a property with **Wacom Signature** type:
    
    ![Adding a property of Wacom Signature Type](../docs_assets/images/Wacom/first_ss.png "Image 1. Using a Wacom Signature property")
    
2.  Set Options: You can customize some features of the **Wacom Signature control** in the **Options** field located at the end of the property configuration form  
    
```json
{     
    "biometric":"PropertyName",     
    "titleText":"Title",    
    "titleProperty":"PropertyName",     
    "nameText":"Steve Smith",
    "nameProperty":"PropertyName",
    "style": {
        "inkColor": "(50,168,82)",
        "backgroundColor": "(60,50,168)"
    }
}
```
    
*   **biometric**: If you want to store the biometric data of signature you can set in this property a PropertyName of your form
*   **titleText**: You can specify a text to be shown here...
*   **titleProperty**: You can specify a PropertyName into this property to his value here...

![Title demostration](../docs_assets/images/Wacom/title_demostration.png "Image 2. Title demostration")

*   **nameText**: You can specify a text to be shown here...
*   **nameProperty**: You can specify a PropertyName into this property to his value here...

![Name demostration](../docs_assets/images/Wacom/name_demostration.png "Image 3. Name demostration")

*   **style**: Within this property, you can define 2 properties **(They only affect upon saving, not in the preview)**
    
    *   **inkColor**: You can define the ink color of the signature
    *   **backgroundColor**: You can define the background of the image genarated with the signature
        
![Style demostration](../docs_assets/images/Wacom/style_demostration.png "Image 4. Style demostration")