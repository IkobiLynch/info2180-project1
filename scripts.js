/* Add your JavaScript to this file */
"use strict";

window.onload = function(){
    var submit = document.getElementsByClassName("btn");
    var formInput = document.getElementById("email");
    var msg = document.getElementsByClassName("message");

    submit[1].addEventListener('click', function(event){
        event.preventDefault();

        if(formInput.value != "" && formInput.value.includes("@")){
            msg[0].innerHTML = "Thank you! Your email address "+ formInput.value + " has been added to our mailing list!"
        }
        else{
            msg[0].innerHTML = "Please enter a valid email address."
        }
    });

}
