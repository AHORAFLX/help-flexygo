# Buenas prácticas

Estas recomendaciones asumen que el servidor `flexygo-mcp` está conectado a Claude Code. Si todavía no lo has configurado, consulta primero [Uso básico](./2Usage.md).

---

## Modelo recomendado

Usa un modelo Claude actual. Para pensar y decidir (`/flx-context`, `/flx-plan`, `/flx-discuss`) conviene el modelo más capaz que tengas; para ejecutar un bloque ya decidido (`/flx-execute`, `/flx-verify`) basta con uno más rápido y barato.

---

## Gestión de la ventana de contexto

Este es el factor que más afecta a la calidad del trabajo con el agente. A medida que la conversación crece, el agente empieza a perder coherencia, olvida instrucciones anteriores y comete errores que no cometería con el contexto limpio. Además, cada mensaje en una conversación larga cuesta más.

**Reglas prácticas:**

- **Un chat nuevo por fase o por bloque.** El servidor guarda un punto de control de cada desarrollo, así que un chat nuevo retoma el trabajo sin releer la conversación anterior: escribe `/flx-status` o el siguiente comando. Consulta [Retomar el trabajo](./6Workflow.md#retomar-el-trabajo-sin-pagar-la-conversacion-entera).
- **Haz caso al aviso de la línea de estado.** Cuando el contexto se llena, la línea de estado de Flexygo lo dice con `context N% → new chat`.
- **No uses la misma conversación para planificar y ejecutar.** La fase de análisis o discusión consume contexto que luego hace falta para la ejecución.
- **Para `/flx-build-product`, empieza siempre con contexto limpio.**

---

## Herramientas de desarrollo spec-driven (GSD, Spec Kit y similares)

!!! warning "No uses herramientas spec-driven junto al servidor MCP"
    Herramientas como **GSD**, **Spec Kit** u otras basadas en *spec-driven development* recopilan grandes cantidades de contexto del proyecto (estructura de archivos, historial, decisiones, planes, etc.). Sin embargo, **no deben usarse junto con el servidor MCP de Flexygo**.

    **¿Por qué?**

    El servidor MCP ya inyecta su propio contexto especializado sobre el estado de la aplicación y la base de datos. Estas herramientas de planificación no tienen acceso real a cómo funciona la aplicación ni a la estructura de la BD, por lo que el contexto que generan no refleja la realidad del proyecto Flexygo.

    El resultado es contraproducente: el contexto que recopilan **interfiere con el contexto real que aporta el MCP** y ocupa ventana de contexto con información que no tiene valor operativo. El agente acaba trabajando con señales contradictorias.

    **Usa el servidor MCP directamente**, sin capas adicionales de planificación spec-driven. Para tareas complejas, sigue los consejos de la sección [Gestión de la ventana de contexto](#gestion-de-la-ventana-de-contexto) y divide el trabajo en pasos.

---

## Sigue el flujo de comandos

Los comandos `/flx-*` llevan el trabajo fase a fase: contexto, plan, decisiones, ejecución por bloques, revisión, verificación, pruebas, calidad, ayuda y, si hace falta, la API. Cada fase es la puerta de la siguiente, así que no hace falta que recuerdes qué toca: el agente, el panel y `/flx-status` lo dicen. Consulta el [flujo completo](./6Workflow.md).

---

## Cómo dar órdenes efectivas

### Identifica siempre el objeto sobre el que trabajas

Cuando quieras modificar algo, indica explícitamente qué es y cómo se llama. El agente trabaja con un proyecto que puede tener decenas de módulos, entidades o páginas — sin ese contexto, interpreta o pregunta.

=== "Demasiado vago"

    ```text
    Modifica el módulo de listado para que muestre también el teléfono
    ```

=== "Efectivo"

    ```text
    En el módulo "ListadoClientes" (entidad Cliente), añade la propiedad
    Telefono como columna visible en el grid. El campo ya existe en la entidad.
    ```

---

### Delimita el alcance de la tarea

Indica qué no debe tocarse. Los agentes tienden a ser más creativos de lo necesario cuando el alcance no está claro.

```text
Quiero cambiar el color del header a #1a3a5c.
Usa el Color Picker MCP App. No modifiques nada más del estilo.
```

---

### Separa las fases cuando la tarea es compleja

Si una tarea tiene varias partes, pídelas en pasos y espera confirmación entre ellos. No lances todo en un solo prompt.

=== "Un prompt que puede descontrolarse"

    ```text
    Crea la entidad Pedido, añade la relación con Cliente, genera el formulario
    de alta y actualiza el menú de navegación
    ```

=== "Mismo trabajo, bajo control"

    ```text
    Paso 1: Crea la entidad Pedido con los campos: id, fecha, total, clienteId (FK a Cliente).
    Cuando lo tengas, confirma y espera.
    ```
    *(Tras confirmación)*
    ```text
    Paso 2: Genera el formulario de alta para la entidad Pedido.
    Cuando lo tengas, confirma y espera.
    ```

---

### Pide revisión antes de ejecutar cambios de datos

Para cualquier operación que modifique la base de datos, pide al agente que describa lo que va a hacer antes de ejecutarlo:

```text
Antes de ejecutar cualquier cambio en la base de datos, explícame exactamente
qué operaciones vas a realizar y espera mi confirmación.
```

---

### Da contexto al inicio de cada conversación

Si la tarea parte de un estado específico del proyecto, orienta al agente antes de pedir nada:

```text
Estoy en el módulo "GestionPedidos". La entidad Pedido tiene los campos:
id, fecha, total, estado (enum: Pendiente/Enviado/Entregado), clienteId.
Quiero añadir un filtro por estado en el listado principal.
```

El agente trabajará sobre lo que le describes — no asumas que "sabe" cómo está tu proyecto en este momento.

---

## Consejos de uso con Claude Code

- Si el agente no usa las herramientas de Flexygo cuando debería, recuérdaselo explícitamente: `"Usa las herramientas de Flexygo MCP para esto"`.
- Cuando el agente proponga varios enfoques, elige uno antes de continuar. La ambigüedad sostenida consume contexto sin avanzar.
- Si una respuesta fue incorrecta, corrígela en el siguiente mensaje antes de continuar con la tarea — no la ignores o el agente construirá sobre el error.
- Cuando actualices el servidor (`dotnet tool update -g flexygo-mcp`), abre un **chat nuevo**: un chat ya empezado sigue con las herramientas de antes.

---

## Verifica que el agente usa las herramientas

El chat de Claude Code muestra en tiempo real qué herramientas está invocando el agente. **Si el agente no aparece usando ninguna herramienta de Flexygo, está inventando la respuesta** — no está consultando ni modificando nada real en el proyecto.

Señales de que el agente está alucinando en lugar de usar el MCP:

- Responde inmediatamente sin mostrar ninguna invocación de herramienta
- Describe entidades o estructuras que no coinciden con tu proyecto real
- Los cambios que "realizó" no aparecen reflejados en la aplicación

Si ocurre, detén la conversación, comprueba con `/mcp` que el servidor `flexygo` está conectado y pide al agente explícitamente que use las herramientas de Flexygo.

---

## Haz un commit de checkpoint antes de iterar

Cuando cierres un bloque o un desarrollo y lo hayas revisado y aprobado, **haz un commit a Git antes de continuar** con peticiones de mejoras o modificaciones individuales.

Este checkpoint tiene varias ventajas:

- Tienes un punto de retorno claro si una iteración posterior rompe algo
- El agente puede ver exactamente qué ha cambiado en cada tarea (diff limpio)
- Mantienes el control de qué es "base aprobada" y qué son cambios posteriores

Es una buena práctica hacer commits frecuentes a medida que avanzas — no esperes a tener el producto terminado.

---

## Ajusta la complejidad de lo que pides

Un cambio pequeño sobre algo que ya existe va por `/flx-fast`, sin plan. Lo que crea tablas o entidades, toca permisos o carga datos va por `/flx-new-development` y `/flx-plan`, que lo parte en bloques.

En cualquier caso, **es responsabilidad del usuario no pedir tareas demasiado complejas o con demasiados frentes abiertos a la vez**. Cuantas más variables tenga una petición, más probabilidades hay de que el resultado no sea el esperado o de que el agente pierda coherencia a mitad del proceso.

Si la tarea que tienes en mente parece grande, divídela tú antes de dársela al agente.
