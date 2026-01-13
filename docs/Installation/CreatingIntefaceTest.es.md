# Agregar un test de interfaz

## Prerrequesitos
 Para poder usar playwright es necesario tener instalado Node.JS, Visual Studio 2022 y publicada la web a testear en una url, para este ejemplo usaremos: **http://localhost/Sample\_Project**
{ .flx-warning-card }

## 1. Definir el nombre del producto

Pon aquí el nombre de producto, para que así los nombres te aparezcan actualizados directamente y tan solo tengas que copiarlos y pegarlos:

<fh-namepropagator selector="propagated-projectname" placeholder="AhoraFlexy"></fh-namepropagator>

## 2. Agregar proyecto

Agregamos un nuevo proyecto <fh-copy><span class="propagated-projectname"></span>InterfaceTest</fh-copy>

![](/docs_assets/images/Installation/CreatingIntefaceTest/2.png)

## 3. Abrir grabador de test

Abrimos una ventana de powershell haciendo click derecho sobre nuestro proyecto > **Abrir en terminal**  

Ejecutamos el siguiente comando para abrir el grabador de test.  
_Si es la primera vez que lo ejecutamos, nos dará un error de permisos y deberemos ejecutar previamente el comando <fh-copy>Set-ExecutionPolicy Unrestricted</fh-copy>_

```powershell
./bin/Debug/net6.0/playwright.ps1 codegen http://localhost/Sample\_Project
```

![](/docs_assets/images/Installation/CreatingIntefaceTest/3.png)

## 4. Seguir el asistente 

Se nos abrirá un asistente que generará el código automáticamente según vamos navegando por nuestra aplicación:

![](/docs_assets/images/Installation/CreatingIntefaceTest/4.png)

## 5. Pegar código autogenerado

Copiaremos y pegaremos el código autogenerado que nos interese a la clase en el espacio asignado a tal fin.

![](/docs_assets/images/Installation/CreatingIntefaceTest/5.png)

## 6. Configurar parámetros

Configuraremos los parametros por defecto en el fichero **appsettings.json** o los especificos de nuestro pc en **appsettings.local.json** .

![](/docs_assets/images/Installation/CreatingIntefaceTest/6.png)

## 7. Ejecutar pruebas

Abrimos el explorador de pruebas y ejecutamos las pruebas para comprobar que todo está OK.

![](/docs_assets/images/Installation/CreatingIntefaceTest/7.png)

## 8. Abrir yraza

Podemos abrir la traza del test usando el siguiente comando. 

```powershell
./bin/Debug/net6.0/playwright.ps1 show-trace ./Sample\_Project\_InterfaceTest/bin/Debug/net6.0/tracing/SaveObject.zip
```

![](/docs_assets/images/Installation/CreatingIntefaceTest/8.png)