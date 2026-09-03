# Error al conectar a la WebApi desde la App Offline en dispositivos Android 12/13

Tras actualizar/renovar el certificado Sectigo, resulta imposible acceder a la App Offline desde estos dispositivos debido a que el certificado no es reconocido en ellos.

## Pasos a seguir en el servidor IIS donde esté instalado el certificado

La solución pasa por añadir el certificado R46 a los "certificados en los que no se confía" e instalar un "cross-signed certificate":

1. Exportar "Sectigo Public Server Authentication Root R46" desde Entidades de certificación raíz de confianza (Trusted Root Certification Authorities) y guardar el fichero del certificado

    ![](../../docs_assets/images/FAQ/AndroidWebApiCertificate/1.png)

2. Eliminarlo de Entidades de certificación raíz de confianza

3. Importarlo a los "Certificados en los que no se confía"

    ![](../../docs_assets/images/FAQ/AndroidWebApiCertificate/2.png)

Además, es necesario añadir el "cross-signed certificate" a la carpeta de Autoridades de certificación de terceros

![](../../docs_assets/images/FAQ/AndroidWebApiCertificate/3.png)

Una vez hecho esto, comprobar que el acceso a la App Offline desde los dispositivos antiguos funciona correctamente.

## Archivos adjuntos

Descargar el fichero [Sectigo-RSA-Domain-Validation-CA-Bundle.pem](./readme/utils/Sectigo-RSA-Domain-Validation-CA-Bundle.pem) con el "cross-signed certificate" mencionado en el paso 3.
