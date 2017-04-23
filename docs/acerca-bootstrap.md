# 3.1 Acerca de Bootstrap

Bootstrap es un framework (librerías de CSS) que nos facilita y estandariza el desarrollo de sitios web.<br />
Está pensado para que se adapte tanto a las pantallas de equipos de escritorio como a móviles y tablets.<br />
Bootstrap ha sido desarrollada y es mantenida por la empresa Twitter y la ha liberado como un producto Open Source.<br />
Tiene una filosofía muy intuitiva para el maquetado de sitios web que puede ser rápidamente aprendida por desarrolladores que no vienen del mundo del diseño web.<br />
La primera clase que podemos probar es 'class="container"' (esta clase muestra todo el contenido del div centrado).<br />

## Ventajas de usar Bootstrap

La más genérica es que permite simplificar el proceso de maquetación, sirviéndonos de guía para aplicar las buenas prácticas y los diferentes estándares. Aquí van unos cuantos beneficios más:

- Hace posible una web bien organizada de forma visual rápidamente: la curva de aprendizaje hace que su manejo sea rápido si ya sabes maquetar.
- Permite utilizar muchos elementos web: desde iconos a desplegables, combinando HTML5, CSS y Javascript.
- Sea lo que sea que creemos, el diseño será adaptable, no importa el dispositivo, la escala o resolución.
- El grid system: maquetar por columnas nunca fue tan fácil. Además, son muy configurables.
- Se integra muy bien con las principales librerías Javascript.
- El haber sido creado por Twitter nos da ciertas garantías: está muy pensado y hay mucho trabajo ya hecho. Por lo tanto, hay una comunidad muy activa creando, arreglando cosas, ofreciendo plugins y mucho más..
- Cuenta con implementaciones externas para WordPress, Drupal, etc.
- Nos permite usar Less o Sass, para enriquecer aún más los estilos de la web.


## Grilla o Grid System

Lo más importante de entender en un principio es el sistema de grillas que plantea la librería Bootstrap.<br />
El esquema de página que nos propone Bootstrap está compuesto por filas y columnas. En cada fila se puede definir de 1 hasta 12 columnas. Cada columna posee un ancho relativo a ese número 12.<br />
Para esto, aparece el concepto de "colapsar", éste hace referencia a lo que sucede cuando la pantalla del dispositivo en el que estoy viendo la página se achica y el contenido ya no entra en la cantidad de columnas que le asigné, entonces colapsa y las columnas que le asigné quedan sin efecto. Esto no se hace automático, esto lo tenemos que asignar nosotros con el **tipo** de columnas **lg md sm xs**.

Para ver y entender cómo creamos las columnas en cada fila y cómo **colapsan** según el ancho del dispositivo podemos analizar el siguiente caso:

<a target="_blank" href="https://codepen.io/fgarciajulia/pen/OpWgNK">Ejemplo con codepen</a>


Si abrimos esta página en un monitor con un ancho superior a 1200 px podemos ver que se muestran 3 columnas por fila:


