var headerMainTop = document.querySelector('.header-main__top');
var headerMainButton = document.querySelector('.header-main__button');
var headerMainNavigation = document.querySelector('.header-main__navigation');

headerMainTop.classList.remove('header-main__top--opened');
headerMainNavigation.classList.remove('header-main__navigation--opened');
headerMainNavigation.classList.add('header-main__navigation--closed');

headerMainButton.addEventListener('click', function() {
  if (headerMainNavigation.classList.contains('header-main__navigation--closed')) {
    headerMainNavigation.classList.remove('header-main__navigation--closed');
    headerMainNavigation.classList.add('header-main__navigation--opened');
    headerMainTop.classList.add('header-main__top--opened');
  } else {
    headerMainTop.classList.remove('header-main__top--opened');
    headerMainNavigation.classList.remove('header-main__navigation--opened');
    headerMainNavigation.classList.add('header-main__navigation--closed');
  }
});
