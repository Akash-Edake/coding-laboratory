window.addEventListener('scroll', function(e) 
{
     if( $(window).scrollTop() <=2) {
         $('.wow').removeClass('animated');
         $('.wow').removeAttr('style');
         new WOW().init();

     }

});

