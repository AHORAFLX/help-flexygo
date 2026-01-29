# Document Manager And Image Manager

**Flexygo** nos permite añadir documentos e imágenes a cualquier objeto existente. Podemos añadir documentos (pdf, doc, docx, txt, odt, etc.) e imágenes (jpg, png, gif, bmp, etc.) a nuestros artículos, clientes, edificios, etc. Usando el objeto document manager podemos editar y mostrar cualquier documento relacionado con un objeto.

Mira el siguiente vídeo en nuestro canal de YouTube sobre Document y Image Manager.

<div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/qNQOoO1TcyA" title="YouTube video player" frameborder="0" allowfullscreen=""></iframe>
</div>

## Document Manager

### Configuración

Primero, debes habilitar el document manager antes de empezar a usarlo siguiendo unos pasos muy simples. Desde cualquier página del objeto (vista o edición), ve a la barra lateral derecha y haz clic en document settings.

![](../docs_assets/images/ModulesConf/DocumentBar.png "Image 1. Document Bar")

Rellena el siguiente formulario:

* **Type**: Selecciona flexygo standard  
* **Object Name**: Objeto al que se vincularán los documentos  
* **Object Primary Key**: La clave primaria del objeto  
* **Path**: Ruta raíz para documentos  
* **Default Category**: Categoría por defecto para los documentos; las distintas categorías pueden encontrarse en las tablas maestras "Document categories"  
* **Category Filter**: De la lista de categorías selecciona cuáles utilizar con ese objeto  
* **Permisions**: Selecciona qué opciones deben estar disponibles para los documentos de ese objeto  

![](../docs_assets/images/ModulesConf/DocSettings.png "Image 2. Document Settings")

Ahora desde el menú de procesos de relaciones del objeto puedes acceder a cualquier documento relacionado con tu objeto.

### Visualización de documentos

Hay diferentes opciones para mostrar el document manager. Explicamos algunas de ellas.

### Añadir un enlace a los documentos

Puedes usar easy info objects para obtener algo como esto:

![](../docs_assets/images/ModulesConf/DocLinks.png "Image 3. Document Links")

Añade un evento onclick para abrir la página genérica del document manager con el módulo correspondiente.

```js
flexygo.nav.openPage('list','Documents_Object','Documents_Objects.ObjectId = \'{{MyobjectId}}\' And Documents_Objects.ObjectName = \'MyObjectName\'','\'ObjectId\':{{MyobjectId}},\'ObjectName\':\'MyObjectName\'','popup1024x678',false,$(this))"
```

### Añadir un módulo de document manager

Con este módulo puedes subir documentos al objeto seleccionado. Para añadir este módulo debes rellenar los siguientes campos del formulario de configuración:

![](../docs_assets/images/ModulesConf/DocManager.png "Image 4. Document Manager")

![](../docs_assets/images/ModulesConf/DocManagerConf.png "Image 5. Document Manager Configuration")

Para la correcta configuración de este módulo es necesario completar los siguientes campos:

* **Id:** Identifica el módulo
* **Type:** Tipo de módulo, en este caso Document Manager
* **Description:** Breve descripción del módulo
* **Title:** Título que aparece en el módulo
* **Classification:** Como no es un módulo por defecto, siempre es Project Module
* **Container:** Tipo de contenedor del módulo
* **Object Name:** Se debe seleccionar el objeto que se desea relacionar con el manager

### Añadir un módulo Document Viewer

Este módulo tiene las mismas funcionalidades que el document manager, pero no permite subir documentos y los documentos ya subidos no pueden modificarse ni eliminarse.

![](../docs_assets/images/ModulesConf/DocManagerViewer.png "Image 6. Document Manager Viewer")

## Todos los documentos del sistema

También tienes acceso a ver todos los documentos de tu proyecto flexygo. Ve a Admin Work Area > Reporting > Document Viewer.

![](../docs_assets/images/ModulesConf/DocumentManager.png "Image 7. Document Manager")

## Document Classification Manager

Este módulo te permite acceder a todas las categorías de tus documentos. Al hacer clic en una categoría, se abrirá una página del document manager con solo los documentos de la categoría seleccionada.

![](../docs_assets/images/ModulesConf/DocumentClassificationManager.png "Image 8. Document Classification Manager")

