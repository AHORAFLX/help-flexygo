#  Flexygo MFA

New in flexygo! Implementation of Multi-Factor Authentication (MFA) system

What is MFA and why is it important? MFA adds an additional layer of security by requiring users to verify their identity using two or more different methods before accessing their accounts. This measure significantly reduces the risk of unauthorized access, thus protecting your data and the integrity of your information.

## Verification options

With flexygo MFA, **administrators** have the freedom to choose between two verification methods: **email and SMS**. This allows them to select the option that best suits their organization's needs and resources.

Remember that to use **MFA by SMS** you must have [Abh SMS integration](/Ahora%20Business%20Hub/AbhSms).
{: .flx-warning-card }

## Granular control

Furthermore, at flexygo we understand that not all users require the same level of security. Therefore, we have incorporated the ability to define which **roles or users** will have two-step verification enabled. This allows for accurate and efficient management of application security.

## How to configure it?

First of all we have 2 new settings:

![](/docs_assets/images/MFA/mfa_settings.png "Image 1. MFA Settings")

*   **MFA\_cookie\_duration**: In this section you can define the number of days that the "Trust this device?
*   **MFA\_Type**: In this section the administrator can define which type of MFA will be used.

After configuring these parameters as we see fit, we can define at user or role level to whom to activate MFA.

![](/docs_assets/images/MFA/mfa_user.png "Image 2. MFA in user")

![](/docs_assets/images/MFA/mfa_role.png "Image 3. MFA in role")
  
Finally, if we try to log in with the user that has the MFA active, we will see the following screen to enter our security code

![](/docs_assets/images/MFA/mfa_screen.png "Image 4. MFA Screen")