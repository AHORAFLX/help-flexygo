# Versión 10.1

El Actualizador prepara la siguiente versión por la noche y registra resultados; mejoran el editor de recorridos, Lowdy, la gestión del menú y los paneles de configuración.

## Novedades

### Actualizador

- **La preparación nocturna deja lista la siguiente versión y registra el resultado, incluidos los errores o los motivos por los que no actuó.** Se ejecuta a la 1:00 y utiliza la versión del proyecto, no la del Actualizador. Primero actualiza el propio Actualizador; no se ejecuta si hay otra actualización en curso ni fuera de IIS. Consulta el registro de tareas programadas para saber qué versión preparó o por qué no actuó.

### Herramientas de desarrollo

- **El plugin Lowdy permite girar el personaje a cualquier ángulo.** Quienes desarrollan con el plugin pueden mostrarlo de lado al abrirlo. También pueden cambiar su orientación mediante la función de giro.
- **En la skin 2026, puedes gestionar los nodos del menú con el botón derecho.** El menú contextual permite editar, añadir, configurar la visibilidad o eliminar nodos. Puedes añadirlos dentro de otro nodo o debajo de él, y abrir desde allí el administrador del menú completo. El recorrido de bienvenida explica cómo usar estas opciones.

## Mejoras

### Actualizador

- **La descripción de la precarga del Actualizador está disponible en catalán, alemán, español, francés, italiano y portugués.** Así, quienes consulten el proceso pueden entender su propósito en cualquiera de esos idiomas.

### Configuración

- **La skin 2022 muestra los paneles de configuración y salud con un diseño claro adaptado a sus colores.** Ambos paneles aparecen en el menú del panel de control. Su aspecto plano y claro sigue los colores del tema.

### Herramientas de desarrollo

- **El editor de recorridos mantiene las marcas junto al elemento seleccionado y facilita identificar módulos y reordenar pasos.** La etiqueta de cada módulo muestra su identificador, como cuando se coloca. Al mover un paso, una línea indica dónde se insertará.
- **Puedes colocar módulos con el botón derecho o arrastrándolos, y cambiar la distribución desde una barra más clara.** Al arrastrar un módulo, una línea señala dónde quedará. La distribución libre funciona como un interruptor y, al desactivarla, recuperas la distribución anterior.

### Skins

- **Los diseñadores entran en modo de desarrollo al iniciar sesión, sin necesidad de abrirlo desde el menú.** La opción Modo de desarrollo deja de aparecer en el menú de skin2026. El modo se activa automáticamente para los diseñadores en cada sesión.

## Correcciones

### Informes

- **Puedes generar informes de Crystal Reports en bases de datos con autenticación de Windows.** La autenticación se aplica también a los subinformes. Si falla la generación, el mensaje incluye el motivo indicado por Crystal Reports.

### Interfaz

- **Vuelven a mostrarse las imágenes de cinco diseños de página en instalaciones Linux y Docker.** Las rutas corregidas evitan que las imágenes fallen en sistemas que distinguen entre mayúsculas y minúsculas. Las bases de datos existentes reciben la ruta actualizada en su siguiente actualización.

### Notificaciones

- **Las notificaciones sin leer vuelven a mostrarse con fondo blanco, barra azul y texto azul en la skin 2022.** En la campana, las notificaciones sin leer recuperan el estilo visual esperado.
