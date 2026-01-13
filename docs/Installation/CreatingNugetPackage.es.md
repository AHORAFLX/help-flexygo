# Crear paquete NuGet

Para crear un paquete NuGet en flexygo tan solo debes seguir los siguientes pasos:

## 1. Definir el nombre del producto

Pon aquí el nombre de producto, para que así los nombres te aparezcan actualizados directamente y tan solo tengas que copiarlos y pegarlos:

<fh-namepropagator selector="propagated-projectname" placeholder="AhoraFlexy"></fh-namepropagator>

## 2. Publicación <span class="propagated-projectname"></span>

Publicaremos el proyecto principal en una carpeta publish dentro de cualquier directorio externo al proyecto. Ej: C:\\Temp\\Publish

Una vez publicado copiaremos a esta carpeta Publish la carpeta Scripts que se ubica en el proyecto principal si la tuviera.
  
![](/docs_assets/images/Installation/CreatingNugetPackages/2.png)

## 3. Publicación <span class="propagated-projectname"></span>BD
Publicaremos el proyecto de BBDD de configuración y copiaremos el dacpac resultante en la carpeta **publish\\db**

![](/docs_assets/images/Installation/CreatingNugetPackages/3.png)

## 4. Utilidades NuGet

Descargar el fichero [nuget.zip](./readme/utils/nuget.zip) y extraer al mismo nivel que la carpeta publish (según el ejemplo c:\\Temp)

![](/docs_assets/images/Installation/CreatingNugetPackages/4.png)

## 5. Fichero config.nuspec

Editar el fichero **config.nuspec** para adaptar los valores a nuestro proyecto.

![](/docs_assets/images/Installation/CreatingNugetPackages/5.png)

## 6. Generar paquete NuGet

Abriremos una ventana de comandos y ejecutaremos la siguiente instrucción:  
  
```powershell
nuget pack config.nuspec
```

![](/docs_assets/images/Installation/CreatingNugetPackages/6.png)

## 7. Instalación

Copiaremos el fichero nupkg a una carpeta junto al instalable del [flexygo](https://docs.flexygo.com/Setup/FlexyGoInstaller.zip), este nos detectará que existe un paquete distinto a flexygo y nos preguntará si deseamos instalarlo en su lugar.  
Tras ello seguiremos los pasos habituales y si todo ha funcionado correctamente tendremos nuestro producto instalado.

![](/docs_assets/images/Installation/CreatingNugetPackages/7.png)