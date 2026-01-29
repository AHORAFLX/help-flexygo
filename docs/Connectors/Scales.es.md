# Integración con Básculas

**Flexygo** incluye integración con básculas que utilizan el protocolo estándar Samsung ES.

## Configuración

Asegúrate de que tu báscula es compatible con el protocolo Samsung ES y configúrala siguiendo las instrucciones del fabricante.
{: .flx-warning-card }

Para añadir un botón junto al campo de tipo textbox (Imagen 1), simplemente configura tu módulo de edición añadiendo en **JS After Load** la siguiente instrucción (Imagen 2):

```javascript
flexygo.integrations.scales.init('PropertyName'); 
```

Cuando el usuario pulse este botón por primera vez, el navegador solicitará seleccionar el puerto serie correspondiente a la báscula (Imagen 3).
Después de esto, Chrome guardará la configuración y el usuario podrá leer el peso simplemente haciendo clic en el botón de la báscula.

![](../docs_assets/images/Scales/2.PNG "Image 1. Get weight button")

![](../docs_assets/images/Scales/1.PNG "Image 2. Module settings")

![](../docs_assets/images/Scales/3.PNG "Image 3. Port selector")