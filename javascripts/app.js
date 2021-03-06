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
define(["jquery", "lodash", "firebase", "Register", "login", "q", "hbs", "validate", "weatherData", "hbs!../templates/weatherDisplay", "hbs!../templates/forecast"], function($, _, firebase, Register, login, q, handlebars, validate, weatherData, weatherHBS, forecastHbs) {
  var ref = new Firebase("https://yoreweather.firebaseio.com");

  $("#mainPage").hide();

  $("#zipSubmit").hide();
  validate.zipcode();


    $(document).on("click", "#register", function(e) {
      e.preventDefault();
      Register.newUser();
      $("#newRegister").hide();
      require(['hbs!../templates/loginPage'], function(loginTemp) {
        $("#loginContent").html(loginTemp);
      });
    });

  $(document).on("click", "#weathLane", function(e) {
    e.preventDefault();
    login.loginUser();
    $("#loginPage").hide();
    $("#mainPage").show();
  });


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
      $("#zipForm").hide();
    });
  });
//retrieve 3 day forecast
  $(document).on("click", "#threeDayForecast", function(){
    var cityId = $(this).parent().parent().parent().attr("id");
    console.log("cityId", cityId);
    weatherData.threeDay(cityId)
    .then(function(threeDay){
      console.log("threeDay", threeDay);
      var threeFore = threeDay.list;
      console.log("threeFore", threeFore);
      $("#forecast").html(forecastHbs({forecast : threeFore}));
    });
  });
//retrieve 7 day forecast
  $(document).on("click", "#sevenDayForecast", function(){
    var cityId = $(this).parent().parent().parent().attr("id");
    console.log("cityId", cityId);
    weatherData.sevenDay(cityId)
    .then(function(sevenDay){
      console.log("sevenDay", sevenDay);
      var sevenFore = sevenDay.list;
      console.log("sevenFore", sevenFore);
      $("#forecast").html(forecastHbs({forecast : sevenFore}));
    });
  });
});
