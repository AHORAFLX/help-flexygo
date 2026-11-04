# Version 10.1

The Updater prepares the next version overnight and records results; development tools are improved, with Lowdy rotation and menu node management.

## New features

### Development Tools

- **The Lowdy plugin lets you rotate the character to any angle.** Developers using the plugin can show it from the side when it opens. They can also change its orientation using the rotation function.
- **In skin 2026, you can manage menu nodes by right-clicking.** The context menu lets you edit, add, configure the visibility of, or delete nodes. You can add them inside or below another node, and open the full menu manager from there. The welcome tour explains how to use these options.

### Updater

- **The overnight preparation gets the next version ready and records the result, including any errors or reasons why it did not run.** It runs at 1:00 and uses the project version, not the Updater version. It updates the Updater itself first; it does not run if another update is in progress or outside IIS. Check the scheduled tasks log to see which version it prepared or why it did not run.

## Improvements

### Configuration

- **The 2022 skin displays the configuration and health panels with a clear design adapted to its colors.** Both panels appear in the control panel menu. Their flat, clear appearance follows the theme colors.

### Development Tools

- **The tour editor keeps markers next to the selected item and makes it easier to identify modules and reorder steps.** Each module label shows its identifier, as when it is placed. When you move a step, a line indicates where it will be inserted.
- **You can place modules by right-clicking or dragging them, and change the layout from a clearer toolbar.** When you drag a module, a line shows where it will be placed. Free layout works as a toggle, and when you turn it off, the previous layout is restored.

### Processes

- **You can leave generic process buttons without an icon.** This way, the play icon is not displayed on these buttons.

### Skins

- **Designers enter Development Mode when they log in, without needing to open it from the menu.** The Development Mode option no longer appears in the skin2026 menu. The mode is automatically enabled for designers in every session.

### Updater

- **The description of the Updater preload is available in Catalan, German, Spanish, French, Italian, and Portuguese.** This allows people who consult the process to understand its purpose in any of those languages.

## Fixes

### Interface

- **Images for five page designs are displayed again in Linux and Docker installations.** The corrected paths prevent images from failing on systems that distinguish between uppercase and lowercase letters. Existing databases receive the updated path in their next update.

### Notifications

- **Unread notifications are displayed again with a white background, blue bar, and blue text in the 2022 skin.** Unread notifications in the bell have regained their expected visual style.

### Reports

- **You can generate Crystal Reports reports on databases with Windows authentication.** Authentication also applies to subreports. If generation fails, the message includes the reason indicated by Crystal Reports.
