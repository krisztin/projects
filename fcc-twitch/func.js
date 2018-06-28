$(document).ready(function () {
  // filtering buttons to switch between all users or only online ones
  const btnOn = $("#btn-on");
  const btnAll = $("#btn-all");

  // when pressing the Online button
  btnOn.click(function () {
    $(".status-off").hide(500);
    btnOn.removeClass("btn-inactive").addClass("btn-active");
    btnAll.removeClass("btn-active").addClass("btn-inactive");
  });

  // when pressing the All button
  btnAll.click(function () {
    $(".status-off").show(500);
    btnAll.removeClass("btn-inactive").addClass("btn-active");
    btnOn.removeClass("btn-active").addClass("btn-inactive");
  });

  const channels = [
    "ESL_SC2",
    "OgamingSC2",
    "cretetion",
    "freecodecamp",
    "storbeck",
    "habathcx",
    "RobotCaleb",
    "noobs2ninjas"
  ];

  // Get channels' data: logo, url, name
  channels.forEach(function (channels) {
    $.getJSON(
      "https://wind-bow.glitch.me/twitch-api/channels/" + channels
    ).done(function (chData) {
      const url = chData.url;
      const logo = chData.logo;
      const name = chData.name;
      // once channel data is extracted get stream data
      $.getJSON(
        "https://wind-bow.glitch.me/twitch-api/streams/" + name
      ).done(function (stData) {
        const stream = stData.stream;

        if (stream === null) {
          $("#streamers-wrapper").append(
            '<a href="' +
            url +
            '" target="_blank">' +
            '<div class="streamers-list status-off">' +
            '<span class="logo">' +
            '<img src="' +
            logo +
            '"/>' +
            "</span>" +
            '<span class="name">' +
            name +
            "</span>" +
            '<span id="status-off" class="offline">OFFLINE</span>' +
            "</div>" +
            "</a>"
          );
        } else {
          $("#streamers-wrapper").append(
            '<a href="' +
            url +
            '" target="_blank">' +
            '<div class="streamers-list status-on">' +
            '<span class="logo">' +
            '<img src="' +
            logo +
            '"/>' +
            "</span>" +
            '<span class="name"><b>' +
            name +
            "</b></span>" +
            '<br><span id="status-on" class="game"><b>STREAMING:</b> ' +
            stData.stream.game +
            "</span>" +
            "</div>" +
            "</a>"
          );
        }
      });
    });
  });
});