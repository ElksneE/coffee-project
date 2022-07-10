// header
const wrapperButton = document.querySelector('.main-nav__toggle-wrapper');
const button = document.querySelector('.main-nav__toggle');
const nav = document.querySelector('.main-nav__list--main');

wrapperButton .addEventListener('click', function(){
  button.classList.toggle('main-nav__toggle--active');
  nav.classList.toggle('main-nav__list--main--current');
})


// map
const map = L.map('map').setView([59.968137, 30.316272], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);
const greenIcon = L.icon({
  iconUrl: '../img/icon/footer/logo-map.svg',
  iconSize:     [38, 50],
});
L.marker([59.968137, 30.316272], {icon: greenIcon}).addTo(map);

// const swiper = new Swiper(".Swiper", {
//   cssMode: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev"
//   },
//   pagination: false,
//   mousewheel: true,
//   keyboard: true
// });

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider__controls-button--next',
    prevEl: '.slider__controls-button--prev',
  },

});
