# 10. Creación de un footer

Como se puede ver en el <a target="_blank" href="http://dacu.com.ar/mi_primera_pagina/">resultado de nuestro proyecto</a> el footer tendrá 3 columnas, una para la dirección, otra para las redes sociales y otro para un dato personalizado.

Vamos a copiar y pegar el siguiente código justo **antes** de comenzar a llamar los enlaces de **js**, en nuestro archivo `index.html`.
```
<footer class="text-center footer-style">
    <div class="container">
        <div class="row">
            <div class="col-md-4 footer-col">
                <h3>Dirección</h3>
                <p>
                    CABA - Argentina <br />
                    carrasco 400
                </p>
            </div>
            <div class="col-md-4 footer-col">
                <h3>Mis redes</h3>
                <ul class="list-inline">
                    <li>
                        <a  target="_blank" href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-facebook"></i></a>
                    </li>
                    <li>
                        <a  target="_blank" href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-google-plus"></i></a>
                    </li>
                    <li>
                        <a  target="_blank" href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-twitter"></i></a>
                    </li>
                    <li>
                        <a  target="_blank" href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a  target="_blank" href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-dribbble"></i></a>
                    </li>
                </ul>
            </div>
            <div class="col-md-4 footer-col">
                <h3>Trabajo FreeLancer</h3>
                <p>Tengo más de X años de experiencia en maquetación web y me apasiona lo que hago!</p>
            </div>
        </div>
    </div>
</footer>
```

## ¿Qué significa todo este código que copiamos?

Lo primero que hicimos es abrir la etiqueta `<footer>`, esta etiqueta no es muy distinta al div, es una buena práctica usarla para determinar qué es el footer, pero si usáramos un div no cambiaría el aspecto de la web.<br />
A esta etiqueta le colocamos la clase `text-center` que como bien indica la <a target="_blank" href="http://getbootstrap.com/css/#type-alignment">documentación</a>,lo que hace es centrar el texto de todo lo que esté dentro.
<br />
También le asignamos la clase `footer-style`, que luego la usaremos para asignarle un color de fondo y un padding.

Abrimos un `div` con la clase `container`, esta clase como ya explicamos en el <a target="_blank" href="https://fgarciajulia.github.io/mi_primera_pagina/acerca-bootstrap">capítulo de Bootstrap</a> le da un ancho determinado y responsive al contenido que hay dentro.

Luego abrimos 3 columnas 'col-md-4' que también explicamos en el <a target="_blank" href="https://fgarciajulia.github.io/mi_primera_pagina/acerca-bootstrap">capítulo de Bootstrap</a> y añadimos una clase `footer-col` a la que luego le asignaremos estilos.

El concepto de `container`, `container-fluid` y las columnas de Bootstrap es lógico que no lo entiendan en su totalidad al principio, o quizás piensen que lo entendieron perfecto pero cuando lo van a usar no reacciona como esperaban. Es normal, lleva tiempo aprenderlo. Les vuelvo a dejar la <a target="_blank" href="http://getbootstrap.com/css/#overview-container">documentación oficial</a>.

Otro elemento nuevo que se añade es el de los iconos. Para que aparezcan debemos como siempre llamarlos:`<i class="fa fa-fw fa-facebook"></i>`.Todos estos los instalamos en el <a target="_blank" href="https://fgarciajulia.github.io/mi_primera_pagina/fontawesome">capitulo anterior</a>, una vez instalados lo que hacemos es usar las clases por defecto, y cambiar el icono es tan fácil como cambiar la clase.<br />
Pueden ver qué clase le corresponde a cada icono en la <a target="_blank" href="http://fontawesome.io/icons/">página oficial</a>, por ejemplo en el que copiamos recién, la clase es `fa-facebook` y fue sacado de <a target="_blank" href="http://fontawesome.io/icon/facebook/">acá</a>.

## Añadimos algo de estilo

Por último colocamos algunos estilos al final de nuestro archivo main.css, para que se vea mejor:

```
/* footer */

.footer-style {
    padding-top: 50px;
    background-color: #2C3E50;
}
footer {
  color: white;
}
footer h3 {
  margin-bottom: 30px;
    font-weight: 800;
}
footer .footer-above {
  padding-top: 50px;
  background-color: #2C3E50;
}
footer .footer-col {
  margin-bottom: 50px;
}
footer .footer-below {
  padding: 25px 0;
  background-color: #233140;
}
```
Y ya tenemos nuestro footer listo!

<div class="Grid">
    <a href="https://fgarciajulia.github.io/mi_primera_pagina/fontawesome" class="my-btn anterior">Anterior</a>
    <a href="https://fgarciajulia.github.io/mi_primera_pagina" class="my-btn home">Home</a>
    <a href="https://fgarciajulia.github.io/mi_primera_pagina" class="my-btn siguiente">Siguiente</a>
</div>