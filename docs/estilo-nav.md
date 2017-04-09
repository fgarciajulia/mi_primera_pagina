# 6 Colocamos estilo al menú

Para añadir estilo al menú vamos a ir a nuestro archivo main.css y añadimos lo siguiente:


```
.navbar-custom {
    background: #2C3E50;
    font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    border: none;
}

.navbar-custom a:focus {
    outline: none;
}

.navbar-custom .navbar-brand {
    color: white;
}

.navbar-custom .navbar-brand:hover,
.navbar-custom .navbar-brand:focus,
.navbar-custom .navbar-brand:active,
.navbar-custom .navbar-brand.active {
    color: white;
}

.navbar-custom .navbar-nav {
    letter-spacing: 1px;
}

.navbar-custom .navbar-nav li a {
    color: white;
}

.navbar-custom .navbar-nav li a:hover {
    color: #18BC9C;
    outline: none;
}

.navbar-custom .navbar-nav li a:focus,
.navbar-custom .navbar-nav li a:active {
    color: white;
}

.navbar-custom .navbar-nav li.active a {
    color: white;
    background: #18BC9C;
}

.navbar-custom .navbar-nav li.active a:hover,
.navbar-custom .navbar-nav li.active a:focus,
.navbar-custom .navbar-nav li.active a:active {
    color: white;
    background: #18BC9C;
}

.navbar-custom .navbar-toggle {
    color: white;
    text-transform: uppercase;
    font-size: 10px;
    border-color: white;
}

.navbar-custom .navbar-toggle:hover,
.navbar-custom .navbar-toggle:focus {
    background-color: #18BC9C;
    color: white;
    border-color: #18BC9C;
}

@media (min-width: 768px) {
    .navbar-custom {
        padding: 25px 0;
        -webkit-transition: padding 0.3s;
        -moz-transition: padding 0.3s;
        transition: padding 0.3s;
    }
    .navbar-custom .navbar-brand {
        font-size: 2em;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        transition: all 0.3s;
    }
    .navbar-custom.affix {
        padding: 10px 0;
    }
    .navbar-custom.affix .navbar-brand {
        font-size: 1.5em;
    }
}
```

Si abrimos el index.html en nuestro navegador deberíamos ver algo así:

![Imagen](https://fgarciajulia.github.io/mi_primera_pagina/img/menu1.jpg)


## ¿Qué fue lo que hicimos?

Añadimos estilos al menú, entre ellos:

- Colores.
- Márgenes internos.
- Bordes de color.
- Márgenes externos.
- Elegimos una familia tipográfica (le dijimos qué grosor deben tener, qué interletrado)
- Le dijimos que haya textos que se pongan en mayúscula
- Variaciones de tamaño
- Tiempos de transición para estas variaciones de tamaño.

y algunas cosas más...

## Media queries

 Por ahí apareció un **@media**, la función que cumple es decir “todo lo que está acá adentro, solo aplica **sí** la pantalla tiene" y luego viene la condición que dice **(min-width: 768px)** "un ancho minimo de 768px". para más info --> <a target="_blank" href="https://developer.mozilla.org/es/docs/CSS/Media_queries">Link</a><br />
Este va a ser nuestro segundo acercamiento a programar de forma responsive, el primero fue cuando hablamos de los tipos de columnas de bootstrap **lg** **md** **sm** **xs**.

## Selectores

Para crear diseños web profesionales, es imprescindible conocer y dominar los selectores de CSS. Como se vio en el capítulo anterior, una regla de CSS está formada por una parte llamada "selector" y otra parte llamada "declaración".

La declaración indica "qué hay que hacer" y el selector indica "a quién hay que hacérselo". Por lo tanto, los selectores son imprescindibles para aplicar de forma correcta los estilos CSS en una página.

A un mismo elemento HTML se le pueden aplicar varias reglas CSS y cada regla CSS puede aplicarse a un número ilimitado de elementos. En otras palabras, una misma regla puede aplicarse sobre varios selectores y un mismo selector se puede utilizar en varias reglas.

El estándar de CSS 2.1 incluye una docena de tipos diferentes de selectores, que permiten seleccionar de forma muy precisa elementos individuales o conjuntos de elementos dentro de una página web.

No obstante, la mayoría de páginas de los sitios web se pueden diseñar utilizando solamente los cinco selectores básicos.

## Recomendación:

Si te costó entender el código que escribimos anteriormente te recomendamos FUERTEMENTE que visites esta página donde explican muy bien este tema (ver <a target="_blank" href="https://librosweb.es/libro/css/capitulo_2/selectores_basicos.html">Selectores basicos</a>)<br />

Si no te costó entender lo dado hasta ahora TAMBIÉN echale un vistazo a los selectores avanzados, porque hay selectores que no suelen usarse mucho pero cuando los necesitas, son irremplazables, solo hay que saber que existen, y a la hora de necesitarlos investigaras como se escriben (ver <a target="_blank" href="https://code.tutsplus.com/es/tutorials/the-30-css-selectors-you-must-memorize--net-16048">Selectores avanzados</a>).

## ¿Que pasa si no me quedo como esperaba?

Cuando algo no anda como esperamos, nuestra primera reacción debe ser <a target="_blank" href="https://fgarciajulia.github.io/mi_primera_pagina/inspeccionar-elemento">inspeccionar el elemento</a> apretando F12 o con botón derecho en la web entramos a la consola.
En el capítulo siguiente vamos a profundizar más este tema.

<div class="Grid">
    <a href="https://fgarciajulia.github.io/mi_primera_pagina/creacion-nav" class="my-btn anterior">Anterior</a>
    <a href="https://fgarciajulia.github.io/mi_primera_pagina" class="my-btn home">Home</a>
    <a href="https://fgarciajulia.github.io/mi_primera_pagina/owlcarousel2" class="my-btn siguiente">Siguiente</a>
</div>