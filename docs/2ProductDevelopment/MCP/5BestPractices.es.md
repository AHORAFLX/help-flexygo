# Buenas prácticas

Estas recomendaciones asumen que el servidor `flexygo-mcp` está en marcha y conectado a GitHub Copilot en modo agente. Si todavía no lo has configurado, consulta primero [Uso básico](./2Usage.md).

---

## Modelo recomendado

Para trabajar con el servidor MCP de Flexygo se recomienda usar **Claude Sonnet 4.6** como modelo en el agente de Copilot. Ofrece el mejor equilibrio entre razonamiento, gestión de herramientas MCP y calidad de código generado.

---

## Gestión de la ventana de contexto

Este es el factor que más afecta a la calidad del trabajo con el agente. A medida que la conversación crece, el agente empieza a perder coherencia, olvida instrucciones anteriores y comete errores que no cometería con el contexto limpio.

**Reglas prácticas:**

- **Una tarea por conversación.** Abre una nueva conversación de agente para cada tarea independiente. No acumules el historial de sesiones anteriores.
- **Cierra y reabre cuando notes degradación.** Si el agente empieza a dar respuestas inconsistentes o a ignorar instrucciones, la conversación está demasiado cargada. Abre una nueva y resume el estado.
- **No uses la misma conversación para planificar y ejecutar.** La fase de análisis o discusión consume contexto que luego hace falta para la ejecución.
- **Para flujos largos como `/build-mvp`, empieza siempre con contexto limpio.** El agente necesita toda la ventana disponible para orquestar correctamente el flujo completo.

---

## Herramientas de desarrollo spec-driven (GSD, Spec Kit y similares)

!!! warning "No uses herramientas spec-driven junto al servidor MCP"
    Herramientas como **GSD**, **Spec Kit** u otras basadas en *spec-driven development* recopilan grandes cantidades de contexto del proyecto (estructura de archivos, historial, decisiones, planes, etc.). Sin embargo, **no deben usarse junto con el servidor MCP de Flexygo**.

    **¿Por qué?**

    El servidor MCP ya inyecta su propio contexto especializado sobre el estado de la aplicación y la base de datos. Estas herramientas de planificación no tienen acceso real a cómo funciona la aplicación ni a la estructura de la BD, por lo que el contexto que generan no refleja la realidad del proyecto Flexygo.

    El resultado es contraproducente: el contexto que recopilan **interfiere con el contexto real que aporta el MCP** y ocupa ventana de contexto con información que no tiene valor operativo. El agente acaba trabajando con señales contradictorias.

    **Usa el servidor MCP directamente**, sin capas adicionales de planificación spec-driven. Para tareas complejas, sigue los consejos de la sección [Gestión de la ventana de contexto](#gestion-de-la-ventana-de-contexto) y divide el trabajo en pasos.

---

## Prompt /build-mvp

El prompt principal para **crear un producto Flexygo desde cero**. Basta con describir qué quieres construir:

```text
/build-mvp Quiero un backoffice para gestionar un call center
```

El agente guía todo el proceso: modelo de datos → estilo → plan de implementación → generación → verificación → scripts de migración. Consulta el [flujo completo en Uso básico](./2Usage.md#flujo-build-mvp) para ver cada fase con detalle.

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

## Tips de uso con Copilot

- Arranca el servidor `flexygo-mcp` **antes** de abrir VS Code. Si Copilot ya estaba abierto, recarga la ventana (`Ctrl+Shift+P` → **Developer: Reload Window**).
- Usa siempre el modo **Agente** en el panel de Chat, no el chat de edición inline — solo el modo agente tiene acceso a las herramientas MCP.
- Si el agente no usa las herramientas MCP cuando debería, recuérdaselo explícitamente: `"Usa las herramientas de Flexygo MCP para esto"`.
- Cuando el agente proponga varios enfoques, elige uno antes de continuar. La ambigüedad sostenida consume contexto sin avanzar.
- Si una respuesta fue incorrecta, corrígela en el siguiente mensaje antes de continuar con la tarea — no la ignores o el agente construirá sobre el error.

---

## Verifica que el agente usa las herramientas

El chat de Copilot muestra en tiempo real qué herramientas está invocando el agente. **Si el agente no aparece usando ninguna herramienta de Flexygo, está inventando la respuesta** — no está consultando ni modificando nada real en el proyecto.

Señales de que el agente está alucinando en lugar de usar el MCP:

- Responde inmediatamente sin mostrar ninguna invocación de herramienta
- Describe entidades o estructuras que no coinciden con tu proyecto real
- Los cambios que "realizó" no aparecen reflejados en la aplicación

Si ocurre, detén la conversación, verifica que el servidor está activo en `.vscode/mcp.json` (estado **Running**) y pide al agente explícitamente que use las herramientas de Flexygo.

---

## Haz un commit de checkpoint antes de iterar

Cuando hayas completado el flujo `/build-mvp` y el usuario haya revisado y aprobado la base generada, **haz un commit a Git antes de continuar** con peticiones de mejoras o modificaciones individuales.

Este checkpoint tiene varias ventajas:

- Tienes un punto de retorno claro si una iteración posterior rompe algo
- El agente puede ver exactamente qué ha cambiado en cada tarea (diff limpio)
- Mantienes el control de qué es "base aprobada" y qué son cambios posteriores

Es una buena práctica hacer commits frecuentes a medida que avanzas — no esperes a tener el producto terminado.

---

## Ajusta la complejidad de lo que pides

El servidor MCP tiene capacidad de evaluar la envergadura de una tarea y decidir cómo afrontarla: si la tarea es suficientemente grande generará un plan antes de ejecutar; si es más acotada la abordará directamente.

En cualquier caso, **es responsabilidad del usuario no pedir tareas demasiado complejas o con demasiados frentes abiertos a la vez**. Cuantas más variables tenga una petición, más probabilidades hay de que el resultado no sea el esperado o de que el agente pierda coherencia a mitad del proceso.

Si la tarea que tienes en mente parece grande, divídela tú antes de dársela al agente.
