# ¿Cómo modificar las cadenas de conexión encriptadas?

Por razones de seguridad, Flexygo encripta por defecto las cadenas de conexión durante la instalación o actualización. Cuando es necesario cambiar el usuario o la contraseña de conexión, primero hay que desencriptar la configuración.

## Desencriptación

1. Abre una ventana CMD con permisos de administrador.
2. Accede al directorio de la versión activa del framework .NET:

    ```
    cd C:\Windows\Microsoft.NET\Framework\v4.0.30319
    ```

3. Ejecuta este comando (ajustando la ruta según corresponda):

    ```
    aspnet_regiis.exe -pdf "connectionStrings" "C:\webs\Prueba"
    ```

4. Modifica las cadenas de conexión según sea necesario.

## Reencriptación

Ejecuta:

```
aspnet_regiis.exe -pef "connectionStrings" "C:\webs\Prueba"
```

O bien actualiza Flexygo, ya que la encriptación se reactiva automáticamente.

## Véase también

* [¿Cómo modificar la configuración de correo encriptada?](EncryptedMailConfig.md)
* [¿Cómo desencriptar la cadena de conexión y la cuenta de mail del fichero Web.config?](DecryptWebConfig.md)
