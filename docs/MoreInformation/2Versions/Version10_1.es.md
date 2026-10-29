# Versión 10.1

Incluye mejoras para crear recorridos y organizar módulos, gestionar nodos del menú en la skin 2026 y activar automáticamente el modo de desarrollo para diseñadores; Lowdy permite girar el personaje.

## Novedades

### Herramientas de desarrollo

- **El plugin Lowdy permite girar el personaje a cualquier ángulo.** Quienes desarrollan con el plugin pueden mostrarlo de lado al abrirlo. También pueden cambiar su orientación mediante la función de giro.
- **En la skin 2026, puedes gestionar los nodos del menú con el botón derecho.** El menú contextual permite editar, añadir, configurar la visibilidad o eliminar nodos. Puedes añadirlos dentro de otro nodo o debajo de él, y abrir desde allí el administrador del menú completo. El recorrido de bienvenida explica cómo usar estas opciones.

## Mejoras

### Herramientas de desarrollo

- **El editor de recorridos mantiene las marcas junto al elemento seleccionado y facilita identificar módulos y reordenar pasos.** La etiqueta de cada módulo muestra su identificador, como cuando se coloca. Al mover un paso, una línea indica dónde se insertará.
- **Puedes colocar módulos con el botón derecho o arrastrándolos, y cambiar la distribución desde una barra más clara.** Al arrastrar un módulo, una línea señala dónde quedará. La distribución libre funciona como un interruptor y, al desactivarla, recuperas la distribución anterior.

### Skins

- **Los diseñadores entran en modo de desarrollo al iniciar sesión, sin necesidad de abrirlo desde el menú.** La opción Modo de desarrollo deja de aparecer en el menú de skin2026. El modo se activa automáticamente para los diseñadores en cada sesión.

## Correcciones

### Instalación

- **La instalación avisa si la versión de SQL Server no es compatible.** El aviso muestra la versión detectada y permite volver a comprobarla. En la instalación desatendida, indica qué versión impide continuar.
- **La instalación no acepta conexiones a la base de datos si el servidor no es accesible.** El paso de conexión indica que el servidor no está accesible, en lugar de dar la conexión por válida. En la configuración de la aplicación se muestra el motivo real del fallo.
