# ChatGPT integration

![openAI](./img/help/openAI/chatgpt-icon.svg)

**flexygo** aims to adapt to emerging technologies, and that is why we found the integration of ChatGPT through the openAI API as a good starting point.

In this new version you will be able to create, configure and assign a chat within the type properties: multiline, html edit and all code type controls (sql, html, css, c#), in addition to being able to configure your own default prompts.

## Available Models

*   [GPT-4o](https://platform.openai.com/docs/models/gpt-4o)
    
    The most advanced LLM model of OpenAI. This model can handle complex tasks across many topics. It is also the most expensive one. Recommended when the tasks are really enduring.
    
*   [GPT-4o-mini](https://platform.openai.com/docs/models/gpt-4o-mini)
    
    A fast and very cheap version of GPT-4o. It is designed for simple tasks but is not recommeded for providing complex solutions and is prone to errors when the task is difficult.
    
*   [GPT-3.5-turbo](https://platform.openai.com/docs/models/gpt-3-5-turbo)
    
    The original ChatGPT model. It stands amidst GPT-4o and GPT-4o-mini in terms of inteligence,speed and cost. It is recommended for any task complex enough to not be properly handled for GPT-4o-mini.
    

## Set Up

1.  Open ChatGPT settings and create a new chat setting  
      
    
    if you don't know how create an apiKey you can read this article[](https://www.maisieai.com/help/how-to-get-an-openai-api-key-for-chatgpt)
    
    [
    
    ![How create a new ChatGPT setting](./img/Help/openAI/chatgpt_setting.png "Image 1. ChatGPT setting page")
    
    Image 1. ChatGPT setting page
    
    ![How create a new ChatGPT setting](./img/Help/openAI/chatgpt_setting_dark.png "Image 1. ChatGPT setting page")
    
    Image 1. ChatGPT setting page
    
    
    
    ](https://www.maisieai.com/help/how-to-get-an-openai-api-key-for-chatgpt)
[*   **(Optional)** After save your settings, configure your custom prompts that will be rendered in your chat
    
    ![ChatGPT prompts list](./img/Help/openAI/chatgpt_prompts_list.png "Image 2. ChatGPT prompts list")
    
    Image 2. ChatGPT prompts list
    
    ![ChatGPT prompts list](./img/Help/openAI/chatgpt_prompts_list_dark.png "Image 2. ChatGPT prompts list")
    
    Image 2. ChatGPT prompts list
    
    ![ChatGPT chat](./img/Help/openAI/chatgpt_chat.png "Image 3. ChatGPT chat")
    
    Image 3. ChatGPT chat
    
    ![ChatGPT chat](./img/Help/openAI/chatgpt_chat_dark.png "Image 3. ChatGPT chat")
    
    Image 3. ChatGPT chat
    
      
      
    
    As you can see in the following image, you can reference the property to which the chatGPT setting will be assigned with the format `{{Value}}` or any property of the object
    
    ![ChatGPT prompt configuration page](./img/Help/openAI/chatgpt_prompts.png "Image 4. ChatGPT prompt configuration page")
    
    Image 4. ChatGPT prompt configuration page
    
    ![ChatGPT prompt configuration page](./img/Help/openAI/chatgpt_prompts_dark.png "Image 4. ChatGPT prompt configuration page")
    
    Image 4. ChatGPT prompt configuration page
    

## ChatGPT database access

*   **(Optional)** After save your settings, you can also configure the connection with your database.
    
    ![ChatGPT access database option](./img/Help/openAI/chatgpt_dbconnection.png "Image 5. ChatGPT access database option")
    
    Image 5. ChatGPT access database option
    
    ![ChatGPT access database option](./img/Help/openAI/chatgpt_dbconnection_dark.png "Image 5. ChatGPT access database option")
    
    Image 5. ChatGPT access database option
    
    ![Database field selector](./img/Help/openAI/chatgpt_dbconnection_fieldselector.png "Image 6. Database field selector")
    
    Image 6. Database field selector
    
    ![Database field selector](./img/Help/openAI/chatgpt_dbconnection_fieldselector_dark.png "Image 6. Database field selector")
    
    Image 6. Database fields selector
    
      
      
    
    You should search for the tables you need clicking the + icon and selecting your tables in the new window.
    
    ![ChatGPT tables selector](./img/Help/openAI/chatgpt_dbconnection_tableselector.png "Image 7. ChatGPT tables selector")
    
    Image 7. ChatGPT tables selector
    
    ![ChatGPT tables selector](./img/Help/openAI/chatgpt_dbconnection_tableselector_dark.png "Image 7. ChatGPT tables selector")
    
    Image 7. ChatGPT tables selector
    
    Once you have them you can select the fields which you want the chatbot to have access. (Double clik the title to select all the fields)
    
    ![ChatGPT fields selector](./img/Help/openAI/chatgpt_dbconnection_fieldselector3.png "Image 8. ChatGPT fields selector")
    
    Image 8. ChatGPT fields selector
    
    ![ChatGPT fields selector](./img/Help/openAI/chatgpt_dbconnection_fieldselector3_dark.png "Image 8. ChatGPT fields selector")
    
    Image 8. ChatGPT fields selector
    
    Now you will be able to see also the primary keys and the foreign keys and to what other columns they are related by putting your cursor over the field. Now save and the chatbot will be able to make queries!
    
    ![ChatGPT related fields](./img/Help/openAI/chatgpt_dbconnection_relatedfields.png "Image 9. ChatGPT related fields")
    
    Image 9. ChatGPT related fields
    
    ![ChatGPT related fields](./img/Help/openAI/chatgpt_dbconnection_relatedfields_dark.png "Image 9. ChatGPT related fields")
    
    Image 9. ChatGPT related fields
    
    Click in the arrows of the foreign key fields to add automatically the tables to which they are related to!
    

## ChatGPT processes calling

*   **(Optional)** After save your settings, you can also configure the assistant to be able to call flexygo processes.  
      
    
    It is heavily recommended that the processes linked and its parameters have a description of what the process does.
    
    ![ChatGPT Processes Switch](./img/Help/openAI/chatgpt_processes_switch.png "Image 10. ChatGPT Processes Switch")
    
    Image 10. ChatGPT allow processes option
    
    ![ChatGPT Processes Switch](./img/Help/openAI/chatgpt_processes_switch_dark.png "Image 2. ChatGPT Processes Module")
    
    Image 10. ChatGPT allow processes option
    
    You can get ChatGPT provide custom responses to the user if the linked process has a SuccessMessage.
    
      
      
    
    ![ChatGPT Processes Module](./img/Help/openAI/chatgpt_processes_module.png "Image 2. ChatGPT Processes Module")
    
    Image 11. ChatGPT linked processes module
    
    ![ChatGPT Processes Module](./img/Help/openAI/chatgpt_processes_module_dark.png "Image 2. ChatGPT Processes Module")
    
    Image 11. ChatGPT linked processes module
    
    You can link any flexygo process with the assistant. It is recommeded to use GPT-4o if the processes are complex or there are many linked.
    
    ![ChatGPT Processes Form](./img/Help/openAI/chatgpt_processes_form.png "Image 2. ChatGPT Processes Module")
    
    Image 12. Process linking form
    
    ![ChatGPT Processes Form](./img/Help/openAI/chatgpt_processes_form_dark.png "Image 2. ChatGPT prompts list")
    
    Image 12. Process linking form
    

## ChatGPT Logs

*   Once the users start having conversations with the Chat, you will have access to the messages clicking the uperr right button named "Conversations".  
      
    
    ![ChatGPT Conversations](./img/Help/openAI/chatgpt_conversations.png "Image 13. ChatGPT Conversations")
    
    Image 13. ChatGPT Conversations
    
    ![ChatGPT Conversations](./img/Help/openAI/chatgpt_conversations_dark.png "Image 13. ChatGPT Conversations")
    
    Image 13. ChatGPT Conversations
    ](https://www.maisieai.com/help/how-to-get-an-openai-api-key-for-chatgpt)

[

## How to use

After configuring chatgpt correctly, we can assign it from the **property/param** configuration of any **object/process/report**

![How to assign of ChatGPT setting](./img/Help/openAI/chatgpt_attachment.png "Image 14. Assignment of ChatGPT setting")

Image 14. Assignment of ChatGPT setting

![How to assign of ChatGPT setting](./img/Help/openAI/chatgpt_attachment_dark.png "Image 14. Assignment of ChatGPT setting")

Image 14. Assignment of ChatGPT setting

Remember , only available in controls of type:*   C# Code
*   CSS3 Code
*   Html Code
*   Html Editor
*   Javascript Code
*   Multiline
*   SQL Code

## How Works

Finally we have direct access to our chatGPT from the property:

![Property with ChatGPT](./img/Help/openAI/chatgpt_in_property.png "Image 15 Property with ChatGPT")

Image 15. Property with ChatGPT

![Property with ChatGPT](./img/Help/openAI/chatgpt_in_property_dark.png "Image 15. Property with ChatGPT")

Image 15. Property with ChatGPT



](https://www.maisieai.com/help/how-to-get-an-openai-api-key-for-chatgpt)