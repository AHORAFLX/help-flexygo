# Scales Integration

**flexygo** has integration with scales that uses standart Samsung ES protocol.

Ensure that your scale is compatible with Samsung ES protocol and set it following the manufacturer's instructions.

To add a button next to textbox field (Image 1.) just configure your edit module adding on JS After Load this instruction (Image 2.): flexygo.integrations.scales.init('PropertyName'); When user clicks on this button at first time, he will be prompted to select current scale Serial port (Image 3.). Then Chrome saves configuration, and user can read weight just clicking scale button.

![](./img/Help/Scales/2.png "Image 1. Get weight button")

Image 1. Get weight button

![](./img/Help/Scales/1.png "Image 2. Module settings")

Image 2. Module settings

![](./img/Help/Scales/3.png "Image 3. Port selector")

Image 3. Port selector