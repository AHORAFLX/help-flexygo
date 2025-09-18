# Chart II

Chart helps you easily visualize data using JavaScript. It supports 8 different chart types (including bars, lines, and pies), and they're all responsive.

## Chart Types

In this sample we are using a query based on data model objects. All charts in this acticle's examples has the following query.

SELECT month(modify\_date) AS Mes, year(modify\_date) AS year, type\_Desc AS Clave, COUNT(type\_Desc) AS value FROM sys.objects WHERE type\_Desc IN ('SYSTEM\_TABLE','PRIMARY\_KEY\_CONSTRAINT','User\_Table','FOREIGN\_KEY\_CONSTRAINT') GROUP BY type\_Desc, month(modify\_date), year(modify\_date)

You can add optional fields background color and border color.

SELECT month(modify\_date) AS Mes, year(modify\_date) AS year, type\_Desc AS Clave, COUNT(type\_Desc) AS value, backgroundColor AS backgroundColor, borderColor AS borderColor FROM sys.objects WHERE type\_Desc in ('SYSTEM\_TABLE','PRIMARY\_KEY\_CONSTRAINT','User\_Table','FOREIGN\_KEY\_CONSTRAINT') GROUP BY type\_Desc, month(modify\_date), year(modify\_date)

Now you can add directly the flx-chart web component on a flx-list template.

Use only on header or footer to avoid duplicate the same chart N times.

If chart type is line, there are additional attributes to modify style:

*   **borderdash**: true|false
*   **linefill**: true|false

Line Border Dashed Chart

Line Fill Chart

There is also a filtering option you can use just by clicking the following buttons:

Filter system tables Unfilter system tables  
  

To make this filtering, we are toggling the chart labels with:

jQuery('flx-chart').each(function(){jQuery(this)\[0\].toggleLabel('USER\_TABLE',false);});

There are several types of charts you can use.

Line Chart

Bubble Chart

Doughnut Chart

Radar chart

PolarArea chart

Bar chart

Pie chart

Mixed chart

  
  

## Chart settings

#### Animations

