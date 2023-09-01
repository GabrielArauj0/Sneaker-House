var numSlide = 1;
mostrarSlide(numSlide);

function mudarSlide(ns) {
    mostrarSlide(numSlide += ns);
}

function slideAtual(ns) {
    mostrarSlide(numSlide = ns);
}

function mostrarSlide(ns) {
    var i;
    var slides = document.getElementsByClassName("slide")
    var indicadores = document.getElementsByClassName("indicator")
    console.log(slides, indicadores, "a") 
    if (ns > slides.length) {
        numSlide = 1;
    }
    if (ns < 1) {
        numSlide = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    for (i = 0; i < indicadores.length; i++) {
        indicadores[i].classname = indicadores[i].className.replace(" ativo", "");

    }
    slides[numSlide - 1].style.display = "block";
    indicadores[numSlide - 1].className += " ativo";

}


$(function() {
    $('body').addClass('js');
  
    var $hamburger = $('.hamburger'),
        $nav = $('#site-nav'),
        $masthead = $('#masthead');
  
    $hamburger.click(function() {
      $(this).toggleClass('is-active');
      $nav.toggleClass('is-active');
      $masthead.toggleClass('is-active');
      return false; 
    })
});


