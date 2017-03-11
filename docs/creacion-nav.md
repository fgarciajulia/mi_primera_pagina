# Creamos el menú de nuestra página
Como en el capítulo anterior explicamos la estructura de los menús de bootstrap, no vamos a entrar mucho en detalle. Simplemente les dejo el código ya masticado para que lo copien:

Lo vamos a colocar dentro de la etiqueta body, y vamos a borrar el Hola mundo, porque ya no lo necesitamos.

```
<!-- menú -->
    <nav id="mainNav" class="navbar navbar-default navbar-fixed-top navbar-custom">
        <div class="container">
            <div class="navbar-header">
                <!-- boton mobile -->
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
                </button>
                <!-- /.boton mobile -->
                <a class="navbar-brand" href="#">Start Bootstrap</a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <!-- Listado de items -->
                <ul class="nav navbar-nav navbar-right">
                    <li class="page-scroll">
                        <a href="#">Portfolio</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#">About</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>
```

Una vez copiado este código vamos a **auto-indentar** el archivo, para hacer esto cada programa utiliza distintos comandos.<br />
El que instalo el visual code, e instalo correctamente las extenciones con solo apretar **Shift+Alt+F** ya se indenta solo.<br />
¿Qué es la indentación? Te lo explico a continuación...

## Indentación o sangrado.

Este término significa mover un bloque de texto hacia la derecha insertando espacios o tabuladores, para así separarlo del margen izquierdo y mejor distinguirlo del texto adyacente.

Si hay una forma rápida de irritar a un programador es pedirle que revise un codigo mal indentado. Es como escribir con faltas de ortografía o peor aún, porque en este caso no se llega a entender o se presta a confuciones.

En la mayoria de los lenguajes la computadora no entiende de espacios o tabulaciones, HTML es uno de los que no afectan. Pero SI afecta en la comprención de quien lo programa o de quien tiene que hacerle mantenimiento un tiempo despues.

Por eso yo voy a insistir a lo largo del tutorial en la indentación.
