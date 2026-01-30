# Form controls

<flx-navbutton class="link" type="openhelpid" helpid="syshelp-controls">Click here</flx-navbutton> to test them on Flexygo.

## Default Form Elements

![](../docs_assets/images/Controls/Default.PNG "Defaults")
```html
<flx-text type="text" name="mytext" placeholder="Text Field" required requiredmessage="You must enter a valid text"></flx-text>
```

```html
<flx-text type="password" name="password" placeholder="Password" required requiredmessage="You must enter a valid password"></flx-text>
```

```html
<flx-textarea name="area" placeholder="Text area" required requiredmessage="You must enter a valid text"></flx-textarea>
```

```html
<flx-combo name="select-1" required requiredmessage="You must enter a valid text">
  <option >Amsterdam<option>
  <option >Atlanta<option>
  <option >Baltimore<option>
</flx-combo>
```

## Numbers an Dates

![](../docs_assets/images/Controls/NumbersAndDates.PNG "Numbers and dates")

```html
<flx-text type="date" name="date" placeholder="Date Field" required requiredmessage="You must enter a valid date"></flx-text>
```

```html
<flx-text type="datetime-local" name="datetime" placeholder="Date Time filed" required requiredmessage="You must enter a valid date and time"></flx-text>
```

```html
<flx-text type="time" name="time" placeholder="Time field" required requiredmessage="You must enter a valid time"></flx-text>
```

```html
<flx-text type="number" name="number" placeholder="number" required requiredmessage="You must enter a valid number"></flx-text>
```

```html
<flx-text type="number"decimalplaces="2" name="decimal" placeholder="decimal number" required requiredmessage="You must enter a valid decimal number"></flx-text>
```

## Special fields

![](../docs_assets/images/Controls/Special.PNG "Special")


```html
<flx-text type="tel" iconclass="flx-icon icon-phone" name="telephone" placeholder="Telephone Number" required requiredmessage="You must enter a telphone"></flx-text>
```

```html
<flx-text type="email" iconclass="flx-icon icon-web" name="email" placeholder="Email" required requiredmessage="You must enter a valid email"></flx-text>
```

```html
<flx-text type="url" iconclass="flx-icon icon-internet" name="url" placeholder="Url Address" required requiredmessage="You must enter a valid Url"></flx-text>
```

```html
<flx-text type="color" iconclass="flx-icon icon-custom" name="color" placeholder="Select a color" required requiredmessage="You must select a color"></flx-text>
```

```html
<flx-text type="map"name="coordinates" placeholder="Coordinates" ></flx-text>
```

```html
<flx-whiteboard property="whiteboard" style="height:100px" name="white board" placeholder="White Board" ></flx-whiteboard>
```

## Code Editors

![](../docs_assets/images/Controls/Code.PNG "Code")

Use the flx-code editor in any of these three established types htmlcode, javacode or sqlcode. The flx-code ajusts to div size containing it.

```html
<flx-code type="htmlcode"></flx-code>
```

## Checkbox & Radio buttons

![](../docs_assets/images/Controls/Checkbox.PNG "Checkboxes")

```html
<label class="control-label txt-outstanding" >Checkbox 1</label><br>
  <flx-check name="check1" class="txt-outstanding" checked></flx-check>
  <label class="control-label txt-danger" >Checkbox 2</label><br>
  <flx-check name="check2" class="txt-danger" checked></flx-check>
  <label class="control-label txt-warning" >Checkbox 3</label><br>
<flx-check name="check3" class="txt-warning" checked></flx-check>
```

```html
<label class="control-label " >Checkbox 1</label>
  <flx-check name="check1" checked></flx-check>
  <label class="control-label " >Checkbox 2</label>
  <flx-check name="check2" checked></flx-check>
  <label class="control-label " >Checkbox 3</label>
<flx-check name="check3" checked></flx-check>
```

![](../docs_assets/images/Controls/Radio.PNG "Radio buttons")

```html
<flx-radio name="radio1" class="txt-outstanding" >
  <option value = "1"> Option1 <option>
  <option value = "2"> Option1 <option>
  <option value = "3"> Option1 <option>
</flx-radio>
```

```html
<flx-radio name="radio2" class="txt-info inline" >
  <option value =  "1" >Option1<option>
  <option value =  "2" >Option1<option>
  <option value =  "3" >Option1<option>
</flx-radio>
```

![](../docs_assets/images/Controls/MultiSelectRadio.PNG "Multi select radio")

```html
<flx-radio name="radio1" class="txt-warning" multiple separator=";" value="1;2">
  <option value = "1"> Option1 <option>
  <option value = "2"> Option1 <option>
  <option value = "3"> Option1 <option>
</flx-radio>
```