![Imagen](https://fgarciajulia.github.io/mi_primera_pagina/img/boostrap1.jpg)


Debemos utilizar la clase “row” para indicar el comienzo de una fila. Dentro de la fila dispondremos tantos div como columnas tenga dicha fila. Para indicar el **tipo** de columna debemos utilizar la siguiente sintaxis:

```
  col-lg-*
```

El lugar donde aparece el asterisco deberá ser reemplazado por un valor entre 1 y 12 (en nuestro ejemplo hemos dispuesto un 4, esto quiere decir que quedan 8 unidades de columna para repartir entre las otras columnas).

En nuestro ejemplo cada una de las columnas tiene un valor 4 (siempre la suma de dichos valores de una fila debe sumar 12 o quedarán columnas vacías en dicho caso).

Como asignamos 4 unidades a cada columna las 3 columnas tienen el mismo ancho:

```
    <div class="row">
      <div class="col-lg-4"  style="background-color:#aaa">
        <h1>Columna 1</h1> 
        <p>Esto es una prueba de bootstrap.</p>
      </div>
      <div class="col-lg-4"  style="background-color:#bbb">
        <h1>Columna 2</h1> 
        <p>Esto es una prueba de bootstrap.</p>
      </div>
      <div class="col-lg-4"  style="background-color:#ccc">
        <h1>Columna 3</h1> 
        <p>Esto es una prueba de bootstrap.</p>
      </div>
    </div>
```

En nuestro <a target="_blank" href="https://codepen.io/fgarciajulia/pen/OpWgNK">ejemplo anterior</a>, probemos ahora de empezar a disminuir el ancho del navegador mediante el mouse, achicamos la ventana y veremos que cuando el ancho del navegador es menor a 1200 px colapsan las columnas de la primer fila y se muestran una debajo de otra (esto sucede en cualquier dispositivo cuyo ancho en píxeles es menor a 1200px):

![Imagen](https://fgarciajulia.github.io/mi_primera_pagina/img/boostrap2.jpg)

Pero ahora nos preguntamos porque la segunda fila que hemos definido no colapsa cuando el ancho del navegador baja de 1200px, esto es debido que hemos definido cada columna con la siguiente sintaxis:

```
    <div class="row">
      <div class="col-md-4"  style="background-color:#aaa">
        <h1>Columna 1</h1> 
        <p>Esto es una prueba de bootstrap.</p>
      </div>
      <div class="col-md-4"  style="background-color:#bbb">
        <h1>Columna 2</h1> 
        <p>Esto es una prueba de bootstrap.</p>
      </div>
      <div class="col-md-4"  style="background-color:#ccc">
        <h1>Columna 3</h1> 
        <p>Esto es una prueba de bootstrap.</p>
      </div>
    </div>
```


Cuando utilizamos la clase "col-**md**-*" luego la fila colapsará cuando el ancho del navegador se reduzca a menos de 992px, podemos probarlo fácilmente reduciendo más el ancho del navegador y ver que ahora colapsan tanto la primera fila como la segunda fila:

![Imagen](https://fgarciajulia.github.io/mi_primera_pagina/img/boostrap3.jpg)

Lo mismo sucederá cuando utilicemos "col-**sm**-*" y reduzcamos los 768px:

![Imagen](https://fgarciajulia.github.io/mi_primera_pagina/img/boostrap4.jpg)

Por último hay que decir que cuando utilizamos las clases "col-**xs**-*" **nunca** colapsarán las columnas.<br />
Es bueno analizar de dónde provienen las palabras que dan origen a las reglas de estilo que provee Bootstrap:

  col-**xs**-*  -- -- -- -- e(**x**)tra (**s**)mall <br />
  col-**sm**-*  -- -- -- -- (**sm**)all<br />
  col-**md**-*  -- -- -- -- (**m**)e(**d**)ium<br />
  col-**lg**-*  -- -- -- -- (**l**)ar(**g**)e<br />


Las columnas colapsarán o se redistribuirán de acuerdo al tipo de clase que le asignemos nosotros. Si no queremos que colapse entonces empleamos col-xs-*

Estas clases son combinables, de manera que yo podría decir que cuando colapse las 4 columnas del tipo **lg** queden unas 8 columnas del tipo **xs**.

por ejemplo:
```
      <div class="col-xs-8 col-lg-4"  style="background-color:#aaa">
```
Se pueden ver muchos más ejemplos en la <a target="_blank" href="http://getbootstrap.com/css/#grid-options">página oficial</a>.

## IMPORTANTE:

Para entender mejor todo esto deberían ver los videos de <a target="_blank" href="https://www.youtube.com/watch?v=nug1pMke-y4&index=1&list=PLhSj3UTs2_yWTKvu1Aq3xUhzIJNBZ3MFW">Falcon Master</a>hablan de Bootstrap. Sobre todo los primeros dos que hablan de la instalación y las grillas.

<div class="Grid">
    <a href="https://fgarciajulia.github.io/mi_primera_pagina/instalacion-bootstrap" class="my-btn anterior">Anterior</a>
    <a href="https://fgarciajulia.github.io/mi_primera_pagina" class="my-btn home">Home</a>
    <a href="https://fgarciajulia.github.io/mi_primera_pagina/menu-bootstrap" class="my-btn siguiente">Siguiente</a>
</div>