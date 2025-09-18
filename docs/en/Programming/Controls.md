# Form controls

[Click here](javascript:void(0);) to show sample code with the examples bellow.

### Default Form Elements

Text

Password

Textarea

Select

Amsterdam Atlanta Baltimore Boston Buenos Aires Calgary

Example

```
<flx-text type="text" name="mytext" placeholder="Text Field" required requiredmessage="You must enter a valid text"></flx-text>
```

```
<flx-text type="password" name="password" placeholder="Password" required requiredmessage="You must enter a valid password"></flx-text>
```

```
<flx-textarea name="area" placeholder="Text area" required requiredmessage="You must enter a valid text"></flx-textarea>
```

```
<flx-combo name="select-1" required requiredmessage="You must enter a valid text">    <option >Amsterdam<option>    <option >Atlanta<option>    <option >Baltimore<option>  </flx-combo>
```

### Numbers an Dates

Date

Date and Time

Time

Number

Decimal

Example

```
<flx-text type="date" name="date" placeholder="Date Field" required requiredmessage="You must enter a valid date"></flx-text>
```

```
<flx-text type="datetime-local" name="datetime" placeholder="Date Time filed" required requiredmessage="You must enter a valid date and time"></flx-text>
```

```
<flx-text type="time" name="time" placeholder="Time field" required requiredmessage="You must enter a valid time"></flx-text>
```

```
<flx-text type="number" name="number" placeholder="number" required requiredmessage="You must enter a valid number"></flx-text>
```

```
<flx-text type="number"decimalplaces="2" name="decimal" placeholder="decimal number" required requiredmessage="You must enter a valid decimal number"></flx-text>
```

### Special fields

Telephone

Email

Url

Color

Coordinates

Specify two fields as Latitude|Longitude separated with a pipe on tag property, coordinates control will fill in the specified properties with latitude and longitude data.

White Board

The control will save the image generated in the field in b64 format

Example

```
<flx-text type="tel" iconclass="flx-icon icon-phone" name="telephone" placeholder="Telephone Number" required requiredmessage="You must enter a telphone"></flx-text>
```

```
<flx-text type="email" iconclass="flx-icon icon-web" name="email" placeholder="Email" required requiredmessage="You must enter a valid email"></flx-text>
```

```
<flx-text type="url" iconclass="flx-icon icon-internet" name="url" placeholder="Url Address" required requiredmessage="You must enter a valid Url"></flx-text>
```

```
<flx-text type="color" iconclass="flx-icon icon-custom" name="color" placeholder="Select a color" required requiredmessage="You must select a color"></flx-text>
```

```
<flx-text type="map"name="coordinates" placeholder="Coordinates" ></flx-text>
```

```
<flx-whiteboard property="whiteboard" style="height:100px" name="white board" placeholder="White Board" ></flx-whiteboard>
```

### Code Editors

Code editor

Use the flx-code editor in any of these three established types htmlcode, javacode or sqlcode. The flx-code ajusts to div size containing it.

Example

```
<flx-code type="htmlcode"></flx-code>
```

### Checkbox & Radio buttons

Checkbox  

x-small

small

medium

large

Checkbox Inline  

Checkbox 1

Checkbox 2

Checkbox 3

Example

```
<label class="control-label txt-outstanding" >Checkbox 1</label><br>    <flx-check name="check1" class="txt-outstanding" checked></flx-check>    <label class="control-label txt-danger" >Checkbox 2</label><br>    <flx-check name="check2" class="txt-danger" checked></flx-check>    <label class="control-label txt-warning" >Checkbox 3</label><br>  <flx-check name="check3" class="txt-warning" checked></flx-check>
```

```
<label class="control-label " >Checkbox 1</label>    <flx-check name="check1" checked></flx-check>    <label class="control-label " >Checkbox 2</label>    <flx-check name="check2" checked></flx-check>    <label class="control-label " >Checkbox 3</label>  <flx-check name="check3" checked></flx-check>
```

Radio  

Option 1 Option 2 Option 3

Radio Inline  

Option 1 Option 2 Option 3

Example

