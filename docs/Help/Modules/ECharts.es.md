# Gráficas con ECharts: `flx-echart` frente a `flx-chart` <span class="fh-version-tag" title="Disponible desde la versión 10">10.0+</span>

A partir de la **versión 10** Flexygo tiene **dos** tipos de módulo de gráfica:

| Tipo de módulo | Librería | Ajustes | |
|---|---|---|---|
| `flx-chart` | Chart.js 2.9.4 (`~/js/plugins/Chart/Chart.js`) | `Charts_Settings` (`ChartSettingName`) | el de siempre; **no cambia** |
| `flx-echart` | Apache ECharts 6.1 (`~/js/plugins/echarts/echarts.min.js`) | `Charts_Themes` (`ChartThemeName`) + `JsonOptions` | **nuevo**, «Chart (ECharts)» en el combo de tipo |

Los dos leen **el mismo SQL** (series, etiquetas y valores) y ofrecen **los mismos diez tipos de gráfica** (`bar`, `horizontalBar`, `line`, `mixed`, `pie`, `doughnut`, `semidoughnut`, `polarArea`, `radar`, `bubble`), así que un módulo `flx-chart` pasa a `flx-echart` cambiando el tipo del módulo y eligiendo un tema. Nada obliga a migrar: `flx-chart` sigue funcionando igual y las dos librerías se cargan por `Plugins` como siempre.

Esta página es la referencia de `flx-echart`: **qué llega al actualizar**, **cómo se migra un módulo** y qué se queda por el camino, **qué se configura y dónde** (tema, `JsonOptions`, el bloque `flx`, el SQL), qué comportamientos son nuevos, cómo comprobarlo y una **galería** con cada tema, cada tipo y las recetas más útiles del bloque `flx`, en imagen y con el `JsonOptions` que las produce (5).

---

## 0. Al actualizar un producto

### 0.1 Qué llega solo con los paquetes

| Paquete | Qué trae |
|---|---|
| `{Producto}.Frontend` | El componente `flx-echart` y la librería en `js/plugins/echarts/`. `flx-chart` y Chart.js siguen donde estaban |
| `{Producto}.Backend` / `.Library` | `Chart.GetHTML` sirve a los dos tipos; reenvía además `Modules.Empty` (el texto de vacío) y, si un `flx-echart` no nombra tema, le da `syscth-shadcn` |
| `{Producto}.Conf.Database` | La fila de `Modules_Types` (`flx-echart`, visible en el Module Manager de cualquier base), la tabla **`Charts_Themes`** con cuatro temas (`syscth-default`, `syscth-flexygo`, `syscth-mono`, `syscth-shadcn`), el objeto `sysChartThemes` (menú Reporting → Chart Themes), las reglas de los campos del módulo por tipo (en un `flx-echart` el tema es obligatorio y se rellena con `syscth-shadcn`; `Empty` y `JsonOptions` se ven en la ficha, este último con editor JSON), la columna `Modules.JsonOptions` a `nvarchar(max)` (antes 500), la fila de `Plugins` de ECharts y las traducciones. En la ficha del módulo, **Chart Settings** (`ChartSettingName`) también se ve con `flx-echart`, opcional (con `flx-chart` sigue siendo obligatorio). `Charts_Settings` gana cuatro columnas que solo lee `flx-echart` (3.1 bis): `Stack` («Stack series»), `DataView` («Data view menu»), `NumberFormat` («Number format», combo `plain`/`locale`/`compact`) y `NumberDecimals` («Decimals»); y sus combos **Legend Position** y **Title Position** ya listan sus opciones (Top, Bottom, Left, Right). Ayudas (ⓘ) nuevas o reescritas: Chart Theme, Chart Settings, Json Options, Series, Labels, Values, y SQL Sentence con un bloque para «Chart (ECharts)». Todo con origen 0, por los `MERGE` de siempre |

### 0.2 Qué cambia en un `flx-echart` que ya existiera

Un producto que ya usara `flx-echart` (de una versión intermedia de skin2026) ve estos cambios, en **las dos pieles**:

