/*global $*/
$(document).ready(onHtmlLoaded);
//always check if HTML is loaded before doing anything
//HTML operaations on view

function onHtmlLoaded() {
    var loginBtn = $("button[type='submit']");
    var loginModel;
   
    loginBtn.on("click", function(event) {
        event.preventDefault();
        var emailValue = $("[name='email-value']").val();
        var passValue =$("[name='password']").val();
        
        loginModel = new Users();
        var loginReq = loginModel.signIn({
            email: emailValue,
            pass: passValue
        });
       
        loginReq.done(function(resp){
            redirectUserToHomepage();
        });
    });
    function redirectUserToHomepage() {
        
        if (loginModel.isLogged) {
             window.location.href = "https://web92-auxentiu.c9users.io/UI/pages/index.html";
        }
        else {
            alert ("login failed");
        }
               

    }
}
