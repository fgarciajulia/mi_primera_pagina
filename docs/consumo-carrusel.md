# 8. "Consumimos" el carrousel

## Introducción

Cuando uno recién comienza en el mundo de la programación (y después también) muchos problemas se solucionan preguntándose "¿Dónde lo definiste?" Y "¿dónde lo estás consumiendo?<br />
La respuesta puede ser "Ahh... no lo definí", o "no lo estoy consumiendo".<br />
Como explicamos en el capítulo anterior, nosotros ya tenemos definido el owlcarousel2, si bien no lo definimos literalmente nosotros, levantamos la librería **.js** de owlcarousel2 con `<link...>` y ahí adentro está definida la función `owlCarousel()`, también definimos todas las clases/estilos que va a usar nuestro carrusel cuando levantamos el **.css**.

De manera que ahora solo queda consumirlo.

Para consumirlo tenemos que:

1-	Colocar el contenido dentro de un div, con la clase`owl-carousel`.

Por ejemplo:
```
<div class="owl-carousel">
  <div> Mi contenido </div>
  <div> Mi contenido </div>
  <div> Mi contenido </div>
  <div> Mi contenido </div>
  <div> Mi contenido </div>
  <div> Mi contenido </div>
  <div> Mi contenido </div>
</div>
```

2- Consumir la función `owlCarousel()`.

```
 $(document).ready(function(){
  $(".owl-carousel").owlCarousel(
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:1000,
  );
});
```

En esta parte hay algunos detalles para explicar, cuando yo coloco el siguiente código, entonces estoy diciendo que lo que está dentro se va a ejecutar cuando la página se termine de leer.<br />
Es una buena práctica colocar esta función para postergar la ejecución del carrusel, si no estuviera se retrasaría la carga de toda la web hasta que no se termine de procesar
```
$(document).ready(function(){
// Se ejecuta después de que se leyó toda la página.
});
```

Luego consumimos el carrusel, para esto **seleccionamos** el div con la clase `owl-carousel` escribiendo `$(".owl-carousel")` y luego le asignamos la función`.owlCarousel()`.<br />
Para saber más sobre selectores con Jquery les dejo el siguiente [link](https://api.jquery.com/all-selector/).
Véase que los selectores son muy similares a los que vimos en css.

```
  $(".owl-carousel").owlCarousel();
```
Dentro de los paréntesis se colocan los parámetros que queremos configurar al carrusel, según figura en la documentación.
```
({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
});
```
## En nuestro porfolio.

Finalmente a modo de ejemplo vamos a colocar el siguiente carrusel debajo del `<nav>` del archivo index.html:

```
  <div class="header">
    <div class="owl-carousel">
      <div class="container container-header">
        <div class="row">
          <div class="col-xs-offset-3 col-xs-6 col-md-offset-4 col-md-4">
            <img class="img-responsive" src="img/profile1.png" alt="">
            <div class="intro-text">
              <span class="name">Construcción</span>
              <hr class="star-light">
              <span class="skills">Web Developer - Graphic Artist - User Experience Designer</span>
            </div>
          </div>
        </div>
      </div>
      <div class="container container-header">
        <div class="row">
          <div class="col-xs-offset-3 col-xs-6 col-md-offset-4 col-md-4">
            <img class="img-responsive" src="img/profile2.png" alt="">
            <div class="intro-text">
              <span class="name">Oficinista</span>
              <hr class="star-light">
              <span class="skills">Web Developer - Graphic Artist - User Experience Designer</span>
            </div>
          </div>
        </div>
      </div>
      <div class="container container-header">
        <div class="row">
          <div class="col-xs-offset-3 col-xs-6 col-md-offset-4 col-md-4">
            <img class="img-responsive" src="img/profile3.png" alt="">
            <div class="intro-text">
              <span class="name">Policía</span>
              <hr class="star-light">
              <span class="skills">Web Developer - Graphic Artist - User Experience Designer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
```

Descargamos estas 3 imágenes y las colocamos en la carpeta `/img:`<br />
[imagen1](https://raw.githubusercontent.com/fgarciajulia/mi_primera_pagina/master/img/profile1.png)<br />
[imagen2](https://raw.githubusercontent.com/fgarciajulia/mi_primera_pagina/master/img/profile2.png)<br />
[imagen3](https://raw.githubusercontent.com/fgarciajulia/mi_primera_pagina/master/img/profile3.png)<br />

Por último en main.css colocamos los siguientes estilos:

```
/* .header */
.header {
  text-align: center;
  background: #18BC9C;
  color: white;
}
.header .container-header {
  padding-top: 100px;
  padding-bottom: 50px;
}
.header img {
  display: block;
  margin: 0 auto 20px;
}
.header .intro-text .name {
  display: block;
  font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 25px;
}
.header .intro-text .skills {
  font-size: 1.25em;
  font-weight: 300;
}
@media (min-width: 768px) {
  .header .container-header {
    padding-top: 160px;
    padding-bottom: 100px;
  }
  .header .intro-text .name {
    font-size: 40px;
  }
  .header .intro-text .skills {
    font-size: 1.75em;
  }
}
```
Perfecto! ya terminamos... definimos el carrusel y lo consumimos... Lo consumimos, ¿verdad?

Si no lo hiciste deberías añadir el siguiente código en `main.js`
```
 $(document).ready(function(){
  $(".owl-carousel").owlCarousel(
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:1000,
  );
});
```

Y ahora sí, definido y consumido.

<div class="Grid">
    <a href="https://fgarciajulia.github.io/mi_primera_pagina/owlcarousel2" class="my-btn anterior">Anterior</a>
    <a href="https://fgarciajulia.github.io/mi_primera_pagina" class="my-btn home">Home</a>
    <a href="https://fgarciajulia.github.io/mi_primera_pagina" class="my-btn siguiente">Siguiente</a>
</div>