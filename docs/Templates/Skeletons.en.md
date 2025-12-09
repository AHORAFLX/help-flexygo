# Skeletons

When loading a module is always good to show the user that something is happening, so that's where skeletons take place.

Skeletons are basic html structures that will show while the module is loading, instead of leaving blank modules. They can be added to every module, where an standard one can be used or a new one can be created.

The most common module types (flx-list, flx-edit, flx-view, flx-moduletab and flx-buttontab) have got an standard skeleton set, but it can be overwritten by setting to your desired module the skeleton you want to show.

## How to create your own skeleton

Adding a custom skeleton is as easy as navigating to the skeletons page through the admin work, and through the list adding a new one.

![Menu](/assets/images/Skeletons/SkeletonNavigation.png "Image 1. New Skeleton")

Skeleton may divide in three parts (skeletonHeader, skeletonBody, skeletonFooter) this is do to the necesity of showing or not certain elements depending if it's the module first load or if it's a refresh. For flexygo to know which part it is, it will be needed to encapsulate skeleton with divs containing the classes (skeletonHeader, skeletonBody, skeletonFooter), as in the following example.

_Example:_

```html
<div class="skeletonHeader">
    <div> My Skeleton Header </div>
</div>
    
<div class="skeletonBody">
    <div> My Skeleton Body </div>
</div>
    
<div class="skeletonFooter">
    <div> My Skeleton Footer </div>
</div>
```

Once stablished the skeleton html you could add an image to the skeleton so when searching through the skeletons list is easier to find, but is not compulsory.

## Using Flexygo skeleton effect

Flexygo skeletons use an animation to show the user that the app is still running properly. Using this animation is as easy as using the classes skeletonElementContainer and skeletonElement as shown in this example.

_Example:_

```html
<div class="skeletonElementContainer">
    <div class="skeletonElement"></div>
</div>
```

_Result:_

<div class="flxSkeleton">
    <div class="skeletonElementContainer">
        <div class="skeletonElement"></div>
    </div>
</div>