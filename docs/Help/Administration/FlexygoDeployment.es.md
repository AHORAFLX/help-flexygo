---
title: "Despliegue de Flexygo"
---

# Despliegue de Flexygo <span class="fh-version-tag" title="Disponible desde la versión 10.0">10.0+</span> {.fh-title-with-image}

![Despliegue de Flexygo](../../docs_assets/images/FlexygoDeployment/net9-architecture.png){ .fh-image-of-title }

Flexygo funciona sobre .NET 9 y ASP.NET Core. La interfaz (frontend), el backend y la base de datos SQL Server pueden ejecutarse en un mismo servidor o en servidores distintos, y puedes escalarlos y actualizarlos por separado.

## Dónde encontrarlo
Esta opción afecta a toda la aplicación y a su instalación, despliegue y actualización.

## Cómo se usa
1. Instala Flexygo con el asistente de instalación en IIS, como servicio independiente o en Docker, en Windows o Linux.
2. Ejecuta la interfaz, el backend y la base de datos en el mismo servidor o en servidores distintos.
3. Mantén Flexygo actualizado desde el asistente de versiones de la aplicación. También puedes usarlo para revertir una actualización.

## Configuración
Configura el despliegue y la conexión de la interfaz y del backend en los archivos appsettings de cada uno.