```html
<flx-radio name="radio1" class="txt-danger inline" multiple separator=";" value="option 1;option 2">
  <option> Option1 <option>
  <option> Option1 <option>
  <option> Option1 <option>
</flx-radio>
```

## Nullable Checkbox (Three State)

![](../docs_assets/images/Controls/Nullable.PNG "Nullable Checkbox")

```html
<label class="control-label txt-outstanding" >Nullable Checkbox</label><br>
<flx-check name="check1" allowNull class="txt-outstanding" checked></flx-check>
```

## Switches

![](../docs_assets/images/Controls/Switch.PNG "Switches")

```html
<flx-switch></flx-switch>
<flx-switch checked ></flx-switch>
<flx-switch class = "switch-danger" ></flx-switch>
<flx-switch checked class = "switch-danger" ></flx-switch>
```

```html
<flx-switch  class = "inline" ></flx-switch>
<flx-switch class = "inline"  checked ></flx-switch>
<flx-switch class = "inline switch-danger" ></flx-switch>
<flx-switch checked class = "inline switch-danger" ></flx-switch>
```

## DB Select

![](../docs_assets/images/Controls/DBSelect.PNG "DB Select")

```html
<flx-dbcombo ObjectName="sysObject"  PlaceHolder="Select icon" iconclass="flx-icon icon-object" ViewName="iconsView" SQLValueField="IconName" SQLDisplayField="IconName" additionalWhere="" required requiredmessage="You must enter a telphone"></flx-dbcombo>
```

```html
<flx-dbcombo ObjectName="sysObject"  PlaceHolder="Select icon" iconclass="flx-icon icon-object" ViewName="iconsView" SQLValueField="IconName" SQLDisplayField="IconName" additionalWhere="" required requiredmessage="You must enter a valid email">
  <template >
    <div ><i  class="{{CssClass}} icon-lg icon-margin-right" ></i >{{IconName}}</div >
  </template >
</flx-dbcombo>
```

```html
<flx-dbcombo class="item-float" ObjectName="sysObject"  PlaceHolder="Uses .item-float" iconclass="flx-icon icon-objectt" ViewName="iconsView" SQLValueField="IconName" additionalWhere="" SQLDisplayField="IconName" required requiredmessage="You must enter a valid Url">
  <template >
    <i  class="txt-outstanding {{CssClass}} icon-2x icon-margin"  title="{{IconName}}" ></i >
  </template >
</flx-dbcombo>
```

```html
<flx-dbcombo class="item-float" ObjectName="sysObject"  PlaceHolder="Uses .item-float" iconclass="flx-icon icon-object" ViewName="iconsView" SQLValueField="IconName" additionalWhere="" SQLDisplayField="IconName" required requiredmessage="You must select a color">
  <template >
    <div class="icon-box-s" >
      <div class="icon-margin" <
        <i  class="{{CssClass}} icon-lg icon-zoom" ></i >
      </div >
      <div >{{IconName}}</div >
    </div >
  </template >
</flx-dbcombo>
```

## DB Multi Select

![](../docs_assets/images/Controls/DBMulti.PNG "DBMultiSelect")

```html
<flx-multicombo ObjectName="sysObject" additionalWhere=""  PlaceHolder="Select icon" iconclass="flx-icon icon-icons" ViewName="iconsView" SQLValueField="IconName" SQLDisplayField="IconName" required requiredmessage="You must enter a valid email">
  <template >
    <div ><i class="{{CssClass}} icon-lg icon-margin-right" ></i >{{IconName}}</div >
  </template >
</flx-multicombo>
```

## Multiple Select

![](../docs_assets/images/Controls/MultiSelect.PNG "MultiSelect")

```html
<flx-combo name="m-1"  multiple separator=";" required requiredmessage="You must enter a valid text" value="Amsterdam;Baltimore" >
  <option >Amsterdam<option>
  <option >Atlanta<option>
  <option >Baltimore<option>
</flx-combo>
```

## Tags

![](../docs_assets/images/Controls/Tags.PNG "Tags")

```html
<flx-tag name="tag-1"  separator=";" required requiredmessage="You must enter a valid text" value="Framework;Flexygo;Freeware" ></flx-tag>
```

```html
<flx-tag name="tag-2"  separator=";" required requiredmessage="You must enter a valid text" value="good;bad" >
  <option >good<option>
  <option >bad<option>
  <option >ugly<option>
</flx-tag>
```

```html
<flx-tag name="tag-3"  class="size-l"  iconclass="flx-icon icon-tag"  separator=";" required requiredmessage="You must enter a valid text" value="Framework;Flexygo;Freeware" ></flx-tag>
```

