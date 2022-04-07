//copio l'elemento <div class="header-right"> all'interno della variabile btnHamburger

const btnHamburger = document.querySelector("i.fas.fa-bars");

console.log (btnHamburger);

//copio l'elemento <div class="hamburger-menu">  all'interno della variabile hamburgerMenu
const hamburgerMenu = document.querySelector("div.hamburger-menu");

//copio l'elemento <i class="fas fa-times"> all'interno della variabile btnCross
const btnCross = document.querySelector("i.fas.fa-times");
console.log (btnCross);

btnHamburger.addEventListener('click', function(){
  // qui vengono eseguiti i comandi al click del hamburger 
  hamburgerMenu.classList.add('active');
});


btnCross.addEventListener('click', function(){
  // qui vengono eseguiti i comandi al click della X
  hamburgerMenu.classList.remove('active');
});