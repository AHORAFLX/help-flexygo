# Realizar un envío de estándar VCalendar en un proceso de librería

En Flexygo existe una función para llamar desde procesos de librería que se encarga de enviar un correo con un adjunto de tipo vCalendar.

Debes completar los parámetros correspondientes y enviárselos a la función `FLEXYGO.Vcalendar`.

```csharp
public Vcalendar(DateTime aStartDate, DateTime aEnddate, string aLocation, string aOrganizerName, string aOrganizerEmail, string aSummary, string aSubject, string aAttendeeEmail, string aguid, string aBody = "", bool aReminder = false, bool aDefaultBodyText = true, dynamic aReminderDate = null)
```

Ejemplo donde se realiza la instancia y la llamada para luego enviar el correo:

```csharp
var vcal = new FLEXYGO.Vcalendar(pStartDate, pEndDate, pLocation, pCreatedByName, pEmail, pObservations, pSubject, pEmail, pCalendarIdentificator, pBodyTextMail);

vcal.Send();
```

Si el usuario que realiza el envío tiene asociada una cuenta de correo, se utilizará dicha cuenta. De lo contrario, se usará la cuenta de envío por defecto definida en el sistema.

La cuenta del sistema es la que se indica en el paso **Correo saliente** del [asistente de configuración](../../1Deployment/2ConfigWizard/Configuration.md#5-correo-saliente), y se guarda en la sección `MailSettings` del `appsettings.json` del Backend.

## Véase también

* [Sincronización con la agenda de mi cuenta de correo](https://help.flexygo.com/support/solutions/articles/154000130134-sincronizaci%C3%B3n-con-la-agenda-de-mi-cuenta-de-correo)
