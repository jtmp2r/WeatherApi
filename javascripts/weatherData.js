define(function(require) {
  var $ = require("jquery");
  var q = require("q");
  var firebase = require("firebase");
  var loginRef = new Firebase("https://yoreweather.firebaseio.com/");
  var userAuth = loginRef.getAuth();
  var deferred = q.defer();
  var apiKey = "9799d2b264499cc589cdc477b68c6e7c";
  var zip = $("#zipCodeForm").val();

  if(userAuth) {
    console.log("Yore Legit");
  }

  return {
    localWeather : function(){

      $.ajax({
        type : 'GET',
        url : "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&units=imperial&appid=" + apiKey
      }).done(function(weather){
        console.log("weather", weather);
        deferred.resolve(weather);
      }).fail(function(xhr, status, error){
        deferred.reject(error);
      });
      return deferred.promise;
    }, // end localWeather method
    threeDay : function(){
      console.log("3 day forecast");
    },
    sevenDay : function(){
      console.log("sevenDay forecast");
    },
    saveDay : function(){
      console.log("Save this days weather");
    }
  }; //end return statement
});