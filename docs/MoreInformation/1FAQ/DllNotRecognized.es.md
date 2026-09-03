# He generado una DLL y no la reconoce Flexygo

Al generar los parámetros de la función cuyo proceso queremos añadir al entorno de Flexygo, obtenemos el error de que no se puede cargar la DLL, no se reconoce el formato de la DLL.

Uno de los posibles motivos es que no se ha compilado para todas las CPU: está generada en x86 (32 bits), y el pool de aplicaciones de Flexygo se configura como no compatible con 32 bits.

Existe una herramienta, `sigcheck.exe`, que nos devuelve esa información.

![](../../docs_assets/images/FAQ/DllNotRecognized/1.png)

## Solución

La solución pasa por volver a compilar la DLL en el formato adecuado, es decir, `AnyCPU` en vez de `x86`:

![](../../docs_assets/images/FAQ/DllNotRecognized/2.png)
