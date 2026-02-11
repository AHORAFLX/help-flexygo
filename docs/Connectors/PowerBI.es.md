# Integración con Power BI { .fh-title-with-image }

![](../docs_assets/images/PowerBI/PowerBiLogo.png){ .fh-image-of-title }

Power BI es un servicio de análisis de datos de Microsoft que ofrece visualizaciones interactivas y capacidades de inteligencia empresarial (BI) con una interfaz lo suficientemente sencilla como para que los usuarios finales puedan crear sus propios informes y paneles.  
**flexygo** permite utilizar Microsoft Power BI para incrustar informes dentro de tus páginas.

## Configuración

Todos los ajustes de Power BI deben establecerse antes de poder utilizar Microsoft Power BI.  
Puedes usar la opción Power BI Integration en el menú de integraciones para generar la configuración vacía.  
Después, debes completar cada parámetro:

* **PowerBIApiUrl**: https://api.powerbi.com  
* **PowerBIApplicationId**: Application ID  
* **PowerBIApplicationSecret**: Application ID Secret  
* **PowerBIAuthenticationType**: MasterUser  
* **PowerBIAuthorityUrl**: https://login.microsoftonline.com/common/  
* **PowerBIPassword**: Password  
* **PowerBIResourceUrl**: https://analysis.windows.net/powerbi/api  
* **PowerBITenant**: Tenant Id  
* **PowerBIUsername**: Username  
* **PowerBIWorkspaceId**: Workspace Id  

Para generar la configuración de Power BI, haz clic en: <flx-navbutton class="link" type="execprocess" processname="pNet_PowerBIIntegration" showprogress="false">Generate Power BI settings</flx-navbutton>

## Incorporación de un informe Power BI

Accede a la sección **Reports** e incorpora tu informe de Power BI introduciendo el **ReportId** en el campo *report path*.

## Filtrar Power BI desde páginas flexygo

Microsoft solo permite pasar filtros a informes Power BI embebidos.

Para lograrlo, debemos añadir un nuevo **Role** al documento BI.  
Imaginemos que vamos a pasar el *ProviderId*.  
Creamos el rol "Provider" y asociamos la condición: `[ProviderId] = value(username())`

![Power BI](../docs_assets/images/PowerBI/powerbi1.png "Image 1. Power BI")

Luego, debemos indicar el role y el username desde nuestra aplicación para que el filtro se aplique automáticamente.  
Para ello se utilizan dos campos de configuración en el registro del informe dentro de flexygo:

* **Filter sentence:**

```sql
SELECT {{currentReference}} AS filter
```

* **Role sentence:**

```sql
SELECT 'Provider' AS Role
```

Para que esto funcione, **el informe no puede publicarse directamente**.
Es necesario usar **PowerBI Embedded**, un recurso de Azure disponible en Azure Marketplace (Imagen 2).
{: .flx-warning-card }

![Azure Marketplace](../docs_assets/images/PowerBI/powerbi2.png "Image 2. Azure Marketplace")

## Componente web de Power BI

Una vez configurado todo, ya puedes añadir un módulo HTML a tu página e incluir el componente web de Power BI:

```html
<flx-powerbi reportname="your report name"></flx-powerbi>
```