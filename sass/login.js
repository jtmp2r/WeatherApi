define(["jquery", "lodash", "firebase"], function($, lodash, Firebase) {

	return {
   var newUser: function() {
    var	newUserEm = $("#").val();
    var newUserPas = $("#").val();

    var ref = new Firebase(https://yoreweather.firebaseio.com/)

    ref.createUser ({
    	email: newUserEm,
    	password: newUserPas
    }, function(error, userData) {
    	if (error){
    		console.log("Error creating user ", error);
    	} else {
    		console.log("YOu have been born " userData.uid)
    	}
    }
    ); // end of createUser

    }

	}
	
});