# Introduction to Flexygo

Flexygo is an AI Low-Code platform to build products fast thanks to it's easy to use interface, you can build anything with little to no knowdlege about HTML, CSS, JS or C#. But if you ever want to develop more complex applications you'll have access to all of them so you can create the exact idea you had in mind.

<ul class="flx-home-cards">
    <li class="flx-home-card">
        <a href="./Modules/Modules">
            <span class="flx-home-card-icon">
                <i class="flx-icon icon-modules"></i>
            </span>
            <p><b>Modules</b></p>
            <p class="flx-small-text">Get to know every flexygo module</p>
        </a>
    </li>
    <li class="flx-home-card">
        <a href="./Programming/Controls">
            <span class="flx-home-card-icon">
                <i class="flx-icon icon-vcard"></i>
            </span>
            <p><b>Form Controls</b></p>
            <p class="flx-small-text">Discover every flexygo custom controls</p>
        </a>
    </li>
    <li class="flx-home-card">
        <a href="./Information/GoodPractices">
            <span class="flx-home-card-icon">
                <i class="flx-icon icon-select-1"></i>
            </span>
            <p><b>Good practices</b></p>
            <p class="flx-small-text">Remind yourself of good practices when developing with flexygo</p>
        </a>
    </li>
    <li class="flx-home-card">
        <a href="./Offline App/AccessandDescription">
            <span class="flx-home-card-icon">
                <i class="flx-icon icon-mobile"></i>
            </span>
            <p><b>Offline App</b></p>
            <p class="flx-small-text">Learn to build an app to work with your Flexygo data even in low connectivity locations</p>
        </a>
    </li>
</ul>

## Flexygo's technologies
Flexygo is engineered on the .NET core framework, providing a modern, cross-platform, and high-performance foundation. Its native compatibility with both SQL Server and Oracle databases offers significant architectural flexibility.

### Front End
When developing a Flexygo product front-end you'll be able to use Flexygo's own tools like prebuilt [modules](./Modules/Modules) and [components](./Components). Also you'll have acces to HTML, CSS, JS and [Bootstrap](https://getbootstrap.com/).

### Back End
As Flexygo has been developed in .NET Core it does admit creating DLL process in C# or vb.net, and also admits stored procedures from SQL Server and Oracle as previously mentioned.

## Objects
FlexyGo Objects are the fundamental building blocks for creating applications in FlexyGo. Each object corresponds to a main element of your business—like a Customer, Project, or Invoice—and bundles everything needed to manage it: its data structure, input forms, list views, reports, and related processes.

By configuring these reusable objects, you can rapidly build tailored web applications without extensive coding, ensuring consistency and saving development time.

## Modules
Flexygo products are built using [modules](./Modules/Modules) which are easy to configure components with lots of differents capabilities like showing [charts](./Modules/Chart.md), creaing a [Kanban](./Modules/Kanban.md), showing [maps](./Modules/Maps.md) with locations and [routes](./Modules/Maps.md#routes) and lots more.

## Creating Reports
Flexygo does also have the possibilty of creatintg your own [reports](./Reporting/Newsandversionnotes.md) in HTML, Power BI, DevExpress and Crystal Reports.

## Offline Application
Flexygo does also have the possibilty of creating an aside [mobile app](./Offline%20App/AccessandDescription) to be accessed offline allowing to continue working even in remote places with low connectivity. 

### Technologies
Flexygo's [Offline app](./Offline%20App/AccessandDescription) does use [Ionic](https://ionicframework.com/docs/v4/components) at is base, with [Capacitor](https://capacitorjs.com/docs) and [Stencil](https://stenciljs.com/). It also uses [SQLite](https://sqlite.org/) as its way to store the data that will come in a synchronization with your Flexygo project.

### Development
Flexygo's [Offline app](./Offline%20App/AccessandDescription) product development requires of a bigger programming knowdledge as the pages must be built with HTML, CSS, JS and Ionic knowdlege.

### Tracking
Flexygo's [Offline app](./Offline%20App/AccessandDescription) has [tracking](./Offline%20App/Trackingconfiguration) functionality which allows getting the exact location data of the configured devices even when the app is closed. It can be configured to just track during ceratin periods of time.