```
<flx-radio name="radio1" class="txt-outstanding" >    <option value = "1"> Option1 <option>    <option value = "2"> Option1 <option>    <option value = "3"> Option1 <option>  </flx-radio>
```

```
<flx-radio name="radio2" class="txt-info inline" >    <option value =  "1" >Option1<option>    <option value =  "2" >Option1<option>    <option value =  "3" >Option1<option>  </flx-radio>
```

Multi Select Radio  

Option 1 Option 2 Option 3

Multi Select Radio Inline  

Option 1 Option 2 Option 3

Example

```
<flx-radio name="radio1" class="txt-warning" multiple separator=";" value="1;2">    <option value = "1"> Option1 <option>    <option value = "2"> Option1 <option>    <option value = "3"> Option1 <option>  </flx-radio>
```

```
<flx-radio name="radio1" class="txt-danger inline" multiple separator=";" value="option 1;option 2">    <option> Option1 <option>    <option> Option1 <option>    <option> Option1 <option>  </flx-radio>
```

### Nullable Checkbox (Three State)

Checkbox With Null Value  

Checkbox Nullable

Example

```
<label class="control-label txt-outstanding" >Nullable Checkbox</label><br>  <flx-check name="check1" allowNull class="txt-outstanding" checked></flx-check>
```

### Switches

Switch  

Switch xs

Switch s

Switch m

Switch L

Switch Inline  

Switch xs

Switch s

Switch m

Switch L

Example

```
<flx-switch></flx-switch>  <flx-switch checked ></flx-switch>  <flx-switch class = "switch-danger" ></flx-switch>  <flx-switch checked class = "switch-danger" ></flx-switch>
```

```
<flx-switch  class = "inline" ></flx-switch>  <flx-switch class = "inline"  checked ></flx-switch>  <flx-switch class = "inline switch-danger" ></flx-switch>  <flx-switch checked class = "inline switch-danger" ></flx-switch>
```

### DB Select

DB Select

DB Template Select 1

DB Template Select 2

DB Template Select 3

Example

```
<flx-dbcombo ObjectName="sysObject"  PlaceHolder="Select icon" iconclass="flx-icon icon-object" ViewName="iconsView" SQLValueField="IconName" SQLDisplayField="IconName" additionalWhere="" required requiredmessage="You must enter a telphone"></flx-dbcombo>
```

```
<flx-dbcombo ObjectName="sysObject"  PlaceHolder="Select icon" iconclass="flx-icon icon-object" ViewName="iconsView" SQLValueField="IconName" SQLDisplayField="IconName" additionalWhere="" required requiredmessage="You must enter a valid email">    <template >      <div ><i  class="{{CssClass}} icon-lg icon-margin-right" ></i >{{IconName}}</div >    </template >  </flx-dbcombo>
```

```
<flx-dbcombo class="item-float" ObjectName="sysObject"  PlaceHolder="Uses .item-float" iconclass="flx-icon icon-objectt" ViewName="iconsView" SQLValueField="IconName" additionalWhere="" SQLDisplayField="IconName" required requiredmessage="You must enter a valid Url">    <template >      <i  class="txt-outstanding {{CssClass}} icon-2x icon-margin"  title="{{IconName}}" ></i >    </template >  </flx-dbcombo>
```

```
<flx-dbcombo class="item-float" ObjectName="sysObject"  PlaceHolder="Uses .item-float" iconclass="flx-icon icon-object" ViewName="iconsView" SQLValueField="IconName" additionalWhere="" SQLDisplayField="IconName" required requiredmessage="You must select a color">    <template >      <div class="icon-box-s" >        <div class="icon-margin" <          <i  class="{{CssClass}} icon-lg icon-zoom" ></i >        </div >        <div >{{IconName}}</div >      </div >    </template >  </flx-dbcombo>
```

### DB Multi Select

DB Multi Select

Warning: when using mutiselect as object property it can not be used as filter property in grids or lists.  
Also it will only show saved values when reloaded and not value descriptions

Example

