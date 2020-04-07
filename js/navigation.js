const toggleMenu = document.querySelector('.toggle-menu');
const menu = document.querySelector('.menu');
const menuLink = document.querySelectorAll('.menu a[href^=\'#\']');

// je ne me souviens plus quelle est la bonne pratique pour déclarer une fonction ?
function menuManagement() {
  const open = JSON.parse(toggleMenu.getAttribute('aria-expanded')); //JSON.parse permet de convertir la string en vrai booleen
  toggleMenu.setAttribute('aria-expanded', !open); //!open permet de basculer entre true et false sur le aria-expanded
  menu.hidden = !menu.hidden;
  document.body.dataset.burger = !open;
};


toggleMenu.addEventListener('click', function() {
  menuManagement();
});

for (let element of menuLink) {
  element.addEventListener('click', function() {
    menuManagement();
  });
};