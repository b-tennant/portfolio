"use strict";

var toggleButton = document.getElementById('Btn');
console.log(toggleButton);
var navbarLinks = document.getElementById('nav-list');
toggleButton.addEventListener('click', function () {
  console.log(navbarLinks);
  navbarLinks.classList.toggle('active');
});