# Pruébalo: un rol «Comercial» en 15 minutos <span class="fh-version-tag" title="Disponible desde la versión 10">10.0+</span>

En este recorrido creas un rol de prueba, le pones tres reglas en la pantalla **Seguridad** y compruebas el resultado entrando como un usuario de ese rol. Al final lo borras todo. Funciona sobre **tu propia aplicación**, sin datos especiales.

Las imágenes son de una aplicación de ejemplo con un objeto de clientes (*Customer*), su campo de coste (*Cost*) y un proceso *Send price list*. En la tuya serán otros nombres.

---

## Lo que necesitas

| | |
|---|---|
| **Una aplicación Flexygo 10** con la piel 2026 | Y un usuario **administrador**. |
| **Un objeto con un campo «delicado»** | Un descuento, un coste, un margen… Por ejemplo, *Clientes* con su *Coste*. |
| **Un proceso de ese objeto** | Cualquiera que aparezca en el menú **⋮ › Procesos** de su ficha. |
| **Una ventana privada del navegador** | Para entrar como el usuario de prueba sin cerrar tu sesión. |

!!! note "Licencia"
    El usuario de prueba ocupa un puesto de la licencia mientras exista. Si la licencia no admite más usuarios, usa uno que ya tengas cambiándole el rol, y devuélvelo al suyo al terminar.

---

## 1. Crea el rol

1. **Panel de control › Seguridad › Roles**, y **Nuevo**.
2. Escribe un identificador (`comercial`) y un nombre (`Comercial`). **No** lo marques como administrador.
3. **Guardar**.

## 2. Crea un usuario con ese rol

1. **Panel de control › Seguridad › Usuarios**, y **Nuevo**.
2. Rellena nombre, nombre de usuario y correo.
3. En **Rol**, elige **Comercial**.
4. Activa la contraseña manual, escribe una contraseña de prueba y **desactiva que tenga que cambiarla** al entrar; si no, lo primero que verás con ese usuario será el cambio de contraseña.
5. **Guardar**.

## 3. Abre la seguridad del rol

Abre la ficha del rol **Comercial** (desde la lista de roles). La tarjeta **Permisos** ya es la pantalla de seguridad de ese rol; con **Abrir en Seguridad** la tienes a pantalla completa.

<figure markdown="span">
  ![La ficha del rol con la tarjeta Permisos](../../../docs_assets/images/Security2026/es-19-ficha-rol.png)
  <figcaption>La ficha del rol: miembros a la izquierda y la tarjeta Permisos a la derecha</figcaption>
</figure>

Todas las celdas están en **gris**: no hay reglas y, por tanto, el rol lo puede todo.

## 4. Primera regla: ve la lista, pero no borra

1. Familia **Objetos**.
2. Escribe el nombre de tu objeto en el buscador.
3. En la fila del **objeto** (la que **no** lleva la etiqueta *colección*), pulsa la celda **Borrar**.

La fila pasa a verde con **Borrar** en rojo: el rol puede ver, listar, crear, editar e imprimir, pero no borrar.

<figure markdown="span">
  ![Borrar denegado](../../../docs_assets/images/Security2026/es-02-borrar-denegado.png)
  <figcaption>Una regla escrita: verde concede, rojo deniega</figcaption>
</figure>

## 5. Segunda regla: no ve el campo delicado

1. Familia **Propiedades**.
2. Busca el campo (*Cost*).
3. Pulsa **Visible**.

<figure markdown="span">
  ![El campo, no visible](../../../docs_assets/images/Security2026/es-06-propiedad-oculta.png)
  <figcaption>El campo deja de ser visible para el rol</figcaption>
</figure>

## 6. Tercera regla: no ejecuta un proceso

1. Familia **Procesos**.
2. Busca el proceso.
3. Pulsa **Ejecutar el proceso**.

<figure markdown="span">
  ![El proceso, denegado](../../../docs_assets/images/Security2026/es-07-proceso-denegado.png)
  <figcaption>Cada fila es un par objeto + proceso</figcaption>
</figure>

Los botones de las familias ya dicen **1** en Objetos, Propiedades y Procesos.

## 7. Compruébalo como el usuario del rol

Abre una **ventana privada** y entra con el usuario de prueba.

1. **La lista se ve**: abre la lista del objeto desde el menú. Están los registros.
2. **El campo no está**: abre un registro. El campo delicado no aparece en la ficha.
3. **No puede borrar ni ejecutar el proceso**: abre el menú **⋮** de la ficha. No está **Eliminar**, y en **Procesos** no está tu proceso.

<div class="grid" markdown>

<figure markdown="span">
  ![La ficha sin el campo](../../../docs_assets/images/Security2026/es-24-usuario-ficha.png)
  <figcaption>La ficha, sin el campo de coste</figcaption>
</figure>

<figure markdown="span">
  ![El menú sin Eliminar ni el proceso](../../../docs_assets/images/Security2026/es-24d-usuario-procesos.png)
  <figcaption>El menú ⋮: ni Eliminar ni «Send price list»</figcaption>
</figure>

</div>

Compáralo con lo que ves tú como administrador en la misma ficha: allí están **Eliminar** y el proceso.

## 8. Pregunta a Diagnóstico

Vuelve a tu ventana de administrador. En la pantalla de seguridad, pestaña **Diagnóstico**: elige el usuario de prueba, escribe el objeto y pulsa **Explicar**. Verás que **decide el rol Comercial** y que **Borrar** está denegado. (En la imagen, el rol tiene además la condición de «cada comercial solo ve sus clientes» de [Condiciones](3Rules.md#condiciones-un-permiso-solo-para-algunos-registros).)

<figure markdown="span">
  ![Diagnóstico del usuario de prueba](../../../docs_assets/images/Security2026/es-18-diagnostico.png)
  <figcaption>La cadena entera y la capa que decide</figcaption>
</figure>

## 9. Extra: un asistente de IA ve lo mismo

Si tu aplicación tiene encendidos la API y el MCP (ver [La web API y los asistentes de IA](4WebAPIMCP.md)):

1. En **Panel de control › Seguridad › WebAPI**, marca el **robot** del rol **Comercial** y publica tu objeto en **Datos Autorizados** con ver y listar.
2. Conecta un asistente **con el usuario de prueba**, siguiendo [Pruébalo: un asistente de IA trabajando con tu aplicación](../../AIAssistants/1TryIt.md).
3. Pídele que borre un registro o que ejecute el proceso: contesta que no puede, porque el rol no puede.
4. Si además pusiste la condición «cada comercial solo ve sus clientes» ([Condiciones](3Rules.md#condiciones-un-permiso-solo-para-algunos-registros)), pídele la lista: trae solo los suyos.

## 10. Limpia

1. Borra el **usuario de prueba**: su ficha, menú **⋮ › Eliminar**. Si usaste un usuario que ya tenías, devuélvele su rol.
2. En la pantalla de seguridad, con el rol **Comercial** elegido, usa **⋮ › Quitar todas las reglas de Comercial en …** en **Objetos**, **Propiedades** y **Procesos**.
3. Borra el **rol**: su ficha, menú **⋮ › Eliminar**.
4. Si en el paso 9 marcaste el robot o publicaste el objeto, desmárcalo.

---

Lo siguiente: [Las reglas, una por una](3Rules.md), con las condiciones («cada comercial solo ve sus clientes») y los procesos globales con SQL.
