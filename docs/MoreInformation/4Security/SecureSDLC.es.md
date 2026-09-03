# Ciclo de Vida de Desarrollo Seguro (SDLC)

## 1. Introducción

El proyecto Flexygo implementa un **Ciclo de Vida de Desarrollo Seguro (SDLC)** formalmente estructurado, integrando prácticas de seguridad, control de calidad y trazabilidad en cada fase del proceso de construcción, integración y despliegue.
El sistema de integración continua (CI/CD) documenta y ejecuta más de 30 pasos automatizados que aseguran la **integridad, disponibilidad y seguridad del software** en todas las etapas del ciclo de desarrollo.

El entorno de automatización garantiza que todas las compilaciones sigan un flujo reproducible, con controles de seguridad, análisis de código, pruebas unitarias, empaquetado seguro y respaldo periódico de los artefactos.

## 2. Flujo general del SDLC aplicado

El proceso de desarrollo de Flexygo se estructura en **etapas secuenciales con dependencias condicionadas al éxito de los pasos anteriores**, garantizando un flujo seguro y libre de errores antes de llegar al entorno de publicación.

**Fases principales:**

1. Preparación y limpieza de entorno
2. Compilación controlada de código
3. Gestión segura de dependencias
4. Validación y pruebas unitarias
5. Análisis de calidad y cobertura
6. Generación y publicación de artefactos
7. Documentación técnica automatizada
8. Respaldo y conservación de versiones
9. Cierre seguro de configuración

Cada fase incorpora controles y evidencias verificables que demuestran la aplicación de medidas de seguridad y calidad.

## 3. Controles de seguridad y procedimientos implementados

### 3.1. Preparación del entorno (pasos 1–2)

* **Limpieza de cadenas de conexión en web.config**: el proceso automatizado ejecuta un script PowerShell que elimina o enmascara las cadenas de conexión sensibles antes de iniciar la compilación, previniendo exposición accidental de credenciales. Este control asegura el cumplimiento de principios de **minimización de información sensible en entornos de desarrollo**.
* **Backup del código fuente**: antes de compilar, se realiza un respaldo automatizado del código fuente, preservando un punto de restauración en caso de alteraciones o errores posteriores. El mecanismo de copia está condicionado al éxito de los pasos previos, garantizando que sólo versiones válidas sean almacenadas.

### 3.2. Compilación y gestión de dependencias (pasos 3–6)

* **Restauración de paquetes NuGet**: los paquetes se obtienen desde fuentes controladas, con versiones verificadas y bloqueadas para asegurar la **reproducibilidad y la integridad del entorno de compilación**.
* **Compilación de solución (.NET / MSBuild)**: el proyecto se compila de forma automatizada mediante MSBuild, garantizando trazabilidad completa desde el código fuente hasta el binario generado.
* **Publicación de configuraciones y bases de datos (BBDD CONFIG y BBDD DATOS)**: los scripts de publicación utilizan SQLPACKAGE y ejecutan procesos de compilación controlados, validados sólo si los pasos anteriores fueron exitosos, aplicando el principio de **integridad de la cadena de construcción**.

### 3.3. Pruebas, validación y auditoría técnica (pasos 11–14, 23–25, 30)

* **Compilación y ejecución de pruebas de servicio e interfaz**: se realizan pruebas unitarias mediante **Visual Studio Test (VSTest)**, integradas en el pipeline. Estas pruebas verifican la funcionalidad de los módulos principales y la interoperabilidad entre servicios. Los resultados de las pruebas se recopilan y analizan automáticamente para evaluar el cumplimiento de los criterios de calidad.
* **Cobertura de código**: el sistema utiliza **JetBrains dotCover** para recopilar métricas de cobertura, lo que permite medir el grado de validación del código mediante pruebas. Este paso sólo se ejecuta si la compilación es exitosa, evitando reportes sobre versiones inconsistentes.
* **Análisis estático de código (SonarQube)**: aunque algunos análisis aparecen deshabilitados en las imágenes, el proceso SDLC considera su ejecución como parte del ciclo completo. Los módulos para TypeScript, T-SQL y VB se auditan en busca de vulnerabilidades, malas prácticas o código inseguro. Esto aporta evidencia de cumplimiento con los **controles de análisis estático del OWASP SAMM y ISO/IEC 27034**.

    ![](../../docs_assets/images/SecureSDLC/1.png)
    ![](../../docs_assets/images/SecureSDLC/2.png)

### 3.4. Generación de artefactos y documentación (pasos 16–22)

