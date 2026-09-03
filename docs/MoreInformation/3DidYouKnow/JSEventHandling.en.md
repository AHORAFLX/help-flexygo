# Did you know you can handle Flexygo events with JavaScript?

You can use the `flexygo.events.on` and `flexygo.events.off` functions to manage events in Flexygo through JavaScript.

## Practical example

A common use case is refreshing a module only when the customer has an active status:

1. Define a callback function that checks specific conditions:
    * Checks whether the sender is an instance of `flexygo.obj.Entity`
    * Validates that the object's name is "Cliente"
    * Confirms the Activo field has a value of 1
2. Get the module's HTML element using a query selector
3. Subscribe the module to the event using `flexygo.events.on()` with the parameters: the module, the event type ("entity"), the action ("updated") and the callback function

## Available data

When the event runs, the callback's parameter provides data whose sender corresponds to the event's class (for example, `flexygo.Process` for process events).

![](../../docs_assets/images/DidYouKnow/JSEventHandling/1.png)
