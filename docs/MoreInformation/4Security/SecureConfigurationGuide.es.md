# Guía de Configuración Segura

## 1. Introducción

El objetivo de este documento es establecer las recomendaciones y buenas prácticas para realizar una instalación **segura de Flexygo** sobre un entorno IIS, minimizando vulnerabilidades y garantizando la protección de los datos y servicios asociados.

## 2. Arquitectura recomendada

* **Servidor web (IIS)**: dedicado exclusivamente a Flexygo y los servicios web asociados.
* **Servidor de base de datos (SQL Server)**: instancia separada del IIS, **no expuesta al exterior**. Solo debe ser accesible desde la red interna o por VPN.
* **Servidor de ficheros (NAS)**: repositorio externo al website donde se almacenarán los documentos gestionados por Flexygo.

## 3. Instalación segura en IIS

### 3.1. Ubicación de la instalación

* Instalar Flexygo **en una carpeta independiente** de la estructura estándar del IIS (`C:\inetpub\wwwroot`).
    * Ejemplo recomendado: `D:\WebApps\Flexygo`
* Asignar permisos **mínimos necesarios** a la cuenta del Application Pool (Lectura, Ejecución).

### 3.2. Configuración de seguridad en IIS

* **Deshabilitar directorios de listado** (Directory Browsing).
* **Eliminar encabezados de servidor**: en `web.config` o mediante módulo URL Rewrite:

    ```xml
    <outboundRules>
      <rule name="Remove Server Header">
        <match serverVariable="RESPONSE_Server" pattern=".+" />
        <action type="Rewrite" value="" />
      </rule>
    </outboundRules>
    ```

* Activar **Request Filtering** para bloquear extensiones no necesarias (`.cmd`, `.bat`, `.exe`, `.dll`).

## 4. Gestión documental externa

* Configurar Flexygo para que el almacenamiento documental **no resida dentro del website IIS**.
* Utilizar una **NAS o servidor de archivos** dedicado, accesible solo desde la red interna.
* Implementar autenticación SMB o NFS segura.
* Controlar accesos mediante permisos NTFS o ACLs específicos.

## 5. Base de datos (SQL Server)

* Instalar en **servidor independiente**, preferiblemente en una subred interna sin acceso directo a Internet.
* Deshabilitar autenticación "sa" y habilitar **autenticación Windows** cuando sea posible, y crear un usuario dedicado a Flexygo.
* Limitar los puertos de acceso mediante firewall interno.

## 6. HTTPS y certificados SSL/TLS

* Instalar un **certificado SSL válido** emitido por una CA confiable.
* **Forzar HTTPS** en todo el sitio (redirección 301 desde HTTP).
* Configurar TLS 1.2 o superior, deshabilitando SSL 2.0, SSL 3.0 y TLS 1.0.

## 7. Hardening adicional

* **Actualizar IIS, .NET, Windows y Flexygo** regularmente.
* Implementar **firewall de aplicaciones web (WAF)** si está disponible (ej. ModSecurity o Azure WAF).
* Activar **logging detallado** (IIS Logs + Event Viewer + logs de Flexygo).
* Implementar **copias de seguridad automáticas** (web, NAS y base de datos).
* Habilitar **monitorización y alertas** ante accesos sospechosos.
* Habilitar **MFA** del propio Flexygo o del sistema de autenticación delegado.
