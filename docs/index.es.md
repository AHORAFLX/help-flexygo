# Introducción a Flexygo

Flexygo es una plataforma Low-Code con IA para construir productos rápidamente gracias a su interfaz fácil de usar. Puedes crear casi cualquier cosa con poco o ningún conocimiento de HTML, CSS, JS o C#. Y si en algún momento quieres desarrollar aplicaciones más complejas, tendrás acceso a todas estas tecnologías para construir exactamente la idea que tenías en mente.

## Tecnologías de Flexygo
Flexygo está diseñado sobre el framework .NET Core, proporcionando una base moderna, multiplataforma y de alto rendimiento. Su compatibilidad nativa con bases de datos SQL Server y Oracle ofrece una gran flexibilidad arquitectónica.

### Front End
Al desarrollar el front-end de un producto Flexygo podrás usar las propias herramientas de Flexygo, como [módulos](./Modules/Basic.md) y [componentes](./Components) preconstruidos. También tendrás acceso a HTML, CSS, JS y [Bootstrap](https://getbootstrap.com/).

### Back End
Como Flexygo está desarrollado en .NET Core, admite la creación de procesos en DLL con C# o VB.NET, y también admite procedimientos almacenados tanto en SQL Server como en Oracle, tal y como se ha mencionado.

## Objetos
No tengo muy claro qué poner aquí, pero habría que explicar de forma súper básica el concepto de “objeto” 🤔 🦦. BBBB

## Módulos
Los productos Flexygo se construyen usando [módulos](./Modules/basic.md), que son componentes fáciles de configurar con multitud de capacidades, como mostrar [gráficos](./Modules/Chart.md), crear un [Kanban](./Modules/Kanban.md), mostrar [mapas](./Modules/Maps.md) con ubicaciones y [rutas](./Modules/Maps.md#routes), entre muchas otras.

## Creación de informes
Flexygo también ofrece la posibilidad de crear tus propios [informes](./Reporting/Newsandversionnotes.md) en HTML, Power BI, DevExpress y Crystal Reports.

## Aplicación Offline
Flexygo también permite crear una [aplicación móvil](./Offline%20App/Creating%20your%20first%20app/0-UnderstandingOfflineApps.md) para acceso offline, lo que posibilita seguir trabajando incluso en lugares remotos con baja conectividad.

### Tecnologías
La [app Offline](./Offline%20App/Creating%20your%20first%20app/0-UnderstandingOfflineApps.md) de Flexygo utiliza [Ionic](https://ionicframework.com/docs/v4/components) como base, junto con [Capacitor](https://capacitorjs.com/docs) y [Stencil](https://stenciljs.com/). También emplea [SQLite](https://sqlite.org/) como sistema de almacenamiento para los datos que se sincronizan con tu proyecto Flexygo.

### Desarrollo
El desarrollo del producto de [app Offline](./Offline%20App/Creating%20your%20first%20app/0-UnderstandingOfflineApps.md) de Flexygo requiere un mayor conocimiento de programación, ya que las páginas deben construirse con HTML, CSS, JS y conocimientos de Ionic.

### Trazabilidad
La [app Offline](./Offline%20App/Creating%20your%20first%20app/0-UnderstandingOfflineApps.md) de Flexygo cuenta con funcionalidad de [tracking](./Offline%20App/1-Trackingconfiguration.md) que permite obtener la ubicación exacta de los dispositivos configurados incluso cuando la app está cerrada. Se puede configurar para rastrear únicamente durante determinados periodos de tiempo.
