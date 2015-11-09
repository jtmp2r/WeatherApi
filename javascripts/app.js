/* jshint esnext: true */
requirejs.config({
  baseUrl: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
    "firebase" : "../lib/bower_components/firebase/firebase",
    "lodash" : "../lib/bower_components/lodash/lodash.min",
    "material": "../lib/bower_components/bootstrap-material-design/dist/js/material.min",
    "noUiSlider": "../lib/noUiSlider.8.0.2/nouislider.min",
    "q" : "../lib/bower_components/q/q"
  },
  shim: {
    "bootstrap": ["jquery"],
    "material": ["bootstrap"],
    "noUiSlider": ["jquery"],
    "firebase" : {exports: "Firebase"
    }
  }
});
define(["jquery", "validate", "q", "lodash", "hbs", "firebase", "Register", "login"], 
  function($, validate, q, lodash, hbs, Firebase, Register, login) {
  


  $("#zipSubmit").hide();
  validate.zipcode();


    $(document).on("click", "#register", function(e) {
      e.preventDefault();
      Register.newUser();
      $("#newRegister").hide();
      require(['hbs!../templates/loginPage'], function(loginTemp) {
        $("#loginContent").html(loginTemp);
    });  

  })


 });
