# Diferencias entre emulador y app

## Obteniendo datos SQL en JS

Al obtener datos SQL de funciones js, es un error común intentar usar directamente la propiedad de filas del objeto devuelto, pero de esta manera solo funcionará en el emulador. Para obtener datos de filas de funciones js, tenemos los **flexygo.sql.getRow** y **flexygo.sql.getRows** métodos, que serán los encargados de la recuperación de esta información.

**flexygo.sql.getRow** es normalmente el método preferido, a menos que necesite usar la mayoría de los resultados sql, en cuyo caso sería mejor usar el **flexygo.sql.getRows**.

![Object View](/assets/images/offline/EmulatorPhoneSQL.png "Emulator/Phone SQL differences")

## Image gallery methods

La galería de imágenes en el emulador solo mostrará el botón getPicture, que cargará una imagen predeterminada. Mientras que en el teléfono aparecerán tres botones: el **getPicture** (toma una foto con la cámara), el **getGalleryPicture** (obtiene una imagen directamente de la galería del teléfono) y el **getPicture** con múltiples configuraciones activas (toma fotos con la cámara hasta que se cancele la cámara).

## TrSeguimientoacking

El seguimiento solo se llevará a cabo al utilizar un dispositivo móvil.