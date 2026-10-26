# Cifrado de los appsettings

En **IIS** y en un **contenedor de producción**, los `appsettings` del Backend y del Frontend guardan **cifradas en disco** las contraseñas y las claves. En cualquier otro sitio (desarrollo, Kestrel, el Docker de pruebas del instalador) se quedan en claro. La aplicación las lee como siempre: el cifrado no cambia nada de cómo se configura ni de cómo funciona, solo que quien abra el fichero no ve los secretos.

Se cifra **valor a valor**: el resto del fichero sigue legible y editable.

```json
"ConnectionStrings": {
  "ConfConnectionString": "enc:v1:Xq3k…",
  "DataConnectionString": "enc:v1:9fTb…"
},
"JwtSettings": {
  "SecretKey": "enc:v1:mW0p…"
},
```

---

## 1. Qué se cifra

| Valor | Dónde suele estar |
|---|---|
| `ConnectionStrings:*` (todas las cadenas de conexión) | Backend |
| `MailSettings:Password` | Backend |
| `JwtSettings:SecretKey` | Backend y Frontend |
| `DataProtection:Key` | Backend y Frontend |
| `DatabaseNuget:NugetPassword` | Backend |
| `Setup:AdminPassword` | Backend |

Solo se cifran dos ficheros de la carpeta `conf`: `appsettings.json` y `appsettings.Production.json`. Los demás (`appsettings.Development.json`, `appsettings.local.json`…) se quedan siempre en claro; si alguno trae valores cifrados de una versión anterior, la aplicación los descifra al arrancar. Un valor vacío no se cifra.

Cada valor cifrado empieza por `enc:v1:` (AES-256-GCM). Un valor que no empieza así se lee tal cual: se puede escribir uno en claro a mano y la aplicación lo cifra en el siguiente arranque.

---

## 2. Dónde se cifra

Lo decide el sitio donde corre la aplicación; no hay ningún ajuste que lo cambie.

| Dónde corre la aplicación | Secretos en disco |
|---|---|
| IIS, la haya instalado el instalador o se haya montado a mano | **Cifrados**, siempre |
| Contenedor Docker de producción (`ASPNETCORE_ENVIRONMENT` en `Production` o sin poner) | **Cifrados** |
| Docker que monta el instalador para probar (entorno `Development`) | En claro |
| Contenedor con otro entorno (`Development`, `Staging`…) | En claro |
| Kestrel suelto y desarrollo (Visual Studio, IIS Express) | En claro |

- **Donde se cifra**, el Backend y el Frontend cifran al arrancar lo que siga en claro en su `conf`: una instalación nueva, una que viene de una versión sin cifrado, o un valor que alguien ha escrito a mano. Lo que escribe el propio producto (la clave JWT, la de Data Protection, el correo configurado desde el panel…) se guarda ya cifrado.
- **Donde no se cifra**, al arrancar descifran lo que encuentren cifrado (por ejemplo, una `conf` copiada de un IIS) y lo dicen en la consola:

```text
appsettings.json: 4 settings decrypted, because this deployment keeps them in plain text (it is neither IIS nor a production container).
```

Para descifrar hace falta la llave con la que se cifró (sección 3); sin ella la aplicación no arranca (sección 6).

!!! note "El Frontend recibe sus claves con la primera página"
    El Backend genera la clave JWT y la de Data Protection, y el Frontend recibe su copia la primera vez que se pide una página. Hasta entonces el `appsettings` del Frontend puede no tener nada que cifrar.

---

## 3. La llave

### Quién la crea

Nadie a mano. Se genera al azar la primera vez que hace falta en ese servidor o en ese volumen:

- en el primer arranque de la aplicación en IIS o en un contenedor de producción;
- o en el último paso del actualizador en IIS, cuando se actualiza desde una versión sin cifrado (sección 5).

El instalador nunca la crea: solo la usa para leer la configuración al desinstalar.

### Dónde vive

| Dónde corre la aplicación | Dónde está la llave |
|---|---|
| Windows | `%ProgramData%\Flexygo\keys\config.key`, protegida con DPAPI a nivel de máquina. **Una por servidor** |
| Docker | `conf/keys/config.key` en el volumen de la `conf`, con permisos `600`. En producción se recomienda darla como secreto de Docker o variable de entorno (sección 8) |

