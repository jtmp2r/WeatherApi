define(function(require) {
  var $ = require("jquery");

  return {
    //validate zipcode module
    zipcode : function() {
      var zipcode;
      //determine event listener and function to validate code
      $("#zipCodeForm").on("keyup", function(){
        zipcode = $("#zipCodeForm").val();
        if (zipcode === "" || zipcode.length > 5 || zipcode.length < 5) {
          $("#zipSubmit").hide("fast");
        } else {
          $("#zipSubmit").attr("class", "col-sm-4 btn btn-success");
          $("#zipSubmit").show("fast");
        } //end else statement
      }); //end event listener function
    } // end zipcode : function
  }; // end return statement
}); //end define
