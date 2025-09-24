App description Common JS Functions Creating App Design Environment Designing App Navigation Options Return Data Process Useful Tokens Tracking Configuration Database Debugging App/Emulator differences Offline AI

# **flexygo** Offline Database

### Basic Debugging

1.  Since the migrations of offline app databases to webassembly, a new menu has been added to the advanced options in the sync menu, from where sql can be executed. (This menu is only available on desktop)
    

![Menu](./img/Help/offline/DatabaseMenuNav.png "Image 1. Database Menu Navigation")

Image 1. Database Menu Navigation

3.  Once you enter this menu you will be able to execute your own selects, from the top input or view any table by clicking on the right icon next to the input.
    

Tip: If you ever want to reuse a select, you can do so by using the up and down arrow keys.

Tip 2: When a complex select must be done you may use "shift + enter" to add another line and so making the input bigger without executing the select sentence. And if you have a complex select from other place, when you paste it the input will automatically grow accoding to the select size.

![Menu](./img/Help/offline/DatabaseMenu.png "Image 2. Database Menu")

Image 2. Database Menu

7.  When you click on the tables input, every table in the current database will be shown. From there if you tap any of this all records from it will load on a table as you can see on the fourth image.
    

![Menu](./img/Help/offline/ShowTablesBtn.png "Image 3. Show Tables button")

Image 3. Show Tables button

![Menu](./img/Help/offline/ShowTable.png "Image 4. Show Table")

Image 4. Show Table

### Database Profiler

Since version 6.11 the app has a **database profiler** which allows to record all the sql sentences being executed in the background (as for example dependencies).

To use it you'll just need to know the functions **flexygo.sql.initProfiler** and **flexygo.sql.stopProfiler**, in future updates a visual play and stop button will be added to the database screen.

When **flexygo.sql.initProfiler** is executed all the sql executeds and their results will start being recorded, so when you run **flexygo.sql.stopProfiler** all of them will get logged on the console.

![Menu](./img/Help/offline/InitStopProfiler.png "Image 5. Initiate and stop profiler")

If you ever want to search for a certain sentence, which can sometimes be difficult for example in big edits with lots of dependencies, you could use the function **flexygo.sql.filterProfiler** which will filter the data its given. By defaults it's not case sensitive, but if you prefer it then you could just give the third parameter the value true.

![Menu](./img/Help/offline/FilterProfiler.png "Image 6. Filter profiler")