1. **El menú «ver los datos» (`dataView`) va encendido de fábrica**: cada gráfica lleva el icono de ECharts que abre la tabla de sus datos, con los rótulos traducidos. Se apaga por módulo con `{"flx":{"dataView":false}}` en `JsonOptions`.
2. **La barra de herramientas del módulo se pinta.** Los botones configurados en un módulo de gráfica no se enseñaban (ni en `flx-chart` ni en `flx-echart`); en `flx-echart` ahora sí. `flx-chart` no se toca.
3. **El texto de vacío es el del módulo** (`Modules.Empty`); en blanco, sale el genérico de siempre.
4. **Sin tema se pinta con `syscth-shadcn`.** Con `ChartThemeName` vacío la gráfica salía con la paleta de fábrica de ECharts, repetía el título del módulo dentro y ponía la leyenda sobre el eje; ahora el servidor le da el tema por defecto.
5. **Lee su ajuste.** Si el módulo tiene `ChartSettingName`, la leyenda y su posición, las etiquetas de valor y el título salen del ajuste, por encima del tema (3.1 bis). Antes `flx-echart` lo ignoraba: un módulo con ajuste puede ganar o perder la leyenda o las etiquetas.
6. **`syscth-default` tiene paleta**: la de shadcn. Antes quien lo elegía veía la paleta de fábrica de ECharts.
7. **`syscth-mono` pierde la barra gris de fondo** de las barras.
8. **Las circulares con etiquetas por fuera y sin leyenda quedan centradas**: el centro de fábrica pasa de 58 % a 50 %, y `syscth-shadcn` y `syscth-mono` dejan de fijar su propio `doughnutRadius`. La etiqueta de abajo ya no se sale del dibujo.
9. **Una tarta de una sola porción se pinta entera**, sin la rendija que dejaba la separación entre porciones.

Y solo en skin2026: la gráfica se viste con los tokens de la piel (fondos, tinta, ejes, tooltip, el panel del `dataView`) en claro y en oscuro, y puede llevar una tira al pie (3.4).

`flx-chart` **no cambia en nada** en esta versión.

---

## 1. Migrar un módulo de `flx-chart` a `flx-echart`

1. En la ficha del módulo, cambiar **Tipo** a «Chart (ECharts)» (`flx-echart`). El formulario enseña entonces los campos que este tipo lee y esconde los del otro.
2. Revisar el **tema** en `ChartThemeName` (`Charts_Themes`): es obligatorio en este tipo y la ficha lo rellena con `syscth-shadcn` al elegirlo. Un módulo que llegue sin tema (creado por SQL, por ejemplo) se pinta también con `syscth-shadcn`.
3. Revisar el SQL con la tabla 2.1: el contrato es el mismo; lo único que cambia es qué columnas opcionales se leen.
4. Probar la gráfica en las dos pieles y, en skin2026, en claro y en oscuro.

| Campo del módulo | `flx-chart` | `flx-echart` |
|---|---|---|
| `SQlSentence`, `ConnStringID`, `Cache` | sí | sí |
| `Series`, `Labels`, `Value` (alias de las tres columnas del SQL) | sí | sí |
| `ChartTypeId` | el tipo de la gráfica | el tipo de la gráfica; en `mixed`, cada serie trae el suyo del SQL |
| `MixedChartTypes`, `MixedChartLabels` | sí | sí (el servidor etiqueta cada fila con su tipo) |
| `ChartLineFill`, `ChartLineBorderDash` | sí | sí (`ChartLineFill` = área al 18 %, que `flx.series.areaOpacity` puede cambiar) |
| `JsonOptions` | opciones de Chart.js | opciones de ECharts + el bloque `flx` (3.2) |
| `ChartSettingName` (`Charts_Settings`) | **sí**, obligatorio | **sí**, opcional: leyenda, su posición, etiquetas y título por encima del tema, más los cuatro campos del bloque «ECharts» del ajuste (3.1 bis). El resto del ajuste (colores, fuentes, ejes, animación) es de Chart.js y no se lee |
| `ChartThemeName` (`Charts_Themes`) | no | **sí**, obligatorio (por defecto `syscth-shadcn`) |
| `ChartBackground`, `ChartBorder` | no hacen nada (el servidor busca las columnas `backgroundColor` y `borderColor` por su nombre literal) | igual: no se leen |
| `Empty` | no | sí (visible en la ficha) |
| `Params` | atributos que se pegan a la etiqueta `<flx-chart>`, como en cualquier módulo | atributos que se pegan a la etiqueta `<flx-echart>` (3.3) |

Un módulo que solo use un ajuste de fábrica (`syscs-default`, `syscs-default-legendandlabels`, `syscs-default-legendnolabels`, `syscs-default-nolegendandlabels`, que son leyenda sí/no × etiquetas sí/no) **se migra cambiando solo el tipo**: conserva su ajuste, y el tema por defecto le da la paleta.



