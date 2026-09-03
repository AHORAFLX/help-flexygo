# ¿Sabías que puedes ver, crear, editar o eliminar objetos mediante JS?

Es posible realizar operaciones CRUD (crear, leer, actualizar, eliminar) sobre objetos directamente mediante JavaScript en Flexygo, en lugar de recurrir a procesos SQL o DLL.

## Puntos clave

* Es esencial utilizar la función `.read()` después de declarar un objeto para obtener su información antes de realizar cualquier acción
* Las funciones JavaScript respetan la seguridad del sistema; si el usuario carece de permisos, se mostrará un mensaje de error y la acción no se ejecutará

## Ejemplos de código

**Inserción:**

```javascript
function sampleInsert(){
  let obj=new flexygo.obj.Entity('sysTmpTest');
  obj.read();
  obj.data['TestId'].Value = 1;
  obj.data['Descrip'].Value = 'Sample description';
  if(obj.insert()) {
      flexygo.msg.success("Inserted");
  }
}
```

**Actualización:**

```javascript
function sampleUpdate(){
  let obj=new flexygo.obj.Entity('sysTmpTest','_Test.TestId=1');
  obj.read();
  obj.data['Descrip'].Value = 'Sample description updated';
  if(obj.update()) {
      flexygo.msg.success("Updated");
  }
}
```

**Eliminación:**

```javascript
function sampleDelete(){
  var obj=new flexygo.obj.Entity('sysTmpTest','_Test.TestId=1');
  if(obj.delete()) {
      flexygo.msg.success("Deleted");
  }
}
```
