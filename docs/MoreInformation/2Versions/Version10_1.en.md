# Version 10.1

Includes improvements for creating tours and organizing modules, managing menu nodes in skin 2026, and automatically enabling Development Mode for designers; Lowdy lets you rotate the character.

## New features

### Development Tools

- **The Lowdy plugin lets you rotate the character to any angle.** Developers using the plugin can show it from the side when it opens. They can also change its orientation using the rotation function.
- **In skin 2026, you can manage menu nodes by right-clicking.** The context menu lets you edit, add, configure the visibility of, or delete nodes. You can add them inside or below another node, and open the full menu manager from there. The welcome tour explains how to use these options.

## Improvements

### Development Tools

- **The tour editor keeps markers next to the selected item and makes it easier to identify modules and reorder steps.** Each module label shows its identifier, as when it is placed. When you move a step, a line indicates where it will be inserted.
- **You can place modules by right-clicking or dragging them, and change the layout from a clearer toolbar.** When you drag a module, a line shows where it will be placed. Free layout works as a toggle, and when you turn it off, the previous layout is restored.

### Skins

- **Designers enter Development Mode when they log in, without needing to open it from the menu.** The Development Mode option no longer appears in the skin2026 menu. The mode is automatically enabled for designers in every session.

## Fixes

### Installation

- **The installation warns if the SQL Server version is not compatible.** The warning shows the detected version and lets you check it again. In unattended installation, it indicates which version prevents you from continuing.
- **The installation does not accept database connections if the server is inaccessible.** The connection step indicates that the server is inaccessible instead of treating the connection as valid. The application configuration shows the actual reason for the failure.
