# 16. Menú segunda parte

## Intro

En este capítulo vamos a retomar la personalización del menú en algunos aspectos que antes nos hubiera resultado inútil. Como por ejemplo vincular los links a las distintas partes de la página que antes no teníamos y añadir una transición al scroll que nos muestre esa parte.

## Anclas / Anchor

Seguro que ya han visto este tipo de enlaces, sobre todo utilizados en esos largos artículos de Wikipedia, que rápidamente te llevan a una parte concreta de un artículo dentro de la misma página. A estos enlaces se los conoce como Anclas o (Anchor en inglés) en HTML o Enlaces Internos HTML.<br />
El truco está (como hicimos con el portfolio) en colocar dentro de la propiedad href de la etiqueta a el id del elemento al que queremos ir, anteponiendo el símbolo # (hash). Por ejemplo:
```
<a href=”#elemento-al-que-quiero-ir”>link</a>
```

De manera que el link que acabamos de crear nos va a llevar a un elemento que tenga el `id="elemento-al-que-quiero-ir"`, ya solo nos falta asignarle el id al elemento de la siguiente manera:
```
<div id="elemento-al-que-quiero-ir">contenido que quiero linkear</div>
```

Ya tenemos un link que nos dirige a un contenido que está en la misma página, que es lo que necesitamos para nuestra web, el siguiente paso es aplicarlo a nuestro proyecto.


## Nuestro menú

Hasta el momento nuestro menú tenia las etiquetas  `a` de la siguiente manera:
```
<a href="#">Acerca de</a>
```
 Tendríamos (en este caso) que añadir adentro de la propiedad `href` el `id` del elemento "Acerca de", que es `acerca-de`, y nos quedaría asi
```
<a href="#acerca-de ">Acerca de</a>
```

Hacemos lo mismo con el resto del menú, incluyendo el link donde figura el nombre de la web

```
  <nav id="mainNav" class="navbar navbar-default navbar-fixed-top navbar-custom">
    <div class="container">
      <div class="navbar-header">
        <!-- boton mobile -->
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span> Menú <i class="fa fa-bars"></i>
        </button>
        <!-- /.boton mobile -->
        <a class="navbar-brand" href="#home">Mi primera página</a>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <!-- Listado de items -->
        <ul class="nav navbar-nav navbar-right">
          <li class="page-scroll">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li class="page-scroll">
            <a href="#acerca-de">Acerca de</a>
          </li>
          <li class="page-scroll">
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container -->
  </nav>
```

Si hay algún ancla que no les funciona, solo deben verificar que la sección tenga el mismo nombre de id que el que el link, anteponiendo el #.
Cuando apretas el botón y un ancla no fue encontrado en la consola de <a target="_blank" href="https://fgarciajulia.github.io/mi_primera_pagina/inspeccionar-elemento">inspeccionar el elemento</a> te figura el error.


<div class="Grid">
    <a href="https://fgarciajulia.github.io/mi_primera_pagina/portfolioDos" class="my-btn anterior">Anterior</a>
    <a href="https://fgarciajulia.github.io/mi_primera_pagina" class="my-btn home">Home</a>
    <a href="https://fgarciajulia.github.io/mi_primera_pagina/menu-tercera-parte" class="my-btn siguiente">Siguiente</a>
</div>