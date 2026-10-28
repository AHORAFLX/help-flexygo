# ¿Sabías que puedes enviar eventos desde el servidor a los navegadores?

Flexygo permite que el servidor mande avisos a los navegadores conectados sin que el usuario haga nada: un mensaje nuevo, un error en segundo plano, un dato que ha cambiado…

## Lado del servidor (C#)

Desde un proceso, crea un `EventHelper` (espacio de nombres `FLEXYGO.Interfaces.SignalR.Events`) con su clase y su tipo, rellena `masterIdentity` para identificar el aviso y `sender` con los datos, y envíalo con la clase `FLEXYGO.SignalR.Events`:

```csharp
using FLEXYGO.Interfaces.SignalR.Events;
using FLEXYGO.SignalR;

EventHelper eventInfo = new EventHelper(eEventClass.Push, eEventType.Notify)
{
    masterIdentity = "pedidoServido",
    sender = new Dictionary<string, object>
    {
        { "pedido", idPedido },
        { "mensaje", "El pedido ya está servido" }
    }
};
Events.FireGenericUserEvent(eventInfo, username);
```

Según a quién vaya el aviso:

* `FireGenericUserEvent(eventInfo, userName)`: a un usuario, por su nombre.
* `FireGenericUsersEvent(eventInfo, userNames)`: a varios usuarios.
* `FireGenericUserIDEvent(eventInfo, userId)`: a un usuario, por su Id.
* `FireGenericAllUserEvent(eventInfo)`: a todos los usuarios conectados.

Los métodos son asíncronos (`Task`): puedes esperarlos con `await` o lanzarlos sin esperar. El proceso se ejecuta en el backend, que pasa el aviso al frontend (`api/frontend/Events/...`), y es el frontend el que lo reparte a los navegadores por SignalR. Por eso funciona igual con el frontend y el backend en servidores distintos.

## Lado del cliente (JavaScript)

Escucha la clase y el tipo del evento con `flexygo.events.on` y comprueba `masterIdentity` para quedarte solo con tus avisos:

```javascript
flexygo.events.on(this, 'push', 'notify', function (e) {
    if (e.masterIdentity === 'pedidoServido' && e.sender) {
        flexygo.msg.info(e.sender.mensaje);
    }
});
```

Si el componente se puede volver a pintar, quita antes el manejador con `flexygo.events.off(this, 'push', 'notify')` para no registrarlo dos veces.

## Casos de uso

Avisos en tiempo real, refrescar una pantalla cuando llegan datos nuevos o informar de errores de procesos en segundo plano. El conector de WhatsApp, por ejemplo, lo usa para refrescar la conversación cuando entra un mensaje y para avisar si uno no se ha podido enviar.
