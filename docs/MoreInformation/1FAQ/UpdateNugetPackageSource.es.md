# Aviso: nuevas URLs para la actualización de las aplicaciones Flexygo y actualización de paquete Flexygo en Desarrollos

Por motivos de un nuevo despliegue/migración del servidor de paquetes NuGet de Flexygo, se recomienda lo siguiente:

## 1. Actualizar el setting de actualización de los productos By Flexygo

En el setting `AutoUpdateURL` habrá que especificar la nueva dirección `https://nuget.ahorabh.com/v3/index.json` para aquellas aplicaciones que todavía tengan la dirección `nuget.flexygo.com/nuget`.

!!! warning "Importante"
    Es muy importante que la nueva URL esté bien escrita, sin espacios ni caracteres adicionales; en caso contrario dará error al intentar realizar la conexión y obtener las versiones.

![](../../docs_assets/images/FAQ/UpdateNugetUrl/1.png)

![](../../docs_assets/images/FAQ/UpdateNugetUrl/2.png)

## 2. Actualización en Visual Studio

Si está desarrollando aplicaciones/productos Flexygo a través de Visual Studio, a la hora de actualizar la versión NuGet de Flexygo también deberá modificar el **origen del paquete**, especificando la URL `https://nuget.ahorabh.com/v3/index.json`:

![](../../docs_assets/images/FAQ/UpdateNugetUrl/3.png)
