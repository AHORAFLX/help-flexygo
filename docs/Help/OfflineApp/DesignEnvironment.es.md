# Entorno de diseño

Una vez que la aplicación está guardada, nos familiarizaremos con el entorno de diseño de la aplicación.

## Skin 2026

En la skin 2026 la app se abre en una sola pantalla. Arriba, una banda con la app y sus cifras (objetos, páginas, menús, sincronizaciones y cuántas con error, última sincronización) y los botones **Editar app** y **Página de inicio**; si la app sube datos sin proceso de retorno, lo avisa. Debajo, una tarjeta con estas secciones, cada una como tabla:

* **Objetos**: los objetos offline de la app. Cada fila se despliega con sus páginas y sus vistas SQL. **Nuevo objeto** abre el asistente de objetos; su flecha ofrece **Basado en un objeto online**, que copia un objeto que la app ya tiene online. Desde esta sección están también **Esquema BBDD** y **Seguimiento**.
* **Menús**: los menús que aparecerán en el dispositivo.
* **Páginas**: las páginas de lista y vista de la app, con **Nueva página**.
* **Código y recursos**: scripts JavaScript, estilos CSS y recursos estáticos (imágenes, documentos…).
* **Sincronización**: el historial de lo que han enviado y recibido los dispositivos, con **Reintentar** para los envíos fallidos (ver [Novedades de la skin 2026](../Administration/Skin2026.md#5-app-offline-sincronizaciones-reintentar-y-corregir-lo-enviado)).

El **emulador** está siempre a la vista, al lado, para ver cómo queda la aplicación en un dispositivo.

<figure markdown="span">
  ![Pantalla de una app offline en la skin 2026](../../docs_assets/images/offline/offline-manager-2026.png)
  <figcaption>Una app offline: sus cifras, las secciones y el emulador</figcaption>
</figure>

Ya no existe la opción de enlazar un objeto existente a la app: los objetos se crean con el asistente o copiando uno online.
{: .flx-info-card }

## Skin flexy2022

![Face Recognition settings](../../docs_assets/images/offline/Environment.png "Image 1. Environment")

Este entorno se divide básicamente en 6 áreas que explicaremos a continuación.

## Áreas de trabajo

### Menús

Para crear y diseñar los menús que aparecerán en el dispositivo.

### Información adicional de la App

Desde esta sección podemos modificar los datos básicos de la App, modificar y diseñar la página de inicio e incorporar otros recursos como:

![Face Recognition settings](../../docs_assets/images/offline/buttons.PNG "Image 2. Buttons")

* Diseñar la página de inicio  
* Añadir código JavaScript  
* Añadir nuestras propias clases CSS  
* Consultar el esquema de la base de datos que se enviará a nuestro dispositivo móvil  
* Incluir algún archivo de recurso adicional como imágenes o documentos

### Objetos

Desde esta sección podemos crear o modificar nuestros objetos offline. Podemos crear nuevos o basarlos en objetos online ya existentes.

### Páginas de objeto

Diseñar páginas de lista y vista usando HTML5 y el framework Ionic para cualquiera de los objetos ya creados.

### Vistas de objeto

Ampliar la información del objeto mediante vistas de datos complejas.

### Emulador

Desde esta sección podemos emular la visualización y funcionamiento de la aplicación, y comprobar el resultado final en dispositivos iOS o Android.

![Face Recognition settings](../../docs_assets/images/offline/Environment2.png "Image 3. Environment")
