# Example of a return callback for a combo with the allow-new button

![](../../docs_assets/images/FAQ/ComboAllowNewCallback/1.png)

When configuring a combo where we want to let the user add new elements, by default we'll set the object to create and the return field that will be assigned to the combo after the new element is created.

In some cases we'll need, for example, to assign default values to the object so that when the new object's window opens it already has those values set. In these cases we can program a function that performs those assignments and, on its return, also adds the value to the combo.

It's best to save this function in a `.js` file inside the `custom` folder and upload it as a plugin, so it will load as one more function of the application and be available at any time.

Once the function is written and added, we need to specify it in the **Allow New Return Function** section.

## Practical example

We attach an example where, from a customer's record, we give the option to create and assign a direct debit; so when the direct debit opens, it will already inherit the customer's id.

The call to the function would look like this (*):

```
newCustomerDirectDebit({{CustomerId}});
```

\* If the value is text, it must be wrapped in quotes:

```
newCustomerDirectDebit('{{CustomerId}}');
```

## Example code

```javascript
/**return callback to create new payer direct debits
in the customControls dbcombo_CustomersDirectDebits **/
function newCustomerDirectDebit(CustomerId){

    flexygo.events.on(this, "entity", "inserted", (e) => {
        if (e.masterIdentity === "SCH_CustomersDirectDebit") {
            flexygo.events.off(this, "entity", "inserted");

            let entity = e.sender;

            let value;
            if ("DirectDebitId" && "DirectDebitId" != '') {
                value = entity.data["DirectDebitId"].Value;
            }
            else {
                let config = entity.getConfig();
                value = entity.data[config.KeyFields[0]].Value;
            }

            $('flx-dbcombo[property="DirectDebitId"]')[0].loadValues(0, false, true, value);
            $('flx-dbcombo[property="DirectDebitId"]')[0].setValue(value);

            $(document).find('flx-edit[objectname="SCH_CustomersDirectDebit"]').closest(".ui-dialog").remove();
        }
    });

    flexygo.nav.openPage('edit','SCH_CustomersDirectDebit',null,'{"CustomerId":"' + CustomerId + '"}','popup800x600',false,$(this));
}
```