Una llave dada por fuera gana sobre el fichero, por este orden:

1. La variable `FLEXYGO_CONFIG_KEY`, con la llave en base64 (32 bytes).
2. La variable `FLEXYGO_CONFIG_KEY_FILE`, con la ruta de un fichero que la contiene.
3. El secreto de Docker `flexygo_config_key` (`/run/secrets/flexygo_config_key`).

Una llave en base64 se genera, por ejemplo, con `openssl rand -base64 32`.

### Varias aplicaciones en el mismo servidor

En Windows la llave es del servidor, no de cada aplicación: todas las aplicaciones Flexygo de ese IIS comparten la misma. La primera que la necesita la crea y las demás la usan. Por eso un solo `config export-key` sirve para todas.

### Una llave propia para una aplicación

Es opcional. Si una aplicación tiene que llevar su propia llave, se pone `FLEXYGO_CONFIG_KEY` **solo en su grupo de aplicaciones** de IIS, por ejemplo con `appcmd` desde una consola de administrador:

```text
%windir%\system32\inetsrv\appcmd.exe set config -section:system.applicationHost/applicationPools /+"[name='MiPool'].environmentVariables.[name='FLEXYGO_CONFIG_KEY',value='<llave en base64>']" /commit:apphost
```

- Hay que ponerla **antes** de que la aplicación cifre con la del servidor, o antes hacer `config decrypt` (sección 7) y dejar que el arranque cifre con la nueva.
- Esa llave queda escrita en la configuración de IIS (`applicationHost.config`), no protegida con DPAPI.
- El actualizador la hereda, porque lo lanza la propia aplicación. La consola `config`, en cambio, no la ve: antes de usarla para esa aplicación hay que poner la misma variable en la consola (`set FLEXYGO_CONFIG_KEY=<llave en base64>`).

### Si se pierde

!!! warning "Sin la llave no se puede descifrar"
    Si se pierde la llave, los valores cifrados no se recuperan: hay que volver a escribirlos en claro. Al montar un servidor, haz `config export-key` (sección 7) y guarda el fichero y su contraseña en un sitio seguro.

### Qué protege y qué no

- **En Windows**, DPAPI a nivel de máquina hace que una copia de la `conf` o de la llave que salga del servidor (una copia de seguridad, una carpeta copiada) no se pueda leer en otro sitio. No protege frente a quien ya controla el servidor: un administrador, o un programa que corra allí, puede descifrar igual que la aplicación.
- **En Docker**, si la llave está en el volumen, quien pueda leer el volumen (o sus copias) tiene la llave y los valores. En producción, mejor darla como secreto de Docker.

---

## 4. Instalación y desinstalación

- **Instalación en IIS.** El instalador escribe la configuración en claro, como siempre, y la aplicación la cifra en su primer arranque. El Backend queda con las dos cadenas de conexión y las claves JWT y de Data Protection cifradas, y el Frontend con sus dos claves.
- **Docker del instalador.** Es para probar y corre en `Development`: la configuración se queda en claro.
- **Desinstalación.** El instalador lee la cadena de conexión de configuración aunque esté cifrada, para encontrar la base que tiene que borrar. Si esta máquina no puede descifrarla, avisa y **no borra ninguna base**.

---

## 5. Actualización y vuelta atrás

- **Actualización.** El actualizador lee las cadenas de conexión cifradas con la llave de la máquina. Si durante la actualización cambia el nombre de una base, la vuelve a escribir cifrada.
- **Después de actualizar**, en IIS y en un contenedor de producción los secretos siguen cifrados: en IIS el actualizador deja cifrada la configuración de la versión nueva, y en cualquier caso la aplicación cifra al arrancar lo que encuentre en claro.
- **Desde una versión sin cifrado.** En IIS, el actualizador cifra la configuración al final de la actualización y crea la llave del servidor si aún no había. Un contenedor de producción la cifra en su primer arranque con la imagen nueva.
- **Un valor que esta máquina no puede descifrar** detiene la actualización y dice cómo arreglarlo: importar la llave con la que se cifró (`Flexygo.Backend.exe config import-key <fichero>` en la carpeta de la aplicación) y volver a actualizar.
- **Vuelta atrás.** Si la actualización falla y se deshace, la versión anterior recupera sus ficheros tal como estaban, cifrados. Como la llave es de la máquina y no de la carpeta de la versión, los sigue leyendo sin más.

