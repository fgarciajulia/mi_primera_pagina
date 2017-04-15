# 11. Formulario de contacto

Para colocar un formulario de contacto se requieren varios pasos, en esta ocasión no solo estamos mostrando contenido, sino que también debemos recolectar el contenido que ingresa el usuario. La información recolectada es redactada en un mail que luego es finalmente enviada a nuestras casillas, y esta es solo una entre otras múltiples subtareas que pueden realizarse a través de un formulario.

A modo introductorio, para que tengan una idea de las etiquetas html que vamos a usar, pueden ver [este video](https://www.youtube.com/watch?v=Ppj5IOBU73A) (desde el minuto 2:30 hasta el minuto 9:00 está la parte más interesante).

Lo importante de acá son las etiquetas`<form>``<input type="text" placeholder="">` `<textarea>` y el hecho de que los “**id**” no deben repetirse y deben ser los mismos que se van a usar en el archivo php/contacto.php (del que todavía no hablamos).


## HTML

En nuestro archivo index.html, antes de comenzar el footer vamos a copiar el siguiente código que contiene el formulario:

```
  <section id="contacto">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2>Contacteme</h2>
          <hr class="star-primary">
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 col-lg-offset-2">
          <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. -->
          <form name="sentMessage" id="contactForm" novalidate>
            <div class="row control-group">
              <div class="form-group col-xs-12 floating-label-form-group controls">
                <label>Name</label>
                <input type="text" class="form-control" placeholder="Nombre" id="name" required data-validation-required-message="Por favor, ingrese su name.">
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="row control-group">
              <div class="form-group col-xs-12 floating-label-form-group controls">
                <label>Email</label>
                <input type="email" class="form-control" placeholder="Email" id="email" required data-validation-required-message="Por favor, ingrese su email address.">
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="row control-group">
              <div class="form-group col-xs-12 floating-label-form-group controls">
                <label>Número de teléfono</label>
                <input type="tel" class="form-control" placeholder="Número de teléfono" id="phone" required data-validation-required-message="Por favor, ingrese su número de teléfono.">
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="row control-group">
              <div class="form-group col-xs-12 floating-label-form-group controls">
                <label>Mensaje</label>
                <textarea rows="5" class="form-control" placeholder="Mensaje" id="message" required data-validation-required-message="Por favor, ingrese un mensaje."></textarea>
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <br>
            <div id="success"></div>
            <div class="row">
              <div class="form-group col-xs-12">
                <button type="submit" class="btn btn-success btn-lg">Enviar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
```

Hay muchas cosas que quizás no lleguen a entender del todo, personalmente siempre le doy prioridad a que funcione, y luego me pongo a revisar lo que hice y como puedo mejorarlo o adaptarlo, en este caso se puede adaptar añadiendo nuevos campos para que el usuario complete.


## JS

Con javascript vamos a hacer todas las acciones “del lado del cliente” o frontEnd, algunas de estas acciones son las de validar que todos los campos obligatorios tengan contenido, que se envíe (mediante la función ajax) los datos del formulario al backend (archivo contact_me.php que todavía no creamos), que salgan mensajes de error cuando algo no está bien etc.

Vamos a descargar los siguientes archivos:
- <a target="_blank" href="https://fgarciajulia.github.io/mi_primera_pagina/jqBootstrapValidation.js">jqBootstrapValidation.js</a>
- <a target="_blank" href="https://fgarciajulia.github.io/mi_primera_pagina/contact_me.js">contact_me.js</a>
 
> Estos contienen muchas de las funciones que mencionamos. Se podría decir que en el primero definimos algunas funciones y con el segundo las consumimos.<br />
> El segundo archivo es más amigable para el que no tiene tanta experiencia en js. En primer lugar, recolecta los datos, luego los manda al archivo`././mail/contact_me.php`por medio de la función[ajax](https://www.w3schools.com/xml/ajax_intro.asp). En segundo lugar, el servidor le devuelve una respuesta exitosa success o un error y por último según la respuesta del servidor se muestra uno u otro mensaje al usuario.


Los colocamos en la carpeta `js`y lo vamos a incorporar a nuestro proyecto como ya lo hicimos con otros archivos. En el HTML, por debajo de `bootstrap.min.js`

````
  <script src="js/jqBootstrapValidation.js"></script>
  <script src="js/contact_me.js"></script>
````

## PHP

Vamos a crear una carpeta nueva, que se llame `mail` y dentro creamos un archivo que se llame `contact_me.php`

PHP es un lenguaje que es interpretado por el servidor donde está alojada la web, en este caso para tomar todos los datos del formulario y enviarlos por mail.

> Si todo funciona correctamente, cuando suban la web a un hosting, el server se encargará de enviar el mail, por ahora, desde tu compu los mensajes no saldrán. Y aparecerá un mensaje que dice "parece que mi servidor de correo no responde", que fue el que "configuramos" en la función ajax que mencionamos anteriormente.

Siguiendo con nuestro proyecto, en el archivo que acabamos de crear con extensión `.php`, vamos a colocar el siguiente código:
```
<?php
// Revisa si los campos están vacíos
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['phone']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));
	
// Crea el mensaje que va a enviar
$to = 'suNombre@suDominio.com'; // //Añada su dirección de correo electrónico reemplazando suNombre@suDominio.com - Aquí es donde el formulario enviará un mensaje. Puede ser @gmail.com
$email_subject = "formulario web enviado por:  $name";
$email_body = "Ha recibido un nuevo mensaje de su formulario de contacto del sitio web.\n\n"."Aquí están los detalles:\n\nNombre: $name\n\nEmail: $email_address\n\nTeléfono: $phone\n\nMensaje:\n$message";
$headers = "From: noresponder@suDominio.com\n";// Esta es la dirección de correo electrónico de la que se generará el mensaje. DEBE TENER EL DOMINIO DONDE ESTÁ ALOJADA LA WEB
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>
```

En la primera parte revisa que los campos obligatorios no estén vacíos, luego elimina caracteres como `"` o `'` del mensaje para evitar errores, crea el mail y por último con la función mail() lo envía.

> IMPORTANTE: Como ya dijimos necesitamos subir la web a un hosting para que el mail se envíe, y debemos cambiar el mail `to` con el correo de destino, y el `From` con el mail de origen. EL MAIL DE ORIGEN DEBE TENER EL DOMINIO EN DONDE ESTÁ ALOJADA LA WEB.


## CSS

```
/* section */

section {
  padding: 100px 0;
}
section h2 {
  margin: 0;
  font-size: 3em;
}
section.success {
  background: #18BC9C;
  color: white;
}
@media (max-width: 767px) {
  section {
    padding: 75px 0;
  }
  section.first {
    padding-top: 75px;
  }
}
ul[role=alert] {
    color: #ff8200;
}
/* form */

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
.btn-outline {
  color: white;
  font-size: 20px;
  border: solid 2px white;
  background: transparent;
  transition: all 0.3s ease-in-out;
  margin-top: 15px;
}
.btn-outline:hover,
.btn-outline:focus,
.btn-outline:active,
.btn-outline.active {
  color: #18BC9C;
  background: white;
  border: solid 2px white;
}
.btn-primary {
  color: white;
  background-color: #2C3E50;
  border-color: #2C3E50;
  font-weight: 700;
}
.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary.active,
.open .dropdown-toggle.btn-primary {
  color: white;
  background-color: #1a242f;
  border-color: #161f29;
}
.btn-primary:active,
.btn-primary.active,
.open .dropdown-toggle.btn-primary {
  background-image: none;
}
.btn-primary.disabled,
.btn-primary[disabled],
fieldset[disabled] .btn-primary,
.btn-primary.disabled:hover,
.btn-primary[disabled]:hover,
fieldset[disabled] .btn-primary:hover,
.btn-primary.disabled:focus,
.btn-primary[disabled]:focus,
fieldset[disabled] .btn-primary:focus,
.btn-primary.disabled:active,
.btn-primary[disabled]:active,
fieldset[disabled] .btn-primary:active,
.btn-primary.disabled.active,
.btn-primary[disabled].active,
fieldset[disabled] .btn-primary.active {
  background-color: #2C3E50;
  border-color: #2C3E50;
}
.btn-primary .badge {
  color: #2C3E50;
  background-color: white;
}
.btn-success {
  color: white;
  background-color: #18BC9C;
  border-color: #18BC9C;
  font-weight: 700;
}
.btn-success:hover,
.btn-success:focus,
.btn-success:active,
.btn-success.active,
.open .dropdown-toggle.btn-success {
  color: white;
  background-color: #128f76;
  border-color: #11866f;
}
.btn-success:active,
.btn-success.active,
.open .dropdown-toggle.btn-success {
  background-image: none;
}
.btn-success.disabled,
.btn-success[disabled],
fieldset[disabled] .btn-success,
.btn-success.disabled:hover,
.btn-success[disabled]:hover,
fieldset[disabled] .btn-success:hover,
.btn-success.disabled:focus,
.btn-success[disabled]:focus,
fieldset[disabled] .btn-success:focus,
.btn-success.disabled:active,
.btn-success[disabled]:active,
fieldset[disabled] .btn-success:active,
.btn-success.disabled.active,
.btn-success[disabled].active,
fieldset[disabled] .btn-success.active {
  background-color: #18BC9C;
  border-color: #18BC9C;
}
.btn-success .badge {
  color: #18BC9C;
  background-color: white;
}
.btn-social {
  display: inline-block;
  height: 50px;
  width: 50px;
  border: 2px solid white;
  border-radius: 100%;
  text-align: center;
  font-size: 20px;
  line-height: 45px;
}
.btn:focus,
.btn:active,
.btn.active {
  outline: none;
}
```

# Una pequeña ayuda en el siguiente capítulo

En el [capítulo siguiente](https://fgarciajulia.github.io/mi_primera_pagina/atajo) dejaré un zip con todo lo realizado hasta ahora para que puedan descargarlo y verificar si les faltó algo.


<div class="Grid">
    <a href="https://fgarciajulia.github.io/mi_primera_pagina/fontawesome" class="my-btn anterior">Anterior</a>
    <a href="https://fgarciajulia.github.io/mi_primera_pagina" class="my-btn home">Home</a>
    <a href="https://fgarciajulia.github.io/mi_primera_pagina/atajo" class="my-btn siguiente">Siguiente</a>
</div>