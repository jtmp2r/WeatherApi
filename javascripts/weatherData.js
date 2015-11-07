define(function(require) {
  var $ = require("jquery");
  var q = require("q");
  var firebase = require("firebase");
  var loginRef = new Firebase("https://yoreweather.firebaseio.com/");
  var userAuth = loginRef.getAuth();

  if(userAuth) {
    console.log("Yore Legit");
  }

  return {
    localWeather : function(){
      var deferred = q.defer();
      var apiKey = "9799d2b264499cc589cdc477b68c6e7c";
      var zip = $("#zipCodeForm").val();

      $.ajax({
        type : 'GET',
        url : "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&appid=" + apiKey
      }).done(function(weather){
        weather = JSON.stringify(weather);
        console.log("weather", weather);
      }).fail(function(xhr, status, error){
        deferred.reject(error);
      });
      return deferred.promise;
    } // end localWeather method
  }; //end return statement
});