```
<flx-multicombo ObjectName="sysObject" additionalWhere=""  PlaceHolder="Select icon" iconclass="flx-icon icon-icons" ViewName="iconsView" SQLValueField="IconName" SQLDisplayField="IconName" required requiredmessage="You must enter a valid email">    <template >      <div ><i class="{{CssClass}} icon-lg icon-margin-right" ></i >{{IconName}}</div >    </template >  </flx-multicombo>
```

### Multiple Select

Multiple Select

Amsterdam Atlanta Baltimore Boston Buenos Aires Calgary

Example

```
<flx-combo name="m-1"  multiple separator=";" required requiredmessage="You must enter a valid text" value="Amsterdam;Baltimore" >    <option >Amsterdam<option>    <option >Atlanta<option>    <option >Baltimore<option>  </flx-combo>
```

**Important!**When used as property it can not be used in analisys as filter. Also when used it will only show saved values and not description values.

### Tags

Tag

Predefined Tags

good bad ugly handsome

Large Tag

Example

```
<flx-tag name="tag-1"  separator=";" required requiredmessage="You must enter a valid text" value="Framework;Flexygo;Freeware" ></flx-tag>
```

```
<flx-tag name="tag-2"  separator=";" required requiredmessage="You must enter a valid text" value="good;bad" >    <option >good<option>    <option >bad<option>    <option >ugly<option>  </flx-tag>
```

```
<flx-tag name="tag-3"  class="size-l"  iconclass="flx-icon icon-tag"  separator=";" required requiredmessage="You must enter a valid text" value="Framework;Flexygo;Freeware" ></flx-tag>
```

### Barcode

Barcode input

Example

```
<flx-tag name="tag-1"  separator=";" required requiredmessage="You must enter a valid text" value="Framework;Flexygo;Freeware" ></flx-tag>
```

```
<flx-tag name="tag-2"  separator=";" required requiredmessage="You must enter a valid text" value="good;bad" >    <option >good<option>    <option >bad<option>    <option >ugly<option>  </flx-tag>
```

```
<flx-tag name="tag-3"  class="size-l"  iconclass="flx-icon icon-tag"  separator=";" required requiredmessage="You must enter a valid text" value="Framework;Flexygo;Freeware" ></flx-tag>
```

### Input States

flx Input warning

flx Input Error

flx Input Success

Example

```
<flx-text type="text" iconclass="flx-icon icon-warning" name="warning" placeholder=".has-warning" required requiredmessage="You must enter a text"></flx-text>
```

```
<flx-text type="text" iconclass="flx-icon icon-close" name="error" placeholder=".has-error" required requiredmessage="You must enter a valid text"></flx-text>
```

```
<flx-text type="text" iconclass="flx-icon icon-accepted" name="success" placeholder=".has-success" required requiredmessage="You must enter a valid text"></flx-text>
```

### Input sizes

Extra Small Input

Extra Small Url

Small Input

Small Telephone

Medium Input

Medium Email

Large Input

Large Color

Example

```
<flx-text class="size-xs" type="text" name="mytext" placeholder=".size-xs" required requiredmessage="You must enter a valid text"></flx-text>  <flx-text class="size-s" type="text" name="mytext" placeholder=".size-s" required requiredmessage="You must enter a valid text"></flx-text>  <flx-text type="text" name="mytext" placeholder=".size-ms (Default input)" required requiredmessage="You must enter a valid text"></flx-text>  <flx-text class="size-l" type="text" name="mytext" placeholder=".size-l" required requiredmessage="You must enter a valid text"></flx-text>
```

Example

```
<flx-text type="tel"class="size-xs has-error" iconclass="flx-icon icon-phone" name="telephone" placeholder=".size-xs has-error" required requiredmessage="You must enter a telphone"></flx-text>  <flx-text type="email"class="size-s has-warning" iconclass="flx-icon icon-web" name="email" placeholder=".size-s .has-warning" required requiredmessage="You must enter a valid email"></flx-text>  <flx-text type="url"class="size-m has-success" iconclass="flx-icon icon-internet" name="url" placeholder=".size-m .has-success" required requiredmessage="You must enter a valid Url"></flx-text>  <flx-text type="color"class="size-l" iconclass="flx-icon icon-custom" name="color" placeholder=".size-l" required requiredmessage="You must select a color"></flx-text>
```