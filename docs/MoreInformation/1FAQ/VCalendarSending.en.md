# Sending a standard VCalendar from a library process

Flexygo has a function you can call from library processes that sends an email with a vCalendar attachment.

You need to fill in the corresponding parameters and pass them to the `FLEXYGO.Vcalendar` function.

```vb
Public Sub New(aStartDate As Date, aEnddate As Date, aLocation As String, aOrganizerName As String, aOrganizerEmail As String, aSummary As String, aSubject As String, aAttendeeEmail As String, aguid As String, Optional aBody As String = "", Optional aReminder As Boolean = False)
```

Example showing the instance and call to then send the email:

```vb
Dim vcal As New FLEXYGO.Vcalendar(pStartDate, pEndDate, pLocation, pCreatedByName, pEmail, pObservations, pSubject, pEmail, pCalendarIdentificator, pBodyTextMail)

vcal.Send()
```

If the user sending it has an associated mail account, that account will be used. Otherwise, the default sending account defined in the system will be used.

The system account is the one entered during installation, and it's stored in the `web.config` file, in the `mailSettings` section.

## See also

* [Sincronización con la agenda de mi cuenta de correo](https://help.flexygo.com/support/solutions/articles/154000130134-sincronizaci%C3%B3n-con-la-agenda-de-mi-cuenta-de-correo)
