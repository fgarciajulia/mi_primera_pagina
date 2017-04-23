 $(document).ready(function () {
     $(".owl-carousel").owlCarousel({
         items: 1,
         loop: true,
         autoplay: true,
         autoplayTimeout: 6000,
     });
 });



 // Animación para el scroll de los anclas
 $('.page-scroll a').bind('click', function (event) {
     var $anchor = $(this);
     $('html, body').stop().animate({
             scrollTop: ($($anchor.attr('href')).offset().top - 50)
         },
         1250,
         'easeInOutExpo'
     );
     event.preventDefault();
 });

 // Añade clase 'active' a los links del menú segun corresponda
 $('body').scrollspy({
     target: '.navbar-fixed-top',
     offset: 51
 });

 // Cierre automático de menú desplegable en dispositivos pequeños 
 $('.navbar-collapse ul li a').click(function () {
     $('.navbar-toggle:visible').click();
 });

 // Añade clase `affix-top` o `affix` después de escrollear 
 $('#mainNav').affix({
     offset: {
         top: 100
     }
 })