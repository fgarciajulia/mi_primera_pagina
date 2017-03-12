# Instalación de carrousel

## Introducción

En mi experiencia investigando carrouseles de distintos tipos recomiendo fuertemente el [Owl Carousel 2](https://owlcarousel2.github.io/OwlCarousel2/), incluso por ensima del que trae por defecto el bootstrap, ya que entre otras cosas el de bootstrap no permite pasar las imagenes arrastrandolas en una pantalla tactil.<br />
El carrousel nos da unas [demostraciones](https://owlcarousel2.github.io/OwlCarousel2/demos/demos.html) y como configurarlas, su [documentación](https://owlcarousel2.github.io/OwlCarousel2/docs/started-welcome.html) es muy importante, porque tiene muchas "configuraciones" basicas y otras mas complejas pero muy utiles si se las necesita.<br />
> Vease que es el Owl Carousel **2** exciste el uno, ese NO.


## ¿Como lo integro a la web?

Lo primero entramos a la documentación [documentación](https://owlcarousel2.github.io/OwlCarousel2/docs/started-welcome.html), nos bajamos el archivo que dice:  **Distributed version - compiled and minified. Javascript, images and CSS included.** 

Va a ser muy similar a lo que hicimos con Bootstrap, Dentro de la carpeta **/dist** esta el archivo **owl.carousel.min.js**. Lo extraemos y lo colocamos en la carpeta de js, como le corresponde por su extencion de archivo (.js).
Luego vamos a la carpeta **/dist/assets**, extraemos los siguientes archimos y los colocamos en nuestra carpeta css (como indica su extención)

```
owl.carousel.css
owl.carousel.min.css
owl.theme.default.css
owl.theme.default.min.css
```

Una vez que copie todos los archivos a sus carpetas tengo que llamarlos desde index.html ( tecnicamente hablando seria linkearlos o importarlos ), para que cuando abra la web sepa que tiene que usarlos.

Para esto usamos la misma sintaxis que en bootstrap

Colocamos en index.html, entre el link de bootstrap.css y el nuestro ( main.css ) la siguiente linea
```
    <link href="css/owl.carousel.css" rel="stylesheet">
    <link href="css/owl.theme.default.css" rel="stylesheet">
```
Y lo mismos con el js, entre el link de bootstrap.css y el nuestro ( main.js ) la siguiente linea.

```
    <script src="js/owl.carousel.min.js"></script>
```

De curiosos podemos "guardar todos los archivos" y abrir el index.html con el chrome a ver que pasa, en principio no va a pasar nada, porque si bien importamos "la definición" de el carrousel, nunca lo usamos.
Como quien tiene un diccionario en un cajon donde define que es un carrousel, si no lo usa ( si no pronuncia la palabra en un contexto ), por el momento no hace nada.
Lo que si podemos ver es si cometimos un error cuando mandamos a llamar los archivos, tanto porque el archivo no exciste, si le marcamos mal la ruta, o si no guardamos el archivo html.

Esto se hace [inspeccionando elemento](https://fgarciajulia.github.io/mi_primera_pagina/inspeccionar-elemento) y revisando que no tengamos erreres, como explicamos [anteriormente](https://fgarciajulia.github.io/mi_primera_pagina/inspeccionar-elemento)

>Otra cosa que podemos hacer es auto-indentar el html, para no perder la costumbre. <br />
Shift+Alt+F en **Visual code**


<div class="Grid">
    <a href="https://fgarciajulia.github.io/mi_primera_pagina/estilo-nav" class="my-btn anterior">Anterior</a>
    <a href="https://fgarciajulia.github.io/mi_primera_pagina" class="my-btn home">Home</a>
    <a href="https://fgarciajulia.github.io/mi_primera_pagina" class="my-btn siguiente">Siguiente</a>
</div>