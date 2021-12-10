function buildQueryURL() {
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?&cnt=5&units=metric&";
  var queryParams = { "appid": "8944df8780ba70b0913552b31d4a5c44" };
  queryParams.q = $("#searchInput")
      .val()
      .toLowerCase()
      .trim();
  return queryURL + $.param(queryParams);
}


function updatePage(weatherData) {
  if(weatherData){
    $("#weather").css("visibility", "visible");
  }else{
    $("#weather").css("visibility", "hidden");
    $("#name1").css("color", "red");
  }
  // Erster Tag //////////////////////////
  var iconUrl = "https://openweathermap.org/img/wn/" + weatherData.list[0].weather[0].icon + "@2x.png";
  var cityName = weatherData.city.name;  
  $("#icon1").attr({
    src: iconUrl,
  });
  $("#name1").text(cityName);
  $("#temp1").text("Temperatur: " + weatherData.list[0].main.temp + "°C");
  $("#humidity1").text("Luftfeuchtigkeit: " + weatherData.list[0].main.humidity + "%");
  $("#wind1").text("Windgeschwindigkeit: " + weatherData.list[0].wind.speed + " kmh");
  
  // Zweiter Tag //////////////////////////
  var iconUrl2 = "https://openweathermap.org/img/wn/" + weatherData.list[1].weather[0].icon + "@2x.png";
  $("#icon2").attr({
      src: iconUrl2,
  });
  $("#temp2").text("Temperatur: " + weatherData.list[1].main.temp + "°C");
  $("#humidity2").text("Luftfeuchtigkeit: " + weatherData.list[1].main.humidity + "%");

  // Dritter Tag //////////////////////////
  var iconUrl3 = "https://openweathermap.org/img/wn/" + weatherData.list[2].weather[0].icon + "@2x.png";
  $("#icon3").attr({
      src: iconUrl3,
  });
  $("#temp3").text("Temperatur: " + weatherData.list[2].main.temp + "°C");
  $("#humidity3").text("Luftfeuchtigkeit: " + weatherData.list[2].main.humidity + "%");

  // Vierter Tag //////////////////////////
  var iconUrl4 = "https://openweathermap.org/img/wn/" + weatherData.list[3].weather[0].icon + "@2x.png";
  $("#icon4").attr({
      src: iconUrl4,
  });
  $("#temp4").text("Temperatur: " + weatherData.list[3].main.temp + "°C");
  $("#humidity4").text("Luftfeuchtigkeit: " + weatherData.list[3].main.humidity + "%");

  // Fuenfter Tag //////////////////////////
  var iconUrl5 = "https://openweathermap.org/img/wn/" + weatherData.list[4].weather[0].icon + "@2x.png";
  $("#icon5").attr({
      src: iconUrl5,
  });
  $("#temp5").text("Temperatur:: " + weatherData.list[4].main.temp + "°C");
  $("#humidity5").text("Luftfeuchtigkeit: " + weatherData.list[4].main.humidity + "%");
};


// Submit Button wurde gedruecktn
$("#submit-btn").on("click", function (event) {
  event.preventDefault();
  var queryURL = buildQueryURL();
  $.ajax({
      url: queryURL,
      method: "GET"
  }).then(updatePage);
});