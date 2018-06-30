const slider = document.querySelector('.items');
let isDown = false;
let startx;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft; // so that margins won't throw off the value
  scrollLeft = slider.scrollLeft; // how much we have already scrolled left inside the div
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if(!isDown) return; // doesn't run
  e.preventDefault(); // to prevent the browser doing silly things we don't want it to do, like selecting txt etc.
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
});