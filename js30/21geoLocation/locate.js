const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data) => {
    speed.textContent = Math.round(data.coords.speed);
    arrow.style.transform = `rotate ${data.coords.heading}deg`;
}, (err) => {
    speed.textContent('You have to allow access to your location for this thing to work');
});