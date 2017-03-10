# Menú de navegación

Bootstrap nos va a permitir crear barras de navegación muy fácilmente por medio de las clases y componentes que trae por defecto este framework. Nos va a permitir crear barras de menú responsive que se adapten a cualquier dispositivo, menús despegables, con cajas de búsqueda y otras funcionalidades.
![Imagen](https://fgarciajulia.github.io/mi_primera_pagina/img/navbar-bootstrap-demo.gif)

## Un ejemplo simple

Entremos nuevamente a codepen para ver el siguiente ejemplo:

[Codepen](http://codepen.io/fgarciajulia/pen/aJpaPb)

### Analicemos un poco lo que dice:

![Imagen](https://fgarciajulia.github.io/mi_primera_pagina/img/navegador-bootstrap.jpg)

1. Apertura con la etiqueta <nav> y las clases .navbar y .navbar-default que crean por defecto una barra de navegación con estilos en bootstrap

2. El div con la clase "container" determina el ancho de lo que esta adentro, en este caso utiliza un maximo de 1200px centrado al medio y tiene un tipo de responsive escalonado según las medidas de la grilla. su fuera conteiner-fluid entonces el mismo siempre tendria el ancho de la pantalla.

3. Éste es el botón que aparece cuando la barra de navegación se encuentra en un dispositivo con viewport pequeño, tiene el atributo data-target apuntando al #navbarcollapse que en si es el menú que se va a desplegar también con la clase .navbar-toggle que es una clase de bootstrap que le da este comportamiento.

4. Son las líneas que se muestran en el botón y son 3, podemos colocar las que queramos.

5. Este es el lema o logotipo, este aparecerá en la parte izquierda del menú.

6. etiqueta que contendrá el menú, con el id y clases ideales de bootstrap para su funcionamiento.

7. la lista del menú como tal, los ítems que se mostraran en el menú.

**Cabe decir que para que este menú funcione correctamente debe de estar vinculado tanto el archivo .js de bootstrap como el jQuery.**

### Barra de navegación pegada arriba (Fixed Navbar) con Bootsrap

Bootstrap también proporciona la forma para que la barra de navegación se quede fija en la parte superior de la ventana, y aunque la pagina sea movida a scroll verticalmente siempre esta barra será visible.

Solamente añadiendo la clase .**navbar-fixed-top** en la etiqueta <nav> junto a las clases .navbar y .navbar-default


```
<nav role="navigation" class="navbar navbar-default navbar-fixed-top">
```

## Extendiendo la barra de navegación navbar

### Items con menús tipo Dropdown.

Podemos agregar la funcionalidad que un ítem se despliegue para mostrar más ítems, solamente le agregamos al ítem la clase .dropdown y agregamos las clases básicas de bootstrap para dar la funcionalidad.


```
<li class="dropdown">
    <a data-toggle="dropdown" class="dropdown-toggle" href="#">Acerca de <b class="caret"></b></a>
        <ul role="menu" class="dropdown-menu">
            <li><a href="#">Quienes somos</a></li>
            <li><a href="#">Ubicación</a></li>
            <li><a href="#">Historia</a></li>
        </ul>
</li>
```

### buscadores

También podemos incluir cajas de búsquedas a la barra de navegación  por medio de la etiqueta form.

```
<form role="search" class="navbar-form navbar-right">
    <div class="form-group">
         <input type="text" placeholder="Search" class="form-control">
    </div>
</form>
```

## Documentación

Más ejemplos de plantillas basicas:

[Ejemplos de menú](http://getbootstrap.com/getting-started/#examples)

Puedes ver toda esta información y más en la página oficial:

[Documentación de navegadores](http://getbootstrap.com/components/#navbar)


[Home](https://fgarciajulia.github.io/mi_primera_pagina/)