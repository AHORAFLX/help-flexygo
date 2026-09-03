# ¿Cómo generar una RELEASE?

## 1. Crear la release en SourceTree

Se debe partir de la rama `develop`, limpia y sin cambios pendientes.

* Pulsar el botón Git-Flow

![](../../docs_assets/images/CICD/GenerateRelease/1.png)

* Confirmar la pantalla emergente con OK

![](../../docs_assets/images/CICD/GenerateRelease/2.png)

* Volver a pulsar Git-Flow

![](../../docs_assets/images/CICD/GenerateRelease/3.png)

* Seleccionar **Start New Release** e introducir un nombre como `RELEASE_4_11_0_1`

Se crea una nueva rama a partir de `develop`. En ella se realizan las pruebas y correcciones necesarias mediante commits normales hasta validar la release.

* Volver a pulsar Git-Flow y seleccionar **Finish Release**

![](../../docs_assets/images/CICD/GenerateRelease/4.png)

* Confirmar el merge hacia `master` y `develop` con el etiquetado correspondiente

![](../../docs_assets/images/CICD/GenerateRelease/5.png)

!!! warning "Antes de hacer push"
    Antes de realizar el push, se debe completar el paso siguiente sobre TeamCity.

## 2. Actualizar el número de versión en TeamCity

* Ir al proyecto de la rama `develop` → **Edit settings**

![](../../docs_assets/images/CICD/GenerateRelease/6.png)

* Cambiar los dos primeros números del **Build Number format** (por ejemplo, de `4.10` a `4.11`) y resetear el **Build Counter** a `1`

![](../../docs_assets/images/CICD/GenerateRelease/7.png)

* Repetir el mismo proceso en el proyecto de la rama `master` → **Edit settings**

![](../../docs_assets/images/CICD/GenerateRelease/8.png)

* Cambiar el formato (por ejemplo, de `4.10.0` a `4.11.0`) y resetear el contador

## 3. Volver a SourceTree

* Realizar el push de los merges pendientes
* Verificar que TeamCity compila y publica correctamente
