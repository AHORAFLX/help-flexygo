# Azure AD Integration

Azure is a cloud computing service operated by Microsoft for application management via Microsoft-managed data centers. **flexygo** provides the integration with Azure Active Directory. This way all users could have the access to your **flexygo** application entering via personal Microsoft Azure account.

Obtain an SSL certificate from a certificate authority for a successful **flexygo** integration with Azure AD.
{: .flx-warning-card }

## Keys

You need to have certain keys such as **Tenant Id**, **Client Id** and **Client Secret Id** to be able to run the integration process.

1.  Login your [Microsoft Azure](https://portal.azure.com/) account where you'll be able to create all required keys.
2.  Open Azure Active Directory, in the left navigation panel go to App Registration -> Add new app.
3.  Finally, generate new Client Secret Id: left navigation panel -> Certificates and Secrets -> Add new Client Secret.

Make sure you have neccesary permitions to create and manage applications.
{: .flx-warning-card }

|     |     |
| --- | --- |
| Tenant Id, Client Id |     |
| Client Secret Id |     |

## Platform configurations

For the correct functionality of Azure AD Integration additional configuration is required: redirect URL, logout URL. Also you can decide if you want to restrict use of your application to accounts in your organizational directory only (single tenant) or accounts in any organizational directorty (multitenant). [More info](https://docs.microsoft.com/en-us/azure/active-directory/develop/single-and-multi-tenant-apps)

![Redirect URL, logout URL](/assets/images/AzureAdIntegration/URL.png "Image 1. Redirect URL, logout URL")

## Users assignment

In the case you want to restrict user's access to your **flexygo** application, you can switch the **assignment required** option to **yes**: then users must first be assigned this application before being able to access it. To assign users, enter to Enterprise applications -> choose your **flexygo** app -> Users and groups

![Users](/assets/images/AzureAdIntegration/Users.png "Image 2. Users")

## Run process

Once you have obtained all required keys and established redirect and logout URLs, you can run the following process:

<flx-navbutton class="button" type="execprocess" processname="pNet_AzureIntegration" showprogress="false">
    Generate Azure AD Integration
</flx-navbutton>

## Settings

You can enable the registration of new users in your **flexygo** application using their Azure account. Set the following configurations in Admin Area -> Environment -> Settings -> Security or by clicking here

Once the user pass through registration, it activates Register Process called "NewUserFromAAD" which create a new user, applying values of profile, role, language by default and sends email confirmation. These parameters can be modified by Admin.

|     |     |
| --- | --- |
| aadRegistrationEnabled | Allow registration in your app using Azure Microsoft. Values: true/false |
| aadRegistrationDefaultProfile | ProfileName of new user by default |
| aadRegistrationDefaultRole | Role Id of new user by default |
| aadDefaultCultureId | Default language for new users |

#### Tenant Id, Client Id

![](/assets/images/AzureAdIntegration/ClientTenant.png)

#### Client Secret Id

![](/assets/images/AzureAdIntegration/ClientSecret.png)