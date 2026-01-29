# Scales Integration

**Flexygo** has integration with scales that uses standart Samsung ES protocol.

## Settings

Ensure that your scale is compatible with Samsung ES protocol and set it following the manufacturer's instructions.
{: .flx-warning-card }

To add a button next to textbox field (Image 1.) just configure your edit module adding on JS After Load this instruction (Image 2.):
```javascript
flexygo.integrations.scales.init('PropertyName'); 
```

When user clicks on this button at first time, he will be prompted to select current scale Serial port (Image 3.). Then Chrome saves configuration, and user can read weight just clicking scale button.

![](../docs_assets/images/Scales/2.PNG "Image 1. Get weight button")

![](../docs_assets/images/Scales/1.PNG "Image 2. Module settings")

![](../docs_assets/images/Scales/3.PNG "Image 3. Port selector")