# Requisitos del sistema

Esta página recoge los requisitos necesarios para instalar Flexygo en un entorno Windows con IIS.

---

## :material-tools: Requisitos previos

Antes de comenzar, asegúrate de que el entorno dispone de:

- **IIS** instalado y configurado (el instalador puede instalarlo si no lo está)
- **SQL Server 2022 o superior** (opcionalmente instalable también desde el instalador)
- **.NET Hosting Bundle** (instalado automáticamente por el instalador si se detecta su ausencia)
- **Permisos de administrador** en el equipo

---

## :material-server: Instalación de IIS y SQL Server

En modo avanzado, el instalador ofrece opciones automáticas para:

- Instalar **IIS** si no está presente en el sistema.
- Instalar **SQL Server** Developer Edition si el usuario lo solicita (ideal para entornos de pruebas o instalaciones locales).

---

## :material-wifi: WebSocket

Para el correcto funcionamiento de Flexygo, es necesario habilitar **WebSocket** en las características de Windows:

Ve a **Panel de control → Programas → Activar o desactivar las características de Windows** y asegúrate de que **WebSocket** está habilitado bajo las características de IIS.

---

## :material-database: SQL Server

!!! danger "Flexygo 10 requiere SQL Server 2022 o superior"
    A partir de Flexygo 10, la versión mínima de SQL Server es **SQL Server 2022**. Las bases de datos de la aplicación deben estar en un servidor SQL Server 2022 o posterior; si el servidor es anterior, actualízalo antes de instalar, actualizar o migrar la aplicación.

---

## :material-chart-line: Dimensionamiento orientativo

Para unos **100 usuarios simultáneos** se recomienda separar la aplicación y SQL Server en máquinas distintas:

| | Máquina SQL Server | Máquina de la aplicación (IIS) |
|---|---|---|
| Sistema operativo | Windows Server 2016 Standard o superior | Windows Server 2016 Standard o superior |
| Procesador | Intel Xeon (referencia: E5-2650 v4 @ 2.20GHz) | Intel Xeon (referencia: E5-2650 v4 @ 2.20GHz) |
| Memoria | 16 GB de RAM (ampliable) | 8 GB de RAM (ampliable) |
| Disco | 500 GB | 500 GB |

El espacio en disco depende del proyecto; para una gestión documental o de imágenes de gran volumen se recomienda un NAS externo. Más usuarios se reparten con varias máquinas de aplicación tras un balanceador. Para bases de datos de más de 30 GB, consulta [este artículo sobre memoria en SQL Server](https://www.brentozar.com/archive/2018/11/how-much-memory-is-normal-for-sql-servers/).
