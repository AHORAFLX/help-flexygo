# Ciclo de Vida de Desarrollo Seguro (SDLC)

## 1. Introducción

El proyecto Flexygo implementa un Ciclo de Vida de Desarrollo Seguro formalmente estructurado, integrando prácticas de seguridad, control de calidad y trazabilidad en cada fase del proceso. El sistema de integración continua (CI/CD) documenta y ejecuta más de 30 pasos automatizados que aseguran la integridad, disponibilidad y seguridad del software.

## 2. Flujo general del SDLC aplicado

El proceso se estructura en etapas secuenciales con dependencias condicionadas al éxito de los pasos anteriores:

1. Preparación y limpieza de entorno
2. Compilación controlada de código
3. Gestión segura de dependencias
4. Validación y pruebas unitarias
5. Análisis de calidad y cobertura
6. Generación y publicación de artefactos
7. Documentación técnica automatizada
8. Respaldo y conservación de versiones
9. Cierre seguro de configuración

## 3. Controles de seguridad y procedimientos implementados

### 3.1 Preparación del entorno (pasos 1–2)

* **Limpieza de cadenas de conexión**: un script PowerShell elimina o enmascara credenciales en `web.config` antes de compilar
* **Backup del código fuente**: respaldo automatizado previo a la compilación

### 3.2 Compilación y gestión de dependencias (pasos 3–6)

* **Restauración de paquetes NuGet**: desde fuentes controladas con versiones verificadas y bloqueadas
* **Compilación de la solución**: mediante MSBuild con trazabilidad completa
* **Publicación de configuraciones**: mediante SQLPACKAGE con validación condicionada

### 3.3 Pruebas, validación y auditoría técnica (pasos 11–14, 23–25, 30)

* **Pruebas unitarias**: Visual Studio Test (VSTest) para los módulos principales
* **Cobertura de código**: JetBrains dotCover para métricas de validación
* **Análisis estático**: SonarQube audita módulos TypeScript, T-SQL y VB en busca de vulnerabilidades, malas prácticas o código inseguro

![](../../docs_assets/images/SecureSDLC/1.png)
![](../../docs_assets/images/SecureSDLC/2.png)

### 3.4 Generación de artefactos y documentación (pasos 16–22)

* **Changelog automatizado**: mediante PowerShell para trazabilidad entre versiones
* **Empaquetado seguro**: ZIP APP, ZIP DOCU, paquete NuGet con versionado y firma digital
* **Documentación técnica automatizada**:
    * JavaScript: YUIDoc
    * VB: GhostDoc
    * SQL: TeamCity SQLDoc

### 3.5 Respaldo y control de configuración (pasos 26 y 12–15)

* Copia de respaldo post-publicación
* Gestión de archivos de configuración para evitar la exposición de credenciales

### 3.6 Escaneo y validación de seguridad dinámica (SecDevOps)

El pipeline SecDevOps incluye:

1. Descargar el instalable
2. Instalar Flexygo en un entorno aislado
3. Ejecutar pruebas de seguridad automatizadas (script Python `flexygoscan.py`) que incluyen validaciones de autenticación, inyección SQL, XSS y manipulación de sesión
4. Desinstalar Flexygo
5. Eliminar la base de datos de pruebas

![](../../docs_assets/images/SecureSDLC/3.png)

### 3.7 Publicación de artefactos y control de distribución

* Publicación en repositorio corporativo (nuget.ahorabh.com) y oficial (nuget.org)
* Marcado de artefactos como "pinned" para bloquear su eliminación accidental

## 4. Auditorías y trazabilidad

Cada etapa se registra en el sistema de integración continua, permitiendo auditar tiempos de ejecución, resultados de pruebas, logs, versiones y cambios de configuración. El pipeline impide el avance a la siguiente fase si un paso no se ejecuta correctamente.

## 5. Conclusiones

El modelo incorpora mecanismos de seguridad, control y trazabilidad alineados con estándares internacionales como OWASP SAMM, ISO/IEC 27034 y NIST SP 800-218 (SSDF), aportando garantías de integridad, trazabilidad y seguridad del software producido.
