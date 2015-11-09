define(["jquery", "lodash", ""], function($) {

	 var ref = new Firebase("https://yoreweather.firebaseio.com/");

  return {

  	logOut: function() {
        ref.unauth();


          $("#newRegister").show();

	
});