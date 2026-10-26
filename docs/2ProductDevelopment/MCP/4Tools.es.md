# Herramientas y recursos MCP

El servidor `flexygo-mcp` expone herramientas que el agente usa para trabajar sobre el proyecto Flexygo: leer y crear objetos, propiedades, páginas, módulos, procesos, seguridad, pruebas… No es necesario conocerlas: los comandos `/flx-*` y el propio agente las usan según lo que pidas.

---

## Explorar las herramientas disponibles

En Claude Code, escribe `/mcp` y elige el servidor `flexygo` para ver si está conectado y el listado de sus herramientas.

Mientras el agente trabaja, el chat enseña cada herramienta que invoca. Así ves qué está consultando o cambiando en el proyecto.

---

## MCP Apps

Además de las herramientas de datos, el servidor incluye tres **MCP Apps**: interfaces visuales interactivas que el agente puede abrir en respuesta a peticiones concretas. Se ven en los clientes que muestran MCP Apps.

### Flexygo Schema Diagram UI

Diagrama interactivo del modelo de base de datos del proyecto, con jerarquía y relaciones entre entidades. Útil para visualizar el esquema actual antes de hacer cambios o para entender la estructura de un proyecto existente.

**Cómo usarlo:**
```text
Muéstrame el modelo de base de datos actual del proyecto
```

<figure markdown="span">
  ![Diagrama interactivo del modelo de BD con tablas y relaciones](../../docs_assets/images/CoreProductDevelopment/MCP/showDBModel.png)
  <figcaption>El diagrama muestra tablas, columnas, tipos y claves foráneas del proyecto</figcaption>
</figure>

### Color Picker UI

Selector de color interactivo. Al confirmar un color, el agente modifica automáticamente las dos variables principales de la aplicación: el color de cabecera y el color de navegación.

**Cómo usarlo:**
```text
Cambia el color principal de la aplicación a un azul corporativo oscuro usando el color picker
```

<figure markdown="span">
  ![Color Picker con rueda de color, hex #3498DB y botón Aplicar color al proyecto](../../docs_assets/images/CoreProductDevelopment/MCP/colorPicker.png)
  <figcaption>Selecciona el color y pulsa "Aplicar color al proyecto" para que el agente aplique el cambio</figcaption>
</figure>

### Flexygo Page Designer UI

Previsualización del diseñador de páginas: muestra las posiciones disponibles (slots) de cada página y los módulos configurados en cada una. Útil para revisar el layout antes de realizar modificaciones.

**Cómo usarlo:**
```text
Abre el diseñador de páginas para ver qué módulos hay en cada página
```

<figure markdown="span">
  ![Diseñador de páginas con layout de 3 slots y panel de módulos](../../docs_assets/images/CoreProductDevelopment/MCP/pageDesigner.png)
  <figcaption>El diseñador muestra el layout de la página seleccionada con sus posiciones y módulos asignados</figcaption>
</figure>
