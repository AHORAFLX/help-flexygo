# Web API

**flexygo** Web API is an application programming interface to access externally authorized objects and processes from the control panel located at Admin Work Area > Security > WebAPI or just click here.

This API follows [OpenAPI Initiative](https://www.openapis.org/) and SDKs can be generated with [Swagger Codegen](https://swagger.io/) using your current [Schema Definition.](./webapi)

It is **highly** recommended to use **HTTPS**.

## OAuth Authentication

### Access token

The Access Token is a credential that can be used by an application to access an API. Must be transmitted in an HTTP Authorization header to the API to allow external users to call API methods.

You can request an access token using two ways:

##### Sending implicit user credentials

| Request |
| --- |
| ```<br>let username='myuser';  let pass='mypass';  $.ajax({   type: 'POST',   url: './token',   data: {grant_type: 'password', username: username, password: pass},   success: function (response) {alert('Success!')},   error: function (error) { alert('Fail!')}  });<br>``` |
| Response |
| ```<br>HTTP/1.1 200 OK  Content-Type: application/json  {   "access_token":"ALLgqj...rAxRvWAkjsQ",   "token_type":"bearer",     "expires_in":29,     "refresh_token":"68b....fc97a1"  }<br>``` |

##### Sending base 64 credentials token in authorization header

| Request |
| --- |
| ```<br>let username='myuser';  let pass='mypass';    let b64Token = flexygo.history.Base64.encode(username+':'+pass);  $.ajax({   type: 'POST',   url: './token',   data: {grant_type: 'password'},   success: function (response) {alert('Success!')},   error: function (error) { alert('Fail!')},   beforeSend: function (xhr, settings) { xhr.setRequestHeader('Authorization', 'Basic '+b64Token); }  );<br>``` |
| Response |
| ```<br>HTTP/1.1 200 OK  Content-Type: application/json  {     "access_token":"ALLgqj...rAxRvWAkjsQ",     "token_type":"bearer",     "expires_in":29,   "refresh_token":"68b....fc97a1"  }<br>``` |

### Refresh token

A Refresh Token is a special kind of token that contains the information required to obtain a new Access Token. We can use it to get new Access Token to avoid expiration without sending user credentials again.

| Request |
| --- |
| ```<br>let refreshToken='68b....fcasd7a1'  let accessToken='xxaasddfgqj...rAasadjsQ';  $.ajax({   type: 'POST',   url: './token',   data: {grant_type: 'refresh_token',refresh_token: refreshToken},   success: function (response) {alert('Success!')},   error: function (error) { alert('Fail!')},   beforeSend: function (xhr, settings) { xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken); }  );<br>``` |
| Response |
| ```<br>HTTP/1.1 200 OK  Content-Type: application/json  {   "access_token":"Aadfasdfgqj...rAasdfjsQ",     "token_type":"bearer",     "expires_in":29,     "refresh_token":"68b....fc97a1"  }<br>``` |

## Web API Methods

DescriptionMethodUrlUrl ParamsDataCodeList collectionGETwebapi/list/{ObjectName}?filter={filter?}&page={page?}&pageSize={pageSize?}&orderBy={orderBy?}

| List collection |     |     |     |
| --- | --- | --- | --- |
| JS  | SQL | VB .NET | C#  |
| --- | --- | --- | --- |
| **Request:**  `       let objectName='sysObject';    let filter='ObjectName=\'AHORA_Documento\'';    let page=0;    let pageSize=500;    let orderBy='IsCollection';      let accessToken='xxaasddfgqj...rAasadjsQ';    let apiUrl='./webapi/list/' + objectName;        apiUrl += '?filter=' + encodeURIComponent(filter);     apiUrl += '&page=' + encodeURIComponent(page);     apiUrl += '&pageSize=' + encodeURIComponent(pageSize);     apiUrl += '&orderBy=' + encodeURIComponent(orderBy);       $.ajax({   type: 'GET',   url: apiUrl,   data: null,   crossDomain: true,   contentType: 'application/json; charset=utf-8',   success: function (response) { alert('Success'); console.log(response); },   error: function (error) { alert('Fail'); console.log(error); },   beforeSend: function (xhr, settings) { xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken); }    });                           `  `TO_DO VB`  `TO_DO SQL`  `TO_DO C#` |     |     |     |
| **Response:**                                  `     HTTP/1.1 200 OK    Content-Type: application/json    [     {"Property1":"Value1","PropertyN":"ValueN"},   {"Property1":"Value1","PropertyN":"ValueN"}    ]                       ` |     |     |     |

List collection using viewGETwebapi/list/{ObjectName}/{ViewName}?filter={filter?}&page={page?}&pageSize={pageSize?}&orderBy={orderBy?}

| List collection using view |     |     |     |
| --- | --- | --- | --- |
| JS  | SQL | VB .NET | C#  |
| --- | --- | --- | --- |
| **Request:**  `       let objectName='sysObject';    let viewName = 'sysCollections'    let filter='ObjectName=\'AHORA_Documento\'';    let page=0;    let pageSize=500;    let orderBy='IsCollection';      let accessToken='xxaasddfgqj...rAasadjsQ';    let apiUrl='./webapi/list/' + objectName + '/' + viewName;        apiUrl += '?filter=' + encodeURIComponent(filter);     apiUrl += '&page=' + encodeURIComponent(page);     apiUrl += '&pageSize=' + encodeURIComponent(pageSize);     apiUrl += '&orderBy=' + encodeURIComponent(orderBy);       $.ajax({   type: 'GET',   url: apiUrl,   data: null,   crossDomain: true,   contentType: 'application/json; charset=utf-8',   success: function (response) { alert('Success'); console.log(response); },   error: function (error) { alert('Fail'); console.log(error); },   beforeSend: function (xhr, settings) { xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken); }    });                           `  `TO_DO VB`  `TO_DO SQL`  `TO_DO C#` |     |     |     |
| **Response:**                                  `     HTTP/1.1 200 OK    Content-Type: application/json    [     {"Property1":"Value1","PropertyN":"ValueN"},   {"Property1":"Value1","PropertyN":"ValueN"}    ]                       ` |     |     |     |

Get object by idGETwebapi/object/{ObjectName}/{Id}

| Get object by id |     |     |     |
| --- | --- | --- | --- |
| JS  | SQL | VB .NET | C#  |
| --- | --- | --- | --- |
| **Request:**  `       let objectName='sysTmpTest';    let objectId=0      let accessToken='xxaasddfgqj...rAasadjsQ';    let apiUrl='./webapi/object/' + objectName + '/' + objectId;      $.ajax({   type: 'GET',   url: apiUrl,   data: null,   crossDomain: true,   contentType: 'application/json; charset=utf-8',   success: function (response) { alert('Success'); console.log(response); },   error: function (error) { alert('Fail'); console.log(error); },   beforeSend: function (xhr, settings) { xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken); }    });                           `  `TO_DO VB`  `TO_DO SQL`  `TO_DO C#` |     |     |     |
| **Response:**                                  `     HTTP/1.1 200 OK    Content-Type: application/json    {       "Properties":{          "Property1":{             "Text":"",           "Value":null,           "Label":"Property1"        },        "PropertyN":{             "Text":"",           "Value":null,           "Label":"PropertyN"        }     },     "ObjectName":null,     "ObjectWhere":null,     "JavaScript":null,     "Message":null  }                       ` |     |     |     |

Get object by filterGETwebapi/object/{ObjectName}?filter={filter}

| Get object by filter |     |     |     |
| --- | --- | --- | --- |
| JS  | SQL | VB .NET | C#  |
| --- | --- | --- | --- |
| **Request:**  `       let objectName='sysTmpTest';    let filter='TestId=0';      let accessToken='xxaasddfgqj...rAasadjsQ';    let apiUrl='./webapi/object/' + objectName;    apiUrl += '?filter=' + encodeURIComponent(filter);       $.ajax({   type: 'GET',   url: apiUrl,   data: null,   crossDomain: true,   contentType: 'application/json; charset=utf-8',   success: function (response) { alert('Success'); console.log(response); },   error: function (error) { alert('Fail'); console.log(error); },   beforeSend: function (xhr, settings) { xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken); }    });                           `  `TO_DO VB`  `TO_DO SQL`  `TO_DO C#` |     |     |     |
| **Response:**                                  `     HTTP/1.1 200 OK    Content-Type: application/json    {       "Properties":{          "Property1":{             "Text":"",           "Value":null,           "Label":"Property1"        },        "PropertyN":{             "Text":"",           "Value":null,           "Label":"PropertyN"        }     },     "ObjectName":null,     "ObjectWhere":null,     "JavaScript":null,     "Message":null  }                       ` |     |     |     |

Insert ObjectPOSTwebapi/object/{ObjectName}data:JsonObject

| Insert Object |     |     |     |
| --- | --- | --- | --- |
| JS  | SQL | VB .NET | C#  |
| --- | --- | --- | --- |
| **Request:**  `        let objectName='sysTmpTest';      let properties={'TestId': 1,'Descrip': 'Prueba'}      let accessToken='xxaasddfgqj...rAasadjsQ';    let apiUrl='./webapi/object/' + objectName;      $.ajax({   type: 'POST',   url: apiUrl,   data: JSON.stringify(properties),   crossDomain: true,   contentType: 'application/json; charset=utf-8',   success: function (response) { alert('Success'); console.log(response); },   error: function (error) { alert('Fail'); console.log(error); },   beforeSend: function (xhr, settings) { xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken); }    });                           `  `TO_DO VB`  `TO_DO SQL`  `TO_DO C#` |     |     |     |
| **Response:**                                  `     HTTP/1.1 200 OK    Content-Type: application/json    {       "Properties":{          "Property1":{             "Text":"",           "Value":null,           "Label":"Property1"        },        "PropertyN":{             "Text":"",           "Value":null,           "Label":"PropertyN"        }     },     "ObjectName":"sysTmpTest",     "ObjectWhere":"[_Test].[TestId] = 1",     "JavaScript":null,     "Message":null  }                       ` |     |     |     |

Update object by idPUTwebapi/object/{ObjectName}/{Id}data:JsonObject

| Update object by id |     |     |     |
| --- | --- | --- | --- |
| JS  | SQL | VB .NET | C#  |
| --- | --- | --- | --- |
| **Request:**  `       let objectName='sysTmpTest';      let objectId=1    let properties={'Descrip':'Prueba actualizada id'}      let accessToken='xxaasddfgqj...rAasadjsQ';    let apiUrl='./webapi/object/' + objectName + '/' + objectId;      $.ajax({   type: 'PUT',   url: apiUrl,   data: JSON.stringify(properties),   crossDomain: true,   contentType: 'application/json; charset=utf-8',   success: function (response) { alert('Success'); console.log(response); },   error: function (error) { alert('Fail'); console.log(error); },   beforeSend: function (xhr, settings) { xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken); }    });                           `  `TO_DO VB`  `TO_DO SQL`  `TO_DO C#` |     |     |     |
| **Response:**                                  `     HTTP/1.1 200 OK    Content-Type: application/json    {       "Properties":{          "Property1":{             "Text":"",           "Value":null,           "Label":"Property1"        },        "PropertyN":{             "Text":"",           "Value":null,           "Label":"PropertyN"        }     },     "ObjectName":"sysTmpTest",     "ObjectWhere":"[_Test].[TestId] = 1",     "JavaScript":null,     "Message":null  }                       ` |     |     |     |

Update object by filterPUTwebapi/object/{ObjectName}?filter={filter?}data:JsonObject

| Update object by filter |     |     |     |
| --- | --- | --- | --- |
| JS  | SQL | VB .NET | C#  |
| --- | --- | --- | --- |
| **Request:**  `       let objectName='sysTmpTest';      let filter='TestId=1';    let properties={"Descrip":"Prueba actualizada filtro"}      let apiUrl='./webapi/object/' + objectName;    apiUrl += '?filter=' + encodeURIComponent(filter);       $.ajax({   type: 'PUT',   url: apiUrl,   data: JSON.stringify(properties),   crossDomain: true,   contentType: 'application/json; charset=utf-8',   success: function (response) { alert('Success'); console.log(response); },   error: function (error) { alert('Fail'); console.log(error); },   beforeSend: function (xhr, settings) { xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken); }    });                           `  `TO_DO VB`  `TO_DO SQL`  `TO_DO C#` |     |     |     |
| **Response:**                                  `     HTTP/1.1 200 OK    Content-Type: application/json    {       "Properties":{          "Property1":{             "Text":"",           "Value":null,           "Label":"Property1"        },        "PropertyN":{             "Text":"",           "Value":null,           "Label":"PropertyN"        }     },     "ObjectName":"sysTmpTest",     "ObjectWhere":"[_Test].[TestId] = 1",     "JavaScript":null,     "Message":null  }                       ` |     |     |     |

Delete object by idDELETEwebapi/object/{ObjectName}/{Id}

| Delete object by id |     |     |     |
| --- | --- | --- | --- |
| JS  | SQL | VB .NET | C#  |
| --- | --- | --- | --- |
| **Request:**  `       let objectName='sysTmpTest';      let objectId=1      let apiUrl='./webapi/object/' + objectName + '/' + objectId;      $.ajax({   type: 'DELETE',   url: apiUrl,   data: null,   crossDomain: true,   contentType: 'application/json; charset=utf-8',   success: function (response) { alert('Success'); console.log(response); },   error: function (error) { alert('Fail'); console.log(error); },   beforeSend: function (xhr, settings) { xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken); }    });                           `  `TO_DO VB`  `TO_DO SQL`  `TO_DO C#` |     |     |     |
| **Response:**                                  `     HTTP/1.1 200 OK    Content-Type: application/json    {       "Properties":null,     "ObjectName":null,     "ObjectWhere":null,     "JavaScript":null,     "Message":null  }                       ` |     |     |     |

Delete object by filterDELETEwebapi/object/{ObjectName}?filter={filter}

| Delete object by filter |     |     |     |
| --- | --- | --- | --- |
| JS  | SQL | VB .NET | C#  |
| --- | --- | --- | --- |
| **Request:**  `       let objectName='sysTmpTest';      let filter='TestId=1';      let apiUrl='./webapi/object/' + objectName;    apiUrl += '?filter=' + encodeURIComponent(filter);       $.ajax({   type: 'DELETE',   url: apiUrl,   data: null,   crossDomain: true,   contentType: 'application/json; charset=utf-8',   success: function (response) { alert('Success'); console.log(response); },   error: function (error) { alert('Fail'); console.log(error); },   beforeSend: function (xhr, settings) { xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken); }    });                           `  `TO_DO VB`  `TO_DO SQL`  `TO_DO C#` |     |     |     |
| **Response:**                                  `     HTTP/1.1 200 OK    Content-Type: application/json    {       "Properties":null,     "ObjectName":null,     "ObjectWhere":null,     "JavaScript":null,     "Message":null  }                       ` |     |     |     |

Execute process with object by idPUTwebapi/exec/{ProcessName}/{ObjectName}/{Id}data:JsonObject

| Execute process with object by id |     |     |     |
| --- | --- | --- | --- |
| JS  | SQL | VB .NET | C#  |
| --- | --- | --- | --- |
| **Request:**  `       let processName='MyProcess';      let objectName='sysTmpTest';      let objectId=1    let processParams = {"Param1":"ParamValue"}      let apiUrl='./webapi/exec/' + processName + '/' + objectName + '/' + objectId;      $.ajax({   type: 'POST',   url: apiUrl,   data: JSON.stringify(processParams),   crossDomain: true,   contentType: 'application/json; charset=utf-8',   success: function (response) { alert('Success'); console.log(response); },   error: function (error) { alert('Fail'); console.log(error); },   beforeSend: function (xhr, settings) { xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken); }    });                           `  `TO_DO VB`  `TO_DO SQL`  `TO_DO C#` |     |     |     |
| **Response:**                                  `     HTTP/1.1 200 OK    Content-Type: application/json    {      "Success":true,      "SuccessMessage":"",      "WarningMessage":"",      "LastException":null,      "JSCode":null,      "JSFile":"",      "CloseParamWindow":false,      "Refresh":false    }                       ` |     |     |     |

Execute process with object by filterPUTwebapi/exec/{ProcessName}/{ObjectName}?filter={filter}data:JsonObject

| Execute process with object by filter |     |     |     |
| --- | --- | --- | --- |
| JS  | SQL | VB .NET | C#  |
| --- | --- | --- | --- |
| **Request:**  `       let processName='MyProcess';      let objectName='sysTmpTest';      let filter='TestId=1';    let processParams = {"Param1":"ParamValue"}      let apiUrl='./webapi/exec/' + processName + '/' + objectName;    apiUrl += '?filter=' + encodeURIComponent(filter);       $.ajax({   type: 'POST',   url: apiUrl,   data: JSON.stringify(processParams),   crossDomain: true,   contentType: 'application/json; charset=utf-8',   success: function (response) { alert('Success'); console.log(response); },   error: function (error) { alert('Fail'); console.log(error); },   beforeSend: function (xhr, settings) { xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken); }    });                           `  `TO_DO VB`  `TO_DO SQL`  `TO_DO C#` |     |     |     |
| **Response:**                                  `     HTTP/1.1 200 OK    Content-Type: application/json    {      "Success":true,      "SuccessMessage":"",      "WarningMessage":"",      "LastException":null,      "JSCode":null,      "JSFile":"",      "CloseParamWindow":false,      "Refresh":false    }                       ` |     |     |     |

Execute process without objectPUTwebapi/exec/{ProcessName}data:JsonObject

| Execute process without object |     |     |     |
| --- | --- | --- | --- |
| JS  | SQL | VB .NET | C#  |
| --- | --- | --- | --- |
| **Request:**  `       let processName='MyProcess';      let processParams = {"Param1":"ParamValue"}      let apiUrl='./webapi/exec/' + processName      $.ajax({   type: 'POST',   url: apiUrl,   data: JSON.stringify(processParams),   crossDomain: true,   contentType: 'application/json; charset=utf-8',   success: function (response) { alert('Success'); console.log(response); },   error: function (error) { alert('Fail'); console.log(error); },   beforeSend: function (xhr, settings) { xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken); }    });                           `  `TO_DO VB`  `TO_DO SQL`  `TO_DO C#` |     |     |     |
| **Response:**                                  `     HTTP/1.1 200 OK    Content-Type: application/json    {      "Success":true,      "SuccessMessage":"",      "WarningMessage":"",      "LastException":null,      "JSCode":null,      "JSFile":"",      "CloseParamWindow":false,      "Refresh":false    }                       ` |     |     |     |

/\*.codeLink th { cursor: pointer } .codeLink th:hover { background-color: silver; color: white }\*/ .link-sql,.link-c,.link-vb{display:none} function showMethodCode(itm) { $(itm).toggle(500); } function showCode(itm, newClass) { itm.closest('table').find('.code').hide(); itm.closest('table').find('.' + newClass).show(); }