Medido en IIS: tras una actualización con el paso final forzado a fallar y su vuelta atrás, y tras una actualización completa, las dos `conf` seguían cifradas, con la misma llave, y el login respondía.

---

## 6. Llevar la aplicación a otro servidor

La llave de Windows está protegida con la máquina: copiar el fichero `config.key` a otro servidor no sirve. Hay dos caminos:

- **Llevar la llave.** En el servidor antiguo, `config export-key <fichero>` la guarda protegida con una contraseña. En el nuevo, `config import-key <fichero>` la instala. Después, la `conf` copiada se lee tal cual. Sirve solo si el servidor nuevo aún no tiene llave.
- **Llevar la configuración en claro.** En el servidor antiguo, `config decrypt`. Se copia la `conf` y, en el nuevo, la aplicación la cifra al arrancar con la llave de ese servidor.

Lo mismo vale para llevar una `conf` cifrada a un equipo de desarrollo: allí la aplicación la descifra al arrancar, y para eso necesita la llave.

Si no se hace ninguna de las dos, la aplicación **no arranca** y dice qué valores no puede leer y cómo salir:

```text
Some values of the configuration cannot be decrypted on this machine:
  appsettings.json, ConnectionStrings:ConfConnectionString: it was encrypted with another key than the one in C:\ProgramData\Flexygo\keys\config.key (DPAPI, this machine)
Either import the key they were encrypted with ("Flexygo.Backend.exe config import-key <file>", after "Flexygo.Backend.exe config export-key <file>" on the old server), or write those values again in plain text: they are encrypted again on the next start.
```

### Llevar una aplicación a un servidor que ya tiene otras

Si el servidor de destino ya tiene aplicaciones Flexygo, ya tiene su llave. **No** se hace `import-key --force`: cambiaría la llave del servidor y las aplicaciones que ya estaban dejarían de poder leer su configuración. En su lugar:

1. En el servidor de origen, `config decrypt` en la carpeta de la aplicación.
2. Se copia la aplicación con su `conf` en claro.
3. En el destino, al arrancar, la aplicación la cifra con la llave de ese servidor.

`import-key` no sustituye una llave distinta que ya exista, precisamente porque dejaría ilegible lo que esa llave cifró. `--force` lo hace igualmente: úsalo solo si ninguna otra aplicación del servidor depende de la llave que hay.

---

## 7. La consola `config`

El propio ejecutable trae los comandos; no hace falta el SDK de .NET. Se lanza en la carpeta de la aplicación, desde una consola de **administrador** (la llave de Windows está en `%ProgramData%`):

```text
> Flexygo.Backend.exe config
Usage: Flexygo.Backend.exe config <command>
  status                 where the key is and what each appsettings file holds
  decrypt                writes the encrypted values in plain text, to edit them;
                         the next start encrypts them again
  encrypt                encrypts the sensitive values of appsettings.json and appsettings.Production.json now
                         (they stay so in IIS or a production container)
  export-key <file>      saves the key protected with a password, to take it to another server
  import-key <file>      installs a key saved with export-key (--force replaces a different one)
  --password <value>     for export-key and import-key; asked for when missing
Run it in the application's folder, from an administrator console: it needs no SDK.
```

El Frontend tiene los mismos comandos (`Flexygo.Frontend.exe config …`) para su propia `conf`.

### `config status`

Dónde está la llave y qué tiene cada fichero:

```text
> Flexygo.Backend.exe config status
Conf: C:\inetpub\flexygo\Backend\conf
Key: C:\ProgramData\Flexygo\keys\config.key (DPAPI, this machine)
appsettings.json: 4 encrypted, 0 sensitive in plain text
appsettings.Development.json: 0 encrypted, 1 sensitive in plain text (always kept in plain text)
```

Si algún valor no se puede descifrar, lo nombra debajo de su fichero con `cannot decrypt …` y termina con código 1.

### Cambiar un valor cifrado a mano

```text
> Flexygo.Backend.exe config decrypt
appsettings.json: 4 decrypted
The application encrypts them again when it starts in IIS or in a production container.
```

