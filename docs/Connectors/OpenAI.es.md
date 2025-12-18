# Integración con ChatGPT { .flx-title-with-image }

![openAI](/docs_assets/images/openAI/chatgpt-icon.svg){ .flx-image-of-title }

**flexygo** busca adaptarse a las tecnologías emergentes y por ello incorpora la integración de ChatGPT a través de la API de OpenAI.

En esta nueva versión podrás crear, configurar y asignar un chat dentro de los tipos de propiedades: multilinea, editor HTML y todos los controles de código (SQL, HTML, CSS, C#), además de poder configurar tus propias indicaciones predeterminadas, consultar bases de datos, ejecutar procesos y mucho más!

## Modelos disponibles

* [GPT-5](https://platform.openai.com/docs/models/gpt-5)

  El modelo LLM más avanzado de OpenAI. Este modelo puede manejar tareas complejas en muchos temas. También es el más caro. Recomendado cuando las tareas son realmente duraderas.

* [GPT-5-mini](https://platform.openai.com/docs/models/gpt-5-mini)

  Una versión más rápida y económica de GPT-5. Aunque está diseñado para tareas más sencillas, debería ser capaz de proporcionar soluciones para la mayoría de las tareas.

* [GPT-5-nano](https://platform.openai.com/docs/models/gpt-5-nano)

  La versión más rápida y barata de GPT-5. No se recomienda para proporcionar soluciones muy complejas y puede producir errores cuando la tarea es difícil.

* [GPT-4o-mini](https://platform.openai.com/docs/models/gpt-4o-mini)

  La versión anterior de GPT. A diferencia de los modelos gpt-5, no se puede especificar el razonamiento y la verbosidad. Además, no se recomienda para tareas complejas.

## Configuración

1. Abre la ventana de configuración:  
   <flx-navbutton class="link" type="openpage" pagetypeid="list" objectname="sysChatGPT_Settings" objectwhere="" defaults="" targetid="popup800x600" excludehist="false">Open ChatGPT settings</flx-navbutton>  
   Si no sabes cómo generar un API Key puedes leer [este artículo](https://www.splendidfi.com/blog/how-to-get-an-openai-api-key-for-chatgpt).
   {: .flx-warning-card }

   ![ChatGPT setting page](/docs_assets/images/openAI/chatgpt_setting.png#only-light "Image 1. ChatGPT setting page"){data-gallery="light"}
   ![ChatGPT setting page](/docs_assets/images/openAI/chatgpt_setting_dark.png#only-dark "Image 1. ChatGPT setting page"){data-gallery="dark"}

2. **(Opcional)** Configura tus *prompts* personalizados que aparecerán en el chat.

   ![ChatGPT prompts list](/docs_assets/images/openAI/chatgpt_prompts_list.png#only-light "Image 2. ChatGPT prompts list"){data-gallery="light"}
   ![ChatGPT prompts list](/docs_assets/images/openAI/chatgpt_prompts_list_dark.png#only-dark "Image 2. ChatGPT prompts list"){data-gallery="dark"}

   ![ChatGPT chat](/docs_assets/images/openAI/chatgpt_chat.png#only-light "Image 3. ChatGPT chat"){data-gallery="light"}
   ![ChatGPT chat](/docs_assets/images/openAI/chatgpt_chat_dark.png#only-dark "Image 3. ChatGPT chat"){data-gallery="dark"}

   Puedes referenciar la propiedad a la que se asigne el ChatGPT usando `{{Value}}` o cualquier propiedad del objeto.
   {: .flx-warning-card }

   ![ChatGPT prompt configuration](/docs_assets/images/openAI/chatgpt_prompts.png#only-light "Image 4. ChatGPT prompt configuration page"){data-gallery="light"}
   ![ChatGPT prompt configuration](/docs_assets/images/openAI/chatgpt_prompts_dark.png#only-dark "Image 4. ChatGPT prompt configuration page"){data-gallery="dark"}

## Acceso a la base de datos desde ChatGPT

3. **(Opcional)** Tras guardar la configuración, puedes habilitar el acceso del chatbot a tu base de datos.

   ![DB option](/docs_assets/images/openAI/chatgpt_dbconnection.png#only-light "Image 5. ChatGPT access database option"){data-gallery="light"}
   ![DB option](/docs_assets/images/openAI/chatgpt_dbconnection_dark.png#only-dark "Image 5. ChatGPT access database option"){data-gallery="dark"}

   ![Field selector](/docs_assets/images/openAI/chatgpt_dbconnection_fieldselector.png#only-light "Image 6. Database field selector"){data-gallery="light"}
   ![Field selector](/docs_assets/images/openAI/chatgpt_dbconnection_fieldselector_dark.png#only-dark "Image 6. Database field selector"){data-gallery="dark"}

   Busca las tablas necesarias pulsando el icono **+** y selecciónalas.

   ![Table selector](/docs_assets/images/openAI/chatgpt_dbconnection_tableselector.png#only-light "Image 7. ChatGPT tables selector"){data-gallery="light"}
   ![Table selector](/docs_assets/images/openAI/chatgpt_dbconnection_tableselector_dark.png#only-dark "Image 7. ChatGPT tables selector"){data-gallery="dark"}

   Selecciona los campos a los que el chatbot podrá acceder (doble clic en el título para marcar todos).

   ![Field selector 2](/docs_assets/images/openAI/chatgpt_dbconnection_fieldselector3.png#only-light "Image 8. ChatGPT fields selector"){data-gallery="light"}
   ![Field selector 2](/docs_assets/images/openAI/chatgpt_dbconnection_fieldselector3_dark.png#only-dark "Image 8. ChatGPT fields selector"){data-gallery="dark"}

   Podrás ver claves primarias, foráneas y relaciones pasando el cursor sobre cada campo.  

   ![Related fields](/docs_assets/images/openAI/chatgpt_dbconnection_relatedfields.png#only-light "Image 9. ChatGPT related fields"){data-gallery="light"}
   ![Related fields](/docs_assets/images/openAI/chatgpt_dbconnection_relatedfields_dark.png#only-dark "Image 9. ChatGPT related fields"){data-gallery="dark"}

   Puedes añadir automáticamente tablas relacionadas con las claves foráneas usando las flechas.

## Llamada a procesos desde ChatGPT

4. **(Opcional)** Puedes permitir que el asistente ejecute procesos de flexygo.  
   Es recomendable que los procesos y sus parámetros tengan una descripción clara.
   {: .flx-warning-card }

   ![Process switch](/docs_assets/images/openAI/chatgpt_processes_switch.png#only-light "Image 10. ChatGPT Processes Switch"){data-gallery="light"}
   ![Process switch](/docs_assets/images/openAI/chatgpt_processes_switch_dark.png#only-dark "Image 10. ChatGPT Processes Switch"){data-gallery="dark"}

   Si el proceso tiene *SuccessMessage*, ChatGPT podrá usarlo para responder al usuario.
   {: .flx-warning-card }

   ![Processes module](/docs_assets/images/openAI/chatgpt_processes_module.png#only-light "Image 11. ChatGPT Processes Module"){data-gallery="light"}
   ![Processes module](/docs_assets/images/openAI/chatgpt_processes_module_dark.png#only-dark "Image 11. ChatGPT Processes Module"){data-gallery="dark"}

   ![Processes form](/docs_assets/images/openAI/chatgpt_processes_form.png#only-light "Image 12. ChatGPT Processes Form"){data-gallery="light"}
   ![Processes form](/docs_assets/images/openAI/chatgpt_processes_form_dark.png#only-dark "Image 12. ChatGPT Processes Form"){data-gallery="dark"}

## ChatGPT Logs

5. Cuando los usuarios comiencen a conversar con el chatbot, podrás revisar los mensajes desde el botón **Conversations**.

   ![Conversations](/docs_assets/images/openAI/chatgpt_conversations.png#only-light "Image 13. ChatGPT Conversations"){data-gallery="light"}
   ![Conversations](/docs_assets/images/openAI/chatgpt_conversations_dark.png#only-dark "Image 13. ChatGPT Conversations"){data-gallery="dark"}

## Cómo usarlo

Tras configurar ChatGPT, puedes asignarlo desde la configuración de **propiedad/parámetro** de cualquier **objeto, proceso o informe**.

![Assignment](/docs_assets/images/openAI/chatgpt_attachment.png#only-light "Image 14. Assignment of ChatGPT setting"){data-gallery="light"}
![Assignment](/docs_assets/images/openAI/chatgpt_attachment_dark.png#only-dark "Image 14. Assignment of ChatGPT setting"){data-gallery="dark"}

<ul class="flx-warning-card">
    <p>Disponible únicamente en controles de tipo:</p>
    <li>C# Code</li>
    <li>CSS3 Code</li>
    <li>Html Code</li>
    <li>Html Editor</li>
    <li>Javascript Code</li>
    <li>Multiline</li>
    <li>SQL Code</li>
</ul>

## Cómo funciona

Finalmente, tendrás acceso directo al chat desde la propiedad:

![ChatGPT in property](/docs_assets/images/openAI/chatgpt_in_property.png#only-light "Image 15 Property with ChatGPT"){data-gallery="light"}
![ChatGPT in property](/docs_assets/images/openAI/chatgpt_in_property_dark.png#only-dark "Image 15 Property with ChatGPT"){data-gallery="dark"}

## Con la WebAPI de FlexyGo

Si has creado tus propios asistentes y flujos de trabajo y quieres utilizarlos fuera de la plataforma de FlexyGo, no te preocupes, es posible **usando la WebAPI**.

Debes habilitarla y conceder permisos al proceso **WebAPI_AIRequest**. Una vez tengas un token válido, ¡puedes empezar a realizar solicitudes a este endpoint!

### Estructura de la solicitud

Esta es la estructura del cuerpo JSON que debe enviarse en la solicitud:

```json
{
  "assistantId": "string",

  "newMessage": [
    {
      "type": "text" | "image_url" | "file",

      // Si type = "text"
      "text": "string",

      // Si type = "image_url"
      "image_url": {
        "url": "string"
      },

      // Si type = "file"
      "file": {
        "filename": "string",
        "file_data": "string"
      }
    }
  ],

  "conversationId": "string (opcional)",
  "conversationType": "string (opcional)", // "Chat" por defecto

  "defaults": [ // Opcional
    {
      "key": "string",
      "value": "string"
    }
  ]
}
```

### Ejemplo de solicitud

```json
{
    "assistantId": "Helper",
    "newMessage": [
        {
            "type": "image_url",
            "image_url": {
                "url": "data:image/png;base64,..."
            }
        },
        {
            "type": "text",
            "text": "Describeme la imagen"
        }
    ],
    "defaults": [
        {
            "key": "name",
            "value": "Ismael"
        }
    ]
}
```

### Ejemplo de respuesta

```json
{
    "Success": true,
    "SuccessMessage": "Proceso ejecutado correctamente",
    "WarningMessage": "",
    "LastException": null,
    "LastAfterProcessName": null,
    "LastProcessName": null,
    "MoreProcesses": false,
    "JSCode": "",
    "JSFile": "",
    "Data": {
        "ConversationId": "c6a3f9ab-371a-4c03-a348-c4330e0557b1",
        "Result": {
            "choices": [
                {
                    "message": {
                        "content": "La imagen muestra un panda con gafas, que está vestido con una camisa de color claro. El panda tiene una expresión amigable y parece estar en un ambiente tranquilo. Si necesitas más información, házmelo saber.",
                        "role": "assistant"
                    }
                }
            ]
        }
    },
    "CloseParamWindow": false,
    "ClearSelectionBag": false,
    "Refresh": true,
    "LastExecutedProcess": null
}
```
