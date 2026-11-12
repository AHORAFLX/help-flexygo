# Requisitos del sistema

Esta página recoge los requisitos necesarios para instalar Flexygo en un entorno Windows con IIS.

---

## :material-tools: Requisitos previos

Antes de comenzar, asegúrate de que el entorno dispone de:

- **IIS** instalado y configurado (el instalador puede instalarlo si no lo está)
- **SQL Server 2017 o superior** (opcionalmente instalable también desde el instalador)
- **.NET Hosting Bundle** (instalado automáticamente por el instalador si se detecta su ausencia)
- **Permisos de administrador** en el equipo

---

## :material-server: Instalación de IIS y SQL Server

En modo avanzado, el instalador ofrece opciones automáticas para:

- Instalar **IIS** si no está presente en el sistema.
- Instalar **SQL Server** Developer Edition si el usuario lo solicita (ideal para entornos de pruebas o instalaciones locales).

---

## :material-wifi: WebSocket

Para el correcto funcionamiento de Flexygo, es necesario habilitar **WebSocket** en las características de Windows:

Ve a **Panel de control → Programas → Activar o desactivar las características de Windows** y asegúrate de que **WebSocket** está habilitado bajo las características de IIS.

---

## :material-database: SQL Server

!!! danger "Flexygo 10 requiere SQL Server 2017 o superior"
    A partir de Flexygo 10, la versión mínima de SQL Server es **SQL Server 2017**. Las bases de datos de la aplicación deben estar en un servidor SQL Server 2017 o posterior; si el servidor es anterior, actualízalo antes de instalar, actualizar o migrar la aplicación.

---

## :material-chart-line: Dimensionamiento orientativo

!!! tip "Para afinar tu caso concreto"
    Usa la calculadora de recursos del panel de salud de la aplicación (**Health and resources → Resource calculator**): pregunta por el sistema operativo, varias aplicaciones, la edición de SQL Server y lo que ya vive en ese servidor, y da sus recomendaciones. Las cifras de esta página salen de ella, con su mismo código.

Cifras para **uso normal** (listas, fichas, procesos cortos e informes pequeños), unos **10 GB de datos** y Windows Server.

- **Personas a la vez** son las que trabajan en el mismo minuto, no los usuarios dados de alta (si solo sabes los usuarios, más o menos uno de cada cinco; estimación sin medir).
- **vCPU:** la CPU por petición está **medida** en pruebas de carga de Flexygo; el paso a vCPU de servidor (×1,3) es **estimado**. Procesador de referencia: Intel Xeon o AMD EPYC de 2016 en adelante, a 2,2 GHz o más.
- **Memoria:** la del **servidor entero**: el sistema, Flexygo con margen y SQL Server con su tope, redondeada a una talla habitual y ampliable. Lo medido queda por debajo.
- **Disco:** 100 GB o más para el sistema y Flexygo, más los datos, los documentos y las copias (la calculadora da 105 GB para la aplicación y 120 GB para SQL Server con 10 GB de datos, sin copias).

### Todo en un servidor

La aplicación (IIS) y SQL Server en la misma máquina. A partir de 100 personas conviene separar SQL Server: compiten por CPU y disco.

| Personas a la vez | vCPU | Memoria | `max server memory` |
|---|---|---|---|
| 5 | 4 vCPU o más | 16 GB | 8 GB |
| 20 | 4 vCPU o más | 16 GB | 8 GB |
| 50 | 4 vCPU o más | 24 GB | 12 GB |
| 100 | 5 vCPU o más | 32 GB | 18 GB |
| 200 | 7 vCPU o más | 48 GB | 24 GB |

### Aplicación en un servidor y SQL Server en otro

| Personas a la vez | Aplicación (IIS): vCPU | Memoria | SQL Server: vCPU | Memoria | `max server memory` |
|---|---|---|---|---|---|
| 5 | 2 vCPU o más | 8 GB | 2 vCPU o más | 12 GB | 8 GB |
| 20 | 2 vCPU o más | 8 GB | 2 vCPU o más | 12 GB | 8 GB |
| 50 | 2 vCPU o más | 8 GB | 2 vCPU o más | 16 GB | 12 GB |
| 100 | 3 vCPU o más | 12 GB | 2 vCPU o más | 24 GB | 18 GB |
| 200 | 5 vCPU o más | 16 GB | 2 vCPU o más | 32 GB | 24 GB |

### Frontend, backend y SQL Server, cada uno en su servidor

Solo por seguridad o por red: el frontend necesita poco. El disco del frontend es el del sistema y Flexygo, 100 GB.

| Personas a la vez | Frontend: vCPU | Memoria | Backend: vCPU | Memoria | SQL Server: vCPU | Memoria | `max server memory` |
|---|---|---|---|---|---|---|---|
| 5 | 2 vCPU o más | 8 GB | 2 vCPU o más | 8 GB | 2 vCPU o más | 12 GB | 8 GB |
| 20 | 2 vCPU o más | 8 GB | 2 vCPU o más | 8 GB | 2 vCPU o más | 12 GB | 8 GB |
| 50 | 2 vCPU o más | 8 GB | 2 vCPU o más | 8 GB | 2 vCPU o más | 16 GB | 12 GB |
| 100 | 2 vCPU o más | 8 GB | 3 vCPU o más | 8 GB | 2 vCPU o más | 24 GB | 18 GB |
| 200 | 2 vCPU o más | 8 GB | 5 vCPU o más | 12 GB | 2 vCPU o más | 32 GB | 24 GB |

### SQL Server compartido con otras bases

Como ejemplo, el SQL Server tiene además otras bases que suman 40 GB y usan 1 núcleo en su hora punta; su memoria sube con ellas. En este ejemplo, la calculadora da 170 GB de disco para SQL Server (100 GB más unos 70 GB de datos), sin copias.

