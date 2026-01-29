# Abh Ticket

Abh ticket is an integration of Ahora Business Hub that allows **flexygo** to consult expenses.

## Enable Abh Ticket

<flx-navbutton class="button" type="openpage" pagetypeid="list" objectname="sysAbh_Integrations_Settings" defaults="{'IntegrationId':'abh_ticket'}" excludehist="false">
    Add Abh Ticket to your project
</flx-navbutton>

## Configure Abh Ticket

![Abh Ticket configuration](../docs_assets/images/AbhTicket/AbhTicketSettings.png "Abh Ticket configuration")

**Integration:** Name of the integration that we are going to configure, in this case Ahora Business Hub - Ticket.

**Client Id:** Ahora Business Hub client id.

For more information consult on [https://help.flexygo.com/](https://help.flexygo.com/)
{: .flx-warning-card }

**Client Secret:** Ahora Business Hub client secret.

For more information consult on [https://help.flexygo.com/](https://help.flexygo.com/)
{: .flx-warning-card }

**Tenant Id:** Ahora Business Hub tenant id.

For more information consult on [https://help.flexygo.com/](https://help.flexygo.com/)
{: .flx-warning-card }

## Functions dll

### Consult expenses
```cs
FLEXYGO.Ticket.AbhGetExpenses(EntityObject Entity, ref ProcessHelper Ret, int? Status = null, DateTime? DateMin = null, DateTime? DateMax = null)
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| Entity | EntityObject | The entity of the object |
| Ret | ProcessHelper | The return of the process data |
| Status? | int | Expense status (0 - Pending. 1 - Confirmed.) |
| DateMin? | DateTime | Minimum expense date. | 
| DateMax? | DateTime | Maximum expense date. |

#### Returns

JSON string

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

### Consult especific expense

```cs
FLEXYGO.Ticket.AbhGetExpense(EntityObject Entity, string ExpenseId, ref ProcessHelper Ret)
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| ExpenseId | string | Expense identificator |

#### Returns

JSON string

### Consult image of the expense

```cs
FLEXYGO.Ticket.AbhGetExpenseImage(EntityObject Entity, string RemoteUri, ref ProcessHelper Ret)
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| RemoteUri | string | Remote image uri of the expense |

Return base64 string

### Consult users

```cs
FLEXYGO.Ticket.AbhGetUsers(EntityObject Entity, ref ProcessHelper Ret)
```

#### Returns

JSON string

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

### Consult my user

```cs
FLEXYGO.Ticket.AbhGetMyUser(EntityObject Entity, ref ProcessHelper Ret)
```

#### Returns

JSON string

### Consult especific user

```cs
FLEXYGO.Ticket.AbhGetUser(EntityObject Entity, string UserId, ref ProcessHelper Ret)
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| UserId | string | User identificator. |

#### Returns

JSON string

### Consult companies from a especific user

```cs
FLEXYGO.Ticket.AbhGetUserCompanies(EntityObject Entity, string UserId, ref ProcessHelper Ret)
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| UserId | string | User identificator. |

#### Returns

JSON string

### Consult categories

```cs
FLEXYGO.Ticket.AbhGetCategories(EntityObject Entity, ref ProcessHelper Ret)
```

#### Returns

JSON string

| Name | Type | Description |
| --- | --- | --- |
| id  | Number(10) | Unique identifier. |
| name | Text(255) | Category name. |
| parent | Number(10) | Parent category identifier. |
| icon | Text(100) | Category icon name. |
| iva | Decimal | Tax rate that applies to the expenses of the category. Supports two decimal places. If it is null, the category supports multiple types. |
| business\_category\_id | Number(11) | Business type (to allow searches by location). Could be:<br><br>*   1: Restaurants<br>*   2: Parking |

### Consult payment methods

```cs
FLEXYGO.Ticket.AbhGetPaymentMethods(EntityObject Entity, ref ProcessHelper Ret)
```

#### Returns

JSON string

### Consult cost centers

```cs
FLEXYGO.Ticket.AbhGetCostCenters(EntityObject Entity, ref ProcessHelper Ret)
```

#### Returns

JSON string

| Name | Type | Description |
| --- | --- | --- |
| id  | Number(10) | Unique identifier. |
| code | Text(255) | Cost center code. |
| name | Text(255) | Cost center name. |
| company\_id | Number(10) | Company ID. |
| active | Boolean | Indicates whether the cost center is active or not. I don't know They may allocate expenses to inactive centers. |
| global | Boolean | Indicates whether the cost center is global or not. If the overall Any user in the company can allocate expenses in it. If it is not global, it must be assigned to users so that they can allocate expenses to it. |

### Consult expense sheets

```cs
FLEXYGO.Ticket.AbhGetReports(EntityObject Entity, ref ProcessHelper Ret, DateTime? DateMin = null, DateTime? DateMax = null, int? Status = null, DateTime? UpdatedAfter = null)
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| DateMin? | DateTime | Minimum expense sheet date. |
| DateMax? | DateTime | Maximum expense sheet date. |
| Status? | int | Expense sheet status (0 - Open. 1 - Pending review. 2 - In Review. 3 - Rejected. 4 - Processed. 5 - Approved.) |
| UpdatedAfter? | DateTime | Updated after expense sheet date. |

#### Returns

JSON string

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

### Consult expenses from an expense sheet

```cs
FLEXYGO.Ticket.AbhGetReportExpenses(EntityObject Entity, string ReportId, ref ProcessHelper Ret)
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| ReportId | string | Expense sheet identificator. |

#### Returns

JSON string

### Consult expense sheet status

```cs
FLEXYGO.Ticket.AbhGetReportStatus(EntityObject Entity, ref ProcessHelper Ret)
```

#### Returns

JSON string

### Consult departments

```cs
FLEXYGO.Ticket.AbhGetDepartments(EntityObject Entity, ref ProcessHelper Ret)
```

#### Returns

JSON string

### Consult client list

```cs
FLEXYGO.Ticket.AbhGetClients(EntityObject Entity, ref ProcessHelper Ret)
```

#### Returns

JSON string

### Consult a client

```cs
FLEXYGO.Ticket.AbhGetClient(EntityObject Entity, string CompanyId, string ClientId, ref ProcessHelper Ret)
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| CompanyId | string | Company identificator. |
| ClientId | string | Client identificator. |

#### Returns

JSON string

### Create client

```cs
FLEXYGO.Ticket.AbhCreateClient(EntityObject Entity, string Label, string Value, string CompanyId, ref ProcessHelper Ret)
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| Label | string | Label displayed to the user. |
| Value | string | ue to be saved. |
| CompanyId | string | Company identificator. |

#### Returns

JSON string

### Update client

```cs
FLEXYGO.Ticket.AbhUpdateClient(EntityObject Entity, string ActualCompanyId, string ClientId,string Label, string Value, string CompanyId, ref ProcessHelper Ret)
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| ActualCompanyId | string | Actual company identificator. |
| ClientId | string | Client identificator. |
| Label | string | Label displayed to the user. |
| Value | string | Value to be saved. |
| CompanyId | string | Company identificator. |

#### Returns

JSON string

### Active a client

```cs
FLEXYGO.Ticket.AbhActiveClient(EntityObject Entity, string CompanyId, string ClientId, ref ProcessHelper Ret)
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| CompanyId | string | Company identificator. |
| ClientId | string | Client identificator. |

#### Returns

JSON string

### Disable a client

```cs
FLEXYGO.Ticket.AbhDisableClient(EntityObject Entity, string CompanyId, string ClientId, ref ProcessHelper Ret)
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| CompanyId | string | Company identificator. |
| ClientId | string | Client identificator. |

#### Returns

JSON string


### Delete client

```cs
FLEXYGO.Ticket.AbhDeleteClient(EntityObject Entity, string CompanyId, string ClientId, ref ProcessHelper Ret)
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| CompanyId | string | Company identificator. |
| ClientId | string | Client identificator. |

Return boolean string

### Consult cards

```cs
FLEXYGO.Ticket.AbhGetCards(EntityObject Entity, string CompanyId, ref ProcessHelper Ret)
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| CompanyId | string | Company identificator. |

#### Returns

JSON string

### Consult especific card

```cs
FLEXYGO.Ticket.AbhGetCard(EntityObject Entity, string CompanyId, string CardId, ref ProcessHelper Ret)
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| CompanyId | string | Company identificator. |
| CardId | string | Card identificator. |

#### Returns

JSON string