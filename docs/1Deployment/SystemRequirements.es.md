# Requisitos del sistema

Esta página recoge los requisitos necesarios para instalar Flexygo en un entorno Windows con IIS.

---

## :material-tools: Requisitos previos

Antes de comenzar, asegúrate de que el entorno dispone de:

- **IIS** instalado y configurado (el instalador puede instalarlo si no lo está)
- **SQL Server** (opcionalmente instalable también desde el instalador)
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
