# Did you know you can enable the profiler in the Offline App from anywhere?

Flexygo's offline application includes a profiling tool that you can use from anywhere in the application.

## Main functions

To access the profiler, you need to know two fundamental functions:

* **flexygo.sql.initProfiler**: starts logging all SQL queries and their results
* **flexygo.sql.stopProfiler**: stops logging and displays the captured data in the console

![](../../docs_assets/images/DidYouKnow/ProfilerAnywhere/1.png)

## Filtering results

When working with complex edits that contain multiple dependencies, you can use:

* **flexygo.sql.filterProfiler**: lets you search for specific statements in the logged data

This function is case-insensitive by default, but you can change this behavior by passing `true` as the third parameter if you need a case-sensitive search.

![](../../docs_assets/images/DidYouKnow/ProfilerAnywhere/2.png)
