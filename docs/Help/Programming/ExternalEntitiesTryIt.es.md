# Pruébalo: un objeto que vive en una API REST

En unos diez minutos tendrás en tu aplicación un objeto cuyos registros **no están en tu base de datos sino en una API de internet**: con su lista, que pagina, ordena y filtra pidiéndoselo a la API, su ficha, y una gráfica que pinta lo que devuelve un endpoint sin una línea de SQL. Se hace todo con pantallas, sin escribir SQL ni JSON.

La prueba usa **Northwind**, un servicio público de ejemplo (OData v4, sin clave y de solo lectura), para que no necesites ninguna API propia. Qué hace cada pieza, la escritura (alta, edición, borrado), la autenticación y la tabla de qué funciona y qué no están en la referencia: [Entidades externas](ExternalEntities.md).

---

## Lo que necesitas

| | |
|---|---|
| **Una aplicación Flexygo de la versión 10** | Entra con un usuario **administrador**. Vale una instalación local. |
| **Salida a internet desde el servidor** | Quien llama a la API es el Backend, no tu navegador. Para comprobarlo, abre `https://services.odata.org/V4/Northwind/Northwind.svc/Products` en el navegador del servidor. |
| **El origen de tu proyecto activo** | Lo que crees aquí queda en el origen activo, como cualquier objeto. |

---

## 1. Da de alta el servicio

Un **servicio externo** es la API: su dirección, cómo se autentica y cómo pagina y filtra. Se da de alta una vez y lo usan todos los objetos que lean de ella.

Abre **External services**: panel de control → área **Objects** → *External services* (en flexy2022, *Admin Work Area → Object Management → External services*; en las dos, también con el buscador, **Ctrl K**). Pulsa **New** y rellena:

| Campo | Valor |
|---|---|
| **Service Id** | `northwind` |
| **Description** | Northwind (OData, public) |
| **Base URL** | `https://services.odata.org/V4/Northwind/Northwind.svc/` |
| **Authentication** | `None` |
| **Filter mode** | `OData` |

Guarda. También se puede crear sin salir del asistente, con el **+** junto al campo *Service* del paso 2, y el botón del enlace, al lado, abre el servicio elegido para revisarlo o cambiarlo.

![Un servicio externo](../../docs_assets/images/ExternalEntities/ext-02-servicio.png)

## 2. Crea el objeto con el asistente

Abre **Objects** en el menú de administración y pulsa el botón de la varita, arriba a la derecha (**New object**).

**Paso 1, Identity**: el nombre del registro y de la colección (`NwProduct` y `NwProducts`), sus títulos (`{{ProductName}}` para el registro, *Northwind products* para la colección) y un icono para cada uno. **Continue**.

**Paso 2, Source**: elige **An external API** y rellena:

| Campo | Valor |
|---|---|
| **Service** | el que creaste, *Northwind (OData, public)* |
| **List path** | `Products` |
| **Record path** | `Products({key})` (opcional: hace la ficha más rápida) |

Pulsa **Probe the API**. La sonda llama una vez a la lista, **sin guardar nada**, y enseña lo que ha contestado y las propiedades que propone.

![La sonda: 77 registros, una muestra y las propiedades propuestas](../../docs_assets/images/ExternalEntities/pruebalo-sonda.png)

**Comprueba**: *✓ Answered 77 records*, una muestra de tres productos y **10 propiedades** con `ProductID` como clave. Puedes cambiar la etiqueta o el tipo de cualquiera, o quitarla. Los datos de control del protocolo (como `@odata.etag`) no se proponen: la sonda los lista aparte como saltados.

**Paso 3, Review**: lo que se va a crear (el objeto, la colección, las propiedades y una vista de lista). **Create object**. Al terminar se abre el banco de trabajo del objeto nuevo.

## 3. Úsalo como cualquier otro objeto

Abre la lista de **NwProducts** (desde el banco de trabajo, o añadiéndola al menú como cualquier colección).

![La lista de productos, leída de la API](../../docs_assets/images/ExternalEntities/pruebalo-lista.png)

**Comprueba**:

- **77 productos**, paginados. Cada página es una llamada a la API (`$top`/`$skip`), no 77 filas traídas de golpe.
- **Ordenar** por una columna y **filtrar** (por ejemplo, *Unit Price* mayor que 50) devuelve lo esperado: el orden y el filtro viajan a la API (`$orderby`, `$filter`).
- **Abrir un registro** lee ese producto y nada más (`Products(1)`).

Desde aquí es un objeto más: se coloca en páginas, se le dan permisos y se usa en listas relacionadas, kanban o calendarios. Como el objeto no tiene rutas de alta, edición ni borrado, es de **solo lectura**: la lista no ofrece *New* y la ficha no ofrece *Edit*. Con una API que lo admita, esas rutas se ponen en la sección **API** del banco de trabajo y las acciones aparecen.

## 4. Opcional: una gráfica alimentada por la API

Una gráfica **sin SQL** sobre un objeto externo pinta lo que devuelve su endpoint. Northwind tiene uno que ya da las ventas por categoría:

1. Con el asistente (paso 2), otro objeto con **List path** `Category_Sales_for_1997`: la sonda contesta 8 registros y propone `CategoryName` (clave) y `CategorySales`.
2. Un módulo **Chart (ECharts)** de tipo `pie`, con la **colección** de ese objeto como objeto del módulo, **SQL vacío**, y *Series* y *Labels* = `CategoryName`, *Value* = `CategorySales`.

![Una tarta pintada desde un endpoint, sin SQL](../../docs_assets/images/ExternalEntities/pruebalo-grafica.png)

El endpoint tiene que devolver ya las filas de la gráfica: Flexygo no agrega. Ver [§6 de la referencia](ExternalEntities.md#6-graficas-desde-un-endpoint).

---

## Si algo no sale

| Lo que ves | Por qué | Qué hacer |
|---|---|---|
| La sonda dice que no se pudo llegar a la API | El servidor no sale a internet, o la URL está mal | Abre la URL desde el navegador del **servidor**; revisa la *Base URL* y la ruta |
| La sonda contesta pero no propone propiedades | La lista viene envuelta (`{ "data": [...] }`) | Indica la **Records path** (`data`) y vuelve a sondar |
| Una lista SQL o un informe sobre el objeto da un mensaje | Esos módulos leen una tabla y aquí no la hay | Usa una lista de objeto, una vista o una gráfica sin SQL; la tabla completa en la [referencia](ExternalEntities.md#5-que-funciona-y-que-no) |
| La API exige clave | Northwind no; la tuya puede | *Authentication* del servicio (API key, Basic, Bearer, OAuth2) y su **Secret** |
