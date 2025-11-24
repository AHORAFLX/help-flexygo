# Events

Events allows us to launch code when a system action ocurres, for example, when an entity updates, an AJAX call is made or a module is loaded.

## Event structure

The **flexygo** event class has these properties:

*   **class:** "all" | "entity" | "property" | "process" | "module" | "page" | "post" | "dialog"
*   **type:** "all" | "inserted" | "updated" | "deleted" | "changed" | "selected" | "executed" | "loaded" | "closed"
*   **sender:** The object throwing the event
*   **masterIdentity:** Principal identifier of the sender
*   **detailIdentity:** Detailed identifier of the sender

## Subscribe to an event

To subscribe for a entity update event:

```js
flexygo.events.on(this,"entity","updated",function(e) {
	let entity = e.sender;
    if (entity.objectName == 'sysObject') {
		alert('Congratulations!. You succesfully updated a system object.');
	}
});
```