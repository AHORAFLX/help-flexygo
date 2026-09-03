# ¿Cómo modificar la configuración de correo encriptada?

Por razones de seguridad, Flexygo encripta automáticamente la configuración de correo durante la instalación o actualización. Para poder modificar estos ajustes es necesario desencriptarlos primero mediante unos comandos específicos de Windows.

## Pasos para desencriptar y modificar

1. Abre una ventana CMD con permisos de administrador.
2. Accede al directorio de la versión activa del framework .NET:

    ```
    cd C:\Windows\Microsoft.NET\Framework\v4.0.30319
    ```

    !!! note "Nota"
        Ajusta la versión de la carpeta según la que tengas instalada en tu sistema.

3. Ejecuta este comando para desencriptar (sustituye `C:\webs\Prueba` por la ruta real de tu instalación):

    ```
    aspnet_regiis.exe -pdf "system.net/mailSettings/smtp" "C:\webs\Prueba"
    ```

4. Ya puedes editar la configuración de correo.
5. Para volver a encriptarla, ejecuta:

    ```
    aspnet_regiis.exe -pef "system.net/mailSettings/smtp" "C:\webs\Prueba"
    ```

    Como alternativa, la encriptación se reactiva automáticamente al actualizar Flexygo.

## Véase también

* [¿Cómo modificar las cadenas de conexión encriptadas?](EncryptedConnectionStrings.md)
* [¿Cómo desencriptar la cadena de conexión y la cuenta de mail del fichero Web.config?](DecryptWebConfig.md)
