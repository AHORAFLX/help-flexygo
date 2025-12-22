# Chart

**Easy Pie**, **Easy Info**, **Easy Line** and **Sparklines** are some of the web components you can use for charting. Combined in a HTML module, you could obtain results similar to these ones:

![Sample charts](/docs_assets/images/Charts/Main.png "Sample charts")

## Easy Line

You can add your easy line by adding directly the flx-easyline web component.

```html
<flx-easyline  color="#4f9fcf" size="s"  value="40"  label="Small"  symbol="%"  hideValue="true"></flx-easyline>
```

```html
<flx-easyline  color="#2db7b0" size="m"  value="80"  label="Medium"  symbol="%"  hideValue="true"></flx-easyline>
```

```html
<flx-easyline  color="#6e587a" size="l"  value="35"  label="Large"  symbol="%" ></flx-easyline>
```

```html
<flx-easyline  color="red" value="59"  label="Auto"   symbol="%" ></flx-easyline>
```

```html
<flx-easyline  color="#ee9e1f" value="64"  label="Auto Rounded"   symbol="%"  rounded="true" ></flx-easyline>
```

Use any of the three pre defined sizes: small, medium or large. You can also leave size empty, the component will be adapted due to autosize.

![Easy line charts](/docs_assets/images/Charts/EasyLine.png "Easy line charts")

### Options

1.  Add your SQL sentence to the module
2.  Indicate Your Basic EasyLine params
3.  Indicate Your Basic EasyLine params with SQL sentence

SQL Sentence:
```sql
Select count(id) as value from Table
```

Params:
```js
color="red" size="l"  value="59"  label="Large"  symbol="%"  hideValue="true" rounded="true"   
```

SQL Sentence:
```sql
Select label, value,''#2db7b0'' as color, ''%'' as symbol, '''' AS size, ''true'' AS hideValue, ''true'' AS rounded FROM Table
```

## Timeline Progress Bar

This component is mainly used for the Timeline, but you can also add your Timeline Progres Bar by adding the flx-timeline-progressbar web component directly.

```html
<flx-timeline-progressbar> </flx-timeline-progressbar>
```

```html
<flx-timeline-progressbar percentage="54"></flx-timeline-progressbar>
```

```html
<flx-timeline-progressbar color="red" percentage="63"></flx-timeline-progressbar>
```

```html
<flx-timeline-progressbar color="#ee9e1f" percentage="87">Custom template</flx-timeline-progressbar>
```

![Timeline charts](/docs_assets/images/Charts/Timeline.png "Timeline charts")

### Options

*   Indicate your Timeline Progres Bar params

Params:
```js
color="red" percentage="75"
```

## Easy Pie

You can add your easy pie charts by referencing an easy pie module

```html
<flx-easypie  modulename="6" />
```

or by adding directly the flx-easypie web component.

```html
<flx-easypie  color="#4f9fcf" size="xs"  value="40"  label="X Small"  symbol="%" ></flx-easypie>
```

```html
<flx-easypie  color="#2db7b0" size="s"  value="80"  label="Small"  symbol="%" ></flx-easypie>
```

```html
<flx-easypie  color="#6e587a" size="m"  value="35"  label="Medium"  symbol="%" ></flx-easypie>
```

```html
<flx-easypie  color="red" size="l"  value="59"  label="Large"  symbol="%" ></flx-easypie>
```

Use any of the three pre defined sizes: small, medium or large.

![Pie charts](/docs_assets/images/Charts/Pies.png "Pie charts")

### Options

1.  Add your SQL sentence to the module
2.  Indicate your basic EasyPie params
3.  Indicate your basic EasyPie params
4.  Set optional EasyPie Json options. [View other Easypie Plugin options here](https://rendro.github.io/easy-pie-chart/)
5.  Indicate your basic EasyPie params and EasyPie Json options with SQL sentence

SQL Sentence:
```sql
Select count(id) as value from Table
```

Params:
```js
size="l"  value="59"  label="Large"  symbol="%"
```

Optional EasyPie Json options:
```json
{ "animate": 1000, "scaleColor": false }
```

SQL Sentence: 
```sql
Select count(id) as value,''%'' as symbol, ''blue'' as barColor, ''red'' as color, 2000 as animate from Table
```

## Easy Info

You can add your easy info charts by referencing an easy info module

```html
<flx-easyinfo  modulename="14" />
```

or by Adding directly the flx-easyinfo web component.

```html
<flx-easyinfo  color="#2db7b0" iconclass="flx-icon icon-pie-chart" size="s"  value="50"  label="Small"  symbol="*"> </flx-easyinfo>
```

```html
<flx-easyinfo  color="#6e587a"  iconclass="flx-icon icon-presentation-2" size="m"  value="700"  label="Medium"  symbol="%"> </flx-easyinfo>
```

```html
<flx-easyinfo  color="red"  iconclass="flx-icon icon-lock" size="l"  value="1250"  label="Large"  symbol="' + convert(nvarchar(max),NCHAR(36)) + N'"> </flx-easyinfo>
```

Use any of the three pre defined sizes: small, medium or large.

![Easy info charts](/docs_assets/images/Charts/Info.png "Easy info charts")

### Options

1.  Add your SQL sentence to the module
2.  Indicate Your Basic EasyInfo params
3.  Indicate Your Basic EasyInfo params with SQL sentence

SQL Sentence:
```sql
Select count(id) as value from Table
```

Params:
```js
color="#2db7b0" iconclass="flx-icon icon-pie-chart" size="l"  value="59"  label="Large"  symbol="%"
```

SQL Sentence:
```sql
Select count(id) as value,''#2db7b0'' as color,''%'' as symbol,''Large'' as label from Table
```

## SparkLine

You can add small charts by referencing a sparkline module module

```html
<flx-sparkline  modulename="10" />
```

or by adding directly the flx-sparkline web component.

```html
<flx-sparkline  color="#2db7b0" type="bar" size="s"  values="[1,7,10,14,25]" > </flx-sparkline>
```

```html
<flx-sparkline  color="#6e587a"  type="line" size="m"  values="[15,7,10,14,25]" > </flx-sparkline>
```

```html
<flx-sparkline  color="red"  type="discrete" size="l"  values="[11,7,-10,-14,25]"> </flx-sparkline>
```

```html
<flx-sparkline  color="red"  type="pie" size="l"  values="[11,7,-10,-14,25]"> </flx-sparkline>
```

```html
<flx-sparkline  color="red"  type="bullet" size="l"  values="[11,7,-10,-14,25]"> </flx-sparkline>
```

```html
<flx-sparkline  color="red"  type="box" size="l"  values="[11,7,-10,-14,25]"> </flx-sparkline>
```

Use any of the three pre defined sizes: small, medium or large for any of the sparkline types (bar, line, discrete, pie, bullet or box).

### Small

![SparkLine charts](/docs_assets/images/Charts/SparkLine.png "SparkLine charts small"){ .sparkline-small }

### Medium

![SparkLine charts](/docs_assets/images/Charts/SparkLine.png "SparkLine charts medium"){ .sparkline-medium }

### Large

![SparkLine charts](/docs_assets/images/Charts/SparkLine.png "SparkLine charts large"){ .sparkline-large }

### Options

1.  Add your SQL sentence to the module
2.  Indicate your basic sparkline params

SQL Sentence:
```sql
Select count(id) as value from Table
```

Params:
```
color="#2db7b0" type="bar" size="l"
```