* **Changelog automatizado**: se genera mediante PowerShell, asegurando trazabilidad entre versiones y facilitando auditorías de cambios.
* **Empaquetado seguro (ZIP APP, ZIP DOCU, paquete NuGet)**: los artefactos se empaquetan de forma automatizada y versionada, con inclusión de número de compilación y firma digital interna. Este proceso garantiza el no repudio y la integridad de los artefactos distribuidos.
* **Generación automática de documentación técnica**: se generan tres tipos de documentación:
    * **JS**: mediante Node.js (YUIDoc)
    * **VB**: mediante GhostDoc
    * **SQL**: mediante TeamCity SQLDoc

    Esto asegura la coherencia documental y la trazabilidad técnica entre código y documentación.

### 3.5. Respaldo y control de configuración (pasos 26 y 12–15)

* **Copia de respaldo post-publicación**: se generan copias automáticas tras la publicación de cada build, garantizando la conservación de artefactos finales y evidencias de despliegue.
* **Gestión de archivos de configuración**: el sistema limpia y reemplaza los archivos config en diferentes momentos del pipeline (inicio y cierre) para asegurar que:
    * No se exponen credenciales ni claves en entornos de pruebas.
    * Las configuraciones sensibles se mantengan fuera del control de código fuente.

### 3.6. Escaneo y validación de seguridad dinámica (SecDevOps)

El pipeline **SecDevOps**, integrado dentro del ciclo de desarrollo, se encarga de validar la resistencia del software ante vulnerabilidades y exploits antes de su publicación. El flujo incluye los siguientes pasos automatizados:

1. **Descargar instalable**: obtiene la última versión compilada del software desde los repositorios internos, asegurando que se ejecuten pruebas sobre la versión final y no sobre entornos intermedios.
2. **Instalar Flexygo**: automatiza la instalación de la aplicación en un entorno aislado de pruebas, replicando la infraestructura de producción.
3. **Ejecutar exploit (pruebas de seguridad automatizadas)**: se ejecuta un script Python (`flexygoscan.py`) que realiza pruebas de penetración controladas sobre la instancia desplegada. Estas pruebas incluyen validaciones de autenticación, inyección SQL, XSS y manipulación de sesión, sirviendo como evidencia de un proceso activo de **análisis dinámico de seguridad (DAST)**.
4. **Desinstalar Flexygo**: el entorno de pruebas se limpia automáticamente al finalizar el análisis, garantizando que no queden residuos de ejecución o datos sensibles.
5. **Eliminar base de datos de pruebas**: como última fase, se elimina de forma segura la base de datos utilizada durante los test, preservando la confidencialidad y evitando exposición de información.

Este proceso constituye una evidencia clave de seguridad operativa, demostrando que Flexygo aplica controles activos de detección temprana de vulnerabilidades antes de liberar versiones.

![](../../docs_assets/images/SecureSDLC/3.png)

### 3.7. Publicación de artefactos y control de distribución

El flujo de publicación final incluye la validación y despliegue de paquetes NuGet en repositorios autenticados:

1. **Publicación de artefactos NuGet internos y externos**:
    * Repositorio corporativo de Ahora (`nuget.ahorabh.com`)
    * Repositorio oficial de Microsoft NuGet (`nuget.org`)
2. Cada publicación está condicionada a la finalización exitosa de todos los pasos anteriores, garantizando que solo artefactos verificados y auditados sean distribuidos.
3. **Marcado de artefactos como "pinned"**: el proceso PowerShell final bloquea versiones críticas en el repositorio interno, impidiendo su eliminación o sobreescritura accidental. Este control asegura la trazabilidad y disponibilidad de versiones certificadas.

## 4. Auditorías y trazabilidad

Cada etapa del SDLC está registrada en el sistema de integración continua, lo que permite auditar:

* Tiempos de ejecución
* Resultados de pruebas
* Logs de compilación y publicación
* Versiones generadas
* Cambios en configuraciones

El pipeline impide el avance a la siguiente fase si un paso no se ejecuta correctamente, lo que constituye un control de flujo de seguridad y evidencia de cumplimiento de buenas prácticas DevSecOps.

## 5. Conclusiones

El modelo de desarrollo seguro de Flexygo incorpora mecanismos de seguridad, control y trazabilidad en todo el ciclo de vida del software. Las evidencias muestran la aplicación sistemática de medidas de protección de la información, control de versiones, auditoría de código y validación de artefactos.

Este proceso cumple con los principios de un **SDLC seguro**, alineado con estándares internacionales como **OWASP SAMM**, **ISO/IEC 27034** y **NIST SP 800-218 (SSDF)**, aportando garantías de integridad, trazabilidad y seguridad del software producido.
