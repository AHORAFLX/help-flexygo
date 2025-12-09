# Web API

**flexygo** Web API is an application programming interface to access externally authorized objects and processes from the control panel located at Admin Work Area > Security > WebAPI or just click here.

This API follows [OpenAPI Initiative](https://www.openapis.org/) and SDKs can be generated with [Swagger Codegen](https://swagger.io/) using your current [Schema Definition.](./webapi)

It is **highly** recommended to use **HTTPS**.
{: .flx-warning-card }

## OAuth Authentication

### Access token

The Access Token is a credential that can be used by an application to access an API. Must be transmitted in an HTTP Authorization header to the API to allow external users to call API methods.

You can request an access token using two ways:

#### Sending implicit user credentials

#### Request:
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

#### Response
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

##### Sending base 64 credentials token in authorization header

#### Request
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
#### Response
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

### Refresh token

A Refresh Token is a special kind of token that contains the information required to obtain a new Access Token. We can use it to get new Access Token to avoid expiration without sending user credentials again.

#### Request
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
#### Response
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

## Web API Methods

| Description | Method | Url | Url Params | Data | Code |
|-------------|--------|-----|------------|------|------|
| List collection | GET | webapi/list/{ObjectName} | ?filter={filter?}&page={page?}&pageSize={pageSize?}&orderBy={orderBy?} | | <fh-modal class="link" modal_id="fhmodal_list" modal_title="List collection">&lt;/&gt;</fh-modal> |
| List collection using view | GET | webapi/list/{ObjectName}/{ViewName} | ?filter={filter?}&page={page?}&pageSize={pageSize?}&orderBy={orderBy?} | | <fh-modal class="link" modal_id="fhmodal_list_view" modal_title="List collection using view">&lt;/&gt;</fh-modal> |
| Get object by id | GET | webapi/object/{ObjectName}/{Id} | | | <fh-modal class="link" modal_id="fhmodal_object" modal_title="Get object by id">&lt;/&gt;</fh-modal> |
| Get object by filter | GET | webapi/object/{ObjectName} | ?filter={filter} | | <fh-modal class="link" modal_id="fhmodal_object_filter" modal_title="Get object by filter">&lt;/&gt;</fh-modal> |
| Insert Object | POST | webapi/object/{ObjectName} | | data:JsonObject | <fh-modal class="link" modal_id="fhmodal_insert" modal_title="Insert Object">&lt;/&gt;</fh-modal> |
| Update object by id | PUT | webapi/object/{ObjectName}/{Id} | | data:JsonObject | <fh-modal class="link" modal_id="fhmodal_update" modal_title="Update object by id">&lt;/&gt;</fh-modal> |
| Update object by filter | PUT | webapi/object/{ObjectName} | ?filter={filter?} | data:JsonObject | <fh-modal class="link" modal_id="fhmodal_update_filter" modal_title="Update object by filter">&lt;/&gt;</fh-modal> |
| Delete object by id | DELETE | webapi/object/{ObjectName}/{Id} | | | <fh-modal class="link" modal_id="fhmodal_delete" modal_title="Delete object by id">&lt;/&gt;</fh-modal> |
| Delete object by filter | DELETE | webapi/object/{ObjectName} | ?filter={filter?} | | <fh-modal class="link" modal_id="fhmodal_delete_filter" modal_title="Delete object by filter">&lt;/&gt;</fh-modal> |
| Execute process with object by id | PUT | webapi/exec/{ProcessName}/{ObjectName}/{Id} | | data:JsonObject | <fh-modal class="link" modal_id="fhmodal_process" modal_title="Execute process with object by id">&lt;/&gt;</fh-modal> |
| Execute process with object by filter | PUT | webapi/exec/{ProcessName}/{ObjectName} | ?filter={filter?} | data:JsonObject | <fh-modal class="link" modal_id="fhmodal_process_filter" modal_title="Execute process with object by filter">&lt;/&gt;</fh-modal> |
| Execute process without object | PUT | webapi/exec/{ProcessName} | | data:JsonObject | <fh-modal class="link" modal_id="fhmodal_process_no_object" modal_title="Execute process without object">&lt;/&gt;</fh-modal> |

<div id="codemodal_list" markdown="1">

**Request:**

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

**Response:**

```json
HTTP/1.1 200 OK
Content-Type: application/json
[
{"Property1":"Value1","PropertyN":"ValueN"},
{"Property1":"Value1","PropertyN":"ValueN"}
]
```
</div>

<div id="codemodal_list_view" markdown="1">

**Request:**

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

**Response:**

```json
HTTP/1.1 200 OK
  Content-Type: application/json
  [
  	{"Property1":"Value1","PropertyN":"ValueN"},
	{"Property1":"Value1","PropertyN":"ValueN"}
  ]
```
</div>

<div id="codemodal_object" markdown="1">

**Request:**

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

**Response:**

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

<div id="codemodal_object_filter" markdown="1">

**Request:**

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

**Response:**

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


<div id="codemodal_insert" markdown="1">

**Request:**

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

**Response:**

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


<div id="codemodal_update" markdown="1">

**Request:**

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

**Response:**

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

<div id="codemodal_update_filter" markdown="1">

**Request:**

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

**Response:**

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

<div id="codemodal_delete" markdown="1">

**Request:**

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

**Response:**

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

<div id="codemodal_delete_filter" markdown="1">

**Request:**

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

**Response:**

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

<div id="codemodal_process" markdown="1">

**Request:**

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

**Response:**

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

<div id="codemodal_process_filter" markdown="1">

**Request:**

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

**Response:**

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

<div id="codemodal_process_no_object" markdown="1">

**Request:**

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

**Response:**

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