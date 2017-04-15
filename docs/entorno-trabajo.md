# 1. Preparamos nuestro entorno de trabajo.

## Editor de texto (IDE).
Para empezar vamos a necesitar un editor de texto, pueden utilizar el programa con el que ya estén acostumbrados.<br />

### Visual Code.

Yo utilizo el Visual Studio Code, acá les dejo la url para instalarlo. NO confundir con el Visual Studio, este tiene un icono **azul**:

<a target="_blank" href="https://code.visualstudio.com/">https://code.visualstudio.com/</a>

Para este proyecto recomiendo instalar las extensiones que figuran en la imagen, que nos van a facilitar mucho el trabajo. Para instalarlas solo vamos al icono de las extensiones, las buscamos, las instalamos y reiniciamos el programa.

![Imagen](https://fgarciajulia.github.io/mi_primera_pagina/img/captura1.jpg)

### Sublime Text.

Sublime Text es otro IDE, yo recomiendo el anterior, pero si ya estan acostumbrados a otro como el Sublime Text, no hay problema, en el transcurso del curso vamos a utilizar la funcion de auto-indentar , que en el Sublime Text esta un poquito más oculta.

**Por ahora no se preocupen por esto. Solo lo dejo documentado acá para cuando lo tengan que usar, si usan este IDE**, si usan Visual Code no hace falta. 

Solo hay que seleccionar el texto que quieras modificar, en caso de que no lo hicieras tan solo tomara la línea en la que se encuentra el cursor en ese momento. 

Con el texto ya seleccionado, vamos al menú desplegable 
`Edit -> Line -> Reindent`

![Imagen](https://fgarciajulia.github.io/mi_primera_pagina/img/sublime2.jpg)

Esta característica no cuenta con un atajo predeterminado en Sublime Text, pero podes setearlo para hacerlo de una forma más rapida.  Para eso vamos al menú desplegable  
`Preferences -> Key Bindings`

![Imagen](https://fgarciajulia.github.io/mi_primera_pagina/img/sublime.jpg)

Esto abrirá una nueva ventana que está dividida en 2 partes. Cuando esto pase en la pantalla de la derecha, la cual se llamará `“Default.(Windows).sublime-keymap -- User”`,  pegaremos el siguiente texto sin modificar nada y dentro de los corchetes 

`{"keys": ["alt+shift+f"], "command": "reindent", "args": {"single_line": false}}`

![Imagen](https://fgarciajulia.github.io/mi_primera_pagina/img/sublime3.jpg)

Luego guardamos el archivo `(Ctrl+S)` o mediante el menú `File -> Save`


## Git (opcional)
Si te sentís un poco avanzado con todo esto, podes instalarte **git** desde la página oficial y usarlo desde este mismo programa, en el icono que está arriba de las extensiones. Lo recomendable es aprenderlo a usar por consola, pero este programa facilita su uso. Si no estás familiarizado con este programa, no te hagas drama que no es necesario para este tutorial. Pero sería bueno tenerlo en cuenta para el próximo proyecto, es un control de versionamiento, te ayuda (entre otras cosas) para no tener carpetas de backup desparramadas por toda la compu :D

Si estás interesado no te pierdas otro de nuestros tutoriales:
<a target="_blank" href="https://juancuiule.github.io/intro-a-git/"> Introducción al funcionamiento y uso de git y github.</a>


<div class="Grid">
    <a href="https://fgarciajulia.github.io/mi_primera_pagina" class="my-btn anterior">Anterior</a>
    <a href="https://fgarciajulia.github.io/mi_primera_pagina" class="my-btn home">Home</a>
    <a href="https://fgarciajulia.github.io/mi_primera_pagina/estructura-archivos" class="my-btn siguiente">Siguiente</a>
</div>