## Input States

![](../docs_assets/images/Controls/InputStates.PNG "Input States")

```html
<flx-text type="text" iconclass="flx-icon icon-warning" name="warning" placeholder=".has-warning" required requiredmessage="You must enter a text"></flx-text>
```

```html
<flx-text type="text" iconclass="flx-icon icon-close" name="error" placeholder=".has-error" required requiredmessage="You must enter a valid text"></flx-text>
```

```html
<flx-text type="text" iconclass="flx-icon icon-accepted" name="success" placeholder=".has-success" required requiredmessage="You must enter a valid text"></flx-text>
```

## Input sizes

![](../docs_assets/images/Controls/InputSizes.PNG "Input Sizes")


```html
<flx-text class="size-xs" type="text" name="mytext" placeholder=".size-xs" required requiredmessage="You must enter a valid text"></flx-text>

<flx-text class="size-s" type="text" name="mytext" placeholder=".size-s" required requiredmessage="You must enter a valid text"></flx-text>

<flx-text type="text" name="mytext" placeholder=".size-ms (Default input)" required requiredmessage="You must enter a valid text"></flx-text>

<flx-text class="size-l" type="text" name="mytext" placeholder=".size-l" required requiredmessage="You must enter a valid text"></flx-text>
```

```html
<flx-text type="tel"class="size-xs has-error" iconclass="flx-icon icon-phone" name="telephone" placeholder=".size-xs has-error" required requiredmessage="You must enter a telphone"></flx-text>

<flx-text type="email"class="size-s has-warning" iconclass="flx-icon icon-web" name="email" placeholder=".size-s .has-warning" required requiredmessage="You must enter a valid email"></flx-text>

<flx-text type="url"class="size-m has-success" iconclass="flx-icon icon-internet" name="url" placeholder=".size-m .has-success" required requiredmessage="You must enter a valid Url"></flx-text>

<flx-text type="color"class="size-l" iconclass="flx-icon icon-custom" name="color" placeholder=".size-l" required requiredmessage="You must select a color"></flx-text>
```
## Select sizes

![](../docs_assets/images/Controls/SelectSizes.PNG "Select Sizes")

```html
<flx-combo class="size-xs has-warning" iconclass="flx-icon icon-web" name="select-s" required requiredmessage="You must enter a valid text">
  <option >Amsterdam<option>
  <option >Atlanta<option>
  <option >Baltimore<option>
</flx-combo>

<flx-combo class="size-s has-error" iconclass="flx-icon icon-web" name="select-s" required requiredmessage="You must enter a valid text">
  <option >Amsterdam<option>
  <option >Atlanta<option>
  <option >Baltimore<option>
</flx-combo>

<flx-combo class="size-m " iconclass="flx-icon icon-web" name="select-s" required requiredmessage="You must enter a valid text">
  <option >Amsterdam<option>
  <option >Atlanta<option>
  <option >Baltimore<option>
</flx-combo>

<flx-combo class="size-l has-success" iconclass="flx-icon icon-web" name="select-s" required requiredmessage="You must enter a valid text">
  <option >Amsterdam<option>
  <option >Atlanta<option>
  <option >Baltimore<option>
</flx-combo>
```

```html
<flx-dbcombo class="item-float size-xs has-warning" iconclass="flx-icon icon-web" ObjectName="sysObject"  PlaceHolder=".item-float .size-xs .has-warning" iconclass="flx-icon icon-object" ViewName="iconsView" SQLValueField="IconName" SQLDisplayField="IconName" required requiredmessage="You must enter a telphone"></flx-dbcombo>

  <flx-dbcombo class="item-float size-s has-error" iconclass="flx-icon icon-web" ObjectName="sysObject"  PlaceHolder=".item-float .size-s .has-error" iconclass="flx-icon icon-object" ViewName="iconsView" SQLValueField="IconName" SQLDisplayField="IconName" required requiredmessage="You must enter a valid email">
    <template >
      <div><i  class="{{CssClass}} icon-lg icon-margin-right" ></i >{{IconName}}</div >
    </template >
  </flx-dbcombo>

  <flx-dbcombo class="size-m " iconclass="flx-icon icon-web" class="item-float" ObjectName="sysObject"  PlaceHolder=".item-float .size-m " iconclass="flx-icon icon-objectt" ViewName="iconsView" SQLValueField="IconName" SQLDisplayField="IconName" required requiredmessage="You must enter a valid Url">
    <template >
      <i  class="txt-outstanding {{CssClass}} icon-2x icon-margin"  title="{{IconName}}" ></i >
    </template >
  </flx-dbcombo>

  <flx-dbcombo class="item-float size-l has-success" iconclass="flx-icon icon-web" class="item-float" ObjectName="sysObject"  PlaceHolder=".size-l .has-success" iconclass="flx-icon icon-object" ViewName="iconsView" SQLValueField="IconName" SQLDisplayField="IconName" required requiredmessage="You must select a color">
    <template >
      <div class="icon-box-s" >
    <div class="icon-margin" <
      <i class="{{CssClass}} icon-lg icon-zoom" ></i >
    </div >
  <div>{{IconName}}</div >
  </div>
  </template >
</flx-dbcombo>
```

