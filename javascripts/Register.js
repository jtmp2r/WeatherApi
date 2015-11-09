define(["jquery", "lodash", "firebase", "login"], function($, lodash, Firebase, login) {
  $("#mainPage").hide();

  return {
    newUser: function() {

    var	newEmail = $("#emailRegister").val();
    var newPassword = $("#passwordRegister").val();

    var ref = new Firebase("https://yoreweather.firebaseio.com/");

    ref.createUser ({
    	email: newEmail,
    	password: newPassword
    }, function(error, userData) {
    	if (error) {
    		console.log("Error creating user ", error);
    	} else {
    		console.log("You have been born ", userData.uid);
    	}
    }
    ); 

    require(['hbs!../templates/loginPage'], function() {
      $("#loginContent").html();


    })  
  }

  }
	
});