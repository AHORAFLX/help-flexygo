# Power BI Integration { .flx-title-with-image }

![](/docs_assets/images/PowerBI/PowerBiLogo.png){ .flx-image-of-title }

Power BI is a Microsoft data analysis service aimed at providing interactive visualizations and business intelligence (BI) capabilities with an interface simple enough for end users to create their own reports themselves and panels. **flexygo** enables you to use Microsot Power BI to embed reports.

## Settings

All Power BI settings must be established before we can use Microsoft Power BI. You can use the Power BI integration option in your integration menu to generate the empty settings. Then you should fill out each setting.

*   **PowerBIApiUrl**: https://api.powerbi.com
*   **PowerBIApplicationId**: Application ID Secret
*   **PowerBIApplicationSecret**: Application ID Secret
*   **PowerBIAuthenticationType**: MasterUser
*   **PowerBIAuthorityUrl**: https://login.microsoftonline.com/common/
*   **PowerBIPassword**: Password
*   **PowerBIResourceUrl**: https://analysis.windows.net/powerbi/api
*   **PowerBITenant**: Tenant Id
*   **PowerBIUsername**: Username
*   **PowerBIWorkspaceId**: Workspace Id

To generate Power BI setting click on <flx-navbutton class="link" type="execprocess" processname="pNet_PowerBIIntegration" showprogress="false">Generate Power BI settings</flx-navbutton>

## Incorporating Power BI report

Access to the Reports section and incorporate your Power BI report introducing th ReportId in the report path field.

## Filtering Power BI from flexygo pages

Microsoft only allows you to pass filters with embedded BI.

To achieve this we must add a new Role to our BI document, imagine that we are going to pass the provider id. We create the provider role and associate the condition _\[ProviderId\] = value(username())_

![Power BI](/docs_assets/images/PowerBI/powerbi1.png "Image 1. Power BI")

Now we must be able to pass the role and the username from our application, so that it automatically filters the field, for this we use the two fields that are in the report registration in flexygo:

*   Filter sentence: 
```sql
SELECT {{currentReference}} AS filter
```
*   Role Sentence:
```sql
SELECT 'Provider' AS Role
```

To make it working, the report cannot be published directly, so you need the PowerBI Embedded, which is an Azure resource that is within the Azure Marketplace (Image 2).
{: .flx-warning-card }

![Azure Marketplace](/docs_assets/images/PowerBI/powerbi2.png "Image 2. Azure Marketplace")

## Power BI web component

Now you are ready to add a HTML module to your page and include the Power BI web component 
```html
<flx-powerbi reportname="your report name"><flx-powerbi>
```