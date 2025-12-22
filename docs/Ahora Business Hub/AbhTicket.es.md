# Ticket Abh

Ticket Abh es una integración de **Ahora Business Hub** que permite a **flexygo** consultar gastos.

## Activar Ticket Abh

<flx-navbutton class="button" type="openpage" pagetypeid="list" objectname="sysAbh_Integrations_Settings" defaults="{'IntegrationId':'abh_ticket'}" excludehist="false">
    Añadir Ticket Abh a tu proyecto
</flx-navbutton>

## Configurar Ticket Abh

![Ticket Abh configuration](/docs_assets/images/AbhTicket/AbhTicketSettings.png "Ticket Abh configuration")

**Integración:** Nombre de la integración que vamos a configurar, en este caso *Ahora Business Hub – Ticket*.

**Client Id:** Identificador de cliente de Ahora Business Hub.  
Más información en: [https://help.flexygo.com/](https://help.flexygo.com/)
{: .flx-warning-card }

**Client Secret:** Clave secreta de cliente de Ahora Business Hub.  
Más información en: [https://help.flexygo.com/](https://help.flexygo.com/)
{: .flx-warning-card }

**Tenant Id:** Identificador de tenant de Ahora Business Hub.  
Más información en: [https://help.flexygo.com/](https://help.flexygo.com/)
{: .flx-warning-card }

## Funciones DLL

### Consultar gastos
```cs
FLEXYGO.Ticket.AbhGetExpenses(EntityObject Entity, ref ProcessHelper Ret, int? Status = null, DateTime? DateMin = null, DateTime? DateMax = null)
```

#### Parámetros

| Nombre   | Tipo          | Descripción                                       |
| -------- | ------------- | ------------------------------------------------- |
| Entity   | EntityObject  | Entidad del objeto.                               |
| Ret      | ProcessHelper | Datos devueltos por el proceso.                   |
| Status?  | int           | Estado del gasto (0 - Pendiente, 1 - Confirmado). |
| DateMin? | DateTime      | Fecha mínima.                                     |
| DateMax? | DateTime      | Fecha máxima.                                     |

#### Devuelve (JSON)

Incluye campos como: `_id`, `type_id`, `user_id`, `status_id`, `amount`, `date`, `currency`, `taxes`, `custom_fields`, etc.

### Consultar un gasto específico

```cs
FLEXYGO.Ticket.AbhGetExpense(EntityObject Entity, string ExpenseId, ref ProcessHelper Ret)
```

#### Parámetros

| Nombre    | Tipo   | Descripción              |
| --------- | ------ | ------------------------ |
| ExpenseId | string | Identificador del gasto. |

Devuelve un JSON con los datos del gasto.

### Consultar imagen del gasto

```cs
FLEXYGO.Ticket.AbhGetExpenseImage(EntityObject Entity, string RemoteUri, ref ProcessHelper Ret)
```

#### Parámetros

| Nombre    | Tipo   | Descripción               |
| --------- | ------ | ------------------------- |
| RemoteUri | string | Ruta remota de la imagen. |

Devuelve una cadena base64.

### Consultar usuarios

```cs
FLEXYGO.Ticket.AbhGetUsers(EntityObject Entity, ref ProcessHelper Ret)
```

Devuelve un JSON con lista de usuarios y sus datos.

### Consultar mi usuario

```cs
FLEXYGO.Ticket.AbhGetMyUser(EntityObject Entity, ref ProcessHelper Ret)
```

Devuelve un JSON con los datos del usuario autenticado.

### Consultar usuario específico

```cs
FLEXYGO.Ticket.AbhGetUser(EntityObject Entity, string UserId, ref ProcessHelper Ret)
```

### Consultar empresas de un usuario

```cs
FLEXYGO.Ticket.AbhGetUserCompanies(EntityObject Entity, string UserId, ref ProcessHelper Ret)
```

### Consultar categorías

```cs
FLEXYGO.Ticket.AbhGetCategories(EntityObject Entity, ref ProcessHelper Ret)
```

Devuelve un JSON con categorías de gasto.

### Consultar métodos de pago

```cs
FLEXYGO.Ticket.AbhGetPaymentMethods(EntityObject Entity, ref ProcessHelper Ret)
```

### Consultar centros de coste

```cs
FLEXYGO.Ticket.AbhGetCostCenters(EntityObject Entity, ref ProcessHelper Ret)
```

Incluye id, código, nombre, activo, global, etc.

### Consultar hojas de gastos

```cs
FLEXYGO.Ticket.AbhGetReports(EntityObject Entity, ref ProcessHelper Ret, DateTime? DateMin = null, DateTime? DateMax = null, int? Status = null, DateTime? UpdatedAfter = null)
```

### Consultar gastos de una hoja

```cs
FLEXYGO.Ticket.AbhGetReportExpenses(EntityObject Entity, string ReportId, ref ProcessHelper Ret)
```

### Consultar estado de hojas de gasto

```cs
FLEXYGO.Ticket.AbhGetReportStatus(EntityObject Entity, ref ProcessHelper Ret)
```

### Consultar departamentos

```cs
FLEXYGO.Ticket.AbhGetDepartments(EntityObject Entity, ref ProcessHelper Ret)
```

### Consultar lista de clientes

```cs
FLEXYGO.Ticket.AbhGetClients(EntityObject Entity, ref ProcessHelper Ret)
```

### Consultar un cliente

```cs
FLEXYGO.Ticket.AbhGetClient(EntityObject Entity, string CompanyId, string ClientId, ref ProcessHelper Ret)
```

### Crear cliente

```cs
FLEXYGO.Ticket.AbhCreateClient(EntityObject Entity, string Label, string Value, string CompanyId, ref ProcessHelper Ret)
```

### Actualizar cliente

```cs
FLEXYGO.Ticket.AbhUpdateClient(EntityObject Entity, string ActualCompanyId, string ClientId, string Label, string Value, string CompanyId, ref ProcessHelper Ret)
```

### Activar cliente

```cs
FLEXYGO.Ticket.AbhActiveClient(EntityObject Entity, string CompanyId, string ClientId, ref ProcessHelper Ret)
```

### Desactivar cliente

```cs
FLEXYGO.Ticket.AbhDisableClient(EntityObject Entity, string CompanyId, string ClientId, ref ProcessHelper Ret)
```

### Eliminar cliente

```cs
FLEXYGO.Ticket.AbhDeleteClient(EntityObject Entity, string CompanyId, string ClientId, ref ProcessHelper Ret)
```

Retorna un booleano (string).

### Consultar tarjetas

```cs
FLEXYGO.Ticket.AbhGetCards(EntityObject Entity, string CompanyId, ref ProcessHelper Ret)
```

### Consultar tarjeta específica

```cs
FLEXYGO.Ticket.AbhGetCard(EntityObject Entity, string CompanyId, string CardId, ref ProcessHelper Ret)
```