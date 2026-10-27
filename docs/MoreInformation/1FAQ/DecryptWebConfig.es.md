# ¿Cómo descifrar y volver a cifrar la configuración?

Por seguridad, Flexygo guarda cifradas las cadenas de conexión, la contraseña del correo y otras claves de su configuración. Están en los `appsettings` de la carpeta `conf` del Backend y del Frontend, y se cifran valor a valor: el resto del fichero se sigue leyendo en claro.

* **Qué ficheros:** solo `appsettings.json` y `appsettings.Production.json`. Los demás (`appsettings.Development.json`…) se quedan siempre en claro.
* **Dónde:** en IIS y en contenedores Docker de producción. En el resto (desarrollo, Kestrel, el Docker de pruebas del instalador) la aplicación los descifra al arrancar.
* **La llave:** en Windows hay **una por servidor** (`%ProgramData%\Flexygo\keys\config.key`), compartida por todas las aplicaciones del servidor. Para llevar una aplicación a otro servidor, `config export-key` en el origen y `config import-key` en el destino.
* **Docker:** en producción la llave se da como secreto `flexygo_config_key`, el mismo para todos los contenedores. Si falta el fichero del secreto, la aplicación no arranca y dice por qué.

## Cambiar una cadena de conexión, el correo u otra clave

1. En la carpeta de la aplicación, desde una consola de administrador, descifra la configuración:

    ```
    Flexygo.Backend.exe config decrypt
    ```

    (o `Flexygo.Frontend.exe config decrypt` para el Frontend).

2. Edita el valor en el `appsettings.json`: la cadena en `ConnectionStrings`, la cuenta de correo en `MailSettings`.
3. Vuelve a cifrar la configuración:

    ```
    Flexygo.Backend.exe config encrypt
    ```

    (o `Flexygo.Frontend.exe config encrypt` para el Frontend).

4. Reinicia la aplicación (en IIS, recicla el pool) para que lea el valor nuevo. Si te saltas el paso 3, la aplicación cifra al arrancar lo que haya quedado en claro.

`config status` dice dónde está la llave y qué tiene cifrado cada fichero.

Todo el detalle (la consola, perder la llave, actualizar, cambiar de servidor y Docker) está en [Cifrado de los appsettings](../../1Deployment/2ConfigWizard/EncryptedSettings.md).
