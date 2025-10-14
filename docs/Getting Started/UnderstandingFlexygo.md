# Understanding Flexygo
To understand flexygo first you need to understand its core elements to build any app, they are the following:

* **Objects**: The core of all flexygo as it's the direct representation of a database table from which any component will get its information from.
* **Modules**: This are the compoenents with the functionalities ranging from editing an object registry to showing graphs or using a kanban for example.
* **Templates**: The configuration for which way the modules will show their information.
* **Views**: The place from which templates extract the data which they use to show information or make functionalities work.

Now we will expand on them.

## Objects
Objects are the source of practically everything in flexygo.

## Modules
Modules are the 

## Templates
Templates are purely HTML which will be used to show the content as you desire, but if you do not need something very specific you can always use standard ones by not setting any.

They do parse every data that is sent to them by the views. And when the template is a list one they will replicate as many times the body as registers does the view return.

## Views
Views are simply SQL sentences which do send the information to the templates which will use it to show it. The columns that the SQL returns will be the ones parsed on the template.

It's important to know that this views are not the same as SQL own views, this are only usable directly on flexygo components and functions. Though if you want you can always use SQL own views inside one of flexygos.