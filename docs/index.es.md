---
title: Introducción a Flexygo
---

# Introducción a Flexygo

Flexygo es una plataforma Low-Code con IA para crear productos de forma rápida gracias a su interfaz fácil de usar. Puedes construir prácticamente cualquier cosa con poco o ningún conocimiento de HTML, CSS, JS o C#. No obstante, si en algún momento necesitas desarrollar aplicaciones más complejas, tendrás acceso completo a todas estas tecnologías para poder crear exactamente la idea que tienes en mente.

<ul class="fh-home-cards">
    <li class="fh-home-card">
        <a href="./Modules/Modules">
            <span class="fh-home-card-icon">
                <i class="flx-icon icon-modules"></i>
            </span>
            <p><b>Módulos</b></p>
            <p class="fh-small-text">Conoce todos los módulos de Flexygo</p>
        </a>
    </li>
    <li class="fh-home-card">
        <a href="./Programming/Controls">
            <span class="fh-home-card-icon">
                <i class="flx-icon icon-vcard"></i>
            </span>
            <p><b>Controles de formulario</b></p>
            <p class="fh-small-text">Descubre todos los controles personalizados de Flexygo</p>
        </a>
    </li>
    <li class="fh-home-card">
        <a href="./Information/GoodPractices">
            <span class="fh-home-card-icon">
                <i class="flx-icon icon-select-1"></i>
            </span>
            <p><b>Buenas prácticas</b></p>
            <p class="fh-small-text">Recuerda las buenas prácticas al desarrollar con Flexygo</p>
        </a>
    </li>
    <li class="fh-home-card">
        <a href="./OfflineApp/AccessandDescription">
            <span class="fh-home-card-icon">
                <i class="flx-icon icon-mobile"></i>
            </span>
            <p><b>Aplicación Offline</b></p>
            <p class="fh-small-text">Aprende a crear una app para trabajar con tus datos de Flexygo incluso en ubicaciones con baja conectividad</p>
        </a>
    </li>
</ul>

## Tecnologías de Flexygo

Flexygo está desarrollado sobre el framework .NET Core, proporcionando una base moderna, multiplataforma y de alto rendimiento. Su compatibilidad nativa tanto con bases de datos SQL Server como Oracle ofrece una gran flexibilidad arquitectónica.

### Front End

Al desarrollar el front-end de un producto Flexygo podrás utilizar las propias herramientas de Flexygo, como los [módulos](./Modules/Modules) y [componentes](./Components) predefinidos. Además, tendrás acceso a HTML, CSS, JS y [Bootstrap](https://getbootstrap.com/).

### Back End

Al estar desarrollado en .NET Core, Flexygo permite la creación de procesos DLL en C# o VB.NET, y también admite procedimientos almacenados tanto en SQL Server como en Oracle, tal y como se ha mencionado anteriormente.

## Objetos

Los objetos de Flexygo son los bloques fundamentales para la creación de aplicaciones en Flexygo. Cada objeto corresponde a un elemento principal de tu negocio —como un Cliente, Proyecto o Factura— e incluye todo lo necesario para gestionarlo: su estructura de datos, formularios de entrada, vistas de listado, informes y procesos relacionados.

Mediante la configuración de estos objetos reutilizables, puedes crear rápidamente aplicaciones web a medida sin necesidad de mucho código, garantizando la coherencia y ahorrando tiempo de desarrollo.

## Módulos

Los productos Flexygo se construyen utilizando [módulos](./Modules/Modules), que son componentes fáciles de configurar con múltiples capacidades, como mostrar [gráficos](./Modules/Chart.md), crear un [Kanban](./Modules/Kanban), mostrar [mapas](./Modules/Maps) con ubicaciones y [rutas](./Modules/Maps#routes), y muchas funcionalidades más.

## Creación de informes

Flexygo también ofrece la posibilidad de crear tus propios [informes](./Reporting/Newsandversionnotes.md) en HTML, Power BI, DevExpress y Crystal Reports.

## Aplicación Offline

Flexygo también ofrece la posibilidad de crear una [aplicación móvil](./OfflineApp/AccessandDescription) independiente a la que se puede acceder sin conexión, permitiendo continuar trabajando incluso en lugares remotos con baja conectividad.

### Tecnologías

La [aplicación Offline](./OfflineApp/AccessandDescription) de Flexygo utiliza [Ionic](https://ionicframework.com/docs/v4/components) como base, junto con [Capacitor](https://capacitorjs.com/docs) y [Stencil](https://stenciljs.com/). También utiliza [SQLite](https://sqlite.org/) como sistema de almacenamiento de los datos que se sincronizan con tu proyecto Flexygo.

### Desarrollo

El desarrollo de la [aplicación Offline](./OfflineApp/AccessandDescription) de Flexygo requiere un mayor conocimiento de programación, ya que las páginas deben construirse utilizando HTML, CSS, JS e Ionic.

### Seguimiento

La [aplicación Offline](./OfflineApp/AccessandDescription) de Flexygo dispone de funcionalidad de [seguimiento](./OfflineApp/Trackingconfiguration), que permite obtener los datos exactos de localización de los dispositivos configurados incluso cuando la aplicación está cerrada. Puede configurarse para realizar el seguimiento únicamente durante determinados periodos de tiempo.