# ¿Cómo generar un HOTFIX?

![](../../docs_assets/images/CICD/GenerateHotfix/1.png)

## Procedimiento completo

Antes de empezar a realizar el hotfix, hacemos un pull de `develop` y `master` y nos aseguramos de estar al día:

![](../../docs_assets/images/CICD/GenerateHotfix/2.png)

Hacemos clic en **GitFlow > Start new hotfix**

![](../../docs_assets/images/CICD/GenerateHotfix/3.png)

Definimos el nombre empezando por `HOTFIX_` (en mayúsculas) seguido de una breve descripción que sirva como identificador de la rama. Pulsamos OK.

![](../../docs_assets/images/CICD/GenerateHotfix/4.png)

Publicamos las bases de datos del proyecto, establecemos el origin correcto, realizamos el arreglo y descargamos los cambios, tal y como lo haríamos en una nueva funcionalidad.

Revisamos los cambios pendientes y marcamos aquellos que correspondan con el arreglo.

![](../../docs_assets/images/CICD/GenerateHotfix/5.png)

Realizamos un commit empezando el mensaje por la etiqueta `HOTFIX:` seguido de la descripción del arreglo.

![](../../docs_assets/images/CICD/GenerateHotfix/6.png)

Hacemos un fetch y revisamos que no tengamos ningún pull pendiente; en caso contrario, nos situamos en la rama correspondiente, realizamos un pull y volvemos a la rama del hotfix.

![](../../docs_assets/images/CICD/GenerateHotfix/7.png)

Pulsamos en **Git Flow > Finish Hotfix**

![](../../docs_assets/images/CICD/GenerateHotfix/8.png)

Realizamos push en `develop`, nos situamos en `master` y realizamos push de `master`.

![](../../docs_assets/images/CICD/GenerateHotfix/9.png)
