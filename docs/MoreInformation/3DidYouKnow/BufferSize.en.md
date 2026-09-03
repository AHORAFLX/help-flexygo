# Did you know you can change how many records at a time the app fetches for an object?

From an object's configuration, you can adjust the number of records retrieved during synchronization. This parameter, called the **buffer size**, has a direct impact on the process's performance.

![](../../docs_assets/images/DidYouKnow/BufferSize/1.png)

## Changing the buffer size

To make the adjustment, you just need to modify the property called **buffer size**. The benefits vary depending on the configuration:

* **Larger buffers**: allow faster synchronization by processing multiple records per iteration
* **Smaller buffers**: recommended for tables with large or complex records

## Recommendations

Best practice suggests using a smaller buffer size when working with tables that contain heavy or complex records, avoiding errors or performance issues. In contrast, for lighter tables, a larger size can be used to optimize synchronization speed without risking overload.

![](../../docs_assets/images/DidYouKnow/BufferSize/2.png)
