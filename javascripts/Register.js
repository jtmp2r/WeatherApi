define(["jquery", "lodash", "firebase"], function($, lodash, Firebase) {

  return {
    var newUser: function() {
    var	newEmail = $("#emailRegister").val();
    var newPassword = $("#passwordRegister").val();

    var ref = new Firebase("https://yoreweather.firebaseio.com/")

    ref.createUser ({
    	email: newEmail,
    	password: newPassword
    }, function(error, userData) {
    	if (error){
    		console.log("Error creating user ", error);
    	} else {
    		console.log("You have been born " userData.uid)
    	}
    }
    ); 

    require(['hbs!../templates/loginPage'], function(temp) {
      $("#loginContent").html(temp());


      $(document).on("click", "#register" function(e) {
        e.preventDefault();
        user.loginPage;

      })
    }  
  }

  }
	
});