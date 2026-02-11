# Cl@ve Authentication { .fh-title-with-image }

![Cl@ve](../docs_assets/images/Clave/clave-icon.svg){ .fh-image-of-title }

We are pleased to share an exciting update to our **flexygo** web application: the introduction of Cl@ve as an authentication method. This addition aims to streamline user access, bolster security, and significantly enhance the overall user experience

## What is Cl@ve?

Cl@ve stands for "Identificación Electrónica para las Administraciones Públicas" (Electronic Identification for Public Administrations) and serves as a single gateway for citizens to authenticate themselves across various governmental platforms. It supports multiple authentication methods, including Cl@ve PIN, Cl@ve Permanente, electronic certificates, and DNIe (Electronic National Identity Document).

![Cl@ve Authentication](../docs_assets/images/Clave/clave_preview.png "Image 1. Cl@ve Authentication")

## How it Works

To begin using this new authentication method, the first step is to register as a Service Provider (SP) with Cl@ve. This registration is essential because it involves requesting sensitive citizen information, and Cl@ve must validate that you meet the necessary requirements to access and use this data. You can find the required documentation in the [Cl@ve Directory](https://docs.flexygo.com/readme/utils/Solicitud_alta_SP.zip "Cl@ve Directory").

Following the successful registration as an SP with Cl@ve and the definition of the electronic certificate to validate SAML requests (information available in the provided documentation), we can proceed with the activation of Cl@ve authentication:

<flx-navbutton class="button" type="execprocess" processname="pNet_EnableClaveAuth" showprogress="false">
    Generate Cl@ve Integration
</flx-navbutton>

## Settings

You can enable the registration of new users in your **flexygo** application using their Cl@ve account. Set the following configurations in Admin Area -> Environment -> Settings -> Security or by clicking <flx-navbutton class="link" type="execprocess" processname="sysEditSettings" objectname="sysSettings" objectwhere="(Settings.[SettingName] in ('aadRegistrationEnabled','aadRegistrationDefaultProfile','aadRegistrationDefaultRole','aadDefaultCultureId'))" showprogress="false">here</flx-navbutton>

Once the user pass through registration, it activates Register Process called "NewUserFromClave" which create a new user, applying values of profile, role, language by default. These parameters can be modified by Admin.

| Parameter | Description |
| --- | --- |
| aadRegistrationEnabled | Allow registration in your app using cl@ve. Values: true/false |
| aadRegistrationDefaultProfile | ProfileName of new user by default |
| aadRegistrationDefaultRole | Role Id of new user by default |
| aadDefaultCultureId | Default language for new users |