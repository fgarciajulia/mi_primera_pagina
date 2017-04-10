# 14. Portfolio

## Algo que tienes que saber

Esta es una de las partes más difíciles, pero animo! que ya casi terminamos.<br />
Si llegaste hasta acá quiere decir que sos lo suficientemente persistente como para lograr ser un profesional. Una de las cualidades más importantes de un programador es la persistencia, la superación de la frustración y el ser autodidacta.<br />
Si superaste los 14 capítulos, (por más que te haya costado mucho) pongo mi voto de confianza en que vas a ser muy buen@ en esto. Ya va a haber tiempo para aprender más, lo importante es que ya comenzaste :D.

## intro

Para seguir extendiendo el preámbulo les voy a volver a colocar el link de cómo debe quedar el porfolio, para que se entienda mejor la explicación:<br />
<a target="_blank" href="http://dacu.com.ar/mi_primera_pagina/">mi_primera_pagina</a><br />
Como pudieron ver el portfolio está dividido en la parte que se ve “tipo presentación” y otra cuando haces click que es “tipo detalle”.<br />
Entonces, en este capítulo vamos a ver cómo realizar la parte de presentación, y en el siguiente capítulo veremos cómo colocar los detalles de cada uno.<br />


## Img/porfolio

Vamos a bajar las imágenes que usaremos como miniaturas y para la descripción (que es la misma).<br />
Acá dejo la carpeta porfolio que vamos a colocar **dentro** de la carpeta img.
Cuando ustedes reemplacen las imagenes por las de ustedes, deben tener todas las mismas dimenciones en `px` entre sí, esto es importante, pueden utilizar cualquier editor de imágenes para esto.

<a target="_blank" href="https://fgarciajulia.github.io/mi_primera_pagina/portfolio.rar">portfolio.rar</a>

## HTML

Copiamos el siguiente código que tiene las imágenes `<img` y los iconos `<i class="fa fa-search-plus fa-3x"></i>` de los que ya hablamos en capítulos anteriores, unas cuantas clases que nos servirán después para colocar estilos, y la etiqueta <a> que nos servirá para linkiar los detalles de cada imagen. Este link tiene que coincidir con el `id` que pondremos en el capitulo siguiente.


```
<section id="portfolio">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>Portfolio</h2>
                    <hr class="star-primary">
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4 portfolio-item">
                    <a href="#portfolioModal1" class="portfolio-link" data-toggle="modal">
                        <div class="caption">
                            <div class="caption-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/cabin.png" class="img-responsive" alt="">
                    </a>
                </div>
                <div class="col-sm-4 portfolio-item">
                    <a href="#portfolioModal2" class="portfolio-link" data-toggle="modal">
                        <div class="caption">
                            <div class="caption-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/cake.png" class="img-responsive" alt="">
                    </a>
                </div>
                <div class="col-sm-4 portfolio-item">
                    <a href="#portfolioModal3" class="portfolio-link" data-toggle="modal">
                        <div class="caption">
                            <div class="caption-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/circus.png" class="img-responsive" alt="">
                    </a>
                </div>
                <div class="col-sm-4 portfolio-item">
                    <a href="#portfolioModal4" class="portfolio-link" data-toggle="modal">
                        <div class="caption">
                            <div class="caption-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/game.png" class="img-responsive" alt="">
                    </a>
                </div>
                <div class="col-sm-4 portfolio-item">
                    <a href="#portfolioModal5" class="portfolio-link" data-toggle="modal">
                        <div class="caption">
                            <div class="caption-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/safe.png" class="img-responsive" alt="">
                    </a>
                </div>
                <div class="col-sm-4 portfolio-item">
                    <a href="#portfolioModal6" class="portfolio-link" data-toggle="modal">
                        <div class="caption">
                            <div class="caption-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/submarine.png" class="img-responsive" alt="">
                    </a>
                </div>
            </div>
        </div>
    </section>
```
# CSS

En algún lado del archivo main.css pondremos los siguientes estilos, en los que (entre otras cosas) colocamos el icono de búsqueda arriba de la imagen con la propiedad `position: absolute;`, y configuramos el `:hover`

```
/* portfolio */

#portfolio .portfolio-item {
  margin: 0 0 15px;
  right: 0;
}
#portfolio .portfolio-item .portfolio-link {
  display: block;
  position: relative;
  max-width: 400px;
  margin: 0 auto;
}
#portfolio .portfolio-item .portfolio-link .caption {
  background: rgba(24, 188, 156, 0.9);
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all ease 0.5s;
  -webkit-transition: all ease 0.5s;
  -moz-transition: all ease 0.5s;
}
#portfolio .portfolio-item .portfolio-link .caption:hover {
  opacity: 1;
}
#portfolio .portfolio-item .portfolio-link .caption .caption-content {
  position: absolute;
  width: 100%;
  height: 20px;
  font-size: 20px;
  text-align: center;
  top: 50%;
  margin-top: -12px;
  color: white;
}
#portfolio .portfolio-item .portfolio-link .caption .caption-content i {
  margin-top: -12px;
}
#portfolio .portfolio-item .portfolio-link .caption .caption-content h3,
#portfolio .portfolio-item .portfolio-link .caption .caption-content h4 {
  margin: 0;
}
#portfolio * {
  z-index: 2;
}
@media (min-width: 767px) {
  #portfolio .portfolio-item {
    margin: 0 0 30px;
  }
}

.floating-label-form-group {
  position: relative;
  margin-bottom: 0;
  padding-bottom: 0.5em;
  border-bottom: 1px solid #eeeeee;
}
.floating-label-form-group input,
.floating-label-form-group textarea {
  z-index: 1;
  position: relative;
  padding-right: 0;
  padding-left: 0;
  border: none;
  border-radius: 0;
  font-size: 1.5em;
  background: none;
  box-shadow: none !important;
  resize: none;
}
.floating-label-form-group label {
  display: block;
  z-index: 0;
  position: relative;
  top: 2em;
  margin: 0;
  font-size: 0.85em;
  line-height: 1.764705882em;
  vertical-align: middle;
  vertical-align: baseline;
  opacity: 0;
  -webkit-transition: top 0.3s ease,opacity 0.3s ease;
  -moz-transition: top 0.3s ease,opacity 0.3s ease;
  -ms-transition: top 0.3s ease,opacity 0.3s ease;
  transition: top 0.3s ease,opacity 0.3s ease;
}
.floating-label-form-group:not(:first-child) {
  padding-left: 14px;
  border-left: 1px solid #eeeeee;
}
.floating-label-form-group-with-value label {
  top: 0;
  opacity: 1;
}
.floating-label-form-group-with-focus label {
  color: #18BC9C;
}
form .row:first-child .floating-label-form-group {
  border-top: 1px solid #eeeeee;
}

```


<div class="Grid">
    <a href="https://fgarciajulia.github.io/mi_primera_pagina/consumo-carrusel" class="my-btn anterior">Anterior</a>
    <a href="https://fgarciajulia.github.io/mi_primera_pagina" class="my-btn home">Home</a>
    <a href="https://fgarciajulia.github.io/mi_primera_pagina/footer" class="my-btn siguiente">Siguiente</a>
</div>