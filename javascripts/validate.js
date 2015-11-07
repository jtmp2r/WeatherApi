define(function(require) {
  var $ = require("jquery");

  return {
    zipcode : function() {
      var zipcode;
      console.log("zipcode loaded");
      $("#zipCodeForm").keypress(function(){
        zipcode = $("#zipCodeForm").val();
        if (zipcode === "" || zipcode.length > 4 || zipcode.length < 4) {
          console.log("not valid bro");
          $("#zipSubmit").hide("fast");
        } else {
          console.log("valid 5 digi code baby!");
          $("#zipSubmit").attr("class", "col-sm-4 btn btn-success");
          $("#zipSubmit").show("fast");
        } // end else statement

      });
    } //end zipcode method
  }; //end return statement


});