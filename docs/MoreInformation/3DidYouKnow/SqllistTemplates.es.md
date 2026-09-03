# ¿Sabías que los componentes sqllist de la app offline permiten importar templates?

A partir de la versión 6.4 de la aplicación offline, es posible utilizar plantillas de páginas directamente en el componente `flx-sqllist`.

## Implementación

Para utilizar esta funcionalidad, se deben añadir dos atributos al componente:

* **PageName**: nombre de la página
* **ObjectName**: nombre del objeto del cual se desea utilizar la configuración

La app obtendrá la configuración de dicha página (sentencia SQL, header, body y footer), pero solo utilizará los valores que no estén configurados explícitamente en el componente.

![](../../docs_assets/images/DidYouKnow/SqllistTemplates/1.png)

## Funcionamiento

El sistema opera bajo una jerarquía de prioridades:

1. Las configuraciones explícitas dentro del componente tienen precedencia
2. Las configuraciones de la página referenciada se aplican como valores por defecto
3. Esto permite combinar elementos personalizados con plantillas reutilizables

## Ventajas

Esta característica facilita un desarrollo más eficiente mediante la reutilización de templates ya existentes, permitiendo que el componente `flx-sqllist` muestre listados en diferentes páginas sin duplicar código.
