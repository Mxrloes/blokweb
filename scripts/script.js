// JavaScript Document
const button = document.querySelector('#laadMeerKnop');
const body = document.querySelector('.aanbevolen');
var deButton = document.querySelector("nav button");

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav = event.target.parentNode;
  deNav.classList.toggle("toonMenu");
}
  
button.addEventListener('click', laadMeer);

function laadMeer() {
	body.classList.add('view-more');
}