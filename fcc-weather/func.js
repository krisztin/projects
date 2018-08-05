document.addEventListener('DOMContentLoaded', () => {
  getTemp();
  // HTML elements
  const fahBtn = document.getElementById('fahBtn');
  const celsBtn = document.getElementById('celsBtn');
  // Button clicky clicky aka EVENTS
  fahBtn.addEventListener('click', convertToF);
  celsBtn.addEventListener('click', convertToC);
  // button default
  celsBtn.disabled = true;
});

function getTemp() {
  const output = document.getElementById('wrapper');
  if (!navigator.geolocation) {
    output.innerHTML = '<p>Geolocation is not supported by your browser</p>';
  }
  function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    $.getJSON(
      `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`,
    ).done((data) => {
      localTemp = Math.round(data.main.temp);
      output.innerHTML = `
        <p>It is <span id="temp">${localTemp}</span>
        <span id="cf">°C</span>
        in <span>${data.name}</span>.
        If you look outside, you should see <span>${data.weather[0].description}</span>.</p>
        `;
      tempScale = document.getElementById('cf');
      tempValue = document.getElementById('temp');
    });
  }
  function error() {
    output.innerHTML = "<p>Couldn't retrieve your location</p>";
  }
  output.innerHTML = '<p>Loading...</p>';
  navigator.geolocation.getCurrentPosition(success, error);
}

// C to F converter
function convertToF() {
  tempValue.innerHTML = Math.round(localTemp * 9 / 5 + 32);
  tempScale.innerHTML = '°F';

  fahBtn.disabled = true;
  celsBtn.disabled = false;
}

function convertToC() {
  tempValue.innerHTML = localTemp;
  tempScale.innerHTML = '°C';

  fahBtn.disabled = false;
  celsBtn.disabled = true;
}
