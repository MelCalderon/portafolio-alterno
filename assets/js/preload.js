// js Document

    // Created on   : 11/10/2021.
    // Theme Name   : Mel-Calderón-Creative Agency & Portfolio HTML5 Template
    // Version      : 1.0.
    // Developed by : (me@heloshape.com) / (www.me.heloshape.com)

 (function() { // LOADER PORFOLIO
            setTimeout(function() {
                $(".loader").fadeOut(3500);
            },3000);
            $('#loader').delay(350).fadeOut('slow');
            setTimeout(function() {
                $(".content2").fadeIn(1500);
            },6000);
        });
    
$(window).on ('load', function (){ // makes sure the whole site is loaded

// -------------------- Site Preloader
        $('#ctn-preloader').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({'overflow':'visible'});

    

// ------------------------------- AOS Animation
        // if ($("[data-aos]").length) { 
        //     AOS.init({
        //     duration: 1000,
        //     mirror: true
        //   });
        // }
        
// ------------------------------------- Fancybox
        var fancy = $ (".fancybox");
        if(fancy.length) {
          fancy.fancybox({
            arrows: true,
            buttons: [
              "zoom",
              //"share",
              "slideShow",
              //"fullScreen",
              //"download",
              "thumbs",
              "close"
            ],
            animationEffect: "zoom-in-out",
            transitionEffect: "zoom-in-out",
          });
        }

    
    
    
})(jQuery);