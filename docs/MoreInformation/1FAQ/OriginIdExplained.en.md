# How the OriginId works in 4 steps

## Step 1: Identifying the record's owner

The `OriginId` indicates who owns a record during updates:

* **OriginId 0**: new records from Flexygo's own developers
* **OriginId 1**: new records from product developers
* **OriginId 2**: new records created during customization or deployment

## Step 2: OriginId is immutable

The `OriginId` of an existing record in the tool or product is never modified. Other fields can be changed regardless of the owner, but the `OriginId` never is.

## Step 3: Comparative update logic

During updates, the system compares fields between versions:

| New version? | Customization? | Action |
|---|---|---|
| No | No | The previous value is kept |
| Yes | No | It's updated |
| No | Yes | The customization is kept |
| Yes | Yes | It's updated, but a conflict is generated* |

\* There are configured exceptions where the customization takes priority: property labels, standard languages, logos, variable colors, template bodies, node order, and scheduled job states.

## Step 4: Managing deletions

If a record with `OriginId` 0 or 1 is deleted in a deployment but isn't also deleted from the tool or product, that record will be reinserted. It's recommended to disable records instead of deleting them.
