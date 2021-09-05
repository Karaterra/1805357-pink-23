var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.page-header__toggle');
var navWrapper = document.querySelector('.page-header__wrapper');

navMain.classList.remove('main-nav--nojs');
navToggle.classList.remove('page-header__toggle--nojs');
navWrapper.classList.remove('page-header__wrapper--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.classList.remove('page-header__toggle--closed');
    navToggle.classList.add('page-header__toggle--opened');
    navWrapper.classList.add('page-header__wrapper--nojs');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.classList.add('page-header__toggle--closed');
    navToggle.classList.remove('page-header__toggle--opened');
    navWrapper.classList.remove('page-header__wrapper--nojs');
  }
});
