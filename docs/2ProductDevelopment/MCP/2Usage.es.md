# Uso básico del servidor MCP

Una vez cumplidos los [prerrequisitos](./1Prerequisites.md), el proyecto ya incluye todo lo necesario para trabajar con el servidor MCP desde **Claude Code**.

---

## Abrir el proyecto en Claude Code

El proyecto generado desde la plantilla de Flexygo trae en su raíz el fichero `.mcp.json`, que le dice a Claude Code cómo arrancar el servidor, y `.claude/settings.json`, que lo deja activado para el proyecto. No hay que arrancar nada a mano: Claude Code lanza el servidor al abrir la carpeta del proyecto.

1. Abre la carpeta del proyecto en Claude Code: en la aplicación de escritorio, en la extensión de VS Code o en una terminal, con `claude` desde esa carpeta.
2. Si Claude Code te pregunta si quieres usar el servidor `flexygo` del proyecto, acepta.
3. Escribe `/mcp` para comprobar que el servidor `flexygo` aparece conectado.

La primera vez que arranca, el servidor instala en el proyecto los comandos `/flx-*` y el panel de Flexygo. Si al escribir `/flx-` no aparecen los comandos, abre un chat nuevo.

!!! warning "Antes de empezar: herramientas spec-driven"
    Si usas herramientas como **GSD**, **Spec Kit** u otras basadas en *spec-driven development*, **no las combines con el servidor MCP de Flexygo**. El contexto que generan interfiere con el contexto real que aporta el MCP y degrada la calidad del agente. Consulta [Buenas prácticas](./5BestPractices.md#herramientas-de-desarrollo-spec-driven-gsd-spec-kit-y-similares) para más detalle.

---

## Primeros pasos

El trabajo se hace con comandos que empiezan por `/flx-`, fase a fase. Para empezar:

| Situación | Comando |
|---|---|
| Proyecto recién creado, sin bases de datos ni conexiones | `/flx-setup` prepara las bases de datos y las cadenas de conexión. |
| Primera vez que trabajas en el proyecto | `/flx-context` recoge de qué va la aplicación y quién la usa. |
| Quieres una aplicación entera | `/flx-build-product`, con una descripción de lo que quieres construir. |
| Quieres añadir algo a un proyecto que ya tiene cosas | `/flx-new-development`, y después `/flx-plan`. |
| Es un cambio pequeño sobre algo que ya existe | `/flx-fast`. |
| No sabes por dónde ibas | `/flx-status`. |

Por ejemplo:

```text
/flx-build-product Quiero un backoffice para gestionar un call center
```

Cuanto más concreto seas en la descripción, mejor parte el agente. A partir de ahí, el agente te dice en cada momento qué comando toca.

Consulta el flujo completo, fase a fase, en [Flujo de trabajo con comandos](./6Workflow.md). El estado del trabajo se ve también en el [panel y el tablero](./7PanelAndBoard.md), y lo que el agente construye con Flexygo 10, en [Lo que construye en Flexygo 10](./8Flexygo10.md).

!!! tip "Consejos para mejores resultados"
    Consulta las [Buenas prácticas](./5BestPractices.md) para recomendaciones sobre cómo pedir las cosas y cuándo abrir un chat nuevo.
