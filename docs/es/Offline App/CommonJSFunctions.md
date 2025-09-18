App description Common JS Functions Creating App Design Environment Designing App Navigation Options Return Data Process Useful Tokens Tracking Configuration Database Debugging App/Emulator differences Offline AI

# Common Js Functions

##### Object with all app configuration

flexygo.confToken();

##### Opens smartphone gallery and returns a promise with b64 string

flexygo.camera.getGalleryPicture(myWidth = 1000, myHeight = 1000, myQuality = 50, typeCrop);

##### Opens camera and returns a promise with b64 string

flexygo.camera.getPicture(myWidth = 1000, myHeight = 1000, myQuality = 50, typeCrop);

##### Launch save function in a edit form. Returns an empty promise

flexygo.forms.save(btn);

##### Returns a a promise with current user cords

flexygo.gps.getCoords(geoTimeout = 10000, maximumAge = 10);

##### Locks app until user enable GPS settings

flexygo.gps.checkGPSPermission();

##### Throws success message

flexygo.msg.success(msg, moreInfo);

##### Throws success warning

flexygo.msg.warning(msg, moreInfo);

##### Throws danger message

flexygo.msg.danger(msg, moreInfo);

##### Throws confirm message and returns a promise if ok and reject it cancel

flexygo.msg.confirm(header,message);

##### Throws error message

flexygo.msg.showError(err);

##### Exec sql sentence and and returns an empty promise

flexygo.sql.execSQL(sentence, params = \[\]);

##### Get row count. Returns an integer promise

flexygo.sql.getCount(tablename, where, params = \[\]);

##### Get table. Returns a promise with table data

flexygo.sql.getTable(sql, params = \[\]);

##### Get a scalar value. Returns a promise with the first field of the first row. Null if nothing to return

flexygo.sql.getValue(sentence, params = \[\]);

##### Exec multiple sql sentences in one transaction and returns an empty promise

flexygo.sql.sqlBatch(arr);

##### Exec multiple sql sentences in one transaction and returns an empty promise

flexygo.sql.sqlBatch(arr);

##### Generate pdf from html string. if share is set to false returns promise with pdf base64 object

*   {string} **html** HTML string to convert to pdf.
*   {string} **\[filename\]** Pdf file name. Default: 'document.pdf'
*   {string} **\[documentsize\]** Pdf document size \[A4|A3|A2\] Default 'A4'.
*   {boolean} **\[landscape\]** Landscape or portrait. Default false.
*   {boolean} **\[share\]** If true launches share OS window, else return object with base64 encoded file.

flexygo.exports.createPDF(html,filename='document.pdf',documentsize='A4',landscape=false,share=true);

##### Sends email using defailt mail system

*   {string|array} **to** Receiver email or array with receiver emails .
*   {string} **subject** The second param for the sum.
*   {string} **body** The second param for the sum.
*   {boolean} **\[ishtml\]** The second param for the sum (defaut: true).
*   {string|array} **\[cc\]** Other receiver email or array with other receiver receiver emails.
*   {string|array} **\[bcc\]** bcc email or array with bcc emails.
*   {array} **\[attachments\]** Array with attachments. \['base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',...\]

flexygo.exports.sendMail(to,subject,body,ishtml=true,cc='',bcc='',attachments=null);

##### Scan codes using device camera. Return Promise of {format, text, cancelled}

