# Funciones Comunes

## Abrir página

Podemos abrir cualquier página de objeto predeterminada utilizando el método flexygo.nav.openPage e indicando el tipo de objetivo y la entidad o colección.

```ts
/**
* Abre la página de objeto predeterminada
 * @method openPage
 * @param {string} pagetypeid - Tipo de la página (lista, vista, editar)
 * @param {string} objectname - Nombre de la colección o entidad
 * @param {string} objectwhere - Dónde de la colección o entidad
 * @param {string} defaults - Valores predeterminados que se agregarán a la página
 * @param {string} targetid - Objetivo para abrir la ventana
 * @param {boolean} excludeHist - Verdadero para no almacenar en el historial
 * @param {JQuery} triggerElement - Elemento relativo para abrir la página
 * @param {boolean} isClone - Solo para abrir una página con opciones de clonación
 * @param {flexygo.nav.FlexygoHistory} previousHist - Historial de la página anterior
 * @param {string} presets - Utilizado para abrir la página con un preset predeterminado, puede ser un ID de preset o una cadena JSON 
 */

openPage(pagetypeid: string, objectname: string, objectwhere: string, defaults: string | flexygo.nav.PageDefaults, targetid: string, excludeHist?: boolean, triggerElement?: JQuery, isClone?: boolean, previousHist?: flexygo.nav.FlexygoHistory, presets?: string ): void
```

## Open page by name

Podemos abrir una página específica utilizando el método **flexygo.nav.openPageName** e indicando el nombre de la página y la entidad o colección.

```ts
 /**
 * Abre una página por su nombre
 * @method openPageName
 * @param {string} pagename - Identificador de la página
 * @param {string} objectname - Nombre de la colección o entidad
 * @param {string} objectwhere - Dónde de la colección o entidad
 * @param {string} defaults - Valores predeterminados que se agregarán a la página
 * @param {string} targetid - Objetivo para abrir la ventana
 * @param {boolean} excludeHist - Verdadero para no almacenar en el historial
 * @param {JQuery} triggerElement - Elemento relativo para abrir la página
 * @param {boolean} isClone - Solo para abrir página con opciones de clonación
 * @param {flexygo.nav.FlexygoHistory} previousHist - Historial de la página anterior
 * @param {string} presets - Utilizado para abrir la página con un preset predeterminado, puede ser un ID de preset o una cadena JSON 
 */

openPageName(pagename: string, objectname: string, objectwhere: string, defaults: string, targetid: string, excludeHist: boolean, triggerElement?: JQuery, isClone?: boolean, previousHist?: flexygo.nav.FlexygoHistory, presets?: string): void 
```

## Ejecutar proceso

Podemos ejecutar cualquier proceso en el repositorio de flexygo utilizando el método **flexygo.nav.executeProcess** e indicando el proceso y la entidad o colección.

```ts
/**
 * Ejecuta un proceso, abriendo su página de parámetros si es necesario
 * @method execProcess
 * @param {string} processname - Identificador del proceso
 * @param {string} objectname - Nombre de la colección o entidad
 * @param {string} objectwhere - Dónde de la colección o entidad
 * @param {string} defaults - Valores predeterminados que se agregarán al proceso
 * @param {any} processparams - Array de parámetros del proceso
 * @param {string} targetid - Objetivo para abrir la ventana
 * @param {boolean} excludeHist - Verdadero para no almacenar en el historial
 * @param {JQuery} triggerElement - Elemento relativo para abrir la página
 * @param {function} callBack - callback que se llamará después de ejecutar
* @param {boolean} showprogress - falso para ocultar el indicador de progreso
 */

execProcess(processname: string, objectname: string, objectwhere: string, defaults: string | flexygo.nav.PageDefaults, processparams: any, targetid: string, excludeHist: boolean, triggerElement: JQuery, callBack?: any, showProgress?: boolean):void
```

##### Ejemplo de ejecución de un proceso con parámetros

En este ejemplo traduciremos el contenido de la propiedad MyTextbox en el formulario de edición actual utilizando el proceso TranslateTextTo.

```js
let module = $(triggerElement).closest('flx-module')[0];
let TextBox =$(module).find("[Property='MyTextbox']")[0];
let qs= TextBox.getValue();
if(qs!=null){
	flexygo.nav.execProcess('TranslateTextTo','sysProcess','',null,[{"key":'Text',"value":qs},{"key":'Lang',"value":'es'}],'current',false,$(this),function (ret){TextBox.setValue(ret.JSCode)})
}
```

## Acciones de objeto

Podemos crear cualquier entidad o colección y ejecutar acciones de objeto como leer, insertar, actualizar, eliminar utilizando el método **flexygo.obj.Entity**.

```js
/**
* Biblioteca para acceder a objetos y colecciones de entidad desde JS.
*
* @class flexygo.Entity
* @constructor
* @param {string} objectName - El nombre del objeto.
* @param {string} [objectWhere] - Condición donde (solo si el objeto no es nuevo).
* @return {object} - Objeto de entidad.
*/

var e = flexygo.obj.Entity (objectName, objectWhere);

/* leer información del objeto */
e.read();
/* insertar */
e.data.PropertyName=newValue;
e.insert();
/* actualizar */
e['PropertyName']=newValue;
e.update();
/* eliminar */
e.delete();
```