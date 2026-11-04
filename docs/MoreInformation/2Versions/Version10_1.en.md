# Version 10.1

Flexygo 10.1 makes updates easier, including in Docker, and improves some development and navigation tasks. It also adds configuration adjustments and fixes issues with reports, integrations and the interface.

## Other new features

### Updates

- **Nightly preparation:** prepares the next project version in the background and records the result of each task. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Updater:** can update itself and complete delegated preparations and updates without the general timeout limit. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Languages:** the description of the Updater’s preload process is available in more languages. [More information](../../1Deployment/3Updater/UpdateFlow.md)
- **Docker:** updates use a five-step wizard and a final summary; you can also review pending custom differences. [More information](../../1Deployment/3Updater/DockerUpdate.md)

### Interface and navigation

- **Menu in skin 2026:** manage nodes with the right mouse button. [More information](../../Help/Administration/Skin2026.md)
- **Search in skin 2026:** use / to search the visible list and Ctrl+K to access favourites, recent pages and shortcuts. [More information](../../Help/Administration/Skin2026.md)

### Development tools

- **Tour editor:** keeps markers beside the selected item and makes it easier to identify modules and reorder steps.
- **Module layout:** place modules with the right mouse button or by dragging them, and change the layout from a clearer toolbar.
- **Lowdy plugin:** lets you rotate the character to any angle.
- **Designers:** enter development mode when they sign in, without having to open it from the menu.

### Configuration and appearance

- **Database connections:** the “encrypt” attribute is explained when configuring them. [More information](../../1Deployment/2ConfigWizard/AppSettingsReference.md)
- **Panels in skin 2022:** the configuration and health panels adapt their design to the skin’s colours. [More information](../../Help/Administration/HealthPanel.md)

### Processes

- **Generic buttons:** process buttons can be left without an icon.

## Fixes

??? note "See the fixes in this version"

    - **Reports:** Crystal Reports can once again be generated from databases that use Windows authentication.
    - **MCP security:** the MCP application now includes an SDK version with a security fix. [More information](../../2ProductDevelopment/MCP/1Prerequisites.md)
    - **Page layouts:** images for five layouts are displayed again in Linux and Docker installations.
    - **Notifications:** in skin 2022, unread notifications again appear with a white background, blue bar and blue text.
