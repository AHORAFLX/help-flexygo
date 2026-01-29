# Document Manager & Image Manager

**Flexygo** allows us to add documents and images to any existing objects. We could add documents (pdf, doc, docx, txt, odt, etc.) and images (jpg, png, gif, bmp, etc.) to our articles, clients, buildings etc. By using the document manager object we can edit and display any document related to an object.

Watch the following video on our YouTube channel about Document and Image Manager.

<div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/qNQOoO1TcyA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>

## Document Manager

### Configuration

First of all, you need to enable document manager before staring to use it by following some simple steps. From any object page (view or edit) go to the right-hand side toolbox and click on document settings.

![](../docs_assets/images/ModulesConf/DocumentBar.png "Image 1. Document Bar")

Fill out the following form.

*   **Type**: Select flexygo standard
*   **Object Name**: Object the documents will be linking to
*   **Object Primary Key**: The object primary key
*   **Path**: Root path for documents
*   **Default Category**: Default category tabs for the documents, the different categories can be found in master tables "Document categories"
*   **Category Filter**: From the list of categories select which ones to use with that object
*   **Permisions**: Select which options should be available for documents on the current object

![](../docs_assets/images/ModulesConf/DocSettings.png "Image 2. Document Settings")

Now from the object relations process menu you can access to any document related to your object.

### Viewing documents

There are different options to show document manager. We will explain some of them.

### Adding a link to documents

You can use easy info objects to obtain something like this:

![](../docs_assets/images/ModulesConf/DocLinks.png "Image 3. Document Links")

Add an onclick event to open generic document manager page with the document manager module.

```js
flexygo.nav.openPage('list','Documents_Object','Documents_Objects.ObjectId = \'{{MyobjectId}}\' And Documents_Objects.ObjectName = \'MyObjectName\'','\'ObjectId\':{{MyobjectId}},\'ObjectName\':\'MyObjectName\'','popup1024x678',false,$(this))"
```

### Adding a document manager module

With this module you can upload documents to the selected object. To add this module you must fill in the following fields of the configuration form:

![](../docs_assets/images/ModulesConf/DocManager.png "Image 4. Document Manager")

![](../docs_assets/images/ModulesConf/DocManagerConf.png "Image 5. Document Manager Configuration")

For the correct configuration of this module it is necessary to fill in the following fields:

*   **Id:** Identify the module
*   **Type:** Module type, in this case Image Manager
*   **Description:** brief description of the module
*   **Title:** Title that appears on the module
*   **Classification:** Since it is not a default module it is always Project Module
*   **Container:** Module container type
*   **Object Name:** They have to select the object that we want to relational with the manager.

### Adding a Document Viewer module

This module has the same features tha? the document manager, but there is no option to upload documents and already uploaded documents can't be modified or deleted.

![](../docs_assets/images/ModulesConf/DocManagerViewer.png "Image 6. Document Manager Viewer")

## All documents in the system

You also have the access to see all documents in your flexygo project. Go to the Admin Work Area > Reporting > Documemt Viewer.

![](../docs_assets/images/ModulesConf/DocumentManager.png "Image 7. Document Manager")

## Document Classification Manager

This module enables you to access to every category of your documents. When you click on one category it will open a document manager page, with only the documents of the category selected.

![](../docs_assets/images/ModulesConf/DocumentClassificationManager.png "Image 8. Document Classification Manage")

### Adding a link to open the Classification Manager

Onclik event to open generic document classsification manager.

```js
flexygo.nav.openPageName('syspage-documents-classification','sysDocumentsCategories','','{\'ObjectId\':\'{{MyobjectId}}\',\'ObjectName\':\'{{MyObjectName}}\'}','popup1024x678',false,$(this))
```

FlexyGo navbutton to open generic document classsification manager.

```html
<flx-navbutton type="openpagename" pagename="syspage-documents-classification" targetid="popup1024x678" defaults="{'ObjectId':'{{MyobjectId}}', 'ObjectName':'{{MyObjectName}}'}" excludehist="false"></flx-navbutton>
```

## Image Manager

### Configuration

From any object form (view or edit) go to the right-hand side toolbox and click on image manager.

![](../docs_assets/images/ModulesConf/ImageBar.png "Image 9. Image Bar")

Fill out the following form and you are ready to go.

![](../docs_assets/images/ModulesConf/ImageSettings.png "Image 10. Image Settings")

Now from the object relations process menu you can access any image related to your object.

*   **Type**: Select flexygo Standard
*   **Object Name**: Object you will be linking the images to
*   **Object Primary Key**: The object primary key
*   **Path**:Root path for images

### Viewing images

There are basicaly three options:

### Adding a link to the images

You can use easy info objects to obtain something like this:

![](../docs_assets/images/ModulesConf/DocLinks.png "Image 11. Image Links")

Basically add an onclik event to open generic image manager page with the image manager module.

```js
flexygo.nav.openPage('list','sysObjectImages','Objects_Images.ObjectId = \'{{MyobjectId}}\' And Objects_Images.ObjectName = \'MyObjectName\'','{\'ObjectId\':{{MyobjectId}},\'ObjectName\':\'MyObjectName\'}','popup1024x678',false,$(this)");
```

### Adding an image manager module

With this module you can upload images to the selected object.

![](../docs_assets/images/ModulesConf/imageManager.png "Image 12. Image Manager")

To add this module you must fill in the following fields on the configuration form:

![](../docs_assets/images/ModulesConf/imageManagerConf.png "Image 13. Image Manager Configuration")

For the correct configuration of this module it is necessary to fill in the following fields:

*   **Id:** Identify the module
*   **Type:** Module type, in this case Image Manager
*   **Description:** brief description of the module
*   **Title:** Title that appears on the module
*   **Classification:** Since it is not a default module it is always Project Module
*   **Container:** Module container type
*   **Object Name:** They have to select the object that we want to relational with the manager.

### Adding an Image Viewer module

The actual Image manager module is also used as a viewer. it has its own presentation mode:

![](../docs_assets/images/ModulesConf/ImageViewer.png "Image 14. Image Manager Configuration")

## Image Classification Manager

This module enables you to access to every category of your images. When you click on one category it will open a image manager page, with only the images of the category selected.

![](../docs_assets/images/ModulesConf/ImageClassificationManager.png "Image 15. Image Classification Manage")

### Adding a link to the Image Classification Manager

Onclik event to open generic document classsification manager.

```js
flexygo.nav.openPageName('syspage-images-classification','sysObjectImagesClassifications','','{\'ObjectId\':\'{{MyobjectId}}\',\'ObjectName\':\'{{MyObjectName}}\'}','popup1024x678',false,$(this))
```

FlexyGo navbutton to open generic document classsification manager.
```html
<flx-navbutton type="openpagename" pagename="syspage-images-classification" targetid="popup1024x678" defaults="{'ObjectId':'{{MyobjectId}}', 'ObjectName':'{{MyObjectName}}'}" excludehist="false"></flx-navbutton>
```