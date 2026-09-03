# Did you know you can call JavaScript functions from Flexygo's own templates?

Flexygo lets you invoke JavaScript functions directly from templates using a specific syntax. To use this feature, write your marker following this pattern: `{{myJSFunction(param1, param2, ...)}}` and Flexygo will call the function.

The system will automatically process the call and display the result in the template. A useful feature is that if the parameter names match existing fields in the template, the system will automatically convert those parameters to their corresponding values.

![](../../docs_assets/images/DidYouKnow/JSFunctionsInTemplates/1.png)