Now we can define a style of animation for each chart setting and its duration. If duration is set to 0, animations are disabled. [More information about animations](https://easings.net/)

![](.\img\Help\Charts\Animations.png "Image 1. Animations Chart Configuration")

Image 1. Animations Chart Configuration

#### Mixed chart configuration

When configuring a new mixed chart, you have to define n sql statements separated by **;**. Then we must define what type of graph is going to be each dataset and the name that we are going to give it.

![](.\img\Help\Charts\Mixed.png "Image 2. Mixed Chart Configuration")

Image 2. Mixed Chart Configuration

#### Line chart style

New style options to line chart.

![](.\img\Help\Charts\LineStyle.png "Image 3. Line Chart Style")

Image 3. Line Chart Style

## Chart data

We will explain shortly each chart data structure, for more info see [link](http://www.chartjs.org/docs/).

### Line data

var dataforLineEx = { labels: \['Data 1', 'Data 2', 'Data 3', 'Data 4','Data 5', 'Data 6', 'Data 7'\], datasets: \[{ fillColor: 'rgba(0,0,0,0)', backgroundColor: 'rgba(151,187,205,0.5)', borderColor: 'rgba(151,187,205,0.5)', data: \[60, 10, 40, 30, 80, 30, 20\] }, { fillColor: 'rgba(0,0,0,0)', backgroundColor: "rgba(220,220,220,0.7)", borderColor: "rgba(220,220,220,0.7)", data: \[20, 30, 80, 20, 40, 10, 60\] }\] };

### Bubble data

var dataBubbleEx = { datasets: \[{ label: 'Bubble Chart', data: \[ { x: 20, y: 30, r: 5 }, { x: 30, y: 20, r: 15 }, { x: 33, y: 19, r: 5 }, { x: 25, y: 18, r: 20 }, { x: 40, y: 10, r: 10 }\], backgroundColor: 'rgba(151,187,205,1)', hoverBackgroundColor: 'rgba(151,187,205,1)', }\] };

### Doughnut data and pie data

Doughnut and pie chart are very similar, they have equal data structure but different options.

var dataforDoughnutEx = { labels: \[ "Blue", "Red", "Grey" \], datasets: \[{ data: \[300, 50, 100\], backgroundColor: \[ 'rgba(151,187,205,1)', "rgb(153, 38, 0)", "rgba(220,220,220,0.5)" \], hoverBackgroundColor: \[ 'rgba(151,187,205,1)', "rgb(153, 38, 0)", "rgba(220,220,220,0.5)" \] }\] };

### Radar data

var dataRadar= { labels: \["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"\], datasets: \[ { label: "Radar data", backgroundColor: "rgba(151,187,205,0.5)", borderColor: "rgba(151,187,205,0.5)", data: \[65, 59, 90, 81, 56, 55, 40\] }, { label: "Radar data 2", backgroundColor: "rgba(220,220,220,0.7)", borderColor: "rgba(220,220,220,0.7)", data: \[28, 48, 40, 19, 96, 27, 100\] } \] };

### PolarArea data

var dataPolarArea= { datasets: \[{ data: \[ 11, 16, 15 \], backgroundColor: \[ "rgba(151,187,205,0.5)", "rgba(220,220,220,0.7)", "rgba(153,0,0,0.45)" \], borderColor: \[ "rgba(151,187,205,0.5)", "rgba(220,220,220,0.7)", "rgba(153,0,0,0.1)" \], label: 'PolarArea chart' // for legend }\], labels: \[ "Red", "Green", "Yellow", "Grey", "Blue" \] };

### Bar data

var dataBar = { labels: \["January", "February", "March", "April", "May", "June", "July"\], datasets: \[{ label: 'Dataset 1', backgroundColor: "rgba(220,220,220,0.5)", yAxisID: "y-axis-1", data: \[66, 87, 40, 39, 87, 70, 65\] }, { label: 'Dataset 2', backgroundColor: "rgba(151,187,205,0.5)", yAxisID: "y-axis-2", data: \[50, 57, 70, 35, 76, 87, 58\] }, { label: 'Dataset 3', backgroundColor: 'rgba(151,187,205,1)', yAxisID: "y-axis-1", data: \[70, 66, 78, 40, 85, 70, 45\] }\] };

## Chart options

Only specific chart options are explained here, for global chart options see [the following link](http://www.chartjs.org/docs/2.9.4)

### Line options

var optionsLine = { responsive: options.Responsive, hoverMode: 'label', hoverAnimationDuration: 400, stacked: false, title: { display: options.ShowTitle , position: options.TitlePosition, fontColor: options.TitleFontColor, fontFamily: options.TitleFontStyle, fontSize:options.TitleFontSize, text: options.Title }, animation: { animateScale: options.animateScale !== "False", animateRotate: options.animateRotate !== "False", duration: options.AnimationDuration }, legend: { position: options.LegendPos, display: options.ShowLegend, onClick: function (e, p) { original.call(this, e, p); var allPageCharts = ctx.htmlItem.closest('main').find('flx-chart'); if (ctx.options.GroupName) { allPageCharts.each(function () { if (!jQuery(this).is(ctx.htmlItem)) { jQuery(this)\[0\].toggleLabel(p.text, null, ctx.options.GroupName); } }); } } }, scales: { xAxes: \[{ display: true }\] }, tooltips: { backgroundColor: options.ToolTipBackgroundColor }, pointDotRadius: 10, bezierCurve: false, scaleShowVerticalLines: false, scaleGridLineColor: 'black' };

### Bubble options

var optionsBubble = { responsive: options.Responsive, hoverMode: 'label', hoverAnimationDuration: 400, stacked: false, title: { display: options.ShowTitle, position: options.TitlePosition, fontColor: options.TitleFontColor, fontFamily:options.TitleFontStyle, fontSize:options.TitleFontSize, text: options.Title }, animation: { animateScale: options.animateScale !== "False", animateRotate: options.animateRotate !== "False", duration: options.AnimationDuration }, legend: { position: options.LegendPos, display: options.ShowLegend, onClick: function (e, p) { var original = Chart.defaults.global.legend.onClick; var allPageCharts = ctx.htmlItem.closest('main').find('flx-chart\[link-group="' + ctx.htmlItem.attr('link-group') + '"\]'); if (ctx.options.GroupName) { allPageCharts.each(function () { if (!jQuery(this).is(ctx.htmlItem)) { jQuery(this)\[0\].toggleLabel(p.text, null, ctx.options.GroupName); } }); } else { original.call(this, e, p); } } }, elements: { points: { borderWidth: 1, borderColor: 'rgb(0, 0, 0)' } }, scales: { xAxes: \[{ ticks: { callback: function (value, index, values) { return 'value is ' + value; } } }\], yAxes: \[{ ticks: { callback: function (value, index, values) { return 'value is ' + value; } } }\] }, tooltips: { backgroundColor:options.ToolTipBackgroundColor } };

### Doughnut options

var optionsDoughnut = { responsive: options.Responsive, hoverMode: 'label', hoverAnimationDuration: 400, stacked: false, title: { display: options.ShowTitle, position: options.TitlePosition, fontColor: options.TitleFontColor, fontFamily: options.TitleFontStyle, fontSize: options.TitleFontSize, text: options.Title }, animation: { animateScale: options.animateScale !== "False", animateRotate: options.animateRotate !== "False", duration: options.AnimationDuration }, legend: { position: options.LegendPos, display: options.ShowLegend, onClick: function (e, p) { original.call(this, e, p); var allPageCharts = ctx.htmlItem.closest('main').find('flx-chart\[link-group="' + ctx.htmlItem.attr('link-group') + '"\]'); if (ctx.options.GroupName) { allPageCharts.each(function () { if (!jQuery(this).is(ctx.htmlItem)) { jQuery(this)\[0\].toggleLabel(p.text, null, ctx.options.GroupName); } }); } } }, tooltips: { backgroundColor: options.ToolTipBackgroundColor }, };

### Radar options

var optionsRadar = { responsive: options.Responsive, hoverMode: 'label', hoverAnimationDuration: 400, stacked: false, title: { display: options.ShowTitle , position: options.TitlePosition, fontColor: options.TitleFontColor, fontFamily: options.TitleFontStyle, fontSize:options.TitleFontSize, text: options.Title }, animation: { animateScale: options.animateScale !== "False", animateRotate: options.animateRotate !== "False", duration: options.AnimationDuration }, legend: { position: options.LegendPos, display: options.ShowLegend, onClick: function (e, p) { original.call(this, e, p); var allPageCharts = ctx.htmlItem.closest('main').find('flx-chart\[link-group="' + ctx.htmlItem.attr('link-group') + '"\]'); if (ctx.options.GroupName) { allPageCharts.each(function () { if (!jQuery(this).is(ctx.htmlItem)) { jQuery(this)\[0\].toggleLabel(p.text, null, ctx.options.GroupName); } }); } } }, scale: { reverse: true, ticks: { beginAtZero: true } }, tooltips: { backgroundColor: options.ToolTipBackgroundColor }, };

### PolarArea options

var optionsPolarArea = { responsive: options.Responsive, hoverMode: 'label', hoverAnimationDuration: 400, stacked: false, title: { display: options.ShowTitle , position: options.TitlePosition, fontColor: options.TitleFontColor, fontFamily: options.TitleFontStyle, fontSize:options.TitleFontSize, text: options.Title }, animation: { animateScale: options.animateScale !== "False", animateRotate: options.animateRotate !== "False", duration: options.AnimationDuration }, legend: { position: options.LegendPos, display: options.ShowLegend, onClick: function (e, p) { original.call(this, e, p); var allPageCharts = ctx.htmlItem.closest('main').find('flx-chart\[link-group="' + ctx.htmlItem.attr('link-group') + '"\]'); if (ctx.options.GroupName) { allPageCharts.each(function () { if (!jQuery(this).is(ctx.htmlItem)) { jQuery(this)\[0\].toggleLabel(p.text, null, ctx.options.GroupName); } }); } } }, tooltips: { backgroundColor: options.ToolTipBackgroundColor }, elements: { arc: { borderColor: "#000000" } }, };

### Bar options

var optionsBar = { responsive: options.Responsive, hoverMode: 'label', hoverAnimationDuration: 400, stacked: false, title: { display: options.ShowTitle , position: options.TitlePosition, fontColor: options.TitleFontColor, fontFamily: options.TitleFontStyle, fontSize:options.TitleFontSize, text: options.Title }, animation: { animateScale: options.animateScale !== "False", animateRotate: options.animateRotate !== "False", duration: options.AnimationDuration }, legend: { position: options.LegendPos, display: options.ShowLegend, onClick: function (e, p) { original.call(this, e, p); var allPageCharts = ctx.htmlItem.closest('main').find('flx-chart\[link-group="' + ctx.htmlItem.attr('link-group') + '"\]'); if (ctx.options.GroupName) { allPageCharts.each(function () { if (!jQuery(this).is(ctx.htmlItem)) { jQuery(this)\[0\].toggleLabel(p.text, null, ctx.options.GroupName); } }); } } }, scales: { yAxes: \[{ type: "linear", display: true, position: "left", id: "y-axis-1", ticks: { beginAtZero: true, min: 0 } }, { type: "linear", display: false, position: "right", id: "y-axis-2", gridLines: { drawOnChartArea: false } }\], }, tooltips: { backgroundColor: options.ToolTipBackgroundColor }, };

### Pie options

var optionsPie = { responsive: options.Responsive, hoverMode: 'label', hoverAnimationDuration: 400, stacked: false, title: { display: options.ShowTitle, position: options.TitlePosition, fontColor: options.TitleFontColor, fontFamily: options.TitleFontStyle, fontSize: options.TitleFontSize, text: options.Title }, animation: { animateScale: options.animateScale !== "False", animateRotate: options.animateRotate !== "False", duration: options.AnimationDuration }, legend: { position: options.LegendPos, display: options.ShowLegend, onClick: function (e, p) { original.call(this, e, p); var allPageCharts = ctx.htmlItem.closest('main').find('flx-chart\[link-group="' + ctx.htmlItem.attr('link-group') + '"\]'); if (ctx.options.GroupName) { allPageCharts.each(function () { if (!jQuery(this).is(ctx.htmlItem)) { jQuery(this)\[0\].toggleLabel(p.text, null, ctx.options.GroupName); } }); } } }, tooltips: { backgroundColor: options.ToolTipBackgroundColor }, cutoutPercentage: 0 };