## Append buttons to controls sizes

![](../docs_assets/images/Controls/AppendButtons.PNG "Append buttons to controls sizes")

```html
<flx-text class="size-xs" type="text" HelpId="DD80AE68-552A-4E39-A081-1C13F0F939EF"  name="mytext" placeholder=".size-xs" required requiredmessage="You must enter a valid text"></flx-text>

<flx-text class="size-s" type="text"  HelpId="DD80AE68-552A-4E39-A081-1C13F0F939EF" name="mytext" placeholder=".size-s" required requiredmessage="You must enter a valid text"></flx-text>

<flx-text type="text"  HelpId="DD80AE68-552A-4E39-A081-1C13F0F939EF" name="mytext" placeholder=".size-ms (Default input)" required requiredmessage="You must enter a valid text"></flx-text>

<flx-text class="size-l" type="text"  HelpId="DD80AE68-552A-4E39-A081-1C13F0F939EF" name="mytext" placeholder=".size-l" required requiredmessage="You must enter a valid text"></flx-text>
```

```html
<flx-combo name="select-1"  class="size-xs " HelpId="DD80AE68-552A-4E39-A081-1C13F0F939EF" required requiredmessage="You must enter a valid text">
  <option> Amsterdam <option>
  <option> Atlanta <option>
  <option> Baltimore <option>
</flx-combo>

<flx-dbcombo class="item-float size-s has-error" HelpId="DD80AE68-552A-4E39-A081-1C13F0F939EF"  iconclass="flx-icon icon-web" ObjectName="sysObject"  PlaceHolder=".item-float .size-s .has-error" iconclass="flx-icon icon-object" ViewName="iconsView" SQLValueField="IconName" SQLDisplayField="IconName" required requiredmessage="You must enter a valid email">
  <template >
	<div ><i  class="{{CssClass}} icon-lg icon-margin-right" ></i >{{IconName}}</div >
  </template >
</flx-dbcombo>

<flx-text  type="email" class="size-m has-warning" HelpId="DD80AE68-552A-4E39-A081-1C13F0F939EF"  iconclass="flx-icon icon-web" name="email" placeholder=".size-s .has-warning" required requiredmessage="You must enter a valid email"></flx-text>

<flx-textarea  placeholder="flx textarea" class="size-l" HelpId="DD80AE68-552A-4E39-A081-1C13F0F939EF"  iconclass="flx-icon icon-custom" name="color" placeholder=".size-l" required requiredmessage="You must select a color"></flx-textarea>
```

## HTML Editor

![](../docs_assets/images/Controls/HTMLEditor.PNG "HTML Editor")

HTML Editor module use the flx-htmledit web component. You can add your HTML Editor by referencing HTML Editor module.

```html
<flx-htmledit></flx-htmledit>
```

## Image

![](../docs_assets/images/Controls/Image.PNG "Image")

```html
<flx-image TypeMode="file" rootpath="~/path/"></flx-image>
	<flx-image TypeMode="base64"></flx-image>

	<flx-image ........... defaultvalue="pathValue/base64Value"></flx-image>
	<flx-image ........... value="firstValue">
</flx-image>
```

## Upload

![](../docs_assets/images/Controls/Upload.PNG "Upload")

```html
<flx-upload Type="file" rootpath="~/path/"></flx-upload>
  <flx-upload Type="base64"></flx-upload>

  <flx-upload ........... value="pathValue/base64Value">
</flx-upload>
```

## Custom control dependencies

Using dependencies for changing type of control of dependent property. You can use dependencies between properties to change the control type of the dependent property. Before creating the dependency you must create one or more custom controls that are the ones that you will assign to the dependent property.

* **Set custom control based on parent property values**: You will first choose the values for which the dependent property will change and in the combo choose the corresponding custom control.

![](../docs_assets/images/Controls/CustomContDepValues.png "Input Sizes")

* **Set the custom control via sql statement**: In this case, it will be the sql statement that will establish the custom control of the dependent property. The sql statement must return the name of the custom control.

![](../docs_assets/images/Controls/CustomContDepSelect.png "Input Sizes")