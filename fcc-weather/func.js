$(document).ready(function() {
    $(getTemp);
    $("#cels-btn").on("click", getTemp);
    $("#fah-btn").on("click", convertToF);
  
    function getTemp() {
      navigator.geolocation.getCurrentPosition(function(position) {
        //no geo location - this is currently not working...doh
        if (!navigator.geolocation) {
          $("#wrapper").html(
            "<p>Ooops! Sorry, but geolocation is not supported by your browser</p>"
          );
          return;
        } else {
          //geo success
          //#1 grabbing coordinates
          var lat = position.coords.latitude;
          var lon = position.coords.longitude;
          //#2 json get with coordinates
          $.getJSON(
            "https://fcc-weather-api.glitch.me/api/current?lat=" +
              lat +
              "&lon=" +
              lon,
            //#3 adding data to the doc
            function(temp) {
              //#3a fetching celsius
              var localTemp = temp.main.temp;
              //#3b rounding celsius
              var c = Math.round(localTemp);
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
      });
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
  
  /* todo:
  #1 - fix broken no geo
  #2 - pressing F repeatedly multiplies the final data
  #3 - footer needs padding
  #4 - change bg-colour based on weather conditions
  #5 - change buttons to a switch???
  #2&&5 - when C is shown show only F button and vv */