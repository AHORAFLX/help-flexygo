# Integración con Google { .fh-title-with-image }

![Google](../docs_assets/images/GoogleAPIKey/GoogleLogo.png){ .fh-image-of-title }

Para realizar llamadas a la API de Google, que es una API RESTful, que te permite acceder a los recursos de servicio de Google Cloud, es necesario registrar tu aplicación y obtener tokens de autenticación para un usuario o servicio.

Crea y configura el proyecto en [console de Google](https://console.cloud.google.com/).

## Ejemplo de recuperación de contactos

En el siguiente ejemplo puedes obtener una colección de contactos de la carpeta de contactos predeterminada del usuario que ha iniciado sesión.

1.   Primero, obtén y almacena el proceso de token requerido <flx-navbutton class="link" type="execprocess" processname="GetGoogleToken" defaults="{'service':'contacts'}" showprogress="false">obten el token de Google</flx-navbutton>.
2.  Luego, obtén tus contactos con <flx-navbutton class="link" type="execprocess" processname="GetGoogleContacts" showprogress="false">obten los contactos de Google</flx-navbutton>

```
Response:
```

<fh-modal class="button" modal_id="fhmodal_google_contacts" modal_title="Google Contacts">Insertar, Actualizar y Eliminar contacto<fh-modal>

## Ejemplo de recuperación de eventos de calendario

En el ejemplo a continuación recuperaremos una lista de eventos de calendario del usuario que ha iniciado sesión.

1.  Primero, obtén y almacena el proceso de token requerido <flx-navbutton class="link" type="execprocess" processname="GetGoogleToken" defaults="{'service':'calendar'}" showprogress="false"> obten el token de Google </flx-navbutton>
2.  Luego, obtén tus eventos con <flx-navbutton class="link" type="execprocess" processname="GetGoogleCalendar" showprogress="false">obten el calendario de Google</flx-navbutton>

```
Response:
```

<fh-modal class="button" modal_id="fhmodal_google_events" modal_title="Google Events">Insertar, Actualizar y Eliminar evento<fh-modal>

```vbnet { #fhmodal_google_contacts }
Imports FLEXYGO.GoogleResourceTypes
Imports FLEXYGO.Objects
Imports FLEXYGO.Processing.ProcessManager
Imports Newtonsoft.Json
Imports RestSharp
Imports FLEXYGO.Google

Public Class SampleGoogle
    Public Shared Function SampleContactsGoogle(ByVal Entity As EntityObject, ByRef Ret As ProcessHelper) As Boolean

        Try

            Dim readFields As String = "metadata,addresses,biographies,birthdays,emailAddresses,genders,names,nicknames,occupations,organizations,phoneNumbers"

            Dim contactCreate As GoogleContactCreateRequest
            Dim contactsGoogle = New List(Of ContactPerson)
            Dim contactGoogle As GoogleContact

            Dim contactUpdate As GoogleContactUpdateRequest
            Dim contactGoogleupdate As GoogleContact

            Dim response As IRestResponse = Nothing
            Dim infoJson As Newtonsoft.Json.Linq.JArray

            '1) Creamos el objeto contact con los datos necesarios.
            contactGoogle = New GoogleContact With {
                .names = New List(Of ContactName) From {
                    New ContactName With {
                        .givenName = "Contacto prueba"
                    }
                },
                .addresses = New List(Of Addresses) From {
                    New Addresses With {
                        .city = "Valencia",
                        .streetAddress = "Cami del Mar"
                    },
                    New Addresses With {
                        .city = "Valencia",
                        .streetAddress = "Cami del Mar 2"
                    }
                },
                .phoneNumbers = New List(Of PhoneNumber) From {
                    New PhoneNumber With {
                        .type = "work",
                        .value = "600000000"
                    },
                    New PhoneNumber With {
                        .type = "home",
                        .value = "700000000"
                    }
                },
                .emailAddresses = New List(Of EmailAddress) From {
                    New EmailAddress With {
                        .type = "work",
                        .value = "micontacto@gmail.com"
                    },
                    New EmailAddress With {
                        .type = "home",
                        .value = "micontacto2@gmail.com"
                    }
                },
                .birthdays = New List(Of Birthday) From {
                    New Birthday With {
                        .[date] = New ContactDate With {
                            .day = 1,
                            .month = 1,
                            .year = 1900
                        }
                    }
                },
                .occupations = New List(Of Occupation) From {
                    New Occupation With {
                        .value = "Programador"
                    },
                    New Occupation With {
                        .value = "Implantador"
                    }
                },
                .genders = New List(Of Gender) From {
                    New Gender With {
                        .value = "male",
                        .addressMeAs = "he"
                    }
                }
            }

            '2) Lo añadimos a la lista de contactos, máximo 4 por envio.
            contactsGoogle.Add(New ContactPerson() With {.contactPerson = contactGoogle})

            contactCreate = New GoogleContactCreateRequest With {
                .contacts = contactsGoogle,
                .readMask = readFields 'Propiedades que se recibiran como respuesta.
            }

            '3) Envio de contactos a cuentA de google del usuario, antes debe haber sido identificado en google mediante el proceso: FLEXYGO.Google.GetConsent(Entity, Ret, "contacts")
            If CreateContactsToGoogleApi(contactCreate, Ret, Ret.ConfToken.UserSecurity.UserId, response) Then
                '4) Recogemos la respuesta.
                infoJson = JsonConvert.DeserializeObject(Of Dictionary(Of String, Object))(response.Content)("createdPeople")

                For Each info In infoJson
                    If info("httpStatusCode").ToString = "201" OrElse info("httpStatusCode").ToString = "200" Then
                        '5) Codigo del contacto en google para poder borrarlo. Guardarlo en la ficha del contacto para actualizar o borrar.
                        Dim googleResourceName = info("person")("resourceName").ToString()
                        '6) Propiedad necesaria para realizar la actualización de contactos.
                        Dim googleEtag = info("person")("etag").ToString()

                        Dim contactsListUpdate = New Dictionary(Of String, GoogleContact)

                        contactGoogleupdate = New GoogleContact With {
                            .etag = googleEtag,
                            .phoneNumbers = New List(Of PhoneNumber) From {
                                New PhoneNumber With {
                                    .type = "mobile",
                                    .value = "612345678"
                                }
                            },
                            .birthdays = New List(Of Birthday) From {
                                New Birthday With {
                                    .[date] = New ContactDate With {
                                        .day = 3,
                                        .month = 12,
                                        .year = 1995
                                    }
                                }
                            }
                        }

                        contactsListUpdate.Add(googleResourceName, contactGoogleupdate)
                        contactUpdate = New GoogleContactUpdateRequest With {
                            .contacts = contactsListUpdate,
                            .readMask = readFields, 'Propiedades que se recibiran como respuesta.
                            .updateMask = "phoneNumbers,birthdays" 'Propiedades que ve van a actualizar.
                        }
                        '7) Actualizamos el contacto.
                        If Not UpdateContactsToGoogleApi(contactUpdate, Ret, Ret.ConfToken.UserSecurity.UserId, response) Then
                            Throw Ret.LastException
                        End If

                        '8) Cargamos el contacto en la lista de contactos a borrar.
                        Dim ContactsToDelete As ContactsResource = New ContactsResource With {
                            .resourceNames = New List(Of String) From {
                                googleResourceName
                            }
                        }
                        '9) Borrado de contactos de google del usuario.
                        If Not DeleteContactsToGoogleApi(ContactsToDelete, Ret, Ret.ConfToken.UserSecurity.UserId, response) Then
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
```

```vbnet { #fhmodal_google_events }
Imports FLEXYGO.GoogleResourceTypes
Imports FLEXYGO.Objects
Imports FLEXYGO.Processing.ProcessManager
Imports Newtonsoft.Json
Imports RestSharp
Imports FLEXYGO.Google
Imports FLEXYGO.Utilities.General.Util

Public Class SampleGoogle
    Public Shared Function SampleEventsGoogle(ByVal Entity As EntityObject, ByRef Ret As ProcessHelper) As Boolean

        Try
            Dim userId = Ret.ConfToken.UserSecurity.UserId

            Dim eventsGoogle = New List(Of GoogleEvent)
            Dim eventsGoogleDelete = New List(Of GoogleEvent)
            Dim eventGoogle As GoogleEvent
            Dim eventGoogleDelete As GoogleEvent
            Dim response As Object = New Object

            Dim calendarId As String = ""

            '1) Creamos el objeto event con los datos necesarios.
            eventGoogle = New GoogleEvent With {
                .summary = "Flexygo : Evento de prueba",
                .description = "<h1 style=""color: #1a73e8;"">Evento de prueba</h1><p style='margin-top:10px'>Descripción de prueba</p>",
                .location = "Cami del Mar"
            }

            Dim dateEvent = Date.Now
            eventGoogle.start = New StartEvent With {.dateTime = DateTime.Parse(dateEvent.ToString("dd/MM/yyyy")).Add(TimeSpan.Parse("14:00")).ToString("s")}
            eventGoogle.end = New EndEvent With {.dateTime = DateTime.Parse(eventGoogle.start.dateTime).AddMinutes(45).ToString("s")}

            '2) Obtenedor el Id del calendario donde vamos a crear el evento
            GetCalendarId(userId, Ret, calendarId)
            eventGoogle.organizer = New Organizer With {
                .email = "micorreo@gmail.com",
                .displayName = "Flexygo"
            }

            '3) Lo añadimos a la lista de eventos, máximo 4 por envio.
            eventsGoogle.Add(eventGoogle)

            '4) Envio de eventos a la cuentga de google del usuario, antes debe haber sido identificado en google mediante el proceso: FLEXYGO.Google.GetConsent(Entity, Ret, "calendar")
            If FLEXYGO.Google.SendEventsToGoogleApi(eventsGoogle, Ret, userId, response) Then
                '5) Recogemos la respuesta
                Dim infoSplit = response.ToString().Split("<response-item").ToList
                '6) Quitamos el primer elemento que no contiene información de los elementos
                infoSplit.RemoveAt(0)
                For Each info In infoSplit
                    If info.ToString.Contains("HTTP/1.1 200 OK") Then
                        Dim infoJson = GetJsonResponseEvent(info)
                        '7) Codigo del evento en google para poder borrarlo. Guardarlo en la ficha del evento para actualizar o borrar.
                        Dim googleId = infoJson("id").ToString

                        eventGoogle = Nothing
                        eventsGoogle.Clear()

                        Dim startDate = infoJson("start")("dateTime").ToString
                        Dim endDate = infoJson("end")("dateTime").ToString
                        eventGoogle = New GoogleEvent With {
                            .id = googleId,
                            .summary = "Flexygo : Evento de prueba actualizado",
                            .description = "<h1 style=""color: #1a73e8;"">Evento de prueba actualizado</h1><p style='margin-top:10px'>Descripción de prueba actualizado</p>",
                            .start = New StartEvent With {.dateTime = startDate},
                            .end = New EndEvent With {.dateTime = endDate}
                        }

                        eventsGoogle.Add(eventGoogle)

                        '8) Actualizamos el evento.
                        If FLEXYGO.Google.SendEventsToGoogleApi(eventsGoogle, Ret, userId, response) Then
                            eventsGoogle.Clear()
                        Else
                            Throw Ret.LastException
                        End If

                        '9) Cargamos el evento en la lista de eventos a borrar.
                        eventGoogleDelete = New GoogleEvent With {
                            .id = googleId
                        }
                        eventsGoogleDelete.Add(eventGoogleDelete)

                        '10) Borrado de eventos de google del usuario.
                        If FLEXYGO.Google.SendEventsToGoogleApi(eventsGoogleDelete, Ret, userId, response, True) Then ''Si el parametro IsDeleted = True -> Elimina los contactos de Google
                            eventsGoogleDelete.Clear()
                        Else
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
```