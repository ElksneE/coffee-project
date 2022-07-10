// header

document.querySelector('.main-nav__toggle-wrapper')
  .addEventListener('click', function(){
  document.querySelector('.main-nav__toggle').classList.toggle('main-nav__toggle--active')
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
