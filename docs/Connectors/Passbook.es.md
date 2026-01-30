# Integración con Passbook { .flx-title-with-image }

![Passbook](../docs_assets/images/Passbook/WalletIcon.png){ .fh-image-of-title }

Passbook es el formato utilizado por tarjetas y cupones para integrarse en Apple Wallet.  
**flexygo** permite ahora generar un passbook de forma sencilla.

A continuación explicaremos cómo generar e instalar los certificados obligatorios para poder generar el passbook correctamente.  
El primer requisito es disponer de una cuenta de desarrollador de Apple.

## Apple WWDR

Para obtener el primer certificado solo tenemos que ir a [https://www.apple.com/certificateauthority/](https://www.apple.com/certificateauthority/) y descargar [Worldwide Developer Relations - G4 (Expiring 12/10/2030 00:00:00 UTC)](https://www.apple.com/certificateauthority/AppleWWDRCAG4.cer), que es el que funciona actualmente.

Instalamos el certificado y seleccionamos el almacén **“Intermediate Certification Authorities”**.

![](../docs_assets/images/Passbook/passbook1.png "Image 1. Certificate store")

## Crear Pass Type ID

Accede a [https://developer.apple.com/](https://developer.apple.com/) e inicia sesión con una cuenta de desarrollador.  
Una vez dentro, entra en **Account** y accede al menú de la izquierda **Certificates, IDs & Profiles**.

![](../docs_assets/images/Passbook/passbook2.png "Image 2. Developer panel")

![](../docs_assets/images/Passbook/passbook3.png "Image 2. Developer panel")

Añadimos un nuevo **Identifier** y elegimos el tipo **Pass Type IDs**, rellenando la información.  
Es recomendable que el identificador mantenga la estructura `pass.com.x`.

![](../docs_assets/images/Passbook/passbook4.png "Image 3. Pass Type IDs")

![](../docs_assets/images/Passbook/passbook5.png "Image 3. Pass Type IDs")

## Crear una petición de certificado (CSR)

Si no tenemos **OpenSSL** instalado, podemos descargarlo e instalarlo desde aquí: [OpenSSL](https://wiki.openssl.org/index.php/Binaries).

Una vez instalado, abrimos la consola con permisos de administrador, nos situamos en la ruta donde queremos generar los ficheros y ejecutamos el comando:

```shell
openssl req -new -newkey rsa:2048 -out passbook.csr -keyout passbook.key
```

Aparecerá una serie de datos a rellenar. El primero será la **PEM pass phrase**; es muy importante recordarla ya que la usaremos para generar el passbook y para firmar con la clave.

Al terminar de rellenar la información, se habrán generado dos ficheros en la ruta indicada:

* `passbook.key` (clave privada para firmar)
* `passbook.csr` (petición de certificado)

## Firmar la CSR y crear el certificado Passbook

Volvemos al portal de desarrolladores y, desde el menú de certificados, pulsamos **+** para crear un nuevo **Pass Type Id Certificate**.

![](../docs_assets/images/Passbook/passbook6.png "Image 4. Passbook certificate")

A continuación, rellenamos el nombre del certificado y elegimos el identificador que hemos creado previamente; aparecerá como opción desplegable.
Si nos fijamos en el valor del desplegable, coincide con **TeamID.IdentifierPassTypeID**.

![](../docs_assets/images/Passbook/passbook7.png "Image 5. Passbook certificate")

En el siguiente paso debemos seleccionar el archivo CSR que generamos antes (`passbook.csr`), lo subimos y continuamos.
Se mostrará una ventana de resumen con el certificado recién generado, su fecha de caducidad, nombre, tipo, etc.

![](../docs_assets/images/Passbook/passbook8.png "Image 6. Certificate request")

## Convertir el certificado pass.cer a PEM y luego a PFX

Primero, colocamos el archivo `.cer` descargado desde la web de Apple en la misma carpeta que `passbook.key` y `passbook.csr`.

Después abrimos la consola de OpenSSL, navegamos hasta esa carpeta y ejecutamos:

```shell
openssl x509 -in pass.cer -inform der -out passbook.pem
```

```shell
openssl pkcs12 -export -out passbook.pfx -inkey passbook.key -in passbook.pem
```

Con este último comando, nos pedirá la contraseña (pass phrase) asociada a la clave privada.
Una vez introducida, se generará el archivo `passbook.pfx`, que debemos instalar en el equipo.

## Añadir el certificado PFX al servidor

Vamos a la consola de certificados:
**Certificates (Local Computer) -> Personal -> Certificates**.

Botón derecho, **All Tasks → Import**, siguiente, y al examinar el archivo cambiamos el filtro de extensión para buscar `.pfx` y seleccionamos el fichero generado.

En el siguiente paso introducimos la contraseña de la clave privada, marcamos la opción de exportable e incluimos todas las propiedades extendidas.
Lo añadimos al almacén **Personal**.

![](../docs_assets/images/Passbook/passbook9.png "Image 7. Import PFX certificate")

![](../docs_assets/images/Passbook/passbook10.png "Image 7. Import PFX certificate")

Con esto tendremos instalados los certificados necesarios para poder generar Passbook desde **flexygo**.
Es importante que tanto el archivo `passbook.pfx` como `AppleWWDRCAG4.cer` estén en una carpeta accesible para la aplicación.

También es importante que, desde la consola, una vez importado el certificado en el almacén Personal, hagamos:

* Botón derecho → All Tasks → Manage Private Keys
* Añadimos **IIS_IUSRS** y le damos permisos.

![](../docs_assets/images/Passbook/passbook11.png "Image 8. Certificate management")

Es necesario también tener configurado el **impersonate**, ya que la generación del passbook hace uso de él.

Si, aun habiendo dado permisos a **IIS_IUSRS** y usando un usuario de impersonation con permisos elevados, sigue dando error de permisos al generar el passbook, será necesario modificar la identidad del Application Pool a **LocalSystem**.

![](../docs_assets/images/Passbook/passbook12.PNG "Image 8. IIS configuration")

## Configuración en flexygo

Una vez realizado todo lo anterior, podemos proceder a configurar los ajustes en **flexygo**:

* **Passbook_AppleWWDRCACertificatePath**: Ruta absoluta al certificado de Apple.
* **Passbook_CertificatePath**: Ruta absoluta a nuestro certificado.
* **Passbook_CertificatePassword**: Contraseña (clave privada) de nuestro certificado.
* **Passbook_PassTypeIdentifier**: Pass Type ID creado en Apple (por ejemplo, `pass.com.x`).
* **Passbook_TeamIdentifier**: Valor Team ID, visible en el portal de desarrolladores de Apple en
  *Membership → Team ID*.

## Ejemplo de uso desde DLL

<fh-modal class="button" modal_id="fhmodal_dll_example" modal_title="DLL function example">Ejemplo de DLL</fh-modal>

## Ejemplo de diseño y layout

![](../docs_assets/images/Passbook/passbook14.PNG "Image 10. Layout example")

![](../docs_assets/images/Passbook/passbook13.PNG "Image 11. Passbook example")

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