Se edita el valor en el `appsettings.json` y se reinicia la aplicación (en IIS, reciclar el pool): al arrancar lo vuelve a cifrar. Sin esperar al arranque, `config encrypt` (fuera de IIS o de un contenedor de producción, el siguiente arranque lo vuelve a descifrar):

```text
> Flexygo.Backend.exe config encrypt
appsettings.json: 4 encrypted
```

### Guardar o mover la llave

```text
> Flexygo.Backend.exe config export-key flexygo-key.txt
Password:
Repeat it:
Key exported to flexygo-key.txt. Keep it, and its password, somewhere safe.
```

`import-key flexygo-key.txt` la instala en el otro servidor y enseña el `status` resultante. La contraseña se pide por consola o se pasa con `--password`.

---

## 8. Docker

Un contenedor cifra sus secretos solo si su entorno es de producción: `ASPNETCORE_ENVIRONMENT` en `Production`, o sin poner, que es lo que ASP.NET toma por defecto. Con `Development` (el Docker de pruebas del instalador) o cualquier otro valor se quedan en claro.

En el contenedor los comandos se lanzan con `docker exec`, a través de `dotnet`:

```bash
docker exec <contenedor-backend> dotnet Flexygo.Backend.dll config status
```

- **La llave vive en el volumen de la `conf`** (`/app/conf/keys/config.key`): recrear los contenedores o cambiar de imagen conserva la llave y la configuración. Si se borra el volumen, se van las dos juntas.
- **Variables de entorno:**

| Variable | Para qué |
|---|---|
| `FLEXYGO_CONFIG_KEY` | La llave en base64. Gana sobre la del volumen |
| `FLEXYGO_CONFIG_KEY_FILE` | Ruta de un fichero con la llave |
| Secreto `flexygo_config_key` | La llave como secreto de Docker, montada en `/run/secrets/flexygo_config_key` |
| `ASPNETCORE_ENVIRONMENT` | `Production` o sin poner: cifra. Cualquier otro valor: en claro |

En producción, la llave se da como secreto de Docker:

```yaml
services:
  flx-backend:
    image: flexygo-backend
    environment:
      - ASPNETCORE_ENVIRONMENT=Production
    secrets:
      - flexygo_config_key
  flx-frontend:
    image: flexygo-frontend
    environment:
      - ASPNETCORE_ENVIRONMENT=Production
    secrets:
      - flexygo_config_key
secrets:
  flexygo_config_key:
    file: ./flexygo_config_key.txt
```

El fichero se crea **antes del primer `docker compose up`**, con una llave nueva en base64:

```bash
openssl rand -base64 32 > flexygo_config_key.txt
```

- **Todos los contenedores reciben el mismo secreto**: el frontend y el backend, y cada réplica si hay varias. Una réplica con otra llave no puede leer lo que cifraron las demás.
- **Si falta el fichero, la aplicación no arranca.** Docker no avisa: crea en su lugar una carpeta vacía con ese nombre y la monta como secreto. La aplicación lo ve, no arranca y dice por qué en el log del contenedor (`docker compose logs`); nunca cifra con una llave propia. Para arreglarlo: `docker compose down`, borrar esa carpeta, crear el fichero y volver a levantar. Pasa lo mismo si el fichero está vacío, o si `FLEXYGO_CONFIG_KEY_FILE` apunta a algo que no es un fichero con la llave.
- El secreto tiene que llevar la llave en base64 tal cual. El fichero de `config export-key` no sirve directamente, porque va protegido con contraseña.
- El Docker de pruebas del instalador (`Development`) no cifra y no lleva el secreto.

!!! warning "Dar la llave desde el principio"
    Si la llave se pasa por variable o secreto **después** de que la aplicación haya cifrado con la del volumen, los valores ya cifrados no se pueden leer. Pásala desde el primer arranque, o antes de cambiarla haz `config decrypt` y deja que el arranque vuelva a cifrar con la nueva.

!!! warning "`MSSQL_SA_PASSWORD` y la cadena cifrada"
    El arranque del contenedor del Backend sustituye `Password=` en el `appsettings.json` por el valor de `MSSQL_SA_PASSWORD`. En un contenedor de producción, con la cadena ya cifrada, no lo encuentra, así que cambiar esa variable deja de cambiar la contraseña. Para cambiarla: `config decrypt` dentro del contenedor, editar la cadena en el volumen y reiniciar.
