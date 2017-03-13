# Instalación Bootstrap

Lo primero que hacemos es entrar a la página oficial e ir a get start

[http://getbootstrap.com/getting-started/](http://getbootstrap.com/getting-started/)

Luego descargamos la primera versión, la más simple, **NO** la que viene con Source Less, ni la que viene con sass.

Adentro del comprimido vamos a encontrarnos con 3 carpetas iguales a las que creamos en nuestro proyecto, extraemos todos los archivos en nuestras carpetas según correspondan.

Volvemos al visual code y nos debería quedar así:

![Imagen](https://fgarciajulia.github.io/mi_primera_pagina/img/estructura2.jpg)

Véase que borré unos cuantos archivos que no vamos a usar. Y también borre la última línea del archivo bootstrap.min.css que dice:

```
/*# sourceMappingURL=bootstrap.min.css.map */
```
Esto último es solo para mantener nuestro proyecto limpio.


En el siguiente paso vamos a copiar el código que figura en la página de bootstrap en el archivo index.html

[http://getbootstrap.com/getting-started/#template](http://getbootstrap.com/getting-started/#template)

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <title>Bootstrap 101 Template</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>
```

Esta es la estructura básica del archivo html, no entraremos muy en detalle al respecto, solo los mencionaremos.

- Tipo de archivo HTML
- Lenguaje (cambiar a español de ser necesario) 
- charset
- El título de la página.
- El link al archivo bootstrap.css que copiamos.
- Algunas configuraciones extras para los exploradores Internt Explorer.
- El cuerpo de la página con un titulo
- El link al archivo jquery.js (online).
- El link al archivo bootstrap.js que copiamos.

## Algunos ajustes

Yo prefiero trabajar (en tiempo de desarrollo) con el archivo bootstrap.css y no con el bootstrap.**min**.css , de manera que voy a mandar a llamar al otro archivo simplemente sacando el **min**.<br />
Para entender qué diferencia hay entre un archivo min ( minificado ) y uno no minificado pueden visitar esta página [https://lenguajecss.com/p/css/introduccion/minificar-css](Minificar CSS)

Por otro lado tampoco me gusta trabajar con el **jquery** de forma online, porque cuando se me corta internet no puedo seguir trabajando, para cambiar esto:
- Entramos a https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
- Hacemos botón derecho -> **guardar como** y lo guardamos en la carpeta js de nuestro proyecto.
- Una vez que está en nuestro proyecto reemplazamos la siguiente línea.

```
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
```

Por esta otra:

```
    <script src="js/jquery.min.js"></script>
```

Vamos a importar nuestro main.css **justo por debajo** de la línea que manda a llamar boostrap.css.

```
    <link href="css/main.css" rel="stylesheet">
```

Y como último cambio vamos a importar nuestro main.js **justo por debajo** de la línea que manda a llamar boostrap.js.

```
    <script src="js/main.js"></script>
```

Para cuando terminen esto podrán "guardar todos los archivos" y abrir el archivo index.html con el chrome y les aparecerá un **Hello, world!**.<br />
Luego hacemos botón derecho en la web y ponemos **inspeccionar elemento** o apretaremos F12.<br />
Si en la parte de abajo de la consola no figura ningún error en rojo, entonces hemos terminado la instalación de boostrap con éxito!<br />
Si nos figura un error será cuestión de leerlo, los más frecuentes son que no encuentra un archivo de los que hemos vinculado, esto puede ser porque escribimos mal una ruta o porque el archivo no está donde debería.<br />
Hay un [capitulo](https://fgarciajulia.github.io/mi_primera_pagina/inspeccionar-elemento) entero relacionado a esto.

<div class="Grid">
    <a href="https://fgarciajulia.github.io/mi_primera_pagina/estructura-archivos" class="my-btn anterior">Anterior</a>
    <a href="https://fgarciajulia.github.io/mi_primera_pagina" class="my-btn home">Home</a>
    <a href="https://fgarciajulia.github.io/mi_primera_pagina/acerca-bootstrap" class="my-btn siguiente">Siguiente</a>
</div>