# Developing: script to change the OriginId of all our modifications

## Scope

Development environment of a project/solution/product.

## Situation

We've made changes to our development without marking the origin of the modifications.

!!! note "Note"
    To change our origin, we go to the object collection, where there is a process from which we can change the origin. This setting means every record will be marked with the new origin (system, product, project or user).

![](../../docs_assets/images/FAQ/OriginIdScript/1.png)

![](../../docs_assets/images/FAQ/OriginIdScript/2.png)

This means that when we want to script our changes, we'll have trouble locating and saving them.

The solution is to locate and update the records that have an `OriginId` other than the one we want.

To do this, we'll run the attached script, which gives us the updates needed to leave the records correctly set.

The code is set up to go from origin "Project" (id 2) to origin "Product" (1), but it can be changed by assigning different origins to the following variables:

```sql
set @OldOriginId=2
set @NewOriginId=1
```

After that, we can run `zscript`, which will generate the SQL change files for our application/product.

Example:

```
zscript 1, 'C:\Codigo GIT\Flexygo\flexygo\BBDD\FLEXIGOBD\FLEXIGOBD\scripts\staticdata '
```

## Attachment

Download [CambiarOriginId.sql](./readme/utils/CambiarOriginId.sql).

## See also

* [How the OriginId works in 4 steps](OriginIdExplained.md)
* [I'm updating the version and I get a Foreign Key conflict error](ForeignKeyConflict.md)
