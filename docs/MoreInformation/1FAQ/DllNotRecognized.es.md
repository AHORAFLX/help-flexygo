# He generado una DLL y no la reconoce Flexygo

Al generar los parámetros de la función cuyo proceso queremos añadir al entorno de Flexygo, obtenemos el error de que no se puede cargar la DLL, no se reconoce el formato de la DLL.

## Comprueba el framework y la ubicación

A partir de la versión 10, los procesos se ejecutan en el Backend, que funciona sobre .NET 9. La DLL debe compilarse para .NET 9 (`<TargetFramework>net9.0</TargetFramework>` en el `.csproj`). Una DLL compilada para .NET Framework no se carga, aunque esté generada como `AnyCPU` o `x86`.

Copia la DLL en la carpeta del Backend. En la ruta del archivo del proceso, `~` es la carpeta del Backend (por ejemplo, `~/bin/MiLibreria.dll`); si la DLL no está en `bin`, Flexygo la busca en la raíz de esa carpeta.

## Comprueba la plataforma

Otro de los posibles motivos es que no se ha compilado para todas las CPU: está generada en x86 (32 bits), y el pool de aplicaciones de Flexygo se configura como no compatible con 32 bits.

Existe una herramienta, `sigcheck.exe`, que nos devuelve esa información.

![](../../docs_assets/images/FAQ/DllNotRecognized/1.png)

### Solución

La solución pasa por volver a compilar la DLL en el formato adecuado, es decir, `AnyCPU` en vez de `x86`:

![](../../docs_assets/images/FAQ/DllNotRecognized/2.png)
