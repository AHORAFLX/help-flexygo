# Eventos

Los eventos nos permiten ejecutar código cuando ocurre una acción del sistema, por ejemplo, cuando se actualiza una entidad, se realiza una llamada AJAX o se carga un módulo.

## Estructura

La clase de eventos de flexygo tiene estas propiedades:

*   **class:** "all" | "entity" | "property" | "process" | "module" | "page" | "post" | "dialog"
*   **type:** "all" | "inserted" | "updated" | "deleted" | "changed" | "selected" | "executed" | "loaded" | "closed"
*   **sender:**  El objeto que lanza el evento
*   **masterIdentity:**  Identificador principal del emisor
*   **detailIdentity:**  Identificador detallado del emisor

## Suscribirse a un evento

Para suscribirse a un evento de actualización de entidad:

```js
flexygo.events.on(this,"entity","updated",function(e) {
	var entity = e.sender;
    if (entity.objectName == 'sysObject') {
		alert('¡Felicidades! Has actualizado correctamente un objeto del sistema.');
	}
});
```