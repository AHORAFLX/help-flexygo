# Uso básico del servidor MCP

Una vez cumplidos los [prerrequisitos](./1Prerequisites.md), el proyecto ya incluye todo lo necesario para trabajar con el servidor MCP desde **Claude Code**.

En este vídeo tienes el recorrido completo, desde crear el producto con el instalador hasta construir la aplicación con `/flx-setup` y `/flx-build-product`:

<div class="video-wrapper">
  <iframe src="https://www.youtube.com/embed/wlQOwgZJAR4" title="Crea un producto Flexygo con tu asistente de IA y el servidor MCP" frameborder="0" allowfullscreen></iframe>
</div>

---

## Abrir el proyecto en Claude Code

El proyecto generado desde la plantilla de Flexygo trae en su raíz el fichero `.mcp.json`, que le dice a Claude Code cómo arrancar el servidor, y `.claude/settings.json`, que deja aprobado el servidor `flexygo` y enciende el [panel de Flexygo](./7PanelAndBoard.md). No hay que arrancar nada a mano: Claude Code lanza el servidor al abrir la carpeta del proyecto.

1. Abre la carpeta del proyecto en Claude Code: en la aplicación de escritorio, en la extensión de VS Code o en una terminal, con `claude` desde esa carpeta.
2. Si Claude Code te pregunta si quieres usar los servidores del proyecto, acepta `flexygo` y `playwright`, el navegador con el que el agente comprueba la aplicación. `stitch` solo hace falta para dibujar las pantallas con Google Stitch.
3. Escribe `/mcp` para comprobar que el servidor `flexygo` aparece conectado.

La primera vez que arranca, el servidor instala en el proyecto los comandos `/flx-*`, enciende el panel y añade al `.mcp.json` el servidor del navegador. Una sesión que ya estaba abierta puede no verlo: si al escribir `/flx-` no aparecen los comandos, vuelve a abrir el proyecto (en VS Code, *Developer: Reload Window*), que lo recoge todo. Consulta [Lo que el servidor añade al proyecto](./3Configuration.md#lo-que-el-servidor-anade-al-proyecto).

!!! warning "Antes de empezar: herramientas spec-driven"
    Si usas herramientas como **GSD**, **Spec Kit** u otras basadas en *spec-driven development*, **no las combines con el servidor MCP de Flexygo**. El contexto que generan interfiere con el contexto real que aporta el MCP y degrada la calidad del agente. Consulta [Buenas prácticas](./5BestPractices.md#herramientas-de-desarrollo-spec-driven-gsd-spec-kit-y-similares) para más detalle.

---

## Primeros pasos

No hace falta escribir comandos: basta con contarle al asistente lo que quieres, y él pone en marcha cada paso. La [Guía](./0Guide.md) cuenta las formas de empezar, con ejemplos de lo que puedes decirle.

Si prefieres ir directo a un paso, los comandos empiezan por `/flx-`. Para empezar:

| Situación | Comando |
|---|---|
| Proyecto recién creado, sin bases de datos ni conexiones | `/flx-setup` prepara las bases de datos y las cadenas de conexión. |
| Primera vez que trabajas en el proyecto | `/flx-context` recoge de qué va la aplicación y quién la usa. |
| Quieres una aplicación entera | `/flx-build-product`, con una descripción de lo que quieres construir. |
| Quieres añadir algo a un proyecto que ya tiene cosas | `/flx-new-development`, y después `/flx-plan`. |
| Tienes unas pantallas ya aprobadas, hechas con Lovable u otra herramienta | `/flx-lovable`, con la carpeta del proyecto generado. |
| Quieres ver el diseño de las pantallas antes de construirlas | `/flx-design`. |
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
