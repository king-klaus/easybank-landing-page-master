const btnMenuToggle = document.querySelector('.header__menu-toggle');
const header = document.querySelector('.header');
const overlay = document.querySelector('.header__overlay');

btnMenuToggle.addEventListener('click', function () {
  if (header.classList.contains('open')) {
    // close nave
    header.classList.remove('open');
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');
  } else {
    // open menu
    header.classList.add('open');
    overlay.classList.add('fade-in');
    overlay.classList.remove('fade-out');
  }
});