# ¿Sabías que existe un modo para realizar labores de mantenimiento en la aplicación?

El modo mantenimiento bloquea el acceso a la aplicación mientras trabajas en ella. A partir de la versión 10 se gestiona desde la pantalla **Gestión de Versiones**, a la que solo acceden los administradores. En la skin Flexygo 2026, ábrela pulsando la fila **Versión** al pie de la barra lateral.

## Activar o programar el mantenimiento

1. En **Gestión de Versiones**, abre **Más acciones** (los tres puntos junto a **Actualizar**) y elige **Modo mantenimiento**.

    <figure markdown="span">
      ![Menú Más acciones de Gestión de Versiones](../../docs_assets/images/DidYouKnow/MaintenanceMode/maintenance-menu.png)
      <figcaption>Más acciones: Modo mantenimiento y Refrescar pantallas</figcaption>
    </figure>

2. En **¿Cuándo debe empezar?**, elige **Empezar ahora** o **Programar** e indica la **Fecha y hora de inicio**.
3. Si quieres, escribe un **Mensaje para los usuarios (opcional)**. En **Así lo verán los usuarios** ves cómo quedará la página de mantenimiento.
4. Pulsa **Activar** y confirma.

<figure markdown="span">
  ![Panel del modo mantenimiento](../../docs_assets/images/DidYouKnow/MaintenanceMode/maintenance-panel.png)
  <figcaption>El panel con <b>Programar</b> elegido: fecha y hora de inicio, mensaje y vista previa de la página de mantenimiento</figcaption>
</figure>

Mientras está activo o programado, **Gestión de Versiones** muestra un aviso con el botón **Gestionar** para cambiarlo. Un mantenimiento programado admite **Reprogramar** y **Cancelar programación**; si no, se activa solo en la fecha indicada.

## Quién puede seguir entrando

* **El administrador que lo activó** sigue usando la aplicación con normalidad.
* **Los demás administradores** pueden entrar en **Gestión de Versiones** para desactivarlo, aunque quien lo activó no esté disponible.
* **El resto de usuarios** son redirigidos a la página de mantenimiento, con el mensaje indicado. Las páginas abiertas se actualizan al cambiar el estado y, cuando termina el mantenimiento, pueden volver a su página.

Para terminar, pulsa **Modo mantenimiento** y después **Desactivar**. El mantenimiento sigue activo hasta que un administrador lo desactiva: no tiene fin programado.

!!! note "Nota"
    Durante una actualización de la aplicación el mantenimiento lo controla el propio proceso de actualización, sin excepciones para nadie, y no se puede desactivar manualmente hasta que termina.

## Refrescar las pantallas de los usuarios

En **Gestión de Versiones**, abre **Más acciones** y elige **Refrescar pantallas**. Puedes recargar la pantalla de **Todos los usuarios** conectados o de **Usuarios específicos**, que puedes buscar y seleccionar.

!!! warning "Procesos retirados"
    Los procesos de sistema `EnableMaintenanceMode` y `DisableMaintenanceMode` se han retirado en la versión 10. Si los llamabas desde un botón o una integración, usa la pantalla **Gestión de Versiones**.
