# 9. Cómo utilizar una font de iconos (Font Awesome)

Por cuarta vez voy a usar la frase "Lo primero que hacemos es entrar a la página oficial e ir a get start"

<a target="_blank" href="http://fontawesome.io/get-started/">http://fontawesome.io/get-started/</a>

Vamos a descargar hacemos click en --> No thanks, just download.

Una vez que tenemos el zip en nuestra pc lo abrimos y vamos a encontrar (como siempre) unas carpetas similares a las nuestras.

Copiamos el contenido del `css` a nuestra carpeta `css`, y lo mismo con `font`.

Véase que ya teníamos los archivos de fonts de Bootstrap. Estos archivos no los vamos a usar, si quieren pueden borrarlos, y solo dejar los nuevos que acabamos de descargar.

### Atención

La carpeta `fonts` está en plural, si se llama `font` no va a encontrar los archivos.

## ¿Cómo definimos Font Awesome?

Una vez que tenemos los archivos dentro de nuestro proyecto, hay que dejar registro en nuestro código de que para nuestra web vamos a usar iconos que serán tomados de esta librería, a esta acción se le denomina “importar”. Una vez que importamos Font Awesome en nuestro código podemos decir que ya se encuentra definido dentro de nuestra web.<br />
Como ya lo hicimos en otras cuatro ocasiones, colocamos en una línea nueva justo arriba de main.css el siguiente código:

```
  <link href="css/font-awesome.min.css" rel="stylesheet">
```

Y listo, ya lo tenemos definido.

## ¿Cómo lo consumimos?

El truco está en colocar por ejemplo los siguientes estilos:

```
unaClase:after { //:after significa que vendrá luego del selector
  content: "\f005"; // código del icono
  font-family: FontAwesome; 
  display: inline-block;
  position: relative;
}
```
En nuestro carrusel podríamos poner uno (yo ya lo tenía pensado, y por eso pusimos algunas clases de más).<br />
Colocaremos lo siguiente en nuestro archivo main.css luego del conjunto de estilos que aplica a la clase `.header`.

```
hr.star-light,
hr.star-primary {
  padding: 0;
  border: none;
  border-top: solid 5px;
  text-align: center;
  max-width: 250px;
  margin: 25px auto 30px;
}
hr.star-light:after,
hr.star-primary:after {
  content: "\f005";
  font-family: FontAwesome;
  display: inline-block;
  position: relative;
  top: -0.8em;
  font-size: 2em;
  padding: 0 0.25em;
}
hr.star-light {
  border-color: white;
}
hr.star-light:after {
  background-color: #18BC9C;
  color: white;
}
hr.star-primary {
  border-color: #2C3E50;
}
hr.star-primary:after {
  background-color: white;
  color: #2C3E50;
}
```
Quizás este es un ejemplo complicado para arrancar. En el próximo capítulo (en el footer) vamos a consumir estos <a target="_blank" href="http://fontawesome.io/icons/">iconos</a> para las redes sociales, y ahí será más sencillo, porque se utilizan las clases por defecto que trae Font Awesome.


<div class="Grid">
    <a href="https://fgarciajulia.github.io/mi_primera_pagina/consumo-carrusel" class="my-btn anterior">Anterior</a>
    <a href="https://fgarciajulia.github.io/mi_primera_pagina" class="my-btn home">Home</a>
    <a href="https://fgarciajulia.github.io/mi_primera_pagina/footer" class="my-btn siguiente">Siguiente</a>
</div>