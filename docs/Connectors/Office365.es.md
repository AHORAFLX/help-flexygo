# Integración con Office 365 { .flx-title-with-image }

![Office 365](/docs_assets/images/Office365/Office365Logo.png){ .flx-image-of-title }

Para poder realizar llamadas a **Microsoft Graph**, una API REST que permite acceder a los recursos de Microsoft Cloud, es necesario registrar tu aplicación y obtener *tokens* de autenticación para un usuario o servicio.  
Si deseas desarrollar una integración con Office desde la plataforma **flexygo**, tienes dos opciones:

## Desarrollo de la integración

### Opción recomendada

Registra tu aplicación usando el [Azure portal](https://docs.microsoft.com/en-us/graph/auth-register-app-v2  ):  
Otro [ejemplo](https://www.re-mark-able.net/how-to-access-data-from-the-beta-channel-of-graph-api/).

Además de registrar la aplicación en Azure, asegúrate de **habilitar permisos de acceso a Contacts y Calendars**.

![](/docs_assets/images/Office365/Office365APIPermissions.png "Image 1. Office 365 API Permissions")

![](/docs_assets/images/Office365/Office365AgregPermissions.png "Image 2. Office 365 API Agregate Permissions")

![](/docs_assets/images/Office365/Office365CalPermissions.png "Image 3. Office 365 API Calendars Permissions")

![](/docs_assets/images/Office365/Office365ContPermissions.png "Image 4. Office 365 API Contacts Permissions")

Indica la URL base de tu aplicación + `/Webhooks/OfficeToken.aspx` como Redirect URL.  
Rellena los campos de configuración de Office con tu **client id**, **tenant id** y el **secret** generado.

### Opción obsoleta

(Esta opción fue retirada por Microsoft)

~~Aprovechar la app flexygo ya registrada en Azure.~~

## Ejemplo de obtención de contactos

En este ejemplo se obtiene una colección de contactos desde la carpeta de contactos por defecto del usuario autenticado.

1. Obtén y guarda el token necesario: <flx-navbutton class="link" type="execprocess" processname="GetOfficeToken" defaults="{'service':'contacts'}" targetid="popup" showprogress="false">Conseguir token de Office</flx-navbutton>

2. Recupera los contactos: <flx-navbutton class="link" type="execprocess" processname="GetOfficeContacts" showprogress="false">Conseguir contacto de Office</flx-navbutton>

```
Response:
```

<fh-modal class="button" modal_id="fhmodal_office_contacts" modal_title="Office 365 Contacts">Insert, Update And Delete contact</fh-modal>

## Ejemplo de obtención de eventos del calendario

En este ejemplo se recupera una lista de eventos del calendario del usuario autenticado.

1. Obtén y guarda el token necesario: <flx-navbutton class="link" type="execprocess" processname="GetOfficeToken" defaults="{'service':'calendar'}" showprogress="false">Conseguir token de Office</flx-navbutton>

2. Recupera los eventos: <flx-navbutton class="link" type="execprocess" processname="GetOfficeCalendar" showprogress="false">Conseguir contacto de Office</flx-navbutton>

Response:

<fh-modal class="button" modal_id="fhmodal_office_events" modal_title="Office 365 Events">Insertar, actualizar y borrar evento</fh-modal>

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