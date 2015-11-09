define(["jquery"], function($) {

	var ref = new Firebase("https://yoreweather.firebaseio.com/");

  return {
    loginUser: function() {
      var userEmail = $("#userName").val();
      var userPassword = $("#passWord").val();

    ref.authWithPassword({
      email: userEmail,
      password: userPassword
    }, function(error, authData) {
        if (error) {
          console.log("Didn't work", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
        }
      });
    } //end loginUser
  };  //return ending
});