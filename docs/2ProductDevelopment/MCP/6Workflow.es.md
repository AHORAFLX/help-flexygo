# Flujo de trabajo con comandos

Con Claude Code, el servidor MCP de Flexygo se maneja con **comandos** que empiezan por `/flx-`. Cada comando es una fase, y cada fase es la puerta de la siguiente: el agente no salta una fase ni adivina en cuál está.

!!! tip "¿No ves los comandos?"
    Los comandos se instalan en el proyecto la primera vez que arranca el servidor. Si al escribir `/flx-` no aparecen, pide al agente que sincronice los comandos de Flexygo y abre un chat nuevo.

---

## El flujo, en orden

| Comando | Para qué sirve |
|---|---|
| `/flx-context` | Recoge el contexto del proyecto: el negocio, los prefijos, las convenciones y **quién usa la aplicación** (roles, pantallas públicas y si alguien entrará desde fuera). Escribe `ONBOARDING.md` en la raíz del proyecto. |
| `/flx-plan` | Convierte el encargo en bloques con su lista de tareas. Si la aplicación tiene varios roles, el plan lleva una tarea de seguridad; si tiene pantallas, termina con datos de demostración. |
| `/flx-discuss` | Cierra uno a uno los puntos abiertos del plan y apunta cada decisión. |
| `/flx-execute` | Construye **un** bloque, tarea a tarea. |
| `/flx-review` | Compara lo acordado con lo construido. |
| `/flx-verify` | Comprueba en el navegador que funciona, repitiendo los recorridos grabados. |
| `/flx-test` | Escribe las pruebas del propio producto y las deja en verde. |
| `/flx-quality` | Busca lo que falta (paginador, estado vacío, camino de vuelta…) y apunta tu decisión sobre cada hallazgo. |
| `/flx-help` | Da a la aplicación su ayuda para el usuario final: una visita de bienvenida por rol, en la página de inicio, que se abre sola la primera vez que el usuario entra; una visita guiada por pantalla; la ayuda de los campos, y una página de ayuda con capturas. |
| `/flx-api` | Solo si la aplicación se usa desde fuera: expone lo construido por la WebAPI, de solo lectura por defecto y por rol, y lo prueba con un usuario de cada rol. |

Además, en cualquier momento:

- `/flx-status` dice dónde está el trabajo y qué toca después.
- `/flx-origin` dice en qué origen cae lo que se construye.
- `/flx-build-product` recorre el flujo entero para «una aplicación de…».
- `/flx-new-development` empieza un trabajo nuevo en un proyecto que ya tiene cosas construidas.

### Cambios pequeños: `/flx-fast`

Para un cambio menor sobre algo que ya existe (una propiedad, una etiqueta, un filtro, un módulo, una lista) no hace falta plan ni bloques: `/flx-fast` lo hace y deja constancia.

Si el cambio es mayor, `/flx-fast` lo manda a `/flx-new-development`. Es mayor si hace alguna de estas cosas:

- crea tablas o entidades nuevas;
- toca permisos;
- carga datos;
- borra una entidad;
- son más de unos cinco cambios.

Antes de empezar solo pregunta si el cambio borra algo o es ambiguo.

---

## Verificación más barata: recorridos grabados

`/flx-verify` ya no vuelve a mirar cada pantalla con el agente. Cada pantalla tiene un **recorrido**: un paseo por el navegador grabado en un fichero del proyecto de pruebas de interfaz (`{Producto}.InterfaceTest/walks/`). Es código del producto: viaja con git y se ejecuta también en la integración continua.

Al verificar, el servidor repite todos los recorridos de una vez, en un solo navegador:

- **Un recorrido que pasa** contra su referencia aceptada queda apuntado como «visto funcionando», con su captura. No se te pide volver a mirar esa pantalla.
- **Un recorrido que falla** se apunta en rojo y reabre su tarea.
- **Una captura nueva o que ha cambiado** vuelve a ti con la diferencia pintada en rojo. La abres, la miras y la aceptas o la rechazas. Lo aceptado queda apuntado.

Además, cada captura se mide sola: el contraste, los identificadores sin traducir, las imágenes rotas, el desplazamiento lateral y el orden de las listas.

El ahorro está en que el agente solo atiende lo que falla o cambia, en vez de revisar una por una todas las pantallas.

---

## Las pruebas del propio producto

`/flx-test` escribe pruebas que se quedan en el repositorio del producto, en sus dos proyectos de pruebas:

- **`{Producto}.UnitTest`**: al menos una prueba por cada proceso o regla de negocio nueva.
- **`{Producto}.InterfaceTest`**: al menos un recorrido por cada pantalla nueva. Comprueba que se abre sin errores, que su acción principal funciona y que se ve el efecto.

El agente te propone la lista en palabras de negocio y espera tu sí. Cada prueba crea sus propios datos y los borra al acabar, sin tocar los datos de demostración.

Antes de dar las pruebas por buenas, el agente estropea una a propósito, la ve fallar y la deja otra vez en verde. Las pruebas unitarias se ejecutan en la integración continua antes de cada publicación. Para las de interfaz, la aplicación tiene que estar arrancada.

Si decides prescindir de las pruebas, queda apuntado como una decisión.

---

## Retomar el trabajo sin pagar la conversación entera

Retomar una conversación larga cuesta caro: el modelo vuelve a leerla entera. Por eso el servidor mantiene, para cada desarrollo, un **punto de control** de unos 2 KB con lo esencial:

- la fase y el bloque;
- las decisiones abiertas;
- el último resultado de la verificación;
- las incidencias conocidas;
- lo que toca después.

Para seguir otro día o cuando el chat ya pesa:

1. Abre un **chat nuevo**.
2. Escribe `/flx-status`, o directamente el siguiente comando del flujo.

El agente parte del punto de control y no de la conversación anterior. La línea de estado, bajo el cuadro de texto, avisa con `context N% → new chat` cuando conviene cambiar de chat.

---

## Telemetría de errores

Cuando una herramienta del servidor falla, el servidor registra lo necesario para reproducir el fallo:

- la herramienta y sus argumentos, con las contraseñas y los valores de SQL enmascarados;
- el error;
- las versiones;
- la fase y la tarea en que ocurrió.

**Nunca envía la conversación ni las filas de una consulta.**

Por defecto, los errores van a un recolector OpenTelemetry en el propio equipo (`http://localhost:7472`), así que no salen de él. La primera respuesta del servidor en cada sesión lo recuerda.

Para enviarlos a otro recolector, pon su dirección en la variable de entorno `FLEXYGO_MCP_ERROR_TELEMETRY`. Para apagarla:

```bash
FLEXYGO_MCP_ERROR_TELEMETRY=off
```

---

## Panel y tablero

El estado del flujo también se ve sin preguntar: en el panel de Flexygo, sobre el chat, y en el tablero del desarrollador. Consulta [Panel y tablero](./7PanelAndBoard.md).
