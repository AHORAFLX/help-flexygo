# Page Hierarchy

**flexygo** works with a single page document (SPA). Each page can have different layouts with different areas to place the different modules on.

## Layouts

![Layouts](/docs_assets/images/Information/Layouts.png "Layouts")

Click <flx-navbutton class="link" type="openpage" pagetypeid="list" objectname="SysLayouts">here</flx-navbutton> to go to layouts list.

Watch the following video on our YouTube channel about Layouts.

<div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/QgvGRPMTKi0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>

## Modules

Each module is a web component that can have different types of containers. The module also can have other web components inside. Module's properties allow us to select the toolbar we want or different page types when required. We can see what a page would look like in the following example:

<div id="module-table-node1">Page
    <div id="module-table-node2">Layout
        <div id="module-table-node3">
            <div id="module-table-node6">Container</div>
            <div id="module-table-node7">Module
                <div id="module-table-node8">Toolbar
                    <div id="module-table-node9">Pager</div>
                </div>
            </div>
        </div>
        <div id="module-table-node5"></div>
        <div id="module-table-node4"></div>
    </div>
</div>

## Module Containers

There are several pre built module containers that can be used with your modules.

*   **Default** : Default option with complete header with Object buttons and maximize and refresh options.
*   **Clean**: Nice clean option complete with title, Object buttons and maximize and refresh options.
*   **No Header**: Option with no header but still mantains Object buttons and maximize and refresh options.
*   **Empty**: Option with no header and no background but still mantains Object buttons and maximize and refresh options.
*   **None**: Option with no header and no buttons.

Default, Clean and No Header can be combined with the **roundBorders** CSS Class to obtain a rounded effect. This class can be added in the module Class field on the module configuration form.

### Default

![](/docs_assets/images/PageHierarchy/Default.png)

### Default with roundBorders CSS Class

![](/docs_assets/images/PageHierarchy/Default-round.png)

### Clean

![](/docs_assets/images/PageHierarchy/Clean.png)

### Clean with roundBorders CSS Class

![](/docs_assets/images/PageHierarchy/Clean-round.png)

### No Header

![](/docs_assets/images/PageHierarchy/No-header.png)

### No Header with roundBorders CSS Class

![](/docs_assets/images/PageHierarchy/No-header-round.png)

### Empty

![](/docs_assets/images/PageHierarchy/Empty.png)

### None

![](/docs_assets/images/PageHierarchy/None.png)