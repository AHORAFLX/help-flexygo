# Instalar .NET 10 antes de actualizar a la 10.1 <span class="fh-version-tag" title="Disponible desde la versión 10.1">10.1+</span>

Desde la versión **10.1**, Flexygo funciona sobre **.NET 10**. La 10.0 funcionaba sobre .NET 9. Antes de actualizar una aplicación de la 10.0 a la 10.1 o posterior, hay que instalar **ASP.NET Core 10** en cada servidor donde estén el frontend o el backend. Si no está, la versión nueva no arranca: IIS responde con el error **HTTP 500.31** (*Failed to load ASP.NET Core runtime*).

## Qué hace el actualizador

El asistente de **Gestión de versiones** lo comprueba antes de empezar, en sus requisitos (**Runtime de .NET**):

- Si la versión elegida necesita .NET 10 y el servidor no lo tiene, sale como **error** y no deja continuar.
- Si no puede saber qué necesita la versión elegida, sale como **aviso**: puedes continuar, porque la versión puede no necesitarlo (por ejemplo, una corrección de la 10.0).
- Al lanzar la actualización lo vuelve a comprobar: si falta, se detiene **antes de cambiar nada**, y la aplicación sigue en su versión actual.

El actualizador no instala .NET por su cuenta: instalarlo reinicia IIS y afecta a todas las aplicaciones del servidor, así que lo decide quien administra el servidor.

## Pasos en IIS

1. **Elige el momento.** Al instalar se reinicia IIS, y todas las aplicaciones del servidor dejan de responder durante unos segundos. La aplicación sigue en su versión actual, sobre .NET 9: no hace falta tenerla parada.
2. **Descarga el Hosting Bundle.** En [dotnet.microsoft.com/download/dotnet/10.0](https://dotnet.microsoft.com/download/dotnet/10.0), en la columna **ASP.NET Core Runtime 10.0**, apartado **Windows**, elige **Hosting Bundle**. Si el servidor no tiene salida a internet, descárgalo en otro equipo y cópialo.
3. **Instálalo como administrador** en cada servidor con frontend o backend. Si están en servidores distintos, en los dos.
4. **Reinicia IIS** si el instalador no lo ha hecho. En una consola de administrador:

    ```bat
    net stop was /y
    net start w3svc
    ```

5. **Comprueba que está instalado.** En una consola:

    ```bat
    dotnet --list-runtimes
    ```

    Tiene que aparecer una línea `Microsoft.AspNetCore.App 10.0.x`.

6. **Vuelve a Gestión de versiones** y lanza la actualización. El requisito **Runtime de .NET** ya sale correcto.

!!! warning "No desinstales .NET 9 todavía"
    La versión actual lo necesita hasta que actualices, y volver desde el asistente a una versión 10.0 también. Cuando la aplicación esté en la 10.1 y ya no vayas a volver atrás, puedes quitarlo si ninguna otra aplicación del servidor lo usa.

## Servicio independiente (Kestrel)

Instala el **ASP.NET Core Runtime 10.0** (en Windows sirve también el Hosting Bundle) y reinicia el servicio de cada aplicación. En Linux, instala el paquete `aspnetcore-runtime-10.0` de tu distribución: ver [Instalar .NET en Linux](https://learn.microsoft.com/dotnet/core/install/linux). Ver también [Despliegue con Kestrel](../5Kestrel/index.md).

## Docker

No hay que instalar nada: las imágenes de la 10.1 ya llevan .NET 10. Actualiza como siempre: ver la [Guía de actualización en contenedores](DockerUpdate.md).

## Si ya actualizaste y ves el error 500.31

Instala el Hosting Bundle como en los pasos anteriores y reinicia IIS. No hace falta reinstalar ni repetir la actualización.
