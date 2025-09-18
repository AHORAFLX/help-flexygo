# Abh Ticket

Abh ticket is an integration of Ahora Business Hub that allows **flexygo** to consult expenses.

## Enable Abh Ticket

Add Abh Ticket to this project

## Configure Abh Ticket

![](./img/Help/AbhTicket/AbhTicketSettings.png "Image 1. Abh Ticket configuration")

Image 1. Abh Ticket configuration

**Integration:** Name of the integration that we are going to configure, in this case Ahora Business Hub - Ticket.

**Client Id:** Ahora Business Hub client id.

For more information consult on https://help.flexygo.com/

**Client Secret:** Ahora Business Hub client secret.

For more information consult on https://help.flexygo.com/

**Tenant Id:** Ahora Business Hub tenant id.

For more information consult on https://help.flexygo.com/

## Functions dll

##### Consult expenses

Optional parameters:

*   Status: Expense status (0 - Pending. 1 - Confirmed.)
*   DateMin: Minimum expense date.
*   DateMax: Maximum expense date.

Return JSON string - View definition

FLEXYGO.Ticket.AbhGetExpenses

| Name | Type | Description |
| --- | --- | --- |
| \_id | Text(24) | Unique identifier. |
| type\_id | Number(10) | Expense type. Could be:<br><br>*   0: Ticket<br>*   1: Invoice<br>*   2: Mileage |
| user\_id | Number(10) | User identifier. |
| company\_id | Number(10) | Company identifier. |
| status\_id | Number(10) | Expense status. Could be:<br><br>*   0: Pending confirmation (no image or no has been signed yet)<br>*   1: Confirmed<br><br>If it is type 2, it will always be worth 1. |
| remote\_uri | Text | Route to find the image associated with the ticket. Only for type 0 or 1 expenses. |
| category\_id | Number(10) | Expense Category. For type 2 expenses, it will always be 0. |
| amount | Decimal | Amount in euros of the expense. |
| rate | Decimal | Exchange rate applied to convert the amount. For expenses of type 0 or 1, which have a currency other than EUR. Only for those companies with the functionality of Multicurrency activated. |
| rate\_amount | Decimal | Amount in the original currency of the ticket, other than EUR. For expenses of type 0 or 1, which have a currency other than EUR. Only for those companies with the functionality of Multicurrency activated. |
| currency | Text(3) | Expense currency (ISO-4217). By default EUR. |
| date | Text | Date and time of the expense, in YYYY-MM-DD HH:mm:SS format. |
| cif | Text | CIF of the expense provider. Only for type 0 or 1 expenses. |
| name | Text | Company name of the supplier, for type 0 or 1 expenses. Journey, for type 2 expenses. |
| ticket\_num | Text | Expense ticket number, if available. Only for type 0 or 1 expenses. |
| payment\_method | Text | Payment method. Only for type 0 or 1 expenses. |
| comments | Text | Description of the expense or comments on it. |
| report\_id | Number(10) | Id of the expense sheet to which the expense belongs, if it has. |
| cost\_center\_id | Number(10) | Id of the cost center to which the expense is associated, if any. |
| custom\_fields | Object | Object that contains the fields customized by company, if they exist. Format {“field1”: value, “field2: value, ...} |
| taxes | Lists | List of taxes applied to the expense. Format \[ {p: , b: }, {p: , b: },...\] Where:<br><br>*   Rate: VAT rate: 0,4,10,21<br>*   Base: Tax base applicable to the type |
| department\_id | Number(10) | Id of the group where the expense is allocated. Used to validate expense sheets. |
| distance | Decimal | Kilometres. Only for type 2 expenses. |
| unit\_price | Decimal | Euros per kilometer. Only for type 2 expenses. |

##### Consult especific expense

Parameter:

*   ExpenseId: Expense identificator.

Return JSON string

FLEXYGO.Ticket.AbhGetExpense

##### Consult image of the expense

Parameter:

*   RemoteUri: Remote image uri of the expense.

Return base64 string

FLEXYGO.Ticket.AbhGetExpenseImage

##### Consult users

Return JSON string - View definition

FLEXYGO.Ticket.AbhGetUsers

| Name | Type | Description |
| --- | --- | --- |
| id  | Number(10) | Unique identifier. |
| name | Text(255) | Name and surname. |
| email | Text(255) | Email, unique. |
| status\_id | Number(10) | State. Could be:<br><br>*   0: Not validated<br>*   1: Validated, registration pending<br>*   2: Registered |
| company\_type\_id | Number(10) | Type of company. Could be:<br><br>*   0: Autonomous<br>*   1: Company |
| distance\_unit\_price | Decimal | Price per kilometer, in euros. |
| custom\_id | Text(255) | Customizable field by company to save a user's own identifier. |
| companies | List | List of companies to which the user belongs. |
| departments | List | List of groups to which the user belongs. |
| cost\_centers | List | List of cost centers associated with the user. |

