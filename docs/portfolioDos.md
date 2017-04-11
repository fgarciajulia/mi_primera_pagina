# 14. Portfolio segunda parte

## Detalle del Portfolio

Para realizar el detalle podemos usar varias librerías js, la del ejemplo viene integrada en Bootstrap, por lejos NO es la mejor librería para mostrar contenido en forma de "popup", pero lo tenemos muy fácil porque solo hay que colocar el html como nos indica boostrap y listo.

El que quiera hacer cosas más interesantes puede investigar <a target="_blank" href="http://dimsemenov.com/plugins/magnific-popup/">Magnific popup</a> en la misma página les enseñan cómo usarlo, y a estas alturas, que añadieron tantas librerías al proyecto, no creo que les resulte difícil implementar esta otra.

A modo de ejemplo, quería mostrarles una web personal en la que después de unas horas personalizando Magnific popup, armé una estructura con columnas dentro del popup<a target="_blank" href="http://www.dacu.com.ar">www.dacu.com.ar</a>.

Yo creo que por ahora está bien arrancar con la librería que viene integrada en Bootstrap, sobre todo porque quizás ahora tengan que preocuparse también por "que poner dentro del porfolio". Y lidiar con la edición de imágenes.


## HTML

Hay algunas claves que respetar, si se fijan en el siguiente código, en la primera línea el portfolio tiene un id: `portfolioModal1`, este id debe ser igual al link que colocamos en la vista previa del porfolio, mas precisamente cuando escribimos: `<a href="#portfolioModal1" class="portfolio-link" data-toggle="modal">` dentro del href.<br />
Esto es lo que le indica al js que debe abrir ese detalle y no otro, de manera que cuando coloquemos los 6 portfolios estos deben estar todos revisados, y sin repetirse entre los distintos porfolios.


```
  <div id="portfolioModal1" class="portfolio-modal modal fade" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-content">
      <div class="close-modal" data-dismiss="modal">
        <div class="lr">
          <div class="rl">
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-lg-offset-2">
            <div class="modal-body">
              <h2>Titulo del proyecto 1</h2>
              <hr class="star-primary">
              <img src="img/portfolio/cabin.png" class="img-responsive img-centered" alt="">
              <p>
                Utilice esta área de la página para describir su proyecto. Lo que hizo, a quién, Puede colocar links a
                <a href="www.dacu.com.ar">la web realizada</a>, etc.
              </p>
              <ul class="list-inline item-details">
                <li>Cliente:
                  <strong><a href="http://startbootstrap.com">Start Bootstrap</a></strong>
                </li>
                <li>Fecha:
                  <strong><a href="http://startbootstrap.com">Abril 2017</a></strong>
                </li>
                <li>Servicio:
                  <strong><a href="http://startbootstrap.com">Desarrollo Web</a></strong>
                </li>
              </ul>
              <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
```
Luego es cuestion de repetir este código una vez por cada detalle de cada porfolio, en el siguiente codigo se encuentran los 6 (si ya copiaron el anterior salteenlo).

