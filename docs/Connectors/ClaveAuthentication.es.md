# Autenticación Cl@ve { .flx-title-with-image }

![Cl@ve](../docs_assets/images/Clave/clave-icon.svg){ .fh-image-of-title }

Nos complace anunciar una nueva actualización en nuestra aplicación web **flexygo**: la incorporación de **Cl@ve** como método de autenticación. Esta mejora tiene como objetivo agilizar el acceso de los usuarios, reforzar la seguridad y mejorar significativamente la experiencia general de uso.

## ¿Qué es Cl@ve?

Cl@ve significa **“Identificación Electrónica para las Administraciones Públicas”**, y actúa como una puerta de acceso única para que los ciudadanos puedan autenticarse en diversas plataformas gubernamentales.  
Permite varios métodos de autenticación, entre ellos:

- Cl@ve PIN  
- Cl@ve Permanente  
- Certificados electrónicos  
- DNIe (Documento Nacional de Identidad electrónico)

![Cl@ve Authentication](../docs_assets/images/Clave/clave_preview.png "Image 1. Cl@ve Authentication")

## Cómo funciona

Para comenzar a utilizar este nuevo método de autenticación, el primer paso es **registrarse como Proveedor de Servicios (SP)** en la plataforma Cl@ve.  
Este registro es obligatorio ya que solicitarás información sensible de los ciudadanos, y Cl@ve debe validar que cumples los requisitos necesarios para acceder y usar dichos datos.

La documentación requerida se puede encontrar en el [Directorio de Cl@ve](https://docs.flexygo.com/readme/utils/Solicitud_alta_SP.zip "Cl@ve Directory").

Tras completar el registro como SP y definir el certificado electrónico para validar las solicitudes SAML (información incluida en la documentación indicada), puedes proceder a activar la autenticación mediante Cl@ve:

<flx-navbutton class="button" type="execprocess" processname="pNet_EnableClaveAuth" showprogress="false">
    Generar Integración Cl@ve
</flx-navbutton>

## Configuración

Puedes habilitar el registro de nuevos usuarios en tu aplicación **flexygo** utilizando su cuenta Cl@ve.  
Configura los siguientes parámetros en: **Admin Area → Environment → Settings → Security** o haciendo clic en: <flx-navbutton class="link" type="execprocess" processname="sysEditSettings" objectname="sysSettings" objectwhere="(Settings.[SettingName] in ('aadRegistrationEnabled','aadRegistrationDefaultProfile','aadRegistrationDefaultRole','aadDefaultCultureId'))" showprogress="false">aquí</flx-navbutton>

Una vez que el usuario completa el registro mediante Cl@ve, se ejecuta el proceso **NewUserFromClave**, que crea un nuevo usuario aplicando los valores de perfil, rol y lenguaje por defecto.  
Estos parámetros pueden ser modificados por el Administrador.

| Parámetro | Descripción |
| --- | --- |
| **aadRegistrationEnabled** | Permite el registro en la app usando Cl@ve. Valores: true/false |
| **aadRegistrationDefaultProfile** | Nombre del perfil asignado por defecto al nuevo usuario |
| **aadRegistrationDefaultRole** | Id del rol asignado por defecto al nuevo usuario |
| **aadDefaultCultureId** | Idioma por defecto para nuevos usuarios |