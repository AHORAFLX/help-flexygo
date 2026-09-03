# ¿Sabías que la API de Flexygo puede recibir colecciones?

La API de Flexygo posee una capacidad notable: puede procesar múltiples registros simultáneamente. Cuando se envía un array de objetos en lugar de un único objeto, el sistema intenta insertar cada elemento de manera independiente.

Una característica de seguridad importante es que si surge algún problema durante el proceso, la API intentará insertar cada uno de ellos de forma independiente. Si ocurre algún problema, deshará todos los cambios realizados, garantizando la integridad de los datos.

Este comportamiento transaccional protege la base de datos contra inserciones parciales, asegurando que o se completan todas las operaciones exitosamente, o ninguna se aplica.

![](../../docs_assets/images/DidYouKnow/APICollections/1.png)
