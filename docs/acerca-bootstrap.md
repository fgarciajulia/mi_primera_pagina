# 3.1 Acerca de Bootstrap

Bootstrap es un framework (librerías de CSS) que nos facilita y estandariza el desarrollo de sitios web.<br />
Está pensado para que se adapte tanto a las pantallas de equipos de escritorio como a móviles y tablets.<br />
Bootstrap ha sido desarrollada y es mantenida por la empresa Twitter y la ha liberado como un producto Open Source.<br />
Tiene una filosofía muy intuitiva para el maquetado de sitios web que puede ser rápidamente aprendida por desarrolladores que no vienen del mundo del diseño web.<br />
La primera clase que podemos probar es class="container" (esta muestra todo el contenido del div centrado).<br />

## Ventajas de usar Bootstrap

La más genérica es que permite simplificar el proceso de maquetación, sirviéndonos de guía para aplicar las buenas prácticas y los diferentes estándares. Aquí van unos cuantos pros más:

- Puedes tener una web bien organizada de forma visual rápidamente: la curva de aprendizaje hace que su manejo sea rápido si ya sabes maquetar.
- Permite utilizar muchos elementos web: desde iconos a desplegables, combinando HTML5, CSS y Javascript.
- Sea lo que sea que creemos, el diseño será adaptable, no importa el dispositivo, la escala o resolución.
- El grid system: maquetar por columnas nunca fue tan fácil. Además, son muy configurables.
- Se integra muy bien con las principales librerías Javascript.
- El haber sido creado por Twitter nos da ciertas garantías: está muy pensado y hay mucho trabajo ya hecho. Por lo tanto, hay una comunidad muy activa creando, arreglando cosas, ofreciendo plugins y mucho más..
- Cuenta con implementaciones externas para WordPress, Drupal, etc.
- Nos permite usar Less o sass, para enriquecer aún más los estilos de la web.


## Grilla

Lo más importante de entender en un principio es el sistema de grillas que plantea la librería Bootstrap.<br />
Debemos pensar para armar nuestro esquema de la página que tenemos la posibilidad de definir filas y en cada fila definir de 1 hasta 12 columnas. Cada columna con un ancho relativo a ese número 12.<br />
Luego Bootstrap se encarga de colapsar las columnas cuando se accede al sitio desde un dispositivo con una capacidad limitada en cuanto al ancho en píxeles (esto permite una experiencia más placentera al visitante que accede a nuestra página desde un celular con capacidades limitadas)<br />
Para ver y entender como creamos las columnas en cada fila y como colapsan según el ancho del dispositivo podemos analizar el siguiente caso:


[Ejemplo con codepen](https://codepen.io/fgarciajulia/pen/OpWgNK)


Si abrimos esta página en un monitor con un ancho superior a 1200 px podemos ver que se muestran tres columnas por fila:


![Imagen](https://fgarciajulia.github.io/mi_primera_pagina/img/boostrap1.jpg)


Debemos utilizar la clase "row" para indicar el comienzo de una fila. Dentro de la fila dispondremos tantos div como columnas tenga dicha fila. Para indicar cada columna debemos utilizar la siguiente sintaxis para cada columna:

```
  col-lg-*
```

Donde aparece el asterisco lo remplazamos por un valor entre 1 y 12 (en nuestro ejemplo hemos dispuesto un 4, esto quiere decir que quedan 8 unidades de columna para repartir entre las otras columnas)

En nuestro ejemplo cada una de las columnas tiene un valor 4 (siempre la suma de dichos valores de una fila debe sumar 12 o quedarán columnas vacías en dicho caso)<br />
Como asignamos cuatro a cada columna las tres columnas tienen el mismo ancho:

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

En nuestro [ejemplo anterior](https://codepen.io/fgarciajulia/pen/OpWgNK), probemos ahora de empezar a disminuir el ancho del navegador mediante el mouse, achicamos la ventana y veremos que cuando el ancho del navegador es menor a 1200 px colapsan las columnas de la primer fila y se muestran una debajo de otra (esto sucede en cualquier dispositivo cuyo ancho en píxeles es menor a 1200):

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
Es bueno analizar de que palabras vienen los nombres de reglas de estilo que provee Bootstrap:

  col-**xs**-*  -- -- -- -- e(**x**)tra (**s**)mall <br />
  col-**sm**-*  -- -- -- -- (**sm**)all<br />
  col-**md**-*  -- -- -- -- (**m**)e(**d**)ium<br />
  col-**lg**-*  -- -- -- -- (**l**)ar(**g**)e<br />

Ahora depende del tipo de página que uno tiene que implementar el definir en que momento queremos que nuestra estructura de página colapse sus columnas. Si no queremos que colapse luego empleamos col-xs-* para definir las distintas columnas. 


<div class="Grid">
    <a href="https://fgarciajulia.github.io/mi_primera_pagina/instalacion-bootstrap" class="my-btn anterior">Anterior</a>
    <a href="https://fgarciajulia.github.io/mi_primera_pagina" class="my-btn home">Home</a>
    <a href="https://fgarciajulia.github.io/mi_primera_pagina/menu-bootstrap" class="my-btn siguiente">Siguiente</a>
</div>