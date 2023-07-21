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


/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')