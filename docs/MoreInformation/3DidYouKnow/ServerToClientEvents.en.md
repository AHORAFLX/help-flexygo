# Did you know you can send events from the server to the browsers?

Flexygo lets the server send notices to the connected browsers without the user doing anything: a new message, an error in the background, some data that has changed…

## Server side (C#)

From a process, create an `EventHelper` (namespace `FLEXYGO.Interfaces.SignalR.Events`) with its class and type, fill in `masterIdentity` to identify the notice and `sender` with the data, and send it with the `FLEXYGO.SignalR.Events` class:

```csharp
using FLEXYGO.Interfaces.SignalR.Events;
using FLEXYGO.SignalR;

EventHelper eventInfo = new EventHelper(eEventClass.Push, eEventType.Notify)
{
    masterIdentity = "orderServed",
    sender = new Dictionary<string, object>
    {
        { "order", orderId },
        { "message", "The order has been served" }
    }
};
Events.FireGenericUserEvent(eventInfo, username);
```

Depending on who the notice is for:

* `FireGenericUserEvent(eventInfo, userName)`: one user, by name.
* `FireGenericUsersEvent(eventInfo, userNames)`: several users.
* `FireGenericUserIDEvent(eventInfo, userId)`: one user, by Id.
* `FireGenericAllUserEvent(eventInfo)`: every connected user.

The methods are asynchronous (`Task`): you can `await` them or fire them without waiting. The process runs in the backend, which hands the notice to the frontend (`api/frontend/Events/...`), and the frontend delivers it to the browsers through SignalR. That is why it works the same with the frontend and the backend on different servers.

## Client side (JavaScript)

Listen to the event class and type with `flexygo.events.on` and check `masterIdentity` to keep only your notices:

```javascript
flexygo.events.on(this, 'push', 'notify', function (e) {
    if (e.masterIdentity === 'orderServed' && e.sender) {
        flexygo.msg.info(e.sender.message);
    }
});
```

If the component can be drawn again, remove the handler first with `flexygo.events.off(this, 'push', 'notify')` so it is not registered twice.

## Use cases

Real-time notices, refreshing a screen when new data arrives, or reporting errors of background processes. The WhatsApp connector, for example, uses it to refresh the conversation when a message comes in and to warn when one could not be sent.
