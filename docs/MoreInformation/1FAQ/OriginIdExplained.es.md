# Cómo funciona el OriginId en 4 pasos

## Paso 1: Identificación del propietario del registro

El `OriginId` indica la propiedad del registro durante las actualizaciones:

* **OriginId 0**: registros nuevos de los desarrolladores de Flexygo
* **OriginId 1**: registros nuevos de los desarrolladores de producto
* **OriginId 2**: registros nuevos creados durante la personalización o implantación

## Paso 2: Inmutabilidad del OriginId

Jamás se modifica el `OriginId` de un registro existente en la herramienta o producto. Pueden modificarse otros campos independientemente del propietario, pero nunca el `OriginId`.

## Paso 3: Lógica de actualización comparativa

Durante las actualizaciones, el sistema compara los campos entre versiones:

| ¿Nueva versión? | ¿Personalización? | Acción |
|---|---|---|
| No | No | Se mantiene el valor anterior |
| Sí | No | Se actualiza |
| No | Sí | Se mantiene la personalización |
| Sí | Sí | Se actualiza, pero genera conflicto* |

\* Existen excepciones configuradas donde prevalece la personalización: etiquetas de propiedades, idiomas estándar, logos, colores de variables, cuerpos de plantillas, orden de nodos y estados de trabajos programados.

## Paso 4: Gestión de eliminaciones

Si se elimina un registro con `OriginId` 0 o 1 en una implantación y no se borra también de la herramienta o el producto, ese registro volverá a insertarse. Se recomienda desactivar los registros en lugar de eliminarlos.
