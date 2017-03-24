# 10. Creación de un footer

Como se puede ver en el [resultado de nuestro proyecto](http://dacu.com.ar/mi_primera_pagina/) el footer tendrá 3 columnas, una para la dirección, otra para las redes sociales y otro para un dato personalizado.

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

Lo primero que hicimos es abrir la etiqueta `<footer>`, esta etiqueta no es muy distinta al div, es una buena práctica usarla para determinar que es el footer, pero si usáramos un div no cambiaría el aspecto de la web.<br />
A esta etiqueta le colocamos la clase `text-center` que como bien indica la [documentación](http://getbootstrap.com/css/#type-alignment),lo que hace es centrar el texto de todo lo que este dentro.
<br />
También le asignamos la clase `footer-style`, que luego la usaremos para asignarle un color de fondo y un padding.

Abrimos un `div` con la clase `container` esta clase como ya explicamos en el [capítulo de bootstrap](https://fgarciajulia.github.io/mi_primera_pagina/acerca-bootstrap) le da un ancho determinado y responsive al contenido que hay dentro.

Luego abrimos 3 columnas 'col-md-4' que también explicamos en el [capítulo de bootstrap](https://fgarciajulia.github.io/mi_primera_pagina/acerca-bootstrap) y añadimos una clase `footer-col` que luego le asignaremos estilos.

El concepto de `container`, `conteiner-fluid` y las columnas de bootstrap es lógico que no lo entiendan en su totalidad al principio, o quizás se piensen que lo entendieron perfecto pero cuando lo van a usar no reacciona como esperaban. Es normal, lleva tiempo aprenderlo. Les vuelvo a dejar la [documentación oficial](http://getbootstrap.com/css/#overview-container).

Otro elemento nuevo es el de los iconos que los llamamos `<i class="fa fa-fw fa-facebook"></i>`, estos los instalamos en el [capitulo anterior](https://fgarciajulia.github.io/mi_primera_pagina/fontawesome), en este caso estamos usando las clases por defecto, y cambiar el icono es tan fácil como cambiar la clase.<br />
Pueden ver que icono le corresponde a cada icono en la [página oficial](http://fontawesome.io/icons/), por ejemplo en el que copiamos recién, la clase es `fa-facebook` y fue sacada de [acá](http://fontawesome.io/icon/facebook/).

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