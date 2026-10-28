# Panel de control <span class="fh-version-tag" title="Disponible desde la versión 10">10.0+</span>

En skin2026 el panel de control es una sola pantalla con todo lo que un administrador necesita para mantener la aplicación: en qué origen trabaja, cuánto hay de cada cosa, las herramientas de configuración por áreas, las acciones de mantenimiento y lo último que ha tocado.

<figure markdown="span">
  ![El panel de control en skin2026](../../docs_assets/images/ControlPanel/panel.png)
  <figcaption>El panel de control: estado y atajos arriba, acciones, áreas con sus herramientas y, a la derecha, el trabajo reciente</figcaption>
</figure>

---

## 1. Dónde está

En el carril de la izquierda, bajo **Administración** → **Panel de control**. La entrada se ve con el **modo desarrollo** encendido (**Modo Desarrollo**, en el mismo carril).

---

## 2. Qué se ve

### Estado

- **Origen activo**: el origen en el que se está trabajando (lo que se crea nace con él, y es lo que exportan *Generar scripts* y *Exportar como proyecto*).
- **Licencia** → **Ver el estado**: abre el estado de la licencia.

### Atajos

Una fila de accesos directos a las listas más usadas, cada uno con su cifra:

| Atajo | Cifra |
|---|---|
| **Objetos** (con **+** para crear uno con el asistente), **Páginas**, **Módulos**, **Procesos** | Los del origen activo / el total. `555/578` en Módulos: 555 son del origen activo de 578 que hay |
| **Plantilla sin lista** | Objetos del origen activo que no tienen plantilla de lista / objetos del origen activo |
| **Usuarios**, **Roles**, **Plantillas**, **App offline** | Cuántos hay |
| **Agentes de IA** | Sin cifra: lleva a los agentes de IA configurados |
| **WebAPI** | **on** (en verde) si la WebAPI de la instalación está encendida, **off** (neutro) si no. Lleva a su configuración |

### Acciones

<figure markdown="span">
  ![Las acciones del panel de control](../../docs_assets/images/ControlPanel/acciones.png)
  <figcaption>Las acciones de mantenimiento</figcaption>
</figure>

| Acción | Qué hace |
|---|---|
| **Recargar caché** | Vuelve a leer la configuración del sistema |
| **Convertir en base de desarrollo** | Convierte la base en una de desarrollo: borra la licencia y bloquea usuarios. Lleva el triángulo de aviso |
| **Vista previa** | Enseña la página como la vería un teléfono o una tableta, y la gira |
| **Minificar JS/CSS** | Interruptor: sirve los ficheros comprimidos |
| **Diagnóstico** | Comprobación del entorno |
| **Cambios en las tablas** | Qué ha cambiado en el modelo de datos |
| **Generar scripts** | Los guiones `MERGE` del origen activo |
| **Exportar como proyecto** | Convierte la aplicación en un proyecto de la plantilla de producto ([Exportar la aplicación como proyecto](../../2ProductDevelopment/8ExportProject/2Reference.md)) |
| **Traducir** | Traduce los textos de la base a otro idioma |

### Áreas

A la izquierda, las áreas de configuración —**Páginas y módulos**, **Objetos**, **Seguridad**, **Lógica y reglas**, **Informes**, **Entorno**, **Otras herramientas**, **aplicación sin conexión**, **Conectores**—, cada una con el número de herramientas que tiene. El número cuenta **lo que el usuario puede ver**: con otra seguridad, otro número. Al elegir un área, a su derecha salen sus herramientas; en **Entorno** está, por ejemplo, el [panel de salud](HealthPanel.md).

### Tu trabajo reciente (*Your recent work*)

A la derecha, los últimos registros que ha tocado el propio usuario: cuál, de qué tipo (usuario, vista, página…), qué hizo (alta, cambio, baja, proceso) y cuándo.