Lo que se pierde al migrar: los colores, fuentes, ejes y animación de un ajuste de `Charts_Settings` (eso lo decide el tema de `Charts_Themes`), y un `JsonOptions` escrito para Chart.js, que no vale para ECharts (son dos árboles de opciones distintos).

---

## 2. El SQL

### 2.1 El contrato

La consulta devuelve filas planas con tres columnas cuyos alias se declaran en el módulo (`Series`, `Labels`, `Value`): el componente las pivota a una matriz serie × etiqueta. Los tipos circulares (`pie`, `doughnut`, `semidoughnut`, `polarArea`) agregan por serie.

Los nombres de columna **no distinguen mayúsculas**: ni los tres que declara el módulo (`value`, `Value` o `VALUE` casan con «Value») ni los fijos de la tabla (`backgroundColor`, `borderColor`, `unit`, `goal`, `goalLabel`).

| Columna | Qué hace | |
|---|---|---|
| la de `Series` | Nombre de la serie | |
| la de `Labels` | Categoría (eje X, sector, radio) | |
| la de `Value` | Valor numérico (coma o punto decimal) | |
| `backgroundColor`, `borderColor` | Color de la fila: de la serie en los cartesianos, del sector en los circulares. Nombres **fijos** (sin distinguir mayúsculas) | opcional |
| `chartType` | Solo en `mixed`: `bar` o `line` para esa serie (lo pone el servidor a partir de `MixedChartTypes`) | |
| `unit` | Unidad que se escribe tras cada número (etiquetas, tooltip, eje). De toda la gráfica: vale la primera fila que la traiga | opcional, solo `flx-echart` |
| `goal` | Valor de una línea de objetivo sobre la primera serie. Un valor que no es número no dibuja nada | opcional, solo `flx-echart` |
| `goalLabel` | Rótulo de esa línea | opcional, solo `flx-echart` |

Las tres últimas son lo propio de cada gráfica, y van en el SQL porque ahí se traducen como cualquier otro rótulo (`dbo.fTranslateArea(...)`); un texto escrito en `JsonOptions` se queda en un idioma. Si el módulo también las fija en `JsonOptions.flx`, manda `JsonOptions`.

Una celda que el SQL no devuelve vale **0** por defecto, como siempre. Con `flx.series.emptyAs = "gap"` llega como hueco (`null`): en una línea mensual, un mes sin filas corta la línea en vez de caer a cero, que es otra afirmación.

Un ejemplo, la gráfica de actividad de la pantalla de inicio (acciones y errores por día, dos series, catorce etiquetas):

```sql
SELECT ISNULL(a.cnt, 0) AS value, s.serie AS series, d.etiqueta AS label
  FROM (SELECT CAST(DATEADD(day, -n, CAST(GETDATE() AS date)) AS date) AS dia,
               CONVERT(varchar(5), DATEADD(day, -n, CAST(GETDATE() AS date)), 103) AS etiqueta
          FROM (VALUES(13),(12),(11),(10),(9),(8),(7),(6),(5),(4),(3),(2),(1),(0)) v(n)) d
 CROSS JOIN (VALUES (dbo.fTranslateArea('{{currentUserCultureId}}', N'Actions', 'Templates')),
                    (dbo.fTranslateArea('{{currentUserCultureId}}', N'Errors',  'Templates'))) s(serie)
  LEFT JOIN (SELECT CAST(TimeStamp AS date) AS dt, dbo.fTranslateArea('{{currentUserCultureId}}', N'Actions', 'Templates') AS serie, COUNT(*) AS cnt FROM ActionsLog GROUP BY CAST(TimeStamp AS date)
             UNION ALL
             SELECT CAST(TimeStamp AS date), dbo.fTranslateArea('{{currentUserCultureId}}', N'Errors', 'Templates'), COUNT(*) FROM Error_Log GROUP BY CAST(TimeStamp AS date)) a
    ON a.dt = d.dia AND a.serie = s.serie
 ORDER BY d.dia, s.serie
```

---

## 3. Qué se configura y dónde

Cuatro niveles, del más general al más concreto: el **tema** (compartido por todos los módulos que lo eligen: cómo se ve), el **ajuste** de `Charts_Settings` si el módulo tiene uno (qué se enseña: leyenda y su posición, etiquetas, título; manda sobre el tema en esas cuatro cosas), el **`JsonOptions` del módulo** (solo ese módulo) y el **SQL** (por fila).

