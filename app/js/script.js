const btnMenuToggle = document.querySelector('.header__menu-toggle');
const header = document.querySelector('.header');
const fadeElements = document.querySelectorAll('.has-fade');

btnMenuToggle.addEventListener('click', function () {
  if (header.classList.contains('open')) {
    document.body.classList.remove('noscroll');
    header.classList.remove('open');
    fadeElements.forEach(function (element) {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  } else {
    document.body.classList.add('noscroll');
    header.classList.add('open');
    fadeElements.forEach(function (element) {
      element.classList.add('fade-in');
      element.classList.remove('fade-out');
    });

  }
});