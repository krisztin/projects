$(document).ready(function () {
  $(getTemp);
  $("#cels-btn").on("click", getTemp);
  $("#fah-btn").on("click", convertToF);

  function getTemp() {
    if (!navigator.geolocation) {
      $("#wrapper").html("<p>Geolocation is not supported by your browser</p>");
      return;
    }

    function success(position) {
      //#1 grabbing coordinates
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      //#2 json get with coordinates
      $.getJSON(
        "https://fcc-weather-api.glitch.me/api/current?lat=" +
        lat +
        "&lon=" +
        lon,
        //#3 adding data to the doc
        function (temp) {
          //#3a fetching celsius
          let localTemp = temp.main.temp;
          //#3b rounding celsius
          let c = Math.round(localTemp);
          //#3c adding cels and symbol
          $("#temp").text(c);
          $("#c-f").text("°C");
          //#3d icons and descriptions of current weather conditions
          $("#icon").html(
            "<img src = '" +
            temp.weather[0].icon +
            "' aria-hidden='true'>" +
            temp.weather[0].description
          );
        }
      );
    }

    function error() {
      $("#wrapper").html("<p>Couldn't retrieve your location</p>");
    }
    // $("#wrapper").html("<p>Loading...</p>");
    navigator.geolocation.getCurrentPosition(success, error);
  }

  // C to F converter
  function convertToF() {
    //turning temp to text
    let celsius = +$("#temp").text();
    //calculating and rounding up F
    let fahrenheit = Math.round(celsius * 9 / 5 + 32);
    //grabbing C value and exchanging it for F
    $("#temp").text(fahrenheit);
    //grabbing C and switching to F
    $("#c-f").text("°F");
  }
});