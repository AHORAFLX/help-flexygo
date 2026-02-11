# Office 365 Integration { .fh-title-with-image }

![Office 365](../docs_assets/images/Office365/Office365Logo.png){ .fh-image-of-title }

In order to make calls to Microsoft Graph, which is a RESTfull web API, that enables you to access Microsoft Cloud service resources, it is required to register your app and get authentication tokens for a user or service. If you want to develop an office integration from **flexygo** platform you have two options:

## Developing integration

### Recommended Option

Register your app using the [Azure portal](https://docs.microsoft.com/en-us/graph/auth-register-app-v2).  
Other example [link](https://www.re-mark-able.net/how-to-access-data-from-the-beta-channel-of-graph-api/).  
In addition to registering the application in Azure make sure to enable access permissions to Contacts and Calendars.

![](../docs_assets/images/Office365/Office365APIPermissions.png "Image 1. Office 365 API Permissions")

![](../docs_assets/images/Office365/Office365AgregPermissions.png "Image 2. Office 365 API Agregate Permissions")

![](../docs_assets/images/Office365/Office365CalPermissions.png "Image 3. Office 365 API Calendars Permissions")

![](../docs_assets/images/Office365/Office365ContPermissions.png "Image 4. Office 365 API Contacts Permissions")

Inform the base URL of your app + `/Webhooks/OfficeToken.aspx` as your redirect URl's. Fill office setting fields with your app **client id**, **tenant id** and genereted **secret**.

### Deprecated Option

(This option was deprecated by Microsoft).

~~Take profit of the already registered flexygo app and its configuration. Use flexygo app in Azure.~~

## Retrieve contacts example

In the following example you can get a contact collection from the default contacts folder of the signed-in user.

1.  Firstly, get and store the required token process <flx-navbutton class="link" type="execprocess" processname="GetOfficeToken"defaults="{'service':'contacts'}" targetid="popup" showprogress="false">Get Office Token</flx-navbutton> 
2.  Then get your contacts with <flx-navbutton class="link" type="execprocess" processname="GetOfficeContacts"showprogress="false">Get Office Contacts</flx-navbutton>

```
Response:
``` 

<fh-modal class="button" modal_id="fhmodal_office_contacts" modal_title="Office 365 Contacts">Insert, Update And Delete contact</fh-modal>

### Retrieve calendar events example

In the example below we will retrieve a list of calendar events from the signed-in user.

1.  Firstly, get and store the required token process <flx-navbutton class="link" type="execprocess" processname="GetOfficeToken" defaults="{'service':'calendar'}" showprogress="false">Get Office Token</flx-navbutton>
2.  Then get your events with <flx-navbutton class="link" type="execprocess" processname="GetOfficeCalendar" showprogress="false">Get Office Calendar</flx-navbutton>

```
Response:
```

<fh-modal class="button" modal_id="fhmodal_office_events" modal_title="Office 365 Events">Insert, Update And Delete event</fh-modal>

```vbnet { #fhmodal_office_contacts }
Imports FLEXYGO.Objects
Imports FLEXYGO.Processing.ProcessManager
Imports RestSharp
Imports Newtonsoft.Json

Imports FLEXYGO.Utilities.General
Imports FLEXYGO.OfficeResourceTypes

Namespace Samples
    Class Samples365


        ''' <summary>
        ''' Sample Create, update and delete contact in office 365
        ''' </summary>
        ''' <param name="Entity">The entity.</param>
        ''' <param name="Ret">The ret.</param>
        ''' <returns><c>true</c> if ok, <c>false</c> otherwise.</returns>
        Public Shared Function SampleContactsOffice365(Entity As EntityObject, ByRef Ret As ProcessHelper) As Boolean


            Try
                Dim contactsOffice = New List(Of Contact)
                Dim infoJson As Newtonsoft.Json.Linq.JArray


                '1) Creamos el objeto contact con los datos necesarios
                Dim contactOffice As Contact = New Contact With {
                                        .id = Nothing, 'Nothing para nuevo, valor del office id para actualizar el contacto.
                                        .givenName = "Contacto prueba",
                                        .businessAddress = New PhysicalAddress With {.city = "Alboraya", .countryOrRegion = "España", .postalCode = "46120", .state = "Valencia", .street = "Ceramistes,19"},
                                        .jobTitle = "Programador",
                                        .businessPhones = New List(Of String) From {"96123123", "622622622"},
                                        .homePhones = New List(Of String) From {"96154789654"},
                                        .emailAddresses = New List(Of EmailAddress) From {New EmailAddress With {.address = "prueba@prueba.com", .name = "Contacto prueba"}}
                                    }

                '2) Lo añadmos a la lista de contactar, máximo 4 por envio
                contactsOffice.Add(contactOffice)
                Dim response As IRestResponse = Nothing

                '3) Envio de contactos a office 365 del usuario, antes debe haber sido identificado en azure mediante el proceso: FLEXYGO.Office.GetConsent(Entity, Ret, "contacts")
                If FLEXYGO.Office.SendOfficeContacts(contactsOffice, Ret, response, Ret.ConfToken.UserSecurity.UserId) Then
                    '4) Recogemos la respuesta
                    infoJson = JsonConvert.DeserializeObject(Of Dictionary(Of String, Object))(response.Content)("responses")
                    For Each info In infoJson
                        If info("status").ToString = "201" OrElse info("status").ToString = "200" Then

                            '5)Codigo del contacto en office para poder borrarlo. Guardarlo en la ficha del contacto para actualizar o borrar.
                            Dim officeId = info("body")("id").ToString

                            contactOffice.id = officeId
                            contactOffice.givenName = "Contacto actualizado"
                            response = Nothing
                            Ret.Data = New BaseCollection
                            '6) Actualizamos el contacto.
                            If Not FLEXYGO.Office.SendOfficeContacts(contactsOffice, Ret, response, Ret.ConfToken.UserSecurity.UserId) Then
                                Throw Ret.LastException
                            End If

                            '7) Cargamos el contacto en la lista de contactos a borrar
                            Dim contactsOfficeDelete = New List(Of Contact)
                            Dim contactOfficeDelete = New Contact With {.id = officeId}
                            contactsOfficeDelete.Add(contactOfficeDelete)

                            '8) Borrado de contactos a office 365 del usuario.
                            response = Nothing
                            Ret.Data = New BaseCollection
                            If Not FLEXYGO.Office.DeleteOfficeContacts(contactsOfficeDelete, Ret, response, Ret.ConfToken.UserSecurity.UserId) Then
                                Throw Ret.LastException
                            End If


                        End If
                    Next
                Else
                    Throw Ret.LastException
                End If

                Ret.Success = True
                Return True

            Catch ex As Exception
                Ret.Success = False
                Ret.LastException = ex
                Return False
            End Try
        End Function

    End Class

End Namespace
```

```vbnet { #fhmodal_office_events }
Imports FLEXYGO.Objects
Imports FLEXYGO.Processing.ProcessManager
Imports RestSharp
Imports Newtonsoft.Json

Imports FLEXYGO.Utilities.General
Imports FLEXYGO.OfficeResourceTypes

Namespace Samples
    Class Samples365

        ''' <summary>
        ''' Sample Create, update and delete events in office 365
        ''' </summary>
        ''' <param name="Entity">The entity.</param>
        ''' <param name="Ret">The ret.</param>
        ''' <returns><c>true</c> if ok, <c>false</c> otherwise.</returns>
        Public Shared Function SampleEventsOffice365(Entity As EntityObject, ByRef Ret As ProcessHelper) As Boolean

            Try
                Dim eventsOffice = New List(Of OfficeEvent)
                Dim infoJson As Newtonsoft.Json.Linq.JArray


                '1) Creamos el objeto eventOffice con los datos necesarios

                Dim eventOffice As New OfficeEvent
                eventOffice.subject = "Asunto"
                eventOffice.body = New ItemBody With {
                                    .content = "<p style='margin-top:10px'>Cuerpo del evento</p>",
                                    .contentType = "html"
                                }
                eventOffice.categories = New List(Of String) From {"Categoria evento"}
                Dim dateIni As DateTime = DateTime.Parse(Format(DateTime.Parse(Now), "yyyy-MM-dd"))
                eventOffice.start = New DateTimeTimeZone With {.dateTime = Now.ToString("s"), .timeZone = "Romance Standard Time"}
                eventOffice.end = New DateTimeTimeZone With {.dateTime = Now.AddMinutes(30).ToString("s"), .timeZone = "Romance Standard Time"}
                eventOffice.importance = "high" ' "normal" "low"
                eventOffice.organizer = New Recipient With {
                                    .emailAddress = New EmailAddress With {
                                        .address = "info@correo.com",
                                        .name = "organizador"
                                    }
                                }
                eventOffice.reminderMinutesBeforeStart = 15
                eventOffice.isReminderOn = True


                '2) Lo añadmos a la lista de eventos, máximo 4 por envio
                eventsOffice.Add(eventOffice)
                Dim response As IRestResponse = Nothing

                '3) Envio de eventos a office 365 del usuario, antes debe haber sido identificado en azure mediante el proceso: FLEXYGO.Office.GetConsent(Entity, Ret, "calendar")
                If FLEXYGO.Office.SendOfficeEvents(eventsOffice, Ret, response, Ret.ConfToken.UserSecurity.UserId) Then
                    '4) Recogemos la respuesta
                    infoJson = JsonConvert.DeserializeObject(Of Dictionary(Of String, Object))(response.Content)("responses")
                    For Each info In infoJson
                        If info("status").ToString = "201" OrElse info("status").ToString = "200" Then

                            '5)Codigo del evento en office para poder borrarlo. Guardarlo en la ficha del evento para actualizar o borrar.
                            Dim officeId = info("body")("id").ToString

                            eventOffice.id = officeId
                            eventOffice.subject = "Asunto actualizado"
                            response = Nothing
                            Ret.Data = New BaseCollection
                            '6) Actualizamos el evento.
                            If Not FLEXYGO.Office.SendOfficeEvents(eventsOffice, Ret, response, Ret.ConfToken.UserSecurity.UserId) Then
                                Throw Ret.LastException
                            End If

                            '7) Cargamos el evento en la lista de eventos a borrar
                            Dim eventsOfficeDelete As New List(Of OfficeEvent)
                            Dim eventOfficeDelete As New OfficeEvent With {.id = officeId}
                            eventsOfficeDelete.Add(eventOfficeDelete)

                            '8) Borrado de eventos a office 365 del usuario.
                            response = Nothing
                            Ret.Data = New BaseCollection
                            If Not FLEXYGO.Office.DeleteOfficeEvents(eventsOfficeDelete, Ret, response, Ret.ConfToken.UserSecurity.UserId) Then
                                Throw Ret.LastException
                            End If


                        End If
                    Next
                Else
                    Throw Ret.LastException
                End If

                Ret.Success = True
                Return True

            Catch ex As Exception
                Ret.Success = False
                Ret.LastException = ex
                Return False
            End Try
        End Function

    End Class

End Namespace
```