# API Web

Flexygo API Web es una interfaz de programación de aplicaciones para acceder a objetos y procesos autorizados externamente desde el panel de control ubicado en Área de Trabajo de Administrador > Seguridad > WebAPI o simplemente haz clic aquí. 

Esta API sigue la [Iniciativa OpenAPI](https://www.openapis.org/) y se pueden generar SDK con [Swagger Codegen](https://swagger.io/) utilizando su actual [Definición de Esquema](./webapi). 

Es **altamente** recomendado utilizar **HTTPS**.
{: .flx-warning-card }

## Autenticación OAuth

### Token de acceso

El Token de Acceso es una credencial que puede ser utilizada por una aplicación para acceder a una API. Debes ser transmitido en un encabezado de Autorización HTTP a la API para permitir que los usuarios externos llamen a los métodos de la API. 

Puedes solicitar un token de acceso utilizando dos formas: 

#### Enviando credenciales implícitas de usuario

#### Solicitud:
```js
let username='myuser';
let pass='mypass';
$.ajax({
    type: 'POST',
    url: './token',
    data: {grant_type: 'password', username: username, password: pass},
    success: function (response) {alert('Success!')},
    error: function (error) { alert('Fail!')}
});
```

#### Respuesta
```js
HTTP/1.1 200 OK
Content-Type: application/json
{
    "access_token":"ALLgqj...rAxRvWAkjsQ",
    "token_type":"bearer",
    "expires_in":29,
    "refresh_token":"68b....fc97a1"
}
```

##### Enviando token de credenciales base 64 en el encabezado de autorización

#### Solicitud
```js
let username='myuser';
let pass='mypass';  
let b64Token = flexygo.history.Base64.encode(username+':'+pass);
$.ajax({
    type: 'POST',
    url: './token',
    data: {grant_type: 'password'},
    success: function (response) {alert('Success!')},
    error: function (error) { alert('Fail!')},
    beforeSend: function (xhr, settings) { xhr.setRequestHeader('Authorization', 'Basic '+b64Token); }
);
```
#### Respuesta
```js
HTTP/1.1 200 OK
Content-Type: application/json
{
    "access_token":"ALLgqj...rAxRvWAkjsQ",
    "token_type":"bearer",
    "expires_in":29,
    "refresh_token":"68b....fc97a1"
}
```

### Token de refresco

Un Token de Refresco es un tipo especial de token que contiene la información necesaria para obtener un nuevo Token de Acceso. Puede ser usado para obtener un nuevo Token de Acceso para evitar la expiración sin enviar las credenciales del usuario nuevamente. 

#### Solicitud
```js
let refreshToken='68b....fcasd7a1'
let accessToken='xxaasddfgqj...rAasadjsQ';
$.ajax({
    type: 'POST',
    url: './token',
    data: {grant_type: 'refresh_token',refresh_token: refreshToken},
    success: function (response) {alert('Success!')},
    error: function (error) { alert('Fail!')},
    beforeSend: function (xhr, settings) { xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken); }
);
```
#### Respuesta
```js
HTTP/1.1 200 OK
Content-Type: application/json
{
    "access_token":"Aadfasdfgqj...rAasdfjsQ",
    "token_type":"bearer",
    "expires_in":29,
    "refresh_token":"68b....fc97a1"
}
```

## Métodos de la API Web

| Descripción | Método | Url | Parámetros de Url | Datos | Código |
|-------------|--------|-----|------------|------|------|
| Listar colección | GET | webapi/list/{ObjectName} | ?filter={filter?}&page={page?}&pageSize={pageSize?}&orderBy={orderBy?} | | <fh-modal class="link" modal_id="fhmodal_list" modal_title="List collection">&lt;/&gt;</fh-modal> |
| Listar colección utilizando vista | GET | webapi/list/{ObjectName}/{ViewName} | ?filter={filter?}&page={page?}&pageSize={pageSize?}&orderBy={orderBy?} | | <fh-modal class="link" modal_id="fhmodal_list_view" modal_title="List collection using view">&lt;/&gt;</fh-modal> |
| Obtener objeto por id | GET | webapi/object/{ObjectName}/{Id} | | | <fh-modal class="link" modal_id="fhmodal_object" modal_title="Get object by id">&lt;/&gt;</fh-modal> |
| Obtener objeto por filtro | GET | webapi/object/{ObjectName} | ?filter={filter} | | <fh-modal class="link" modal_id="fhmodal_object_filter" modal_title="Get object by filter">&lt;/&gt;</fh-modal> |
| Insertar Objeto | POST | webapi/object/{ObjectName} | | data:JsonObject | <fh-modal class="link" modal_id="fhmodal_insert" modal_title="Insert Object">&lt;/&gt;</fh-modal> |
| Actualizar objeto por id | PUT | webapi/object/{ObjectName}/{Id} | | data:JsonObject | <fh-modal class="link" modal_id="fhmodal_update" modal_title="Update object by id">&lt;/&gt;</fh-modal> |
| Actualizar objeto por filtro | PUT | webapi/object/{ObjectName} | ?filter={filter?} | data:JsonObject | <fh-modal class="link" modal_id="fhmodal_update_filter" modal_title="Update object by filter">&lt;/&gt;</fh-modal> |
| Eliminar objeto por id | DELETE | webapi/object/{ObjectName}/{Id} | | | <fh-modal class="link" modal_id="fhmodal_delete" modal_title="Delete object by id">&lt;/&gt;</fh-modal> |
| Eliminar objeto por filtro | DELETE | webapi/object/{ObjectName} | ?filter={filter?} | | <fh-modal class="link" modal_id="fhmodal_delete_filter" modal_title="Delete object by filter">&lt;/&gt;</fh-modal> |
| Ejecutar proceso con objeto por id | PUT | webapi/exec/{ProcessName}/{ObjectName}/{Id} | | data:JsonObject | <fh-modal class="link" modal_id="fhmodal_process" modal_title="Execute process with object by id">&lt;/&gt;</fh-modal> |
| Ejecutar proceso con objeto por filtro | PUT | webapi/exec/{ProcessName}/{ObjectName} | ?filter={filter?} | data:JsonObject | <fh-modal class="link" modal_id="fhmodal_process_filter" modal_title="Execute process with object by filter">&lt;/&gt;</fh-modal> |
| Ejecutar proceso sin objeto | PUT | webapi/exec/{ProcessName} | | data:JsonObject | <fh-modal class="link" modal_id="fhmodal_process_no_object" modal_title="Execute process without object">&lt;/&gt;</fh-modal> |

<div id="fhmodal_list" markdown="1">

**Petición:**

```js
let objectName='sysObject';
let filter='ObjectName=\'AHORA_Documento\'';
let page=0;
let pageSize=500;
let orderBy='IsCollection';

let accessToken='xxaasddfgqj...rAasadjsQ';
let apiUrl='./webapi/list/' + objectName;

apiUrl += '?filter=' + encodeURIComponent(filter); 
apiUrl += '&page=' + encodeURIComponent(page); 
apiUrl += '&pageSize=' + encodeURIComponent(pageSize); 
apiUrl += '&orderBy=' + encodeURIComponent(orderBy); 

$.ajax({
type: 'GET',
url: apiUrl,
data: null,
crossDomain: true,
contentType: 'application/json; charset=utf-8',
success: function (response) { alert('Success'); console.log(response); },
error: function (error) { alert('Fail'); console.log(error); },
beforeSend: function (xhr, settings) { xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken); }
});
```

**Respuesta:**

```json
HTTP/1.1 200 OK
Content-Type: application/json
[
{"Property1":"Value1","PropertyN":"ValueN"},
{"Property1":"Value1","PropertyN":"ValueN"}
]
```
</div>

<div id="fhmodal_list_view" markdown="1">

**Petición:**

```js
let objectName='sysObject';
let viewName = 'sysCollections'
let filter='ObjectName=\'AHORA_Documento\'';
let page=0;
let pageSize=500;
let orderBy='IsCollection';

let accessToken='xxaasddfgqj...rAasadjsQ';
let apiUrl='./webapi/list/' + objectName + '/' + viewName;

apiUrl += '?filter=' + encodeURIComponent(filter); 
apiUrl += '&page=' + encodeURIComponent(page); 
apiUrl += '&pageSize=' + encodeURIComponent(pageSize); 
apiUrl += '&orderBy=' + encodeURIComponent(orderBy); 

$.ajax({
type: 'GET',
url: apiUrl,
data: null,
crossDomain: true,
contentType: 'application/json; charset=utf-8',
success: function (response) { alert('Success'); console.log(response); },
error: function (error) { alert('Fail'); console.log(error); },
beforeSend: function (xhr, settings) { xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken); }
});
```

**Respuesta:**

```json
HTTP/1.1 200 OK
  Content-Type: application/json
  [
    {"Property1":"Value1","PropertyN":"ValueN"},
    {"Property1":"Value1","PropertyN":"ValueN"}
  ]
```
</div>

<div id="fhmodal_object" markdown="1">

**Petición:**

```js
let objectName='sysTmpTest';
let objectId=0

let accessToken='xxaasddfgqj...rAasadjsQ';
let apiUrl='./webapi/object/' + objectName + '/' + objectId;

$.ajax({
type: 'GET',
url: apiUrl,
data: null,
crossDomain: true,
contentType: 'application/json; charset=utf-8',
success: function (response) { alert('Success'); console.log(response); },
error: function (error) { alert('Fail'); console.log(error); },
beforeSend: function (xhr, settings) { xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken); }
});
```

**Respuesta:**

```json
HTTP/1.1 200 OK
Content-Type: application/json
{  
"Properties":{  
    "Property1":{  
        "Text":"",
        "Value":null,
        "Label":"Property1"
    },
    "PropertyN":{  
        "Text":"",
        "Value":null,
        "Label":"PropertyN"
    }
},
"ObjectName":null,
"ObjectWhere":null,
"JavaScript":null,
"Message":null
}
```
</div>

<div id="fhmodal_object_filter" markdown="1">

**Petición:**

```js
let objectName='sysTmpTest';
let filter='TestId=0';

let accessToken='xxaasddfgqj...rAasadjsQ';
let apiUrl='./webapi/object/' + objectName;
apiUrl += '?filter=' + encodeURIComponent(filter); 

$.ajax({
    type: 'GET',
    url: apiUrl,
    data: null,
    crossDomain: true,
    contentType: 'application/json; charset=utf-8',
    success: function (response) { alert('Success'); console.log(response); },
    error: function (error) { alert('Fail'); console.log(error); },
    beforeSend: function (xhr, settings) { xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken); }
});
```

**Respuesta:**

```json
HTTP/1.1 200 OK
Content-Type: application/json
{  
    "Properties":{  
        "Property1":{  
            "Text":"",
            "Value":null,
            "Label":"Property1"
        },
        "PropertyN":{  
            "Text":"",
            "Value":null,
            "Label":"PropertyN"
        }
    },
    "ObjectName":null,
    "ObjectWhere":null,
    "JavaScript":null,
    "Message":null
}
```
</div>


<div id="fhmodal_insert" markdown="1">

**Petición:**

```js
let objectName='sysTmpTest';  
let properties={'TestId': 1,'Descrip': 'Prueba'}

let accessToken='xxaasddfgqj...rAasadjsQ';
let apiUrl='./webapi/object/' + objectName;

$.ajax({
    type: 'POST',
    url: apiUrl,
    data: JSON.stringify(properties),
    crossDomain: true,
    contentType: 'application/json; charset=utf-8',
    success: function (response) { alert('Success'); console.log(response); },
    error: function (error) { alert('Fail'); console.log(error); },
    beforeSend: function (xhr, settings) { xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken); }
});
```

**Respuesta:**

```json
HTTP/1.1 200 OK
Content-Type: application/json
{  
    "Properties":{  
        "Property1":{  
            "Text":"",
            "Value":null,
            "Label":"Property1"
        },
        "PropertyN":{  
            "Text":"",
            "Value":null,
            "Label":"PropertyN"
        }
    },
    "ObjectName":"sysTmpTest",
    "ObjectWhere":"[_Test].[TestId] = 1",
    "JavaScript":null,
    "Message":null
}
```
</div>


<div id="fhmodal_update" markdown="1">

**Petición:**

```js
let objectName='sysTmpTest';  
let objectId=1
let properties={'Descrip':'Prueba actualizada id'}

let accessToken='xxaasddfgqj...rAasadjsQ';
let apiUrl='./webapi/object/' + objectName + '/' + objectId;

$.ajax({
    type: 'PUT',
    url: apiUrl,
    data: JSON.stringify(properties),
    crossDomain: true,
    contentType: 'application/json; charset=utf-8',
    success: function (response) { alert('Success'); console.log(response); },
    error: function (error) { alert('Fail'); console.log(error); },
    beforeSend: function (xhr, settings) { xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken); }
});
```

**Respuesta:**

```json
HTTP/1.1 200 OK
Content-Type: application/json
{  
    "Properties":{  
        "Property1":{  
            "Text":"",
            "Value":null,
            "Label":"Property1"
        },
        "PropertyN":{  
            "Text":"",
            "Value":null,
            "Label":"PropertyN"
        }
    },
    "ObjectName":"sysTmpTest",
    "ObjectWhere":"[_Test].[TestId] = 1",
    "JavaScript":null,
    "Message":null
}
```
</div>

<div id="fhmodal_update_filter" markdown="1">

**Petición:**

```js
let objectName='sysTmpTest';  
let filter='TestId=1';
let properties={"Descrip":"Prueba actualizada filtro"}

let apiUrl='./webapi/object/' + objectName;
apiUrl += '?filter=' + encodeURIComponent(filter); 

$.ajax({
    type: 'PUT',
    url: apiUrl,
    data: JSON.stringify(properties),
    crossDomain: true,
    contentType: 'application/json; charset=utf-8',
    success: function (response) { alert('Success'); console.log(response); },
    error: function (error) { alert('Fail'); console.log(error); },
    beforeSend: function (xhr, settings) { xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken); }
});
```

**Respuesta:**

```json
HTTP/1.1 200 OK
Content-Type: application/json
{  
    "Properties":{  
        "Property1":{  
            "Text":"",
            "Value":null,
            "Label":"Property1"
        },
        "PropertyN":{  
            "Text":"",
            "Value":null,
            "Label":"PropertyN"
        }
    },
    "ObjectName":"sysTmpTest",
    "ObjectWhere":"[_Test].[TestId] = 1",
    "JavaScript":null,
    "Message":null
}
```
</div>

<div id="fhmodal_delete" markdown="1">

**Petición:**

```js
let objectName='sysTmpTest';  
let objectId=1

let apiUrl='./webapi/object/' + objectName + '/' + objectId;

$.ajax({
    type: 'DELETE',
    url: apiUrl,
    data: null,
    crossDomain: true,
    contentType: 'application/json; charset=utf-8',
    success: function (response) { alert('Success'); console.log(response); },
    error: function (error) { alert('Fail'); console.log(error); },
    beforeSend: function (xhr, settings) { xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken); }
});
```

**Respuesta:**

```json
HTTP/1.1 200 OK
Content-Type: application/json
{  
   "Properties":null,
   "ObjectName":null,
   "ObjectWhere":null,
   "JavaScript":null,
   "Message":null
}
```
</div>

<div id="fhmodal_delete_filter" markdown="1">

**Petición:**

```js
let objectName='sysTmpTest';  
let filter='TestId=1';

let apiUrl='./webapi/object/' + objectName;
apiUrl += '?filter=' + encodeURIComponent(filter); 

$.ajax({
    type: 'DELETE',
    url: apiUrl,
    data: null,
    crossDomain: true,
    contentType: 'application/json; charset=utf-8',
    success: function (response) { alert('Success'); console.log(response); },
    error: function (error) { alert('Fail'); console.log(error); },
    beforeSend: function (xhr, settings) { xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken); }
});
```

**Respuesta:**

```json
HTTP/1.1 200 OK
Content-Type: application/json
{  
   "Properties":null,
   "ObjectName":null,
   "ObjectWhere":null,
   "JavaScript":null,
   "Message":null
}
```
</div>

<div id="fhmodal_process" markdown="1">

**Petición:**

```js
let processName='MyProcess';  
let objectName='sysTmpTest';  
let objectId=1
let processParams = {"Param1":"ParamValue"}

let apiUrl='./webapi/exec/' + processName + '/' + objectName + '/' + objectId;

$.ajax({
    type: 'POST',
    url: apiUrl,
    data: JSON.stringify(processParams),
    crossDomain: true,
    contentType: 'application/json; charset=utf-8',
    success: function (response) { alert('Success'); console.log(response); },
    error: function (error) { alert('Fail'); console.log(error); },
    beforeSend: function (xhr, settings) { xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken); }
});
```

**Respuesta:**

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "Success":true,
    "SuccessMessage":"",
    "WarningMessage":"",
    "LastException":null,
    "JSCode":null,
    "JSFile":"",
    "CloseParamWindow":false,
    "Refresh":false
}
```
</div>

<div id="fhmodal_process_filter" markdown="1">

**Petición:**

```js
let processName='MyProcess';  
let objectName='sysTmpTest';  
let filter='TestId=1';
let processParams = {"Param1":"ParamValue"}

