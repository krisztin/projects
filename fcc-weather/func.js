// HTML elements
const wrapper = document.getElementById("wrapper");
const tempValue = document.getElementById("temp");
const tempScale = document.getElementById("cf");
const icon = document.getElementById("icon");
const fahBtn = document.getElementById("fahBtn");
const celsBtn = document.getElementById("celsBtn");

// Button clicky clicky
fahBtn.addEventListener("click", convertToF);
celsBtn.addEventListener("click", getTemp);

// Data
let localTemp = 0;

function getTemp() {
  if (!navigator.geolocation) {
    wrapper.innerHTML = "<p>Geolocation is not supported by your browser</p>";
  }
  function success(position) {
    //#1 grabbing coordinates
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    //#2 json get with coordinates
    $.getJSON(
      "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon
    ).done(data => {
      let localTemp = Math.round(data.main.temp);
      //#3a adding cels and symbol
      temp.innerHTML = localTemp;
      tempScale.innerHTML = "°C";
      //#3b icons and descriptions of current weather conditions
      icon.innerHTML =
        "<img src = '" +
        data.weather[0].icon +
        "'>" +
        data.weather[0].description;
    });
  }
  function error() {
    wrapper.innerHTML = "<p>Couldn't retrieve your location</p>";
  }
  navigator.geolocation.getCurrentPosition(success, error);
}

// C to F converter
function convertToF() {
  const fahrenheit = Math.round(localTemp * 9 / 5 + 32);
  tempValue.innerHTML = fahrenheit;
  tempScale.innerHTML = "°F";
}

document.addEventListener("DOMContentLoaded", () => {
  getTemp();
});