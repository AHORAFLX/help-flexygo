# Integración con SendinBlue { .fh-title-with-image }

![SendinBlue](../docs_assets/images/SendinBlue/SendinBlue_Logo.png){ .fh-image-of-title }

SendinBlue es una plataforma de automatización de marketing que te ayuda a compartir campañas de email y publicidad con clientes y otros destinatarios.

Puedes acceder al área de integración de SendinBlue desde <flx-navbutton class="link" type="execprocess" processname="sysEditSettings" objectname="sysSettings" objectwhere="(Settings.[GroupName]='flx-sendinblue')" showprogress="false">aquí</flx-navbutton>.

Para conectar con la API de SendinBlue es necesaria una **API Key**, así que el primer paso es indicar dicha clave.  
Si necesitas más información, puedes consultar la documentación oficial de SendinBlue sobre API Keys: [documentación](https://help.sendinblue.com/hc/es/articles/209467485--Qu%C3%A9-es-una-clave-API-y-d%C3%B3nde-puedo-conseguir-la-m%C3%ADa-).
{: .flx-warning-card }

Una vez incluidos los parámetros, podrás utilizar las funciones que flexygo proporciona para la creación de **campañas**, **emails transaccionales**, **contactos** y **listas**.

## Email de campaña

Puedes crear campañas usando las funciones proporcionadas por flexygo, por ejemplo:

<fh-modal class="button" modal_id="fhmodal_create_campaign_email" modal_title="Crear email de campaña">Crear email de campaña</fh-modal>

En el siguiente ejemplo puedes obtener toda la información de campañas de email.  
Formato JSON [aquí](http://jsonviewer.stack.hu/).

## Email transaccional

Puedes enviar emails transaccionales utilizando las funciones proporcionadas por flexygo, por ejemplo:

Los emails transaccionales se utilizan para todos los correos no promocionales: creación de cuenta, confirmación de pedido, solicitud de nueva contraseña, etc.
{: .flx-warning-card }

<fh-modal class="button" modal_id="fhmodal_create_transaction_email" modal_title="Crear email transaccional">Crear email transaccional</fh-modal>

```vbnet { #fhmodal_create_campaign_email }
Imports FLEXYGO.SendinBlue
Imports FLEXYGO.SendinBlueResourcesTypes
Imports FLEXYGO.Objects
Imports FLEXYGO.Processing.ProcessManager
Imports FLEXYGO.Exceptions
Imports FLEXYGO.Utilities.General.Util
Imports Newtonsoft.Json
Imports Newtonsoft.Json.Linq
Imports RestSharp

Public Class SampleSendinBlue
    Public Shared Function SampleCampaign(ByVal Entity As EntityObject, ByRef Ret As ProcessHelper) As Boolean
        Dim apikey As String = Nothing
        Dim errorMsg As String = Nothing
        Dim response As IRestResponse = Nothing

        Dim responseJson

        'Dim options = New JObject From {
        '    {"templateStatus", "true"}
        '}
        'Se pueden obtener todos los templates mediante GetTemplates(Ret, response, options)
        Dim templateId = 1

        'Obtenemos el emisor
        Dim senderId = GetSender(Ret)

        Try
            If CheckApiKey(apikey, errorMsg) Then
                '1) Creamos una lista nueva
                If CreateList(Ret, response, "List" + Date.Now.ToString("yyyy-MM-dd HH:mm:ss"), "1") Then
                    If Convert.ToInt32(response.StatusCode) = 201 Then
                        responseJson = JsonConvert.DeserializeObject(response.Content)
                        Dim listId = responseJson("id")

                        If Not IsBlank(listId) Then

                            Dim sbContact As New SBContact With {
                                .email = "micontacto@flexygo.com",
                                .attributes = New JObject From {
                                    {"NOMBRE", "Contacto"},
                                    {"APELLIDOS", "Flexygo"}
                                },
                                .listIds = New List(Of Integer) From {
                                    listId
                                },
                                .updateEnabled = True
                            }

                            '3) Creamos el contacto enlazado a la lista
                            If CreateOrUpdateContact(Ret, response, sbContact) Then
                                If Convert.ToInt32(response.StatusCode) = 201 OrElse Convert.ToInt32(response.StatusCode) = 204 Then

                                    Dim campaignSender = New SBSender With {
                                        .id = senderId
                                    }
                                    Dim campaignEmail As New SBEmailCampaign With {
                                        .name = "Campaña Flexygo",
                                        .subject = "Asunto Prueba",
                                        .sender = campaignSender,
                                        .templateId = templateId,
                                        .recipients = New SBRecipients With {
                                            .listIds = New List(Of Integer) From {
                                                listId
                                            }
                                        }
                                    }

                                    '4) Creamos la campaña enlazada con la lista creada anteriormente
                                    If CreateEmailCampaign(Ret, response, campaignEmail) Then
                                        If Convert.ToInt32(response.StatusCode) = 201 Then
                                            responseJson = JsonConvert.DeserializeObject(response.Content)
                                            Dim campaignId = responseJson("id")
                                            '5) Enviamos la campaña
                                            EmailCampaignSendNow(Ret, response, campaignId)
                                        End If
                                    Else
                                        Ret.Success = False
                                        Return False
                                    End If

                                End If
                            End If

                        End If

                    End If
                End If
            Else
                Ret.Success = False
                Ret.LastException = New LocalizedException(errorMsg)
                Return False
            End If

            Ret.Success = True
            Return True

        Catch ex As Exception
            Ret.Success = False
            Ret.LastException = ex
            Return False
        End Try
    End Function

    Public Shared Function GetSender(Ret As ProcessHelper) As Integer
        Dim response As IRestResponse = Nothing
        Dim senderId As Integer = Nothing

        Try
            GetSenders(Ret, response)

            If Convert.ToInt32(response.StatusCode) = 200 Then
                Dim responseJson = JsonConvert.DeserializeObject(response.Content)
                For Each sender In responseJson("senders")
                    senderId = sender("id")
                    Exit For
                Next
            End If

            Return senderId

        Catch ex As Exception
            Ret.Success = False
            Ret.LastException = ex
            Return False
        End Try
    End Function

End Class
```

```vbnet { #fhmodal_create_transaction_email }
Imports FLEXYGO.SendinBlue
Imports FLEXYGO.SendinBlueResourcesTypes
Imports FLEXYGO.Objects
Imports FLEXYGO.Processing.ProcessManager
Imports FLEXYGO.Exceptions
Imports FLEXYGO.Utilities.General.Util
Imports Newtonsoft.Json
Imports Newtonsoft.Json.Linq
Imports RestSharp

Public Class SampleSendinBlue
    Public Shared Function SampleTransactionalEmail(ByVal Entity As EntityObject, ByRef Ret As ProcessHelper) As Boolean
        Dim apikey As String = Nothing
        Dim errorMsg As String = Nothing
        Dim response As IRestResponse = Nothing

        'Obtenemos el emisor
        Dim senderId = GetSender(Ret)

        Try
            If CheckApiKey(apikey, errorMsg) Then
                Dim receipts = New List(Of SBEmailInfo) From {
                    New SBEmailInfo With {
                        .email = "micontacto@flexygo.com",
                        .name = "Flexygo Pruebas"
                    }
                }

                Dim transactionalSender = New SBSender With {
                    .id = senderId
                }

                Dim transEmail As New SBTransactionalEmail With {
                    .sender = transactionalSender,
                    .to = receipts,
                    .subject = "Mi {{params.subject}}",
                    .htmlContent = "<html><body><h1>Mi primer email transaccional {{params.parameter}}</h1></body></html>",
                    .params = New JObject From {
                        {"parameter", "Flexygo parametro"},
                        {"subject", "Asunto de Flexygo"}
                    }
                }

                '3) Enviamos el email
                If SendTransactionalEmail(Ret, response, transEmail) Then
                    If Convert.ToInt32(response.StatusCode) <> 201 Then
                        Ret.Success = False
                        Ret.LastException = New LocalizedException(response.Content)
                        Return False
                    End If
                Else
                    Ret.Success = False
                    Return False
                End If

            Else
                Ret.Success = False
                Ret.LastException = New LocalizedException(errorMsg)
                Return False
            End If

            Ret.Success = True
            Return True

        Catch ex As Exception
            Ret.Success = False
            Ret.LastException = ex
            Return False
        End Try
    End Function

    Public Shared Function GetSender(Ret As ProcessHelper) As Integer
        Dim response As IRestResponse = Nothing
        Dim senderId As Integer = Nothing

        Try
            GetSenders(Ret, response)

            If Convert.ToInt32(response.StatusCode) = 200 Then
                Dim responseJson = JsonConvert.DeserializeObject(response.Content)
                For Each sender In responseJson("senders")
                    senderId = sender("id")
                    Exit For
                Next
            End If

            Return senderId

        Catch ex As Exception
            Ret.Success = False
            Ret.LastException = ex
            Return False
        End Try
    End Function

End Class
```