### 3.1 El tema: `Charts_Themes`

Se editan desde **Reporting → Chart Themes**. Una fila por tema:

| Columna | Qué hace |
|---|---|
| `ChartThemeName`, `Descrip` | Identificador y nombre |
| `Colors` | Paleta de las series, separada por comas |
| `FollowSkin` | Con sí (el valor por defecto), los colores de texto, ejes y fondos salen de los tokens de la piel activa (y del modo claro/oscuro en skin2026). Con no, se usan los del tema y, a falta de ellos, los de fábrica |
| `ShowLegend`, `LegendPos` | Leyenda y su posición (`top`, `bottom`, `left`, `right`) |
| `ShowTitle` | Título de la gráfica (el del módulo) |
| `ShowLabels` | Etiquetas de valor sobre los datos. Regla: **leyenda o etiquetas, nunca las dos** en los circulares con etiqueta exterior; y las etiquetas se apagan solas si no caben (`flx.labelMaxPoints`) |
| `AnimationDuration`, `AnimationStyle` | Animación de entrada (ms y curva de ECharts) |
| `ThemeJson` | Cualquier nodo de tema de ECharts (`textStyle`, `categoryAxis`, `valueAxis`, `legend`, `bar`, `line`…), más un bloque `dark` con lo que cambia en oscuro y un bloque `flx` con los valores por defecto de 3.2 para todos los módulos del tema |

Los cuatro temas de fábrica: `syscth-default` (sigue a la piel, sin JSON; la paleta es la de shadcn, de diez colores: los cinco de shadcn y cinco más, para que una gráfica de muchas series o porciones no repita color), `syscth-flexygo` (paleta de marca), `syscth-mono` (monocromo, tipografía monoespaciada) y `syscth-shadcn` (esquinas redondeadas, símbolos en las líneas, porciones separadas: la referencia visual de skin2026 y **el tema por defecto**). Ningún tema de fábrica fija `doughnutRadius` ni `pieCenter`: son la geometría de las circulares con etiquetas por fuera y sin leyenda, y la de fábrica es la que deja sitio a esas etiquetas.

### 3.1 bis El ajuste: `Charts_Settings`

Se edita desde el propio ajuste (el enlace del campo en la ficha del módulo). Lo que un `flx-echart` lee de él:

| Campo | Qué hace | Vacío / por defecto |
|---|---|---|
| `ShowLegend`, `LegendPos` | Leyenda y su posición | — |
| `ShowLabels` | Etiquetas de valor (con las reglas del tema: se apagan si no caben; en circulares, leyenda o etiquetas) | — |
| `ShowTitle` | Título dentro de la gráfica | — |
| `Stack` (Apilar series) | Apila las series de cada categoría | no |
| `DataView` (Menú de vista de datos) | El icono que abre la tabla de datos | sí |
| `NumberFormat` (Formato de los números) | `plain`, `locale` o `compact` | vacío: lo decide el tema |
| `NumberDecimals` (Decimales) | Cifras tras la coma | vacío: lo decide el tema |

Orden de mando, de menos a más: **tema < ajuste < columnas del SQL (`unit`, `goal`, `goalLabel`) < `JsonOptions`**.

### 3.2 `JsonOptions` del módulo, y el bloque `flx`

`JsonOptions` es un JSON que se **funde en profundidad** sobre el `option` de ECharts que el componente construye. Alcanza `title`, `legend`, `grid`, `tooltip`, `xAxis`/`yAxis`, `graphic`, `visualMap`, `dataZoom`, `toolbox`… **pero no `series[]`**: las series son dinámicas (salen del SQL) y el merge sustituye los arrays enteros. Todo lo que afecta a una serie se pide por el bloque **`flx`**, con nombres cerrados, que el componente aplica serie a serie.

En la ficha del módulo se escribe en un editor JSON (Monaco en skin2026, CodeMirror en flexy2022) y la columna no tiene límite de tamaño: hasta esta versión era de 500 caracteres, que un bloque `flx` con tira al pie y línea de media ya supera. **Un JSON mal formado se guarda igual**: la gráfica se pinta sin sus opciones, sale un aviso flotante y, en modo desarrollo, una línea roja encima del dibujo («JsonOptions no es JSON válido en …») mientras no se corrija.

