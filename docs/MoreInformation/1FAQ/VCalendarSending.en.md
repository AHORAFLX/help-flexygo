# Sending a standard VCalendar from a library process

Flexygo has a function you can call from library processes that sends an email with a vCalendar attachment.

You need to fill in the corresponding parameters and pass them to the `FLEXYGO.Vcalendar` function.

```csharp
public Vcalendar(DateTime aStartDate, DateTime aEnddate, string aLocation, string aOrganizerName, string aOrganizerEmail, string aSummary, string aSubject, string aAttendeeEmail, string aguid, string aBody = "", bool aReminder = false, bool aDefaultBodyText = true, dynamic aReminderDate = null)
```

Example showing the instance and call to then send the email:

```csharp
var vcal = new FLEXYGO.Vcalendar(pStartDate, pEndDate, pLocation, pCreatedByName, pEmail, pObservations, pSubject, pEmail, pCalendarIdentificator, pBodyTextMail);

vcal.Send();
```

If the user sending it has an associated mail account, that account will be used. Otherwise, the default sending account defined in the system will be used.

The system account is the one entered in the **Outgoing mail** step of the [configuration wizard](../../1Deployment/2ConfigWizard/Configuration.md#5-outgoing-mail), and it's stored in the `MailSettings` section of the Backend's `appsettings.json`.

## See also

* [Sincronización con la agenda de mi cuenta de correo](https://help.flexygo.com/support/solutions/articles/154000130134-sincronizaci%C3%B3n-con-la-agenda-de-mi-cuenta-de-correo)
