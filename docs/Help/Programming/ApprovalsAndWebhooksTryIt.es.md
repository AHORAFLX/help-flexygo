# Pruébalo: una decisión y un webhook de salida <span class="fh-version-tag" title="Disponible desde la versión 10">10.0+</span>

En unos quince minutos tendrás dos cosas funcionando, sin una línea de código:

- **una decisión**: cada vez que alguien da de alta un rol, un administrador tiene que aprobarlo, desde su bandeja;
- **un webhook de salida**: cada vez que se guarda un rol, otro sistema recibe el registro entero, firmado.

Usamos **Roles** porque está en todas las aplicaciones; con cualquier otro objeto es igual.

Esta página es el **camino corto para probarlo**. Qué hace cada pieza, la web API, la firma, los reintentos y el ejemplo con n8n están en la referencia: [Aprobaciones, tareas humanas y webhooks de salida](ApprovalsAndWebhooks.md).

---

## Lo que necesitas

| | |
|---|---|
| **Una aplicación Flexygo de la versión 10** | Vale una instalación local de desarrollo. Entra con un usuario **administrador** (de rol *Admins*). |
| **Un receptor HTTP para el webhook** | Lo más rápido es una dirección de [webhook.site](https://webhook.site), que enseña cada petición que le llega. Un nodo *Webhook* de n8n también sirve. Solo para los pasos 4 y 5. |

Las dos pieles (skin2026 y flexy2022) tienen las mismas pantallas. Donde el camino cambia, se dan los dos.

---

## 1. Crea una regla de decisión

| skin2026 | flexy2022 |
|---|---|
| **Control panel › Logic and rules › Decision rules** | **Admin › Lógica y reglas › Reglas de decisión** |

![Logic and rules en el panel de control](../../docs_assets/images/ApprovalsAndWebhooks/panel-logica.png)

**New**, y rellena:

| Campo | Valor |
|---|---|
| **Name** | `New role, approve it` |
| **Object** | *Role* |
| **Enabled**, **After insert** | encendidos |
| **Title** | `Approve the new role {{Name}}` (las llaves leen el campo del registro) |
| **Description** | `{{currentUserLogin}} created the role {{Name}}` |
| **Assigned role** | *Admins* |
| **Due in (minutes)** | `60` |

Deja **Options** vacío (serán *Approve* / *Reject*) y **Only if** vacío (todos los roles nuevos). Guarda.

![La ficha de la regla](../../docs_assets/images/ApprovalsAndWebhooks/regla.png)

**Comprueba**: en el menú de la ficha, **Test with a record**, con `Id = 'admins'`. Sale un diálogo con la tarea que abriría (título rendido, a quién, prioridad, vencimiento), **sin crearla**.

![Test with a record](../../docs_assets/images/ApprovalsAndWebhooks/probar-regla.png){ width="600" }

## 2. Da de alta un rol

Abre la lista de roles (en skin2026, el acceso **Roles** del panel de control; en flexy2022, en **Admin › Seguridad**) y pulsa **New**: Id `salestest`, nombre *Sales test*. Guarda.

**Comprueba**: el nodo **Decisions** (*Decisiones*) del menú sube su contador en uno, y en la campana hay un aviso. Si no lo ves al momento, recarga la página.

## 3. Decide

Abre **Decisions**. La tarea *Approve the new role Sales test* está entre las tuyas, asignada a *Admins* («anyone in the role»), con su plazo y el enlace al rol. Los segmentos de arriba separan lo tuyo, lo de tus roles, todo lo abierto y lo resuelto.

![La bandeja de decisiones](../../docs_assets/images/ApprovalsAndWebhooks/bandeja.png)

Pulsa **Approve** en la fila. **Comprueba**: la fila pasa a **Resolved**, con quién decidió y cuándo.

!!! tip "La tarjeta en la ficha del registro"
    En los objetos que usan la **ficha por defecto**, la misma decisión sale arriba de la ficha del registro, con su comentario y su historial. Es la forma más directa de decidir mientras miras el registro. Roles tiene ficha propia, así que ahí no sale: se coloca el módulo `sysmod-task-decision-2026` a mano, como cualquier otro.

    ![La tarjeta de decisión](../../docs_assets/images/ApprovalsAndWebhooks/tarjeta.png)

## 4. Crea un webhook de salida

| skin2026 | flexy2022 |
|---|---|
| **Control panel › Logic and rules › Outgoing webhooks** | **Admin › Lógica y reglas › Webhooks de salida** |

Es una pantalla con dos pestañas: **Subscriptions** (*Suscripciones*), lo que se vigila, y **Deliveries** (*Envíos*), todo lo que se ha mandado.

![Webhooks de salida](../../docs_assets/images/ApprovalsAndWebhooks/webhooks-suscripciones.png)

En **Subscriptions**, **New**:

| Campo | Valor |
|---|---|
| **Name** | `Roles to my receiver` |
| **Object** | *Role* |
| **Enabled**, **After insert**, **After update** | encendidos |
| **Url** | la dirección de tu receptor (la de webhook.site, por ejemplo) |
| **Secret** | una cadena larga cualquiera; apúntala, el receptor la necesita para comprobar la firma |
| **Payload** | *The whole record* |

Guarda. El secreto queda enmascarado en la ficha.

![La ficha de una suscripción](../../docs_assets/images/ApprovalsAndWebhooks/suscripcion.png)

**Comprueba**: en el menú de la ficha, **Send a test**, con `Id = 'admins'`. Encola una entrega real con `event: test`. En menos de un minuto aparece en la pestaña **Deliveries** como `sent` con estado `200`, y tu receptor enseña el `POST`.

## 5. Míralo llegar de verdad

Edita el rol *Sales test* (cambia el nombre) y guarda. El guardado no espera al receptor: la entrega se encola y sale en el minuto siguiente.

**Comprueba**:

- en **Deliveries** hay una fila nueva, evento `update`, `sent`, `200`;
- en el receptor llega el sobre con el rol entero en `data`, y las cabeceras `X-Flexygo-Event: update` y `X-Flexygo-Signature: sha256=…`.

![La pestaña Deliveries](../../docs_assets/images/ApprovalsAndWebhooks/webhooks-envios.png)

Para comprobar la firma con el secreto del paso 4, el código está en la referencia: [Cabeceras y firma](ApprovalsAndWebhooks.md#cabeceras-y-firma).

## 6. Si quieres más: que un orquestador espere la decisión

Las dos piezas se juntan cuando un orquestador (n8n, Make…) abre la tarea por la web API y **espera** a que alguien decida:

1. llama a `sysTaskCreate` con una `CallbackUrl` y un `CallbackSecret`;
2. la persona decide en la bandeja;
3. Flexygo manda el resultado, firmado, a esa URL.

El ejemplo completo con n8n está en la referencia: [n8n orquesta, Flexygo decide](ApprovalsAndWebhooks.md#6-ejemplo-n8n-orquesta-flexygo-decide).

## 7. Recoge

Apaga **Enabled** en la regla y en la suscripción (o bórralas) y borra el rol *Sales test*.

---

## Si algo no sale

| Lo que ves | Por qué | Qué hacer |
|---|---|---|
| Al dar de alta el rol no se abre ninguna tarea | La regla está apagada, sin **After insert**, o su **Only if** no se cumple | Paso 1: **Test with a record** dice cuál de las tres |
| El contador de **Decisions** no sube | La tarea está asignada a un rol que no es el tuyo | Mira **All open** en la bandeja; cambia **Assigned role** |
| **Reject** pide un comentario | La opción o la regla exigen comentario | Es lo esperado: escribe el motivo |
| **Only if** sale desactivado | El objeto elegido es externo: sus registros viven detrás de una API y no hay tabla sobre la que evaluar un `WHERE` | Sin condición funciona; ver [Objetos externos](ApprovalsAndWebhooks.md#2-reglas-de-decision) |
| La entrega se queda en `pending` | No corre el job **flxWebhookDispatcher** | En **Logic and rules › Cron Jobs**, que esté activo |
| La entrega sale `failed` con un código | El receptor no contestó `2xx` dentro del tiempo | Se reintenta sola (1, 5, 15, 60, 240 y 720 minutos); **Retry** en la ficha de la entrega la manda ya |
| La firma no cuadra en el receptor | El receptor calcula sobre el cuerpo ya interpretado, o con otro secreto | Calcula el HMAC sobre el cuerpo **crudo**, con el mismo **Secret** |
| La ficha de la regla no acepta la **Callback URL** | El campo valida una dirección pública: `localhost` o `192.168.…` no pasan | Usa una dirección pública, o abre la tarea por la web API |

Para todo lo demás (estados, escalado, la web API, la forma del cuerpo y del callback) está la referencia: [Aprobaciones, tareas humanas y webhooks de salida](ApprovalsAndWebhooks.md).