```
  <!-- Portfolio Modals -->
  <div id="portfolioModal1" class="portfolio-modal modal fade" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-content">
      <div class="close-modal" data-dismiss="modal">
        <div class="lr">
          <div class="rl">
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-lg-offset-2">
            <div class="modal-body">
              <h2>Titulo del proyecto 1</h2>
              <hr class="star-primary">
              <img src="img/portfolio/cabin.png" class="img-responsive img-centered" alt="">
              <p>
                Utilice esta área de la página para describir su proyecto. Lo que hizo, a quién, Puede colocar links a
                <a href="www.dacu.com.ar">la web realizada</a>, etc.
              </p>
              <ul class="list-inline item-details">
                <li>Cliente:
                  <strong><a href="http://startbootstrap.com">Start Bootstrap</a></strong>
                </li>
                <li>Fecha:
                  <strong><a href="http://startbootstrap.com">Abril 2017</a></strong>
                </li>
                <li>Servicio:
                  <strong><a href="http://startbootstrap.com">Desarrollo Web</a></strong>
                </li>
              </ul>
              <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="portfolioModal2" class="portfolio-modal modal fade" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-content">
      <div class="close-modal" data-dismiss="modal">
        <div class="lr">
          <div class="rl">
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-lg-offset-2">
            <div class="modal-body">
              <h2>Titulo del proyecto 2</h2>
              <hr class="star-primary">
              <img src="img/portfolio/cake.png" class="img-responsive img-centered" alt="">
              <p>
                Utilice esta área de la página para describir su proyecto. Lo que hizo, a quién, Puede colocar links a
                <a href="www.dacu.com.ar">la web realizada</a>, etc.
              </p>
              <ul class="list-inline item-details">
                <li>Cliente:
                  <strong><a href="http://startbootstrap.com">Start Bootstrap</a></strong>
                </li>
                <li>Fecha:
                  <strong><a href="http://startbootstrap.com">Abril 2017</a></strong>
                </li>
                <li>Servicio:
                  <strong><a href="http://startbootstrap.com">Desarrollo Web</a></strong>
                </li>
              </ul>
              <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="portfolioModal3" class="portfolio-modal modal fade" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-content">
      <div class="close-modal" data-dismiss="modal">
        <div class="lr">
          <div class="rl">
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-lg-offset-2">
            <div class="modal-body">
              <h2>Titulo del proyecto 3</h2>
              <hr class="star-primary">
              <img src="img/portfolio/circus.png" class="img-responsive img-centered" alt="">
              <p>
                Utilice esta área de la página para describir su proyecto. Lo que hizo, a quién, Puede colocar links a
                <a href="www.dacu.com.ar">la web realizada</a>, etc.
              </p>
              <ul class="list-inline item-details">
                <li>Cliente:
                  <strong><a href="http://startbootstrap.com">Start Bootstrap</a></strong>
                </li>
                <li>Fecha:
                  <strong><a href="http://startbootstrap.com">Abril 2017</a></strong>
                </li>
                <li>Servicio:
                  <strong><a href="http://startbootstrap.com">Desarrollo Web</a></strong>
                </li>
              </ul>
              <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="portfolioModal4" class="portfolio-modal modal fade" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-content">
      <div class="close-modal" data-dismiss="modal">
        <div class="lr">
          <div class="rl">
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-lg-offset-2">
            <div class="modal-body">
              <h2>Titulo del proyecto 4</h2>
              <hr class="star-primary">
              <img src="img/portfolio/game.png" class="img-responsive img-centered" alt="">
              <p>
                Utilice esta área de la página para describir su proyecto. Lo que hizo, a quién, Puede colocar links a
                <a href="www.dacu.com.ar">la web realizada</a>, etc.
              </p>
              <ul class="list-inline item-details">
                <li>Cliente:
                  <strong><a href="http://startbootstrap.com">Start Bootstrap</a></strong>
                </li>
                <li>Fecha:
                  <strong><a href="http://startbootstrap.com">Abril 2017</a></strong>
                </li>
                <li>Servicio:
                  <strong><a href="http://startbootstrap.com">Desarrollo Web</a></strong>
                </li>
              </ul>
              <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="portfolioModal5" class="portfolio-modal modal fade" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-content">
      <div class="close-modal" data-dismiss="modal">
        <div class="lr">
          <div class="rl">
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-lg-offset-2">
            <div class="modal-body">
              <h2>Titulo del proyecto 5</h2>
              <hr class="star-primary">
              <img src="img/portfolio/safe.png" class="img-responsive img-centered" alt="">
              <p>
                Utilice esta área de la página para describir su proyecto. Lo que hizo, a quién, Puede colocar links a
                <a href="www.dacu.com.ar">la web realizada</a>, etc.
              </p>
              <ul class="list-inline item-details">
                <li>Cliente:
                  <strong><a href="http://startbootstrap.com">Start Bootstrap</a></strong>
                </li>
                <li>Fecha:
                  <strong><a href="http://startbootstrap.com">Abril 2017</a></strong>
                </li>
                <li>Servicio:
                  <strong><a href="http://startbootstrap.com">Desarrollo Web</a></strong>
                </li>
              </ul>
              <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="portfolioModal6" class="portfolio-modal modal fade" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-content">
      <div class="close-modal" data-dismiss="modal">
        <div class="lr">
          <div class="rl">
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-lg-offset-2">
            <div class="modal-body">
              <h2>Titulo del proyecto 6</h2>
              <hr class="star-primary">
              <img src="img/portfolio/submarine.png" class="img-responsive img-centered" alt="">
              <p>
                Utilice esta área de la página para describir su proyecto. Lo que hizo, a quién, Puede colocar links a
                <a href="www.dacu.com.ar">la web realizada</a>, etc.
              </p>
              <ul class="list-inline item-details">
                <li>Cliente:
                  <strong><a href="http://startbootstrap.com">Start Bootstrap</a></strong>
                </li>
                <li>Fecha:
                  <strong><a href="http://startbootstrap.com">Abril 2017</a></strong>
                </li>
                <li>Servicio:
                  <strong><a href="http://startbootstrap.com">Desarrollo Web</a></strong>
                </li>
              </ul>
              <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
```
# CSS

En algún lado del archivo main.css pondremos los siguientes estilos para darle formato a la ventana que se abre.

```
/* portfolio */

.portfolio-modal .modal-content {
  border-radius: 0;
  background-clip: border-box;
  -webkit-box-shadow: none;
  box-shadow: none;
  border: none;
  min-height: 100%;
  padding: 100px 0;
  text-align: center;
}

.portfolio-modal .modal-content h2 {
  margin: 0;
  font-size: 3em;
}

.portfolio-modal .modal-content img {
  margin-bottom: 30px;
}

.portfolio-modal .modal-content .item-details {
  margin: 30px 0;
}

.portfolio-modal .close-modal {
  position: absolute;
  width: 75px;
  height: 75px;
  background-color: transparent;
  top: 25px;
  right: 25px;
  cursor: pointer;
}

.portfolio-modal .close-modal:hover {
  opacity: 0.3;
}

.portfolio-modal .close-modal .lr {
  height: 75px;
  width: 1px;
  margin-left: 35px;
  background-color: #2C3E50;
  transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  /* IE 9 */
  -webkit-transform: rotate(45deg);
  /* Safari and Chrome */
  z-index: 1051;
}

.portfolio-modal .close-modal .lr .rl {
  height: 75px;
  width: 1px;
  background-color: #2C3E50;
  transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  /* IE 9 */
  -webkit-transform: rotate(90deg);
  /* Safari and Chrome */
  z-index: 1052;
}

.portfolio-modal .modal-backdrop {
  opacity: 0;
  display: none;
}

```

Súper ! Ya tenemos nuestro portfolio.
Recuerden <a target="_blank" href="https://fgarciajulia.github.io/mi_primera_pagina/inspeccionar-elemento"> inspeccionar el elemento</a> si algo no les quedó como querían y de auto-indentar con el **shift+Alt+F**.


<div class="Grid">
    <a href="https://fgarciajulia.github.io/mi_primera_pagina/portfolio" class="my-btn anterior">Anterior</a>
    <a href="https://fgarciajulia.github.io/mi_primera_pagina" class="my-btn home">Home</a>
    <a href="https://fgarciajulia.github.io/mi_primera_pagina/" class="my-btn siguiente">Siguiente</a>
</div>