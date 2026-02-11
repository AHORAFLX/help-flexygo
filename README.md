# Flexygo Docs

## Installing required components

First of all you'll need to install [python](https://www.python.org/downloads/) for it to work, as mkdocs is a python library.

Once you've got python installed you will need to install mkdocs material and its dependencies with this command:

```shell
py -m pip install -r requirements.txt
```

With this you've got everything needed for it to run.

## Debugging

To test changes you may use the following command, which will loadthe docs in localhost.

```shell
py -m mkdocs serve
```

## Publishing 

We have made it easier to publish with custom commands, but for them to work you'll first need mike installed, if you don't have it just use the following command:

```shell
py -m pip install mike
```

### Realising a new version

With mike installed you'll just need to run the following command, replacing the x by the new version number (always an int like 8, 9, 10 because we will only update to avoid overloading help with versions).

This command will automatically create a commit in your git gh-pages with the new version added to the docs folder. After checking the commit changes you'll need to upload so teamcity gets the new version.

```shell
npm run docs:publish -- x
```

### Updating a version

With mike installed you'll just need to run the following command, replacing the x by the new version number (always an int like 8, 9, 10 because we will only update to avoid overloading help with versions).

This command will automatically create a commit in your git gh-pages with the version selected getting the changes that has been done made like an html to the version docs folder. After checking the commit changes you'll need to upload so teamcity gets the version updated.

```shell
npm run docs:update -- x
```

## Guidelines

When developing new pages or updating old ones you need to follow some guidelines to make theme more coherent between one another.

- You should never writte to long paragraphs so the user never get overwhelmed, you could use images or block codes to divide texts and make it more readable.
- You should never use an image as a B64 you'll always save it to its correspondent docs_assets folder and make showing it with a reference to that file.
- Every title musn't be an order, so instead of writting something like "Add messages" you should writte "Adding messages".
- You should always use our [custom components](#custom-components) or  [classes](#custom-classes) instead of creating specific ones for your page, unless you think it'll  be something usefull for more pages (if you do so add them to this readme to make people get to know it).
- It's always preferable not to write a full URL when linking to an external page, and just doing something like `To know more about this visit the following [website](https://isitchristmas.com/).`.
- Always use bold letters to higlight the property names, the objects, the settings or the menus the user needs to interact with.

## Custom components

When developing help it's usefull to use reusable components, that's why we have inside the docs/javascript/components folder a bunch of them.

To insert them is as easy as adding them in the markdown file directly like in this example because markdown will interpret that as an html component.

```md
My paragraph <my-component its="attributes"></my-component> continue my paragraph.
```

### Copy

```html
<fh-copy>My text</fh-copy>
```

When clicked it will copy the text written inside of it to the users clipboard and show a copied message.

If no class is added it will apply [link styles](#link-class), but you can use whatever class you want.

### Modal

```html
<fh-modal modal_id="fhmodal_Your_Id" modal_title="Your_Title">My text</fh-modal>

...

    ```js { #fhmodal_Your_Id }
    console.log("test");
    ```
```

When clicked it will show the desired block as a modal, it's normally used to show large block codes or images.

For this component to work properly you need to set the block you want to show as a modal an ID that starts with "fhmodal_" so it get's hidden by default with our styles and only get's shown when clicked.

Also to make page code more readable you should always set modal block at the end of the page.

Normally you'll want to use it with a [button](#button) or [link](#link-class), but you can use whatever class you want.

| Attribute | Description |
| --------- | ----------- |
| modal_id | Must be the same id as the one the block's got so it gets identified by the component |
| modal_title | This will be the title displayed on top when displaying the modal |

### Popover

```html
<fh-popover mode="My_Mode" src="My_Image">My text</fh-popover>
```

It will display an image as a popover (on click) or tooltip (on hover) depending on the image

| Attribute | Description |
| --------- | ----------- |
| mode | Must be "tooltip" or "popover" depending if you want it to show on hover or popover |
| src | The URL of the image (must be saved on its docs_assets folder) |

### Navigation to flexygo

```html
<flx-navbutton>My text</flx-navbutton>
```

This is just a translation of the flx-navbutton from flexygo, that's why it starts with "flx-" instead of "fh-" so you can copy one directly from flexygo here.

When clicked it will open in a new page that flexygo page, if help comes from a flexygo it will just open it in that flexygo if it's from the docs.flexygo.com page it will open a modal to writte you own flexygo URL.

Normally you'll want to use it with a [button](#button) or [link](#link-class), but you can use whatever class you want.

### Input that propagates it's text to other elements

This is an input that when changed it will replace every elements text gotten by the class indicated in its selector attribute for its current value. It will also substitute parts of code blocks that has the selector class, but for it to replace a certain part you need to writte there fhnamepropagator.

The input value will get saved in storage so if the user reloads or comes again it persists.

This most likely will just be used for installation guide, but is documented so if it is ever needed we know how it works.

```html
<fh-namepropagator selector="my_own_class" placeholder="The_Initial_Text"></fh-namepropagator>

That will get replaced by input value → <span class="my_own_class"></span> ← That will get replaced by input value

    ```js { .my_own_class }
    That will get replaced by input value → fhnamepropagator ← That will get replaced by input value
    ```
```

## Custom classes

There are multiple classes that you can use to style directly help sections or components and make it more cohesive.

### Link

```md
My text <span class="link"></span> continue my text
```

It will just style like a link with it's flexygo text color and cursor pointer on hover.

### Button

```md
My text <span class="button"></span> continue my text
```

It will just style like a link with it's flexygo background color and cursor pointer on hover with round borders.

### Warning cards

```md
My text
{: .flx-warning-card }
```

It will make your block have a yellow background with round borders and an info icon on the top left corner.

### Info cards

```md
My text
{: .flx-info-card }
```

It will make your block have a blue background with round borders.

### Title with images

```md
# Paco { .fh-title-with-image }

![Ahora ERP](/docs_assets/images/AhoraERP/ahora.svg){ .fh-image-of-title }
```

It will set at the right of the title the iamge you desire, normally used to show the logo of something.

### Youtube videos

```html
<div class="video-wrapper">  
    <iframe src="Your_URL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>
```

This is a div class that must wrapp the iframes of youtube videos.

This class needs to be used as a html block, that it will automatically be interpreted by markdown, because markdown does not contain iframes by itself.

### Dark and light images

```md
![](/URL/DE/LA/IMAGEN.PNG#only-light "Tu_Descrip"){data-gallery="light"}
![](/URL/DE/LA/IMAGEN.PNG#only-dark "Tu_Descrip"){data-gallery="dark"}
```

To use different images for light and dark mode you need to add to the URL #only-light (for light mode) and #only-dark (for dark mode). But you'll also need to add the attrbute data-gallery with it's mode like {data-gallery="dark"} to avoid them from appearing in the caroussel of pictures when clicked.

### Code block with no language header

```md
    ```js { .no-language }
    mycode();
    ```
```

If you need to hide the header that shows the language in which a code block is written you'll need to use the class no-language like this. But you need to now that to mantain coherence you should aoways avoid using this class, unless it's used in places like offline help autogenerated help, where the user knows that it's reading JS scripts.