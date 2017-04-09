# 3.2 Menú de navegación

Bootstrap nos va a permitir crear barras de navegación muy fácilmente por medio de las clases y componentes que trae por defecto este framework. También nos va a permitir crear barras de menú responsive que se adapten a cualquier dispositivo, menús despegables, cajas de búsqueda y otras funcionalidades.
![Imagen](https://fgarciajulia.github.io/mi_primera_pagina/img/navbar-bootstrap-demo.gif)

## Un ejemplo simple

Entremos nuevamente a codepen para ver el siguiente ejemplo:

<a target="_blank" href="http://codepen.io/fgarciajulia/pen/aJpaPb">Codepen</a>.

### Analicemos un poco lo que dice:

![Imagen](https://fgarciajulia.github.io/mi_primera_pagina/img/navegador-bootstrap.jpg)

1. Apertura con la etiqueta `<nav>` y las clases .navbar y .navbar-default que crean por defecto una barra de navegación con estilos en Bootstrap

2. El div con la clase “container” determina el ancho de lo que está adentro, en este caso utiliza un máximo de 1200 px centrado al medio y tiene un tipo de responsive escalonado según las medidas de la grilla. Si fuera container-fluid entonces siempre tendría el ancho de la pantalla.

3. Este es el botón que aparece cuando la barra de navegación se encuentra en un dispositivo con viewport pequeño, tiene el atributo data-target apuntando al #navbarcollapse que es el menú que se va a desplegar también con la clase .navbar-toggle que es una clase de Bootstrap que le da este comportamiento.

4. Son las líneas que se muestran en el botón y son tres, podemos colocar las que queramos.

5. Este es el lema o logotipo, este aparecerá en la parte izquierda del menú.

6. Etiqueta que contendrá el menú, con el ID y clases ideales de Bootstrap para su funcionamiento.

7. La lista del menú como tal, los ítems que se mostrarán en el menú.

**Cabe decir que para que este menú funcione correctamente debe de estar vinculado tanto el archivo .js de Bootstrap como el jQuery.**

### Barra de navegación pegada arriba (Fixed Navbar) con Bootsrap

Bootstrap también proporciona la forma para que la barra de navegación quede fija en la parte superior de la ventana y quede siempre visible a pesar del recorrido vertical que se hace mediante el scroll.

Solamente añadiendo la clase .**navbar-fixed-top** en la etiqueta <nav> junto a las clases .navbar y .navbar-default


```
<nav role="navigation" class="navbar navbar-default navbar-fixed-top">
```

## Extendiendo la barra de navegación navbar

### Items con menús tipo Dropdown.

Podemos agregarle funcionalidad a un ítem para que éste se despliegue muestre una lista de ítems. Solamente le agregamos al ítem la clase .dropdown y agregamos las clases básicas de Bootstrap para dar la funcionalidad.


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

### Buscadores

También podemos incluir cajas de búsquedas a la barra de navegación  por medio de la etiqueta form.

```
<form role="search" class="navbar-form navbar-right">
    <div class="form-group">
         <input type="text" placeholder="Search" class="form-control">
    </div>
</form>
```

## Documentación

Más ejemplos de plantillas básicas:

<a target="_blank" href="http://getbootstrap.com/getting-started/#examples">Ejemplos de menú</a>.

Pueden ver toda esta información y más en la página oficial:

<a target="_blank" href="http://getbootstrap.com/components/#navbar">Documentación de navegadores</a>.


<div class="Grid">
    <a href="https://fgarciajulia.github.io/mi_primera_pagina/acerca-bootstrap" class="my-btn anterior">Anterior</a>
    <a href="https://fgarciajulia.github.io/mi_primera_pagina" class="my-btn home">Home</a>
    <a href="https://fgarciajulia.github.io/mi_primera_pagina/inspeccionar-elemento" class="my-btn siguiente">Siguiente</a>
</div>