##### Consult my user

Return JSON string

FLEXYGO.Ticket.AbhGetMyUser

##### Consult especific user

Parameter:

*   UserId: User identificator.

Return JSON string

FLEXYGO.Ticket.AbhGetUser

##### Consult companies from a especific user

Parameter:

*   UserId: User identificator.

Return JSON string

FLEXYGO.Ticket.AbhGetUserCompanies

##### Consult categories

Return JSON string - View definition

FLEXYGO.Ticket.AbhGetCategories

| Name | Type | Description |
| --- | --- | --- |
| id  | Number(10) | Unique identifier. |
| name | Text(255) | Category name. |
| parent | Number(10) | Parent category identifier. |
| icon | Text(100) | Category icon name. |
| iva | Decimal | Tax rate that applies to the expenses of the category. Supports two decimal places. If it is null, the category supports multiple types. |
| business\_category\_id | Number(11) | Business type (to allow searches by location). Could be:<br><br>*   1: Restaurants<br>*   2: Parking |

##### Consult payment methods

Return JSON string

FLEXYGO.Ticket.AbhGetPaymentMethods

##### Consult cost centers

Return JSON string - View definition

FLEXYGO.Ticket.AbhGetCostCenters

| Name | Type | Description |
| --- | --- | --- |
| id  | Number(10) | Unique identifier. |
| code | Text(255) | Cost center code. |
| name | Text(255) | Cost center name. |
| company\_id | Number(10) | Company ID. |
| active | Boolean | Indicates whether the cost center is active or not. I don't know They may allocate expenses to inactive centers. |
| global | Boolean | Indicates whether the cost center is global or not. If the overall Any user in the company can allocate expenses in it. If it is not global, it must be assigned to users so that they can allocate expenses to it. |

##### Consult expense sheets

Optional parameters:

*   DateMin: Minimum expense sheet date.
*   DateMax: Maximum expense sheet date.
*   Status: Expense sheet status (0 - Open. 1 - Pending review. 2 - In Review. 3 - Rejected. 4 - Processed. 5 - Approved.)
*   UpdatedAfter: Updated after expense sheet date.

Return JSON string - View definition

FLEXYGO.Ticket.AbhGetReports

| Name | Type | Description |
| --- | --- | --- |
| \_id | Text(24) | Unique identifier. |
| user\_id | Number(10) | User identifier. |
| company\_id | Number(10) | Company identifier. |
| status\_id | Number(10) | Expense sheet status. |
| name | Text | Sheet name. |
| comments | Text | Sheet description or comments. |
| status\_log | List | List of comments added to the sheet during the state changes, by the various users involved in its validation. |
| custom\_fields | object | Object that contains the fields customized by company, if they exist. Format {“field1”: value, “field2: value, ...}. |

##### Consult expenses from an expense sheet

Parameter:

*   ReportId: Expense sheet identificator.

Return JSON string

FLEXYGO.Ticket.AbhGetReportExpenses

##### Consult expense sheet status

Return JSON string

FLEXYGO.Ticket.AbhGetReportStatus

##### Consult departments

Return JSON string

FLEXYGO.Ticket.AbhGetDepartments

##### Consult client list

Return JSON string

FLEXYGO.Ticket.AbhGetClients

##### Consult a client

Parameters:

*   CompanyId: Company identificator.
*   ClientId: Client identificator.

Return JSON string

FLEXYGO.Ticket.AbhGetClient

##### Create client

Parameters:

*   Label: Label displayed to the user.
*   Value: Value to be saved.
*   CompanyId: Company identificator.

Return JSON string

FLEXYGO.Ticket.AbhCreateClient

##### Update client

Parameters:

*   ActualCompanyId: Actual company identificator.
*   ClientId: Client identificator.
*   Label: Label displayed to the user.
*   Value: Value to be saved.
*   CompanyId: Company identificator.

Return JSON string

FLEXYGO.Ticket.AbhUpdateClient

##### Active a client

Parameters:

*   CompanyId: Company identificator.
*   ClientId: Client identificator.

Return JSON string

FLEXYGO.Ticket.AbhActiveClient

##### Disable a client

Parameters:

*   CompanyId: Company identificator.
*   ClientId: Client identificator.

Return JSON string

FLEXYGO.Ticket.AbhDisableClient

##### Delete client

Parameters:

*   CompanyId: Company identificator.
*   ClientId: Client identificator.

Return boolean string

FLEXYGO.Ticket.AbhDeleteClient

##### Consult cards

Parameters:

*   CompanyId: Company identificator.

Return JSON string

FLEXYGO.Ticket.AbhGetCards

##### Consult especific card

Parameter:

*   CompanyId: Company identificator.
*   CardId: Card identificator.

Return JSON string

FLEXYGO.Ticket.AbhGetCard