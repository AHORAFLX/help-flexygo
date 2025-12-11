# Diseñando la App offline de flexygo

Una vez creada la aplicación, será necesario darle funcionalidad creando los objetos, páginas, menús y funciones. Hay 5 pasos básicos para crear una aplicación y otros 4 pasos adicionales que permiten dotarla de mayor funcionalidad.

## Pasos básicos

1. Crear objetos  
2. Crear páginas de lista y de vista  
3. Ampliar el modelo de datos con vistas  
4. Crear menús

## Pasos adicionales

1. Editar la página de inicio  
2. Añadir funciones JS  
3. Ampliar los estilos de la App con clases CSS  
4. Añadir recursos estáticos

## Crear un objeto

### Asistente de objetos

Puedes crear nuevos objetos desde cero o basarte en objetos existentes.  
En la sección de objetos pulsaremos el botón + (Crear nuevo objeto).  
Después accederemos al asistente de objetos offline, donde solo asignaremos un nombre, descripción e icono para el objeto y la colección, además del nombre de la tabla o vista en la que se basará. Pulsa el botón Guardar y Continuar para ir al segundo paso.

![New Object](/assets/images/offline/NewObject.png "Image 1. New Object")  
![New Object](/assets/images/offline/NewObject2.png "Image 2. New Object")

### Añadiendo propiedades

Ahora puedes usar el asistente de objetos.

![Wizzard](/assets/images/offline/Wizzard1.png "Image 3. Wizzard")

A continuación crearemos y configuraremos cada una de las propiedades del objeto.

![Wizzard](/assets/images/offline/Wizzard2.png "Image 4. Wizzard")

Configuración de propiedades.

![Wizzard](/assets/images/offline/Wizzard3.png "Image 5. Wizzard")

A diferencia del entorno **flexygo**, en el entorno offline, cuando las propiedades son del tipo combo o dbcombo, tendremos la opción de añadir un objeto o una vista en lugar de establecer una sentencia SQL.

![Wizzard](/assets/images/offline/PropertyCombo.png "Image 6. Property Combo")

## Ampliar el modelo de datos mediante vistas de objeto

Las vistas de objeto se utilizan para combos desplegables o para ampliar la información que se muestra en las listas de objetos o páginas de vista. Todas estas vistas se crearán como tablas y se enviarán al dispositivo móvil. Solo necesitas rellenar la información principal, la sentencia SQL y guardar.

![Object View](/assets/images/offline/ObjectView.png "Image 7. Object View")

Puedes consultar el esquema de base de datos generado en cualquier momento utilizando el botón de esquema.

![Schema](/assets/images/offline/schema.png "Image 8. Schema")

## Páginas de objeto

Cabe destacar que la plataforma de desarrollo creará automáticamente las páginas de vista y lista para cada objeto que creemos mediante el asistente. Por lo tanto, podemos usar las plantillas iniciales y rediseñarlas a nuestro gusto, además de añadir nuevas.

![Object Pages](/assets/images/offline/ObjectPages.png "Image 9. Object Pages")

Tenemos la opción de editar plantillas existentes o crear nuevas. Solo debemos rellenar las secciones de descripción (nombre, tipo, título), las secciones HTML (cabecera, cuerpo, pie, vacío) y la sentencia SQL en caso de necesitar información adicional a la ofrecida por el propio objeto con sus propiedades.

![Object Pages Edit](/assets/images/offline/ObjectPagesEdit.png "Image 9. Object Pages Edit")

## Menús de la App

Son los accesos directos a los objetos que vamos a ofrecer en el dispositivo. En la sección de menús tendremos el botón para añadir nuevos menús, además de la posibilidad de editar los existentes. Al crear nuevos menús, en cuanto pulsemos el botón de añadir, se generará un menú genérico que deberemos modificar con la opción Editar.

![Menu](/assets/images/offline/MenuMenu1.png "Image 10. Menu")  
![Menu](/assets/images/offline/MenuMenu2.png "Image 11. Menu")

## Pasos adicionales

### Diseño de la página de inicio

Acceso y diseño de la HomePage de AppOffline.

![Home Page](/assets/images/offline/HomePage.png "Image 12. Home Page")

## Añadiendo JavaScript adicional

Podemos ampliar la funcionalidad creando nuestras propias funciones JS o utilizando funciones nativas del entorno Offline **flexygo**.

### Funciones JavaScript propias

![JavaScript function](/assets/images/offline/JS.png "Image 13. JavaScript function")

### Uso de funciones nativas de **flexygo**

Podemos utilizar cualquiera de las funciones nativas integradas en **flexygo**. Para consultarlas simplemente:

En modo dispositivo > F12 -> Consola > Flexygo + Intro, accedemos a las funciones autodocumentadas:

![Native Functions](/assets/images/offline/NativeFunctions.png "Image 14. Native Functions")

## Añadiendo estilos adicionales

![Styles](/assets/images/offline/styles.png "Image 15. Styles")

## Añadiendo recursos adicionales

![Files](/assets/images/offline/files.png "Image 16. Files")

## Añadiendo un logo

Puedes establecer el logo de la pantalla de inicio de sesión de la app en la configuración miscelánea de flexygo, como se muestra en la imagen.

![Logo](/assets/images/offline/AddLogo.png "Image 17. Logo")