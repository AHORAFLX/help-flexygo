# Funnel

In this article we will explain how to configurate and use the funnel module. The funnel is commonly uses in marketing to shows the way a potential customer goes from becoming aware of your brand to purchasing a good or service.

![](../docs_assets/images/Funnel/Funnel_1.png "Image 1. Funnel")

## Module Options

1.  Add your SQL sentence: 
```sql
SELECT Label AS label, Value AS value, Background AS background FROM table
```
2.  Set optional JSON options. _Example:_ 
```json
{"inverted":true,"animate":1}
```

## JSON Options

| OPTION | DESCRIPTION | TYPE | DEFAULT |
| --- | --- | --- | --- |
| bottomWidth | The percent of total width the bottom should be. | number | 1 / 3 |
| bottomPinch | How many blocks to pinch on the bottom to create a funnel "neck". | number | 1   |
| inverted | Whether the funnel direction is inverted (like a pyramid). | bool | false |
| animate | The load animation speed in milliseconds. | number | 0 (disabled) |
| curveEnabled | Whether the funnel is curved. | bool | true |
| curveHeight | The curvature amount. | number | 20  |
| totalCount | Override the total count used in ratio calculations. | number | null |
| dynamicHeight | Whether the block heights are proportional to their weight. | bool | true |
| dynamicSlope | Whether the block widths are proportional to their value decrease. | bool | false |
| barOverlay | Whether the blocks have bar chart overlays proportional to its weight. | bool | false |
| fillType | Either 'solid' or 'gradient'. | string | 'solid' |
| minHeight | The minimum pixel height of a block. | number | 25  |
| highlight | Whether the blocks are highlighted on hover. | bool | false |
| labelEnabled | Whether the block labels should be displayed. | bool | true |
| fontFamily | Any valid font family for the labels. | string | null |
| fontSize | Any valid font size for the labels. | string | '14px' |
| fill | Any valid hex color for the label color. | string | '#fff' |
| labelFormat | Either function(label, value) or a format string. See below. | mixed | '{l}\\n{f}' |
| tooltipEnabled | Whether tooltips should be enabled on hover. | bool | false |
| tooltipFormat | Either function(label, value) or a format string. See below. | mixed | '{l}\\n{f}' |

## Label/Tooltip Format

| KEY | DESCRIPTION |
| --- | --- |
| '{l}' | The block's supplied label. |
| '{v}' | The block's raw value. |
| '{f}' | The block's formatted value. |