```json
{
  "flx": {
    "numberFormat": "locale", "numberUnit": " €",
    "series": { "stack": true, "barMaxWidth": 32 },
    "markLine": { "show": true, "type": "average", "label": "media" },
    "footer": { "show": true, "delta": "lastPrev", "label": "vs. mes anterior", "context": "últimos 12 meses" }
  },
  "grid": { "left": 48 }
}
```

Las claves del bloque `flx` (el tema puede fijarlas para todos; el módulo las cambia para sí):

| Grupo | Claves | Qué hacen |
|---|---|---|
| Barras | `barGap`, `barBorderRadiusVertical`, `barBorderRadiusHorizontal`, `cartesianLabelPosition` (`outside`/`inside`) | separación, esquinas y dónde va la etiqueta |
| Líneas | `lineSmooth`, `lineShowSymbol`, `lineSymbolSize`, `lineSymbolBorderWidth` | curva y puntos |
| Por serie: `series.*` | `stack`, `stackNormalize`, `step` (`start`/`middle`/`end`), `connectNulls`, `emptyAs` (`gap`), `barMaxWidth`, `areaOpacity`, `areaGradient`, `sampling`, `endLabel`, `markPoint` (`["max","min"]`) | lo que ECharts guarda dentro de cada serie: apilado, escalón, huecos, ancho, área, muestreo, valor al final de la línea, extremos marcados |
| Circulares | `pieRadius`, `doughnutRadius`, `semidoughnutRadius`, `pieCenter`, `semidoughnutCenter`, `legendBandTop/Bottom/Side`, `pieMargin`, `doughnutRingGap`, `semidoughnutRingRatio`, `piePadAngle`, `pieLabelFormatter`, `pieLabelPosition` (`outside`/`inside`), `pieLabelFormatterInside`, `pieLabelMinPercent`, `pieLabelLine`, `activeIndex` (índice, `max` o `min`) | geometría, etiquetas y sector activo |
| Rosquilla | `centerText` (`show`, `value`, `label`, `note`, tamaños y separaciones, `valueFormat`) | texto en el hueco |
| Radar | `radarSymbolSize` | tamaño de los puntos |
| Números | `numberFormat` (`plain`/`locale`/`compact`), `numberDecimals`, `numberUnit` | cómo se escribe cada número (etiquetas, tooltip, eje) |
| Referencia | `markLine` (`show`, `type` `average`/`value`, `value`, `label`) | línea de media u objetivo sobre la primera serie |
| Tira al pie | `footer` (`show`, `delta` `firstLast`/`lastPrev`, `label`, `context`) | variación calculada sobre los datos pintados y texto de contexto; solo skin2026 (3.4) |
| General | `showTooltip`, `showLabels` (anula el `ShowLabels` del tema para este módulo), `labelMaxPoints`, `dataView` | tooltip, etiquetas, techo de puntos con etiqueta, menú de datos |

Nada del bloque `flx` acepta código: los nombres son cerrados porque lo escribe un administrador en la base y evaluar texto sería ejecución arbitraria por configuración.

### 3.3 `Params` del módulo

Lo que se escriba en `Modules.Params` se pega como atributos a la etiqueta `<flx-echart>`, igual que en cualquier otro componente.

### 3.4 Lo que solo pasa en skin2026

Con la piel skin2026 la gráfica lee los tokens del tema de la aplicación (fondo, tinta, tintas semánticas para la tira) en claro y en oscuro, el panel del `dataView` se viste con ellos, y la tira del pie (`flx.footer`) se pinta como una fila del componente bajo el dibujo, fuera del área de la gráfica. En flexy2022 la tira no se pinta y el resto se ve con el tema tal cual.

---

## 4. Cómo comprobarlo

1. Abrir la página del módulo en skin2026 (claro y oscuro) y en flexy2022 con el perfil cambiado de verdad.
2. Los datos se pintan con las series y etiquetas esperadas; el icono del `dataView` abre la tabla con los rótulos traducidos; los botones del módulo, si los hay, aparecen en su barra.
3. Un módulo con `JsonOptions` de Chart.js migrado a `flx-echart` no rompe la gráfica, pero sus opciones no se aplican: hay que reescribirlas.
4. Un `flx-chart` que se deje como está se ve exactamente igual que antes.
5. Un `flx-echart` sin tema se ve igual que uno con `syscth-shadcn`.

---

## 5. Galería

