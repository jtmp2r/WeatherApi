define(["jquery", "firebase"], function($, Firebase) {

	var ref = new Firebase("https://yoreweather.firebaseio.com/")

  return {
  	loginUser: function() {
  		userEmail = $("#userName").val();
  		userPassword = $("#passWord").val();

  	ref.authWithPassword({
  		email: userEmail,
  		password: userPassword
  	}, function(error, authData) {
  		if (error) {
  			console.log("Didn't work", error)
		} else {
			  console.log("Authenticated successfully with payload:", authData);
		   }
  	   } 


  	);
    }


  }  //return ending
	
});