# Requisitos mínimos

Flexygo requiere:

* Windows Server 2013 o superior
* Internet Information Server (IIS)
* Microsoft Framework 4.5
* SQL 2016 Express

## Recomendaciones técnicas

La plataforma funciona sobre IIS con el framework 4.5 instalado y utiliza Microsoft SQL a partir de la versión 2016. Se recomienda utilizar máquinas separadas para IIS y SQL, especialmente con un volumen alto de usuarios.

### Para unos 100 usuarios simultáneos

**Máquina SQL:**

* Windows Server 2016 Standard o superior
* Procesador Intel Xeon (referencia: ES-2650 v4 @ 2.20GHz)
* 16 GB de RAM (ampliable)
* 500 GB de disco

**Máquina IIS:**

* Windows Server 2016 Standard o superior
* Procesador Intel Xeon (referencia: ES-2650 v4 @ 2.20GHz)
* 8 GB de RAM (ampliable)
* Microsoft Framework 4.5
* 500 GB de disco

El espacio en disco varía según la naturaleza del proyecto; se recomienda un NAS externo para una gestión documental o de imágenes de gran volumen.

## Notas sobre escalabilidad

Varias máquinas IIS con balanceo de carga pueden asumir un incremento de usuarios. Para bases de datos que superen los 30 GB, consulta [este artículo sobre memoria en SQL Server](https://www.brentozar.com/archive/2018/11/how-much-memory-is-normal-for-sql-servers/).

## Guías de instalación

* [Instalación de SQL Server](https://www.youtube.com/watch?v=ttcadOncjAM)
* [Instalación de IIS](https://www.youtube.com/watch?v=fFKLuk1N4e4)

## Consideraciones adicionales

Opcional, pero recomendable: servidores redundantes, sistemas de seguridad, copias de seguridad de datos y clustering de SQL.
