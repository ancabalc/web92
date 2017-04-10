/* global $ */
$(document).ready(onHtmlLoaded);

function onHtmlLoaded() {
    var signupBtn = $("#signup_btn");
    var signupModel;
    signupBtn.on("click", function() {
        var nameValue = $("[name ='userName']").val();
        var emailValue = $("[name='user_email']").val();
        var passValue =$("[name='user_password']").val();
        var repassValue =$("[name='user_repass']").val();
        var roleValue = $("[name ='role']").val();
        var jobValue = $("[name ='job']").val();
        var descriptValue = $("[name ='userDescript']").val();
        var imgFile = $("#img")[0].files[0];
        
            signupModel = new Signup()
        var signupReq = signupModel.signUp({
            name: nameValue,
            email: emailValue,
            pass: passValue,
            repass: repassValue,
            role: roleValue,
            job: jobValue,
            userDescript: descriptValue,
            image: imgFile
        });
        
        signupReq.done(function(resp){
            redirectUserToHomepage();
        });
    });
    function redirectUserToHomepage() {
        
      if (signupModel.isCreated) {
             window.location.href = "https://web92-auxentiu.c9users.io/UI/pages/index.html";
      }
      else {
            alert ("Creation failed");
        }
    }
}