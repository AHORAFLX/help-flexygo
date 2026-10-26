# Encrypted appsettings

In **IIS** and in a **production container**, the Backend and Frontend `appsettings` keep passwords and keys **encrypted on disk**. Anywhere else (development, Kestrel, the installer's test Docker) they stay in plain text. The application reads them as always: encryption changes nothing about how it is configured or how it works, except that whoever opens the file does not see the secrets.

Encryption is **value by value**: the rest of the file stays readable and editable.

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

## 1. What is encrypted

| Value | Where it usually is |
|---|---|
| `ConnectionStrings:*` (every connection string) | Backend |
| `MailSettings:Password` | Backend |
| `JwtSettings:SecretKey` | Backend and Frontend |
| `DataProtection:Key` | Backend and Frontend |
| `DatabaseNuget:NugetPassword` | Backend |
| `Setup:AdminPassword` | Backend |

Only two files of the `conf` folder are encrypted: `appsettings.json` and `appsettings.Production.json`. The others (`appsettings.Development.json`, `appsettings.local.json`…) always stay in plain text; if one holds values encrypted by an earlier version, the application decrypts them when it starts. An empty value is not encrypted.

Each encrypted value starts with `enc:v1:` (AES-256-GCM). A value that does not start like that is read as it is: you can write one in plain text by hand and the application encrypts it on the next start.

---

## 2. Where it is encrypted

Where the application runs decides it; no setting changes it.

| Where the application runs | Secrets on disk |
|---|---|
| IIS, whether the installer set it up or it was set up by hand | **Encrypted**, always |
| Production Docker container (`ASPNETCORE_ENVIRONMENT` set to `Production` or not set) | **Encrypted** |
| Docker set up by the installer for testing (`Development` environment) | Plain text |
| Container with another environment (`Development`, `Staging`…) | Plain text |
| Kestrel on its own and development (Visual Studio, IIS Express) | Plain text |

- **Where it is encrypted**, the Backend and the Frontend encrypt on start whatever is still in plain text in their `conf`: a new installation, one coming from a version without encryption, or a value someone wrote by hand. What the product writes itself (the JWT key, the Data Protection key, the mail account set from the panel…) is saved already encrypted.
- **Where it is not**, on start they decrypt whatever they find encrypted (for example, a `conf` copied from an IIS) and say so on the console:

```text
appsettings.json: 4 settings decrypted, because this deployment keeps them in plain text (it is neither IIS nor a production container).
```

Decrypting needs the key the values were encrypted with (section 3); without it the application does not start (section 6).

!!! note "The Frontend gets its keys with the first page"
    The Backend generates the JWT and Data Protection keys, and the Frontend gets its copy the first time a page is requested. Until then the Frontend's `appsettings` may have nothing to encrypt.

---

## 3. The key

### Who creates it

Nobody, by hand. It is generated at random the first time it is needed on that server or in that volume:

- on the application's first start in IIS or in a production container;
- or at the updater's last step in IIS, when updating from a version without encryption (section 5).

The installer never creates it: it only uses it to read the configuration when uninstalling.

### Where it lives

| Where the application runs | Where the key is |
|---|---|
| Windows | `%ProgramData%\Flexygo\keys\config.key`, protected with DPAPI at machine level. **One per server** |
| Docker | `conf/keys/config.key` in the `conf` volume, with `600` permissions. In production, giving it as a Docker secret or an environment variable is recommended (section 8) |

A key given from outside wins over the file, in this order:

1. The `FLEXYGO_CONFIG_KEY` variable, with the key in base64 (32 bytes).
2. The `FLEXYGO_CONFIG_KEY_FILE` variable, with the path of a file that holds it.
3. The Docker secret `flexygo_config_key` (`/run/secrets/flexygo_config_key`).

A base64 key can be generated, for example, with `openssl rand -base64 32`.

### Several applications on the same server

On Windows the key belongs to the server, not to each application: every Flexygo application in that IIS shares it. The first one that needs it creates it and the rest use it. That is why a single `config export-key` covers all of them.

### Its own key for one application

This is optional. If one application has to carry its own key, set `FLEXYGO_CONFIG_KEY` **only on its IIS application pool**, for example with `appcmd` from an administrator console:

```text
%windir%\system32\inetsrv\appcmd.exe set config -section:system.applicationHost/applicationPools /+"[name='MyPool'].environmentVariables.[name='FLEXYGO_CONFIG_KEY',value='<base64 key>']" /commit:apphost
```

- Set it **before** the application encrypts with the server's key, or first run `config decrypt` (section 7) and let the start encrypt with the new one.
- That key is written in the IIS configuration (`applicationHost.config`), not protected with DPAPI.
- The updater inherits it, because the application itself launches it. The `config` console does not see it: before using it for that application, set the same variable in the console (`set FLEXYGO_CONFIG_KEY=<base64 key>`).

### If it is lost

!!! warning "Without the key nothing can be decrypted"
    If the key is lost, the encrypted values cannot be recovered: they have to be written again in plain text. When setting up a server, run `config export-key` (section 7) and keep the file and its password somewhere safe.

### What it protects and what it does not

- **On Windows**, DPAPI at machine level means that a copy of the `conf` or of the key that leaves the server (a backup, a copied folder) cannot be read anywhere else. It does not protect against someone who already controls the server: an administrator, or a program running there, can decrypt just like the application.
- **In Docker**, if the key is in the volume, whoever can read the volume (or its copies) has the key and the values. In production, give it as a Docker secret instead.

---

## 4. Install and uninstall

- **Install in IIS.** The installer writes the configuration in plain text, as always, and the application encrypts it on its first start. The Backend ends up with both connection strings and the JWT and Data Protection keys encrypted, and the Frontend with its two keys.
- **The installer's Docker.** It is for testing and runs in `Development`: the configuration stays in plain text.
- **Uninstall.** The installer reads the configuration connection string even when it is encrypted, to find the database it has to delete. If this machine cannot decrypt it, it warns and **deletes no database**.

---

## 5. Update and rollback

- **Update.** The updater reads the encrypted connection strings with the machine's key. If a database name changes during the update, it writes it back encrypted.
- **After updating**, in IIS and in a production container the secrets stay encrypted: in IIS the updater leaves the new version's configuration encrypted, and in any case the application encrypts on start whatever it finds in plain text.
- **From a version without encryption.** In IIS, the updater encrypts the configuration at the end of the update and creates the server's key if there was none yet. A production container encrypts it on its first start with the new image.
- **A value this machine cannot decrypt** stops the update, saying how to fix it: import the key it was encrypted with (`Flexygo.Backend.exe config import-key <file>` in the application's folder) and update again.
- **Rollback.** If the update fails and is undone, the previous version gets its files back as they were, encrypted. Since the key belongs to the machine and not to the version folder, it keeps reading them.

Measured in IIS: after an update whose final step was forced to fail and was rolled back, and after a complete update, both `conf` folders were still encrypted, with the same key, and the login answered.

---

## 6. Moving the application to another server

The Windows key is protected with the machine: copying the `config.key` file to another server does not work. There are two ways:

- **Take the key.** On the old server, `config export-key <file>` saves it protected with a password. On the new one, `config import-key <file>` installs it. The copied `conf` is then read as it is. This only works if the new server has no key yet.
- **Take the configuration in plain text.** On the old server, `config decrypt`. Copy the `conf` and, on the new one, the application encrypts it on start with that server's key.

The same goes for taking an encrypted `conf` to a development machine: there the application decrypts it on start, and it needs the key to do so.

If neither is done, the application **does not start** and says which values it cannot read and the ways out:

```text
Some values of the configuration cannot be decrypted on this machine:
  appsettings.json, ConnectionStrings:ConfConnectionString: it was encrypted with another key than the one in C:\ProgramData\Flexygo\keys\config.key (DPAPI, this machine)
Either import the key they were encrypted with ("Flexygo.Backend.exe config import-key <file>", after "Flexygo.Backend.exe config export-key <file>" on the old server), or write those values again in plain text: they are encrypted again on the next start.
```

### Moving one application to a server that already runs others

If the destination server already runs Flexygo applications, it already has its key. **Do not** run `import-key --force`: it would change the server's key, and the applications already there could no longer read their configuration. Instead:

1. On the source server, `config decrypt` in the application's folder.
2. Copy the application with its `conf` in plain text.
3. On the destination, the application encrypts it on start with that server's key.

`import-key` does not replace a different key that is already there, precisely because whatever that key encrypted would become unreadable. `--force` does it anyway: use it only if no other application on the server depends on the existing key.

---

## 7. The `config` console

The executable itself has the commands; the .NET SDK is not needed. Run it in the application's folder, from an **administrator** console (the Windows key is in `%ProgramData%`):

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

The Frontend has the same commands (`Flexygo.Frontend.exe config …`) for its own `conf`.

### `config status`

Where the key is and what each file holds:

```text
> Flexygo.Backend.exe config status
Conf: C:\inetpub\flexygo\Backend\conf
Key: C:\ProgramData\Flexygo\keys\config.key (DPAPI, this machine)
appsettings.json: 4 encrypted, 0 sensitive in plain text
appsettings.Development.json: 0 encrypted, 1 sensitive in plain text (always kept in plain text)
```

If a value cannot be decrypted, it is named under its file with `cannot decrypt …` and the command ends with code 1.

### Changing an encrypted value by hand

```text
> Flexygo.Backend.exe config decrypt
appsettings.json: 4 decrypted
The application encrypts them again when it starts in IIS or in a production container.
```

Edit the value in `appsettings.json` and restart the application (in IIS, recycle the pool): it encrypts it again on start. Without waiting for the start, `config encrypt` (outside IIS or a production container, the next start decrypts it again):

```text
> Flexygo.Backend.exe config encrypt
appsettings.json: 4 encrypted
```

### Saving or moving the key

```text
> Flexygo.Backend.exe config export-key flexygo-key.txt
Password:
Repeat it:
Key exported to flexygo-key.txt. Keep it, and its password, somewhere safe.
```

`import-key flexygo-key.txt` installs it on the other server and shows the resulting `status`. The password is asked for on the console or given with `--password`.

---

## 8. Docker

A container encrypts its secrets only when its environment is production: `ASPNETCORE_ENVIRONMENT` set to `Production`, or not set, which is what ASP.NET assumes by default. With `Development` (the installer's test Docker) or any other value they stay in plain text.

In the container the commands run with `docker exec`, through `dotnet`:

```bash
docker exec <backend-container> dotnet Flexygo.Backend.dll config status
```

- **The key lives in the `conf` volume** (`/app/conf/keys/config.key`): recreating the containers or changing the image keeps the key and the configuration. If the volume is deleted, both go together.
- **Environment variables:**

| Variable | What for |
|---|---|
| `FLEXYGO_CONFIG_KEY` | The key in base64. It wins over the one in the volume |
| `FLEXYGO_CONFIG_KEY_FILE` | Path of a file with the key |
| Secret `flexygo_config_key` | The key as a Docker secret, mounted at `/run/secrets/flexygo_config_key` |
| `ASPNETCORE_ENVIRONMENT` | `Production` or not set: encrypted. Any other value: plain text |

In production, give the key as a Docker secret:

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

Create the file **before the first `docker compose up`**, with a new base64 key:

```bash
openssl rand -base64 32 > flexygo_config_key.txt
```

- **Every container gets the same secret**: the frontend and the backend, and each replica if there are several. A replica with another key cannot read what the others encrypted.
- **If the file is missing, the application does not start.** Docker does not warn: it creates an empty folder with that name instead and mounts it as the secret. The application notices, does not start and says why in the container's log (`docker compose logs`); it never encrypts with a key of its own. To fix it: `docker compose down`, delete that folder, create the file and start again. The same happens when the file is empty, or when `FLEXYGO_CONFIG_KEY_FILE` points to something that is not a file holding the key.
- The secret must hold the key in plain base64. The file `config export-key` writes cannot be used directly, because it is protected with a password.
- The installer's test Docker (`Development`) does not encrypt and does not get the secret.

!!! warning "Give the key from the start"
    If the key is passed by variable or secret **after** the application has encrypted with the volume's key, the values already encrypted cannot be read. Pass it from the first start, or before changing it run `config decrypt` and let the start encrypt again with the new one.

!!! warning "`MSSQL_SA_PASSWORD` and the encrypted string"
    The Backend container's start replaces `Password=` in `appsettings.json` with the value of `MSSQL_SA_PASSWORD`. In a production container, with the string already encrypted, it does not find it, so changing that variable no longer changes the password. To change it: `config decrypt` inside the container, edit the string in the volume and restart.
