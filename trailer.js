const posters = document.querySelectorAll('.poster');

posters.forEach(poster => {
  const trailer = poster.parentElement.querySelector('.trailer');

  if (trailer) { // Solo si hay trailer
    let timeoutId;

    poster.parentElement.addEventListener('mouseenter', () => {
      timeoutId = setTimeout(() => {
        trailer.muted = true;
        trailer.style.opacity = '1';
        trailer.play().catch(error => {
          console.log('Error reproduciendo video:', error);
        });
      }, 300); // espera tiempo en ms
    });

    poster.parentElement.addEventListener('mouseleave', () => {
      clearTimeout(timeoutId); // cancela si el mouse se va antes de los 2s
      trailer.style.opacity = '0';
      trailer.pause();
      trailer.currentTime = 0;
      trailer.muted = true;
    });
  }
});