### Añadir un enlace para abrir el Classification Manager

Evento onclick para abrir el document classification manager genérico.

```js
flexygo.nav.openPageName('syspage-documents-classification','sysDocumentsCategories','','{\'ObjectId\':\'{{MyobjectId}}\',\'ObjectName\':\'{{MyObjectName}}\'}','popup1024x678',false,$(this))
```

Flx-navbutton para abrir el document classification manager genérico:

```html
<flx-navbutton type="openpagename" pagename="syspage-documents-classification" targetid="popup1024x678" defaults="{'ObjectId':'{{MyobjectId}}', 'ObjectName':'{{MyObjectName}}'}" excludehist="false"></flx-navbutton>
```

## Image Manager

### Configuración

Desde cualquier formulario del objeto (vista o edición), ve a la barra lateral derecha y haz clic en image manager.

![](../docs_assets/images/ModulesConf/ImageBar.png "Image 9. Image Bar")

Rellena el siguiente formulario y estará listo para usar.

![](../docs_assets/images/ModulesConf/ImageSettings.png "Image 10. Image Settings")

Ahora desde el menú de procesos del objeto puedes acceder a cualquier imagen relacionada con él.

* **Type**: Selecciona flexygo Standard
* **Object Name**: Objeto al que vincularás las imágenes
* **Object Primary Key**: La clave primaria del objeto
* **Path**: Ruta raíz para las imágenes

### Visualización de imágenes

Básicamente hay tres opciones:

### Añadir un enlace a las imágenes

Puedes usar easy info objects para obtener algo como esto:

![](../docs_assets/images/ModulesConf/DocLinks.png "Image 11. Image Links")

Básicamente añade un evento onclick para abrir la página genérica del image manager con el módulo correspondiente.

```js
flexygo.nav.openPage('list','sysObjectImages','Objects_Images.ObjectId = \'{{MyobjectId}}\' And Objects_Images.ObjectName = \'MyObjectName\'','{\'ObjectId\':{{MyobjectId}},\'ObjectName\':\'MyObjectName\'}','popup1024x678',false,$(this)");
```

### Añadir un módulo de image manager

Con este módulo puedes subir imágenes al objeto seleccionado.

![](../docs_assets/images/ModulesConf/imageManager.png "Image 12. Image Manager")

Para añadir este módulo debes rellenar los siguientes campos del formulario de configuración:

![](../docs_assets/images/ModulesConf/imageManagerConf.png "Image 13. Image Manager Configuration")

Para la correcta configuración de este módulo es necesario completar los siguientes campos:

* **Id:** Identifica el módulo
* **Type:** Tipo de módulo, en este caso Image Manager
* **Description:** Breve descripción del módulo
* **Title:** Título que aparece en el módulo
* **Classification:** Como no es un módulo por defecto, siempre es Project Module
* **Container:** Tipo de contenedor del módulo
* **Object Name:** Se debe seleccionar el objeto que se desea relacionar con el manager

### Añadir un módulo Image Viewer

El módulo de Image Manager también actúa como visor y tiene su propio modo de presentación:

![](../docs_assets/images/ModulesConf/ImageViewer.png "Image 14. Image Manager Configuration")

## Image Classification Manager

Este módulo te permite acceder a todas las categorías de tus imágenes. Al hacer clic en una categoría se abrirá una página del image manager con solo las imágenes de esa categoría.

![](../docs_assets/images/ModulesConf/ImageClassificationManager.png "Image 15. Image Classification Manager")

### Añadir un enlace al Image Classification Manager

Evento onclick para abrir el image classification manager genérico:

```js
flexygo.nav.openPageName('syspage-images-classification','sysObjectImagesClassifications','','{\'ObjectId\':\'{{MyobjectId}}\',\'ObjectName\':\'{{MyObjectName}}\'}','popup1024x678',false,$(this))
```

Flx-navbutton para abrir el image classification manager genérico:

```html
<flx-navbutton type="openpagename" pagename="syspage-images-classification" targetid="popup1024x678" defaults="{'ObjectId':'{{MyobjectId}}', 'ObjectName':'{{MyObjectName}}'}" excludehist="false"></flx-navbutton>
```