# Pruébalo: una regla de tres pasos <span class="fh-version-tag" title="Disponible desde la versión 10">10.0+</span>

En diez minutos tendrás una regla funcionando, sin una línea de código: **cada vez que alguien da de alta un rol**,

1. los administradores reciben un aviso en la campana;
2. se abre una tarea para darle permisos a ese rol;
3. y tú recibes otro aviso con el **número de esa tarea**, que el paso 2 acaba de crear.

Usamos **Roles** porque está en todas las aplicaciones; con cualquier otro objeto es igual. No hace falta correo ni ningún otro sistema.

Esta página es el **camino corto para probarlo**. Qué hace cada tipo de paso, los disparadores y los fallos están en la referencia: [Acciones al guardar](ActionsOnSave.md).

---

## Lo que necesitas

| | |
|---|---|
| **Una aplicación Flexygo de la versión 10** | Vale una instalación local de desarrollo. Entra con un usuario **administrador**. |
| **La piel skin2026** | La configuración de pasos está en la piel 2026. Si tu perfil es flexy2022, cámbialo a 2026 para configurar; la regla se ejecuta igual en las dos pieles. |

---

## 1. Abre las reglas del objeto Role

En el panel de control, **Objects**, busca **sysRole** y ábrelo: es el banco de trabajo del objeto. En el carril, al final, **Rules and actions**.

## 2. Crea la regla con su primer paso

**New ▾ › Notification**. Se abre la ficha de una regla nueva con un aviso ya puesto. Rellena:

| Campo | Valor |
|---|---|
| **Name** | `Welcome a new role` |
| **On create** | encendido (lo está por defecto) |
| **Trigger** | *Always* |
| Paso 1, **Step name** | `Tell the admins` |
| Paso 1, **Title** | `New role {{Name}}` (las llaves leen el campo del registro) |
| Paso 1, **To the role** | *Admins* |

## 3. Añade el paso que crea la tarea

**Add step ▾ › Create a record**:

| Campo | Valor |
|---|---|
| **Step name** | `Open a task to give it permissions` |
| **In object** | *sysTask* (las tareas de la bandeja de decisiones) |
| **Add field**: *Title* ← | `Give permissions to the role {{Name}}` |
| **Add field**: *Assigned role* ← | `admins` |

![La regla con sus tres pasos, el segundo abierto](../../docs_assets/images/ActionsOnSave/pruebalo-regla.png)

## 4. Añade el aviso que usa el paso 2

**Add step ▾ › Notification**:

| Campo | Valor |
|---|---|
| **Step name** | `Tell me the task` |
| **Title** | `Task {{Step2.TaskId}}: {{Step2.Title}}` |
| **To the user** | tú |

`{{Step2.TaskId}}` es el número de la tarea que creará el paso 2. La fila del paso 2 dice ahora *gives {{Step2.TaskId}}*, y la del 3, *uses step 2*. **Save**.

## 5. Pruébala sin hacer nada

**Test with a record**, evento **On create** y elige el rol *Admins* de la lista.

![Probar la regla con un registro](../../docs_assets/images/ActionsOnSave/pruebalo-probar.png)

Sale cada paso con sus valores resueltos: *New role Admins* para el rol *Admins*, la tarea que abriría y el aviso para ti con su título. El número de la tarea sale marcado como *TaskId of step 2, once created*: solo se sabe al crearla. **No se ha guardado, enviado ni creado nada.**

## 6. Da de alta un rol

Abre la lista de roles y crea uno: Id `salestest`, nombre *Sales test*. Guarda.

**Comprueba**:

- En la campana (o en la lista de avisos), *New role Sales test* y *Task 6cf7…: Give permissions to the role Sales test*.
- En la bandeja de decisiones, la tarea *Give permissions to the role Sales test*, para *Admins*.
- En la ficha de la regla, **Last runs**: ✓ ✓ ✓ y *All done*.

![Los dos avisos de la regla](../../docs_assets/images/ActionsOnSave/pruebalo-avisos.png)

---

## Y ahora

- Cambia el disparador a **When a field changes to a value** para que la regla solo actúe cuando un campo pasa a un valor concreto.
- Añade un paso **E-mail** si tienes el correo configurado.
- Para quitar la prueba: borra la regla desde su ficha (**Delete**) y, si quieres, el rol *salestest* y su tarea.
