# ChatGPT integration { .flx-title-with-image }

![openAI](/docs_assets/images/openAI/chatgpt-icon.svg){ .fh-image-of-title }

**flexygo** aims to adapt to emerging technologies, and that is why we found the integration of ChatGPT through the openAI API as a good starting point.

In this new version you will be able to create, configure and assign a chat within the type properties: multiline, html edit and all code type controls (sql, html, css, c#), in addition to being able to configure your own default prompts, query databases, execute procesess and much more!.

## Available Models

* [GPT-5](https://platform.openai.com/docs/models/gpt-5)

  The most advanced LLM model of OpenAI. This model can handle complex tasks across many topics. It is also the most expensive one. Recommended when the tasks are really enduring.

* [GPT-5-mini](https://platform.openai.com/docs/models/gpt-5-mini)

  A faster and cheaper version of GPT-5. Although is designed for simpler tasks should be able to provide solutions for the majority of the tasks.

* [GPT-5-nano](https://platform.openai.com/docs/models/gpt-5-nano)

  The fastest and cheapest version of GPT-5. It Is not recommeded for providing very complex solutions and can produce errors when the task is difficult.

* [GPT-4o-mini](https://platform.openai.com/docs/models/gpt-4o-mini)

  The previous version of GPT. Unlike the gpt-5 models you cannot specify the reasoning and verbosity. Also, it is not recommeded for complex tasks.
    

## Set Up

1.  <flx-navbutton class="link" type="openpage" pagetypeid="list" objectname="sysChatGPT_Settings" objectwhere="" defaults="" targetid="popup800x600" excludehist="false">Open ChatGPT settings</flx-navbutton> and create a new chat setting  

    if you don't know how create an apiKey you can read [this](https://www.splendidfi.com/blog/how-to-get-an-openai-api-key-for-chatgpt) article
    {: .flx-warning-card }

    ![How create a new ChatGPT setting](/docs_assets/images/openAI/chatgpt_setting.png#only-light "Image 1. ChatGPT setting page"){data-gallery="light"}
    ![How create a new ChatGPT setting](/docs_assets/images/openAI/chatgpt_setting_dark.png#only-dark "Image 1. ChatGPT setting page"){data-gallery="dark"}

2. **(Optional)** After saving your settings, configure your custom prompts which will be rendered in your chat

    ![ChatGPT prompts list](/docs_assets/images/openAI/chatgpt_prompts_list.png#only-light "Image 2. ChatGPT prompts list"){data-gallery="light"}
    ![ChatGPT prompts list](/docs_assets/images/openAI/chatgpt_prompts_list_dark.png#only-dark "Image 2. ChatGPT prompts list"){data-gallery="dark"}

    ![ChatGPT chat](/docs_assets/images/openAI/chatgpt_chat.png#only-light "Image 3. ChatGPT chat"){data-gallery="light"}
    ![ChatGPT chat](/docs_assets/images/openAI/chatgpt_chat_dark.png#only-dark "Image 3. ChatGPT chat"){data-gallery="dark"}

    As you can see in the following image you can reference an object property with the format `{{Property_Name}}`.
    {: .flx-warning-card }

    ![ChatGPT prompt configuration page](/docs_assets/images/openAI/chatgpt_prompts.png#only-light "Image 4. ChatGPT prompt configuration page"){data-gallery="light"}
    ![ChatGPT prompt configuration page](/docs_assets/images/openAI/chatgpt_prompts_dark.png#only-dark "Image 4. ChatGPT prompt configuration page"){data-gallery="dark"}

    ## ChatGPT database access

3. **(Optional)** After saving your settings, you can also configure the connection with your database.
    
    ![ChatGPT access database option](/docs_assets/images/openAI/chatgpt_dbconnection.png#only-light "Image 5. ChatGPT access database option"){data-gallery="light"}
    ![ChatGPT access database option](/docs_assets/images/openAI/chatgpt_dbconnection_dark.png#only-dark "Image 5. ChatGPT access database option"){data-gallery="dark"}

    ![Database field selector](/docs_assets/images/openAI/chatgpt_dbconnection_fieldselector.png#only-light "Image 6. Database field selector"){data-gallery="light"}
    ![Database field selector](/docs_assets/images/openAI/chatgpt_dbconnection_fieldselector_dark.png#only-dark "Image 6. Database field selector"){data-gallery="dark"}

    You should search for the tables you need clicking the + icon and selecting your tables in the new window.

    ![ChatGPT tables selector](/docs_assets/images/openAI/chatgpt_dbconnection_tableselector.png#only-light "Image 7. ChatGPT tables selector"){data-gallery="light"}
    ![ChatGPT tables selector](/docs_assets/images/openAI/chatgpt_dbconnection_tableselector_dark.png#only-dark "Image 7. ChatGPT tables selector"){data-gallery="dark"}

    Once you have them you can select the fields which you want the chatbot to have access. (Double clik the title to select all the fields)

    ![ChatGPT fields selector](/docs_assets/images/openAI/chatgpt_dbconnection_fieldselector3.png#only-light "Image 8. ChatGPT fields selector"){data-gallery="light"}
    ![ChatGPT fields selector](/docs_assets/images/openAI/chatgpt_dbconnection_fieldselector3_dark.png#only-dark "Image 8. ChatGPT fields selector"){data-gallery="dark"}

    Now you will be able to see also the primary keys and the foreign keys and to what other columns they are related by putting your cursor over the field. Now save and the chatbot will be able to make queries!

    ![ChatGPT related fields](/docs_assets/images/openAI/chatgpt_dbconnection_relatedfields.png#only-light "Image 9. ChatGPT related fields"){data-gallery="light"}
    ![ChatGPT related fields](/docs_assets/images/openAI/chatgpt_dbconnection_relatedfields_dark.png#only-dark "Image 9. ChatGPT related fields"){data-gallery="dark"}

    Click in the arrows of the foreign key fields to add automatically the tables to which they are related to!
        
    ## ChatGPT processes calling

4.  **(Optional)** After saving your settings, you can also configure the assistant to be able to call flexygo processes.  

    It is heavily recommended that the processes linked and its parameters have a description of what the process does.
    {: .flx-warning-card }

    ![ChatGPT Processes Switch](/docs_assets/images/openAI/chatgpt_processes_switch.png#only-light "Image 10. ChatGPT Processes Switch"){data-gallery="light"}
    ![ChatGPT Processes Switch](/docs_assets/images/openAI/chatgpt_processes_switch_dark.png#only-dark "Image 10. ChatGPT Processes Switch"){data-gallery="dark"}

    You can get ChatGPT provide custom responses to the user if the linked process has a SuccessMessage.
    {: .flx-warning-card }

    ![ChatGPT Processes Module](/docs_assets/images/openAI/chatgpt_processes_module.png#only-light "Image 2. ChatGPT Processes Module"){data-gallery="light"}
    ![ChatGPT Processes Module](/docs_assets/images/openAI/chatgpt_processes_module_dark.png#only-dark "Image 2. ChatGPT Processes Module"){data-gallery="dark"}

    You can link any flexygo process with the assistant. It is recommeded to use GPT-5 if the processes are complex or there are many linked.

    ![ChatGPT Processes Form](/docs_assets/images/openAI/chatgpt_processes_form.png#only-light "Image 2. ChatGPT Processes Module"){data-gallery="light"}
    ![ChatGPT Processes Form](/docs_assets/images/openAI/chatgpt_processes_form_dark.png#only-dark "Image 2. ChatGPT Processes Module"){data-gallery="dark"}

    ## ChatGPT Logs

5.   Once the users start having conversations with the Chat, you will have access to the messages clicking the uperr right button named "Conversations".  
      
    ![ChatGPT Conversations](/docs_assets/images/openAI/chatgpt_conversations.png#only-light "Image 13. ChatGPT Conversations"){data-gallery="light"}
    ![ChatGPT Conversations](/docs_assets/images/openAI/chatgpt_conversations_dark.png#only-dark "Image 13. ChatGPT Conversations"){data-gallery="dark"}

    ## How to use

    After configuring chatgpt correctly, we can assign it from the **property/param** configuration of any **object/process/report**

    ![How to assign of ChatGPT setting](/docs_assets/images/openAI/chatgpt_attachment.png#only-light "Image 14. Assignment of ChatGPT setting"){data-gallery="light"}
    ![How to assign of ChatGPT setting](/docs_assets/images/openAI/chatgpt_attachment_dark.png#only-dark "Image 14. Assignment of ChatGPT setting"){data-gallery="dark"}
    <ul class="flx-warning-card">
        <p>Remember, only available in controls of type:</p>
        <li>C# Code</li>
        <li>CSS3 Code</li>
        <li>Html Code</li>
        <li>Html Editor</li>
        <li>Javascript Code</li>
        <li>Multiline</li>
        <li>SQL Code</li>
    </ul>

    ## How it works

    Finally we have direct access to our chatGPT from the property:

    ![Property with ChatGPT](/docs_assets/images/openAI/chatgpt_in_property.png#only-light "Image 15 Property with ChatGPT"){data-gallery="light"}
    ![Property with ChatGPT](/docs_assets/images/openAI/chatgpt_in_property_dark.png#only-dark "Image 15 Property with ChatGPT"){data-gallery="dark"}

## With FlexyGo's WebAPI

If you created your own assistants and workflows and want to use them outside of the FlexyGo's platform, don't worry, it is possible **using the WebAPI**.

You must enable it and give permissions to the process **WebAPI\_AIRequest**. Once you have a valid token you can start making requests to this endpoint!

### Request Structure

This is the structure of the JSON body that must be posted in the request:

```json
{
  "assistantId": "string",

  "newMessage": [
    {
      "type": "text" | "image_url" | "file",

      // If type = "text"
      "text": "string",

      // If type = "image_url"
      "image_url": {
        "url": "string"
      },

      // If type = "file"
      "file": {
        "filename": "string",
        "file_data": "string",
      }
    }
  ],

  "conversationId": "string (optional)",
  "conversationType": "string (optional)", // "Chat" by default

  "defaults": [ // Optional
    {
      "key": "string",
      "value": "string"
    }
  ]
}
```

### Example request

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

### Example response

```json
{
    "Success": true,
    "SuccessMessage": "Process executed with success",
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