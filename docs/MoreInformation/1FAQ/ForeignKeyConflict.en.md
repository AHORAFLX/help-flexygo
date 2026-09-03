# I'm updating the version and I get a Foreign Key conflict error

If an update shows an error similar to this one:

![](../../docs_assets/images/FAQ/ForeignKeyConflict/1.jpg)

The problem is that records have been added to new Flexygo objects (objects, views, modules, pages...) with the wrong `OriginId` — meaning certain customizations were marked as system or product by mistake (usually from copy-pasting). As a result, the system won't add them during merges, and it will throw errors in other related tables.

The [CambiarOriginId.sql](./readme/utils/CambiarOriginId.sql) script, available from [Developing: script to change the OriginId of all our modifications](OriginIdChangeScript.md), reports every record whose origin is marked as system or product but should be marked as customer.

## Solution

The solution is to modify those records and change their `OriginId`, usually changing `0` or `1` to `2`.

## See also

* [How the OriginId works in 4 steps](OriginIdExplained.md)
* [Developing: script to change the OriginId of all our modifications](OriginIdChangeScript.md)