let apiUrl='./webapi/exec/' + processName + '/' + objectName;
apiUrl += '?filter=' + encodeURIComponent(filter); 

$.ajax({
    type: 'POST',
    url: apiUrl,
    data: JSON.stringify(processParams),
    crossDomain: true,
    contentType: 'application/json; charset=utf-8',
    success: function (response) { alert('Success'); console.log(response); },
    error: function (error) { alert('Fail'); console.log(error); },
    beforeSend: function (xhr, settings) { xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken); }
});
```

**Respuesta:**

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "Success":true,
    "SuccessMessage":"",
    "WarningMessage":"",
    "LastException":null,
    "JSCode":null,
    "JSFile":"",
    "CloseParamWindow":false,
    "Refresh":false
}
```
</div>

<div id="fhmodal_process_no_object" markdown="1">

**Petición:**

```js
let processName='MyProcess';  
let processParams = {"Param1":"ParamValue"}

let apiUrl='./webapi/exec/' + processName

$.ajax({
    type: 'POST',
    url: apiUrl,
    data: JSON.stringify(processParams),
    crossDomain: true,
    contentType: 'application/json; charset=utf-8',
    success: function (response) { alert('Success'); console.log(response); },
    error: function (error) { alert('Fail'); console.log(error); },
    beforeSend: function (xhr, settings) { xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken); }
});
```

**Respuesta:**

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "Success":true,
    "SuccessMessage":"",
    "WarningMessage":"",
    "LastException":null,
    "JSCode":null,
    "JSFile":"",
    "CloseParamWindow":false,
    "Refresh":false
}
```
</div>