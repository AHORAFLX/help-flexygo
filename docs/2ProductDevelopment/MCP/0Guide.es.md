# Guía: construir hablando con el asistente

Con el servidor MCP de Flexygo no hace falta aprenderse ningún comando. Abre el proyecto en Claude Code y **cuéntale al asistente lo que quieres, con tus palabras**. Él reconoce qué tipo de trabajo es, pone en marcha el paso que toca y, al acabar cada uno, te dice cuál viene después.

```text
Quiero una aplicación para gestionar los turnos del personal de una residencia.
```

Los comandos `/flx-` existen y hacen lo mismo: son un atajo para quien prefiera ir directo a un paso. Están todos en [Flujo de trabajo con comandos](./6Workflow.md).

!!! tip "Antes de empezar"
    Necesitas el proyecto creado desde el instalador y abierto en Claude Code. Consulta los [Prerrequisitos](./1Prerequisites.md) y el [Uso básico](./2Usage.md). Si el proyecto aún no tiene bases de datos, el asistente lo nota y empieza por prepararlas.

---

## Formas de empezar

### Desde cero, contando qué quieres

Describe la aplicación: para qué sirve, quién la usa y qué hace cada uno. Cuanto más concreto, mejor parte el asistente.

```text
Quiero una aplicación de gestión de turnos. El coordinador crea los turnos de la semana
y los asigna; cada trabajador ve solo los suyos y puede pedir un cambio, que el
coordinador aprueba o rechaza.
```

