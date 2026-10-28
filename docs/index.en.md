# Introduction to Flexygo

!!! tip "Download the installer"
    You can download the **official Flexygo installer** to quickly get started with your development environment.
    👉 [Download installer](https://ayuda.ahora.es/Flexygo/files/flexygoinstallercore.zip)

    See the full [Installer](./1Deployment/1Installer/Introduction.md) guide to learn about all its options (IIS, Docker, migration, uninstall).

Flexygo is an AI Low-Code platform to build products fast thanks to it's easy to use interface, you can build anything with little to no knowdlege about HTML, CSS, JS or C#. But if you ever want to develop more complex applications you'll have access to all of them so you can create the exact idea you had in mind.

<ul class="fh-home-cards">
    <li class="fh-home-card">
        <a href="./Help/Modules/Modules">
            <span class="fh-home-card-icon">
                <i class="flx-icon icon-modules"></i>
            </span>
            <p><b>Modules</b></p>
            <p class="fh-small-text">Get to know every flexygo module</p>
        </a>
    </li>
    <li class="fh-home-card">
        <a href="./Help/Programming/Controls">
            <span class="fh-home-card-icon">
                <i class="flx-icon icon-vcard"></i>
            </span>
            <p><b>Form Controls</b></p>
            <p class="fh-small-text">Discover every flexygo custom controls</p>
        </a>
    </li>
    <li class="fh-home-card">
        <a href="./Help/Information/GoodPractices">
            <span class="fh-home-card-icon">
                <i class="flx-icon icon-select-1"></i>
            </span>
            <p><b>Good practices</b></p>
            <p class="fh-small-text">Remind yourself of good practices when developing with flexygo</p>
        </a>
    </li>
    <li class="fh-home-card">
        <a href="./Help/OfflineApp/AccessandDescription">
            <span class="fh-home-card-icon">
                <i class="flx-icon icon-mobile"></i>
            </span>
            <p><b>Offline App</b></p>
            <p class="fh-small-text">Learn to build an app to work with your Flexygo data even in low connectivity locations</p>
        </a>
    </li>
</ul>

## 🔄 Architecture evolution

Flexygo has evolved from the classic .NET Framework-based model into a completely new architecture based on **.NET 9**.

Until now, the Flexygo model consisted of a **single web application** that contained the frontend, the backend and all its libraries within the same site.

With the new architecture, Flexygo is split into:

- 🖥️ **Frontend**: the web interface the user sees
- ⚙️ **Backend**: the server-side logic and APIs
- 🛢️ **Database**

This modular approach serves several key goals:

- **Security**: by separating the components, you can host the frontend on a different server than the backend and the database. If the frontend server were compromised, there would be **no direct access to the data** or the internal logic.
- **Scalability**: you can distribute the parts of the system across different physical or virtual environments.
- **Flexibility**: it allows deploying customized solutions adapted to each customer or environment.
- **Performance and maintenance**: using .NET 9 lets us work with the latest improvements in the .NET ecosystem in terms of performance, cross-platform support and ease of deployment.

Building on this foundation, Flexygo keeps modernizing its whole ecosystem, securing its future and adapting it to today's enterprise development standards.

## 🚀 How is Flexygo deployed?

You have several options to run or deploy your Flexygo solution:

- **[Installer](./1Deployment/1Installer/Introduction.md)** — Ideal for Windows environments. Includes basic IIS, advanced IIS and Docker-via-installer modes. Automates the whole configuration.
- **[Docker](./1Deployment/4Docker/index.md)** — Perfect for cloud deployment, Linux environments or container-based automated solutions.
- **[Kestrel](./1Deployment/5Kestrel/index.md)** — Runs directly with `dotnet run`, ideal for development environments or reverse-proxy solutions.

See the **Deployment** section of the menu for detailed guides on each option.

## Flexygo's technologies
Flexygo is engineered on the .NET core framework, providing a modern, cross-platform, and high-performance foundation. Its native compatibility with both SQL Server and Oracle databases offers significant architectural flexibility.

### Front End
When developing a Flexygo product front-end you'll be able to use Flexygo's own tools like prebuilt [modules](./Help/Modules/Modules) and components. Also you'll have acces to HTML, CSS, JS and [Bootstrap](https://getbootstrap.com/).

### Back End
As Flexygo has been developed in .NET Core it does admit creating DLL process in C# or vb.net, and also admits stored procedures from SQL Server and Oracle as previously mentioned.

## Objects
FlexyGo Objects are the fundamental building blocks for creating applications in FlexyGo. Each object corresponds to a main element of your business—like a Customer, Project, or Invoice—and bundles everything needed to manage it: its data structure, input forms, list views, reports, and related processes.

By configuring these reusable objects, you can rapidly build tailored web applications without extensive coding, ensuring consistency and saving development time.

## Modules
Flexygo products are built using [modules](./Help/Modules/Modules) which are easy to configure components with lots of differents capabilities like showing [charts](./Help/Modules/Chart.md), creaing a [Kanban](./Help/Modules/Kanban.md), showing [maps](./Help/Modules/Maps.md) with locations and [routes](./Help/Modules/Maps.md#routes) and lots more.

## Creating Reports
Flexygo does also have the possibilty of creatintg your own reports in HTML, Power BI, DevExpress and Crystal Reports.

## Offline Application
Flexygo does also have the possibilty of creating an aside [mobile app](./Help/OfflineApp/AccessandDescription) to be accessed offline allowing to continue working even in remote places with low connectivity. 

### Technologies
Flexygo's [Offline app](./Help/OfflineApp/AccessandDescription) does use [Ionic](https://ionicframework.com/docs/v4/components) at is base, with [Capacitor](https://capacitorjs.com/docs) and [Stencil](https://stenciljs.com/). It also uses [SQLite](https://sqlite.org/) as its way to store the data that will come in a synchronization with your Flexygo project.

### Development
Flexygo's [Offline app](./Help/OfflineApp/AccessandDescription) product development requires of a bigger programming knowdledge as the pages must be built with HTML, CSS, JS and Ionic knowdlege.

### Tracking
Flexygo's [Offline app](./Help/OfflineApp/AccessandDescription) has [tracking](./Help/OfflineApp/Trackingconfiguration) functionality which allows getting the exact location data of the configured devices even when the app is closed. It can be configured to just track during ceratin periods of time.

## More information

Besides the technical documentation gathered under **Help**, this site includes dedicated documentation on **Deployment**, **Product Development**, **CI/CD** and **Troubleshooting**, as well as the **More information** section, with additional content about Flexygo: frequently asked questions, trivia ("Did you know...?"), release notes, security guides and the CI/CD cycle, among others.
