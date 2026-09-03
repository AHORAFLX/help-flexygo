# Guía de Configuración Segura: Flexygo

## Resumen ejecutivo

Este documento presenta recomendaciones para instalar Flexygo de forma segura en entornos IIS, minimizando vulnerabilidades y protegiendo datos y servicios asociados.

## 1. Introducción

El objetivo es establecer buenas prácticas para una implementación segura de Flexygo sobre infraestructura IIS.

## 2. Arquitectura recomendada

La estructura sugerida incluye tres componentes separados:

* **Servidor web (IIS)**: dedicado exclusivamente a Flexygo y servicios web asociados
* **Servidor de base de datos (SQL Server)**: instancia independiente del IIS, sin exposición externa, accesible solo desde red interna o VPN
* **Servidor de ficheros (NAS)**: repositorio externo para documentos gestionados por la plataforma

## 3. Instalación segura en IIS

### 3.1 Ubicación de la instalación

* Instalar en carpeta independiente fuera de la estructura estándar (ejemplo: `D:\WebApps\Flexygo`)
* Asignar permisos mínimos necesarios a la cuenta del Application Pool

### 3.2 Configuración de seguridad en IIS

Medidas clave:

* Deshabilitar Directory Browsing
* Eliminar encabezados de servidor mediante URL Rewrite
* Activar Request Filtering para bloquear extensiones innecesarias (.cmd, .bat, .exe, .dll)

## 4. Gestión documental externa

* El almacenamiento no debe residir dentro del website de IIS
* Utilizar NAS o servidor dedicado accesible solo desde red interna
* Implementar autenticación SMB o NFS segura
* Controlar accesos mediante permisos NTFS o ACLs

## 5. Base de datos (SQL Server)

* Instalar en servidor independiente en subred interna sin acceso directo a Internet
* Deshabilitar autenticación "sa" y habilitar autenticación Windows
* Crear un usuario dedicado para Flexygo
* Limitar puertos de acceso mediante firewall interno

## 6. HTTPS y certificados SSL/TLS

* Instalar un certificado SSL válido de una CA confiable
* Forzar HTTPS en todo el sitio mediante redirección 301
* Configurar TLS 1.2 o superior, deshabilitando versiones antiguas (SSL 2.0, SSL 3.0, TLS 1.0)

## 7. Hardening adicional

Prácticas de fortalecimiento:

* Actualizar regularmente IIS, .NET, Windows y Flexygo
* Implementar un firewall de aplicaciones web (WAF)
* Activar logging detallado (IIS Logs, Event Viewer, logs de Flexygo)
* Implementar copias de seguridad automáticas
* Habilitar monitorización y alertas ante accesos sospechosos
* Habilitar MFA en Flexygo o en el sistema de autenticación delegado
