# Cómo solucionar el error al actualizar la aplicación "Directorio central dañado"

El problema surge por archivos corruptos en NuGet: una descarga incompleta hace que el fichero se quede corrupto, igual que cuando descargas un zip y no puedes descomprimirlo.

![](../../docs_assets/images/FAQ/CorruptedCentralDirectory/1.png)

## Solución

Elimina los archivos de las carpetas `downloads` y `packages` del servicio `FlexygoService` en el servidor, y a continuación reinicia el proceso de actualización.
