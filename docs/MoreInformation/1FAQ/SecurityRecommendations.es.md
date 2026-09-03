# Recomendaciones de seguridad

La seguridad en Flexygo se basa en tres pasos fundamentales.

## 1er paso: HTTPS y certificados SSL

La clave de la mayoría de las cosas pasa por tener una dirección segura para la aplicación (`https://`), mediante la instalación de un certificado de pago para el dominio. Esto permite:

* Desactivar HTTP y usar solo HTTPS
* Encriptar las comunicaciones entre cliente y servidor
* Proteger contraseñas y documentos compartidos

## 2º paso: gestión de contraseñas

Flexygo implementa mecanismos de protección automática, incluyendo el bloqueo tras cinco intentos fallidos y la configuración de parámetros de complejidad.

## 3er paso: auditoría de seguridad

Para clientes con requerimientos especiales se recomienda una auditoría completa de: firewalls, comunicaciones, versiones del sistema operativo y antivirus.

## Medidas de seguridad integradas en Flexygo

* Análisis estático de código
* Security testing (hacking ético)
* Bloqueo heurístico mediante listas blancas/grises
* Sentinel Agent para auditoría forense
* Despliegue continuo
* Registro de auditoría de acciones de usuarios

!!! warning "Importante"
    Nunca deberás garantizar a tu cliente que tu sistema es 100 % seguro, ya que no lo es ni con Flexygo ni con nada.

## Véase también

* [Guía de Configuración Segura](../4Security/SecureConfigurationGuide.md)
* [Requisitos mínimos](MinimumRequirements.md)
