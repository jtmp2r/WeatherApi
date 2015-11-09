/* jshint esnext: true */
requirejs.config({
  baseUrl: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
    "firebase" : "../lib/bower_components/firebase/firebase",
    "lodash" : "../lib/bower_components/lodash/lodash.min",
    "material": "../lib/bower_components/bootstrap-material-design/dist/js/material.min",
    "noUiSlider": "../lib/noUiSlider.8.0.2/nouislider.min",
    "q" : "../lib/bower_components/q/q"
  },
  shim: {
    "bootstrap": ["jquery"],
    "material": ["bootstrap"],
    "noUiSlider": ["jquery"],
    "firebase" : {exports: "Firebase"
    }
  }
});
define(["jquery", "firebase", "q", "hbs", "validate", "weatherData", "hbs!../templates/weatherDisplay"], function($, firebase, q, handlebars, validate, weatherData, weatherHBS) {
  var ref = new Firebase("https://yoreweather.firebaseio.com");

  $("#zipSubmit").hide();
  validate.zipcode();

  $("#zipSubmit").on("click", function(){
    weatherData.localWeather()
    .then(function(weather){
      var data = {
        conditions : weather.weather[0].description,
        temp : weather.main.temp,
        cityName : weather.name,
        cityId : weather.id,
        pressure : weather.main.pressure,
        windSpeed : weather.wind.speed,
        windDirection : weather.wind.deg
      };
      console.log("data object", data);
      $("#output").html(weatherHBS(data));
    });
  });

});