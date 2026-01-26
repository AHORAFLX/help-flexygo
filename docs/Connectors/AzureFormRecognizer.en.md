# Azure Form Recognizer { .flx-title-with-image }

![Azure Form Recognizer](/docs_assets/images/FormRecognizer/logo.png){ .fh-image-of-title }

Azure Form Recognizer is a cloud service that uses machine learning to analyze text and structured data from your documents. **flexygo** offers you the possibility to read documents through the Azure Form Recognizer service.

## Configure Azure Portal

Configure Azure <flx-navbutton class="link" type="execprocess" processname="sysEditSettings" objectname="sysSettings" objectwhere="(Settings.[GroupName]='flx-azure')" showprogress="false">Form Recognizer Settings</flx-navbutton>

## Form OCR Tool

[Form OCR Testing Tool](https://github.com/microsoft/OCR-Form-Tools#readme) is an open source tagging tool for Form Recognizer that allows you to create and train your custom models.In it you can specify your labels for each type of document you want to read.

## Demo

After configuring the Azure portal as the **flexygo** settings, you can test its operation by uploading a file: <flx-navbutton class="link" type="execprocess" processname="FormRecognizer_Read" showprogress="false">read document.</flx-navbutton>

Format json [here](http://jsonviewer.stack.hu/).

```json
Response:
```

Read more information about Azure Form Recognition: [Link](https://azure.microsoft.com/es-es/services/form-recognizer/#overview)
{: .flx-warning-card }