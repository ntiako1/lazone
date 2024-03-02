var lastScrollTop = 0;

window.addEventListener("scroll", function(){
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop){
        // Scroll down
        document.getElementById("navbar").classList.add("scrolled-down");
        document.getElementById("navbar").classList.remove("scrolled-up");
    } else {
        // Scroll up
        document.getElementById("navbar").classList.add("scrolled-up");
        document.getElementById("navbar").classList.remove("scrolled-down");
    }
    lastScrollTop = currentScroll;
}, false);

$(document).ready(function() {
    $('.navbar ul li a').click(function() {
        // Supprime la classe "active" de tous les éléments de la navbar
        $('.navbar ul li').removeClass('active');
        
        // Ajoute la classe "active" à l'élément parent (li) de l'élément cliqué
        $(this).parent('li').addClass('active');
    });
});


const textarea = document.getElementById('message');
const form = document.querySelector('.form');
const ic2 = document.querySelector('.ic2');

textarea.addEventListener('focus', function() {
  form.style.height = '700px';
  ic2.style.height = '50%';
});

textarea.addEventListener('blur', function() {
  form.style.height = '500px';
  ic2.style.height = '50px';
});
