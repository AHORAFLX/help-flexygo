# Data update algorithm in mobile applications

This article details the data synchronization process in Flexygo mobile applications, through a specific algorithm for receiving and updating information.

![](../../docs_assets/images/FAQ/MobileSyncAlgorithm/1.png)

## Algorithm steps

1. **Initial download:** configuration of objects, views, menus, properties and templates.
2. **Creating temporary tables:** generated with the `temp_` prefix and including control fields: `_isInserted`, `_isUpdated`, `_isDeleted`, `_syncDate`, `_insertDate`, `_updatedDate`, `_deletedDate`.
3. **Data download:** processed across multiple execution threads.
4. **Unified transaction:** compares the previous structures and runs the following operations:
    * Removes obsolete tables
    * Renames the new tables (removing the `temp_` prefix)
    * Processes matching tables according to the mode

## Synchronization modes

### A) Refresh data

* Validates changes in the primary key
* Marks records as deleted
* Inserts new records
* Updates matching fields
* Finishes by renaming the tables

### B) Overwrite data

* Removes the old tables
* Renames the new ones (without the `temp_` prefix)
