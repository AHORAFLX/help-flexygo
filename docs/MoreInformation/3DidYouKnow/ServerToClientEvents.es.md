# ¿Sabías que puedes enviar eventos desde el servidor a los navegadores?

Es posible implementar un sistema de eventos servidor-cliente en Flexygo, permitiendo que el servidor dispare notificaciones a navegadores sin intervención del usuario.

## Lado del servidor (C#)

El proceso utiliza una clase `EventHelper` que genera eventos con clase Push y tipo Updated. Los métodos disponibles son:

* `FireGenericUserEvent()`: envía a un usuario específico
* `FireGenericUserIDEvent()`: envía por ID de usuario
* `FireGenericAllUserEvent()`: envía a todos los usuarios

El evento incluye un objeto `sender` con los datos a transmitir y un identificador `masterIdentity`.

## Lado del cliente (JavaScript)

Se utilizan funciones de eventos de Flexygo para capturar las notificaciones:

```javascript
flexygo.events.on(document, 'push', 'updated', capturar_evento);
```

La función receptora accede a los datos mediante `e.sender` y valida el evento comparando `e.masterIdentity`.

## Casos de uso

Este mecanismo permite realizar acciones automáticas en navegadores sin que los usuarios intervengan, ideal para notificaciones en tiempo real, actualizaciones de estado o sincronización de datos entre clientes.
