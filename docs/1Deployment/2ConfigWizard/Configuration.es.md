# Configuración

!!! info "Novedad en la versión 10.0"

    La configuración inicial ahora se hace con un asistente desde la pantalla de inicio de sesión. Pulsa **Empezar** para iniciar el proceso. El asistente comprueba los valores y muestra el avance de la publicación y la creación de las bases de datos. Puedes usar un archivo dacpac o un feed de NuGet como origen del esquema.

    Si sales o se produce un error, puedes volver al primer paso pendiente y reintentarlo sin perder el contexto. Los errores de credenciales señalan los campos que debes revisar. Si el correo ya está configurado, el asistente omite ese paso. Al terminar, pulsa **Ir al inicio de sesión**.

    ![Novedad en la versión 10.0](../../docs_assets/images/Configuration/setup-wizard.png)

El Asistente de Configuración deja lista una instalación nueva antes del primer inicio de sesión. Conecta el frontend con el backend, crea, actualiza o reutiliza las bases de datos, da nombre al proyecto y contraseña al usuario admin, y configura el correo. Todo se guarda en `appsettings.json` y en la base de datos de configuración, sin editar ningún archivo a mano.

!!! info "De web.config a appsettings.json"
    A diferencia de las aplicaciones .NET Framework donde la configuración residía en `web.config`, en Flexygo (basado en .NET 9) toda la configuración se gestiona a través de `appsettings.json`. El asistente se encarga de escribir y actualizar este archivo automáticamente.

---

## Asistente de configuración

El asistente se abre automáticamente al entrar en la aplicación mientras la instalación no está configurada. La pantalla de inicio resume lo que vas a configurar y, debajo del botón **Empezar**, muestra la versión de Flexygo y la dirección de la aplicación.

<figure markdown="span">
  ![Inicio del asistente de configuración](../../docs_assets/images/CoreDeployment/Asistente/setup-welcome.png)
  <figcaption>Pantalla de inicio del asistente</figcaption>
</figure>

El asistente tiene cinco pasos, que se ven a la izquierda con el dato que se ha guardado en cada uno. Cada paso **comprueba** los datos antes de guardar nada. Si sales del asistente, al volver continúa en el primer paso pendiente.

---

### 1. Conexión con el backend

Indica dónde responde el backend para que el frontend pueda hablar con él:

- **URL del frontend**: la dirección pública de la aplicación. El asistente la detecta automáticamente.
- **URL del backend**: la dirección del backend, con su puerto. Al guardarla se le añade `api/backend/`.

Pulsa **Comprobar conexión**. Si el backend responde, aparece **Backend accesible** y, al pulsar **Continuar**, se guarda la URL y se sincronizan las claves de sesión entre el frontend y el backend.

<figure markdown="span">
  ![Conexión con el backend](../../docs_assets/images/CoreDeployment/Asistente/setup-connection.png)
  <figcaption>Paso 1 — El backend ha respondido</figcaption>
</figure>

---

### 2. Base de datos de configuración

Es la base de datos donde Flexygo guarda usuarios, permisos y metadatos. Indica el **servidor SQL Server**, el **usuario**, la **contraseña** y el nombre de la **base de datos** (por convención, `{Proyecto}_IC`) y pulsa **Comprobar**.

El asistente comprueba el servidor y la base de datos y te dice qué va a hacer antes de hacerlo:

| Situación | Qué indica el asistente | Botón |
|-----------|-------------------------|-------|
| No existe | **Se creará**, con el esquema de la versión instalada de Flexygo | **Crear base de datos** |
| Existe, pero es de una versión anterior | **Hay una actualización disponible**. Si contiene datos reales, haz antes una copia de seguridad | **Actualizar y usar** |
| Existe y está al día | **Lista para usar**: se usará tal cual | **Usar esta base de datos** |

Si cambias algún dato después de comprobar, el asistente vuelve a comprobarlo. Si el usuario o la contraseña son incorrectos, o la base de datos existe pero no es de configuración de Flexygo, lo indica en el campo correspondiente.

<figure markdown="span">
  ![Base de datos de configuración](../../docs_assets/images/CoreDeployment/Asistente/setup-configuration-database.png)
  <figcaption>Paso 2 — La base de datos no existe y se creará con el dacpac local</figcaption>
</figure>

#### Origen del esquema

Para crear o actualizar la base de datos, el asistente necesita su esquema. El recuadro **Origen del esquema** muestra de dónde lo toma:

- **Desarrollo · dacpac local**: cuando la aplicación se ejecuta desde la solución, usa el dacpac que genera el proyecto de base de datos. Si el proyecto no está compilado, ofrece **Compilar el proyecto**; si lo has cambiado después de compilarlo, pulsa **Recompilar** para que el dacpac esté al día.
- **Producción · NuGet**: en una instalación, descarga el paquete de la base de datos de la feed configurada en `DatabaseNuget`. Si el paquete no está en ella, puedes **Buscar en otra feed** (una feed NuGet v3 o una carpeta local, con usuario y token si los pide). Esa feed solo se usa en esta instalación: no se guarda en `appsettings.json` ni en los ajustes.

!!! warning "La base de datos de configuración no puede quedar vacía"
    Sin esquema (sin dacpac ni paquete), el asistente no deja crear ni actualizar la base de datos de configuración. Compila el proyecto o indica una feed con el paquete para continuar.

