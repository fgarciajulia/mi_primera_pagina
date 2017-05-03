# Menú tercera parte

## Añadir transición al scroll 
Para colocar la transición al scroll vamos a tener que incorporar a nuestra web una librería que nos va a facilitar la animación, algo así como el <a target="_blank" href="http://easings.net/es">cálculo matemático de la animación</a>. Una vez que podamos consumir la librería le asignaremos la animación al scroll.

### Incorporamos la librería easing.

Descargamos el archivo

<a target="_blank" href="https://fgarciajulia.github.io/mi_primera_pagina/jquery.easing.min.js">jquery.easing.min.js</a>


y como ya hemos hecho muchas veces lo llamamos por encima de nuestro archivo main.js
```
    <script src="js/jquery.easing.min.js"></script>
```

### Asignamos la animación al scroll.

Colocamos el siguiente código en nuestro archivo `main.js`

```

    // Animación para el scroll de los anclas
 $('.page-scroll a').bind('click', function (event) {
     var $anchor = $(this);
     $('html, body').stop().animate({
             scrollTop: ($($anchor.attr('href')).offset().top - 50)
         },
         1250,
         'easeInOutExpo'
     );
     event.preventDefault();
 });
```

### ¿Que hicimos?
Esto que parece imposible de entender, en realidad es bastante sencillo.
La primera línea es un comentario, de manera que es solo orientativo para nosotros.
La segunda dice:
`$('.page-scroll a')`Esta es una función Jquery que selecciona elementos `$()`, y tiene una sintaxis muy similar al CSS, está convocando a todas las  `a` que están dentro de una clase `.page-scroll`. Yo ya les hice colocar esta clase a los `li`, de manera que ahora estamos seleccionando todos los links del menú que son a los que se les queremos asignara la animación.

Luego se vincula la función al evento click de esos links, de manera que cada vez que se haga click en los links seleccionados va a pasar lo que esté dentro de la función.
```
.bind('click', function (event) {
```
Adentro de la función entre otras cosas esta la animación a la que le pasamos 3 parametros:<br />
El tiempo de transición que es de `1250` milisegundos<br />
El nombre de la animación que es `easeInOutExpo` que estan definidas dentro de la <a target="_blank" href="http://easings.net/es"> libreria que incorpotamos</a><br />
Y un poquito más complicado de entender El alto del scroll al que tengo que llegar: 
```
scrollTop: ($($anchor.attr('href')).offset().top - 50)
```

Entonces, hasta ahora:
1. Consumimos una animación que aplicamos al scroll de un ancla.
2. Antes de poner esta animación el ancla ya funcionaba, es decir, por defecto cuando yo hacía click en el link ya escrolleaba, NO con una animación, pero sí escrolleaba de golpe.

De manera que ahora tenemos 2 movimientos asignados al link, uno instantáneo que viene por defecto y otro movimiento animado que es el que  agregamos.
Para sacar esta "acción por defecto" o técnicamente hablando `prevenir el evento por defecto` se utiliza la función que está en la última línea:

`event.preventDefault()`

### IMPORTANTE

Si prácticamente no entendiste nada de lo último, no importa, lo que tenes que tener en cuenta es que:
El selector `.page-scroll a` tiene que estar correcto, este es similar al del CSS, el punto indica que es una clase, y luego con el espacio y la `a` indica que son los links `a` que están dentro de la clase `page-scroll`, que en su momento colocamos en los `li`:
```
<li class="page-scroll">
    <a href="#portfolio">Portfolio</a>
</li> 
```
Otro dato importante es que el `-50` hace referencia al alto del menú en píxeles, el alto del menú lo pueden ver con el inspeccionador de elementos aplicado en el `nav`, se fijan en el cuadrado celeste cuanto mide de alto.

¿Por qué es importante el alto del menú? Porque si nosotros scrolleamos hasta que la sección que queremos esté arriba de todo, entonces el menú nos va a quedar por encima de una parte de la sección.
 
## Activar link según scroll

Aprovechando el envión final vamos a colocar el siguiente código en nuestro archivo main.js

```
 // Añade clase 'active' a los links del menú según corresponda
 $('body').scrollspy({
     target: '.navbar-fixed-top',
     offset: 51
 });
```

Lo que hace es añadir la clase `active` en los links si estamos en la sección que le corresponde, el 51 hace referencia al alto del menú, al igual que se mencionó antes. 
La clase active es la que le da el color blanco, ustedes la pueden editar desde `main.css`.

##  Achicar el menú cuando scrolleo un poco

```
// Añade clase `affix-top` o `affix` después de escrollear
 $('#mainNav').affix({
     offset: {
         top: 100
     }
 })
```

Esta función reemplaza la clase `affix-top` o `affix` según si estoy con el scroll arriba de todo o scrolleé 100px. Esta clase se encuentra en el nav.
En este caso el 100 es la cantidad de pixeles en la que yo quiero que se produzca el cambio. Esto sirve para agrandar o achicar el menú, en nuestro caso, en el CSS configuramos que se reduzca el padding, ustedes pueden achicar o agrandar el logo, o muchas cosas más. 

## Menú responsive desplegable (cierre automático)

Con lo trabajado hasta ahora notarán que al intentar usar el menú para dispositivos pequeños, al desplegar la ventana y elegir una opción, la misma queda desplegada tapando el contenido elegido. 

Por último vamos a hacer que nuestro menú se oculte de forma automática conjuntamente con la elección de un link (en dispositivos pequeños)

```
 // Cierre automático de menú desplegable en dispositivos pequeños 
 $('.navbar-collapse ul li a').click(function () {
     $('.navbar-toggle:visible').click();
 });
```

<div class="Grid">
    <a href="https://fgarciajulia.github.io/mi_primera_pagina/menu-segunda-parte" class="my-btn anterior">Anterior</a>
    <a href="https://fgarciajulia.github.io/mi_primera_pagina" class="my-btn home">Home</a>
    <a href="https://fgarciajulia.github.io/mi_primera_pagina/" class="my-btn siguiente">Siguiente</a>
</div>