Si tienes requisitos, capturas, datos de ejemplo o logos, déjalos antes en la carpeta `{Producto}.Resources/` del proyecto, o súbelos desde el [tablero](./7PanelAndBoard.md#recursos): el asistente los lee antes de preguntarte nada.

### Desde una aplicación generada o unas pantallas ya aprobadas

Si el cliente ya ha aprobado una aplicación hecha con Lovable u otra herramienta, dale la carpeta del proyecto descargado:

```text
El cliente ya aprobó este prototipo de Lovable. Está en C:\Prototipos\turnos.
Constrúyelo en Flexygo.
```

El asistente archiva esas pantallas como el **original** y construye cada una a su imagen con los módulos de Flexygo. Te preguntará cómo de fiel tiene que ser cada pantalla. Consulta [Implantar un original aprobado](./6Workflow.md#implantar-un-original-aprobado).

### Desde un diseño

Si tienes las pantallas dibujadas, o quieres que las dibuje Google Stitch, pide verlas antes de construir:

```text
Antes de construir nada, quiero ver cómo quedarían las pantallas.
```

```text
Aquí tienes las capturas de cómo tiene que ser la pantalla de turnos.
```

El asistente te enseña el diseño y espera tu sí. Desde ese momento, ese diseño es el original con el que se compara lo construido.

### Sobre una base de datos que ya existe o un ERP

Si los datos están en una base que ya existe, por ejemplo la de un ERP, díselo desde el principio:

```text
Los datos están en la base de datos del ERP del cliente. Quiero pantallas para
consultar los pedidos y los clientes.
```

Al preparar el proyecto, el asistente te pregunta siempre si el modelo de datos lo construimos nosotros o pertenece a un sistema que ya está. Si ya está, **no crea nada en esa base de datos**: lee sus tablas reales para construir sobre ellas, y lo que haga falta cambiar viaja como scripts que aplica la propia aplicación.

### Un desarrollo nuevo en un proyecto que ya funciona

En un proyecto que ya tiene cosas construidas, cuenta lo nuevo:

```text
Ahora quiero añadir las vacaciones: cada trabajador las pide y el coordinador las aprueba.
```

El asistente mira primero lo que ya hay (cómo se llama, cómo se ve) para que lo nuevo encaje, y después planifica solo lo nuevo.

### Un cambio pequeño

Para un retoque sobre algo que ya existe, pídelo tal cual:

```text
En la lista de turnos, añade la columna del centro de trabajo.
```

```text
Cambia la etiqueta «Fecha inicio» por «Empieza».
```

Lo hace sin plan ni bloques y deja constancia. Si el cambio resulta ser mayor (tablas nuevas, permisos, cargar datos o más de unos cinco cambios), te lo dice y lo trata como un desarrollo nuevo.

---

## Qué pasa después

Empieces como empieces, el trabajo sigue el mismo camino. Tú no tienes que recordarlo: el asistente te dice en cada momento dónde está y qué viene.

1. **Pregunta.** Recoge el contexto: el negocio, quién usa la aplicación y qué ve cada rol, y si alguien entrará desde fuera.
2. **Propone el plan.** Parte el trabajo en bloques, cada uno a la medida de un chat, con su lista de tareas.
3. **Decide contigo.** Cierra uno a uno los puntos abiertos del plan antes de construir.
4. **Construye por bloques.** Un bloque cada vez. Al terminarlo, lo comprueba él mismo en el navegador con recorridos grabados y deja en verde las pruebas del producto de lo que ha construido, todo en el chat de ese bloque.
5. **Te pide tu decisión en los puntos clave**: con una recomendación y sus opciones. Nada se decide por tu silencio.

Y van incluidos, sin que tengas que pedirlos:

- **Revisión**: compara lo acordado con lo construido.
- **Seguridad**: propone quién puede qué, tú decides, y prueba cada regla entrando como cada rol, con su propio usuario de prueba.
- **Calidad**: busca lo que falta, como el paginador, el estado vacío o el camino de vuelta.
- **Ayuda**: un centro de ayuda para el usuario final, con visitas guiadas.
- **API**: solo si la aplicación se usa desde fuera.
- **Comprobación final**: primero, una auditoría de seguridad que hace un agente que no construyó la aplicación; después, los documentos de entrega (`README.md`, `CI.md` y `ONBOARDING.md`), y por último publica el producto desde cero, solo con lo que hay en su repositorio, en unas bases de datos propias, y pasa allí todas sus pruebas. Con todo en verde, el desarrollo se cierra. Consulta [La comprobación final](./6Workflow.md#la-comprobacion-final-flx-release).

---

## Cosas que vale la pena saber

### Retomar el trabajo otro día

Abre un **chat nuevo** y di, por ejemplo:

```text
¿Por dónde íbamos?
```

El asistente no necesita la conversación anterior: parte de lo que el servidor guarda en el proyecto. Por eso puedes cerrar el chat sin miedo a perder nada.

### Cuidar el contexto: cuándo abrir un chat nuevo

Cuanto más larga es una conversación, peor responde el asistente y más cuesta cada mensaje, porque el modelo vuelve a leerla entera. El servidor está pensado para que no haga falta arrastrarla:

- **Un punto de control de unos 2 KB** por desarrollo, con la fase, el bloque, las decisiones abiertas, el último resultado de la verificación, las incidencias conocidas y lo que toca. Se rehace con cada paso, así que nunca va por detrás.
- **El estado del proyecto**, que cualquier chat nuevo consulta para saber en qué fase está y qué toca, sin adivinarlo.
- **Las lecciones del proyecto**: tus correcciones y los límites encontrados pasan de un bloque al siguiente desde el proyecto, no desde el chat.
- **Las guías de referencia se leen cuando hacen falta**, no al empezar: el asistente pide la de informes, la de seguridad o la de la WebAPI solo cuando va a trabajar en eso.

En la práctica:

- **Abre un chat nuevo para cada fase o cada bloque**, y siempre para construir una aplicación entera.
- **Haz caso a la banda del panel**: enseña cuánto contexto lleva gastado el chat y se pone en rojo desde el 80 %, cuando toca un chat nuevo. En una terminal, la línea de estado avisa también desde el 80 %. Y en un chat muy largo, al cerrar una tarea o un bloque, el asistente te ofrece seguir en uno nuevo, con el mensaje para empezarlo.
- **No planifiques y construyas en el mismo chat**: lo que se gasta pensando hace falta luego para construir.

Consulta [Retomar el trabajo](./6Workflow.md#retomar-el-trabajo-sin-pagar-la-conversacion-entera).

### El modelo de cada paso

El asistente te recomienda, en negrita y con su porqué, el modelo de la fase en que está el proyecto:

- **Opus** para pensar y decidir: el plan, las decisiones, la revisión, la calidad y la auditoría de seguridad. Ahí un error sale caro, porque lo que se decide mal se construye mal.
- **Sonnet** para construir y comprobar: el contexto, cada bloque, la seguridad, la ayuda, la API y la comprobación final.
- **Haiku** para mirar dónde está el trabajo. Dentro de una fase, también lo propone para los pasos mecánicos: traducir los textos de las visitas guiadas, sacar las capturas de la ayuda o repetir los recorridos grabados.

Seguirlo es **pagar el modelo caro solo donde mejora el resultado**. Decides tú: cambiar (`/model opus`), quedarte con el tuyo en esa fase o quedarte siempre con el tuyo. El asistente nunca cambia de modelo por su cuenta. Consulta [El modelo de cada fase](./6Workflow.md#el-modelo-de-cada-fase).

### Ver por dónde va

- **La barra del panel**, encima del chat, dice en qué fase está el trabajo, qué está haciendo el asistente en ese momento, qué espera tu decisión (con un botón por opción) y qué viene después. Con sus botones escribes el siguiente comando, arrancas o paras la aplicación, la ves en directo o abres el tablero. También avisa cuando el chat se está llenando.
- **El tablero**, en el navegador, tiene el detalle de todo, en pestañas: el resumen del proyecto, la aplicación en directo al lado de un chat, las tareas y sus dependencias, el histórico, lo que ha costado cada fase, las decisiones, el modelo de datos, las pantallas, el diseño, la seguridad, la calidad y los recursos.

Consulta [Panel y tablero](./7PanelAndBoard.md).

### Pedir cambios

- **Sobre lo que acaba de construir**: dilo en el chat, nombrando la pantalla o el campo. Si el asistente se equivocó, corrígelo: apunta la corrección y los siguientes bloques ya la saben.
- **Señalando en la propia aplicación**: en la pestaña **En directo** del tablero, pulsa **Seleccionar**, haz clic en lo que quieras cambiar y escribe qué cambiarías.
- **Algo nuevo y grande**: cuéntalo como un desarrollo nuevo.

### Lo que el asistente hace y lo que no

El asistente lee la configuración antes de cambiar nada, te pregunta antes de crear, migrar o borrar datos y antes de dar a alguien el rol de administrador o de diseñador, y, al cerrar cada bloque y cada fase que cambia la configuración, guarda esa configuración en los scripts del producto y hace el commit, o el commit y el push, como decidiste al empezar el proyecto. Nunca fuerza un push.

Hay cosas que **no construye aunque se le pidan**, porque dejarían la aplicación abierta:

- un proceso que toma el usuario o el rol del navegador, que cualquiera puede cambiar;
- decisiones que comparan a mano con el rol de administrador;
- código cargado a mano o desde una CDN pública;
- botones con código en línea (`onclick` y similares) en un módulo HTML, que no pasan por la seguridad ni por los procesos;
- SQL que se construye al ejecutarse, salvo con tu permiso expreso.

Tampoco copia una pantalla en HTML solo por parecido: usa los módulos de Flexygo, que traen la seguridad, el paginador y la búsqueda. Consulta [Lo que el agente no construye](./6Workflow.md#lo-que-el-agente-no-construye).

### El vídeo de producto

Al cerrar un desarrollo, el asistente te ofrece una vez un vídeo corto del producto o de lo entregado, hecho con HyperFrames, en horizontal y en vertical, en la carpeta `{Producto}.Marketing/videos/`. Es opcional y no es una fase del flujo. También puedes pedirlo:

```text
Hazme un vídeo de lo que hemos entregado en este desarrollo.
```

Necesita Node.js, ffmpeg, el plugin `brag` de Claude Code, las skills de HyperFrames y la aplicación en marcha. Consulta [Flujo de trabajo con comandos](./6Workflow.md#el-flujo-en-orden).
