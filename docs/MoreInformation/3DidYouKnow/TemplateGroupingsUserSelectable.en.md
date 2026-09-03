# Did you know you can create template groupings that users can select and reorder?

When creating template groupings in a list, you can enable an option called **"User can configure groups"** directly in the template's configuration.

![](../../docs_assets/images/DidYouKnow/TemplateGroupingsUserSelectable/1.png)

## Technical implementation

When this option is enabled, a specific line must be added to the template's header. The proposed code uses an interactive button:

```html
<button class="btn {{groupButtonActive(this,'IsCollection')}}"
onclick="$(this).closest('flx-list')[0].toggleGroup('IsCollection');">
Object/Collection</button>
```

The `IsCollection` parameter must exactly match the group field you want the user to be able to toggle.

![](../../docs_assets/images/DidYouKnow/TemplateGroupingsUserSelectable/2.png)

## Expected result

After adding one line of code per grouping you want to enable, users will be able to choose which groupings stay active at any given time, providing greater flexibility and interface customization.

![](../../docs_assets/images/DidYouKnow/TemplateGroupingsUserSelectable/3.png)
