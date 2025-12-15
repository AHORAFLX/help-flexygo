# Funnel

En este artículo explicaremos cómo configurar y usar el módulo funnel. El funnel se utiliza habitualmente en marketing para mostrar el camino que sigue un cliente potencial desde que conoce tu marca hasta que compra un producto o servicio.

![](/docs_assets/images/Funnel/Funnel_1.png "Image 1. Funnel")

## Opciones del Módulo

1. Añade tu sentencia SQL:
```sql
SELECT Label AS label, Value AS value, Background AS background FROM table
```

2. Establece opciones JSON opcionales. *Ejemplo:*

```json
{"inverted":true,"animate":1}
```

## Opciones JSON

| OPCIÓN         | DESCRIPCIÓN                                                                          | TIPO   | DEFAULT         |
| -------------- | ------------------------------------------------------------------------------------ | ------ | --------------- |
| bottomWidth    | El porcentaje del ancho total que debe tener la parte inferior.                      | number | 1 / 3           |
| bottomPinch    | Cuántos bloques se reducen en la parte inferior para crear un “cuello” en el funnel. | number | 1               |
| inverted       | Indica si la dirección del funnel está invertida (como una pirámide).                | bool   | false           |
| animate        | Velocidad de la animación de carga en milisegundos.                                  | number | 0 (desactivado) |
| curveEnabled   | Indica si el funnel es curvado.                                                      | bool   | true            |
| curveHeight    | La cantidad de curvatura.                                                            | number | 20              |
| totalCount     | Sobrescribe el total utilizado en los cálculos de proporciones.                      | number | null            |
| dynamicHeight  | Indica si la altura de los bloques es proporcional a su peso.                        | bool   | true            |
| dynamicSlope   | Indica si el ancho de los bloques es proporcional a la disminución de valor.         | bool   | false           |
| barOverlay     | Indica si los bloques tienen superposiciones de barras proporcionales a su peso.     | bool   | false           |
| fillType       | Puede ser 'solid' o 'gradient'.                                                      | string | 'solid'         |
| minHeight      | Altura mínima en píxeles de un bloque.                                               | number | 25              |
| highlight      | Indica si los bloques se resaltan al pasar el cursor.                                | bool   | false           |
| labelEnabled   | Indica si deben mostrarse las etiquetas de los bloques.                              | bool   | true            |
| fontFamily     | Cualquier familia tipográfica válida para las etiquetas.                             | string | null            |
| fontSize       | Cualquier tamaño de fuente válido para las etiquetas.                                | string | '14px'          |
| fill           | Cualquier color hex válido para el color de la etiqueta.                             | string | '#fff'          |
| labelFormat    | Puede ser function(label, value) o un formato de texto. Ver más abajo.               | mixed  | '{l}\n{f}'      |
| tooltipEnabled | Indica si deben habilitarse los tooltips al pasar el cursor.                         | bool   | false           |
| tooltipFormat  | Puede ser function(label, value) o un formato de texto. Ver más abajo.               | mixed  | '{l}\n{f}'      |

## Formato de Etiquetas/Tooltips

| KEY   | DESCRIPCIÓN                           |
| ----- | ------------------------------------- |
| '{l}' | La etiqueta proporcionada del bloque. |
| '{v}' | El valor bruto del bloque.            |
| '{f}' | El valor formateado del bloque.       |