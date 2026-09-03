# Did you know you can view, create, edit or delete objects through JS?

You can perform CRUD operations (create, read, update, delete) on objects directly through JavaScript in Flexygo, instead of using SQL processes or DLLs.

## Key points

* It is essential to call `.read()` after declaring an object to get its information before performing any action
* JavaScript functions respect the system's security; if the user lacks permissions, an error message will be shown and the action will not run

## Code examples

**Insert:**

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

**Update:**

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

**Delete:**

```javascript
function sampleDelete(){
  var obj=new flexygo.obj.Entity('sysTmpTest','_Test.TestId=1');
  if(obj.delete()) {
      flexygo.msg.success("Deleted");
  }
}
```