| Personas a la vez | Aplicación (IIS): vCPU | Memoria | SQL Server: vCPU | Memoria | `max server memory` |
|---|---|---|---|---|---|
| 5 | 2 vCPU o más | 8 GB | 3 vCPU o más | 32 GB | 24 GB |
| 20 | 2 vCPU o más | 8 GB | 3 vCPU o más | 32 GB | 24 GB |
| 50 | 2 vCPU o más | 8 GB | 3 vCPU o más | 32 GB | 24 GB |
| 100 | 3 vCPU o más | 12 GB | 3 vCPU o más | 32 GB | 24 GB |
| 200 | 5 vCPU o más | 16 GB | 4 vCPU o más | 32 GB | 24 GB |

### Sistema operativo

- **Windows Server 2016-2025** (con escritorio o Server Core): el recomendado. Server Core deja algo más de memoria libre.
- **Windows 10/11:** solo para pruebas o muy pocas personas. IIS en un Windows de escritorio atiende como mucho 10 peticiones a la vez (3 en Home) y las demás esperan ([Microsoft](https://learn.microsoft.com/iis/troubleshoot/request-restrictions)).
- **Linux y Docker:** sin medir; estimación prudente en su apartado, más abajo.

### Recomendaciones más importantes

1. **Fija siempre el tope de memoria de SQL Server** (`max server memory`) con el valor de las tablas: por defecto no tiene límite y acaba quitando la memoria al sistema y a IIS ([Microsoft](https://learn.microsoft.com/sql/database-engine/configure-windows/server-memory-server-configuration-options)).
2. **A partir de 100 personas, SQL Server en su propio servidor:** en la misma máquina compiten por CPU y disco.
3. **Excluye del antivirus** los ficheros de datos, registro y copias de SQL Server y `sqlservr.exe` ([Microsoft](https://learn.microsoft.com/troubleshoot/sql/database-engine/security/antivirus-and-sql-server)).
4. **En IIS, que el grupo de aplicaciones no se pare** por inactividad (por defecto, a los 20 minutos) y se recicle a una hora fija fuera del horario de trabajo en lugar de cada 29 horas.

!!! warning "Uso pesado"
    Con procesos largos, exportaciones grandes a Excel o informes que leen meses de datos, SQL Server necesita bastante más CPU: con aplicación y SQL Server separados, 4 vCPU con 100 personas y 8 vCPU con 200. La búsqueda de texto en listas de millones de filas va lenta incluso con pocas personas y no se arregla con más hardware.

### Linux y Docker

!!! warning "Sin medir"
    Las cifras de este apartado son una **estimación prudente**: las pruebas de carga se han hecho en Windows con IIS. Se medirán con el mismo kit de carga; hasta entonces, no cuentes con ahorrar.

- **vCPU:** las mismas que en Windows, en las tablas de arriba.
- **Memoria:** el sistema reserva 2 GB en Linux en lugar de 4, pero cada contenedor lleva su límite con margen: un contenedor que se queda sin memoria se detiene. .NET toma para sí el 75 % del límite de su contenedor.
- **SQL Server en contenedor** necesita sus volúmenes persistentes (`flx-db-data`, `flx-db-log` y `flx-db-secrets` en el `docker-compose.yml`; sin ellos, la base se pierde al recrear el contenedor) y dos límites: el del contenedor y `MSSQL_MEMORY_LIMIT_MB`, por debajo. Con los dos iguales, o sin límite de contenedor, el sistema puede cerrar SQL Server. Activa el intercambio (swap) en la máquina como red de seguridad.

| Personas a la vez | flx-frontend | flx-backend | flx-db (SQL Server) | `MSSQL_MEMORY_LIMIT_MB` | `max server memory` | Máquina con los tres | Máquina solo con frontend y backend |
|---|---|---|---|---|---|---|---|
| 5 | 2 GB, 2 CPU | 4 GB, 2 CPU | 12 GB, 2 CPU | 10240 | 7 GB | 24 GB, 6 vCPU | 8 GB, 4 vCPU |
| 20 | 2 GB, 2 CPU | 4 GB, 2 CPU | 12 GB, 2 CPU | 10240 | 7 GB | 24 GB, 6 vCPU | 8 GB, 4 vCPU |
| 50 | 2 GB, 2 CPU | 4 GB, 2 CPU | 16 GB, 2 CPU | 13312 | 11 GB | 24 GB, 6 vCPU | 8 GB, 4 vCPU |
| 100 | 2 GB, 2 CPU | 4 GB, 3 CPU | 24 GB, 2 CPU | 20480 | 17 GB | 32 GB, 7 vCPU | 8 GB, 5 vCPU |
| 200 | 3 GB, 2 CPU | 6 GB, 5 CPU | 32 GB, 2 CPU | 27648 | 23 GB | 48 GB, 9 vCPU | 12 GB, 7 vCPU |

Para 100 personas, en el `docker-compose.yml`:

```yaml
  flx-frontend:
    mem_limit: 2g
    cpus: 2
  flx-backend:
    mem_limit: 4g
    cpus: 3
  flx-db:
    mem_limit: 24g
    cpus: 2
    environment:
      MSSQL_MEMORY_LIMIT_MB: "20480"
```

!!! tip "Para afinar tu caso concreto"
    Usa la calculadora de recursos del panel de salud de la aplicación (**Health and resources → Resource calculator**): pregunta por el sistema operativo, varias aplicaciones, la edición de SQL Server y lo que ya vive en ese servidor, y da sus recomendaciones. Las cifras de esta página salen de ella, con su mismo código.

