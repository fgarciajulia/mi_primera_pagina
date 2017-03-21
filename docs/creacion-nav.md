# 5. Creamos el menú de nuestra página
Como en el capítulo anterior explicamos la estructura de los menús de bootstrap, no vamos a entrar mucho en detalle. Simplemente les dejo el código ya masticado para que lo copien:

Lo vamos a colocar dentro de la etiqueta body, y vamos a borrar el "Hola mundo", porque ya no lo necesitamos.

```
<!-- menú -->
<nav id="mainNav" class="navbar navbar-default navbar-fixed-top navbar-custom">
    <div class="container">
      <div class="navbar-header">
        <!-- boton mobile -->
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span> Menú <i class="fa fa-bars"></i>
        </button>
        <!-- /.boton mobile -->
        <a class="navbar-brand" href="#">Mi primera página</a>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <!-- Listado de items -->
        <ul class="nav navbar-nav navbar-right">
          <li class="page-scroll">
            <a href="#">Portfolio</a>
          </li>
          <li class="page-scroll">
            <a href="#">Acerca de</a>
          </li>
          <li class="page-scroll">
            <a href="#">Contacto</a>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container -->
</nav>
```

Una vez copiado este código vamos a **auto-indentar** el archivo, para hacer esto cada programa utiliza distintos comandos.<br />
El que instaló el Visual Code, e instaló correctamente las extensiones con solo apretar **Shift+Alt+F** ya se indenta solo.<br />
¿Qué es la indentación? Te lo explico a continuación...

## Indentación o sangrado

Este concepto implica mover líneas de código o bloques de texto hacia la derecha insertando espacios o tabuladores, para así separarlo del margen izquierdo y lograr que se distinga mejor del texto adyacente. El objetivo de la indentación es facilitar la lectura y comprensión del código mediante una estructura organizada y jerarquizada, permite una visualización rápida y clara.

Si hay una forma rápida de irritar a un programador es pedirle que revise un código mal indentado. Es como escribir con faltas de ortografía o peor aún, porque en este caso no se llega a entender o se presta a confusiones.

En la mayoría de los lenguajes la computadora no entiende de espacios o tabulaciones, HTML es uno de los que no afectan. Pero SI afecta en la comprensión de quien lo programa o de quien tiene que hacerle mantenimiento un tiempo después.

Por eso, voy a insistir a lo largo del tutorial en la indentación.

<div class="Grid">
    <a href="https://fgarciajulia.github.io/mi_primera_pagina/inspeccionar-elemento" class="my-btn anterior">Anterior</a>
    <a href="https://fgarciajulia.github.io/mi_primera_pagina" class="my-btn home">Home</a>
    <a href="https://fgarciajulia.github.io/mi_primera_pagina/estilo-nav" class="my-btn siguiente">Siguiente</a>
</div>