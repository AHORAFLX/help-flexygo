# Arquitectura de Flexygo <span class="fh-version-tag" title="Disponible desde la versión 10">10.0+</span>

Desde la versión 10, Flexygo funciona sobre **.NET 9**, la plataforma actual de Microsoft, en lugar de .NET Framework. Es más rápido y más seguro, y sigue recibiendo actualizaciones de Microsoft.

La aplicación se divide en tres piezas que pueden estar **juntas en un mismo servidor o cada una en el suyo**:

![Arquitectura de Flexygo: usuarios, frontend, backend y SQL Server](../docs_assets/images/Architecture/net9-architecture.png)

| Pieza | Qué hace |
| --- | --- |
| **Frontend** | Es lo que abre el navegador: las pantallas, los menús y la skin, y los asistentes de instalación y de versiones. No se conecta a la base de datos: le pide todo al backend. |
| **Backend** | Hace el trabajo: la lógica, la seguridad, los procesos, las tareas programadas y los informes. También atiende la **WebAPI** y el **servidor MCP** de las integraciones. |
| **SQL Server** | Guarda la configuración de la aplicación y los datos del producto. |

Separarlas permite, por ejemplo, dejar el frontend en un servidor accesible desde fuera y el backend y la base de datos en la red interna, o dar más recursos solo a la pieza que más trabajo tiene.

## Dónde se puede instalar

- **IIS**, en Windows: el [instalador](1Installer/Introduction.md) lo hace todo. En modo **IIS básico** frontend y backend van en el mismo sitio; en **IIS avanzado** pueden ir en sitios o servidores distintos.
- **Docker**: frontend y backend en contenedores, con la base de datos fuera de Docker en producción. Ver [Despliegue con Docker](4Docker/index.md).
- **Servicio independiente (Kestrel)**, en Windows o en **Linux**, normalmente detrás de un proxy inverso como nginx. No tiene instalador propio. Ver [Despliegue con Kestrel](5Kestrel/index.md) y [Proxy inverso](6ReverseProxy/index.md).

Antes de instalar, revisa los [requisitos del sistema](SystemRequirements.md).

## Actualizar

Flexygo se actualiza desde la propia aplicación con el asistente de versiones, que comprueba los requisitos antes de empezar y puede deshacer una actualización. Ver [Actualizador de Flexygo](3Updater/UpdateFlow.md).
