define(["jquery", ], function($) {

	var ref = new Firebase(https://yoreweather.firebaseio.com/)

  return {
  	loginUser: function() {
  		newEmail = $("#").val();
  		newPassword = $("#").val();

  	ref.authWithPassword({
  		email: newEmail,
  		password: newPassword
  	}, function(error, authData) {
  		if (error) {
  			console.log("Didn't work", error)
		}, else {
			  console.log("Authenticated successfully with payload:", authData);
		}
  	}
  	);
   }
  }  //return ending
	
});