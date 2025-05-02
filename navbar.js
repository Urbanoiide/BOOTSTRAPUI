// navbar.js
function scrollSlider(direction, sliderId) {
  const slider = document.getElementById(sliderId);
  const scrollAmount = 300; // ajusta si quieres más o menos desplazamiento
  slider.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

fetch('navbar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar-placeholder').innerHTML = data;
  });
