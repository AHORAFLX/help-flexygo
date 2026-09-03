# How to do a partial synchronization in Flexygo Offline

By default, the Flexygo Offline app sends all the records of tables that have any of the change bits active, as indicated by the `_isInserted`, `_isDeleted`, `_isUpdated` fields. And when a data refresh is done, it's performed for the entire model.

Sometimes it may be necessary to do a custom data send or receive, i.e. specifying exactly which tables you want to synchronize at a given moment. To do this, you need to create a JS function like any of the functions and examples described below.

## Get data from server without overwriting modified rows

* `{boolean}` **reloadPage**
* `{string}` **jscode**
* `{SyncOptions}` **options**
    * `{boolean}` **partialSync**?: if `true`, only gets the tables and views in the `syncTables`/`syncViews` array
    * `{Array<string>}` **syncTables**?: list of tables to get
    * `{Array<string>}` **syncViews**: list of views to get
    * `{boolean}` **partialSend**?: if `true`, only sends the tables and views in the `syncTables`/`syncViews` array
    * `{Array<string>}` **sendTables**?: list of tables to send
    * `{Array<string>}` **sendViews**?: list of views to send

```javascript
flexygo.sync.syncData(reloadPage, jscode, options);
```

### Example

A partial synchronization is performed on only the `Partes`, `Conf_Partes`, `Clientes_Datos` and `Contactos` tables:

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

## Get data from server overwriting modified rows

* `{boolean}` **reloadPage**
* `{string}` **jscode**
* `{SyncOptions}` **options**
    * `{boolean}` **partialSync**?: if `true`, only gets the tables and views in the `syncTables`/`syncViews` array
    * `{Array<string>}` **syncTables**?: list of tables to get
    * `{Array<string>}` **syncViews**: list of views to get
    * `{boolean}` **partialSend**?: if `true`, only sends the tables and views in the `syncTables`/`syncViews` array
    * `{Array<string>}` **sendTables**?: list of tables to send
    * `{Array<string>}` **sendViews**?: list of views to send

```javascript
flexygo.sync.overwriteData(reloadPage, jscode, options);
```

## Send modified rows to the server

* `{SyncOptions}` **options**
    * `{boolean}` **partialSync**?: if `true`, only gets the tables and views in the `syncTables`/`syncViews` array
    * `{Array<string>}` **syncTables**?: list of tables to get
    * `{Array<string>}` **syncViews**: list of views to get
    * `{boolean}` **partialSend**?: if `true`, only sends the tables and views in the `syncTables`/`syncViews` array
    * `{Array<string>}` **sendTables**?: list of tables to send
    * `{Array<string>}` **sendViews**?: list of views to send

```javascript
flexygo.sync.sendData(options);
```
