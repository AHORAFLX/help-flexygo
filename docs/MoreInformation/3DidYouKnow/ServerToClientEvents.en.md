# Did you know you can push events from the server to browsers?

You can implement a server-to-client event system in Flexygo, letting the server fire notifications to browsers without any user action.

## Server side (C#)

The process uses an `EventHelper` class that generates events with the Push class and the Updated type. The available methods are:

* `FireGenericUserEvent()`: sends to a specific user
* `FireGenericUserIDEvent()`: sends by user ID
* `FireGenericAllUserEvent()`: sends to every user

The event includes a `sender` object with the data to transmit and a `masterIdentity` identifier.

## Client side (JavaScript)

Flexygo's event functions are used to capture the notifications:

```javascript
flexygo.events.on(document, 'push', 'updated', capturar_evento);
```

The handler function accesses the data through `e.sender` and validates the event by comparing `e.masterIdentity`.

## Use cases

This mechanism enables automatic actions in browsers without user intervention, ideal for real-time notifications, status updates, or data synchronization between clients.
