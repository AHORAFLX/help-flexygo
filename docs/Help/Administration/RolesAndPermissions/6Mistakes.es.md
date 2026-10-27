# Errores típicos y cómo comprobar <span class="fh-version-tag" title="Disponible desde la versión 10">10.0+</span>

## Cómo comprobar una regla

1. **Entra como un usuario del rol en una ventana privada** del navegador. Así no cierras tu sesión de administrador y ves exactamente lo que ve esa persona.
2. **Mira la pantalla afectada**: la lista, la ficha, el menú **⋮**, el menú lateral.
3. **Si no sale lo que esperabas, pregunta a Diagnóstico**: usuario, objeto, **Explicar**. Te dice qué capa decide y qué dice cada una.
4. **Para la API o un asistente**, prueba con un token de ese mismo usuario (ver [La web API y los asistentes de IA](4WebAPIMCP.md#5-como-comprobarlo)).

---

## Errores típicos

| Lo que pasa | Por qué | Qué hacer |
|---|---|---|
| **«He quitado un permiso y sigo viéndolo»** | Lo estás mirando como **administrador**: la seguridad no se le aplica. | Compruébalo con un usuario del rol, en una ventana privada. |
| **La regla de usuario «abre» cosas que el rol tenía cerradas** | La capa que decide **sustituye la fila entera**. Una regla de usuario para un objeto con todo concedido salvo imprimir también concede borrar, aunque el rol no dejara. | Al escribir una excepción de usuario, repasa los seis permisos de la fila, no solo el que querías cambiar. **Diagnóstico** lo enseña. |
| **La condición de la lista no filtra nada** | Está en la fila con la etiqueta **colección**. El servidor lee la lista en la fila del **objeto**. | Quita la regla de la fila *colección* y pon la condición en **Ver la colección** de la fila del objeto. |
| **He ocultado una entrada del menú y aún llegan a la lista** | El menú solo esconde: se puede llegar por un enlace, el buscador o la API. | Deniega **Ver la colección** (o **Ver**) en **Objetos**. |
| **El proceso desaparece de todos los objetos** | Está denegado en **Procesos (global)**, que manda en cualquier sitio. | Si solo querías quitarlo de un objeto, usa la familia **Procesos**. |
| **El proceso global con SQL no aparece nunca** | La consulta no devuelve 1 (devuelve 0, vacío o da error). Un error deja el proceso oculto y se anota en el registro de errores. | Ejecuta la consulta a mano, sustituyendo las variables, y comprueba que devuelve 1. Revisa la **Cadena de conexión** de la regla. |
| **La condición de un módulo no se guarda** | La pantalla la ejecuta contra el objeto de la página antes de guardarla, y no se pudo ejecutar. | Corrige la condición: los campos tienen que existir en ese objeto. |
| **La condición de un módulo no se nota** | Se aplica desde el **siguiente inicio de sesión** de cada persona. | Cierra la sesión del usuario de prueba y vuelve a entrar. |
| **Un usuario sin sesión no ve nada** | Para **Not Registered**, lo que no está escrito **se deniega**. | Concede expresamente lo que tenga que ver una página pública. |
| **«Partir de otro rol» no ha cambiado una regla que ya tenía** | Solo trae lo que el rol destino no tiene escrito: **nunca pisa**. | Quita antes la regla del destino, o cámbiala a mano. |
| **«Poner en sólo lectura» se ha llevado mis condiciones** | Borra **todas** las reglas de objeto del rol antes de escribir las nuevas. | Úsalo al empezar un rol, no sobre uno ya configurado. |
| **Un asistente de IA no puede conectarse** | Falta **Habilitar MCP**, o el robot del rol o del usuario en **Personas autorizadas**. | Ver [Quién puede conectar un asistente](4WebAPIMCP.md#3-quien-puede-conectar-un-asistente-de-ia). |
| **El asistente lee pero no cambia nada** | En el consentimiento se desmarcó **Cambiar datos**, o el rol no puede, o el objeto no está publicado para editar. | Revisa las tres cosas; para cambiar el consentimiento, desconecta el asistente y vuelve a conectarlo. |
