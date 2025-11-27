# Form Validators

When designing or configuring a data insertion or modification screen, it will be necessary to validate the data entered by the user before allowing him to save the information. The validators will prevent saving the information, if it is incorrect or does not meet the requirements we establish.

There are several types and levels of validation:

## Based on data model specification

The information entered in each field must be of the type and range supported by the database design.

## Based on control type

The type of control chosen when designing the editing screen can carry its own validations preventing the user from entering incorrect values, a numeric field will prevent the user from entering other characters that are not numerical, a date type field will only allow correct dates, a mail type field will validate that the text corresponds to a valid email account, a text type field will only support the maximum number of characters set in the database definition.  
_Examples:_

The date control will prevent us from entering a 13 month, or a 32 day:

![Example](/assets/images/FormValidators/Validation-example.png "Image 1. Example of validation")

In the case of a text field limited to 4 characters, it will prevent the user from adding more characters.

![Example](/assets/images/FormValidators/Character-limit.png "Image 2. Example of validation")

## Based on control properties

### Required Field

This validation can be specified both at a database level when designing our tables and fields or at a form design level.

![Example](/assets/images/FormValidators/Is-required.png "Image 3. Example of validation")

*   **Is Required**: With this option it will be mandatory for the user to fill in the field.
*   **Is Required Message**: We can customize the validation message that will appear on the form when the user tries to save and has not filled in the required information.

### Minimum and maximum values

This validation can be used for numeric fields.

![Example](/assets/images/FormValidators/Maximum-value.png "Image 4. Example of validation")

*   **Max Value**: In numerical fields we can set a maximum value.
*   **Max Value Message**: Personalized message that will indicate the user that the value exceeds maximum allowed.
*   **Min Value**: In numerical fields we can set a maximum value.
*   **Min Value Message**: Personalized message that will indicate the user that the value exceeds maximum allowed.

### Regular expression

We can establish a validation of the content of the field through a regular expressions.

![Example](/assets/images/FormValidators/Regular-expression.png "Image 5. Example of validation")

*   **Reg Expression**: Regular expression that will verify the content of the field.
*   **Text:** Personalized message to indicate the user that the value entered does not meet the regular expression conditions.

![Example](/assets/images/FormValidators/Regular-example.png "Image 6. Example of validation")

## SQL Sentence validator

SQL expression that must necessarily return 0 or 1. If we return 0, we will indicate that the value is not admitted and if we indicate 1, the value is admitted.

![Example](/assets/images/FormValidators/Sql.png "Image 7. Example of validation")

We can construct the SQL statement using contextVars and properties of the object itself since the platform will parse these before executing the statement. Through these sentences (as simple or complex as we need) we will notify the user that the information does not meet the defined criteria. On the other we will optimize our processes since we are avoiding insert / update executions or execution of storeds or triggers that return an error or even generate unnecessary blockages or transactions.

_Example:_

![Example](/assets/images/FormValidators/Sql-example.png "Image 8. Example of validation")