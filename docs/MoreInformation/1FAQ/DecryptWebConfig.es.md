# ¿Cómo desencriptar la cadena de conexión y la cuenta de mail del fichero Web.config?

Por razones de seguridad, el instalable de las aplicaciones Flexygo encripta el contenido de 2 secciones del fichero `Web.config`, en las cuales se especifican las cadenas de conexión y la configuración de la cuenta de correo que utiliza el sistema para el envío de mails.

Existen 2 artículos diferenciados, ya que son secciones distintas dentro del mismo fichero. En ambos se detallan los comandos tanto para desencriptar como para volver a encriptar una vez realizadas las modificaciones pertinentes.

## Secciones a desencriptar

* **Cadenas de conexión:** [¿Cómo modificar las cadenas de conexión encriptadas?](EncryptedConnectionStrings.md)
* **Configuración de la cuenta de mail:** [¿Cómo modificar la configuración de correo encriptada?](EncryptedMailConfig.md)

!!! warning "Nota importante"
    La encriptación/desencriptación solo es válida en la máquina en la que se hizo la instalación inicial, ya que la semilla utilizada depende de la máquina en cuestión.

    Si se traslada el fichero entre máquinas, lo recomendable es desencriptarlo en la máquina inicial. De lo contrario, habría que reescribir manualmente ambas secciones de forma desencriptada.
