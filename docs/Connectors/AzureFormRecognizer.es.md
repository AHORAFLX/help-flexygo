# Azure Form Recognizer { .flx-title-with-image }

![Azure Form Recognizer](../docs_assets/images/FormRecognizer/logo.png){ .fh-image-of-title }

Azure Form Recognizer es un servicio en la nube que utiliza machine learning para analizar texto y datos estructurados de tus documentos. **flexygo** te ofrece la posibilidad de leer documentos mediante el servicio Azure Form Recognizer.

## Configurar Azure Portal

Configura Azure desde <flx-navbutton class="link" type="execprocess" processname="sysEditSettings" objectname="sysSettings" objectwhere="(Settings.[GroupName]='flx-azure')" showprogress="false">Form Recognizer Settings</flx-navbutton>

## Form OCR Tool

[Form OCR Testing Tool](https://github.com/microsoft/OCR-Form-Tools#readme) es una herramienta de etiquetado *open source* para Form Recognizer que te permite crear y entrenar tus propios modelos personalizados.  
En ella puedes especificar tus etiquetas para cada tipo de documento que desees leer.

## Demo

Después de configurar el portal de Azure y los ajustes en **flexygo**, puedes probar su funcionamiento subiendo un archivo: <flx-navbutton class="link" type="execprocess" processname="FormRecognizer_Read" showprogress="false">leer documento</flx-navbutton>

Format json [aquí](http://jsonviewer.stack.hu/).

```json
Response:
```

Para más información sobre Azure Form Recognizer:
[Link](https://azure.microsoft.com/es-es/services/form-recognizer/#overview)
{: .flx-warning-card }