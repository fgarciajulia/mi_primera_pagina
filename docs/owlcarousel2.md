# 7. Instalación de carrusel

## Introducción

En mi experiencia investigando carruseles de distintos tipos recomiendo fuertemente el <a target="_blank" href="https://owlcarousel2.github.io/OwlCarousel2/">Owl Carousel 2</a>, incluso por encima del que trae por defecto el bootstrap, ya que entre otras cosas el de bootstrap no permite pasar las imágenes arrastrándolas en una pantalla táctil.<br />
Owl Carousel nos da diferentes <a target="_blank" href="https://owlcarousel2.github.io/OwlCarousel2/demos/demos.html">demostraciones</a> y también nos indica cómo configurarlas. La <a target="_blank" href="https://owlcarousel2.github.io/OwlCarousel2/docs/started-welcome.html">documentación</a> que trae es muy importante, porque tiene muchas “configuraciones” básicas y otras más complejas pero muy útiles si se las necesita.<br />
> Véase que es el Owl Carousel **2**, existe el 1, el 1 NO, porque ya no tiene soporte.


## ¿Cómo lo integro a la web ( lo defino )?

Lo primero que hay que hacer es entrar a la <a target="_blank" href="https://owlcarousel2.github.io/OwlCarousel2/docs/started-welcome.html">documentación</a>, nos bajamos el archivo que dice:  **Distributed version - compiled and minified. Javascript, images and CSS included.** 

Va a ser muy similar a lo que hicimos con Bootstrap. Dentro de la carpeta `/dist` está el archivo **owl.carousel.min.js**. Lo extraemos y lo colocamos en la carpeta de js, como le corresponde por su extensión de archivo (.js)
Luego vamos a la carpeta `/dist/assets`, extraemos los siguientes archivos y los colocamos en nuestra carpeta css (como indica su extensión).

```
owl.carousel.css
owl.carousel.min.css
owl.theme.default.css
owl.theme.default.min.css
```

Una vez que copie todos los archivos a sus carpetas tengo que llamarlos desde index.html (técnicamente hablando sería linkearlos o importarlos), para que cuando abra la web sepa que tiene que usarlos.

Para esto usamos la misma sintaxis que en bootstrap.

Colocamos en index.html, entre el link de bootstrap.css y el nuestro `main.css` la siguiente línea:
```
    <link href="css/owl.carousel.css" rel="stylesheet">
    <link href="css/owl.theme.default.css" rel="stylesheet">
```
Y lo mismos con el js, entre el link de bootstrap.css y el nuestro `main.js` la siguiente línea:

```
    <script src="js/owl.carousel.min.js"></script>
```
De curiosos podemos “guardar todos los archivos” y abrir el index.html con el Chrome a ver qué pasa, en principio no va a pasar nada, porque si bien importamos “la definición” del carrusel, nunca lo usamos.<br />
Como quien tiene un diccionario en un cajón donde define que es un carrusel, si no lo usa (si no pronuncia la palabra en un contexto), por el momento no hace nada.
Lo que sí podemos ver es si cometimos un error cuando mandamos a llamar los archivos, tanto porque el archivo no existe, si le marcamos mal la ruta, o si no guardamos el archivo html.


Esto se hace <a target="_blank" href="https://fgarciajulia.github.io/mi_primera_pagina/inspeccionar-elemento">inspeccionando elemento</a> y revisando que no tengamos errores, como explicamos anteriormente.

>Otra cosa que podemos hacer es auto-indentar el html, para no perder la costumbre: <br />
Shift+Alt+F en **Visual Code**.


<div class="Grid">
    <a href="https://fgarciajulia.github.io/mi_primera_pagina/estilo-nav" class="my-btn anterior">Anterior</a>
    <a href="https://fgarciajulia.github.io/mi_primera_pagina" class="my-btn home">Home</a>
    <a href="https://fgarciajulia.github.io/mi_primera_pagina/consumo-carrusel" class="my-btn siguiente">Siguiente</a>
</div>