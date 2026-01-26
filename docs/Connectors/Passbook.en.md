# Passbook integration { .flx-title-with-image }

![Passbook](/docs_assets/images/Passbook/WalletIcon.png){ .fh-image-of-title }

Passbook is the format used by cards and coupons to be integrated into the Apple Wallet. **flexygo** now allows us to generate a passbook easily.

Next we will explain how to generate and install the certificates that are mandatory to be able to generate the passbook correctly. The first requirement to be able to generate it is to have an apple developer account.

## Apple WWDR

To obtain the first certificate we only have to go to [https://www.apple.com/certificateauthority/](https://www.apple.com/certificateauthority/) and download [Worldwide Developer Relations - G4 (Expiring 12/10/2030 00:00:00 UTC)](https://www.apple.com/certificateauthority/AppleWWDRCAG4.cer) , which is currently the one that works.

We install the certificate and select the store "**intermediate certification authorities**".

![](/docs_assets/images/Passbook/passbook1.png "Image 1. Certificate store")

## Create Pass Type ID

Go to [https://developer.apple.com/](https://developer.apple.com/) and sign in with a development account. Once inside we enter **Account** and we will see the following web, we access the menu on the left **Certificates, IDs & Profiles**.

![](/docs_assets/images/imagesPassbook/passbook2.png "Image 2. Developer panel")

![](/docs_assets/images/Passbook/passbook3.png "Image 2. Developer panel")

We add a new **Identifier** and choose the type **Pass Type IDs**, fill in the information. It is advisable that the identifier maintains the structure pass.com.x

![](/docs_assets/images/Passbook/passbook4.png "Image 3. Pass Type IDs")

![](/docs_assets/images/Passbook/passbook5.png "Image 3. Pass Type IDs")

## Create a certificate request (CSR)

First if we do not have OpenSSL installed we can download and install it from here [OpenSSL](https://wiki.openssl.org/index.php/Binaries)

Once we have it, we open the console with administrator permissions, we position ourselves in the path where we want the files to be generated and we use the command:

```shell
openssl req -new -newkey rsa:2048 -out passbook.csr -keyout passbook.key
```

A series of data will appear to fill in, among them the first will be the PEM pass phrase, it is very important that we remember what we have put because we are also going to use it to generate the passbook and to use the key to sign.

When all the information is filled in, two files will have been generated in the path to which you point a passbook.key (private key to sign) and passbook.csr which is the certificate request.

## Sign the request (CSR) and create a Passbook certificate

We return to the developer portal and this time from the certificates menu and click + to create a new **Pass Type Id Certficate**.

![](/docs_assets/images/Passbook/passbook6.png "Image 4. Passbook certificate")

Next, we have to fill in the name of our certificate and we have to choose the identifier that we have previously created, which will appear as an option in that drop-down. If we look at the value of the dropdown, it will match the value of **TeamID.IdentifierPassTypeID**.

![](/docs_assets/images/Passbook/passbook7.png "Image 5. Passbook certificate")

In the next step it asks us to choose the certificate request file that we have generated in the previous step, we upload it and continue. Then a summary window will appear with the certificate that we have just generated with its expiration date, its name, the type of certificate, etc...

![](/docs_assets/images/Passbook/passbook8.png "Image 6. Certificate request")

## Convert the pass.cer certificate from binary-encoded to PEM-formatted and then to PFX

First of all, we put the **.cer** certificate file that we have downloaded from the Apple website in the same folder as **Passbook.key** and **Passbook.csr**. Once this is done, we open the OpenSSL console and navigate to that folder and launch the following commands:

```shell
openssl x509 -in pass.cer -inform der -out passbook.pem
```

```shell
openssl pkcs12 -export -out passbook.pfx -inkey passbook.key -in passbook.pem
```

With the latter, it will ask you for the password to sign with your private key (pass phrase), which is the one you established at the beginning. Once entered, a **Passbook.pfx** file will have been generated, which we have to install on the computer.

## Add PFX certificate to the server

We go to the console where we have the certificates listed **Certificates (Local Computer)** -> **Personal** -> **Certificates**. Right click, **all tasks** and **import**, next and when examining the file we change the extension we are looking for to **.pfx** and import the file that we have generated .pfx

In the next step it will ask us for the password of the private key, we mark it as exportable and include all the extended properties. We add it to the **Personal** store.

![](/docs_assets/images/Passbook/passbook9.png "Image 7. Import PFX certificate")

![](/docs_assets/images/Passbook/passbook10.png "Image 7. Import PFX certificate")

With this we would have installed the necessary certificates to be able to generate Passbook through Flexygo, it is important that both the **passbook.pfx** file and the **AppleWWDRCAG4.cer** that we downloaded from Apple have to be in a folder accessible by the application since they must be accessed.

It is also important that from the console once we have imported our certificate in the personal store, right click **all the tasks**, **manage private keys** and **add to IIS\_IUSRS** and give it permissions.

![](/docs_assets/images/Passbook/passbook11.png "Image 8. Certificate management")

It is also necessary to have the **impersonate** configured since the generation of the passbook makes use of it.

In the event that, although having given permissions to **IIS\_USRS** and using a user for impersonation with elevated permissions, it continues to give a permissions error when it is generated. In this case, it would be necessary to modify the identity of the application group that is being used to **LocalSystem**.

![](/docs_assets/images/Passbook/passbook12.png "Image 8. IIS configuration")

## Flexygo Settings

Once we have this we can proceed to configure the settings in Flexygo

*   **Passbook\_AppleWWDRCACertificatePath:** Absolute path to apple certificate
*   **Passbook\_CertificatePath:** Absolute path to our certificate
*   **Passbook\_CertificatePassword:** Private key of our certificate
*   **Passbook\_PassTypeIdentifier:** Pass Type IDs created in apple (pass.com.x)
*   **Passbook\_TeamIdentifier:** We can check our Team ID value in the apple developer portal in Membership -> Team ID

## Example of use from DLL

<fh-modal class="button" modal_id="fhmodal_dll_example" modal_title="DLL function example">DLL example</fh-modal>

## Design example and layout

![](/docs_assets/images/Passbook/passbook14.png "Image 10. Layout example")

![](/docs_assets/images/Passbook/passbook13.png "Image 11. Passbook example")

```vbnet { #fhmodal_dll_example }
Public Shared Function generatePassbook(ByVal Entity As EntityObject, ByRef Ret As ProcessHelper) As Boolean
        Try
            Dim aPrimaryField As List(Of KeyValuePair(Of String, String)) = New List(Of KeyValuePair(Of String, String))
            aPrimaryField.Add(New KeyValuePair(Of String, String)("Nombre", "Aitor"))
            Dim aSecondaryField As List(Of KeyValuePair(Of String, String)) = New List(Of KeyValuePair(Of String, String))
            aSecondaryField.Add(New KeyValuePair(Of String, String)("Apellido", "Torres"))
            Dim aAuxiliaryField As List(Of KeyValuePair(Of String, String)) = New List(Of KeyValuePair(Of String, String))
            aAuxiliaryField.Add(New KeyValuePair(Of String, String)("Movil", "123456"))
            Dim aBackField As List(Of KeyValuePair(Of String, String)) = New List(Of KeyValuePair(Of String, String))
            aBackField.Add(New KeyValuePair(Of String, String)("Otros", "Loren ipsum"))
            Dim aBackgroundColor As String = "#000000"
            Dim aForegroundColor As String = "#FFFFFF"
            Dim aLabelColor As String = "#FFFFFF"
            Dim aIcon As Byte() = File.ReadAllBytes(HttpContext.Current.Server.MapPath("~\img\icons\icon-256x256.png"))
            Dim aLogo As Byte() = File.ReadAllBytes(HttpContext.Current.Server.MapPath("~\img\icons\icon-256x256.png"))
            Dim aDescription As String = "Passbook flexygo"
            Dim aOrganizationName As String = "Flexygo"
            Dim aLogoText As String = "Logo text"
            Dim aThumbnail As Byte() = File.ReadAllBytes(HttpContext.Current.Server.MapPath("~\img\Avatars\avatar_blank.png"))
            Dim aHeaderField As KeyValuePair(Of String, String)=("Cabecera","Business card")

            'vCard info for qr barcode
            Dim FirstName As String = "Aitor"
            Dim LastName As String = "Torres"
            Dim CompanyName As String = "Flexygo"
            Dim JobTitle As String = "Programador"
            Dim StreetAddress As String = "Carrer dels Ceramistes 19"
            Dim Zip As String = "46900"
            Dim City As String = "Valencia"
            Dim CountryName As String = "España"
            Dim Phone As String = "123456"
            Dim Mobile As String = "987654"
            Dim Fax As String = ""
            Dim Email As String = "aitor@ahora.es"
            Dim HomePage As String = "www.flexygo.com"
            Dim loUid As String = System.Guid.NewGuid().ToString()
            Dim vCard As New VCard(FirstName, LastName, CompanyName, JobTitle, StreetAddress, Zip, City, CountryName, Phone, Mobile, Fax, Email, HomePage, loUid)

            Dim aBarcode As String = vCard.VCardBody()

            Dim passbook As New Passbook(aPrimaryField, aBackgroundColor, aForegroundColor, aLabelColor, aIcon, aDescription, aOrganizationName, aLogoText, aBarcode, aHeaderField, aLogo, aSecondaryField, aAuxiliaryField, aBackField, aThumbnail)
            'We can write on disk, download it, send by mail, etc...
            File.WriteAllBytes(HttpContext.Current.Server.MapPath("~\Custom\passbook\prueba.pkpass"), passbook.generatePassbook())
            Dim path As String = HttpContext.Current.Server.MapPath("~\Custom\passbook\prueba.pkpass")
            Dim dw As New Utilities.Download With {
                    .Path = path,
                    .DeleteAfterDownload = True
                }
                
            Ret.JSCode = String.Format("window.open('{0}')", Ret.ConfToken.ResolveUrl(dw.GetLink))
            Ret.Success = True
            Ret.SuccessMessage = "Passbook generated"
            Return Ret.Success

        Catch ex As Exception
            Ret.Success = False
            Ret.LastException = ex
            Return Ret.Success
        End Try
    End Function
```