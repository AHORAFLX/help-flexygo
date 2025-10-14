# Face Recognition

Facial recognition is a way of identifying or confirming an individual's identity using their face. This systems can be used to identify people in photos. **flexygo** has the feature to indentify known faces in a picture and return related object.

## Settings

To enable this function, you need to [download trained models](https://nuget.flexygo.com/setup/models.zip) and extract them in your **flexygo** directory, for example: _~/custom/models/_

You have to take into account that face recognition requires a 64 bits server.

1.  Open recognition settings and configure new object relation.
    
    ![Face Recognition settings](/assets/images/Recognition/Recognition_1.png "Image 1. Face Recognition settings")
    
    Image 1. Face Recognition settings
    
2.  After that, you are able to see a new related collection to your desired object with an image manager.
    
    ![Face Recognition settings](/assets/images/Recognition/Recognition_2.png "Image 2. Face Recognition settings")
    
    Image 2. Face Recognition settings
    
3.  Upload one or more pictures with clear face related to each object.
    
    ![Face Recognition example](/assets/images/Recognition/Recognition_3.png "Image 2. Face Recognition example")
    
    Image 3. Face Recognition example
    
4.  Then you can test it using Find Faces sample process or code your own function:
    
    ![Face Recognition example](/assets/images/Recognition/Recognition_6.png "Image 4. Face Recognition example")
    
    Image 4. Face Recognition example
    
    ![Face Recognition example](/assets/images/Recognition/Recognition_4.png "Image 5. Face Recognition example")
    
    Image 5. Face Recognition example
    
    ![Face Recognition example](/assets/images/Recognition/Recognition_5.png "Image 6. Face Recognition example")
    
    Image 6. Face Recognition example
    

×

#### Insert object function

  function showFaces(file, objectname, tolerance, e): {        let p = new flexygo.Process('FindFaces');      let params = \[\];      params.push({          Key: 'File',          Value: file      });      params.push({          Key: 'ObjectName',          Value: objectname      });      params.push({          Key: 'Tolerance',          Value: tolerance      });      p.run(params, (r) => {          let histObj = new flexygo.nav.FlexygoHistory();          histObj.targetid = 'popup';          let modal = flexygo.targets.createContainer(histObj, true, e);          modal.empty();          modal.closest('.ui-dialog').find('.ui-dialog-title').html(r.Data.Faces.length + ' faces found.');              let canvas = $('<canvas></canvas>')\[0\];            let context = canvas.getContext('2d');            var img = new Image;          img.onload = function() {              canvas.width = img.width;              canvas.height = img.height;              context.drawImage(img, 0, 0);                let colorIndex = 0;              r.Data.Faces.forEach(function(face) {                    if (colorIndex >= flexygo.utils.colors.length) {                      colorIndex = 0                  }                    context.strokeStyle = flexygo.utils.hexToRgbA(flexygo.utils.colors\[colorIndex\], '1');                  context.lineWidth = 3;                  context.strokeRect(face.Left, face.Top, face.Right - face.Left, face.Bottom - face.Top)                  context.fillStyle = flexygo.utils.hexToRgbA(flexygo.utils.colors\[colorIndex\], '0.6');                  context.fillRect(face.Left, face.Top, face.Right - face.Left, face.Bottom - face.Top);                    let faceItm = $('<div style="float:left;margin-right:10px;"/>');                  faceItm.css('border', 'solid 2px ' + flexygo.utils.hexToRgbA(flexygo.utils.colors\[colorIndex\], '1'));                  faceItm.css('background-color', flexygo.utils.hexToRgbA(flexygo.utils.colors\[colorIndex\], '0.6'));                  faceItm.data(face);                  if (face.MostPosibleObject) {                      faceItm.html(face.MostPosibleObject.ObjectName + ' ' + face.MostPosibleObject.ObjectId + '<br/> Dist: ' + face.MostPosibleObject.Distance)                  } else {                      faceItm.html('Unknown');                  }                  modal.append(faceItm);                    colorIndex += 1                });                let imgH = $('<img style="width:100%;margin-top:10px"/>');              imgH.attr('src', canvas.toDataURL())              modal.append(imgH);            };          img.src = flexygo.utils.resolveUrl(file);        });    }