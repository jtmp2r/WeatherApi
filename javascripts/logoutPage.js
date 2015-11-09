define(["jquery", "lodash"], function($, _) {

	 var ref = new Firebase("https://yoreweather.firebaseio.com/");

  return {

  	logOut: function() {
      $("#newRegister").show();
    } // end logout method
	}; // end return statement
});