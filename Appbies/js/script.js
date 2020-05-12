$(document).ready(function(){
   $('.slider').slick({
      autoplay: true,
      speed: 600,
   });
   $('.header__burger').click(function(event) {
      $('.header__burger, .header__menu').toggleClass('active'); 
      $('body').toggleClass('lock');
   });
   $(".header__menu").on("click", "a", function (event) {
         event.preventDefault();
         var id = $(this).attr('href'),
            top = $(id).offset().top;
         $('body,html').animate({ scrollTop: top-125 }, 1500);
   });
});