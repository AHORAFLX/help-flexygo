# Web Component

HTML module, SQL Feed and RSS Feed all use the flx-html web component. The way they act is based on the module type and this is retrieved by indicating the modulename on the web component.

## HTML Module

Just add a flx-html web component on your page and you will inmediatly get its content displayed on the screen. You can include any other **flexygo** web component in your HTML module.

To add a SQLFeed module or a RSS module to your HTML just add the flx-html web component and indicate your SQLFeed or RSS modulename.

```html
<flx-html modulename="sysmod-sqlfeed-grid"></flx-html>
```

## SQL Feed Module

Convert any SQL Sentence in a standard XML file and transform the result with what ever XSL transformation file you want. If you don't want to deal with complex XSL language, just use the pre-built in SQLFeed.xsl file which allows you to display any SQL sentence as a view form or as a grid, just by setting the mode in the module parameter options.

### Grid mode

1.  Add your SQL sentence to the module. 
```sql
SELECT Top 3 \* FROM objects
```
2.  Indicate Transform XSL file path or used built in **SQLFeed.xsl** file.
3.  Set module parameter to **mode = "grid"** to obtain a grid layout.
4.  Add a relation to the calling object. This sentence will be parsed against the main calling object or a system default token can be used. Just use curly brackets {{object property o token name}} to parse the content.

**Example:**

![SQL Feed in grid mode](/docs_assets/images/Web%20Components/SQLFeedGrid.png "SQL Feed in grid mode")

### View mode

1.  Add your SQL sentence to the module: 
```sql
SELECT Top 1 \* FROM objects
```
2.  Indicate Transform XSL file path or used built in **Rss.xsl** file.
3.  Set moule parameter to **blank** to obtain a view layout.
4.  Add a relation to the calling object. This sentence will be parsed against the main calling object or a system default token can be used. Just use curly brackets {{object property o token name}} to parse the content.

**Example:**

![SQL Feed in view mode](/docs_assets/images/Web%20Components/SQLFeedView.png "SQL Feed in view mode")

## RSS Module

Convert any external RSS provider in to your own formated news feed with what ever XSL transformation file you want. If you don't want to deal with complex XSL language just use the pre built in Rss.xsl file wich allows you to display news in a simple format.

1.  Select the external RSS Url address:
    
    ```js
    RSS address: https://www.yahoo.com/news/rss 
    ```
    
2.  Select you transformation XSL File.
    
    ```js
    XSL file Path: ~/xsl/Rss.xsl
    ```
    
3.  Add any extra variables your XSL file might need in the parameter option.