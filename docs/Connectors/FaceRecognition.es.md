# Reconocimiento Facial

El reconocimiento facial es una forma de identificar o confirmar la identidad de una persona mediante su rostro. Estos sistemas pueden utilizarse para identificar personas en fotografías. **flexygo** incorpora la capacidad de identificar caras conocidas en una imagen y devolver el objeto relacionado.

## Configuración

Para habilitar esta función, debes **descargar los modelos entrenados** desde  
https://nuget.flexygo.com/setup/models.zip  
y extraerlos en tu directorio **flexygo**, por ejemplo:  
_~/custom/models/_

Ten en cuenta que el reconocimiento facial requiere un **servidor de 64 bits**.
{: .flx-warning-card }

1.  <flx-navbutton class="link" type="openpage" pagetypeid="list" objectname="sysObjectImageRecognitionSettings">Abrir configuración de reconocimiento</flx-navbutton> y crear una nueva relación de objeto.

    ![Face Recognition settings](/assets/images/Recognition/Recognition_1.png "Image 1. Face Recognition settings")

2.  Tras configurarlo, aparecerá una nueva colección relacionada con tu objeto, con un gestor de imágenes.

    ![Face Recognition settings](/assets/images/Recognition/Recognition_2.png "Image 2. Face Recognition settings")

3.  Sube una o varias fotos con el rostro claramente visible para cada objeto.

    ![Face Recognition example](/assets/images/Recognition/Recognition_3.png "Image 3. Face Recognition example")

4.  Después podrás probarlo usando el proceso de ejemplo **Find Faces** o programar tu propia  
    <fh-modal class="link" modal_id="fhmodal_own_code" modal_title="Insert object function">función personalizada</fh-modal>:

    ![Face Recognition example](/assets/images/Recognition/Recognition_6.png "Image 4. Face Recognition example")

    ![Face Recognition example](/assets/images/Recognition/Recognition_4.png "Image 5. Face Recognition example")

    ![Face Recognition example](/assets/images/Recognition/Recognition_5.png "Image 6. Face Recognition example")

```js { #fhmodal_own_code }
function showFaces(file, objectname, tolerance, e): {

    let p = new flexygo.Process('FindFaces');
    let params = [];
    params.push({
        Key: 'File',
        Value: file
    });
    params.push({
        Key: 'ObjectName',
        Value: objectname
    });
    params.push({
        Key: 'Tolerance',
        Value: tolerance
    });
    p.run(params, (r) => {
        let histObj = new flexygo.nav.FlexygoHistory();
        histObj.targetid = 'popup';
        let modal = flexygo.targets.createContainer(histObj, true, e);
        modal.empty();
        modal.closest('.ui-dialog').find('.ui-dialog-title').html(r.Data.Faces.length + ' faces found.');


        let canvas = $('<canvas></canvas>')[0];

        let context = canvas.getContext('2d');

        var img = new Image;
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            context.drawImage(img, 0, 0);

            let colorIndex = 0;
            r.Data.Faces.forEach(function(face) {

                if (colorIndex >= flexygo.utils.colors.length) {
                    colorIndex = 0
                }

                context.strokeStyle = flexygo.utils.hexToRgbA(flexygo.utils.colors[colorIndex], '1');
                context.lineWidth = 3;
                context.strokeRect(face.Left, face.Top, face.Right - face.Left, face.Bottom - face.Top)
                context.fillStyle = flexygo.utils.hexToRgbA(flexygo.utils.colors[colorIndex], '0.6');
                context.fillRect(face.Left, face.Top, face.Right - face.Left, face.Bottom - face.Top);

                let faceItm = $('<div style="float:left;margin-right:10px;"/>');
                faceItm.css('border', 'solid 2px ' + flexygo.utils.hexToRgbA(flexygo.utils.colors[colorIndex], '1'));
                faceItm.css('background-color', flexygo.utils.hexToRgbA(flexygo.utils.colors[colorIndex], '0.6'));
                faceItm.data(face);
                if (face.MostPosibleObject) {
                    faceItm.html(face.MostPosibleObject.ObjectName + ' ' + face.MostPosibleObject.ObjectId + '<br/> Dist: ' + face.MostPosibleObject.Distance)
                } else {
                    faceItm.html('Unknown');
                }
                modal.append(faceItm);

                colorIndex += 1

            });

            let imgH = $('<img style="width:100%;margin-top:10px"/>');
            imgH.attr('src', canvas.toDataURL())
            modal.append(imgH);

        };
        img.src = flexygo.utils.resolveUrl(file);

    });

}
```