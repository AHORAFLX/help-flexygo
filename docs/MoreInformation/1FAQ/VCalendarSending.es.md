# Realizar un envío de estándar VCalendar en un proceso de librería

En Flexygo existe una función para llamar desde procesos de librería que se encarga de enviar un correo con un adjunto de tipo vCalendar.

Debes completar los parámetros correspondientes y enviárselos a la función `FLEXYGO.Vcalendar`.

```vb
Public Sub New(aStartDate As Date, aEnddate As Date, aLocation As String, aOrganizerName As String, aOrganizerEmail As String, aSummary As String, aSubject As String, aAttendeeEmail As String, aguid As String, Optional aBody As String = "", Optional aReminder As Boolean = False)
```

Ejemplo donde se realiza la instancia y la llamada para luego enviar el correo:

```vb
Dim vcal As New FLEXYGO.Vcalendar(pStartDate, pEndDate, pLocation, pCreatedByName, pEmail, pObservations, pSubject, pEmail, pCalendarIdentificator, pBodyTextMail)

vcal.Send()
```

Si el usuario que realiza el envío tiene asociada una cuenta de correo, se utilizará dicha cuenta. De lo contrario, se usará la cuenta de envío por defecto definida en el sistema.

La cuenta del sistema es la que se introduce a la hora de realizar la instalación, y se registra en el archivo `web.config`, en el apartado de `mailSettings`.

## Véase también

* [Sincronización con la agenda de mi cuenta de correo](https://help.flexygo.com/support/solutions/articles/154000130134-sincronizaci%C3%B3n-con-la-agenda-de-mi-cuenta-de-correo)
