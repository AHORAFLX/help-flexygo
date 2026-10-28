# ¿Sabías que puedes preparar un entorno de pruebas sin preocuparte de la licencia?

La acción **Convertir en base de desarrollo** (proceso `SetDbDevelopMode`; en versiones anteriores, *Set Single User Mode*) deja lista para pruebas una copia de la base de datos de configuración.

## Para qué sirve

Es útil cuando llevas la base de datos de producción a un entorno de pruebas: allí la licencia no vale, porque cambian el servidor y el entorno, y además no quieres que entren todos los usuarios de producción.

## Qué hace

* **Borra la licencia** de la base de datos. Después tendrás que activar una nueva, por ejemplo de evaluación.
* **Bloquea a todos los usuarios** salvo `admin`, `guest` y el que elijas en **Permitir al usuario realizar pruebas**.
* Recarga la caché y la página.

Así puedes desarrollar con `admin` y probar con el usuario elegido, con su perfil y sus roles. El usuario elegido mantiene su propia contraseña.

!!! warning "Úsalo solo en una copia"
    Borra la licencia y bloquea usuarios en la base de datos a la que está conectada la aplicación. Antes de lanzarlo, comprueba que trabajas en un entorno de pruebas distinto del de producción: servidor, base de datos, configuración y nombre del proyecto.

## Dónde está

Solo los administradores pueden lanzarlo. En la skin 2026, abre el [panel de control](../../Help/Administration/ControlPanel.md) y, en las acciones, pulsa **Convertir en base de desarrollo**. Pide el usuario de pruebas y una confirmación antes de hacer nada.

<figure markdown="span">
  ![Acciones del panel de control](../../docs_assets/images/DidYouKnow/TestEnvironmentSingleUserMode/control-panel-actions.png)
  <figcaption>Acciones del panel de control, con <b>Convertir en base de desarrollo</b></figcaption>
</figure>

En la skin flexy2022 es el proceso **Set Db to Development Mode** de la colección de objetos (*Admin Area → Colección de Objetos*).
