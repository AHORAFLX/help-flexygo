---
title: Introducción a Flexygo
---

# Introducción a Flexygo

!!! tip "Descarga del instalador"
    Puedes descargar el **instalador oficial de Flexygo** para comenzar rápidamente con tu entorno de desarrollo.
    👉 [Descargar instalador](https://ayuda.ahora.es/Flexygo/files/flexygoinstallercore.zip)

    Consulta la guía completa del [Instalador](./1Deployment/1Installer/Introduction.md) para conocer todas sus opciones (IIS, Docker, migración, desinstalación).

Flexygo es una plataforma Low-Code con IA para crear productos de forma rápida gracias a su interfaz fácil de usar. Puedes construir prácticamente cualquier cosa con poco o ningún conocimiento de HTML, CSS, JS o C#. No obstante, si en algún momento necesitas desarrollar aplicaciones más complejas, tendrás acceso completo a todas estas tecnologías para poder crear exactamente la idea que tienes en mente.

<ul class="fh-home-cards">
    <li class="fh-home-card">
        <a href="./Help/Modules/Modules">
            <span class="fh-home-card-icon">
                <i class="flx-icon icon-modules"></i>
            </span>
            <p><b>Módulos</b></p>
            <p class="fh-small-text">Conoce todos los módulos de Flexygo</p>
        </a>
    </li>
    <li class="fh-home-card">
        <a href="./Help/Programming/Controls">
            <span class="fh-home-card-icon">
                <i class="flx-icon icon-vcard"></i>
            </span>
            <p><b>Controles de formulario</b></p>
            <p class="fh-small-text">Descubre todos los controles personalizados de Flexygo</p>
        </a>
    </li>
    <li class="fh-home-card">
        <a href="./Help/Information/GoodPractices">
            <span class="fh-home-card-icon">
                <i class="flx-icon icon-select-1"></i>
            </span>
            <p><b>Buenas prácticas</b></p>
            <p class="fh-small-text">Recuerda las buenas prácticas al desarrollar con Flexygo</p>
        </a>
    </li>
    <li class="fh-home-card">
        <a href="./Help/OfflineApp/AccessandDescription">
            <span class="fh-home-card-icon">
                <i class="flx-icon icon-mobile"></i>
            </span>
            <p><b>Aplicación Offline</b></p>
            <p class="fh-small-text">Aprende a crear una app para trabajar con tus datos de Flexygo incluso en ubicaciones con baja conectividad</p>
        </a>
    </li>
</ul>

## 🔄 Evolución de la arquitectura

Flexygo ha evolucionado desde el modelo clásico basado en .NET Framework hacia una arquitectura completamente nueva basada en **.NET 9**.

Hasta ahora, el modelo de Flexygo consistía en una **única aplicación web** que contenía tanto el frontend como el backend y todas sus librerías dentro del mismo sitio.

Con la nueva arquitectura, Flexygo se divide en:

- 🖥️ **Frontend**: la interfaz web que el usuario ve
- ⚙️ **Backend**: la lógica del servidor y las APIs
- 🛢️ **Base de datos**

Este enfoque modular responde a varios objetivos clave:

- **Seguridad**: al separar los componentes, puedes alojar el frontend en un servidor distinto del backend y la base de datos. Si se comprometiera el servidor frontend, no habría acceso directo a los datos ni a la lógica interna.
- **Escalabilidad**: puedes distribuir las partes del sistema en diferentes entornos físicos o virtuales.
- **Flexibilidad**: permite desplegar soluciones personalizadas y adaptadas a cada cliente o entorno.
- **Rendimiento y mantenimiento**: usar .NET 9 permite trabajar con las últimas mejoras del ecosistema .NET en rendimiento, soporte multiplataforma y facilidad de despliegue.

Con esta base, Flexygo continúa modernizando todo su ecosistema, asegurando su futuro y adaptándolo a los estándares actuales de desarrollo empresarial.

## 🚀 ¿Cómo se despliega Flexygo?

Tienes varias opciones para ejecutar o desplegar tu solución Flexygo:

- **[Instalador](./1Deployment/1Installer/Introduction.md)** — Ideal para entornos Windows. Incluye modos IIS básico, IIS avanzado y Docker vía instalador. Automatiza toda la configuración.
- **[Docker](./1Deployment/4Docker/index.md)** — Perfecto para despliegue en la nube, entornos Linux o soluciones automatizadas con contenedores.
- **[Kestrel](./1Deployment/5Kestrel/index.md)** — Ejecutable directamente con `dotnet run`, ideal para entornos de desarrollo o soluciones con proxy inverso.

Consulta la sección **Despliegue** del menú para ver guías detalladas de cada opción.

## Tecnologías de Flexygo

Flexygo está desarrollado sobre el framework .NET Core, proporcionando una base moderna, multiplataforma y de alto rendimiento. Su compatibilidad nativa tanto con bases de datos SQL Server como Oracle ofrece una gran flexibilidad arquitectónica.

### Front End

Al desarrollar el front-end de un producto Flexygo podrás utilizar las propias herramientas de Flexygo, como los [módulos](./Help/Modules/Modules) y componentes predefinidos. Además, tendrás acceso a HTML, CSS, JS y [Bootstrap](https://getbootstrap.com/).

### Back End

Al estar desarrollado en .NET Core, Flexygo permite la creación de procesos DLL en C# o VB.NET, y también admite procedimientos almacenados tanto en SQL Server como en Oracle, tal y como se ha mencionado anteriormente.

## Objetos

Los objetos de Flexygo son los bloques fundamentales para la creación de aplicaciones en Flexygo. Cada objeto corresponde a un elemento principal de tu negocio —como un Cliente, Proyecto o Factura— e incluye todo lo necesario para gestionarlo: su estructura de datos, formularios de entrada, vistas de listado, informes y procesos relacionados.

Mediante la configuración de estos objetos reutilizables, puedes crear rápidamente aplicaciones web a medida sin necesidad de mucho código, garantizando la coherencia y ahorrando tiempo de desarrollo.

## Módulos

Los productos Flexygo se construyen utilizando [módulos](./Help/Modules/Modules), que son componentes fáciles de configurar con múltiples capacidades, como mostrar [gráficos](./Help/Modules/Chart.md), crear un [Kanban](./Help/Modules/Kanban), mostrar [mapas](./Help/Modules/Maps) con ubicaciones y [rutas](./Help/Modules/Maps#routes), y muchas funcionalidades más.

## Creación de informes

Flexygo también ofrece la posibilidad de crear tus propios informes en HTML, Power BI, DevExpress y Crystal Reports.

## Aplicación Offline

Flexygo también ofrece la posibilidad de crear una [aplicación móvil](./Help/OfflineApp/AccessandDescription) independiente a la que se puede acceder sin conexión, permitiendo continuar trabajando incluso en lugares remotos con baja conectividad.

### Tecnologías

La [aplicación Offline](./Help/OfflineApp/AccessandDescription) de Flexygo utiliza [Ionic](https://ionicframework.com/docs/v4/components) como base, junto con [Capacitor](https://capacitorjs.com/docs) y [Stencil](https://stenciljs.com/). También utiliza [SQLite](https://sqlite.org/) como sistema de almacenamiento de los datos que se sincronizan con tu proyecto Flexygo.

### Desarrollo

El desarrollo de la [aplicación Offline](./Help/OfflineApp/AccessandDescription) de Flexygo requiere un mayor conocimiento de programación, ya que las páginas deben construirse utilizando HTML, CSS, JS e Ionic.

### Seguimiento

La [aplicación Offline](./Help/OfflineApp/AccessandDescription) de Flexygo dispone de funcionalidad de [seguimiento](./Help/OfflineApp/Trackingconfiguration), que permite obtener los datos exactos de localización de los dispositivos configurados incluso cuando la aplicación está cerrada. Puede configurarse para realizar el seguimiento únicamente durante determinados periodos de tiempo.

## Más información

Además de la documentación técnica recogida en **Ayuda**, este sitio incluye documentación específica sobre **Despliegue**, **Desarrollo de producto**, **CI/CD** y **Solución de Problemas**, así como la sección **Más información**, con contenido adicional sobre Flexygo: preguntas frecuentes, curiosidades ("¿Sabías que...?"), notas de versión, guías de seguridad y del ciclo de CI/CD, entre otros.