Cada imagen es la gráfica de actividad de la pantalla de inicio del administrador (acciones y errores por día, dos series y catorce días: el SQL de 2.1) en **skin2026 claro**, con el tema por defecto `syscth-shadcn` y **sin ajuste** de `Charts_Settings`, salvo lo que se indique debajo de cada una. De una a otra solo cambia lo que se dice.

Los tipos circulares agregan por serie, y dos series de catorce días serían dos porciones; por eso sus ejemplos usan otra consulta de la misma base, las acciones de esos catorce días por tipo:

```sql
SELECT t.Descrip AS series, 'Actions' AS label, COUNT(*) AS value
  FROM ActionsLog a JOIN ActionsLog_Types t ON t.TypeId = a.TypeId
 WHERE a.TimeStamp >= DATEADD(day, -13, CAST(GETDATE() AS date))
 GROUP BY t.Descrip
```

### 5.1 Los cuatro temas

La misma gráfica en barras, líneas y rosquilla con cada tema de fábrica (**Chart Theme** en la ficha). Un módulo **sin tema** se pinta igual que con `syscth-shadcn` (0.2).

<figure markdown="span">
  ![Tema syscth-shadcn](../../docs_assets/images/ECharts/tema-shadcn.png)
  <figcaption><code>syscth-shadcn</code>, el tema por defecto: barras con esquinas redondeadas, puntos en las líneas y porciones separadas</figcaption>
</figure>

<figure markdown="span">
  ![Tema syscth-default](../../docs_assets/images/ECharts/tema-default.png)
  <figcaption><code>syscth-default</code>: la paleta de shadcn sin el resto del tema (líneas sin puntos)</figcaption>
</figure>

<figure markdown="span">
  ![Tema syscth-flexygo](../../docs_assets/images/ECharts/tema-flexygo.png)
  <figcaption><code>syscth-flexygo</code>: la paleta de marca</figcaption>
</figure>

<figure markdown="span">
  ![Tema syscth-mono](../../docs_assets/images/ECharts/tema-mono.png)
  <figcaption><code>syscth-mono</code>: monocromo, con tipografía monoespaciada y sin barra de fondo</figcaption>
</figure>

### 5.2 Los diez tipos

El tipo se elige en **Chart Type** de la ficha. `pie`, `doughnut` y `semidoughnut` con la consulta de acciones por tipo; `polarArea` con las acciones de cada día en que hubo alguna, una porción por día.

| | |
|---|---|
| ![bar](../../docs_assets/images/ECharts/tipo-bar.png) `bar` | ![horizontalBar](../../docs_assets/images/ECharts/tipo-horizontalbar.png) `horizontalBar` |
| ![line](../../docs_assets/images/ECharts/tipo-line.png) `line` | ![mixed](../../docs_assets/images/ECharts/tipo-mixed.png) `mixed` |
| ![pie](../../docs_assets/images/ECharts/tipo-pie.png) `pie` | ![doughnut](../../docs_assets/images/ECharts/tipo-doughnut.png) `doughnut` |
| ![semidoughnut](../../docs_assets/images/ECharts/tipo-semidoughnut.png) `semidoughnut` | ![polarArea](../../docs_assets/images/ECharts/tipo-polararea.png) `polarArea` |
| ![radar](../../docs_assets/images/ECharts/tipo-radar.png) `radar` | ![bubble](../../docs_assets/images/ECharts/tipo-bubble.png) `bubble` |

`mixed` pide un SQL por serie separados por `;` (acciones; errores) y, en la ficha, **Mixed Chart Types** `bar|line` y **Mixed Chart Labels** `count|count`: cada consulta toma su tipo y su rótulo por posición, y la leyenda junta serie y rótulo («Actions - count»). En `bubble` el eje X es el número de la etiqueta (`15/09` → 15) y el tamaño de cada burbuja sale de su valor.

### 5.3 Recetas del bloque `flx`

Cada una es el `JsonOptions` que se ve debajo de la imagen, escrito en **Json Options** de la ficha (3.2).

**Series apiladas.** Lo mismo que encender **Stack series** en el ajuste.

![Series apiladas](../../docs_assets/images/ECharts/flx-stack.png)

```json
{ "flx": { "series": { "stack": true } } }
```

**Línea de media.** La calcula ECharts sobre los datos pintados, así que sigue a los filtros; va sobre la primera serie.

![Línea de media](../../docs_assets/images/ECharts/flx-markline.png)

