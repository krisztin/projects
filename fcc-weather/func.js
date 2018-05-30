// HTML elements
const fahBtn = document.getElementById("fahBtn");
const celsBtn = document.getElementById("celsBtn");
let output = document.getElementById("wrapper");

// Button clicky clicky aka EVENTS
fahBtn.addEventListener("click", convertToF);
celsBtn.addEventListener("click", convertToC);

// Data
let localTemp = 0;

function getTemp() {
  if (!navigator.geolocation) {
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
  }
  function success(position) {
    //#1 grabbing coordinates
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    //#2 json get with coordinates
    $.getJSON(
      "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon
    ).done(data => {
      localTemp = Math.round(data.main.temp);
      output.innerHTML =
        `<p>It is <span id="temp">${localTemp}</span>
        <span id="cf">°C</span>
        in <span>${data.name}</span>.
        If you look outside, you should see <span>${data.weather[0].description}</span>.</p>`
    });
  }
  function error() {
    output.innerHTML = "<p>Couldn't retrieve your location</p>";
  }
  output.innerHTML = "<p>Loading...</p>"
  navigator.geolocation.getCurrentPosition(success, error);
}

// C to F converter
function convertToF() {
  const tempScale = document.getElementById("cf");
  const tempValue = document.getElementById("temp");
  
  tempValue.innerHTML = Math.round(localTemp * 9 / 5 + 32);
  tempScale.innerHTML = "°F";
}

function convertToC() {
  const tempScale = document.getElementById("cf");
  const tempValue = document.getElementById("temp");
  
  tempValue.innerHTML = localTemp;
  tempScale.innerHTML = "°C";
}

document.addEventListener("DOMContentLoaded", () => {
  getTemp();
});