#### Creación o actualización

Al pulsar el botón, el asistente despliega la base de datos y muestra cada fase: lectura del dacpac o descarga del paquete, creación de la base de datos, despliegue del esquema, carga de los modelos de datos y guardado de la cadena de conexión. Debajo se ve el detalle de lo que se está desplegando y el tiempo transcurrido.

No cierres la ventana mientras dura. Si algo falla, se revierten los cambios: pulsa **Ver detalles** para ver el error, corrige la causa y pulsa **Reintentar**.

<figure markdown="span">
  ![Creando la base de datos de configuración](../../docs_assets/images/CoreDeployment/Asistente/setup-deploy.png)
  <figcaption>Paso 2 — Progreso de la creación de la base de datos</figcaption>
</figure>

---

### 3. Proyecto y administrador

Este paso solo aparece si la base de datos de configuración es **nueva**. Si ya existía, se omite y se usan el proyecto y los usuarios que contiene.

- **Nombre del proyecto**: se guarda en los ajustes del proyecto y en el `appsettings.json` del backend. Si la instalación ya lo tiene definido, aparece bloqueado.
- **Contraseña de admin** y **Repite la contraseña**: la contraseña del usuario `admin`. Debe tener al menos 8 caracteres, mayúsculas y minúsculas, un número y un símbolo; la lista de requisitos se va marcando mientras escribes. **Generar una segura** crea una que los cumple.

Pulsa **Guardar y continuar**.

<figure markdown="span">
  ![Proyecto y administrador](../../docs_assets/images/CoreDeployment/Asistente/setup-project.png)
  <figcaption>Paso 3 — Nombre del proyecto y contraseña del administrador</figcaption>
</figure>

---

### 4. Bases de datos de datos

La base de datos de configuración define las conexiones de datos que usa el producto. El asistente las configura **de una en una**: indica cuántas hay y cuál toca ahora, y la siguiente aparece al terminar la anterior.

Por defecto usa el **mismo servidor y credenciales que la configuración**; desactiva el interruptor para indicar otros. Escribe el nombre de la **base de datos** y pulsa **Comprobar**:

| Situación | Qué hace el asistente |
|-----------|-----------------------|
| No existe y hay esquema (dacpac o paquete) | La crea con el esquema de su paquete |
| No existe y no hay esquema | La crea **vacía**, sin tablas |
| Existe y es de una versión anterior | La actualiza antes de usarla |
| Existe y está al día | La usa tal cual |

El **Origen del esquema** funciona igual que en el paso 2, con una diferencia: si no hay esquema, la base de datos de datos sí puede crearse vacía (**Crear base de datos vacía**).

!!! note "Bases de datos de AHORA ERP"
    Si la conexión es de una base de datos de AHORA ERP, debe existir: el asistente no crea bases de datos del ERP. Si no la encuentra, restáurala o créala y vuelve a comprobar, o corrige el nombre.

<figure markdown="span">
  ![Bases de datos de datos](../../docs_assets/images/CoreDeployment/Asistente/setup-data-database.png)
  <figcaption>Paso 4 — La base de datos de datos no existe y no hay esquema, así que se creará vacía</figcaption>
</figure>

---

### 5. Correo saliente

Flexygo usa este servidor para recuperar contraseñas y enviar notificaciones. El paso es **opcional**: si aún no tienes el servidor, pulsa **Omitir** y configúralo más tarde. Si el correo ya estaba configurado, el asistente se salta este paso.

| Campo | Descripción |
|-------|-------------|
| Servidor SMTP | Servidor de correo (por ejemplo, `smtp.office365.com`) |
| Puerto | Habitualmente 587 o 465 |
| Cifrado | Activa **SSL/TLS** si el servidor lo requiere |
| Remitente | Dirección que aparece como remitente. También se asigna como correo de los usuarios admin y guest |
| Usuario SMTP y Contraseña SMTP | Cuenta con la que se autentica en el servidor |

Pulsa **Guardar y terminar**.

<figure markdown="span">
  ![Correo saliente](../../docs_assets/images/CoreDeployment/Asistente/setup-mail.png)
  <figcaption>Paso 5 — Servidor de correo saliente</figcaption>
</figure>

---

### Configuración completa

Al terminar, el asistente muestra **Flexygo está listo** con el resumen de lo configurado: el backend, la base de datos de configuración, el proyecto, cada base de datos de datos y el correo. Cada uno indica qué se ha hecho (**Creada**, **Actualizada**, **Existente**, **Vacía**, **Nuevo**, **Omitido**…).

Si la aplicación corre en IIS, se recicla para aplicar los cambios.

<figure markdown="span">
  ![Configuración completada](../../docs_assets/images/CoreDeployment/Asistente/setup-done.png)
  <figcaption>Resumen de la configuración</figcaption>
</figure>

Pulsa **Ir al inicio de sesión**. Si el proyecto es nuevo, entra como `admin` con la contraseña del paso 3; si ya existía, con tu usuario habitual del proyecto.

<figure markdown="span">
  ![Pantalla de login](../../docs_assets/images/CoreDeployment/Asistente/login.png)
  <figcaption>Pantalla de acceso a la aplicación</figcaption>
</figure>

---

!!! info "Referencia de appsettings.json"
    Para una referencia completa de las claves disponibles en `appsettings.json` y su significado, consulta [Referencia: appsettings.json](AppSettingsReference.md).