```json
{ "flx": { "markLine": { "show": true, "type": "average", "label": "average" } } }
```

**Tira al pie** (solo skin2026, 3.4). La variación se calcula sobre lo pintado: aquí, el último día contra el anterior.

![Tira al pie](../../docs_assets/images/ECharts/flx-footer.png)

```json
{ "flx": { "footer": { "show": true, "delta": "lastPrev", "label": "vs. the day before", "context": "last 14 days" } } }
```

**Texto en el hueco de la rosquilla.** `value` elige qué número se escribe (`sum`, `avg`, `max`, `count`) y `valueFormat` `locale` lo agrupa por miles.

![Texto en la rosquilla](../../docs_assets/images/ECharts/flx-centertext.png)

```json
{ "flx": { "centerText": { "show": true, "value": "sum", "label": "actions", "valueFormat": "locale" } } }
```

**Huecos en vez de ceros.** Aquí el SQL no devuelve la fila de *Actions* del 26/09: con `emptyAs` `gap` la línea se corta ese día en vez de caer a cero.

![Hueco en la línea](../../docs_assets/images/ECharts/flx-gap.png)

```json
{ "flx": { "series": { "emptyAs": "gap" } } }
```

**Área con degradado.** Necesita el área encendida (**Line Fill** en la ficha); `areaOpacity` cambia su intensidad.

![Área con degradado](../../docs_assets/images/ECharts/flx-gradient.png)

```json
{ "flx": { "series": { "areaGradient": true, "areaOpacity": 0.35 } } }
```

**Escalones.** `step` admite `start`, `middle` y `end`; una línea en escalón deja de ser curva.

![Línea en escalón](../../docs_assets/images/ECharts/flx-step.png)

```json
{ "flx": { "series": { "step": "middle" } } }
```

**Valor al final de la línea y máximo marcado.** `markPoint` va sobre la primera serie y admite `max`, `min` o los dos.

![Valor al final y máximo](../../docs_assets/images/ECharts/flx-endlabel.png)

```json
{ "flx": { "series": { "endLabel": true, "markPoint": ["max"] } } }
```

**Números abreviados.** Con otra consulta, el tiempo de proceso de cada día en milisegundos: `compact` escribe `38k` en las etiquetas, el tooltip y el eje. Lo mismo que **Number format** `compact` en el ajuste.

![Números abreviados](../../docs_assets/images/ECharts/flx-compact.png)

```sql
SELECT 'Process time (ms)' AS series, CONVERT(varchar(5), CAST(TimeStamp AS date), 103) AS label, SUM(Milliseconds) AS value
  FROM ActionsLog WHERE TimeStamp >= DATEADD(day, -6, CAST(GETDATE() AS date))
 GROUP BY CAST(TimeStamp AS date) ORDER BY CAST(TimeStamp AS date)
```

```json
{ "flx": { "numberFormat": "compact", "showLabels": true } }
```

**Etiquetas dentro de la tarta.** Con `inside`, leyenda y etiquetas conviven; `pieLabelMinPercent` quita la etiqueta de las porciones demasiado finas (aquí, las de menos del 5 %).

![Etiquetas dentro de la tarta](../../docs_assets/images/ECharts/flx-pieinside.png)

```json
{ "flx": { "pieLabelPosition": "inside", "pieLabelMinPercent": 5, "showLabels": true } }
```

### 5.4 La vista de datos

El icono de arriba a la derecha abre la tabla de datos de la gráfica, con los rótulos traducidos y los colores de la piel; **Close** vuelve al dibujo. Se apaga con **Data view menu** en el ajuste o con `{"flx":{"dataView":false}}`.

![La vista de datos abierta](../../docs_assets/images/ECharts/dataview.png)

### 5.5 `JsonOptions` que no es JSON

Aquí falta cerrar una llave. La gráfica se pinta igual, sin esas opciones; sale un aviso flotante y, con el **modo desarrollo** encendido, la línea roja se queda encima del dibujo mientras no se corrija.

![Aviso de JsonOptions inválido](../../docs_assets/images/ECharts/jsonoptions-invalido.png)

### 5.6 Sin datos

Con **Empty** escrito en la ficha («No activity in the last 14 days»), y con **Empty** en blanco, el texto genérico:

![Sin datos, con Empty](../../docs_assets/images/ECharts/vacio.png)

![Sin datos, texto genérico](../../docs_assets/images/ECharts/vacio-generico.png)
