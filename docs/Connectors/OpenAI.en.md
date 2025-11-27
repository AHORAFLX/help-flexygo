# ChatGPT integration { .flx-title-with-image }

![openAI](/assets/images/openAI/chatgpt-icon.svg){ .flx-image-of-title }

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

1.  <flx-navbutton class="link" type="openpage" pagetypeid="list" objectname="sysChatGPT_Settings" objectwhere="" defaults="" targetid="popup800x600" excludehist="false">Open ChatGPT settings</flx-navbutton> and create a new chat setting  

    if you don't know how create an apiKey you can read [this](https://www.splendidfi.com/blog/how-to-get-an-openai-api-key-for-chatgpt) article
    {: .flx-warning-card }

    ![How create a new ChatGPT setting](/assets/images/openAI/chatgpt_setting.png "Image 1. ChatGPT setting page")

2. **(Optional)** After save your settings, configure your custom prompts that will be rendered in your chat

    ![ChatGPT prompts list](/assets/images/openAI/chatgpt_prompts_list.png "Image 2. ChatGPT prompts list")

    ![ChatGPT chat](/assets/images/openAI/chatgpt_chat.png "Image 3. ChatGPT chat")

    As you can see in the following image, you can reference the property to which the chatGPT setting will be assigned with the format `{{Value}}` or any property of the object
    {: .flx-warning-card }

    ![ChatGPT prompt configuration page](/assets/images/openAI/chatgpt_prompts.png "Image 4. ChatGPT prompt configuration page")

    ## ChatGPT database access

3. **(Optional)** After save your settings, you can also configure the connection with your database.
    
    ![ChatGPT access database option](/assets/images/openAI/chatgpt_dbconnection.png "Image 5. ChatGPT access database option")

    ![Database field selector](/assets/images/openAI/chatgpt_dbconnection_fieldselector.png "Image 6. Database field selector")

    You should search for the tables you need clicking the + icon and selecting your tables in the new window.
    {: .flx-warning-card }

    ![ChatGPT tables selector](/assets/images/openAI/chatgpt_dbconnection_tableselector.png "Image 7. ChatGPT tables selector")

    Once you have them you can select the fields which you want the chatbot to have access. (Double clik the title to select all the fields)
    {: .flx-warning-card }

    ![ChatGPT fields selector](/assets/images/openAI/chatgpt_dbconnection_fieldselector3.png "Image 8. ChatGPT fields selector")

    Now you will be able to see also the primary keys and the foreign keys and to what other columns they are related by putting your cursor over the field. Now save and the chatbot will be able to make queries!
    {: .flx-warning-card }

    ![ChatGPT related fields](/assets/images/openAI/chatgpt_dbconnection_relatedfields.png "Image 9. ChatGPT related fields")

    Click in the arrows of the foreign key fields to add automatically the tables to which they are related to!
    {: .flx-warning-card }
        
    ## ChatGPT processes calling

4.  **(Optional)** After save your settings, you can also configure the assistant to be able to call flexygo processes.  

    It is heavily recommended that the processes linked and its parameters have a description of what the process does.
    {: .flx-warning-card }

    ![ChatGPT Processes Switch](/assets/images/openAI/chatgpt_processes_switch.png "Image 10. ChatGPT Processes Switch")

    You can get ChatGPT provide custom responses to the user if the linked process has a SuccessMessage.
    {: .flx-warning-card }

    ![ChatGPT Processes Module](/assets/images/openAI/chatgpt_processes_module.png "Image 2. ChatGPT Processes Module")

    You can link any flexygo process with the assistant. It is recommeded to use GPT-4o if the processes are complex or there are many linked.

    ![ChatGPT Processes Form](/assets/images/openAI/chatgpt_processes_form.png "Image 2. ChatGPT Processes Module")    

    ## ChatGPT Logs

5.   Once the users start having conversations with the Chat, you will have access to the messages clicking the uperr right button named "Conversations".  
      
    ![ChatGPT Conversations](/assets/images/openAI/chatgpt_conversations.png "Image 13. ChatGPT Conversations")

    ## How to use

    After configuring chatgpt correctly, we can assign it from the **property/param** configuration of any **object/process/report**

    ![How to assign of ChatGPT setting](/assets/images/openAI/chatgpt_attachment.png "Image 14. Assignment of ChatGPT setting")
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

    ## How Works

    Finally we have direct access to our chatGPT from the property:

    ![Property with ChatGPT](/assets/images/openAI/chatgpt_in_property.png "Image 15 Property with ChatGPT")