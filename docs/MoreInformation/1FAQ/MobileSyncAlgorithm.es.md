# Algoritmo de actualización de datos en aplicaciones móviles

Este artículo detalla el proceso de sincronización de datos en las aplicaciones móviles de Flexygo mediante un algoritmo específico de recepción y actualización de información.

![](../../docs_assets/images/FAQ/MobileSyncAlgorithm/1.png)

## Pasos del algoritmo

1. **Descarga inicial:** configuración de objetos, vistas, menús, propiedades y plantillas.
2. **Creación de tablas temporales:** se generan con el prefijo `temp_` e incluyen campos de control: `_isInserted`, `_isUpdated`, `_isDeleted`, `_syncDate`, `_insertDate`, `_updatedDate`, `_deletedDate`.
3. **Descarga de datos:** se procesan en múltiples hilos de ejecución.
4. **Transacción unificada:** compara las estructuras anteriores y ejecuta las siguientes operaciones:
    * Elimina las tablas obsoletas
    * Renombra las tablas nuevas (elimina el prefijo `temp_`)
    * Procesa las tablas coincidentes según el modo

## Modos de sincronización

### A) Refrescar datos

* Valida los cambios en la clave primaria
* Marca los registros como eliminados
* Inserta los nuevos registros
* Actualiza los campos coincidentes
* Finaliza renombrando las tablas

### B) Sobrescribir datos

* Elimina las tablas antiguas
* Renombra las nuevas (sin el prefijo `temp_`)
