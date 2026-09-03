# Cómo hacer una sincronización parcial en Flexygo Offline

La app Offline de Flexygo, por defecto, envía todos los registros de aquellas tablas que tengan alguno de los bits de cambio activo, según indican los campos `_isInserted`, `_isDeleted`, `_isUpdated`. Y cuando se hace un refresco de los datos, este se realiza para todo el modelo.

En ocasiones puede ser necesario realizar un envío o recepción de datos personalizado, es decir, indicar específicamente qué tablas se quieren sincronizar en un momento dado. Para eso, hay que crear una función JS como indica cualquiera de las funciones y ejemplos descritos a continuación.

## Recibir datos del servidor sin sobrescribir filas modificadas

* `{boolean}` **reloadPage**
* `{string}` **jscode**
* `{SyncOptions}` **options**
    * `{boolean}` **partialSync**?: si es `true`, solo obtiene las tablas y vistas del array `syncTables`/`syncViews`
    * `{Array<string>}` **syncTables**?: lista de tablas a obtener
    * `{Array<string>}` **syncViews**: lista de vistas a obtener
    * `{boolean}` **partialSend**?: si es `true`, solo envía las tablas y vistas del array `syncTables`/`syncViews`
    * `{Array<string>}` **sendTables**?: lista de tablas a enviar
    * `{Array<string>}` **sendViews**?: lista de vistas a enviar

```javascript
flexygo.sync.syncData(reloadPage, jscode, options);
```

### Ejemplo

Se realiza una sincronización parcial únicamente de las tablas `Partes`, `Conf_Partes`, `Clientes_Datos` y `Contactos`:

```javascript
Recibir = async function(){

    let opts = {
      partialSync: true,
      syncTables: [],
      syncViews: []
    };

    opts.syncTables.push('Partes');

    opts.syncTables.push('Conf_Partes');

    opts.syncTables.push('Clientes_Datos');

    opts.syncTables.push('Contactos');

    flexygo.sync.syncData(true, "", opts);

  }
```

## Recibir datos del servidor sobrescribiendo filas modificadas

* `{boolean}` **reloadPage**
* `{string}` **jscode**
* `{SyncOptions}` **options**
    * `{boolean}` **partialSync**?: si es `true`, solo obtiene las tablas y vistas del array `syncTables`/`syncViews`
    * `{Array<string>}` **syncTables**?: lista de tablas a obtener
    * `{Array<string>}` **syncViews**: lista de vistas a obtener
    * `{boolean}` **partialSend**?: si es `true`, solo envía las tablas y vistas del array `syncTables`/`syncViews`
    * `{Array<string>}` **sendTables**?: lista de tablas a enviar
    * `{Array<string>}` **sendViews**?: lista de vistas a enviar

```javascript
flexygo.sync.overwriteData(reloadPage, jscode, options);
```

## Enviar al servidor las filas modificadas

* `{SyncOptions}` **options**
    * `{boolean}` **partialSync**?: si es `true`, solo obtiene las tablas y vistas del array `syncTables`/`syncViews`
    * `{Array<string>}` **syncTables**?: lista de tablas a obtener
    * `{Array<string>}` **syncViews**: lista de vistas a obtener
    * `{boolean}` **partialSend**?: si es `true`, solo envía las tablas y vistas del array `syncTables`/`syncViews`
    * `{Array<string>}` **sendTables**?: lista de tablas a enviar
    * `{Array<string>}` **sendViews**?: lista de vistas a enviar

```javascript
flexygo.sync.sendData(options);
```