*   {object} options  
    \* BarcodeScannerOptions object type {
    *   {boolean} preferFrontCamera?: Prefer front camera. Supported on iOS and Android.
    *   {boolean} showFlipCameraButton?: Show flip camera button. Supported on iOS and Android.
    *   {boolean} showTorchButton Show torch button. Supported on iOS and Android.
    *   {boolean} disableAnimations?: Disable animations. Supported on iOS only.
    *   {boolean} disableSuccessBeep?: Disable success beep. Supported on iOS only.
    *   {string} prompt?: Prompt text. Supported on Android only.
    *   {string} formats?: Formats separated by commas. Defaults to all formats except \`PDF\_417\` and \`RSS\_EXPANDED\`. Formats: QR\_CODE, DATA\_MATRIX, UPC\_E, UPC\_A, EAN\_8, EAN\_13, CODE\_128, CODE\_39, CODE\_93, CODABAR, ITF, RSS14, RSS\_EXPANDED, PDF\_417, AZTEC, MSI
    *   {string} Orientation?: Orientation. Supported on Android only. Can be set to \`portrait\` or \`landscape\`. Defaults to none so the user can rotate the phone and pick an orientation.
    *   {boolean} torchOn?: Launch with the torch switched on (if available). Supported on Android only.
    *   {number} resultDisplayDuration?: Display scanned text for X ms. 0 suppresses it entirely, default 1500. Supported on Android only.}

flexygo.camera.scanCode(options);

##### Get data from server without overwrite modified rows

*   {boolean} **reloadPage**
*   {string} **jscode**
*   {SyncOptions} **options**  
    *   {boolean} **partialSync**?: If true only get tables and views in syncTables and syncViews array
    *   {Array<string>} **syncTables**?: List of tables to get
    *   {Array<string>} **syncViews**: List of views to get
    *   {boolean} **partialSend**?: If true only send tables and views in syncTables and syncViews array
    *   {Array<string>} **sendTables**?: List of tables to send
    *   {Array<string>} **sendViews**?: List of views to send

flexygo.sync.syncData(reloadPage,jscode, options);

##### Get data from server overwriting modified rows

*   {boolean} **reloadPage**
*   {string} **jscode**
*   {SyncOptions} **options**  
    *   {boolean} **partialSync**?: If true only get tables and views in syncTables and syncViews array
    *   {Array<string>} **syncTables**?: List of tables to get
    *   {Array<string>} **syncViews**: List of views to get
    *   {boolean} **partialSend**?: If true only send tables and views in syncTables and syncViews array
    *   {Array<string>} **sendTables**?: List of tables to send
    *   {Array<string>} **sendViews**?: List of views to send

flexygo.sync.overwriteData(reloadPage,jscode, options);

##### Sends modified rows to server and receives data without overwriting modified rows

*   {SyncOptions} **options**  
    *   {boolean} **partialSync**?: If true only get tables and views in syncTables and syncViews array
    *   {Array<string>} **syncTables**?: List of tables to get
    *   {Array<string>} **syncViews**: List of views to get
    *   {boolean} **partialSend**?: If true only send tables and views in syncTables and syncViews array
    *   {Array<string>} **sendTables**?: List of tables to send
    *   {Array<string>} **sendViews**?: List of views to send
*   {boolean} **reloadPage**
*   {string} **jscode**

flexygo.sync.sendData(options, reloadPage, jscode);

##### Update page config from servers

flexygo.sync.syncTemplates();

##### Update page config from servers

flexygo.sync.syncTemplates();

##### Read NFC. Return promise

flexygo.nfc.read();

##### Transform NFC binary data into string

flexygo.nfc.bytesToString(bytes);

##### Shows a dialog with the apps the user is able to share

*   {object} **options**  
    *   {string} **message**?: Text that will appear on app message (not supported by Facebook or Instagram)
    *   {string} **subject**?: Subject of the email
    *   {Array} **files**?: An array with the files uris to share
    *   {string} **url**?: URL to share
    *   {string} **chooserTitle**?: Title of the share dialog
    *   {string} **appPackageName**?: App id you want to allow the share to be done with (only in Android, and if null apps will be selected automactically)
    *   {string} **iPadCoordinates**?: Coordinates were share will appear. Formatted using x,y,width,height. ex:''0,0,0,0'' (only on IOS)

flexygo.utils.share(options);

##### Schedules a notification

*   {array} **notifications**  
    *   {object} **options**  
        *   {number} **id**?: Identifier of the notification
        *   {string} **text**?: Text of the notification
        *   {string} **title**?: Title of the notification
        *   {boolean} **foreground**?: If true notification will appear on the foreground on its call
        *   {array} **attachments**?: Array of images uris that wil be shown in the notification

Para información más extendida puedes consultar [la ayuda](https://capacitorjs.com/docs/apis/local-notifications) del servicio que implementamos.

flexygo.utils.createNotification({notifications: options});

##### Schedules a notification with an event assigned

*   {object} **options**  
    *   {number} **id**?: Identifier of the notification
    *   {string} **text**?: Text of the notification
    *   {string} **title**?: Title of the notification
    *   {boolean} **foreground**?: If true notification will appear on the foreground on its call
    *   {array} **attachments**?: Array of images uris that wil be shown in the notification
*   {string} **eventType** Valid events are: add, trigger, click, clear, cancel, update, clearall and cancelall
*   {string} **callBack** Function that will be called when event is fired

flexygo.utils.createNotification(options, eventType, callBack);

##### Given an uri and a file MIME it shows a dialog where user would be able to select witch app will be used to open the file

flexygo.utils.openFile(uri, fileMIME);

##### Gets url data and transform it into a promise that will return a b64 string

flexygo.utils.urlToB64(url);

##### Gets url data and transform it into a promise that will return a blob

flexygo.utils.urlToBlob(url);

##### Gets a blob and transform it into a promise that will return a b64 string

flexygo.utils.blobToBase64(blob);

##### Gets a b64 string and transform it into blob

flexygo.utils.b64ToBlob(b64, contentType, sliceSize=512);

##### Gets a title and a b64 and saves that data into a file in an External directory. It returns the uri where it was saved

flexygo.utils.b64toTempFile(title, b64);

##### Gets MIME (type of file) from a b64 string

flexygo.utils.getB64MIME(b64);

##### Create a single prompt message

*   {string} **header**: The title of the prompt
*   {string} **message**?: The title that is gonna appear on the input
*   {string} **default\_value**?: The default value of the input
*   {boolean} **showCancelButton**?: If set to false there won't be a cancel option
*   {Function} **afterAlertPresent**?: Function that will get executed after the alert has presented

flexygo.msg.prompt(header, message, default\_value, showCancelButton, afterAlertPresent);

##### Create a single prompt message

*   {string} **header**: The title of the prompt
*   {[AlertInput](https://ionicframework.com/docs/api/alert#alertinput)\[\]} **inputs**?: An array of [AlertInputs](https://ionicframework.com/docs/api/alert#alertinput)
*   {boolean} **showCancelButton**?: If set to false there won't be a cancel option
*   {Function} **afterAlertPresent**?: Function that will get executed after the alert has presented

flexygo.msg.prompts(header, inputs, showCancelButton, afterAlertPresent);